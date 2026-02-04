import { NextResponse } from "next/server";
import { contactSchema, sendNotification } from "@/lib/notifications";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Validate input
        const result = contactSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: "Validation failed", details: result.error.flatten() },
                { status: 400 }
            );
        }

        // Send notification (Lead Capture)
        const notificationResult = await sendNotification(result.data);

        if (!notificationResult.success) {
            console.error("Failed to send notification:", notificationResult.error);
            return NextResponse.json(
                { error: "Failed to process request" },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, message: "Lead captured successfully" });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
