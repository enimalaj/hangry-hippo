(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[39],{1603:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(2),c=n(30),i=n(147),r=n.n(i),s=n(146),l=n(374),o=n(1494),d=n(48),j=n(1621),b=n(0),u=["links","activeLast"];function x(e){var t=e.links,n=e.activeLast,i=void 0!==n&&n,r=Object(c.a)(e,u),o=t[t.length-1].name,d=t.map((function(e){return Object(b.jsx)(h,{link:e},e.name)})),x=t.map((function(e){return Object(b.jsx)("div",{children:e.name!==o?Object(b.jsx)(h,{link:e}):Object(b.jsx)(l.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:o})},e.name)}));return Object(b.jsx)(j.a,Object(a.a)(Object(a.a)({separator:Object(b.jsx)(s.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},r),{},{children:i?d:x}))}function h(e){var t=e.link,n=t.href,a=t.name,c=t.icon;return Object(b.jsxs)(o.a,{variant:"body2",component:d.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&Object(b.jsx)(s.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),a]},a)}var O=["links","action","heading","moreLink","sx"];function p(e){var t=e.links,n=e.action,i=e.heading,d=e.moreLink,j=void 0===d?[]:d,u=e.sx,h=Object(c.a)(e,O);return Object(b.jsxs)(s.a,{sx:Object(a.a)({mb:5},u),children:[Object(b.jsxs)(s.a,{sx:{display:"flex",alignItems:"center"},children:[Object(b.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(b.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:i}),Object(b.jsx)(x,Object(a.a)({links:t},h))]}),n&&Object(b.jsx)(s.a,{sx:{flexShrink:0},children:n})]}),Object(b.jsx)(s.a,{sx:{mt:2},children:r()(j)?Object(b.jsx)(o.a,{href:j,target:"_blank",rel:"noopener",variant:"body2",children:j}):j.map((function(e){return Object(b.jsx)(o.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1628:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(2),c=n(30),i=n(7),r=n(374),s=n(105),l=n(0),o=["title","description","img"],d=Object(i.a)("div")((function(e){return{height:"100%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(8,2)}}));function j(e){var t=e.title,n=e.description,i=e.img,j=Object(c.a)(e,o);return Object(l.jsxs)(d,Object(a.a)(Object(a.a)({},j),{},{children:[Object(l.jsx)(s.a,{disabledEffect:!0,visibleByDefault:!0,alt:"empty content",src:i||"https://minimal-assets-api.vercel.app/assets/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),Object(l.jsx)(r.a,{variant:"h5",gutterBottom:!0,children:t}),n&&Object(l.jsx)(r.a,{variant:"body2",sx:{color:"text.secondary"},children:n})]}))}},1703:function(e,t,n){"use strict";function a(e){var t;switch(e){case"#00AB55":t="Green";break;case"#000000":t="Black";break;case"#FFFFFF":t="White";break;case"#FFC0CB":t="Pink";break;case"#FF4842":t="Red";break;case"#1890FF":t="Blue";break;case"#94D82D":t="Greenyellow";break;case"#FFC107":t="Orange";break;default:t=e}return t}n.d(t,"a",(function(){return a}))},2259:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ge}));var a=n(1),c=n(7),i=n(2290),r=n(146),s=n(1581),l=n(1576),o=n(2291),d=n(2292),j=n(2272),b=n(31),u=n(503),x=n(36),h=n(286),O=n(74),p=n(495),m=n(32),f=n(1603),v=n(15),y=n(1497),g=n(1596),k=n(374),C=n(238),w=n(377),S=n(1869),D=n(1640),I=n(1479),A=n(1550),F=n(1568),z=n(1589),B=n(281),W=n(0);function q(e){var t=e.total,n=e.onEdit,a=e.discount,c=e.subtotal,i=e.shipping,s=e.onApplyDiscount,l=e.enableEdit,o=void 0!==l&&l,d=e.enableDiscount,j=void 0!==d&&d,b=null!==i?"Free":"-";return Object(W.jsxs)(g.a,{sx:{mb:3},children:[Object(W.jsx)(S.a,{title:"Order Summary",action:o&&Object(W.jsx)(y.a,{size:"small",onClick:n,startIcon:Object(W.jsx)(m.a,{icon:"eva:edit-fill"}),children:"Edit"})}),Object(W.jsx)(D.a,{children:Object(W.jsxs)(I.a,{spacing:2,children:[Object(W.jsxs)(I.a,{direction:"row",justifyContent:"space-between",children:[Object(W.jsx)(k.a,{variant:"body2",sx:{color:"text.secondary"},children:"Sub Total"}),Object(W.jsx)(k.a,{variant:"subtitle2",children:Object(B.a)(c)})]}),Object(W.jsxs)(I.a,{direction:"row",justifyContent:"space-between",children:[Object(W.jsx)(k.a,{variant:"body2",sx:{color:"text.secondary"},children:"Discount"}),Object(W.jsx)(k.a,{variant:"subtitle2",children:a?Object(B.a)(-a):"-"})]}),Object(W.jsxs)(I.a,{direction:"row",justifyContent:"space-between",children:[Object(W.jsx)(k.a,{variant:"body2",sx:{color:"text.secondary"},children:"Shipping"}),Object(W.jsx)(k.a,{variant:"subtitle2",children:i?Object(B.a)(i):b})]}),Object(W.jsx)(A.a,{}),Object(W.jsxs)(I.a,{direction:"row",justifyContent:"space-between",children:[Object(W.jsx)(k.a,{variant:"subtitle1",children:"Total"}),Object(W.jsxs)(r.a,{sx:{textAlign:"right"},children:[Object(W.jsx)(k.a,{variant:"subtitle1",sx:{color:"error.main"},children:Object(B.a)(t)}),Object(W.jsx)(k.a,{variant:"caption",sx:{fontStyle:"italic"},children:"(VAT included if applicable)"})]})]}),j&&s&&Object(W.jsx)(F.a,{fullWidth:!0,placeholder:"Discount codes / Gifts",value:"DISCOUNT5",InputProps:{endAdornment:Object(W.jsx)(z.a,{position:"end",children:Object(W.jsx)(y.a,{onClick:function(){return s(5)},sx:{mr:-.5},children:"Apply"})})}})]})})]})}var P=n(17),T=n(4),_=n.n(T),E=n(283),N=n(50),G=n(500),M=n(1553),R=n(1757),L=n(1870),V=n(1688),H=n(1574),Q=n(239);function J(e){var t=e.open,n=e.onClose,a=e.onNextStep,c=e.onCreateBilling,i=E.d().shape({receiver:E.f().required("Fullname is required"),phone:E.f().required("Phone is required"),address:E.f().required("Address is required"),city:E.f().required("City is required"),state:E.f().required("State is required")}),s={addressType:"Home",receiver:"",phone:"",address:"",city:"",state:"",country:C.L[0].label,zipcode:"",isDefault:!0},l=Object(N.f)({resolver:Object(G.a)(i),defaultValues:s}),o=l.handleSubmit,d=l.formState.isSubmitting,j=function(){var e=Object(P.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{a(),c({receiver:t.receiver,phone:t.phone,fullAddress:"".concat(t.address,", ").concat(t.city,", ").concat(t.state,", ").concat(t.country,", ").concat(t.zipcode),addressType:t.addressType,isDefault:t.isDefault})}catch(n){console.error(n)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(W.jsxs)(M.a,{fullWidth:!0,maxWidth:"sm",open:t,onClose:n,children:[Object(W.jsx)(R.a,{children:"Add new address"}),Object(W.jsxs)(Q.a,{methods:l,onSubmit:o(j),children:[Object(W.jsx)(L.a,{children:Object(W.jsxs)(I.a,{spacing:3,children:[Object(W.jsx)(Q.e,{name:"addressType",options:["Home","Office"]}),Object(W.jsxs)(r.a,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[Object(W.jsx)(Q.h,{name:"receiver",label:"Full Name"}),Object(W.jsx)(Q.h,{name:"phone",label:"Phone Number"})]}),Object(W.jsx)(Q.h,{name:"address",label:"Address"}),Object(W.jsxs)(r.a,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(3, 1fr)"}},children:[Object(W.jsx)(Q.h,{name:"city",label:"Town / City"}),Object(W.jsx)(Q.h,{name:"state",label:"State"}),Object(W.jsx)(Q.h,{name:"zipcode",label:"Zip / Postal Code"})]}),Object(W.jsx)(Q.f,{name:"country",label:"Country",children:C.L.map((function(e){return Object(W.jsx)("option",{value:e.label,children:e.label},e.code)}))}),Object(W.jsx)(Q.b,{name:"isDefault",label:"Use this address as default.",sx:{mt:3}})]})}),Object(W.jsx)(A.a,{}),Object(W.jsxs)(V.a,{children:[Object(W.jsx)(H.a,{type:"submit",variant:"contained",loading:d,children:"Deliver to this Address"}),Object(W.jsx)(y.a,{color:"inherit",variant:"outlined",onClick:n,children:"Cancel"})]})]})]})}function U(){var e=Object(b.d)(),t=Object(b.e)((function(e){return e.product})).checkout,n=t.total,c=t.discount,i=t.subtotal,s=Object(a.useState)(!1),o=Object(v.a)(s,2),d=o[0],j=o[1],x=function(){e(Object(u.o)())},h=function(t){e(Object(u.d)(t))};return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(l.a,{container:!0,spacing:3,children:[Object(W.jsxs)(l.a,{item:!0,xs:12,md:8,children:[C.a.map((function(e,t){return Object(W.jsx)(Y,{address:e,onNextStep:x,onCreateBilling:h},t)})),Object(W.jsxs)(r.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(W.jsx)(y.a,{size:"small",color:"inherit",onClick:function(){e(Object(u.m)())},startIcon:Object(W.jsx)(m.a,{icon:"eva:arrow-ios-back-fill"}),children:"Back"}),Object(W.jsx)(y.a,{size:"small",onClick:function(){j(!0)},startIcon:Object(W.jsx)(m.a,{icon:"eva:plus-fill"}),children:"Add new address"})]})]}),Object(W.jsx)(l.a,{item:!0,xs:12,md:4,children:Object(W.jsx)(q,{subtotal:i,total:n,discount:c})})]}),Object(W.jsx)(J,{open:d,onClose:function(){j(!1)},onNextStep:x,onCreateBilling:h})]})}function Y(e){var t=e.address,n=e.onNextStep,a=e.onCreateBilling,c=t.receiver,i=t.fullAddress,s=t.addressType,l=t.phone,o=t.isDefault;return Object(W.jsxs)(g.a,{sx:{p:3,mb:3,position:"relative"},children:[Object(W.jsxs)(r.a,{sx:{mb:1,display:"flex",alignItems:"center"},children:[Object(W.jsx)(k.a,{variant:"subtitle1",children:c}),Object(W.jsxs)(k.a,{variant:"body2",sx:{color:"text.secondary"},children:["\xa0(",s,")"]}),o&&Object(W.jsx)(w.a,{color:"info",sx:{ml:1},children:"Default"})]}),Object(W.jsx)(k.a,{variant:"body2",gutterBottom:!0,children:i}),Object(W.jsx)(k.a,{variant:"body2",sx:{color:"text.secondary"},children:l}),Object(W.jsxs)(r.a,{sx:{mt:3,display:"flex",position:{sm:"absolute"},right:{sm:24},bottom:{sm:24}},children:[!o&&Object(W.jsx)(y.a,{variant:"outlined",size:"small",color:"inherit",children:"Delete"}),Object(W.jsx)(r.a,{sx:{mx:.5}}),Object(W.jsx)(y.a,{variant:"outlined",size:"small",onClick:function(){a(t),n()},children:"Deliver to this Address"})]})]})}function Z(e){var t=e.onBackStep,n=Object(b.e)((function(e){return e.product})).checkout.billing;return Object(W.jsxs)(g.a,{sx:{mb:3},children:[Object(W.jsx)(S.a,{title:"Billing Address",action:Object(W.jsx)(y.a,{size:"small",startIcon:Object(W.jsx)(m.a,{icon:"eva:edit-fill"}),onClick:t,children:"Edit"})}),Object(W.jsxs)(D.a,{children:[Object(W.jsxs)(k.a,{variant:"subtitle2",gutterBottom:!0,children:[null===n||void 0===n?void 0:n.receiver,"\xa0",Object(W.jsxs)(k.a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:["(",null===n||void 0===n?void 0:n.addressType,")"]})]}),Object(W.jsx)(k.a,{variant:"body2",gutterBottom:!0,children:null===n||void 0===n?void 0:n.fullAddress}),Object(W.jsx)(k.a,{variant:"body2",sx:{color:"text.secondary"},children:null===n||void 0===n?void 0:n.phone})]})]})}var $=n(507),K=n.n($),X=n(48),ee=n(120),te=n(1628),ne=n(1641),ae=n(1642),ce=n(1643),ie=n(1644),re=n(1645),se=n(1646),le=n(1496),oe=n(1703),de=n(105),je=Object(c.a)("div")((function(e){var t=e.theme;return{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:t.spacing(.5),padding:t.spacing(.5,.75),borderRadius:t.shape.borderRadius,border:"solid 1px ".concat(t.palette.grey[50032])}}));function be(e){var t=e.products,n=e.onDelete,a=e.onIncreaseQuantity,c=e.onDecreaseQuantity;return Object(W.jsx)(ne.a,{sx:{minWidth:720},children:Object(W.jsxs)(ae.a,{children:[Object(W.jsx)(ce.a,{children:Object(W.jsxs)(ie.a,{children:[Object(W.jsx)(re.a,{children:"Product"}),Object(W.jsx)(re.a,{align:"left",children:"Price"}),Object(W.jsx)(re.a,{align:"left",children:"Quantity"}),Object(W.jsx)(re.a,{align:"right",children:"Total Price"}),Object(W.jsx)(re.a,{align:"right"})]})}),Object(W.jsx)(se.a,{children:t.map((function(e){var t=e.id,i=e.name,s=e.size,l=e.price,o=e.color,d=e.cover,j=e.quantity,b=e.available;return Object(W.jsxs)(ie.a,{children:[Object(W.jsx)(re.a,{children:Object(W.jsxs)(r.a,{sx:{display:"flex",alignItems:"center"},children:[Object(W.jsx)(de.a,{alt:"product image",src:d,sx:{width:64,height:64,borderRadius:1.5,mr:2}}),Object(W.jsxs)(r.a,{children:[Object(W.jsx)(k.a,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240},children:i}),Object(W.jsxs)(r.a,{sx:{display:"flex",alignItems:"center"},children:[Object(W.jsxs)(k.a,{variant:"body2",children:[Object(W.jsx)(k.a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:"size:\xa0"}),s]}),Object(W.jsx)(A.a,{orientation:"vertical",sx:{mx:1,height:16}}),Object(W.jsxs)(k.a,{variant:"body2",children:[Object(W.jsx)(k.a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:"color:\xa0"}),Object(oe.a)(o)]})]})]})]})}),Object(W.jsx)(re.a,{align:"left",children:Object(B.a)(l)}),Object(W.jsx)(re.a,{align:"left",children:Object(W.jsx)(ue,{quantity:j,available:b,onDecrease:function(){return c(t)},onIncrease:function(){return a(t)}})}),Object(W.jsx)(re.a,{align:"right",children:Object(B.a)(l*j)}),Object(W.jsx)(re.a,{align:"right",children:Object(W.jsx)(le.a,{onClick:function(){return n(t)},children:Object(W.jsx)(m.a,{icon:"eva:trash-2-outline",width:20,height:20})})})]},t)}))})]})})}function ue(e){var t=e.available,n=e.quantity,a=e.onIncrease,c=e.onDecrease;return Object(W.jsxs)(r.a,{sx:{width:96,textAlign:"right"},children:[Object(W.jsxs)(je,{children:[Object(W.jsx)(le.a,{size:"small",color:"inherit",onClick:c,disabled:n<=1,children:Object(W.jsx)(m.a,{icon:"eva:minus-fill",width:16,height:16})}),n,Object(W.jsx)(le.a,{size:"small",color:"inherit",onClick:a,disabled:n>=t,children:Object(W.jsx)(m.a,{icon:"eva:plus-fill",width:16,height:16})})]}),Object(W.jsxs)(k.a,{variant:"caption",sx:{color:"text.secondary"},children:["available: ",t]})]})}function xe(){var e=Object(b.d)(),t=Object(b.e)((function(e){return e.product})).checkout,n=t.cart,a=t.total,c=t.discount,i=t.subtotal,r=K()(n.map((function(e){return e.quantity}))),s=0===n.length;return Object(W.jsxs)(l.a,{container:!0,spacing:3,children:[Object(W.jsxs)(l.a,{item:!0,xs:12,md:8,children:[Object(W.jsxs)(g.a,{sx:{mb:3},children:[Object(W.jsx)(S.a,{title:Object(W.jsxs)(k.a,{variant:"h6",children:["Card",Object(W.jsxs)(k.a,{component:"span",sx:{color:"text.secondary"},children:["\xa0(",r," item)"]})]}),sx:{mb:3}}),s?Object(W.jsx)(te.a,{title:"Cart is empty",description:"Look like you have no items in your shopping cart.",img:"https://minimal-assets-api.vercel.app/assets/illustrations/illustration_empty_cart.svg"}):Object(W.jsx)(ee.a,{children:Object(W.jsx)(be,{products:n,onDelete:function(t){e(Object(u.g)(t))},onIncreaseQuantity:function(t){e(Object(u.l)(t))},onDecreaseQuantity:function(t){e(Object(u.e)(t))}})})]}),Object(W.jsx)(y.a,{color:"inherit",component:X.b,to:x.b.eCommerce.root,startIcon:Object(W.jsx)(m.a,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"})]}),Object(W.jsxs)(l.a,{item:!0,xs:12,md:4,children:[Object(W.jsx)(q,{enableDiscount:!0,total:a,discount:c,subtotal:i,onApplyDiscount:function(t){e(Object(u.b)(t))}}),Object(W.jsx)(y.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:0===n.length,onClick:function(){e(Object(u.o)())},children:"Check Out"})]})]})}var he=n(2),Oe=n(1559),pe=n(1592),me=n(1569),fe=Object(c.a)("div")((function(e){var t=e.theme;return{width:"100%",display:"flex",alignItems:"center",padding:t.spacing(0,2.5),justifyContent:"space-between",transition:t.transitions.create("all"),border:"solid 1px ".concat(t.palette.divider),borderRadius:1.5*Number(t.shape.borderRadius)}}));function ve(e){var t=e.deliveryOptions,n=e.onApplyShipping,a=Object(N.g)().control;return Object(W.jsxs)(g.a,{children:[Object(W.jsx)(S.a,{title:"Delivery options"}),Object(W.jsx)(D.a,{children:Object(W.jsx)(N.a,{name:"delivery",control:a,render:function(e){var a=e.field;return Object(W.jsx)(Oe.a,Object(he.a)(Object(he.a)({},a),{},{onChange:function(e){var t=e.target.value;a.onChange(Number(t)),n(Number(t))},children:Object(W.jsx)(I.a,{spacing:2,alignItems:"center",direction:{xs:"column",md:"row"},children:t.map((function(e){var t=a.value===e.value;return Object(W.jsx)(fe,{sx:Object(he.a)({},t&&{boxShadow:function(e){return e.customShadows.z20}}),children:Object(W.jsx)(pe.a,{value:e.value,control:Object(W.jsx)(me.a,{checkedIcon:Object(W.jsx)(m.a,{icon:"eva:checkmark-circle-2-fill"})}),label:Object(W.jsxs)(r.a,{sx:{ml:1},children:[Object(W.jsx)(k.a,{variant:"subtitle2",children:e.title}),Object(W.jsx)(k.a,{variant:"body2",sx:{color:"text.secondary"},children:e.description})]}),sx:{py:3,flexGrow:1,mr:0}})},e.value)}))})}))}})})]})}var ye=n(5),ge=n(43),ke=n(1494),Ce=n(54),we=n(149),Se=Object(c.a)(Ce.a)((function(e){var t=e.theme;return{"& .MuiDialog-paper":Object(ye.a)({margin:0},t.breakpoints.up("md"),{maxWidth:"calc(100% - 48px)",maxHeight:"calc(100% - 48px)"})}}));function De(e){var t=Object.assign({},e),n=Object(ge.g)(),a=Object(b.d)(),c=function(){a(Object(u.p)()),n(x.b.eCommerce.shop)};return Object(W.jsx)(Se,Object(he.a)(Object(he.a)({fullScreen:!0},t),{},{children:Object(W.jsxs)(r.a,{sx:{p:4,maxWidth:480,margin:"auto"},children:[Object(W.jsxs)(r.a,{sx:{textAlign:"center"},children:[Object(W.jsx)(k.a,{variant:"h4",paragraph:!0,children:"Thank you for your purchase!"}),Object(W.jsx)(we.g,{sx:{height:260,my:10}}),Object(W.jsxs)(k.a,{align:"left",paragraph:!0,children:["Thanks for placing order \xa0",Object(W.jsx)(ke.a,{href:"#",children:"01dc1370-3df6-11eb-b378-0242ac130002"})]}),Object(W.jsxs)(k.a,{align:"left",sx:{color:"text.secondary"},children:["We will send you a notification within 5 days when it ships.",Object(W.jsx)("br",{})," ",Object(W.jsx)("br",{})," If you have any question or queries then fell to get in contact us. ",Object(W.jsx)("br",{})," ",Object(W.jsx)("br",{})," All the best,"]})]}),Object(W.jsx)(A.a,{sx:{my:3}}),Object(W.jsxs)(I.a,{direction:{xs:"column-reverse",sm:"row"},justifyContent:"space-between",spacing:2,children:[Object(W.jsx)(y.a,{color:"inherit",onClick:c,startIcon:Object(W.jsx)(m.a,{icon:"eva:arrow-ios-back-fill"}),children:"Continue Shopping"}),Object(W.jsx)(y.a,{variant:"contained",startIcon:Object(W.jsx)(m.a,{icon:"ant-design:file-pdf-filled"}),onClick:c,children:"Download as PDF"})]})]})}))}var Ie=n(1500),Ae=n(1593),Fe=n(89),ze=Object(c.a)("div")((function(e){var t=e.theme;return{display:"flex",alignItems:"center",padding:t.spacing(0,2.5),justifyContent:"space-between",transition:t.transitions.create("all"),border:"solid 1px ".concat(t.palette.divider),borderRadius:1.5*Number(t.shape.borderRadius)}}));function Be(e){var t=e.paymentOptions,n=e.cardOptions,a=Object(N.g)().control,c=Object(Fe.a)("up","sm");return Object(W.jsxs)(g.a,{sx:{my:3},children:[Object(W.jsx)(S.a,{title:"Payment options"}),Object(W.jsx)(D.a,{children:Object(W.jsx)(N.a,{name:"payment",control:a,render:function(e){var a=e.field,i=e.fieldState.error;return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(Oe.a,Object(he.a)(Object(he.a)({row:!0},a),{},{children:Object(W.jsx)(I.a,{spacing:2,children:t.map((function(e){var t=e.value,i=e.title,s=e.icons,l=e.description,o="credit_card"===t,d=a.value===t;return Object(W.jsxs)(ze,{sx:Object(he.a)(Object(he.a)({},d&&{boxShadow:function(e){return e.customShadows.z20}}),o&&{flexWrap:"wrap"}),children:[Object(W.jsx)(pe.a,{value:t,control:Object(W.jsx)(me.a,{checkedIcon:Object(W.jsx)(m.a,{icon:"eva:checkmark-circle-2-fill"})}),label:Object(W.jsxs)(r.a,{sx:{ml:1},children:[Object(W.jsx)(k.a,{variant:"subtitle2",children:i}),Object(W.jsx)(k.a,{variant:"body2",sx:{color:"text.secondary"},children:l})]}),sx:{flexGrow:1,py:3}}),c&&Object(W.jsx)(I.a,{direction:"row",spacing:1,flexShrink:0,children:s.map((function(e){return Object(W.jsx)(de.a,{alt:"logo card",src:e},e)}))}),o&&Object(W.jsxs)(Ie.a,{in:"credit_card"===a.value,sx:{width:1},children:[Object(W.jsx)(F.a,{select:!0,fullWidth:!0,label:"Cards",SelectProps:{native:!0},children:n.map((function(e){return Object(W.jsx)("option",{value:e.value,children:e.label},e.value)}))}),Object(W.jsx)(y.a,{size:"small",startIcon:Object(W.jsx)(m.a,{icon:"eva:plus-fill",width:20,height:20}),sx:{my:3},children:"Add new card"})]})]},i)}))})})),!!i&&Object(W.jsx)(Ae.a,{error:!0,sx:{pt:1,px:2},children:i.message})]})}})})]})}var We=[{value:0,title:"Standard delivery (Free)",description:"Delivered on Monday, August 12"},{value:2,title:"Fast delivery ($2,00)",description:"Delivered on Monday, August 5"}],qe=[{value:"paypal",title:"Pay with Paypal",description:"You will be redirected to PayPal website to complete your purchase securely.",icons:["https://minimal-assets-api.vercel.app/assets/icons/ic_paypal.svg"]},{value:"credit_card",title:"Credit / Debit Card",description:"We support Mastercard, Visa, Discover and Stripe.",icons:["https://minimal-assets-api.vercel.app/assets/icons/ic_mastercard.svg","https://minimal-assets-api.vercel.app/assets/icons/ic_visa.svg"]},{value:"cash",title:"Cash on CheckoutDelivery",description:"Pay with cash when your order is delivered.",icons:[]}],Pe=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}];function Te(){var e=Object(b.d)(),t=Object(b.e)((function(e){return e.product})).checkout,n=t.total,a=t.discount,c=t.subtotal,i=t.shipping,r=function(){e(Object(u.m)())},s=E.d().shape({payment:E.f().required("Payment is required!")}),o={delivery:i,payment:""},d=Object(N.f)({resolver:Object(G.a)(s),defaultValues:o}),j=d.handleSubmit,x=d.formState.isSubmitting,h=function(){var t=Object(P.a)(_.a.mark((function t(){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e(Object(u.o)())}catch(n){console.error(n)}case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(W.jsx)(Q.a,{methods:d,onSubmit:j(h),children:Object(W.jsxs)(l.a,{container:!0,spacing:3,children:[Object(W.jsxs)(l.a,{item:!0,xs:12,md:8,children:[Object(W.jsx)(ve,{onApplyShipping:function(t){e(Object(u.c)(t))},deliveryOptions:We}),Object(W.jsx)(Be,{cardOptions:Pe,paymentOptions:qe}),Object(W.jsx)(y.a,{size:"small",color:"inherit",onClick:r,startIcon:Object(W.jsx)(m.a,{icon:"eva:arrow-ios-back-fill"}),children:"Back"})]}),Object(W.jsxs)(l.a,{item:!0,xs:12,md:4,children:[Object(W.jsx)(Z,{onBackStep:r}),Object(W.jsx)(q,{enableEdit:!0,total:n,subtotal:c,discount:a,shipping:i,onEdit:function(){return t=0,void e(Object(u.n)(t));var t}}),Object(W.jsx)(H.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:x,children:"Complete Order"})]})]})})}var _e=["Cart","Billing & address","Payment"],Ee=Object(c.a)(i.a)((function(e){var t=e.theme;return{top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)","& .MuiStepConnector-line":{borderTopWidth:2,borderColor:t.palette.divider},"&.Mui-active, &.Mui-completed":{"& .MuiStepConnector-line":{borderColor:t.palette.primary.main}}}}));function Ne(e){var t=e.active,n=e.completed;return Object(W.jsx)(r.a,{sx:{zIndex:9,width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center",color:t?"primary.main":"text.disabled"},children:n?Object(W.jsx)(m.a,{icon:"eva:checkmark-fill",sx:{zIndex:1,width:20,height:20,color:"primary.main"}}):Object(W.jsx)(r.a,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}function Ge(){var e=Object(O.a)().themeStretch,t=Object(b.d)(),n=Object(h.a)(),c=Object(b.e)((function(e){return e.product})).checkout,i=c.cart,r=c.billing,m=c.activeStep,v=m===_e.length;return Object(a.useEffect)((function(){n.current&&t(Object(u.i)(i))}),[t,n,i]),Object(a.useEffect)((function(){1===m&&t(Object(u.d)(null))}),[t,m]),Object(W.jsx)(p.a,{title:"Ecommerce: Checkout",children:Object(W.jsxs)(s.a,{maxWidth:!e&&"lg",children:[Object(W.jsx)(f.a,{heading:"Checkout",links:[{name:"Dashboard",href:x.b.root},{name:"E-Commerce",href:x.b.eCommerce.root},{name:"Checkout"}]}),Object(W.jsx)(l.a,{container:!0,justifyContent:v?"center":"flex-start",children:Object(W.jsx)(l.a,{item:!0,xs:12,md:8,sx:{mb:5},children:Object(W.jsx)(o.a,{alternativeLabel:!0,activeStep:m,connector:Object(W.jsx)(Ee,{}),children:_e.map((function(e){return Object(W.jsx)(d.a,{children:Object(W.jsx)(j.a,{StepIconComponent:Ne,sx:{"& .MuiStepLabel-label":{typography:"subtitle2",color:"text.disabled"}},children:e})},e)}))})})}),v?Object(W.jsx)(De,{open:v}):Object(W.jsxs)(W.Fragment,{children:[0===m&&Object(W.jsx)(xe,{}),1===m&&Object(W.jsx)(U,{}),2===m&&r&&Object(W.jsx)(Te,{})]})]})})}}}]);
//# sourceMappingURL=39.5b4ac9ef.chunk.js.map