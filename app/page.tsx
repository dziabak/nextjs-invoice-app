import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { fetchLatestInvoices } from "@/lib/data";
import Link from "next/link";

export default async function Home() {
	const latestInvoices = await fetchLatestInvoices();
	// console.log(latestInvoices);

	return (
		<main className="container">
			{/* // <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100"> */}
			<div className="space-y-4">
				<div className="py-8 flex justify-between items-center">
					<div>
						<h1 className="text-2xl font-bold tracking-tighter">Invoices</h1>
						<p className="text-sm text-c-grey font-medium">
							{latestInvoices.length} invoices
						</p>
					</div>
					<Link
						href="/invoices/new"
						className="flex items-center p-3 rounded-full font-bold text-white bg-c-purple transition-colors hover:bg-c-purple-hover">
						<div className="p-3 mr-2 bg-white rounded-full">
							<Image
								src="/assets/icon-plus.svg"
								width={11}
								height={11}
								alt="Plus sign icon"
								className=""></Image>
						</div>
						New
					</Link>
				</div>
				{latestInvoices.map((invoice) => {
					return (
						<Link
							href={`/invoices/${invoice.id}`}
							key={invoice.id}
							className="flex flex-col justify-between items-center p-6 space-y-4 rounded-md bg-white border border-white transition-all hover:shadow-md hover:border-purple-500">
							<div className="flex justify-between items-center w-full">
								<p className="text-slate-400">
									#
									<span className="text-black font-bold">
										{invoice.id.slice(0, 8)}
									</span>
								</p>
								{/* <p className="text-slate-400">Due 20 Sep 2021</p> */}
								<p className="text-slate-400">{invoice.name}</p>
							</div>
							<div className="flex justify-between items-center w-full">
								<div>
									<p className="text-slate-400">Due 20 Sep 2021</p>
									<p className="font-bold">{invoice.amount}</p>
								</div>
								<div className="flex items-center justify-center w-20 px-2 py-1 rounded-sm bg-emerald-100 text-emerald-500 font-semibold text-center capitalize">
									<div className="w-1 p-1 mr-1 bg-emerald-500 rounded-full"></div>
									<p>{invoice.status}</p>
								</div>
								<Image
									src="/assets/icon-arrow-right.svg"
									width={7}
									height={10}
									alt="Arrow icon pointing right"
									className="hidden md:block"></Image>
							</div>
						</Link>
					);
				})}
			</div>
		</main>
	);
}
