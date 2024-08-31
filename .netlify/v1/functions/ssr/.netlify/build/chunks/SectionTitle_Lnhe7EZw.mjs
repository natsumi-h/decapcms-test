import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, a as renderComponent, b as addAttribute, d as createAstro, g as renderHead, f as defineStyleVars } from './astro/server_CJ1lNwyS.mjs';
import 'kleur/colors';
/* empty css                         */
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_BbGcdQPI.mjs';
import 'clsx';
/* empty css                         */

const $$Inner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-w-[78.125rem] mx-auto"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/components/Parts/Inner.astro", void 0);

const footerlogo = new Proxy({"src":"/_astro/footerlogo.Ca85FJtQ.png","width":222,"height":98,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/assets/images/footerlogo.png";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="text-white bg-green ~px-[1rem]/[5rem] ~py-[1.5625rem]/[3.75rem] text-[0.75rem]" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Inner", $$Inner, { "data-astro-cid-sz7xmlte": true }, { "default": ($$result2) => renderTemplate`  <div class="flex pb-[1.5626rem] md:pb-[4.93rem] justify-between xl:w-[85%] w-full flex-col gap-y-[1.5625rem] md:flex-row" data-astro-cid-sz7xmlte> <!-- Logo --> <div class="m-auto md:m-0" data-astro-cid-sz7xmlte> <a href="/" data-astro-cid-sz7xmlte> ${renderComponent($$result2, "Image", $$Image, { "src": footerlogo, "alt": "D2L.sg", "width": 111, "height": 49, "data-astro-cid-sz7xmlte": true })} </a> </div> <!-- Text --> <div class="md:max-w-[20.3125rem]" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>
D2L.sg is a holistic, one-stop, end-to-end food surplus and waste
          management social enterprise; managing ALL TYPES of food surplus and
          waste via proprietary smart-matching AI technology, ensuring that food
          surplus and waste are matched to their best 2nd life quickly and
          efficiently.
</p> </div> <!-- Links Wrapper --> <div class="flex gap-x-[3.625rem] flex-col gap-y-[1.5625rem] md:flex-row" data-astro-cid-sz7xmlte> <!-- Relevant links --> <div data-astro-cid-sz7xmlte> <p class="font-bold uppercase" data-astro-cid-sz7xmlte>Relevant Links</p> <nav data-astro-cid-sz7xmlte> <ul class="mt-[1rem] two-column-list" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/" data-astro-cid-sz7xmlte>Home</a></li> <li data-astro-cid-sz7xmlte><a href="/about/" data-astro-cid-sz7xmlte>About Us</a></li> <li data-astro-cid-sz7xmlte><a href="/services/" data-astro-cid-sz7xmlte>Our Services</a></li> <li data-astro-cid-sz7xmlte><a href="/dss/" data-astro-cid-sz7xmlte>Join as a DSS</a></li> <li data-astro-cid-sz7xmlte><a href="/education/" data-astro-cid-sz7xmlte>About Food Waste</a></li> <li data-astro-cid-sz7xmlte><a href="/blog/" data-astro-cid-sz7xmlte>Blog & Media</a></li> </ul> </nav> </div> <!-- Contact us --> <div data-astro-cid-sz7xmlte> <p class="font-bold uppercase" data-astro-cid-sz7xmlte>Contact us</p> <ul class="mt-[1rem]" data-astro-cid-sz7xmlte> <a href="mailto:hello@d2l.sg" data-astro-cid-sz7xmlte>hello@d2l.sg</a> </ul> </div> </div> </div>  <div data-astro-cid-sz7xmlte> <!-- Links --> <div class="pt-[1rem] border-t opacity-50 leading-normal" data-astro-cid-sz7xmlte> <ul class="flex gap-x-[1rem] items-center" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/" data-astro-cid-sz7xmlte>Accessibility</a></li> <span class="w-[0.0625rem] h-[0.75rem] bg-white block" data-astro-cid-sz7xmlte></span> <li data-astro-cid-sz7xmlte><a href="/terms/" data-astro-cid-sz7xmlte>Terms of Service</a></li> <span class="w-[0.0625rem] h-[0.75rem] bg-white block" data-astro-cid-sz7xmlte></span> <li data-astro-cid-sz7xmlte><a href="/terms/#privacy" data-astro-cid-sz7xmlte>Privacy Policy</a></li> <span class="w-[0.0625rem] h-[0.75rem] bg-white block" data-astro-cid-sz7xmlte></span> <li data-astro-cid-sz7xmlte><a href="/terms/#cookies" data-astro-cid-sz7xmlte>Cookie Policy</a></li> </ul> <!-- Copyright --> <p class="mt-[0.3rem]" data-astro-cid-sz7xmlte>
Copyright © 2024 D2L.sg — All Rights Reserved. Protected by reCAPTCHA
          the <a class="underline" href="https://policies.google.com/privacy" target="_blank" data-astro-cid-sz7xmlte>Google Privacy Policy</a> and
<a class="underline" href="https://policies.google.com/terms" target="_blank" data-astro-cid-sz7xmlte>Terms of Service</a> apply.
</p> </div> </div> ` })} </footer> <div class="text-white bg-green text-[1rem] font-bold py-[1.5rem] belt" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>
♥ Transform Waste, Transform Lives ♥ START YOUR FREE TRIAL TODAY ♥
    Transform Waste, Transform Lives ♥ START YOUR FREE TRIAL TODAY ♥
