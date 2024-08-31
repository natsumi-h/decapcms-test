export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  const portalId = "47226251";
  const formGuid = "60cff913-c749-44e2-a352-17635a6152be";
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
              value: "natsmy.1211@gmail.com"
            },
            {
              objectTypeId: "0-1",
              name: "firstname",
              value: "菜摘"
            },
            {
              objectTypeId: "0-1",
              name: "lastname",
              value: "堀"
            },
            {
              objectTypeId: "0-1",
              name: "company",
              value: "株式会社 問い合わせ連携"
            },
            {
              objectTypeId: "0-1",
              name: "message",
              value: "製品について問い合わせします。"
            }
          ]
        })
      }
    );
    const data = await res.json();
    console.log(data);
    if (!res.ok) {
      return new Response("サーバーエラー", { status: 500 });
    }
    return new Response("登録が正常に完了しました", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("ユーザーの作成に失敗しました", { status: 400 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
