(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{804:function(e,r,t){"use strict";t.r(r);t(13),t(12),t(10),t(8),t(14),t(11),t(15);var n=t(3),o=t(34),c=(t(81),t(776)),l=t(169);function f(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,t)}return r}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(r){Object(n.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}var d={components:{SellerProfile:c.default},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function r(){var t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.params,n={},r.next=4,l.a.vendorData(t.id).then((function(e){console.log(e),n=O({},e.data)})).catch((function(e){console.log("error",e)}));case 4:return r.abrupt("return",{vendorData:n});case 5:case"end":return r.stop()}}),r)})))()}},j=t(32),component=Object(j.a)(d,(function(){var e=this,r=e.$createElement;return(e._self._c||r)("seller-profile",{attrs:{"vendor-data":e.vendorData}})}),[],!1,null,"335e9c74",null);r.default=component.exports}}]);