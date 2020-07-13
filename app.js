/*!
 * GSAP 3.1.1
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t){return"string"==typeof t}function o(t){return"function"==typeof t}function p(t){return"number"==typeof t}function q(t){return void 0===t}function r(t){return"object"==typeof t}function s(t){return!1!==t}function t(){return"undefined"!=typeof window}function u(t){return o(t)||n(t)}function J(t){return(l=_t(t,at))&&ne}function K(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function L(t,e){return!e&&console.warn(t)}function M(t,e){return t&&(at[t]=e)&&l&&(l[t]=e)||at}function N(){return 0}function X(t){var e,n,i=t[0];if(r(i)||o(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(n=pt.length;n--&&!pt[n].targetTest(i););e=pt[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new Et(t[n],e)))||t.splice(n,1);return t}function Y(t){return t._gsap||X(yt(t))[0]._gsap}function Z(t,e){var r=t[e];return o(r)?t[e]():q(r)&&t.getAttribute(e)||r}function $(t,e){return(t=t.split(",")).forEach(e)||t}function _(t){return Math.round(1e4*t)/1e4}function aa(t,e){for(var r=e.length,n=0;t.indexOf(e[n])<0&&++n<r;);return n<r}function ba(t,e,r){var n,i=p(t[1]),a=(i?2:1)+(e<2?0:1),o=t[a];if(i&&(o.duration=t[1]),o.parent=r,e){for(n=o;r&&!("immediateRender"in n);)n=r.vars.defaults||{},r=s(r.vars.inherit)&&r.parent;o.immediateRender=s(n.immediateRender),e<2?o.runBackwards=1:o.startAt=t[a-1]}return o}function ca(){var t,e,r=ot.length,n=ot.slice(0);for(ut={},t=ot.length=0;t<r;t++)(e=n[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function da(t,e,r,n){ot.length&&ca(),t.render(e,r,n),ot.length&&ca()}function ea(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(it).length<2?e:t}function fa(t){return t}function ga(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ha(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function ja(t,e){for(var n in e)t[n]=r(e[n])?ja(t[n]||(t[n]={}),e[n]):e[n];return t}function ka(t,e){var r,n={};for(r in t)r in e||(n[r]=t[r]);return n}function oa(t,e,r,n){void 0===r&&(r="_first"),void 0===n&&(n="_last");var i=e._prev,a=e._next;i?i._next=a:t[r]===e&&(t[r]=a),a?a._prev=i:t[n]===e&&(t[n]=i),e._dp=t,e._next=e._prev=e.parent=null}function pa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function qa(t){for(var e=t;e;)e._dirty=1,e=e.parent;return t}function ta(t){return t._repeat?ct(t._tTime,t=t.duration()+t._rDelay)*t:0}function va(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function wa(t,e,r){if(e.parent&&pa(e),e._start=r+e._delay,e._end=e._start+(e.totalDuration()/Math.abs(e.timeScale())||0),function _addLinkedListItem(t,e,r,n,i){void 0===r&&(r="_first"),void 0===n&&(n="_last");var a,s=t[n];if(i)for(a=e[i];s&&s[i]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[n]=e,e._prev=s,e.parent=t}(t,e,"_first","_last",t._sort?"_start":0),(t._recent=e)._time||!e._dur&&e._initted){var n=(t.rawTime()-e._start)*e._ts;(!e._dur||gt(0,e.totalDuration(),n)-e._tTime>B)&&e.render(n,!0)}if(qa(t),t._dp&&t._time>=t._dur&&t._ts&&t._dur<t.duration())for(var i=t;i._dp;)i.totalTime(i._tTime,!0),i=i._dp;return t}function xa(t,e,r,n){return Nt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&d!==Ct.frame?(ot.push(t),t._lazy=[e,n],1):void 0:1}function Aa(t){if(t instanceof Bt)return qa(t);var e=t._repeat;return t._tDur=e?e<0?1e12:_(t._dur*(e+1)+t._rDelay*e):t._dur,qa(t.parent),t}function Ca(t,e){var r,i,a=t.labels,s=t._recent||mt,o=t.duration()>=F?s.endTime(!1):t._dur;return n(e)&&(isNaN(e)||e in a)?"<"===(r=e.charAt(0))||">"===r?("<"===r?s._start:s.endTime(0<=s._repeat))+(parseFloat(e.substr(1))||0):(r=e.indexOf("="))<0?(e in a||(a[e]=o),a[e]):(i=+(e.charAt(r-1)+e.substr(r+1)),1<r?Ca(t,e.substr(0,r-1))+i:o+i):null==e?o:+e}function Da(t,e){return t||0===t?e(t):e}function Fa(t){return(t+"").substr((parseFloat(t)+"").length)}function Ia(t,e){return t&&r(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&r(t[0]))&&!t.nodeType&&t!==i}function La(t){return t.sort(function(){return.5-Math.random()})}function Ma(t){if(o(t))return t;var c=r(t)?t:{each:t},m=Ft(c.ease),g=c.from||0,v=parseFloat(c.base)||0,y={},e=0<g&&g<1,b=isNaN(g)||e,w=c.axis,T=g,x=g;return n(g)?T=x={center:.5,edges:.5,end:1}[g]||0:!e&&b&&(T=g[0],x=g[1]),function(t,e,r){var n,i,a,s,o,u,h,l,f,p=(r||c).length,d=y[p];if(!d){if(!(f="auto"===c.grid?0:(c.grid||[1,F])[1])){for(h=-F;h<(h=r[f++].getBoundingClientRect().left)&&f<p;);f--}for(d=y[p]=[],n=b?Math.min(f,p)*T-.5:g%f,i=b?p*x/f-.5:g/f|0,l=F,u=h=0;u<p;u++)a=u%f-n,s=i-(u/f|0),d[u]=o=w?Math.abs("y"===w?s:a):V(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===g&&La(d),d.max=h-l,d.min=l,d.v=p=(parseFloat(c.amount)||parseFloat(c.each)*(p<f?p-1:w?"y"===w?p/f:f:Math.max(f,p/f))||0)*("edges"===g?-1:1),d.b=p<0?v-p:v,d.u=Fa(c.amount||c.each)||0,m=m&&p<0?At(m):m}return p=(d[t]-d.min)/d.max||0,_(d.b+(m?m(p):p)*d.v)+d.u}}function Na(e){var r=e<1?Math.pow(10,(e+"").length-2):1;return function(t){return~~(Math.round(parseFloat(t)/e)*e*r)/r+(p(t)?0:Fa(t))}}function Oa(u,t){var h,l,e=G(u);return!e&&r(u)&&(h=e=u.radius||F,u.values?(u=yt(u.values),(l=!p(u[0]))&&(h*=h)):u=Na(u.increment)),Da(t,e?o(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,n=parseFloat(l?t.x:t),i=parseFloat(l?t.y:0),a=F,s=0,o=u.length;o--;)(e=l?(e=u[o].x-n)*e+(r=u[o].y-i)*r:Math.abs(u[o]-n))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||p(t)?s:s+Fa(t)}:Na(u))}function Pa(t,e,r,n){return Da(G(t)?!e:!0===r?!!(r=0):!n,function(){return G(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(n=r<1?Math.pow(10,(r+"").length-2):1)&&~~(Math.round((t+Math.random()*(e-t))/r)*r*n)/n})}function Ta(e,r,t){return Da(t,function(t){return e[~~r(t)]})}function Wa(t){for(var e,r,n,i,a=0,s="";~(e=t.indexOf("random(",a));)n=t.indexOf(")",e),i="["===t.charAt(e+7),r=t.substr(e+7,n-e-7).match(i?it:H),s+=t.substr(a,e-a)+Pa(i?r:+r[0],+r[1],+r[2]||1e-5),a=n+1;return s+t.substr(a,t.length-a)}function Za(t,e,r){var n,i,a,s=t.labels,o=F;for(n in s)(i=s[n]-e)<0==!!r&&i&&o>(i=Math.abs(i))&&(a=n,o=i);return a}function _a(t){return pa(t),t.progress()<1&&wt(t,"onInterrupt"),t}function eb(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*Tt+.5|0}function fb(t,e){var r,n,i,a,s,o,u,h,l,f,d=t?p(t)?[t>>16,t>>8&Tt,t&Tt]:0:xt.black;if(!d){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),xt[t])d=xt[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(r=t.charAt(1))+r+(n=t.charAt(2))+n+(i=t.charAt(3))+i),d=[(t=parseInt(t.substr(1),16))>>16,t>>8&Tt,t&Tt];else if("hsl"===t.substr(0,3))if(d=f=t.match(H),e){if(~t.indexOf("="))return t.match(tt)}else a=+d[0]%360/360,s=d[1]/100,r=2*(o=d[2]/100)-(n=o<=.5?o*(s+1):o+s-o*s),3<d.length&&(d[3]*=1),d[0]=eb(a+1/3,r,n),d[1]=eb(a,r,n),d[2]=eb(a-1/3,r,n);else d=t.match(H)||xt.transparent;d=d.map(Number)}return e&&!f&&(r=d[0]/Tt,n=d[1]/Tt,i=d[2]/Tt,o=((u=Math.max(r,n,i))+(h=Math.min(r,n,i)))/2,u===h?a=s=0:(l=u-h,s=.5<o?l/(2-u-h):l/(u+h),a=u===r?(n-i)/l+(n<i?6:0):u===n?(i-r)/l+2:(r-n)/l+4,a*=60),d[0]=a+.5|0,d[1]=100*s+.5|0,d[2]=100*o+.5|0),d}function gb(t,e){var r,n,i,a=(t+"").match(kt),s=0,o="";if(!a)return t;for(r=0;r<a.length;r++)n=a[r],s+=(i=t.substr(s,t.indexOf(n,s)-s)).length+n.length,3===(n=fb(n,e)).length&&n.push(1),o+=i+(e?"hsla("+n[0]+","+n[1]+"%,"+n[2]+"%,"+n[3]:"rgba("+n.join(","))+")";return o+t.substr(s)}function jb(t){var e,r=t.join(" ");kt.lastIndex=0,kt.test(r)&&(e=Ot.test(r),t[0]=gb(t[0],e),t[1]=gb(t[1],e))}function rb(t){var e=(t+"").split("("),r=Pt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,n,i={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,n=r.substr(0,e),i[s]=isNaN(n)?n.replace(Dt,"").trim():+n,s=r.substr(e+1).trim();return i}(e[1])]:rt.exec(t)[1].split(",").map(ea)):Pt._CE&&St.test(t)?Pt._CE("",t):r}function ub(t,e,r,n){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===n&&(n=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var i,a={easeIn:e,easeOut:r,easeInOut:n};return $(t,function(t){for(var e in Pt[t]=at[t]=a,Pt[i=t.toLowerCase()]=r,a)Pt[i+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Pt[t+"."+e]=a[e]}),a}function vb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function wb(r,t,e){function Dk(t){return 1===t?1:n*Math.pow(2,-10*t)*Q((t-a)*i)+1}var n=1<=t?t:1,i=(e||(r?.3:.45))/(t<1?t:1),a=i/R*(Math.asin(1/n)||0),s="out"===r?Dk:"in"===r?function(t){return 1-Dk(1-t)}:vb(Dk);return i=R/i,s.config=function(t,e){return wb(r,t,e)},s}function xb(e,r){function Lk(t){return--t*t*((r+1)*t+r)+1}void 0===r&&(r=1.70158);var t="out"===e?Lk:"in"===e?function(t){return 1-Lk(1-t)}:vb(Lk);return t.config=function(t){return xb(e,t)},t}var E,i,a,h,l,f,d,c,m,g,v,y,b,w,T,x,k,O,C,P,S,D,A,j={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},z={duration:.5,overwrite:!1,delay:0},F=1e8,B=1/F,R=2*Math.PI,I=R/4,U=0,V=Math.sqrt,W=Math.cos,Q=Math.sin,G=Array.isArray,H=/(?:-?\.?\d|\.)+/gi,tt=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/g,et=/[-+=\.]*\d+(?:\.|e-|e)*\d*/gi,rt=/\(([^()]+)\)/i,nt=/[\+-]=-?[\.\d]+/,it=/[#\-+\.]*\b[a-z\d-=+%.]+/gi,at={},st={},ot=[],ut={},ht={},lt={},ft=30,pt=[],dt="onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",_t=function _merge(t,e){for(var r in e)t[r]=e[r];return t},ct=function _animationCycle(t,e){return(t/=e)&&~~t===t?~~t-1:~~t},mt={_start:0,endTime:N},gt=function _clamp(t,e,r){return r<t?t:e<r?e:r},vt=[].slice,yt=function toArray(t,e){return!n(t)||e||!a&&Mt()?G(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return n(t)&&!e||Ia(t,1)?r.push.apply(r,yt(t)):r.push(t)})||r}(t,e):Ia(t)?vt.call(t,0):t?[t]:[]:vt.call(h.querySelectorAll(t),0)},bt=function mapRange(e,t,r,n,i){var a=t-e,s=n-r;return Da(i,function(t){return r+(t-e)/a*s})},wt=function _callback(t,e,r){var n,i,a=t.vars,s=a[e];if(s)return n=a[e+"Params"],i=a.callbackScope||t,r&&ot.length&&ca(),n?s.apply(i,n):s.call(i)},Tt=255,xt={aqua:[0,Tt,Tt],lime:[0,Tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Tt],navy:[0,0,128],white:[Tt,Tt,Tt],olive:[128,128,0],yellow:[Tt,Tt,0],orange:[Tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Tt,0,0],pink:[Tt,192,203],cyan:[0,Tt,Tt],transparent:[Tt,Tt,Tt,0]},kt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(t in xt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Ot=/hsl[a]?\(/,Ct=(w=Date.now,T=500,x=33,k=w(),O=k,P=C=1/60,b={time:0,frame:0,tick:function tick(){Jj(!0)},wake:function wake(){f&&(!a&&t()&&(i=a=window,h=i.document||{},at.gsap=ne,(i.gsapVersions||(i.gsapVersions=[])).push(ne.version),J(l||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),g&&b.sleep(),v=y||function(t){return setTimeout(t,1e3*(P-b.time)+1|0)},m=1,Jj(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(g),m=0,v=N},lagSmoothing:function lagSmoothing(t,e){T=t||1e8,x=Math.min(e,T,0)},fps:function fps(t){C=1/(t||60),P=b.time+C},add:function add(t){S.indexOf(t)<0&&S.push(t),Mt()},remove:function remove(t){var e;~(e=S.indexOf(t))&&S.splice(e,1)},_listeners:S=[]}),Mt=function _wake(){return!m&&Ct.wake()},Pt={},St=/^[\d.\-M][\d.\-,\s]/,Dt=/["']/g,At=function _invertEase(e){return function(t){return 1-e(1-t)}},Ft=function _parseEase(t,e){return t&&(o(t)?t:Pt[t]||rb(t))||e};function Jj(e){var t,r,n=w()-O,i=!0===e;T<n&&(k+=n-x),O+=n,b.time=(O-k)/1e3,(0<(t=b.time-P)||i)&&(b.frame++,P+=t+(C<=t?.004:C-t),r=1),i||(g=v(Jj)),r&&S.forEach(function(t){return t(b.time,n,b.frame,e)})}function al(t){return t<A?D*t*t:t<.7272727272727273?D*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?D*(t-=2.25/2.75)*t+.9375:D*Math.pow(t-2.625/2.75,2)+.984375}$("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;ub(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Pt.Linear.easeNone=Pt.none=Pt.Linear.easeIn,ub("Elastic",wb("in"),wb("out"),wb()),D=7.5625,A=1/2.75,ub("Bounce",function(t){return 1-al(1-t)},al),ub("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),ub("Circ",function(t){return-(V(1-t*t)-1)}),ub("Sine",function(t){return 1-W(t*I)}),ub("Back",xb("in"),xb("out"),xb()),Pt.SteppedEase=Pt.steps=at.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,n=t+(e?0:1),i=e?1:0;return function(t){return((n*gt(0,.99999999,t)|0)+i)*r}}},z.ease=Pt["quad.out"];var Rt,Et=function GSCache(t,e){this.id=U++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:Z,this.set=e?e.getSetter:Wt},zt=((Rt=Animation.prototype).delay=function delay(t){return t||0===t?(this._delay=t,this):this._delay},Rt.duration=function duration(t){var e=arguments.length,r=this._repeat,n=0<r?r*((e?t:this._dur)+this._rDelay):0;return e?this.totalDuration(r<0?t:t+n):this.totalDuration()&&this._dur},Rt.totalDuration=function totalDuration(t){if(!arguments.length)return this._tDur;var e=this._repeat,r=(t||this._rDelay)&&e<0;return this._tDur=r?1e12:t,this._dur=r?t:(t-e*this._rDelay)/(e+1),this._dirty=0,qa(this.parent),this},Rt.totalTime=function totalTime(t,e){if(Mt(),!arguments.length)return this._tTime;var r,n=this.parent||this._dp;if(n&&n.smoothChildTiming&&this._ts){for(r=this._start,this._start=n._time-(0<this._ts?t/this._ts:((this._dirty?this.totalDuration():this._tDur)-t)/-this._ts),this._end+=this._start-r,n._dirty||qa(n);n.parent;)n.parent._time!==n._start+(0<n._ts?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&n.autoRemoveChildren&&wa(n,this,this._start-this._delay)}return this._tTime===t&&(this._dur||e)||(this._ts||(this._pTime=t),da(this,t,e)),this},Rt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+ta(this))%this._dur||(t?this._dur:0),e):this._time},Rt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._tTime/this.totalDuration()},Rt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+ta(this),e):this.duration()?this._time/this._dur:this.ratio},Rt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?ct(this._tTime,r)+1:1},Rt.timeScale=function timeScale(t){if(!arguments.length)return this._ts||this._pauseTS||0;if(null!==this._pauseTS)return this._pauseTS=t,this;var e=this.parent&&this._ts?va(this.parent._time,this):this._tTime;return this._ts=t,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(e,!0))},Rt.paused=function paused(t){var e=!this._ts;return arguments.length?(e!==t&&(t?(this._pauseTS=this._ts,this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(this._ts=this._pauseTS||1,this._pauseTS=null,t=this._tTime||this._pTime,1===this.progress()&&(this._tTime-=B),this.totalTime(t,!0))),this):e},Rt.startTime=function startTime(t){return arguments.length?(this.parent&&this.parent._sort&&wa(this.parent,this,t-this._delay),this):this._start},Rt.endTime=function endTime(t){return this._start+(s(t)?this.totalDuration():this.duration())/Math.abs(this._ts)},Rt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?va(e.rawTime(t),this):this._tTime:this._tTime},Rt.repeat=function repeat(t){return arguments.length?(this._repeat=t,Aa(this)):this._repeat},Rt.repeatDelay=function repeatDelay(t){return arguments.length?(this._rDelay=t,Aa(this)):this._rDelay},Rt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Rt.seek=function seek(t,e){return this.totalTime(Ca(this,t),s(e))},Rt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,s(e))},Rt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Rt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Rt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Rt.resume=function resume(){return this.paused(!1)},Rt.reversed=function reversed(t){var e=this._ts||this._pauseTS||0;return arguments.length?(t!==this.reversed()&&(this[null===this._pauseTS?"_ts":"_pauseTS"]=Math.abs(e)*(t?-1:1),this.totalTime(this._tTime,!0)),this):e<0},Rt.invalidate=function invalidate(){return this._initted=0,this},Rt.isActive=function isActive(t){var e,r=this.parent||this._dp,n=this._start;return!(r&&!(this._ts&&(this._initted||!t)&&r.isActive(t)&&(e=r.rawTime(!0))>=n&&e<this.endTime(!0)-B))},Rt.eventCallback=function eventCallback(t,e,r){var n=this.vars;return 1<arguments.length?(e?(n[t]=e,r&&(n[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete n[t],this):n[t]},Rt.then=function then(t){var n=this;return new Promise(function(e){function vm(){var t=n.then;n.then=null,(r=r(n))&&(r.then||r===n?n.then=t:o(r)||(r=fa)),e(r),n.then=t}var r=o(t)?t:fa;n._initted&&1===n.totalProgress()&&0<=n._ts||!n._tTime&&n._ts<0?vm():n._prom=vm})},Rt.kill=function kill(){_a(this)},Animation);function Animation(t,e){var r=t.parent||E;this.vars=t,this._dur=this._tDur=+t.duration||0,this._delay=+t.delay||0,(this._repeat=t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase,Aa(this)),this._ts=1,this.data=t.data,m||Ct.wake(),r&&wa(r,this,e||0===e?e:r._time),t.reversed&&this.reversed(!0),t.paused&&this.paused(!0)}ga(zt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:0,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-B,_prom:0,_pauseTS:null});var Bt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t,e)||this).labels={},r.smoothChildTiming=s(t.smoothChildTiming),r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=s(t.sortChildren),r}_inheritsLoose(Timeline,i);var t=Timeline.prototype;return t.to=function to(t,e,r,n){return new jt(t,ba(arguments,0,this),Ca(this,p(e)?n:r)),this},t.from=function from(t,e,r,n){return new jt(t,ba(arguments,1,this),Ca(this,p(e)?n:r)),this},t.fromTo=function fromTo(t,e,r,n,i){return new jt(t,ba(arguments,2,this),Ca(this,p(e)?i:n)),this},t.set=function set(t,e,r){return e.duration=0,e.parent=this,e.repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new jt(t,e,Ca(this,r)),this},t.call=function call(t,e,r){return wa(this,jt.delayedCall(0,t,e),Ca(this,r))},t.staggerTo=function staggerTo(t,e,r,n,i,a,s){return r.duration=e,r.stagger=r.stagger||n,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new jt(t,r,Ca(this,i)),this},t.staggerFrom=function staggerFrom(t,e,r,n,i,a,o){return r.runBackwards=1,r.immediateRender=s(r.immediateRender),this.staggerTo(t,e,r,n,i,a,o)},t.staggerFromTo=function staggerFromTo(t,e,r,n,i,a,o,u){return n.startAt=r,n.immediateRender=s(n.immediateRender),this.staggerTo(t,e,n,i,a,o,u)},t.render=function render(t,e,r){var n,i,a,s,o,u,h,l,f,p,d,c,m=this._time,g=this._dirty?this.totalDuration():this._tDur,v=this._dur,y=g-B<t&&0<=t&&this!==E?g:t<B?0:t,b=this._zTime<0!=t<0&&(this._initted||!v);if(y!==this._tTime||r||b){if(b&&(v||(m=this._zTime),!t&&e||(this._zTime=t)),n=y,f=this._start,u=0===(l=this._ts),m!==this._time&&v&&(n+=this._time-m),this._repeat&&(d=this._yoyo,o=v+this._rDelay,(v<(n=_(y%o))||g===y)&&(n=v),(s=~~(y/o))&&s===y/o&&(n=v,s--),d&&1&s&&(n=v-n,c=1),s!==(p=ct(this._tTime,o))&&!this._lock)){var w=d&&1&p,T=w===(d&&1&s);if(s<p&&(w=!w),m=w?0:v,this._lock=1,this.render(m,e,!v)._lock=0,!e&&this.parent&&wt(this,"onRepeat"),this.vars.repeatRefresh&&!c&&this.getChildren().forEach(function(t){return t.invalidate()}),m!==this._time||u!=!this._ts)return this;if(T&&(this._lock=2,m=w?v+1e-4:-1e-4,this.render(m,!0)),this._lock=0,!this._ts&&!u)return this}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var n;if(e<r)for(n=t._first;n&&n._start<=r;){if(!n._dur&&"isPause"===n.data&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=r;){if(!n._dur&&"isPause"===n.data&&n._start<e)return n;n=n._prev}}(this,_(m),_(n)))&&(y-=n-(n=h._start)),this._tTime=y,this._time=n,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1),m||!n||e||wt(this,"onStart"),m<=n&&0<=t)for(i=this._first;i;){if(a=i._next,(i._act||n>=i._start)&&i._ts&&h!==i){if(i.parent!==this)return this.render(t,e,r);if(i.render(0<i._ts?(n-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(n-i._start)*i._ts,e,r),n!==this._time||!this._ts&&!u){h=0;break}}i=a}else{i=this._last;for(var x=t<0?t:n;i;){if(a=i._prev,(i._act||x<=i._end)&&i._ts&&h!==i){if(i.parent!==this)return this.render(t,e,r);if(i.render(0<i._ts?(x-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(x-i._start)*i._ts,e,r),n!==this._time||!this._ts&&!u){h=0;break}}i=a}}if(h&&!e&&(this.pause(),h.render(m<=n?0:-B)._zTime=m<=n?1:-1,this._ts))return this._start=f,this.render(t,e,r);this._onUpdate&&!e&&wt(this,"onUpdate",!0),(y===g&&g>=this.totalDuration()||!y&&this._ts<0)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||(!t&&v||!(t&&0<this._ts||!y&&this._ts<0)||pa(this,1),e||t<0&&!m||(wt(this,y===g?"onComplete":"onReverseComplete",!0),this._prom&&this._prom())))}return this},t.add=function add(t,e){var r=this;if(p(e)||(e=Ca(this,e)),!(t instanceof zt)){if(G(t))return t.forEach(function(t){return r.add(t,e)}),qa(this);if(n(t))return this.addLabel(t,e);if(!o(t))return this;t=jt.delayedCall(0,t)}return this!==t?wa(this,t,e):this},t.getChildren=function getChildren(t,e,r,n){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===n&&(n=-F);for(var i=[],a=this._first;a;)a._start>=n&&(a instanceof jt?e&&i.push(a):(r&&i.push(a),t&&i.push.apply(i,a.getChildren(!0,e,r)))),a=a._next;return i},t.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},t.remove=function remove(t){return n(t)?this.removeLabel(t):o(t)?this.killTweensOf(t):(oa(this,t),t===this._recent&&(this._recent=this._last),qa(this))},t.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,this.parent||this._dp||!this._ts||(this._start=Ct.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts)),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},t.addLabel=function addLabel(t,e){return this.labels[t]=Ca(this,e),this},t.removeLabel=function removeLabel(t){return delete this.labels[t],this},t.addPause=function addPause(t,e,r){var n=jt.delayedCall(0,e||N,r);return n.data="isPause",this._hasPause=1,wa(this,n,Ca(this,t))},t.removePause=function removePause(t){var e=this._first;for(t=Ca(this,t);e;)e._start===t&&"isPause"===e.data&&pa(e),e=e._next},t.killTweensOf=function killTweensOf(t,e,r){for(var n=this.getTweensOf(t,r),i=n.length;i--;)Lt!==n[i]&&n[i].kill(t,e);return this},t.getTweensOf=function getTweensOf(t,e){for(var r,n=[],i=yt(t),a=this._first;a;)a instanceof jt?!aa(a._targets,i)||e&&!a.isActive("started"===e)||n.push(a):(r=a.getTweensOf(i,e)).length&&n.push.apply(n,r),a=a._next;return n},t.tweenTo=function tweenTo(t,e){var r=this,n=Ca(r,t),i=e&&e.startAt,a=jt.to(r,ga({ease:"none",lazy:!1,time:n,duration:Math.abs(n-(i&&"time"in i?i.time:r._time))/r.timeScale()||B,onStart:function onStart(){r.pause();var t=Math.abs(n-r._time)/r.timeScale();a._dur!==t&&(a._dur=t,a.render(a._time,!0,!0)),e&&e.onStart&&e.onStart.apply(a,e.onStartParams||[])}},e));return a},t.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ga({startAt:{time:Ca(this,t)}},r))},t.recent=function recent(){return this._recent},t.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),Za(this,Ca(this,t))},t.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),Za(this,Ca(this,t),1)},t.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+B)},t.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var n,i=this._first,a=this.labels;i;)i._start>=r&&(i._start+=t),i=i._next;if(e)for(n in a)a[n]>=r&&(a[n]+=t);return qa(this)},t.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return i.prototype.invalidate.call(this)},t.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._time=this._tTime=0,t&&(this.labels={}),qa(this)},t.totalDuration=function totalDuration(t){var e,r,n=0,i=this,a=i._last,s=F,o=i._repeat,u=o*i._rDelay||0,h=o<0;if(arguments.length)return h?i:i.timeScale(i.totalDuration()/t);if(i._dirty){for(;a;)e=a._prev,a._dirty&&a.totalDuration(),a._start>s&&i._sort&&a._ts&&!i._lock?(i._lock=1,wa(i,a,a._start-a._delay),i._lock=0):s=a._start,a._start<0&&a._ts&&(n-=a._start,(!i.parent&&!i._dp||i.parent&&i.parent.smoothChildTiming)&&(i._start+=a._start/i._ts,i._time-=a._start,i._tTime-=a._start),i.shiftChildren(-a._start,!1,-1e20),s=0),n<(r=a._end=a._start+a._tDur/Math.abs(a._ts||a._pauseTS||B))&&a._ts&&(n=_(r)),a=e;i._dur=i===E&&i._time>n?i._time:Math.min(F,n),i._tDur=h&&(i._dur||u)?1e12:Math.min(F,n*(o+1)+u),i._end=i._start+(i._tDur/Math.abs(i._ts||i._pauseTS||B)||0),i._dirty=0}return i._tDur},Timeline.updateRoot=function updateRoot(t){if(E._ts&&(da(E,va(t,E)),d=Ct.frame),Ct.frame>=ft){ft+=j.autoSleep||120;var e=E._first;if((!e||!e._ts)&&j.autoSleep&&Ct._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Ct.sleep()}}},Timeline}(zt);ga(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Eb(t,e,i,a,s,u){var h,l,f,p;if(ht[t]&&!1!==(h=new ht[t]).init(s,h.rawVars?e[t]:function _processVars(t,e,i,a,s){if(o(t)&&(t=Yt(t,s,e,i,a)),!r(t)||t.style&&t.nodeType||G(t))return n(t)?Yt(t,s,e,i,a):t;var u,h={};for(u in t)h[u]=Yt(t[u],s,e,i,a);return h}(e[t],a,s,u,i),i,a,u)&&(i._pt=l=new ee(i._pt,s,t,0,1,h.render,h,0,h.priority),i!==c))for(f=i._ptLookup[i._targets.indexOf(s)],p=h._props.length;p--;)f[h._props[p]]=l;return h}var Lt,It=function _addPropTween(t,e,r,i,a,s,u,h,l){o(i)&&(i=i(a||0,t,s));var f,p=t[e],d="get"!==r?r:o(p)?l?t[e.indexOf("set")||!o(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():p,_=o(p)?l?$t:Vt:Ut;if(n(i)&&(~i.indexOf("random(")&&(i=Wa(i)),"="===i.charAt(1)&&(i=parseFloat(d)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Fa(d)||0))),d!==i)return isNaN(d+i)?(p||e in t||K(e,i),function _addComplexStringPropTween(t,e,r,n,i,a,s){var o,u,h,l,f,p,d,_,c=new ee(this._pt,t,e,0,1,Gt,null,i),m=0,g=0;for(c.b=r,c.e=n,r+="",(d=~(n+="").indexOf("random("))&&(n=Wa(n)),a&&(a(_=[r,n],t,e),r=_[0],n=_[1]),u=r.match(et)||[];o=et.exec(n);)l=o[0],f=n.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(p=parseFloat(u[g-1])||0,c._pt={_next:c._pt,p:f||1===g?f:",",s:p,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-p,m:h&&h<4?Math.round:0},m=et.lastIndex);return c.c=m<n.length?n.substring(m,n.length):"",c.fp=s,(nt.test(n)||d)&&(c.e=0),this._pt=c}.call(this,t,e,d,i,_,h||j.stringFilter,l)):(f=new ee(this._pt,t,e,+d||0,i-(d||0),"boolean"==typeof p?Zt:Qt,0,_),l&&(f.fp=l),u&&f.modifier(u,this,t),this._pt=f)},Nt=function _initTween(t,e){var r,n,i,a,o,u,h,l,f,p,d,_,c=t.vars,m=c.ease,g=c.startAt,v=c.immediateRender,y=c.lazy,b=c.onUpdate,w=c.onUpdateParams,T=c.callbackScope,x=c.runBackwards,k=c.yoyoEase,O=c.keyframes,C=c.autoRevert,M=t._dur,P=t._startAt,S=t._targets,D=t.parent,A=D&&"nested"===D.data?D.parent._targets:S,F="auto"===t._overwrite,R=t.timeline;if(!R||O&&m||(m="none"),t._ease=Ft(m,z.ease),t._yEase=k?At(Ft(!0===k?m:k,z.ease)):0,k&&t._yoyo&&!t._repeat&&(k=t._yEase,t._yEase=t._ease,t._ease=k),!R){if(P&&P.render(-1,!0).kill(),g){if(pa(t._startAt=jt.set(S,ga({data:"isStart",overwrite:!1,parent:D,immediateRender:!0,lazy:s(y),startAt:null,delay:0,onUpdate:b,onUpdateParams:w,callbackScope:T,stagger:0},g))),v)if(0<e)C||(t._startAt=0);else if(M)return}else if(x&&M)if(P)C||(t._startAt=0);else if(e&&(v=!1),pa(t._startAt=jt.set(S,_t(ka(c,st),{overwrite:!1,data:"isFromStart",lazy:v&&s(y),immediateRender:v,stagger:0,parent:D}))),v){if(!e)return}else _initTween(t._startAt,B);for(r=ka(c,st),_=(l=S[t._pt=0]?Y(S[0]).harness:0)&&c[l.prop],y=M&&s(y)||y&&!M,n=0;n<S.length;n++){if(h=(o=S[n])._gsap||X(S)[n]._gsap,t._ptLookup[n]=p={},ut[h.id]&&ca(),d=A===S?n:A.indexOf(o),l&&!1!==(f=new l).init(o,_||r,t,d,A)&&(t._pt=a=new ee(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){p[t]=a}),f.priority&&(u=1)),!l||_)for(i in r)ht[i]&&(f=Eb(i,r,t,d,o,A))?f.priority&&(u=1):p[i]=a=It.call(t,o,i,"get",r[i],d,A,0,c.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),F&&t._pt&&(Lt=t,E.killTweensOf(o,p,"started"),Lt=0),t._pt&&y&&(ut[h.id]=1)}u&&te(t),t._onInit&&t._onInit(t)}t._from=!R&&!!c.runBackwards,t._onUpdate=b,t._initted=1},Yt=function _parseFuncOrString(t,e,r,i,a){return o(t)?t.call(e,r,i,a):n(t)&&~t.indexOf("random(")?Wa(t):t},qt=dt+",repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Xt=(qt+",id,stagger,delay,duration,paused").split(","),jt=function(O){function Tween(t,e,n){var i;"number"==typeof e&&(n.duration=e,e=n,n=null);var a,o,h,l,f,d,_,c,m=(i=O.call(this,function _inheritDefaults(t){var e=t.parent||E,r=t.keyframes?ha:ga;if(s(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent;return t}(e),n)||this).vars,g=m.duration,v=m.delay,y=m.immediateRender,b=m.stagger,w=m.overwrite,T=m.keyframes,x=m.defaults,k=G(t)&&p(t[0])?[t]:yt(t);if(i._targets=k.length?X(k):L("GSAP target "+t+" not found. https://greensock.com",!j.nullTargetWarn)||[],i._ptLookup=[],i._overwrite=w,T||b||u(g)||u(v)){if(e=i.vars,(a=i.timeline=new Bt({data:"nested",defaults:x||{}})).kill(),a.parent=_assertThisInitialized(i),T)ga(a.vars.defaults,{ease:"none"}),T.forEach(function(t){return a.to(k,t,">")});else{if(l=k.length,_=b?Ma(b):N,r(b))for(f in b)~qt.indexOf(f)&&((c=c||{})[f]=b[f]);for(o=0;o<l;o++){for(f in h={},e)Xt.indexOf(f)<0&&(h[f]=e[f]);h.stagger=0,c&&_t(h,c),e.yoyoEase&&!e.repeat&&(h.yoyoEase=e.yoyoEase),d=k[o],h.duration=+Yt(g,_assertThisInitialized(i),o,d,k),h.delay=(+Yt(v,_assertThisInitialized(i),o,d,k)||0)-i._delay,!b&&1===l&&h.delay&&(i._delay=v=h.delay,i._start+=v,h.delay=0),a.to(d,h,_(o,d,k))}g=v=0}g||i.duration(g=a.duration())}else i.timeline=0;return!0===w&&(Lt=_assertThisInitialized(i),E.killTweensOf(k),Lt=0),(y||!g&&!T&&i._start===i.parent._time&&s(y)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(i))&&"nested"!==i.parent.data)&&(i._tTime=-B,i.render(Math.max(0,-v))),i}_inheritsLoose(Tween,O);var t=Tween.prototype;return t.render=function render(t,e,r){var n,i,a,s,o,u,h,l,f,p=this._time,d=this._tDur,c=this._dur,m=d-B<t&&0<=t?d:t<B?0:t;if(c){if(m!==this._tTime||!t||r||this._startAt&&this._zTime<0!=t<0){if(n=m,l=this.timeline,this._repeat){if(s=c+this._rDelay,c<(n=_(m%s))&&(n=c),(a=~~(m/s))&&a===m/s&&(n=c,a--),(u=this._yoyo&&1&a)&&(f=this._yEase,n=c-n),o=ct(this._tTime,s),n===p&&!r&&this._initted)return this;a!==o&&(!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(s*a,!0).invalidate()._lock=0))}if(!this._initted&&xa(this,n,r,e))return this._tTime=0,this;for(this._tTime=m,this._time=n,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(n/c),this._from&&(this.ratio=h=1-h),p||!n||e||wt(this,"onStart"),i=this._pt;i;)i.r(h,i.d),i=i._next;l&&l.render(t<0?t:!n&&u?-B:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),wt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&wt(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,r),!t&&c||!(t&&0<this._ts||!m&&this._ts<0)||pa(this,1),e||t<0&&!p||(wt(this,m===d?"onComplete":"onReverseComplete",!0),this._prom&&this._prom()))}}else!function _renderZeroDurationTween(t,e,r,n){var i,a=t._zTime<0?0:1,s=e<0?0:1,o=t._rDelay,u=0;if(o&&t._repeat&&(u=gt(0,t._tDur,e),ct(u,o)!==ct(t._tTime,o)&&(a=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),(t._initted||!xa(t,e,n,r))&&(s!==a||n||t._zTime===B||!e&&t._zTime)){for(t._zTime=e||(r?B:0),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=u,r||wt(t,"onStart"),i=t._pt;i;)i.r(s,i.d),i=i._next;!s&&t._startAt&&!t._onUpdate&&t._start&&t._startAt.render(e,!0,n),t._onUpdate&&!r&&wt(t,"onUpdate"),u&&t._repeat&&!r&&t.parent&&wt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===s&&(t.ratio&&pa(t,1),r||(wt(t,t.ratio?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}}(this,t,e,r);return this},t.targets=function targets(){return this._targets},t.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._act=this._lazy=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),O.prototype.invalidate.call(this)},t.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e)&&(this._lazy=0,this.parent))return _a(this);if(this.timeline)return this.timeline.killTweensOf(t,e,Lt&&!0!==Lt.vars.overwrite),this;var r,i,a,s,o,u,h,l=this._targets,f=t?yt(t):l,p=this._ptLookup,d=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,n=r===e.length;n&&r--&&t[r]===e[r];);return r<0}(l,f))return _a(this);for(r=this._op=this._op||[],"all"!==e&&(n(e)&&(o={},$(e,function(t){return o[t]=1}),e=o),e=function _addAliasesToVars(t,e){var r,n,i,a,s=t[0]?Y(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(n in r=_t({},e),o)if(n in r)for(i=(a=o[n].split(",")).length;i--;)r[a[i]]=r[n];return r}(l,e)),h=l.length;h--;)if(~f.indexOf(l[h]))for(o in i=p[h],"all"===e?(r[h]=e,s=i,a={}):(a=r[h]=r[h]||{},s=e),s)(u=i&&i[o])&&("kill"in u.d&&!0!==u.d.kill(o)||oa(this,u,"_pt"),delete i[o]),"all"!==a&&(a[o]=1);return this._initted&&!this._pt&&d&&_a(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return new Tween(t,ba(arguments,1))},Tween.delayedCall=function delayedCall(t,e,r,n){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:n})},Tween.fromTo=function fromTo(t,e,r){return new Tween(t,ba(arguments,2))},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return E.killTweensOf(t,e,r)},Tween}(zt);ga(jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),$("staggerTo,staggerFrom,staggerFromTo",function(r){jt[r]=function(){var t=new Bt,e=vt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function Pb(t,e,r){return t.setAttribute(e,r)}function Xb(t,e,r,n){n.mSet(t,e,n.m.call(n.tween,r,n.mt),n)}var Ut=function _setterPlain(t,e,r){return t[e]=r},Vt=function _setterFunc(t,e,r){return t[e](r)},$t=function _setterFuncWithParam(t,e,r,n){return t[e](n.fp,r)},Wt=function _getSetter(t,e){return o(t[e])?Vt:q(t[e])&&t.setAttribute?Pb:Ut},Qt=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4,e)},Zt=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Gt=function _renderComplexString(t,e){var r=e._pt,n="";if(!t&&e.b)n=e.b;else if(1===t&&e.e)n=e.e;else{for(;r;)n=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+n,r=r._next;n+=e.c}e.set(e.t,e.p,n,e)},Jt=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},Ht=function _addPluginModifier(t,e,r,n){for(var i,a=this._pt;a;)i=a._next,a.p===n&&a.modifier(t,e,r),a=i},Kt=function _killPropTweensOf(t){for(var e,r,n=this._pt;n;)r=n._next,n.p===t&&!n.op||n.op===t?oa(this,n,"_pt"):n.dep||(e=1),n=r;return!e},te=function _sortPropTweensByPriority(t){for(var e,r,n,i,a=t._pt;a;){for(e=a._next,r=n;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:i)?a._prev._next=a:n=a,(a._next=r)?r._prev=a:i=a,a=e}t._pt=n},ee=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=Xb,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,n,i,a,s,o,u){this.t=e,this.s=n,this.c=i,this.p=r,this.r=a||Qt,this.d=s||this,this.set=o||Ut,this.pr=u||0,(this._next=t)&&(t._prev=this)}$(dt+",parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert",function(t){st[t]=1,"on"===t.substr(0,2)&&(st[t+"Params"]=1)}),at.TweenMax=at.TweenLite=jt,at.TimelineLite=at.TimelineMax=Bt,E=new Bt({sortChildren:!1,defaults:z,autoRemoveChildren:!0,id:"root"}),j.stringFilter=jb;var re={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=o(t),n=e&&!r&&t.init?function(){this._props=[]}:t,i={init:N,render:Jt,add:It,kill:Kt,modifier:Ht,rawVars:0},a={targetTest:0,get:0,getSetter:Wt,aliases:{},register:0};if(Mt(),t!==n){if(ht[e])return;ga(n,ga(ka(t,i),a)),_t(n.prototype,_t(i,ka(t,a))),ht[n.prop=e]=n,t.targetTest&&(pt.push(n),st[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}M(e,n),t.register&&t.register(ne,n,ee)}(t)})},timeline:function timeline(t){return new Bt(t)},getTweensOf:function getTweensOf(t,e){return E.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){n(i)&&(i=yt(i)[0]);var a=Y(i||{}).get,s=e?fa:ea;return"native"===e&&(e=""),i?t?s((ht[t]&&ht[t].get||a)(i,t,e,r)):function(t,e,r){return s((ht[t]&&ht[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,n){if(1<(r=yt(r)).length){var i=r.map(function(t){return ne.quickSetter(t,e,n)}),a=i.length;return function(t){for(var e=a;e--;)i[e](t)}}r=r[0]||{};var s=ht[e],o=Y(r),u=s?function(t){var e=new s;c._pt=0,e.init(r,n?t+n:t,c,0,[r]),e.render(1,e),c._pt&&Jt(1,c)}:o.set(r,e);return s?u:function(t){return u(r,e,n?t+n:t,o,1)}},isTweening:function isTweening(t){return 0<E.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Ft(t.ease,z.ease)),ja(z,t||{})},config:function config(t){return ja(j,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,s=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ht[t]&&!at[t]&&L(i+" effect requires "+t+" plugin.")}),lt[i]=function(t,e){return n(yt(t),ga(e||{},a))},s&&(Bt.prototype[i]=function(t,e,n){return this.add(lt[i](t,r(e)?e:(n=e)&&{}),n)})},registerEase:function registerEase(t,e){Pt[t]=Ft(e)},parseEase:function parseEase(t,e){return arguments.length?Ft(t,e):Pt},getById:function getById(t){return E.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,n,i=new Bt(t);for(i.smoothChildTiming=s(t.smoothChildTiming),E.remove(i),i._dp=0,i._time=i._tTime=E._time,r=E._first;r;)n=r._next,!e&&!r._dur&&r instanceof jt&&r.vars.onComplete===r._targets[0]||wa(i,r,r._start-r._delay),r=n;return wa(E,i,0),i},utils:{wrap:function wrap(e,t,r){var n=t-e;return G(e)?Ta(e,wrap(0,e.length),t):Da(r,function(t){return(n+(t-e)%n)%n+e})},wrapYoyo:function wrapYoyo(e,t,r){var n=t-e,i=2*n;return G(e)?Ta(e,wrapYoyo(0,e.length-1),t):Da(r,function(t){return e+(n<(t=(i+(t-e)%i)%i)?i-t:t)})},distribute:Ma,random:Pa,snap:Oa,normalize:function normalize(t,e,r){return bt(t,e,0,1,r)},getUnit:Fa,clamp:function clamp(e,r,t){return Da(t,function(t){return gt(e,r,t)})},splitColor:fb,toArray:yt,mapRange:bt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Fa(t))}},interpolate:function interpolate(e,r,t,i){var a=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!a){var s,o,u,h,l,f=n(e),p={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(G(e)&&!G(r)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=_t(G(e)?[]:{},e));if(!u){for(s in r)It.call(p,e,s,"get",r[s]);a=function func(t){return Jt(t,p)||(f?e.p:e)}}}return Da(t,a)},shuffle:La},install:J,effects:lt,ticker:Ct,updateRoot:Bt.updateRoot,plugins:ht,globalTimeline:E,core:{PropTween:ee,globals:M,Tween:jt,Timeline:Bt,Animation:zt,getCache:Y}};$("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return re[t]=jt[t]}),Ct.add(Bt.updateRoot),c=re.to({},{duration:0});function _b(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function bc(t,a){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(n(i)&&(e={},$(i,function(t){return e[t]=1}),i=e),a){for(r in e={},i)e[r]=a(i[r]);i=e}!function _addModifiers(t,e){var r,n,i,a=t._targets;for(r in e)for(n=a.length;n--;)(i=(i=t._ptLookup[n][r])&&i.d)&&(i._pt&&(i=_b(i,r)),i&&i.modifier&&i.modifier(e[r],t,a[n],r))}(t,i)}}}}var ne=re.registerPlugin({name:"attr",init:function init(t,e,r,n,i){for(var a in e)this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],n,i,0,0,a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},bc("roundProps",Na),bc("modifiers"),bc("snap",Oa))||re;jt.version=Bt.version=ne.version="3.1.1",f=1,t()&&Mt();function Nc(t,e){return e.set(e.t,e.p,~~(1e3*(e.s+e.c*t))/1e3+e.u,e)}function Oc(t,e){return e.set(e.t,e.p,1===t?e.e:~~(1e3*(e.s+e.c*t))/1e3+e.u,e)}function Pc(t,e){return e.set(e.t,e.p,t?~~(1e3*(e.s+e.c*t))/1e3+e.u:e.b,e)}function Qc(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function Rc(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Sc(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Tc(t,e,r){return t.style[e]=r}function Uc(t,e,r){return t.style.setProperty(e,r)}function Vc(t,e,r){return t._gsap[e]=r}function Wc(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Xc(t,e,r,n,i){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(i,a)}function Yc(t,e,r,n,i){var a=t._gsap;a[e]=r,a.renderTransform(i,a)}function ad(t,e){var r=ae.createElementNS?ae.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ae.createElement(t);return r.style?r:ae.createElement(t)}function bd(t,e,r){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(Ee,"-$1").toLowerCase())||n.getPropertyValue(e)||!r&&bd(t,Xe(e)||e,1)||""}function ed(){!function _windowExists(){return"undefined"!=typeof window}()||(ie=window,ae=ie.document,se=ae.documentElement,ue=ad("div")||{style:{}},he=ad("div"),Ne=Xe(Ne),Ye=Xe(Ye),ue.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fe=!!Xe("perspective"),oe=1)}function gd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function hd(e){var r;try{r=e.getBBox()}catch(t){r=function _getBBoxHack(t){var e,r=ad("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,a=this.style.cssText;if(se.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=_getBBoxHack}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i?n.insertBefore(this,i):n.appendChild(this),se.removeChild(r),this.style.cssText=a,e}.call(e,!0)}return!r||r.width||r.x||r.y?r:{x:+gd(e,["x","cx","x1"])||0,y:+gd(e,["y","cy","y1"])||0,width:0,height:0}}function id(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!hd(t))}function jd(t,e){if(e){var r=t.style;e in De&&(e=Ne),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Ee,"-$1").toLowerCase())):r.removeAttribute(e)}}function kd(t,e,r,n,i,a){var s=new ee(t._pt,e,r,0,1,a?Sc:Rc);return(t._pt=s).b=n,s.e=i,t._props.push(r),s}function md(t,e,r,n){var i,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=ue.style,f=Be.test(e),p="svg"===t.tagName.toLowerCase(),d=(p?"client":"offset")+(f?"Width":"Height"),c="px"===n;return n===h||!u||je[n]||je[h]?u:(o=t.getCTM&&id(t),"%"===n&&(De[e]||~e.indexOf("adius"))?_(u/(o?t.getBBox()[f?"width":"height"]:t[d])*100):(l[f?"width":"height"]=100+(c?h:n),a=~e.indexOf("adius")||"em"===n&&t.appendChild&&!p?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==ae&&a.appendChild||(a=ae.body),(s=a._gsap)&&"%"===n&&s.width&&f&&s.time===Ct.time?_(u/s.width*100):(a===t&&(l.position="static"),a.appendChild(ue),i=ue[d],a.removeChild(ue),l.position="absolute",f&&"%"===n&&((s=Y(a)).time=Ct.time,s.width=a[d]),_(c?i*u/100:100/i*u))))}function nd(t,e,r,n){var i;return oe||ed(),e in Ie&&"transform"!==e&&~(e=Ie[e]).indexOf(",")&&(e=e.split(",")[0]),De[e]&&"transform"!==e?(i=Qe(t,n),i="transformOrigin"!==e?i[e]:Ze(bd(t,Ye))+i.zOrigin+"px"):(i=t.style[e])&&"auto"!==i&&!n&&!~(i+"").indexOf("calc(")||(i=Ve[e]&&Ve[e](t,e,r)||bd(t,e)||Z(t,e)||("opacity"===e?1:0)),r&&!~(i+"").indexOf(" ")?md(t,e,i,r)+r:i}function od(t,e,r,n){var i,a,s,o,u,h,l,f,p,d,_,c,m=new ee(this._pt,t.style,e,0,1,Gt),g=0,v=0;if(m.b=r,m.e=n,r+="","auto"===(n+="")&&(t.style[e]=n,n=bd(t,e)||n,t.style[e]=r),jb(i=[r,n]),n=i[1],!!(h=(r=i[0]).indexOf("rgba("))!=!!(l=n.indexOf("rgba("))&&(h?r=r.substr(h)+" "+r.substr(0,h-1):n=n.substr(l)+" "+n.substr(0,l-1)),s=r.match(ze)||[],(n.match(ze)||[]).length){for(;a=ze.exec(n);)l=a[0],p=n.substring(g,a.index),u?u=(u+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(u=1),l!==(h=s[v++]||"")&&(o=parseFloat(h)||0,_=h.substr((o+"").length),(c="="===l.charAt(1)?+(l.charAt(0)+"1"):0)&&(l=l.substr(2)),f=parseFloat(l),d=l.substr((f+"").length),g=ze.lastIndex-d.length,d||(d=d||j.units[e]||_,g===n.length&&(n+=d,m.e+=d)),_!==d&&(o=md(t,e,h,d)||0),m._pt={_next:m._pt,p:p||1===v?p:",",s:o,c:c?c*f:f-o,m:u&&u<4?Math.round:0});m.c=g<n.length?n.substring(g,n.length):""}else m.r="display"===e&&"none"===n?Sc:Rc;return nt.test(n)&&(m.e=0),this._pt=m}function qd(t){var e=t.split(" "),r=e[0],n=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==n&&"right"!==n||(t=r,r=n,n=t),e[0]=Ue[r]||r,e[1]=Ue[n]||n,e.join(" ")}function rd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,n,i,a=e.t,s=a.style,o=e.u;if("all"===o||!0===o)s.cssText="",n=1;else for(i=(o=o.split(",")).length;-1<--i;)r=o[i],De[r]&&(n=1,r="transformOrigin"===r?Ye:Ne),jd(a,r);n&&(jd(a,Ne),(n=a._gsap)&&(n.svg&&a.removeAttribute("transform"),Qe(a,1)))}}function vd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function wd(t){var e=bd(t,Ne);return vd(e)?$e:e.substr(7).match(tt).map(_)}function xd(t,e){var r,n,i,a,s=t._gsap,o=t.style,u=wd(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(i=t.transform.baseVal.consolidate().matrix).a,i.b,i.c,i.d,i.e,i.f]).join(",")?$e:u:(u!==$e||t.offsetParent||t===se||s.svg||(i=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,n=t.nextSibling,se.appendChild(t)),u=wd(t),i?o.display=i:jd(t,"display"),a&&(n?r.insertBefore(t,n):r?r.appendChild(t):se.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function yd(t,e,r,n,i,a){var s,o,u,h=t._gsap,l=i||xd(t,!0),f=h.xOrigin||0,p=h.yOrigin||0,d=h.xOffset||0,_=h.yOffset||0,c=l[0],m=l[1],g=l[2],v=l[3],y=l[4],b=l[5],w=e.split(" "),T=parseFloat(w[0])||0,x=parseFloat(w[1])||0;r?l!==$e&&(o=c*v-m*g)&&(u=T*(-m/o)+x*(c/o)-(c*b-m*y)/o,T=T*(v/o)+x*(-g/o)+(g*b-v*y)/o,x=u):(T=(s=hd(t)).x+(~w[0].indexOf("%")?T/100*s.width:T),x=s.y+(~(w[1]||w[0]).indexOf("%")?x/100*s.height:x)),n||!1!==n&&h.smooth?(y=T-f,b=x-p,h.xOffset=d+(y*c+b*g)-y,h.yOffset=_+(y*m+b*v)-b):h.xOffset=h.yOffset=0,h.xOrigin=T,h.yOrigin=x,h.smooth=!!n,h.origin=e,h.originIsAbsolute=!!r,t.style[Ye]="0px 0px",a&&(kd(a,h,"xOrigin",f,T),kd(a,h,"yOrigin",p,x),kd(a,h,"xOffset",d,h.xOffset),kd(a,h,"yOffset",_,h.yOffset))}function Bd(t,e,r){var n=Fa(e);return _(parseFloat(e)+parseFloat(md(t,"x",r+"px",n)))+n}function Id(t,e,r,i,a,s){var o,u,h=360,l=n(a),f=parseFloat(a)*(l&&~a.indexOf("rad")?Ae:1),p=s?f*s:f-i,d=i+p+"deg";return l&&("short"===(o=a.split("_")[1])&&(p%=h)!==p%180&&(p+=p<0?h:-h),"cw"===o&&p<0?p=(p+36e9)%h-~~(p/h)*h:"ccw"===o&&0<p&&(p=(p-36e9)%h-~~(p/h)*h)),t._pt=u=new ee(t._pt,e,r,i,p,Oc),u.e=d,u.u="deg",t._props.push(r),u}function Jd(t,e,r){var n,i,a,s,o,u,h,l=he.style,f=r._gsap;for(i in l.cssText=getComputedStyle(r).cssText+";position:absolute;display:block;",l[Ne]=e,ae.body.appendChild(he),n=Qe(he,1),De)(a=f[i])!==(s=n[i])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(i)<0&&(o=Fa(a)!==(h=Fa(s))?md(r,i,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ee(t._pt,f,i,o,u-o,Nc),t._pt.u=h||0,t._props.push(i));ae.body.removeChild(he)}var ie,ae,se,oe,ue,he,le,fe,pe=Pt.Power0,de=Pt.Power1,_e=Pt.Power2,ce=Pt.Power3,me=Pt.Power4,ge=Pt.Linear,ve=Pt.Quad,ye=Pt.Cubic,be=Pt.Quart,we=Pt.Quint,Te=Pt.Strong,xe=Pt.Elastic,ke=Pt.Back,Oe=Pt.SteppedEase,Ce=Pt.Bounce,Me=Pt.Sine,Pe=Pt.Expo,Se=Pt.Circ,De={},Ae=180/Math.PI,Fe=Math.PI/180,Re=Math.atan2,Ee=/([A-Z])/g,ze=/[-+=\.]*\d+[\.e-]*\d*[a-z%]*/g,Be=/(?:left|right|width|margin|padding|x)/i,Le=/[\s,\(]\S/,Ie={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ne="transform",Ye=Ne+"Origin",qe="O,Moz,ms,Ms,Webkit".split(","),Xe=function _checkPropPrefix(t,e){var r=(e||ue).style,n=5;if(t in r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(qe[n]+t in r););return n<0?null:(3===n?"ms":0<=n?qe[n]:"")+t},je={deg:1,rad:1,turn:1},Ue={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ve={clearProps:function clearProps(t,e,r,n,i){if("isFromStart"!==i.data){var a=t._pt=new ee(t._pt,e,r,0,0,rd);return a.u=n,a.pr=-10,a.tween=i,t._props.push(r),1}}},$e=[1,0,0,1,0,0],We={},Qe=function _parseTransform(t,e){var r=t._gsap||new Et(t);if("x"in r&&!e&&!r.uncache)return r;var n,i,a,s,o,u,h,l,f,p,d,c,m,g,v,y,b,w,T,x,k,O,C,M,P,S,D,A,F,R,E=t.style,z=r.scaleX<0,B=r.xOrigin||0,L=r.yOrigin||0,I="deg",N=bd(t,Ye)||"0";return n=i=a=u=h=l=f=p=d=0,s=o=1,r.svg=!(!t.getCTM||!id(t)),c=xd(t,r.svg),r.svg&&yd(t,N,r.originIsAbsolute,!1!==r.smooth,c),c!==$e&&(y=c[0],b=c[1],w=c[2],T=c[3],n=x=c[4],i=k=c[5],6===c.length?(s=Math.sqrt(y*y+b*b),o=Math.sqrt(T*T+w*w),u=y||b?Re(b,y)*Ae:0,f=w||T?Re(w,T)*Ae+u:0,r.svg&&(n-=B-(B*y+L*w),i-=L-(B*b+L*T))):(R=c[6],A=c[7],P=c[8],S=c[9],D=c[10],F=c[11],n=c[12],i=c[13],a=c[14],h=(m=Re(R,D))*Ae,m&&(O=x*(g=Math.cos(-m))+P*(v=Math.sin(-m)),C=k*g+S*v,M=R*g+D*v,P=x*-v+P*g,S=k*-v+S*g,D=R*-v+D*g,F=A*-v+F*g,x=O,k=C,R=M),l=(m=Re(-w,D))*Ae,m&&(g=Math.cos(-m),F=T*(v=Math.sin(-m))+F*g,y=O=y*g-P*v,b=C=b*g-S*v,w=M=w*g-D*v),u=(m=Re(b,y))*Ae,m&&(O=y*(g=Math.cos(m))+b*(v=Math.sin(m)),C=x*g+k*v,b=b*g-y*v,k=k*g-x*v,y=O,x=C),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=_(Math.sqrt(y*y+b*b+w*w)),o=_(Math.sqrt(k*k+R*R)),m=Re(x,k),f=2e-4<Math.abs(m)?m*Ae:0,d=F?1/(F<0?-F:F):0),r.svg&&(c=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!vd(bd(t,Ne)),c&&t.setAttribute("transform",c))),90<Math.abs(f)&&Math.abs(f)<270&&(z?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=((r.xPercent=n&&Math.round(t.offsetWidth/2)===Math.round(-n)?-50:0)?0:n)+"px",r.y=((r.yPercent=i&&Math.round(t.offsetHeight/2)===Math.round(-i)?-50:0)?0:i)+"px",r.z=a+"px",r.scaleX=_(s),r.scaleY=_(o),r.rotation=_(u)+I,r.rotationX=_(h)+I,r.rotationY=_(l)+I,r.skewX=f+I,r.skewY=p+I,r.transformPerspective=d+"px",(r.zOrigin=parseFloat(N.split(" ")[2])||0)&&(E[Ye]=Ze(N)),r.xOffset=r.yOffset=0,r.force3D=j.force3D,r.renderTransform=r.svg?er:fe?tr:Ge,r.uncache=0,r},Ze=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},Ge=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,tr(t,e)},Je="0deg",He="0px",Ke=") ",tr=function _renderCSSTransforms(t,e){var r=e||this,n=r.xPercent,i=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,p=r.skewY,d=r.scaleX,_=r.scaleY,c=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",b="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Je||h!==Je)){var w,T=parseFloat(h)*Fe,x=Math.sin(T),k=Math.cos(T);T=parseFloat(l)*Fe,w=Math.cos(T),a=Bd(g,a,x*w*-v),s=Bd(g,s,-Math.sin(T)*-v),o=Bd(g,o,k*w*-v+v)}c!==He&&(y+="perspective("+c+Ke),(n||i)&&(y+="translate("+n+"%, "+i+"%) "),!b&&a===He&&s===He&&o===He||(y+=o!==He||b?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Ke),u!==Je&&(y+="rotate("+u+Ke),h!==Je&&(y+="rotateY("+h+Ke),l!==Je&&(y+="rotateX("+l+Ke),f===Je&&p===Je||(y+="skew("+f+", "+p+Ke),1===d&&1===_||(y+="scale("+d+", "+_+Ke),g.style[Ne]=y||"translate(0, 0)"},er=function _renderSVGTransforms(t,e){var r,n,i,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,p=o.rotation,d=o.skewX,c=o.skewY,m=o.scaleX,g=o.scaleY,v=o.target,y=o.xOrigin,b=o.yOrigin,w=o.xOffset,T=o.yOffset,x=o.forceCSS,k=parseFloat(l),O=parseFloat(f);p=parseFloat(p),d=parseFloat(d),(c=parseFloat(c))&&(d+=c=parseFloat(c),p+=c),p||d?(p*=Fe,d*=Fe,r=Math.cos(p)*m,n=Math.sin(p)*m,i=Math.sin(p-d)*-g,a=Math.cos(p-d)*g,d&&(c*=Fe,s=Math.tan(d-c),i*=s=Math.sqrt(1+s*s),a*=s,c&&(s=Math.tan(c),r*=s=Math.sqrt(1+s*s),n*=s)),r=_(r),n=_(n),i=_(i),a=_(a)):(r=m,a=g,n=i=0),(k&&!~(l+"").indexOf("px")||O&&!~(f+"").indexOf("px"))&&(k=md(v,"x",l,"px"),O=md(v,"y",f,"px")),(y||b||w||T)&&(k=_(k+y-(y*r+b*i)+w),O=_(O+b-(y*n+b*a)+T)),(u||h)&&(s=v.getBBox(),k=_(k+u/100*s.width),O=_(O+h/100*s.height)),s="matrix("+r+","+n+","+i+","+a+","+k+","+O+")",v.setAttribute("transform",s),x&&(v.style[Ne]=s)};$("padding,margin,Width,Radius",function(e,r){var t="Right",n="Bottom",i="Left",o=(r<3?["Top",t,n,i]:["Top"+i,"Top"+t,n+t,n+i]).map(function(t){return r<2?e+t:"border"+t+e});Ve[1<r?"border"+e:e]=function(e,t,r,n,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return nd(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(n+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,i)}});var rr,nr,ir,ar={name:"css",register:ed,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,n,i){var a,s,o,u,h,l,f,p,d,_,c,m,g,v,y,b=this._props,w=t.style;for(f in oe||ed(),e)if("autoRound"!==f&&(s=e[f],!ht[f]||!Eb(f,e,r,n,t,i)))if(h=typeof s,l=Ve[f],"function"===h&&(h=typeof(s=s.call(r,n,t,i))),"string"===h&&~s.indexOf("random(")&&(s=Wa(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))this.add(w,"setProperty",getComputedStyle(t).getPropertyValue(f)+"",s+"",n,i,0,0,f);else{if(a=nd(t,f),u=parseFloat(a),(_="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in Ie&&("autoAlpha"===f&&(1===u&&"hidden"===nd(t,"visibility")&&o&&(u=0),kd(this,w,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=Ie[f]).indexOf(",")&&(f=f.split(",")[0])),c=f in De)if(m||((g=t._gsap).renderTransform||Qe(t),v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new ee(this._pt,w,Ne,0,1,g.renderTransform,g,0,-1)).dep=1),"scale"===f)this._pt=new ee(this._pt,g,"scaleY",g.scaleY,_?_*o:o-g.scaleY),b.push("scaleY",f),f+="X";else{if("transformOrigin"===f){s=qd(s),g.svg?yd(t,s,0,v,0,this):((d=parseFloat(s.split(" ")[2]))!==g.zOrigin&&kd(this,g,"zOrigin",g.zOrigin,d),kd(this,w,f,Ze(a),Ze(s)));continue}if("svgOrigin"===f){yd(t,s,1,v,0,this);continue}if(f in We){Id(this,g,f,u,s,_);continue}if("smoothOrigin"===f){kd(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Jd(this,s,t);continue}}else f in w||(f=Xe(f)||f);if(c||(o||0===o)&&(u||0===u)&&!Le.test(s)&&f in w)(p=(a+"").substr((u+"").length))!==(d=(s+"").substr((o+"").length)||(f in j.units?j.units[f]:p))&&(u=md(t,f,a,d)),this._pt=new ee(this._pt,c?g:w,f,u,_?_*o:o-u,"px"!==d||!1===e.autoRound||c?Nc:Qc),this._pt.u=d||0,p!==d&&(this._pt.b=a,this._pt.r=Pc);else if(f in w)od.call(this,t,f,a,s);else{if(!(f in t)){K(f,s);continue}this.add(t,f,t[f],s,n,i)}b.push(f)}y&&te(this)},get:nd,aliases:Ie,getSetter:function getSetter(t,e,r){return(e=Ie[e]||e)in De&&e!==Ye&&(t._gsap.x||nd(t,"x"))?r&&le===r?"scale"===e?Wc:Vc:(le=r||{})&&("scale"===e?Xc:Yc):t.style&&!q(t.style[e])?Tc:~e.indexOf("-")?Uc:Wt(t,e)}};ne.utils.checkPrefix=Xe,ir=$((rr="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(nr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){De[t]=1}),$(nr,function(t){j.units[t]="deg",We[t]=1}),Ie[ir[13]]=rr+","+nr,$("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");Ie[e[1]]=ir[e[0]]}),$("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){j.units[t]="px"}),ne.registerPlugin(ar);var sr=ne.registerPlugin(ar)||ne,or=sr.core.Tween;e.Back=ke,e.Bounce=Ce,e.CSSPlugin=ar,e.Circ=Se,e.Cubic=ye,e.Elastic=xe,e.Expo=Pe,e.Linear=ge,e.Power0=pe,e.Power1=de,e.Power2=_e,e.Power3=ce,e.Power4=me,e.Quad=ve,e.Quart=be,e.Quint=we,e.Sine=Me,e.SteppedEase=Oe,e.Strong=Te,e.TimelineLite=Bt,e.TimelineMax=Bt,e.TweenLite=jt,e.TweenMax=or,e.default=sr,e.gsap=sr;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});
//# sourceMappingURL=gsap.min.js.map

gsap.set("svg", { visibility: "visible" });
gsap.to("#headStripe", {
  y: 0.5,
  rotation: 1,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut",
  duration: 1 });

gsap.to("#spaceman", {
  y: 0.5,
  rotation: 1,
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut",
  duration: 1 });

gsap.to("#craterSmall", {
  x: -3,
  yoyo: true,
  repeat: -1,
  duration: 1,
  ease: "sine.inOut" });

gsap.to("#craterBig", {
  x: 3,
  yoyo: true,
  repeat: -1,
  duration: 1,
  ease: "sine.inOut" });

gsap.to("#planet", {
  rotation: -2,
  yoyo: true,
  repeat: -1,
  duration: 1,
  ease: "sine.inOut",
  transformOrigin: "50% 50%" });


gsap.to("#starsBig g", {
  rotation: "random(-30,30)",
  transformOrigin: "50% 50%",
  yoyo: true,
  repeat: -1,
  ease: "sine.inOut" });

gsap.fromTo(
"#starsSmall g",
{ scale: 0, transformOrigin: "50% 50%" },
{ scale: 1, transformOrigin: "50% 50%", yoyo: true, repeat: -1, stagger: 0.1 });

gsap.to("#circlesSmall circle", {
  y: -4,
  yoyo: true,
  duration: 1,
  ease: "sine.inOut",
  repeat: -1 });

gsap.to("#circlesBig circle", {
  y: -2,
  yoyo: true,
  duration: 1,
  ease: "sine.inOut",
  repeat: -1 });


gsap.set("#glassShine", { x: -68 });

gsap.to("#glassShine", {
  x: 80,
  duration: 2,
  rotation: -30,
  ease: "expo.inOut",
  transformOrigin: "50% 50%",
  repeat: -1,
  repeatDelay: 8,
  delay: 2 });


// const burger = document.querySelector('.burger');
// const nav = document.querySelector('nav');

// burger.addEventListener('click', e => {
//   burger.dataset.state === 'closed' ? burger.dataset.state = "open" : burger.dataset.state = "closed";
//   nav.dataset.state === "closed" ? nav.dataset.state = "open" : nav.dataset.state = "closed";
// });
/*!
 * Vue.js v2.3.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){"use strict";function e(e){return void 0===e||null===e}function t(e){return void 0!==e&&null!==e}function n(e){return!0===e}function r(e){return"string"==typeof e||"number"==typeof e}function i(e){return null!==e&&"object"==typeof e}function o(e){return"[object Object]"===Ai.call(e)}function a(e){return"[object RegExp]"===Ai.call(e)}function s(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function c(e){var t=parseFloat(e);return isNaN(t)?e:t}function u(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function l(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function f(e,t){return Si.call(e,t)}function p(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}function d(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function v(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function h(e,t){for(var n in t)e[n]=t[n];return e}function m(e){for(var t={},n=0;n<e.length;n++)e[n]&&h(t,e[n]);return t}function g(){}function y(e,t){var n=i(e),r=i(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{return JSON.stringify(e)===JSON.stringify(t)}catch(n){return e===t}}function _(e,t){for(var n=0;n<e.length;n++)if(y(e[n],t))return n;return-1}function b(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function $(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function x(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function w(e){if(!Fi.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function C(e,t,n){if(Pi.errorHandler)Pi.errorHandler.call(null,e,t,n);else{if(!Ui||"undefined"==typeof console)throw e;console.error(e)}}function k(e){return"function"==typeof e&&/native code/.test(e.toString())}function A(e){oo.target&&ao.push(oo.target),oo.target=e}function O(){oo.target=ao.pop()}function S(e,t){e.__proto__=t}function T(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];x(e,o,t[o])}}function E(e,t){if(i(e)){var n;return f(e,"__ob__")&&e.__ob__ instanceof fo?n=e.__ob__:lo.shouldConvert&&!eo()&&(Array.isArray(e)||o(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new fo(e)),t&&n&&n.vmCount++,n}}function j(e,t,n,r){var i=new oo,o=Object.getOwnPropertyDescriptor(e,t);if(!o||!1!==o.configurable){var a=o&&o.get,s=o&&o.set,c=E(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=a?a.call(e):n;return oo.target&&(i.depend(),c&&c.dep.depend(),Array.isArray(t)&&I(t)),t},set:function(t){var r=a?a.call(e):n;t===r||t!==t&&r!==r||(s?s.call(e,t):n=t,c=E(t),i.notify())}})}}function N(e,t,n){if(Array.isArray(e)&&"number"==typeof t)return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(f(e,t))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(j(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function L(e,t){if(Array.isArray(e)&&"number"==typeof t)return void e.splice(t,1);var n=e.__ob__;e._isVue||n&&n.vmCount||f(e,t)&&(delete e[t],n&&n.dep.notify())}function I(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&I(t)}function D(e,t){if(!t)return e;for(var n,r,i,a=Object.keys(t),s=0;s<a.length;s++)n=a[s],r=e[n],i=t[n],f(e,n)?o(r)&&o(i)&&D(r,i):N(e,n,i);return e}function M(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function P(e,t){var n=Object.create(e||null);return t?h(n,t):n}function R(e){var t=e.props;if(t){var n,r,i,a={};if(Array.isArray(t))for(n=t.length;n--;)"string"==typeof(r=t[n])&&(i=Ti(r),a[i]={type:null});else if(o(t))for(var s in t)r=t[s],i=Ti(s),a[i]=o(r)?r:{type:r};e.props=a}}function F(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function B(e,t,n){function r(r){var i=po[r]||vo;c[r]=i(e[r],t[r],n,r)}"function"==typeof t&&(t=t.options),R(t),F(t);var i=t.extends;if(i&&(e=B(e,i,n)),t.mixins)for(var o=0,a=t.mixins.length;o<a;o++)e=B(e,t.mixins[o],n);var s,c={};for(s in e)r(s);for(s in t)f(e,s)||r(s);return c}function H(e,t,n,r){if("string"==typeof n){var i=e[t];if(f(i,n))return i[n];var o=Ti(n);if(f(i,o))return i[o];var a=Ei(o);if(f(i,a))return i[a];var s=i[n]||i[o]||i[a];return s}}function U(e,t,n,r){var i=t[e],o=!f(n,e),a=n[e];if(J(Boolean,i.type)&&(o&&!f(i,"default")?a=!1:J(String,i.type)||""!==a&&a!==ji(e)||(a=!0)),void 0===a){a=V(r,i,e);var s=lo.shouldConvert;lo.shouldConvert=!0,E(a),lo.shouldConvert=s}return a}function V(e,t,n){if(f(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof r&&"Function"!==z(t.type)?r.call(e):r}}function z(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function J(e,t){if(!Array.isArray(t))return z(t)===z(e);for(var n=0,r=t.length;n<r;n++)if(z(t[n])===z(e))return!0;return!1}function K(e){return new ho(void 0,void 0,void 0,String(e))}function q(e){var t=new ho(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isCloned=!0,t}function W(e){for(var t=e.length,n=new Array(t),r=0;r<t;r++)n[r]=q(e[r]);return n}function Z(e){function t(){var e=arguments,n=t.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=0;r<n.length;r++)n[r].apply(null,e)}return t.fns=e,t}function G(t,n,r,i,o){var a,s,c,u;for(a in t)s=t[a],c=n[a],u=_o(a),e(s)||(e(c)?(e(s.fns)&&(s=t[a]=Z(s)),r(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in n)e(t[a])&&(u=_o(a),i(u.name,n[a],u.capture))}function Y(r,i,o){function a(){o.apply(this,arguments),l(s.fns,a)}var s,c=r[i];e(c)?s=Z([a]):t(c.fns)&&n(c.merged)?(s=c,s.fns.push(a)):s=Z([c,a]),s.merged=!0,r[i]=s}function Q(n,r,i){var o=r.options.props;if(!e(o)){var a={},s=n.attrs,c=n.props;if(t(s)||t(c))for(var u in o){var l=ji(u);X(a,c,u,l,!0)||X(a,s,u,l,!1)}return a}}function X(e,n,r,i,o){if(t(n)){if(f(n,r))return e[r]=n[r],o||delete n[r],!0;if(f(n,i))return e[r]=n[i],o||delete n[i],!0}return!1}function ee(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function te(e){return r(e)?[K(e)]:Array.isArray(e)?ne(e):void 0}function ne(n,i){var o,a,s,c=[];for(o=0;o<n.length;o++)a=n[o],e(a)||"boolean"==typeof a||(s=c[c.length-1],Array.isArray(a)?c.push.apply(c,ne(a,(i||"")+"_"+o)):r(a)?t(s)&&t(s.text)?s.text+=String(a):""!==a&&c.push(K(a)):t(a.text)&&t(s)&&t(s.text)?c[c.length-1]=K(s.text+a.text):(t(a.tag)&&e(a.key)&&t(i)&&(a.key="__vlist"+i+"_"+o+"__"),c.push(a)));return c}function re(e,t){return i(e)?t.extend(e):e}function ie(r,o,a){if(n(r.error)&&t(r.errorComp))return r.errorComp;if(t(r.resolved))return r.resolved;if(n(r.loading)&&t(r.loadingComp))return r.loadingComp;if(!t(r.contexts)){var s=r.contexts=[a],c=!0,u=function(){for(var e=0,t=s.length;e<t;e++)s[e].$forceUpdate()},l=b(function(e){r.resolved=re(e,o),c||u()}),f=b(function(e){t(r.errorComp)&&(r.error=!0,u())}),p=r(l,f);return i(p)&&("function"==typeof p.then?e(r.resolved)&&p.then(l,f):t(p.component)&&"function"==typeof p.component.then&&(p.component.then(l,f),t(p.error)&&(r.errorComp=re(p.error,o)),t(p.loading)&&(r.loadingComp=re(p.loading,o),0===p.delay?r.loading=!0:setTimeout(function(){e(r.resolved)&&e(r.error)&&(r.loading=!0,u())},p.delay||200)),t(p.timeout)&&setTimeout(function(){f(null)},p.timeout))),c=!1,r.loading?r.loadingComp:r.resolved}r.contexts.push(a)}function oe(e){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];if(t(r)&&t(r.componentOptions))return r}}function ae(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&ue(e,t)}function se(e,t,n){n?go.$once(e,t):go.$on(e,t)}function ce(e,t){go.$off(e,t)}function ue(e,t,n){go=e,G(t,n||{},se,ce,e)}function le(e,t){var n={};if(!e)return n;for(var r=[],i=0,o=e.length;i<o;i++){var a=e[i];if(a.context!==t&&a.functionalContext!==t||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(fe)||(n.default=r),n}function fe(e){return e.isComment||" "===e.text}function pe(e){for(var t={},n=0;n<e.length;n++)t[e[n][0]]=e[n][1];return t}function de(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function ve(e,t,n){e.$el=t,e.$options.render||(e.$options.render=yo),_e(e,"beforeMount");var r;return r=function(){e._update(e._render(),n)},e._watcher=new So(e,r,g),n=!1,null==e.$vnode&&(e._isMounted=!0,_e(e,"mounted")),e}function he(e,t,n,r,i){var o=!!(i||e.$options._renderChildren||r.data.scopedSlots||e.$scopedSlots!==Ri);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,t&&e.$options.props){lo.shouldConvert=!1;for(var a=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=U(u,e.$options.props,t,e)}lo.shouldConvert=!0,e.$options.propsData=t}if(n){var l=e.$options._parentListeners;e.$options._parentListeners=n,ue(e,n,l)}o&&(e.$slots=le(i,r.context),e.$forceUpdate())}function me(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function ge(e,t){if(t){if(e._directInactive=!1,me(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)ge(e.$children[n]);_e(e,"activated")}}function ye(e,t){if(!(t&&(e._directInactive=!0,me(e))||e._inactive)){e._inactive=!0;for(var n=0;n<e.$children.length;n++)ye(e.$children[n]);_e(e,"deactivated")}}function _e(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(e)}catch(n){C(n,e,t+" hook")}e._hasHookEvent&&e.$emit("hook:"+t)}function be(){$o.length=xo.length=0,wo={},Co=ko=!1}function $e(){ko=!0;var e,t;for($o.sort(function(e,t){return e.id-t.id}),Ao=0;Ao<$o.length;Ao++)e=$o[Ao],t=e.id,wo[t]=null,e.run();var n=xo.slice(),r=$o.slice();be(),Ce(n),xe(r),to&&Pi.devtools&&to.emit("flush")}function xe(e){for(var t=e.length;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&_e(r,"updated")}}function we(e){e._inactive=!1,xo.push(e)}function Ce(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,ge(e[t],!0)}function ke(e){var t=e.id;if(null==wo[t]){if(wo[t]=!0,ko){for(var n=$o.length-1;n>=0&&$o[n].id>e.id;)n--;$o.splice(Math.max(n,Ao)+1,0,e)}else $o.push(e);Co||(Co=!0,ro($e))}}function Ae(e){To.clear(),Oe(e,To)}function Oe(e,t){var n,r,o=Array.isArray(e);if((o||i(e))&&Object.isExtensible(e)){if(e.__ob__){var a=e.__ob__.dep.id;if(t.has(a))return;t.add(a)}if(o)for(n=e.length;n--;)Oe(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)Oe(e[r[n]],t)}}function Se(e,t,n){Eo.get=function(){return this[t][n]},Eo.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Eo)}function Te(e){e._watchers=[];var t=e.$options;t.props&&Ee(e,t.props),t.methods&&Me(e,t.methods),t.data?je(e):E(e._data={},!0),t.computed&&Le(e,t.computed),t.watch&&Pe(e,t.watch)}function Ee(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;lo.shouldConvert=o;for(var a in t)!function(o){i.push(o);var a=U(o,t,n,e);j(r,o,a),o in e||Se(e,"_props",o)}(a);lo.shouldConvert=!0}function je(e){var t=e.$options.data;t=e._data="function"==typeof t?Ne(t,e):t||{},o(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,i=n.length;i--;)r&&f(r,n[i])||$(n[i])||Se(e,"_data",n[i]);E(t,!0)}function Ne(e,t){try{return e.call(t)}catch(e){return C(e,t,"data()"),{}}}function Le(e,t){var n=e._computedWatchers=Object.create(null);for(var r in t){var i=t[r],o="function"==typeof i?i:i.get;n[r]=new So(e,o,g,jo),r in e||Ie(e,r,i)}}function Ie(e,t,n){"function"==typeof n?(Eo.get=De(t),Eo.set=g):(Eo.get=n.get?!1!==n.cache?De(t):n.get:g,Eo.set=n.set?n.set:g),Object.defineProperty(e,t,Eo)}function De(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),oo.target&&t.depend(),t.value}}function Me(e,t){e.$options.props;for(var n in t)e[n]=null==t[n]?g:d(t[n],e)}function Pe(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Re(e,n,r[i]);else Re(e,n,r)}}function Re(e,t,n){var r;o(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function Fe(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}function Be(e){var t=He(e.$options.inject,e);t&&Object.keys(t).forEach(function(n){j(e,n,t[n])})}function He(e,t){if(e){for(var n=Array.isArray(e),r=Object.create(null),i=n?e:no?Reflect.ownKeys(e):Object.keys(e),o=0;o<i.length;o++)for(var a=i[o],s=n?a:e[a],c=t;c;){if(c._provided&&s in c._provided){r[a]=c._provided[s];break}c=c.$parent}return r}}function Ue(e,n,r,i,o){var a={},s=e.options.props;if(t(s))for(var c in s)a[c]=U(c,s,n||{});else t(r.attrs)&&Ve(a,r.attrs),t(r.props)&&Ve(a,r.props);var u=Object.create(i),l=function(e,t,n,r){return Ze(u,e,t,n,r,!0)},f=e.options.render.call(null,l,{data:r,props:a,children:o,parent:i,listeners:r.on||{},injections:He(e.options.inject,i),slots:function(){return le(o,i)}});return f instanceof ho&&(f.functionalContext=i,f.functionalOptions=e.options,r.slot&&((f.data||(f.data={})).slot=r.slot)),f}function Ve(e,t){for(var n in t)e[Ti(n)]=t[n]}function ze(r,o,a,s,c){if(!e(r)){var u=a.$options._base;if(i(r)&&(r=u.extend(r)),"function"==typeof r&&(!e(r.cid)||void 0!==(r=ie(r,u,a)))){ut(r),o=o||{},t(o.model)&&We(r.options,o);var l=Q(o,r,c);if(n(r.options.functional))return Ue(r,l,o,a,s);var f=o.on;o.on=o.nativeOn,n(r.options.abstract)&&(o={}),Ke(o);var p=r.options.name||c;return new ho("vue-component-"+r.cid+(p?"-"+p:""),o,void 0,void 0,void 0,a,{Ctor:r,propsData:l,listeners:f,tag:c,children:s})}}}function Je(e,n,r,i){var o=e.componentOptions,a={_isComponent:!0,parent:n,propsData:o.propsData,_componentTag:o.tag,_parentVnode:e,_parentListeners:o.listeners,_renderChildren:o.children,_parentElm:r||null,_refElm:i||null},s=e.data.inlineTemplate;return t(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns),new o.Ctor(a)}function Ke(e){e.hook||(e.hook={});for(var t=0;t<Lo.length;t++){var n=Lo[t],r=e.hook[n],i=No[n];e.hook[n]=r?qe(i,r):i}}function qe(e,t){return function(n,r,i,o){e(n,r,i,o),t(n,r,i,o)}}function We(e,n){var r=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(n.props||(n.props={}))[r]=n.model.value;var o=n.on||(n.on={});t(o[i])?o[i]=[n.model.callback].concat(o[i]):o[i]=n.model.callback}function Ze(e,t,i,o,a,s){return(Array.isArray(i)||r(i))&&(a=o,o=i,i=void 0),n(s)&&(a=Do),Ge(e,t,i,o,a)}function Ge(e,n,r,i,o){if(t(r)&&t(r.__ob__))return yo();if(!n)return yo();Array.isArray(i)&&"function"==typeof i[0]&&(r=r||{},r.scopedSlots={default:i[0]},i.length=0),o===Do?i=te(i):o===Io&&(i=ee(i));var a,s;if("string"==typeof n){var c;s=Pi.getTagNamespace(n),a=Pi.isReservedTag(n)?new ho(Pi.parsePlatformTagName(n),r,i,void 0,void 0,e):t(c=H(e.$options,"components",n))?ze(c,r,e,i,n):new ho(n,r,i,void 0,void 0,e)}else a=ze(n,r,e,i);return t(a)?(s&&Ye(a,s),a):yo()}function Ye(n,r){if(n.ns=r,"foreignObject"!==n.tag&&t(n.children))for(var i=0,o=n.children.length;i<o;i++){var a=n.children[i];t(a.tag)&&e(a.ns)&&Ye(a,r)}}function Qe(e,t){var n,r,o,a,s;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,o=e.length;r<o;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(i(e))for(a=Object.keys(e),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=t(e[s],s,r);return n}function Xe(e,t,n,r){var i=this.$scopedSlots[e];if(i)return n=n||{},r&&h(n,r),i(n)||t;var o=this.$slots[e];return o||t}function et(e){return H(this.$options,"filters",e,!0)||Li}function tt(e,t,n){var r=Pi.keyCodes[t]||n;return Array.isArray(r)?-1===r.indexOf(e):r!==e}function nt(e,t,n,r){if(n)if(i(n)){Array.isArray(n)&&(n=m(n));var o;for(var a in n){if("class"===a||"style"===a)o=e;else{var s=e.attrs&&e.attrs.type;o=r||Pi.mustUseProp(t,s,a)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}a in o||(o[a]=n[a])}}else;return e}function rt(e,t){var n=this._staticTrees[e];return n&&!t?Array.isArray(n)?W(n):q(n):(n=this._staticTrees[e]=this.$options.staticRenderFns[e].call(this._renderProxy),ot(n,"__static__"+e,!1),n)}function it(e,t,n){return ot(e,"__once__"+t+(n?"_"+n:""),!0),e}function ot(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&at(e[r],t+"_"+r,n);else at(e,t,n)}function at(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function st(e){e._vnode=null,e._staticTrees=null;var t=e.$vnode=e.$options._parentVnode,n=t&&t.context;e.$slots=le(e.$options._renderChildren,n),e.$scopedSlots=Ri,e._c=function(t,n,r,i){return Ze(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return Ze(e,t,n,r,i,!0)}}function ct(e,t){var n=e.$options=Object.create(e.constructor.options);n.parent=t.parent,n.propsData=t.propsData,n._parentVnode=t._parentVnode,n._parentListeners=t._parentListeners,n._renderChildren=t._renderChildren,n._componentTag=t._componentTag,n._parentElm=t._parentElm,n._refElm=t._refElm,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function ut(e){var t=e.options;if(e.super){var n=ut(e.super);if(n!==e.superOptions){e.superOptions=n;var r=lt(e);r&&h(e.extendOptions,r),t=e.options=B(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function lt(e){var t,n=e.options,r=e.extendOptions,i=e.sealedOptions;for(var o in n)n[o]!==i[o]&&(t||(t={}),t[o]=ft(n[o],r[o],i[o]));return t}function ft(e,t,n){if(Array.isArray(e)){var r=[];n=Array.isArray(n)?n:[n],t=Array.isArray(t)?t:[t];for(var i=0;i<e.length;i++)(t.indexOf(e[i])>=0||n.indexOf(e[i])<0)&&r.push(e[i]);return r}return e}function pt(e){this._init(e)}function dt(e){e.use=function(e){if(!e.installed){var t=v(arguments,1);return t.unshift(this),"function"==typeof e.install?e.install.apply(e,t):"function"==typeof e&&e.apply(null,t),e.installed=!0,this}}}function vt(e){e.mixin=function(e){this.options=B(this.options,e)}}function ht(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=B(n.options,e),a.super=n,a.options.props&&mt(a),a.options.computed&&gt(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,Di.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=h({},a.options),i[r]=a,a}}function mt(e){var t=e.options.props;for(var n in t)Se(e.prototype,"_props",n)}function gt(e){var t=e.options.computed;for(var n in t)Ie(e.prototype,n,t[n])}function yt(e){Di.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&o(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}function _t(e){return e&&(e.Ctor.options.name||e.tag)}function bt(e,t){return"string"==typeof e?e.split(",").indexOf(t)>-1:!!a(e)&&e.test(t)}function $t(e,t,n){for(var r in e){var i=e[r];if(i){var o=_t(i.componentOptions);o&&!n(o)&&(i!==t&&xt(i),e[r]=null)}}}function xt(e){e&&e.componentInstance.$destroy()}function wt(e){for(var n=e.data,r=e,i=e;t(i.componentInstance);)i=i.componentInstance._vnode,i.data&&(n=Ct(i.data,n));for(;t(r=r.parent);)r.data&&(n=Ct(n,r.data));return kt(n)}function Ct(e,n){return{staticClass:At(e.staticClass,n.staticClass),class:t(e.class)?[e.class,n.class]:n.class}}function kt(e){var n=e.class,r=e.staticClass;return t(r)||t(n)?At(r,Ot(n)):""}function At(e,t){return e?t?e+" "+t:e:t||""}function Ot(n){if(e(n))return"";if("string"==typeof n)return n;var r="";if(Array.isArray(n)){for(var o,a=0,s=n.length;a<s;a++)t(n[a])&&t(o=Ot(n[a]))&&""!==o&&(r+=o+" ");return r.slice(0,-1)}if(i(n)){for(var c in n)n[c]&&(r+=c+" ");return r.slice(0,-1)}return r}function St(e){return aa(e)?"svg":"math"===e?"math":void 0}function Tt(e){if(!Ui)return!0;if(ca(e))return!1;if(e=e.toLowerCase(),null!=ua[e])return ua[e];var t=document.createElement(e);return e.indexOf("-")>-1?ua[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:ua[e]=/HTMLUnknownElement/.test(t.toString())}function Et(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function jt(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)}function Nt(e,t){return document.createElementNS(ia[e],t)}function Lt(e){return document.createTextNode(e)}function It(e){return document.createComment(e)}function Dt(e,t,n){e.insertBefore(t,n)}function Mt(e,t){e.removeChild(t)}function Pt(e,t){e.appendChild(t)}function Rt(e){return e.parentNode}function Ft(e){return e.nextSibling}function Bt(e){return e.tagName}function Ht(e,t){e.textContent=t}function Ut(e,t,n){e.setAttribute(t,n)}function Vt(e,t){var n=e.data.ref;if(n){var r=e.context,i=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?l(o[n],i):o[n]===i&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])&&o[n].indexOf(i)<0?o[n].push(i):o[n]=[i]:o[n]=i}}function zt(e,n){return e.key===n.key&&e.tag===n.tag&&e.isComment===n.isComment&&t(e.data)===t(n.data)&&Jt(e,n)}function Jt(e,n){if("input"!==e.tag)return!0;var r;return(t(r=e.data)&&t(r=r.attrs)&&r.type)===(t(r=n.data)&&t(r=r.attrs)&&r.type)}function Kt(e,n,r){var i,o,a={};for(i=n;i<=r;++i)o=e[i].key,t(o)&&(a[o]=i);return a}function qt(e,t){(e.data.directives||t.data.directives)&&Wt(e,t)}function Wt(e,t){var n,r,i,o=e===pa,a=t===pa,s=Zt(e.data.directives,e.context),c=Zt(t.data.directives,t.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,Yt(i,"update",t,e),i.def&&i.def.componentUpdated&&l.push(i)):(Yt(i,"bind",t,e),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)Yt(u[n],"inserted",t,e)};o?Y(t.data.hook||(t.data.hook={}),"insert",f):f()}if(l.length&&Y(t.data.hook||(t.data.hook={}),"postpatch",function(){for(var n=0;n<l.length;n++)Yt(l[n],"componentUpdated",t,e)}),!o)for(n in s)c[n]||Yt(s[n],"unbind",e,e,a)}function Zt(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=ha),n[Gt(i)]=i,i.def=H(t.$options,"directives",i.name,!0);return n}function Gt(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function Yt(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){C(r,n.context,"directive "+e.name+" "+t+" hook")}}function Qt(n,r){if(!e(n.data.attrs)||!e(r.data.attrs)){var i,o,a=r.elm,s=n.data.attrs||{},c=r.data.attrs||{};t(c.__ob__)&&(c=r.data.attrs=h({},c));for(i in c)o=c[i],s[i]!==o&&Xt(a,i,o);Ji&&c.value!==s.value&&Xt(a,"value",c.value);for(i in s)e(c[i])&&(ta(i)?a.removeAttributeNS(ea,na(i)):Qo(i)||a.removeAttribute(i))}}function Xt(e,t,n){Xo(t)?ra(n)?e.removeAttribute(t):e.setAttribute(t,t):Qo(t)?e.setAttribute(t,ra(n)||"false"===n?"false":"true"):ta(t)?ra(n)?e.removeAttributeNS(ea,na(t)):e.setAttributeNS(ea,t,n):ra(n)?e.removeAttribute(t):e.setAttribute(t,n)}function en(n,r){var i=r.elm,o=r.data,a=n.data;if(!(e(o.staticClass)&&e(o.class)&&(e(a)||e(a.staticClass)&&e(a.class)))){var s=wt(r),c=i._transitionClasses;t(c)&&(s=At(s,Ot(c))),s!==i._prevClass&&(i.setAttribute("class",s),i._prevClass=s)}}function tn(e){function t(){(a||(a=[])).push(e.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,u=!1,l=!1,f=0,p=0,d=0,v=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(u)96===n&&92!==r&&(u=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||f||p||d){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:u=!0;break;case 40:d++;break;case 41:d--;break;case 91:p++;break;case 93:p--;break;case 123:f++;break;case 125:f--}if(47===n){for(var h=i-1,m=void 0;h>=0&&" "===(m=e.charAt(h));h--);m&&_a.test(m)||(l=!0)}}else void 0===o?(v=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==v&&t(),a)for(i=0;i<a.length;i++)o=nn(o,a[i]);return o}function nn(e,t){var n=t.indexOf("(");return n<0?'_f("'+t+'")('+e+")":'_f("'+t.slice(0,n)+'")('+e+","+t.slice(n+1)}function rn(e){console.error("[Vue compiler]: "+e)}function on(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function an(e,t,n){(e.props||(e.props=[])).push({name:t,value:n})}function sn(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n})}function cn(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o})}function un(e,t,n,r,i,o){r&&r.capture&&(delete r.capture,t="!"+t),r&&r.once&&(delete r.once,t="~"+t),r&&r.passive&&(delete r.passive,t="&"+t);var a;r&&r.native?(delete r.native,a=e.nativeEvents||(e.nativeEvents={})):a=e.events||(e.events={});var s={value:n,modifiers:r},c=a[t];Array.isArray(c)?i?c.unshift(s):c.push(s):a[t]=c?i?[s,c]:[c,s]:s}function ln(e,t,n){var r=fn(e,":"+t)||fn(e,"v-bind:"+t);if(null!=r)return tn(r);if(!1!==n){var i=fn(e,t);if(null!=i)return JSON.stringify(i)}}function fn(e,t){var n;if(null!=(n=e.attrsMap[t]))for(var r=e.attrsList,i=0,o=r.length;i<o;i++)if(r[i].name===t){r.splice(i,1);break}return n}function pn(e,t,n){var r=n||{},i=r.number,o=r.trim,a="$$v";o&&(a="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(a="_n("+a+")");var s=dn(t,a);e.model={value:"("+t+")",expression:'"'+t+'"',callback:"function ($$v) {"+s+"}"}}function dn(e,t){var n=vn(e);return null===n.idx?e+"="+t:"var $$exp = "+n.exp+", $$idx = "+n.idx+";if (!Array.isArray($$exp)){"+e+"="+t+"}else{$$exp.splice($$idx, 1, "+t+")}"}function vn(e){if(Ho=e,Bo=Ho.length,Vo=zo=Jo=0,e.indexOf("[")<0||e.lastIndexOf("]")<Bo-1)return{exp:e,idx:null};for(;!mn();)Uo=hn(),gn(Uo)?_n(Uo):91===Uo&&yn(Uo);return{exp:e.substring(0,zo),idx:e.substring(zo+1,Jo)}}function hn(){return Ho.charCodeAt(++Vo)}function mn(){return Vo>=Bo}function gn(e){return 34===e||39===e}function yn(e){var t=1;for(zo=Vo;!mn();)if(e=hn(),gn(e))_n(e);else if(91===e&&t++,93===e&&t--,0===t){Jo=Vo;break}}function _n(e){for(var t=e;!mn()&&(e=hn())!==t;);}function bn(e,t,n){Ko=n;var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if("select"===o)wn(e,r,i);else if("input"===o&&"checkbox"===a)$n(e,r,i);else if("input"===o&&"radio"===a)xn(e,r,i);else if("input"===o||"textarea"===o)Cn(e,r,i);else if(!Pi.isReservedTag(o))return pn(e,r,i),!1;return!0}function $n(e,t,n){var r=n&&n.number,i=ln(e,"value")||"null",o=ln(e,"true-value")||"true",a=ln(e,"false-value")||"false";an(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),un(e,$a,"var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$c){$$i<0&&("+t+"=$$a.concat($$v))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+dn(t,"$$c")+"}",null,!0)}function xn(e,t,n){var r=n&&n.number,i=ln(e,"value")||"null";i=r?"_n("+i+")":i,an(e,"checked","_q("+t+","+i+")"),un(e,$a,dn(t,i),null,!0)}function wn(e,t,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})",o="var $$selectedVal = "+i+";";o=o+" "+dn(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),un(e,"change",o,null,!0)}function Cn(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?ba:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=dn(t,l);c&&(f="if($event.target.composing)return;"+f),an(e,"value","("+t+")"),un(e,u,f,null,!0),(s||a||"number"===r)&&un(e,"blur","$forceUpdate()")}function kn(e){var n;t(e[ba])&&(n=zi?"change":"input",e[n]=[].concat(e[ba],e[n]||[]),delete e[ba]),t(e[$a])&&(n=Zi?"click":"change",e[n]=[].concat(e[$a],e[n]||[]),delete e[$a])}function An(e,t,n,r,i){if(n){var o=t,a=qo;t=function(n){null!==(1===arguments.length?o(n):o.apply(null,arguments))&&On(e,t,r,a)}}qo.addEventListener(e,t,Gi?{capture:r,passive:i}:r)}function On(e,t,n,r){(r||qo).removeEventListener(e,t,n)}function Sn(t,n){if(!e(t.data.on)||!e(n.data.on)){var r=n.data.on||{},i=t.data.on||{};qo=n.elm,kn(r),G(r,i,An,On,n.context)}}function Tn(n,r){if(!e(n.data.domProps)||!e(r.data.domProps)){var i,o,a=r.elm,s=n.data.domProps||{},c=r.data.domProps||{};t(c.__ob__)&&(c=r.data.domProps=h({},c));for(i in s)e(c[i])&&(a[i]="");for(i in c)if(o=c[i],"textContent"!==i&&"innerHTML"!==i||(r.children&&(r.children.length=0),o!==s[i]))if("value"===i){a._value=o;var u=e(o)?"":String(o);En(a,r,u)&&(a.value=u)}else a[i]=o}}function En(e,t,n){return!e.composing&&("option"===t.tag||jn(e,n)||Nn(e,n))}function jn(e,t){return document.activeElement!==e&&e.value!==t}function Nn(e,n){var r=e.value,i=e._vModifiers;return t(i)&&i.number||"number"===e.type?c(r)!==c(n):t(i)&&i.trim?r.trim()!==n.trim():r!==n}function Ln(e){var t=In(e.style);return e.staticStyle?h(e.staticStyle,t):t}function In(e){return Array.isArray(e)?m(e):"string"==typeof e?Ca(e):e}function Dn(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)i=i.componentInstance._vnode,i.data&&(n=Ln(i.data))&&h(r,n);(n=Ln(e.data))&&h(r,n);for(var o=e;o=o.parent;)o.data&&(n=Ln(o.data))&&h(r,n);return r}function Mn(n,r){var i=r.data,o=n.data;if(!(e(i.staticStyle)&&e(i.style)&&e(o.staticStyle)&&e(o.style))){var a,s,c=r.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,p=In(r.data.style)||{};r.data.normalizedStyle=t(p.__ob__)?h({},p):p;var d=Dn(r,!0);for(s in f)e(d[s])&&Oa(c,s,"");for(s in d)(a=d[s])!==f[s]&&Oa(c,s,null==a?"":a)}}function Pn(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Rn(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t);else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");e.setAttribute("class",n.trim())}}function Fn(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&h(t,ja(e.name||"v")),h(t,e),t}return"string"==typeof e?ja(e):void 0}}function Bn(e){Fa(function(){Fa(e)})}function Hn(e,t){(e._transitionClasses||(e._transitionClasses=[])).push(t),Pn(e,t)}function Un(e,t){e._transitionClasses&&l(e._transitionClasses,t),Rn(e,t)}function Vn(e,t,n){var r=zn(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===La?Ma:Ra,c=0,u=function(){e.removeEventListener(s,l),n()},l=function(t){t.target===e&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),e.addEventListener(s,l)}function zn(e,t){var n,r=window.getComputedStyle(e),i=r[Da+"Delay"].split(", "),o=r[Da+"Duration"].split(", "),a=Jn(i,o),s=r[Pa+"Delay"].split(", "),c=r[Pa+"Duration"].split(", "),u=Jn(s,c),l=0,f=0;return t===La?a>0&&(n=La,l=a,f=o.length):t===Ia?u>0&&(n=Ia,l=u,f=c.length):(l=Math.max(a,u),n=l>0?a>u?La:Ia:null,f=n?n===La?o.length:c.length:0),{type:n,timeout:l,propCount:f,hasTransform:n===La&&Ba.test(r[Da+"Property"])}}function Jn(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return Kn(t)+Kn(e[n])}))}function Kn(e){return 1e3*Number(e.slice(0,-1))}function qn(n,r){var o=n.elm;t(o._leaveCb)&&(o._leaveCb.cancelled=!0,o._leaveCb());var a=Fn(n.data.transition);if(!e(a)&&!t(o._enterCb)&&1===o.nodeType){
for(var s=a.css,u=a.type,l=a.enterClass,f=a.enterToClass,p=a.enterActiveClass,d=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,g=a.enter,y=a.afterEnter,_=a.enterCancelled,$=a.beforeAppear,x=a.appear,w=a.afterAppear,C=a.appearCancelled,k=a.duration,A=bo,O=bo.$vnode;O&&O.parent;)O=O.parent,A=O.context;var S=!A._isMounted||!n.isRootInsert;if(!S||x||""===x){var T=S&&d?d:l,E=S&&h?h:p,j=S&&v?v:f,N=S?$||m:m,L=S&&"function"==typeof x?x:g,I=S?w||y:y,D=S?C||_:_,M=c(i(k)?k.enter:k),P=!1!==s&&!Ji,R=Gn(L),F=o._enterCb=b(function(){P&&(Un(o,j),Un(o,E)),F.cancelled?(P&&Un(o,T),D&&D(o)):I&&I(o),o._enterCb=null});n.data.show||Y(n.data.hook||(n.data.hook={}),"insert",function(){var e=o.parentNode,t=e&&e._pending&&e._pending[n.key];t&&t.tag===n.tag&&t.elm._leaveCb&&t.elm._leaveCb(),L&&L(o,F)}),N&&N(o),P&&(Hn(o,T),Hn(o,E),Bn(function(){Hn(o,j),Un(o,T),F.cancelled||R||(Zn(M)?setTimeout(F,M):Vn(o,u,F))})),n.data.show&&(r&&r(),L&&L(o,F)),P||R||F()}}}function Wn(n,r){function o(){C.cancelled||(n.data.show||((a.parentNode._pending||(a.parentNode._pending={}))[n.key]=n),v&&v(a),$&&(Hn(a,f),Hn(a,d),Bn(function(){Hn(a,p),Un(a,f),C.cancelled||x||(Zn(w)?setTimeout(C,w):Vn(a,l,C))})),h&&h(a,C),$||x||C())}var a=n.elm;t(a._enterCb)&&(a._enterCb.cancelled=!0,a._enterCb());var s=Fn(n.data.transition);if(e(s))return r();if(!t(a._leaveCb)&&1===a.nodeType){var u=s.css,l=s.type,f=s.leaveClass,p=s.leaveToClass,d=s.leaveActiveClass,v=s.beforeLeave,h=s.leave,m=s.afterLeave,g=s.leaveCancelled,y=s.delayLeave,_=s.duration,$=!1!==u&&!Ji,x=Gn(h),w=c(i(_)?_.leave:_),C=a._leaveCb=b(function(){a.parentNode&&a.parentNode._pending&&(a.parentNode._pending[n.key]=null),$&&(Un(a,p),Un(a,d)),C.cancelled?($&&Un(a,f),g&&g(a)):(r(),m&&m(a)),a._leaveCb=null});y?y(o):o()}}function Zn(e){return"number"==typeof e&&!isNaN(e)}function Gn(n){if(e(n))return!1;var r=n.fns;return t(r)?Gn(Array.isArray(r)?r[0]:r):(n._length||n.length)>1}function Yn(e,t){!0!==t.data.show&&qn(t)}function Qn(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=_(r,er(a))>-1,a.selected!==o&&(a.selected=o);else if(y(er(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function Xn(e,t){for(var n=0,r=t.length;n<r;n++)if(y(er(t[n]),e))return!1;return!0}function er(e){return"_value"in e?e._value:e.value}function tr(e){e.target.composing=!0}function nr(e){e.target.composing=!1,rr(e.target,"input")}function rr(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function ir(e){return!e.componentInstance||e.data&&e.data.transition?e:ir(e.componentInstance._vnode)}function or(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?or(oe(t.children)):e}function ar(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[Ti(o)]=i[o];return t}function sr(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function cr(e){for(;e=e.parent;)if(e.data.transition)return!0}function ur(e,t){return t.key===e.key&&t.tag===e.tag}function lr(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function fr(e){e.data.newPos=e.elm.getBoundingClientRect()}function pr(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function dr(e){return Xa=Xa||document.createElement("div"),Xa.innerHTML=e,Xa.textContent}function vr(e,t){var n=t?Ms:Ds;return e.replace(n,function(e){return Is[e]})}function hr(e,t){function n(t){l+=t,e=e.substring(t)}function r(e,n,r){var i,s;if(null==n&&(n=l),null==r&&(r=l),e&&(s=e.toLowerCase()),e)for(i=a.length-1;i>=0&&a[i].lowerCasedTag!==s;i--);else i=0;if(i>=0){for(var c=a.length-1;c>=i;c--)t.end&&t.end(a[c].tag,n,r);a.length=i,o=i&&a[i-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,r):"p"===s&&(t.start&&t.start(e,[],!1,n,r),t.end&&t.end(e,n,r))}for(var i,o,a=[],s=t.expectHTML,c=t.isUnaryTag||Ni,u=t.canBeLeftOpenTag||Ni,l=0;e;){if(i=e,o&&Ns(o)){var f=o.toLowerCase(),p=Ls[f]||(Ls[f]=new RegExp("([\\s\\S]*?)(</"+f+"[^>]*>)","i")),d=0,v=e.replace(p,function(e,n,r){return d=r.length,Ns(f)||"noscript"===f||(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),t.chars&&t.chars(n),""});l+=e.length-v.length,e=v,r(f,l-d,l)}else{var h=e.indexOf("<");if(0===h){if(fs.test(e)){var m=e.indexOf("--\x3e");if(m>=0){n(m+3);continue}}if(ps.test(e)){var g=e.indexOf("]>");if(g>=0){n(g+2);continue}}var y=e.match(ls);if(y){n(y[0].length);continue}var _=e.match(us);if(_){var b=l;n(_[0].length),r(_[1],b,l);continue}var $=function(){var t=e.match(ss);if(t){var r={tagName:t[1],attrs:[],start:l};n(t[0].length);for(var i,o;!(i=e.match(cs))&&(o=e.match(os));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=l,r}}();if($){!function(e){var n=e.tagName,i=e.unarySlash;s&&("p"===o&&rs(n)&&r(o),u(n)&&o===n&&r(n));for(var l=c(n)||"html"===n&&"head"===o||!!i,f=e.attrs.length,p=new Array(f),d=0;d<f;d++){var v=e.attrs[d];ds&&-1===v[0].indexOf('""')&&(""===v[3]&&delete v[3],""===v[4]&&delete v[4],""===v[5]&&delete v[5]);var h=v[3]||v[4]||v[5]||"";p[d]={name:v[1],value:vr(h,t.shouldDecodeNewlines)}}l||(a.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:p}),o=n),t.start&&t.start(n,p,l,e.start,e.end)}($);continue}}var x=void 0,w=void 0,C=void 0;if(h>=0){for(w=e.slice(h);!(us.test(w)||ss.test(w)||fs.test(w)||ps.test(w)||(C=w.indexOf("<",1))<0);)h+=C,w=e.slice(h);x=e.substring(0,h),n(h)}h<0&&(x=e,e=""),t.chars&&x&&t.chars(x)}if(e===i){t.chars&&t.chars(e);break}}r()}function mr(e,t){var n=t?Rs(t):Ps;if(n.test(e)){for(var r,i,o=[],a=n.lastIndex=0;r=n.exec(e);){i=r.index,i>a&&o.push(JSON.stringify(e.slice(a,i)));var s=tn(r[1].trim());o.push("_s("+s+")"),a=i+r[0].length}return a<e.length&&o.push(JSON.stringify(e.slice(a))),o.join("+")}}function gr(e,t){function n(e){e.pre&&(s=!1),_s(e.tag)&&(c=!1)}vs=t.warn||rn,$s=t.getTagNamespace||Ni,bs=t.mustUseProp||Ni,_s=t.isPreTag||Ni,gs=on(t.modules,"preTransformNode"),ms=on(t.modules,"transformNode"),ys=on(t.modules,"postTransformNode"),hs=t.delimiters;var r,i,o=[],a=!1!==t.preserveWhitespace,s=!1,c=!1;return hr(e,{warn:vs,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,start:function(e,a,u){var l=i&&i.ns||$s(e);zi&&"svg"===l&&(a=Mr(a));var f={type:1,tag:e,attrsList:a,attrsMap:Lr(a),parent:i,children:[]};l&&(f.ns=l),Dr(f)&&!eo()&&(f.forbidden=!0);for(var p=0;p<gs.length;p++)gs[p](f,t);if(s||(yr(f),f.pre&&(s=!0)),_s(f.tag)&&(c=!0),s)_r(f);else{xr(f),wr(f),Or(f),br(f),f.plain=!f.key&&!a.length,$r(f),Sr(f),Tr(f);for(var d=0;d<ms.length;d++)ms[d](f,t);Er(f)}if(r?o.length||r.if&&(f.elseif||f.else)&&Ar(r,{exp:f.elseif,block:f}):r=f,i&&!f.forbidden)if(f.elseif||f.else)Cr(f,i);else if(f.slotScope){i.plain=!1;var v=f.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[v]=f}else i.children.push(f),f.parent=i;u?n(f):(i=f,o.push(f));for(var h=0;h<ys.length;h++)ys[h](f,t)},end:function(){var e=o[o.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&!c&&e.children.pop(),o.length-=1,i=o[o.length-1],n(e)},chars:function(e){if(i&&(!zi||"textarea"!==i.tag||i.attrsMap.placeholder!==e)){var t=i.children;if(e=c||e.trim()?Ir(i)?e:Ks(e):a&&t.length?" ":""){var n;!s&&" "!==e&&(n=mr(e,hs))?t.push({type:2,expression:n,text:e}):" "===e&&t.length&&" "===t[t.length-1].text||t.push({type:3,text:e})}}}}),r}function yr(e){null!=fn(e,"v-pre")&&(e.pre=!0)}function _r(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function br(e){var t=ln(e,"key");t&&(e.key=t)}function $r(e){var t=ln(e,"ref");t&&(e.ref=t,e.refInFor=jr(e))}function xr(e){var t;if(t=fn(e,"v-for")){var n=t.match(Hs);if(!n)return;e.for=n[2].trim();var r=n[1].trim(),i=r.match(Us);i?(e.alias=i[1].trim(),e.iterator1=i[2].trim(),i[3]&&(e.iterator2=i[3].trim())):e.alias=r}}function wr(e){var t=fn(e,"v-if");if(t)e.if=t,Ar(e,{exp:t,block:e});else{null!=fn(e,"v-else")&&(e.else=!0);var n=fn(e,"v-else-if");n&&(e.elseif=n)}}function Cr(e,t){var n=kr(t.children);n&&n.if&&Ar(n,{exp:e.elseif,block:e})}function kr(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];e.pop()}}function Ar(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function Or(e){null!=fn(e,"v-once")&&(e.once=!0)}function Sr(e){if("slot"===e.tag)e.slotName=ln(e,"name");else{var t=ln(e,"slot");t&&(e.slotTarget='""'===t?'"default"':t),"template"===e.tag&&(e.slotScope=fn(e,"scope"))}}function Tr(e){var t;(t=ln(e,"is"))&&(e.component=t),null!=fn(e,"inline-template")&&(e.inlineTemplate=!0)}function Er(e){var t,n,r,i,o,a,s,c=e.attrsList;for(t=0,n=c.length;t<n;t++)if(r=i=c[t].name,o=c[t].value,Bs.test(r))if(e.hasBindings=!0,a=Nr(r),a&&(r=r.replace(Js,"")),zs.test(r))r=r.replace(zs,""),o=tn(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=Ti(r))&&(r="innerHTML")),a.camel&&(r=Ti(r)),a.sync&&un(e,"update:"+Ti(r),dn(o,"$event"))),s||bs(e.tag,e.attrsMap.type,r)?an(e,r,o):sn(e,r,o);else if(Fs.test(r))r=r.replace(Fs,""),un(e,r,o,a,!1,vs);else{r=r.replace(Bs,"");var u=r.match(Vs),l=u&&u[1];l&&(r=r.slice(0,-(l.length+1))),cn(e,r,i,o,l,a)}else sn(e,r,JSON.stringify(o))}function jr(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function Nr(e){var t=e.match(Js);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function Lr(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function Ir(e){return"script"===e.tag||"style"===e.tag}function Dr(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function Mr(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];qs.test(r.name)||(r.name=r.name.replace(Ws,""),t.push(r))}return t}function Pr(e,t){e&&(xs=Zs(t.staticKeys||""),ws=t.isReservedTag||Ni,Fr(e),Br(e,!1))}function Rr(e){return u("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}function Fr(e){if(e.static=Ur(e),1===e.type){if(!ws(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];Fr(r),r.static||(e.static=!1)}}}function Br(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)Br(e.children[n],t||!!e.for);e.ifConditions&&Hr(e.ifConditions,t)}}function Hr(e,t){for(var n=1,r=e.length;n<r;n++)Br(e[n].block,t)}function Ur(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||Oi(e.tag)||!ws(e.tag)||Vr(e)||!Object.keys(e).every(xs))))}function Vr(e){for(;e.parent;){if(e=e.parent,"template"!==e.tag)return!1;if(e.for)return!0}return!1}function zr(e,t,n){var r=t?"nativeOn:{":"on:{";for(var i in e){var o=e[i];r+='"'+i+'":'+Jr(i,o)+","}return r.slice(0,-1)+"}"}function Jr(e,t){if(!t)return"function(){}";if(Array.isArray(t))return"["+t.map(function(t){return Jr(e,t)}).join(",")+"]";var n=Ys.test(t.value),r=Gs.test(t.value);if(t.modifiers){var i="",o="",a=[];for(var s in t.modifiers)ec[s]?(o+=ec[s],Qs[s]&&a.push(s)):a.push(s);a.length&&(i+=Kr(a)),o&&(i+=o);return"function($event){"+i+(n?t.value+"($event)":r?"("+t.value+")($event)":t.value)+"}"}return n||r?t.value:"function($event){"+t.value+"}"}function Kr(e){return"if(!('button' in $event)&&"+e.map(qr).join("&&")+")return null;"}function qr(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Qs[e];return"_k($event.keyCode,"+JSON.stringify(e)+(n?","+JSON.stringify(n):"")+")"}function Wr(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+(t.modifiers&&t.modifiers.prop?",true":"")+")"}}function Zr(e,t){var n=Ts,r=Ts=[],i=Es;Es=0,js=t,Cs=t.warn||rn,ks=on(t.modules,"transformCode"),As=on(t.modules,"genData"),Os=t.directives||{},Ss=t.isReservedTag||Ni;var o=e?Gr(e):'_c("div")';return Ts=n,Es=i,{render:"with(this){return "+o+"}",staticRenderFns:r}}function Gr(e){if(e.staticRoot&&!e.staticProcessed)return Yr(e);if(e.once&&!e.onceProcessed)return Qr(e);if(e.for&&!e.forProcessed)return ti(e);if(e.if&&!e.ifProcessed)return Xr(e);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return di(e);var t;if(e.component)t=vi(e.component,e);else{var n=e.plain?void 0:ni(e),r=e.inlineTemplate?null:si(e,!0);t="_c('"+e.tag+"'"+(n?","+n:"")+(r?","+r:"")+")"}for(var i=0;i<ks.length;i++)t=ks[i](e,t);return t}return si(e)||"void 0"}function Yr(e){return e.staticProcessed=!0,Ts.push("with(this){return "+Gr(e)+"}"),"_m("+(Ts.length-1)+(e.staticInFor?",true":"")+")"}function Qr(e){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Xr(e);if(e.staticInFor){for(var t="",n=e.parent;n;){if(n.for){t=n.key;break}n=n.parent}return t?"_o("+Gr(e)+","+Es+++(t?","+t:"")+")":Gr(e)}return Yr(e)}function Xr(e){return e.ifProcessed=!0,ei(e.ifConditions.slice())}function ei(e){function t(e){return e.once?Qr(e):Gr(e)}if(!e.length)return"_e()";var n=e.shift();return n.exp?"("+n.exp+")?"+t(n.block)+":"+ei(e):""+t(n.block)}function ti(e){var t=e.for,n=e.alias,r=e.iterator1?","+e.iterator1:"",i=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+t+"),function("+n+r+i+"){return "+Gr(e)+"})"}function ni(e){var t="{",n=ri(e);n&&(t+=n+","),e.key&&(t+="key:"+e.key+","),e.ref&&(t+="ref:"+e.ref+","),e.refInFor&&(t+="refInFor:true,"),e.pre&&(t+="pre:true,"),e.component&&(t+='tag:"'+e.tag+'",');for(var r=0;r<As.length;r++)t+=As[r](e);if(e.attrs&&(t+="attrs:{"+hi(e.attrs)+"},"),e.props&&(t+="domProps:{"+hi(e.props)+"},"),e.events&&(t+=zr(e.events,!1,Cs)+","),e.nativeEvents&&(t+=zr(e.nativeEvents,!0,Cs)+","),e.slotTarget&&(t+="slot:"+e.slotTarget+","),e.scopedSlots&&(t+=oi(e.scopedSlots)+","),e.model&&(t+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var i=ii(e);i&&(t+=i+",")}return t=t.replace(/,$/,"")+"}",e.wrapData&&(t=e.wrapData(t)),t}function ri(e){var t=e.directives;if(t){var n,r,i,o,a="directives:[",s=!1;for(n=0,r=t.length;n<r;n++){i=t[n],o=!0;var c=Os[i.name]||tc[i.name];c&&(o=!!c(e,i,Cs)),o&&(s=!0,a+='{name:"'+i.name+'",rawName:"'+i.rawName+'"'+(i.value?",value:("+i.value+"),expression:"+JSON.stringify(i.value):"")+(i.arg?',arg:"'+i.arg+'"':"")+(i.modifiers?",modifiers:"+JSON.stringify(i.modifiers):"")+"},")}return s?a.slice(0,-1)+"]":void 0}}function ii(e){var t=e.children[0];if(1===t.type){var n=Zr(t,js);return"inlineTemplate:{render:function(){"+n.render+"},staticRenderFns:["+n.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function oi(e){return"scopedSlots:_u(["+Object.keys(e).map(function(t){return ai(t,e[t])}).join(",")+"])"}function ai(e,t){return"["+e+",function("+String(t.attrsMap.scope)+"){return "+("template"===t.tag?si(t)||"void 0":Gr(t))+"}]"}function si(e,t){var n=e.children;if(n.length){var r=n[0];if(1===n.length&&r.for&&"template"!==r.tag&&"slot"!==r.tag)return Gr(r);var i=t?ci(n):0;return"["+n.map(fi).join(",")+"]"+(i?","+i:"")}}function ci(e){for(var t=0,n=0;n<e.length;n++){var r=e[n];if(1===r.type){if(ui(r)||r.ifConditions&&r.ifConditions.some(function(e){return ui(e.block)})){t=2;break}(li(r)||r.ifConditions&&r.ifConditions.some(function(e){return li(e.block)}))&&(t=1)}}return t}function ui(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function li(e){return!Ss(e.tag)}function fi(e){return 1===e.type?Gr(e):pi(e)}function pi(e){return"_v("+(2===e.type?e.expression:mi(JSON.stringify(e.text)))+")"}function di(e){var t=e.slotName||'"default"',n=si(e),r="_t("+t+(n?","+n:""),i=e.attrs&&"{"+e.attrs.map(function(e){return Ti(e.name)+":"+e.value}).join(",")+"}",o=e.attrsMap["v-bind"];return!i&&!o||n||(r+=",null"),i&&(r+=","+i),o&&(r+=(i?"":",null")+","+o),r+")"}function vi(e,t){var n=t.inlineTemplate?null:si(t,!0);return"_c("+e+","+ni(t)+(n?","+n:"")+")"}function hi(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+mi(r.value)+","}return t.slice(0,-1)}function mi(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function gi(e,t){var n=gr(e.trim(),t);Pr(n,t);var r=Zr(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}}function yi(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),g}}function _i(e,t){var n=(t.warn,fn(e,"class"));n&&(e.staticClass=JSON.stringify(n));var r=ln(e,"class",!1);r&&(e.classBinding=r)}function bi(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}function $i(e,t){var n=(t.warn,fn(e,"style"));n&&(e.staticStyle=JSON.stringify(Ca(n)));var r=ln(e,"style",!1);r&&(e.styleBinding=r)}function xi(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}function wi(e,t){t.value&&an(e,"textContent","_s("+t.value+")")}function Ci(e,t){t.value&&an(e,"innerHTML","_s("+t.value+")")}function ki(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}var Ai=Object.prototype.toString,Oi=u("slot,component",!0),Si=Object.prototype.hasOwnProperty,Ti=p(function(e){return e.replace(/-(\w)/g,function(e,t){return t?t.toUpperCase():""})}),Ei=p(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),ji=p(function(e){return e.replace(/([^-])([A-Z])/g,"$1-$2").replace(/([^-])([A-Z])/g,"$1-$2").toLowerCase()}),Ni=function(){return!1},Li=function(e){return e},Ii="data-server-rendered",Di=["component","directive","filter"],Mi=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated"],Pi={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Ni,isReservedAttr:Ni,isUnknownElement:Ni,getTagNamespace:g,parsePlatformTagName:Li,mustUseProp:Ni,_lifecycleHooks:Mi},Ri=Object.freeze({}),Fi=/[^\w.$]/,Bi=g,Hi="__proto__"in{},Ui="undefined"!=typeof window,Vi=Ui&&window.navigator.userAgent.toLowerCase(),zi=Vi&&/msie|trident/.test(Vi),Ji=Vi&&Vi.indexOf("msie 9.0")>0,Ki=Vi&&Vi.indexOf("edge/")>0,qi=Vi&&Vi.indexOf("android")>0,Wi=Vi&&/iphone|ipad|ipod|ios/.test(Vi),Zi=Vi&&/chrome\/\d+/.test(Vi)&&!Ki,Gi=!1;if(Ui)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){Gi=!0}}),window.addEventListener("test-passive",null,Yi)}catch(e){}var Qi,Xi,eo=function(){return void 0===Qi&&(Qi=!Ui&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),Qi},to=Ui&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,no="undefined"!=typeof Symbol&&k(Symbol)&&"undefined"!=typeof Reflect&&k(Reflect.ownKeys),ro=function(){function e(){r=!1;var e=n.slice(0);n.length=0;for(var t=0;t<e.length;t++)e[t]()}var t,n=[],r=!1;if("undefined"!=typeof Promise&&k(Promise)){var i=Promise.resolve(),o=function(e){console.error(e)};t=function(){i.then(e).catch(o),Wi&&setTimeout(g)}}else if("undefined"==typeof MutationObserver||!k(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())t=function(){setTimeout(e,0)};else{var a=1,s=new MutationObserver(e),c=document.createTextNode(String(a));s.observe(c,{characterData:!0}),t=function(){a=(a+1)%2,c.data=String(a)}}return function(e,i){var o;if(n.push(function(){if(e)try{e.call(i)}catch(e){C(e,i,"nextTick")}else o&&o(i)}),r||(r=!0,t()),!e&&"undefined"!=typeof Promise)return new Promise(function(e,t){o=e})}}();Xi="undefined"!=typeof Set&&k(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var io=0,oo=function(){this.id=io++,this.subs=[]};oo.prototype.addSub=function(e){this.subs.push(e)},oo.prototype.removeSub=function(e){l(this.subs,e)},oo.prototype.depend=function(){oo.target&&oo.target.addDep(this)},oo.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},oo.target=null;var ao=[],so=Array.prototype,co=Object.create(so);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=so[e];x(co,e,function(){for(var n=arguments,r=arguments.length,i=new Array(r);r--;)i[r]=n[r];var o,a=t.apply(this,i),s=this.__ob__;switch(e){case"push":case"unshift":o=i;break;case"splice":o=i.slice(2)}return o&&s.observeArray(o),s.dep.notify(),a})});var uo=Object.getOwnPropertyNames(co),lo={shouldConvert:!0,isSettingProps:!1},fo=function(e){if(this.value=e,this.dep=new oo,this.vmCount=0,x(e,"__ob__",this),Array.isArray(e)){(Hi?S:T)(e,co,uo),this.observeArray(e)}else this.walk(e)};fo.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)j(e,t[n],e[t[n]])},fo.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)E(e[t])};var po=Pi.optionMergeStrategies;po.data=function(e,t,n){return n?e||t?function(){var r="function"==typeof t?t.call(n):t,i="function"==typeof e?e.call(n):void 0;return r?D(r,i):i}:void 0:t?"function"!=typeof t?e:e?function(){return D(t.call(this),e.call(this))}:t:e},Mi.forEach(function(e){po[e]=M}),Di.forEach(function(e){po[e+"s"]=P}),po.watch=function(e,t){if(!t)return Object.create(e||null);if(!e)return t;var n={};h(n,e);for(var r in t){var i=n[r],o=t[r];i&&!Array.isArray(i)&&(i=[i]),n[r]=i?i.concat(o):[o]}return n},po.props=po.methods=po.computed=function(e,t){if(!t)return Object.create(e||null);if(!e)return t;var n=Object.create(null);return h(n,e),h(n,t),n};var vo=function(e,t){return void 0===t?e:t},ho=function(e,t,n,r,i,o,a){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.functionalContext=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1},mo={child:{}};mo.child.get=function(){return this.componentInstance},Object.defineProperties(ho.prototype,mo);var go,yo=function(){var e=new ho;return e.text="",e.isComment=!0,e},_o=p(function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}),bo=null,$o=[],xo=[],wo={},Co=!1,ko=!1,Ao=0,Oo=0,So=function(e,t,n,r){this.vm=e,e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Oo,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Xi,this.newDepIds=new Xi,this.expression="","function"==typeof t?this.getter=t:(this.getter=w(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};So.prototype.get=function(){A(this);var e,t=this.vm;if(this.user)try{e=this.getter.call(t,t)}catch(e){C(e,t,'getter for watcher "'+this.expression+'"')}else e=this.getter.call(t,t);return this.deep&&Ae(e),O(),this.cleanupDeps(),e},So.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},So.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},So.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ke(this)},So.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||i(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){C(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},So.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},So.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},So.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||l(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var To=new Xi,Eo={enumerable:!0,configurable:!0,get:g,set:g},jo={lazy:!0},No={init:function(e,t,n,r){if(!e.componentInstance||e.componentInstance._isDestroyed){(e.componentInstance=Je(e,bo,n,r)).$mount(t?e.elm:void 0,t)}else if(e.data.keepAlive){var i=e;No.prepatch(i,i)}},prepatch:function(e,t){var n=t.componentOptions;he(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,_e(n,"mounted")),e.data.keepAlive&&(t._isMounted?we(n):ge(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?ye(t,!0):t.$destroy())}},Lo=Object.keys(No),Io=1,Do=2,Mo=0;!function(e){e.prototype._init=function(e){var t=this;t._uid=Mo++,t._isVue=!0,e&&e._isComponent?ct(t,e):t.$options=B(ut(t.constructor),e||{},t),t._renderProxy=t,t._self=t,de(t),ae(t),st(t),_e(t,"beforeCreate"),Be(t),Te(t),Fe(t),_e(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}(pt),function(e){var t={};t.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=N,e.prototype.$delete=L,e.prototype.$watch=function(e,t,n){var r=this;n=n||{},n.user=!0;var i=new So(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}(pt),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this,i=this;if(Array.isArray(e))for(var o=0,a=e.length;o<a;o++)r.$on(e[o],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(e)){for(var i=0,o=e.length;i<o;i++)n.$off(e[i],t);return r}var a=r._events[e];if(!a)return r;if(1===arguments.length)return r._events[e]=null,r;for(var s,c=a.length;c--;)if((s=a[c])===t||s.fn===t){a.splice(c,1);break}return r},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?v(n):n;for(var r=v(arguments,1),i=0,o=n.length;i<o;i++)n[i].apply(t,r)}return t}}(pt),function(e){e.prototype._update=function(e,t){var n=this;n._isMounted&&_e(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=bo;bo=n,n._vnode=e,n.$el=i?n.__patch__(i,e):n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),bo=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){_e(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||l(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),_e(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$options._parentElm=e.$options._refElm=null}}}(pt),function(e){e.prototype.$nextTick=function(e){return ro(e,this)},e.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t.staticRenderFns,i=t._parentVnode;if(e._isMounted)for(var o in e.$slots)e.$slots[o]=W(e.$slots[o]);e.$scopedSlots=i&&i.data.scopedSlots||Ri,r&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){C(t,e,"render function"),a=e._vnode}return a instanceof ho||(a=yo()),a.parent=i,a},e.prototype._o=it,e.prototype._n=c,e.prototype._s=s,e.prototype._l=Qe,e.prototype._t=Xe,e.prototype._q=y,e.prototype._i=_,e.prototype._m=rt,e.prototype._f=et,e.prototype._k=tt,e.prototype._b=nt,e.prototype._v=K,e.prototype._e=yo,e.prototype._u=pe}(pt);var Po=[String,RegExp],Ro={name:"keep-alive",abstract:!0,props:{include:Po,exclude:Po},created:function(){this.cache=Object.create(null)},destroyed:function(){var e=this;for(var t in e.cache)xt(e.cache[t])},watch:{include:function(e){$t(this.cache,this._vnode,function(t){return bt(e,t)})},exclude:function(e){$t(this.cache,this._vnode,function(t){return!bt(e,t)})}},render:function(){var e=oe(this.$slots.default),t=e&&e.componentOptions;if(t){var n=_t(t);if(n&&(this.include&&!bt(this.include,n)||this.exclude&&bt(this.exclude,n)))return e;var r=null==e.key?t.Ctor.cid+(t.tag?"::"+t.tag:""):e.key;this.cache[r]?e.componentInstance=this.cache[r].componentInstance:this.cache[r]=e,e.data.keepAlive=!0}return e}},Fo={KeepAlive:Ro};!function(e){var t={};t.get=function(){return Pi},Object.defineProperty(e,"config",t),e.util={warn:Bi,extend:h,mergeOptions:B,defineReactive:j},e.set=N,e.delete=L,e.nextTick=ro,e.options=Object.create(null),Di.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,h(e.options.components,Fo),dt(e),vt(e),ht(e),yt(e)}(pt),Object.defineProperty(pt.prototype,"$isServer",{get:eo}),Object.defineProperty(pt.prototype,"$ssrContext",{get:function(){return this.$vnode.ssrContext}}),pt.version="2.3.2";var Bo,Ho,Uo,Vo,zo,Jo,Ko,qo,Wo,Zo=u("style,class"),Go=u("input,textarea,option,select"),Yo=function(e,t,n){return"value"===n&&Go(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Qo=u("contenteditable,draggable,spellcheck"),Xo=u("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),ea="http://www.w3.org/1999/xlink",ta=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},na=function(e){return ta(e)?e.slice(6,e.length):""},ra=function(e){return null==e||!1===e},ia={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},oa=u("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),aa=u("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),sa=function(e){return"pre"===e},ca=function(e){return oa(e)||aa(e)},ua=Object.create(null),la=Object.freeze({createElement:jt,createElementNS:Nt,createTextNode:Lt,createComment:It,insertBefore:Dt,removeChild:Mt,appendChild:Pt,parentNode:Rt,nextSibling:Ft,tagName:Bt,setTextContent:Ht,setAttribute:Ut}),fa={create:function(e,t){Vt(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Vt(e,!0),Vt(t))},destroy:function(e){Vt(e,!0)}},pa=new ho("",{},[]),da=["create","activate","update","remove","destroy"],va={create:qt,update:qt,destroy:function(e){qt(e,pa)}},ha=Object.create(null),ma=[fa,va],ga={create:Qt,update:Qt},ya={create:en,update:en},_a=/[\w).+\-_$\]]/,ba="__r",$a="__c",xa={create:Sn,update:Sn},wa={create:Tn,update:Tn},Ca=p(function(e){var t={}
;return e.split(/;(?![^(]*\))/g).forEach(function(e){if(e){var n=e.split(/:(.+)/);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}),ka=/^--/,Aa=/\s*!important$/,Oa=function(e,t,n){if(ka.test(t))e.style.setProperty(t,n);else if(Aa.test(n))e.style.setProperty(t,n.replace(Aa,""),"important");else{var r=Ta(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},Sa=["Webkit","Moz","ms"],Ta=p(function(e){if(Wo=Wo||document.createElement("div"),"filter"!==(e=Ti(e))&&e in Wo.style)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Sa.length;n++){var r=Sa[n]+t;if(r in Wo.style)return r}}),Ea={create:Mn,update:Mn},ja=p(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),Na=Ui&&!Ji,La="transition",Ia="animation",Da="transition",Ma="transitionend",Pa="animation",Ra="animationend";Na&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Da="WebkitTransition",Ma="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Pa="WebkitAnimation",Ra="webkitAnimationEnd"));var Fa=Ui&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout,Ba=/\b(transform|all)(,|$)/,Ha=Ui?{create:Yn,activate:Yn,remove:function(e,t){!0!==e.data.show?Wn(e,t):t()}}:{},Ua=[ga,ya,xa,wa,Ea,Ha],Va=Ua.concat(ma),za=function(i){function o(e){return new ho(E.tagName(e).toLowerCase(),{},[],void 0,e)}function a(e,t){function n(){0==--n.listeners&&s(e)}return n.listeners=t,n}function s(e){var n=E.parentNode(e);t(n)&&E.removeChild(n,e)}function c(e,r,i,o,a){if(e.isRootInsert=!a,!l(e,r,i,o)){var s=e.data,c=e.children,u=e.tag;t(u)?(e.elm=e.ns?E.createElementNS(e.ns,u):E.createElement(u,e),g(e),v(e,c,r),t(s)&&m(e,r),d(i,e.elm,o)):n(e.isComment)?(e.elm=E.createComment(e.text),d(i,e.elm,o)):(e.elm=E.createTextNode(e.text),d(i,e.elm,o))}}function l(e,r,i,o){var a=e.data;if(t(a)){var s=t(e.componentInstance)&&a.keepAlive;if(t(a=a.hook)&&t(a=a.init)&&a(e,!1,i,o),t(e.componentInstance))return f(e,r),n(s)&&p(e,r,i,o),!0}}function f(e,n){t(e.data.pendingInsert)&&n.push.apply(n,e.data.pendingInsert),e.elm=e.componentInstance.$el,h(e)?(m(e,n),g(e)):(Vt(e),n.push(e))}function p(e,n,r,i){for(var o,a=e;a.componentInstance;)if(a=a.componentInstance._vnode,t(o=a.data)&&t(o=o.transition)){for(o=0;o<S.activate.length;++o)S.activate[o](pa,a);n.push(a);break}d(r,e.elm,i)}function d(e,n,r){t(e)&&(t(r)?r.parentNode===e&&E.insertBefore(e,n,r):E.appendChild(e,n))}function v(e,t,n){if(Array.isArray(t))for(var i=0;i<t.length;++i)c(t[i],n,e.elm,null,!0);else r(e.text)&&E.appendChild(e.elm,E.createTextNode(e.text))}function h(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return t(e.tag)}function m(e,n){for(var r=0;r<S.create.length;++r)S.create[r](pa,e);A=e.data.hook,t(A)&&(t(A.create)&&A.create(pa,e),t(A.insert)&&n.push(e))}function g(e){for(var n,r=e;r;)t(n=r.context)&&t(n=n.$options._scopeId)&&E.setAttribute(e.elm,n,""),r=r.parent;t(n=bo)&&n!==e.context&&t(n=n.$options._scopeId)&&E.setAttribute(e.elm,n,"")}function y(e,t,n,r,i,o){for(;r<=i;++r)c(n[r],o,e,t)}function _(e){var n,r,i=e.data;if(t(i))for(t(n=i.hook)&&t(n=n.destroy)&&n(e),n=0;n<S.destroy.length;++n)S.destroy[n](e);if(t(n=e.children))for(r=0;r<e.children.length;++r)_(e.children[r])}function b(e,n,r,i){for(;r<=i;++r){var o=n[r];t(o)&&(t(o.tag)?($(o),_(o)):s(o.elm))}}function $(e,n){if(t(n)||t(e.data)){var r,i=S.remove.length+1;for(t(n)?n.listeners+=i:n=a(e.elm,i),t(r=e.componentInstance)&&t(r=r._vnode)&&t(r.data)&&$(r,n),r=0;r<S.remove.length;++r)S.remove[r](e,n);t(r=e.data.hook)&&t(r=r.remove)?r(e,n):n()}else s(e.elm)}function x(n,r,i,o,a){for(var s,u,l,f,p=0,d=0,v=r.length-1,h=r[0],m=r[v],g=i.length-1,_=i[0],$=i[g],x=!a;p<=v&&d<=g;)e(h)?h=r[++p]:e(m)?m=r[--v]:zt(h,_)?(w(h,_,o),h=r[++p],_=i[++d]):zt(m,$)?(w(m,$,o),m=r[--v],$=i[--g]):zt(h,$)?(w(h,$,o),x&&E.insertBefore(n,h.elm,E.nextSibling(m.elm)),h=r[++p],$=i[--g]):zt(m,_)?(w(m,_,o),x&&E.insertBefore(n,m.elm,h.elm),m=r[--v],_=i[++d]):(e(s)&&(s=Kt(r,p,v)),u=t(_.key)?s[_.key]:null,e(u)?(c(_,o,n,h.elm),_=i[++d]):(l=r[u],zt(l,_)?(w(l,_,o),r[u]=void 0,x&&E.insertBefore(n,_.elm,h.elm),_=i[++d]):(c(_,o,n,h.elm),_=i[++d])));p>v?(f=e(i[g+1])?null:i[g+1].elm,y(n,f,i,d,g,o)):d>g&&b(n,r,p,v)}function w(r,i,o,a){if(r!==i){if(n(i.isStatic)&&n(r.isStatic)&&i.key===r.key&&(n(i.isCloned)||n(i.isOnce)))return i.elm=r.elm,void(i.componentInstance=r.componentInstance);var s,c=i.data;t(c)&&t(s=c.hook)&&t(s=s.prepatch)&&s(r,i);var u=i.elm=r.elm,l=r.children,f=i.children;if(t(c)&&h(i)){for(s=0;s<S.update.length;++s)S.update[s](r,i);t(s=c.hook)&&t(s=s.update)&&s(r,i)}e(i.text)?t(l)&&t(f)?l!==f&&x(u,l,f,o,a):t(f)?(t(r.text)&&E.setTextContent(u,""),y(u,null,f,0,f.length-1,o)):t(l)?b(u,l,0,l.length-1):t(r.text)&&E.setTextContent(u,""):r.text!==i.text&&E.setTextContent(u,i.text),t(c)&&t(s=c.hook)&&t(s=s.postpatch)&&s(r,i)}}function C(e,r,i){if(n(i)&&t(e.parent))e.parent.data.pendingInsert=r;else for(var o=0;o<r.length;++o)r[o].data.hook.insert(r[o])}function k(e,n,r){n.elm=e;var i=n.tag,o=n.data,a=n.children;if(t(o)&&(t(A=o.hook)&&t(A=A.init)&&A(n,!0),t(A=n.componentInstance)))return f(n,r),!0;if(t(i)){if(t(a))if(e.hasChildNodes()){for(var s=!0,c=e.firstChild,u=0;u<a.length;u++){if(!c||!k(c,a[u],r)){s=!1;break}c=c.nextSibling}if(!s||c)return!1}else v(n,a,r);if(t(o))for(var l in o)if(!j(l)){m(n,r);break}}else e.data!==n.text&&(e.data=n.text);return!0}var A,O,S={},T=i.modules,E=i.nodeOps;for(A=0;A<da.length;++A)for(S[da[A]]=[],O=0;O<T.length;++O)t(T[O][da[A]])&&S[da[A]].push(T[O][da[A]]);var j=u("attrs,style,class,staticClass,staticStyle,key");return function(r,i,a,s,u,l){if(e(i))return void(t(r)&&_(r));var f=!1,p=[];if(e(r))f=!0,c(i,p,u,l);else{var d=t(r.nodeType);if(!d&&zt(r,i))w(r,i,p,s);else{if(d){if(1===r.nodeType&&r.hasAttribute(Ii)&&(r.removeAttribute(Ii),a=!0),n(a)&&k(r,i,p))return C(i,p,!0),r;r=o(r)}var v=r.elm,m=E.parentNode(v);if(c(i,p,v._leaveCb?null:m,E.nextSibling(v)),t(i.parent)){for(var g=i.parent;g;)g.elm=i.elm,g=g.parent;if(h(i))for(var y=0;y<S.create.length;++y)S.create[y](pa,i.parent)}t(m)?b(m,[r],0,0):t(r.tag)&&_(r)}}return C(i,p,f),i.elm}}({nodeOps:la,modules:Va});Ji&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&rr(e,"input")});var Ja={inserted:function(e,t,n){if("select"===n.tag){var r=function(){Qn(e,t,n.context)};r(),(zi||Ki)&&setTimeout(r,0)}else"textarea"!==n.tag&&"text"!==e.type&&"password"!==e.type||(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("change",nr),qi||(e.addEventListener("compositionstart",tr),e.addEventListener("compositionend",nr)),Ji&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Qn(e,t,n.context);(e.multiple?t.value.some(function(t){return Xn(t,e.options)}):t.value!==t.oldValue&&Xn(t.value,e.options))&&rr(e,"change")}}},Ka={bind:function(e,t,n){var r=t.value;n=ir(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i&&!Ji?(n.data.show=!0,qn(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;r!==t.oldValue&&(n=ir(n),n.data&&n.data.transition&&!Ji?(n.data.show=!0,r?qn(n,function(){e.style.display=e.__vOriginalDisplay}):Wn(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},qa={model:Ja,show:Ka},Wa={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},Za={name:"transition",props:Wa,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag}),n.length)){var i=this.mode,o=n[0];if(cr(this.$vnode))return o;var a=or(o);if(!a)return o;if(this._leaving)return sr(e,o);var s="__transition-"+this._uid+"-";a.key=null==a.key?s+a.tag:r(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=ar(this),u=this._vnode,l=or(u);if(a.data.directives&&a.data.directives.some(function(e){return"show"===e.name})&&(a.data.show=!0),l&&l.data&&!ur(a,l)){var f=l&&(l.data.transition=h({},c));if("out-in"===i)return this._leaving=!0,Y(f,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),sr(e,o);if("in-out"===i){var p,d=function(){p()};Y(c,"afterEnter",d),Y(c,"enterCancelled",d),Y(f,"delayLeave",function(e){p=e})}}return o}}},Ga=h({tag:String,moveClass:String},Wa);delete Ga.mode;var Ya={props:Ga,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=ar(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=e(t,null,u),this.removed=l}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";if(e.length&&this.hasMove(e[0].elm,t)){e.forEach(lr),e.forEach(fr),e.forEach(pr);var n=document.body;n.offsetHeight;e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;Hn(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Ma,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Ma,e),n._moveCb=null,Un(n,t))})}})}},methods:{hasMove:function(e,t){if(!Na)return!1;if(null!=this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){Rn(n,e)}),Pn(n,t),n.style.display="none",this.$el.appendChild(n);var r=zn(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}},Qa={Transition:Za,TransitionGroup:Ya};pt.config.mustUseProp=Yo,pt.config.isReservedTag=ca,pt.config.isReservedAttr=Zo,pt.config.getTagNamespace=St,pt.config.isUnknownElement=Tt,h(pt.options.directives,qa),h(pt.options.components,Qa),pt.prototype.__patch__=Ui?za:g,pt.prototype.$mount=function(e,t){return e=e&&Ui?Et(e):void 0,ve(this,e,t)},setTimeout(function(){Pi.devtools&&to&&to.emit("init",pt)},0);var Xa,es=!!Ui&&function(e,t){var n=document.createElement("div");return n.innerHTML='<div a="'+e+'">',n.innerHTML.indexOf(t)>0}("\n","&#10;"),ts=u("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),ns=u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),rs=u("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),is=[/"([^"]*)"+/.source,/'([^']*)'+/.source,/([^\s"'=<>`]+)/.source],os=new RegExp("^\\s*"+/([^\s"'<>\/=]+)/.source+"(?:\\s*("+/(?:=)/.source+")\\s*(?:"+is.join("|")+"))?"),as="[a-zA-Z_][\\w\\-\\.]*",ss=new RegExp("^<((?:"+as+"\\:)?"+as+")"),cs=/^\s*(\/?)>/,us=new RegExp("^<\\/((?:"+as+"\\:)?"+as+")[^>]*>"),ls=/^<!DOCTYPE [^>]+>/i,fs=/^<!--/,ps=/^<!\[/,ds=!1;"x".replace(/x(.)?/g,function(e,t){ds=""===t});var vs,hs,ms,gs,ys,_s,bs,$s,xs,ws,Cs,ks,As,Os,Ss,Ts,Es,js,Ns=u("script,style,textarea",!0),Ls={},Is={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n"},Ds=/&(?:lt|gt|quot|amp);/g,Ms=/&(?:lt|gt|quot|amp|#10);/g,Ps=/\{\{((?:.|\n)+?)\}\}/g,Rs=p(function(e){var t=e[0].replace(/[-.*+?^${}()|[\]\/\\]/g,"\\$&"),n=e[1].replace(/[-.*+?^${}()|[\]\/\\]/g,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),Fs=/^@|^v-on:/,Bs=/^v-|^@|^:/,Hs=/(.*?)\s+(?:in|of)\s+(.*)/,Us=/\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,Vs=/:(.*)$/,zs=/^:|^v-bind:/,Js=/\.[^.]+/g,Ks=p(dr),qs=/^xmlns:NS\d+/,Ws=/^NS\d+:/,Zs=p(Rr),Gs=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,Ys=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,Qs={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Xs=function(e){return"if("+e+")return null;"},ec={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Xs("$event.target !== $event.currentTarget"),ctrl:Xs("!$event.ctrlKey"),shift:Xs("!$event.shiftKey"),alt:Xs("!$event.altKey"),meta:Xs("!$event.metaKey"),left:Xs("'button' in $event && $event.button !== 0"),middle:Xs("'button' in $event && $event.button !== 1"),right:Xs("'button' in $event && $event.button !== 2")},tc={bind:Wr,cloak:g},nc={staticKeys:["staticClass"],transformNode:_i,genData:bi},rc={staticKeys:["staticStyle"],transformNode:$i,genData:xi},ic=[nc,rc],oc={model:bn,text:wi,html:Ci},ac={expectHTML:!0,modules:ic,directives:oc,isPreTag:sa,isUnaryTag:ts,mustUseProp:Yo,canBeLeftOpenTag:ns,isReservedTag:ca,getTagNamespace:St,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}(ic)},sc=function(e){function t(t,n){var r=Object.create(e),i=[],o=[];if(r.warn=function(e,t){(t?o:i).push(e)},n){n.modules&&(r.modules=(e.modules||[]).concat(n.modules)),n.directives&&(r.directives=h(Object.create(e.directives),n.directives));for(var a in n)"modules"!==a&&"directives"!==a&&(r[a]=n[a])}var s=gi(t,r);return s.errors=i,s.tips=o,s}function n(e,n,i){n=n||{};var o=n.delimiters?String(n.delimiters)+e:e;if(r[o])return r[o];var a=t(e,n),s={},c=[];s.render=yi(a.render,c);var u=a.staticRenderFns.length;s.staticRenderFns=new Array(u);for(var l=0;l<u;l++)s.staticRenderFns[l]=yi(a.staticRenderFns[l],c);return r[o]=s}var r=Object.create(null);return{compile:t,compileToFunctions:n}}(ac),cc=sc.compileToFunctions,uc=p(function(e){var t=Et(e);return t&&t.innerHTML}),lc=pt.prototype.$mount;return pt.prototype.$mount=function(e,t){if((e=e&&Et(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=uc(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=ki(e));if(r){var i=cc(r,{shouldDecodeNewlines:es,delimiters:n.delimiters},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return lc.call(this,e,t)},pt.compile=cc,pt});

/*
 * botui 0.3.4
 * A JS library to build the UI for your bot
 * https://botui.org
 *
 * Copyright 2017, Moin Uddin
 * Released under the MIT license.
*/

!function(e,t){"use strict";"function"==typeof define&&define.amd?define([],function(){return e.BotUI=t(e)}):e.BotUI=t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";return function(t,n){function o(e,t,n,o){return"<a class='botui-message-content-link' target='"+(o?"blank":"")+"' href='"+n+"'>"+t+"</a>"}function i(e){return e.replace(v.image,"<img class='botui-message-content-image' src='$2' alt='$1' />").replace(v.icon,"<i class='botui-icon botui-message-content-icon fa fa-$1'></i>").replace(v.link,o)}function r(e,t){var n=document.createElement("script");n.type="text/javascript",n.src=e,t&&(n.onload=t),document.body.appendChild(n)}function s(e){y.action.addMessage&&h.message.human({delay:100,content:e}),y.action.show=!y.action.autoHide}function a(e){if(!e.loading&&!e.content)throw Error('BotUI: "content" is required in a non-loading message object.');e.type=e.type||"text",e.visible=!e.delay&&!e.loading;var t=y.messages.push(e)-1;return new Promise(function(n,o){setTimeout(function(){e.delay&&(e.visible=!0,e.loading&&(e.loading=!1)),n(t)},e.delay||0)})}function u(e){return"string"==typeof e&&(e={content:e}),e||{}}function c(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}function d(e){if(!e.action)throw Error('BotUI: "action" property is required.')}function l(e){return d(e),c({type:"text",cssClass:"",autoHide:!0,addMessage:!0},e),y.action.type=e.type,y.action.cssClass=e.cssClass,y.action.autoHide=e.autoHide,y.action.addMessage=e.addMessage,new Promise(function(t,n){p=t,setTimeout(function(){y.action.show=!0},e.delay||0)})}if(n=n||{},!t)throw Error("BotUI: Container id is required as first argument.");if(!document.getElementById(t))throw Error("BotUI: Element with id #"+t+" does not exist.");if(!e.Vue&&!n.vue)throw Error("BotUI: Vue is required but not found.");var f,m,p,g={debug:!1,fontawesome:!0},h={},v={icon:/!\(([^\)]+)\)/gim,image:/!\[(.*?)\]\((.*?)\)/gim,link:/\[([^\[]+)\]\(([^\)]+)\)(\^?)/gim};e.Vue=e.Vue||n.vue;for(var b in g)n.hasOwnProperty(b)&&(g[b]=n[b]);e.Promise||Promise||options.promise||r("https://cdn.jsdelivr.net/es6-promise/4.1.0/es6-promise.min.js");var w={template:"<div class=\"botui botui-container\" v-botui-container><div class=\"botui-messages-container\"><div v-for=\"msg in messages\" class=\"botui-message\" :class=\"msg.cssClass\" v-botui-scroll><transition name=\"slide-fade\"><div v-if=\"msg.visible\" :class=\"[{human: msg.human, \'botui-message-content\': true}, msg.type]\"><span v-if=\"msg.type == \'text\'\" v-text=\"msg.content\" v-botui-markdown></span> <iframe v-if=\"msg.type == \'embed\'\" :src=\"msg.content\" frameborder=\"0\" allowfullscreen></iframe></div></transition><div v-if=\"msg.loading\" class=\"botui-message-content loading\"><i class=\"dot\"></i><i class=\"dot\"></i><i class=\"dot\"></i></div></div></div><div class=\"botui-actions-container\"><transition name=\"slide-fade\"><div v-if=\"action.show\" v-botui-scroll><form v-if=\"action.type == \'text\'\" class=\"botui-actions-text\" @submit.prevent=\"handle_action_text()\" :class=\"action.cssClass\"><i v-if=\"action.text.icon\" class=\"botui-icon botui-action-text-icon fa\" :class=\"\'fa-\' + action.text.icon\"></i> <input type=\"text\" ref=\"input\" :type=\"action.text.sub_type\" v-model=\"action.text.value\" class=\"botui-actions-text-input\" :placeholder=\"action.text.placeholder\" :size=\"action.text.size\" :value=\"action.text.value\" :class=\"action.text.cssClass\" required v-focus/> <button type=\"submit\" :class=\"{\'botui-actions-buttons-button\': !!action.text.button, \'botui-actions-text-submit\': !action.text.button}\"><i v-if=\"action.text.button && action.text.button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + action.text.button.icon\"></i> <span>{{(action.text.button && action.text.button.label) || \'Go\'}}</span></button></form><div v-if=\"action.type == \'button\'\" class=\"botui-actions-buttons\" :class=\"action.cssClass\"> <button type=\"button\" :class=\"button.cssClass\" class=\"botui-actions-buttons-button\" v-for=\"button in action.button.buttons\" @click=\"handle_action_button(button)\" autofocus><i v-if=\"button.icon\" class=\"botui-icon botui-action-button-icon fa\" :class=\"\'fa-\' + button.icon\"></i> {{button.text}}</button></div></div></transition></div></div>",data:function(){return{action:{text:{size:30,placeholder:"Write here .."},button:{},show:!1,type:"text",autoHide:!0,addMessage:!0},messages:[]}},computed:{isMobile:function(){return e.innerWidth&&e.innerWidth<=768}},methods:{handle_action_button:function(e){s(e.text);var t={type:"button",text:e.text,value:e.value};for(var n in e)e.hasOwnProperty(n)&&"type"!==n&&"text"!==n&&"value"!==n&&(t[n]=e[n]);p(t)},handle_action_text:function(){this.action.text.value&&(s(this.action.text.value),p({type:"text",value:this.action.text.value}),this.action.text.value="")}}};e.Vue.directive("botui-markdown",function(e,t){"false"!=t.value&&(e.innerHTML=i(e.textContent))}),e.Vue.directive("botui-scroll",{inserted:function(e){m.scrollTop=m.scrollHeight}}),e.Vue.directive("focus",{inserted:function(e){e.focus()}}),e.Vue.directive("botui-container",{inserted:function(e){m=e}}),f=new e.Vue({components:{"bot-ui":w}}).$mount("#"+t);var y=f.$children[0];return h.message={add:function(e){return a(u(e))},bot:function(e){return e=u(e),a(e)},human:function(e){return e=u(e),e.human=!0,a(e)},get:function(e){return Promise.resolve(y.messages[e])},remove:function(e){return y.messages.splice(e,1),Promise.resolve()},update:function(e,t){var n=y.messages[e];return n.content=t.content,n.visible=!t.loading,n.loading=!!t.loading,Promise.resolve(t.content)},removeAll:function(){return y.messages.splice(0,y.messages.length),Promise.resolve()}},h.action={show:l,hide:function(){return y.action.show=!1,Promise.resolve()},text:function(e){return d(e),y.action.text=e.action,l(e)},button:function(e){return d(e),e.type="button",y.action.button.buttons=e.action,l(e)}},g.fontawesome&&r("https://use.fontawesome.com/ea731dcb6f.js"),g.debug&&(h._botApp=f),h}});

function bot_ui_ini() {
    var botui = new BotUI("hello-cungudafa")
    botui.message.add({
        delay: 800,
        content: "Hi, there👋"
    }).then(function () {
        botui.message.add({
            delay: 1100,
            content: "这里是 cungudafa"
        }).then(function () {
            botui.message.add({
                delay: 1100,
                content: "一个可爱的女孩子~"
            }).then(function () {
                botui.action.button({
                    delay: 1600,
                    action: [{
                        text: "然后呢？ 😃",
                        value: "sure"
                    }, {
                        text: "少废话！ 🙄",
                        value: "skip"
                    }]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
    });
    var sure = function () {
            botui.message.add({
                delay: 600,
                content: "😘"
            }).then(function () {
                secondpart()
            })
        },
        end = function () {
            botui.message.add({
                delay: 600,
                content: "![...](https://view.moezx.cc/images/2018/05/06/a1c4cd0452528b572af37952489372b6.md.jpg)"
            })
        },
        secondpart = function () {
            botui.message.add({
                delay: 1500,
                content: "就读于重庆交通大学"
            }).then(function () {
                botui.message.add({
                    delay: 1500,
                    content: "是在计算机专业学物联网工程的程序媛"
                }).then(function () {
                    botui.message.add({
                        delay: 1200,
                        content: "将敲代码看成一种快乐"
                    }).then(function () {
                        botui.message.add({
                            delay: 1500,
                            content: "主修 Java 和 Python,略知 linux,偶尔也搞 HTML/CSS/JavaScript/Spring"
                        }).then(function () {
                            botui.message.add({
                                delay: 1500,
                                content: "专业方向，物联网及智能家居(Internet of things)及机器视觉(machine version)"
                            }).then(function () {
                                botui.message.add({
                                    delay: 1800,
                                    content: "喜欢看韩剧和玩手游"
                                }).then(function () {
                                    botui.action.button({
                                        delay: 1100,
                                        action: [{
                                            text: "为什么叫cungudafa呢？🤔",
                                            value: "why-cungudafa"
                                        }]
                                    }).then(function (a) {
                                        thirdpart()
                                    })
                                })
                            })
                        })
                    })
                })
            })
        },
        thirdpart = function () {
            botui.message.add({
                delay: 1E3,
                content: "cungudafa是村姑大发的拼音，大发在韩语发音中时很厉害的意思。"
            }).then(function () {
                botui.action.button({
                    delay: 1500,
                    action: [{
                        text: "为什么叫村姑呢？",
                        value: "why-cat"
                    }]
                }).then(function (a) {
                    fourthpart()
                })
            })
        },
        fourthpart = function () {
            botui.message.add({
                delay: 1E3,
                content: "我的游戏名叫村姑,后来也有人叫我村姑学姐 "
            }).then(function () {
                botui.message.add({
                    delay: 1100,
                    content: "希望自己打游戏很厉害吧，哈哈哈"
                }).then(function () {
                    botui.action.button({
                        delay: 1500,
                        action: [{
                            text: "域名有什么含义吗？",
                            value: "why-domain"
                        }]
                    }).then(function (a) {
                        fifthpart()
                    })
                })
            })
        },
        fifthpart = function () {
            botui.message.add({
                delay: 1E3,
                content: "emmmm,csdn,github,都是cungudafa哦"
            }).then(function () {
                botui.message.add({
                    delay: 1600,
                    content: "那么，相遇就是缘分，赏个赞吧 ^_^"
                })
            })
        } 
}
window.onload=function(){
    var LinkCards=document.getElementsByClassName('LinkCard');
    if(LinkCards.length != 0){
      var LinkCard=LinkCards[0];
      var link=LinkCard.href;
      var title=LinkCard.innerText;
      LinkCard.innerHTML="<style type=text/css>.LinkCard,.LinkCard:hover{text-decoration:none;border:none!important;color:inherit!important}.LinkCard{position:relative;display:block;margin:5px auto;width:330px;box-sizing:border-box;border-radius:12px;max-width:100%;overflow:hidden;color:inherit;text-decoration:none}.ztext{word-break:break-word;line-height:1.6}.LinkCard-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;background-repeat:no-repeat;-webkit-filter:blur(20px);filter:blur(20px);background-size:cover;background-position:center}.LinkCard,.LinkCard:hover{text-decoration:none;border:none!important;color:inherit!important}.LinkCard-content{position:relative;display:flex;align-items:center;justify-content:space-between;padding:12px;border-radius:inherit;background-color:rgba(246,246,246,0.88)}.LinkCard-text{overflow:hidden;width:260px;}.LinkCard-title{white-space: nowrap;display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;max-height:calc(16px * 1.25 * 2);font-size:16px;font-weight:500;line-height:1.25;color:#1a1a1a}@media(max-width: 767px){.LinkCard-title{font-size:13px;}}.LinkCard-meta{display:flex;margin-top:4px;font-size:14px;line-height:20px;color:#999;white-space:nowrap}.LinkCard-imageCell{margin-left:28px;border-radius:30px;width:70px;}.LinkCard-image{display:block;width:60px;height:auto;border-radius:inherit}</style><span class=LinkCard-backdrop style=background-image:url(https://zhstatic.zhihu.com/assets/zhihu/editor/zhihu-card-default.svg)></span><span class=LinkCard-content><span class=LinkCard-text><span class=LinkCard-title>"+title+"</span><span class=LinkCard-meta><span style=display:inline-flex;align-items:center><svg class="+"'Zi Zi--InsertLink'"+" fill=currentColor viewBox="+"'0 0 24 24'"+" width=17 height=17><path d="+"'M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z'"+" fill-rule=evenodd></path></svg></span>"+link+"</span></span><span class=LinkCard-imageCell><img class=LinkCard-image alt=图标 src=/images/linkcard.png></span></span>";
  
      for (var i = LinkCards.length - 1; i >= 1; i--) {
        LinkCard=LinkCards[i];
        title=LinkCard.innerText;
        link=LinkCard.href;
        LinkCard.innerHTML="<span class=LinkCard-backdrop style=background-image:url(https://zhstatic.zhihu.com/assets/zhihu/editor/zhihu-card-default.svg)></span><span class=LinkCard-content><span class=LinkCard-text><span class=LinkCard-title>"+title+"</span><span class=LinkCard-meta><span style=display:inline-flex;align-items:center><svg class="+"'Zi Zi--InsertLink'"+" fill=currentColor viewBox="+"'0 0 24 24'"+" width=17 height=17><path d="+"'M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z'"+" fill-rule=evenodd></path></svg></span>"+link+"</span></span><span class=LinkCard-imageCell><img class=LinkCard-image alt=图标 src=/images/linkcard.png></span></span>";
      }
    }
  }
;
var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (a) {
  return typeof a
} : function (a) {
  return a && typeof Symbol === 'function' && a.constructor === Symbol && a !== Symbol.prototype ? 'symbol' : typeof a
}

function cloneObject (a) {
  if (a == null || (typeof a === 'undefined' ? 'undefined' : _typeof(a)) != 'object') return a
  if (a instanceof Date) {
    var e = new Date(a.getDate())
    return e
  }
  if (a instanceof Array) {
    for (var e = [], c = 0, f = a.length; c < f; c++) e[c] = a[c]
    return e
  }
  if (a instanceof Object) {
    e = {}
    for (c in a) a.hasOwnProperty(c) && (e[c] = cloneObject(a[c]))
    return e
  }
}

mashiro_global.variables = new function () {
  this.has_bot_ui = false
  this.isNight = false
  this.skinSecter = false
}()
mashiro_global.ini = new function () {
  this.normalize = function () {
    lazyload()
    social_share()
    mashiro_global.post_list_show_animation.ini()
    copy_code_block()
    if (window.is_app) {
      try {
        setTimeout(function () {
          mashiro_option.app_update(true)
        }, 10000)
      } catch (e) {}
    }
    if ($('div').hasClass('poem-wrap')) {
      get_poem('#poem', '#info')
    }
    $(function () {
      function waveloop1 () {
        $('#banner_wave_1').css({
          'left': '-236px'
        }).animate({
          'left': '-1233px'
        }, 25000, 'linear', waveloop1)
      }

      function waveloop2 () {
        $('#banner_wave_2').css({
          'left': '0px'
        }).animate({
          'left': '-1009px'
        }, 60000, 'linear', waveloop2)
      }
      if (screen && screen.width > 860) {
        waveloop1()
        waveloop2()
      }
      if (navigator.userAgent.indexOf('AppleWebKit') != -1) {
        $('body').addClass('isWebKit')
      }
      hearthstone_deck_iframe()
    })
  }
  this.pjax = function () {
    pjaxInit()
    social_share()
    mashiro_global.post_list_show_animation.ini()
    copy_code_block()
    if ($('div').hasClass('poem-wrap')) {
      get_poem('#poem', '#info')
    }
    hearthstone_deck_iframe()
  }
}()
mashiro_global.lib = new function () {
  this.removeClass = function (ele, className) {
    var el = document.getElementById(ele)
    if (el.classList) {
      el.classList.remove(className)
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
    }
  }
  this.addClass = function (ele, className) {
    var el = document.getElementById(ele)
    if (el.classList) { el.classList.add(className) } else {
      el.className += ' ' + className
    }
  }
  this.hasClass = function (ele, className) {
    var el = document.getElementById(ele)
    if (el.classList) { var e = el.classList.contains(className) } else {
      var e = new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className)
    }
    return e
  }
  this.toggleClass = function (ele, className) {
    var el = document.getElementById(ele)
    if (el.classList) {
      el.classList.toggle(className)
    } else {
      var classes = el.className.split(' ')
      var existingIndex = classes.indexOf(className)
      if (existingIndex >= 0) {
        classes.splice(existingIndex, 1)
      } else { classes.push(className) }
      el.className = classes.join(' ')
    }
  }
  this.saveFile = function (url, file_name) {
    var xhr = new XMLHttpRequest()
    xhr.responseType = 'blob'
    xhr.onload = function () {
      var a = document.createElement('a')
      a.href = window.URL.createObjectURL(xhr.response)
      a.download = file_name
      a.style.display = 'none'
      document.body.appendChild(a)
      a.click()
    }
    xhr.open('GET', url)
    xhr.send()
  }
}()

function setCookie (name, value, days) {
  var expires = ''
  if (days) {
    var date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + mashiro_option.cookie_version_control + '=' + (value || '') + expires + '; path=/'
}

function getCookie (name) {
  var nameEQ = name + mashiro_option.cookie_version_control + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

function removeCookie (name) {
  document.cookie = name + mashiro_option.cookie_version_control + '=; Max-Age=-99999999;'
}

function jumpTo (url) {
  return mashiro_global.lib.pjax_to_url(url, '#page')
}

function injectStyles (rule) {
  var div = $('<div />', {
    html: '&shy;<style>' + rule + '</style>'
  }).appendTo('body')
}

function imgError (ele, type) {
  switch (type) {
    case 1:
      if (ele.src.includes('https://cn.gravatar.com/avatar')) {
        ele.src = ele.src.replace('https://cn.gravatar.com/avatar/', 'https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/other/gravatar.jpg')
      } else {
        ele.src = 'https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/other/default_avatar.jpg'
      }
      break
    case 2:
      ele.src = 'https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/other/default_gavatar.jpg'
      break
    case 3:

      ele.src = 'https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/other/image-404.png'
      break
    default:
      ele.src = 'https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/other/image-404.png'
  }
}
mashiro_global.post_list_show_animation = new function () {
  this.ini = function (ajax) {
    $('article.post-list-thumb').each(function (i) {
      if (ajax) {
        var window_height = $(window).height()
      } else {
        if ($('.headertop').hasClass('headertop-bar')) {
          var window_height = 0
        } else {
          var window_height = $(window).height() - 300
        }
      }
      if (!mashiro_global.landing_at_home) {
        window_height += 300
      }
      var article_height = $('article.post-list-thumb').eq(i).offset().top
      if ($(window).height() + $(window).scrollTop() >= article_height) {
        $('article.post-list-thumb').eq(i).addClass('post-list-show')
      }
      $(window).scroll(function () {
        var scrolltop = $(window).scrollTop()
        if (scrolltop + window_height >= article_height && scrolltop) {
          $('article.post-list-thumb').eq(i).addClass('post-list-show')
        }
      })
    })
  }
}()
mashiro_global.font_control = new function () {
  this.change_font = function () {
    if ($('body').hasClass('serif')) {
      $('body').removeClass('serif')
      $('.control-btn-serif').removeClass('selected')
      $('.control-btn-sans-serif').addClass('selected')
      setCookie('font_family', 'sans-serif', 30)
    } else {
      $('body').addClass('serif')
      $('.control-btn-serif').addClass('selected')
      $('.control-btn-sans-serif').removeClass('selected')
      setCookie('font_family', 'serif', 30)
      if (document.body.clientWidth <= 860) {
        addComment.createButterbar('将从网络加载字体，流量请注意')
      }
    }
  }
  this.ini = function () {
    if (document.body.clientWidth > 860) {
      if (!getCookie('font_family') || getCookie('font_family') == 'serif') { $('body').addClass('serif') }
    }
    if (getCookie('font_family') == 'sans-serif') {
      $('body').removeClass('sans-serif')
      $('.control-btn-serif').removeClass('selected')
      $('.control-btn-sans-serif').addClass('selected')
    }
  }
}()
mashiro_global.font_control.ini()

function code_highlight_style () {
  function gen_top_bar (i) {
    var attributes = {
      'autocomplete': 'off',
      'autocorrect': 'off',
      'autocapitalize': 'off',
      'spellcheck': 'false',
      'contenteditable': 'false',
      'design': 'by hojun'
    }
    var ele_name = $('pre:eq(' + i + ')')[0].children[0].className
    var lang = ele_name.substr(0, ele_name.indexOf(' ')).replace('language-', '')
    if (lang.toLowerCase() == 'hljs') var lang = 'text'
    if (lang.toLowerCase() == 'js') var lang = 'javascript'
    if (lang.toLowerCase() == 'md') var lang = 'markdown'
    if (lang.toLowerCase() == 'py') var lang = 'python'
    $('pre:eq(' + i + ')').addClass('highlight-wrap')
    for (var t in attributes) {
      $('pre:eq(' + i + ')').attr(t, attributes[t])
    }
    $('pre:eq(' + i + ') code').attr('data-rel', lang.toUpperCase())
  }
  $('pre code').each(function (i, block) {
    hljs.highlightBlock(block)
  })
  for (var i = 0; i < $('article pre').length; i++) {
    gen_top_bar(i)
  }
  $('pre').on('click', function (e) {
    if (e.target !== this) return
    $(this).toggleClass('code-block-fullscreen')
    $('html').toggleClass('code-block-fullscreen-html-scroll')
  })
  hljs.initLineNumbersOnLoad()
}
try {
  code_highlight_style()
} catch (e) {}

function copy_code_block () {
  $('pre code').each(function (i, block) {
    $(block).attr({ id: 'hljs-' + i })
    $(this).after('<a class="copy-code" href="javascript:" data-clipboard-target="#hljs-' + i + '" title="拷贝代码"><i class="fa fa-clipboard" aria-hidden="true"></i></a>')
  })
  var clipboard = new ClipboardJS('.copy-code')
}

function attach_image () {
  $('#upload-img-file').change(function () {
    if (this.files.length > 10) {
      addComment.createButterbar('每次上传上限为10张.<br>10 files max per request.')
      return 0
    }
    for (i = 0; i < this.files.length; i++) {
      if (this.files[i].size >= 5242880) {
        alert('图片上传大小限制为5 MB.\n5 MB max per file.\n\n「' + this.files[i].name + '」\n\n这张图太大啦~\nThis image is too large~')
      }
    }
    for (var i = 0; i < this.files.length; i++) {
      var f = this.files[i]
      var formData = new FormData()
      formData.append('smfile', f)
      $.ajax({
        url: 'https://sm.ms/api/upload',
        type: 'POST',
        processData: false,
        contentType: false,
        data: formData,
        beforeSend: function (xhr) {
          $('.insert-image-tips').html('<i class="fa fa-spinner rotating" aria-hidden="true"></i>')
          addComment.createButterbar('上传中...<br>Uploading...')
        }, success: function (res) {
          $('.insert-image-tips').html('<i class="fa fa-check" aria-hidden="true"></i>')
          setTimeout(function () {
            $('.insert-image-tips').html('<i class="fa fa-picture-o" aria-hidden="true"></i>')
          }, 1000)
          var get_the_url = res.data.url.replace('https://i.loli.net/', 'https://static.shino.cc/user-upload/')
          $('#upload-img-show').append('<img class="lazyload upload-image-preview" src="https://cdn.jsdelivr.net/gh/moezx/cdn@3.0.2/img/svg/loader/trans.ajax-spinner-preloader.svg" data-src="' + get_the_url + '" onclick="window.open(\'' + get_the_url + '\')" onerror="imgError(this)" />')
          lazyload()
          addComment.createButterbar('图片上传成功~<br>Uploaded successfully~')
          grin(res.data.url.replace('https://i.loli.net/', '{UPLOAD}'), type = 'Img')
        }, error: function () {
          $('.insert-image-tips').html('<i class="fa fa-times" aria-hidden="true" style="color:red"></i>')
          alert('上传失败，请重试.\nUpload failed, please try again.')
          setTimeout(function () {
            $('.insert-image-tips').html('<i class="fa fa-picture-o" aria-hidden="true"></i>')
          }, 1000)
        }
      })
    }
  })
}

function clean_upload_images () {
  $('#upload-img-show').html('')
}

function add_upload_tips () {
  $('<div class="insert-image-tips popup"><i class="fa fa-picture-o" aria-hidden="true"></i><span class="insert-img-popuptext" id="uploadTipPopup">上传图片</span></div><input id="upload-img-file" type="file" accept="image/*" multiple="multiple" class="insert-image-button">').insertAfter($('.form-submit #submit'))
  attach_image()
  $('#upload-img-file').hover(function () {
    $('.insert-image-tips').addClass('insert-image-tips-hover')
    $('#uploadTipPopup').addClass('show')
  }, function () {
    $('.insert-image-tips').removeClass('insert-image-tips-hover')
    $('#uploadTipPopup').removeClass('show')
  })
}

function click_to_view_image () {
  $('.comment_inline_img').click(function () {
    var temp_url = $(this).attr('src')
    window.open(temp_url)
  })
}
click_to_view_image()

function original_emoji_click () {
  $('.emoji-item').click(function () {
    grin($(this).text(), type = 'custom', before = '`', after = '` ')
  })
}
original_emoji_click()

function showPopup (ele) {
  var popup = ele.querySelector('#thePopup')
  popup.classList.toggle('show')
}

function cmt_showPopup (ele) {
  var popup = $(ele).find('#thePopup')
  popup.addClass('show')
  $(ele).find('input').blur(function () {
    popup.removeClass('show')
  })
}

function headertop_down () {
  var coverOffset = $('#content').offset().top
  $('html,body').animate({
    scrollTop: coverOffset
  }, 600)
}

function scrollBar () {
  if (document.body.clientWidth > 860) {
    $(window).scroll(function () {
      var s = $(window).scrollTop()
      var a = $(document).height()
      var b = $(window).height()
      var result = parseInt(s / (a - b) * 100)
      $('#bar').css('width', result + '%')
      if (false) {
        if (result >= 0 && result <= 19) {
          $('#bar').css('background', '#cccccc')
        }
        if (result >= 20 && result <= 39) { $('#bar').css('background', '#50bcb6') }
        if (result >= 40 && result <= 59) {
          $('#bar').css('background', '#85c440')
        }
        if (result >= 60 && result <= 79) {
          $('#bar').css('background', '#f2b63c')
        }
        if (result >= 80 && result <= 99) { $('#bar').css('background', '#FF0000') }
        if (result == 100) {
          $('#bar').css('background', '#5aaadb')
        }
      } else {
        $('#bar').css('background', 'orange')
      }
      $('.toc-container').css('height', $('.site-content').outerHeight())
      $('.skin-menu').removeClass('show')
    })
  }
}
scrollBar()
'主题切换代码好恶心，有空一定要重构'

function checkBgImgCookie () {
  var bgurl = getCookie('bgImgSetting')
  if (!bgurl) {
    $('#banner_wave_1').removeClass('banner_wave_hide_fit_skin')
    $('#banner_wave_2').removeClass('banner_wave_hide_fit_skin')
  } else {
    $('#banner_wave_1').addClass('banner_wave_hide_fit_skin')
    $('#banner_wave_2').addClass('banner_wave_hide_fit_skin')
  }
  if (bgurl != '') {
    if (bgurl == 'https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/sakura.png' || bgurl == 'https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/plaid.jpg' || bgurl == 'https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/star.png' || bgurl == 'https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/point.png' || bgurl == 'https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/little-monster.png') {
      mashiro_global.variables.skinSecter = true
      mashiro_global.variables.isNight = false
      $('#night-mode-cover').css('visibility', 'hidden')
      $('body').css('background-image', 'url(' + bgurl + ')')
      $('.blank').css('background-color', 'rgba(255,255,255,1)')
      $('.pattern-center').removeClass('pattern-center').addClass('pattern-center-sakura')
      $('.headertop-bar').removeClass('headertop-bar').addClass('headertop-bar-sakura')
    } else if (bgurl == 'https://api.shino.cc/bing/') {
      mashiro_global.variables.skinSecter = true
      mashiro_global.variables.isNight = true
      $('#night-mode-cover').css('visibility', 'hidden')
      $('body').css('background-image', 'url(' + bgurl + ')')
      $('.blank').css('background-color', 'rgba(255,255,255,1)')
      $('.pattern-center').removeClass('pattern-center').addClass('pattern-center-sakura')
      $('.headertop-bar').removeClass('headertop-bar').addClass('headertop-bar-sakura')
    } else {}
  } else {
    return false
  }
}
if (document.body.clientWidth > 860) {
  checkBgImgCookie()
}

function no_right_click () {
  $('.post-thumb img').bind('contextmenu', function (e) {
    return false
  })
}
if (mashiro_global.variables.isNight) {
  $('.changeSkin-gear, .toc').css('background', 'rgba(255,255,255,0.8)')
} else {
  $('.changeSkin-gear, .toc').css('background', 'none')
}
$(document).ready(function () {
  function changeBG (tagid, url) {
    $('.skin-menu ' + tagid).click(function () {
      mashiro_global.variables.skinSecter = true
      mashiro_global.variables.isNight = false
      $('#night-mode-cover').css('visibility', 'hidden')
      $('body').css('background-image', 'url(' + url + ')')
      $('.blank').css('background-color', 'rgba(255,255,255,1)')
      $('.pattern-center').removeClass('pattern-center').addClass('pattern-center-sakura')
      $('.headertop-bar').removeClass('headertop-bar').addClass('headertop-bar-sakura')
      $('#banner_wave_1').addClass('banner_wave_hide_fit_skin')
      $('#banner_wave_2').addClass('banner_wave_hide_fit_skin')
      closeSkinMenu()
      setCookie('bgImgSetting', url, 30)
    })
  }

  function changeBGnoTrans (tagid, url) {
    $('.skin-menu ' + tagid).click(function () {
      mashiro_global.variables.skinSecter = true
      mashiro_global.variables.isNight = true
      $('#night-mode-cover').css('visibility', 'hidden')
      $('body').css('background-image', 'url(' + url + ')')
      $('.blank').css('background-color', 'rgba(255,255,255,1)')
      $('.pattern-center').removeClass('pattern-center').addClass('pattern-center-sakura')
      $('.headertop-bar').removeClass('headertop-bar').addClass('headertop-bar-sakura')
      $('#banner_wave_1').addClass('banner_wave_hide_fit_skin')
      $('#banner_wave_2').addClass('banner_wave_hide_fit_skin')
      closeSkinMenu()
      setCookie('bgImgSetting', url, 30)
    })
  }
  changeBG('#sakura-bg', 'https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/sakura.png')
  changeBG('#gribs-bg', 'https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/plaid.jpg')
  changeBG('#pixiv-bg', 'https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/star.png')
  changeBG('#KAdots-bg', 'https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/point.png')
  changeBG('#totem-bg', 'https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/themebg/little-monster.png')
  changeBGnoTrans('#bing-bg', 'https://api.shino.cc/bing/')
  $('.skin-menu #white-bg').click(function () {
    mashiro_global.variables.skinSecter = false
    mashiro_global.variables.isNight = false
    $('#night-mode-cover').css('visibility', 'hidden')
    $('body').css('background-image', 'none')
    $('.blank').css('background-color', 'rgba(255,255,255,.0)')
    $('.pattern-center-sakura').removeClass('pattern-center-sakura').addClass('pattern-center')
    $('.headertop-bar-sakura').removeClass('headertop-bar-sakura').addClass('headertop-bar')
    $('#banner_wave_1').removeClass('banner_wave_hide_fit_skin')
    $('#banner_wave_2').removeClass('banner_wave_hide_fit_skin')
    closeSkinMenu()
    setCookie('bgImgSetting', '', 30)
  })
  $('.skin-menu #dark-bg').click(function () {
    mashiro_global.variables.skinSecter = true
    mashiro_global.variables.isNight = true
    $('body').css('background-image', 'url(https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/other/starry_sky.png)')
    $('.blank').css('background-color', 'rgba(255,255,255,.8)')
    $('#night-mode-cover').css('visibility', 'visible')
    $('.pattern-center').removeClass('pattern-center').addClass('pattern-center-sakura')
    $('.headertop-bar').removeClass('headertop-bar').addClass('headertop-bar-sakura')
    $('#banner_wave_1').addClass('banner_wave_hide_fit_skin')
    $('#banner_wave_2').addClass('banner_wave_hide_fit_skin')
    closeSkinMenu()
  })

  function closeSkinMenu () {
    $('.skin-menu').removeClass('show')
    setTimeout(function () {
      $('.changeSkin-gear').css('visibility', 'visible')
    }, 300)
    if (mashiro_global.variables.isNight) {
      $('.changeSkin-gear, .toc').css('background', 'rgba(255,255,255,0.8)')
    } else {
      $('.changeSkin-gear, .toc').css('background', 'none')
    }
  }
  $('.changeSkin-gear').click(function () {
    $('.skin-menu').toggleClass('show')
    if (mashiro_global.variables.isNight) {
      $('.changeSkin').css('background', 'rgba(255,255,255,0.8)')
    } else {
      $('.changeSkin').css('background', 'none')
    }
  })
  $('.skin-menu #close-skinMenu').click(function () {
    closeSkinMenu()
  })
  add_upload_tips()
})

function nextBG () {
  bgindex = bgindex + 1
  console.log(bg[Math.abs(bgindex % bg.length)])
  $('.centerbg').css('background-image', 'url("' + bg[Math.abs(bgindex % bg.length)] + '")')
}

function preBG () {
  bgindex = bgindex - 1
  console.log(bg[Math.abs(bgindex % bg.length)])
  $('.centerbg').css('background-image', 'url("' + bg[Math.abs(bgindex % bg.length)] + '")')
}
$(document).ready(function () {
  var bgindex = Math.floor(Math.random() * bg.length)
  $('.centerbg').css('background-image', 'url("' + bg[bgindex] + '")')
  $('#bg-next').click(function () {
    nextBG()
  })
  $('#bg-pre').click(function () {
    preBG()
  })
})
if (document.body.clientWidth <= 860 && !window.is_app) {
  window.onscroll = function () {
    scrollFunction()
  }

  function scrollFunction () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('moblieGoTop').style.display = 'block'
    } else {
      document.getElementById('moblieGoTop').style.display = 'none'
    }
  }

  function topFunction () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
}

function reload_show_date_time () {
  BirthDay = new Date('06/02/2017 18:00:00')
  today = new Date()
  timeold = (today.getTime() - BirthDay.getTime())
  sectimeold = timeold / 1000
  secondsold = Math.floor(sectimeold)
  msPerDay = 24 * 60 * 60 * 1000
  e_daysold = timeold / msPerDay
  daysold = Math.floor(e_daysold)
  monitorday.innerHTML = daysold
}

function timeSeriesReload (flag) {
  if (flag == true) {
    $('#archives span.al_mon').click(function () {
      $(this).next().slideToggle(400)
      return false
    })
    lazyload()
  } else {
    (function () {
      $('#al_expand_collapse,#archives span.al_mon').css({
        cursor: 's-resize'
      })
      $('#archives span.al_mon').each(function () {
        var num = $(this).next().children('li').length
        $(this).children('#post-num').text(num)
      })
      var $al_post_list = $('#archives ul.al_post_list'),
        $al_post_list_f = $('#archives ul.al_post_list:first')
      $al_post_list.hide(1, function () {
        $al_post_list_f.show()
      })
      $('#archives span.al_mon').click(function () {
        $(this).next().slideToggle(400)
        return false
      })
      if (document.body.clientWidth > 860) {
        $('#archives li.al_li').mouseover(function () {
          $(this).children('.al_post_list').show(400)
          return false
        })
        if (false) {
          $('#archives li.al_li').mouseout(function () {
            $(this).children('.al_post_list').hide(400)
            return false
          })
        }
      }
      var al_expand_collapse_click = 0
      $('#al_expand_collapse').click(function () {
        if (al_expand_collapse_click == 0) {
          $al_post_list.show()
          al_expand_collapse_click++
        } else if (al_expand_collapse_click == 1) {
          $al_post_list.hide()
          al_expand_collapse_click--
        }
      })
    })()
  }
}
timeSeriesReload()

var pjaxInit = function () {
  add_upload_tips()
  click_to_view_image()
  original_emoji_click()
  mashiro_global.font_control.ini()
  $('p').remove('.head-copyright')
  try {
    code_highlight_style()
  } catch (e) {};
  try {
    inlojv_js_getqqinfo()
  } catch (e) {};
  lazyload()
    // if ($("div").hasClass("popcontainer")) {
    //     loadBotui();
    // }
  try {
    reload_show_date_time()
  } catch (e) {}
  if (mashiro_global.variables.skinSecter === true) {
    $('.pattern-center').removeClass('pattern-center').addClass('pattern-center-sakura')
    $('.headertop-bar').removeClass('headertop-bar').addClass('headertop-bar-sakura')
    if (mashiro_global.variables.isNight) {
      $('.blank').css('background-color', 'rgba(255,255,255,1)')
      $('.toc').css('background-color', 'rgba(255,255,255,0.8)')
    }
  }
  $('.iconflat').css('width', '50px').css('height', '50px')
  $('.openNav').css('height', '50px')
  $('#bg-next').click(function () {
    nextBG()
  })
  $('#bg-pre').click(function () {
    preBG()
  })
  smileBoxToggle()
  timeSeriesReload()
  add_copyright()
  console.log($('#myscript').text())
}
$(document).on('click', '.sm', function () {
  var msg = '您真的要设为私密吗？'
  if (confirm(msg) == true) {
    $(this).commentPrivate()
  } else {
    aler('已取消')
  }
})
$.fn.commentPrivate = function () {
  if ($(this).hasClass('private_now')) {
    alert('您之前已设过私密评论')
    return false
  } else {
    $(this).addClass('private_now')
    var idp = $(this).data('idp'),
      actionp = $(this).data('actionp'),
      rateHolderp = $(this).children('.has_set_private')
    var ajax_data = {
      action: 'siren_private',
      p_id: idp,
      p_action: actionp
    }
    $.post('/wp-admin/admin-ajax.php', ajax_data, function (data) {
      $(rateHolderp).html(data)
    })
    return false
  }
}

function show_date_time () {
  BirthDay = new Date('2020-02-11 18:00:00')
  today = new Date()
  timeold = (today.getTime() - BirthDay.getTime())
  sectimeold = timeold / 1000
  secondsold = Math.floor(sectimeold)
  msPerDay = 24 * 60 * 60 * 1000
  e_daysold = timeold / msPerDay
  daysold = Math.floor(e_daysold)
  monitorday.innerHTML = daysold
}
try {
  show_date_time()
} catch (e) {}
POWERMODE.colorful = true
POWERMODE.shake = false
document.body.addEventListener('input', POWERMODE)

function motionSwitch (ele) {
  var motionEles = ['.bili', '.menhera', '.tieba']
  for (var i in motionEles) {
    $(motionEles[i] + '-bar').removeClass('on-hover')
    $(motionEles[i] + '-container').css('display', 'none')
  }
  $(ele + '-bar').addClass('on-hover')
  $(ele + '-container').css('display', 'block')
}
$('.comt-addsmilies').click(function () {
  $('.comt-smilies').toggle()
})
$('.comt-smilies a').click(function () {
  $(this).parent().hide()
})

function smileBoxToggle () {
  $(document).ready(function () {
    $('#emotion-toggle').click(function () {
      $('.emotion-toggle-off').toggle(0)
      $('.emotion-toggle-on').toggle(0)
      $('.emotion-box').toggle(160)
    })
  })
}
smileBoxToggle()

function grin (tag, type, before, after) {
  var myField
  if (type == 'custom') {
    tag = before + tag + after
  } else if (type == 'Img') {
    tag = '[img]' + tag + '[/img]'
  } else if (type == 'Math') {
    tag = ' f(x)=∫(' + tag + ')sec²xdx '
  } else {
    tag = ' :' + tag + ': '
  }
  if (document.getElementById('comment') && document.getElementById('comment').type == 'textarea') {
    myField = document.getElementById('comment')
  } else {
    return false
  }
  if (document.selection) {
    myField.focus()
    sel = document.selection.createRange()
    sel.text = tag
    myField.focus()
  } else if (myField.selectionStart || myField.selectionStart == '0') {
    var startPos = myField.selectionStart
    var endPos = myField.selectionEnd
    var cursorPos = endPos
    myField.value = myField.value.substring(0, startPos) + tag + myField.value.substring(endPos, myField.value.length)
    cursorPos += tag.length
    myField.focus()
    myField.selectionStart = cursorPos
    myField.selectionEnd = cursorPos
  } else {
    myField.value += tag
    myField.focus()
  }
}
// if ($("div").hasClass("popcontainer")) {
//     loadBotui();
// }
// $("bot-ui").click(function () {
//     loadBotui();
// });

function add_copyright () {
  document.body.addEventListener('copy', function (e) {
    if (!mashiro_global.is_user_logged_in && window.getSelection().toString().length > 30) {
      if(mashiro_option.copyright_enable.indexOf("false")!= -1 && window.getSelection().toString().length > mashiro_option.copyright_minCharNumber){//判断是否允许复制，false不允许，添加复制作者信息
        setClipboardText(e)
      }
    }
  })
  
  function setClipboardText (event) {
    event.preventDefault()
    var htmlData = '' + mashiro_option.copyright_description +'<br>' + '作者：' + mashiro_option.author_name + '<br>' + '链接：' + window.location.href + '<br>' + '来源：' + mashiro_option.site_name + '<br><br>' + window.getSelection().toString().replace(/\r\n/g, '<br>')
    var textData = '' + mashiro_option.copyright_description +'\n' + '作者：' + mashiro_option.author_name + '\n' + '链接：' + window.location.href + '\n' + '来源：' + mashiro_option.site_name + '\n\n' + window.getSelection().toString().replace(/\r\n/g, '\n')
    if (event.clipboardData) {
      event.clipboardData.setData('text/html', htmlData)
      event.clipboardData.setData('text/plain', textData)
      addComment.createButterbar('复制成功！<br>Copied to clipboard successfully!', 1000)
    } else if (window.clipboardData) {
      return window.clipboardData.setData('text', textData)
    }
  }
}
add_copyright()
$(function () {
  inlojv_js_getqqinfo()
})

function inlojv_js_getqqinfo () {
  var is_get_by_qq = false
  var qq_test = /^[0-9]+$/
  if (!getCookie('user_qq') && !getCookie('user_qq_email') && !getCookie('user_author')) {
    $('input#qq,input#author,input#email,input#url').val('')
  }
  if (getCookie('user_avatar') && getCookie('user_qq') && getCookie('user_qq_email')) {
    $('div.comment-user-avatar img').attr('src', getCookie('user_avatar'))
    $('input#author').val(getCookie('user_author'))
    $('input#email').val(getCookie('user_qq') + '@qq.com')
    $('input#qq').val(getCookie('user_qq'))
    if (mashiro_option.qzone_autocomplete) {
      $('input#url').val('https://user.qzone.qq.com/' + getCookie('user_qq'))
    }
    if ($('input#qq').val()) {
      $('.qq-check').css('display', 'block')
      $('.gravatar-check').css('display', 'none')
    }
  }
  var emailAddressFlag = $('input#email').val()
  $('input#author').on('blur', function () {
    var qq = $('input#author').val()
    $.ajax({
      type: 'get',
      url: mashiro_option.qq_api_url + '?type=getqqnickname&qq=' + qq,
      dataType: 'jsonp',
      jsonp: 'callback',
      jsonpCallback: 'portraitCallBack',
      success: function (data) {
        $('input#author').val(data[qq][6])
        $('input#email').val($.trim(qq) + '@qq.com')
        if (mashiro_option.qzone_autocomplete) {
          $('input#url').val('https://user.qzone.qq.com/' + $.trim(qq))
        }
        $('div.comment-user-avatar img').attr('src', 'https://q2.qlogo.cn/headimg_dl?dst_uin=' + qq + '&spec=100')
        is_get_by_qq = true
        $('input#qq').val($.trim(qq))
        if ($('input#qq').val()) {
          $('.qq-check').css('display', 'block')
          $('.gravatar-check').css('display', 'none')
        }
        setCookie('user_author', data[qq][6], 30)
        setCookie('user_qq', qq, 30)
        setCookie('is_user_qq', 'yes', 30)
        setCookie('user_qq_email', qq + '@qq.com', 30)
        setCookie('user_email', qq + '@qq.com', 30)
        emailAddressFlag = $('input#email').val()
      }, error: function () {
        if (qq_test.test(qq)) {
          addComment.createButterbar('QQ号不存在（建议不要使用纯数字昵称）')
        }
        $('input#qq').val('')
        $('.qq-check').css('display', 'none')
        $('.gravatar-check').css('display', 'block')
        $('div.comment-user-avatar img').attr('src', get_gravatar($('input#email').val(), 80))
        setCookie('user_qq', '', 30)
        setCookie('user_email', $('input#email').val(), 30)
        setCookie('user_avatar', get_gravatar($('input#email').val(), 80), 30)
      }
    })
    $.ajax({
      type: 'get',
      url: mashiro_option.qq_avatar_api_url + '?type=getqqavatar&qq=' + qq,
      dataType: 'jsonp',
      jsonp: 'callback',
      jsonpCallback: 'qqavatarCallBack',
      beforeSend: function () {
        if (qq_test.test(qq)) {
          addComment.createButterbar('正在获取QQ头像...')
        }
      }, success: function (data) {
        $('div.comment-user-avatar img').attr('src', data[qq])
        addComment.createButterbar('QQ头像获取成功')
        setCookie('user_avatar', data[qq], 30)
      }, error: function () {
        if (qq_test.test(qq)) {
          addComment.createButterbar('QQ号不存在（建议不要使用纯数字昵称）')
        }
        $('input#qq', 'input#email', 'input#url').val('')
        if (!$('input#qq').val()) {
          $('.qq-check').css('display', 'none')
          $('.gravatar-check').css('display', 'block')
          setCookie('user_qq', '', 30)
          $('div.comment-user-avatar img').attr('src', get_gravatar($('input#email').val(), 80))
          setCookie('user_avatar', get_gravatar($('input#email').val(), 80), 30)
        }
      }
    })
  })
  if (getCookie('user_avatar') && getCookie('user_email') && getCookie('is_user_qq') == 'no' && !getCookie('user_qq_email')) {
    $('div.comment-user-avatar img').attr('src', getCookie('user_avatar'))
    $('input#email').val(getCookie('user_email'))
    $('input#qq').val('')
    if (!$('input#qq').val()) {
      $('.qq-check').css('display', 'none')
      $('.gravatar-check').css('display', 'block')
    }
  }
  $('input#email').on('blur', function () {
    var emailAddress = $('input#email').val()
    if (is_get_by_qq == false || emailAddressFlag != emailAddress) {
      $('div.comment-user-avatar img').attr('src', get_gravatar(emailAddress, 80))
      setCookie('user_avatar', get_gravatar(emailAddress, 80), 30)
      setCookie('user_email', emailAddress, 30)
      setCookie('user_qq_email', '', 30)
      setCookie('is_user_qq', 'no', 30)
      $('input#qq').val('')
      if (!$('input#qq').val()) {
        $('.qq-check').css('display', 'none')
        $('.gravatar-check').css('display', 'block')
      }
    }
  })
  if (getCookie('user_url')) {
    $('input#url').val(getCookie('user_url'))
  }
  $('input#url').on('blur', function () {
    var URL_Address = $('input#url').val()
    $('input#url').val(URL_Address)
    setCookie('user_url', URL_Address, 30)
  })
  if (getCookie('user_author')) {
    $('input#author').val(getCookie('user_author'))
  }
  $('input#author').on('blur', function () {
    var user_name = $('input#author').val()
    $('input#author').val(user_name)
    setCookie('user_author', user_name, 30)
  })
}

function get_poem (poem_ele, info_ele) {
  var poem = document.querySelector(poem_ele)
  var info = document.querySelector(info_ele)
  var xhr = new XMLHttpRequest()
  xhr.open('get', 'https://v2.jinrishici.com/one.json')
  xhr.withCredentials = true
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText)
      poem.innerHTML = data.data.content
      info.innerHTML = '【' + data.data.origin.dynasty + '】' + data.data.origin.author + '《' + data.data.origin.title + '》'
    }
  }
  xhr.send()
}

// function loadBotui() {
//     if ($('div').hasClass('popcontainer')) {
//         if (mashiro_global.variables.has_bot_ui) {
//             bot_ui_ini();
//         } else {
//             $.getScript('https://cdn.jsdelivr.net/gh/moezx/cdn@latest/js/botui/botui.js', function () {
//                 bot_ui_ini();
//                 mashiro_global.variables.has_bot_ui = true;
//             });
//         }
//     }
// }

function mail_me () {
  var mail = 'mailto:' + mashiro_option.email_name + '@' + mashiro_option.email_domain
  window.open(mail)
}

function hearthstone_deck_iframe () {
  if ($('iframe').hasClass('hearthstone-deck')) {
    $('.hearthstone-deck').each(function () {
      $(this).attr('height', $(this).width() * 5 / 9 + 'px')
    })
    $('.hearthstone-deck-container').each(function () {
      var deck_container_height_fix = $(this).width() * 5 / 9 + 14
      $(this).css('height', deck_container_height_fix + 'px')
    })
  }
}
var currentFontIsUbuntu = true

// function changeFont() {
//     if (currentFontIsUbuntu) {
//         loadCSS("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.8/css/cn.css");
//         currentFontIsUbuntu = false;
//     } else {
//         loadCSS("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.8/css/or.css");
//         currentFontIsUbuntu = true;
//     }
// }

// function convertChinese(zh) {
//     if (zh == 'cn') {
//         $("#zh_cn").css("display", "none");
//         $("#zh_tw").css("display", "inline-block");
//         loadCSS("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.8/css/tw.css");
//     }
//     if (zh == 'tw') {
//         $("#zh_tw").css("display", "none");
//         $("#zh_cn").css("display", "inline-block");
//         loadCSS("https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.8/css/cn.css");
//     }
// }
mashiro_global.ini.normalize()

var home = location.href,
  s = $('#bgvideo')[0],
  Siren = {
    BSZ: function() {
      $.getScript('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js')
    },
    TOC: function () {
      if ($('.toc').length > 0 && document.body.clientWidth > 1200) {
        if ($(".pattern-center").length > 0) { //有图的情况
          tocbot.init({
              // Where to render the table of contents.
              tocSelector: '.toc', // 放置目录的容器
              // Where to grab the headings to build the table of contents.
              contentSelector: '.entry-content', // 正文内容所在
              // Which headings to grab inside of the contentSelector element.
              scrollSmooth: true,
              headingSelector: 'h1, h2, h3, h4, h5', // 需要索引的标题级别
              headingsOffset: -400,
              scrollSmoothOffset: -85
          });
        } else {
          tocbot.init({
              // Where to render the table of contents.
              tocSelector: '.toc', // 放置目录的容器
              // Where to grab the headings to build the table of contents.
              contentSelector: '.entry-content', // 正文内容所在
              // Which headings to grab inside of the contentSelector element.
              scrollSmooth: true,
              headingSelector: 'h1, h2, h3, h4, h5', // 需要索引的标题级别
              headingsOffset: -85,
              scrollSmoothOffset: -85
          });
        }
        var offsetTop = $('.toc').offset().top - 135
        window.onscroll = function () {
          var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if (scrollTop >= offsetTop) {
            $('.toc').addClass('toc-fixed')
          } else {
            $('.toc').removeClass('toc-fixed')
          }
        }
        $.getScript('//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js');
      }
    },
    AB: function () {
      if (window.location.pathname.indexOf('about') > -1) {
        $.getScript('/js/botui.js', function () {
          if (typeof(botui) == undefined && !botui.message) {
            bot_ui_ini()
          }
        })
      }
    },
    VA: function () {
      if (!valine) {//注意
        var valine = new Valine()
        valine.init({
          el: '#vcomments',
          appId: mashiro_option.v_appId,
          appKey: mashiro_option.v_appKey,
          comment_count: true,
          notify: false,
          verify: true,
          path: window.location.pathname,
          placeholder: "祝开开心心！",
          avatar: 'monsterid'
        })
      }
    },
    MJ: function () {
      if (mashiro_option.mathjax == '1') {
        $.getScript('//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-MML-AM_CHTML', function () {
          MathJax.Hub.Config({tex2jax: {inlineMath: [['$', '$'], ['\\(', '\\)']]}})
          var math = document.getElementsByClassName('entry-content')[0]
          MathJax.Hub.Queue(['Typeset', MathJax.Hub, math])
        })
      }
    },
    MN: function () {
      $('.iconflat').on('click', function () {
        if ($('#main-container').hasClass('open')) {
          $('.iconflat').css('width', '50px').css('height', '50px')
          $('.openNav').css('height', '50px')
        } else {
          $('.iconflat').css('width', '100%').css('height', '100%')
          $('.openNav').css('height', '100%')
        }
        $('body').toggleClass('navOpen')
        $('#main-container,#mo-nav,.openNav').toggleClass('open')
      })
    }, MNH: function () {
      if ($('body').hasClass('navOpen')) {
        $('body').toggleClass('navOpen')
        $('#main-container,#mo-nav,.openNav').toggleClass('open')
      }
    }, splay: function () {
      $('#video-btn').addClass('video-pause').removeClass('video-play').show()
      $('.video-stu').css({
        'bottom': '-100px'
      })
      $('.focusinfo').css({
        'top': '-999px'
      })
      $('#banner_wave_1').addClass('banner_wave_hide')
      $('#banner_wave_2').addClass('banner_wave_hide')
            // for (var i = 0; i < ap.length; i++) {
            //     try {
            //         ap[i].destroy()
            //     } catch (e) {}
            // }
            // try {
            //     hermitInit()
            // } catch (e) {}
      s.play()
    }, spause: function () {
      $('#video-btn').addClass('video-play').removeClass('video-pause')
      $('.focusinfo').css({
        'top': '49.3%'
      })
      $('#banner_wave_1').removeClass('banner_wave_hide')
      $('#banner_wave_2').removeClass('banner_wave_hide')
      s.pause()
    }, liveplay: function () {
      if (s.oncanplay != undefined && $('.haslive').length > 0) {
        if ($('.videolive').length > 0) {
          Siren.splay()
        }
      }
    }, livepause: function () {
      if (s.oncanplay != undefined && $('.haslive').length > 0) {
        Siren.spause()
        $('.video-stu').css({
          'bottom': '0px'
        }).html('已暂停 ...')
      }
    }, addsource: function () {
      $('.video-stu').html('正在载入视频 ...').css({
        'bottom': '0px'
      })
      var t = Poi.movies.name.split(','),
        _t = t[Math.floor(Math.random() * t.length)]
      $('#bgvideo').attr('src', Poi.movies.url + '/' + _t)
      $('#bgvideo').attr('video-name', _t)
    }, LV: function () {
      var _btn = $('#video-btn')
      _btn.on('click', function () {
        if ($(this).hasClass('loadvideo')) {
          $(this).addClass('video-pause').removeClass('loadvideo').hide()
          Siren.addsource()
          s.oncanplay = function () {
            Siren.splay()
            $('#video-add').show()
            _btn.addClass('videolive')
            _btn.addClass('haslive')
          }
        } else {
          if ($(this).hasClass('video-pause')) {
            Siren.spause()
            _btn.removeClass('videolive')
            $('.video-stu').css({
              'bottom': '0px'
            }).html('已暂停 ...')
          } else {
            Siren.splay()
            _btn.addClass('videolive')
          }
        }
        s.onended = function () {
          $('#bgvideo').attr('src', '')
          $('#video-add').hide()
          _btn.addClass('loadvideo').removeClass('video-pause')
          _btn.removeClass('videolive')
          _btn.removeClass('haslive')
          $('.focusinfo').css({
            'top': '49.3%'
          })
        }
      })
      $('#video-add').on('click', function () {
        Siren.addsource()
      })
    }, AH: function () {
      if (Poi.windowheight == 'auto') {
        if ($('h1.main-title').length > 0) {
          var _height = $(window).height()
          $('#centerbg').css({
            'height': _height
          })
          $('#bgvideo').css({
            'min-height': _height
          })
          $(window).resize(function () {
            Siren.AH()
          })
        }
      } else {
        $('.headertop').addClass('headertop-bar')
      }
    }, PE: function () {
      if ($('.headertop').length > 0) {
        if ($('h1.main-title').length > 0) {
          $('.blank').css({
            'padding-top': '0px'
          })
          $('.headertop').css({
            'height': 'auto'
          }).show()
          if (Poi.movies.live == 'open') Siren.liveplay()
          $('.site-header').addClass('is-homepage')
        } else {
          $('.blank').css({
            'padding-top': '75px'
          })
          $('.headertop').css({
            'height': '0px'
          }).hide()
          Siren.livepause()
        }
      }
    }, CE: function () {
      $('.comments-hidden').show()
      $('.comments-main').hide()
      $('.comments-hidden').click(function () {
        $('.comments-main').slideDown(500)
        $('.comments-hidden').hide()
      })
      $('.archives').hide()
      $('.archives:first').show()
      $('#archives-temp h3').click(function () {
        $(this).next().slideToggle('fast')
        return false
      })
      $('.js-toggle-search').on('click', function () {
        $('.js-toggle-search').toggleClass('is-active')
        $('.js-search').toggleClass('is-visible')
      })
      $('.search_close').on('click', function () {
        if ($('.js-search').hasClass('is-visible')) {
          $('.js-toggle-search').toggleClass('is-active')
          $('.js-search').toggleClass('is-visible')
        }
      })
      $('#show-nav').on('click', function () {
        if ($('#show-nav').hasClass('showNav')) {
          $('#show-nav').removeClass('showNav').addClass('hideNav')
          $('.site-top .lower nav').addClass('navbar')
          $('.mobile-fit-control').removeClass('hide')
          if (screen && screen.width <= 1200) {
            $('.site-title').toggle()
          }
        } else {
          $('#show-nav').removeClass('hideNav').addClass('showNav')
          $('.site-top .lower nav').removeClass('navbar')
          $('.mobile-fit-control').addClass('hide')
          if (screen && screen.width <= 1200) {
            $('.site-title').toggle()
          }
        }
      })
      $('#loading').click(function () {
        $('#loading').fadeOut(500)
      })
    }, NH: function () {
      var h1 = 0,
        h2 = 50,
        ss = $(document).scrollTop()
      $(window).scroll(function () {
        var s = $(document).scrollTop()
        if (s == h1) {
          $('.site-header').removeClass('yya')
        }
        if (s > h1) {
          $('.site-header').addClass('yya')
        }
        if (s > h2) {
          $('.site-header').addClass('gizle')
          if (s > ss) {
            $('.site-header').removeClass('sabit')
          } else {
            $('.site-header').addClass('sabit')
          }
          ss = s
        }
      })
    }, XLS: function () {
      $body = (window.opera) ? (document.compatMode == 'CSS1Compat' ? $('html') : $('body')) : $('html,body')
      $('body').on('click', '#pagination a', function () {
        $(this).addClass('loading').text('')
        $.ajax({
          type: 'GET',
          url: $(this).attr('href') + '#main',
          success: function (data) {
            result = $(data).find('#main .post')
            nextHref = $(data).find('#pagination a').attr('href')
            $('#main').append(result.fadeIn(500))
            $('#pagination a').removeClass('loading').text('Previous')
            lazyload()
            mashiro_global.post_list_show_animation.ini(50)
            if (nextHref != undefined) {
              $('#pagination a').attr('href', nextHref)
            } else {
              $('#pagination').html('<span>很高兴你翻到这里，但是真的没有了...</span>')
            }
          }
        })
        return false
      })
    }, XCS: function () {
      var __cancel = jQuery('#cancel-comment-reply-link'),
        __cancel_text = __cancel.text(),
        __list = 'commentwrap'
      jQuery(document).on('submit', '#commentform', function () {
        jQuery.ajax({
          url: Poi.ajaxurl,
          data: jQuery(this).serialize() + '&action=ajax_comment',
          type: jQuery(this).attr('method'),
          beforeSend: addComment.createButterbar('提交中(Commiting)....'),
          error: function (request) {
            var t = addComment
            t.createButterbar(request.responseText)
          }, success: function (data) {
            jQuery('textarea').each(function () {
                this.value = ''
              })
            var t = addComment,
                cancel = t.I('cancel-comment-reply-link'),
                temp = t.I('wp-temp-form-div'),
                respond = t.I(t.respondId),
                post = t.I('comment_post_ID').value,
                parent = t.I('comment_parent').value
            if (parent != '0') {
                jQuery('#respond').before('<ol class="children">' + data + '</ol>')
              } else if (!jQuery('.' + __list).length) {
                  if (Poi.formpostion == 'bottom') {
                    jQuery('#respond').before('<ol class="' + __list + '">' + data + '</ol>')
                  } else {
                    jQuery('#respond').after('<ol class="' + __list + '">' + data + '</ol>')
                  }
                } else {
                  if (Poi.order == 'asc') {
                    jQuery('.' + __list).append(data)
                  } else {
                    jQuery('.' + __list).prepend(data)
                  }
                }
            t.createButterbar('提交成功(Succeed)')
            lazyload()
            code_highlight_style()
            click_to_view_image()
            clean_upload_images()
            cancel.style.display = 'none'
            cancel.onclick = null
            t.I('comment_parent').value = '0'
            if (temp && respond) {
                temp.parentNode.insertBefore(respond, temp)
                temp.parentNode.removeChild(temp)
              }
          }
        })
        return false
      })
      addComment = {
        moveForm: function (commId, parentId, respondId) {
          var t = this,
            div, comm = t.I(commId),
            respond = t.I(respondId),
            cancel = t.I('cancel-comment-reply-link'),
            parent = t.I('comment_parent'),
            post = t.I('comment_post_ID')
          __cancel.text(__cancel_text)
          t.respondId = respondId
          if (!t.I('wp-temp-form-div')) {
            div = document.createElement('div')
            div.id = 'wp-temp-form-div'
            div.style.display = 'none'
            respond.parentNode.insertBefore(div, respond)
          }!comm ? (temp = t.I('wp-temp-form-div'), t.I('comment_parent').value = '0', temp.parentNode.insertBefore(respond, temp), temp.parentNode.removeChild(temp)) : comm.parentNode.insertBefore(respond, comm.nextSibling)
          jQuery('body').animate({
            scrollTop: jQuery('#respond').offset().top - 180
          }, 400)
          parent.value = parentId
          cancel.style.display = ''
          cancel.onclick = function () {
            var t = addComment,
              temp = t.I('wp-temp-form-div'),
              respond = t.I(t.respondId)
            t.I('comment_parent').value = '0'
            if (temp && respond) {
              temp.parentNode.insertBefore(respond, temp)
              temp.parentNode.removeChild(temp)
            }
            this.style.display = 'none'
            this.onclick = null
            return false
          }
          try {
            t.I('comment').focus()
          } catch (e) {}
          return false
        }, I: function (e) {
          return document.getElementById(e)
        }, clearButterbar: function (e) {
          if (jQuery('.butterBar').length > 0) {
              jQuery('.butterBar').remove()
            }
        }, createButterbar: function (message, showtime) {
            var t = this
            t.clearButterbar()
            jQuery('body').append('<div class="butterBar butterBar--center"><p class="butterBar-message">' + message + '</p></div>')
            if (showtime > 0) {
                setTimeout("jQuery('.butterBar').remove()", showtime)
              } else {
                setTimeout("jQuery('.butterBar').remove()", 6000)
              }
          }
      }
    }, XCP: function () {
      $body = (window.opera) ? (document.compatMode == 'CSS1Compat' ? $('html') : $('body')) : $('html,body')
      $('body').on('click', '#comments-navi a', function (e) {
        e.preventDefault()
        $.ajax({
          type: 'GET',
          url: $(this).attr('href'),
          beforeSend: function () {
            $('#comments-navi').remove()
            $('ul.commentwrap').remove()
            $('#loading-comments').slideDown()
            $body.animate({
                scrollTop: $('#comments-list-title').offset().top - 65
              }, 800)
          }, dataType: 'html',
          success: function (out) {
            result = $(out).find('ul.commentwrap')
            nextlink = $(out).find('#comments-navi')
            $('#loading-comments').slideUp('fast')
            $('#loading-comments').after(result.fadeIn(500))
            $('ul.commentwrap').after(nextlink)
            lazyload()
            code_highlight_style()
            click_to_view_image()
          }
        })
      })
    }, IA: function () {
      POWERMODE.colorful = true
      POWERMODE.shake = false
      document.body.addEventListener('input', POWERMODE)
    }, GT: function () {
      var offset = 100,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.cd-top')
      $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $back_to_top.addClass('cd-is-visible')
            $('.changeSkin-gear').css('bottom', '0')
            if ($(window).height() > 950) {
                $('.cd-top.cd-is-visible').css('top', '0')
              } else {
                $('.cd-top.cd-is-visible').css('top', ($(window).height() - 950) + 'px')
              }
          } else {
            $('.changeSkin-gear').css('bottom', '-999px')
            $('.cd-top.cd-is-visible').css('top', '-900px')
            $back_to_top.removeClass('cd-is-visible cd-fade-out')
          }
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out')
          }
      })
      $back_to_top.on('click', function (event) {
        event.preventDefault()
        $('body,html').animate({
            scrollTop: 0
          }, scroll_top_duration)
      })
    }
  }
