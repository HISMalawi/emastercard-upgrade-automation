System.register(["./index-legacy-6a8cc98f.js"],(function(t,e){"use strict";var r;return{setters:[t=>{t.c$,r=t.d3}],execute:function(){t({a:h,b:d,c:o,e:f,f:$,g:l,h:y,i:function(t){return m(n(),t,"years")},s:m,t:c});var e={exports:{}};!function(t,e){t.exports=function(){var t=1e3,e=6e4,r=36e5,n="millisecond",s="second",i="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},M=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},v={s:M,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+M(n,2,"0")+":"+M(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,c),i=r-s<0,u=e.clone().add(n+(i?-1:1),c);return+(-(n+(r-s)/(i?s-u:u-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:i,s:s,ms:n,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",g={};g[D]=y;var p="$isDayjsObject",S=function(t){return t instanceof b||!(!t||!t[p])},O=function t(e,r,n){var s;if(!e)return D;if("string"==typeof e){var i=e.toLowerCase();g[i]&&(s=i),r&&(g[i]=r,s=i);var u=e.split("-");if(!s&&u.length>1)return t(u[0])}else{var a=e.name;g[a]=e,s=a}return!n&&s&&(D=s),s||!n&&D},w=function(t,e){if(S(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new b(r)},Y=v;Y.l=O,Y.i=S,Y.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function y(t){this.$L=O(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var M=y.prototype;return M.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(Y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(l);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.init()},M.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},M.$utils=function(){return Y},M.isValid=function(){return!(this.$d.toString()===$)},M.isSame=function(t,e){var r=w(t);return this.startOf(e)<=r&&r<=this.endOf(e)},M.isAfter=function(t,e){return w(t)<this.startOf(e)},M.isBefore=function(t,e){return this.endOf(e)<w(t)},M.$g=function(t,e,r){return Y.u(t)?this[e]:this.set(r,t)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(t,e){var r=this,n=!!Y.u(e)||e,f=Y.p(t),$=function(t,e){var s=Y.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?s:s.endOf(a)},l=function(t,e){return Y.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},m=this.$W,y=this.$M,M=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return n?$(1,0):$(31,11);case c:return n?$(1,y):$(0,y+1);case o:var D=this.$locale().weekStart||0,g=(m<D?m+7:m)-D;return $(n?M-g:M+(6-g),y);case a:case d:return l(v+"Hours",0);case u:return l(v+"Minutes",1);case i:return l(v+"Seconds",2);case s:return l(v+"Milliseconds",3);default:return this.clone()}},M.endOf=function(t){return this.startOf(t,!1)},M.$set=function(t,e){var r,o=Y.p(t),f="set"+(this.$u?"UTC":""),$=(r={},r[a]=f+"Date",r[d]=f+"Date",r[c]=f+"Month",r[h]=f+"FullYear",r[u]=f+"Hours",r[i]=f+"Minutes",r[s]=f+"Seconds",r[n]=f+"Milliseconds",r)[o],l=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var m=this.clone().set(d,1);m.$d[$](l),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},M.set=function(t,e){return this.clone().$set(t,e)},M.get=function(t){return this[Y.p(t)]()},M.add=function(n,f){var d,$=this;n=Number(n);var l=Y.p(f),m=function(t){var e=w($);return Y.w(e.date(e.date()+Math.round(t*n)),$)};if(l===c)return this.set(c,this.$M+n);if(l===h)return this.set(h,this.$y+n);if(l===a)return m(1);if(l===o)return m(7);var y=(d={},d[i]=e,d[u]=r,d[s]=t,d)[l]||1,M=this.$d.getTime()+n*y;return Y.w(M,this)},M.subtract=function(t,e){return this.add(-1*t,e)},M.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||$;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=Y.z(this),i=this.$H,u=this.$m,a=this.$M,o=r.weekdays,c=r.months,f=r.meridiem,h=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].slice(0,i)},d=function(t){return Y.s(i%12||12,t,"0")},l=f||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(m,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return Y.s(e.$y,4,"0");case"M":return a+1;case"MM":return Y.s(a+1,2,"0");case"MMM":return h(r.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return Y.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(r.weekdaysMin,e.$W,o,2);case"ddd":return h(r.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(i);case"HH":return Y.s(i,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return l(i,u,!0);case"A":return l(i,u,!1);case"m":return String(u);case"mm":return Y.s(u,2,"0");case"s":return String(e.$s);case"ss":return Y.s(e.$s,2,"0");case"SSS":return Y.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(n,d,$){var l,m=this,y=Y.p(d),M=w(n),v=(M.utcOffset()-this.utcOffset())*e,D=this-M,g=function(){return Y.m(m,M)};switch(y){case h:l=g()/12;break;case c:l=g();break;case f:l=g()/3;break;case o:l=(D-v)/6048e5;break;case a:l=(D-v)/864e5;break;case u:l=D/r;break;case i:l=D/e;break;case s:l=D/t;break;default:l=D}return $?l:Y.a(l)},M.daysInMonth=function(){return this.endOf(c).$D},M.$locale=function(){return g[this.$L]},M.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=O(t,e,!0);return n&&(r.$L=n),r},M.clone=function(){return Y.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},y}(),_=b.prototype;return w.prototype=_,[["$ms",n],["$s",s],["$m",i],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,b,w),t.$i=!0),w},w.locale=O,w.isDayjs=S,w.unix=function(t){return w(1e3*t)},w.en=g[D],w.Ls=g,w.p={},w}()}(e);const n=t("d",r(e.exports));var s={exports:{}};!function(t,e){var r,n;t.exports=(r="month",n="quarter",function(t,e){var s=e.prototype;s.quarter=function(t){return this.$utils().u(t)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(t-1))};var i=s.add;s.add=function(t,e){return t=Number(t),this.$utils().p(e)===n?this.add(3*t,r):i.bind(this)(t,e)};var u=s.startOf;s.startOf=function(t,e){var s=this.$utils(),i=!!s.u(e)||e;if(s.p(t)===n){var a=this.quarter()-1;return i?this.month(3*a).startOf(r).startOf("day"):this.month(3*a+2).endOf(r).endOf("day")}return u.bind(this)(t,e)}})}(s);const i=r(s.exports);n.extend(i);const u="YYYY-MM-DD",a="DD/MMM/YYYY";function o(t){var e;return null!==(e=null==t?void 0:t.map(c).join(" → "))&&void 0!==e?e:""}function c(t){return n(t).format(a)}function f(t){return n(t).format(u)}function h(){return f()}function d(){return f(n().add(1,"day"))}function $(t,e=n()){return e.diff(t,"years")}function l(t){const e=n(t),r=e.month(),s=e.year();return r<3?{start:`${s}-01-01`,end:`${s}-03-31`}:r<6?{start:`${s}-04-01`,end:`${s}-06-30`}:r<9?{start:`${s}-07-01`,end:`${s}-09-30`}:{start:`${s}-10-01`,end:`${s}-12-31`}}function m(t,e,r){return f(n(t).subtract(e,r))}function y(t=5){const e=[];let r=n();for(let n=0;n<t;n++)e.push({start:r.startOf("quarter").format("YYYY-MM-DD"),end:r.endOf("quarter").format("YYYY-MM-DD"),name:`Q${r.quarter()} ${r.year()}`}),r=r.subtract(1,"quarter");return e}t("H",{today:h,tomorrow:d,toDisplayFmt:c,toStandardFmt:f,getAge:$,subtract:m,getQuarterDates:l,getReportQuarters:y,toDisplayRangeFmt:o})}}}));