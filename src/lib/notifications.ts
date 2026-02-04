import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation Schema
export const contactSchema = z.object({
    name: z.string().min(2, "Le nom est requis"),
    phone: z.string().min(10, "Numéro de téléphone invalide"),
    email: z.string().email().optional().or(z.literal("")),
    propertyType: z.string().optional(),
    city: z.string().optional(),
    situation: z.string().optional(),
    message: z.string().optional(),
    source: z.enum(["hero", "contact", "whatsapp"]).default("contact"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

interface NotificationResult {
    success: boolean;
    error?: string;
}

/**
 * Mock Service for initial implementation
 * In production, this would use Resend/Nodemailer/Telegram API
 */
export async function sendNotification(data: ContactFormData): Promise<NotificationResult> {
    console.log("🔔 [NEW LEAD RECEIVED] Sending to contact@rachatmaison.ca via Telegram/Email", data);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // TODO: Add real integration here
    // await sendTelegramMessage(data);
    // await sendEmail(data);

    return { success: true };
}
