(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{610:function(t,e,o){var content=o(672);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(50).default)("0126174f",content,!0,{sourceMap:!1})},671:function(t,e,o){"use strict";o(610)},672:function(t,e,o){var r=o(49)(!1);r.push([t.i,"ul.profile-side-bar[data-v-15e0da34]{border-radius:.5rem}ul.profile-side-bar li[data-v-15e0da34]{border-bottom:4px solid #f8f8f8}ul.profile-side-bar li a[data-v-15e0da34]{color:#231f20;font-weight:600;padding:15px 30px;width:100%}ul.profile-side-bar li a[data-v-15e0da34] :hover{text-decoration:none}.b-icon.bi[data-v-15e0da34]{margin-right:10px;font-size:20px}ul.profile-side-bar li[data-v-15e0da34]:hover{background:#107cc0}ul.profile-side-bar li:hover a[data-v-15e0da34]{color:#fff;text-decoration:none}.log-out-button[data-v-15e0da34]{border:none;border-radius:5px;background:#fff;padding:15px 30px}.log-out-button[data-v-15e0da34] :hover{background:#e23333}.log-out-button .logout-text[data-v-15e0da34]{padding-top:2px;color:#e23333}.log-out-button[data-v-15e0da34]:hover{background:#e23333}.log-out-button:hover span[data-v-15e0da34]{color:#fff}svg.bi-power.b-icon.bi[data-v-15e0da34]{transform:rotate(90deg);margin-bottom:1px}a.nuxt-link-exact-active[data-v-15e0da34]{background:#107cc0;color:#fff!important}",""]),t.exports=r},731:function(t,e,o){"use strict";o.r(e);var r=o(34),n=(o(81),o(0)),l={components:{BIconHeartFill:n.do,BIconGearFill:n.in,BIconWalletFill:n.Mw,BIconCalendar3Fill:n.ze,BIconPower:n.Yr},data:function(){return{sideBarList:[{routeName:"profile-order-history",componentName:"b-icon-calendar-3-fill",title:"Order History"},{routeName:"profile-my-wish-list",componentName:"b-icon-heart-fill",title:"My Wishlist"},{routeName:"profile-address-book",componentName:"b-icon-calendar-3-fill",title:"Address Book"},{routeName:"profile-wallet",componentName:"b-icon-wallet-fill",title:"Wallet"},{routeName:"profile-account-setting",componentName:"b-icon-gear-fill",title:"Account Setting"}]}},methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout().then((function(){t.$router.push("/"),t.$store.dispatch("carts/resetCartConfiguration")}));case 2:case"end":return e.stop()}}),e)})))()}}},d=(o(671),o(32)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("ul",{staticClass:"profile-side-bar overflow-hidden mb-2 bg-white"},t._l(t.sideBarList,(function(e,r){return o("li",{key:r},[o("nuxt-link",{attrs:{to:{name:e.routeName}}},[o(e.componentName,{tag:"component"}),t._v(" "+t._s(e.title)+"\n      ")],1)],1)})),0),t._v(" "),o("b-button",{staticClass:"mb-2 log-out-button text-left",attrs:{variant:"outline-danger",block:""},on:{click:function(e){return t.logout()}}},[o("span",{staticClass:"logout-text font-weight-bold"},[o("b-icon-power"),t._v(" Logout ")],1)])],1)}),[],!1,null,"15e0da34",null);e.default=component.exports}}]);