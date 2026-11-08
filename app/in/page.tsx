
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Codevyesh India – Testing Page",
  description: "Testing whether both domains show the same content.",
};

export default function IndiaPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px 24px",
        textAlign: "center",
        background: "#fef3c7",
        color: "#111827",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>🧪 WEBSITE TEST — INDIA VERSION</h1>

      <h2>Codevyesh India 🇮🇳</h2>

      <p>TEST ID: INDIA-2026-001</p>

      <p>
        If you can see this yellow page, the India test
        page is working correctly.
      </p>

      <p>
        Domain: codevyesh.in
      </p>

      <Link
        href="/"
        style={{ color: "#2563eb", fontWeight: "bold" }}
      >
        Visit Main Website
      </Link>
    </main>
  );
}
