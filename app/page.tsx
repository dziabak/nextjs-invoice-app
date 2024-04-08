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

export default async function Home() {
	const latestInvoices = await fetchLatestInvoices();
	// console.log(latestInvoices);

	return (
		// <main className="flex min-h-screen flex-col items-center justify-between">
		<main className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
			{/* <Button className="bg-purple-500 rounded-full">+ New Invoice</Button> */}
			{/* <Table> */}
			{/* <TableCaption>A list of your recent invoices.</TableCaption> */}
			{/* <TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Invoice</TableHead>
						<TableHead>Status</TableHead>
						<TableHead>Method</TableHead>
						<TableHead className="text-right">Amount</TableHead>
					</TableRow>
				</TableHeader> */}
			{/* <TableBody>
					<TableRow className="bg-slate-100 rounded-lg">
						<TableCell>#<span className="font-bold">INV001</span></TableCell>
						<TableCell>Due 20 Sep 2021</TableCell>
						<TableCell>Alex Grim</TableCell>
						<TableCell className="text-right font-bold">$250.00</TableCell>
						<TableCell>
							<Badge className="rounded-sm bg-emerald-100 text-emerald-500">
								Paid
							</Badge>
						</TableCell>
					</TableRow>
				</TableBody> */}
			{/* </Table> */}
			{/* <div className="flex justify-between items-center p-6 space-x-12 rounded-md bg-white shadow-sm transition-shadow hover:shadow-md">
				<div className="flex items-center space-x-4">
					<p className="text-slate-400">
						#<span className="text-black font-bold">INV001</span>
					</p>
					<p className="text-slate-400">Due 20 Sep 2021</p>
					<p className="text-slate-400">Alex Grim</p>
				</div>
				<div className="flex items-center space-x-4">
					<p className="font-bold">$250.00</p>
					<p className="px-2 py-1 rounded-sm bg-emerald-100 text-emerald-500 font-semibold text-center">
						Paid
					</p>
					<p>#</p>
				</div>
			</div> */}
			<div className="space-y-4">
				{latestInvoices.map((invoice) => {
					return (
						<div
							key={invoice.id}
							className="flex justify-between items-center p-6 space-x-12 rounded-md bg-white shadow-sm transition-shadow hover:shadow-md">
							<div className="flex items-center space-x-4">
								<p className="text-slate-400">
									#<span className="text-black font-bold">{invoice.id}</span>
								</p>
								<p className="text-slate-400">Due 20 Sep 2021</p>
								<p className="text-slate-400">{invoice.name}</p>
							</div>
							<div className="flex items-center space-x-4">
								<p className="font-bold">{invoice.amount}</p>
								<p className="px-2 py-1 rounded-sm bg-emerald-100 text-emerald-500 font-semibold text-center">
									Paid
								</p>
								<p>#</p>
							</div>
						</div>
					);
				})}
			</div>
		</main>
	);
}
