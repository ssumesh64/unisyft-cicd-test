"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-heading">Oops.</h1>
        <h2 className="mt-4 text-xl font-semibold text-heading">Something went wrong.</h2>
        <p className="mt-2 text-body">
          {error.message || "An unexpected error occurred."}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium rounded-full bg-brand-primary text-white transition-all duration-300 hover:bg-brand-primary-hover"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium rounded-full border border-border text-heading transition-all duration-300 hover:bg-surface-hover"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
