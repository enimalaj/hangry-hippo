(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[42],{1603:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(2),n=a(30),i=a(147),c=a.n(i),s=a(146),o=a(374),l=a(1494),d=a(48),u=a(1621),b=a(0),j=["links","activeLast"];function m(e){var t=e.links,a=e.activeLast,i=void 0!==a&&a,c=Object(n.a)(e,j),l=t[t.length-1].name,d=t.map((function(e){return Object(b.jsx)(x,{link:e},e.name)})),m=t.map((function(e){return Object(b.jsx)("div",{children:e.name!==l?Object(b.jsx)(x,{link:e}):Object(b.jsx)(o.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:l})},e.name)}));return Object(b.jsx)(u.a,Object(r.a)(Object(r.a)({separator:Object(b.jsx)(s.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},c),{},{children:i?d:m}))}function x(e){var t=e.link,a=t.href,r=t.name,n=t.icon;return Object(b.jsxs)(l.a,{variant:"body2",component:d.b,to:a||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[n&&Object(b.jsx)(s.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:n}),r]},r)}var h=["links","action","heading","moreLink","sx"];function p(e){var t=e.links,a=e.action,i=e.heading,d=e.moreLink,u=void 0===d?[]:d,j=e.sx,x=Object(n.a)(e,h);return Object(b.jsxs)(s.a,{sx:Object(r.a)({mb:5},j),children:[Object(b.jsxs)(s.a,{sx:{display:"flex",alignItems:"center"},children:[Object(b.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(b.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:i}),Object(b.jsx)(m,Object(r.a)({links:t},x))]}),a&&Object(b.jsx)(s.a,{sx:{flexShrink:0},children:a})]}),Object(b.jsx)(s.a,{sx:{mt:2},children:c()(u)?Object(b.jsx)(l.a,{href:u,target:"_blank",rel:"noopener",variant:"body2",children:u}):u.map((function(e){return Object(b.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1621:function(e,t,a){"use strict";var r=a(14),n=a(15),i=a(5),c=a(3),s=a(8),o=a(1),l=(a(376),a(12)),d=a(200),u=a(7),b=a(19),j=a(374),m=a(65),x=a(59),h=a(0),p=Object(x.a)(Object(h.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),O=a(1491),f=Object(u.a)(O.a)((function(e){var t=e.theme;return Object(c.a)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(c.a)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":Object(c.a)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:Object(m.c)(t.palette.grey[200],.12)}:{backgroundColor:Object(m.c)(t.palette.grey[600],.12)})})})),v=Object(u.a)(p)({width:24,height:16});var g=function(e){var t=e;return Object(h.jsx)("li",{children:Object(h.jsx)(f,Object(c.a)({focusRipple:!0},e,{ownerState:t,children:Object(h.jsx)(v,{ownerState:t})}))})},y=a(119),w=a(134);function C(e){return Object(y.a)("MuiBreadcrumbs",e)}var k=Object(w.a)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],q=Object(u.a)(j.a,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[Object(i.a)({},"& .".concat(k.li),t.li),t.root]}})({}),R=Object(u.a)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),N=Object(u.a)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function U(e,t,a,r){return e.reduce((function(n,i,c){return c<e.length-1?n=n.concat(i,Object(h.jsx)(N,{"aria-hidden":!0,className:t,ownerState:r,children:a},"separator-".concat(c))):n.push(i),n}),[])}var A=o.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiBreadcrumbs"}),i=a.children,u=a.className,j=a.component,m=void 0===j?"nav":j,x=a.expandText,p=void 0===x?"Show path":x,O=a.itemsAfterCollapse,f=void 0===O?1:O,v=a.itemsBeforeCollapse,y=void 0===v?1:v,w=a.maxItems,k=void 0===w?8:w,N=a.separator,A=void 0===N?"/":N,B=Object(s.a)(a,S),z=o.useState(!1),L=Object(n.a)(z,2),M=L[0],E=L[1],I=Object(c.a)({},a,{component:m,expanded:M,expandText:p,itemsAfterCollapse:f,itemsBeforeCollapse:y,maxItems:k,separator:A}),T=function(e){var t=e.classes;return Object(d.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},C,t)}(I),V=o.useRef(null),P=o.Children.toArray(i).filter((function(e){return o.isValidElement(e)})).map((function(e,t){return Object(h.jsx)("li",{className:T.li,children:e},"child-".concat(t))}));return Object(h.jsx)(q,Object(c.a)({ref:t,component:m,color:"text.secondary",className:Object(l.a)(T.root,u),ownerState:I},B,{children:Object(h.jsx)(R,{className:T.ol,ref:V,ownerState:I,children:U(M||k&&P.length<=k?P:function(e){return y+f>=e.length?e:[].concat(Object(r.a)(e.slice(0,y)),[Object(h.jsx)(g,{"aria-label":p,onClick:function(){E(!0);var e=V.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],Object(r.a)(e.slice(e.length-f,e.length)))}(P),T.separator,A,I)})}))}));t.a=A},1689:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(10),n=a(501);function i(e,t){return void 0===t&&(t={}),function(e,t){return void 0===t&&(t={}),Object(n.a)(e,Object(r.a)({delimiter:"."},t))}(e,Object(r.a)({delimiter:"-"},t))}},2289:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var r=a(1689),n=a(1560),i=a(43),c=a(1581),s=a(36),o=a(74),l=a(238),d=a(495),u=a(1603),b=a(2),j=a(17),m=a(4),x=a.n(m),h=a(283),p=a(1),O=a(284),f=a(50),v=a(500),g=a(1574),y=a(1576),w=a(1596),C=a(146),k=a(374),S=a(1592),q=a(1594),R=a(1479),N=a(281),U=a(377),A=a(239),B=a(0);function z(e){var t=e.isEdit,a=e.currentUser,r=Object(i.g)(),n=Object(O.b)().enqueueSnackbar,c=h.d().shape({name:h.f().required("Name is required"),email:h.f().required("Email is required").email(),phoneNumber:h.f().required("Phone number is required"),address:h.f().required("Address is required"),country:h.f().required("country is required"),company:h.f().required("Company is required"),state:h.f().required("State is required"),city:h.f().required("City is required"),role:h.f().required("Role Number is required"),avatarUrl:h.b().test("required","Avatar is required",(function(e){return""!==e}))}),o=Object(p.useMemo)((function(){return{name:(null===a||void 0===a?void 0:a.name)||"",email:(null===a||void 0===a?void 0:a.email)||"",phoneNumber:(null===a||void 0===a?void 0:a.phoneNumber)||"",address:(null===a||void 0===a?void 0:a.address)||"",country:(null===a||void 0===a?void 0:a.country)||"",state:(null===a||void 0===a?void 0:a.state)||"",city:(null===a||void 0===a?void 0:a.city)||"",zipCode:(null===a||void 0===a?void 0:a.zipCode)||"",avatarUrl:(null===a||void 0===a?void 0:a.avatarUrl)||"",isVerified:(null===a||void 0===a?void 0:a.isVerified)||!0,status:null===a||void 0===a?void 0:a.status,company:(null===a||void 0===a?void 0:a.company)||"",role:(null===a||void 0===a?void 0:a.role)||""}}),[a]),d=Object(f.f)({resolver:Object(v.a)(c),defaultValues:o}),u=d.reset,m=d.watch,z=d.control,L=d.setValue,M=d.handleSubmit,E=d.formState.isSubmitting,I=m();Object(p.useEffect)((function(){t&&a&&u(o),t||u(o)}),[t,a]);var T=function(){var e=Object(j.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:u(),n(t?"Update success!":"Create success!"),r(s.b.user.list),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=Object(p.useCallback)((function(e){var t=e[0];t&&L("avatarUrl",Object.assign(t,{preview:URL.createObjectURL(t)}))}),[L]);return Object(B.jsx)(A.a,{methods:d,onSubmit:M(T),children:Object(B.jsxs)(y.a,{container:!0,spacing:3,children:[Object(B.jsx)(y.a,{item:!0,xs:12,md:4,children:Object(B.jsxs)(w.a,{sx:{py:10,px:3},children:[t&&Object(B.jsx)(U.a,{color:"active"!==I.status?"error":"success",sx:{textTransform:"uppercase",position:"absolute",top:24,right:24},children:I.status}),Object(B.jsx)(C.a,{sx:{mb:5},children:Object(B.jsx)(A.i,{name:"avatarUrl",accept:"image/*",maxSize:3145728,onDrop:V,helperText:Object(B.jsxs)(k.a,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",Object(B.jsx)("br",{})," max size of ",Object(N.b)(3145728)]})})}),t&&Object(B.jsx)(S.a,{labelPlacement:"start",control:Object(B.jsx)(f.a,{name:"status",control:z,render:function(e){var t=e.field;return Object(B.jsx)(q.a,Object(b.a)(Object(b.a)({},t),{},{checked:"active"!==t.value,onChange:function(e){return t.onChange(e.target.checked?"banned":"active")}}))}}),label:Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(k.a,{variant:"subtitle2",sx:{mb:.5},children:"Banned"}),Object(B.jsx)(k.a,{variant:"body2",sx:{color:"text.secondary"},children:"Apply disable account"})]}),sx:{mx:0,mb:3,width:1,justifyContent:"space-between"}}),Object(B.jsx)(A.g,{name:"isVerified",labelPlacement:"start",label:Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(k.a,{variant:"subtitle2",sx:{mb:.5},children:"Email Verified"}),Object(B.jsx)(k.a,{variant:"body2",sx:{color:"text.secondary"},children:"Disabling this will automatically send the user a verification email"})]}),sx:{mx:0,width:1,justifyContent:"space-between"}})]})}),Object(B.jsx)(y.a,{item:!0,xs:12,md:8,children:Object(B.jsxs)(w.a,{sx:{p:3},children:[Object(B.jsxs)(C.a,{sx:{display:"grid",columnGap:2,rowGap:3,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[Object(B.jsx)(A.h,{name:"name",label:"Full Name"}),Object(B.jsx)(A.h,{name:"email",label:"Email Address"}),Object(B.jsx)(A.h,{name:"phoneNumber",label:"Phone Number"}),Object(B.jsxs)(A.f,{name:"country",label:"Country",placeholder:"Country",children:[Object(B.jsx)("option",{value:""}),l.L.map((function(e){return Object(B.jsx)("option",{value:e.label,children:e.label},e.code)}))]}),Object(B.jsx)(A.h,{name:"state",label:"State/Region"}),Object(B.jsx)(A.h,{name:"city",label:"City"}),Object(B.jsx)(A.h,{name:"address",label:"Address"}),Object(B.jsx)(A.h,{name:"zipCode",label:"Zip/Code"}),Object(B.jsx)(A.h,{name:"company",label:"Company"}),Object(B.jsx)(A.h,{name:"role",label:"Role"})]}),Object(B.jsx)(R.a,{alignItems:"flex-end",sx:{mt:3},children:Object(B.jsx)(g.a,{type:"submit",variant:"contained",loading:E,children:t?"Save Changes":"Create User"})})]})})]})})}function L(){var e=Object(o.a)().themeStretch,t=Object(i.f)().pathname,a=Object(i.h)().name,b=void 0===a?"":a,j=t.includes("edit"),m=l.J.find((function(e){return Object(r.a)(e.name)===b}));return Object(B.jsx)(d.a,{title:"User: Create a new user",children:Object(B.jsxs)(c.a,{maxWidth:!e&&"lg",children:[Object(B.jsx)(u.a,{heading:j?"Edit user":"Create a new user",links:[{name:"Dashboard",href:s.b.root},{name:"User",href:s.b.user.list},{name:j?Object(n.a)(b):"New user"}]}),Object(B.jsx)(z,{isEdit:j,currentUser:m})]})})}}}]);
//# sourceMappingURL=42.777727ae.chunk.js.map