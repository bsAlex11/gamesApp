(()=>{"use strict";var e,r,t,n,a,o,i={841:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!=typeof matchFinder)return e();t.l("http://localhost:8081/remoteEntry.js",(t=>{if("undefined"!=typeof matchFinder)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"matchFinder")})).then((()=>matchFinder))}},s={};function u(e){if(s[e])return s[e].exports;var r=s[e]={exports:{}};return i[e](r,r.exports,u),r.exports}u.m=i,u.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return u.d(r,{a:r}),r},u.d=(e,r)=>{for(var t in r)u.o(r,t)&&!u.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((r,t)=>(u.f[t](e,r),r)),[])),u.u=e=>e+".bundle.js",u.miniCssF=e=>(179===e?"main":e)+".css",u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="app-container:",u.l=(t,n,a)=>{if(e[t])e[t].push(n);else{var o,i;if(void 0!==a)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){o=f;break}}o||(i=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,u.nc&&o.setAttribute("nonce",u.nc),o.setAttribute("data-webpack",r+a),o.src=t),e[t]=[n];var p=(r,n)=>{o.onerror=o.onload=null,clearTimeout(h);var a=e[t];if(delete e[t],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(n))),r)return r(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),i&&document.head.appendChild(o)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={58:[299]},n={299:["default","./MatchFinderApp",841]},u.f.remotes=(e,r)=>{u.o(t,e)&&t[e].forEach((e=>{var t=u.R;t||(t=[]);var a=n[e];if(!(t.indexOf(a)>=0)){if(t.push(a),a.p)return r.push(a.p);var o=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+a[1]+'" from '+a[2]),i[e]=()=>{throw r},a.p=0},s=(e,t,n,i,s,u)=>{try{var l=e(t,n);if(!l||!l.then)return s(l,i,u);var f=l.then((e=>s(e,i)),o);if(!u)return f;r.push(a.p=f)}catch(e){o(e)}},l=(e,r,n)=>s(r.get,a[1],t,0,f,n),f=r=>{a.p=1,i[e]=e=>{e.exports=r()}};s(u,a[2],0,0,((e,r,t)=>e?s(u.I,a[0],0,e,l,t):o()),1)}}))},(()=>{u.S={};var e={},r={};u.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];u.o(u.S,t)||(u.S[t]={});var o=u.S[t],i="app-container",s=(e,r,t)=>{var n=o[e]=o[e]||{},a=n[r];(!a||!a.loaded&&i>a.from)&&(n[r]={get:t,from:i})},l=[];switch(t){case"default":s("react-dom","17.0.1",(()=>Promise.all([u.e(935),u.e(271),u.e(418)]).then((()=>()=>u(935))))),s("react","17.0.1",(()=>u.e(976).then((()=>()=>u(294))))),(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(r);var r};try{var a=u(841);if(!a)return;var o=e=>e&&e.init&&e.init(u.S[t],n);if(a.then)return l.push(a.then(o,r));var i=o(a);i&&i.then&&l.push(i.catch(r))}catch(e){r(e)}})()}return l.length?e[t]=Promise.all(l).then((()=>e[t]=1)):e[t]=1}}})(),(()=>{var e;u.g.importScripts&&(e=u.g.location+"");var r=u.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(t,n)=>{if(0 in t){n=e(n);var a=t[0],o=a<0;o&&(a=-a-1);for(var i=0,s=1,u=!0;;s++,i++){var l,f,p=s<t.length?(typeof t[s])[0]:"";if(i>=n.length||"o"==(f=(typeof(l=n[i]))[0]))return!u||("u"==p?s>a&&!o:""==p!=o);if("u"==f){if(!u||"u"!=p)return!1}else if(u)if(p==f)if(s<=a){if(l!=t[s])return!1}else{if(o?l>t[s]:l<t[s])return!1;l!=t[s]&&(u=!1)}else if("s"!=p&&"n"!=p){if(o||s<=a)return!1;u=!1,s--}else{if(s<=a||f<p!=o)return!1;u=!1}else"s"!=p&&"n"!=p&&(u=!1,s--)}}var h=[],d=h.pop.bind(h);for(i=1;i<t.length;i++){var c=t[i];h.push(1==c?d()|d():2==c?d()&d():c?r(c,n):!d())}return!!d()},t=(t,n,a)=>{var o=t[n];return(n=Object.keys(o).reduce(((t,n)=>!r(a,n)||t&&!((r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var a=r[n],o=(typeof a)[0];if(n>=t.length)return"u"==o;var i=t[n],s=(typeof i)[0];if(o!=s)return"o"==o&&"n"==s||"s"==s||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}})(t,n)?t:n),0))&&o[n]},n=(e=>function(r,t,n,a){var o=u.I(r);return o&&o.then?o.then(e.bind(e,r,u.S[r],t,n,a)):e(r,u.S[r],t,n,a)})(((e,r,n,a,o)=>{var i=r&&u.o(r,n)&&t(r,n,a);return i?(e=>(e.loaded=1,e.get()))(i):o()})),a={},o={271:()=>n("default","react",[1,17,0,1],(()=>u.e(294).then((()=>()=>u(294))))),650:()=>n("default","react-dom",[1,17,0,1],(()=>u.e(935).then((()=>()=>u(935)))))},l={58:[650],271:[271]};u.f.consumes=(e,r)=>{u.o(l,e)&&l[e].forEach((e=>{if(u.o(a,e))return r.push(a[e]);var t=r=>{a[e]=0,i[e]=t=>{delete s[e],t.exports=r()}},n=r=>{delete a[e],i[e]=t=>{throw delete s[e],r}};try{var l=o[e]();l.then?r.push(a[e]=l.then(t).catch(n)):t(l)}catch(e){n(e)}}))}})(),a=e=>new Promise(((r,t)=>{var n=u.miniCssF(e),a=u.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var a=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===r))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===r)return i}})(n,a))return r();((e,r,t,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=o=>{if(a.onerror=a.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,a.parentNode.removeChild(a),n(u)}},a.href=r,document.head.appendChild(a)})(e,a,r,t)})),o={179:0},u.f.miniCss=(e,r)=>{o[e]?r.push(o[e]):0!==o[e]&&{58:1}[e]&&r.push(o[e]=a(e).then((()=>{o[e]=0}),(r=>{throw delete o[e],r})))},(()=>{var e={179:0};u.f.j=(r,t)=>{var n=u.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(271!=r){var a=new Promise(((t,a)=>{n=e[r]=[t,a]}));t.push(n[2]=a);var o=u.p+u.u(r),i=new Error;u.l(o,(t=>{if(u.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r)}else e[r]=0};var r=(r,t)=>{for(var n,a,[o,i,s]=t,l=0,f=[];l<o.length;l++)a=o[l],u.o(e,a)&&e[a]&&f.push(e[a][0]),e[a]=0;for(n in i)u.o(i,n)&&(u.m[n]=i[n]);for(s&&s(u),r&&r(t);f.length;)f.shift()()},t=self.webpackChunkapp_container=self.webpackChunkapp_container||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),Promise.all([u.e(271),u.e(58)]).then(u.bind(u,58))})();
//# sourceMappingURL=bundle.js.map