import { Router } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

const router = Router();

const contactSchema = z.object({
  name: z.string().min(1, "Imię jest wymagane"),
  phone: z.string().min(1, "Telefon jest wymagany"),
  message: z.string().min(1, "Wiadomość jest wymagana"),
});

router.get("/", async (_req: any, res: any): Promise<void> => {
  res.json({ success: true });
});

router.post("/contact", async (req: any, res: any): Promise<void> => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({
      error: "Nieprawidłowe dane formularza",
      details: parsed.error.issues,
    });
    return;
  }

  const { name, phone, message } = parsed.data;

  const gmailUser = process.env["GMAIL_USER"];
  const gmailPass = process.env["GMAIL_APP_PASSWORD"];
  const recipientEmail = process.env["CONTACT_EMAIL"] ?? gmailUser;

  if (!gmailUser || !gmailPass) {
    res.status(500).json({
      error: "Serwer nie jest skonfigurowany do wysyłania maili",
    });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Strona mieszkania" <${gmailUser}>`,
      to: recipientEmail,
      subject: `Nowe zapytanie o mieszkanie od: ${name}`,
      text: `Imię i nazwisko: ${name}\nTelefon: ${phone}\n\nWiadomość:\n${message}`,
      html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e293b; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px;">
              Nowe zapytanie o mieszkanie
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 140px;">Imię i nazwisko:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;">Telefon:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #1e293b;">${phone}</td>
              </tr>
            </table>
            <div style="margin-top: 16px;">
              <p style="color: #64748b; margin-bottom: 8px;">Wiadomość:</p>
              <div style="background: #f8fafc; border-left: 4px solid #334155; padding: 12px 16px; color: #1e293b; white-space: pre-wrap;">${message}</div>
            </div>
            <p style="margin-top: 24px; color: #94a3b8; font-size: 12px;">
              Wiadomość wysłana ze strony ogłoszenia mieszkania.
            </p>
          </div>
        `,
    });

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({
      error: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
    });
  }
});

export default router;
