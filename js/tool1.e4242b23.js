(function(e){function t(t){for(var r,s,E=t[0],i=t[1],l=t[2],c=0,T=[];c<E.length;c++)s=E[c],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&T.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(T.length)T.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,E=1;E<n.length;E++){var i=n[E];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={tool1:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var E=window["webpackJsonp"]=window["webpackJsonp"]||[],i=E.push.bind(E);E.push=t,E=E.slice();for(var l=0;l<E.length;l++)t(E[l]);var u=i;a.push([5,"chunk-vendors","chunk-common"]),n()})({5:function(e,t,n){e.exports=n("61a0")},"61a0":function(e,t,n){"use strict";n.r(t);n("4de4"),n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("1276"),n("159b"),n("ddb0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._v(e._s(e.THIS_TABLE_NAME_))]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{cols:"100",rows:"5"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),n("br"),n("input",{attrs:{type:"button",value:"生成"},on:{click:e.vueclick}}),n("input",{attrs:{type:"button",value:"清空"},on:{click:e.vueclick2}}),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.OUT_ALL,expression:"OUT_ALL"}],attrs:{cols:"100",rows:"10",disabled:""},domProps:{value:e.OUT_ALL},on:{input:function(t){t.target.composing||(e.OUT_ALL=t.target.value)}}}),n("br"),n("br"),n("div",[e._v("建表CREATE语句")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.OUT_CREATE,expression:"OUT_CREATE"}],attrs:{cols:"100",rows:"10",disabled:""},domProps:{value:e.OUT_CREATE},on:{input:function(t){t.target.composing||(e.OUT_CREATE=t.target.value)}}}),n("br"),n("div",[e._v("INSERT触发器")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.OUT_INSERT,expression:"OUT_INSERT"}],attrs:{cols:"100",rows:"10",disabled:""},domProps:{value:e.OUT_INSERT},on:{input:function(t){t.target.composing||(e.OUT_INSERT=t.target.value)}}}),n("br"),n("div",[e._v("UPDATE触发器")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.OUT_UPDATE,expression:"OUT_UPDATE"}],attrs:{cols:"100",rows:"10",disabled:""},domProps:{value:e.OUT_UPDATE},on:{input:function(t){t.target.composing||(e.OUT_UPDATE=t.target.value)}}}),n("br"),n("div",[e._v("DELETE触发器")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.OUT_DELETE,expression:"OUT_DELETE"}],attrs:{cols:"100",rows:"10",disabled:""},domProps:{value:e.OUT_DELETE},on:{input:function(t){t.target.composing||(e.OUT_DELETE=t.target.value)}}})])},a=[],s=(n("fb6a"),n("4d63"),n("25f0"),n("466d"),n("498a"),{data:function(){return{THIS_TABLE_NAME_:"无",OUT_CREATE:"",OUT_INSERT:"",OUT_UPDATE:"",OUT_DELETE:"",OUT_ALL:""}},computed:{message:{get:function(){return this.$store.state.tool1.msg},set:function(e){this.$store.commit("tool1/messageset",e)}}},methods:{vueclick:function(){var e=this.$store.state.tool1.msg,t=null,n=null,r=e.split("\n"),o="";if(r.forEach((function(e){if(null==t){if(!e.match(/CREATE TABLE DB./))return!0;var r=e.slice(e.match(/CREATE TABLE DB./).index+"CREATE TABLE DB.".length);t=r.split(" ")[0],null!=t&&t.length>4&&(n=t+"_LOG",o+=e.replace(new RegExp("DB."+t),"DB."+n))}else{var a=e;if(a.match(/ NOT NULL/)&&(a=a.replace(/ NOT NULL/,"")),a.match(/ TIMESTAMP\(26,6\)/)&&(a=a.replace(/ TIMESTAMP\(26,6\)/," TIMESTAMP")),a.match(/ INTEGER\(10\)/)&&(a=a.replace(/ INTEGER\(10\)/," INTEGER")),a.match(/CONSTRAINT /))return!0;a.match(/\);/)&&(","!=o.substr(o.length-1)&&(o+=","),o+="\n    LOG_TIME                    TIMESTAMP,\n    OPER_TYPE                   VARCHAR(20)"),a.match(new RegExp("DB."+t))&&(a=a.replace(new RegExp("DB."+t),"DB."+n)),o+="\n"+a}})),null==t)return window.console.info("未获取到表名"),void alert("未获取到表名");r=o.split("\n");var a,s=[];r.forEach((function(e){return e.match(/\(/)&&1==e.length?(a=!0,!0):e.match(/\);/)?(a=!1,!1):void(a&&s.push(e.trim().replace(/\s+/g," ").split(" ")[0]))}));var E="";E+="CREATE TRIGGER DB."+t+"_INSERT AFTER INSERT \n",E+="   ON DB."+t+" REFERENCING NEW AS N FOR EACH ROW MODE DB2SQL INSERT \n",E+="       INTO \n",E+="           DB."+t+"_LOG(\n",s.forEach((function(e){"(\n"!=E.substr(E.length-2)?E+="               ,":E+="               ",E+=e+"\n"})),E+="           )\n",E+="        VALUES\n",E+="           (\n",s.forEach((function(e){"(\n"!=E.substr(E.length-2)?E+="               ,":E+="               ",E+="LOG_TIME"==e?"CURRENT TIMESTAMP\n":"OPER_TYPE"==e?"'INSERT'\n":"N."+e+"\n"})),E+="           );";var i="";i+="CREATE TRIGGER DB."+t+"_UPDATE AFTER UPDATE ON DB."+t+" REFERENCING NEW AS N FOR EACH ROW MODE DB2SQL INSERT \n",i+="       INTO \n",i+="           DB."+t+"_LOG(\n",s.forEach((function(e){"(\n"!=i.substr(i.length-2)?i+="               ,":i+="               ",i+=e+"\n"})),i+="           )\n",i+="        VALUES\n",i+="           (\n",s.forEach((function(e){"(\n"!=i.substr(i.length-2)?i+="               ,":i+="               ",i+="LOG_TIME"==e?"CURRENT TIMESTAMP\n":"OPER_TYPE"==e?"'UPDATE'\n":"N."+e+"\n"})),i+="           );",window.console.info(i);var l="";l+="CREATE TRIGGER DB."+t+"_DELETE AFTER DELETE ON DB."+t+" REFERENCING OLD AS O FOR EACH ROW MODE DB2SQL INSERT \n",l+="       INTO \n",l+="           DB."+t+"_LOG(\n",s.forEach((function(e){"(\n"!=l.substr(l.length-2)?l+="               ,":l+="               ",l+=e+"\n"})),l+="           )\n",l+="        VALUES\n",l+="           (\n",s.forEach((function(e){"(\n"!=l.substr(l.length-2)?l+="               ,":l+="               ",l+="LOG_TIME"==e?"CURRENT TIMESTAMP\n":"OPER_TYPE"==e?"'DELETE'\n":"O."+e+"\n"})),l+="           );",this.THIS_TABLE_NAME_=t,this.OUT_CREATE=o,this.OUT_INSERT=E,this.OUT_UPDATE=i,this.OUT_DELETE=l,this.OUT_ALL=o+"\n"+E+"\n"+i+"\n"+l},vueclick2:function(){this.$store.state.tool1.msg="",this.THIS_TABLE_NAME_="无",this.OUT_CREATE="",this.OUT_INSERT="",this.OUT_UPDATE="",this.OUT_DELETE="",this.OUT_ALL=""}}}),E=s,i=n("2877"),l=Object(i["a"])(E,o,a,!1,null,null,null),u=l.exports,c=n("bc3a"),T=n.n(c),p=n("77ed"),f=n.n(p),d=n("8103"),O=n.n(d),m=n("bba4"),v=n.n(m),_=n("5530"),R=n("2f62");r["a"].use(R["a"]);var h=n("6827"),A={};h.keys().forEach((function(e){var t=h(e),n=v()(e.split("/").pop().replace(/\.\w+$/,""));A[n]=Object(_["a"])({namespaced:!0},t.default||t)})),A.tool1={namespaced:!0,state:{msg:""},getters:{getter1:function(){}},actions:{action1:function(){}},mutations:{mutation1:function(){},messageset:function(e,t){e.msg=t}},modules:{}};var g=new R["a"].Store({strict:!0,modules:A});r["a"].config.productionTip=!1,r["a"].filter("filter",(function(e){return e})),r["a"].prototype.axios=T.a,r["a"].use(f.a);var N=n("19d0");N.keys().forEach((function(e){var t=N(e),n=O()(v()(e.split("/").pop().replace(/\.\w+$/,"")));r["a"].component(n,t.default||t)})),new r["a"]({store:g,render:function(e){return e(u)}}).$mount("#tool1")}});
//# sourceMappingURL=tool1.e4242b23.js.map