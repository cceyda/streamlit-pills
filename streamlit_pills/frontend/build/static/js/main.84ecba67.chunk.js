(this.webpackJsonpstreamlit_pills=this.webpackJsonpstreamlit_pills||[]).push([[0],[,,,function(e,t,s){e.exports=s(4)},function(e,t,s){"use strict";s.r(t);var l=s(1),a=document.body.appendChild(document.createElement("label")),n=a.appendChild(document.createTextNode("")),d=document.body.appendChild(document.createElement("div"));d.classList.add("container"),l.a.events.addEventListener(l.a.RENDER_EVENT,(function(e){var t=e.detail;n.textContent=t.args.label;var s=t.args.options,i=t.args.icons,c=t.args.index,o=t.args.multiselect,r=t.args.label_visibility,p=t.args.clearable;"hidden"===r&&(a.style.visibility="hidden"),"collapsed"===r&&(a.style.display="none"),0===d.childNodes.length&&s.forEach((function(e,t){var s=d.appendChild(document.createElement("div"));if(s.classList.add("pill"),i){var a=s.appendChild(document.createElement("span"));a.classList.add("icon"),a.textContent=i[t]}s.appendChild(document.createTextNode(e)),c.includes(t)&&s.classList.add("selected"),s.onclick=function(){if(p&&s.classList.contains("selected")){s.classList.remove("selected");var e=c.indexOf(t);-1!==e&&c.splice(e,1)}else o||(d.querySelectorAll(".selected").forEach((function(e){e.classList.remove("selected")})),c=[]),s.classList.add("selected"),c.push(t);l.a.setComponentValue(c)}})),t.theme&&(a.style.font=t.theme.font,a.style.color=t.theme.textColor,"dark"===t.theme.base?document.body.querySelectorAll(".pill").forEach((function(e){e.classList.add("dark")})):document.body.querySelectorAll(".pill").forEach((function(e){e.classList.remove("dark")}))),l.a.setFrameHeight()})),l.a.setComponentReady(),l.a.setFrameHeight()}],[[3,1,2]]]);
//# sourceMappingURL=main.84ecba67.chunk.js.map