$(function () {
  Siren.AH()
  Siren.PE()
  Siren.NH()
  Siren.GT()
  Siren.XLS()
  Siren.XCS()
  Siren.XCP()
  Siren.CE()
  Siren.MN()
  Siren.IA()
  Siren.LV()
  if (window.is_app) injectStyles('#nprogress .bar { display: none; }')
  if (Poi.pjax) {
    $(document).pjax('a[target!=_top]', '#page', {
      fragment: '#page',
      timeout: 8000
    }).on('pjax:send', function () {
      $('#bar').css('width', '0%')
      if (mashiro_option.NProgressON) NProgress.start()
      Siren.MNH()
    }).on('pjax:complete', function () {
      Siren.AH()
      Siren.PE()
      Siren.CE()
      Siren.VA()
      Siren.MJ()
      Siren.AB()
      Siren.TOC()
      Siren.BSZ()
      if (mashiro_option.NProgressON) NProgress.done()
      mashiro_global.ini.pjax()
      $('#loading').fadeOut(500)
      if (Poi.codelamp == 'open') {
        self.Prism.highlightAll(event)
      };
      if ($('.ds-thread').length > 0) {
        if (typeof DUOSHUO !== 'undefined') {
          DUOSHUO.EmbedThread('.ds-thread')
        } else {
          $.getScript('//static.duoshuo.com/embed.js')
        }
      }
    }).on('submit', '.search-form,.s-search', function (event) {
      event.preventDefault()
      $.pjax.submit(event, '#page', {
        fragment: '#page',
        timeout: 8000
      })
      if ($('.js-search.is-visible').length > 0) {
        $('.js-toggle-search').toggleClass('is-active')
        $('.js-search').toggleClass('is-visible')
      }
    })
    mashiro_global.lib.pjax_to_url = function (url, ele) {
      $.pjax({
        url: url,
        container: ele,
        fragment: ele,
        timeout: 8000
      })
    }
    window.addEventListener('popstate', function (e) {
      Siren.AH()
      Siren.PE()
      Siren.CE()
      timeSeriesReload(true)
    }, false)
  }
  $.fn.postLike = function () {
    if ($(this).hasClass('done')) {
      return false
    } else {
      $(this).addClass('done')
      var id = $(this).data('id'),
        action = $(this).data('action'),
        rateHolder = $(this).children('.count')
      var ajax_data = {
        action: 'specs_zan',
        um_id: id,
        um_action: action
      }
      $.post(Poi.ajaxurl, ajax_data, function (data) {
        $(rateHolder).html(data)
      })
      return false
    }
  }
  $(document).on('click', '.specsZan', function () {
    $(this).postLike()
  })
  // console.log('%c Mashiro %c', 'background:#24272A; color:#ffffff', '', 'https://2heng.xin/')
  // console.log('%c hojun %c', 'background:#24272A; color:#ffffff', '', 'https://www.hojun.cn/')
  // console.log('%c Github %c', 'background:#24272A; color:#ffffff', '', 'https://github.com/honjun/hexo-theme-sakura')
})
var isWebkit = navigator.userAgent.toLowerCase().indexOf('webkit') > -1,
  isOpera = navigator.userAgent.toLowerCase().indexOf('opera') > -1,
  isIe = navigator.userAgent.toLowerCase().indexOf('msie') > -1
