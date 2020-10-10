!function(){"use strict";const e=(e,t)=>e===t;let t=C;const n={},r={owned:null,cleanups:null,context:null,owner:null},[o,l]=a(!1,!0);let s=null,i=null,u=null,c=null,f=0;function a(t,r){const o={value:t,observers:null,observerSlots:null,pending:n,comparator:r?"function"==typeof r?r:e:void 0};return[v.bind(o),g.bind(o)]}function d(e,t){b(m(e,t,!1))}function h(e,n){if(globalThis._$HYDRATION&&globalThis._$HYDRATION.asyncSSR)return;t=w;const r=m(e,n,!1);r.user=!0,c.push(r)}function p(e){let t,n=i;return i=null,t=e(),i=n,t}function v(){if(this.state&&this.sources){const e=u;u=null,1===this.state?b(this):x(this),u=e}if(i){const e=this.observers?this.observers.length:0;i.sources?(i.sources.push(this),i.sourceSlots.push(e)):(i.sources=[this],i.sourceSlots=[e]),this.observers?(this.observers.push(i),this.observerSlots.push(i.sources.length-1)):(this.observers=[i],this.observerSlots=[i.sources.length-1])}return this.value}function g(e,t){return this.comparator&&this.comparator(this.value,e)||(this.value=e,!this.observers||u&&!this.observers.length||S((()=>{for(let e=0;e<this.observers.length;e+=1){const t=this.observers[e];t.observers&&2!==t.state&&$(t),t.state=1,t.pure?u.push(t):c.push(t)}if(u.length>1e6)throw u=[],new Error("Potential Infinite Loop Detected.")}),!1)),e}function b(e){if(!e.fn)return;_(e);const t=s,n=i,r=f;i=s=e,function(e,t,n){let r;try{r=e.fn(t)}catch(e){A(e)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?g.call(e,r,!0):e.value=r,e.updatedAt=n)}(e,e.value,r),i=n,s=t}function m(e,t,n){const o={fn:e,state:1,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:s,context:null,pure:n};return null===s?console.warn("computations created outside a `createRoot` or `render` will never be disposed"):s!==r&&(s.owned?s.owned.push(o):s.owned=[o]),o}function y(e){let t,n=1===e.state&&e;if(e.suspense&&p(e.suspense.inFallback))return e.suspense.effects.push(e);for(;e.fn&&(e=e.owner);)2===e.state?t=e:1===e.state&&(n=e,t=void 0);if(t){const e=u;if(u=null,x(t),u=e,!n||1!==n.state)return}n&&b(n)}function S(e,n){if(u)return e();let r=!1;n||(u=[]),c?r=!0:c=[],f++;try{e()}catch(e){A(e)}finally{do{u&&(C(u),u=[]),r||(t(c),c=[])}while(u&&u.length);if(u=null,r)return;c=null}}function C(e){for(let t=0;t<e.length;t++)y(e[t])}function w(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:y(r)}const r=e.length;for(t=0;t<n;t++)y(e[t]);for(t=r;t<e.length;t++)y(e[t])}function x(e){e.state=0;for(let t=0;t<e.sources.length;t+=1){const n=e.sources[t];n.sources&&(1===n.state?y(n):2===n.state&&x(n))}}function $(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=2,n.observers&&$(n))}}function _(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)_(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function A(e){throw e}function N(e,t){return p((()=>e(t)))}function T(t,r){return function(t,r,o){const l=m(t,r,!0);return l.pending=n,l.observers=null,l.observerSlots=null,l.state=0,l.comparator=o?"function"==typeof o?o:e:void 0,b(l),v.bind(l)}(t,void 0,r)}function k(e,t,n){let r=n.length,o=t.length,l=r,s=0,i=0,u=t[o-1].nextSibling,c=null;for(;s<o||i<l;)if(o===s){const t=l<r?i?n[i-1].nextSibling:n[l-i]:u;for(;i<l;)e.insertBefore(n[i++],t)}else if(l===i)for(;s<o;)c&&c.has(t[s])||e.removeChild(t[s]),s++;else if(t[s]===n[i])s++,i++;else if(t[o-1]===n[l-1])o--,l--;else if(t[s]===n[l-1]&&n[i]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[i++],t[s++].nextSibling),e.insertBefore(n[--l],r),t[o]=n[l]}else{if(!c){c=new Map;let e=i;for(;e<l;)c.set(n[e],e++)}const r=c.get(t[s]);if(null!=r)if(i<r&&r<l){let u,f=s,a=1;for(;++f<o&&f<l&&null!=(u=c.get(t[f]))&&u===r+a;)a++;if(a>r-i){const o=t[s];for(;i<r;)e.insertBefore(n[i++],o)}else e.replaceChild(n[i++],t[s++])}else s++;else e.removeChild(t[s++])}}globalThis.Solid$$?console.warn("You appear to have multiple instances of Solid. This can lead to unexpected behavior."):globalThis.Solid$$=!0;const B=new Set;function P(e,t,n){const r=document.createElement("template");if(r.innerHTML=e,t&&r.innerHTML.split("<").length-1!==t)throw`Template html does not match input:\n${r.innerHTML}\n\n${e}`;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function D(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return L(e,t,r,n);d((r=>L(e,t(),r,n)),r)}function H(e){const t="__"+e.type;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n});null!==n;){const r=n[t];if(r){const o=n[t+"Data"];if(void 0!==o?r(o,e):r(e),e.cancelBubble)return}n=n.host&&n.host instanceof Node?n.host:n.parentNode}}function L(e,t,n,r,o){for(;"function"==typeof n;)n=n();if(t===n)return n;const l=typeof t,s=void 0!==r;if(e=s&&n[0]&&n[0].parentNode||e,"string"===l||"number"===l)if("number"===l&&(t=t.toString()),s){let o=n[0];o&&3===o.nodeType?o.data=t:o=document.createTextNode(t),n=I(e,n,r,o)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t;else if(null==t||"boolean"===l)n=I(e,n,r);else{if("function"===l)return d((()=>n=L(e,t(),n,r))),()=>n;if(Array.isArray(t)){const l=[];if(M(l,t,o))return d((()=>n=L(e,l,n,r,!0))),()=>n;if(0===l.length){if(n=I(e,n,r),s)return n}else Array.isArray(n)?0===n.length?Y(e,l,r):k(e,n,l):null==n||""===n?Y(e,l):k(e,s&&n||[e.firstChild],l);n=l}else if(t instanceof Node){if(Array.isArray(n)){if(s)return n=I(e,n,r,t);I(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}else console.warn("Skipped inserting",t)}return n}function M(e,t,n){let r=!1;for(let o=0,l=t.length;o<l;o++){let l,s=t[o];if(s instanceof Node)e.push(s);else if(null==s||!0===s||!1===s);else if(Array.isArray(s))r=M(e,s)||r;else if("string"==(l=typeof s))e.push(document.createTextNode(s));else if("function"===l)if(n){const t=s();r=M(e,Array.isArray(t)?t:[t])||r}else e.push(s),r=!0;else e.push(document.createTextNode(s.toString()))}return r}function Y(e,t,n){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function I(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(o!==s){const t=s.parentNode===e;r||l?t&&e.removeChild(s):t?e.replaceChild(o,s):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}class R{constructor(e,t){this.X=e,this.Y=t,this.buffer=new Uint32Array(Math.ceil(e*t/32))}get(e,t){const{X:n,Y:r}=this;(e%=n)<0&&(e+=n),(t%=r)<0&&(t+=r);const o=t*n+e;return this.buffer[o/32|0]&1<<o%32?1:0}set(e,t,n){const r=t*this.X+e;n?this.buffer[r/32|0]|=1<<r%32:this.buffer[r/32|0]&=~(1<<r%32)}}const E=(()=>{let e=2147483647*Math.random()|0;return()=>(e^=e<<13,e^=e>>17,e^=e<<5,e)})(),F=(e,t,n=.25)=>{const r=new R(e,t),o=100*n|0;for(let n=0;n<t;n++)for(let t=0;t<e;t++)E()%50+50<o&&r.set(t,n,1);return r},O=(X=[2,3],W=[3],(e,t,n)=>{const r=e.get(t-1,n-1)+e.get(t,n-1)+e.get(t+1,n-1)+e.get(t-1,n)+e.get(t+1,n)+e.get(t-1,n+1)+e.get(t,n+1)+e.get(t+1,n+1);return e.get(t,n)?X.includes(r):W.includes(r)});var X,W;const j=(e,t)=>{const n=Array(e);for(let r=0;r<e;r++)n[r]=t(r);return n},q=P("<td></td>",2),z=P("<tr></tr>",2),G=P('<table style="table-layout: fixed"></table>',2),U=P('<button type="button"></button>',2),J=P('<aside><table><tbody><tr><td>Cell Size:</td><td><input type="number" min="0"></td></tr><tr><td>World Width:</td><td><input type="number" min="0"></td></tr><tr><td>World Height:</td><td><input type="number" min="0"></td></tr></tbody></table><div> fps</div></aside>',29),K=P('<h1 style="text-align: center">Conway\'s Game of Life in <a target="_blank" rel="noopener noreferrer" href="https://github.com/ryansolid/solid">Solid</a></h1>',4),Q=P("<main></main>",2),[V,Z]=a(6),[ee,te]=a(64),[ne,re]=a(64),[oe,le]=a(F(ee(),ne())),[se,ie]=a(!1),[ue,ce]=a(0),fe=({x:e,y:t})=>(()=>{const n=q.cloneNode(!0);return d((r=>{const o=oe().get(e,t)?"cell cell-alive":"cell",l=V()+"px",s=V()+"px";return o!==r._v$&&(n.className=r._v$=o),l!==r._v$2&&n.style.setProperty("width",r._v$2=l),s!==r._v$3&&n.style.setProperty("height",r._v$3=s),r}),{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})(),ae=({y:e})=>(()=>{const t=z.cloneNode(!0);return D(t,(()=>j(ee(),(t=>N(fe,{x:t,y:e}))))),t})(),de=()=>(()=>{const e=G.cloneNode(!0);return D(e,(()=>j(ne(),(e=>N(ae,{y:e}))))),e})(),he=({onClick:e,children:t})=>(()=>{const n=U.cloneNode(!0);return n.__click=e,D(n,t),n})(),pe=()=>(()=>{const e=J.cloneNode(!0),t=e.firstChild,n=t.firstChild.firstChild,r=n.firstChild.nextSibling.firstChild,o=n.nextSibling,l=o.firstChild.nextSibling.firstChild,s=o.nextSibling.firstChild.nextSibling.firstChild,i=t.nextSibling,u=i.firstChild;return r.onchange=e=>Z(e.target.valueAsNumber),l.onchange=e=>te(e.target.valueAsNumber),s.onchange=e=>re(e.target.valueAsNumber),D(e,(()=>{const e=T((()=>!!se()),!0);return()=>e()?N(he,{onClick:()=>ie(!1),children:"Stop"}):N(he,{onClick:()=>ie(!0),children:"Start"})})(),i),D(e,N(he,{onClick:()=>le(F(ee(),ne())),children:"Randomize"}),i),D(i,(()=>ue()),u),d((e=>{const t=V(),n=ee(),o=ne();return t!==e._v$4&&(r.value=e._v$4=t),n!==e._v$5&&(l.value=e._v$5=n),o!==e._v$6&&(s.value=e._v$6=o),e}),{_v$4:void 0,_v$5:void 0,_v$6:void 0}),e})(),ve=()=>{let e;return h((()=>le(F(ee(),ne())))),h((()=>{se()?e=((e,t)=>{let n=0,r=Date.now(),o=0,l=requestAnimationFrame((function t(){o||(e(),n++,l=requestAnimationFrame(t))})),s=setInterval((()=>{let e=Date.now();t(1e3*n/(e-r)|0),n=0,r=e}),512);return()=>{o=1,cancelAnimationFrame(l),clearInterval(s)}})((()=>le(((e,t=O)=>{const{X:n,Y:r}=e,o=new R(n,r);for(let l=0;l<r;l++)for(let r=0;r<n;r++)t(e,r,l)&&o.set(r,l,1);return o})(oe()))),ce):(e?.(),e=void 0)})),[K.cloneNode(!0),(()=>{const e=Q.cloneNode(!0);return D(e,N(de,{}),null),D(e,N(pe,{}),null),e})()]};!function(e,t,n){let o;(function(e,t){t&&(s=t);const n=i,o=s,l=0===e.length?r:{owned:null,cleanups:null,context:null,owner:o};let u;s=l,i=null;try{S((()=>u=e((()=>_(l)))),!0)}finally{i=n,s=o}})((r=>{o=r,D(t,e(),t.firstChild?null:void 0,n)}))}((()=>N(ve,{})),document.body.appendChild(document.createElement("div"))),function(e){for(let t=0,n=e.length;t<n;t++){const n=e[t];B.has(n)||(B.add(n),document.addEventListener(n,H))}}(["click"])}();