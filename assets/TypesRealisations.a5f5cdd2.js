import{o as r,e as i,f as a,t as l,i as t,Q as m,r as p,l as y,w as c,q as f,j as g,F as _,g as b,k as h,b as x,m as d}from"./index.ad58d1f3.js";import{Q as v}from"./QCardSection.970cee4a.js";import{Q as k}from"./QCard.b43ecfc2.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";import"./use-dark.f541bccf.js";const $={class:"text-blue-grey-12"},Q={class:"row items-center content-center"},C={class:"col-4 offset-1"},j={class:"col-3 offset-1 text-h6"},w={props:{realisation:{type:Object,required:!0}},setup(e){return(o,n)=>(r(),i("section",$,[a("h1",null,l(e.realisation.typeName),1),a("div",Q,[a("div",C,[t(m,{alt:e.realisation.name,src:`/tbm2/images/${e.realisation.image}`,class:"rounded-borders","spinner-color":"black"},null,8,["alt","src"])]),a("div",j,l(e.realisation.description),1)])]))}};const B={class:"text-body1 text-blue-grey-12 q-gutter-md"},N={props:{realisation:{type:Object,required:!0}},setup(e){return(o,n)=>{const s=p("router-link");return r(),y(k,{class:"col bg-primary my-card"},{default:c(()=>[t(m,{src:`/tbm2/images/${e.realisation.image}`,alt:e.realisation.name,"spinner-color":"black"},null,8,["src","alt"]),t(v,{class:"q-pt-md",align:"center"},{default:c(()=>[a("div",B,[f(l(e.realisation.description)+" ",1),t(s,{to:{name:"afficher.details",params:{slug:e.realisation.slug}},style:{display:"inline-block","text-decoration":"none"}},{default:c(()=>[t(g,{size:"sm",push:"",color:"primary",icon:"visibility",class:"glossy text-blue-grey-12"})]),_:1},8,["to"])])]),_:1})]),_:1})}}};var S=q(N,[["__scopeId","data-v-53e26e15"]]);const T={class:"text-blue-grey-8"},R={class:"flex row justify-center q-gutter-md"},O={props:{realisation:{type:Object,required:!0}},setup(e){return(o,n)=>(r(),i("section",null,[a("h2",T,"Les "+l(e.realisation.name),1),a("div",R,[(r(!0),i(_,null,b(e.realisation.listeRealisations,s=>(r(),i("div",{key:s.slugType},[t(S,{realisation:s},null,8,["realisation"])]))),128))])]))}},E={props:{id:{type:Number,required:!0}},setup(e){const o=e,n=h(),s=x(()=>n.realisations.find(u=>u.id===o.id));return(u,V)=>(r(),i(_,null,[t(w,{realisation:d(s)},null,8,["realisation"]),t(O,{realisation:d(s)},null,8,["realisation"])],64))}};export{E as default};
