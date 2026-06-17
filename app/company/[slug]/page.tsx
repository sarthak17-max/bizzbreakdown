import { getCompanyBySlug } from "../../../src/lib/companies";
import CompanyDetail from "../../../src/components/CompanyDetail";
import BottomNav from "../../../src/components/BottomNav";
import { notFound } from "next/navigation";

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = await getCompanyBySlug(slug);

  if (!company) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white w-full max-w-5xl mx-auto pb-20">
      <CompanyDetail company={company} slug={slug} />
      <BottomNav />
    </main>
  );
}