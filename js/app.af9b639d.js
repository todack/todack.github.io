(function(t){function e(e){for(var r,o,n=e[0],c=e[1],i=e[2],d=0,u=[];d<n.length;d++)o=n[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);v&&v(e);while(u.length)u.shift()();return l.push.apply(l,i||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],r=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(r=!1)}r&&(l.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},l=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var i=0;i<n.length;i++)e(n[i]);var v=c;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"4b0c":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("AppBar"),a("v-content",{attrs:{app:""}},[a("router-view")],1)],1)},l=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{short:"",elevation:"1",app:""}},[a("span",{staticClass:"font-weight-black"},[t._v(" Todack ")]),a("div",{staticClass:"option-group-left ml-12"},[a("v-btn",{attrs:{small:"",depressed:"",router:"",to:"/learn"}},[t._v(" Learn ")]),a("v-btn",{attrs:{small:"",depressed:"",router:"",to:"/practice"}},[t._v(" Practice ")]),a("v-btn",{attrs:{small:"",depressed:"",router:"",to:"/collab"}},[t._v(" Collab ")]),a("v-btn",{attrs:{small:"",depressed:"",router:"",to:"/contribute"}},[t._v(" Contribute ")])],1),a("v-spacer"),a("div",{staticClass:"option-group-right"},[a("v-btn",{attrs:{small:"",depressed:"",router:"",to:"/dashboard"}},[t._v(" Dashboard ")])],1)],1)},n=[],c=a("2877"),i=a("6544"),v=a.n(i),d=a("40dc"),u=a("8336"),m=a("2fa4"),p={},f=Object(c["a"])(p,o,n,!1,null,null,null),_=f.exports;v()(f,{VAppBar:d["a"],VBtn:u["a"],VSpacer:m["a"]});var h={components:{AppBar:_}},C=h,b=a("7496"),V=a("a75b"),g=Object(c["a"])(C,s,l,!1,null,null,null),w=g.exports;v()(g,{VApp:b["a"],VContent:V["a"]});var y=a("9483");Object(y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var x=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("Header")],1),a("v-col",{attrs:{cols:"12"}},[a("Sponsors")],1),a("v-col",{attrs:{cols:"12"}},[a("About")],1)],1)],1),a("Footer")],1)},j=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-8"},[a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("v-row",[a("v-col",{staticClass:"display-1 font-weight-black",attrs:{cols:"12"}},[t._v(" Learn the most in-demand skills and test your abilities by creating real world applications. ")]),a("v-col",{attrs:{cols:"12"}},[a("v-btn",{staticClass:"mt-6",attrs:{width:"200",large:""}},[t._v("Sign up")])],1)],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-img",{staticClass:"text-center"},[t._v(" image here ")])],1)],1)],1)},T=[],O=a("62ad"),A=a("a523"),E=a("adda"),P=a("0fd9"),D={},I=Object(c["a"])(D,S,T,!1,null,null,null),$=I.exports;v()(I,{VBtn:u["a"],VCol:O["a"],VContainer:A["a"],VImg:E["a"],VRow:P["a"]});var L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"elevation-3 mt-10 grey lighten-2"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("h1",{staticClass:"text-center font-weight-light"},[t._v("Our Proud Sponsors")])]),a("v-col",{attrs:{cols:"12"}},[a("v-row",{staticClass:"pa-4",attrs:{justify:"space-around"}},t._l(3,(function(e){return a("v-col",{key:e,attrs:{cols:"3"}},[a("v-card",{attrs:{outlined:""}},[a("v-card-title",[t._v("Sponsor img ")])],1)],1)})),1)],1)],1)],1)},R=[],B=a("b0af"),F=a("99d9"),N={},H=Object(c["a"])(N,L,R,!1,null,null,null),M=H.exports;v()(H,{VCard:B["a"],VCardTitle:F["c"],VCol:O["a"],VContainer:A["a"],VRow:P["a"]});var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-12"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"4"}},[a("span",{staticClass:"display-2 font-weight-black"},[t._v(" Learn. ")]),a("br"),a("h2",{staticClass:"mt-5 font-weight-medium"},[t._v(" Browse through 100+ hours of high quality video content, quizzes, and reading material ")])]),a("v-col",{attrs:{cols:"6"}},[a("v-img",{staticClass:"text-center"},[t._v(" img here ")])],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("v-img",{staticClass:"text-center"},[t._v(" img here ")])],1),a("v-col",{attrs:{cols:"4"}},[a("span",{staticClass:"display-2 font-weight-black"},[t._v(" Practice. ")]),a("br"),a("h2",{staticClass:"mt-5 font-weight-medium"},[t._v(" Perfect your skills by pracitising hundreds of curated problems using our awesome tools to make the most of your time ")])])],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"4"}},[a("span",{staticClass:"display-2 font-weight-black"},[t._v(" Collab. ")]),a("br"),a("h2",{staticClass:"mt-5 font-weight-medium"},[t._v(" Put your skills to test by challenging other users with our awesome collab tools and also earn by helping them ")])]),a("v-col",{attrs:{cols:"6"}},[a("v-img",{staticClass:"text-center"},[t._v(" img here ")])],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("v-img",{staticClass:"text-center"},[t._v(" img here ")])],1),a("v-col",{attrs:{cols:"4"}},[a("span",{staticClass:"display-2 font-weight-black"},[t._v(" Contribute. ")]),a("br"),a("h2",{staticClass:"mt-5 font-weight-medium"},[t._v(" Join hands with fellow developers and contribute to complex software applications that solve real world problems ")])])],1)],1)],1)],1)},U=[],q={},J=Object(c["a"])(q,z,U,!1,null,null,null),W=J.exports;v()(J,{VCol:O["a"],VContainer:A["a"],VImg:E["a"],VRow:P["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{justify:"space-between"}},[a("v-col",[a("a",{staticClass:"target-link",attrs:{href:"https://opensource.org/licenses/MIT",target:"_blank"}},[t._v(" MIT ")]),t._v(" © "+t._s((new Date).getFullYear())+" ")]),a("v-col",{staticClass:"text-right"},[t._v(" Made with "),a("v-icon",{attrs:{small:"",color:"red"}},[t._v(" mdi-heart ")]),t._v(" by "),a("a",{staticClass:"target-link",attrs:{href:"http://bitbeast.me/",target:"_blank"}},[t._v(" Tech Toddlers ")])],1)],1)],1)],1)],1)},Y=[],K=(a("b2a7"),a("553a")),Q=a("132d"),X={},Z=Object(c["a"])(X,G,Y,!1,null,null,null),tt=Z.exports;v()(Z,{VCol:O["a"],VFooter:K["a"],VIcon:Q["a"],VRow:P["a"]});var et={components:{Header:$,Sponsors:M,About:W,Footer:tt}},at=et,rt=Object(c["a"])(at,k,j,!1,null,null,null),st=rt.exports;v()(rt,{VCol:O["a"],VContainer:A["a"],VRow:P["a"]});var lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("PersonalDetails")],1),a("v-col",{attrs:{cols:"12"}},[a("SocialAccounts")],1),a("v-col",{attrs:{cols:"12"}},[a("PurchaseInfo")],1)],1)],1)},ot=[],nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{justify:"center",align:"center"}},[a("v-col",{attrs:{cols:"3"}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12"}},[a("v-avatar",{attrs:{size:"200",color:"grey"}})],1),a("v-col",{staticClass:"mt-2",attrs:{cols:"12"}},[a("v-card",[a("v-card-title",[t._v(" Coins Keeper "),a("v-spacer"),a("v-btn",{attrs:{small:""}},[t._v(" buy coins ")])],1),a("v-divider"),a("v-card-actions",{staticClass:"d-flex justify-space-around font-weight-medium text-center"},[a("div",[t._v(" 200 "),a("br"),t._v(" Earned ")]),a("v-divider",{attrs:{vertical:""}}),a("div",[t._v(" 200 "),a("br"),t._v(" Spent ")]),a("v-divider",{attrs:{vertical:""}}),a("div",[t._v(" 200 "),a("br"),t._v(" Available ")])],1)],1)],1),a("v-col",{staticClass:"mt-2",attrs:{cols:"12"}},[a("v-card",[a("v-card-title",[t._v(" Time Spent ")]),a("v-divider"),a("v-card-actions",{staticClass:"d-flex justify-space-around font-weight-medium text-center"},[a("div",[t._v(" 200 "),a("br"),t._v(" Learn ")]),a("v-divider",{attrs:{vertical:""}}),a("div",[t._v(" 200 "),a("br"),t._v(" Practice ")]),a("v-divider",{attrs:{vertical:""}}),a("div",[t._v(" 200 "),a("br"),t._v(" Collab ")])],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"9"}},[a("v-card",[a("v-card-title",[t._v(" Personal Details "),a("v-spacer"),a("v-btn",{attrs:{small:""}},[t._v(" edit ")])],1),a("v-divider"),a("v-card-text",[a("v-form",[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{attrs:{solo:"",placeholder:"Full Name"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{attrs:{solo:"",placeholder:"Choose a handle"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{attrs:{solo:"",placeholder:"Email Address"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-select",{attrs:{solo:"",placeholder:"Last Educational Degree"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-select",{attrs:{solo:"",placeholder:"Profession"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-text-field",{attrs:{solo:"",placeholder:"Organisation"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-textarea",{attrs:{solo:"",placeholder:"Tell us about yourself..."}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-select",{attrs:{solo:"",placeholder:"Gender"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-select",{attrs:{solo:"",placeholder:"Country"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-select",{attrs:{solo:"",placeholder:"Date of Birth"}})],1)],1)],1)],1)],1)],1)],1)],1)},ct=[],it=a("8212"),vt=a("ce7e"),dt=a("4bd4"),ut=a("b974"),mt=a("8654"),pt=a("a844"),ft={},_t=Object(c["a"])(ft,nt,ct,!1,null,null,null),ht=_t.exports;v()(_t,{VAvatar:it["a"],VBtn:u["a"],VCard:B["a"],VCardActions:F["a"],VCardText:F["b"],VCardTitle:F["c"],VCol:O["a"],VContainer:A["a"],VDivider:vt["a"],VForm:dt["a"],VRow:P["a"],VSelect:ut["a"],VSpacer:m["a"],VTextField:mt["a"],VTextarea:pt["a"]});var Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",[a("v-card-title",[t._v(" Social Accounts "),a("v-spacer"),a("v-btn",{attrs:{small:""}},[t._v(" edit ")])],1),a("v-divider"),a("v-card-text",[a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("v-card",[a("v-card-title",[a("v-icon",{staticClass:"mx-2"},[t._v(" mdi-check-circle ")]),t._v(" Github "),a("v-spacer"),a("v-btn",{attrs:{small:""}},[t._v("unlink")])],1)],1)],1),a("v-col",{attrs:{cols:"3"}},[a("v-card",[a("v-card-title",[a("v-icon",{staticClass:"mx-2"},[t._v(" mdi-alert ")]),t._v(" Stopstalk "),a("v-spacer"),a("v-btn",{attrs:{small:""}},[t._v("link")])],1)],1)],1)],1),a("v-row",t._l(t.items,(function(e,r){return a("v-col",{key:r,attrs:{cols:"3"}},[a("v-card",[a("v-card-title",[t._v(" "+t._s(e.title)+" "),a("v-spacer"),a("v-btn",{attrs:{small:""}},[t._v(" link ")])],1),a("v-card-text",[t._v(" Rating: "+t._s(e.rating)+" "),a("br"),t._v(" Problems Solved: "+t._s(e.psolved)+" ")])],1)],1)})),1)],1)],1)],1)},bt=[],Vt={data:function(){return{items:[{title:"Codeforces",rating:"2000",psolved:"200"},{title:"Topcoder",rating:"1843",psolved:"200"},{title:"Atcoder",rating:"3729",psolved:"383"},{title:"Codechef",rating:"1827",psolved:"37"}]}}},gt=Vt,wt=Object(c["a"])(gt,Ct,bt,!1,null,null,null),yt=wt.exports;v()(wt,{VBtn:u["a"],VCard:B["a"],VCardText:F["b"],VCardTitle:F["c"],VCol:O["a"],VContainer:A["a"],VDivider:vt["a"],VIcon:Q["a"],VRow:P["a"],VSpacer:m["a"]});var xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-card",[a("v-card-title",[t._v(" Purchase Logs "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":"",solo:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-divider"),a("v-data-table",{attrs:{headers:t.headers,items:t.items,search:t.search}})],1)],1)},kt=[],jt={data:function(){return{search:"",headers:[{text:"Purchase item",align:"start",sortable:!1,value:"item"},{text:"Date & Time",value:"date"},{text:"Amount (INR)",value:"amount"},{text:"Method",value:"method"}],items:[{item:"Coins (200)",date:"25-06-20 12:18:00",amount:"2400",method:"Credit Card"},{item:"Web development course (Live)",date:"25-02-20 23:22:00",amount:"500",method:"UPI"},{item:"Segment tree course (Micro)",date:"23-12-19 01:16:00",amount:"250",method:"Netbanking"}]}}},St=jt,Tt=a("8fea"),Ot=Object(c["a"])(St,xt,kt,!1,null,null,null),At=Ot.exports;v()(Ot,{VCard:B["a"],VCardTitle:F["c"],VContainer:A["a"],VDataTable:Tt["a"],VDivider:vt["a"],VSpacer:m["a"],VTextField:mt["a"]});var Et={components:{PersonalDetails:ht,SocialAccounts:yt,PurchaseInfo:At}},Pt=Et,Dt=Object(c["a"])(Pt,lt,ot,!1,null,null,null),It=Dt.exports;v()(Dt,{VCol:O["a"],VContainer:A["a"],VRow:P["a"]});var $t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("SideNav")],1),a("v-col",{attrs:{cols:"9"}},[a("v-container",[a("router-view")],1)],1)],1)],1)},Lt=[],Rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fixed-flex"},[a("v-list",{attrs:{dense:"",rounded:""}},t._l(t.topics,(function(e,r){return a("v-list-item",{key:r,attrs:{router:"",to:e.path}},[a("v-list-item-content",{staticClass:"text-uppercase font-weight-medium pa-3 px-2"},[t._v(" "+t._s(e.content)+" ")])],1)})),1)],1)},Bt=[],Ft={data:function(){return{topics:[{content:"Enrolled Courses",path:"/learn/enrolled"},{content:"Live Courses",path:"/learn/live"},{content:"Regular Courses",path:"/learn/regular"},{content:"Micro Courses",path:"/learn/micro"}]}}},Nt=Ft,Ht=(a("ae0e"),a("8860")),Mt=a("da13"),zt=a("5d23"),Ut=Object(c["a"])(Nt,Rt,Bt,!1,null,null,null),qt=Ut.exports;v()(Ut,{VContainer:A["a"],VList:Ht["a"],VListItem:Mt["a"],VListItemContent:zt["a"]});var Jt={components:{SideNav:qt}},Wt=Jt,Gt=Object(c["a"])(Wt,$t,Lt,!1,null,null,null),Yt=Gt.exports;v()(Gt,{VCol:O["a"],VContainer:A["a"],VRow:P["a"]});var Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":""}},[a("v-row",{staticClass:"fill-height py-8",attrs:{align:"center"}},[a("v-col",{attrs:{cols:"5"}},[a("v-row",{attrs:{"fill-height":""}},t._l(t.items,(function(e,r){return a("v-col",{key:r,attrs:{cols:"12"}},[a("v-card",{staticClass:"d-flex align-center",attrs:{height:"70"},on:{click:function(e){t.selection=r}}},[a("div",{staticClass:"font-weight-black text-center flex-grow-1"},[t._v(" "+t._s(e)+" ")])])],1)})),1)],1),a("v-col",{staticClass:"py-8 fill-height",attrs:{cols:"7"}},[0==t.selection?a("Upsolve"):t._e(),1==t.selection?a("Tracks"):t._e(),2==t.selection?a("Sessions"):t._e()],1)],1)],1)},Qt=[],Xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"elevation-2 pa-10 py-12 fill-height"},[a("div",{staticClass:"display-1"},[t._v(" Attempt unsolved problems from the past contests filtered based on your skill level. ")]),a("div",[a("v-btn",{attrs:{"x-large":""}},[t._v(" Start solving ")])],1)])},Zt=[],te={},ee=Object(c["a"])(te,Xt,Zt,!1,null,null,null),ae=ee.exports;v()(ee,{VBtn:u["a"],VContainer:A["a"]});var re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"elevation-2 pa-10 py-12 fill-height"},[a("div",{staticClass:"display-1"},[t._v(" Pick a topic and solve a curated list of problems. ")]),a("div",[a("v-btn",{attrs:{"x-large":""}},[t._v(" Select track ")])],1)])},se=[],le={},oe=Object(c["a"])(le,re,se,!1,null,null,null),ne=oe.exports;v()(oe,{VBtn:u["a"],VContainer:A["a"]});var ce=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"elevation-2 pa-10 py-12 fill-height"},[a("div",{staticClass:"display-1"},[t._v(" Create a problem set and train in closed groups. ")]),a("div",[a("v-btn",{attrs:{"x-large":""}},[t._v(" Create session ")]),a("v-btn",{staticClass:"mx-6",attrs:{"x-large":""}},[t._v(" Join session ")])],1)])},ie=[],ve={},de=Object(c["a"])(ve,ce,ie,!1,null,null,null),ue=de.exports;v()(de,{VBtn:u["a"],VContainer:A["a"]});var me={components:{Upsolve:ae,Tracks:ne,Sessions:ue},data:function(){return{selection:0,items:["Upsolve Problems","Concept Tracks","Practice Sessions"]}}},pe=me,fe=Object(c["a"])(pe,Kt,Qt,!1,null,null,null),_e=fe.exports;v()(fe,{VCard:B["a"],VCol:O["a"],VContainer:A["a"],VRow:P["a"]});var he=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"8"}},[a("v-container",[a("v-row",t._l(4,(function(e){return a("v-col",{key:e,attrs:{cols:"12"}},[a("v-card",[a("v-card-title",[t._v(" Dummy task "+t._s(e)+" ")]),a("v-card-text",[t._v(" Can someone help me solve this doubt for "+t._s(100*e)+" coins? ")]),a("v-card-actions",{staticClass:"pa-4"},[a("v-spacer"),a("v-btn",{staticClass:"mx-3"},[t._v(" accept ")]),a("v-btn",{staticClass:"mx-3"},[t._v(" reject ")])],1)],1)],1)})),1)],1)],1),a("v-col",{attrs:{cols:"4"}},[a("SideNav")],1)],1)],1)},Ce=[],be=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"fixed-flex"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-title",[t._v(" Create task ")]),a("v-card-text",[t._v(" Ask people to help you solve some problem. ")]),a("v-card-actions",{staticClass:"pa-4"},[a("v-spacer"),a("v-btn",[t._v("create")])],1)],1)],1),a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticClass:"elevation-2"},[a("v-card-title",[t._v(" Your tasks "),a("v-spacer"),a("v-icon",{staticClass:"mx-2"},[t._v(" mdi-magnify ")]),a("v-icon",{staticClass:"mx-2"},[t._v(" mdi-checkbox-marked-circle ")])],1),a("v-divider"),a("v-card-text",{staticClass:"pa-0",staticStyle:{"overflow-y":"scroll"}},[a("v-list",{attrs:{"max-height":"240","two-line":"",dense:""}},[t._l(10,(function(e){return[a("v-list-item",{key:e},[a("v-list-item-content",[a("v-list-item-title",[t._v(" dummy task "+t._s(e)+" ")]),a("v-list-item-subtitle",[t._v(" Status ")])],1),a("v-list-item-action",[a("v-icon",[t._v(" mdi-launch ")])],1)],1),a("v-divider",{key:e})]}))],2)],1)],1)],1)],1)],1)},Ve=[],ge={data:function(){return{items:[{color:"green",initials:"harshal",fullName:"something"}]}}},we=ge,ye=a("1800"),xe=Object(c["a"])(we,be,Ve,!1,null,null,null),ke=xe.exports;v()(xe,{VBtn:u["a"],VCard:B["a"],VCardActions:F["a"],VCardText:F["b"],VCardTitle:F["c"],VCol:O["a"],VContainer:A["a"],VDivider:vt["a"],VIcon:Q["a"],VList:Ht["a"],VListItem:Mt["a"],VListItemAction:ye["a"],VListItemContent:zt["a"],VListItemSubtitle:zt["b"],VListItemTitle:zt["c"],VRow:P["a"],VSpacer:m["a"]});var je={components:{SideNav:ke}},Se=je,Te=Object(c["a"])(Se,he,Ce,!1,null,null,null),Oe=Te.exports;v()(Te,{VBtn:u["a"],VCard:B["a"],VCardActions:F["a"],VCardText:F["b"],VCardTitle:F["c"],VCol:O["a"],VContainer:A["a"],VRow:P["a"],VSpacer:m["a"]});var Ae=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("FirstHeader")],1),a("v-col",[a("SecondHeader")],1),a("v-col",{attrs:{cols:"12"}},[a("ThirdHeader")],1),a("v-col",{attrs:{cols:"12"}},[a("FourthHeader")],1)],1)],1)},Ee=[],Pe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{},[a("v-row",{attrs:{justify:"space-around",align:"center"}},[a("v-col",{attrs:{cols:"6"}},[a("div",{staticClass:"display-1 font-weight-black"},[t._v(" Showcase your programming skills by contributing to real world projects and win amazing rewards. ")])]),a("v-col",{attrs:{cols:"5"}},[a("v-card",{staticClass:"pa-5",attrs:{shaped:""}},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline mb-2"},[t._v(" Dummy name ")]),a("v-list-item-subtitle",[t._v(" @dummyuserid ")])],1),a("v-list-item-avatar",{attrs:{tile:"",size:"80",color:"grey"}})],1),a("v-card-actions",{staticClass:"pa-4 d-flex justify-space-around"},[a("v-chip",{staticClass:"font-weight-medium"},[t._v(" Repositories "),a("v-divider",{staticClass:"mx-1",attrs:{vertical:""}}),a("span",[t._v(" 34 ")])],1),a("v-chip",{staticClass:"font-weight-medium"},[t._v(" Contributions "),a("v-divider",{staticClass:"mx-1",attrs:{vertical:""}}),a("span",[t._v(" 1300 ")])],1),a("v-chip",{staticClass:"font-weight-medium"},[t._v(" Rank "),a("v-divider",{staticClass:"mx-1",attrs:{vertical:""}}),a("span",[t._v(" 123 ")])],1)],1)],1)],1)],1)],1)},De=[],Ie=a("cc20"),$e=a("8270"),Le={},Re=Object(c["a"])(Le,Pe,De,!1,null,null,null),Be=Re.exports;v()(Re,{VCard:B["a"],VCardActions:F["a"],VChip:Ie["a"],VCol:O["a"],VContainer:A["a"],VDivider:vt["a"],VListItem:Mt["a"],VListItemAvatar:$e["a"],VListItemContent:zt["a"],VListItemSubtitle:zt["b"],VListItemTitle:zt["c"],VRow:P["a"]});var Fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"elevation-3 py-2 pb-10 px-10 mt-10"},[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("h1",[t._v("Recent Projects")])]),t._l(t.items,(function(e){return a("v-col",{key:e.id,attrs:{cols:"4"}},[a("v-card",{attrs:{outlined:""}},[a("v-card-title",[t._v(" "+t._s(e.name)+" "),a("v-spacer"),a("v-btn",{attrs:{small:"",fab:"",outlined:""}},[a("v-icon",[t._v(" mdi-chat ")])],1)],1),a("v-list-item",[t._v(" some random description and other details about the project. Also the last pull request maybe ")]),a("v-card-actions",{staticClass:"pa-4 mt-5"},[a("v-spacer"),a("v-btn",{staticClass:"mx-2",attrs:{outlined:""}},[t._v(" visit project ")]),a("v-btn",{staticClass:"mx-2",attrs:{outlined:""}},[t._v(" view source ")])],1)],1)],1)}))],2)],1)},Ne=[],He={data:function(){return{items:[{id:1,name:"dummy project 1"},{id:2,name:"dummy project 2"},{id:3,name:"dummy project 3"}]}}},Me=He,ze=Object(c["a"])(Me,Fe,Ne,!1,null,null,null),Ue=ze.exports;v()(ze,{VBtn:u["a"],VCard:B["a"],VCardActions:F["a"],VCardTitle:F["c"],VCol:O["a"],VContainer:A["a"],VIcon:Q["a"],VListItem:Mt["a"],VRow:P["a"],VSpacer:m["a"]});var qe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-10"},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"pa-8",attrs:{shaped:""}},[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("th",[t._v(" Username ")]),a("th",[t._v(" Contribution ")])]),a("tbody",t._l(5,(function(e){return a("tr",{key:e},[a("td",[t._v("dummy name "+t._s(e))]),a("td",[t._v(" "+t._s(100*(10-e+1))+" ")])])})),0)]},proxy:!0}])})],1)],1),a("v-col",{attrs:{cols:"4"}},[a("v-card",{staticClass:"pa-8",attrs:{shaped:""}},[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("th",[t._v(" Project Name ")]),a("th",[t._v(" Commits ")])]),a("tbody",t._l(5,(function(e){return a("tr",{key:e},[a("td",[t._v("dummy name "+t._s(e))]),a("td",[t._v(" "+t._s(100*(10-e+1))+" ")])])})),0)]},proxy:!0}])})],1)],1),a("v-col",{attrs:{cols:"4"}},[a("div",{staticClass:"display-1 font-weight-bold text-align-right"},[t._v(" The Top Contributers and Top Projects that are making a real difference ")])])],1)],1)},Je=[],We=a("1f4f"),Ge={},Ye=Object(c["a"])(Ge,qe,Je,!1,null,null,null),Ke=Ye.exports;v()(Ye,{VCard:B["a"],VCol:O["a"],VContainer:A["a"],VRow:P["a"],VSimpleTable:We["a"]});var Qe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-10"},[a("v-row",[a("v-col",{staticClass:"text-center mb-4",attrs:{cols:"12"}},[a("h1",[t._v("Checkout Similar Projects")])]),a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{justify:"center"}},t._l(t.items,(function(e){return a("v-col",{key:e.id,attrs:{cols:"5"}},[a("v-card",[a("v-card-title",[t._v(" Dummy project "+t._s(t.n)+" ")]),a("v-list-item",[t._v(" some random project description and other details. Also provide some projects stats like stars and how many people are already working. ")]),a("v-card-actions",{staticClass:"pa-4 mt-4"},[a("v-spacer"),a("v-btn",{staticClass:"mx-2",attrs:{small:"",fab:"",outlined:""}},[a("v-icon",{attrs:{small:""}},[t._v(" mdi-thumb-up ")])],1),a("v-btn",{staticClass:"mx-2",attrs:{small:"",fab:"",outlined:""}},[a("v-icon",{attrs:{small:""}},[t._v(" mdi-thumb-down ")])],1),a("v-btn",{staticClass:"mx-2",attrs:{rounded:"",outlined:""}},[t._v(" checkout ")])],1)],1)],1)})),1)],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12"}},[a("v-spacer"),a("v-btn",{attrs:{large:"",outlined:""}},[t._v(" view all ")]),a("v-spacer")],1)],1)],1)},Xe=[],Ze={data:function(){return{items:[{id:1,name:"Dummy project 1"},{id:2,name:"Dummy project 2"},{id:3,name:"Dummy project 3"},{id:4,name:"Dummy project 4"}]}}},ta=Ze,ea=Object(c["a"])(ta,Qe,Xe,!1,null,null,null),aa=ea.exports;v()(ea,{VBtn:u["a"],VCard:B["a"],VCardActions:F["a"],VCardTitle:F["c"],VCol:O["a"],VContainer:A["a"],VIcon:Q["a"],VListItem:Mt["a"],VRow:P["a"],VSpacer:m["a"]});var ra={components:{FirstHeader:Be,SecondHeader:Ue,ThirdHeader:Ke,FourthHeader:aa}},sa=ra,la=Object(c["a"])(sa,Ae,Ee,!1,null,null,null),oa=la.exports;v()(la,{VCol:O["a"],VContainer:A["a"],VRow:P["a"]});var na=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",t._l(t.courses,(function(e){return a("v-row",{key:e.name},[a("v-col",{attrs:{cols:"12"}},[a("v-card",[a("v-card-title",[t._v(" "+t._s(e.name)+" ")]),a("v-card-text",[t._v(" Validity details and other info ")]),a("v-card-actions",{staticClass:"pa-3"},[a("v-spacer"),a("v-btn",[t._v(" resume course ")])],1)],1)],1)],1)})),1)},ca=[],ia={data:function(){return{courses:[{name:"Dummy Enrolled course 1"},{name:"Dummy Enrolled course 2"}]}}},va=ia,da=Object(c["a"])(va,na,ca,!1,null,null,null),ua=da.exports;v()(da,{VBtn:u["a"],VCard:B["a"],VCardActions:F["a"],VCardText:F["b"],VCardTitle:F["c"],VCol:O["a"],VContainer:A["a"],VRow:P["a"],VSpacer:m["a"]});var ma=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",t._l(t.topics,(function(e){return a("v-row",{key:e.name,staticClass:"mb-12"},[a("v-col",{staticClass:"display-1 font-weight-black",attrs:{cols:"12"}},[t._v(" "+t._s(e.name)+" ")]),t._l(e.courses,(function(e){return a("v-col",{key:e.id,attrs:{cols:"4"}},[a("v-card",[a("v-card-title",[t._v(" Dummy course "+t._s(e.id)+" ")]),a("v-card-text",[t._v(" Course description ")]),a("v-card-actions",{staticClass:"pa-4"},[a("v-spacer"),a("v-btn",{staticClass:"mx-3"},[t._v(" enroll ")]),a("v-btn",[t._v(" explore ")])],1)],1)],1)}))],2)})),1)},pa=[],fa={data:function(){return{topics:[{name:"Data Structures & Algorithms",courses:[{id:1},{id:3}]},{name:"Web Development",courses:[{id:13}]},{name:"Android Development",courses:[{id:21},{id:22},{id:23}]},{name:"Interview Preparation",courses:[{id:32}]},{name:"Programming Languages",courses:[{id:51},{id:61}]}]}}},_a=fa,ha=Object(c["a"])(_a,ma,pa,!1,null,null,null),Ca=ha.exports;v()(ha,{VBtn:u["a"],VCard:B["a"],VCardActions:F["a"],VCardText:F["b"],VCardTitle:F["c"],VCol:O["a"],VContainer:A["a"],VRow:P["a"],VSpacer:m["a"]});var ba=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",t._l(t.topics,(function(e){return a("v-row",{key:e.name,staticClass:"mb-12"},[a("v-col",{staticClass:"display-1 font-weight-black",attrs:{cols:"12"}},[t._v(" "+t._s(e.name)+" ")]),t._l(e.courses,(function(e){return a("v-col",{key:e.id,attrs:{cols:"4"}},[a("v-card",[a("v-card-title",[t._v(" Dummy course "+t._s(e.id)+" ")]),a("v-card-text",[t._v(" Course description ")]),a("v-card-actions",{staticClass:"pa-4"},[a("v-spacer"),a("v-btn",{staticClass:"mx-3"},[t._v(" enroll ")]),a("v-btn",[t._v(" explore ")])],1)],1)],1)}))],2)})),1)},Va=[],ga={data:function(){return{topics:[{name:"Data Structures & Algorithms",courses:[{id:1},{id:2},{id:3}]},{name:"Web Development",courses:[{id:11},{id:12},{id:13}]},{name:"Android Development",courses:[{id:21},{id:22},{id:23}]},{name:"Interview Preparation",courses:[{id:31},{id:32}]},{name:"Programming Languages",courses:[{id:41},{id:51},{id:61}]}]}}},wa=ga,ya=Object(c["a"])(wa,ba,Va,!1,null,null,null),xa=ya.exports;v()(ya,{VBtn:u["a"],VCard:B["a"],VCardActions:F["a"],VCardText:F["b"],VCardTitle:F["c"],VCol:O["a"],VContainer:A["a"],VRow:P["a"],VSpacer:m["a"]});var ka=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",t._l(5,(function(e){return a("v-col",{key:e,attrs:{cols:"4"}},[a("v-card",[a("v-card-title",[t._v(" Dummy micro course "+t._s(e)+" ")]),a("v-card-text",[t._v(" Course details ")]),a("v-card-actions",{staticClass:"pa-4"},[a("v-spacer"),a("v-btn",{staticClass:"mx-3"},[t._v("enroll")]),a("v-btn",[t._v("explore")])],1)],1)],1)})),1)],1)},ja=[],Sa={},Ta=Object(c["a"])(Sa,ka,ja,!1,null,null,null),Oa=Ta.exports;v()(Ta,{VBtn:u["a"],VCard:B["a"],VCardActions:F["a"],VCardText:F["b"],VCardTitle:F["c"],VCol:O["a"],VContainer:A["a"],VRow:P["a"],VSpacer:m["a"]}),r["a"].use(x["a"]);var Aa=[{path:"/",name:"Landing",component:st},{path:"/dashboard",name:"Dashboard",component:It},{path:"/learn",redirect:"/learn/enrolled",name:"Learn",component:Yt,children:[{path:"live",component:Ca},{path:"regular",component:xa},{path:"micro",component:Oa},{path:"enrolled",component:ua},{path:"",redirect:"enrolled"}]},{path:"/practice",name:"Practice",component:_e},{path:"/collab",name:"Collab",component:Oe},{path:"/contribute",name:"Contribute",component:oa}],Ea=new x["a"]({routes:Aa}),Pa=Ea,Da=a("2f62"),Ia={},$a={},La={};r["a"].use(Da["a"]);var Ra=new Da["a"].Store({state:Ia,mutations:$a,actions:La}),Ba=a("f309");r["a"].use(Ba["a"]);var Fa=new Ba["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:Pa,store:Ra,vuetify:Fa,render:function(t){return t(w)}}).$mount("#app")},"80f9":function(t,e,a){},ae0e:function(t,e,a){"use strict";var r=a("4b0c"),s=a.n(r);s.a},b2a7:function(t,e,a){"use strict";var r=a("80f9"),s=a.n(r);s.a}});
//# sourceMappingURL=app.af9b639d.js.map