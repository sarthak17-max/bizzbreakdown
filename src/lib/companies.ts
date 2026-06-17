import { supabase } from "./supabaseClient";

export async function getAllCompanies() {
  const { data, error } = await supabase
    .from("companies")
    .select("*")
    .order("name", { ascending: true });

  if (error) {
    console.error("Error fetching companies:", error);
    return [];
  }

  return data;
}

export async function getCompanyBySlug(slug: string) {
  const { data, error } = await supabase
    .from("companies")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching company:", error);
    return null;
  }

  return data;
}