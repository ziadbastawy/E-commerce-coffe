(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{580:function(e,t,o){var content=o(647);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(50).default)("e448b7bc",content,!0,{sourceMap:!1})},646:function(e,t,o){"use strict";o(580)},647:function(e,t,o){var n=o(49)(!1);n.push([e.i,".blog-head .title[data-v-3785789b]{color:#231f20}.blog-head .blog-content .blog-video[data-v-3785789b]{border-radius:2rem;overflow:hidden}.blog-head .blog-content .blog-video video[data-v-3785789b]{width:100%;border-radius:2rem;min-height:21rem;-o-object-fit:cover;object-fit:cover}.blog-head .blog-content .blog-data[data-v-3785789b]{color:#231f20}.blog-head .blog-content .blog-data .head[data-v-3785789b]{margin:2rem 0 1rem}.blog-head .blog-content .blog-data .description[data-v-3785789b]{margin-bottom:2.5 rem}.blog-links[data-v-3785789b]{flex-wrap:wrap}@media(max-width:435px){.blog-links .see-all-videos[data-v-3785789b]{padding:15px!important}}",""]),e.exports=n},661:function(e,t,o){"use strict";o.r(t);var n={components:{BIconPlayCircle:o(0).Or},data:function(){return{loading:!0}},mounted:function(){this.loading=!1},methods:{goTo:function(path){this.$router.push(path)}}},l=(o(646),o(32)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"blog-head"},[n("b-container",[n("h4",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"title mb-5"},[e._v("\n      "+e._s(e.$t("home.fromOurBlog"))+"\n    ")]),e._v(" "),e.loading?n("b-skeleton",{staticClass:"my-5",attrs:{height:"2rem",width:"25%"}}):e._e(),e._v(" "),n("b-row",{staticClass:"blog-content align-items-center"},[n("b-col",{staticClass:"blog-video p-0 overflow-hidden",attrs:{cols:"12",lg:"6"}},[n("video",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],attrs:{src:o(311),controls:""}}),e._v(" "),e.loading?n("b-skeleton-img",{staticClass:"test"}):e._e()],1),e._v(" "),n("b-col",{staticClass:"blog-data",attrs:{cols:"12",lg:"6"}},[n("c-badge",{class:{invisible:e.loading},attrs:{content:e.$t("home.reviews")}}),e._v(" "),n("h2",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"head"},[e._v("\n          The Olympia Cremina\n        ")]),e._v(" "),e.loading?n("b-skeleton",{staticClass:"my-4",attrs:{height:"3rem",width:"50%"}}):e._e(),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"description"},[e._v("\n          We have seen increased interest in our Olympia Cremina model. Watch\n          this video review and find out what independent expert James Hoffman\n          has to say.\n        ")]),e._v(" "),e.loading?n("b-skeleton",{attrs:{width:"85%"}}):e._e(),e._v(" "),e.loading?n("b-skeleton",{attrs:{width:"65%"}}):e._e(),e._v(" "),e.loading?n("b-skeleton",{staticClass:"mb-4",attrs:{width:"45%"}}):e._e(),e._v(" "),n("div",{staticClass:"blog-links d-flex align-items-center",class:{invisible:e.loading}},[n("c-button",{on:{click:function(t){return e.goTo("/reviews/5")}}},[n("b-icon-play-circle"),e._v(" "),n("span",{staticClass:"pt-1"},[e._v("\n              "+e._s(e.$t("home.watchVideo"))+"\n            ")])],1),e._v(" "),n("c-button",{staticClass:"see-all-videos",attrs:{to:"/blog/reviews"}},[e._v("\n            "+e._s(e.$t("home.seeAllVideos"))+"\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,"3785789b",null);t.default=component.exports}}]);