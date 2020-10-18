(this["webpackJsonpherolo-task"]=this["webpackJsonpherolo-task"]||[]).push([[0],{118:function(e,t,a){e.exports=a(146)},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),o=a(57),l=a(13),s=a(179),u=a(14),m=a(21),d=a(17),p=a(55),b=Object(p.b)({name:"currency",initialState:{USDtoILS:null,intervalForCurrencyUpdate:1e3},reducers:{setUSDtoILS:function(e,t){return Object(d.a)(Object(d.a)({},e),{},{USDtoILS:t.payload})},setIntervalForCurrencyUpdate:function(e,t){return Object(d.a)(Object(d.a)({},e),{},{intervalForCurrencyUpdate:t.payload})}}}),f=Object(p.b)({name:"snack",initialState:{open:!1,message:"",severity:"error"},reducers:{closeSnack:function(e,t){return Object(d.a)(Object(d.a)({},e),{},{open:!1})},openSnack:function(e,t){return{open:!0,message:t.payload.message,severity:t.payload.severity?t.payload.severity:"error"}}}}),v=Object(p.b)({name:"items",initialState:{currentUniqueId:0,items:{},recievedItems:{},stores:["Amazon","Ebay","Aliexpress"]},reducers:{initState:function(e,t){return t.payload.state},addItem:function(e,t){var a=Object(d.a)(Object(d.a)({},e),{},{items:Object(d.a)(Object(d.a)({},e.items),{},Object(m.a)({},e.currentUniqueId,Object(d.a)(Object(d.a)({},t.payload),{},{id:e.currentUniqueId}))),currentUniqueId:e.currentUniqueId+1});return localStorage.setItem("state",JSON.stringify(a)),a},recieveItem:function(e,t){var a=Object(d.a)({},e.items);delete a[t.payload.id];var n=Object(d.a)(Object(d.a)({},e),{},{items:Object(d.a)({},a),recievedItems:Object(d.a)(Object(d.a)({},e.recievedItems),{},Object(m.a)({},t.payload.id,e.items[t.payload.id]))});return localStorage.setItem("state",JSON.stringify(n)),n}}}),I=a(38),g=a(190),E=a(195),h=a(191),j=Object(s.a)((function(e){return{itemRow:Object(m.a)({padding:e.padding.default,margin:"".concat(e.margin.default," 0 "),border:e.border.default,borderRadius:e.borderRadius.default,display:"flex",justifyContent:"space-between",alignItems:"center"},e.breakpoints.down("xs"),{flexDirection:"column"})}})),O=function(e){var t=e.children,a=e.className,n=j();return r.a.createElement("div",{className:"".concat(n.itemRow," ").concat(a||"")},t)},y=a(198),_=a(186),w=Object(s.a)((function(e){return{input:{margin:"0 ".concat(e.margin.default)}}})),S=function(e){var t=e.adornment,a=e.label,n=void 0===a?"":a,c=e.onChange,i=void 0===c?function(){}:c,o=e.type,l=void 0===o?"text":o,s=e.value,u=e.className,m=w();return r.a.createElement(y.a,{label:n,className:"".concat(m.input," ").concat(u||""),onChange:i,type:l,value:s,InputProps:t?{startAdornment:r.a.createElement(_.a,{position:"start"},t)}:void 0})},k=a(187),x=Object(s.a)((function(e){return{button:{minWidth:e.sizes.buttonMinWidth}}})),N=function(e){var t=e.variant,a=e.className,n=e.children,c=e.onClick,i=void 0===c?function(){}:c,o=e.disabled,l=void 0!==o&&o,s=x();return r.a.createElement(k.a,{className:"".concat(s.button," ").concat(a||""),variant:t,onClick:i,disabled:l,color:"primary"},r.a.createElement("div",null,n))},R=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.items})).stores,a=Object(n.useState)(""),r=Object(I.a)(a,2),c=r[0],i=r[1],o=Object(n.useState)(0),l=Object(I.a)(o,2),s=l[0],m=l[1],d=Object(n.useState)(new Date),p=Object(I.a)(d,2),b=p[0],g=p[1],E=Object(n.useState)(""),h=Object(I.a)(E,2),j=h[0],O=h[1];return{name:c,setName:i,price:s,setPrice:m,date:b,setDate:g,store:j,setStore:O,stores:t,handleSubmit:function(){return(!c||c.length<2?(e(f.actions.openSnack({message:"please enter a valid name. string with more than 2 letters expected"})),!1):!s||isNaN(s)||s<=0?(e(f.actions.openSnack({message:"please enter a valid price. positive number is expected"})),!1):b?!(!j||!t.includes(j))||(e(f.actions.openSnack({message:"please choose one of the stores from the dropdown"})),!1):(e(f.actions.openSnack({message:"please enter a valid date"})),!1))&&e(v.actions.addItem({name:c,price:s,date:b.getTime(),store:j}))}}},L=a(184),C=a(201),D=a(194),F=a(202),U=Object(s.a)((function(e){return{Select:{minWidth:"150px"}}})),B=function(e){var t=e.label,a=e.onChange,n=void 0===a?function(){}:a,c=e.children,i=void 0===c?[]:c,o=e.value,l=e.className,s=U();return r.a.createElement(L.a,{className:"".concat(s.Select," ").concat(l||"")},r.a.createElement(C.a,{shrink:!0,htmlFor:t},t),r.a.createElement(D.a,{value:o,onChange:n,labelId:t,id:t},i&&i.map((function(e){return r.a.createElement(F.a,{key:e,value:e},e)}))))},H=a(193),W=Object(s.a)((function(e){return{DatePicker:{margin:"0 "}}})),P=function(e){var t=e.onChange,a=void 0===t?function(){}:t,n=e.value,c=e.label,i=e.format,o=void 0===i?"dd/MM/yyyy":i,l=e.id,s=e.className,u=W();return r.a.createElement(H.a,{className:"".concat(u.DatePicker," ").concat(s||u.DatePicker),margin:"normal",id:l,label:c,format:o,value:n,onChange:a})},z=Object(s.a)((function(e){var t;return{ItemRowInput:Object(m.a)({},e.breakpoints.down("md"),{flexWrap:"wrap"}),ItemRowInput__Input:(t={margin:"0",width:"20%",minWidth:"150px"},Object(m.a)(t,e.breakpoints.down("md"),{width:"48%",marginBottom:e.margin.default}),Object(m.a)(t,e.breakpoints.down("xs"),{width:"100%"}),t)}})),A=function(){var e=z(),t=R(),a=t.name,n=t.setName,c=t.price,i=t.setPrice,o=t.date,l=t.setDate,s=t.store,u=t.stores,m=t.setStore,d=t.handleSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Add an item:"),r.a.createElement(O,{className:e.ItemRowInput},r.a.createElement(S,{label:"Name",className:"".concat(e.ItemRowInput__name," ").concat(e.ItemRowInput__Input),onChange:function(e){return n(e.target.value)},value:a}),r.a.createElement(S,{label:"Price",type:"number",adornment:"$",className:"".concat(e.ItemRowInput__price," ").concat(e.ItemRowInput__Input),onChange:function(e){return i(e.target.value)},value:c}),r.a.createElement(P,{label:"Delivary Est. Date",className:"".concat(e.ItemRowInput__date," ").concat(e.ItemRowInput__Input),onChange:function(e){return l(e)},value:o}),r.a.createElement(B,{label:"Store",className:"".concat(e.ItemRowInput__store," ").concat(e.ItemRowInput__Input),onChange:function(e){return m(e.target.value)},value:s},u),r.a.createElement(N,{variant:"contained",onClick:d},"Submit")))},M=function(){var e="/list"===Object(l.g)().location.pathname,t=e?"items":"recievedItems";return{isItemsURL:e,dataFromSlice:Object(u.c)((function(e){return e.items}))[t]}},q=a(189),J=a(31),$=Object(s.a)((function(e){return{ItemsListRowItem:{},ItemsListRowItem__price:{display:"flex"},ItemsListRowItem__data:Object(m.a)({width:"20%"},e.breakpoints.down("xs"),{width:"100%",display:"flex",justifyContent:"space-between",flexWrap:"wrap"})}})),T=function(e){var t=e.item,a=e.onClick,n=e.isShowRecievedButton,c=$(),i=Object(J.a)(),o=Object(q.a)(i.breakpoints.down("xs")),l=Object(u.c)((function(e){return e.currency})).USDtoILS;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:c.ItemsListRowItem__data},o?r.a.createElement("div",{className:c.ItemsListRowItem__data__label},"Name"):null,r.a.createElement("div",{className:c.ItemsListRowItem__data__value},t.name)),r.a.createElement("div",{className:c.ItemsListRowItem__data},o?r.a.createElement("div",{className:c.ItemsListRowItem__data__label},"Price"):null,r.a.createElement("div",{className:"".concat(c.ItemsListRowItem__price," ").concat(c.ItemsListRowItem__data__value)},l?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"\u05e9\u05d7"),r.a.createElement("div",null,"".concat((t.price*l).toFixed(2)))):"loading ... ")),r.a.createElement("div",{className:c.ItemsListRowItem__data},o?r.a.createElement("div",{className:c.ItemsListRowItem__data__label},"Delivary Est. Date"):null,r.a.createElement("div",{className:c.ItemsListRowItem__data__value},function(e){var t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getMonth(),"/").concat(t.getFullYear())}(t.date))),r.a.createElement("div",{className:c.ItemsListRowItem__data},o?r.a.createElement("div",{className:c.ItemsListRowItem__data__label},"Store"):null,r.a.createElement("div",{className:c.ItemsListRowItem__data__value},t.store)),n&&r.a.createElement(N,{onClick:a},"Recieved"))},V=Object(s.a)((function(e){return{ItemsListHeader__data:{width:"20%"},ItemsListHeader__spaceForButton:{minWidth:e.sizes.buttonMinWidth}}})),Y=function(e){var t=e.isShowRecievedButton,a=V();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.ItemsListHeader__data},"Name"),r.a.createElement("div",{className:a.ItemsListHeader__data},"Price"),r.a.createElement("div",{className:a.ItemsListHeader__data},"Delivary Est. Date"),r.a.createElement("div",{className:a.ItemsListHeader__data},"Store"),t&&r.a.createElement("div",{className:a.ItemsListHeader__spaceForButton}))},G=Object(s.a)((function(e){return{itemsList:{padding:e.padding.large}}})),K=function(){var e=G(),t=Object(J.a)(),a=Object(u.b)(),n=M(),c=n.dataFromSlice,i=n.isItemsURL,o=Object(q.a)(t.breakpoints.down("xs"));return r.a.createElement("div",{className:e.itemsList},r.a.createElement("h1",null,i?"":"Recieved ","Items List"),o?null:r.a.createElement(O,null,r.a.createElement(Y,{isShowRecievedButton:i})),c&&Object.keys(c).sort((function(e,t){return c[e].date-c[t].date})).map((function(e){return r.a.createElement(O,{key:e},r.a.createElement(T,{item:c[e],onClick:function(){return function(e,t){e(v.actions.recieveItem({id:t.id}))}(a,c[e])},isShowRecievedButton:i}))})),i&&r.a.createElement(A,null))},Q=Object(s.a)((function(e){return{storesList:{padding:e.padding.large}}})),X=function(){var e=Q(),t=M(),a=t.dataFromSlice,n=t.isItemsURL,c=function(e){var t={};return Object.keys(e).forEach((function(a){t[e[a].store]?t[e[a].store]+=1:t[e[a].store]=1})),t}(a);return r.a.createElement("div",{className:e.storesList},r.a.createElement("h1",null,"Sum of Items ",n?"":"recieved"," grouped By Stores"),Object.keys(c).map((function(e){return r.a.createElement(O,{key:e},"".concat(e," : ").concat(c[e]))})))},Z=Object(s.a)((function(e){return{link:{color:e.colors.default.primary.default}}})),ee=function(e){var t=Z();return r.a.createElement(o.b,Object.assign({},e,{className:t.link}),e.children)},te=Object(s.a)((function(e){var t;return{CurrencyIntervalInput:(t={display:"flex",justifyContent:"space-between",alignItems:"center",border:e.border.default,borderRadius:e.borderRadius.default,padding:e.padding.default,width:"600px"},Object(m.a)(t,e.breakpoints.down("sm"),{width:"100%"}),Object(m.a)(t,e.breakpoints.down("xs"),{flexDirection:"column"}),t)}})),ae=function(){var e=Object(u.c)((function(e){return e.currency})).intervalForCurrencyUpdate,t=Object(u.b)(),a=te(),c=Object(n.useState)(e),i=Object(I.a)(c,2),o=i[0],l=i[1];Object(n.useEffect)((function(){l(e)}),[e]);return r.a.createElement("div",{className:a.CurrencyIntervalInput},"Interval for currency update (miliseconds):",r.a.createElement(S,{type:"number",value:o,onChange:function(e){return l(e.target.value)}}),r.a.createElement(N,{onClick:function(){o>=500?(t(b.actions.setIntervalForCurrencyUpdate(o)),t(f.actions.openSnack({message:"succesfully updated the interval to ".concat(o),severity:"success"}))):t(f.actions.openSnack({message:"iterval for currency fetch cannot be lower than 500ms"}))}},"submit"))},ne=Object(s.a)((function(e){return{Header:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",padding:e.padding.large},Header_links:{width:"200px",display:"flex",justifyContent:"space-between",margin:"0  ".concat(e.margin.large,"  ").concat(e.margin.large," 0")}}})),re=function(){var e=ne();return r.a.createElement("div",{className:e.Header},r.a.createElement("div",{className:e.Header_links},r.a.createElement(ee,{to:"/list"},r.a.createElement(N,{variant:"contained"},"list")),r.a.createElement(ee,{to:"/received"},r.a.createElement(N,{variant:"contained"},"received"))),r.a.createElement(ae,null))},ce=a(197),ie=a(196),oe=Object(s.a)((function(e){return{SnackBar:{},SnackBar__Alert:{display:"flex",alignItems:"center"}}}));function le(e){return r.a.createElement(ie.a,Object.assign({elevation:6,variant:"filled"},e))}var se=function(){var e=Object(u.c)((function(e){return e.snack})),t=e.open,a=e.message,n=e.severity,c=void 0===n?"error":n,i=Object(u.b)(),o=oe(),l=function(e,t){"clickaway"!==t&&i(f.actions.closeSnack())};return r.a.createElement(ce.a,{className:o.SnackBar,anchorOrigin:{vertical:"top",horizontal:"center"},open:t,autoHideDuration:2e3,onClose:l},r.a.createElement(le,{className:o.SnackBar__Alert,onClose:l,severity:c},a))},ue=Object(s.a)((function(e){return{BoughtPage:{}}})),me=function(){var e=ue(),t=r.a.useState(0),a=Object(I.a)(t,2),n=a[0],c=a[1];return r.a.createElement("div",{className:e.BoughtPage},r.a.createElement(re,null),r.a.createElement(se,null),r.a.createElement(g.a,{position:"static"},r.a.createElement(E.a,{value:n,onChange:function(e,t){c(t)},"aria-label":"simple tabs example"},r.a.createElement(h.a,{label:"Items List"}),r.a.createElement(h.a,{label:"Stores List"}))),0===n&&r.a.createElement(K,null),1===n&&r.a.createElement(X,null))},de=a(73),pe=a.n(de),be=a(95),fe=a(96),ve=a.n(fe),Ie=function(){var e=Object(be.a)(pe.a.mark((function e(t){var a;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ve()("https://api.exchangeratesapi.io/latest?base=USD&symbols=ILS");case 3:a=e.sent,t(b.actions.setUSDtoILS(a.data.rates.ILS)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(f.actions.openSnack({message:"ERROR at fetching curreny from api.exchangeratesapi.io : ".concat(e.t0)}));case 10:case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ge=Object(s.a)((function(e){return{"@global":{"*, *::before, *::after":{boxSizing:"content-box"},body:{margin:0},a:{textDecoration:"none"}},App:{fontFamily:e.typography.fontFamily,fontSize:e.fontSizes.default}}}));var Ee=function(){var e=ge(),t=Object(u.b)();return function(e){var t=Object(n.useRef)(),a=Object(u.c)((function(e){return e.currency})).intervalForCurrencyUpdate;Object(n.useEffect)((function(){Ie(e)}),[e]),Object(n.useEffect)((function(){return t.current&&clearInterval(t.current),t.current=setInterval((function(){return Ie(e)}),a),function(){return clearInterval(t.current)}}),[a,e])}(t),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("state"));e&&t(v.actions.initState({state:e}))}),[t]),r.a.createElement("div",{className:e.App},r.a.createElement(o.a,{basename:"/ivan-solodov-10-10-2020"},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/"},r.a.createElement(l.a,{to:{pathname:"/list"}})),r.a.createElement(l.b,{path:"/list"},r.a.createElement(me,null)),r.a.createElement(l.b,{path:"/received"},r.a.createElement(me,null)),r.a.createElement(l.b,{path:"*"},"404"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=Object(p.a)({reducer:{currency:b.reducer,items:v.reducer,snack:f.reducer}}),je=a(98),Oe=a(192),ye=a(22),_e={base:{default:"#eee",light:"#fff",dark:"#999"},primary:{default:"#6610f2",light:"#8540f5",dark:"#510bc4"},secondary:{default:"#dc3545",light:"#e4606d",dark:"#bd2130"},font:{default:"#333",invert:"#eee"}},we={palette:{primary:{main:_e.primary.default},secondary:{main:_e.primary.default}},breakpoints:{values:{xs:0,sm:600,md:960,lg:1280,xl:1920}},colors:{default:_e},fontSizes:{h1:"36px",h2:"28px",default:"14px",small:"12px"},typography:{fontFamily:'"Varela Round",Roboto,"Helvetica Neue",Arial,sans-serif'},margin:{large:"20px",default:"10px"},padding:{large:"20px",default:"10px"},border:{default:"1px solid ".concat(_e.primary.default)},borderRadius:{default:"10px"},shadow:{default:"0px 4px 40px rgba(25, 25, 25, 0.1)"},sizes:{buttonMinWidth:"90px"}},Se=a(97),ke=Object(je.a)(we);i.a.render(r.a.createElement(u.a,{store:he},r.a.createElement(Oe.a,{theme:ke},r.a.createElement(ye.a,{utils:Se.a},r.a.createElement(Ee,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.17821677.chunk.js.map