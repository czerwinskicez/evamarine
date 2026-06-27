import { company } from "../../data/site";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  address?: string;
  subject?: string;
  message?: string;
  company?: string;
};

const maxLength = 3000;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ ok: false, error: "Nieprawidłowe dane formularza." }, { status: 400 });
  }

  if (payload.company) {
    return Response.json({ ok: true });
  }

  const firstName = clean(payload.firstName);
  const lastName = clean(payload.lastName);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const address = clean(payload.address);
  const subject = clean(payload.subject);
  const message = clean(payload.message, maxLength);

  if (!firstName || !email || !subject || !message) {
    return Response.json(
      { ok: false, error: "Uzupełnij imię, e-mail, temat i wiadomość." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: "Podaj poprawny adres e-mail." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = getRecipients();

  if (!apiKey || !from) {
    return Response.json(
      {
        ok: false,
        error: "Formularz nie jest jeszcze skonfigurowany. Brakuje RESEND_API_KEY lub RESEND_FROM.",
      },
      { status: 500 },
    );
  }

  const emailBody = [
    `Nowa wiadomość z formularza EVA Marine`,
    ``,
    `Imię i nazwisko: ${[firstName, lastName].filter(Boolean).join(" ")}`,
    `E-mail: ${email}`,
    `Telefon: ${phone || "nie podano"}`,
    `Adres / port: ${address || "nie podano"}`,
    `Temat: ${subject}`,
    ``,
    `Wiadomość:`,
    message,
  ].join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `EVA Marine: ${subject}`,
      text: emailBody,
    }),
  });

  if (!resendResponse.ok) {
    return Response.json(
      { ok: false, error: "Nie udało się wysłać wiadomości. Spróbuj ponownie lub zadzwoń." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}

function clean(value: unknown, limit = 200) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, limit);
}

function getRecipients() {
  const configuredRecipients = process.env.CONTACT_TO?.split(",")
    .map((recipient) => recipient.trim())
    .filter(Boolean);

  return configuredRecipients?.length ? configuredRecipients : company.contactRecipients;
}
