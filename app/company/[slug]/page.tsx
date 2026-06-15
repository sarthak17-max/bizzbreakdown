import { companyData } from "../../../src/companyData";
import CompanyDetail from "../../../src/components/CompanyDetail";
import { notFound } from "next/navigation";

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = companyData[slug];

  if (!company) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white max-w-md mx-auto pb-2">
      <CompanyDetail company={company} slug={slug} />
    </main>
  );
}