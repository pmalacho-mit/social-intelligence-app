import{S as Q,i as x,s as F,e as m,c as E,g as v,f as d,h as A,j as u,w as z,J as oe,n as B,b as G,a as fe,u as V,d as ee,M as P,m as te,A as le,k as de,t as U,l as N,o as ne,r as pe,y as re,B as Je,C as Ge,D as Be,a9 as we,E as be,a8 as Qe,$ as me,aa as it,F as ot,V as ye,ab as Le,W as Te,a5 as Me,Y as ke,Z as Se,_ as Re,p as Ce,v as rt,q as he,R as at,I as ct,a7 as se,ac as Ee}from"./encryption-006280f7.js";const xe={"Comprehension of Verbal Communication":!1,"Comprehension of Nonverbal Communication":!1},$e={"Recognizing Emotions":!1,"Recongizing Engamenet":!1,"Recognition of Conversational Mechanics":!1,"Understanding Knowledge State of Others and Self":!1,"Understanding Intention of Others":!1,"Recognizing Social and Context Relationships":!1,"Recognizing Social Norms (Toxicity)":!1},et={"Appropriately Expresses Emotion":!1,"Appropriate Converstational Mechanics":!1,"Responding Appropriately to Knowledge State":!1,"Responding Appropriately to Intent of User":!1,"Responding Appropriately to Social Context":!1,"Responding Appropriately to Social Norms":!1},tt={"Appropriately Expresses Emotion":"Recognizing Emotions","Appropriate Converstational Mechanics":"Recognition of Conversational Mechanics","Responding Appropriately to Knowledge State":"Understanding Knowledge State of Others and Self","Responding Appropriately to Intent of User":"Understanding Intention of Others","Responding Appropriately to Social Context":"Recognizing Social and Context Relationships","Responding Appropriately to Social Norms":"Recognizing Social Norms (Toxicity)"};Object.entries(tt).reduce((e,[t,n])=>(e[n]=t,e),{});const Jt=e=>({timestamp:{...e.timestamp},selections:{...e.selections},reason:e.reason,recoveryBehavior:e.selections.isCompotence?"":e.recoveryBehavior,tier1:e.selections.isPerformance?{...xe}:{...e.tier1},tier2:e.selections.isPerformance?{...$e}:{...e.tier2},tier3:e.selections.isPerformance?{...et}:{...e.tier3},decisionBoundary:e.decisionBoundary}),Gt=e=>{for(const t in e.selections)e.selections[t]=!1;for(const t in e.tier1)e.tier1[t]=!1;for(const t in e.tier2)e.tier2[t]=!1;for(const t in e.tier3)e.tier3[t]=!1;e.reason="",e.recoveryBehavior="",e.decisionBoundary=0},Qt=(e,t)=>({timestamp:{start:e,end:t},selections:{isCompotence:!1,isPerformance:!1,isLongterm:!1},reason:"",recoveryBehavior:"",tier1:{...xe},tier2:{...$e},tier3:{...et},decisionBoundary:0}),xt=e=>((e.decisionBoundary===void 0||e.decisionBoundary===null)&&(e.decisionBoundary=0),typeof e.timestamp=="number"&&(e.timestamp={start:Math.max(e.timestamp-1,0),end:e.timestamp+.1}),e),$t=({selections:{isCompotence:e,isPerformance:t},tier1:n,tier2:l,tier3:s,reason:o,recoveryBehavior:i})=>t?!0:!(!o||!e&&!i),ue=e=>{for(const t in e)if(e[t])return!0;return!1};function ut(e){let t,n,l,s,o,i;return{c(){t=m("label"),n=m("input"),l=E(),s=m("span"),v(n,"type","checkbox"),v(n,"class","svelte-1nobnoy"),v(s,"class","slider svelte-1nobnoy"),v(t,"class","switch svelte-1nobnoy"),d(t,"--width",e[3]+"px"),d(t,"--colorR",e[2]),d(t,"--colorL",e[1])},m(r,a){A(r,t,a),u(t,n),n.checked=e[0],u(t,l),u(t,s),o||(i=z(n,"change",e[4]),o=!0)},p(r,[a]){a&1&&(n.checked=r[0]),a&8&&d(t,"--width",r[3]+"px"),a&4&&d(t,"--colorR",r[2]),a&2&&d(t,"--colorL",r[1])},i:oe,o:oe,d(r){r&&B(t),o=!1,i()}}}function ft(e,t,n){let{checked:l=!1}=t,{colorLeft:s}=t,{colorRight:o}=t,{width:i=60}=t;function r(){l=this.checked,n(0,l)}return e.$$set=a=>{"checked"in a&&n(0,l=a.checked),"colorLeft"in a&&n(1,s=a.colorLeft),"colorRight"in a&&n(2,o=a.colorRight),"width"in a&&n(3,i=a.width)},[l,s,o,i,r]}class dt extends Q{constructor(t){super(),x(this,t,ft,ut,F,{checked:0,colorLeft:1,colorRight:2,width:3})}}function gt(e){let t,n=e[1][0]+"",l,s,o,i,r,a,f,g=e[1][1]+"",p,y;function k(c){e[4](c)}let _={width:50,colorLeft:e[2],colorRight:e[3]};return e[0]!==void 0&&(_.checked=e[0]),i=new dt({props:_}),G.push(()=>fe(i,"checked",k)),{c(){t=m("div"),l=V(n),s=E(),o=m("div"),ee(i.$$.fragment),a=E(),f=m("div"),p=V(g),v(t,"class","label svelte-1dasnqw"),P(t,"selected",!e[0]),P(t,"disabled",e[0]),d(t,"grid-column",1),d(t,"text-align","left"),v(o,"class","label svelte-1dasnqw"),d(o,"grid-column",2),d(o,"text-align","left"),v(f,"class","label svelte-1dasnqw"),P(f,"selected",e[0]),P(f,"disabled",!e[0]),d(f,"grid-column",3),d(f,"text-align","left")},m(c,h){A(c,t,h),u(t,l),A(c,s,h),A(c,o,h),te(i,o,null),A(c,a,h),A(c,f,h),u(f,p),y=!0},p(c,[h]){(!y||h&2)&&n!==(n=c[1][0]+"")&&le(l,n),(!y||h&1)&&P(t,"selected",!c[0]),(!y||h&1)&&P(t,"disabled",c[0]);const L={};h&4&&(L.colorLeft=c[2]),h&8&&(L.colorRight=c[3]),!r&&h&1&&(r=!0,L.checked=c[0],de(()=>r=!1)),i.$set(L),(!y||h&2)&&g!==(g=c[1][1]+"")&&le(p,g),(!y||h&1)&&P(f,"selected",c[0]),(!y||h&1)&&P(f,"disabled",!c[0])},i(c){y||(U(i.$$.fragment,c),y=!0)},o(c){N(i.$$.fragment,c),y=!1},d(c){c&&(B(t),B(s),B(o),B(a),B(f)),ne(i)}}}function _t(e,t,n){let{labels:l}=t,{on:s=!1}=t,{colorLeft:o="#FFA400"}=t,{colorRight:i="#0568DE"}=t;const r=pe();function a(f){s=f,n(0,s)}return e.$$set=f=>{"labels"in f&&n(1,l=f.labels),"on"in f&&n(0,s=f.on),"colorLeft"in f&&n(2,o=f.colorLeft),"colorRight"in f&&n(3,i=f.colorRight)},e.$$.update=()=>{e.$$.dirty&1&&r("change",s)},[s,l,o,i,a]}class ht extends Q{constructor(t){super(),x(this,t,_t,gt,F,{labels:1,on:0,colorLeft:2,colorRight:3})}}function je(e,t,n){const l=e.slice();return l[4]=t[n].key,l[5]=t[n].labels,l[6]=t,l[7]=n,l}function Oe(e){let t,n,l;function s(r){e[2](r,e[4])}function o(){return e[3](e[4])}let i={labels:e[5]};return e[0].selections[e[4]]!==void 0&&(i.on=e[0].selections[e[4]]),t=new ht({props:i}),G.push(()=>fe(t,"on",s)),t.$on("change",o),{c(){ee(t.$$.fragment)},m(r,a){te(t,r,a),l=!0},p(r,a){e=r;const f={};!n&&a&1&&(n=!0,f.on=e[0].selections[e[4]],de(()=>n=!1)),t.$set(f)},i(r){l||(U(t.$$.fragment,r),l=!0)},o(r){N(t.$$.fragment,r),l=!1},d(r){ne(t,r)}}}function mt(e){let t,n,l=re(qe),s=[];for(let i=0;i<l.length;i+=1)s[i]=Oe(je(e,l,i));const o=i=>N(s[i],1,1,()=>{s[i]=null});return{c(){t=m("div");for(let i=0;i<s.length;i+=1)s[i].c();v(t,"class","svelte-1lgm1kg")},m(i,r){A(i,t,r);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(t,null);n=!0},p(i,[r]){if(r&3){l=re(qe);let a;for(a=0;a<l.length;a+=1){const f=je(i,l,a);s[a]?(s[a].p(f,r),U(s[a],1)):(s[a]=Oe(f),s[a].c(),U(s[a],1),s[a].m(t,null))}for(Je(),a=l.length;a<s.length;a+=1)o(a);Ge()}},i(i){if(!n){for(let r=0;r<l.length;r+=1)U(s[r]);n=!0}},o(i){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)N(s[r]);n=!1},d(i){i&&B(t),Be(s,i)}}}const qe=[{key:"isCompotence",labels:["Error","Compotence"]},{key:"isPerformance",labels:["Socio-Affective","Performance"]},{key:"isLongterm",labels:["Short Term","Long Term"]}];function pt(e,t,n){let{annotation:l}=t;const s=pe();function o(r,a){e.$$.not_equal(l.selections[a],r)&&(l.selections[a]=r,n(0,l))}const i=r=>s("change",r);return e.$$set=r=>{"annotation"in r&&n(0,l=r.annotation)},[l,s,o,i]}class en extends Q{constructor(t){super(),x(this,t,pt,mt,F,{annotation:0})}}function bt(e){let t,n,l,s=e[4]?"error":"competence",o,i,r,a,f,g,p,y,k,_,c,h;return{c(){t=m("div"),n=m("p"),l=V("Describe reason for "),o=V(s),i=V(":"),r=E(),a=m("textarea"),f=E(),g=m("div"),p=m("p"),p.textContent="Write error recovery competent behavior:",y=E(),k=m("textarea"),v(n,"class","svelte-194bv7k"),v(a,"class","svelte-194bv7k"),P(a,"fit",e[1]),v(p,"class","svelte-194bv7k"),k.disabled=_=!e[4],v(k,"class","svelte-194bv7k"),P(k,"fit",e[1]),v(g,"class","svelte-194bv7k"),P(g,"disabled",!e[4]),v(t,"class","container")},m(L,R){A(L,t,R),u(t,n),u(n,l),u(n,o),u(n,i),u(t,r),u(t,a),e[8](a),we(a,e[0].reason),u(t,f),u(t,g),u(g,p),u(g,y),u(g,k),e[10](k),we(k,e[0].recoveryBehavior),c||(h=[z(a,"input",e[9]),z(a,"input",e[7]),z(k,"input",e[11]),z(k,"input",e[6])],c=!0)},p(L,[R]){R&16&&s!==(s=L[4]?"error":"competence")&&le(o,s),R&1&&we(a,L[0].reason),R&2&&P(a,"fit",L[1]),R&16&&_!==(_=!L[4])&&(k.disabled=_),R&1&&we(k,L[0].recoveryBehavior),R&2&&P(k,"fit",L[1]),R&16&&P(g,"disabled",!L[4])},i:oe,o:oe,d(L){L&&B(t),e[8](null),e[10](null),c=!1,be(h)}}}function vt(e,t,n){let l,{annotation:s}=t,{type:o}=t,{fit:i=!1}=t,r,a;Qe(()=>{i&&(n(2,r.style.height="auto",r),n(2,r.style.height=`${r.scrollHeight}px`,r),n(3,a.style.height="auto",a),n(3,a.style.height=`${a.scrollHeight}px`,a))});function f(c){me.call(this,e,c)}function g(c){me.call(this,e,c)}function p(c){G[c?"unshift":"push"](()=>{r=c,n(2,r)})}function y(){s.reason=this.value,n(0,s)}function k(c){G[c?"unshift":"push"](()=>{a=c,n(3,a)})}function _(){s.recoveryBehavior=this.value,n(0,s)}return e.$$set=c=>{"annotation"in c&&n(0,s=c.annotation),"type"in c&&n(5,o=c.type),"fit"in c&&n(1,i=c.fit)},e.$$.update=()=>{e.$$.dirty&32&&n(4,l=o==="error")},[s,i,r,a,l,o,f,g,p,y,k,_]}class tn extends Q{constructor(t){super(),x(this,t,vt,bt,F,{annotation:0,type:5,fit:1})}}function wt(e){let t,n,l,s,o,i;return{c(){t=m("input"),n=E(),l=m("label"),s=V(e[3]),v(t,"type","checkbox"),v(t,"id",e[4]),t.disabled=e[1],v(l,"for",e[4]),v(l,"class","svelte-1efcj17"),P(l,"disabled",e[1])},m(r,a){A(r,t,a),t.checked=e[0][e[2]][e[3]],A(r,n,a),A(r,l,a),u(l,s),o||(i=z(t,"change",e[5]),o=!0)},p(r,[a]){a&2&&(t.disabled=r[1]),a&13&&(t.checked=r[0][r[2]][r[3]]),a&8&&le(s,r[3]),a&2&&P(l,"disabled",r[1])},i:oe,o:oe,d(r){r&&(B(t),B(n),B(l)),o=!1,i()}}}function yt(e,t,n){let{disabled:l=!1}=t,{annotation:s}=t,{level:o}=t,{key:i}=t;const r=pe();it(()=>r("update"));const a=i.replaceAll(" ","-");function f(){s[o][i]=this.checked,n(0,s)}return e.$$set=g=>{"disabled"in g&&n(1,l=g.disabled),"annotation"in g&&n(0,s=g.annotation),"level"in g&&n(2,o=g.level),"key"in g&&n(3,i=g.key)},[s,l,o,i,a,f]}class kt extends Q{constructor(t){super(),x(this,t,yt,wt,F,{disabled:1,annotation:0,level:2,key:3})}}function Pe(e,t,n){const l=e.slice();l[8]=t[n],l[11]=n;const s=l[2]||l[5](l[1],l[8],l[3]);return l[9]=s,l}function He(e){let t,n,l,s;return n=new kt({props:{annotation:e[0],level:e[1],key:e[8],disabled:e[9]}}),n.$on("update",e[7]),{c(){t=m("div"),ee(n.$$.fragment),l=E(),d(t,"grid-column",e[11]<e[4].length?1:2)},m(o,i){A(o,t,i),te(n,t,null),u(t,l),s=!0},p(o,i){const r={};i&1&&(r.annotation=o[0]),i&2&&(r.level=o[1]),i&14&&(r.disabled=o[9]),n.$set(r)},i(o){s||(U(n.$$.fragment,o),s=!0)},o(o){N(n.$$.fragment,o),s=!1},d(o){o&&B(t),ne(n)}}}function St(e){let t,n,l=re(e[4]),s=[];for(let i=0;i<l.length;i+=1)s[i]=He(Pe(e,l,i));const o=i=>N(s[i],1,1,()=>{s[i]=null});return{c(){t=m("div");for(let i=0;i<s.length;i+=1)s[i].c();d(t,"display","grid")},m(i,r){A(i,t,r);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(t,null);n=!0},p(i,[r]){if(r&63){l=re(i[4]);let a;for(a=0;a<l.length;a+=1){const f=Pe(i,l,a);s[a]?(s[a].p(f,r),U(s[a],1)):(s[a]=He(f),s[a].c(),U(s[a],1),s[a].m(t,null))}for(Je(),a=l.length;a<s.length;a+=1)o(a);Ge()}},i(i){if(!n){for(let r=0;r<l.length;r+=1)U(s[r]);n=!0}},o(i){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)N(s[r]);n=!1},d(i){i&&B(t),Be(s,i)}}}function Rt(e,t,n){let{annotation:l}=t,{level:s}=t,{tier:o}=t,{attributesDisabled:i}=t,{dependsOn:r}=t;const a=Object.keys(o),f=(p,y,k)=>{switch(p){case"tier1":return!1;case"tier2":return!Object.values(k).includes(!0);case"tier3":const _=y,c=!k[tt[_]];return c&&n(6,o[_]=!1,o),c}};function g(p){me.call(this,e,p)}return e.$$set=p=>{"annotation"in p&&n(0,l=p.annotation),"level"in p&&n(1,s=p.level),"tier"in p&&n(6,o=p.tier),"attributesDisabled"in p&&n(2,i=p.attributesDisabled),"dependsOn"in p&&n(3,r=p.dependsOn)},[l,s,i,r,a,f,o,g]}class De extends Q{constructor(t){super(),x(this,t,Rt,St,F,{annotation:0,level:1,tier:6,attributesDisabled:2,dependsOn:3})}}function Ct(e){let t,n,l,s,o,i,r,a,f,g,p,y,k,_,c,h,L,R,D,T,w,j,M,Y,K,X,ie,J,W,ae,Z,H,ce,S,q,b,O,$;return W=new De({props:{annotation:e[0],level:"tier1",tier:e[0].tier1,dependsOn:null,attributesDisabled:e[1]}}),W.$on("update",e[8]),H=new De({props:{annotation:e[0],level:"tier2",tier:e[0].tier2,dependsOn:e[0].tier1,attributesDisabled:e[1]||!e[2]}}),H.$on("update",e[9]),q=new De({props:{annotation:e[0],level:"tier3",tier:e[0].tier3,dependsOn:e[0].tier2,attributesDisabled:e[1]||!e[3]}}),q.$on("update",e[10]),{c(){t=m("div"),n=m("div"),l=E(),s=m("div"),o=E(),i=m("div"),r=E(),a=m("div"),f=E(),g=m("div"),p=E(),y=m("div"),y.innerHTML='<span class="title svelte-jumg4x">Tier 1</span> <span>Basic understanding</span>',k=E(),_=m("div"),_.innerHTML='<span class="title svelte-jumg4x">Tier 2</span> <span>Social Alignment</span>',c=E(),h=m("div"),h.innerHTML='<span class="title svelte-jumg4x">Tier 3</span> <span>Verbal / Nonverbal Response</span>',L=E(),R=m("div"),D=m("button"),T=V("Add Tier 2 Annotations (placeholder text)"),j=E(),M=m("div"),Y=m("button"),K=V("Add Tier 3 Annotations (placeholder text)"),ie=E(),J=m("div"),ee(W.$$.fragment),ae=E(),Z=m("div"),ee(H.$$.fragment),ce=E(),S=m("div"),ee(q.$$.fragment),v(n,"class","row svelte-jumg4x"),d(n,"grid-row",1),v(s,"class","row grey svelte-jumg4x"),d(s,"grid-row",2),v(i,"class","row svelte-jumg4x"),d(i,"grid-row",3),v(a,"class","row grey svelte-jumg4x"),d(a,"grid-row",4),v(g,"class","row svelte-jumg4x"),d(g,"grid-row",5),d(y,"grid-column",1),d(y,"grid-row",1),d(y,"display","grid"),v(_,"class","svelte-jumg4x"),P(_,"disabled",!e[2]),d(_,"grid-column",1),d(_,"grid-row",3),d(_,"display","grid"),v(h,"class","svelte-jumg4x"),P(h,"disabled",!e[3]),d(h,"grid-column",1),d(h,"grid-row",5),d(h,"display","grid"),D.disabled=w=!ue(e[0].tier1)&&!e[2],v(D,"class","svelte-jumg4x"),d(R,"grid-column",2),d(R,"grid-row",2),d(R,"padding","10px"),Y.disabled=X=!ue(e[0].tier2)&&!e[3],v(Y,"class","svelte-jumg4x"),d(M,"grid-column",2),d(M,"grid-row",4),d(M,"padding","10px"),d(J,"grid-column",2),d(J,"grid-row",1),v(Z,"class","row2"),d(Z,"grid-column",2),d(Z,"grid-row",3),d(S,"grid-column",2),d(S,"grid-row",5),v(t,"class","container svelte-jumg4x"),d(t,"display","grid")},m(C,I){A(C,t,I),u(t,n),u(t,l),u(t,s),u(t,o),u(t,i),u(t,r),u(t,a),u(t,f),u(t,g),u(t,p),u(t,y),u(t,k),u(t,_),u(t,c),u(t,h),u(t,L),u(t,R),u(R,D),u(D,T),u(t,j),u(t,M),u(M,Y),u(Y,K),u(t,ie),u(t,J),te(W,J,null),u(t,ae),u(t,Z),te(H,Z,null),u(t,ce),u(t,S),te(q,S,null),b=!0,O||($=[z(D,"click",e[6]),z(Y,"click",e[7])],O=!0)},p(C,[I]){(!b||I&4)&&P(_,"disabled",!C[2]),(!b||I&8)&&P(h,"disabled",!C[3]),(!b||I&5&&w!==(w=!ue(C[0].tier1)&&!C[2]))&&(D.disabled=w),(!b||I&9&&X!==(X=!ue(C[0].tier2)&&!C[3]))&&(Y.disabled=X);const ve={};I&1&&(ve.annotation=C[0]),I&1&&(ve.tier=C[0].tier1),I&2&&(ve.attributesDisabled=C[1]),W.$set(ve);const ge={};I&1&&(ge.annotation=C[0]),I&1&&(ge.tier=C[0].tier2),I&1&&(ge.dependsOn=C[0].tier1),I&6&&(ge.attributesDisabled=C[1]||!C[2]),H.$set(ge);const _e={};I&1&&(_e.annotation=C[0]),I&1&&(_e.tier=C[0].tier3),I&1&&(_e.dependsOn=C[0].tier2),I&10&&(_e.attributesDisabled=C[1]||!C[3]),q.$set(_e)},i(C){b||(U(W.$$.fragment,C),U(H.$$.fragment,C),U(q.$$.fragment,C),b=!0)},o(C){N(W.$$.fragment,C),N(H.$$.fragment,C),N(q.$$.fragment,C),b=!1},d(C){C&&B(t),ne(W),ne(H),ne(q),O=!1,be($)}}}function Et(e,t,n){let{annotation:l}=t,{disabled:s}=t;const o=pe();let i=!1,r=!1;const a=()=>{n(2,i=!1),n(3,r=!1),console.log(l.tier1)},f=()=>n(2,i=!0),g=()=>n(3,r=!0),p=()=>{n(0,l),o("update")},y=()=>{n(0,l),o("update")};function k(_){me.call(this,e,_)}return e.$$set=_=>{"annotation"in _&&n(0,l=_.annotation),"disabled"in _&&n(1,s=_.disabled)},e.$$.update=()=>{e.$$.dirty&5&&n(2,i=i||ue(l.tier2)),e.$$.dirty&9&&n(3,r=r||ue(l.tier3))},[l,s,i,r,o,a,f,g,p,y,k]}class nn extends Q{constructor(t){super(),x(this,t,Et,Ct,F,{annotation:0,disabled:1,reset:5})}get reset(){return this.$$.ctx[5]}}function Ue(e,t,n){const l=e.slice();return l[5]=t[n].value,l[6]=t[n].label,l}function Ze(e){let t,n,l,s,o,i=e[6]+"",r,a,f,g;return{c(){t=m("label"),n=m("input"),o=E(),r=V(i),a=E(),n.checked=l=e[0]===e[5],v(n,"type","radio"),v(n,"name",e[3]),n.value=s=e[5]},m(p,y){A(p,t,y),u(t,n),u(t,o),u(t,r),u(t,a),f||(g=z(n,"change",e[2]),f=!0)},p(p,y){y&3&&l!==(l=p[0]===p[5])&&(n.checked=l),y&2&&s!==(s=p[5])&&(n.value=s),y&2&&i!==(i=p[6]+"")&&le(r,i)},d(p){p&&B(t),f=!1,g()}}}function Lt(e){let t,n=re(e[1]),l=[];for(let s=0;s<n.length;s+=1)l[s]=Ze(Ue(e,n,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();t=ot()},m(s,o){for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(s,o);A(s,t,o)},p(s,[o]){if(o&15){n=re(s[1]);let i;for(i=0;i<n.length;i+=1){const r=Ue(s,n,i);l[i]?l[i].p(r,o):(l[i]=Ze(r),l[i].c(),l[i].m(t.parentNode,t))}for(;i<l.length;i+=1)l[i].d(1);l.length=n.length}},i:oe,o:oe,d(s){s&&B(t),Be(l,s)}}}let At=0;const Bt=()=>At++;function Dt(e,t,n){let{options:l}=t,{selected:s}=t;const o=pe();function i(a){n(0,s=parseFloat(a.currentTarget.value)),o("change",s)}let r=`${Bt()}`;return e.$$set=a=>{"options"in a&&n(1,l=a.options),"selected"in a&&n(0,s=a.selected)},[s,l,i,r]}class nt extends Q{constructor(t){super(),x(this,t,Dt,Lt,F,{options:1,selected:0})}}function Tt(e){let t,n,l,s,o;function i(a){e[3](a)}let r={options:Mt};return e[0]!==void 0&&(r.selected=e[0]),l=new nt({props:r}),G.push(()=>fe(l,"selected",i)),l.$on("change",e[4]),{c(){t=m("h4"),t.textContent="When did you make your decision",n=E(),ee(l.$$.fragment)},m(a,f){A(a,t,f),A(a,n,f),te(l,a,f),o=!0},p(a,[f]){const g={};!s&&f&1&&(s=!0,g.selected=a[0],de(()=>s=!1)),l.$set(g)},i(a){o||(U(l.$$.fragment,a),o=!0)},o(a){N(l.$$.fragment,a),o=!1},d(a){a&&(B(t),B(n)),ne(l,a)}}}const Mt=["Before Robot","After Robot ","After Human"].map((e,t)=>({label:e,value:t}));function jt(e,t,n){let{annotation:l}=t;const s=()=>n(0,o=l.decisionBoundary);let o=l.decisionBoundary;function i(a){o=a,n(0,o)}function r(a){me.call(this,e,a)}return e.$$set=a=>{"annotation"in a&&n(1,l=a.annotation)},e.$$.update=()=>{e.$$.dirty&1&&n(1,l.decisionBoundary=o,l)},[o,l,s,i,r]}class ln extends Q{constructor(t){super(),x(this,t,jt,Tt,F,{annotation:1,reset:2})}get reset(){return this.$$.ctx[2]}}const Ot=e=>({}),Ie=e=>({}),qt=e=>({slider:e&16}),Ne=e=>({slider:e[4]}),Pt=e=>({}),ze=e=>({}),Ht=e=>({}),Ve=e=>({});function Ut(e){let t,n,l,s,o,i,r,a,f,g,p,y;const k=e[7].left,_=ye(k,e,e[6],Ve),c=e[7].right,h=ye(c,e,e[6],ze),L=e[7].under,R=ye(L,e,e[6],Ne),D=e[7].below,T=ye(D,e,e[6],Ie);return{c(){t=m("div"),n=m("div"),l=m("div"),s=E(),o=m("div"),_&&_.c(),i=E(),r=m("div"),h&&h.c(),a=E(),R&&R.c(),f=E(),T&&T.c(),v(l,"class","body svelte-4ixcc4"),d(l,"left",100*e[0]+"%"),d(l,"right",100*(1-e[1])+"%"),v(o,"class","handle svelte-4ixcc4"),v(o,"data-which","start"),d(o,"left",100*e[0]+"%"),v(r,"class","handle svelte-4ixcc4"),v(r,"data-which","end"),d(r,"left",100*e[1]+"%"),v(n,"class","slider svelte-4ixcc4"),v(t,"class","double-range-container svelte-4ixcc4")},m(w,j){A(w,t,j),u(t,n),u(n,l),e[8](l),u(n,s),u(n,o),_&&_.m(o,null),e[9](o),u(n,i),u(n,r),h&&h.m(r,null),u(n,a),R&&R.m(n,null),u(n,f),T&&T.m(n,null),e[10](n),g=!0,p||(y=[Le(Ae.call(null,l)),Le(Ae.call(null,o)),z(o,"dragmove",Te(Me(e[5]("start")))),Le(Ae.call(null,r)),z(r,"dragmove",Te(Me(e[5]("end"))))],p=!0)},p(w,[j]){(!g||j&1)&&d(l,"left",100*w[0]+"%"),(!g||j&2)&&d(l,"right",100*(1-w[1])+"%"),_&&_.p&&(!g||j&64)&&ke(_,k,w,w[6],g?Re(k,w[6],j,Ht):Se(w[6]),Ve),(!g||j&1)&&d(o,"left",100*w[0]+"%"),h&&h.p&&(!g||j&64)&&ke(h,c,w,w[6],g?Re(c,w[6],j,Pt):Se(w[6]),ze),(!g||j&2)&&d(r,"left",100*w[1]+"%"),R&&R.p&&(!g||j&80)&&ke(R,L,w,w[6],g?Re(L,w[6],j,qt):Se(w[6]),Ne),T&&T.p&&(!g||j&64)&&ke(T,D,w,w[6],g?Re(D,w[6],j,Ot):Se(w[6]),Ie)},i(w){g||(U(_,w),U(h,w),U(R,w),U(T,w),g=!0)},o(w){N(_,w),N(h,w),N(R,w),N(T,w),g=!1},d(w){w&&B(t),e[8](null),_&&_.d(w),e[9](null),h&&h.d(w),R&&R.d(w),T&&T.d(w),e[10](null),p=!1,be(y)}}}function Ae(e){let t,n;function l(i){i.type==="touchstart"&&(i=i.touches[0]),t=i.clientX,n=i.clientY,e.dispatchEvent(new CustomEvent("dragstart",{detail:{x:t,y:n}})),window.addEventListener("mousemove",s),window.addEventListener("mouseup",o),window.addEventListener("touchmove",s),window.addEventListener("touchend",o)}function s(i){i.type==="touchmove"&&(i=i.changedTouches[0]);const r=i.clientX-t,a=i.clientY-n;t=i.clientX,n=i.clientY,e.dispatchEvent(new CustomEvent("dragmove",{detail:{x:t,y:n,dx:r,dy:a}}))}function o(i){t=i.clientX,n=i.clientY,e.dispatchEvent(new CustomEvent("dragend",{detail:{x:t,y:n}})),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",o),window.removeEventListener("touchmove",s),window.removeEventListener("touchend",o)}return e.addEventListener("mousedown",l),e.addEventListener("touchstart",l),{destroy(){e.removeEventListener("mousedown",l),e.removeEventListener("touchstart",l)}}}const lt=(e,t)=>{const{left:n,right:l}=t.getBoundingClientRect(),s=l-n;return Math.min(Math.max((e.detail.x-n)/s,0),1)};function Zt(e,t,n){let{$$slots:l={},$$scope:s}=t,{start:o=0}=t,{end:i=1}=t,r,a,f;function g(_){return function(c){const h=lt(c,f);_==="start"?(n(0,o=h),n(1,i=Math.max(i,h))):(n(0,o=Math.min(h,o)),n(1,i=h))}}function p(_){G[_?"unshift":"push"](()=>{a=_,n(3,a)})}function y(_){G[_?"unshift":"push"](()=>{r=_,n(2,r)})}function k(_){G[_?"unshift":"push"](()=>{f=_,n(4,f)})}return e.$$set=_=>{"start"in _&&n(0,o=_.start),"end"in _&&n(1,i=_.end),"$$scope"in _&&n(6,s=_.$$scope)},[o,i,r,a,f,g,s,l,p,y,k]}class It extends Q{constructor(t){super(),x(this,t,Zt,Ut,F,{start:0,end:1})}}function Fe(e,t,n){const l=e.slice();l[31]=t[n],l[37]=n;const s=l[31].timestamp;l[32]=s.start,l[33]=s.end;const o=(l[32]-l[7])/l[6];l[34]=o;const i=(l[8]-l[33])/l[6];return l[35]=i,l}function Ye(e){let t,n=se(e[7])+"",l;return{c(){t=m("strong"),l=V(n),v(t,"class","highlight svelte-1qfmsus")},m(s,o){A(s,t,o),u(t,l)},p(s,o){o[0]&128&&n!==(n=se(s[7])+"")&&le(l,n)},d(s){s&&B(t)}}}function Ke(e){let t,n=se(e[8])+"",l;return{c(){t=m("strong"),l=V(n),v(t,"class","highlight svelte-1qfmsus")},m(s,o){A(s,t,o),u(t,l)},p(s,o){o[0]&256&&n!==(n=se(s[8])+"")&&le(l,n)},d(s){s&&B(t)}}}function Nt(e){let t,n=`${100*(e[9]-e[7])/e[6]}%`,l,s;function o(...i){return e[22](e[38],...i)}return{c(){t=m("div"),v(t,"slot","under"),v(t,"class","indicator svelte-1qfmsus"),d(t,"left",n)},m(i,r){A(i,t,r),l||(s=[Le(Ae.call(null,t)),z(t,"dragmove",Te(Me(o)))],l=!0)},p(i,r){e=i,r[0]&704&&n!==(n=`${100*(e[9]-e[7])/e[6]}%`)&&d(t,"left",n)},d(i){i&&B(t),l=!1,be(s)}}}function zt(e){let t,n=se(e[0],!0)+"",l;return{c(){t=m("div"),l=V(n),v(t,"class","label svelte-1qfmsus"),v(t,"slot","left")},m(s,o){A(s,t,o),u(t,l)},p(s,o){o[0]&1&&n!==(n=se(s[0],!0)+"")&&le(l,n)},d(s){s&&B(t)}}}function Vt(e){let t,n=se(e[1],!0)+"",l;return{c(){t=m("div"),l=V(n),v(t,"class","label svelte-1qfmsus"),v(t,"slot","right")},m(s,o){A(s,t,o),u(t,l)},p(s,o){o[0]&2&&n!==(n=se(s[1],!0)+"")&&le(l,n)},d(s){s&&B(t)}}}function We(e){let t,n=re(e[11]),l=[];for(let s=0;s<n.length;s+=1)l[s]=Xe(Fe(e,n,s));return{c(){t=m("div");for(let s=0;s<l.length;s+=1)l[s].c();d(t,"width","100%"),d(t,"height","20px")},m(s,o){A(s,t,o);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(t,null)},p(s,o){if(o[0]&2496){n=re(s[11]);let i;for(i=0;i<n.length;i+=1){const r=Fe(s,n,i);l[i]?l[i].p(r,o):(l[i]=Xe(r),l[i].c(),l[i].m(t,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=n.length}},d(s){s&&B(t),Be(l,s)}}}function Xe(e){let t,n="8px",l=`${100*Ee(e[34],0,1)}%`,s=`${100*Ee(e[35],0,1)}%`;return{c(){t=m("div"),d(t,"top",n),d(t,"position","absolute"),d(t,"left",l),d(t,"right",s),d(t,"background-color",e[31].selections.isCompotence?"rgba(0,255,0,0.5)":"rgba(255,0,0, 0.5)"),d(t,"height","5px")},m(o,i){A(o,t,i)},p(o,i){i[0]&2240&&l!==(l=`${100*Ee(o[34],0,1)}%`)&&d(t,"left",l),i[0]&2368&&s!==(s=`${100*Ee(o[35],0,1)}%`)&&d(t,"right",s),i[0]&2048&&d(t,"background-color",o[31].selections.isCompotence?"rgba(0,255,0,0.5)":"rgba(255,0,0, 0.5)")},d(o){o&&B(t)}}}function Ft(e){let t,n=e[2]&&We(e);return{c(){t=m("div"),n&&n.c(),v(t,"slot","below")},m(l,s){A(l,t,s),n&&n.m(t,null)},p(l,s){l[2]?n?n.p(l,s):(n=We(l),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(l){l&&B(t),n&&n.d()}}}function Yt(e){let t,n,l,s,o,i,r,a,f,g=e[7],p,y,k=e[8],_,c,h,L,R,D,T,w,j,M,Y,K,X,ie,J;function W(b){e[21](b)}let ae={options:e[10]};e[3]!==void 0&&(ae.selected=e[3]),i=new nt({props:ae}),G.push(()=>fe(i,"selected",W));let Z=Ye(e),H=Ke(e);function ce(b){e[23](b)}function S(b){e[24](b)}let q={$$slots:{below:[Ft],right:[Vt],left:[zt],under:[Nt,({slider:b})=>({38:b}),({slider:b})=>[0,b?128:0]]},$$scope:{ctx:e}};return e[5]!==void 0&&(q.start=e[5]),e[4]!==void 0&&(q.end=e[4]),c=new It({props:q}),G.push(()=>fe(c,"start",ce)),G.push(()=>fe(c,"end",S)),{c(){t=m("div"),n=m("div"),n.innerHTML='<span class="title svelte-1qfmsus">Clip selection:</span>',l=E(),s=m("div"),o=V(`Zoom level:
        `),ee(i.$$.fragment),a=E(),f=m("span"),Z.c(),p=E(),y=m("span"),H.c(),_=E(),ee(c.$$.fragment),R=E(),D=m("div"),T=m("center"),w=m("button"),w.textContent="Set Clip Start",j=E(),M=m("button"),M.textContent="Play Clip",Y=E(),K=m("button"),K.textContent="Set Clip End",v(f,"class","boundary svelte-1qfmsus"),v(y,"class","boundary svelte-1qfmsus"),d(y,"float","right"),v(w,"class","btn btn-sm"),d(w,"display","inline"),v(M,"class","btn btn-sm"),d(M,"display","inline"),v(K,"class","btn btn-sm"),d(K,"display","inline"),v(D,"class","labels svelte-1qfmsus")},m(b,O){A(b,t,O),u(t,n),u(t,l),u(t,s),u(s,o),te(i,s,null),u(t,a),u(t,f),Z.m(f,null),u(t,p),u(t,y),H.m(y,null),u(t,_),te(c,t,null),A(b,R,O),A(b,D,O),u(D,T),u(T,w),u(T,j),u(T,M),u(T,Y),u(T,K),X=!0,ie||(J=[z(w,"click",e[12]),z(M,"click",e[14]),z(K,"click",e[13])],ie=!0)},p(b,O){const $={};O[0]&1024&&($.options=b[10]),!r&&O[0]&8&&(r=!0,$.selected=b[3],de(()=>r=!1)),i.$set($),O[0]&128&&F(g,g=b[7])?(Z.d(1),Z=Ye(b),Z.c(),Z.m(f,null)):Z.p(b,O),O[0]&256&&F(k,k=b[8])?(H.d(1),H=Ke(b),H.c(),H.m(y,null)):H.p(b,O);const C={};O[0]&3015|O[1]&384&&(C.$$scope={dirty:O,ctx:b}),!h&&O[0]&32&&(h=!0,C.start=b[5],de(()=>h=!1)),!L&&O[0]&16&&(L=!0,C.end=b[4],de(()=>L=!1)),c.$set(C)},i(b){X||(U(i.$$.fragment,b),U(c.$$.fragment,b),X=!0)},o(b){N(i.$$.fragment,b),N(c.$$.fragment,b),X=!1},d(b){b&&(B(t),B(R),B(D)),ne(i),Z.d(b),H.d(b),ne(c),ie=!1,be(J)}}}const st=({level:e},t,n,l)=>{const s=e/2,o=n-t,i=t+o/2,r=i-s>=0,a=i+s<=l;return r&&a?[i-s,i+s]:r?[i-(e-(l-i)),l]:a?[0,i+(e-i)]:[0,0]},Kt=(e,t,n,l,s)=>{if(!e)return[];e[0]=t;const o=l-n,i={level:0};return e.filter(r=>{if(t<r||o>r)return!1;i.level=r;const a=st(i,n,l,t);return!(s<a[0]||s>a[1])}).map((r,a)=>({label:a===0?"full video":se(r),value:a,level:r}))};function Wt(e,t,n){let l,s,o,i,r,a,f,g,p,y,k,_;Ce(e,rt,S=>n(27,p=S)),Ce(e,he,S=>n(9,y=S)),Ce(e,at,S=>n(20,k=S)),Ce(e,ct,S=>n(11,_=S));let{clipStart:c}=t,{clipEnd:h}=t,{showAnnotations:L}=t,R=!0,D=0;const T=()=>{n(5,l=0/k),n(4,s=k/k),n(0,c=o+l*r),n(1,h=o+s*r),n(3,M=0),n(18,D=2)},w=()=>({clipStart:c,clipEnd:h}),j=S=>{const q=f==null?void 0:f[S];if(!q)return;const b=c,O=h,$=st(q,b,O,k);n(7,o=$[0]),n(8,i=$[1]);const{level:C}=q;n(5,l=(b-o)/C),n(4,s=(O-o)/C),n(6,r=i-o),n(0,c=o+l*r),n(1,h=o+s*r)};let M=0;const Y=S=>{S<i&&S>o||S===0||(n(3,M--,M),M<0&&n(3,M=0),j(M))},K=S=>{p&&(he.set(S),p.play())},X=()=>{n(5,l=g),s<l&&n(4,s=Math.min(l+.05,1))},ie=()=>{n(4,s=g),s<l&&n(5,l=Math.max(s-.05,0))};let J;const W=()=>{he.set(c);const S=h;p.play();const q=Symbol("playClip");J=q;function b(){if(q!==J){p.removeEventListener("timeupdate",b);return}p.currentTime>=S&&(p.pause(),he.set(h),p.removeEventListener("timeupdate",b))}p.addEventListener("timeupdate",b)};Qe(()=>n(17,R=!1));function ae(S){M=S,n(3,M)}const Z=(S,q)=>{const b=lt(q,S);he.set(o+b*r)};function H(S){l=S,n(5,l),n(20,k)}function ce(S){s=S,n(4,s),n(20,k)}return e.$$set=S=>{"clipStart"in S&&n(0,c=S.clipStart),"clipEnd"in S&&n(1,h=S.clipEnd),"showAnnotations"in S&&n(2,L=S.showAnnotations)},e.$$.update=()=>{e.$$.dirty[0]&1048576&&n(5,l=0/k),e.$$.dirty[0]&1048576&&n(4,s=k/k),e.$$.dirty[0]&1048576&&n(7,o=k-k),e.$$.dirty[0]&1048576&&n(8,i=k),e.$$.dirty[0]&384&&n(6,r=i-o),e.$$.dirty[0]&131297&&n(0,c=R?c:o+l*r),e.$$.dirty[0]&131282&&n(1,h=R?h:o+s*r),e.$$.dirty[0]&1048576&&n(19,a=[k,600,300,120,60,30,10]),e.$$.dirty[0]&1573379&&n(10,f=Kt(a,k,c,h,y)),e.$$.dirty[0]&8&&j(M),e.$$.dirty[0]&512&&Y(y),e.$$.dirty[0]&393218&&(R||(D>0?n(18,D--,D):K(h))),e.$$.dirty[0]&393217&&(R||(D>0?n(18,D--,D):K(c))),e.$$.dirty[0]&704&&(g=(y-o)/r)},[c,h,L,M,s,l,r,o,i,y,f,_,X,ie,W,T,w,R,D,a,k,ae,Z,H,ce]}class sn extends Q{constructor(t){super(),x(this,t,Wt,Yt,F,{clipStart:0,clipEnd:1,showAnnotations:2,reset:15,getClip:16},null,[-1,-1])}get reset(){return this.$$.ctx[15]}get getClip(){return this.$$.ctx[16]}}export{ln as D,en as S,nn as T,sn as V,tn as a,Jt as c,xt as f,Qt as g,Mt as o,Gt as r,$t as v};
