import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { fetchInvoiceById, fetchCustomers } from "@/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
	const id = params.id;
	const [invoice, customers] = await Promise.all([
		fetchInvoiceById(id),
		fetchCustomers(),
	]);

	const customerName = customers.filter((customer) => {
		return customer.id === invoice.customer_id;
	});

	// console.log(customerName);

	return (
		// <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
		<main className="container space-y-4">
			<Card className="shadow-sm">
				<div className="flex items-center justify-between p-4 space-x-4">
					<p className="text-slate-400 font-medium">Status</p>
					<div className="flex items-center justify-center w-20 px-2 py-1 rounded-sm bg-emerald-100 text-emerald-500 font-semibold text-center capitalize">
						<div className="w-1 p-1 mr-1 bg-emerald-500 rounded-full"></div>
						{invoice.status}
					</div>
				</div>
			</Card>
			<Card className="p-8 space-y-4 w-full">
				<div className="space-y-4 md:flex md:justify-between">
					<div>
						<p className="font-bold">{invoice.id}</p>
						<p className="text-slate-400">Graphic Design</p>
					</div>
					<div className="text-slate-400 md:text-right">
						<p>19 Union Terrace</p>
						<p>London</p>
						<p>E1 3EZ</p>
						<p>United Kingdom</p>
					</div>
				</div>
				<div className="space-y-4 md:flex md:space-y-0">
					<div className="flex justify-between md:justify-normal md:w-2/3">
						<div className="flex flex-col justify-between md:w-1/2">
							<div>
								<p className="text-slate-400">Invoice Date</p>
								<p className="font-bold">21 Aug 2021</p>
							</div>
							<div>
								<p className="text-slate-400">Payment Due</p>
								<p className="font-bold">20 Sep 2021</p>
							</div>
						</div>
						<div className="md:w-1/2">
							<p className="text-slate-400">Bill To</p>
							<p className="font-bold">Alex Grim</p>
							<p className="text-slate-400">84 Church Way</p>
							<p className="text-slate-400">Bradford</p>
							<p className="text-slate-400">BD1 9PB</p>
							<p className="text-slate-400">United Kingdom</p>
						</div>
					</div>
					<div className="md:w-1/3">
						<p className="text-slate-400">Sent to</p>
						{customerName.map((customer) => (
							<p key={customer.id} className="font-bold">
								{customer.name}
							</p>
						))}
					</div>
				</div>
				<div className="bg-c-background rounded-lg">
					<div className="p-8">
						<div className="grid grid-cols-2">
							<div className="font-bold">
								<p>Banner Design</p>
								<p className="text-slate-400">1 x $156.00</p>
							</div>
							<div className="flex items-center justify-end font-bold">
								<p>$156.00</p>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between p-8 bg-slate-700 text-white rounded-b-lg">
						<p className="font-medium">Grand Total</p>
						<p className="text-3xl font-bold">${invoice.amount}</p>
					</div>
				</div>
			</Card>
		</main>
	);
}
