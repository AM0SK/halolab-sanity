"use strict";(()=>{var r=()=>{var e;let o="Last Published:";for(let t of document.childNodes)if(t.nodeType===Node.COMMENT_NODE&&((e=t.textContent)!=null&&e.includes(o))){let n=t.textContent.trim().split(o)[1];if(n)return new Date(n)}};var s=o=>{let e=r();console.log(`Hello ${o}!`),console.log(`This site was last published on ${e==null?void 0:e.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"2-digit"})}.`)};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{s("AMOSK")});})();
