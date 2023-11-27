(()=>{var t={860:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",o="second",s="minute",i="hour",a="day",d="week",l="month",c="quarter",h="year",u="date",p="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),o=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(o,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),o=e.clone().add(r,l),s=n-o<0,i=e.clone().add(r+(s?-1:1),l);return+(-(r+(n-o)/(s?o-i:i-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:h,w:d,d:a,D:u,h:i,m:s,s:o,ms:r,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",$={};$[w]=y;var D="$isDayjsObject",E=function(t){return t instanceof C||!(!t||!t[D])},b=function t(e,n,r){var o;if(!e)return w;if("string"==typeof e){var s=e.toLowerCase();$[s]&&(o=s),n&&($[s]=n,o=s);var i=e.split("-");if(!o&&i.length>1)return t(i[0])}else{var a=e.name;$[a]=e,o=a}return!r&&o&&(w=o),o||!r&&w},M=function(t,e){if(E(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new C(n)},S=g;S.l=b,S.i=E,S.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var C=function(){function y(t){this.$L=b(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[D]=!0}var v=y.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var o=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return S},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,r=!!S.u(e)||e,c=S.p(t),p=function(t,e){var o=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?o:o.endOf(a)},m=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},f=this.$W,y=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(c){case h:return r?p(1,0):p(31,11);case l:return r?p(1,y):p(0,y+1);case d:var w=this.$locale().weekStart||0,$=(f<w?f+7:f)-w;return p(r?v-$:v+(6-$),y);case a:case u:return m(g+"Hours",0);case i:return m(g+"Minutes",1);case s:return m(g+"Seconds",2);case o:return m(g+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,d=S.p(t),c="set"+(this.$u?"UTC":""),p=(n={},n[a]=c+"Date",n[u]=c+"Date",n[l]=c+"Month",n[h]=c+"FullYear",n[i]=c+"Hours",n[s]=c+"Minutes",n[o]=c+"Seconds",n[r]=c+"Milliseconds",n)[d],m=d===a?this.$D+(e-this.$W):e;if(d===l||d===h){var f=this.clone().set(u,1);f.$d[p](m),f.init(),this.$d=f.set(u,Math.min(this.$D,f.daysInMonth())).$d}else p&&this.$d[p](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[S.p(t)]()},v.add=function(r,c){var u,p=this;r=Number(r);var m=S.p(c),f=function(t){var e=M(p);return S.w(e.date(e.date()+Math.round(t*r)),p)};if(m===l)return this.set(l,this.$M+r);if(m===h)return this.set(h,this.$y+r);if(m===a)return f(1);if(m===d)return f(7);var y=(u={},u[s]=e,u[i]=n,u[o]=t,u)[m]||1,v=this.$d.getTime()+r*y;return S.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=t||"YYYY-MM-DDTHH:mm:ssZ",o=S.z(this),s=this.$H,i=this.$m,a=this.$M,d=n.weekdays,l=n.months,c=n.meridiem,h=function(t,n,o,s){return t&&(t[n]||t(e,r))||o[n].slice(0,s)},u=function(t){return S.s(s%12||12,t,"0")},m=c||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(f,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return S.s(e.$y,4,"0");case"M":return a+1;case"MM":return S.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,l,3);case"MMMM":return h(l,a);case"D":return e.$D;case"DD":return S.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,d,2);case"ddd":return h(n.weekdaysShort,e.$W,d,3);case"dddd":return d[e.$W];case"H":return String(s);case"HH":return S.s(s,2,"0");case"h":return u(1);case"hh":return u(2);case"a":return m(s,i,!0);case"A":return m(s,i,!1);case"m":return String(i);case"mm":return S.s(i,2,"0");case"s":return String(e.$s);case"ss":return S.s(e.$s,2,"0");case"SSS":return S.s(e.$ms,3,"0");case"Z":return o}return null}(t)||o.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,u,p){var m,f=this,y=S.p(u),v=M(r),g=(v.utcOffset()-this.utcOffset())*e,w=this-v,$=function(){return S.m(f,v)};switch(y){case h:m=$()/12;break;case l:m=$();break;case c:m=$()/3;break;case d:m=(w-g)/6048e5;break;case a:m=(w-g)/864e5;break;case i:m=w/n;break;case s:m=w/e;break;case o:m=w/t;break;default:m=w}return p?m:S.a(m)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return $[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=b(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return S.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},y}(),x=C.prototype;return M.prototype=x,[["$ms",r],["$s",o],["$m",s],["$H",i],["$W",a],["$M",l],["$y",h],["$D",u]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,C,M),t.$i=!0),M},M.locale=b,M.isDayjs=E,M.unix=function(t){return M(1e3*t)},M.en=$[w],M.Ls=$,M.p={},M}()}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r].call(s.exports,s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";class t{constructor(t,e,n){this.dropdownElement=null,this.selector=t,this.options=e,this.element=document.querySelector(this.selector),this.onClickItem=n.onClickItem,this.init()}init(){this.element&&(this.element.addEventListener("click",this.toggleDropdown.bind(this)),document.addEventListener("click",this.handleDocumentClick.bind(this)))}toggleDropdown(e){e.stopPropagation(),t.activeDropdown&&t.activeDropdown!==this&&t.activeDropdown.removeDropdown(),this.dropdownElement?this.removeDropdown():(this.createDropdown(),t.activeDropdown=this)}fadeIn(t,e){let n=0;const r=16.7/e,o=()=>{if(n+=r,n>=1)return n=1,void(t.style.opacity=String(n));t.style.opacity=String(n),requestAnimationFrame(o)};o()}fadeOut(t,e,n){let r=1;const o=16.7/e,s=t,i=()=>{if(s){if(r-=o,r<=0)return r=0,s.style.opacity=String(r),void n();s.style.opacity=String(r),requestAnimationFrame(i)}};i()}createDropdown(){this.dropdownElement=document.createElement("div"),this.dropdownElement.classList.add("dropdown-menu"),this.dropdownElement.style.opacity="0",this.options.forEach((t=>{const e=document.createElement("div");if(e.style.padding="8px 12px",e.style.color="var(--color-font-2)",e.style.borderRadius="var(--radius)",e.style.fontSize="13px",e.style.cursor="pointer",e.style.display="flex",e.style.alignItems="center",e.classList.add("dropdown-item"),t.icon){const n=document.createElement("span");n.innerHTML=t.icon,n.style.marginRight="8px",n.style.width="16px",n.style.height="16px",e.appendChild(n)}const n=document.createTextNode(String(t.label));e.appendChild(n),e.addEventListener("click",(()=>{var e;null===(e=this.onClickItem)||void 0===e||e.call(this,t.value),this.removeDropdown()})),e.addEventListener("mouseenter",(()=>{e.style.backgroundColor="var(--color-menu-hover)",e.style.color="var(--color-font)"})),e.addEventListener("mouseleave",(()=>{e.style.backgroundColor="",e.style.color="var(--color-font-2)"})),this.dropdownElement.appendChild(e)})),document.body.appendChild(this.dropdownElement);const t=this.element.getBoundingClientRect(),e=this.dropdownElement.offsetWidth,n=document.documentElement.clientWidth;this.dropdownElement.style.position="absolute",this.dropdownElement.style.top=`${t.bottom}px`,this.dropdownElement.style.minWidth="140px",this.dropdownElement.style.padding="6px 4px",this.dropdownElement.style.borderRadius="var(--radius)",this.dropdownElement.style.backdropFilter="var(--dropdown-bdf)",this.dropdownElement.style.background="var(--dropdown-bg)",this.dropdownElement.style.border="var(--dropdown-border)",this.dropdownElement.style.boxShadow="var(--dropdown-boxShadow)",this.dropdownElement.style.position="absolute",this.dropdownElement.style.top=`${t.top}px`,t.left+t.width/2<n/2?(this.dropdownElement.style.left=`${t.left}px`,this.dropdownElement.style.right="auto"):(this.dropdownElement.style.right=n-t.right+"px",this.dropdownElement.style.left="auto"),t.left+e>n?(this.dropdownElement.style.right=n-t.right+"px",this.dropdownElement.style.left="auto"):(this.dropdownElement.style.left=`${t.left}px`,this.dropdownElement.style.right="auto"),this.fadeIn(this.dropdownElement,150)}removeDropdown(){if(this.dropdownElement){const t=this.dropdownElement;this.fadeOut(t,150,(()=>{t.remove(),this.dropdownElement===t&&(this.dropdownElement=null)}))}}handleDocumentClick(){this.removeDropdown()}}t.activeDropdown=null;class e{constructor(t,e){this.popoverElement=null,this.options=e,this.element="string"==typeof t?document.querySelector(t):t,this.init()}init(){this.element&&(this.element.addEventListener("click",this.togglePopover.bind(this)),document.addEventListener("click",this.handleDocumentClick.bind(this)))}togglePopover(t){t.stopPropagation(),e.activePopover&&e.activePopover!==this&&e.activePopover.removePopover(),this.popoverElement?this.removePopover():(this.createPopover(),e.activePopover=this)}fadeIn(t,e){let n=0;const r=16.7/e,o=()=>{if(n+=r,n>=1)return n=1,void(t.style.opacity=String(n));t.style.opacity=String(n),requestAnimationFrame(o)};o()}fadeOut(t,e,n){let r=1;const o=16.7/e,s=t,i=()=>{if(s){if(r-=o,r<=0)return r=0,s.style.opacity=String(r),void n();s.style.opacity=String(r),requestAnimationFrame(i)}};i()}createPopover(){this.popoverElement=document.createElement("div");const{classNames:t=[]}=this.options;if(this.popoverElement.classList.add("popover-content","scrollbar-obtrusive"),t.forEach((t=>{var e;return null===(e=this.popoverElement)||void 0===e?void 0:e.classList.add(t)})),this.popoverElement.style.opacity="0",this.options.title){const t=document.createElement("p");t.textContent=this.options.title,t.style.margin="0 0 8px 0",t.style.fontSize="12px",t.style.color="var(--color-font-2)",this.popoverElement.appendChild(t)}if(this.options.content){const t=document.createElement("p");t.style.margin="0",t.textContent=this.options.content,this.popoverElement.appendChild(t)}document.body.appendChild(this.popoverElement);const{styles:e=null}=this.options;if(e)for(const t in e)this.popoverElement.style.setProperty(t,e[t]);this.popoverElement.style.lineHeight="1.5",this.popoverElement.style.zIndex="20231026",this.popoverElement.style.overflow="auto",this.popoverElement.style.padding="10px",this.popoverElement.style.borderRadius="var(--radius)",this.popoverElement.style.backdropFilter="var(--dropdown-bdf)",this.popoverElement.style.background="var(--dropdown-bg)",this.popoverElement.style.border="var(--dropdown-border)",this.popoverElement.style.boxShadow="var(--dropdown-boxShadow)",this.fadeIn(this.popoverElement,150)}removePopover(){if(this.popoverElement){const t=this.popoverElement;this.fadeOut(t,150,(()=>{t.remove(),this.popoverElement===t&&(this.popoverElement=null)}))}}handleDocumentClick(t){t.target&&this.popoverElement&&this.popoverElement.contains(t.target)||this.removePopover()}}e.activePopover=null;var r=n(860),o=n.n(r);class s{constructor(t,e,n=o()().year()){if(this.isUserDragging=!1,this.lastMouseX=0,this.currentDayWidth=30,this.handleMouseDown=t=>{this.isUserDragging=!0,this.lastMouseX=t.clientX},this.handleMouseMove=t=>{if(this.isUserDragging){const e=t.clientX-this.lastMouseX;this.chartContainer.scrollBy(-e,0),this.lastMouseX=t.clientX}},this.handleMouseUp=()=>{this.isUserDragging=!1},this.currentYear=n,this.taskList=e,this.chartContainer=document.querySelector(t),!this.chartContainer)throw new Error(`Container with selector ${t} not found`);this.renderChart(),this.handleMouseWheelInView(),this.centerOnCurrentDay(),this.updateDayWidthOnScroll()}getDaysOfMonth(t,e){return new Date(t,e+1,0).getDate()}renderChart(){this.chartContainer.innerHTML="";const t=document.createElement("div");t.className="timeline-container";const n=document.createElement("div");n.className="task-container",this.chartContainer.addEventListener("mousedown",this.handleMouseDown),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp);const r=document.createElement("div");r.className="months-row";const s=document.createElement("div");s.className="days-row";let i=0;for(let t=0;t<12;t++){const e=document.createElement("div");e.className="month",e.textContent=`${window.i18n[(a=t+1,{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}[a])]}`,e.style.left=`${i}px`,r.appendChild(e);const d=this.getDaysOfMonth(this.currentYear,t);if(i>0){const t=document.createElement("div");t.style.position="absolute",t.style.height="100%",t.style.width="0",t.style.borderLeft="1px dashed var(--color-border)",t.style.left=`${i}px`,n.appendChild(t)}for(let e=1;e<=d;e++){const n=document.createElement("div");n.className="day";const r=`${this.currentYear}-${t+1}-${e}`;n.setAttribute("data-ymd",o()(r).format("YYYY-MM-DD")),n.textContent=`${e}`,n.style.position="absolute",n.style.left=`${i}px`,s.appendChild(n),i+=this.currentDayWidth}}var a;this.taskList.forEach(((t,r)=>{var s;const i=document.createElement("div"),a=o()(),d=o()(t.start),l=o()(t.end).add(1,"day"),c=l.isBefore(a)?"expired":d.isBefore(a)&&l.isAfter(a)?"doing":"todo";i.classList.add("task-bar","ellipsis",c),i.setAttribute("data-start",o()(t.start).format("YYYY-MM-DD")),i.setAttribute("data-end",o()(t.end).format("YYYY-MM-DD")),i.style.position="absolute",i.style.height="30px",i.style.lineHeight="30px",i.style.top=34*r+"px",i.textContent=t.title,n.appendChild(i),new e(i,{title:`${o()(t.start).format("DD/MM/YYYY")} - ${o()(t.end).format("DD/MM/YYYY")}`,content:null!==(s=t.content)&&void 0!==s?s:t.title,styles:{maxHeight:"30%",maxWidth:"80%",transform:"translateX(-50%)",bottom:"24px",left:"50%",position:"fixed"},classNames:["task-bar-popover"]})})),t.appendChild(r),t.appendChild(s),this.chartContainer.appendChild(t),this.chartContainer.appendChild(n),this.renderTodayVerticalLine(),this.updateTaskBars()}centerOnCurrentDay(){const t=new Date,e=t.getFullYear(),n=t.getMonth(),r=t.getDate();if(this.currentYear===e){let t=0;for(let r=0;r<n;r++)t+=this.getDaysOfMonth(e,r);t+=r;const o=t*this.currentDayWidth-this.chartContainer.offsetWidth/2;this.chartContainer.scrollLeft=o}}handleMouseWheelInView(){this.chartContainer.addEventListener("wheel",(t=>{t.deltaY>0&&this.currentDayWidth<5||(this.currentDayWidth*=t.deltaY>0?.9:1.1,this.renderChart(),this.updateDayWidthOnScroll(),this.updateTaskBars())}))}updateDayWidthOnScroll(){const t=[...this.chartContainer.querySelectorAll(".day")];this.currentDayWidth<25?t.forEach(((t,e)=>{t.style.display=e%8==0?"block":"none"})):t.forEach((t=>{t.style.display="block"})),this.updateTaskBars()}updateTaskBars(){[...this.chartContainer.querySelectorAll(".task-bar")].forEach((t=>{const e=t.getAttribute("data-start"),n=t.getAttribute("data-end"),r=this.chartContainer.querySelector(`.day[data-ymd="${e}"]`),s=this.chartContainer.querySelector(`.day[data-ymd="${o()(n).add(1,"day").format("YYYY-MM-DD")}"]`);if(r&&s){const e=parseInt(r.style.left,10),n=parseInt(s.style.left,10)-e;t.style.left=`${e}px`,t.style.width=`${n}px`}}))}renderTodayVerticalLine(){const t=o()().format("YYYY-MM-DD"),e=this.chartContainer.querySelector(`.day[data-ymd="${t}"]`);if(!e)return;e.classList.add("today");const n=+e.style.left.replace("px","")+e.offsetWidth/2,r=document.createElement("div");r.className="today-vertical-line",r.style.position="absolute",r.style.height="100%",r.style.width="0",r.style.borderLeft="2px dashed var(--color-primary)",r.style.left=`${n}px`;this.chartContainer.querySelector(".task-container").appendChild(r)}updateTasks(t,e){this.currentDayWidth=30,this.currentYear=e,this.taskList=t,this.renderChart()}}const i=(t,e)=>e.map((e=>Object.assign(Object.assign({},e),{start:o()(`${t}-${e.start}`).toString(),end:o()(`${t}-${e.end}`).toString()})));document.addEventListener("DOMContentLoaded",(()=>{const{roadmapYears:e=null,initYear:n}=window,r=document.querySelector("#tody-button");if(n===o()().year().toString()&&r&&(r.style.display="inherit"),e){const a=Object.keys(e).map((t=>({value:String(Number(t)),label:Number(t)})));new t("#year-dropdown",a,{onClickItem:t=>{document.querySelector("#year-dropdown span").textContent=t,r.style.display=t===o()().year().toString()?"inherit":"none";const n=i(t,e[t]);l.updateTasks(n,Number(t))}});const d=i(n,e[n]),l=new s("#gantt-container",d);null==r||r.addEventListener("click",(()=>l.centerOnCurrentDay()))}}))})()})();