if ((isWebkit || isOpera || isIe) && document.getElementById && window.addEventListener) {
  window.addEventListener('hashchange', function () {
    var id = location.hash.substring(1),
      element
    if (!(/^[A-z0-9_-]+$/.test(id))) {
      return
    }
    element = document.getElementById(id)
    if (element) {
      if (!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))) {
        element.tabIndex = -1
      }
      element.focus()
    }
  }, false)
}
// loadCSS(mashiro_option.jsdelivr_css_src);
// loadCSS("https://at.alicdn.com/t/font_679578_dishi1yoavm.css");
// loadCSS("https://cdn.jsdelivr.net/gh/moezx/cdn@3.5.4/fonts/Moe-Mashiro/stylesheet.css");
// loadCSS("https://fonts.googleapis.com/css?family=Noto+SerifMerriweather|Merriweather+Sans|Source+Code+Pro|Ubuntu:400,700");
// loadCSS("https://cdn.jsdelivr.net/gh/moezx/cdn@3.3.9/css/sharejs.css");;

function render (template, context) {
  var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g
  return template.replace(tokenReg, function (word, slash1, token, slash2) {
    if (slash1 || slash2) {
      return word.replace('\\', '')
    }
    var variables = token.replace(/\s/g, '').split('.')
    var currentObject = context
    var i, length, variable
    for (i = 0, length = variables.length; i < length; ++i) {
      variable = variables[i]
      currentObject = currentObject[variable]
      if (currentObject === undefined || currentObject === null) return ''
    }
    return currentObject
  })
}
String.prototype.render = function (context) {
  return render(this, context)
}

