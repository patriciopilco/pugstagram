!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function o(){}n.r(e);function r(t){return t()}function l(){return Object.create(null)}function u(t){t.forEach(r)}function c(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}new Set;function i(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}new Set;let h;function m(t){h=t}const y=[],g=[],$=[],b=[],x=Promise.resolve();let _=!1;function v(){_||(_=!0,x.then(j))}function w(t){$.push(t)}let S=!1;const O=new Set;function j(){if(!S){S=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];m(e),k(e.$$)}for(y.length=0;g.length;)g.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];O.has(e)||(O.add(e),e())}$.length=0}while(y.length);for(;b.length;)b.pop()();_=!1,S=!1,O.clear()}}function k(t){if(null!==t.fragment){t.update(),u(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(w)}}const E=new Set;function M(t,e){t&&t.i&&(E.delete(t),t.i(e))}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let C;function P(t,e){const n=t.$$;null!==n.fragment&&(u(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e,n,a,i,s,d=[-1]){const p=h;m(t);const g=e.props||{},$=t.$$={fragment:null,ctx:null,props:s,update:o,not_equal:i,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:l(),dirty:d};let b=!1;if($.ctx=n?n(t,g,(e,n,...o)=>{const r=o.length?o[0]:n;return $.ctx&&i($.ctx[e],$.ctx[e]=r)&&($.bound[e]&&$.bound[e](r),b&&function(t,e){-1===t.$$.dirty[0]&&(y.push(t),v(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n}):[],$.update(),b=!0,u($.before_update),$.fragment=!!a&&a($.ctx),e.target){if(e.hydrate){const t=(x=e.target,Array.from(x.childNodes));$.fragment&&$.fragment.l(t),t.forEach(f)}else $.fragment&&$.fragment.c();e.intro&&M(t.$$.fragment),function(t,e,n){const{fragment:o,on_mount:l,on_destroy:a,after_update:i}=t.$$;o&&o.m(e,n),w(()=>{const e=l.map(r).filter(c);a?a.push(...e):u(e),t.$$.on_mount=[]}),i.forEach(w)}(t,e.target,e.anchor),j()}var x;m(p)}"function"==typeof HTMLElement&&(C=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){P(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class q{$destroy(){P(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function A(t){let e;return{c(){e=d("div"),e.innerHTML="<h1>Hello Pugstagram</h1>",p(e,"class","main")},m(t,n){s(t,e,n)},p:o,i:o,o:o,d(t){t&&f(e)}}}const H=new class extends q{constructor(t){var e;super(),document.getElementById("svelte-yu6fxd-style")||((e=d("style")).id="svelte-yu6fxd-style",e.textContent="body{background-color:aqua;color:white}",i(document.head,e)),T(this,t,null,A,a,{})}}({target:document.querySelector("main")});e.default=H}]);