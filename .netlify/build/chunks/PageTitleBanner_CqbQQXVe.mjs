import { c as createComponent, f as defineStyleVars, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as createAstro } from './astro/server_CJ1lNwyS.mjs';
/* empty css                         */
import 'clsx';

const $$Astro = createAstro();
const $$PageTitleBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageTitleBanner;
  const { title, bgmv } = Astro2.props;
  const bgurl = `url(${bgmv})`;
  const $$definedVars = defineStyleVars([{ bgurl }]);
  return renderTemplate`${maybeRenderHead()}<div class="bg-beige ~pt-[4.625rem]/[13.125rem] text-center pb-[4.625rem] bg" data-astro-cid-ijywg6t2${addAttribute($$definedVars, "style")}> <h2 class="~text-[2rem]/[2.8125rem] font-bold text-white underline" data-astro-cid-ijywg6t2${addAttribute($$definedVars, "style")}> ${title} </h2> </div> `;
}, "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/components/Parts/PageTitleBanner.astro", void 0);

export { $$PageTitleBanner as $ };
