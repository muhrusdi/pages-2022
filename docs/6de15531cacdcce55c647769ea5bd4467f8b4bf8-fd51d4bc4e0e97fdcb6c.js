(self.webpackChunkmuhrusdi_github_io=self.webpackChunkmuhrusdi_github_io||[]).push([[730],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var l,c,s,u;if(Array.isArray(e)){if((l=e.length)!=o.length)return!1;for(c=l;0!=c--;)if(!i(e[c],o[c]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!i(c.value[1],o.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((l=e.length)!=o.length)return!1;for(c=l;0!=c--;)if(e[c]!==o[c])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((l=(s=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],o[s[c]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,o({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return n.createElement(u,o({attr:o({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var r,a=e.attr,i=e.size,c=e.title,s=l(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},4839:function(e,t,r){"use strict";var n,a=r(7294),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),m.canUseDOM?t(c):r&&(c=r(c))}var m=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(m,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(m,"canUseDOM",l),m}}},6537:function(e,t,r){"use strict";t.Z=r.p+"static/cv-muhrusdi-2022-282e523e16b2268bdb4c0c9ba604ba83.pdf"},3411:function(e,t,r){"use strict";r.d(t,{Z:function(){return be}});var n,a,i,o,l=r(7294),c=r(9499),s=r(5697),u=r.n(s),m=r(4839),f=r.n(m),d=r(2993),p=r.n(d),h=r(6494),y=r.n(h),g="bodyAttributes",v="htmlAttributes",b="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(E).map((function(e){return E[e]})),"charset"),x="cssText",T="href",C="http-equiv",O="innerHTML",N="itemprop",A="name",S="property",k="rel",j="src",L="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",I="defer",_="encodeSpecialCharacters",D="onChangeClientState",F="titleTemplate",R=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),z=[E.NOSCRIPT,E.SCRIPT,E.STYLE],B="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},V=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},G=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=X(e,E.TITLE),r=X(e,F);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,M);return t||n||void 0},W=function(e){return X(e,D)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return q({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],c=l.toLowerCase();-1===t.indexOf(c)||r===k&&"canonical"===e[r].toLowerCase()||c===k&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(l)||l!==O&&l!==x&&l!==N||(r=l)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var l=i[o],c=y()({},n[l],a[l]);n[l]=c}return e}),[]).reverse()},X=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},ee=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:r.g.requestAnimationFrame||ee,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:r.g.cancelAnimationFrame||te,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,m=e.title,f=e.titleAttributes;se(E.BODY,n),se(E.HTML,a),ce(m,f);var d={baseTag:ue(E.BASE,r),linkTags:ue(E.LINK,i),metaTags:ue(E.META,o),noscriptTags:ue(E.NOSCRIPT,l),scriptTags:ue(E.SCRIPT,s),styleTags:ue(E.STYLE,u)},p={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(p[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),c(e,p,h)},le=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=le(e)),se(E.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(B),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),l=0;l<o.length;l++){var c=o[l],s=t[c]||"";r.getAttribute(c)!==s&&r.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var m=i.length-1;m>=0;m--)r.removeAttribute(i[m]);a.length===i.length?r.removeAttribute(B):r.getAttribute(B)!==o.join(",")&&r.setAttribute(B,o.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(E.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===x)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(B,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},me=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},de=function(e,t,r){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[B]=!0,a=fe(r,n),[l.createElement(E.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=me(r),i=le(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Z(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Z(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case v:return{toComponent:function(){return fe(t)},toString:function(){return me(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[B]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===O||r===x){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),l.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===O||e===x)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+Z(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,m=void 0===u?"":u,f=e.titleAttributes;return{base:de(E.BASE,t,n),bodyAttributes:de(g,r,n),htmlAttributes:de(v,a,n),link:de(E.LINK,i,n),meta:de(E.META,o,n),noscript:de(E.NOSCRIPT,l,n),script:de(E.SCRIPT,c,n),style:de(E.STYLE,s,n),title:de(E.TITLE,{title:m,titleAttributes:f},n)}},he=f()((function(e){return{baseTag:J([T,L],e),bodyAttributes:$(g,e),defer:X(e,I),encode:X(e,_),htmlAttributes:$(v,e),linkTags:Q(E.LINK,[k,T],e),metaTags:Q(E.META,[A,w,C,S,N],e),noscriptTags:Q(E.NOSCRIPT,[O],e),onChangeClientState:W(e),scriptTags:Q(E.SCRIPT,[j,O],e),styleTags:Q(E.STYLE,[x],e),title:K(e),titleAttributes:$(b,e)}}),(function(e){ie&&ne(ie),e.defer?ie=re((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),pe)((function(){return null})),ye=(a=he,o=i=function(e){function t(){return U(this,t),G(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return q({},n,((t={})[r.type]=[].concat(n[r.type]||[],[q({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case E.TITLE:return q({},a,((t={})[n.type]=o,t.titleAttributes=q({},i),t));case E.BODY:return q({},a,{bodyAttributes:q({},i)});case E.HTML:return q({},a,{htmlAttributes:q({},i)})}return q({},a,((r={})[n.type]=q({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=q({},t);return Object.keys(e).forEach((function(t){var n;r=q({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return l.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)}(V(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=V(e,["children"]),n=q({},r);return t&&(n=this.mapChildrenToProps(t,n)),l.createElement(a,n)},Y(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(l.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ye.renderStatic=ye.rewind;var ge=r(5444),ve=function(e){var t,r=e.description,n=e.lang,a=e.title,i=e.image,o=e.author,s=e.date,u=e.slug,m=e.type,f=(0,ge.useStaticQuery)("45326706").site,d=(0,c.useLocation)().pathname,p="article"===m,h=r||f.siteMetadata.description,y=a||f.siteMetadata.title,g=i||f.siteMetadata.image,v=o||f.siteMetadata.author,b=u?""+f.siteMetadata.siteUrl+d:f.siteMetadata.siteUrl,E={"@context":"http://schema.org","@type":"Article",author:{"@type":"Person",name:v},copyrightHolder:{"@type":"Person",name:v},copyrightYear:"2019",creator:{"@type":"Person",name:v},publisher:{"@type":"Organization",name:v,logo:{"@type":"ImageObject",url:g}},datePublished:s,description:h,headline:y,url:b,name:y,image:{"@type":"ImageObject",url:g},mainEntityOfPage:b};return l.createElement(ye,{htmlAttributes:{lang:n},meta:[{name:"description",content:h},{property:"og:title",content:y},{property:"og:description",content:h},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:(null===(t=f.siteMetadata)||void 0===t?void 0:t.author)||""},{name:"twitter:title",content:y},{name:"twitter:image",content:g},{name:"twitter:description",content:h}]},l.createElement("title",null,y),p&&l.createElement("script",{type:"application/ld+json"},JSON.stringify(E)),"\\",l.createElement("script",{defer:!0,src:"https://static.cloudflareinsights.com/beacon.min.js","data-cf-beacon":'{"token": "2bd8976300b840faae07e9a2aa6f3f40"}'}))};ve.defaultProps={lang:"id",description:"",type:"website"};var be=ve},4719:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(7294),a=r(3411),i=r(5444),o=r(1852),l=r(1521),c=r(9692),s=c.ZP.li.withConfig({displayName:"styled__GithubItem",componentId:"hs45e6-0"})([""]),u=c.ZP.div.withConfig({displayName:"styled__CenterMenus",componentId:"hs45e6-1"})(["position:absolute;left:0;right:0;top:38px;padding:18px 20px;@media (min-width:640px){position:relative;top:0;}ul{padding:64px 14px 14px 14px;@media (min-width:640px){padding:0;","{padding-left:1rem !important;}}li{padding:8px 0;@media (min-width:640px){position:relative;&:not(:first-of-type){padding-left:1.5rem;}&:last-of-type{&:after{display:none;}}}}}"],s),m=r(6537),f=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1],a=(0,n.useRef)(null),c=function(e){a.current&&!a.current.contains(e.target)&&t&&(console.log("test",t),r(!1))};return(0,n.useEffect)((function(){return document.addEventListener("click",c),function(){return document.removeEventListener("click",c)}}),[t]),n.createElement(n.Fragment,null,n.createElement("nav",{className:"w-full relative z-50"},n.createElement("div",{className:"bg-purple-700"},n.createElement("div",{className:"container max-w-screen-lg"},n.createElement("div",{className:"py-2 flex justify-between items-center text-gray-200",style:{height:40}},n.createElement("div",null,n.createElement("div",{className:"flex items-center"},n.createElement("div",null,n.createElement("div",{className:"mr-3 h-7 w-7 flex items-center justify-center rounded-md bg-purple-900"},n.createElement(l.Fhe,{size:18}))),n.createElement("div",null,n.createElement("span",{className:"sm:hidden flex"},n.createElement("span",{className:"mr-2"},"My Profile."),n.createElement(i.Link,{to:"/profile",className:"text-white flex items-center font-semibold"},n.createElement("span",null,"Here"),n.createElement(o.UE1,{size:20}))),n.createElement("span",{className:"hidden sm:flex items-center"},n.createElement("span",{className:"mr-2"},"Curriculum Vitae."),n.createElement("a",{href:m.Z,rel:"noreferrer",target:"_blank",className:"text-white flex items-center font-semibold"},n.createElement("span",null,"Here"),n.createElement(o.UE1,{size:20})))))),n.createElement("div",{className:"hidden sm:block"},n.createElement("ul",{className:"flex -mx-2"},n.createElement("li",{className:"px-2"},n.createElement(i.Link,{to:"/murottal"},"Murottal")),n.createElement("li",{className:"px-2"},n.createElement(i.Link,{to:"/cheatsheet"},"Cheatsheet")),n.createElement("li",{className:"px-2"},n.createElement("a",{href:"https://github.com/muhrusdi",target:"_blank",rel:"noreferrer"},"Github"))))))),n.createElement("div",{className:"container max-w-screen-lg"},n.createElement("div",{className:"flex py-7 sm:py-6 justify-between items-center"},n.createElement("div",{className:"relative z-50"},n.createElement(i.Link,{to:"/"},n.createElement("svg",{style:{height:44},className:"transition-all",viewBox:"0 0 745 745",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M103 103L255.036 255.036L273.364 273.364L372.5 372.5L471.636 273.364V283.777V471.636L489.964 489.964L642 642V103L489.964 255.036L471.636 273.364L372.5 372.5L430.5 430.5L273.364 300.022V471.636L255.036 489.964L103 642V103Z",fill:"white"})))),n.createElement(u,{ref:a},n.createElement("ul",{className:"sm:flex justify-center -mx-2 uppercase text-sm border border-gray-700 sm:border-none rounded-lg bg-black items-center "+(t?"":"hidden")},n.createElement("li",{className:"px-2"},n.createElement(i.Link,{to:"/blog",className:"flex items-center text-gray-200 hover:text-white transition-all"},n.createElement("div",{className:"mr-3 rounded-md bg-gradient-to-br from-green-400 to-green-600"},n.createElement("svg",{className:"h-8 w-8",viewBox:"0 0 24 24"},n.createElement("path",{d:"M8 9a1 1 0 011-1h8a1 1 0 011 1v7.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 018 16.5V9z",fill:"#6EE7B7"}),n.createElement("path",{d:"M15 7a1 1 0 00-1-1H7a1 1 0 00-1 1v9.5A1.5 1.5 0 007.5 18H16v-.085a1.5 1.5 0 01-1-1.415V7z",fill:"#ECFDF5"}),n.createElement("path",{fill:"#A7F3D0",d:"M8 8h5v4H8zM8 14h5v2H8z"}))),n.createElement("div",null,"Blog"))),n.createElement("li",{className:"px-2"},n.createElement(i.Link,{to:"/work",className:"flex items-center text-gray-200 hover:text-white transition-all"},n.createElement("div",{className:"mr-3 rounded-md bg-gradient-to-br from-yellow-400 to-yellow-600"},n.createElement("svg",{className:"h-8 w-8",viewBox:"0 0 24 24"},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.196 6.02a1 1 0 01.785 1.176l-2 10a1 1 0 01-1.961-.392l2-10a1 1 0 011.176-.784z",fill:"#FDE68A"}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.293 9.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L16.586 12l-1.293-1.293a1 1 0 010-1.414zM8.707 9.293a1 1 0 010 1.414L7.414 12l1.293 1.293a1 1 0 11-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 011.414 0z",fill:"#FDF4FF"}))),n.createElement("div",null,"Work"))),n.createElement("li",{className:"px-2"},n.createElement("a",{href:"#",className:"flex items-center text-gray-200 hover:text-white transition-all"},n.createElement("div",{className:"mr-3 rounded-md bg-gradient-to-br from-pink-400 to-purple-600"},n.createElement("svg",{className:"h-8 w-8",viewBox:"0 0 24 24"},n.createElement("circle",{cx:"12",cy:"12",r:"7",fill:"#F3E8FF"}),n.createElement("path",{d:"M14.52 11.136a1 1 0 010 1.728l-3.016 1.759A1 1 0 0110 13.759v-3.518a1 1 0 011.504-.864l3.015 1.76z",fill:"#C084FC"}))),n.createElement("div",null,"Story"))),n.createElement("li",{className:"px-2"},n.createElement(i.Link,{to:"/profile",className:"flex items-center text-gray-200 hover:text-white transition-all"},n.createElement("div",{className:"mr-3 rounded-md bg-gradient-to-br from-purple-500 to-indigo-500"},n.createElement("div",{className:"h-8 w-8 flex items-center justify-center"},n.createElement(o.RPM,{size:20}))),n.createElement("div",null,"Profile"))),n.createElement("li",{className:"px-2 sm:hidden border-t border-gray-700 mt-4"},n.createElement(i.Link,{to:"/cheatsheet",className:"block text-gray-200 hover:text-white transition-all mt-3"},n.createElement("div",null,"Cheatsheet"))),n.createElement("li",{className:"px-2 sm:hidden"},n.createElement("a",{href:"https://github.com/muhrusdi",target:"_blank",rel:"noreferrer",className:"block text-gray-200 hover:text-white transition-all"},n.createElement("div",null,"Github"))))),n.createElement("div",{className:"relative block sm:hidden"},n.createElement("button",{onClick:function(){r((function(e){return!e}))},className:"align-middle bg-blueGray-900 w-10 h-10 rounded-md focus:outline-none flex items-center justify-center"},n.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("rect",{x:"4",y:"4",width:"4",height:"4",rx:"1.2",fill:"url(#paint0_linear-768704)"}),n.createElement("rect",{x:"4",y:"10",width:"4",height:"4",rx:"1.2",fill:"url(#paint1_linear-742839)"}),n.createElement("rect",{x:"4",y:"16",width:"4",height:"4",rx:"1.2",fill:"url(#paint2_linear-868777)"}),n.createElement("rect",{x:"10",y:"5",width:"9",height:"2",rx:"1",fill:"#DCDCDC"}),n.createElement("rect",{x:"10",y:"11",width:"9",height:"2",rx:"1",fill:"#DCDCDC"}),n.createElement("rect",{x:"10",y:"17",width:"9",height:"2",rx:"1",fill:"#DCDCDC"}),n.createElement("defs",null,n.createElement("linearGradient",{id:"paint0_linear-768704",x1:"3.5",y1:"4",x2:"8",y2:"8.5",gradientUnits:"userSpaceOnUse"},n.createElement("stop",{stopColor:"#34D399"}),n.createElement("stop",{offset:"1",stopColor:"#059669"})),n.createElement("linearGradient",{id:"paint1_linear-742839",x1:"3.5",y1:"10",x2:"8",y2:"14.5",gradientUnits:"userSpaceOnUse"},n.createElement("stop",{stopColor:"#FBBF24"}),n.createElement("stop",{offset:"1",stopColor:"#D97706"})),n.createElement("linearGradient",{id:"paint2_linear-868777",x1:"3.5",y1:"16",x2:"8",y2:"20.5",gradientUnits:"userSpaceOnUse"},n.createElement("stop",{stopColor:"#F472B6"}),n.createElement("stop",{offset:"1",stopColor:"#7C3AED"}))))))))))},d=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1];return n.createElement("div",null,n.createElement("div",{className:"bg-gray-900 rounded-lg overflow-hidden sm:px-32 relative"},n.createElement("div",{className:"absolute flex justify-center z-50 items-center top-0 bottom-0 left-0 right-0"},n.createElement("div",null,n.createElement("div",null,n.createElement("h2",{className:"font-black text-4xl text-center"},"Get in Touch")),n.createElement("div",{className:"mt-6 flex items-center -mx-4"},n.createElement("div",{className:"px-4"},n.createElement("button",{onMouseEnter:function(){r(!0)},onMouseLeave:function(){r(!1)},className:"py-2 font-semibold rounded-md px-4 hover:bg-indigo-700 transition-all bg-indigo-600"},n.createElement("a",{href:"mailto:mhmrofficial@gmail.com"},"Contact me"))),n.createElement("div",{className:"px-4"},n.createElement(i.Link,{to:"/profile"},"About Us"))))),n.createElement("img",{className:"object-cover w-full transform "+(t?"translate-x-6":"translate-x-0")+" transition-all duration-1000",style:{height:200},src:"https://res.cloudinary.com/muhrusdi/image/upload/v1624698813/beams-bottom.jpg",alt:""})))},p=function(){var e=new Date;return n.createElement("footer",{className:"mt-36"},n.createElement(d,null),n.createElement("div",{className:"text-center py-16 mt-20"},n.createElement("span",null,"© ",e.getFullYear()," Made with ",n.createElement("span",{className:"text-red-500"},"♥")," - Muhammad Rusdi")))},h=function(e){var t=e.children;return n.createElement(n.Fragment,null,n.createElement(a.Z,null),n.createElement(f,null),n.createElement("div",{className:"container max-w-screen-lg"},t,n.createElement(p,null)))}}}]);
//# sourceMappingURL=6de15531cacdcce55c647769ea5bd4467f8b4bf8-fd51d4bc4e0e97fdcb6c.js.map