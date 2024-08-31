import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from './astro/server_CJ1lNwyS.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_BbGcdQPI.mjs';
import { i as instagram, f as facebook, l as linkedin } from './linkedin_CkJ3Sc_i.mjs';
import { $ as $$Section } from './SectionTitle_Lnhe7EZw.mjs';

const tiktok = new Proxy({"src":"/_astro/tiktok.CMs2kXWz.png","width":140,"height":140,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/assets/images/tiktok.png";
							}
							
							return target[name];
						}
					});

const $$Socialmedia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Social Media -->${renderComponent($$result, "Section", $$Section, { "bg": "white" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p class="text-green2 text-[1.875rem] font-bold text-center">
Follow us on Social Media!
</p> <div class="flex items-center max-w-[30rem] justify-between mx-[auto] mt-[2rem]"> <a href="https://www.instagram.com/d2l.sg/?hl=en" target="_blank"> ${renderComponent($$result2, "Image", $$Image, { "src": instagram, "alt": "Instagram", "width": 50, "height": 50 })} </a> <a target="_blank" href="https://www.facebook.com/D2L.sg"> ${renderComponent($$result2, "Image", $$Image, { "src": facebook, "alt": "Facebook", "width": 50, "height": 50 })} </a> <a target="_blank" href="https://www.linkedin.com/company/d2lsg/"> ${renderComponent($$result2, "Image", $$Image, { "src": linkedin, "alt": "LinkedIn", "width": 50, "height": 50 })} </a> <a target="_blank" href="https://www.tiktok.com/@d2l.sg?_t=8n9wjyZ71Hd&_r=1"> ${renderComponent($$result2, "Image", $$Image, { "src": tiktok, "alt": "TikTok", "width": 50, "height": 50 })} </a> </div> ` })}`;
}, "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/components/Socialmedia.astro", void 0);

export { $$Socialmedia as $ };
