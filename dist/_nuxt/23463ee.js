(window.webpackJsonp=window.webpackJsonp||[]).push([[55,62],{547:function(t,e,r){var content=r(550);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("5fa7eac4",content,!0,{sourceMap:!1})},548:function(t,e,r){"use strict";r.r(e);var n=r(34),o=(r(81),r(138),r(216)),c={props:{slideToShowProduct:{type:Number,required:!1,default:4},title:{type:String,default:""},sliderEndpoint:{type:String,required:!0}},data:function(){return{products:[]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getProductsSlider(t.sliderEndpoint).then((function(e){t.products=e.data.data}));case 2:case"end":return e.stop()}}),e)})))()}},d=(r(549),r(32)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-slider my-5"},[r("b-container",[r("h4",{staticClass:"title mb-4"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),t.products.length?r("c-slider",{attrs:{"slides-to-show":t.slideToShowProduct},scopedSlots:t._u([{key:"items",fn:function(){return t._l(t.products,(function(t,e){return r("div",{key:e},[r("c-product",{attrs:{product:{name:t.name,img:t.image,badgeContent:t.discount?t.discount+" %":"",salePrice:t.price_before_discount,price:t.price,addedToCart:!1,addedToWishList:!0,rate:t.rate,id:t.id}}})],1)}))},proxy:!0}],null,!1,2758306354)}):t._e()],1)],1)}),[],!1,null,"5f5583dc",null);e.default=component.exports},549:function(t,e,r){"use strict";r(547)},550:function(t,e,r){var n=r(49)(!1);n.push([t.i,".title[data-v-5f5583dc]{color:#231f20}",""]),t.exports=n},570:function(t,e,r){var content=r(599);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("353f94d6",content,!0,{sourceMap:!1})},598:function(t,e,r){"use strict";r(570)},599:function(t,e,r){var n=r(49)(!1);n.push([t.i,".review .media video[data-v-654190b2]{border-radius:1rem}.review .content .title[data-v-654190b2]{color:#181818}.review .content .description[data-v-654190b2]{color:#231f20}",""]),t.exports=n},651:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{yourArray:[{text:"Home",to:"/"},{text:"Reviews",to:"/blog/reviews/"},{text:"Single Review",active:!0}]}}},o=(r(598),r(32)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"review my-4"},[n("CbreadCrumb",{attrs:{"bread-crumb-array":t.yourArray}}),t._v(" "),n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"12",lg:"8"}},[n("div",{staticClass:"media mb-5"},[n("video",{staticClass:"w-100",attrs:{src:r(311),controls:""}})]),t._v(" "),n("div",{staticClass:"content"},[n("h2",{staticClass:"title font-weight-bold"},[t._v("\n          The Olympia Cremina\n        ")]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n          We have seen increased interest in our Olympia Cremina model. Watch\n          this video review and find out what independent expert James Hoffman\n          has to say.\n        ")]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n          Founded in 2018 as a roaster selling only online, the pandemic\n          tripled business practically overnight and in mid-2020, they were\n          offered a spot in the newly formed Outer Sunset Farmers Market. It\n          quickly became clear between multiple daily load-ins and outs that a\n          mobile unit was needed.\n        ")])]),t._v(" "),n("div",{staticClass:"tags"},[n("span",{staticClass:"tag"},[t._v("Olympia Cremina")]),t._v(" "),n("span",{staticClass:"tag"},[t._v("James Hoffman")])]),t._v(" "),n("hr"),t._v(" "),n("SliderProduct",{attrs:{title:"Products in this video","slides-to-show":3}})],1)],1)],1)}),[],!1,null,"654190b2",null);e.default=component.exports;installComponents(component,{SliderProduct:r(548).default})}}]);