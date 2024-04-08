import { sql } from "@vercel/postgres";
import {
	CustomerField,
	CustomersTableType,
	InvoiceForm,
	InvoicesTable,
	LatestInvoiceRaw,
	User,
	Revenue,
} from "./definitions";
import { formatCurrency } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchLatestInvoices() {
	noStore();
	try {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const data = await sql<LatestInvoiceRaw>`
        SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id, invoices.status
        FROM invoices
        JOIN customers ON invoices.customer_id = customers.id
        ORDER BY invoices.date DESC
        LIMIT 5`;

		const latestInvoices = data.rows.map((invoice) => ({
			...invoice,
			amount: formatCurrency(invoice.amount),
		}));
		return latestInvoices;
	} catch (error) {
		console.error("Database Error:", error);
		throw new Error("Failed to fetch the latest invoices.");
	}
}

export async function fetchInvoiceById(id: string) {
	noStore();
	try {
		const data = await sql<InvoiceForm>`
        SELECT
          invoices.id,
          invoices.customer_id,
          invoices.amount,
          invoices.status
        FROM invoices
        WHERE invoices.id = ${id};
      `;

		const invoice = data.rows.map((invoice) => ({
			...invoice,
			// Convert amount from cents to dollars
			amount: invoice.amount / 100,
		}));

		return invoice[0];
	} catch (error) {
		console.error("Database Error:", error);
		throw new Error("Failed to fetch invoice.");
	}
}

export async function fetchCustomers() {
	noStore();
	try {
		const data = await sql<CustomerField>`
        SELECT
          id,
          name
        FROM customers
        ORDER BY name ASC
      `;

		const customers = data.rows;
		return customers;
	} catch (err) {
		console.error("Database Error:", err);
		throw new Error("Failed to fetch all customers.");
	}
}
