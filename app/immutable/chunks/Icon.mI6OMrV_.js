import{r as U,s as J,b as V,a as y,u as X,g as Y,d as Z,j as q,e as D}from"./scheduler.C8nX4UK8.js";import{n as K,o as L,S as p,i as x,B as O,x as W,C as Q,a as R,d as b,D as S,g as M,h as $,E as ee}from"./index.CSY0SryM.js";function P(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function te(s,e){L(s,1,1,()=>{e.delete(s.key)})}function oe(s,e){s.f(),te(s,e)}function ae(s,e,o,i,n,a,h,u,c,d,_,k){let t=s.length,l=a.length,f=t;const v={};for(;f--;)v[s[f].key]=f;const w=[],z=new Map,j=new Map,A=[];for(f=l;f--;){const r=k(n,a,f),m=o(r);let g=h.get(m);g?A.push(()=>g.p(r,e)):(g=d(m,r),g.c()),z.set(m,w[f]=g),m in v&&j.set(m,Math.abs(f-v[m]))}const B=new Set,I=new Set;function C(r){K(r,1),r.m(u,_),h.set(r.key,r),_=r.first,l--}for(;t&&l;){const r=w[l-1],m=s[t-1],g=r.key,N=m.key;r===m?(_=r.first,t--,l--):z.has(N)?!h.has(g)||B.has(g)?C(r):I.has(N)?t--:j.get(g)>j.get(N)?(I.add(g),C(r)):(B.add(N),t--):(c(m,h),t--)}for(;t--;){const r=s[t];z.has(r.key)||c(r,h)}for(;l;)C(w[l-1]);return U(A),w}function T(s,e){const o={},i={},n={$$scope:1};let a=s.length;for(;a--;){const h=s[a],u=e[a];if(u){for(const c in h)c in u||(i[c]=1);for(const c in u)n[c]||(o[c]=u[c],n[c]=1);s[a]=u}else for(const c in h)n[c]=1}for(const h in i)h in o||(o[h]=void 0);return o}function fe(s){return typeof s=="object"&&s!==null?s:{}}/**
 * @license lucide-svelte v0.312.0 - ISC

This source code is licensed under the ISC license.
See the LICENSE file in the root directory of this source tree.
 */const F={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function G(s,e,o){const i=s.slice();return i[10]=e[o][0],i[11]=e[o][1],i}function E(s){let e,o=[s[11]],i={};for(let n=0;n<o.length;n+=1)i=y(i,o[n]);return{c(){e=O(s[10]),this.h()},l(n){e=Q(n,s[10],{}),R(e).forEach(b),this.h()},h(){S(e,i)},m(n,a){M(n,e,a)},p(n,a){S(e,i=T(o,[a&32&&n[11]]))},d(n){n&&b(e)}}}function H(s){let e=s[10],o,i=s[10]&&E(s);return{c(){i&&i.c(),o=W()},l(n){i&&i.l(n),o=W()},m(n,a){i&&i.m(n,a),M(n,o,a)},p(n,a){n[10]?e?J(e,n[10])?(i.d(1),i=E(n),e=n[10],i.c(),i.m(o.parentNode,o)):i.p(n,a):(i=E(n),e=n[10],i.c(),i.m(o.parentNode,o)):e&&(i.d(1),i=null,e=n[10])},d(n){n&&b(o),i&&i.d(n)}}}function se(s){let e,o,i,n,a,h=P(s[5]),u=[];for(let t=0;t<h.length;t+=1)u[t]=H(G(s,h,t));const c=s[9].default,d=V(c,s,s[8],null);let _=[F,s[6],{width:s[2]},{height:s[2]},{stroke:s[1]},{"stroke-width":i=s[4]?Number(s[3])*24/Number(s[2]):s[3]},{class:n=`lucide-icon lucide lucide-${s[0]} ${s[7].class??""}`}],k={};for(let t=0;t<_.length;t+=1)k=y(k,_[t]);return{c(){e=O("svg");for(let t=0;t<u.length;t+=1)u[t].c();o=W(),d&&d.c(),this.h()},l(t){e=Q(t,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var l=R(e);for(let f=0;f<u.length;f+=1)u[f].l(l);o=W(),d&&d.l(l),l.forEach(b),this.h()},h(){S(e,k)},m(t,l){M(t,e,l);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(e,null);$(e,o),d&&d.m(e,null),a=!0},p(t,[l]){if(l&32){h=P(t[5]);let f;for(f=0;f<h.length;f+=1){const v=G(t,h,f);u[f]?u[f].p(v,l):(u[f]=H(v),u[f].c(),u[f].m(e,o))}for(;f<u.length;f+=1)u[f].d(1);u.length=h.length}d&&d.p&&(!a||l&256)&&X(d,c,t,t[8],a?Z(c,t[8],l,null):Y(t[8]),null),S(e,k=T(_,[F,l&64&&t[6],(!a||l&4)&&{width:t[2]},(!a||l&4)&&{height:t[2]},(!a||l&2)&&{stroke:t[1]},(!a||l&28&&i!==(i=t[4]?Number(t[3])*24/Number(t[2]):t[3]))&&{"stroke-width":i},(!a||l&129&&n!==(n=`lucide-icon lucide lucide-${t[0]} ${t[7].class??""}`))&&{class:n}]))},i(t){a||(K(d,t),a=!0)},o(t){L(d,t),a=!1},d(t){t&&b(e),ee(u,t),d&&d.d(t)}}}function ne(s,e,o){const i=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let n=q(e,i),{$$slots:a={},$$scope:h}=e,{name:u}=e,{color:c="currentColor"}=e,{size:d=24}=e,{strokeWidth:_=2}=e,{absoluteStrokeWidth:k=!1}=e,{iconNode:t}=e;return s.$$set=l=>{o(7,e=y(y({},e),D(l))),o(6,n=q(e,i)),"name"in l&&o(0,u=l.name),"color"in l&&o(1,c=l.color),"size"in l&&o(2,d=l.size),"strokeWidth"in l&&o(3,_=l.strokeWidth),"absoluteStrokeWidth"in l&&o(4,k=l.absoluteStrokeWidth),"iconNode"in l&&o(5,t=l.iconNode),"$$scope"in l&&o(8,h=l.$$scope)},e=D(e),[u,c,d,_,k,t,n,e,h,a]}class ue extends p{constructor(e){super(),x(this,e,ne,se,J,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}export{ue as I,fe as a,P as e,oe as f,T as g,ae as u};