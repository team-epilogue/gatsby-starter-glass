"use strict";(self.webpackChunkgatsby_starter_glass=self.webpackChunkgatsby_starter_glass||[]).push([[223],{8223:function(e,t,n){n.r(t),n.d(t,{renderImageToString:function(){return h},swapPlaceholderImage:function(){return v}});var r,o=n(5861),a=n(4687),i=n.n(a),c=n(3723),s=n(7294),u=n(7762),l=(n(72),new WeakMap),d=navigator.connection||navigator.mozConnection||navigator.webkitConnection,g=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function b(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function f(e,t,n,r,o,a){var i=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),s=n.has(t);function u(e){var t=this;this.removeEventListener("load",u);var n=e.currentTarget,r=new Image;r.src=n.currentSrc,r.decode?r.decode().then((function(){b(t,c),null==o||o({wasCached:s})})).catch((function(e){b(t,c),null==a||a(e)})):(b(this,c),null==o||o({wasCached:s}))}return i.addEventListener("load",u),null==r||r({wasCached:s}),Array.from(i.parentElement.children).forEach((function(e){var t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),i.complete&&u.call(i,{currentTarget:i}),function(){i&&i.removeEventListener("load",u)}}function v(e,t,a,s,u,g,b){if(!(0,c.h)()){var v,h,m,w=(j=function(){v=f(e,t,a,u,g,b)},"IntersectionObserver"in window?(r||(r=new IntersectionObserver((function(e){e.forEach((function(e){var t;e.isIntersecting&&(null==(t=l.get(e.target))||t(),l.delete(e.target))}))}),{rootMargin:"4g"!==(null==d?void 0:d.effectiveType)||null!=d&&d.saveData?"2500px":"1250px"})),function(e){return l.set(e,j),r.observe(e),function(){r&&e&&(l.delete(e),r.unobserve(e))}}):function(){return j(),function(){}}),p=w(e);return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(h=s.objectFit)?h:"cover",e.dataset.objectPosition=""+(null!=(m=s.objectPosition)?m:"50% 50%"),(y=(0,o.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="objectFitPolyfill"in window,e.t0){e.next=4;break}return e.next=4,n.e(231).then(n.t.bind(n,7231,23));case 4:window.objectFitPolyfill(t);case 5:case"end":return e.stop()}}),e)}))),function(e){return y.apply(this,arguments)})(e)),function(){v&&v(),p()}}var y,j;return f(e,t,a,u,g,b)}function h(e){var t=e.image,n=e.loading,r=void 0===n?"lazy":n,o=e.isLoading,a=e.isLoaded,i=e.imgClassName,l=e.imgStyle,d=void 0===l?{}:l,b=e.objectPosition,f=e.backgroundColor,v=e.objectFit,h=void 0===v?"cover":v,m=(0,c._)(e,g),w=t.width,p=t.height,y=t.layout,j=t.images,C=t.placeholder,k=t.backgroundColor;return d=(0,c.a)({objectFit:h,objectPosition:b,backgroundColor:f},d),(0,u.uS)(s.createElement(c.L,{layout:y,width:w,height:p},s.createElement(c.P,(0,c.a)({},(0,c.g)(C,a,y,w,p,k,h,b))),s.createElement(c.M,(0,c.a)({},m,{width:w,height:p,className:i},(0,c.b)(o,a,j,r,d)))))}}}]);
//# sourceMappingURL=223-cfff4f3b676bf0ee964d.js.map