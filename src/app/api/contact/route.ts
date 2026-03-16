import { wixClient } from "@/lib/wix";

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, message } = body;

  console.log(process.env.WIX_FORM_ID, firstName, lastName, email, message);

  try {
    // Create CRM contact
    await wixClient.contacts.createContact(
      {
        name: { first: firstName, last: lastName },
        emails: { items: [{ email }] },
        labelKeys: { items: ["custom.contact-us"] },
      },
      { allowDuplicates: true }
    );

    // Submit to Wix Forms
    await wixClient.submissions.createSubmission({
      formId: process.env.WIX_FORM_ID!,
      submissions: {
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "message": message,
      },
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
