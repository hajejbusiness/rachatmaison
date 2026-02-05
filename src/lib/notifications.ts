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

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends a real email using Resend
 */
export async function sendNotification(data: ContactFormData): Promise<NotificationResult> {
    console.log("🔔 [NEW LEAD] Processing email via Resend...", data);

    if (!process.env.RESEND_API_KEY) {
        console.error("❌ RESEND_API_KEY is missing");
        return { success: false, error: "Configuration Error: Missing API Key" };
    }

    try {
        // NOTE: Using onboarding@resend.dev + account email (hajejbusiness@gmail.com)
        // is required for the free/test tier without domain verification.
        const { data: emailData, error } = await resend.emails.send({
            from: 'RachatMaison <onboarding@resend.dev>',
            to: ['hajejbusiness@gmail.com'],
            subject: `🔔 Nouveau Lead: ${data.name} (${data.situation || 'Général'})`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h1 style="color: #E65100;">Nouveau Prospect RachatMaison.ca</h1>
                    <p style="font-size: 16px;">Un nouveau formulaire a été soumis sur le site.</p>
                    
                    <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Nom:</strong> ${data.name}</p>
                        <p><strong>Téléphone:</strong> <a href="tel:${data.phone}" style="color: #0066cc; font-weight: bold;">${data.phone}</a></p>
                        <p><strong>Email:</strong> ${data.email || 'Non spécifié'}</p>
                        <p><strong>Code Postal/Ville:</strong> ${data.city || 'Non spécifié'}</p>
                        <p><strong>Situation:</strong> ${data.situation || 'Non spécifié'}</p>
                        <p><strong>Type de propriété:</strong> ${data.propertyType || 'Non spécifié'}</p>
                    </div>

                    ${data.message ? `
                    <div style="border-left: 4px solid #ddd; padding-left: 15px; margin-top: 20px;">
                        <p><strong>Message:</strong></p>
                        <p style="font-style: italic;">"${data.message}"</p>
                    </div>
                    ` : ''}

                    <div style="margin-top: 30px; font-size: 12px; color: #888;">
                        <p>Ce lead vient de : ${data.source}</p>
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error("❌ Resend API Error:", error);
            return { success: false, error: error.message };
        }

        console.log("✅ Email sent successfully:", emailData);
        return { success: true };

    } catch (e) {
        console.error("❌ Unexpected Email Error:", e);
        return { success: false, error: "Internal Sending Error" };
    }
}
