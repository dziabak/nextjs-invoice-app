import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

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
		<main className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
			{/* <p>42423424234234234234234234234242423: {invoice.amount}</p>
			<p>42423424234234234234234234234242423: {invoice.customer_id}</p>
			<p>42423424234234234234234234234242423: {invoice.id}</p>
			<p>42423424234234234234234234234242423: {invoice.status}</p> */}
			{/* <p>42423424234234234234234234234242423: {customers}</p> */}
			{/* {customerName.map((customer) => (
				<p key={customer.id}>111111111111111111111111:{customer.name}</p>
			))} */}
			<Card>
				<div className="flex items-center justify-between p-4 space-x-4">
					<p className="text-slate-400 font-medium">Status</p>
					<div className="flex items-center justify-center w-20 px-2 py-1 rounded-sm bg-emerald-100 text-emerald-500 font-semibold text-center capitalize">
						<div className="w-1 p-1 mr-1 bg-emerald-500 rounded-full"></div>
						{invoice.status}
					</div>
				</div>
			</Card>
			<Card className="p-8 space-y-4">
				<div>
					<div>
						<p className="font-bold">{invoice.id}</p>
						<p className="text-slate-400">Graphic Design</p>
					</div>
					<div>
						<p className="text-slate-400">19 Union Terrace</p>
						<p className="text-slate-400">London</p>
						<p className="text-slate-400">E1 3EZ</p>
						<p className="text-slate-400">United Kingdom</p>
					</div>
				</div>
				<div className="flex justify-between">
					<div className="flex flex-col justify-between">
						<div>
							<p className="text-slate-400">Invoice Date</p>
							<p className="font-bold">21 Aug 2021</p>
						</div>
						<div>
							<p className="text-slate-400">Payment Due</p>
							<p className="font-bold">20 Sep 2021</p>
						</div>
					</div>
					<div>
						<p className="text-slate-400">Bill To</p>
						<p className="font-bold">Alex Grim</p>
						<p className="text-slate-400">84 Church Way</p>
						<p className="text-slate-400">Bradford</p>
						<p className="text-slate-400">BD1 9PB</p>
						<p className="text-slate-400">United Kingdom</p>
					</div>
				</div>
				<div>
					<p className="text-slate-400">Sent to</p>
					{customerName.map((customer) => (
						<p key={customer.id} className="font-bold">
							{customer.name}
						</p>
					))}
				</div>
			</Card>
		</main>
	);
}
