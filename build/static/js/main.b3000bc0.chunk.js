(this["webpackJsonponline-store"]=this["webpackJsonponline-store"]||[]).push([[0],{101:function(e,t,c){},139:function(e,t,c){},140:function(e,t,c){},141:function(e,t,c){},142:function(e,t,c){},146:function(e,t,c){},147:function(e,t,c){},246:function(e,t,c){},247:function(e,t,c){},248:function(e,t,c){},250:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(1),a=c(51),o=c.n(a),s=(c(139),c(140),c(25)),i=c(10),l=c(8),d=(c(141),function(e){var t=e.className,c=e.onClick,n=e.style,a=e.text;return Object(r.jsx)("button",{className:t,onClick:c,style:n,children:a})}),u=(c(79),c(142),c(11));var j="GET_CART_PRODUCTS",b="REMOVE_PRODUCT_WITH_CART",m="SHOW_MODAL_DELETE",O="CLOSE_MODAL_DELETE",f="REMOVE_ALL_CART",h="cart",x=function(e){return e.cart.cartProducts},p=function(e){return e.cart.modalDeleteId},C={cartProducts:{},modalDeleteId:null};var v=function(){return function(e){var t=JSON.parse(localStorage.getItem("cardList"))||{};e({type:j,payload:t})}},g=function(){return{type:O}},N=function(e){var t=e.product,c=e.count,n=Object(u.c)();return Object(r.jsxs)("div",{children:[Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"width-1280 row justify-content-between",children:[Object(r.jsx)("img",{className:"cart-img",src:t.url,alt:t.name}),Object(r.jsxs)("div",{className:"row  column justify-content-center m-15 width-200",children:[Object(r.jsx)("p",{className:"Product__Name",children:t.name}),Object(r.jsxs)("p",{className:"Product__id",children:["\u041a\u043e\u0434: ",t.id]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"Product__Color",children:"\u0426\u0432\u0435\u0442:"}),t.color]})]}),Object(r.jsx)("div",{className:"row align-items-center m-15",children:Object(r.jsxs)("span",{className:"Product__Price",children:[t.price,Object(r.jsx)("span",{className:"Product__\u0421urrency",children:"\u0433\u0440\u043d"})]})}),Object(r.jsx)("div",{className:"row align-items-center m-15",children:c}),Object(r.jsx)("div",{className:"row align-items-center m-15",children:Object(r.jsx)(d,{className:"btn",text:"Remove",style:{backgroundColor:"#f8560b"},onClick:function(){return n((e=t.id,{type:m,payload:e}));var e},children:"\xd7"})})]})]})},y=(c(146),function(e){var t=e.header,c=e.text,n=e.textConfirm,a=e.bgColorHeader,o=e.bgColorBody,s=e.bgColorFooter,i=e.closeButton,l=e.bgInfo,u=e.onClose,j=e.onConfirm;return Object(r.jsx)("div",{className:"wrapper",onClick:u,children:Object(r.jsxs)("div",{className:"modal",onClick:function(e){return e.stopPropagation()},children:[Object(r.jsxs)("div",{className:"modal-header",style:{backgroundColor:a},children:[Object(r.jsx)("h5",{className:"modal-title",children:t}),i&&Object(r.jsx)("span",{className:"close",onClick:u,children:"\xd7"})]}),Object(r.jsxs)("div",{className:"modal-body",style:{backgroundColor:o},children:[Object(r.jsx)("p",{className:"text-modal",children:c}),Object(r.jsx)("p",{children:n})]}),Object(r.jsxs)("div",{className:"modal-footer",style:{backgroundColor:s},children:[Object(r.jsx)(d,{onClick:j,className:"btn btn-m1",text:"Ok",style:{backgroundColor:l}}),Object(r.jsx)(d,{onClick:u,className:"btn btn-m1",text:"Cancel",style:{backgroundColor:l}})]})]})})}),P=function(e){var t=e.onClose,c=e.onConfirm;return Object(r.jsx)(y,{header:"Deleting from the basket!",text:"This product will be deleted with your cart.",textConfirm:"Are you sure want to remove a product from your shopping card?",closeButton:!0,bgColorHeader:"#ff521d",bgColorBody:"#f77437",bgColorFooter:"#f77437",bgInfo:"#e04102",onClose:t,onConfirm:c})},w=Object(u.b)((function(e){return{cartProducts:x(e),modalDeleteId:p(e)}}),{getCartList:v,closeModalDelete:g,modalConfirmDelete:function(e){return function(t){var c=function(e){if(e){var t=JSON.parse(localStorage.getItem("cardList"))||{};return delete t[e],localStorage.setItem("cardList",JSON.stringify(t)),t}}(e);t({type:b,payload:c}),t(g())}}})((function(e){var t=e.cartProducts,c=e.getCartList,a=e.modalDeleteId,o=e.closeModalDelete,s=e.modalConfirmDelete;return Object(n.useEffect)((function(){c()}),[c]),Object(r.jsxs)("div",{children:[Object.keys(t).length>0?Object.values(t).map((function(e){return Object(r.jsx)(N,{product:e,count:e.count},e.id)})):Object(r.jsx)("div",{className:"row align-items-center justify-content-center",children:Object(r.jsx)("p",{className:"notification",children:"Your Shopping Cart is Empty"})}),a&&Object(r.jsx)(P,{onClose:o,onConfirm:function(){return s(a)}})]})})),_=c(102),I=c(73),S=c(103),A=(c(147),function(e){var t=e.input,c=e.label,n=e.type,a=e.meta,o=a.touched,s=a.error;return Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{className:"formField mt-15",children:c}),Object(r.jsx)("input",Object(l.a)(Object(l.a)({},t),{},{className:"formField mt-15",placeholder:c,type:n})),o&&s&&Object(r.jsx)("span",{className:"error",children:s})]})}),L=Object(S.a)({form:"contactOrder",validate:function(e){var t={};return e.firstName?/[a-zA-Z]/.test(e.firstName)||(t.firstName="Must be a text"):t.firstName="Required",e.lastName?/[a-zA-Z]/.test(e.lastName)||(t.lastName="Must be a text"):t.lastName="Required",e.age?isNaN(Number(e.age))&&(t.age="Must be a number"):t.age="Required",e.deliveryAddress||(t.deliveryAddress="Required"),e.mobilePhone?/^(\+?380)(\d+){9}$/.test(e.mobilePhone)||(t.mobilePhone="Invalid mobile phone"):t.mobilePhone="Required",t},onSubmitSuccess:function(e,t){return t(Object(I.a)("contactOrder"))}})((function(e){var t=e.handleSubmit,c=e.pristine,n=e.submitting,a=e.reset,o=e.touched,s=e.error;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsx)(_.a,{className:"formField ",name:"firstName",component:A,type:"text",label:"FirstName"}),o&&s&&Object(r.jsx)("span",{children:s}),Object(r.jsx)(_.a,{className:"formField ",name:"lastName",component:A,type:"text",label:"LastName"}),o&&s&&Object(r.jsx)("span",{children:s}),Object(r.jsx)(_.a,{className:"formField ",name:"age",component:A,type:"text",label:"Age"}),o&&s&&Object(r.jsx)("span",{children:s}),Object(r.jsx)(_.a,{className:"formField ",name:"deliveryAddress",component:A,type:"text",label:"Delivery address"}),o&&s&&Object(r.jsx)("span",{children:s}),Object(r.jsx)(_.a,{className:"formField ",name:"mobilePhone",component:A,type:"text",label:"Mobile phone"}),o&&s&&Object(r.jsx)("span",{children:s}),Object(r.jsxs)("div",{children:[Object(r.jsx)(d,{className:"btn m-15",text:"Submit",type:"submit",disabled:c||n,style:{backgroundColor:"#0061c2"}}),Object(r.jsx)(d,{className:"btn m-15",text:"Clear Values",type:"button",disabled:c||n,style:{backgroundColor:"#808080"},onClick:a})]})]})})),M=Object(u.b)((function(e){return{cartProducts:x(e)}}),{getCartList:v,removeAllCartProducts:function(){return function(e){var t;localStorage.removeItem("cardList"),e({type:f,payload:t})}}})((function(e){var t=e.cartProducts,c=e.getCartList,n=e.removeAllCartProducts;return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h3",{className:"heading-page",children:"Cart"}),Object(r.jsx)(w,{}),Object(r.jsx)("hr",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h4",{className:"heading-page",children:"Delivery address"}),Object(r.jsx)(L,{onSubmit:function(e){var r=Object(l.a)({},e);r.products=t,console.log(r),n(),c()}})]})})),k=function(e){var t=e.onClose,c=e.onConfirm;return Object(r.jsx)(y,{header:"Addition to cart!",text:"This product will be added to your cart.",textConfirm:"Are you sure want to add a product to your shopping card?",closeButton:!0,bgColorHeader:"#0061c2",bgColorBody:"#047ef8",bgColorFooter:"#047ef8",bgInfo:"#0061c2",onClose:t,onConfirm:c})},D=function(e){var t=e.width,c=e.height,n=e.fill,a=e.viewBox,o=e.xmlns,s=e.d,i=e.onClick;return Object(r.jsx)("button",{className:"btn-icon",onClick:i,children:Object(r.jsx)("svg",{width:t,height:c,fill:"none",viewBox:a,xmlns:o,children:Object(r.jsx)("path",{d:s,fill:n})})})};D.defaultProps={width:"20",height:"17",fill:"#FF6767",viewBox:"0 0 20 17",xmlns:"http://www.w3.org/2000/svg"};var T="FAVORITE_PRODUCTS",E="favorite",F=function(e){return e.favorite.favoriteProducts},R={favoriteProducts:{}};var H=function(e){return{type:T,payload:e}},B="SHOW_MODAL_ADD_TO_CART",J="CLOSE_MODAL_ADD",W="modaladd",z=function(e){return e.modaladd.modalProductId},q={modalProductId:null};var V=function(){return{type:J}},Z=function(e){return function(t){!function(e){var t=JSON.parse(localStorage.getItem("cardList"))||{};t[e.id]?t[e.id].count++:(e.count=1,t[e.id]=e),localStorage.setItem("cardList",JSON.stringify(t))}(e),t(V())}},U=Object(u.b)((function(e){return{favoriteProducts:F(e)}}),{showModalAddToCart:function(e){return{type:B,payload:e}},toggleFavorite:function(e){return function(t){var c=JSON.parse(localStorage.getItem("favoriteList"))||{};c[e.id]?delete c[e.id]:c[e.id]=e,localStorage.setItem("favoriteList",JSON.stringify(c)),t(H(c))}}})((function(e){var t,c=e.product,n=e.showModalAddToCart,a=e.toggleFavorite,o=(t=c.id,(JSON.parse(localStorage.getItem("favoriteList"))||[])[t]?"M10 17C9.71527 17 9.44077 16.9015 9.22684 16.7224C8.41888 16.0475 7.63992 15.4132 6.95267 14.8536L6.94916 14.8507C4.93423 13.2102 3.19427 11.7935 1.98364 10.3979C0.630341 8.83778 0 7.35852 0 5.74252C0 4.17244 0.563507 2.72395 1.58661 1.66367C2.62192 0.590857 4.04251 0 5.58716 0C6.74164 0 7.79892 0.348712 8.72955 1.03637C9.19922 1.38348 9.62494 1.80829 10 2.3038C10.3752 1.80829 10.8008 1.38348 11.2706 1.03637C12.2012 0.348712 13.2585 0 14.413 0C15.9575 0 17.3782 0.590857 18.4135 1.66367C19.4366 2.72395 20 4.17244 20 5.74252C20 7.35852 19.3698 8.83778 18.0165 10.3978C16.8059 11.7935 15.0661 13.2101 13.0515 14.8504C12.363 15.4108 11.5828 16.0461 10.773 16.7227C10.5592 16.9015 10.2846 17 10 17Z":"M10 17C9.71527 17 9.44077 16.9015 9.22684 16.7224C8.41888 16.0475 7.63992 15.4132 6.95267 14.8536L6.94916 14.8507C4.93423 13.2102 3.19427 11.7935 1.98364 10.3979C0.630341 8.83778 0 7.35852 0 5.74252C0 4.17244 0.563507 2.72395 1.58661 1.66367C2.62192 0.590857 4.04251 0 5.58716 0C6.74164 0 7.79892 0.348712 8.72955 1.03637C9.19922 1.38348 9.62494 1.80829 10 2.3038C10.3752 1.80829 10.8008 1.38348 11.2706 1.03637C12.2012 0.348712 13.2585 0 14.413 0C15.9575 0 17.3782 0.590857 18.4135 1.66367C19.4366 2.72395 20 4.17244 20 5.74252C20 7.35852 19.3698 8.83778 18.0165 10.3978C16.8059 11.7935 15.0661 13.2101 13.0515 14.8504C12.363 15.4108 11.5828 16.0461 10.773 16.7227C10.5592 16.9015 10.2846 17 10 17ZM5.58716 1.11932C4.37363 1.11932 3.25882 1.58203 2.44781 2.42232C1.62476 3.2753 1.17142 4.45439 1.17142 5.74252C1.17142 7.10165 1.70013 8.31719 2.88559 9.68375C4.03137 11.0047 5.73563 12.3923 7.70889 13.9989L7.71255 14.0018C8.4024 14.5635 9.18442 15.2003 9.99832 15.8802C10.8171 15.199 11.6003 14.5612 12.2916 13.9986C14.2647 12.392 15.9688 11.0047 17.1146 9.68375C18.2999 8.31719 18.8286 7.10165 18.8286 5.74252C18.8286 4.45439 18.3752 3.2753 17.5522 2.42232C16.7413 1.58203 15.6264 1.11932 14.413 1.11932C13.524 1.11932 12.7078 1.38931 11.9872 1.92171C11.3449 2.39637 10.8975 2.99642 10.6352 3.41627C10.5003 3.63217 10.2629 3.76105 10 3.76105C9.73709 3.76105 9.49966 3.63217 9.36478 3.41627C9.10263 2.99642 8.65524 2.39637 8.01285 1.92171C7.29218 1.38931 6.47598 1.11932 5.58716 1.11932Z");return Object(r.jsxs)("div",{className:"Product",children:[Object(r.jsxs)("div",{className:"row justify-cont-between",children:[Object(r.jsx)("img",{className:"Product__Img",src:c.url,alt:c.name}),Object(r.jsx)(D,{onClick:function(){return a(c)},d:o})]}),Object(r.jsx)("p",{className:"Product__Name",children:c.name}),Object(r.jsxs)("p",{className:"Product__id",children:["\u041a\u043e\u0434: ",c.id]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("span",{className:"Product__Color",children:"\u0426\u0432\u0435\u0442:"}),c.color]}),Object(r.jsxs)("div",{className:"row justify-content-between align-items-center mt-15",children:[Object(r.jsxs)("span",{className:"Product__Price",children:[c.price,Object(r.jsx)("span",{className:"Product__\u0421urrency",children:"\u0433\u0440\u043d"})]}),Object(r.jsx)(d,{onClick:function(){return n(c)},className:"btn",text:"Add to cart",style:{backgroundColor:"#0061c2"}})]})]})})),G=(c(101),Object(u.b)((function(e){return{favorites:F(e),modalProductId:z(e)}}),{getFavoriteList:function(){return function(e){var t=JSON.parse(localStorage.getItem("favoriteList"))||[];e(H(t))}},closeModalAdd:V,modalConfirmAddToCart:Z})((function(e){var t=e.favorites,c=e.modalProductId,a=e.getFavoriteList,o=e.closeModalAdd,s=e.modalConfirmAddToCart;return Object(n.useEffect)((function(){return a()}),[a]),Object(r.jsxs)("div",{className:"ProductList",children:[Object.keys(t).length>0?Object.values(t).map((function(e){return Object(r.jsx)(U,{product:e},e.id)})):Object(r.jsx)("div",{className:"row align-items-center justify-content-center",children:Object(r.jsx)("p",{className:"notification",children:"Favorite products not selected"})}),c&&Object(r.jsx)(k,{onConfirm:function(){return s(c)},onClose:o})]})}))),Y=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h3",{className:"heading-page",children:"Favorite"}),Object(r.jsx)(G,{})]})})},$=c(34),K=c.n($),Q=c(54);function X(){return ee.apply(this,arguments)}function ee(){return(ee=Object(Q.a)(K.a.mark((function e(){var t,c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("cardProduct.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c.products);case 10:e.prev=10,e.t0=e.catch(0),console.log("error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var te="GET_PRODUCTS",ce="product",re=function(e){return e.product.products},ne={products:[]};var ae=Object(u.b)((function(e){return{products:re(e),modalProductId:z(e)}}),{getProductList:function(){return function(){var e=Object(Q.a)(K.a.mark((function e(t){var c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X();case 3:c=e.sent,t({type:te,payload:c}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},closeModalAdd:V,modalConfirmAddToCart:Z})((function(e){var t=e.products,c=e.modalProductId,a=e.getProductList,o=e.closeModalAdd,s=e.modalConfirmAddToCart;return Object(n.useEffect)((function(){return a()}),[a]),Object(r.jsxs)("div",{className:"ProductList",children:[t.map((function(e){return Object(r.jsx)(U,{product:e},e.id)})),c&&Object(r.jsx)(k,{onConfirm:function(){return s(c)},onClose:o})]})})),oe=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h3",{className:"heading-page",children:"Shop"}),Object(r.jsx)(ae,{})]})})},se=(c(246),function(){return Object(r.jsxs)("div",{className:"ContainerMaxWidth",children:[Object(r.jsx)("img",{className:"ContainerMaxWidth__BgImg",src:"img/bgimg4.jpg",alt:"Img"}),Object(r.jsx)("h2",{className:"ContainerMaxWidth__Heading",children:"Top rated"})]})}),ie=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(se,{}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)(ae,{})})]})},le=(c(247),function(){return Object(r.jsx)("img",{className:"Logo",src:"img/logo.jpg",alt:"Print on balls"})}),de=(c(248),function(){return Object(r.jsxs)("header",{className:"headerStyled",children:[Object(r.jsx)(le,{}),Object(r.jsxs)("div",{className:"row align-items-center",children:[Object(r.jsx)(d,{className:"btn btn-sign-in",style:{backgroundColor:"#0061c2"},text:"Sign in"}),Object(r.jsx)(s.b,{className:"MenuItems",to:"/cart",children:Object(r.jsx)("button",{className:"btn-icon",children:Object(r.jsx)("svg",{className:"svg-icon",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation",children:Object(r.jsx)("path",{d:"M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"})})})})]})]})});function ue(){return Object(r.jsx)(s.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)(de,{}),Object(r.jsxs)("div",{className:"Menu",children:[Object(r.jsx)(s.b,{className:"MenuItems",to:"/",children:"HOME"}),Object(r.jsx)(s.b,{className:"MenuItems",to:"/shop",children:"SHOP"}),Object(r.jsx)(s.b,{className:"MenuItems",to:"/favorite",children:"FAVORITE"}),Object(r.jsx)(s.b,{className:"MenuItems",to:"/cart",children:"CART"})]}),Object(r.jsxs)(i.c,{children:[Object(r.jsx)(i.a,{exact:!0,path:"/",children:Object(r.jsx)(ie,{})}),Object(r.jsx)(i.a,{path:"/shop",children:Object(r.jsx)(oe,{})}),Object(r.jsx)(i.a,{path:"/favorite",children:Object(r.jsx)(Y,{})}),Object(r.jsx)(i.a,{path:"/cart",children:Object(r.jsx)(M,{})})]})]})})}var je,be=c(24),me=c(9),Oe=c(107),fe=c(108),he=c(104),xe=Object(me.combineReducers)((je={},Object(be.a)(je,W,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(l.a)(Object(l.a)({},e),{},{modalProductId:t.payload});case J:return Object(l.a)(Object(l.a)({},e),{},{modalProductId:null});default:return e}})),Object(be.a)(je,ce,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return Object(l.a)(Object(l.a)({},e),{},{products:t.payload});default:return e}})),Object(be.a)(je,E,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(l.a)(Object(l.a)({},e),{},{favoriteProducts:t.payload});default:return e}})),Object(be.a)(je,h,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:case b:case f:return Object(l.a)(Object(l.a)({},e),{},{cartProducts:t.payload});case m:return Object(l.a)(Object(l.a)({},e),{},{modalDeleteId:t.payload});case O:return Object(l.a)(Object(l.a)({},e),{},{modalDeleteId:null});default:return e}})),Object(be.a)(je,"form",he.a),je)),pe=Object(me.createStore)(xe,Object(Oe.composeWithDevTools)(Object(me.applyMiddleware)(fe.a)));var Ce=function(){return Object(r.jsx)(u.a,{store:pe,children:Object(r.jsx)(ue,{})})};o.a.render(Object(r.jsx)(Ce,{}),document.getElementById("root"))},79:function(e,t,c){}},[[250,1,2]]]);
//# sourceMappingURL=main.b3000bc0.chunk.js.map