(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7191],{4266:function(e,t){function n(e){let t={},n={};return e&&Object.entries(e).forEach(([e,r])=>{var o;if(t[e])throw Error(`"${e}" has already been declared`);let a=r.render?e.match(/[a-z]+/gi).map(e=>e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()).join(""):void 0;t[e]={...r,render:a},a&&(n[a]=r.render)}),{output:t,components:n}}t.J=function(e){let{output:t,components:r}=n(e.tags),{output:o,components:a}=n(e.nodes);return{...e,tags:t,nodes:o,components:{...r,...a}}},t.w=function(e){return Object.prototype.hasOwnProperty.call(e,"default")?e.default:e||{}}},640:function(e,t,n){"use strict";var r=n(1742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,s,c,l,d,u,p=!1;t||(t={}),i=t.debug||!1;try{if(c=r(),l=document.createRange(),d=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(u),l.selectNodeContents(u),d.addRange(l),!document.execCommand("copy"))throw Error("copy command was unsuccessful");p=!0}catch(h){i&&console.error("unable to copy using execCommand: ",h),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(f){i&&console.error("unable to copy using clipboardData: ",f),i&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",s=n.replace(/#{\s*key\s*}/g,a),window.prompt(s,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(l):d.removeAllRanges()),u&&document.body.removeChild(u),c()}return p}},7899:function(e,t,n){"use strict";n.r(t),n.d(t,{upper:function(){return r}});var r={transform:function(e){var t=e[0];return"string"==typeof t?t.toUpperCase():t}}},386:function(e,t,n){"use strict";n.r(t),n.d(t,{fence:function(){return p},heading:function(){return g}});var r=n(4211),o=n(5627),a=n.n(o);n(5660);var i=n(640),s=n.n(i),c=n(7294),l=n(5893),d={copied:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"jsx-1865351978",children:[(0,l.jsx)("title",{className:"jsx-1865351978",children:"Copied"}),(0,l.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M96,288L192,384L416,128",className:"jsx-1865351978"}),(0,l.jsx)(a(),{id:"1865351978",children:["path.jsx-1865351978{stroke-dasharray:477;stroke-dashoffset:477;-webkit-animation:draw-jsx-1865351978 150ms ease-out forwards;animation:draw-jsx-1865351978 150ms ease-out forwards;}","@-webkit-keyframes draw-jsx-1865351978{to{stroke-dashoffset:0;}}","@keyframes draw-jsx-1865351978{to{stroke-dashoffset:0;}}"]})]}),"checkmark-circle":(0,l.jsxs)("div",{className:"jsx-1144331496 relative",children:[(0,l.jsx)("div",{className:"jsx-1144331496 background"}),(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"jsx-1144331496",children:[(0,l.jsx)("title",{className:"jsx-1144331496",children:"Checkmark Circle"}),(0,l.jsx)("path",{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z",className:"jsx-1144331496"})]}),(0,l.jsx)(a(),{id:"1144331496",children:[".background.jsx-1144331496{top:2px;left:2px;z-index:1;position:absolute;background:var(--white);border-radius:50%;width:12px;height:12px;}"]})]}),copy:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[(0,l.jsx)("title",{children:"Copy"}),(0,l.jsx)("rect",{x:"128",y:"128",width:"336",height:"336",rx:"57",ry:"57",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"32"}),(0,l.jsx)("path",{d:"M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32"})]}),"information-circle":(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[(0,l.jsx)("title",{children:"Information Circle"}),(0,l.jsx)("path",{d:"M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z"})]}),warning:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:[(0,l.jsx)("title",{children:"Warning"}),(0,l.jsx)("path",{d:"M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0080 446.25h340.89a32 32 0 0028.18-47.17zm-198.6-1.83a20 20 0 1120-20 20 20 0 01-20 20zm21.72-201.15l-5.74 122a16 16 0 01-32 0l-5.74-121.95a21.73 21.73 0 0121.5-22.69h.21a21.74 21.74 0 0121.73 22.7z"})]})};function u(e){var t=e.icon,n=e.color,r=void 0===n?"inherit":n;return(0,l.jsxs)("span",{className:a().dynamic([["3970072107",[r]]])+" icon",children:[d[t]||null,(0,l.jsx)(a(),{id:"3970072107",dynamic:[r],children:[".icon.__jsx-style-dynamic-selector{display:inline-block;position:relative;font-size:inherit;width:1em;height:1em;min-width:16px;box-sizing:content-box;color:".concat(r,";}"),".icon.__jsx-style-dynamic-selector svg{z-index:10;position:relative;display:block;fill:currentcolor;stroke:currentcolor;width:100%;height:100%;}"]})]})}Prism.languages.markdoc={tag:{pattern:/{%(.|\n)*?%}/i,inside:{tagType:{pattern:/^({%\s*\/?)(\w*|-)*\b/i,lookbehind:!0},id:/#(\w|-)*\b/,string:/".*?"/,equals:/=/,number:/\b\d+\b/i,variable:{pattern:/\$[\w.]+/i,inside:{punctuation:/\./i}},function:/\b\w+(?=\()/,punctuation:/({%|\/?%})/i,boolean:/false|true/}},variable:{pattern:/\$\w+/i},function:{pattern:/\b\w+(?=\()/i}};var p={render:function(e){var t=e.children,n=e["data-language"],r=(0,c.useState)(!1),o=r[0],i=r[1],d=(0,c.useRef)(null);(0,c.useEffect)(function(){d.current&&Prism.highlightElement(d.current,!1)},[t]),(0,c.useEffect)(function(){if(o){s()(d.current.innerText);var e=setTimeout(i,1e3,!1);return function(){return clearTimeout(e)}}},[o]);var p="string"==typeof t?t.split("\n").filter(Boolean):[];return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{"aria-live":"polite",className:a().dynamic([["3463492321",[1===p.length?"17px":"13px"]]])+" code",children:[(0,l.jsx)("pre",{ref:d,className:a().dynamic([["3463492321",[1===p.length?"17px":"13px"]]])+" "+"language-".concat("md"===n?"markdoc":n||"markdoc"),children:t},t),(0,l.jsx)("button",{onClick:function(){return i(!0)},className:a().dynamic([["3463492321",[1===p.length?"17px":"13px"]]]),children:(0,l.jsx)(u,{icon:o?"copied":"copy"})}),(0,l.jsx)(a(),{id:"3463492321",dynamic:[1===p.length?"17px":"13px"],children:[".code.__jsx-style-dynamic-selector{position:relative;}",".code.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{-webkit-appearance:none;-moz-appearance:none;appearance:none;position:absolute;color:inherit;background:var(--code-background);top:".concat(1===p.length?"17px":"13px",";right:11px;border-radius:4px;border:none;font-size:15px;}"),"pre.__jsx-style-dynamic-selector{white-space:pre-wrap;}"]})]})})},attributes:r.td.fence.attributes},f=n(9499),h=n(1163);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){(0,f.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var g={render:function(e){var t=e.id,n=void 0===t?"":t,r=e.level,o=void 0===r?1:r,i=e.children,s=e.className,c=(0,h.useRouter)(),d="h".concat(o),u=c.pathname.startsWith("/docs"),p=(0,l.jsxs)(d,{className:"jsx-3251069789 "+(["heading",s].filter(Boolean).join(" ")||""),children:[(0,l.jsx)("div",{id:n,className:"jsx-3251069789"}),i,(0,l.jsx)(a(),{id:"3251069789",children:["a.jsx-3251069789{-webkit-text-decoration:none;text-decoration:none;}","a.jsx-3251069789:hover{opacity:1;}","div.jsx-3251069789{position:absolute;margin-top:-70px;}"]})]});return u&&1!==o?(0,l.jsxs)("a",{href:"#".concat(n),className:"jsx-1786922009",children:[p,(0,l.jsx)(a(),{id:"1786922009",children:["a.jsx-1786922009{color:black;-webkit-text-decoration:none;text-decoration:none;}","a.jsx-1786922009:hover{opacity:1;}","a.jsx-1786922009 .heading::after{opacity:0;color:var(--toc-border);content:'  #';-webkit-transition:opacity 250ms ease;transition:opacity 250ms ease;}","a.jsx-1786922009 .heading:hover::after{opacity:1;}"]})]}):p},children:["inline"],attributes:{id:{type:String},level:{type:Number,required:!0,default:1},className:{type:String}},transform:function(e,t){var n,o,a=e.transformAttributes(t),i=e.transformChildren(t),s=a.id&&"string"==typeof a.id?a.id:i.filter(function(e){return"string"==typeof e}).join(" ").replace(/[?]/g,"").replace(/\s+/g,"-").toLowerCase();return new r.Vp(this.render,x(x({},a),{},{id:s}),i)}}},5148:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return h}});var r=n(9499),o=n(7294),a=n(4211),i=n(4266),s=n(386),c=n(7899);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var u=d({tags:(0,i.w)({}),nodes:(0,i.w)(s),functions:(0,i.w)(c)},(0,i.w)({})),p=(0,i.J)(u).components,f=!0;function h(e){return a.RZ.react(e.markdoc.content,o,{components:d(d({},p),e.components)})}},2953:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/210817-Flex-Grid",function(){return n(5148)}])},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}}},function(e){e.O(0,[2649,9774,2888,179],function(){return e(e.s=2953)}),_N_E=e.O()}]);