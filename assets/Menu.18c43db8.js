var p=Object.defineProperty,_=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var u=(s,e,t)=>e in s?p(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,d=(s,e)=>{for(var t in e||(e={}))f.call(e,t)&&u(s,t,e[t]);if(i)for(var t of i(e))y.call(e,t)&&u(s,t,e[t]);return s},m=(s,e)=>_(s,g(e));import{c as v,u as b,a as h,b as k,h as x,d as C,r as Q,o as l,e as n,f as S,F as B,g as q,i as r,w as c,Q as w,j as A,k as $,l as j,m as z}from"./index.9bf1ce51.js";import{Q as F}from"./QCard.53026b25.js";import"./use-dark.8242f4ad.js";var N=v({name:"QCardActions",props:m(d({},b),{vertical:Boolean}),setup(s,{slots:e}){const t=h(s),o=k(()=>`q-card__actions ${t.value} q-card__actions--${s.vertical===!0?"vert column":"horiz row"}`);return()=>x("div",{class:o.value},C(e.default))}});const R={class:"text-blue-grey-12 q-mt-lg"},T={class:"container row justify-around q-gutter-xl"},V={props:{realisationsStore:{type:Object,required:!0}},setup(s){return(e,t)=>{const o=Q("router-link");return l(),n("div",R,[S("div",T,[(l(!0),n(B,null,q(s.realisationsStore.realisations,a=>(l(),n("div",{key:a.id,class:"col-3"},[r(F,{class:"bg-primary"},{default:c(()=>[r(w,{src:`/tbm2/images/${a.image}`,alt:a.name,"spinner-color":"black"},null,8,["src","alt"]),r(N,{align:"center"},{default:c(()=>[r(o,{to:{name:"afficher.typesRealisations",params:{id:a.id,slugType:a.slugType}},style:{display:"inline-block","text-decoration":"none"}},{default:c(()=>[r(A,{size:"lg",color:"primary",label:a.name,class:"glossy text-blue-grey-12"},null,8,["label"])]),_:2},1032,["to"])]),_:2},1024)]),_:2},1024)]))),128))])])}}},P={setup(s){const e=$();return(t,o)=>(l(),j(V,{realisationsStore:z(e)},null,8,["realisationsStore"]))}};export{P as default};
