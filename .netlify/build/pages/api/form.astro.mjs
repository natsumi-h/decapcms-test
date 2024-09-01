export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request }) => {
  const portalId = "47226251";
  const formGuid = "60cff913-c749-44e2-a352-17635a6152be";
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const firstname = formData.get("firstname")?.toString();
  const lastname = formData.get("lastname")?.toString();
  const company = formData.get("company")?.toString();
  const contact = formData.get("contact")?.toString();
  const interest = formData.get("interest")?.toString();
  const heardfrom = formData.get("heardfrom")?.toString();
  const message = formData.get("message")?.toString();
  try {
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fields: [
            {
              objectTypeId: "0-1",
              name: "email",
              value: email
            },
            {
              objectTypeId: "0-1",
              name: "firstname",
              value: firstname
            },
            {
              objectTypeId: "0-1",
              name: "lastname",
              value: lastname
            },
            {
              objectTypeId: "0-1",
              name: "company",
              value: company
            },
            {
              objectTypeId: "0-1",
              name: "phone",
              value: contact
            },
            {
              objectTypeId: "0-1",
              name: "interest",
              value: interest
            },
            {
              objectTypeId: "0-1",
              name: "heardfrom",
              value: heardfrom
            },
            {
              objectTypeId: "0-1",
              name: "message",
              value: message
            }
          ]
        })
      }
    );
    const data = await res.json();
    console.log(data);
    if (!res.ok) {
      return new Response("Server error", { status: 500 });
    }
    return new Response("Success", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 400 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
