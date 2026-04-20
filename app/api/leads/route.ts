import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_PRODUCTS = ["edsyft", "healthsyft", "finsyft", "all"];

interface LeadRequestBody {
  full_name: string;
  email: string;
  job_title: string;
  phone?: string;
  company: string;
  product_interest: string;
  message?: string;
}

function validateBody(
  body: unknown
):
  | { valid: true; data: LeadRequestBody }
  | { valid: false; error: string; status: number } {
  if (!body || typeof body !== "object") {
    return {
      valid: false,
      error: "Request body must be a JSON object.",
      status: 400,
    };
  }

  const { full_name, email, job_title, phone, company, product_interest, message } =
    body as Record<string, unknown>;

  if (
    !full_name ||
    typeof full_name !== "string" ||
    full_name.trim().length < 2
  ) {
    return {
      valid: false,
      error: "Full name is required and must be at least 2 characters.",
      status: 400,
    };
  }

  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return {
      valid: false,
      error: "A valid email address is required.",
      status: 400,
    };
  }

  if (
    !job_title ||
    typeof job_title !== "string" ||
    job_title.trim().length < 2
  ) {
    return {
      valid: false,
      error: "Job title is required and must be at least 2 characters.",
      status: 400,
    };
  }

  if (phone !== undefined && phone !== "") {
    if (typeof phone !== "string") {
      return {
        valid: false,
        error: "Phone number must be a string if provided.",
        status: 400,
      };
    }
    const cleaned = phone.replace(/[\s\-\(\)\.]/g, "");
    if (cleaned.length < 7 || cleaned.length > 20 || !/^\+?[0-9]+$/.test(cleaned)) {
      return {
        valid: false,
        error: "Please provide a valid phone number.",
        status: 400,
      };
    }
  }

  if (
    !company ||
    typeof company !== "string" ||
    company.trim().length < 1
  ) {
    return {
      valid: false,
      error: "Company/organization name is required.",
      status: 400,
    };
  }

  if (
    !product_interest ||
    typeof product_interest !== "string" ||
    !VALID_PRODUCTS.includes(product_interest.toLowerCase())
  ) {
    return {
      valid: false,
      error: "Product interest must be one of: EdSyft, HealthSyft, FinSyft, All Products.",
      status: 400,
    };
  }

  if (message !== undefined && typeof message !== "string") {
    return {
      valid: false,
      error: "Message must be a string if provided.",
      status: 400,
    };
  }

  return {
    valid: true,
    data: {
      full_name: full_name.trim(),
      email: email.trim().toLowerCase(),
      job_title: job_title.trim(),
      phone: phone && typeof phone === "string" && phone.trim() ? phone.trim() : undefined,
      company: company.trim(),
      product_interest: product_interest.toLowerCase(),
      message: message ? message.trim() : undefined,
    },
  };
}

export async function GET() {
  try {
    const result = await pool.query(
      `SELECT id, full_name, email, job_title, phone, company, product_interest, message, created_at
       FROM leads
       ORDER BY created_at DESC`
    );

    return NextResponse.json({
      success: true,
      count: result.rows.length,
      data: result.rows,
    });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch leads." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = validateBody(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: validation.status }
      );
    }

    const { full_name, email, job_title, phone, company, product_interest, message } =
      validation.data;

    const result = await pool.query(
      `INSERT INTO leads (full_name, email, job_title, phone, company, product_interest, message)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, created_at`,
      [full_name, email, job_title, phone ?? null, company, product_interest, message ?? null]
    );

    const insertedLead = result.rows[0];

    return NextResponse.json(
      {
        success: true,
        data: {
          id: insertedLead.id,
          full_name,
          email,
          job_title,
          phone,
          company,
          product_interest,
          message,
          created_at: insertedLead.created_at,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating lead:", error);

    if (error instanceof Error && error.message.includes("duplicate")) {
      return NextResponse.json(
        { success: false, error: "This email has already been submitted." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
