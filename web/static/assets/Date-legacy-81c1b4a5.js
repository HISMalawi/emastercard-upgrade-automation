System.register(["./his_date-legacy-70b43096.js"],(function(t,n){"use strict";var r;return{setters:[t=>{r=t.d}],execute:function(){const n="YYYY-MM-DD",e=t("D","DD/MMM/YYYY");function a(t){const e=r(t).format(n);return e.match(/invalid/i)?"":e}function u(t){return r().subtract(t,"years").format(n)}t("H",{currentDate:function(){return r().format(n)},getYearOfAge:function(t){const[n]=u(t).split("-");return parseInt(n)},getYear:function(t){return r(t).year()},dateDiffInDays:function(t,n){return r(t).diff(n,"days")},getAgeInYears:function(t){return r().diff(t,"years")},toStandardHisTimeFormat:function(t){return r(t).format("HH:mm")},toStandardHisDisplayFormat:function(t){const n=r(t).format(e);return n.match(/invalid/i)?"":n},currentDisplayDate:function(){return r().format(e)},stitchDate:function(t,n=-1,r=-1){let e=n.toString(),u=r.toString(),o=t;const i=t=>t.toString().match(/Unknown/i);return parseInt(o.toString())<1900&&(o="1900"),n&&!i(n)||(e="07"),r&&!i(r)||(u="15"),a(`${o}-${e}-${u}`)},toStandardHisFormat:a,estimateDateFromAge:u,getYearFromAge:function(t){return r().subtract(t,"years").year()},getCurrentYear:function(){return r().year()},getCurrentMonth:function(){return r().month()},getCurrentDay:function(){return r().date()},getDateBeforeByDays:function(t,n){const r=new Date(t);return r.setDate(r.getDate()-n),a(r)},getMonth:function(t){return r(t).format("MMM")},getDay:function(t){return r(t).date()},add:function(t,n,e){return r(t).add(e,n)},subtract:function(t,n,e){return r(t).subtract(e,n)},getDateQuarter:function(t){const n=new Date(t),r=n.getMonth(),e=n.getFullYear();return r<3?{start:`${e}-01-01`,end:`${e}-03-31`}:r<6?{start:`${e}-04-01`,end:`${e}-06-30`}:r<9?{start:`${e}-07-01`,end:`${e}-09-30`}:{start:`${e}-10-01`,end:`${e}-12-31`}},rangeOf:function(t,n,e){const a=r(t);return n&&e?a.isSame(n)||a.isAfter(n)&&a.isBefore(e):e?a.isSame(e)||a.isBefore(e):!n||a.isSame(n)||a.isAfter(n)}})}}}));
