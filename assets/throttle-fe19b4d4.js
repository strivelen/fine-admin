import{bp as v,aw as N}from"./vendor-0e720bfc.js";function B(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var S=B,U=typeof v=="object"&&v&&v.Object===Object&&v,D=U,X=D,H=typeof self=="object"&&self&&self.Object===Object&&self,q=X||H||Function("return this")(),G=q,z=G,J=function(){return z.Date.now()},K=J,Q=/\s/;function V(e){for(var t=e.length;t--&&Q.test(e.charAt(t)););return t}var Y=V,Z=Y,ee=/^\s+/;function te(e){return e&&e.slice(0,Z(e)+1).replace(ee,"")}var re=te,ne=G,ie=ne.Symbol,L=ie,x=L,W=Object.prototype,ae=W.hasOwnProperty,oe=W.toString,m=x?x.toStringTag:void 0;function ce(e){var t=ae.call(e,m),n=e[m];try{e[m]=void 0;var i=!0}catch{}var o=oe.call(e);return i&&(t?e[m]=n:delete e[m]),o}var fe=ce,se=Object.prototype,ue=se.toString;function de(e){return ue.call(e)}var be=de,E=L,le=fe,me=be,ge="[object Null]",ve="[object Undefined]",I=E?E.toStringTag:void 0;function Te(e){return e==null?e===void 0?ve:ge:I&&I in Object(e)?le(e):me(e)}var ye=Te;function je(e){return e!=null&&typeof e=="object"}var $e=je,Se=ye,Oe=$e,pe="[object Symbol]";function _e(e){return typeof e=="symbol"||Oe(e)&&Se(e)==pe}var he=_e,xe=re,k=S,Ee=he,R=0/0,Ie=/^[-+]0x[0-9a-f]+$/i,ke=/^0b[01]+$/i,Re=/^0o[0-7]+$/i,we=parseInt;function Ne(e){if(typeof e=="number")return e;if(Ee(e))return R;if(k(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=k(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=xe(e);var n=ke.test(e);return n||Re.test(e)?we(e.slice(2),n?2:8):Ie.test(e)?R:+e}var Ge=Ne,Le=S,$=K,w=Ge,We="Expected a function",Ce=Math.max,Fe=Math.min;function Pe(e,t,n){var i,o,u,s,a,f,d=0,O=!1,b=!1,T=!0;if(typeof e!="function")throw new TypeError(We);t=w(t)||0,Le(n)&&(O=!!n.leading,b="maxWait"in n,u=b?Ce(w(n.maxWait)||0,t):u,T="trailing"in n?!!n.trailing:T);function y(r){var c=i,l=o;return i=o=void 0,d=r,s=e.apply(l,c),s}function F(r){return d=r,a=setTimeout(g,t),O?y(r):s}function P(r){var c=r-f,l=r-d,h=t-c;return b?Fe(h,u-l):h}function p(r){var c=r-f,l=r-d;return f===void 0||c>=t||c<0||b&&l>=u}function g(){var r=$();if(p(r))return _(r);a=setTimeout(g,P(r))}function _(r){return a=void 0,T&&i?y(r):(i=o=void 0,s)}function A(){a!==void 0&&clearTimeout(a),d=0,i=f=o=a=void 0}function M(){return a===void 0?s:_($())}function j(){var r=$(),c=p(r);if(i=arguments,o=this,f=r,c){if(a===void 0)return F(f);if(b)return clearTimeout(a),a=setTimeout(g,t),y(f)}return a===void 0&&(a=setTimeout(g,t)),s}return j.cancel=A,j.flush=M,j}var C=Pe;const He=N(C);var Ae=C,Me=S,Be="Expected a function";function Ue(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(Be);return Me(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),Ae(e,t,{leading:i,maxWait:t,trailing:o})}var De=Ue;const qe=N(De);export{ye as _,G as a,L as b,$e as c,He as d,D as e,he as f,S as i,qe as t};
