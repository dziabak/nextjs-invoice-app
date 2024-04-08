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

	console.log(customerName);

	return (
		<main>
			<p>42423424234234234234234234234242423: {invoice.amount}</p>
			<p>42423424234234234234234234234242423: {invoice.customer_id}</p>
			<p>42423424234234234234234234234242423: {invoice.id}</p>
			<p>42423424234234234234234234234242423: {invoice.status}</p>
			{/* <p>42423424234234234234234234234242423: {customers}</p> */}
			{customerName.map((customer) => (
				<p key={customer.id}>111111111111111111111111:{customer.name}</p>
			))}
		</main>
	);
}
