"use strict";(globalThis["webpackChunkionic_app_base"]=globalThis["webpackChunkionic_app_base"]||[]).push([[74],{74:(e,t,o)=>{o.r(t),o.d(t,{startTapClick:()=>s});var n=o(461),i=o(587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s=e=>{if(void 0===n.d)return;let t,o,s,p=10*-v,f=0;const h=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),L=new WeakMap,m=e=>{p=(0,i.u)(e),g(e)},w=e=>{p=(0,i.u)(e),k(e)},b=e=>{if(2===e.button)return;const t=(0,i.u)(e)-v;p<t&&g(e)},E=e=>{const t=(0,i.u)(e)-v;p<t&&k(e)},T=()=>{s&&clearTimeout(s),s=void 0,t&&(y(!1),t=void 0)},g=e=>{t||C(a(e),e)},k=e=>{C(void 0,e)},C=(e,o)=>{if(e&&e===t)return;s&&clearTimeout(s),s=void 0;const{x:n,y:a}=(0,i.v)(o);if(t){if(L.has(t))throw new Error("internal error");t.classList.contains(d)||R(t,n,a),y(!0)}if(e){const t=L.get(e);t&&(clearTimeout(t),L.delete(e)),e.classList.remove(d);const o=()=>{R(e,n,a),s=void 0};r(e)?o():s=setTimeout(o,l)}t=e},R=(e,t,n)=>{if(f=Date.now(),e.classList.add(d),!h)return;const i=c(e);null!==i&&(_(),o=i.addRipple(t,n))},_=()=>{void 0!==o&&(o.then((e=>e())),o=void 0)},y=e=>{_();const o=t;if(!o)return;const n=u-Date.now()+f;if(e&&n>0&&!r(o)){const e=setTimeout((()=>{o.classList.remove(d),L.delete(o)}),u);L.set(o,e)}else o.classList.remove(d)};n.d.addEventListener("ionGestureCaptured",T),n.d.addEventListener("touchstart",m,!0),n.d.addEventListener("touchcancel",w,!0),n.d.addEventListener("touchend",w,!0),n.d.addEventListener("pointercancel",T,!0),n.d.addEventListener("mousedown",b,!0),n.d.addEventListener("mouseup",E,!0)},a=e=>{if(void 0===e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}}},r=e=>e.classList.contains("ion-activatable-instant"),c=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},d="ion-activated",l=100,u=150,v=2500}}]);
//# sourceMappingURL=74.9ef9a123.js.map