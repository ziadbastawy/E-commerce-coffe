(window.webpackJsonp=window.webpackJsonp||[]).push([[56,51],{553:function(e,t,n){var content=n(568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(50).default)("a7dfd942",content,!0,{sourceMap:!1})},567:function(e,t,n){"use strict";n(553)},568:function(e,t,n){var o=n(49)(!1);o.push([e.i,".recipe .content .media img[data-v-4af72187]{border-radius:.5rem}.recipe .content .data .date[data-v-4af72187]{color:#8a8a8a}.recipe .content .data .description[data-v-4af72187]{color:#231f20}.recipe .content .data .link[data-v-4af72187]{color:#107cc0}",""]),e.exports=o},581:function(e,t,n){"use strict";n.r(t);var o={props:{bigMedia:{type:Boolean,default:!1},date:{type:String,default:""},image:{type:String,required:!0},title:{type:String,default:""},description:{type:String,default:""},link:{type:String,default:"#"}}},r=(n(567),n(32)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"recipe"},[e.bigMedia?n("b-row",{staticClass:"content py-4",attrs:{"align-v":"center"}},[n("b-col",{staticClass:"media overflow-hidden",attrs:{cols:"12",md:"6",lg:"4"}},[n("img",{attrs:{src:e.image,alt:e.title}})]),e._v(" "),n("b-col",{staticClass:"data py-3 py-md-0",attrs:{cols:"12",md:"6",lg:"8"}},[e.date?n("h6",{staticClass:"date mb-3"},[e._v("\n        "+e._s(e.date)+"\n      ")]):e._e(),e._v(" "),n("h4",{staticClass:"title mb-3 text-center text-md-left"},[e._v("\n        "+e._s(e.title)+"\n      ")]),e._v(" "),n("p",{staticClass:"description m-md-0 text-justify"},[e._v("\n        "+e._s(e.description)+"\n      ")]),e._v(" "),n("nuxt-link",{staticClass:"link",attrs:{to:e.link}},[e._v("\n        View Recipe\n      ")])],1)],1):n("b-row",{staticClass:"content py-4",attrs:{"align-v":"center"}},[n("b-col",{staticClass:"media overflow-hidden",attrs:{cols:"12",md:"4",lg:"3",xl:"2"}},[n("img",{attrs:{src:e.image,alt:e.title}})]),e._v(" "),n("b-col",{staticClass:"data py-3 py-md-0",attrs:{cols:"12",md:"8",lg:"9",xl:"10"}},[e.date?n("h6",{staticClass:"date mb-3"},[e._v("\n        "+e._s(e.date)+"\n      ")]):e._e(),e._v(" "),n("h4",{staticClass:"title mb-3 text-center text-md-left"},[e._v("\n        "+e._s(e.title)+"\n      ")]),e._v(" "),n("p",{staticClass:"description m-md-0 text-justify"},[e._v("\n        "+e._s(e.description)+"\n      ")]),e._v(" "),n("nuxt-link",{staticClass:"link",attrs:{to:e.link}},[e._v("\n        View Recipe\n      ")])],1)],1),e._v(" "),n("hr",{staticClass:"m-0",staticStyle:{"border-color":"#cecece"}})],1)}),[],!1,null,"4af72187",null);t.default=component.exports},738:function(e,t,n){"use strict";n.r(t);var o=n(0),r={components:{recipe:n(581).default,BIconChevronLeft:o.gh,BIconChevronRight:o.hh},data:function(){return{perPage:1,currentPage:1,filters:["Cappuccino","Americano","Espresso","Doppio","Cortado","Red Eye","Galão","Macchiato","Ristretto"],recipes:[{title:"New Orleans Coffee (Cafe Noir)",image:n(358),description:"New Orleans is known for plenty of unique and delicious foods, including its famous hot coffee. You make it with basic drip-ground coffee, plus chicory, a dried herb that gives this brew its signature chocolate-caramel flavor, intensely dark color, and thick consistency."},{title:"Cold Brew Coffee",image:n(356),description:"You need no special equipment to make delicious cold brew coffee. The simple method of steeping ground coffee beans in cold water yields a rich-tasting brew, without any bitter flavor. It makes a great overnight recipe in the summer when you're expecting guests the next day. Serve in tall glasses over ice."},{title:"Affogato",image:n(355),description:"Fresh-brewed espresso and vanilla ice cream make a fabulous after-dinner coffee dessert. The Italian affogato is an easy recipe that can be made with a stovetop espresso maker or any strong coffee if you don't have a separate machine. Be sure to freeze the glasses as it's the secret to avoiding melted ice cr.."},{title:"Maple Pecan Latte",image:n(357),description:"A coffee shop favorite during fall and winter, it's easy to make a maple pecan latte at home. You'll start by making the sweetener, and the maple pecan syrup is enough for many lattes. When it's time for a drink, simply mix it with fresh-brewed espresso and steamed milk."},{title:"White Chocolate Mocha",image:n(320),description:"Does the thought of a sweet, creamy white chocolate latte make you weak in the knees? We can't make the cravings stop—but we can share this dreamy recipe, so you can skip the drive to the coffee shop this winter."},{title:"White Chocolate Mocha",image:n(320),description:"Does the thought of a sweet, creamy white chocolate latte make you weak in the knees? We can't make the cravings stop—but we can share this dreamy recipe, so you can skip the drive to the coffee shop this winter."},{title:"White Chocolate Mocha",image:n(320),description:"Does the thought of a sweet, creamy white chocolate latte make you weak in the knees? We can't make the cravings stop—but we can share this dreamy recipe, so you can skip the drive to the coffee shop this winter."}]}},computed:{rows:function(){return this.recipes.length}}},c=n(32),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"recipes-list"},[n("div",{staticClass:"recipes-blog-filter"},e._l(e.filters,(function(filter,t){return n("div",{key:t,staticClass:"filter my-2"},[n("input",{staticClass:"d-none",attrs:{id:filter,type:"checkbox",name:"filter"}}),e._v(" "),n("label",{staticClass:"m-0 rounded-pill text-center",attrs:{for:filter}},[e._v(e._s(filter))])])})),0),e._v(" "),n("div",{staticClass:"recipes"},[n("h3",{staticClass:"title"},[e._v("\n      Coffee Recipes\n    ")]),e._v(" "),e._l(e.recipes,(function(e,t){return n("div",{key:t},[n("recipe",{attrs:{image:e.image,title:e.title,description:e.description,"big-media":e.bigMedia,link:"/single-recipe"}})],1)}))],2),e._v(" "),n("b-pagination",{staticClass:"coffee-pagination my-5",attrs:{"total-rows":e.rows,"per-page":e.perPage,"aria-controls":"recipesList",align:"center","first-number":"","last-number":"",pills:"","next-class":"next","prev-class":"prev"},scopedSlots:e._u([{key:"prev-text",fn:function(){return[n("b-icon-chevron-left")]},proxy:!0},{key:"next-text",fn:function(){return[n("b-icon-chevron-right")]},proxy:!0}]),model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);