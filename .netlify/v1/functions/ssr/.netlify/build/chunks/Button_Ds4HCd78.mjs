import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as createAstro } from './astro/server_CJ1lNwyS.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { text, href, targetblank } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(targetblank ? "_blank" : "_self", "target")}${addAttribute(href, "href")} class="inline-block bg-white text-green ~px-[1.25rem]/[2.5rem] ~py-[0.625rem]/[0.75rem] rounded-full font-bold border-[0.1875rem] border-green2 hover:opacity-80 transition-all duration-300"> ${text} </a>`;
}, "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/components/Parts/Button.astro", void 0);

export { $$Button as $ };
