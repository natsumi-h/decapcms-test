import type { APIRoute } from "astro";

export const prerender = false;

// export const POST: APIRoute = async({ request, redirect });
export const POST: APIRoute = async ({ request }) => {
  const portalId = import.meta.env.PORTAL_ID;
  const formGuid = import.meta.env.FORM_ID;
  /* Get form data */
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const firstname = formData.get("firstname")?.toString();
  const lastname = formData.get("lastname")?.toString();
  const company = formData.get("company")?.toString();
  const contact = formData.get("contact")?.toString();
  const interest = formData.get("interest")?.toString();
  const heardfrom = formData.get("heardfrom")?.toString();
  const message = formData.get("message")?.toString();

  //   if (!email || !password || !name) {
  //     return new Response("データが見つかりません", { status: 400 });
  //   }

  try {
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: [
            {
              objectTypeId: "0-1",
              name: "email",
              value: email,
            },
            {
              objectTypeId: "0-1",
              name: "firstname",
              value: firstname,
            },
            {
              objectTypeId: "0-1",
              name: "lastname",
              value: lastname,
            },
            {
              objectTypeId: "0-1",
              name: "company",
              value: company,
            },
            {
              objectTypeId: "0-1",
              name: "phone",
              value: contact,
            },
            {
              objectTypeId: "0-1",
              name: "interest",
              value: interest,
            },
            {
              objectTypeId: "0-1",
              name: "heardfrom",
              value: heardfrom,
            },
            {
              objectTypeId: "0-1",
              name: "message",
              value: message,
            },
          ],
        }),
      }
    );
    const data = await res.json();
    console.log(data);

    if (!res.ok) {
      return new Response("Server error", { status: 500 });
    }
    return new Response("Success", { status: 200 });
  } catch (error: any) {
    console.log(error);

    return new Response("Something went wrong", { status: 400 });
  }
  //   return redirect("/signin");
};
//
