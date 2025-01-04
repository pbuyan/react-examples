"use client";
import type React from "react";
import { useState } from "react";

interface PhoneBookEntry {
	userFirstname: string;
	userLastname: string;
	userPhone: string;
}

const style = {
	table: {
		borderCollapse: "collapse",
	} as React.CSSProperties,
	tableCell: {
		border: "1px solid gray",
		margin: 0,
		padding: "5px 10px",
		width: "max-content",
		minWidth: "150px",
	} as React.CSSProperties,
	form: {
		container: {
			padding: "20px",
			border: "1px solid #F0F8FF",
			borderRadius: "15px",
			width: "max-content",
			marginBottom: "40px",
		} as React.CSSProperties,
		inputs: {
			marginBottom: "5px",
		} as React.CSSProperties,
		submitBtn: {
			marginTop: "10px",
			padding: "10px 15px",
			border: "none",
			backgroundColor: "lightseagreen",
			fontSize: "14px",
			borderRadius: "5px",
		} as React.CSSProperties,
	},
};

function PhoneBookForm({
	addEntryToPhoneBook,
}: {
	addEntryToPhoneBook: (entry: PhoneBookEntry) => void;
}) {
	const [formData, setFormData] = useState<PhoneBookEntry>({
		userFirstname: "Coder",
		userLastname: "Byte",
		userPhone: "8885559999",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addEntryToPhoneBook(formData);
		setFormData({ userFirstname: "", userLastname: "", userPhone: "" });
	};

	return (
		<form onSubmit={handleSubmit} style={style.form.container}>
			<label htmlFor="userFirstname">First name:</label>
			<br />
			<input
				style={style.form.inputs}
				className="userFirstname"
				id="userFirstname"
				name="userFirstname"
				type="text"
				value={formData.userFirstname}
				onChange={handleChange}
			/>
			<br />
			<label htmlFor="userLastname">Last name:</label>
			<br />
			<input
				style={style.form.inputs}
				className="userLastname"
				id="userLastname"
				name="userLastname"
				type="text"
				value={formData.userLastname}
				onChange={handleChange}
			/>
			<br />
			<label htmlFor="userPhone">Phone:</label>
			<br />
			<input
				style={style.form.inputs}
				className="userPhone"
				id="userPhone"
				name="userPhone"
				type="text"
				value={formData.userPhone}
				onChange={handleChange}
			/>
			<br />
			<input
				style={style.form.submitBtn}
				className="submitButton"
				type="submit"
				value="Add User"
			/>
		</form>
	);
}

function InformationTable({
	phoneBookEntries,
}: { phoneBookEntries: PhoneBookEntry[] }) {
	return (
		<table style={style.table} className="informationTable">
			<thead>
				<tr>
					<th style={style.tableCell}>First name</th>
					<th style={style.tableCell}>Last name</th>
					<th style={style.tableCell}>Phone</th>
				</tr>
			</thead>
			<tbody>
				{phoneBookEntries.map((entry, index) => (
					<tr key={`${entry.userLastname}-${index}`}>
						<td style={style.tableCell}>{entry.userFirstname}</td>
						<td style={style.tableCell}>{entry.userLastname}</td>
						<td style={style.tableCell}>{entry.userPhone}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

const PhoneBook = () => {
	const [phoneBookEntries, setPhoneBookEntries] = useState<PhoneBookEntry[]>(
		[],
	);

	const addEntryToPhoneBook = (entry: PhoneBookEntry) => {
		setPhoneBookEntries((prev) => {
			const updatedEntries = [...prev, entry];
			return updatedEntries.sort((a, b) =>
				a.userLastname.localeCompare(b.userLastname),
			);
		});
	};

	return (
		<section>
			<PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
			<InformationTable phoneBookEntries={phoneBookEntries} />
		</section>
	);
};

export default PhoneBook;
