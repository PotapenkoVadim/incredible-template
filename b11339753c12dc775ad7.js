!function(){"use strict";var e,t={8331:function(e,t,n){var a=n(7294),i=n(745),r={app__container:"app__container__b856cc9",app__footer:"app__footer__e1caf3e"},c=n(6358),l={sidebar:"sidebar__ed04271",sidebar__title:"sidebar__title__af16706",sidebar__nav:"sidebar__nav__d004ba9","sidebar__nav-item":"sidebar__nav-item__c822a60","sidebar__nav-item_active":"sidebar__nav-item_active__b1915fc","sidebar__mobile-menu":"sidebar__mobile-menu__eb3e3f2",sidebar_open:"sidebar_open__ebefd73"},o={icon:"icon__e70c055",icon__menu:"icon__menu__be473db",icon__close:"icon__close__bbf47a5",icon__cloud:"icon__cloud__e6ba294",icon__layout:"icon__layout__cf4ddeb",icon__settings:"icon__settings__cf1589c",icon__video:"icon__video__bb188a0",icon_black:"icon_black__ebc9286",icon_red:"icon_red__a06e96d",icon_white:"icon_white__d566b4f"};function s({variant:e,className:t,color:n="black"}){return a.createElement("span",{className:`\n      ${o.icon}\n      ${o[`icon__${e}`]}\n      ${o[`icon_${n}`]}\n      ${t??""}\n    `})}function _(){const[e,t]=(0,a.useState)(!1);return(0,a.useLayoutEffect)((()=>{c.ZP.fromTo(`.${l.sidebar__title}`,{opacity:0,y:-50},{opacity:1,y:0,duration:1}),c.ZP.fromTo(`.${l["sidebar__nav-item"]}`,{opacity:0,x:-50},{opacity:1,x:0,delay:1,stagger:.15,duration:.55})}),[]),a.createElement("div",{className:`${l.sidebar} ${e&&l.sidebar_open}`},a.createElement("div",{className:l["sidebar__mobile-menu"],onClick:()=>t(!e)},a.createElement(s,{variant:e?"close":"menu",color:"red"})),a.createElement("div",{className:l.sidebar__title},"INCREDIBLE"),a.createElement("nav",{className:l.sidebar__nav},a.createElement("a",{className:`${l["sidebar__nav-item"]} ${l["sidebar__nav-item_active"]}`,href:"#"},"Home"),a.createElement("a",{className:l["sidebar__nav-item"],href:"#"},"About"),a.createElement("a",{className:l["sidebar__nav-item"],href:"#"},"Gallery"),a.createElement("a",{className:l["sidebar__nav-item"],href:"#"},"Contact")))}var m={introduce:"introduce__b1a10b6",introduce__title:"introduce__title__ec15b29",introduce__actions:"introduce__actions__a4af9e2"},u={button:"button__e760ae0",button__primary:"button__primary__a652b88",button__outline:"button__outline__e111744"};function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function d({variant:e="primary",className:t,...n}){return a.createElement("button",f({className:`\n        ${u.button}\n        ${u[`button__${e}`]}\n        ${t??""}\n      `},n))}function b(){return(0,a.useLayoutEffect)((()=>{c.ZP.to(`.${m.introduce__title}`,{delay:.75,opacity:1}),c.ZP.fromTo(`.${m.introduce__actions}`,{opacity:0,y:50},{opacity:1,delay:1,y:0})}),[]),a.createElement("section",{className:m.introduce},a.createElement("div",{className:m.introduce__content},a.createElement("h1",{className:m.introduce__title},"Welcome to the incredible"),a.createElement("div",{className:m.introduce__actions},a.createElement(d,{variant:"outline"},"Button Text"),a.createElement(d,null,"Button Text"))))}var p={benefits:"benefits__c72cf6e",benefits__list:"benefits__list__a8e5795","benefits__item-title":"benefits__item-title__e8b51ad","benefits__item-text":"benefits__item-text__e281a7d","benefits__item-link":"benefits__item-link__f6e86e9","benefits__item-icon":"benefits__item-icon__ef0f824"},v={title:"title__ffaa423"};function E({children:e,className:t}){return a.createElement("h2",{className:`${v.title} ${t??""}`},e)}var g={subtitle:"subtitle__e884476"};function y({children:e}){return a.createElement("div",{className:g.subtitle},e)}var h=n(9092),N={"fade-container":"fade-container__caba3e5"};function $({children:e}){const t=(0,a.useRef)(null);return(0,a.useLayoutEffect)((()=>{c.ZP.registerPlugin(h.i),c.ZP.fromTo(t.current,{opacity:0,y:100},{opacity:1,duration:.75,y:0,scrollTrigger:{trigger:t.current}})}),[t]),a.createElement("div",{ref:t,className:N["fade-container"]},e)}function k({benefit:e}){return a.createElement("div",{className:p.benefits__item},a.createElement(s,{variant:e.icon,className:p["benefits__item-icon"]}),a.createElement("div",{className:p["benefits__item-title"]},e.title),a.createElement("div",{className:p["benefits__item-text"]},e.text),a.createElement("a",{className:p["benefits__item-link"],href:"#"},"Text Link"))}const w=[{id:1,icon:"video",title:"Style 1",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."},{id:2,icon:"layout",title:"Style 2",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."},{id:3,icon:"settings",title:"Style 3",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."},{id:4,icon:"cloud",title:"Style 4",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."}];function x(){return a.createElement("section",{className:p.benefits},a.createElement($,null,a.createElement(E,null,"Section Heading")),a.createElement($,null,a.createElement(y,null,"This is some text inside of a div block.")),a.createElement("div",{className:p.benefits__list},w.length>0&&w.map((e=>a.createElement($,{key:e.id},a.createElement(k,{benefit:e}))))))}var S={attention:"attention__b1e1221",attention__title:"attention__title__de49013"};function O(){return a.createElement("section",{className:S.attention},a.createElement($,null,a.createElement(E,{className:S.attention__title},"Here you can put some text")),a.createElement($,null,a.createElement(d,{variant:"outline"},"Call To Action")))}var P={works:"works__c062cd5",works__sliders:"works__sliders__de7ca1b"},T=n(6610),C=n(2029);C.ZP.use(C.Gk);var L=(0,a.forwardRef)((function({slides:e},t){return a.createElement(a.Fragment,null,e.length>0&&a.createElement(T.tq,{ref:t,effect:"fade",breakpoints:{1024:{slidesPerView:4},768:{slidesPerView:2}},spaceBetween:20,mousewheel:{releaseOnEdges:!0},slidesPerView:1},e.map((e=>a.createElement(T.o5,{key:e.id},a.createElement("img",{className:"slider__image__b93cab5",src:e.image,alt:"work",loading:"lazy"}))))))}));const j=[{id:1,image:n.p+"assets/efebf45c8baa12c44b6c.png"},{id:2,image:n.p+"assets/6565e04cb92b87e4d232.png"},{id:3,image:n.p+"assets/225abaf90067e1443fb5.png"},{id:4,image:n.p+"assets/3e95f6413a23843c2a8b.png"},{id:5,image:n.p+"assets/0a5a9a9a609c3cf0a3ee.png"},{id:6,image:n.p+"assets/2167c8058f3e8c3e0ed2.png"},{id:7,image:n.p+"assets/fbbd1264d3e24a0cf69f.png"},{id:8,image:n.p+"assets/30bbca69179f041e4f97.png"}];function Z(){return a.createElement("section",{className:P.works},a.createElement($,null,a.createElement(E,null,"Lightbox Section")),a.createElement($,null,a.createElement(y,null,"This is some text inside of a div block.")),a.createElement("div",{className:P.works__sliders},a.createElement($,null,a.createElement(L,{slides:j})),a.createElement($,null,a.createElement(L,{slides:[...j].reverse()}))))}var q={contact:"contact__a8977fb",contact__form:"contact__form__f8c927a"},B={form__fields:"form__fields__ea35fcb",form__button:"form__button__fdb2c51"},R={form__control:"form__control__a3b6440",form__field:"form__field__aa618a6",form__label:"form__label__c804e29",form__textarea:"form__textarea__fb93eaa",form__label_active:"form__label_active__b38e0c1"};function A({placeholder:e}){const t=(0,a.useRef)(null),[n,i]=(0,a.useState)("");return a.createElement("div",{className:R.form__control},a.createElement("input",{onChange:e=>i(e.target.value),ref:t,className:R.form__field,type:"text",value:n}),a.createElement("span",{onClick:()=>t.current.focus(),className:`${R.form__label} ${n?R.form__label_active:""}`},e))}function F({placeholder:e}){const t=(0,a.useRef)(null),[n,i]=(0,a.useState)("");return a.createElement("div",{className:R.form__control},a.createElement("textarea",{ref:t,value:n,onChange:e=>i(e.target.value),className:`${R.form__field} ${R.form__textarea}`}),a.createElement("span",{onClick:()=>t.current.focus(),className:`${R.form__label} ${n?R.form__label_active:""}`},e))}function H({className:e}){return a.createElement("form",{className:`${B.form} ${e??""}`},a.createElement("div",{className:B.form__fields},a.createElement(A,{placeholder:"Name"}),a.createElement(A,{placeholder:"Email"})),a.createElement(F,{placeholder:"Message"}),a.createElement(d,{type:"button",className:B.form__button},"Send"))}function I(){return a.createElement("section",{className:q.contact},a.createElement($,null,a.createElement(E,null,"Contact Form")),a.createElement($,null,a.createElement(y,null,"This is some text inside of a div block.")),a.createElement($,null,a.createElement(H,{className:q.contact__form})))}function V(){return a.createElement("main",{className:r.app},a.createElement(_,null),a.createElement("div",{className:r.app__container},a.createElement(b,null),a.createElement(x,null),a.createElement(O,null),a.createElement(Z,null),a.createElement(I,null),a.createElement("footer",{className:r.app__footer},"Copyright Incredible. Made in Webflow.")))}(0,i.s)(document.querySelector("#root")).render(a.createElement(V,null))}},n={};function a(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,a),r.exports}a.m=t,e=[],a.O=function(t,n,i,r){if(!n){var c=1/0;for(_=0;_<e.length;_++){n=e[_][0],i=e[_][1],r=e[_][2];for(var l=!0,o=0;o<n.length;o++)(!1&r||c>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[o])}))?n.splice(o--,1):(l=!1,r<c&&(c=r));if(l){e.splice(_--,1);var s=i();void 0!==s&&(t=s)}}return t}r=r||0;for(var _=e.length;_>0&&e[_-1][2]>r;_--)e[_]=e[_-1];e[_]=[n,i,r]},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e}(),function(){var e={179:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,c=n[0],l=n[1],o=n[2],s=0;if(c.some((function(t){return 0!==e[t]}))){for(i in l)a.o(l,i)&&(a.m[i]=l[i]);if(o)var _=o(a)}for(t&&t(n);s<c.length;s++)r=c[s],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(_)},n=self.webpackChunkincredible=self.webpackChunkincredible||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),a.O(void 0,[998],(function(){return a(6981)}));var i=a.O(void 0,[998],(function(){return a(8331)}));i=a.O(i)}();