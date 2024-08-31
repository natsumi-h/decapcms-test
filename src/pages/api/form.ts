import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const portalId = import.meta.env.PORTAL_ID;
  const formGuid = import.meta.env.FORM_ID;
  /* Get form data */
  // const formData = await request.formData();

  // const email = formData.get("email")?.toString();
  // const firstname = formData.get("firstname")?.toString();
  // const lastname = formData.get("lastname")?.toString();

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
              value: "natsmy.1211@gmail.com",
            },
            {
              objectTypeId: "0-1",
              name: "firstname",
              value: "菜摘",
            },
            {
              objectTypeId: "0-1",
              name: "lastname",
              value: "堀",
            },
            {
              objectTypeId: "0-1",
              name: "company",
              value: "株式会社 問い合わせ連携",
            },
            {
              objectTypeId: "0-1",
              name: "message",
              value: "製品について問い合わせします。",
            },
          ],
        }),
      }
    );
    const data = await res.json();
    console.log(data);

    if (!res.ok) {
      return new Response("サーバーエラー", { status: 500 });
    }
    return new Response("登録が正常に完了しました", { status: 200 });
  } catch (error: any) {
    console.log(error);

    return new Response("ユーザーの作成に失敗しました", { status: 400 });
  }
  //   return redirect("/signin");
};
//
