(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[517],{2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},i=n(1063),l=n(4651),f=n(7426);var s={};function c(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var u=function(e){var t,n=!1!==e.prefetch,o=l.useRouter(),u=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],l=n[1];return{href:a,as:e.as?i.resolveHref(o,e.as):l||a}}),[o,e.href,e.as]),d=u.href,p=u.as,h=e.children,x=e.replace,v=e.shallow,g=e.scroll,m=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var b=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,w=f.useIntersection({rootMargin:"200px"}),y=r(w,2),Z=y[0],k=y[1],L=a.default.useCallback((function(e){Z(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,Z]);a.default.useEffect((function(){var e=k&&n&&i.isLocalURL(d),t="undefined"!==typeof m?m:o&&o.locale,r=s[d+"%"+p+(t?"%"+t:"")];e&&!r&&c(o,d,p,{locale:t})}),[p,d,k,m,n,o]);var _={ref:L,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,f){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:f,scroll:l}))}(e,o,d,p,x,v,g,m)},onMouseEnter:function(e){i.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof m?m:o&&o.locale,M=o&&o.isLocaleDomain&&i.getDomainLocale(p,E,o&&o.locales,o&&o.domainLocales);_.href=M||i.addBasePath(i.addLocale(p,E,o&&o.defaultLocale))}return a.default.cloneElement(t,_)};t.default=u},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,f=o.useRef(),s=o.useState(!1),c=r(s,2),u=c[0],d=c[1],p=o.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||u||e&&e.tagName&&(f.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,u]);return o.useEffect((function(){if(!i&&!u){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),[p,u]};var o=n(7294),a=n(3447),i="undefined"!==typeof IntersectionObserver;var l=new Map},7517:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),o=n(1216),a=n(1664),i={version:"3.7.0",year:(new Date).getFullYear(),nickname:"NIHILncunia"},l=n(6958),f=function(){var e=(0,o.iv)("margin-bottom:20px;&>div{background-color:#333333;border-radius:0 0 20px 20px;transition:all 0.3s;box-shadow:0 0 10px -4px #333333;&>h1{color:#ffffff;margin-right:10px;margin-left:10px;transition:all 0.3s;font-weight:900;}&>nav{width:100%;box-sizing:border-box;&>a{color:#dddddd;padding:20px 10px;display:inline-block;transition:all 0.3s;font-weight:500;box-sizing:border-box;&:nth-of-type(1):before{content:'\\f015';font-family:'Font Awesome 5 Free',sans-serif;font-weight:900;margin-right:5px;}&:nth-of-type(2):before,&:nth-of-type(3):before{content:'\\f6cf';font-family:'Font Awesome 5 Free',sans-serif;font-weight:900;margin-right:5px;}&:nth-last-of-type(1){border-radius:0 0 20px 0;}&:hover{background-color:#ff4242;color:#ffffff;transition:all 0.3s;}}}}@media (min-width: 1px) and (max-width: 600px){a{font-size:",l.Z[2],";}&>div{padding-top:10px;&>h1{text-align:center;}&>nav{margin-top:10px;border-top:2px dotted #88888850;&>a{width:33.33%;text-align:center;&:nth-of-type(1){border-radius:0 0 0 20px;}}}}}@media (min-width: 601px) and (max-width: 900px){a{font-size:",l.Z[2],";}&>div{display:flex;flex-direction:row;align-items:center;&>nav{flex:1;text-align:right;}}}@media (min-width: 901px){a{font-size:",l.Z[3],";}&>div{display:flex;flex-direction:row;align-items:center;&>nav{flex:1;text-align:right;}}}","","");return(0,o.tZ)(r.Fragment,null,(0,o.tZ)("header",{css:e},(0,o.tZ)("div",null,(0,o.tZ)("h1",null,"DiceRoll v",i.version),(0,o.tZ)("nav",null,(0,o.tZ)(a.default,{href:"/"},(0,o.tZ)("a",null,"\ud648")),(0,o.tZ)(a.default,{href:"/preset"},(0,o.tZ)("a",null,"\uc8fc\uc0ac\uc704 \ud504\ub9ac\uc14b")),(0,o.tZ)(a.default,{href:"/custom"},(0,o.tZ)("a",null,"\ucee4\uc2a4\ud140 \uc8fc\uc0ac\uc704"))))))},s=function(e){var t=e.children;return(0,o.tZ)(r.Fragment,null,(0,o.tZ)("main",null,t))},c=function(){var e=(0,o.iv)("margin-top:20px;user-select:none;&>p{padding:10px;text-align:center;background-color:#333333;border-radius:20px 20px 0 0;box-shadow:0 0 10px -4px #333333;color:#ffffff;transition:all 0.3s;&:before{content:'\\f1f9';margin-right:5px;font-weight:500;font-family:'Font Awesome 5 Free',sans-serif;}}@media (min-width: 1px) and (max-width: 600px){p{font-size:",l.Z[1],";}}@media (min-width: 601px) and (max-width: 900px){p{font-size:",l.Z[2],";}}@media (min-width: 901px){p{font-size:",l.Z[3],";}}","","");return(0,o.tZ)(r.Fragment,null,(0,o.tZ)("footer",{css:e},(0,o.tZ)("p",null,i.year,". ",i.nickname,".")))};var u={name:"1cov5j4",styles:"@import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);{}::-webkit-scrollbar{width:10px;}::-webkit-scrollbar-thumb{background-color:#ff4242;border-radius:5px;}::-webkit-scrollbar-track{background-color:#33333350;border-radius:5px;}*{padding:0;margin:0;font-family:'Noto Sans KR',sans-serif;}a{text-decoration:none;}ul{list-style:none;}strong{font-weight:900;}html,body,div#__next{height:100%;}div#__next{display:flex;flex-direction:column;&>main{flex:1;overflow-y:auto;padding:0 20px;}}"},d=function(e){var t=e.children,n=u;return(0,o.tZ)(r.Fragment,null,(0,o.tZ)(o.xB,{styles:n}),(0,o.tZ)(f,null),(0,o.tZ)(s,null,t),(0,o.tZ)(c,null))}},1664:function(e,t,n){e.exports=n(2167)}}]);