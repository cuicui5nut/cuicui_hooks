!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"cuicui_hooks","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.db7bb147.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.fd162efb.async.js",65],["280.e8c51481.chunk.css",280],["280.1124e031.async.js",280],["hooks__src__useToggle__index.md.ba043d02.async.js",466],["nm__dumi__theme-default__layouts__DocLayout__index.04714f5d.async.js",519],["hooks__src__useBoolean__index.md.c2b22616.async.js",676],["dumi__tmp-production__dumi__theme__ContextWrapper.3d01bbc3.async.js",923],["docs__index.md.85852f74.async.js",935],["docs__guide.md.b834447b.async.js",937]],"r":{"/*":[2,3,4,5,7,9],"/":[10,4,5,7,9],"/guide":[11,4,5,7,9],"/~demos/:id":[0,1,9],"/hooks/use-boolean":[8,4,5,7,9],"/hooks/use-toggle":[6,4,5,7,9]}},{publicPath:"/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();