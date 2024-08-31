/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_CJ1lNwyS.mjs';
import 'kleur/colors';
import { $ as $$Button } from '../chunks/Button_Ds4HCd78.mjs';
import { $ as $$Section, a as $$SectionTitle, c as $$Layout } from '../chunks/SectionTitle_Lnhe7EZw.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_BbGcdQPI.mjs';
import { t as toggle, a as arrow } from '../chunks/arrow_CON9cuBn.mjs';
import { $ as $$PageTitleBanner } from '../chunks/PageTitleBanner_CqbQQXVe.mjs';
import { $ as $$Socialmedia } from '../chunks/Socialmedia_Dm3SsHr4.mjs';
export { renderers } from '../renderers.mjs';

const image1 = new Proxy({"src":"/_astro/image1.16k_e-yz.png","width":960,"height":564,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/assets/images/contact/image1.png";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "General Inquiries",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus nec nunc ultrices. Nullam a metus nec nunc ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus nec nunc ultrices. Nullam a metus nec nunc ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus nec nunc ultrices. Nullam a metus nec nunc ultrices."
    },
    {
      question: "General Inquiries",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus nec nunc ultrices. Nullam a metus nec nunc ultrices."
    },
    {
      question: "General Inquiries",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus nec nunc ultrices. Nullam a metus nec nunc ultrices."
    },
    {
      question: "General Inquiries",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus nec nunc ultrices. Nullam a metus nec nunc ultrices."
    },
    {
      question: "General Inquiries",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus nec nunc ultrices. Nullam a metus nec nunc ultrices."
    }
  ];
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  $(document).ready(function () {\n    $(".toggle-button").click(function () {\n      var answer = $(this).closest("li").find(".answer");\n      answer.slideToggle();\n      $(this).find(".hamburger").toggleClass("hidden");\n      $(this).find(".arrow").toggleClass("hidden");\n      $(this).closest("li").find(".question").toggleClass("bg-green bg-orange");\n    });\n  });\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us | D2L.sg" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageTitleBanner", $$PageTitleBanner, { "title": "Make an Impact with Us!", "bgmv": "/contact/mvbg.png" })}  ${renderComponent($$result2, "Section", $$Section, { "bg": "white" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "textalign": "center", "color": "green" }, { "default": ($$result4) => renderTemplate`
Food Waste is BIGGER than you think!
` })} ${maybeRenderHead()}<div class="flex justify-between items-center mt-[3rem] flex-wrap gap-y-[3rem] md:flex-nowrap"> ${renderComponent($$result3, "Image", $$Image, { "src": image1, "alt": "Food Waste is BIGGER than you think!", "width": 480, "height": 282, "class": "w-full md:w-[38.21%]" })} <div class="w-full md:w-[49%]"> <p class="text-orange font-bold text-[1.5625rem] leading-none">
D2L.sg is a holistic one-stop food surplus/waste management social
          enterprise
</p> <p class="mt-[2rem]">
We manage ALL TYPES of food surplus and waste via proprietary
          smart-matching AI technology, ensuring that food surplus and waste are
          matched to their best 2nd life quickly and efficiently.
</p> <p class="mt-[2rem]">
This diverts the food from the incinerator/digestor for higher and
          better leases of life.
</p> <div class="mt-[2rem]"> ${renderComponent($$result3, "Button", $$Button, { "text": "Our Services", "href": "/services/" })} </div> </div> </div> ` })}  ${renderComponent($$result2, "Section", $$Section, { "bg": "beige" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "color": "green", "textalign": "left" }, { "default": ($$result4) => renderTemplate`
Partner with Us Today!
` })} <p class="mt-[1rem]">
Partner with us to align your business practices with Singapore's Resource
      Sustainability Act, demonstrating your commitment to sustainability.<br>
Fill in the form below and we’ll get back to you! Or email us your inquiry
      at hello@d2l.sg, and we will get in touch!
</p> ${renderComponent($$result3, "Form", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/Form.tsx", "client:component-export": "default" })} ` })}  ${renderComponent($$result2, "Section", $$Section, { "bg": "white" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "textalign": "left", "color": "green" }, { "default": ($$result4) => renderTemplate`
Frequently Asked Questions
` })}  <div class="mt-[2.875rem]"> <ul class="flex flex-col gap-y-[1.976rem]"> ${faqs.map((faq, index) => renderTemplate`<li class="drop-shadow-xl bg-beige rounded-[1.25rem]"${addAttribute(`faq${index + 2}`, "id")}>  <div class="transition-all duration-300 question ~py-[1.25rem]/[1.5625rem] ~px-[1rem]/[2.1875rem] bg-green text-white font-bold ~text-[1.25rem]/[1.875rem] rounded-[1.25rem] flex justify-between items-center gap-x-[1rem]"> <p>${faq.question}</p> <button class="toggle-button w-[1.875rem] shrink-0"> ${renderComponent($$result3, "Image", $$Image, { "src": toggle, "alt": "Toggle", "width": 32, "height": 32, "class": "hamburger" })} ${renderComponent($$result3, "Image", $$Image, { "src": arrow, "alt": "Toggle", "width": 32, "height": 32, "class": "arrow hidden" })} </button> </div>  <div class="answer px-[2.875rem] py-[1.8125rem] hidden"> <p> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<br>
Nullam a metus nec nunc ultrices. Nullam a metus nec nunc
                  ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nullam a metus nec nunc ultrices.
<br> Nullam a metus nec nunc ultrices.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Nullam a metus nec nunc
                  ultrices.
<br> Nullam a metus nec nunc ultrices.
</p> </div> </li>`)} </ul> </div> ` })}  ${renderComponent($$result2, "Socialmedia", $$Socialmedia, {})} ` }));
}, "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/pages/contact.astro", void 0);

const $$file = "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