</span> </div> `;
}, "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/components/Footer.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$4 = createAstro();
const $$Basehead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Basehead;
  const { title } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<meta charset="UTF-8"><meta content="Your one-stop Food Surplus/Waste Manager. D2L.sg formerly Diver for second life" name="description"><meta name="viewport" content="width=device-width"><link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" type="image/svg+xml"><link rel="icon" type="image/png" sizes="32x32" type="image/svg+xml" href="/favicons/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" type="image/svg+xml"><meta name="generator"', '><!-- TODO: --><meta name="robots" content="noindex"><title>', '</title><!-- <script is:inline>\n  if (window.netlifyIdentity) {\n    window.netlifyIdentity.on("init", (user) => {\n      if (!user && window.netlifyIdentity) {\n        window.netlifyIdentity.on("login", () => {\n          document.location.href = "/admin/";\n        });\n      }\n    });\n  }\n<\/script> --><script src="https://code.jquery.com/jquery-3.7.0.min.js"><\/script>'])), addAttribute(Astro2.generator, "content"), title);
}, "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/layouts/Basehead.astro", void 0);

const headerlogo = new Proxy({"src":"/_astro/headerlogo.B5a-ZUL_.png","width":156,"height":220,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/assets/images/headerlogo.png";
							}
							
							return target[name];
						}
					});

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const pathname = Astro2.url.pathname;
  const menu = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About Us",
      link: "/about/"
    },
    {
      name: "Our Services",
      link: "/services/"
    },
    {
      name: "DSS",
      link: "/dss/"
    },
    {
      name: "Food Waste 101",
      link: "/education/"
    },
    {
      name: "Blog & Media",
      link: "/blog/"
    },
    {
      name: "Contact Us",
      link: "/contact/"
    }
  ];
  const isCurrentPath = (itemlink) => {
    console.log(`itemlink: ${itemlink}`);
    if (pathname.includes("/blog/") && itemlink === "/blog/") {
      return true;
    } else if (pathname === itemlink) {
      return true;
    }
    return false;
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="text-white bg-orange text-[1rem] font-bold py-[1.5rem] belt"> <span>\n\u2665 Transform Waste, Transform Lives \u2665 START YOUR FREE TRIAL TODAY \u2665\n    Transform Waste, Transform Lives \u2665 START YOUR FREE TRIAL TODAY \u2665\n</span> </div> <!-- Header --> <div id="header" class="fixed z-50 md:w-[97.2%] w-full max-w-full top-[4.5rem] left-2/4 translate-x-[-50%] bg-white rounded-[1.25rem] drop-shadow-xl"> <!-- header --> <div class="py-[0.75rem] md:py-[1.25rem] px-[1rem] drop-shadow-xl rounded-[1.25rem] bg-white"> <div class="flex items-center justify-between max-w-[85.375rem] mx-auto w-full"> <!-- Logo --> <h1 class="shrink-0"> <a href="/"> ', ' </a> </h1> <!-- Hamburger --> <button class="cs-toggle md:hidden flex" aria-label="mobile menu toggle"> <div class="cs-box" aria-hidden="true"> <span class="cs-line cs-line1" aria-hidden="true"></span> <span class="cs-line cs-line2" aria-hidden="true"></span> <span class="cs-line cs-line3" aria-hidden="true"></span> </div> </button> <div class="shrink w-[90.48%] hidden md:block"> <!-- Top Buttons --> <div class="text-right"> <nav class="bg-beige inline-block rounded-full py-[0.1875rem] px-[0.25rem] drop-shadow-xl"> <ul class="flex itens-center gap-x-[0.5rem] bold text-[0.75rem]"> <li> <a href="/services/" class="inline-block text-white bg-orange px-[1rem] py-[0.5rem] rounded-full font-bold border-[0.1875rem] border-orange">\nFor Businesses\n</a> </li> <li> <a href="/dss/" class="inline-block text-text hover:text-white hover:bg-orange px-[1rem] py-[0.5rem] rounded-full font-bold border-[0.1875rem] border-beige hover:border-orange hover:transition-all duration-300">\nJoin Community\n</a> </li> </ul> </nav> </div> <!-- Menu --> <nav class="mt-[0.5625rem] text-center"> <ul class="flex items-center justify-between"> ', ' </ul> </nav> </div> </div> </div> <!-- SP nav manu --> <div class="py-[2rem] px-[1rem] text-center hidden spmenu font-bold"> <nav> <ul class="flex flex-col gap-y-[1.976rem]"> ', ' </ul> </nav> </div> </div>  <script>\n  const header = document.getElementById("header");\n  let lastScrollTop = 0;\n\n  window.addEventListener("scroll", () => {\n    let scrollTop = window.scrollY || document.documentElement.scrollTop;\n\n    if (scrollTop > lastScrollTop && scrollTop > 0) {\n      header.style.top = "0";\n      header.style.transition = "top 0.3s ease-in-out";\n    } else if (scrollTop <= 0) {\n      header.style.top = "4.5rem";\n      header.style.transition = "top 0.3s ease-in-out";\n    }\n\n    lastScrollTop = scrollTop;\n  });\n\n  // SP toggle\n  $(document).ready(function () {\n    $(".cs-toggle").click(function () {\n      var spmenu = $(".spmenu");\n      spmenu.slideToggle();\n      $(this).toggleClass("cs-active");\n    });\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "src": headerlogo, "alt": "D2L Singapore", "width": "78", "height": "110", "class": "~w-[2rem]/[4.875rem]" }), menu.map((item) => renderTemplate`<li${addAttribute(`shrink w-[9.5625rem]  text-text rounded-full  ${isCurrentPath(item.link) ? "text-white bg-green" : "hover:text-white  hover:bg-green3 hover:transition-all duration-300"}`, "class")}> ${pathname == item.link ? renderTemplate`<span class="py-[0.9375rem] block text-[1.25rem]"> ${item.name} </span>` : renderTemplate`<a${addAttribute(item.link, "href")} class="py-[0.9375rem] block text-[1.25rem]"> ${item.name} </a>`} </li>`), menu.map((item) => renderTemplate`<li> ${pathname == item.link ? renderTemplate`<span>${item.name}</span>` : renderTemplate`<a class="block"${addAttribute(item.link, "href")}> ${item.name} </a>`} </li>`));
}, "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', "", '</head> <body class="font-arimo"> ', ' <main> <span class="hidden">D2L.sg formerly divertfor2ndlife</span> ', " </main> ", ' <!-- Include the script that builds the page and powers Decap CMS --> <!-- <script is:inline src="https://unpkg.com/decap-cms@^3.1.2/dist/decap-cms.js"\n    ><\/script> --> <!-- <script\n      is:inline\n      src="https://identity.netlify.com/v1/netlify-identity-widget.js"><\/script> --> </body></html><!-- <style>\n  body {\n    font-family: "Arimo Variable", sans-serif;\n  }\n</style> --><!-- <style is:global>\n  :root {\n    --accent: 136, 58, 234;\n    --accent-light: 224, 204, 250;\n    --accent-dark: 49, 10, 101;\n    --accent-gradient: linear-gradient(\n      45deg,\n      rgb(var(--accent)),\n      rgb(var(--accent-light)) 30%,\n      white 60%\n    );\n  }\n  html {\n    font-family: system-ui, sans-serif;\n    background: #13151a;\n    background-size: 224px;\n  }\n  code {\n    font-family:\n      Menlo,\n      Monaco,\n      Lucida Console,\n      Liberation Mono,\n      DejaVu Sans Mono,\n      Bitstream Vera Sans Mono,\n      Courier New,\n      monospace;\n  }\n</style> -->'])), renderComponent($$result, "Basehead", $$Basehead, { "title": title }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const { bg, text, id, bgimagepath } = Astro2.props;
  const bgurl = `url(${bgimagepath})`;
  const $$definedVars = defineStyleVars([{ bgurl }]);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`bg-${bg} ~px-[1rem]/[5rem] ~py-[3rem]/[3.75rem] ${text === "white" ? "text-white" : "text-text"}`, "class")}${addAttribute(id, "id")} data-astro-cid-cc47uxbr${addAttribute($$definedVars, "style")}> ${renderComponent($$result, "Inner", $$Inner, { "data-astro-cid-cc47uxbr": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </section> `;
}, "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/components/Parts/Section.astro", void 0);

const $$Astro = createAstro();
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { textalign, color, italic } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3${addAttribute(`~text-[2rem]/[2.8125rem] leading-normal font-bold ${textalign === "center" ? "text-center" : textalign === "left" ? "text-left" : "text-right"} text-${color} ${italic ? "italic" : ""}`, "class")}> ${renderSlot($$result, $$slots["default"])} </h3>`;
}, "/Users/horinatsumi/Desktop/d2l/decapcms-test/src/components/Parts/SectionTitle.astro", void 0);

export { $$Section as $, $$SectionTitle as a, $$Inner as b, $$Layout as c };
