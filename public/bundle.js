var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function p(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function h(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function m(t,n){n=""+n,t.data!==n&&(t.data=n)}function v(t,n){(null!=n||t.value)&&(t.value=n)}let b;function $(t){b=t}function g(){if(!b)throw new Error("Function called outside component initialization");return b}const y=[],x=[],k=[],_=[],w=Promise.resolve();let E=!1;function C(t){k.push(t)}function N(){const t=new Set;do{for(;y.length;){const t=y.shift();$(t),P(t.$$)}for(;x.length;)x.pop()();for(let n=0;n<k.length;n+=1){const e=k[n];t.has(e)||(e(),t.add(e))}k.length=0}while(y.length);for(;_.length;)_.pop()();E=!1}function P(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(C))}const j=new Set;let L;function A(t,n){t&&t.i&&(j.delete(t),t.i(n))}function B(t,e){const o=e.token={};function c(t,c,u,i){if(e.token!==o)return;e.resolved=u&&{[u]:i};const l=n(n({},e.ctx),e.resolved),s=t&&(e.current=t)(l);e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==c&&t&&(L={r:0,c:[],p:L},function(t,n,e,o){if(t&&t.o){if(j.has(t))return;j.add(t),L.c.push((()=>{j.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}(t,1,1,(()=>{e.blocks[n]=null})),L.r||r(L.c),L=L.p)})):e.block.d(1),s.c(),A(s,1),s.m(e.mount(),e.anchor),N()),e.block=s,e.blocks&&(e.blocks[c]=s)}if((u=t)&&"object"==typeof u&&"function"==typeof u.then){const n=g();if(t.then((t=>{$(n),c(e.then,1,e.value,t),$(null)}),(t=>{$(n),c(e.catch,2,e.error,t),$(null)})),e.current!==e.pending)return c(e.pending,0),!0}else{if(e.current!==e.then)return c(e.then,1,e.value,t),!0;e.resolved={[e.value]:t}}var u}function S(t,n){t.$$.dirty||(y.push(t),E||(E=!0,w.then(N)),t.$$.dirty=o()),t.$$.dirty[n]=!0}function G(n,u,i,l,s,a){const f=b;$(n);const d=u.props||{},p=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:o(),dirty:null};let h=!1;p.ctx=i?i(n,d,((t,e,o=e)=>(p.ctx&&s(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),h&&S(n,t)),e))):d,p.update(),h=!0,r(p.before_update),p.fragment=l(p.ctx),u.target&&(u.hydrate?p.fragment.l(function(t){return Array.from(t.childNodes)}(u.target)):p.fragment.c(),u.intro&&A(n.$$.fragment),function(t,n,o){const{fragment:u,on_mount:i,on_destroy:l,after_update:s}=t.$$;u.m(n,o),C((()=>{const n=i.map(e).filter(c);l?l.push(...n):r(n),t.$$.on_mount=[]})),s.forEach(C)}(n,u.target,u.anchor),N()),$(f)}function O(t){var n,e,o=t.error+"";return{c(){n=a("p"),e=f(o)},m(t,o){l(t,n,o),i(n,e)},p(t,n){t.comic&&o!==(o=n.error+"")&&m(e,o)},d(t){t&&s(n)}}}function q(t){var n,e,o,r,c,u,p,v,b,$,g=t.response.title+"",y=t.response.num+"";return{c(){n=a("h3"),e=f(g),o=d(),r=a("p"),c=f("#"),u=f(y),p=d(),v=a("img"),h(n,"id","title"),h(n,"class","svelte-1nb4ptv"),h(r,"id","num"),h(r,"class","svelte-1nb4ptv"),h(v,"src",b=t.response.img),h(v,"alt",$=t.response.alt),h(v,"class","svelte-1nb4ptv")},m(t,s){l(t,n,s),i(n,e),l(t,o,s),l(t,r,s),i(r,c),i(r,u),l(t,p,s),l(t,v,s)},p(t,n){t.comic&&g!==(g=n.response.title+"")&&m(e,g),t.comic&&y!==(y=n.response.num+"")&&m(u,y),t.comic&&b!==(b=n.response.img)&&h(v,"src",b),t.comic&&$!==($=n.response.alt)&&h(v,"alt",$)},d(t){t&&(s(n),s(o),s(r),s(p),s(v))}}}function z(n){var e;return{c(){(e=a("p")).textContent="loading"},m(t,n){l(t,e,n)},p:t,d(t){t&&s(e)}}}function D(e){var o,c,u,f,m,b,$,g,y,x,k,_,w,E,C,N,P=!1;function j(){P=!0,e.input_input_handler.call(b)}let L={ctx:e,current:null,token:null,pending:z,then:q,catch:O,value:"response",error:"error"};return B(C=e.comic,L),{c(){(o=a("h1")).textContent="Svelte Powered XKCD Viewer",c=d(),u=a("div"),(f=a("button")).textContent="Prev",m=d(),b=a("input"),$=d(),(g=a("button")).textContent="Get by number",y=d(),(x=a("button")).textContent="next",k=d(),(_=a("button")).textContent="Get latest",w=d(),E=a("div"),L.block.c(),h(o,"class","svelte-1nb4ptv"),h(b,"type","number"),h(u,"id","controls"),h(u,"class","svelte-1nb4ptv"),h(E,"id","comic"),h(E,"class","svelte-1nb4ptv"),N=[p(f,"click",e.handlePrev),p(b,"input",j),p(g,"click",e.handleByNum),p(x,"click",e.handleNext),p(_,"click",e.handleLatest)]},m(t,n){l(t,o,n),l(t,c,n),l(t,u,n),i(u,f),i(u,m),i(u,b),v(b,e.current),i(u,$),i(u,g),i(u,y),i(u,x),l(t,k,n),l(t,_,n),l(t,w,n),l(t,E,n),L.block.m(E,L.anchor=null),L.mount=()=>E,L.anchor=null},p(t,o){e=o,!P&&t.current&&v(b,e.current),P=!1,L.ctx=e,"comic"in t&&C!==(C=e.comic)&&B(C,L)||L.block.p(t,n(n({},e),L.resolved))},i:t,o:t,d(t){t&&(s(o),s(c),s(u),s(k),s(_),s(w),s(E)),L.block.d(),L.token=null,L=null,r(N)}}}function F(t,n,e){let o,r=0,c=u();async function u(t){if(t>r)throw new Error("that comic hasnt been made yet");const n=await fetch(`https://xkcd.now.sh/?comic=${t||"latest"}`),c=await n.json();if(n.ok)return e("current",o=c.num),o>r&&(r=o),c;throw new Error(c)}return{current:o,comic:c,handleNext:function(){e("comic",c=u(o+1))},handlePrev:function(){e("comic",c=u(o-1))},handleByNum:function(){e("comic",c=u(o))},handleLatest:function(){e("comic",c=u())},input_input_handler:function(){var t;t=this.value,o=""===t?void 0:+t,e("current",o)}}}return new class extends class{$destroy(){var n,e;e=1,(n=this).$$.fragment&&(r(n.$$.on_destroy),n.$$.fragment.d(e),n.$$.on_destroy=n.$$.fragment=null,n.$$.ctx={}),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),G(this,t,F,D,u,[])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
