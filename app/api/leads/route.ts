export const runtime = 'edge';

import { NextRequest, NextResponse } from "next/server";

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

  if (!full_name || typeof full_name !== "string" || full_name.trim().length < 2) {
    return { valid: false, error: "Full name is required.", status: 400 };
  }

  if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return { valid: false, error: "Valid email required.", status: 400 };
  }

  if (!job_title || typeof job_title !== "string") {
    return { valid: false, error: "Job title required.", status: 400 };
  }

  if (!company || typeof company !== "string") {
    return { valid: false, error: "Company required.", status: 400 };
  }

  if (
    !product_interest ||
    typeof product_interest !== "string" ||
    !VALID_PRODUCTS.includes(product_interest.toLowerCase())
  ) {
    return { valid: false, error: "Invalid product.", status: 400 };
  }

  return {
    valid: true,
    data: {
      full_name: full_name.trim(),
      email: email.trim().toLowerCase(),
      job_title: job_title.trim(),
      phone: phone as string | undefined,
      company: company.trim(),
      product_interest: product_interest.toLowerCase(),
      message: message as string | undefined,
    },
  };
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "GET working (no DB in edge yet)",
    data: [],
  });
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

    // 🚫 DB REMOVED (Edge unsupported)
    // ✅ Temporary success response

    return NextResponse.json(
      {
        success: true,
        message: "Lead received successfully (temporary, no DB)",
        data: validation.data,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}