$(document).ready(function () {
  setTimeout(function () {
    isFirstLoad = true
    if (document.body.clientWidth > 860) {
      $('.changeSkin-gear').css('visibility', 'visible')
    }
    $('p').remove('.head-copyright')
  }, 0)
})

// function aplayerF() {
//     'use strict';
//     var aplayers = [],
//         loadMeting = function () {
//             function a(a, b) {
//                 var c = {
//                     container: a,
//                     audio: b,
//                     mini: null,
//                     fixed: null,
//                     autoplay: !1,
//                     mutex: !0,
//                     lrcType: 3,
//                     listFolded: !1,
//                     preload: 'auto',
//                     theme: '#2980b9',
//                     loop: 'all',
//                     order: 'list',
//                     volume: null,
//                     listMaxHeight: null,
//                     customAudioType: null,
//                     storageName: 'metingjs'
//                 };
//                 if (b.length) {
//                     b[0].lrc || (c.lrcType = 0);
//                     var d = {};
//                     for (var e in c) {
//                         var f = e.toLowerCase();
//                         (a.dataset.hasOwnProperty(f) || a.dataset.hasOwnProperty(e) || null !== c[e]) && (d[e] = a.dataset[f] || a.dataset[e] || c[e], ('true' === d[e] || 'false' === d[e]) && (d[e] = 'true' == d[e]))
//                     }
//                     aplayers.push(new APlayer(d))
//                 }
//                 for (var f = 0; f < aplayers.length; f++) try {
//                     aplayers[f].lrc.hide();
//                 } catch (a) {
//                     console.log(a)
//                 }
//                 var lrcTag = 1;
//                 $(".aplayer.aplayer-fixed").click(function () {
//                     if (lrcTag == 1) {
//                         for (var f = 0; f < aplayers.length; f++) try {
//                             aplayers[f].lrc.show();
//                         } catch (a) {
//                             console.log(a)
//                         }
//                     }
//                     lrcTag = 2;
//                 });
//                 var apSwitchTag = 0;
//                 $(".aplayer.aplayer-fixed .aplayer-body").addClass("ap-hover");
//                 $(".aplayer-miniswitcher").click(function () {
//                     if (apSwitchTag == 0) {
//                         $(".aplayer.aplayer-fixed .aplayer-body").removeClass("ap-hover");
//                         apSwitchTag = 1;
//                     } else {
//                         $(".aplayer.aplayer-fixed .aplayer-body").addClass("ap-hover");
//                         apSwitchTag = 0;
//                     }
//                 });
//             }
//             var b = 'https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r';
//             'undefined' != typeof meting_api && (b = meting_api);
//             for (var f = 0; f < aplayers.length; f++) try {
//                 aplayers[f].destroy()
//             } catch (a) {
//                 console.log(a)
//             }
//             aplayers = [];
//             for (var c = document.querySelectorAll('.aplayer'), d = function () {
//                 var d = c[e],
//                     f = d.dataset.id;
//                 if (f) {
//                     var g = d.dataset.api || b;
//                     g = g.replace(':server', d.dataset.server), g = g.replace(':type', d.dataset.type), g = g.replace(':id', d.dataset.id), g = g.replace(':auth', d.dataset.auth), g = g.replace(':r', Math.random());
//                     var h = new XMLHttpRequest;
//                     h.onreadystatechange = function () {
//                         if (4 === h.readyState && (200 <= h.status && 300 > h.status || 304 === h.status)) {
//                             var b = JSON.parse(h.responseText);
//                             a(d, b)
//                         }
//                     }, h.open('get', g, !0), h.send(null)
//                 } else if (d.dataset.url) {
//                     var i = [{
//                         name: d.dataset.name || d.dataset.title || 'Audio name',
//                         artist: d.dataset.artist || d.dataset.author || 'Audio artist',
//                         url: d.dataset.url,
//                         cover: d.dataset.cover || d.dataset.pic,
//                         lrc: d.dataset.lrc,
//                         type: d.dataset.type || 'auto'
//                     }];
//                     a(d, i)
//                 }
//             }, e = 0; e < c.length; e++) d()
//         };
//     document.addEventListener('DOMContentLoaded', loadMeting, !1);
// }
// if (document.body.clientWidth > 860) {
//     aplayerF();
// }

