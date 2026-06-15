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
<main className="min-h-screen bg-white w-full max-w-5xl mx-auto pb-20">
      <CompanyDetail company={company} slug={slug} />
    </main>
  );
}