import { EmailTemplate } from "@/app/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
	try {
		const data = await resend.emails.send({
			from: "Schuster <schuster@siux.app>",
			to: ["ostleadm32@gmail.com"],
			subject: "Hello world",
			react: EmailTemplate({ firstName: "John" }),
		});

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error });
	}
}