// 代码块功能依赖

$(function () {
    $('pre').wrap('<div class="code-area" style="position: relative"></div>');
});
// 代码块一键复制

$(function () {
    var $copyIcon = $('<i class="fas fa-copy code_copy" title="复制代码" aria-hidden="true"></i>')
    var $notice = $('<div class="codecopy_notice"></div>')
    $('.code-area').prepend($copyIcon)
    $('.code-area').prepend($notice)
    // “复制成功”字出现
    function copy(text, ctx) {
        if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
            try {
                document.execCommand('copy') // Security exception may be thrown by some browsers.
                $(ctx).prev('.codecopy_notice')
                    .text("复制成功")
                    .animate({
                        opacity: 1,
                        top: 30
                    }, 450, function () {
                        setTimeout(function () {
                            $(ctx).prev('.codecopy_notice').animate({
                                opacity: 0,
                                top: 0
                            }, 650)
                        }, 400)
                    })
            } catch (ex) {
                $(ctx).prev('.codecopy_notice')
                    .text("复制失败")
                    .animate({
                        opacity: 1,
                        top: 30
                    }, 650, function () {
                        setTimeout(function () {
                            $(ctx).prev('.codecopy_notice').animate({
                                opacity: 0,
                                top: 0
                            }, 650)
                        }, 400)
                    })
                return false
            }
        } else {
            $(ctx).prev('.codecopy_notice').text("浏览器不支持复制")
        }
    }
    // 复制
    $('.code-area .fa-copy').on('click', function () {
        var selection = window.getSelection()
        var range = document.createRange()
        range.selectNodeContents($(this).siblings('pre').find('code')[0])
        selection.removeAllRanges()
        selection.addRange(range)
        var text = selection.toString()
        copy(text, this)
        selection.removeAllRanges()
    })
});

// 代码块语言识别

$(function () {
  var $highlight_lang = $('<div class="code_lang" title="代码语言"></div>');

  $('pre').before($highlight_lang);
  $('pre').each(function () {
    var code_language = $(this).attr('class');

    if (!code_language) {
      return true;
    };
    var lang_name = code_language.replace("line-numbers", "").trim().replace("language-", "").trim();

    // 首字母大写
    // lang_name = lang_name.slice(0, 1).toUpperCase() + lang_name.slice(1);
    
    $(this).siblings(".code_lang").text(lang_name);
  });
});

// 代码块收缩

$(function () {
  var $code_expand = $('<i class="fas fa-angle-up code-expand" aria-hidden="true"></i>');

  $('.code-area').prepend($code_expand);
  $('.code-expand').on('click', function () {
    if ($(this).parent().hasClass('code-closed')) {
      $(this).siblings('pre').find('code').show();
      $(this).parent().removeClass('code-closed');
    } else {
      $(this).siblings('pre').find('code').hide();
      $(this).parent().addClass('code-closed');
    }
  });
});
