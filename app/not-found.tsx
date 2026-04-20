import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-brand-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-heading">Page not found.</h2>
        <p className="mt-2 text-body">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 h-11 px-6 text-sm font-medium rounded-full bg-brand-primary text-white transition-all duration-300 hover:bg-brand-primary-hover"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
