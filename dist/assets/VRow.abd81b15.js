import{m as b,k as ae,l as ne,h as P,n as se,b as re,o as le,c as R,p as ie,q as oe,r as ce,e as ue,s as ve,V as de,t as ge}from"./VBtn.9bb2eadf.js";import{p as y,e as h,k as l,c as _,T as F,U as W,l as D,V as me,s as S,r as fe,M as I,W as ye,N as Se,w as E,X as _e,F as be,v as he,I as Ve,m as Ce,R as ke,S as Pe,Y as Ie,Z as Re}from"./index.d55d2dc8.js";function ze(e){return{aspectStyles:_(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const G=y({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...b(),...ae()},"v-responsive"),L=h()({name:"VResponsive",props:G(),setup(e,n){let{slots:a}=n;const{aspectStyles:t}=ze(e),{dimensionStyles:i}=ne(e);return P(()=>{var r;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[l("div",{class:"v-responsive__sizer",style:t.value},null),(r=a.additional)==null?void 0:r.call(a),a.default&&l("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}});function je(e,n){if(!F)return;const a=n.modifiers||{},t=n.value,{handler:i,options:r}=typeof t=="object"?t:{handler:t,options:{}},o=new IntersectionObserver(function(){var m;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0;const c=(m=e._observe)==null?void 0:m[n.instance.$.uid];if(!c)return;const g=v.some(V=>V.isIntersecting);i&&(!a.quiet||c.init)&&(!a.once||g||c.init)&&i(g,v,d),g&&a.once?U(e,n):c.init=!0},r);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:o},o.observe(e)}function U(e,n){var t;const a=(t=e._observe)==null?void 0:t[n.instance.$.uid];!a||(a.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const we={mounted:je,unmounted:U},Te=we,Ne=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),k=(e,n)=>{let{slots:a}=n;const{transition:t,disabled:i,...r}=e,{component:o=me,...v}=typeof t=="object"?t:{};return W(o,D(typeof t=="string"?{name:i?"":t}:v,r,{disabled:i}),a)},Ae=y({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...G(),...b(),...Ne()},"v-img"),$e=h()({name:"VImg",directives:{intersect:Te},props:Ae(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:a,slots:t}=n;const i=S(""),r=fe(),o=S(e.eager?"loading":"idle"),v=S(),d=S(),c=_(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=_(()=>c.value.aspect||v.value/d.value||0);I(()=>e.src,()=>{m(o.value!=="idle")}),I(g,(s,u)=>{!s&&u&&r.value&&C(r.value)}),ye(()=>m());function m(s){if(!(e.eager&&s)&&!(F&&!s&&!e.eager)){if(o.value="loading",c.value.lazySrc){const u=new Image;u.src=c.value.lazySrc,C(u,null)}!c.value.src||Se(()=>{var u,f;if(a("loadstart",((u=r.value)==null?void 0:u.currentSrc)||c.value.src),(f=r.value)!=null&&f.complete){if(r.value.naturalWidth||w(),o.value==="error")return;g.value||C(r.value,null),V()}else g.value||C(r.value),T()})}}function V(){var s;T(),o.value="loaded",a("load",((s=r.value)==null?void 0:s.currentSrc)||c.value.src)}function w(){var s;o.value="error",a("error",((s=r.value)==null?void 0:s.currentSrc)||c.value.src)}function T(){const s=r.value;s&&(i.value=s.currentSrc||s.src)}let N=-1;function C(s){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const f=()=>{clearTimeout(N);const{naturalHeight:B,naturalWidth:O}=s;B||O?(v.value=O,d.value=B):!s.complete&&o.value==="loading"&&u!=null?N=window.setTimeout(f,u):(s.currentSrc.endsWith(".svg")||s.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,d.value=1)};f()}const A=_(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),Z=()=>{var f;if(!c.value.src||o.value==="idle")return null;const s=l("img",{class:["v-img__img",A.value],src:c.value.src,srcset:c.value.srcset,alt:e.alt,sizes:e.sizes,ref:r,onLoad:V,onError:w},null),u=(f=t.sources)==null?void 0:f.call(t);return l(k,{transition:e.transition,appear:!0},{default:()=>[E(u?l("picture",{class:"v-img__picture"},[u,s]):s,[[he,o.value==="loaded"]])]})},Q=()=>l(k,{transition:e.transition},{default:()=>[c.value.lazySrc&&o.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",A.value],src:c.value.lazySrc,alt:e.alt},null)]}),p=()=>t.placeholder?l(k,{transition:e.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!t.error)&&l("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,ee=()=>t.error?l(k,{transition:e.transition,appear:!0},{default:()=>[o.value==="error"&&l("div",{class:"v-img__error"},[t.error()])]}):null,te=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,$=S(!1);{const s=I(g,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{$.value=!0})}),s())})}return P(()=>{const[s]=L.filterProps(e);return E(l(L,D({class:["v-img",{"v-img--booting":!$.value},e.class],style:e.style},s,{aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(be,null,[l(Z,null,null),l(Q,null,null),l(te,null,null),l(p,null,null),l(ee,null,null)]),default:t.default}),[[_e("intersect"),{handler:m,options:e.options},null,{once:!0}]])}),{currentSrc:i,image:r,state:o,naturalWidth:v,naturalHeight:d}}}),Be=y({start:Boolean,end:Boolean,icon:Ve,image:String,...b(),...se(),...re(),...le(),...R(),...Ce(),...ie({variant:"flat"})},"v-avatar"),qe=h()({name:"VAvatar",props:Be(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=ke(e),{colorClasses:i,colorStyles:r,variantClasses:o}=oe(e),{densityClasses:v}=ce(e),{roundedClasses:d}=ue(e),{sizeClasses:c,sizeStyles:g}=ve(e);return P(()=>l(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,i.value,v.value,d.value,c.value,o.value,e.class],style:[r.value,g.value,e.style]},{default:()=>{var m;return[e.image?l($e,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?l(de,{key:"icon",icon:e.icon},null):(m=a.default)==null?void 0:m.call(a),ge(!1,"v-avatar")]}})),{}}});const Oe=y({fluid:{type:Boolean,default:!1},...b(),...R()},"v-container"),xe=h()({name:"VContainer",props:Oe(),setup(e,n){let{slots:a}=n;const{rtlClasses:t}=Pe();return P(()=>l(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},t.value,e.class],style:e.style},a)),{}}}),z=["start","end","center"],q=["space-between","space-around","space-evenly"];function j(e,n){return Ie.reduce((a,t)=>{const i=e+Re(t);return a[i]=n(),a},{})}const Ee=[...z,"baseline","stretch"],x=e=>Ee.includes(e),H=j("align",()=>({type:String,default:null,validator:x})),Le=[...z,...q],Y=e=>Le.includes(e),J=j("justify",()=>({type:String,default:null,validator:Y})),Me=[...z,...q,"stretch"],K=e=>Me.includes(e),X=j("alignContent",()=>({type:String,default:null,validator:K})),M={align:Object.keys(H),justify:Object.keys(J),alignContent:Object.keys(X)},Fe={align:"align",justify:"justify",alignContent:"align-content"};function We(e,n,a){let t=Fe[e];if(a!=null){if(n){const i=n.replace(e,"");t+=`-${i}`}return t+=`-${a}`,t.toLowerCase()}}const De=y({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:x},...H,justify:{type:String,default:null,validator:Y},...J,alignContent:{type:String,default:null,validator:K},...X,...b(),...R()},"v-row"),He=h()({name:"VRow",props:De(),setup(e,n){let{slots:a}=n;const t=_(()=>{const i=[];let r;for(r in M)M[r].forEach(o=>{const v=e[o],d=We(r,o,v);d&&i.push(d)});return i.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),i});return()=>{var i;return W(e.tag,{class:["v-row",t.value,e.class],style:e.style},(i=a.default)==null?void 0:i.call(a))}}});export{Te as I,k as M,qe as V,He as a,$e as b,xe as c,Ne as m};
