parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BtN3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.parseDOM=t,exports.createRenderer=r,exports.SelectField=void 0;var e=document.createElement("template");function t(t){return e.innerHTML=t,e.content}function r(e){return new Function("props","with (props) return `"+e+"`;")}var n=r(document.querySelector("#select-field").innerHTML);exports.SelectField=n;
},{}],"yA22":[function(require,module,exports) {
module.exports={division:["文科","理科","综合"],searchBy:{s:"按分数",p:"按位次"},batch:["本科一批","本科批","本科一批A段","平行录取一段","本科二批","本科一批B段","零志愿批次","平行录取二段","专科批","本科二批A段","本科二批B段","平行录取三段","本科三批","本科二批C段","本科三批A段","本科批A段","国家专项计划本科批","地方专项计划本科批","本科提前批","普通类提前批","专科提前批","本科综合评价批","高校专项计划本科批","本科批B段","无批次","少数民族预科班","专科批A段","本科一批A1段"],province:["内蒙古","辽宁","吉林","黑龙江","上海","江苏","浙江","安徽","福建","江西","山东","河南","湖北","湖南","广西","海南","重庆","四川","贵州","云南","陕西","甘肃","青海","宁夏","新疆","北京","天津","河北","山西","广东","西藏","香港","台湾","澳门"]};
},{}],"xU3G":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ping=o,exports.baseURL=exports.userID=void 0;var e=localStorage.userID||(localStorage.userID=Math.round(Math.random()*Math.pow(2,48)).toString(16));exports.userID=e;var r="https://stone.sou.ac.cn/release/CEE/";function o(r){var o;void 0===r&&(r=""),null===(o=document.querySelector("#ping"))||void 0===o||o.remove();var t=document.createElement("script");return new Promise(function(o,s){t.id="ping",t.onload=o,t.onerror=s,t.src=new URL(r,"https://service-806yjs9u-1251042283.gz.apigw.tencentcs.com/release/log/"+e+"/")+"",document.head.append(t)})}exports.baseURL=r;
},{}],"vCuO":[function(require,module,exports) {
"use strict";var e=require("./components"),n=require("../data/meta.json"),t=require("../data/config");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o,i,a=function(){return(a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},l=function(e,n,t,r){return new(t||(t=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(n){i(n)}}function l(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(a,l)}c((r=r.apply(e,n||[])).next())})},c=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(l){i=[6,l],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}},u=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},s=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(l){o={error:l}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a},f=function(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")},p=document.forms,d=p[0],y=p[1];d.prepend((0,e.parseDOM)("\n    "+(0,e.SelectField)({className:"col-6 col-sm-4",id:"province",name:"province",label:"省份",children:n.province.map(function(e,n){return'<option value="'+n+'">'+e+"</option>"}).join("")})+"\n\n    "+(0,e.SelectField)({className:"col-6 col-sm-4",id:"division",name:"division",label:"分科",children:n.division.map(function(e,n){return'<option value="'+n+'">'+e+"</option>"}).join("")})+"\n\n    "+(0,e.SelectField)({className:"col-6 col-sm-4",id:"search_by",name:"search_by",label:"查询方式",children:Object.entries(n.searchBy).map(function(e){var n=s(e,2);return'<option value="'+n[0]+'">'+n[1]+"</option>"}).join("")})+"\n"));var m=document.querySelector("body > main"),b=document.querySelector("#score"),v=document.querySelector("#position");function h(e){"s"===e?(b.disabled=b.parentElement.hidden=!1,v.disabled=v.parentElement.hidden=!0):(b.disabled=b.parentElement.hidden=!0,v.disabled=v.parentElement.hidden=!1),y.hidden=!0,m.innerHTML=""}document.querySelector("#search_by").onchange=function(e){return h(e.target.value)};try{for(var g=f(d.elements),S=g.next();!S.done;S=g.next()){var w=S.value,j=w.name,O=self.localStorage[j];O&&(w.value=O,"search_by"===j&&h(O))}}catch(T){o={error:T}}finally{try{S&&!S.done&&(i=g.return)&&i.call(g)}finally{if(o)throw o.error}}d.onchange=function(e){var n=e.target,t=n.name,r=n.value;self.localStorage[t]=r};var x=(0,e.createRenderer)(m.nextElementSibling.innerHTML),E=[];function q(){m.innerHTML=E.map(x).join("")}d.onsubmit=function(e){return l(void 0,void 0,void 0,function(){var o,i,l,s,f,p,m,b,v,h,g,S;return c(this,function(c){switch(c.label){case 0:return e.preventDefault(),o=Object.fromEntries(Array.from(d.elements,function(e){var n=e.name,t=e.disabled,r=e.value;return[n,!t&&r]})),i=o.province,l=o.division,s=o.percent,f=o.score,p=o.position,m=o.search_by,b=d.querySelector("button"),v=[i,l,s,f||p,m,1==self.localStorage.moreData?"list.js":"data.js"].join("/"),(0,t.ping)(v),b.disabled=!0,[4,fetch(new URL(v,t.baseURL)+"")];case 1:return[4,c.sent().json()];case 2:return h=c.sent(),g=m+s,S=50!=+s,E=h.map(function(e){var t=g,o=e[t],i=e.s50,l=e.p50,c=u(e,["symbol"===r(t)?t:t+"","s50","p50"]);return a({score:S?i||l:o,position:S?o:"",dimension:n.searchBy[m].slice(1),percent:+s},c)}).sort(function(e,n){var t=e.position,r=e.score,o=n.position,i=n.score;return"s"===m?o-t||i-r:t-o||r-i}),q(),b.disabled=y.hidden=!1,y.elements[0].value="",[2]}})})};var L=/^[^<]*>/;y.onsubmit=function(e){e.preventDefault();var n=e.target.elements[0].value;if(!n.trim())return q();var t=new RegExp(n.replace(/\s+/g,"|"),"g");m.innerHTML=E.filter(function(e){var n=e.college,r=e.major;return t.test(n+" "+r)}).map(function(e){return x(e).replace(t,function(e,n,t){return L.test(t.slice(n))?e:'<span class="text-danger">'+e+"</span>"})}).join("")};
},{"./components":"BtN3","../data/meta.json":"yA22","../data/config":"xU3G"}]},{},["vCuO"], null)
//# sourceMappingURL=/query.1ac6412e.js.map