!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequire5fc6;let l,c;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){r[e]=n},n.parcelRequire5fc6=o),o.register("3X4bN",(function(n,t){var r,o;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var l={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)l[n[t]]=e[n[t]]},o=function(e){var n=l[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),o.register("goVOv",(function(n,t){var r;e(n.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function l(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var n=o[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return l(e[2])}return"/"}(),o[e]=n),n}})),o("3X4bN").register(JSON.parse('{"hJZZS":"index.c2a45e04.js","k7JcI":"animal.286ea802.png"}'));const i=document.querySelector("#img"),a=document.createElement("img");i&&i.append(a);var u;u=o("goVOv").getBundleURL("hJZZS")+o("3X4bN").resolve("k7JcI");const s=new URL(u);a.src=s.href,a.style.width="100px";const d=document.querySelector("#calculator"),f=document.querySelector("#calculator-hidden"),p=document.createElement("h1"),g=document.querySelector("#first-number"),m=document.querySelector("#second-number");document.body.append(p);const y=document.querySelector("#count");let b=document.getElementById("tools"),v=[];function h(e,n){const t=e+n;p.innerText=t.toString()}function x(e,n){const t=e-n;p.innerText=t.toString()}function S(e,n){const t=e*n;p.innerText=t.toString()}function N(e,n){const t=e/n;p.innerText=t.toString()}function w(e,n,t){e(n,t)}d.addEventListener("click",(e=>{p.innerText="",console.log(e.target);const n=e.target;n&&"number"==n.className&&v.push(Number(n.id.replace("nr",""))),g&&(g.innerText=JSON.stringify(v).replaceAll(",","").replaceAll("[","").replaceAll("]","")),l=Number(JSON.stringify(v).replaceAll(",","").replaceAll("[","").replaceAll("]","")),b&&b.addEventListener("click",(e=>{const n=e.target;if(n){const e=n.id;if(f){f.style.display="block",d.style.display="none";const n=[];f.addEventListener("click",(t=>{const r=t.target;r&&"number"==r.className&&n.push(Number(r.id.replace("andra-",""))),m&&(m.innerText=JSON.stringify(n).replaceAll(",","").replaceAll("[","").replaceAll("]","")),c=Number(JSON.stringify(n).replaceAll(",","").replaceAll("[","").replaceAll("]","")),y&&y.addEventListener("click",(n=>{"add"==e&&w(h,l,c),"minus"==e&&w(x,l,c),"multiply"==e&&w(S,l,c),"divide"==e&&w(N,l,c),f.style.display="none",d.style.display="block",g&&(g.innerText=""),m&&(m.innerText=""),v.length=0}))}))}}}))}))}();
//# sourceMappingURL=index.c2a45e04.js.map
