(this["webpackJsonpfor-ignat"]=this["webpackJsonpfor-ignat"]||[]).push([[0],{10:function(e,t,a){e.exports={telega:"TelegramStyles_telega__1ei9w",class1:"TelegramStyles_class1__3A4sc",class2:"TelegramStyles_class2__14Xg8"}},11:function(e,t,a){e.exports={Menu:"Menu_Menu__2KZrR",Monday:"Menu_Monday__sEIR-",Tuesday:"Menu_Tuesday__31D4i",MondayACtive:"Menu_MondayACtive__1uw7s",TuesdayActive:"Menu_TuesdayActive__29j_s"}},16:function(e,t,a){e.exports={universalButton:"Button_universalButton__2xFCe",orangeButton:"Button_orangeButton__3wbU0",colorFilter:"Button_colorFilter__2ODLp"}},24:function(e,t,a){e.exports={TodoList:"TodoList_TodoList__4Zg_E"}},25:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),i=a.n(r),c=(a(30),a(9)),o=a(6),u=a(7),s=a(1),m=(a(31),a(10)),d=a.n(m),f=a(16),E=a.n(f),v=function(e){return l.a.createElement("button",{className:e.Filter==e.title?E.a.colorFilter:E.a.universalButton,onClick:e.callback},e.title)},b=a(5),p=a.n(b),g=function(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),r=a[0],i=a[1];function c(){""!==e.sendName.trim()?(e.clickEnter(e.sendName),i("")):i(" Title is required")}return l.a.createElement("div",null,l.a.createElement("input",{className:e.sendName?p.a.universal:p.a.error,type:"text",value:e.sendName,onChange:function(t){i(""),e.setSendName(t.currentTarget.value)},onKeyPress:function(t){13===t.charCode&&(e.clickEnter(e.sendName),c())}}),l.a.createElement(v,{title:"SEND",callback:function(){c()}}),l.a.createElement("div",{className:"error-message"},r))},h=[],O=0;var j=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)([{id:0,name:"Sasha Yudintsev"}]),u=Object(s.a)(c,2),m=u[0],f=u[1];return l.a.createElement("div",null,l.a.createElement("div",{className:d.a.wrapper},l.a.createElement("div",{className:d.a.telega},l.a.createElement("p",null),l.a.createElement("div",null,e.name),l.a.createElement("div",null,e.surName),l.a.createElement("hr",null),l.a.createElement("table",{className:d.a.tt},l.a.createElement("th",null,"TODO"),l.a.createElement("th",null,"PRIORITET")),l.a.createElement("table",null,e.arQualities.map((function(t){return l.a.createElement("div",{key:t.id,className:"hight"===t.prioritet?d.a.class1:d.a.class2},l.a.createElement("tr",null,l.a.createElement("td",null,t.toDo),l.a.createElement("td",null,t.prioritet),l.a.createElement(v,{title:"delete",callback:function(){e.Delete(t.id)}})))}))),l.a.createElement("p",null),l.a.createElement(v,{title:"All",callback:function(){return e.changeFilter("all")}}),l.a.createElement(v,{title:"HightPrioritet",callback:function(){return e.changeFilter("HightPrioritet")}}),l.a.createElement(v,{title:"MiddlePrioritet",callback:function(){return e.changeFilter("MiddlePrioritet")}}),l.a.createElement(v,{title:"LowPrioritet",callback:function(){return e.changeFilter("LowPrioritet")}}),l.a.createElement("p",null),l.a.createElement("p",null),l.a.createElement(g,{sendName:r,setSendName:i,clickEnter:function(e){e.length>=3&&(alert("Hi USER "+e),function(e){var t={id:0,name:e};(function(e){O++,h.push(O),localStorage.setItem(O.toString(),e.name)})(t),function(){for(var e=1;e<=h.length;e++)console.log(localStorage.getItem(e.toString()))}(),f([t].concat(Object(o.a)(m)))}(e)),i("")}}),l.a.createElement("span",null,l.a.createElement("h1",null,"names count: ",m.length)))))},k=a(39),_=a(8),T=a(2),y=a(11),S=a.n(y),N=function(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),r=a[0],i=a[1],c=function(e){i(e)};return l.a.createElement("div",null,l.a.createElement(_.b,{exact:!0,to:"/"},"  ",l.a.createElement("button",{onClick:function(){e.callBack(),i(null)},className:S.a.Menu},"Menu")),e.opacity&&l.a.createElement(_.b,{to:"/monday"},l.a.createElement("button",{onClick:function(){return c("Monday")},className:"Monday"===r?S.a.MondayACtive:S.a.Monday},"Monday")),e.opacity&&l.a.createElement(_.b,{to:"/tuesday"},l.a.createElement("button",{onClick:function(){return c("Tuesday")},className:"Tuesday"===r?S.a.TuesdayActive:S.a.Tuesday},"Tuesday")))},D=a(24),M=a.n(D),w=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],i=a[1],c=function(){e.callBack(r),i("")};return l.a.createElement("div",null,l.a.createElement("input",{className:r?p.a.normal:p.a.error,value:r,onChange:function(e){i(e.currentTarget.value)},onKeyPress:function(e){13===e.charCode&&c()}}),l.a.createElement("button",{className:p.a.universal,onClick:c},"+"),!r&&l.a.createElement("div",{className:p.a.errorMessage},"This field is required"))},C=function(e){return l.a.createElement("input",{onClick:e.callBack,type:"checkbox",checked:e.isDone})},B=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(e.title),o=Object(s.a)(c,2),u=o[0],m=o[1];return r?l.a.createElement("input",{value:u,autoFocus:!0,onKeyPress:function(e){13==e.charCode&&i(!1)},onBlur:function(){i(!1)},onChange:function(t){m(t.currentTarget.value),e.callBack(u)}}):l.a.createElement("span",{onDoubleClick:function(){i(!r)}},e.title)},A=function(e){return l.a.createElement("div",{className:M.a.TodoList},l.a.createElement(v,{callback:function(){return e.RemoveTodolist(e.id)},title:"delete"}),l.a.createElement(B,{callBack:function(t){e.saveNewTitleTodolist(t,e.id)},title:e.title}),l.a.createElement("div",null,l.a.createElement(w,{callBack:function(t){e.addTask(t,e.id)}})),l.a.createElement("ul",null,e.Tasks.map((function(t){return l.a.createElement("li",{key:t.id},l.a.createElement(v,{callback:function(){return e.removeTask(t.id,e.id)},title:"X"}),l.a.createElement(C,{callBack:function(){return e.changeStatus(t.id,e.id)},isDone:t.isDone}),l.a.createElement(B,{callBack:function(a){e.saveNewTitle(a,e.id,t.id)},title:t.title}))}))),l.a.createElement("div",null,l.a.createElement(v,{callback:function(){return e.changeFilterTodolist("All",e.id)},title:"All",Filter:e.filter}),l.a.createElement(v,{callback:function(){return e.changeFilterTodolist("Active",e.id)},title:"Active",Filter:e.filter}),l.a.createElement(v,{callback:function(){return e.changeFilterTodolist("Completed",e.id)},title:"Completed",Filter:e.filter})))},F=function(e){var t=Object(n.useState)("1"),a=Object(s.a)(t,2),r=a[0],i=a[1];return l.a.createElement("select",{value:r,onChange:function(e){i(e.currentTarget.value)}},l.a.createElement("option",null,"none"),e.arraySkills.map((function(e){return l.a.createElement("option",{value:e.value},e.skills)})))},P=function(e){var t=Object(n.useState)("1"),a=Object(s.a)(t,2),r=a[0],i=a[1],c=function(e){i(e.currentTarget.value)};return l.a.createElement("form",{action:"/action_page.php"},l.a.createElement("p",null,"Please select your SKILL:"),e.arraySkills.map((function(e){return l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"gender",value:r,onChange:c}),l.a.createElement("label",null,e.skills))})))},I=Object(k.a)(),L=Object(k.a)();var R=function(){var e,t=Object(n.useState)([{id:Object(k.a)(),toDo:"JS work",prioritet:"hight"},{id:Object(k.a)(),toDo:"watch TV",prioritet:"low"},{id:Object(k.a)(),toDo:"games",prioritet:"middle"},{id:Object(k.a)(),toDo:"React",prioritet:"hight"},{id:Object(k.a)(),toDo:"HTMl",prioritet:"low"}]),a=Object(s.a)(t,2),r=a[0],i=a[1];function m(e){var t=r.filter((function(t){return t.id!==e}));i(t)}var d=Object(n.useState)("All"),f=Object(s.a)(d,2),E=f[0],v=f[1],b=r;function p(e){v(e)}"HightPrioritet"===E&&(b=r.filter((function(e){return"hight"===e.prioritet}))),"MiddlePrioritet"===E&&(b=r.filter((function(e){return"middle"===e.prioritet}))),"LowPrioritet"===E&&(b=r.filter((function(e){return"low"===e.prioritet})));var g=Object(n.useState)(!1),h=Object(s.a)(g,2),O=h[0],y=h[1],S=Object(n.useState)([{id:I,title:"What to learn",filter:"All"},{id:L,title:"What to buy",filter:"All"}]),D=Object(s.a)(S,2),M=D[0],C=D[1],B=Object(n.useState)((e={},Object(u.a)(e,I,[{id:Object(k.a)(),title:"HTML&CSS",isDone:!0},{id:Object(k.a)(),title:"JS",isDone:!1},{id:Object(k.a)(),title:"React",isDone:!1}]),Object(u.a)(e,L,[{id:Object(k.a)(),title:"HTML&CSS",isDone:!0},{id:Object(k.a)(),title:"JS",isDone:!1},{id:Object(k.a)(),title:"React",isDone:!1}]),e)),R=Object(s.a)(B,2),x=R[0],H=R[1],J=function(e){var t=Object(k.a)();C([{id:t,title:e,filter:"All"}].concat(Object(o.a)(M))),H(Object(c.a)({},x,Object(u.a)({},t,[])))},K=function(e){C(M.filter((function(t){return t.id!==e})))},W=function(e,t){var a=x[t];if(""!==e.trim()){var n={id:Object(k.a)(),title:e,isDone:!0};x[t]=[n].concat(Object(o.a)(a)),H(Object(c.a)({},x))}},X=function(e,t){var a=x[t];x[t]=a.filter((function(t){return t.id!==e})),H(Object(c.a)({},x))},q=function(e,t){var a=M.find((function(e){return e.id==t}));a&&(a.filter=e,C(Object(o.a)(M)))},Y=function(e,t){x[t];var a=x[t].find((function(t){return t.id===e}));a&&(a.isDone=!a.isDone,H(Object(c.a)({},x)))},Z=function(e,t){var a=M.find((function(e){return e.id==t}));a&&(a.title=e,C(Object(o.a)(M)))},Q=function(e,t,a){var n=x[t].find((function(e){return e.id===a}));n&&(n.title=e,H(Object(c.a)({},x)))},U=[{value:1,skills:"Junior"},{value:2,skills:"Middle"},{value:3,skills:"Senior"}];return l.a.createElement("div",null,l.a.createElement("div",{className:"App"},l.a.createElement(_.a,null,l.a.createElement(N,{callBack:function(){y(!O)},opacity:O}),l.a.createElement(T.a,{path:"/monday",render:function(){return l.a.createElement(j,{name:"Sasha",surName:"Yudintsev",arQualities:b,Delete:m,changeFilter:p})}}),l.a.createElement(T.a,{path:"/tuesday",render:function(){return l.a.createElement("div",{className:"lineTodolist"},l.a.createElement("div",{className:"InputTodolistStyle"},l.a.createElement(w,{callBack:J})),l.a.createElement("div",{className:"SelectStyles"}," ",l.a.createElement(F,{arraySkills:U})),l.a.createElement("div",{className:"RadioStyles"},l.a.createElement(P,{arraySkills:U})),M.map((function(e){var t=x[e.id];return"Active"===e.filter&&(t=x[e.id].filter((function(e){return!1===e.isDone}))),"Completed"===e.filter&&(t=x[e.id].filter((function(e){return!0===e.isDone}))),l.a.createElement(A,{id:e.id,title:e.title,Tasks:t,RemoveTodolist:K,filter:e.filter,addTask:W,removeTask:X,changeFilterTodolist:q,changeStatus:Y,saveNewTitleTodolist:Z,saveNewTitle:Q})})))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports={universal:"Input_universal__29Xtb",error:"Input_error__PXH0K",normal:"Input_normal__3hI0Z","error-message":"Input_error-message__bi4qY"}}},[[25,1,2]]]);
//# sourceMappingURL=main.b5f97dd2.chunk.js.map