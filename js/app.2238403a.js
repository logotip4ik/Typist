(function(e){function t(t){for(var a,c,l=t[0],o=t[1],i=t[2],b=0,v=[];b<l.length;b++)c=l[b],Object.prototype.hasOwnProperty.call(u,c)&&u[c]&&v.push(u[c][0]),u[c]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);s&&s(t);while(v.length)v.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var o=n[l];0!==u[o]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},u={app:0},r=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/typist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var s=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),u={key:0,class:"overlay"};function r(e,t,n,r,c,l){return Object(a["j"])(),Object(a["e"])(a["a"],null,[Object(a["g"])(a["b"],{name:"fade",mode:"out-in",appear:""},{default:Object(a["p"])((function(){return[(Object(a["j"])(),Object(a["e"])(Object(a["n"])(r.view),{onToggleView:r.toggleView},null,8,["onToggleView"]))]})),_:1}),Object(a["g"])(a["b"],{name:"fade",mode:"out-in"},{default:Object(a["p"])((function(){return[r.loading?(Object(a["j"])(),Object(a["e"])("div",u)):Object(a["f"])("",!0)]})),_:1})],64)}var c=Object(a["g"])("h1",{class:"header"},"🎉 Typist 🎉",-1),l={class:"main"},o={class:"main__text"},i={class:"main__info"},s=Object(a["g"])("span",{class:"material-icons"},"autorenew",-1),b={key:0,class:"top-left"},v={key:1,class:"top-left"};function f(e,t,n,u,r,f){return Object(a["j"])(),Object(a["e"])("div",null,[c,Object(a["g"])("div",l,[Object(a["g"])("p",o,[(Object(a["j"])(!0),Object(a["e"])(a["a"],null,Object(a["m"])(u.rawText,(function(e,t){return Object(a["j"])(),Object(a["e"])("span",{key:t,class:{"curr-letter":t===u.currLetter,"passed-letter":t<u.currLetter,"wrong-letter":u.userText[t]!==e&&t<u.currLetter}},Object(a["o"])(e),3)})),128))]),Object(a["g"])("span",i,[Object(a["g"])("span",null,Object(a["o"])(u.currWPMText),1),Object(a["g"])("span",null,"By - "+Object(a["o"])(u.authorText),1)]),Object(a["g"])("input",{ref:"input",class:"main__input",onInput:t[1]||(t[1]=function(){return u.addValue&&u.addValue.apply(u,arguments)})},null,544)]),Object(a["g"])("button",{onClick:t[2]||(t[2]=function(){return u.getText()}),class:"restart-button"},[s]),Object(a["g"])(a["b"],{name:"fade",mode:"out-in"},{default:Object(a["p"])((function(){return[0===u.userText.length?(Object(a["j"])(),Object(a["e"])("span",b," Start Typing ")):(Object(a["j"])(),Object(a["e"])("span",v,Object(a["o"])(u.timerText),1))]})),_:1})])}n("4de4"),n("a15b"),n("13d5"),n("fb6a"),n("d3b7"),n("ac1f"),n("25f0"),n("3ca3"),n("841c"),n("1276"),n("ddb0"),n("2b3d");var j=n("bc3a"),p=n.n(j),O={name:"App",setup:function(e,t){var n=t.emit,u="https://api.quotable.io/random?minLength=50?maxLength=150",r="https://api.quotable.io/quotes/",c=Object(a["l"])(null),l=Object(a["h"])("loading"),o=Object(a["l"])(0),i=Object(a["l"])(0),s=Object(a["l"])([]),b=Object(a["l"])([]),v=Object(a["l"])(""),f=Object(a["l"])(0),j=Object(a["l"])([]),O=Object(a["l"])(0),d=Object(a["c"])((function(){var e=j.value.reduce((function(e,t){return e+t}),0);return Math.round(e/j.value.length)})),g=Object(a["c"])((function(){var e=Math.round(i.value/(f.value/60))||0;return e<1/0&&j.value.push(e),e<1/0&&O.value<e&&(O.value=e),"".concat(e," WPM")})),h=Object(a["c"])((function(){var e=Math.floor(f.value/3600),t=Math.floor(f.value%3600/60),n=Math.round(f.value%60);return[e,t>9?t:e?"0".concat(t):t||"0",n>9?n:"0".concat(n)].filter(Boolean).join(":")})),m=Object(a["c"])((function(){return b.value.join("")}));function x(e){var t=new URLSearchParams(window.location.search);t.set("q",encodeURI(e)),window.history.replaceState({},"","?".concat(t.toString()))}function w(e){l.value=!0,o.value=0,f.value=0,i.value=0,s.value=[],j.value=[],O.value=0;var t=e?"".concat(r).concat(decodeURI(e)):u;return new Promise((function(e,n){p.a.get(t).then((function(t){var n=t.data;x(n._id),v.value=n.author,b.value=n.content.split(""),l.value=!1,c.value&&c.value.focus(),e()})).catch(n)}))}function y(){setInterval((function(){0!==s.value.length&&(f.value+=1)}),999)}function T(){for(var e=!0,t=0;t<b.value.slice(0,o.value).length;t+=1)if(s.value[t]!==b.value[t]){e=!1;break}return e}function P(e){var t=e.target,a=e.inputType,u=e.data;if("insertText"===a){s.value.push(t.value[t.value.length-1]),o.value+=1;var r=T();" "===u&&r&&(c.value.value="",i.value+=1),o.value>b.value.length&&r&&n("toggle-view",{data:{wpm:d,text:m.value,author:v,time:h.value,maxWPM:O,getText:w},to:"Results"})}else"deleteContentBackward"===a&&(o.value-=1,s.value.pop())}return Object(a["i"])((function(){var e=new URLSearchParams(window.location.search);w(e.get("q")),c.value.focus(),y()})),{text:m,rawText:b,currLetter:o,userText:s,authorText:v,timerText:h,currWPMText:g,getText:w,addValue:P,input:c}},emits:["toggle-view"]};n("a878");O.render=f;var d=O,g={class:"container"},h={class:"text"},m={class:"buttons"},x=Object(a["g"])("small",null,"Type ENTER to go next",-1);function w(e,t,n,u,r,c){return Object(a["j"])(),Object(a["e"])("div",g,[Object(a["g"])("p",h,"Text: "+Object(a["o"])(u.results.text),1),Object(a["g"])("h1",null,"WPM - "+Object(a["o"])(u.results.wpm),1),Object(a["g"])("h3",null,"max WPM - "+Object(a["o"])(u.results.maxWPM),1),Object(a["g"])("h3",null,"Time - "+Object(a["o"])(u.results.time),1),Object(a["g"])("div",m,[Object(a["g"])("button",{class:"button back",onClick:t[1]||(t[1]=function(t){return e.$emit("toggle-view",{to:"Typer",next:!1})})}," Back "),Object(a["g"])("button",{ref:"nextButton",class:"button next",onClick:t[2]||(t[2]=function(t){return e.$emit("toggle-view",{to:"Typer",next:!0})})}," Next ",512)]),x])}var y={setup:function(){var e=Object(a["l"])(null),t=Object(a["h"])("results");return Object(a["i"])((function(){e.value.focus()})),{results:t,nextButton:e}},emits:["toggle-view"]};n("f9e1");y.render=w;var T=y,P={name:"App",setup:function(){var e=Object(a["l"])({}),t=Object(a["l"])("Typer"),n=Object(a["l"])(!0);function u(a){n.value=!0,a.data&&(e.value=a.data),a.next?e.value.getText().then((function(){t.value=a.to,n.value=!1})):(t.value=a.to,n.value=!1)}return Object(a["k"])("loading",n),Object(a["k"])("results",e),{loading:n,view:t,toggleView:u}},components:{Typer:d,Results:T}};n("8238");P.render=r;var k=P;Object(a["d"])(k).mount("#app")},"6d1b":function(e,t,n){},"727a":function(e,t,n){},8238:function(e,t,n){"use strict";n("aa0c")},a878:function(e,t,n){"use strict";n("6d1b")},aa0c:function(e,t,n){},f9e1:function(e,t,n){"use strict";n("727a")}});
//# sourceMappingURL=app.2238403a.js.map