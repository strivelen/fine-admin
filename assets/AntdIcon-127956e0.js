import{r as m,bj as h,as as k,au as i,c6 as W,at as j,aP as z,aA as q,aK as I,j as N}from"./vendor-1a382111.js";import{w as F,d as G}from"./index-6efb831b.js";var H=m.createContext({});const A=H;function J(n,o){F(n,"[@ant-design/icons] ".concat(o))}function _(n){return h(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(h(n.icon)==="object"||typeof n.icon=="function")}function S(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(o,e){var r=n[e];switch(e){case"class":o.className=r,delete o.class;break;default:o[e]=r}return o},{})}function v(n,o,e){return e?k.createElement(n.tag,i(i({key:o},S(n.attrs)),e),(n.children||[]).map(function(r,a){return v(r,"".concat(o,"-").concat(n.tag,"-").concat(a))})):k.createElement(n.tag,i({key:o},S(n.attrs)),(n.children||[]).map(function(r,a){return v(r,"".concat(o,"-").concat(n.tag,"-").concat(a))}))}function E(n){return W(n)[0]}function R(n){return n?Array.isArray(n)?n:[n]:[]}var M=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,Q=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:M,e=m.useContext(A),r=e.csp;m.useEffect(function(){G(o,"@ant-design-icons",{prepend:!0,csp:r})},[])},U=["icon","className","onClick","style","primaryColor","secondaryColor"],l={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function V(n){var o=n.primaryColor,e=n.secondaryColor;l.primaryColor=o,l.secondaryColor=e||E(o),l.calculated=!!e}function X(){return i({},l)}var C=function(o){var e=o.icon,r=o.className,a=o.onClick,f=o.style,c=o.primaryColor,y=o.secondaryColor,d=j(o,U),s=l;if(c&&(s={primaryColor:c,secondaryColor:y||E(c)}),Q(),J(_(e),"icon should be icon definiton, but got ".concat(e)),!_(e))return null;var t=e;return t&&typeof t.icon=="function"&&(t=i(i({},t),{},{icon:t.icon(s.primaryColor,s.secondaryColor)})),v(t.icon,"svg-".concat(t.name),i({className:r,onClick:a,style:f,"data-icon":t.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},d))};C.displayName="IconReact";C.getTwoToneColors=X;C.setTwoToneColors=V;const p=C;function P(n){var o=R(n),e=z(o,2),r=e[0],a=e[1];return p.setTwoToneColors({primaryColor:r,secondaryColor:a})}function Y(){var n=p.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var Z=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];P("#1890ff");var u=m.forwardRef(function(n,o){var e,r=n.className,a=n.icon,f=n.spin,c=n.rotate,y=n.tabIndex,d=n.onClick,s=n.twoToneColor,t=j(n,Z),b=m.useContext(A),w=b.prefixCls,g=w===void 0?"anticon":w,$=b.rootClassName,B=q($,g,(e={},I(e,"".concat(g,"-").concat(a.name),!!a.name),I(e,"".concat(g,"-spin"),!!f||a.name==="loading"),e),r),T=y;T===void 0&&d&&(T=-1);var O=c?{msTransform:"rotate(".concat(c,"deg)"),transform:"rotate(".concat(c,"deg)")}:void 0,D=R(s),x=z(D,2),K=x[0],L=x[1];return N("span",{...i(i({role:"img","aria-label":a.name},t),{},{ref:o,tabIndex:T,onClick:d,className:B}),children:N(p,{icon:a,primaryColor:K,secondaryColor:L,style:O})})});u.displayName="AntdIcon";u.getTwoToneColor=Y;u.setTwoToneColor=P;const en=u;export{en as A};
