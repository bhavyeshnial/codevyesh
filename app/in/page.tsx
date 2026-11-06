
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Codevyesh India – Web Development, Digital Innovation & IT Solutions",
  description:
    "Discover Codevyesh India for web development, digital innovation, and IT solutions.",
};

export default function IndiaPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "60px 24px",
        textAlign: "center",
        background: "#f8fafc",
        color: "#111827",
      }}
    >
      <h1>Welcome to Codevyesh India 🇮🇳</h1>

      <p>Your dedicated website for India.</p>

      <Link href="/" style={{ color: "#2563eb" }}>
        Visit Main Website
      </Link>
    </main>
  );
}
