import { lusitana } from "@/app/ui/fonts";
import { Metadata } from "next";

import Table from "@/app/ui/customers/table";
import { fetchCustomersPages } from "@/app/lib/data";
import Pagination from "@/app/ui/invoices/pagination";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function CustomersPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const { totalPages, totalCustomers } = await fetchCustomersPages(query);

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        {totalCustomers} {totalCustomers === 1 ? "customer" : "customers"}
      </h1>
      <Table query={query} currentPage={currentPage} />
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
