var __lightgraph_internal=(()=>{function ao(n,t){var e,i=1;n==null&&(n=0),t==null&&(t=0);function r(){var s,o=e.length,a,l=0,c=0;for(s=0;s<o;++s)a=e[s],l+=a.x,c+=a.y;for(l=(l/o-n)*i,c=(c/o-t)*i,s=0;s<o;++s)a=e[s],a.x-=l,a.y-=c}return r.initialize=function(s){e=s},r.x=function(s){return arguments.length?(n=+s,r):n},r.y=function(s){return arguments.length?(t=+s,r):t},r.strength=function(s){return arguments.length?(i=+s,r):i},r}function ch(n){let t=+this._x.call(null,n),e=+this._y.call(null,n);return uh(this.cover(t,e),t,e,n)}function uh(n,t,e,i){if(isNaN(t)||isNaN(e))return n;var r,s=n._root,o={data:i},a=n._x0,l=n._y0,c=n._x1,u=n._y1,f,d,h,g,x,m,p,M;if(!s)return n._root=o,n;for(;s.length;)if((x=t>=(f=(a+c)/2))?a=f:c=f,(m=e>=(d=(l+u)/2))?l=d:u=d,r=s,!(s=s[p=m<<1|x]))return r[p]=o,n;if(h=+n._x.call(null,s.data),g=+n._y.call(null,s.data),t===h&&e===g)return o.next=s,r?r[p]=o:n._root=o,n;do r=r?r[p]=new Array(4):n._root=new Array(4),(x=t>=(f=(a+c)/2))?a=f:c=f,(m=e>=(d=(l+u)/2))?l=d:u=d;while((p=m<<1|x)===(M=(g>=d)<<1|h>=f));return r[M]=s,r[p]=o,n}function hh(n){var t,e,i=n.length,r,s,o=new Array(i),a=new Array(i),l=1/0,c=1/0,u=-1/0,f=-1/0;for(e=0;e<i;++e)isNaN(r=+this._x.call(null,t=n[e]))||isNaN(s=+this._y.call(null,t))||(o[e]=r,a[e]=s,r<l&&(l=r),r>u&&(u=r),s<c&&(c=s),s>f&&(f=s));if(l>u||c>f)return this;for(this.cover(l,c).cover(u,f),e=0;e<i;++e)uh(this,o[e],a[e],n[e]);return this}function fh(n,t){if(isNaN(n=+n)||isNaN(t=+t))return this;var e=this._x0,i=this._y0,r=this._x1,s=this._y1;if(isNaN(e))r=(e=Math.floor(n))+1,s=(i=Math.floor(t))+1;else{for(var o=r-e||1,a=this._root,l,c;e>n||n>=r||i>t||t>=s;)switch(c=(t<i)<<1|n<e,l=new Array(4),l[c]=a,a=l,o*=2,c){case 0:r=e+o,s=i+o;break;case 1:e=r-o,s=i+o;break;case 2:r=e+o,i=s-o;break;case 3:e=r-o,i=s-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=e,this._y0=i,this._x1=r,this._y1=s,this}function dh(){var n=[];return this.visit(function(t){if(!t.length)do n.push(t.data);while(t=t.next)}),n}function ph(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Ae(n,t,e,i,r){this.node=n,this.x0=t,this.y0=e,this.x1=i,this.y1=r}function mh(n,t,e){var i,r=this._x0,s=this._y0,o,a,l,c,u=this._x1,f=this._y1,d=[],h=this._root,g,x;for(h&&d.push(new Ae(h,r,s,u,f)),e==null?e=1/0:(r=n-e,s=t-e,u=n+e,f=t+e,e*=e);g=d.pop();)if(!(!(h=g.node)||(o=g.x0)>u||(a=g.y0)>f||(l=g.x1)<r||(c=g.y1)<s))if(h.length){var m=(o+l)/2,p=(a+c)/2;d.push(new Ae(h[3],m,p,l,c),new Ae(h[2],o,p,m,c),new Ae(h[1],m,a,l,p),new Ae(h[0],o,a,m,p)),(x=(t>=p)<<1|n>=m)&&(g=d[d.length-1],d[d.length-1]=d[d.length-1-x],d[d.length-1-x]=g)}else{var M=n-+this._x.call(null,h.data),v=t-+this._y.call(null,h.data),S=M*M+v*v;if(S<e){var E=Math.sqrt(e=S);r=n-E,s=t-E,u=n+E,f=t+E,i=h.data}}return i}function gh(n){if(isNaN(u=+this._x.call(null,n))||isNaN(f=+this._y.call(null,n)))return this;var t,e=this._root,i,r,s,o=this._x0,a=this._y0,l=this._x1,c=this._y1,u,f,d,h,g,x,m,p;if(!e)return this;if(e.length)for(;;){if((g=u>=(d=(o+l)/2))?o=d:l=d,(x=f>=(h=(a+c)/2))?a=h:c=h,t=e,!(e=e[m=x<<1|g]))return this;if(!e.length)break;(t[m+1&3]||t[m+2&3]||t[m+3&3])&&(i=t,p=m)}for(;e.data!==n;)if(r=e,!(e=e.next))return this;return(s=e.next)&&delete e.next,r?(s?r.next=s:delete r.next,this):t?(s?t[m]=s:delete t[m],(e=t[0]||t[1]||t[2]||t[3])&&e===(t[3]||t[2]||t[1]||t[0])&&!e.length&&(i?i[p]=e:this._root=e),this):(this._root=s,this)}function xh(n){for(var t=0,e=n.length;t<e;++t)this.remove(n[t]);return this}function _h(){return this._root}function yh(){var n=0;return this.visit(function(t){if(!t.length)do++n;while(t=t.next)}),n}function vh(n){var t=[],e,i=this._root,r,s,o,a,l;for(i&&t.push(new Ae(i,this._x0,this._y0,this._x1,this._y1));e=t.pop();)if(!n(i=e.node,s=e.x0,o=e.y0,a=e.x1,l=e.y1)&&i.length){var c=(s+a)/2,u=(o+l)/2;(r=i[3])&&t.push(new Ae(r,c,u,a,l)),(r=i[2])&&t.push(new Ae(r,s,u,c,l)),(r=i[1])&&t.push(new Ae(r,c,o,a,u)),(r=i[0])&&t.push(new Ae(r,s,o,c,u))}return this}function Sh(n){var t=[],e=[],i;for(this._root&&t.push(new Ae(this._root,this._x0,this._y0,this._x1,this._y1));i=t.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.y0,l=i.x1,c=i.y1,u=(o+l)/2,f=(a+c)/2;(s=r[0])&&t.push(new Ae(s,o,a,u,f)),(s=r[1])&&t.push(new Ae(s,u,a,l,f)),(s=r[2])&&t.push(new Ae(s,o,f,u,c)),(s=r[3])&&t.push(new Ae(s,u,f,l,c))}e.push(i)}for(;i=e.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function Mh(n){return n[0]}function bh(n){return arguments.length?(this._x=n,this):this._x}function wh(n){return n[1]}function Th(n){return arguments.length?(this._y=n,this):this._y}function kr(n,t,e){var i=new Ql(t??Mh,e??wh,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function Ql(n,t,e,i,r,s){this._x=n,this._y=t,this._x0=e,this._y0=i,this._x1=r,this._y1=s,this._root=void 0}function Eh(n){for(var t={data:n.data},e=t;n=n.next;)e=e.next={data:n.data};return t}var Oe=kr.prototype=Ql.prototype;Oe.copy=function(){var n=new Ql(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,e,i;if(!t)return n;if(!t.length)return n._root=Eh(t),n;for(e=[{source:t,target:n._root=new Array(4)}];t=e.pop();)for(var r=0;r<4;++r)(i=t.source[r])&&(i.length?e.push({source:i,target:t.target[r]=new Array(4)}):t.target[r]=Eh(i));return n};Oe.add=ch;Oe.addAll=hh;Oe.cover=fh;Oe.data=dh;Oe.extent=ph;Oe.find=mh;Oe.remove=gh;Oe.removeAll=xh;Oe.root=_h;Oe.size=yh;Oe.visit=vh;Oe.visitAfter=Sh;Oe.x=bh;Oe.y=Th;function Si(n){return function(){return n}}function Qn(n){return(n()-.5)*1e-6}function zm(n){return n.index}function Ah(n,t){var e=n.get(t);if(!e)throw new Error("node not found: "+t);return e}function Vr(n){var t=zm,e=f,i,r=Si(30),s,o,a,l,c,u=1;n==null&&(n=[]);function f(m){return 1/Math.min(a[m.source.index],a[m.target.index])}function d(m){for(var p=0,M=n.length;p<u;++p)for(var v=0,S,E,R,I,O,b,T;v<M;++v)S=n[v],E=S.source,R=S.target,I=R.x+R.vx-E.x-E.vx||Qn(c),O=R.y+R.vy-E.y-E.vy||Qn(c),b=Math.sqrt(I*I+O*O),b=(b-s[v])/b*m*i[v],I*=b,O*=b,R.vx-=I*(T=l[v]),R.vy-=O*T,E.vx+=I*(T=1-T),E.vy+=O*T}function h(){if(o){var m,p=o.length,M=n.length,v=new Map(o.map((E,R)=>[t(E,R,o),E])),S;for(m=0,a=new Array(p);m<M;++m)S=n[m],S.index=m,typeof S.source!="object"&&(S.source=Ah(v,S.source)),typeof S.target!="object"&&(S.target=Ah(v,S.target)),a[S.source.index]=(a[S.source.index]||0)+1,a[S.target.index]=(a[S.target.index]||0)+1;for(m=0,l=new Array(M);m<M;++m)S=n[m],l[m]=a[S.source.index]/(a[S.source.index]+a[S.target.index]);i=new Array(M),g(),s=new Array(M),x()}}function g(){if(o)for(var m=0,p=n.length;m<p;++m)i[m]=+e(n[m],m,n)}function x(){if(o)for(var m=0,p=n.length;m<p;++m)s[m]=+r(n[m],m,n)}return d.initialize=function(m,p){o=m,c=p,h()},d.links=function(m){return arguments.length?(n=m,h(),d):n},d.id=function(m){return arguments.length?(t=m,d):t},d.iterations=function(m){return arguments.length?(u=+m,d):u},d.strength=function(m){return arguments.length?(e=typeof m=="function"?m:Si(+m),g(),d):e},d.distance=function(m){return arguments.length?(r=typeof m=="function"?m:Si(+m),x(),d):r},d}var km={value:()=>{}};function Rh(){for(var n=0,t=arguments.length,e={},i;n<t;++n){if(!(i=arguments[n]+"")||i in e||/[\s.]/.test(i))throw new Error("illegal type: "+i);e[i]=[]}return new lo(e)}function lo(n){this._=n}function Vm(n,t){return n.trim().split(/^|\s+/).map(function(e){var i="",r=e.indexOf(".");if(r>=0&&(i=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:i}})}lo.prototype=Rh.prototype={constructor:lo,on:function(n,t){var e=this._,i=Vm(n+"",e),r,s=-1,o=i.length;if(arguments.length<2){for(;++s<o;)if((r=(n=i[s]).type)&&(r=Gm(e[r],n.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<o;)if(r=(n=i[s]).type)e[r]=Ch(e[r],n.name,t);else if(t==null)for(r in e)e[r]=Ch(e[r],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new lo(n)},call:function(n,t){if((r=arguments.length-2)>0)for(var e=new Array(r),i=0,r,s;i<r;++i)e[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(s=this._[n],i=0,r=s.length;i<r;++i)s[i].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,s=i.length;r<s;++r)i[r].value.apply(t,e)}};function Gm(n,t){for(var e=0,i=n.length,r;e<i;++e)if((r=n[e]).name===t)return r.value}function Ch(n,t,e){for(var i=0,r=n.length;i<r;++i)if(n[i].name===t){n[i]=km,n=n.slice(0,i).concat(n.slice(i+1));break}return e!=null&&n.push({name:t,value:e}),n}var Mi=Rh;var Ji=0,Hr=0,Gr=0,Ph=1e3,co,Wr,uo=0,bi=0,ho=0,Xr=typeof performance=="object"&&performance.now?performance:Date,Lh=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Yr(){return bi||(Lh(Hm),bi=Xr.now()+ho)}function Hm(){bi=0}function qr(){this._call=this._time=this._next=null}qr.prototype=Ki.prototype={constructor:qr,restart:function(n,t,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?Yr():+e)+(t==null?0:+t),!this._next&&Wr!==this&&(Wr?Wr._next=this:co=this,Wr=this),this._call=n,this._time=e,jl()},stop:function(){this._call&&(this._call=null,this._time=1/0,jl())}};function Ki(n,t,e){var i=new qr;return i.restart(n,t,e),i}function Dh(){Yr(),++Ji;for(var n=co,t;n;)(t=bi-n._time)>=0&&n._call.call(void 0,t),n=n._next;--Ji}function Ih(){bi=(uo=Xr.now())+ho,Ji=Hr=0;try{Dh()}finally{Ji=0,Xm(),bi=0}}function Wm(){var n=Xr.now(),t=n-uo;t>Ph&&(ho-=t,uo=n)}function Xm(){for(var n,t=co,e,i=1/0;t;)t._call?(i>t._time&&(i=t._time),n=t,t=t._next):(e=t._next,t._next=null,t=n?n._next=e:co=e);Wr=n,jl(i)}function jl(n){if(!Ji){Hr&&(Hr=clearTimeout(Hr));var t=n-bi;t>24?(n<1/0&&(Hr=setTimeout(Ih,n-Xr.now()-ho)),Gr&&(Gr=clearInterval(Gr))):(Gr||(uo=Xr.now(),Gr=setInterval(Wm,Ph)),Ji=1,Lh(Ih))}}function fo(n,t,e){var i=new qr;return t=t==null?0:+t,i.restart(r=>{i.stop(),n(r+t)},t,e),i}function Nh(){let n=1;return()=>(n=(1664525*n+1013904223)%4294967296)/4294967296}function Uh(n){return n.x}function Fh(n){return n.y}var qm=10,Ym=Math.PI*(3-Math.sqrt(5));function wi(n){var t,e=1,i=.001,r=1-Math.pow(i,1/300),s=0,o=.6,a=new Map,l=Ki(f),c=Mi("tick","end"),u=Nh();n==null&&(n=[]);function f(){d(),c.call("tick",t),e<i&&(l.stop(),c.call("end",t))}function d(x){var m,p=n.length,M;x===void 0&&(x=1);for(var v=0;v<x;++v)for(e+=(s-e)*r,a.forEach(function(S){S(e)}),m=0;m<p;++m)M=n[m],M.fx==null?M.x+=M.vx*=o:(M.x=M.fx,M.vx=0),M.fy==null?M.y+=M.vy*=o:(M.y=M.fy,M.vy=0);return t}function h(){for(var x=0,m=n.length,p;x<m;++x){if(p=n[x],p.index=x,p.fx!=null&&(p.x=p.fx),p.fy!=null&&(p.y=p.fy),isNaN(p.x)||isNaN(p.y)){var M=qm*Math.sqrt(.5+x),v=x*Ym;p.x=M*Math.cos(v),p.y=M*Math.sin(v)}(isNaN(p.vx)||isNaN(p.vy))&&(p.vx=p.vy=0)}}function g(x){return x.initialize&&x.initialize(n,u),x}return h(),t={tick:d,restart:function(){return l.restart(f),t},stop:function(){return l.stop(),t},nodes:function(x){return arguments.length?(n=x,h(),a.forEach(g),t):n},alpha:function(x){return arguments.length?(e=+x,t):e},alphaMin:function(x){return arguments.length?(i=+x,t):i},alphaDecay:function(x){return arguments.length?(r=+x,t):+r},alphaTarget:function(x){return arguments.length?(s=+x,t):s},velocityDecay:function(x){return arguments.length?(o=1-x,t):1-o},randomSource:function(x){return arguments.length?(u=x,a.forEach(g),t):u},force:function(x,m){return arguments.length>1?(m==null?a.delete(x):a.set(x,g(m)),t):a.get(x)},find:function(x,m,p){var M=0,v=n.length,S,E,R,I,O;for(p==null?p=1/0:p*=p,M=0;M<v;++M)I=n[M],S=x-I.x,E=m-I.y,R=S*S+E*E,R<p&&(O=I,p=R);return O},on:function(x,m){return arguments.length>1?(c.on(x,m),t):c.on(x)}}}function $r(){var n,t,e,i,r=Si(-30),s,o=1,a=1/0,l=.81;function c(h){var g,x=n.length,m=kr(n,Uh,Fh).visitAfter(f);for(i=h,g=0;g<x;++g)t=n[g],m.visit(d)}function u(){if(n){var h,g=n.length,x;for(s=new Array(g),h=0;h<g;++h)x=n[h],s[x.index]=+r(x,h,n)}}function f(h){var g=0,x,m,p=0,M,v,S;if(h.length){for(M=v=S=0;S<4;++S)(x=h[S])&&(m=Math.abs(x.value))&&(g+=x.value,p+=m,M+=m*x.x,v+=m*x.y);h.x=M/p,h.y=v/p}else{x=h,x.x=x.data.x,x.y=x.data.y;do g+=s[x.data.index];while(x=x.next)}h.value=g}function d(h,g,x,m){if(!h.value)return!0;var p=h.x-t.x,M=h.y-t.y,v=m-g,S=p*p+M*M;if(v*v/l<S)return S<a&&(p===0&&(p=Qn(e),S+=p*p),M===0&&(M=Qn(e),S+=M*M),S<o&&(S=Math.sqrt(o*S)),t.vx+=p*h.value*i/S,t.vy+=M*h.value*i/S),!0;if(h.length||S>=a)return;(h.data!==t||h.next)&&(p===0&&(p=Qn(e),S+=p*p),M===0&&(M=Qn(e),S+=M*M),S<o&&(S=Math.sqrt(o*S)));do h.data!==t&&(v=s[h.data.index]*i/S,t.vx+=p*v,t.vy+=M*v);while(h=h.next)}return c.initialize=function(h,g){n=h,e=g,u()},c.strength=function(h){return arguments.length?(r=typeof h=="function"?h:Si(+h),u(),c):r},c.distanceMin=function(h){return arguments.length?(o=h*h,c):Math.sqrt(o)},c.distanceMax=function(h){return arguments.length?(a=h*h,c):Math.sqrt(a)},c.theta=function(h){return arguments.length?(l=h*h,c):Math.sqrt(l)},c}var po="http://www.w3.org/1999/xhtml",tc={svg:"http://www.w3.org/2000/svg",xhtml:po,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Un(n){var t=n+="",e=t.indexOf(":");return e>=0&&(t=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),tc.hasOwnProperty(t)?{space:tc[t],local:n}:n}function $m(n){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===po&&t.documentElement.namespaceURI===po?t.createElement(n):t.createElementNS(e,n)}}function Zm(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function mo(n){var t=Un(n);return(t.local?Zm:$m)(t)}function Jm(){}function Ti(n){return n==null?Jm:function(){return this.querySelector(n)}}function Bh(n){typeof n!="function"&&(n=Ti(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=i[r]=new Array(o),l,c,u=0;u<o;++u)(l=s[u])&&(c=n.call(l,l.__data__,u,s))&&("__data__"in l&&(c.__data__=l.__data__),a[u]=c);return new xe(i,this._parents)}function ec(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function Km(){return[]}function Zr(n){return n==null?Km:function(){return this.querySelectorAll(n)}}function Qm(n){return function(){return ec(n.apply(this,arguments))}}function Oh(n){typeof n=="function"?n=Qm(n):n=Zr(n);for(var t=this._groups,e=t.length,i=[],r=[],s=0;s<e;++s)for(var o=t[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&(i.push(n.call(l,l.__data__,c,o)),r.push(l));return new xe(i,r)}function Jr(n){return function(){return this.matches(n)}}function go(n){return function(t){return t.matches(n)}}var jm=Array.prototype.find;function tg(n){return function(){return jm.call(this.children,n)}}function eg(){return this.firstElementChild}function zh(n){return this.select(n==null?eg:tg(typeof n=="function"?n:go(n)))}var ng=Array.prototype.filter;function ig(){return Array.from(this.children)}function rg(n){return function(){return ng.call(this.children,n)}}function kh(n){return this.selectAll(n==null?ig:rg(typeof n=="function"?n:go(n)))}function Vh(n){typeof n!="function"&&(n=Jr(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=i[r]=[],l,c=0;c<o;++c)(l=s[c])&&n.call(l,l.__data__,c,s)&&a.push(l);return new xe(i,this._parents)}function xo(n){return new Array(n.length)}function Gh(){return new xe(this._enter||this._groups.map(xo),this._parents)}function Kr(n,t){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=t}Kr.prototype={constructor:Kr,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,t){return this._parent.insertBefore(n,t)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function Hh(n){return function(){return n}}function sg(n,t,e,i,r,s){for(var o=0,a,l=t.length,c=s.length;o<c;++o)(a=t[o])?(a.__data__=s[o],i[o]=a):e[o]=new Kr(n,s[o]);for(;o<l;++o)(a=t[o])&&(r[o]=a)}function og(n,t,e,i,r,s,o){var a,l,c=new Map,u=t.length,f=s.length,d=new Array(u),h;for(a=0;a<u;++a)(l=t[a])&&(d[a]=h=o.call(l,l.__data__,a,t)+"",c.has(h)?r[a]=l:c.set(h,l));for(a=0;a<f;++a)h=o.call(n,s[a],a,s)+"",(l=c.get(h))?(i[a]=l,l.__data__=s[a],c.delete(h)):e[a]=new Kr(n,s[a]);for(a=0;a<u;++a)(l=t[a])&&c.get(d[a])===l&&(r[a]=l)}function ag(n){return n.__data__}function Wh(n,t){if(!arguments.length)return Array.from(this,ag);var e=t?og:sg,i=this._parents,r=this._groups;typeof n!="function"&&(n=Hh(n));for(var s=r.length,o=new Array(s),a=new Array(s),l=new Array(s),c=0;c<s;++c){var u=i[c],f=r[c],d=f.length,h=lg(n.call(u,u&&u.__data__,c,i)),g=h.length,x=a[c]=new Array(g),m=o[c]=new Array(g),p=l[c]=new Array(d);e(u,f,x,m,p,h,t);for(var M=0,v=0,S,E;M<g;++M)if(S=x[M]){for(M>=v&&(v=M+1);!(E=m[v])&&++v<g;);S._next=E||null}}return o=new xe(o,i),o._enter=a,o._exit=l,o}function lg(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function Xh(){return new xe(this._exit||this._groups.map(xo),this._parents)}function qh(n,t,e){var i=this.enter(),r=this,s=this.exit();return typeof n=="function"?(i=n(i),i&&(i=i.selection())):i=i.append(n+""),t!=null&&(r=t(r),r&&(r=r.selection())),e==null?s.remove():e(s),i&&r?i.merge(r).order():r}function Yh(n){for(var t=n.selection?n.selection():n,e=this._groups,i=t._groups,r=e.length,s=i.length,o=Math.min(r,s),a=new Array(r),l=0;l<o;++l)for(var c=e[l],u=i[l],f=c.length,d=a[l]=new Array(f),h,g=0;g<f;++g)(h=c[g]||u[g])&&(d[g]=h);for(;l<r;++l)a[l]=e[l];return new xe(a,this._parents)}function $h(){for(var n=this._groups,t=-1,e=n.length;++t<e;)for(var i=n[t],r=i.length-1,s=i[r],o;--r>=0;)(o=i[r])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function Zh(n){n||(n=cg);function t(f,d){return f&&d?n(f.__data__,d.__data__):!f-!d}for(var e=this._groups,i=e.length,r=new Array(i),s=0;s<i;++s){for(var o=e[s],a=o.length,l=r[s]=new Array(a),c,u=0;u<a;++u)(c=o[u])&&(l[u]=c);l.sort(t)}return new xe(r,this._parents).order()}function cg(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function Jh(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function Kh(){return Array.from(this)}function Qh(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],r=0,s=i.length;r<s;++r){var o=i[r];if(o)return o}return null}function jh(){let n=0;for(let t of this)++n;return n}function tf(){return!this.node()}function ef(n){for(var t=this._groups,e=0,i=t.length;e<i;++e)for(var r=t[e],s=0,o=r.length,a;s<o;++s)(a=r[s])&&n.call(a,a.__data__,s,r);return this}function ug(n){return function(){this.removeAttribute(n)}}function hg(n){return function(){this.removeAttributeNS(n.space,n.local)}}function fg(n,t){return function(){this.setAttribute(n,t)}}function dg(n,t){return function(){this.setAttributeNS(n.space,n.local,t)}}function pg(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function mg(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function nf(n,t){var e=Un(n);if(arguments.length<2){var i=this.node();return e.local?i.getAttributeNS(e.space,e.local):i.getAttribute(e)}return this.each((t==null?e.local?hg:ug:typeof t=="function"?e.local?mg:pg:e.local?dg:fg)(e,t))}function _o(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function gg(n){return function(){this.style.removeProperty(n)}}function xg(n,t,e){return function(){this.style.setProperty(n,t,e)}}function _g(n,t,e){return function(){var i=t.apply(this,arguments);i==null?this.style.removeProperty(n):this.style.setProperty(n,i,e)}}function rf(n,t,e){return arguments.length>1?this.each((t==null?gg:typeof t=="function"?_g:xg)(n,t,e??"")):jn(this.node(),n)}function jn(n,t){return n.style.getPropertyValue(t)||_o(n).getComputedStyle(n,null).getPropertyValue(t)}function yg(n){return function(){delete this[n]}}function vg(n,t){return function(){this[n]=t}}function Sg(n,t){return function(){var e=t.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function sf(n,t){return arguments.length>1?this.each((t==null?yg:typeof t=="function"?Sg:vg)(n,t)):this.node()[n]}function of(n){return n.trim().split(/^|\s+/)}function nc(n){return n.classList||new af(n)}function af(n){this._node=n,this._names=of(n.getAttribute("class")||"")}af.prototype={add:function(n){var t=this._names.indexOf(n);t<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var t=this._names.indexOf(n);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function lf(n,t){for(var e=nc(n),i=-1,r=t.length;++i<r;)e.add(t[i])}function cf(n,t){for(var e=nc(n),i=-1,r=t.length;++i<r;)e.remove(t[i])}function Mg(n){return function(){lf(this,n)}}function bg(n){return function(){cf(this,n)}}function wg(n,t){return function(){(t.apply(this,arguments)?lf:cf)(this,n)}}function uf(n,t){var e=of(n+"");if(arguments.length<2){for(var i=nc(this.node()),r=-1,s=e.length;++r<s;)if(!i.contains(e[r]))return!1;return!0}return this.each((typeof t=="function"?wg:t?Mg:bg)(e,t))}function Tg(){this.textContent=""}function Eg(n){return function(){this.textContent=n}}function Ag(n){return function(){var t=n.apply(this,arguments);this.textContent=t??""}}function hf(n){return arguments.length?this.each(n==null?Tg:(typeof n=="function"?Ag:Eg)(n)):this.node().textContent}function Cg(){this.innerHTML=""}function Rg(n){return function(){this.innerHTML=n}}function Ig(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t??""}}function ff(n){return arguments.length?this.each(n==null?Cg:(typeof n=="function"?Ig:Rg)(n)):this.node().innerHTML}function Pg(){this.nextSibling&&this.parentNode.appendChild(this)}function df(){return this.each(Pg)}function Lg(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function pf(){return this.each(Lg)}function mf(n){var t=typeof n=="function"?n:mo(n);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function Dg(){return null}function gf(n,t){var e=typeof n=="function"?n:mo(n),i=t==null?Dg:typeof t=="function"?t:Ti(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),i.apply(this,arguments)||null)})}function Ng(){var n=this.parentNode;n&&n.removeChild(this)}function xf(){return this.each(Ng)}function Ug(){var n=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function Fg(){var n=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function _f(n){return this.select(n?Fg:Ug)}function yf(n){return arguments.length?this.property("__data__",n):this.node().__data__}function Bg(n){return function(t){n.call(this,t,this.__data__)}}function Og(n){return n.trim().split(/^|\s+/).map(function(t){var e="",i=t.indexOf(".");return i>=0&&(e=t.slice(i+1),t=t.slice(0,i)),{type:t,name:e}})}function zg(n){return function(){var t=this.__on;if(t){for(var e=0,i=-1,r=t.length,s;e<r;++e)s=t[e],(!n.type||s.type===n.type)&&s.name===n.name?this.removeEventListener(s.type,s.listener,s.options):t[++i]=s;++i?t.length=i:delete this.__on}}}function kg(n,t,e){return function(){var i=this.__on,r,s=Bg(t);if(i){for(var o=0,a=i.length;o<a;++o)if((r=i[o]).type===n.type&&r.name===n.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=e),r.value=t;return}}this.addEventListener(n.type,s,e),r={type:n.type,name:n.name,value:t,listener:s,options:e},i?i.push(r):this.__on=[r]}}function vf(n,t,e){var i=Og(n+""),r,s=i.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,u;l<c;++l)for(r=0,u=a[l];r<s;++r)if((o=i[r]).type===u.type&&o.name===u.name)return u.value}return}for(a=t?kg:zg,r=0;r<s;++r)this.each(a(i[r],t,e));return this}function Sf(n,t,e){var i=_o(n),r=i.CustomEvent;typeof r=="function"?r=new r(t,e):(r=i.document.createEvent("Event"),e?(r.initEvent(t,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(t,!1,!1)),n.dispatchEvent(r)}function Vg(n,t){return function(){return Sf(this,n,t)}}function Gg(n,t){return function(){return Sf(this,n,t.apply(this,arguments))}}function Mf(n,t){return this.each((typeof t=="function"?Gg:Vg)(n,t))}function*bf(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],r=0,s=i.length,o;r<s;++r)(o=i[r])&&(yield o)}var ic=[null];function xe(n,t){this._groups=n,this._parents=t}function wf(){return new xe([[document.documentElement]],ic)}function Hg(){return this}xe.prototype=wf.prototype={constructor:xe,select:Bh,selectAll:Oh,selectChild:zh,selectChildren:kh,filter:Vh,data:Wh,enter:Gh,exit:Xh,join:qh,merge:Yh,selection:Hg,order:$h,sort:Zh,call:Jh,nodes:Kh,node:Qh,size:jh,empty:tf,each:ef,attr:nf,style:rf,property:sf,classed:uf,text:hf,html:ff,raise:df,lower:pf,append:mf,insert:gf,remove:xf,clone:_f,datum:yf,on:vf,dispatch:Mf,[Symbol.iterator]:bf};var Fn=wf;function Me(n){return typeof n=="string"?new xe([[document.querySelector(n)]],[document.documentElement]):new xe([[n]],ic)}function Tf(n){let t;for(;t=n.sourceEvent;)n=t;return n}function We(n,t){if(n=Tf(n),t===void 0&&(t=n.currentTarget),t){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var i=e.createSVGPoint();return i.x=n.clientX,i.y=n.clientY,i=i.matrixTransform(t.getScreenCTM().inverse()),[i.x,i.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[n.clientX-r.left-t.clientLeft,n.clientY-r.top-t.clientTop]}}return[n.pageX,n.pageY]}var yo={capture:!0,passive:!1};function vo(n){n.preventDefault(),n.stopImmediatePropagation()}function rc(n){var t=n.document.documentElement,e=Me(n).on("dragstart.drag",vo,yo);"onselectstart"in t?e.on("selectstart.drag",vo,yo):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function sc(n,t){var e=n.document.documentElement,i=Me(n).on("dragstart.drag",null);t&&(i.on("click.drag",vo,yo),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in e?i.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function So(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function oc(n,t){var e=Object.create(n.prototype);for(var i in t)e[i]=t[i];return e}function ts(){}var Qr=.7,wo=1/Qr,Qi="\\s*([+-]?\\d+)\\s*",jr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Sn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Wg=/^#([0-9a-f]{3,8})$/,Xg=new RegExp(`^rgb\\(${Qi},${Qi},${Qi}\\)$`),qg=new RegExp(`^rgb\\(${Sn},${Sn},${Sn}\\)$`),Yg=new RegExp(`^rgba\\(${Qi},${Qi},${Qi},${jr}\\)$`),$g=new RegExp(`^rgba\\(${Sn},${Sn},${Sn},${jr}\\)$`),Zg=new RegExp(`^hsl\\(${jr},${Sn},${Sn}\\)$`),Jg=new RegExp(`^hsla\\(${jr},${Sn},${Sn},${jr}\\)$`),Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};So(ts,ti,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Af,formatHex:Af,formatHex8:Kg,formatHsl:Qg,formatRgb:Cf,toString:Cf});function Af(){return this.rgb().formatHex()}function Kg(){return this.rgb().formatHex8()}function Qg(){return Nf(this).formatHsl()}function Cf(){return this.rgb().formatRgb()}function ti(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=Wg.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?Rf(t):e===3?new Xe(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?Mo(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?Mo(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Xg.exec(n))?new Xe(t[1],t[2],t[3],1):(t=qg.exec(n))?new Xe(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Yg.exec(n))?Mo(t[1],t[2],t[3],t[4]):(t=$g.exec(n))?Mo(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Zg.exec(n))?Lf(t[1],t[2]/100,t[3]/100,1):(t=Jg.exec(n))?Lf(t[1],t[2]/100,t[3]/100,t[4]):Ef.hasOwnProperty(n)?Rf(Ef[n]):n==="transparent"?new Xe(NaN,NaN,NaN,0):null}function Rf(n){return new Xe(n>>16&255,n>>8&255,n&255,1)}function Mo(n,t,e,i){return i<=0&&(n=t=e=NaN),new Xe(n,t,e,i)}function jg(n){return n instanceof ts||(n=ti(n)),n?(n=n.rgb(),new Xe(n.r,n.g,n.b,n.opacity)):new Xe}function ji(n,t,e,i){return arguments.length===1?jg(n):new Xe(n,t,e,i??1)}function Xe(n,t,e,i){this.r=+n,this.g=+t,this.b=+e,this.opacity=+i}So(Xe,ji,oc(ts,{brighter(n){return n=n==null?wo:Math.pow(wo,n),new Xe(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?Qr:Math.pow(Qr,n),new Xe(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Xe(Ai(this.r),Ai(this.g),Ai(this.b),To(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:If,formatHex:If,formatHex8:t0,formatRgb:Pf,toString:Pf}));function If(){return`#${Ei(this.r)}${Ei(this.g)}${Ei(this.b)}`}function t0(){return`#${Ei(this.r)}${Ei(this.g)}${Ei(this.b)}${Ei((isNaN(this.opacity)?1:this.opacity)*255)}`}function Pf(){let n=To(this.opacity);return`${n===1?"rgb(":"rgba("}${Ai(this.r)}, ${Ai(this.g)}, ${Ai(this.b)}${n===1?")":`, ${n})`}`}function To(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function Ai(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function Ei(n){return n=Ai(n),(n<16?"0":"")+n.toString(16)}function Lf(n,t,e,i){return i<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new fn(n,t,e,i)}function Nf(n){if(n instanceof fn)return new fn(n.h,n.s,n.l,n.opacity);if(n instanceof ts||(n=ti(n)),!n)return new fn;if(n instanceof fn)return n;n=n.rgb();var t=n.r/255,e=n.g/255,i=n.b/255,r=Math.min(t,e,i),s=Math.max(t,e,i),o=NaN,a=s-r,l=(s+r)/2;return a?(t===s?o=(e-i)/a+(e<i)*6:e===s?o=(i-t)/a+2:o=(t-e)/a+4,a/=l<.5?s+r:2-s-r,o*=60):a=l>0&&l<1?0:o,new fn(o,a,l,n.opacity)}function Uf(n,t,e,i){return arguments.length===1?Nf(n):new fn(n,t,e,i??1)}function fn(n,t,e,i){this.h=+n,this.s=+t,this.l=+e,this.opacity=+i}So(fn,Uf,oc(ts,{brighter(n){return n=n==null?wo:Math.pow(wo,n),new fn(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?Qr:Math.pow(Qr,n),new fn(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,i=e+(e<.5?e:1-e)*t,r=2*e-i;return new Xe(ac(n>=240?n-240:n+120,r,i),ac(n,r,i),ac(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new fn(Df(this.h),bo(this.s),bo(this.l),To(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let n=To(this.opacity);return`${n===1?"hsl(":"hsla("}${Df(this.h)}, ${bo(this.s)*100}%, ${bo(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Df(n){return n=(n||0)%360,n<0?n+360:n}function bo(n){return Math.max(0,Math.min(1,n||0))}function ac(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}function lc(n,t,e,i,r){var s=n*n,o=s*n;return((1-3*n+3*s-o)*t+(4-6*s+3*o)*e+(1+3*n+3*s-3*o)*i+o*r)/6}function Ff(n){var t=n.length-1;return function(e){var i=e<=0?e=0:e>=1?(e=1,t-1):Math.floor(e*t),r=n[i],s=n[i+1],o=i>0?n[i-1]:2*r-s,a=i<t-1?n[i+2]:2*s-r;return lc((e-i/t)*t,o,r,s,a)}}function Bf(n){var t=n.length;return function(e){var i=Math.floor(((e%=1)<0?++e:e)*t),r=n[(i+t-1)%t],s=n[i%t],o=n[(i+1)%t],a=n[(i+2)%t];return lc((e-i/t)*t,r,s,o,a)}}var cc=n=>()=>n;function e0(n,t){return function(e){return n+e*t}}function n0(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(i){return Math.pow(n+i*t,e)}}function Of(n){return(n=+n)==1?Eo:function(t,e){return e-t?n0(t,e,n):cc(isNaN(t)?e:t)}}function Eo(n,t){var e=t-n;return e?e0(n,e):cc(isNaN(n)?t:n)}var Ao=(function n(t){var e=Of(t);function i(r,s){var o=e((r=ji(r)).r,(s=ji(s)).r),a=e(r.g,s.g),l=e(r.b,s.b),c=Eo(r.opacity,s.opacity);return function(u){return r.r=o(u),r.g=a(u),r.b=l(u),r.opacity=c(u),r+""}}return i.gamma=n,i})(1);function zf(n){return function(t){var e=t.length,i=new Array(e),r=new Array(e),s=new Array(e),o,a;for(o=0;o<e;++o)a=ji(t[o]),i[o]=a.r||0,r[o]=a.g||0,s[o]=a.b||0;return i=n(i),r=n(r),s=n(s),a.opacity=1,function(l){return a.r=i(l),a.g=r(l),a.b=s(l),a+""}}}var i0=zf(Ff),r0=zf(Bf);function ln(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}var hc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,uc=new RegExp(hc.source,"g");function s0(n){return function(){return n}}function o0(n){return function(t){return n(t)+""}}function fc(n,t){var e=hc.lastIndex=uc.lastIndex=0,i,r,s,o=-1,a=[],l=[];for(n=n+"",t=t+"";(i=hc.exec(n))&&(r=uc.exec(t));)(s=r.index)>e&&(s=t.slice(e,s),a[o]?a[o]+=s:a[++o]=s),(i=i[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,l.push({i:o,x:ln(i,r)})),e=uc.lastIndex;return e<t.length&&(s=t.slice(e),a[o]?a[o]+=s:a[++o]=s),a.length<2?l[0]?o0(l[0].x):s0(t):(t=l.length,function(c){for(var u=0,f;u<t;++u)a[(f=l[u]).i]=f.x(c);return a.join("")})}var kf=180/Math.PI,Co={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function dc(n,t,e,i,r,s){var o,a,l;return(o=Math.sqrt(n*n+t*t))&&(n/=o,t/=o),(l=n*e+t*i)&&(e-=n*l,i-=t*l),(a=Math.sqrt(e*e+i*i))&&(e/=a,i/=a,l/=a),n*i<t*e&&(n=-n,t=-t,l=-l,o=-o),{translateX:r,translateY:s,rotate:Math.atan2(t,n)*kf,skewX:Math.atan(l)*kf,scaleX:o,scaleY:a}}var Ro;function Vf(n){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return t.isIdentity?Co:dc(t.a,t.b,t.c,t.d,t.e,t.f)}function Gf(n){return n==null?Co:(Ro||(Ro=document.createElementNS("http://www.w3.org/2000/svg","g")),Ro.setAttribute("transform",n),(n=Ro.transform.baseVal.consolidate())?(n=n.matrix,dc(n.a,n.b,n.c,n.d,n.e,n.f)):Co)}function Hf(n,t,e,i){function r(c){return c.length?c.pop()+" ":""}function s(c,u,f,d,h,g){if(c!==f||u!==d){var x=h.push("translate(",null,t,null,e);g.push({i:x-4,x:ln(c,f)},{i:x-2,x:ln(u,d)})}else(f||d)&&h.push("translate("+f+t+d+e)}function o(c,u,f,d){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),d.push({i:f.push(r(f)+"rotate(",null,i)-2,x:ln(c,u)})):u&&f.push(r(f)+"rotate("+u+i)}function a(c,u,f,d){c!==u?d.push({i:f.push(r(f)+"skewX(",null,i)-2,x:ln(c,u)}):u&&f.push(r(f)+"skewX("+u+i)}function l(c,u,f,d,h,g){if(c!==f||u!==d){var x=h.push(r(h)+"scale(",null,",",null,")");g.push({i:x-4,x:ln(c,f)},{i:x-2,x:ln(u,d)})}else(f!==1||d!==1)&&h.push(r(h)+"scale("+f+","+d+")")}return function(c,u){var f=[],d=[];return c=n(c),u=n(u),s(c.translateX,c.translateY,u.translateX,u.translateY,f,d),o(c.rotate,u.rotate,f,d),a(c.skewX,u.skewX,f,d),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,f,d),c=u=null,function(h){for(var g=-1,x=d.length,m;++g<x;)f[(m=d[g]).i]=m.x(h);return f.join("")}}}var pc=Hf(Vf,"px, ","px)","deg)"),mc=Hf(Gf,", ",")",")");var a0=1e-12;function Wf(n){return((n=Math.exp(n))+1/n)/2}function l0(n){return((n=Math.exp(n))-1/n)/2}function c0(n){return((n=Math.exp(2*n))-1)/(n+1)}var gc=(function n(t,e,i){function r(s,o){var a=s[0],l=s[1],c=s[2],u=o[0],f=o[1],d=o[2],h=u-a,g=f-l,x=h*h+g*g,m,p;if(x<a0)p=Math.log(d/c)/t,m=function(I){return[a+I*h,l+I*g,c*Math.exp(t*I*p)]};else{var M=Math.sqrt(x),v=(d*d-c*c+i*x)/(2*c*e*M),S=(d*d-c*c-i*x)/(2*d*e*M),E=Math.log(Math.sqrt(v*v+1)-v),R=Math.log(Math.sqrt(S*S+1)-S);p=(R-E)/t,m=function(I){var O=I*p,b=Wf(E),T=c/(e*M)*(b*c0(t*O+E)-l0(E));return[a+T*h,l+T*g,c*b/Wf(t*O+E)]}}return m.duration=p*1e3*t/Math.SQRT2,m}return r.rho=function(s){var o=Math.max(.001,+s),a=o*o,l=a*a;return n(o,a,l)},r})(Math.SQRT2,2,4);var u0=Mi("start","end","cancel","interrupt"),h0=[],Yf=0,Xf=1,Po=2,Io=3,qf=4,Lo=5,es=6;function ei(n,t,e,i,r,s){var o=n.__transition;if(!o)n.__transition={};else if(e in o)return;f0(n,e,{name:t,index:i,group:r,on:u0,tween:h0,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:Yf})}function ns(n,t){var e=be(n,t);if(e.state>Yf)throw new Error("too late; already scheduled");return e}function Ie(n,t){var e=be(n,t);if(e.state>Io)throw new Error("too late; already running");return e}function be(n,t){var e=n.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function f0(n,t,e){var i=n.__transition,r;i[t]=e,e.timer=Ki(s,0,e.time);function s(c){e.state=Xf,e.timer.restart(o,e.delay,e.time),e.delay<=c&&o(c-e.delay)}function o(c){var u,f,d,h;if(e.state!==Xf)return l();for(u in i)if(h=i[u],h.name===e.name){if(h.state===Io)return fo(o);h.state===qf?(h.state=es,h.timer.stop(),h.on.call("interrupt",n,n.__data__,h.index,h.group),delete i[u]):+u<t&&(h.state=es,h.timer.stop(),h.on.call("cancel",n,n.__data__,h.index,h.group),delete i[u])}if(fo(function(){e.state===Io&&(e.state=qf,e.timer.restart(a,e.delay,e.time),a(c))}),e.state=Po,e.on.call("start",n,n.__data__,e.index,e.group),e.state===Po){for(e.state=Io,r=new Array(d=e.tween.length),u=0,f=-1;u<d;++u)(h=e.tween[u].value.call(n,n.__data__,e.index,e.group))&&(r[++f]=h);r.length=f+1}}function a(c){for(var u=c<e.duration?e.ease.call(null,c/e.duration):(e.timer.restart(l),e.state=Lo,1),f=-1,d=r.length;++f<d;)r[f].call(n,u);e.state===Lo&&(e.on.call("end",n,n.__data__,e.index,e.group),l())}function l(){e.state=es,e.timer.stop(),delete i[t];for(var c in i)return;delete n.__transition}}function Ci(n,t){var e=n.__transition,i,r,s=!0,o;if(e){t=t==null?null:t+"";for(o in e){if((i=e[o]).name!==t){s=!1;continue}r=i.state>Po&&i.state<Lo,i.state=es,i.timer.stop(),i.on.call(r?"interrupt":"cancel",n,n.__data__,i.index,i.group),delete e[o]}s&&delete n.__transition}}function $f(n){return this.each(function(){Ci(this,n)})}function d0(n,t){var e,i;return function(){var r=Ie(this,n),s=r.tween;if(s!==e){i=e=s;for(var o=0,a=i.length;o<a;++o)if(i[o].name===t){i=i.slice(),i.splice(o,1);break}}r.tween=i}}function p0(n,t,e){var i,r;if(typeof e!="function")throw new Error;return function(){var s=Ie(this,n),o=s.tween;if(o!==i){r=(i=o).slice();for(var a={name:t,value:e},l=0,c=r.length;l<c;++l)if(r[l].name===t){r[l]=a;break}l===c&&r.push(a)}s.tween=r}}function Zf(n,t){var e=this._id;if(n+="",arguments.length<2){for(var i=be(this.node(),e).tween,r=0,s=i.length,o;r<s;++r)if((o=i[r]).name===n)return o.value;return null}return this.each((t==null?d0:p0)(e,n,t))}function tr(n,t,e){var i=n._id;return n.each(function(){var r=Ie(this,i);(r.value||(r.value={}))[t]=e.apply(this,arguments)}),function(r){return be(r,i).value[t]}}function Do(n,t){var e;return(typeof t=="number"?ln:t instanceof ti?Ao:(e=ti(t))?(t=e,Ao):fc)(n,t)}function m0(n){return function(){this.removeAttribute(n)}}function g0(n){return function(){this.removeAttributeNS(n.space,n.local)}}function x0(n,t,e){var i,r=e+"",s;return function(){var o=this.getAttribute(n);return o===r?null:o===i?s:s=t(i=o,e)}}function _0(n,t,e){var i,r=e+"",s;return function(){var o=this.getAttributeNS(n.space,n.local);return o===r?null:o===i?s:s=t(i=o,e)}}function y0(n,t,e){var i,r,s;return function(){var o,a=e(this),l;return a==null?void this.removeAttribute(n):(o=this.getAttribute(n),l=a+"",o===l?null:o===i&&l===r?s:(r=l,s=t(i=o,a)))}}function v0(n,t,e){var i,r,s;return function(){var o,a=e(this),l;return a==null?void this.removeAttributeNS(n.space,n.local):(o=this.getAttributeNS(n.space,n.local),l=a+"",o===l?null:o===i&&l===r?s:(r=l,s=t(i=o,a)))}}function Jf(n,t){var e=Un(n),i=e==="transform"?mc:Do;return this.attrTween(n,typeof t=="function"?(e.local?v0:y0)(e,i,tr(this,"attr."+n,t)):t==null?(e.local?g0:m0)(e):(e.local?_0:x0)(e,i,t))}function S0(n,t){return function(e){this.setAttribute(n,t.call(this,e))}}function M0(n,t){return function(e){this.setAttributeNS(n.space,n.local,t.call(this,e))}}function b0(n,t){var e,i;function r(){var s=t.apply(this,arguments);return s!==i&&(e=(i=s)&&M0(n,s)),e}return r._value=t,r}function w0(n,t){var e,i;function r(){var s=t.apply(this,arguments);return s!==i&&(e=(i=s)&&S0(n,s)),e}return r._value=t,r}function Kf(n,t){var e="attr."+n;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var i=Un(n);return this.tween(e,(i.local?b0:w0)(i,t))}function T0(n,t){return function(){ns(this,n).delay=+t.apply(this,arguments)}}function E0(n,t){return t=+t,function(){ns(this,n).delay=t}}function Qf(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?T0:E0)(t,n)):be(this.node(),t).delay}function A0(n,t){return function(){Ie(this,n).duration=+t.apply(this,arguments)}}function C0(n,t){return t=+t,function(){Ie(this,n).duration=t}}function jf(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?A0:C0)(t,n)):be(this.node(),t).duration}function R0(n,t){if(typeof t!="function")throw new Error;return function(){Ie(this,n).ease=t}}function td(n){var t=this._id;return arguments.length?this.each(R0(t,n)):be(this.node(),t).ease}function I0(n,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;Ie(this,n).ease=e}}function ed(n){if(typeof n!="function")throw new Error;return this.each(I0(this._id,n))}function nd(n){typeof n!="function"&&(n=Jr(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=i[r]=[],l,c=0;c<o;++c)(l=s[c])&&n.call(l,l.__data__,c,s)&&a.push(l);return new ze(i,this._parents,this._name,this._id)}function id(n){if(n._id!==this._id)throw new Error;for(var t=this._groups,e=n._groups,i=t.length,r=e.length,s=Math.min(i,r),o=new Array(i),a=0;a<s;++a)for(var l=t[a],c=e[a],u=l.length,f=o[a]=new Array(u),d,h=0;h<u;++h)(d=l[h]||c[h])&&(f[h]=d);for(;a<i;++a)o[a]=t[a];return new ze(o,this._parents,this._name,this._id)}function P0(n){return(n+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function L0(n,t,e){var i,r,s=P0(t)?ns:Ie;return function(){var o=s(this,n),a=o.on;a!==i&&(r=(i=a).copy()).on(t,e),o.on=r}}function rd(n,t){var e=this._id;return arguments.length<2?be(this.node(),e).on.on(n):this.each(L0(e,n,t))}function D0(n){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==n)return;t&&t.removeChild(this)}}function sd(){return this.on("end.remove",D0(this._id))}function od(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Ti(n));for(var i=this._groups,r=i.length,s=new Array(r),o=0;o<r;++o)for(var a=i[o],l=a.length,c=s[o]=new Array(l),u,f,d=0;d<l;++d)(u=a[d])&&(f=n.call(u,u.__data__,d,a))&&("__data__"in u&&(f.__data__=u.__data__),c[d]=f,ei(c[d],t,e,d,c,be(u,e)));return new ze(s,this._parents,t,e)}function ad(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Zr(n));for(var i=this._groups,r=i.length,s=[],o=[],a=0;a<r;++a)for(var l=i[a],c=l.length,u,f=0;f<c;++f)if(u=l[f]){for(var d=n.call(u,u.__data__,f,l),h,g=be(u,e),x=0,m=d.length;x<m;++x)(h=d[x])&&ei(h,t,e,x,d,g);s.push(d),o.push(u)}return new ze(s,o,t,e)}var N0=Fn.prototype.constructor;function ld(){return new N0(this._groups,this._parents)}function U0(n,t){var e,i,r;return function(){var s=jn(this,n),o=(this.style.removeProperty(n),jn(this,n));return s===o?null:s===e&&o===i?r:r=t(e=s,i=o)}}function cd(n){return function(){this.style.removeProperty(n)}}function F0(n,t,e){var i,r=e+"",s;return function(){var o=jn(this,n);return o===r?null:o===i?s:s=t(i=o,e)}}function B0(n,t,e){var i,r,s;return function(){var o=jn(this,n),a=e(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(n),jn(this,n))),o===l?null:o===i&&l===r?s:(r=l,s=t(i=o,a))}}function O0(n,t){var e,i,r,s="style."+t,o="end."+s,a;return function(){var l=Ie(this,n),c=l.on,u=l.value[s]==null?a||(a=cd(t)):void 0;(c!==e||r!==u)&&(i=(e=c).copy()).on(o,r=u),l.on=i}}function ud(n,t,e){var i=(n+="")=="transform"?pc:Do;return t==null?this.styleTween(n,U0(n,i)).on("end.style."+n,cd(n)):typeof t=="function"?this.styleTween(n,B0(n,i,tr(this,"style."+n,t))).each(O0(this._id,n)):this.styleTween(n,F0(n,i,t),e).on("end.style."+n,null)}function z0(n,t,e){return function(i){this.style.setProperty(n,t.call(this,i),e)}}function k0(n,t,e){var i,r;function s(){var o=t.apply(this,arguments);return o!==r&&(i=(r=o)&&z0(n,o,e)),i}return s._value=t,s}function hd(n,t,e){var i="style."+(n+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(t==null)return this.tween(i,null);if(typeof t!="function")throw new Error;return this.tween(i,k0(n,t,e??""))}function V0(n){return function(){this.textContent=n}}function G0(n){return function(){var t=n(this);this.textContent=t??""}}function fd(n){return this.tween("text",typeof n=="function"?G0(tr(this,"text",n)):V0(n==null?"":n+""))}function H0(n){return function(t){this.textContent=n.call(this,t)}}function W0(n){var t,e;function i(){var r=n.apply(this,arguments);return r!==e&&(t=(e=r)&&H0(r)),t}return i._value=n,i}function dd(n){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;return this.tween(t,W0(n))}function pd(){for(var n=this._name,t=this._id,e=No(),i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,l,c=0;c<a;++c)if(l=o[c]){var u=be(l,t);ei(l,n,e,c,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new ze(i,this._parents,n,e)}function md(){var n,t,e=this,i=e._id,r=e.size();return new Promise(function(s,o){var a={value:o},l={value:function(){--r===0&&s()}};e.each(function(){var c=Ie(this,i),u=c.on;u!==n&&(t=(n=u).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(l)),c.on=t}),r===0&&s()})}var X0=0;function ze(n,t,e,i){this._groups=n,this._parents=t,this._name=e,this._id=i}function gd(n){return Fn().transition(n)}function No(){return++X0}var Bn=Fn.prototype;ze.prototype=gd.prototype={constructor:ze,select:od,selectAll:ad,selectChild:Bn.selectChild,selectChildren:Bn.selectChildren,filter:nd,merge:id,selection:ld,transition:pd,call:Bn.call,nodes:Bn.nodes,node:Bn.node,size:Bn.size,empty:Bn.empty,each:Bn.each,on:rd,attr:Jf,attrTween:Kf,style:ud,styleTween:hd,text:fd,textTween:dd,remove:sd,tween:Zf,delay:Qf,duration:jf,ease:td,easeVarying:ed,end:md,[Symbol.iterator]:Bn[Symbol.iterator]};function Uo(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var q0={time:null,delay:0,duration:250,ease:Uo};function Y0(n,t){for(var e;!(e=n.__transition)||!(e=e[t]);)if(!(n=n.parentNode))throw new Error(`transition ${t} not found`);return e}function xd(n){var t,e;n instanceof ze?(t=n._id,n=n._name):(t=No(),(e=q0).time=Yr(),n=n==null?null:n+"");for(var i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&ei(l,n,t,c,o,e||Y0(l,t));return new ze(i,this._parents,n,t)}Fn.prototype.interrupt=$f;Fn.prototype.transition=xd;var is=n=>()=>n;function xc(n,{sourceEvent:t,target:e,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:n,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:e,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function dn(n,t,e){this.k=n,this.x=t,this.y=e}dn.prototype={constructor:dn,scale:function(n){return n===1?this:new dn(this.k*n,this.x,this.y)},translate:function(n,t){return n===0&t===0?this:new dn(this.k,this.x+this.k*n,this.y+this.k*t)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Mn=new dn(1,0,0);_c.prototype=dn.prototype;function _c(n){for(;!n.__zoom;)if(!(n=n.parentNode))return Mn;return n.__zoom}function Fo(n){n.stopImmediatePropagation()}function er(n){n.preventDefault(),n.stopImmediatePropagation()}function $0(n){return(!n.ctrlKey||n.type==="wheel")&&!n.button}function Z0(){var n=this;return n instanceof SVGElement?(n=n.ownerSVGElement||n,n.hasAttribute("viewBox")?(n=n.viewBox.baseVal,[[n.x,n.y],[n.x+n.width,n.y+n.height]]):[[0,0],[n.width.baseVal.value,n.height.baseVal.value]]):[[0,0],[n.clientWidth,n.clientHeight]]}function _d(){return this.__zoom||Mn}function J0(n){return-n.deltaY*(n.deltaMode===1?.05:n.deltaMode?1:.002)*(n.ctrlKey?10:1)}function K0(){return navigator.maxTouchPoints||"ontouchstart"in this}function Q0(n,t,e){var i=n.invertX(t[0][0])-e[0][0],r=n.invertX(t[1][0])-e[1][0],s=n.invertY(t[0][1])-e[0][1],o=n.invertY(t[1][1])-e[1][1];return n.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),o>s?(s+o)/2:Math.min(0,s)||Math.max(0,o))}function Bo(){var n=$0,t=Z0,e=Q0,i=J0,r=K0,s=[0,1/0],o=[[-1/0,-1/0],[1/0,1/0]],a=250,l=gc,c=Mi("start","zoom","end"),u,f,d,h=500,g=150,x=0,m=10;function p(C){C.property("__zoom",_d).on("wheel.zoom",O,{passive:!1}).on("mousedown.zoom",b).on("dblclick.zoom",T).filter(r).on("touchstart.zoom",D).on("touchmove.zoom",V).on("touchend.zoom touchcancel.zoom",G).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(C,z,P,N){var W=C.selection?C.selection():C;W.property("__zoom",_d),C!==W?E(C,z,P,N):W.interrupt().each(function(){R(this,arguments).event(N).start().zoom(null,typeof z=="function"?z.apply(this,arguments):z).end()})},p.scaleBy=function(C,z,P,N){p.scaleTo(C,function(){var W=this.__zoom.k,Q=typeof z=="function"?z.apply(this,arguments):z;return W*Q},P,N)},p.scaleTo=function(C,z,P,N){p.transform(C,function(){var W=t.apply(this,arguments),Q=this.__zoom,J=P==null?S(W):typeof P=="function"?P.apply(this,arguments):P,et=Q.invert(J),gt=typeof z=="function"?z.apply(this,arguments):z;return e(v(M(Q,gt),J,et),W,o)},P,N)},p.translateBy=function(C,z,P,N){p.transform(C,function(){return e(this.__zoom.translate(typeof z=="function"?z.apply(this,arguments):z,typeof P=="function"?P.apply(this,arguments):P),t.apply(this,arguments),o)},null,N)},p.translateTo=function(C,z,P,N,W){p.transform(C,function(){var Q=t.apply(this,arguments),J=this.__zoom,et=N==null?S(Q):typeof N=="function"?N.apply(this,arguments):N;return e(Mn.translate(et[0],et[1]).scale(J.k).translate(typeof z=="function"?-z.apply(this,arguments):-z,typeof P=="function"?-P.apply(this,arguments):-P),Q,o)},N,W)};function M(C,z){return z=Math.max(s[0],Math.min(s[1],z)),z===C.k?C:new dn(z,C.x,C.y)}function v(C,z,P){var N=z[0]-P[0]*C.k,W=z[1]-P[1]*C.k;return N===C.x&&W===C.y?C:new dn(C.k,N,W)}function S(C){return[(+C[0][0]+ +C[1][0])/2,(+C[0][1]+ +C[1][1])/2]}function E(C,z,P,N){C.on("start.zoom",function(){R(this,arguments).event(N).start()}).on("interrupt.zoom end.zoom",function(){R(this,arguments).event(N).end()}).tween("zoom",function(){var W=this,Q=arguments,J=R(W,Q).event(N),et=t.apply(W,Q),gt=P==null?S(et):typeof P=="function"?P.apply(W,Q):P,Et=Math.max(et[1][0]-et[0][0],et[1][1]-et[0][1]),Ut=W.__zoom,zt=typeof z=="function"?z.apply(W,Q):z,$=l(Ut.invert(gt).concat(Et/Ut.k),zt.invert(gt).concat(Et/zt.k));return function(K){if(K===1)K=zt;else{var ct=$(K),Pt=Et/ct[2];K=new dn(Pt,gt[0]-ct[0]*Pt,gt[1]-ct[1]*Pt)}J.zoom(null,K)}})}function R(C,z,P){return!P&&C.__zooming||new I(C,z)}function I(C,z){this.that=C,this.args=z,this.active=0,this.sourceEvent=null,this.extent=t.apply(C,z),this.taps=0}I.prototype={event:function(C){return C&&(this.sourceEvent=C),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(C,z){return this.mouse&&C!=="mouse"&&(this.mouse[1]=z.invert(this.mouse[0])),this.touch0&&C!=="touch"&&(this.touch0[1]=z.invert(this.touch0[0])),this.touch1&&C!=="touch"&&(this.touch1[1]=z.invert(this.touch1[0])),this.that.__zoom=z,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(C){var z=Me(this.that).datum();c.call(C,this.that,new xc(C,{sourceEvent:this.sourceEvent,target:p,type:C,transform:this.that.__zoom,dispatch:c}),z)}};function O(C,...z){if(!n.apply(this,arguments))return;var P=R(this,z).event(C),N=this.__zoom,W=Math.max(s[0],Math.min(s[1],N.k*Math.pow(2,i.apply(this,arguments)))),Q=We(C);if(P.wheel)(P.mouse[0][0]!==Q[0]||P.mouse[0][1]!==Q[1])&&(P.mouse[1]=N.invert(P.mouse[0]=Q)),clearTimeout(P.wheel);else{if(N.k===W)return;P.mouse=[Q,N.invert(Q)],Ci(this),P.start()}er(C),P.wheel=setTimeout(J,g),P.zoom("mouse",e(v(M(N,W),P.mouse[0],P.mouse[1]),P.extent,o));function J(){P.wheel=null,P.end()}}function b(C,...z){if(d||!n.apply(this,arguments))return;var P=C.currentTarget,N=R(this,z,!0).event(C),W=Me(C.view).on("mousemove.zoom",gt,!0).on("mouseup.zoom",Et,!0),Q=We(C,P),J=C.clientX,et=C.clientY;rc(C.view),Fo(C),N.mouse=[Q,this.__zoom.invert(Q)],Ci(this),N.start();function gt(Ut){if(er(Ut),!N.moved){var zt=Ut.clientX-J,$=Ut.clientY-et;N.moved=zt*zt+$*$>x}N.event(Ut).zoom("mouse",e(v(N.that.__zoom,N.mouse[0]=We(Ut,P),N.mouse[1]),N.extent,o))}function Et(Ut){W.on("mousemove.zoom mouseup.zoom",null),sc(Ut.view,N.moved),er(Ut),N.event(Ut).end()}}function T(C,...z){if(n.apply(this,arguments)){var P=this.__zoom,N=We(C.changedTouches?C.changedTouches[0]:C,this),W=P.invert(N),Q=P.k*(C.shiftKey?.5:2),J=e(v(M(P,Q),N,W),t.apply(this,z),o);er(C),a>0?Me(this).transition().duration(a).call(E,J,N,C):Me(this).call(p.transform,J,N,C)}}function D(C,...z){if(n.apply(this,arguments)){var P=C.touches,N=P.length,W=R(this,z,C.changedTouches.length===N).event(C),Q,J,et,gt;for(Fo(C),J=0;J<N;++J)et=P[J],gt=We(et,this),gt=[gt,this.__zoom.invert(gt),et.identifier],W.touch0?!W.touch1&&W.touch0[2]!==gt[2]&&(W.touch1=gt,W.taps=0):(W.touch0=gt,Q=!0,W.taps=1+!!u);u&&(u=clearTimeout(u)),Q&&(W.taps<2&&(f=gt[0],u=setTimeout(function(){u=null},h)),Ci(this),W.start())}}function V(C,...z){if(this.__zooming){var P=R(this,z).event(C),N=C.changedTouches,W=N.length,Q,J,et,gt;for(er(C),Q=0;Q<W;++Q)J=N[Q],et=We(J,this),P.touch0&&P.touch0[2]===J.identifier?P.touch0[0]=et:P.touch1&&P.touch1[2]===J.identifier&&(P.touch1[0]=et);if(J=P.that.__zoom,P.touch1){var Et=P.touch0[0],Ut=P.touch0[1],zt=P.touch1[0],$=P.touch1[1],K=(K=zt[0]-Et[0])*K+(K=zt[1]-Et[1])*K,ct=(ct=$[0]-Ut[0])*ct+(ct=$[1]-Ut[1])*ct;J=M(J,Math.sqrt(K/ct)),et=[(Et[0]+zt[0])/2,(Et[1]+zt[1])/2],gt=[(Ut[0]+$[0])/2,(Ut[1]+$[1])/2]}else if(P.touch0)et=P.touch0[0],gt=P.touch0[1];else return;P.zoom("touch",e(v(J,et,gt),P.extent,o))}}function G(C,...z){if(this.__zooming){var P=R(this,z).event(C),N=C.changedTouches,W=N.length,Q,J;for(Fo(C),d&&clearTimeout(d),d=setTimeout(function(){d=null},h),Q=0;Q<W;++Q)J=N[Q],P.touch0&&P.touch0[2]===J.identifier?delete P.touch0:P.touch1&&P.touch1[2]===J.identifier&&delete P.touch1;if(P.touch1&&!P.touch0&&(P.touch0=P.touch1,delete P.touch1),P.touch0)P.touch0[1]=this.__zoom.invert(P.touch0[0]);else if(P.end(),P.taps===2&&(J=We(J,this),Math.hypot(f[0]-J[0],f[1]-J[1])<m)){var et=Me(this).on("dblclick.zoom");et&&et.apply(this,arguments)}}}return p.wheelDelta=function(C){return arguments.length?(i=typeof C=="function"?C:is(+C),p):i},p.filter=function(C){return arguments.length?(n=typeof C=="function"?C:is(!!C),p):n},p.touchable=function(C){return arguments.length?(r=typeof C=="function"?C:is(!!C),p):r},p.extent=function(C){return arguments.length?(t=typeof C=="function"?C:is([[+C[0][0],+C[0][1]],[+C[1][0],+C[1][1]]]),p):t},p.scaleExtent=function(C){return arguments.length?(s[0]=+C[0],s[1]=+C[1],p):[s[0],s[1]]},p.translateExtent=function(C){return arguments.length?(o[0][0]=+C[0][0],o[1][0]=+C[1][0],o[0][1]=+C[0][1],o[1][1]=+C[1][1],p):[[o[0][0],o[0][1]],[o[1][0],o[1][1]]]},p.constrain=function(C){return arguments.length?(e=C,p):e},p.duration=function(C){return arguments.length?(a=+C,p):a},p.interpolate=function(C){return arguments.length?(l=C,p):l},p.on=function(){var C=c.on.apply(c,arguments);return C===c?p:C},p.clickDistance=function(C){return arguments.length?(x=(C=+C)*C,p):Math.sqrt(x)},p.tapDistance=function(C){return arguments.length?(m=+C,p):m},p}var nr=class extends Map{constructor(t,e=ex){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),t!=null)for(let[i,r]of t)this.set(i,r)}get(t){return super.get(yd(this,t))}has(t){return super.has(yd(this,t))}set(t,e){return super.set(j0(this,t),e)}delete(t){return super.delete(tx(this,t))}};function yd({_intern:n,_key:t},e){let i=t(e);return n.has(i)?n.get(i):e}function j0({_intern:n,_key:t},e){let i=t(e);return n.has(i)?n.get(i):(n.set(i,e),e)}function tx({_intern:n,_key:t},e){let i=t(e);return n.has(i)&&(e=n.get(i),n.delete(i)),e}function ex(n){return n!==null&&typeof n=="object"?n.valueOf():n}function vd(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}var yc=Symbol("implicit");function ir(){var n=new nr,t=[],e=[],i=yc;function r(s){let o=n.get(s);if(o===void 0){if(i!==yc)return i;n.set(s,o=t.push(s)-1)}return e[o%e.length]}return r.domain=function(s){if(!arguments.length)return t.slice();t=[],n=new nr;for(let o of s)n.has(o)||n.set(o,t.push(o)-1);return r},r.range=function(s){return arguments.length?(e=Array.from(s),r):e.slice()},r.unknown=function(s){return arguments.length?(i=s,r):i},r.copy=function(){return ir(t,e).unknown(i)},vd.apply(r,arguments),r}function rr(n){for(var t=n.length/6|0,e=new Array(t),i=0;i<t;)e[i]="#"+n.slice(i*6,++i*6);return e}var Oo=rr("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");var zo=rr("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");var ko=rr("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");var ce={dark:{background:"#1a1a2e",nodeDefault:"#6c9fff",nodeBorder:"#2a2a4a",selectedBorder:"#ffd700",edgeDefault:"#4a5568",edgeOpacity:.8,edgeSelected:"#a0aec0",edgeSelectedOpacity:1,labelColor:"#a0aec0",selectedLabelColor:"#ffffff",panelBg:"rgba(30, 30, 50, 0.92)",panelText:"#c0c8d8",panelBorder:"1px solid rgba(255, 255, 255, 0.08)",panelShadow:"0 8px 32px rgba(0, 0, 0, 0.4)",panelHeaderBorder:"rgba(255, 255, 255, 0.1)",buttonBg:"rgba(255, 255, 255, 0.06)",buttonBorder:"1px solid rgba(255, 255, 255, 0.12)",buttonText:"#c0c8d8",buttonHoverBg:"rgba(255, 255, 255, 0.12)",activeButtonBg:"rgba(108, 159, 255, 0.2)",activeButtonBorder:"1px solid #6c9fff",activeButtonText:"#6c9fff",inactiveText:"rgba(255, 255, 255, 0.3)",inputBg:"rgba(255, 255, 255, 0.08)",inputBorder:"1px solid rgba(255, 255, 255, 0.15)",inputText:"#e0e0e0",inputPlaceholder:"rgba(255, 255, 255, 0.3)",tooltipBg:"rgba(20, 20, 40, 0.95)",tooltipText:"#ffffff",tooltipShadow:"0 4px 16px rgba(0, 0, 0, 0.5)",selectionBoxFill:"rgba(108, 159, 255, 0.1)",selectionBoxStroke:"#48bb78",legendHoverBg:"rgba(255, 255, 255, 0.08)",statsBorder:"rgba(255, 255, 255, 0.1)",groupFillOpacity:.15,iconColor:"#a0aec0"},light:{background:"#ffffff",nodeDefault:"#548ff0",nodeBorder:"#ffffff",selectedBorder:"#000000",edgeDefault:"#333333",edgeOpacity:.8,edgeSelected:"#555555",edgeSelectedOpacity:1,labelColor:"#2d3748",selectedLabelColor:"#000000",panelBg:"rgba(255, 255, 255, 0.98)",panelText:"#2d3748",panelBorder:"1px solid #e2e8f0",panelShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",panelHeaderBorder:"#e2e8f0",buttonBg:"linear-gradient(145deg, #f8f9fa, #ffffff)",buttonBorder:"1px solid #e2e8f0",buttonText:"#4a5568",buttonHoverBg:"#f0f4ff",activeButtonBg:"rgba(84, 143, 240, 0.12)",activeButtonBorder:"1px solid #548ff0",activeButtonText:"#548ff0",inactiveText:"#a0aec0",inputBg:"#ffffff",inputBorder:"1px solid #e2e8f0",inputText:"#2d3748",inputPlaceholder:"#a0aec0",tooltipBg:"rgba(0, 0, 0, 0.85)",tooltipText:"#ffffff",tooltipShadow:"0 2px 8px rgba(0, 0, 0, 0.3)",selectionBoxFill:"rgba(100, 200, 255, 0.1)",selectionBoxStroke:"#55c667",legendHoverBg:"rgba(0, 0, 0, 0.04)",statsBorder:"#e2e8f0",groupFillOpacity:.125,iconColor:"#4a5568"}},Sd={nodes:{defaultSize:15,selectedSizeIncrease:5,defaultColor:null,defaultOpacity:1,borderColor:null,borderWidth:1,selectedBorderColor:null},edges:{defaultColor:null,selectedColor:null,defaultOpacity:null,selectedOpacity:null,defaultWidth:1,selectedWidth:2,showArrows:!0,arrowSize:10,arrowWidth:5},labels:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",fontSize:8,color:null,selectedColor:null,visible:!0},simulation:{chargeStrength:4e3,linkDistance:100,centerStrength:1},groups:{fillOpacity:null,strokeWidth:2,showEllipses:!0},canvas:{backgroundColor:null,zoomMin:.1,zoomMax:5},ui:{theme:"light",showLegend:!0,showStatistics:!1,showTooltips:!0},layout:"force"};function Sc(n,t){let e={...n};for(let i in t)t[i]&&typeof t[i]=="object"&&!Array.isArray(t[i])?e[i]=Sc(n[i]||{},t[i]):t[i]!==void 0&&(e[i]=t[i]);return e}function Md(n,t){let e=ce[t]||ce.light;return n.nodes.defaultColor||(n.nodes.defaultColor=e.nodeDefault),n.nodes.borderColor||(n.nodes.borderColor=e.nodeBorder),n.nodes.selectedBorderColor||(n.nodes.selectedBorderColor=e.selectedBorder),n.edges.defaultColor||(n.edges.defaultColor=e.edgeDefault),n.edges.selectedColor||(n.edges.selectedColor=e.edgeSelected),n.edges.defaultOpacity===null&&(n.edges.defaultOpacity=e.edgeOpacity),n.edges.selectedOpacity===null&&(n.edges.selectedOpacity=e.edgeSelectedOpacity),n.labels.color||(n.labels.color=e.labelColor),n.labels.selectedColor||(n.labels.selectedColor=e.selectedLabelColor),n.groups.fillOpacity===null&&(n.groups.fillOpacity=e.groupFillOpacity),n.canvas.backgroundColor||(n.canvas.backgroundColor=e.background),n}var y={nodes:[],edges:[],selectedNodes:new Set,selectionMode:!1,selectionBox:null,draggingNode:null,dragOffsetX:0,dragOffsetY:0,transform:null,showArrows:!1,colorEdgesByGroup:!1,groupColorOverrides:{},simulation:null,zoom:null,groupColorScale:null,config:null,currentTheme:"light",scene:null,camera:null,renderer:null,nodesFillMesh:null,nodesBorderMesh:null,normalEdgesMesh:null,highlightedEdgesMesh:null,arrowMesh:null,ellipseGroup:null,container:null,labelContainer:null,labelDivs:[],selectionBoxDiv:null,ui:{},userAdjusted:{nodeSize:!1,edgeOpacity:!1}};function Mc(n,t){let e=y.transform;return{x:(n-e.x)/e.k,y:(t-e.y)/e.k}}function Ri(n,t){let e=y.transform;return{x:n*e.k+e.x,y:t*e.k+e.y}}function bd(n){let t=n[0][0],e=n[0][1],i=n[1][1],r=t+i,s=t*i-e*e,o=Math.sqrt(r*r-4*s),a=(r+o)/2,l=(r-o)/2,c,u;e!==0?(c=[a-i,e],u=[l-i,e]):(c=[1,0],u=[0,1]);let f=d=>{let h=Math.sqrt(d[0]*d[0]+d[1]*d[1]);return[d[0]/h,d[1]/h]};return c=f(c),u=f(u),[a,l,c,u]}function wd(n,t){let e=Math.min(t.x,t.x+t.width),i=Math.max(t.x,t.x+t.width),r=Math.min(t.y,t.y+t.height),s=Math.max(t.y,t.y+t.height);return n.x>=e&&n.x<=i&&n.y>=r&&n.y<=s}function bc(n,t){let e=y.config?y.config.nodes.defaultSize:15;return y.nodes.find(i=>Math.sqrt((i.x-n)**2+(i.y-t)**2)<(i.size||e)/2)}function Pe(n){return y.groupColorOverrides[n]||y.groupColorScale(n)}function ni(){y.selectedNodes.clear()}function wc(n){n.forEach(t=>y.selectedNodes.add(t))}function rs(n){ni(),wc(n)}var jd=0,au=1,tp=2;var qs=1,ep=2,Ir=3,Xn=0,ke=1,Ve=2,In=0,Ui=1,lu=2,cu=3,uu=4,np=5,ui=100,ip=101,rp=102,sp=103,op=104,ap=200,lp=201,cp=202,up=203,fa=204,da=205,hp=206,fp=207,dp=208,pp=209,mp=210,gp=211,xp=212,_p=213,yp=214,Wa=0,Xa=1,qa=2,Fi=3,Ya=4,$a=5,Za=6,Ja=7,hu=0,vp=1,Sp=2,_n=0,fu=1,du=2,pu=3,mu=4,gu=5,xu=6,_u=7;var yu=300,mi=301,Gi=302,Ka=303,Qa=304,Ys=306,pa=1e3,wn=1001,ma=1002,Re=1003,Mp=1004;var $s=1005;var Le=1006,ja=1007;var gi=1008;var on=1009,vu=1010,Su=1011,Pr=1012,tl=1013,yn=1014,un=1015,Pn=1016,el=1017,nl=1018,Lr=1020,Mu=35902,bu=35899,wu=1021,Tu=1022,hn=1023,Tn=1026,xi=1027,il=1028,rl=1029,Hi=1030,sl=1031;var ol=1033,Zs=33776,Js=33777,Ks=33778,Qs=33779,al=35840,ll=35841,cl=35842,ul=35843,hl=36196,fl=37492,dl=37496,pl=37488,ml=37489,gl=37490,xl=37491,_l=37808,yl=37809,vl=37810,Sl=37811,Ml=37812,bl=37813,wl=37814,Tl=37815,El=37816,Al=37817,Cl=37818,Rl=37819,Il=37820,Pl=37821,Ll=36492,Dl=36494,Nl=36495,Ul=36283,Fl=36284,Bl=36285,Ol=36286;var gs=2300,ga=2301,ha=2302,Qc=2400,jc=2401,tu=2402;var bp=3200;var wp=0,Tp=1,Zn="",je="srgb",Bi="srgb-linear",xs="linear",jt="srgb";var Ni=7680;var eu=519,Ep=512,Ap=513,Cp=514,zl=515,Rp=516,Ip=517,kl=518,Pp=519,nu=35044,Jn=35048;var Eu="300 es",xn=2e3,_s=2001;function Au(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function nx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ys(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lp(){let n=ys("canvas");return n.style.display="block",n}var Td={},vr=null;function Cu(...n){let t="THREE."+n.shift();vr?vr("log",t,...n):console.log(t,...n)}function Rt(...n){let t="THREE."+n.shift();vr?vr("warn",t,...n):console.warn(t,...n)}function Dt(...n){let t="THREE."+n.shift();vr?vr("error",t,...n):console.error(t,...n)}function Sr(...n){let t=n.join(" ");t in Td||(Td[t]=!0,Rt(...n))}function Dp(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Tc=Math.PI/180,xa=180/Math.PI;function Dr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function Wt(n,t,e){return Math.max(t,Math.min(e,n))}function ix(n,t){return(n%t+t)%t}function Ec(n,t,e){return(1-e)*n+e*t}function ss(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Tt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yn=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[o+0],h=s[o+1],g=s[o+2],x=s[o+3];if(a<=0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a>=1){t[e+0]=d,t[e+1]=h,t[e+2]=g,t[e+3]=x;return}if(f!==x||l!==d||c!==h||u!==g){let m=l*d+c*h+u*g+f*x;m<0&&(d=-d,h=-h,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),v=Math.sin(M);p=Math.sin(p*M)/v,a=Math.sin(a*M)/v,l=l*p+d*a,c=c*p+h*a,u=u*p+g*a,f=f*p+x*a}else{l=l*p+d*a,c=c*p+h*a,u=u*p+g*a,f=f*p+x*a;let M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return t[e]=a*g+u*f+l*h-c*d,t[e+1]=l*g+u*d+c*f-a*h,t[e+2]=c*g+u*h+a*d-l*f,t[e+3]=u*g-a*f-l*d-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=i+a+f;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){let h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){let h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ed.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ed.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),u=2*(a*e-s*r),f=2*(s*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ac.copy(this).projectOnVector(t),this.sub(Ac)}reflect(t){return this.sub(Ac.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ac=new k,Ed=new Yn,Ot=class n{constructor(t,e,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],x=r[0],m=r[3],p=r[6],M=r[1],v=r[4],S=r[7],E=r[2],R=r[5],I=r[8];return s[0]=o*x+a*M+l*E,s[3]=o*m+a*v+l*R,s[6]=o*p+a*S+l*I,s[1]=c*x+u*M+f*E,s[4]=c*m+u*v+f*R,s[7]=c*p+u*S+f*I,s[2]=d*x+h*M+g*E,s[5]=d*m+h*v+g*R,s[8]=d*p+h*S+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=e*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(r*c-u*i)*x,t[2]=(a*i-r*o)*x,t[3]=d*x,t[4]=(u*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=h*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Cc.makeScale(t,e)),this}rotate(t){return this.premultiply(Cc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Cc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Cc=new Ot,Ad=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cd=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function rx(){let n={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===jt&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===jt&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zn?xs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Bi]:{primaries:t,whitePoint:i,transfer:xs,toXYZ:Ad,fromXYZ:Cd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:je},outputColorSpaceConfig:{drawingBufferColorSpace:je}},[je]:{primaries:t,whitePoint:i,transfer:jt,toXYZ:Ad,fromXYZ:Cd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:je}}}),n}var Yt=rx();function Wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var sr,_a=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{sr===void 0&&(sr=ys("canvas")),sr.width=t.width,sr.height=t.height;let r=sr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=sr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ys("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wn(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Wn(e[i]/255)*255):e[i]=Wn(e[i]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sx=0,Mr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Dr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rc(r[o].image)):s.push(Rc(r[o]))}else s=Rc(r);i.url=s}return e||(t.images[this.uuid]=i),i}};function Rc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_a.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var ox=0,Ic=new k,$e=class n extends qn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=wn,r=wn,s=Le,o=gi,a=hn,l=on,c=n.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Dr(),this.name="",this.source=new Mr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ic).x}get height(){return this.source.getSize(Ic).y}get depth(){return this.source.getSize(Ic).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pa:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pa:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=yu;$e.DEFAULT_ANISOTROPY=1;var _e=class n{constructor(t=0,e=0,i=0,r=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s,l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,S=(h+1)/2,E=(p+1)/2,R=(u+d)/4,I=(f+x)/4,O=(g+m)/4;return v>S&&v>E?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=I/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=O/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=I/s,r=O/s),this.set(i,r,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-x)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ya=class extends qn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let r={width:t,height:e,depth:i.depth},s=new $e(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:Le,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Mr(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends ya{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},vs=class extends $e{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var va=class extends $e{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Re,this.minFilter=Re,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var En=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,pn):pn.fromBufferAttribute(s,o),pn.applyMatrix4(t.matrixWorld),this.expandByPoint(pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vo.copy(i.boundingBox)),Vo.applyMatrix4(t.matrixWorld),this.union(Vo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pn),pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),Go.subVectors(this.max,os),or.subVectors(t.a,os),ar.subVectors(t.b,os),lr.subVectors(t.c,os),ii.subVectors(ar,or),ri.subVectors(lr,ar),Ii.subVectors(or,lr);let e=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-Ii.z,Ii.y,ii.z,0,-ii.x,ri.z,0,-ri.x,Ii.z,0,-Ii.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-Ii.y,Ii.x,0];return!Pc(e,or,ar,lr,Go)||(e=[1,0,0,0,1,0,0,0,1],!Pc(e,or,ar,lr,Go))?!1:(Ho.crossVectors(ii,ri),e=[Ho.x,Ho.y,Ho.z],Pc(e,or,ar,lr,Go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},On=[new k,new k,new k,new k,new k,new k,new k,new k],pn=new k,Vo=new En,or=new k,ar=new k,lr=new k,ii=new k,ri=new k,Ii=new k,os=new k,Go=new k,Ho=new k,Pi=new k;function Pc(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Pi.fromArray(n,s);let a=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),l=t.dot(Pi),c=e.dot(Pi),u=i.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var ax=new En,as=new k,Lc=new k,$n=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):ax.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;as.subVectors(t,this.center);let e=as.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(as,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(as.copy(t.center).add(Lc)),this.expandByPoint(as.copy(t.center).sub(Lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},zn=new k,Dc=new k,Wo=new k,si=new k,Nc=new k,Xo=new k,Uc=new k,Ss=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Dc.copy(t).add(e).multiplyScalar(.5),Wo.copy(e).sub(t).normalize(),si.copy(this.origin).sub(Dc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Wo),a=si.dot(this.direction),l=-si.dot(Wo),c=si.lengthSq(),u=Math.abs(1-o*o),f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){let x=1/u;f*=x,d*=x,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Dc).addScaledVector(Wo,d),h}intersectSphere(t,e){zn.subVectors(t.center,this.origin);let i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,i,r,s){Nc.subVectors(e,t),Xo.subVectors(i,t),Uc.crossVectors(Nc,Xo);let o=this.direction.dot(Uc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,t);let l=a*this.direction.dot(Xo.crossVectors(si,Xo));if(l<0)return null;let c=a*this.direction.dot(Nc.cross(si));if(c<0||l+c>o)return null;let u=-a*si.dot(Uc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class n{constructor(t,e,i,r,s,o,a,l,c,u,f,d,h,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,u,f,d,h,g,x,m)}set(t,e,i,r,s,o,a,l,c,u,f,d,h,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let e=this.elements,i=t.elements,r=1/cr.setFromMatrixColumn(t,0).length(),s=1/cr.setFromMatrixColumn(t,1).length(),o=1/cr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let d=o*u,h=o*f,g=a*u,x=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=h+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+h*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*u,h=l*f,g=c*u,x=c*f;e[0]=d+x*a,e[4]=g*a-h,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=h*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*u,h=l*f,g=c*u,x=c*f;e[0]=d-x*a,e[4]=-o*f,e[8]=g+h*a,e[1]=h+g*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*u,h=o*f,g=a*u,x=a*f;e[0]=l*u,e[4]=g*c-h,e[8]=d*c+x,e[1]=l*f,e[5]=x*c+d,e[9]=h*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,h=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-d*f,e[8]=g*f+h,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*f+g,e[10]=d-x*f}else if(t.order==="XZY"){let d=o*l,h=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+x,e[5]=o*u,e[9]=h*f-g,e[2]=g*f-h,e[6]=a*u,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lx,t,cx)}lookAt(t,e,i){let r=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),oi.crossVectors(i,Ke),oi.lengthSq()===0&&(Math.abs(i.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),oi.crossVectors(i,Ke)),oi.normalize(),qo.crossVectors(Ke,oi),r[0]=oi.x,r[4]=qo.x,r[8]=Ke.x,r[1]=oi.y,r[5]=qo.y,r[9]=Ke.y,r[2]=oi.z,r[6]=qo.z,r[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],x=i[6],m=i[10],p=i[14],M=i[3],v=i[7],S=i[11],E=i[15],R=r[0],I=r[4],O=r[8],b=r[12],T=r[1],D=r[5],V=r[9],G=r[13],C=r[2],z=r[6],P=r[10],N=r[14],W=r[3],Q=r[7],J=r[11],et=r[15];return s[0]=o*R+a*T+l*C+c*W,s[4]=o*I+a*D+l*z+c*Q,s[8]=o*O+a*V+l*P+c*J,s[12]=o*b+a*G+l*N+c*et,s[1]=u*R+f*T+d*C+h*W,s[5]=u*I+f*D+d*z+h*Q,s[9]=u*O+f*V+d*P+h*J,s[13]=u*b+f*G+d*N+h*et,s[2]=g*R+x*T+m*C+p*W,s[6]=g*I+x*D+m*z+p*Q,s[10]=g*O+x*V+m*P+p*J,s[14]=g*b+x*G+m*N+p*et,s[3]=M*R+v*T+S*C+E*W,s[7]=M*I+v*D+S*z+E*Q,s[11]=M*O+v*V+S*P+E*J,s[15]=M*b+v*G+S*N+E*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],h=t[14],g=t[3],x=t[7],m=t[11],p=t[15],M=l*h-c*d,v=a*h-c*f,S=a*d-l*f,E=o*h-c*u,R=o*d-l*u,I=o*f-a*u;return e*(x*M-m*v+p*S)-i*(g*M-m*E+p*R)+r*(g*v-x*E+p*I)-s*(g*S-x*R+m*I)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],h=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=f*m*c-x*d*c+x*l*h-a*m*h-f*l*p+a*d*p,v=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,S=u*x*c-g*f*c+g*a*h-o*x*h-u*a*p+o*f*p,E=g*f*l-u*x*l-g*a*d+o*x*d+u*a*m-o*f*m,R=e*M+i*v+r*S+s*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return t[0]=M*I,t[1]=(x*d*s-f*m*s-x*r*h+i*m*h+f*r*p-i*d*p)*I,t[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*p+i*l*p)*I,t[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*I,t[4]=v*I,t[5]=(u*m*s-g*d*s+g*r*h-e*m*h-u*r*p+e*d*p)*I,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*p-e*l*p)*I,t[7]=(o*d*s-u*l*s+u*r*c-e*d*c-o*r*h+e*l*h)*I,t[8]=S*I,t[9]=(g*f*s-u*x*s-g*i*h+e*x*h+u*i*p-e*f*p)*I,t[10]=(o*x*s-g*a*s+g*i*c-e*x*c-o*i*p+e*a*p)*I,t[11]=(u*a*s-o*f*s-u*i*c+e*f*c+o*i*h-e*a*h)*I,t[12]=E*I,t[13]=(u*x*r-g*f*r+g*i*d-e*x*d-u*i*m+e*f*m)*I,t[14]=(g*a*r-o*x*r-g*i*l+e*x*l+o*i*m-e*a*m)*I,t[15]=(o*f*r-u*a*r+u*i*l-e*f*l-o*i*d+e*a*d)*I,this}scale(t){let e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,x=o*u,m=o*f,p=a*f,M=l*c,v=l*u,S=l*f,E=i.x,R=i.y,I=i.z;return r[0]=(1-(x+p))*E,r[1]=(h+S)*E,r[2]=(g-v)*E,r[3]=0,r[4]=(h-S)*R,r[5]=(1-(d+p))*R,r[6]=(m+M)*R,r[7]=0,r[8]=(g+v)*I,r[9]=(m-M)*I,r[10]=(1-(d+x))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let s=cr.set(r[0],r[1],r[2]).length(),o=cr.set(r[4],r[5],r[6]).length(),a=cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),mn.copy(this);let c=1/s,u=1/o,f=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,e.setFromRotationMatrix(mn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=xn,l=!1){let c=this.elements,u=2*s/(e-t),f=2*s/(i-r),d=(e+t)/(e-t),h=(i+r)/(i-r),g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===xn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===_s)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=xn,l=!1){let c=this.elements,u=2/(e-t),f=2/(i-r),d=-(e+t)/(e-t),h=-(i+r)/(i-r),g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===xn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===_s)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},cr=new k,mn=new re,lx=new k(0,0,0),cx=new k(1,1,1),oi=new k,qo=new k,Ke=new k,Rd=new re,Id=new Yn,An=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(e){case"XYZ":this._y=Math.asin(Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Rd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Id.setFromEuler(this),this.setFromQuaternion(Id,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};An.DEFAULT_ORDER="XYZ";var Ms=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ux=0,Pd=new k,ur=new Yn,kn=new re,Yo=new k,ls=new k,hx=new k,fx=new Yn,Ld=new k(1,0,0),Dd=new k(0,1,0),Nd=new k(0,0,1),Ud={type:"added"},dx={type:"removed"},hr={type:"childadded",child:null},Fc={type:"childremoved",child:null},en=class n extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new k,e=new An,i=new Yn,r=new k(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new re},normalMatrix:{value:new Ot}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(Ld,t)}rotateY(t){return this.rotateOnAxis(Dd,t)}rotateZ(t){return this.rotateOnAxis(Nd,t)}translateOnAxis(t,e){return Pd.copy(t).applyQuaternion(this.quaternion),this.position.add(Pd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ld,t)}translateY(t){return this.translateOnAxis(Dd,t)}translateZ(t){return this.translateOnAxis(Nd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Yo.copy(t):Yo.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(ls,Yo,this.up):kn.lookAt(Yo,ls,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),ur.setFromRotationMatrix(kn),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Dt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ud),hr.child=t,this.dispatchEvent(hr),hr.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dx),Fc.child=t,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ud),hr.child=t,this.dispatchEvent(hr),hr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,t,hx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,fx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),h=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}};en.DEFAULT_UP=new k(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gn=new k,Vn=new k,Bc=new k,Gn=new k,fr=new k,dr=new k,Fd=new k,Oc=new k,zc=new k,kc=new k,Vc=new _e,Gc=new _e,Hc=new _e,ci=class n{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),gn.subVectors(t,e),r.cross(gn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){gn.subVectors(r,e),Vn.subVectors(i,e),Bc.subVectors(t,e);let o=gn.dot(gn),a=gn.dot(Vn),l=gn.dot(Bc),c=Vn.dot(Vn),u=Vn.dot(Bc),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;let d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return Vc.setScalar(0),Gc.setScalar(0),Hc.setScalar(0),Vc.fromBufferAttribute(t,e),Gc.fromBufferAttribute(t,i),Hc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Vc,s.x),o.addScaledVector(Gc,s.y),o.addScaledVector(Hc,s.z),o}static isFrontFacing(t,e,i,r){return gn.subVectors(i,e),Vn.subVectors(t,e),gn.cross(Vn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),gn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,s=this.c,o,a;fr.subVectors(r,i),dr.subVectors(s,i),Oc.subVectors(t,i);let l=fr.dot(Oc),c=dr.dot(Oc);if(l<=0&&c<=0)return e.copy(i);zc.subVectors(t,r);let u=fr.dot(zc),f=dr.dot(zc);if(u>=0&&f<=u)return e.copy(r);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(fr,o);kc.subVectors(t,s);let h=fr.dot(kc),g=dr.dot(kc);if(g>=0&&h<=g)return e.copy(s);let x=h*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(dr,a);let m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Fd.subVectors(s,r),a=(f-u)/(f-u+(h-g)),e.copy(r).addScaledVector(Fd,a);let p=1/(m+x+d);return o=x*p,a=d*p,e.copy(i).addScaledVector(fr,o).addScaledVector(dr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},$o={h:0,s:0,l:0};function Wc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var It=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Yt.workingColorSpace){if(t=ix(t,1),e=Wt(e,0,1),i=Wt(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=Wc(o,s,t+1/3),this.g=Wc(o,s,t),this.b=Wc(o,s,t-1/3)}return Yt.colorSpaceToWorking(this,r),this}setStyle(t,e=je){function i(s){s!==void 0&&parseFloat(s)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){let i=Np[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return Yt.workingToColorSpace(Ne.copy(this),t),Math.round(Wt(Ne.r*255,0,255))*65536+Math.round(Wt(Ne.g*255,0,255))*256+Math.round(Wt(Ne.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Ne.copy(this),e);let i=Ne.r,r=Ne.g,s=Ne.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=je){Yt.workingToColorSpace(Ne.copy(this),t);let e=Ne.r,i=Ne.g,r=Ne.b;return t!==je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL($o);let i=Ec(ai.h,$o.h,e),r=Ec(ai.s,$o.s,e),s=Ec(ai.l,$o.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ne=new It;It.NAMES=Np;var px=0,hi=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Dr(),this.name="",this.type="Material",this.blending=Ui,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fa,this.blendDst=da,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(i.blending=this.blending),this.side!==Xn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fa&&(i.blendSrc=this.blendSrc),this.blendDst!==da&&(i.blendDst=this.blendDst),this.blendEquation!==ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Cn=class extends hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new An,this.combine=hu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ye=new k,Zo=new Tt,mx=0,fe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=nu,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Zo.fromBufferAttribute(this,e),Zo.applyMatrix3(t),this.setXY(e,Zo.x,Zo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ss(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array),r=qe(r,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==nu&&(t.usage=this.usage),t}};var bs=class extends fe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ws=class extends fe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ve=class extends fe{constructor(t,e,i){super(new Float32Array(t),e,i)}},gx=0,cn=new re,Xc=new en,pr=new k,Qe=new En,cs=new En,Ce=new k,we=class n extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Au(t)?ws:bs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ot().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,i){return cn.makeTranslation(t,e,i),this.applyMatrix4(cn),this}scale(t,e,i){return cn.makeScale(t,e,i),this.applyMatrix4(cn),this}lookAt(t){return Xc.lookAt(t),Xc.updateMatrix(),this.applyMatrix4(Xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ve(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new En);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let s=e[i];Qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let i=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];cs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(Qe.min,cs.min),Qe.expandByPoint(Ce),Ce.addVectors(Qe.max,cs.max),Qe.expandByPoint(Ce)):(Qe.expandByPoint(cs.min),Qe.expandByPoint(cs.max))}Qe.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ce.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ce));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ce.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(t,c),Ce.add(pr)),r=Math.max(r,i.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new k,l[O]=new k;let c=new k,u=new k,f=new k,d=new Tt,h=new Tt,g=new Tt,x=new k,m=new k;function p(O,b,T){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,T),d.fromBufferAttribute(s,O),h.fromBufferAttribute(s,b),g.fromBufferAttribute(s,T),u.sub(c),f.sub(c),h.sub(d),g.sub(d);let D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(D),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[O].add(x),a[b].add(x),a[T].add(x),l[O].add(m),l[b].add(m),l[T].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let O=0,b=M.length;O<b;++O){let T=M[O],D=T.start,V=T.count;for(let G=D,C=D+V;G<C;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let v=new k,S=new k,E=new k,R=new k;function I(O){E.fromBufferAttribute(r,O),R.copy(E);let b=a[O];v.copy(b),v.sub(E.multiplyScalar(E.dot(b))).normalize(),S.crossVectors(R,b);let D=S.dot(l[O])<0?-1:1;o.setXYZW(O,v.x,v.y,v.z,D)}for(let O=0,b=M.length;O<b;++O){let T=M[O],D=T.start,V=T.count;for(let G=D,C=D+V;G<C;G+=3)I(t.getX(G+0)),I(t.getX(G+1)),I(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);let r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,u=new k,f=new k;if(t)for(let d=0,h=t.count;d<h;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=e.count;d<h;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u),h=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new fe(d,u,f)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,i);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){let d=c[u],h=t(d,i);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let h=c[f];u.push(h.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bd=new re,Li=new Ss,Jo=new $n,Od=new k,Ko=new k,Qo=new k,jo=new k,qc=new k,ta=new k,zd=new k,ea=new k,Ue=class extends en{constructor(t=new we,e=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){ta.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],f=s[l];u!==0&&(qc.fromBufferAttribute(f,t),o?ta.addScaledVector(qc,u):ta.addScaledVector(qc.sub(e),u))}e.add(ta)}return e}raycast(t,e){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(s),Li.copy(t.ray).recast(t.near),!(Jo.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Jo,Od)===null||Li.origin.distanceToSquared(Od)>(t.far-t.near)**2))&&(Bd.copy(s).invert(),Li.copy(t.ray).applyMatrix4(Bd),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),v=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=M,E=v;S<E;S+=3){let R=a.getX(S),I=a.getX(S+1),O=a.getX(S+2);r=na(this,p,t,i,c,u,f,R,I,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){let M=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=na(this,o,t,i,c,u,f,M,v,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),v=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=M,E=v;S<E;S+=3){let R=S,I=S+1,O=S+2;r=na(this,p,t,i,c,u,f,R,I,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){let M=m,v=m+1,S=m+2;r=na(this,o,t,i,c,u,f,M,v,S),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function xx(n,t,e,i,r,s,o,a){let l;if(t.side===ke?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Xn,a),l===null)return null;ea.copy(a),ea.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(ea);return c<e.near||c>e.far?null:{distance:c,point:ea.clone(),object:n}}function na(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Ko),n.getVertexPosition(l,Qo),n.getVertexPosition(c,jo);let u=xx(n,t,e,i,Ko,Qo,jo,zd);if(u){let f=new k;ci.getBarycoord(zd,Ko,Qo,jo,f),r&&(u.uv=ci.getInterpolatedAttribute(r,a,l,c,f,new Tt)),s&&(u.uv1=ci.getInterpolatedAttribute(s,a,l,c,f,new Tt)),o&&(u.normal=ci.getInterpolatedAttribute(o,a,l,c,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new k,materialIndex:0};ci.getNormal(Ko,Qo,jo,d.normal),u.face=d,u.barycoord=f}return u}var br=class n extends we{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],f=[],d=0,h=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(u,3)),this.setAttribute("uv",new ve(f,2));function g(x,m,p,M,v,S,E,R,I,O,b){let T=S/I,D=E/O,V=S/2,G=E/2,C=R/2,z=I+1,P=O+1,N=0,W=0,Q=new k;for(let J=0;J<P;J++){let et=J*D-G;for(let gt=0;gt<z;gt++){let Et=gt*T-V;Q[x]=Et*M,Q[m]=et*v,Q[p]=C,c.push(Q.x,Q.y,Q.z),Q[x]=0,Q[m]=0,Q[p]=R>0?1:-1,u.push(Q.x,Q.y,Q.z),f.push(gt/I),f.push(1-J/O),N+=1}}for(let J=0;J<O;J++)for(let et=0;et<I;et++){let gt=d+et+z*J,Et=d+et+z*(J+1),Ut=d+(et+1)+z*(J+1),zt=d+(et+1)+z*J;l.push(gt,Et,zt),l.push(Et,Ut,zt),W+=6}a.addGroup(h,W,b),h+=W,d+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Wi(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Fe(n){let t={};for(let e=0;e<n.length;e++){let i=Wi(n[e]);for(let r in i)t[r]=i[r]}return t}function _x(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ru(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var Up={clone:Wi,merge:Fe},yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yx,this.fragmentShader=vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=_x(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ts=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},li=new k,kd=new Tt,Vd=new Tt,Ye=class extends Ts{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Tc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(Tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,kd,Vd),e.subVectors(Vd,kd)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Tc*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},mr=-90,gr=1,Sa=class extends en{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ye(mr,gr,t,e);r.layers=this.layers,this.add(r);let s=new Ye(mr,gr,t,e);s.layers=this.layers,this.add(s);let o=new Ye(mr,gr,t,e);o.layers=this.layers,this.add(o);let a=new Ye(mr,gr,t,e);a.layers=this.layers,this.add(a);let l=new Ye(mr,gr,t,e);l.layers=this.layers,this.add(l);let c=new Ye(mr,gr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_s)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(f,d,h),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Es=class extends $e{constructor(t=[],e=mi,i,r,s,o,a,l,c,u){super(t,e,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},As=class extends tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Es(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new br(5,5,5),s=new nn({name:"CubemapFromEquirect",uniforms:Wi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ke,blending:In});s.uniforms.tEquirect.value=e;let o=new Ue(r,s),a=e.minFilter;return e.minFilter===gi&&(e.minFilter=Le),new Sa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}},Hn=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sx={type:"move"},wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Hn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var Cs=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new An,this.environmentIntensity=1,this.environmentRotation=new An,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Rs=class extends $e{constructor(t=null,e=1,i=1,r,s,o,a,l,c=Re,u=Re,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Is=class extends fe{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},xr=new re,Gd=new re,ia=[],Hd=new En,Mx=new re,us=new Ue,hs=new $n,Tr=class extends Ue{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Is(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Mx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new En),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xr),Hd.copy(t.boundingBox).applyMatrix4(xr),this.boundingBox.union(Hd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xr),hs.copy(t.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){let i=this.matrixWorld,r=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hs.copy(this.boundingSphere),hs.applyMatrix4(i),t.ray.intersectsSphere(hs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,xr),Gd.multiplyMatrices(i,xr),us.matrixWorld=Gd,us.raycast(t,ia);for(let o=0,a=ia.length;o<a;o++){let l=ia[o];l.instanceId=s,l.object=this,e.push(l)}ia.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Is(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Rs(new Float32Array(r*this.count),r,this.count,il,un));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Yc=new k,bx=new k,wx=new Ot,bn=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=Yc.subVectors(i,e).cross(bx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Yc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||wx.getNormalMatrix(t),r=this.coplanarPoint(Yc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new $n,Tx=new Tt(.5,.5),ra=new k,Ps=class{constructor(t=new bn,e=new bn,i=new bn,r=new bn,s=new bn,o=new bn){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=xn,i=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],x=s[9],m=s[10],p=s[11],M=s[12],v=s[13],S=s[14],E=s[15];if(r[0].setComponents(c-o,h-u,p-g,E-M).normalize(),r[1].setComponents(c+o,h+u,p+g,E+M).normalize(),r[2].setComponents(c+a,h+f,p+x,E+v).normalize(),r[3].setComponents(c-a,h-f,p-x,E-v).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,h-d,p-m,E-S).normalize();else if(r[4].setComponents(c-l,h-d,p-m,E-S).normalize(),e===xn)r[5].setComponents(c+l,h+d,p+m,E+S).normalize();else if(e===_s)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){Di.center.set(0,0,0);let e=Tx.distanceTo(t.center);return Di.radius=.7071067811865476+e,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(ra.x=r.normal.x>0?t.max.x:t.min.x,ra.y=r.normal.y>0?t.max.y:t.min.y,ra.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Rn=class extends hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ma=new k,ba=new k,Wd=new re,fs=new Ss,sa=new $n,$c=new k,Xd=new k,Ls=class extends en{constructor(t=new we,e=new Rn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Ma.fromBufferAttribute(e,r-1),ba.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Ma.distanceTo(ba);t.setAttribute("lineDistance",new ve(i,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(r),sa.radius+=s,t.ray.intersectsSphere(sa)===!1)return;Wd.copy(r).invert(),fs.copy(t.ray).applyMatrix4(Wd);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=h,m=g-1;x<m;x+=c){let p=u.getX(x),M=u.getX(x+1),v=oa(this,t,fs,l,p,M,x);v&&e.push(v)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(h),p=oa(this,t,fs,l,x,m,g-1);p&&e.push(p)}}else{let h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=h,m=g-1;x<m;x+=c){let p=oa(this,t,fs,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=oa(this,t,fs,l,g-1,h,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function oa(n,t,e,i,r,s,o){let a=n.geometry.attributes.position;if(Ma.fromBufferAttribute(a,r),ba.fromBufferAttribute(a,s),e.distanceSqToSegment(Ma,ba,$c,Xd)>i)return;$c.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo($c);if(!(c<t.near||c>t.far))return{distance:c,point:Xd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var qd=new k,Yd=new k,Oi=class extends Ls{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)qd.fromBufferAttribute(e,r),Yd.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+qd.distanceTo(Yd);t.setAttribute("lineDistance",new ve(i,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ds=class extends Ls{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var fi=class extends $e{constructor(t,e,i=yn,r,s,o,a=Re,l=Re,c,u=Tn,f=1){if(u!==Tn&&u!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Mr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},wa=class extends fi{constructor(t,e=yn,i=mi,r,s,o=Re,a=Re,l,c=Tn){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ns=class extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Er=class n extends we{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new k,u=new Tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let h=i+f/e*r;c.x=t*Math.cos(h),c.y=t*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new ve(o,3)),this.setAttribute("normal",new ve(a,3)),this.setAttribute("uv",new ve(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Rt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),r=0,s=i.length,o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let u=i[r],d=i[r+1]-u,h=(o-u)/d;return(r+h)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new Tt:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new k,r=[],s=[],o=[],a=new k,l=new re;for(let h=0;h<=t;h++){let g=h/t;r[h]=this.getTangentAt(g,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(r[h-1],r[h]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Wt(r[h-1].dot(r[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(a,g))}o[h].crossVectors(r[h],s[h])}if(e===!0){let h=Math.acos(Wt(s[0].dot(s[t]),-1,1));h/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(h=-h);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],h*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ar=class extends rn{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Tt){let i=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,h=c-this.aY;l=d*u-h*f+this.aX,c=d*f+h*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ta=class extends Ar{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Iu(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let d=(o-s)/c-(a-s)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,h*=u,r(o,a,d,h)},calc:function(s){let o=s*s,a=o*s;return n+t*s+e*o+i*a}}}var aa=new k,Zc=new Iu,Jc=new Iu,Kc=new Iu,Ea=class extends rn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new k){let i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(aa.subVectors(r[0],r[1]).add(r[0]),c=aa);let f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(aa.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=aa),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),h),x=Math.pow(f.distanceToSquared(d),h),m=Math.pow(d.distanceToSquared(u),h);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Zc.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,g,x,m),Jc.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,g,x,m),Kc.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Zc.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Jc.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),Kc.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return i.set(Zc.calc(l),Jc.calc(l),Kc.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new k().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function $d(n,t,e,i,r){let s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function Ex(n,t){let e=1-n;return e*e*t}function Ax(n,t){return 2*(1-n)*n*t}function Cx(n,t){return n*n*t}function ps(n,t,e,i){return Ex(n,t)+Ax(n,e)+Cx(n,i)}function Rx(n,t){let e=1-n;return e*e*e*t}function Ix(n,t){let e=1-n;return 3*e*e*n*t}function Px(n,t){return 3*(1-n)*n*n*t}function Lx(n,t){return n*n*n*t}function ms(n,t,e,i,r){return Rx(n,t)+Ix(n,e)+Px(n,i)+Lx(n,r)}var Us=class extends rn{constructor(t=new Tt,e=new Tt,i=new Tt,r=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new Tt){let i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ms(t,r.x,s.x,o.x,a.x),ms(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Aa=class extends rn{constructor(t=new k,e=new k,i=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new k){let i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(ms(t,r.x,s.x,o.x,a.x),ms(t,r.y,s.y,o.y,a.y),ms(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fs=class extends rn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ca=class extends rn{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Bs=class extends rn{constructor(t=new Tt,e=new Tt,i=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Tt){let i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(ps(t,r.x,s.x,o.x),ps(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ra=class extends rn{constructor(t=new k,e=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new k){let i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(ps(t,r.x,s.x,o.x),ps(t,r.y,s.y,o.y),ps(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Os=class extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){let i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set($d(a,l.x,c.x,u.x,f.x),$d(a,l.y,c.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new Tt().fromArray(r))}return this}},Zd=Object.freeze({__proto__:null,ArcCurve:Ta,CatmullRomCurve3:Ea,CubicBezierCurve:Us,CubicBezierCurve3:Aa,EllipseCurve:Ar,LineCurve:Fs,LineCurve3:Ca,QuadraticBezierCurve:Bs,QuadraticBezierCurve3:Ra,SplineCurve:Os}),Ia=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zd[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(new Zd[r.type]().fromJSON(r))}return this}},zs=class extends Ia{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Fs(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){let s=new Bs(this.currentPoint.clone(),new Tt(t,e),new Tt(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){let a=new Us(this.currentPoint.clone(),new Tt(t,e),new Tt(i,r),new Tt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Os(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,r,s,o,a,l),this}absellipse(t,e,i,r,s,o,a,l){let c=new Ar(t,e,i,r,s,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Cr=class extends zs{constructor(t){super(t),this.uuid=Dr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(new zs().fromJSON(r))}return this}};function Dx(n,t,e=2){let i=t&&t.length,r=i?t[0]*e:n.length,s=Fp(n,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=Ox(n,t,s,e)),n.length>80*e){a=n[0],l=n[1];let u=a,f=l;for(let d=e;d<r;d+=e){let h=n[d],g=n[d+1];h<a&&(a=h),g<l&&(l=g),h>u&&(u=h),g>f&&(f=g)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return ks(s,o,e,a,l,c,0),o}function Fp(n,t,e,i,r){let s;if(r===Zx(n,t,e,i)>0)for(let o=t;o<e;o+=i)s=Jd(o/i|0,n[o],n[o+1],s);else for(let o=e-i;o>=t;o-=i)s=Jd(o/i|0,n[o],n[o+1],s);return s&&Rr(s,s.next)&&(Gs(s),s=s.next),s}function zi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Rr(e,e.next)||he(e.prev,e,e.next)===0)){if(Gs(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ks(n,t,e,i,r,s,o){if(!n)return;!o&&s&&Hx(n,i,r,s);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?Ux(n,i,r,s):Nx(n)){t.push(l.i,n.i,c.i),Gs(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Fx(zi(n),t),ks(n,t,e,i,r,s,2)):o===2&&Bx(n,t,e,i,r,s):ks(zi(n),t,e,i,r,s,1);break}}}function Nx(n){let t=n.prev,e=n,i=n.next;if(he(t,e,i)>=0)return!1;let r=t.x,s=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=Math.min(r,s,o),f=Math.min(a,l,c),d=Math.max(r,s,o),h=Math.max(a,l,c),g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=h&&ds(r,a,s,l,o,c,g.x,g.y)&&he(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ux(n,t,e,i){let r=n.prev,s=n,o=n.next;if(he(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,d=o.y,h=Math.min(a,l,c),g=Math.min(u,f,d),x=Math.max(a,l,c),m=Math.max(u,f,d),p=iu(h,g,t,e,i),M=iu(x,m,t,e,i),v=n.prevZ,S=n.nextZ;for(;v&&v.z>=p&&S&&S.z<=M;){if(v.x>=h&&v.x<=x&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&ds(a,u,l,f,c,d,v.x,v.y)&&he(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=h&&S.x<=x&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&ds(a,u,l,f,c,d,S.x,S.y)&&he(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=p;){if(v.x>=h&&v.x<=x&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&ds(a,u,l,f,c,d,v.x,v.y)&&he(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=M;){if(S.x>=h&&S.x<=x&&S.y>=g&&S.y<=m&&S!==r&&S!==o&&ds(a,u,l,f,c,d,S.x,S.y)&&he(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Fx(n,t){let e=n;do{let i=e.prev,r=e.next.next;!Rr(i,r)&&Op(i,e,e.next,r)&&Vs(i,r)&&Vs(r,i)&&(t.push(i.i,e.i,r.i),Gs(e),Gs(e.next),e=n=r),e=e.next}while(e!==n);return zi(e)}function Bx(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qx(o,a)){let l=zp(o,a);o=zi(o,o.next),l=zi(l,l.next),ks(o,t,e,i,r,s,0),ks(l,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Ox(n,t,e,i){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*i,l=s<o-1?t[s+1]*i:n.length,c=Fp(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Xx(c))}r.sort(zx);for(let s=0;s<r.length;s++)e=kx(r[s],e);return e}function zx(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function kx(n,t){let e=Vx(n,t);if(!e)return t;let i=zp(e,n);return zi(i,i.next),zi(e,e.next)}function Vx(n,t){let e=t,i=n.x,r=n.y,s=-1/0,o;if(Rr(n,e))return e;do{if(Rr(n,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>s&&(s=f,o=e.x<e.next.x?e:e.next,f===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Bp(r<c?i:s,r,l,c,r<c?s:i,r,e.x,e.y)){let f=Math.abs(r-e.y)/(i-e.x);Vs(e,n)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&Gx(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function Gx(n,t){return he(n.prev,n,t.prev)<0&&he(t.next,n,n.next)<0}function Hx(n,t,e,i){let r=n;do r.z===0&&(r.z=iu(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Wx(r)}function Wx(n){let t,e=1;do{let i=n,r;n=null;let s=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,e*=2}while(t>1);return n}function iu(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Xx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Bp(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function ds(n,t,e,i,r,s,o,a){return!(n===o&&t===a)&&Bp(n,t,e,i,r,s,o,a)}function qx(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Yx(n,t)&&(Vs(n,t)&&Vs(t,n)&&$x(n,t)&&(he(n.prev,n,t.prev)||he(n,t.prev,t))||Rr(n,t)&&he(n.prev,n,n.next)>0&&he(t.prev,t,t.next)>0)}function he(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Rr(n,t){return n.x===t.x&&n.y===t.y}function Op(n,t,e,i){let r=ca(he(n,t,e)),s=ca(he(n,t,i)),o=ca(he(e,i,n)),a=ca(he(e,i,t));return!!(r!==s&&o!==a||r===0&&la(n,e,t)||s===0&&la(n,i,t)||o===0&&la(e,n,i)||a===0&&la(e,t,i))}function la(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ca(n){return n>0?1:n<0?-1:0}function Yx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Op(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Vs(n,t){return he(n.prev,n,n.next)<0?he(n,t,n.next)>=0&&he(n,n.prev,t)>=0:he(n,t,n.prev)<0||he(n,n.next,t)<0}function $x(n,t){let e=n,i=!1,r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function zp(n,t){let e=ru(n.i,n.x,n.y),i=ru(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Jd(n,t,e,i){let r=ru(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Gs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function ru(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zx(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var su=class{static triangulate(t,e,i=2){return Dx(t,e,i)}},yr=class n{static area(t){let e=t.length,i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],r=[],s=[];Kd(t),Qd(i,t);let o=t.length;e.forEach(Kd);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Qd(i,e[l]);let a=su.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Kd(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Qd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Hs=class n extends we{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=t/a,d=e/l,h=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let M=p*d-o;for(let v=0;v<c;v++){let S=v*f-s;g.push(S,-M,0),x.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let v=M+c*p,S=M+c*(p+1),E=M+1+c*(p+1),R=M+1+c*p;h.push(v,S,R),h.push(S,E,R)}this.setIndex(h),this.setAttribute("position",new ve(g,3)),this.setAttribute("normal",new ve(x,3)),this.setAttribute("uv",new ve(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ws=class n extends we{constructor(t=new Cr([new Tt(0,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ve(r,3)),this.setAttribute("normal",new ve(s,3)),this.setAttribute("uv",new ve(o,2));function c(u){let f=r.length/3,d=u.extractPoints(e),h=d.shape,g=d.holes;yr.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];yr.isClockWise(M)===!0&&(g[m]=M.reverse())}let x=yr.triangulateShape(h,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];h=h.concat(M)}for(let m=0,p=h.length;m<p;m++){let M=h[m];r.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=x.length;m<p;m++){let M=x[m],v=M[0]+f,S=M[1]+f,E=M[2]+f;i.push(v,S,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Jx(e,t)}static fromJSON(t,e){let i=[];for(let r=0,s=t.shapes.length;r<s;r++){let o=e[t.shapes[r]];i.push(o)}return new n(i,t.curveSegments)}};function Jx(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let r=n[e];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t}var Pa=class extends nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var La=class extends hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Da=class extends hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ua(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}var ki=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],s=e[i-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=i+2;;){if(r===void 0){if(t<s)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=e[++i],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(r=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Na=class extends ki{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(t,e,i){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case jc:s=t,a=2*e-i;break;case tu:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case jc:o=t,l=2*i-e;break;case tu:o=1,l=i+r[1]-r[0];break;default:o=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(i-e)/(r-e),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,M=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,v=(-1-h)*m+(1.5+h)*x+.5*g,S=h*m-h*x;for(let E=0;E!==a;++E)s[E]=p*o[u+E]+M*o[c+E]+v*o[l+E]+S*o[f+E];return s}},Ua=class extends ki{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-e)/(r-e),f=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*u;return s}},Fa=class extends ki{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},sn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ua(e,this.TimeBufferType),this.values=ua(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ua(t.times,Array),values:ua(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Na(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case gs:e=this.InterpolantFactoryMethodDiscrete;break;case ga:e=this.InterpolantFactoryMethodLinear;break;case ha:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Rt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return ga;case this.InterpolantFactoryMethodSmooth:return ha}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Dt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Dt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Dt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Dt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&nx(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Dt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ha,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(r)l=!0;else{let f=a*i,d=f-i,h=f+i;for(let g=0;g!==i;++g){let x=e[f+g];if(x!==e[d+g]||x!==e[h+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*i,d=o*i;for(let h=0;h!==i;++h)e[d+h]=e[f+h]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};sn.prototype.ValueTypeName="";sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=ga;var di=class extends sn{constructor(t,e,i){super(t,e,i)}};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=gs;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends sn{constructor(t,e,i,r){super(t,e,i,r)}};Ba.prototype.ValueTypeName="color";var Oa=class extends sn{constructor(t,e,i,r){super(t,e,i,r)}};Oa.prototype.ValueTypeName="number";var za=class extends ki{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(r-e),c=t*a;for(let u=c+a;c!==u;c+=4)Yn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Xs=class extends sn{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new za(this.times,this.values,this.getValueSize(),t)}};Xs.prototype.ValueTypeName="quaternion";Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends sn{constructor(t,e,i){super(t,e,i)}};pi.prototype.ValueTypeName="string";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=gs;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends sn{constructor(t,e,i,r){super(t,e,i,r)}};ka.prototype.ValueTypeName="vector";var Va=class{constructor(t,e,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kp=new Va,Ga=class{constructor(t){this.manager=t!==void 0?t:kp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ga.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vi=class extends Ts{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ha=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Pu="\\[\\]\\.:\\/",Kx=new RegExp("["+Pu+"]","g"),Lu="[^"+Pu+"]",Qx="[^"+Pu.replace("\\.","")+"]",jx=/((?:WC+[\/:])*)/.source.replace("WC",Lu),t_=/(WCOD+)?/.source.replace("WCOD",Qx),e_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lu),n_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lu),i_=new RegExp("^"+jx+t_+e_+n_+"$"),r_=["material","materials","bones","map"],ou=class{constructor(t,e,i){let r=i||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},le=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kx,"")}static parseTrackName(t){let e=i_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);r_.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;Dt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};le.Composite=ou;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kC=new Float32Array(1);function Du(n,t,e,i){let r=s_(i);switch(e){case wu:return n*t;case il:return n*t/r.components*r.byteLength;case rl:return n*t/r.components*r.byteLength;case Hi:return n*t*2/r.components*r.byteLength;case sl:return n*t*2/r.components*r.byteLength;case Tu:return n*t*3/r.components*r.byteLength;case hn:return n*t*4/r.components*r.byteLength;case ol:return n*t*4/r.components*r.byteLength;case Zs:case Js:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ks:case Qs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ll:case ul:return Math.max(n,16)*Math.max(t,8)/4;case al:case cl:return Math.max(n,8)*Math.max(t,8)/2;case hl:case fl:case pl:case ml:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case dl:case gl:case xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _l:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case vl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case wl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Al:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ll:case Dl:case Nl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ul:case Fl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Bl:case Ol:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function s_(n){switch(n){case on:case vu:return{byteLength:1,components:1};case Pr:case Su:case Pn:return{byteLength:2,components:1};case el:case nl:return{byteLength:2,components:4};case yn:case tl:case un:return{byteLength:4,components:1};case Mu:case bu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function cm(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function a_(n){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){let g=f[d],x=f[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){let x=f[h];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var l_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,m_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,x_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,__=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,v_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,S_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,M_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,b_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,P_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,L_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,D_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,N_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O_="gl_FragColor = linearToOutputTexel( gl_FragColor );",z_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,V_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,G_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,H_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,X_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,J_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ty=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ny=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ry=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ay=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,my=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,My=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ty=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ey=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,By=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$y=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ky=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ov=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_v=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ev=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kt={alphahash_fragment:l_,alphahash_pars_fragment:c_,alphamap_fragment:u_,alphamap_pars_fragment:h_,alphatest_fragment:f_,alphatest_pars_fragment:d_,aomap_fragment:p_,aomap_pars_fragment:m_,batching_pars_vertex:g_,batching_vertex:x_,begin_vertex:__,beginnormal_vertex:y_,bsdfs:v_,iridescence_fragment:S_,bumpmap_pars_fragment:M_,clipping_planes_fragment:b_,clipping_planes_pars_fragment:w_,clipping_planes_pars_vertex:T_,clipping_planes_vertex:E_,color_fragment:A_,color_pars_fragment:C_,color_pars_vertex:R_,color_vertex:I_,common:P_,cube_uv_reflection_fragment:L_,defaultnormal_vertex:D_,displacementmap_pars_vertex:N_,displacementmap_vertex:U_,emissivemap_fragment:F_,emissivemap_pars_fragment:B_,colorspace_fragment:O_,colorspace_pars_fragment:z_,envmap_fragment:k_,envmap_common_pars_fragment:V_,envmap_pars_fragment:G_,envmap_pars_vertex:H_,envmap_physical_pars_fragment:ty,envmap_vertex:W_,fog_vertex:X_,fog_pars_vertex:q_,fog_fragment:Y_,fog_pars_fragment:$_,gradientmap_pars_fragment:Z_,lightmap_pars_fragment:J_,lights_lambert_fragment:K_,lights_lambert_pars_fragment:Q_,lights_pars_begin:j_,lights_toon_fragment:ey,lights_toon_pars_fragment:ny,lights_phong_fragment:iy,lights_phong_pars_fragment:ry,lights_physical_fragment:sy,lights_physical_pars_fragment:oy,lights_fragment_begin:ay,lights_fragment_maps:ly,lights_fragment_end:cy,logdepthbuf_fragment:uy,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:fy,logdepthbuf_vertex:dy,map_fragment:py,map_pars_fragment:my,map_particle_fragment:gy,map_particle_pars_fragment:xy,metalnessmap_fragment:_y,metalnessmap_pars_fragment:yy,morphinstance_vertex:vy,morphcolor_vertex:Sy,morphnormal_vertex:My,morphtarget_pars_vertex:by,morphtarget_vertex:wy,normal_fragment_begin:Ty,normal_fragment_maps:Ey,normal_pars_fragment:Ay,normal_pars_vertex:Cy,normal_vertex:Ry,normalmap_pars_fragment:Iy,clearcoat_normal_fragment_begin:Py,clearcoat_normal_fragment_maps:Ly,clearcoat_pars_fragment:Dy,iridescence_pars_fragment:Ny,opaque_fragment:Uy,packing:Fy,premultiplied_alpha_fragment:By,project_vertex:Oy,dithering_fragment:zy,dithering_pars_fragment:ky,roughnessmap_fragment:Vy,roughnessmap_pars_fragment:Gy,shadowmap_pars_fragment:Hy,shadowmap_pars_vertex:Wy,shadowmap_vertex:Xy,shadowmask_pars_fragment:qy,skinbase_vertex:Yy,skinning_pars_vertex:$y,skinning_vertex:Zy,skinnormal_vertex:Jy,specularmap_fragment:Ky,specularmap_pars_fragment:Qy,tonemapping_fragment:jy,tonemapping_pars_fragment:tv,transmission_fragment:ev,transmission_pars_fragment:nv,uv_pars_fragment:iv,uv_pars_vertex:rv,uv_vertex:sv,worldpos_vertex:ov,background_vert:av,background_frag:lv,backgroundCube_vert:cv,backgroundCube_frag:uv,cube_vert:hv,cube_frag:fv,depth_vert:dv,depth_frag:pv,distance_vert:mv,distance_frag:gv,equirect_vert:xv,equirect_frag:_v,linedashed_vert:yv,linedashed_frag:vv,meshbasic_vert:Sv,meshbasic_frag:Mv,meshlambert_vert:bv,meshlambert_frag:wv,meshmatcap_vert:Tv,meshmatcap_frag:Ev,meshnormal_vert:Av,meshnormal_frag:Cv,meshphong_vert:Rv,meshphong_frag:Iv,meshphysical_vert:Pv,meshphysical_frag:Lv,meshtoon_vert:Dv,meshtoon_frag:Nv,points_vert:Uv,points_frag:Fv,shadow_vert:Bv,shadow_frag:Ov,sprite_vert:zv,sprite_frag:kv},ht={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Dn={basic:{uniforms:Fe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Fe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new It(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Fe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Fe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Fe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new It(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Fe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Fe([ht.points,ht.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Fe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Fe([ht.common,ht.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Fe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Fe([ht.sprite,ht.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distance:{uniforms:Fe([ht.common,ht.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distance_vert,fragmentShader:kt.distance_frag},shadow:{uniforms:Fe([ht.lights,ht.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};Dn.physical={uniforms:Fe([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var Vl={r:0,b:0,g:0},Xi=new An,Vv=new re;function Gv(n,t,e,i,r,s,o){let a=new It(0),l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(v){let S=v.isScene===!0?v.background:null;return S&&S.isTexture&&(S=(v.backgroundBlurriness>0?e:t).get(S)),S}function x(v){let S=!1,E=g(v);E===null?p(a,l):E&&E.isColor&&(p(E,1),S=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,S){let E=g(S);E&&(E.isCubeTexture||E.mapping===Ys)?(u===void 0&&(u=new Ue(new br(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Wi(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Xi.copy(S.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(Xi)),u.material.toneMapped=Yt.getTransfer(E.colorSpace)!==jt,(f!==E||d!==E.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,h=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Ue(new Hs(2,2),new nn({name:"BackgroundMaterial",uniforms:Wi(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(E.colorSpace)!==jt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,S){v.getRGB(Vl,Ru(n)),i.buffers.color.setClear(Vl.r,Vl.g,Vl.b,S,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:x,addToRenderList:m,dispose:M}}function Hv(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,o=!1;function a(T,D,V,G,C){let z=!1,P=f(G,V,D);s!==P&&(s=P,c(s.object)),z=h(T,G,V,C),z&&g(T,G,V,C),C!==null&&t.update(C,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,S(T,D,V,G),C!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(C).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function f(T,D,V){let G=V.wireframe===!0,C=i[T.id];C===void 0&&(C={},i[T.id]=C);let z=C[D.id];z===void 0&&(z={},C[D.id]=z);let P=z[G];return P===void 0&&(P=d(l()),z[G]=P),P}function d(T){let D=[],V=[],G=[];for(let C=0;C<e;C++)D[C]=0,V[C]=0,G[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:G,object:T,attributes:{},index:null}}function h(T,D,V,G){let C=s.attributes,z=D.attributes,P=0,N=V.getAttributes();for(let W in N)if(N[W].location>=0){let J=C[W],et=z[W];if(et===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(et=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(et=T.instanceColor)),J===void 0||J.attribute!==et||et&&J.data!==et.data)return!0;P++}return s.attributesNum!==P||s.index!==G}function g(T,D,V,G){let C={},z=D.attributes,P=0,N=V.getAttributes();for(let W in N)if(N[W].location>=0){let J=z[W];J===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(J=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(J=T.instanceColor));let et={};et.attribute=J,J&&J.data&&(et.data=J.data),C[W]=et,P++}s.attributes=C,s.attributesNum=P,s.index=G}function x(){let T=s.newAttributes;for(let D=0,V=T.length;D<V;D++)T[D]=0}function m(T){p(T,0)}function p(T,D){let V=s.newAttributes,G=s.enabledAttributes,C=s.attributeDivisors;V[T]=1,G[T]===0&&(n.enableVertexAttribArray(T),G[T]=1),C[T]!==D&&(n.vertexAttribDivisor(T,D),C[T]=D)}function M(){let T=s.newAttributes,D=s.enabledAttributes;for(let V=0,G=D.length;V<G;V++)D[V]!==T[V]&&(n.disableVertexAttribArray(V),D[V]=0)}function v(T,D,V,G,C,z,P){P===!0?n.vertexAttribIPointer(T,D,V,C,z):n.vertexAttribPointer(T,D,V,G,C,z)}function S(T,D,V,G){x();let C=G.attributes,z=V.getAttributes(),P=D.defaultAttributeValues;for(let N in z){let W=z[N];if(W.location>=0){let Q=C[N];if(Q===void 0&&(N==="instanceMatrix"&&T.instanceMatrix&&(Q=T.instanceMatrix),N==="instanceColor"&&T.instanceColor&&(Q=T.instanceColor)),Q!==void 0){let J=Q.normalized,et=Q.itemSize,gt=t.get(Q);if(gt===void 0)continue;let Et=gt.buffer,Ut=gt.type,zt=gt.bytesPerElement,$=Ut===n.INT||Ut===n.UNSIGNED_INT||Q.gpuType===tl;if(Q.isInterleavedBufferAttribute){let K=Q.data,ct=K.stride,Pt=Q.offset;if(K.isInstancedInterleavedBuffer){for(let xt=0;xt<W.locationSize;xt++)p(W.location+xt,K.meshPerAttribute);T.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let xt=0;xt<W.locationSize;xt++)m(W.location+xt);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let xt=0;xt<W.locationSize;xt++)v(W.location+xt,et/W.locationSize,Ut,J,ct*zt,(Pt+et/W.locationSize*xt)*zt,$)}else{if(Q.isInstancedBufferAttribute){for(let K=0;K<W.locationSize;K++)p(W.location+K,Q.meshPerAttribute);T.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let K=0;K<W.locationSize;K++)m(W.location+K);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let K=0;K<W.locationSize;K++)v(W.location+K,et/W.locationSize,Ut,J,et*zt,et/W.locationSize*K*zt,$)}}else if(P!==void 0){let J=P[N];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(W.location,J);break;case 3:n.vertexAttrib3fv(W.location,J);break;case 4:n.vertexAttrib4fv(W.location,J);break;default:n.vertexAttrib1fv(W.location,J)}}}}M()}function E(){O();for(let T in i){let D=i[T];for(let V in D){let G=D[V];for(let C in G)u(G[C].object),delete G[C];delete D[V]}delete i[T]}}function R(T){if(i[T.id]===void 0)return;let D=i[T.id];for(let V in D){let G=D[V];for(let C in G)u(G[C].object),delete G[C];delete D[V]}delete i[T.id]}function I(T){for(let D in i){let V=i[D];if(V[T.id]===void 0)continue;let G=V[T.id];for(let C in G)u(G[C].object),delete G[C];delete V[T.id]}}function O(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Wv(n,t,e){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];e.update(h,i,1)}function l(c,u,f,d){if(f===0)return;let h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*d[x];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Xv(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==hn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let O=I===Pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==on&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==un&&!O)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Rt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:S,maxSamples:E,samples:R}}function qv(n){let t=this,e=null,i=0,r=!1,s=!1,o=new bn,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,h){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let M=s?0:i,v=M*4,S=p.clippingState||null;l.value=S,S=u(g,d,v,h);for(let E=0;E!==v;++E)S[E]=e[E];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,h,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=h+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=h;v!==x;++v,S+=4)o.copy(f[v]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Yv(n){let t=new WeakMap;function e(o,a){return a===Ka?o.mapping=mi:a===Qa&&(o.mapping=Gi),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ka||a===Qa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new As(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var _i=4,Vp=[.125,.215,.35,.446,.526,.582],Yi=20,$v=256,js=new Vi,Gp=new It,Nu=null,Uu=0,Fu=0,Bu=!1,Zv=new k,Hl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){let{size:o=256,position:a=Zv}=s;Nu=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Nu,Uu,Fu),this._renderer.xr.enabled=Bu,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nu=this._renderer.getRenderTarget(),Uu=this._renderer.getActiveCubeFace(),Fu=this._renderer.getActiveMipmapLevel(),Bu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:Pn,format:hn,colorSpace:Bi,depthBuffer:!1},r=Hp(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hp(t,e,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Jv(s)),this._blurMaterial=Qv(s,t,e),this._ggxMaterial=Kv(s,t,e)}return r}_compileMaterial(t){let e=new Ue(new we,t);this._renderer.compile(e,js)}_sceneToCubeUV(t,e,i,r,s){let l=new Ye(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Gp),f.toneMapping=_n,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new br,new Cn({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(Gp),p=!0);for(let v=0;v<6;v++){let S=v%3;S===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):S===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));let E=this._cubeSize;Nr(r,S*E,v>2?E:0,E,E),f.setRenderTarget(r),p&&f.render(x,l),f.render(t,l)}f.toneMapping=h,f.autoClear=d,t.background=M}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===mi||t.mapping===Gi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wp());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Nr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,js)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-_i?i-g+_i:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=h,l.mipInt.value=g-e,Nr(s,m,p,3*x,2*x),r.setRenderTarget(s),r.render(a,js),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Nr(t,m,p,3*x,2*x),r.setRenderTarget(t),r.render(a,js)}_blur(t,e,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");let u=3,f=this._lodMeshes[r];f.material=c;let d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Yi-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Yi;m>Yi&&Rt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);let p=[],M=0;for(let I=0;I<Yi;++I){let O=I/x,b=Math.exp(-O*O/2);p.push(b),I===0?M+=b:I<m&&(M+=2*b)}for(let I=0;I<p.length;I++)p[I]=p[I]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;let S=this._sizeLods[r],E=3*S*(r>v-_i?r-v+_i:0),R=4*(this._cubeSize-S);Nr(e,E,R,3*S,2*S),l.setRenderTarget(e),l.render(f,js)}};function Jv(n){let t=[],e=[],i=[],r=n,s=n-_i+1+Vp.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-_i?l=Vp[o-n+_i-1]:o===0&&(l=0),e.push(l);let c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*h),v=new Float32Array(m*g*h),S=new Float32Array(p*g*h);for(let R=0;R<h;R++){let I=R%3*2/3-1,O=R>2?0:-1,b=[I,O,0,I+2/3,O,0,I+2/3,O+1,0,I,O,0,I+2/3,O+1,0,I,O+1,0];M.set(b,x*g*R),v.set(d,m*g*R);let T=[R,R,R,R,R,R];S.set(T,p*g*R)}let E=new we;E.setAttribute("position",new fe(M,x)),E.setAttribute("uv",new fe(v,m)),E.setAttribute("faceIndex",new fe(S,p)),i.push(new Ue(E,null)),r>_i&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Hp(n,t,e){let i=new tn(n,t,e);return i.texture.mapping=Ys,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Kv(n,t,e){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$v,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Qv(n,t,e){let i=new Float32Array(Yi),r=new k(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Wp(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Xp(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Xl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jv(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ka||l===Qa,u=l===mi||l===Gi;if(c||u){let f=t.get(a),d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Hl(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(e===null&&(e=new Hl(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function tS(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&Sr("WebGLRenderer: "+i+" extension not supported."),r}}}function eS(n,t,e,i){let r={},s=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let h=s.get(d);h&&(t.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let h in d)t.update(d[h],n.ARRAY_BUFFER)}function c(f){let d=[],h=f.index,g=f.attributes.position,x=0;if(h!==null){let M=h.array;x=h.version;for(let v=0,S=M.length;v<S;v+=3){let E=M[v+0],R=M[v+1],I=M[v+2];d.push(E,R,R,I,I,E)}}else if(g!==void 0){let M=g.array;x=g.version;for(let v=0,S=M.length/3-1;v<S;v+=3){let E=v+0,R=v+1,I=v+2;d.push(E,R,R,I,I,E)}}else return;let m=new(Au(d)?ws:bs)(d,1);m.version=x;let p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){let d=s.get(f);if(d){let h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function nS(n,t,e){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*o),e.update(h,i,1)}function c(d,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,d*o,g),e.update(h,i,g))}function u(d,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];e.update(m,i,1)}function f(d,h,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=h[M]*x[M];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function iS(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:Dt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function rS(n,t,e){let i=new WeakMap,r=new _e;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,d=i.get(a);if(d===void 0||d.count!==f){let b=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],v=0;h===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let S=a.attributes.position.count*v,E=1;S>t.maxTextureSize&&(E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let R=new Float32Array(S*E*4*f),I=new vs(R,S,E,f);I.type=un,I.needsUpdate=!0;let O=v*4;for(let T=0;T<f;T++){let D=m[T],V=p[T],G=M[T],C=S*E*4*T;for(let z=0;z<D.count;z++){let P=z*O;h===!0&&(r.fromBufferAttribute(D,z),R[C+P+0]=r.x,R[C+P+1]=r.y,R[C+P+2]=r.z,R[C+P+3]=0),g===!0&&(r.fromBufferAttribute(V,z),R[C+P+4]=r.x,R[C+P+5]=r.y,R[C+P+6]=r.z,R[C+P+7]=0),x===!0&&(r.fromBufferAttribute(G,z),R[C+P+8]=r.x,R[C+P+9]=r.y,R[C+P+10]=r.z,R[C+P+11]=G.itemSize===4?r.w:1)}}d={count:f,texture:I,size:new Tt(S,E)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function sS(n,t,e,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var oS={[fu]:"LINEAR_TONE_MAPPING",[du]:"REINHARD_TONE_MAPPING",[pu]:"CINEON_TONE_MAPPING",[mu]:"ACES_FILMIC_TONE_MAPPING",[xu]:"AGX_TONE_MAPPING",[_u]:"NEUTRAL_TONE_MAPPING",[gu]:"CUSTOM_TONE_MAPPING"};function aS(n,t,e,i,r){let s=new tn(t,e,{type:n,depthBuffer:i,stencilBuffer:r}),o=new tn(t,e,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),a=new we;a.setAttribute("position",new ve([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ve([0,2,0,0,2,0],2));let l=new Pa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ue(a,l),u=new Vi(-1,1,1,-1,0,1),f=null,d=null,h=!1,g,x=null,m=[],p=!1;this.setSize=function(M,v){s.setSize(M,v),o.setSize(M,v);for(let S=0;S<m.length;S++){let E=m[S];E.setSize&&E.setSize(M,v)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;let v=s.width,S=s.height;for(let E=0;E<m.length;E++){let R=m[E];R.setSize&&R.setSize(v,S)}},this.begin=function(M,v){if(h||M.toneMapping===_n&&m.length===0)return!1;if(x=v,v!==null){let S=v.width,E=v.height;(s.width!==S||s.height!==E)&&this.setSize(S,E)}return p===!1&&M.setRenderTarget(s),g=M.toneMapping,M.toneMapping=_n,!0},this.hasRenderPass=function(){return p},this.end=function(M,v){M.toneMapping=g,h=!0;let S=s,E=o;for(let R=0;R<m.length;R++){let I=m[R];if(I.enabled!==!1&&(I.render(M,E,S,v),I.needsSwap!==!1)){let O=S;S=E,E=O}}if(f!==M.outputColorSpace||d!==M.toneMapping){f=M.outputColorSpace,d=M.toneMapping,l.defines={},Yt.getTransfer(f)===jt&&(l.defines.SRGB_TRANSFER="");let R=oS[d];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(x),M.render(c,u),x=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var um=new $e,ku=new fi(1,1),hm=new vs,fm=new va,dm=new Es,qp=[],Yp=[],$p=new Float32Array(16),Zp=new Float32Array(9),Jp=new Float32Array(4);function Fr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,s=qp[r];if(s===void 0&&(s=new Float32Array(r),qp[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Te(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ql(n,t){let e=Yp[t];e===void 0&&(e=new Int32Array(t),Yp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function lS(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function cS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function uS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function hS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function fS(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Te(e,i))return;Jp.set(i),n.uniformMatrix2fv(this.addr,!1,Jp),Ee(e,i)}}function dS(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Te(e,i))return;Zp.set(i),n.uniformMatrix3fv(this.addr,!1,Zp),Ee(e,i)}}function pS(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Te(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Te(e,i))return;$p.set(i),n.uniformMatrix4fv(this.addr,!1,$p),Ee(e,i)}}function mS(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function gS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function xS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function _S(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function yS(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function vS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function SS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function MS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function bS(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ku.compareFunction=e.isReversedDepthBuffer()?kl:zl,s=ku):s=um,e.setTexture2D(t||s,r)}function wS(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||fm,r)}function TS(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||dm,r)}function ES(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||hm,r)}function AS(n){switch(n){case 5126:return lS;case 35664:return cS;case 35665:return uS;case 35666:return hS;case 35674:return fS;case 35675:return dS;case 35676:return pS;case 5124:case 35670:return mS;case 35667:case 35671:return gS;case 35668:case 35672:return xS;case 35669:case 35673:return _S;case 5125:return yS;case 36294:return vS;case 36295:return SS;case 36296:return MS;case 35678:case 36198:case 36298:case 36306:case 35682:return bS;case 35679:case 36299:case 36307:return wS;case 35680:case 36300:case 36308:case 36293:return TS;case 36289:case 36303:case 36311:case 36292:return ES}}function CS(n,t){n.uniform1fv(this.addr,t)}function RS(n,t){let e=Fr(t,this.size,2);n.uniform2fv(this.addr,e)}function IS(n,t){let e=Fr(t,this.size,3);n.uniform3fv(this.addr,e)}function PS(n,t){let e=Fr(t,this.size,4);n.uniform4fv(this.addr,e)}function LS(n,t){let e=Fr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function DS(n,t){let e=Fr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function NS(n,t){let e=Fr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function US(n,t){n.uniform1iv(this.addr,t)}function FS(n,t){n.uniform2iv(this.addr,t)}function BS(n,t){n.uniform3iv(this.addr,t)}function OS(n,t){n.uniform4iv(this.addr,t)}function zS(n,t){n.uniform1uiv(this.addr,t)}function kS(n,t){n.uniform2uiv(this.addr,t)}function VS(n,t){n.uniform3uiv(this.addr,t)}function GS(n,t){n.uniform4uiv(this.addr,t)}function HS(n,t,e){let i=this.cache,r=t.length,s=ql(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=ku:o=um;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function WS(n,t,e){let i=this.cache,r=t.length,s=ql(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||fm,s[o])}function XS(n,t,e){let i=this.cache,r=t.length,s=ql(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||dm,s[o])}function qS(n,t,e){let i=this.cache,r=t.length,s=ql(e,r);Te(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||hm,s[o])}function YS(n){switch(n){case 5126:return CS;case 35664:return RS;case 35665:return IS;case 35666:return PS;case 35674:return LS;case 35675:return DS;case 35676:return NS;case 5124:case 35670:return US;case 35667:case 35671:return FS;case 35668:case 35672:return BS;case 35669:case 35673:return OS;case 5125:return zS;case 36294:return kS;case 36295:return VS;case 36296:return GS;case 35678:case 36198:case 36298:case 36306:case 35682:return HS;case 35679:case 36299:case 36307:return WS;case 35680:case 36300:case 36308:case 36293:return XS;case 36289:case 36303:case 36311:case 36292:return qS}}var Vu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=AS(e.type)}},Gu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=YS(e.type)}},Hu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],i)}}},Ou=/(\w+)(\])?(\[|\.)?/g;function Kp(n,t){n.seq.push(t),n.map[t.id]=t}function $S(n,t,e){let i=n.name,r=i.length;for(Ou.lastIndex=0;;){let s=Ou.exec(i),o=Ou.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Kp(e,c===void 0?new Vu(a,n,t):new Gu(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Hu(a),Kp(e,f)),e=f}}}var Ur=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);$S(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){let s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&i.push(o)}return i}};function Qp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var ZS=37297,JS=0;function KS(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var jp=new Ot;function QS(n){Yt._getMatrix(jp,Yt.workingColorSpace,n);let t=`mat3( ${jp.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case xs:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function tm(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+KS(n.getShaderSource(t),a)}else return s}function jS(n,t){let e=QS(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var tM={[fu]:"Linear",[du]:"Reinhard",[pu]:"Cineon",[mu]:"ACESFilmic",[xu]:"AgX",[_u]:"Neutral",[gu]:"Custom"};function eM(n,t){let e=tM[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Gl=new k;function nM(){Yt.getLuminanceCoefficients(Gl);let n=Gl.x.toFixed(4),t=Gl.y.toFixed(4),e=Gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function rM(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function sM(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(t,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function eo(n){return n!==""}function em(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var oM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wu(n){return n.replace(oM,lM)}var aM=new Map;function lM(n,t){let e=kt[t];if(e===void 0){let i=aM.get(t);if(i!==void 0)e=kt[i],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Wu(e)}var cM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function im(n){return n.replace(cM,uM)}function uM(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rm(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var hM={[qs]:"SHADOWMAP_TYPE_PCF",[Ir]:"SHADOWMAP_TYPE_VSM"};function fM(n){return hM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var dM={[mi]:"ENVMAP_TYPE_CUBE",[Gi]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE_UV"};function pM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":dM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var mM={[Gi]:"ENVMAP_MODE_REFRACTION"};function gM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":mM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var xM={[hu]:"ENVMAP_BLENDING_MULTIPLY",[vp]:"ENVMAP_BLENDING_MIX",[Sp]:"ENVMAP_BLENDING_ADD"};function _M(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":xM[n.combine]||"ENVMAP_BLENDING_NONE"}function yM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function vM(n,t,e,i){let r=n.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=fM(e),c=pM(e),u=gM(e),f=_M(e),d=yM(e),h=iM(e),g=rM(s),x=r.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(eo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(eo).join(`
`),p.length>0&&(p+=`
`)):(m=[rm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),p=[rm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_n?"#define TONE_MAPPING":"",e.toneMapping!==_n?kt.tonemapping_pars_fragment:"",e.toneMapping!==_n?eM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,jS("linearToOutputTexel",e.outputColorSpace),nM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(eo).join(`
`)),o=Wu(o),o=em(o,e),o=nm(o,e),a=Wu(a),a=em(a,e),a=nm(a,e),o=im(o),a=im(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=M+m+o,S=M+p+a,E=Qp(r,r.VERTEX_SHADER,v),R=Qp(r,r.FRAGMENT_SHADER,S);r.attachShader(x,E),r.attachShader(x,R),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function I(D){if(n.debug.checkShaderErrors){let V=r.getProgramInfoLog(x)||"",G=r.getShaderInfoLog(E)||"",C=r.getShaderInfoLog(R)||"",z=V.trim(),P=G.trim(),N=C.trim(),W=!0,Q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,E,R);else{let J=tm(r,E,"vertex"),et=tm(r,R,"fragment");Dt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+J+`
`+et)}else z!==""?Rt("WebGLProgram: Program Info Log:",z):(P===""||N==="")&&(Q=!1);Q&&(D.diagnostics={runnable:W,programLog:z,vertexShader:{log:P,prefix:m},fragmentShader:{log:N,prefix:p}})}r.deleteShader(E),r.deleteShader(R),O=new Ur(r,x),b=sM(r,x)}let O;this.getUniforms=function(){return O===void 0&&I(this),O};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(x,ZS)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=JS++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=R,this}var SM=0,Xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new qu(t),e.set(t,i)),i}},qu=class{constructor(t){this.id=SM++,this.code=t,this.usedTimes=0}};function MM(n,t,e,i,r,s,o){let a=new Ms,l=new Xu,c=new Set,u=[],f=new Map,d=r.logarithmicDepthBuffer,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,T,D,V,G){let C=V.fog,z=G.geometry,P=b.isMeshStandardMaterial?V.environment:null,N=(b.isMeshStandardMaterial?e:t).get(b.envMap||P),W=N&&N.mapping===Ys?N.image.height:null,Q=g[b.type];b.precision!==null&&(h=r.getMaxPrecision(b.precision),h!==b.precision&&Rt("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let J=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,et=J!==void 0?J.length:0,gt=0;z.morphAttributes.position!==void 0&&(gt=1),z.morphAttributes.normal!==void 0&&(gt=2),z.morphAttributes.color!==void 0&&(gt=3);let Et,Ut,zt,$;if(Q){let te=Dn[Q];Et=te.vertexShader,Ut=te.fragmentShader}else Et=b.vertexShader,Ut=b.fragmentShader,l.update(b),zt=l.getVertexShaderID(b),$=l.getFragmentShaderID(b);let K=n.getRenderTarget(),ct=n.state.buffers.depth.getReversed(),Pt=G.isInstancedMesh===!0,xt=G.isBatchedMesh===!0,qt=!!b.map,de=!!b.matcap,Ht=!!N,Zt=!!b.aoMap,Kt=!!b.lightMap,Bt=!!b.bumpMap,pe=!!b.normalMap,L=!!b.displacementMap,ue=!!b.emissiveMap,$t=!!b.metalnessMap,Qt=!!b.roughnessMap,yt=b.anisotropy>0,A=b.clearcoat>0,_=b.dispersion>0,F=b.iridescence>0,Z=b.sheen>0,j=b.transmission>0,Y=yt&&!!b.anisotropyMap,St=A&&!!b.clearcoatMap,ot=A&&!!b.clearcoatNormalMap,Mt=A&&!!b.clearcoatRoughnessMap,Nt=F&&!!b.iridescenceMap,it=F&&!!b.iridescenceThicknessMap,lt=Z&&!!b.sheenColorMap,vt=Z&&!!b.sheenRoughnessMap,bt=!!b.specularMap,at=!!b.specularColorMap,Vt=!!b.specularIntensityMap,U=j&&!!b.transmissionMap,dt=j&&!!b.thicknessMap,rt=!!b.gradientMap,pt=!!b.alphaMap,nt=b.alphaTest>0,tt=!!b.alphaHash,st=!!b.extensions,Ft=_n;b.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ft=n.toneMapping);let se={shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:Et,fragmentShader:Ut,defines:b.defines,customVertexShaderID:zt,customFragmentShaderID:$,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:xt,batchingColor:xt&&G._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&G.instanceColor!==null,instancingMorph:Pt&&G.morphTexture!==null,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Bi,alphaToCoverage:!!b.alphaToCoverage,map:qt,matcap:de,envMap:Ht,envMapMode:Ht&&N.mapping,envMapCubeUVHeight:W,aoMap:Zt,lightMap:Kt,bumpMap:Bt,normalMap:pe,displacementMap:L,emissiveMap:ue,normalMapObjectSpace:pe&&b.normalMapType===Tp,normalMapTangentSpace:pe&&b.normalMapType===wp,metalnessMap:$t,roughnessMap:Qt,anisotropy:yt,anisotropyMap:Y,clearcoat:A,clearcoatMap:St,clearcoatNormalMap:ot,clearcoatRoughnessMap:Mt,dispersion:_,iridescence:F,iridescenceMap:Nt,iridescenceThicknessMap:it,sheen:Z,sheenColorMap:lt,sheenRoughnessMap:vt,specularMap:bt,specularColorMap:at,specularIntensityMap:Vt,transmission:j,transmissionMap:U,thicknessMap:dt,gradientMap:rt,opaque:b.transparent===!1&&b.blending===Ui&&b.alphaToCoverage===!1,alphaMap:pt,alphaTest:nt,alphaHash:tt,combine:b.combine,mapUv:qt&&x(b.map.channel),aoMapUv:Zt&&x(b.aoMap.channel),lightMapUv:Kt&&x(b.lightMap.channel),bumpMapUv:Bt&&x(b.bumpMap.channel),normalMapUv:pe&&x(b.normalMap.channel),displacementMapUv:L&&x(b.displacementMap.channel),emissiveMapUv:ue&&x(b.emissiveMap.channel),metalnessMapUv:$t&&x(b.metalnessMap.channel),roughnessMapUv:Qt&&x(b.roughnessMap.channel),anisotropyMapUv:Y&&x(b.anisotropyMap.channel),clearcoatMapUv:St&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ot&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:it&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:vt&&x(b.sheenRoughnessMap.channel),specularMapUv:bt&&x(b.specularMap.channel),specularColorMapUv:at&&x(b.specularColorMap.channel),specularIntensityMapUv:Vt&&x(b.specularIntensityMap.channel),transmissionMapUv:U&&x(b.transmissionMap.channel),thicknessMapUv:dt&&x(b.thicknessMap.channel),alphaMapUv:pt&&x(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(pe||yt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!z.attributes.uv&&(qt||pt),fog:!!C,useFog:b.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ct,skinning:G.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:gt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ft,decodeVideoTexture:qt&&b.map.isVideoTexture===!0&&Yt.getTransfer(b.map.colorSpace)===jt,decodeVideoTextureEmissive:ue&&b.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(b.emissiveMap.colorSpace)===jt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ve,flipSided:b.side===ke,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:st&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&b.extensions.multiDraw===!0||xt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return se.vertexUv1s=c.has(1),se.vertexUv2s=c.has(2),se.vertexUv3s=c.has(3),c.clear(),se}function p(b){let T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(let D in b.defines)T.push(D),T.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(M(T,b),v(T,b),T.push(n.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function M(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function v(b,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){let T=g[b.type],D;if(T){let V=Dn[T];D=Up.clone(V.uniforms)}else D=b.uniforms;return D}function E(b,T){let D=f.get(T);return D!==void 0?++D.usedTimes:(D=new vM(n,T,b,s),u.push(D),f.set(T,D)),D}function R(b){if(--b.usedTimes===0){let T=u.indexOf(b);u[T]=u[u.length-1],u.pop(),f.delete(b.cacheKey),b.destroy()}}function I(b){l.remove(b)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:E,releaseProgram:R,releaseShaderCache:I,programs:u,dispose:O}}function bM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function wM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function sm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function om(){let n=[],t=0,e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(f,d,h,g,x,m){let p=n[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},n[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),t++,p}function a(f,d,h,g,x,m){let p=o(f,d,h,g,x,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):e.push(p)}function l(f,d,h,g,x,m){let p=o(f,d,h,g,x,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):e.unshift(p)}function c(f,d){e.length>1&&e.sort(f||wM),i.length>1&&i.sort(d||sm),r.length>1&&r.sort(d||sm)}function u(){for(let f=t,d=n.length;f<d;f++){let h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function TM(){let n=new WeakMap;function t(i,r){let s=n.get(i),o;return s===void 0?(o=new om,n.set(i,[o])):r>=s.length?(o=new om,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function EM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new It};break;case"SpotLight":e={position:new k,direction:new k,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function AM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var CM=0;function RM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function IM(n){let t=new EM,e=AM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let r=new k,s=new re,o=new re;function a(c){let u=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,M=0,v=0,S=0,E=0,R=0,I=0;c.sort(RM);for(let b=0,T=c.length;b<T;b++){let D=c[b],V=D.color,G=D.intensity,C=D.distance,z=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Hi?z=D.shadow.map.texture:z=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=V.r*G,f+=V.g*G,d+=V.b*G;else if(D.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(D.sh.coefficients[P],G);I++}else if(D.isDirectionalLight){let P=t.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let N=D.shadow,W=e.get(D);W.shadowIntensity=N.intensity,W.shadowBias=N.bias,W.shadowNormalBias=N.normalBias,W.shadowRadius=N.radius,W.shadowMapSize=N.mapSize,i.directionalShadow[h]=W,i.directionalShadowMap[h]=z,i.directionalShadowMatrix[h]=D.shadow.matrix,M++}i.directional[h]=P,h++}else if(D.isSpotLight){let P=t.get(D);P.position.setFromMatrixPosition(D.matrixWorld),P.color.copy(V).multiplyScalar(G),P.distance=C,P.coneCos=Math.cos(D.angle),P.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),P.decay=D.decay,i.spot[x]=P;let N=D.shadow;if(D.map&&(i.spotLightMap[E]=D.map,E++,N.updateMatrices(D),D.castShadow&&R++),i.spotLightMatrix[x]=N.matrix,D.castShadow){let W=e.get(D);W.shadowIntensity=N.intensity,W.shadowBias=N.bias,W.shadowNormalBias=N.normalBias,W.shadowRadius=N.radius,W.shadowMapSize=N.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=z,S++}x++}else if(D.isRectAreaLight){let P=t.get(D);P.color.copy(V).multiplyScalar(G),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=P,m++}else if(D.isPointLight){let P=t.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity),P.distance=D.distance,P.decay=D.decay,D.castShadow){let N=D.shadow,W=e.get(D);W.shadowIntensity=N.intensity,W.shadowBias=N.bias,W.shadowNormalBias=N.normalBias,W.shadowRadius=N.radius,W.shadowMapSize=N.mapSize,W.shadowCameraNear=N.camera.near,W.shadowCameraFar=N.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=D.shadow.matrix,v++}i.point[g]=P,g++}else if(D.isHemisphereLight){let P=t.get(D);P.skyColor.copy(D.color).multiplyScalar(G),P.groundColor.copy(D.groundColor).multiplyScalar(G),i.hemi[p]=P,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ht.LTC_FLOAT_1,i.rectAreaLTC2=ht.LTC_FLOAT_2):(i.rectAreaLTC1=ht.LTC_HALF_1,i.rectAreaLTC2=ht.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;let O=i.hash;(O.directionalLength!==h||O.pointLength!==g||O.spotLength!==x||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==M||O.numPointShadows!==v||O.numSpotShadows!==S||O.numSpotMaps!==E||O.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+E-R,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=I,O.directionalLength=h,O.pointLength=g,O.spotLength=x,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=M,O.numPointShadows=v,O.numSpotShadows=S,O.numSpotMaps=E,O.numLightProbes=I,i.version=CM++)}function l(c,u){let f=0,d=0,h=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let v=c[p];if(v.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(v.isSpotLight){let S=i.spot[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(v.isRectAreaLight){let S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let S=i.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function am(n){let t=new IM(n),e=[],i=[];function r(u){c.camera=u,e.length=0,i.length=0}function s(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function PM(n){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new am(n),t.set(r,[a])):s>=o.length?(a=new am(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var LM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,NM=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],UM=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],lm=new re,to=new k,zu=new k;function FM(n,t,e){let i=new Ps,r=new Tt,s=new Tt,o=new _e,a=new La,l=new Da,c={},u=e.maxTextureSize,f={[Xn]:ke,[ke]:Xn,[Ve]:Ve},d=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:LM,fragmentShader:DM}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let g=new we;g.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ue(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qs;let p=this.type;this.render=function(R,I,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;R.type===ep&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=qs);let b=n.getRenderTarget(),T=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),V=n.state;V.setBlending(In),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let G=p!==this.type;G&&I.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(z=>z.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,z=R.length;C<z;C++){let P=R[C],N=P.shadow;if(N===void 0){Rt("WebGLShadowMap:",P,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let W=N.getFrameExtents();if(r.multiply(W),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/W.x),r.x=s.x*W.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/W.y),r.y=s.y*W.y,N.mapSize.y=s.y)),N.map===null||G===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Ir){if(P.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new tn(r.x,r.y,{format:Hi,type:Pn,minFilter:Le,magFilter:Le,generateMipmaps:!1}),N.map.texture.name=P.name+".shadowMap",N.map.depthTexture=new fi(r.x,r.y,un),N.map.depthTexture.name=P.name+".shadowMapDepth",N.map.depthTexture.format=Tn,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Re,N.map.depthTexture.magFilter=Re}else{P.isPointLight?(N.map=new As(r.x),N.map.depthTexture=new wa(r.x,yn)):(N.map=new tn(r.x,r.y),N.map.depthTexture=new fi(r.x,r.y,yn)),N.map.depthTexture.name=P.name+".shadowMap",N.map.depthTexture.format=Tn;let J=n.state.buffers.depth.getReversed();this.type===qs?(N.map.depthTexture.compareFunction=J?kl:zl,N.map.depthTexture.minFilter=Le,N.map.depthTexture.magFilter=Le):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Re,N.map.depthTexture.magFilter=Re)}N.camera.updateProjectionMatrix()}let Q=N.map.isWebGLCubeRenderTarget?6:1;for(let J=0;J<Q;J++){if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,J),n.clear();else{J===0&&(n.setRenderTarget(N.map),n.clear());let et=N.getViewport(J);o.set(s.x*et.x,s.y*et.y,s.x*et.z,s.y*et.w),V.viewport(o)}if(P.isPointLight){let et=N.camera,gt=N.matrix,Et=P.distance||et.far;Et!==et.far&&(et.far=Et,et.updateProjectionMatrix()),to.setFromMatrixPosition(P.matrixWorld),et.position.copy(to),zu.copy(et.position),zu.add(NM[J]),et.up.copy(UM[J]),et.lookAt(zu),et.updateMatrixWorld(),gt.makeTranslation(-to.x,-to.y,-to.z),lm.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),N._frustum.setFromProjectionMatrix(lm,et.coordinateSystem,et.reversedDepth)}else N.updateMatrices(P);i=N.getFrustum(),S(I,O,N.camera,P,this.type)}N.isPointLightShadow!==!0&&this.type===Ir&&M(N,O),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,T,D)};function M(R,I){let O=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new tn(r.x,r.y,{format:Hi,type:Pn})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(I,null,O,d,x,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(I,null,O,h,x,null)}function v(R,I,O,b){let T=null,D=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)T=D;else if(T=O.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let V=T.uuid,G=I.uuid,C=c[V];C===void 0&&(C={},c[V]=C);let z=C[G];z===void 0&&(z=T.clone(),C[G]=z,I.addEventListener("dispose",E)),T=z}if(T.visible=I.visible,T.wireframe=I.wireframe,b===Ir?T.side=I.shadowSide!==null?I.shadowSide:I.side:T.side=I.shadowSide!==null?I.shadowSide:f[I.side],T.alphaMap=I.alphaMap,T.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,T.map=I.map,T.clipShadows=I.clipShadows,T.clippingPlanes=I.clippingPlanes,T.clipIntersection=I.clipIntersection,T.displacementMap=I.displacementMap,T.displacementScale=I.displacementScale,T.displacementBias=I.displacementBias,T.wireframeLinewidth=I.wireframeLinewidth,T.linewidth=I.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let V=n.properties.get(T);V.light=O}return T}function S(R,I,O,b,T){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&T===Ir)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);let G=t.update(R),C=R.material;if(Array.isArray(C)){let z=G.groups;for(let P=0,N=z.length;P<N;P++){let W=z[P],Q=C[W.materialIndex];if(Q&&Q.visible){let J=v(R,Q,b,T);R.onBeforeShadow(n,R,I,O,G,J,W),n.renderBufferDirect(O,null,G,J,R,W),R.onAfterShadow(n,R,I,O,G,J,W)}}}else if(C.visible){let z=v(R,C,b,T);R.onBeforeShadow(n,R,I,O,G,z,null),n.renderBufferDirect(O,null,G,z,R,null),R.onAfterShadow(n,R,I,O,G,z,null)}}let V=R.children;for(let G=0,C=V.length;G<C;G++)S(V[G],I,O,b,T)}function E(R){R.target.removeEventListener("dispose",E);for(let O in c){let b=c[O],T=R.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}var BM={[Wa]:Xa,[qa]:Za,[Ya]:Ja,[Fi]:$a,[Xa]:Wa,[Za]:qa,[Ja]:Ya,[$a]:Fi};function OM(n,t){function e(){let U=!1,dt=new _e,rt=null,pt=new _e(0,0,0,0);return{setMask:function(nt){rt!==nt&&!U&&(n.colorMask(nt,nt,nt,nt),rt=nt)},setLocked:function(nt){U=nt},setClear:function(nt,tt,st,Ft,se){se===!0&&(nt*=Ft,tt*=Ft,st*=Ft),dt.set(nt,tt,st,Ft),pt.equals(dt)===!1&&(n.clearColor(nt,tt,st,Ft),pt.copy(dt))},reset:function(){U=!1,rt=null,pt.set(-1,0,0,0)}}}function i(){let U=!1,dt=!1,rt=null,pt=null,nt=null;return{setReversed:function(tt){if(dt!==tt){let st=t.get("EXT_clip_control");tt?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),dt=tt;let Ft=nt;nt=null,this.setClear(Ft)}},getReversed:function(){return dt},setTest:function(tt){tt?K(n.DEPTH_TEST):ct(n.DEPTH_TEST)},setMask:function(tt){rt!==tt&&!U&&(n.depthMask(tt),rt=tt)},setFunc:function(tt){if(dt&&(tt=BM[tt]),pt!==tt){switch(tt){case Wa:n.depthFunc(n.NEVER);break;case Xa:n.depthFunc(n.ALWAYS);break;case qa:n.depthFunc(n.LESS);break;case Fi:n.depthFunc(n.LEQUAL);break;case Ya:n.depthFunc(n.EQUAL);break;case $a:n.depthFunc(n.GEQUAL);break;case Za:n.depthFunc(n.GREATER);break;case Ja:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pt=tt}},setLocked:function(tt){U=tt},setClear:function(tt){nt!==tt&&(dt&&(tt=1-tt),n.clearDepth(tt),nt=tt)},reset:function(){U=!1,rt=null,pt=null,nt=null,dt=!1}}}function r(){let U=!1,dt=null,rt=null,pt=null,nt=null,tt=null,st=null,Ft=null,se=null;return{setTest:function(te){U||(te?K(n.STENCIL_TEST):ct(n.STENCIL_TEST))},setMask:function(te){dt!==te&&!U&&(n.stencilMask(te),dt=te)},setFunc:function(te,vn,Nn){(rt!==te||pt!==vn||nt!==Nn)&&(n.stencilFunc(te,vn,Nn),rt=te,pt=vn,nt=Nn)},setOp:function(te,vn,Nn){(tt!==te||st!==vn||Ft!==Nn)&&(n.stencilOp(te,vn,Nn),tt=te,st=vn,Ft=Nn)},setLocked:function(te){U=te},setClear:function(te){se!==te&&(n.clearStencil(te),se=te)},reset:function(){U=!1,dt=null,rt=null,pt=null,nt=null,tt=null,st=null,Ft=null,se=null}}}let s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},f={},d=new WeakMap,h=[],g=null,x=!1,m=null,p=null,M=null,v=null,S=null,E=null,R=null,I=new It(0,0,0),O=0,b=!1,T=null,D=null,V=null,G=null,C=null,z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,N=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(W)[1]),P=N>=1):W.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),P=N>=2);let Q=null,J={},et=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),Et=new _e().fromArray(et),Ut=new _e().fromArray(gt);function zt(U,dt,rt,pt){let nt=new Uint8Array(4),tt=n.createTexture();n.bindTexture(U,tt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<rt;st++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,pt,0,n.RGBA,n.UNSIGNED_BYTE,nt):n.texImage2D(dt+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,nt);return tt}let $={};$[n.TEXTURE_2D]=zt(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=zt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=zt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=zt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(n.DEPTH_TEST),o.setFunc(Fi),Bt(!1),pe(au),K(n.CULL_FACE),Zt(In);function K(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function ct(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Pt(U,dt){return f[U]!==dt?(n.bindFramebuffer(U,dt),f[U]=dt,U===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=dt),U===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function xt(U,dt){let rt=h,pt=!1;if(U){rt=d.get(dt),rt===void 0&&(rt=[],d.set(dt,rt));let nt=U.textures;if(rt.length!==nt.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,st=nt.length;tt<st;tt++)rt[tt]=n.COLOR_ATTACHMENT0+tt;rt.length=nt.length,pt=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,pt=!0);pt&&n.drawBuffers(rt)}function qt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}let de={[ui]:n.FUNC_ADD,[ip]:n.FUNC_SUBTRACT,[rp]:n.FUNC_REVERSE_SUBTRACT};de[sp]=n.MIN,de[op]=n.MAX;let Ht={[ap]:n.ZERO,[lp]:n.ONE,[cp]:n.SRC_COLOR,[fa]:n.SRC_ALPHA,[mp]:n.SRC_ALPHA_SATURATE,[dp]:n.DST_COLOR,[hp]:n.DST_ALPHA,[up]:n.ONE_MINUS_SRC_COLOR,[da]:n.ONE_MINUS_SRC_ALPHA,[pp]:n.ONE_MINUS_DST_COLOR,[fp]:n.ONE_MINUS_DST_ALPHA,[gp]:n.CONSTANT_COLOR,[xp]:n.ONE_MINUS_CONSTANT_COLOR,[_p]:n.CONSTANT_ALPHA,[yp]:n.ONE_MINUS_CONSTANT_ALPHA};function Zt(U,dt,rt,pt,nt,tt,st,Ft,se,te){if(U===In){x===!0&&(ct(n.BLEND),x=!1);return}if(x===!1&&(K(n.BLEND),x=!0),U!==np){if(U!==m||te!==b){if((p!==ui||S!==ui)&&(n.blendEquation(n.FUNC_ADD),p=ui,S=ui),te)switch(U){case Ui:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lu:n.blendFunc(n.ONE,n.ONE);break;case cu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Dt("WebGLState: Invalid blending: ",U);break}else switch(U){case Ui:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case cu:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uu:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",U);break}M=null,v=null,E=null,R=null,I.set(0,0,0),O=0,m=U,b=te}return}nt=nt||dt,tt=tt||rt,st=st||pt,(dt!==p||nt!==S)&&(n.blendEquationSeparate(de[dt],de[nt]),p=dt,S=nt),(rt!==M||pt!==v||tt!==E||st!==R)&&(n.blendFuncSeparate(Ht[rt],Ht[pt],Ht[tt],Ht[st]),M=rt,v=pt,E=tt,R=st),(Ft.equals(I)===!1||se!==O)&&(n.blendColor(Ft.r,Ft.g,Ft.b,se),I.copy(Ft),O=se),m=U,b=!1}function Kt(U,dt){U.side===Ve?ct(n.CULL_FACE):K(n.CULL_FACE);let rt=U.side===ke;dt&&(rt=!rt),Bt(rt),U.blending===Ui&&U.transparent===!1?Zt(In):Zt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let pt=U.stencilWrite;a.setTest(pt),pt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ue(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(U){T!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),T=U)}function pe(U){U!==jd?(K(n.CULL_FACE),U!==D&&(U===au?n.cullFace(n.BACK):U===tp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ct(n.CULL_FACE),D=U}function L(U){U!==V&&(P&&n.lineWidth(U),V=U)}function ue(U,dt,rt){U?(K(n.POLYGON_OFFSET_FILL),(G!==dt||C!==rt)&&(n.polygonOffset(dt,rt),G=dt,C=rt)):ct(n.POLYGON_OFFSET_FILL)}function $t(U){U?K(n.SCISSOR_TEST):ct(n.SCISSOR_TEST)}function Qt(U){U===void 0&&(U=n.TEXTURE0+z-1),Q!==U&&(n.activeTexture(U),Q=U)}function yt(U,dt,rt){rt===void 0&&(Q===null?rt=n.TEXTURE0+z-1:rt=Q);let pt=J[rt];pt===void 0&&(pt={type:void 0,texture:void 0},J[rt]=pt),(pt.type!==U||pt.texture!==dt)&&(Q!==rt&&(n.activeTexture(rt),Q=rt),n.bindTexture(U,dt||$[U]),pt.type=U,pt.texture=dt)}function A(){let U=J[Q];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(U){Dt("WebGLState:",U)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(U){Dt("WebGLState:",U)}}function Z(){try{n.texSubImage2D(...arguments)}catch(U){Dt("WebGLState:",U)}}function j(){try{n.texSubImage3D(...arguments)}catch(U){Dt("WebGLState:",U)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(U){Dt("WebGLState:",U)}}function St(){try{n.compressedTexSubImage3D(...arguments)}catch(U){Dt("WebGLState:",U)}}function ot(){try{n.texStorage2D(...arguments)}catch(U){Dt("WebGLState:",U)}}function Mt(){try{n.texStorage3D(...arguments)}catch(U){Dt("WebGLState:",U)}}function Nt(){try{n.texImage2D(...arguments)}catch(U){Dt("WebGLState:",U)}}function it(){try{n.texImage3D(...arguments)}catch(U){Dt("WebGLState:",U)}}function lt(U){Et.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Et.copy(U))}function vt(U){Ut.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Ut.copy(U))}function bt(U,dt){let rt=c.get(dt);rt===void 0&&(rt=new WeakMap,c.set(dt,rt));let pt=rt.get(U);pt===void 0&&(pt=n.getUniformBlockIndex(dt,U.name),rt.set(U,pt))}function at(U,dt){let pt=c.get(dt).get(U);l.get(dt)!==pt&&(n.uniformBlockBinding(dt,pt,U.__bindingPointIndex),l.set(dt,pt))}function Vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Q=null,J={},f={},d=new WeakMap,h=[],g=null,x=!1,m=null,p=null,M=null,v=null,S=null,E=null,R=null,I=new It(0,0,0),O=0,b=!1,T=null,D=null,V=null,G=null,C=null,Et.set(0,0,n.canvas.width,n.canvas.height),Ut.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:ct,bindFramebuffer:Pt,drawBuffers:xt,useProgram:qt,setBlending:Zt,setMaterial:Kt,setFlipSided:Bt,setCullFace:pe,setLineWidth:L,setPolygonOffset:ue,setScissorTest:$t,activeTexture:Qt,bindTexture:yt,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:Nt,texImage3D:it,updateUBOMapping:bt,uniformBlockBinding:at,texStorage2D:ot,texStorage3D:Mt,texSubImage2D:Z,texSubImage3D:j,compressedTexSubImage2D:Y,compressedTexSubImage3D:St,scissor:lt,viewport:vt,reset:Vt}}function zM(n,t,e,i,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,u=new WeakMap,f,d=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,_){return h?new OffscreenCanvas(A,_):ys("canvas")}function x(A,_,F){let Z=1,j=yt(A);if((j.width>F||j.height>F)&&(Z=F/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Y=Math.floor(Z*j.width),St=Math.floor(Z*j.height);f===void 0&&(f=g(Y,St));let ot=_?g(Y,St):f;return ot.width=Y,ot.height=St,ot.getContext("2d").drawImage(A,0,0,Y,St),Rt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+St+")."),ot}else return"data"in A&&Rt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(A,_,F,Z,j=!1){if(A!==null){if(n[A]!==void 0)return n[A];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=_;if(_===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),_===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),_===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),_===n.RGBA){let St=j?xs:Yt.getTransfer(Z);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=St===jt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function S(A,_){let F;return A?_===null||_===yn||_===Lr?F=n.DEPTH24_STENCIL8:_===un?F=n.DEPTH32F_STENCIL8:_===Pr&&(F=n.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===yn||_===Lr?F=n.DEPTH_COMPONENT24:_===un?F=n.DEPTH_COMPONENT32F:_===Pr&&(F=n.DEPTH_COMPONENT16),F}function E(A,_){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Re&&A.minFilter!==Le?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){let _=A.target;_.removeEventListener("dispose",R),O(_),_.isVideoTexture&&u.delete(_)}function I(A){let _=A.target;_.removeEventListener("dispose",I),T(_)}function O(A){let _=i.get(A);if(_.__webglInit===void 0)return;let F=A.source,Z=d.get(F);if(Z){let j=Z[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&b(A),Object.keys(Z).length===0&&d.delete(F)}i.remove(A)}function b(A){let _=i.get(A);n.deleteTexture(_.__webglTexture);let F=A.source,Z=d.get(F);delete Z[_.__cacheKey],o.memory.textures--}function T(A){let _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let j=0;j<_.__webglFramebuffer[Z].length;j++)n.deleteFramebuffer(_.__webglFramebuffer[Z][j]);else n.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[Z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let F=A.textures;for(let Z=0,j=F.length;Z<j;Z++){let Y=i.get(F[Z]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(F[Z])}i.remove(A)}let D=0;function V(){D=0}function G(){let A=D;return A>=r.maxTextures&&Rt("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),D+=1,A}function C(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function z(A,_){let F=i.get(A);if(A.isVideoTexture&&$t(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){let Z=A.image;if(Z===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,A,_);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function P(A,_){let F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){$(F,A,_);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function N(A,_){let F=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){$(F,A,_);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function W(A,_){let F=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){K(F,A,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}let Q={[pa]:n.REPEAT,[wn]:n.CLAMP_TO_EDGE,[ma]:n.MIRRORED_REPEAT},J={[Re]:n.NEAREST,[Mp]:n.NEAREST_MIPMAP_NEAREST,[$s]:n.NEAREST_MIPMAP_LINEAR,[Le]:n.LINEAR,[ja]:n.LINEAR_MIPMAP_NEAREST,[gi]:n.LINEAR_MIPMAP_LINEAR},et={[Ep]:n.NEVER,[Pp]:n.ALWAYS,[Ap]:n.LESS,[zl]:n.LEQUAL,[Cp]:n.EQUAL,[kl]:n.GEQUAL,[Rp]:n.GREATER,[Ip]:n.NOTEQUAL};function gt(A,_){if(_.type===un&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Le||_.magFilter===ja||_.magFilter===$s||_.magFilter===gi||_.minFilter===Le||_.minFilter===ja||_.minFilter===$s||_.minFilter===gi)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,Q[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Q[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Q[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,J[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,J[_.minFilter]),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,et[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Re||_.minFilter!==$s&&_.minFilter!==gi||_.type===un&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Et(A,_){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));let Z=_.source,j=d.get(Z);j===void 0&&(j={},d.set(Z,j));let Y=C(_);if(Y!==A.__cacheKey){j[Y]===void 0&&(j[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[Y].usedTimes++;let St=j[A.__cacheKey];St!==void 0&&(j[A.__cacheKey].usedTimes--,St.usedTimes===0&&b(_)),A.__cacheKey=Y,A.__webglTexture=j[Y].texture}return F}function Ut(A,_,F){return Math.floor(Math.floor(A/F)/_)}function zt(A,_,F,Z){let Y=A.updateRanges;if(Y.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,F,Z,_.data);else{Y.sort((it,lt)=>it.start-lt.start);let St=0;for(let it=1;it<Y.length;it++){let lt=Y[St],vt=Y[it],bt=lt.start+lt.count,at=Ut(vt.start,_.width,4),Vt=Ut(lt.start,_.width,4);vt.start<=bt+1&&at===Vt&&Ut(vt.start+vt.count-1,_.width,4)===at?lt.count=Math.max(lt.count,vt.start+vt.count-lt.start):(++St,Y[St]=vt)}Y.length=St+1;let ot=n.getParameter(n.UNPACK_ROW_LENGTH),Mt=n.getParameter(n.UNPACK_SKIP_PIXELS),Nt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let it=0,lt=Y.length;it<lt;it++){let vt=Y[it],bt=Math.floor(vt.start/4),at=Math.ceil(vt.count/4),Vt=bt%_.width,U=Math.floor(bt/_.width),dt=at,rt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Vt),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),e.texSubImage2D(n.TEXTURE_2D,0,Vt,U,dt,rt,F,Z,_.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ot),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Mt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Nt)}}function $(A,_,F){let Z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=n.TEXTURE_3D);let j=Et(A,_),Y=_.source;e.bindTexture(Z,A.__webglTexture,n.TEXTURE0+F);let St=i.get(Y);if(Y.version!==St.__version||j===!0){e.activeTexture(n.TEXTURE0+F);let ot=Yt.getPrimaries(Yt.workingColorSpace),Mt=_.colorSpace===Zn?null:Yt.getPrimaries(_.colorSpace),Nt=_.colorSpace===Zn||ot===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let it=x(_.image,!1,r.maxTextureSize);it=Qt(_,it);let lt=s.convert(_.format,_.colorSpace),vt=s.convert(_.type),bt=v(_.internalFormat,lt,vt,_.colorSpace,_.isVideoTexture);gt(Z,_);let at,Vt=_.mipmaps,U=_.isVideoTexture!==!0,dt=St.__version===void 0||j===!0,rt=Y.dataReady,pt=E(_,it);if(_.isDepthTexture)bt=S(_.format===xi,_.type),dt&&(U?e.texStorage2D(n.TEXTURE_2D,1,bt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,bt,it.width,it.height,0,lt,vt,null));else if(_.isDataTexture)if(Vt.length>0){U&&dt&&e.texStorage2D(n.TEXTURE_2D,pt,bt,Vt[0].width,Vt[0].height);for(let nt=0,tt=Vt.length;nt<tt;nt++)at=Vt[nt],U?rt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,at.width,at.height,lt,vt,at.data):e.texImage2D(n.TEXTURE_2D,nt,bt,at.width,at.height,0,lt,vt,at.data);_.generateMipmaps=!1}else U?(dt&&e.texStorage2D(n.TEXTURE_2D,pt,bt,it.width,it.height),rt&&zt(_,it,lt,vt)):e.texImage2D(n.TEXTURE_2D,0,bt,it.width,it.height,0,lt,vt,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,bt,Vt[0].width,Vt[0].height,it.depth);for(let nt=0,tt=Vt.length;nt<tt;nt++)if(at=Vt[nt],_.format!==hn)if(lt!==null)if(U){if(rt)if(_.layerUpdates.size>0){let st=Du(at.width,at.height,_.format,_.type);for(let Ft of _.layerUpdates){let se=at.data.subarray(Ft*st/at.data.BYTES_PER_ELEMENT,(Ft+1)*st/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,Ft,at.width,at.height,1,lt,se)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,at.width,at.height,it.depth,lt,at.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,bt,at.width,at.height,it.depth,0,at.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,at.width,at.height,it.depth,lt,vt,at.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,bt,at.width,at.height,it.depth,0,lt,vt,at.data)}else{U&&dt&&e.texStorage2D(n.TEXTURE_2D,pt,bt,Vt[0].width,Vt[0].height);for(let nt=0,tt=Vt.length;nt<tt;nt++)at=Vt[nt],_.format!==hn?lt!==null?U?rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,at.width,at.height,lt,at.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,bt,at.width,at.height,0,at.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?rt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,at.width,at.height,lt,vt,at.data):e.texImage2D(n.TEXTURE_2D,nt,bt,at.width,at.height,0,lt,vt,at.data)}else if(_.isDataArrayTexture)if(U){if(dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,bt,it.width,it.height,it.depth),rt)if(_.layerUpdates.size>0){let nt=Du(it.width,it.height,_.format,_.type);for(let tt of _.layerUpdates){let st=it.data.subarray(tt*nt/it.data.BYTES_PER_ELEMENT,(tt+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,it.width,it.height,1,lt,vt,st)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,lt,vt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,bt,it.width,it.height,it.depth,0,lt,vt,it.data);else if(_.isData3DTexture)U?(dt&&e.texStorage3D(n.TEXTURE_3D,pt,bt,it.width,it.height,it.depth),rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,lt,vt,it.data)):e.texImage3D(n.TEXTURE_3D,0,bt,it.width,it.height,it.depth,0,lt,vt,it.data);else if(_.isFramebufferTexture){if(dt)if(U)e.texStorage2D(n.TEXTURE_2D,pt,bt,it.width,it.height);else{let nt=it.width,tt=it.height;for(let st=0;st<pt;st++)e.texImage2D(n.TEXTURE_2D,st,bt,nt,tt,0,lt,vt,null),nt>>=1,tt>>=1}}else if(Vt.length>0){if(U&&dt){let nt=yt(Vt[0]);e.texStorage2D(n.TEXTURE_2D,pt,bt,nt.width,nt.height)}for(let nt=0,tt=Vt.length;nt<tt;nt++)at=Vt[nt],U?rt&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,lt,vt,at):e.texImage2D(n.TEXTURE_2D,nt,bt,lt,vt,at);_.generateMipmaps=!1}else if(U){if(dt){let nt=yt(it);e.texStorage2D(n.TEXTURE_2D,pt,bt,nt.width,nt.height)}rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt,vt,it)}else e.texImage2D(n.TEXTURE_2D,0,bt,lt,vt,it);m(_)&&p(Z),St.__version=Y.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function K(A,_,F){if(_.image.length!==6)return;let Z=Et(A,_),j=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+F);let Y=i.get(j);if(j.version!==Y.__version||Z===!0){e.activeTexture(n.TEXTURE0+F);let St=Yt.getPrimaries(Yt.workingColorSpace),ot=_.colorSpace===Zn?null:Yt.getPrimaries(_.colorSpace),Mt=_.colorSpace===Zn||St===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Nt=_.isCompressedTexture||_.image[0].isCompressedTexture,it=_.image[0]&&_.image[0].isDataTexture,lt=[];for(let tt=0;tt<6;tt++)!Nt&&!it?lt[tt]=x(_.image[tt],!0,r.maxCubemapSize):lt[tt]=it?_.image[tt].image:_.image[tt],lt[tt]=Qt(_,lt[tt]);let vt=lt[0],bt=s.convert(_.format,_.colorSpace),at=s.convert(_.type),Vt=v(_.internalFormat,bt,at,_.colorSpace),U=_.isVideoTexture!==!0,dt=Y.__version===void 0||Z===!0,rt=j.dataReady,pt=E(_,vt);gt(n.TEXTURE_CUBE_MAP,_);let nt;if(Nt){U&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Vt,vt.width,vt.height);for(let tt=0;tt<6;tt++){nt=lt[tt].mipmaps;for(let st=0;st<nt.length;st++){let Ft=nt[st];_.format!==hn?bt!==null?U?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st,0,0,Ft.width,Ft.height,bt,Ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st,Vt,Ft.width,Ft.height,0,Ft.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st,0,0,Ft.width,Ft.height,bt,at,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st,Vt,Ft.width,Ft.height,0,bt,at,Ft.data)}}}else{if(nt=_.mipmaps,U&&dt){nt.length>0&&pt++;let tt=yt(lt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Vt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(it){U?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,lt[tt].width,lt[tt].height,bt,at,lt[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Vt,lt[tt].width,lt[tt].height,0,bt,at,lt[tt].data);for(let st=0;st<nt.length;st++){let se=nt[st].image[tt].image;U?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st+1,0,0,se.width,se.height,bt,at,se.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st+1,Vt,se.width,se.height,0,bt,at,se.data)}}else{U?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,bt,at,lt[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Vt,bt,at,lt[tt]);for(let st=0;st<nt.length;st++){let Ft=nt[st];U?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st+1,0,0,bt,at,Ft.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,st+1,Vt,bt,at,Ft.image[tt])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),Y.__version=j.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ct(A,_,F,Z,j,Y){let St=s.convert(F.format,F.colorSpace),ot=s.convert(F.type),Mt=v(F.internalFormat,St,ot,F.colorSpace),Nt=i.get(_),it=i.get(F);if(it.__renderTarget=_,!Nt.__hasExternalTextures){let lt=Math.max(1,_.width>>Y),vt=Math.max(1,_.height>>Y);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,Y,Mt,lt,vt,_.depth,0,St,ot,null):e.texImage2D(j,Y,Mt,lt,vt,0,St,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),ue(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,j,it.__webglTexture,0,L(_)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,j,it.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Pt(A,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer){let Z=_.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,Y=S(_.stencilBuffer,j),St=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ue(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(_),Y,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(_),Y,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Y,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,A)}else{let Z=_.textures;for(let j=0;j<Z.length;j++){let Y=Z[j],St=s.convert(Y.format,Y.colorSpace),ot=s.convert(Y.type),Mt=v(Y.internalFormat,St,ot,Y.colorSpace);ue(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(_),Mt,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(_),Mt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xt(A,_,F){let Z=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=i.get(_.depthTexture);if(j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z){if(j.__webglInit===void 0&&(j.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),j.__webglTexture===void 0){j.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),gt(n.TEXTURE_CUBE_MAP,_.depthTexture);let Nt=s.convert(_.depthTexture.format),it=s.convert(_.depthTexture.type),lt;_.depthTexture.format===Tn?lt=n.DEPTH_COMPONENT24:_.depthTexture.format===xi&&(lt=n.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,lt,_.width,_.height,0,Nt,it,null)}}else z(_.depthTexture,0);let Y=j.__webglTexture,St=L(_),ot=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Mt=_.depthTexture.format===xi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Tn)ue(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Mt,ot,Y,0,St):n.framebufferTexture2D(n.FRAMEBUFFER,Mt,ot,Y,0);else if(_.depthTexture.format===xi)ue(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Mt,ot,Y,0,St):n.framebufferTexture2D(n.FRAMEBUFFER,Mt,ot,Y,0);else throw new Error("Unknown depthTexture format")}function qt(A){let _=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){let j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=Z}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let Z=0;Z<6;Z++)xt(_.__webglFramebuffer[Z],A,Z);else{let Z=A.texture.mipmaps;Z&&Z.length>0?xt(_.__webglFramebuffer[0],A,0):xt(_.__webglFramebuffer,A,0)}else if(F){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=n.createRenderbuffer(),Pt(_.__webglDepthbuffer[Z],A,!1);else{let j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Y)}}else{let Z=A.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Pt(_.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,Y)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function de(A,_,F){let Z=i.get(A);_!==void 0&&ct(Z.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&qt(A)}function Ht(A){let _=A.texture,F=i.get(A),Z=i.get(_);A.addEventListener("dispose",I);let j=A.textures,Y=A.isWebGLCubeRenderTarget===!0,St=j.length>1;if(St||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=_.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let Mt=0;Mt<_.mipmaps.length;Mt++)F.__webglFramebuffer[ot][Mt]=n.createFramebuffer()}else F.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)F.__webglFramebuffer[ot]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(St)for(let ot=0,Mt=j.length;ot<Mt;ot++){let Nt=i.get(j[ot]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&ue(A)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){let Mt=j[ot];F.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);let Nt=s.convert(Mt.format,Mt.colorSpace),it=s.convert(Mt.type),lt=v(Mt.internalFormat,Nt,it,Mt.colorSpace,A.isXRRenderTarget===!0),vt=L(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,vt,lt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Pt(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),gt(n.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let Mt=0;Mt<_.mipmaps.length;Mt++)ct(F.__webglFramebuffer[ot][Mt],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Mt);else ct(F.__webglFramebuffer[ot],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(_)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ot=0,Mt=j.length;ot<Mt;ot++){let Nt=j[ot],it=i.get(Nt),lt=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,it.__webglTexture),gt(lt,Nt),ct(F.__webglFramebuffer,A,Nt,n.COLOR_ATTACHMENT0+ot,lt,0),m(Nt)&&p(lt)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),gt(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let Mt=0;Mt<_.mipmaps.length;Mt++)ct(F.__webglFramebuffer[Mt],A,_,n.COLOR_ATTACHMENT0,ot,Mt);else ct(F.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,ot,0);m(_)&&p(ot),e.unbindTexture()}A.depthBuffer&&qt(A)}function Zt(A){let _=A.textures;for(let F=0,Z=_.length;F<Z;F++){let j=_[F];if(m(j)){let Y=M(A),St=i.get(j).__webglTexture;e.bindTexture(Y,St),p(Y),e.unbindTexture()}}}let Kt=[],Bt=[];function pe(A){if(A.samples>0){if(ue(A)===!1){let _=A.textures,F=A.width,Z=A.height,j=n.COLOR_BUFFER_BIT,Y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=i.get(A),ot=_.length>1;if(ot)for(let Nt=0;Nt<_.length;Nt++)e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);let Mt=A.texture.mipmaps;Mt&&Mt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Nt=0;Nt<_.length;Nt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,St.__webglColorRenderbuffer[Nt]);let it=i.get(_[Nt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,F,Z,0,0,F,Z,j,n.NEAREST),l===!0&&(Kt.length=0,Bt.length=0,Kt.push(n.COLOR_ATTACHMENT0+Nt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Kt.push(Y),Bt.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Bt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Kt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let Nt=0;Nt<_.length;Nt++){e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,St.__webglColorRenderbuffer[Nt]);let it=i.get(_[Nt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,it,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function L(A){return Math.min(r.maxSamples,A.samples)}function ue(A){let _=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function $t(A){let _=o.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function Qt(A,_){let F=A.colorSpace,Z=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Bi&&F!==Zn&&(Yt.getTransfer(F)===jt?(Z!==hn||j!==on)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",F)),_}function yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=V,this.setTexture2D=z,this.setTexture2DArray=P,this.setTexture3D=N,this.setTextureCube=W,this.rebindTextures=de,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function kM(n,t){function e(i,r=Zn){let s,o=Yt.getTransfer(r);if(i===on)return n.UNSIGNED_BYTE;if(i===el)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===bu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===vu)return n.BYTE;if(i===Su)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===tl)return n.INT;if(i===yn)return n.UNSIGNED_INT;if(i===un)return n.FLOAT;if(i===Pn)return n.HALF_FLOAT;if(i===wu)return n.ALPHA;if(i===Tu)return n.RGB;if(i===hn)return n.RGBA;if(i===Tn)return n.DEPTH_COMPONENT;if(i===xi)return n.DEPTH_STENCIL;if(i===il)return n.RED;if(i===rl)return n.RED_INTEGER;if(i===Hi)return n.RG;if(i===sl)return n.RG_INTEGER;if(i===ol)return n.RGBA_INTEGER;if(i===Zs||i===Js||i===Ks||i===Qs)if(o===jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Js)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===al||i===ll||i===cl||i===ul)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===al)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ll)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ul)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hl||i===fl||i===dl||i===pl||i===ml||i===gl||i===xl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===hl||i===fl)return o===jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===dl)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===pl)return s.COMPRESSED_R11_EAC;if(i===ml)return s.COMPRESSED_SIGNED_R11_EAC;if(i===gl)return s.COMPRESSED_RG11_EAC;if(i===xl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_l||i===yl||i===vl||i===Sl||i===Ml||i===bl||i===wl||i===Tl||i===El||i===Al||i===Cl||i===Rl||i===Il||i===Pl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===_l)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yl)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vl)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sl)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ml)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bl)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wl)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tl)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===El)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Al)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cl)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rl)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Il)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pl)return o===jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ll||i===Dl||i===Nl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ll)return o===jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ul||i===Fl||i===Bl||i===Ol)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ul)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ol)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var VM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ns(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new nn({vertexShader:VM,fragmentShader:GM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ue(new Hs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$u=class extends qn{constructor(t,e){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null,x=typeof XRWebGLBinding<"u",m=new Yu,p={},M=e.getContextAttributes(),v=null,S=null,E=[],R=[],I=new Tt,O=null,b=new Ye;b.viewport=new _e;let T=new Ye;T.viewport=new _e;let D=[b,T],V=new Ha,G=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let K=E[$];return K===void 0&&(K=new wr,E[$]=K),K.getTargetRaySpace()},this.getControllerGrip=function($){let K=E[$];return K===void 0&&(K=new wr,E[$]=K),K.getGripSpace()},this.getHand=function($){let K=E[$];return K===void 0&&(K=new wr,E[$]=K),K.getHandSpace()};function z($){let K=R.indexOf($.inputSource);if(K===-1)return;let ct=E[K];ct!==void 0&&(ct.update($.inputSource,$.frame,c||o),ct.dispatchEvent({type:$.type,data:$.inputSource}))}function P(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",N);for(let $=0;$<E.length;$++){let K=R[$];K!==null&&(R[$]=null,E[$].disconnect(K))}G=null,C=null,m.reset();for(let $ in p)delete p[$];t.setRenderTarget(v),h=null,d=null,f=null,r=null,S=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(O),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(v=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",P),r.addEventListener("inputsourceschange",N),M.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,Pt=null,xt=null;M.depth&&(xt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=M.stencil?xi:Tn,Pt=M.stencil?Lr:yn);let qt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(qt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new tn(d.textureWidth,d.textureHeight,{format:hn,type:on,depthTexture:new fi(d.textureWidth,d.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ct={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,e,ct),r.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new tn(h.framebufferWidth,h.framebufferHeight,{format:hn,type:on,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),zt.setContext(r),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N($){for(let K=0;K<$.removed.length;K++){let ct=$.removed[K],Pt=R.indexOf(ct);Pt>=0&&(R[Pt]=null,E[Pt].disconnect(ct))}for(let K=0;K<$.added.length;K++){let ct=$.added[K],Pt=R.indexOf(ct);if(Pt===-1){for(let qt=0;qt<E.length;qt++)if(qt>=R.length){R.push(ct),Pt=qt;break}else if(R[qt]===null){R[qt]=ct,Pt=qt;break}if(Pt===-1)break}let xt=E[Pt];xt&&xt.connect(ct)}}let W=new k,Q=new k;function J($,K,ct){W.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(ct.matrixWorld);let Pt=W.distanceTo(Q),xt=K.projectionMatrix.elements,qt=ct.projectionMatrix.elements,de=xt[14]/(xt[10]-1),Ht=xt[14]/(xt[10]+1),Zt=(xt[9]+1)/xt[5],Kt=(xt[9]-1)/xt[5],Bt=(xt[8]-1)/xt[0],pe=(qt[8]+1)/qt[0],L=de*Bt,ue=de*pe,$t=Pt/(-Bt+pe),Qt=$t*-Bt;if(K.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Qt),$.translateZ($t),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),xt[10]===-1)$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let yt=de+$t,A=Ht+$t,_=L-Qt,F=ue+(Pt-Qt),Z=Zt*Ht/A*yt,j=Kt*Ht/A*yt;$.projectionMatrix.makePerspective(_,F,Z,j,yt,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function et($,K){K===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(K.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let K=$.near,ct=$.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ct=m.depthFar)),V.near=T.near=b.near=K,V.far=T.far=b.far=ct,(G!==V.near||C!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),G=V.near,C=V.far),V.layers.mask=$.layers.mask|6,b.layers.mask=V.layers.mask&3,T.layers.mask=V.layers.mask&5;let Pt=$.parent,xt=V.cameras;et(V,Pt);for(let qt=0;qt<xt.length;qt++)et(xt[qt],Pt);xt.length===2?J(V,b,T):V.projectionMatrix.copy(b.projectionMatrix),gt($,V,Pt)};function gt($,K,ct){ct===null?$.matrix.copy(K.matrixWorld):($.matrix.copy(ct.matrixWorld),$.matrix.invert(),$.matrix.multiply(K.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(K.projectionMatrix),$.projectionMatrixInverse.copy(K.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=xa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function($){return p[$]};let Et=null;function Ut($,K){if(u=K.getViewerPose(c||o),g=K,u!==null){let ct=u.views;h!==null&&(t.setRenderTargetFramebuffer(S,h.framebuffer),t.setRenderTarget(S));let Pt=!1;ct.length!==V.cameras.length&&(V.cameras.length=0,Pt=!0);for(let Ht=0;Ht<ct.length;Ht++){let Zt=ct[Ht],Kt=null;if(h!==null)Kt=h.getViewport(Zt);else{let pe=f.getViewSubImage(d,Zt);Kt=pe.viewport,Ht===0&&(t.setRenderTargetTextures(S,pe.colorTexture,pe.depthStencilTexture),t.setRenderTarget(S))}let Bt=D[Ht];Bt===void 0&&(Bt=new Ye,Bt.layers.enable(Ht),Bt.viewport=new _e,D[Ht]=Bt),Bt.matrix.fromArray(Zt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Zt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Ht===0&&(V.matrix.copy(Bt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Pt===!0&&V.cameras.push(Bt)}let xt=r.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let Ht=f.getDepthInformation(ct[0]);Ht&&Ht.isValid&&Ht.texture&&m.init(Ht,r.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),f=i.getBinding();for(let Ht=0;Ht<ct.length;Ht++){let Zt=ct[Ht].camera;if(Zt){let Kt=p[Zt];Kt||(Kt=new Ns,p[Zt]=Kt);let Bt=f.getCameraImage(Zt);Kt.sourceTexture=Bt}}}}for(let ct=0;ct<E.length;ct++){let Pt=R[ct],xt=E[ct];Pt!==null&&xt!==void 0&&xt.update(Pt,K,c||o)}Et&&Et($,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}let zt=new cm;zt.setAnimationLoop(Ut),this.setAnimationLoop=function($){Et=$},this.dispose=function(){}}},qi=new An,HM=new re;function WM(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ru(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ke&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ke&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),v=M.envMap,S=M.envMapRotation;v&&(m.envMap.value=v,qi.copy(S),qi.x*=-1,qi.y*=-1,qi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),m.envMapRotation.value.setFromMatrix4(HM.makeRotationFromEuler(qi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function XM(n,t,e,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){let S=v.program;i.uniformBlockBinding(M,S)}function c(M,v){let S=r[M.id];S===void 0&&(g(M),S=u(M),r[M.id]=S,M.addEventListener("dispose",m));let E=v.program;i.updateUBOMapping(M,E);let R=t.render.frame;s[M.id]!==R&&(d(M),s[M.id]=R)}function u(M){let v=f();M.__bindingPointIndex=v;let S=n.createBuffer(),E=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,E,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let v=r[M.id],S=M.uniforms,E=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,I=S.length;R<I;R++){let O=Array.isArray(S[R])?S[R]:[S[R]];for(let b=0,T=O.length;b<T;b++){let D=O[b];if(h(D,R,b,E)===!0){let V=D.__offset,G=Array.isArray(D.value)?D.value:[D.value],C=0;for(let z=0;z<G.length;z++){let P=G[z],N=x(P);typeof P=="number"||typeof P=="boolean"?(D.__data[0]=P,n.bufferSubData(n.UNIFORM_BUFFER,V+C,D.__data)):P.isMatrix3?(D.__data[0]=P.elements[0],D.__data[1]=P.elements[1],D.__data[2]=P.elements[2],D.__data[3]=0,D.__data[4]=P.elements[3],D.__data[5]=P.elements[4],D.__data[6]=P.elements[5],D.__data[7]=0,D.__data[8]=P.elements[6],D.__data[9]=P.elements[7],D.__data[10]=P.elements[8],D.__data[11]=0):(P.toArray(D.__data,C),C+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,v,S,E){let R=M.value,I=v+"_"+S;if(E[I]===void 0)return typeof R=="number"||typeof R=="boolean"?E[I]=R:E[I]=R.clone(),!0;{let O=E[I];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return E[I]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function g(M){let v=M.uniforms,S=0,E=16;for(let I=0,O=v.length;I<O;I++){let b=Array.isArray(v[I])?v[I]:[v[I]];for(let T=0,D=b.length;T<D;T++){let V=b[T],G=Array.isArray(V.value)?V.value:[V.value];for(let C=0,z=G.length;C<z;C++){let P=G[C],N=x(P),W=S%E,Q=W%N.boundary,J=W+Q;S+=Q,J!==0&&E-J<N.storage&&(S+=E-J),V.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=N.storage}}}let R=S%E;return R>0&&(S+=E-R),M.__size=S,M.__cache={},this}function x(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Rt("WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){let v=M.target;v.removeEventListener("dispose",m);let S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(let M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}var qM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ln=null;function YM(){return Ln===null&&(Ln=new Rs(qM,16,16,Hi,Pn),Ln.name="DFG_LUT",Ln.minFilter=Le,Ln.magFilter=Le,Ln.wrapS=wn,Ln.wrapT=wn,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}var Wl=class{constructor(t={}){let{canvas:e=Lp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=on}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let x=h,m=new Set([ol,sl,rl]),p=new Set([on,yn,Pr,Lr,el,nl]),M=new Uint32Array(4),v=new Int32Array(4),S=null,E=null,R=[],I=[],O=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,T=!1;this._outputColorSpace=je;let D=0,V=0,G=null,C=-1,z=null,P=new _e,N=new _e,W=null,Q=new It(0),J=0,et=e.width,gt=e.height,Et=1,Ut=null,zt=null,$=new _e(0,0,et,gt),K=new _e(0,0,et,gt),ct=!1,Pt=new Ps,xt=!1,qt=!1,de=new re,Ht=new k,Zt=new _e,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function pe(){return G===null?Et:1}let L=i;function ue(w,B){return e.getContext(w,B)}try{let w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"182"}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",se,!1),e.addEventListener("webglcontextcreationerror",te,!1),L===null){let B="webgl2";if(L=ue(B,w),L===null)throw ue(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Dt("WebGLRenderer: "+w.message),w}let $t,Qt,yt,A,_,F,Z,j,Y,St,ot,Mt,Nt,it,lt,vt,bt,at,Vt,U,dt,rt,pt,nt;function tt(){$t=new tS(L),$t.init(),rt=new kM(L,$t),Qt=new Xv(L,$t,t,rt),yt=new OM(L,$t),Qt.reversedDepthBuffer&&d&&yt.buffers.depth.setReversed(!0),A=new iS(L),_=new bM,F=new zM(L,$t,yt,_,Qt,rt,A),Z=new Yv(b),j=new jv(b),Y=new a_(L),pt=new Hv(L,Y),St=new eS(L,Y,A,pt),ot=new sS(L,St,Y,A),Vt=new rS(L,Qt,F),vt=new qv(_),Mt=new MM(b,Z,j,$t,Qt,pt,vt),Nt=new WM(b,_),it=new TM,lt=new PM($t),at=new Gv(b,Z,j,yt,ot,g,l),bt=new FM(b,ot,Qt),nt=new XM(L,A,Qt,yt),U=new Wv(L,$t,A),dt=new nS(L,$t,A),A.programs=Mt.programs,b.capabilities=Qt,b.extensions=$t,b.properties=_,b.renderLists=it,b.shadowMap=bt,b.state=yt,b.info=A}tt(),x!==on&&(O=new aS(x,e.width,e.height,r,s));let st=new $u(b,L);this.xr=st,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=$t.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=$t.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(w){w!==void 0&&(Et=w,this.setSize(et,gt,!1))},this.getSize=function(w){return w.set(et,gt)},this.setSize=function(w,B,q=!0){if(st.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}et=w,gt=B,e.width=Math.floor(w*Et),e.height=Math.floor(B*Et),q===!0&&(e.style.width=w+"px",e.style.height=B+"px"),O!==null&&O.setSize(e.width,e.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(et*Et,gt*Et).floor()},this.setDrawingBufferSize=function(w,B,q){et=w,gt=B,Et=q,e.width=Math.floor(w*q),e.height=Math.floor(B*q),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(x===on){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,B,q,X){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,B,q,X),yt.viewport(P.copy($).multiplyScalar(Et).round())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,B,q,X){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,B,q,X),yt.scissor(N.copy(K).multiplyScalar(Et).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(w){yt.setScissorTest(ct=w)},this.setOpaqueSort=function(w){Ut=w},this.setTransparentSort=function(w){zt=w},this.getClearColor=function(w){return w.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,q=!0){let X=0;if(w){let H=!1;if(G!==null){let ut=G.texture.format;H=m.has(ut)}if(H){let ut=G.texture.type,mt=p.has(ut),ft=at.getClearColor(),_t=at.getClearAlpha(),wt=ft.r,Lt=ft.g,At=ft.b;mt?(M[0]=wt,M[1]=Lt,M[2]=At,M[3]=_t,L.clearBufferuiv(L.COLOR,0,M)):(v[0]=wt,v[1]=Lt,v[2]=At,v[3]=_t,L.clearBufferiv(L.COLOR,0,v))}else X|=L.COLOR_BUFFER_BIT}B&&(X|=L.DEPTH_BUFFER_BIT),q&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",te,!1),at.dispose(),it.dispose(),lt.dispose(),_.dispose(),Z.dispose(),j.dispose(),ot.dispose(),pt.dispose(),nt.dispose(),Mt.dispose(),st.dispose(),st.removeEventListener("sessionstart",nh),st.removeEventListener("sessionend",ih),yi.stop()};function Ft(w){w.preventDefault(),Cu("WebGLRenderer: Context Lost."),T=!0}function se(){Cu("WebGLRenderer: Context Restored."),T=!1;let w=A.autoReset,B=bt.enabled,q=bt.autoUpdate,X=bt.needsUpdate,H=bt.type;tt(),A.autoReset=w,bt.enabled=B,bt.autoUpdate=q,bt.needsUpdate=X,bt.type=H}function te(w){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function vn(w){let B=w.target;B.removeEventListener("dispose",vn),Nn(B)}function Nn(w){Pm(w),_.remove(w)}function Pm(w){let B=_.get(w).programs;B!==void 0&&(B.forEach(function(q){Mt.releaseProgram(q)}),w.isShaderMaterial&&Mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,q,X,H,ut){B===null&&(B=Kt);let mt=H.isMesh&&H.matrixWorld.determinant()<0,ft=Dm(w,B,q,X,H);yt.setMaterial(X,mt);let _t=q.index,wt=1;if(X.wireframe===!0){if(_t=St.getWireframeAttribute(q),_t===void 0)return;wt=2}let Lt=q.drawRange,At=q.attributes.position,Gt=Lt.start*wt,ne=(Lt.start+Lt.count)*wt;ut!==null&&(Gt=Math.max(Gt,ut.start*wt),ne=Math.min(ne,(ut.start+ut.count)*wt)),_t!==null?(Gt=Math.max(Gt,0),ne=Math.min(ne,_t.count)):At!=null&&(Gt=Math.max(Gt,0),ne=Math.min(ne,At.count));let me=ne-Gt;if(me<0||me===1/0)return;pt.setup(H,X,ft,q,_t);let ge,ie=U;if(_t!==null&&(ge=Y.get(_t),ie=dt,ie.setIndex(ge)),H.isMesh)X.wireframe===!0?(yt.setLineWidth(X.wireframeLinewidth*pe()),ie.setMode(L.LINES)):ie.setMode(L.TRIANGLES);else if(H.isLine){let Ct=X.linewidth;Ct===void 0&&(Ct=1),yt.setLineWidth(Ct*pe()),H.isLineSegments?ie.setMode(L.LINES):H.isLineLoop?ie.setMode(L.LINE_LOOP):ie.setMode(L.LINE_STRIP)}else H.isPoints?ie.setMode(L.POINTS):H.isSprite&&ie.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Sr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ie.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))ie.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ct=H._multiDrawStarts,ee=H._multiDrawCounts,Jt=H._multiDrawCount,Ze=_t?Y.get(_t).bytesPerElement:1,Zi=_.get(X).currentProgram.getUniforms();for(let Je=0;Je<Jt;Je++)Zi.setValue(L,"_gl_DrawID",Je),ie.render(Ct[Je]/Ze,ee[Je])}else if(H.isInstancedMesh)ie.renderInstances(Gt,me,H.count);else if(q.isInstancedBufferGeometry){let Ct=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ee=Math.min(q.instanceCount,Ct);ie.renderInstances(Gt,me,ee)}else ie.render(Gt,me)};function eh(w,B,q){w.transparent===!0&&w.side===Ve&&w.forceSinglePass===!1?(w.side=ke,w.needsUpdate=!0,oo(w,B,q),w.side=Xn,w.needsUpdate=!0,oo(w,B,q),w.side=Ve):oo(w,B,q)}this.compile=function(w,B,q=null){q===null&&(q=w),E=lt.get(q),E.init(B),I.push(E),q.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),w!==q&&w.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights();let X=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ut=H.material;if(ut)if(Array.isArray(ut))for(let mt=0;mt<ut.length;mt++){let ft=ut[mt];eh(ft,q,H),X.add(ft)}else eh(ut,q,H),X.add(ut)}),E=I.pop(),X},this.compileAsync=function(w,B,q=null){let X=this.compile(w,B,q);return new Promise(H=>{function ut(){if(X.forEach(function(mt){_.get(mt).currentProgram.isReady()&&X.delete(mt)}),X.size===0){H(w);return}setTimeout(ut,10)}$t.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Zl=null;function Lm(w){Zl&&Zl(w)}function nh(){yi.stop()}function ih(){yi.start()}let yi=new cm;yi.setAnimationLoop(Lm),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(w){Zl=w,st.setAnimationLoop(w),w===null?yi.stop():yi.start()},st.addEventListener("sessionstart",nh),st.addEventListener("sessionend",ih),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;let q=st.enabled===!0&&st.isPresenting===!0,X=O!==null&&(G===null||q)&&O.begin(b,G);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(B),B=st.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,B,G),E=lt.get(w,I.length),E.init(B),I.push(E),de.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Pt.setFromProjectionMatrix(de,xn,B.reversedDepth),qt=this.localClippingEnabled,xt=vt.init(this.clippingPlanes,qt),S=it.get(w,R.length),S.init(),R.push(S),st.enabled===!0&&st.isPresenting===!0){let mt=b.xr.getDepthSensingMesh();mt!==null&&Jl(mt,B,-1/0,b.sortObjects)}Jl(w,B,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(Ut,zt),Bt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Bt&&at.addToRenderList(S,w),this.info.render.frame++,xt===!0&&vt.beginShadows();let H=E.state.shadowsArray;if(bt.render(H,w,B),xt===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&O.hasRenderPass())===!1){let mt=S.opaque,ft=S.transmissive;if(E.setupLights(),B.isArrayCamera){let _t=B.cameras;if(ft.length>0)for(let wt=0,Lt=_t.length;wt<Lt;wt++){let At=_t[wt];sh(mt,ft,w,At)}Bt&&at.render(w);for(let wt=0,Lt=_t.length;wt<Lt;wt++){let At=_t[wt];rh(S,w,At,At.viewport)}}else ft.length>0&&sh(mt,ft,w,B),Bt&&at.render(w),rh(S,w,B)}G!==null&&V===0&&(F.updateMultisampleRenderTarget(G),F.updateRenderTargetMipmap(G)),X&&O.end(b),w.isScene===!0&&w.onAfterRender(b,w,B),pt.resetDefaultState(),C=-1,z=null,I.pop(),I.length>0?(E=I[I.length-1],xt===!0&&vt.setGlobalState(b.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?S=R[R.length-1]:S=null};function Jl(w,B,q,X){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Pt.intersectsSprite(w)){X&&Zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(de);let mt=ot.update(w),ft=w.material;ft.visible&&S.push(w,mt,ft,q,Zt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Pt.intersectsObject(w))){let mt=ot.update(w),ft=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Zt.copy(w.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Zt.copy(mt.boundingSphere.center)),Zt.applyMatrix4(w.matrixWorld).applyMatrix4(de)),Array.isArray(ft)){let _t=mt.groups;for(let wt=0,Lt=_t.length;wt<Lt;wt++){let At=_t[wt],Gt=ft[At.materialIndex];Gt&&Gt.visible&&S.push(w,mt,Gt,q,Zt.z,At)}}else ft.visible&&S.push(w,mt,ft,q,Zt.z,null)}}let ut=w.children;for(let mt=0,ft=ut.length;mt<ft;mt++)Jl(ut[mt],B,q,X)}function rh(w,B,q,X){let{opaque:H,transmissive:ut,transparent:mt}=w;E.setupLightsView(q),xt===!0&&vt.setGlobalState(b.clippingPlanes,q),X&&yt.viewport(P.copy(X)),H.length>0&&so(H,B,q),ut.length>0&&so(ut,B,q),mt.length>0&&so(mt,B,q),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function sh(w,B,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){let Gt=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new tn(1,1,{generateMipmaps:!0,type:Gt?Pn:on,minFilter:gi,samples:Qt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let ut=E.state.transmissionRenderTarget[X.id],mt=X.viewport||P;ut.setSize(mt.z*b.transmissionResolutionScale,mt.w*b.transmissionResolutionScale);let ft=b.getRenderTarget(),_t=b.getActiveCubeFace(),wt=b.getActiveMipmapLevel();b.setRenderTarget(ut),b.getClearColor(Q),J=b.getClearAlpha(),J<1&&b.setClearColor(16777215,.5),b.clear(),Bt&&at.render(q);let Lt=b.toneMapping;b.toneMapping=_n;let At=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),xt===!0&&vt.setGlobalState(b.clippingPlanes,X),so(w,q,X),F.updateMultisampleRenderTarget(ut),F.updateRenderTargetMipmap(ut),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let ne=0,me=B.length;ne<me;ne++){let ge=B[ne],{object:ie,geometry:Ct,material:ee,group:Jt}=ge;if(ee.side===Ve&&ie.layers.test(X.layers)){let Ze=ee.side;ee.side=ke,ee.needsUpdate=!0,oh(ie,q,X,Ct,ee,Jt),ee.side=Ze,ee.needsUpdate=!0,Gt=!0}}Gt===!0&&(F.updateMultisampleRenderTarget(ut),F.updateRenderTargetMipmap(ut))}b.setRenderTarget(ft,_t,wt),b.setClearColor(Q,J),At!==void 0&&(X.viewport=At),b.toneMapping=Lt}function so(w,B,q){let X=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ut=w.length;H<ut;H++){let mt=w[H],{object:ft,geometry:_t,group:wt}=mt,Lt=mt.material;Lt.allowOverride===!0&&X!==null&&(Lt=X),ft.layers.test(q.layers)&&oh(ft,B,q,_t,Lt,wt)}}function oh(w,B,q,X,H,ut){w.onBeforeRender(b,B,q,X,H,ut),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(b,B,q,X,w,ut),H.transparent===!0&&H.side===Ve&&H.forceSinglePass===!1?(H.side=ke,H.needsUpdate=!0,b.renderBufferDirect(q,B,X,H,w,ut),H.side=Xn,H.needsUpdate=!0,b.renderBufferDirect(q,B,X,H,w,ut),H.side=Ve):b.renderBufferDirect(q,B,X,H,w,ut),w.onAfterRender(b,B,q,X,H,ut)}function oo(w,B,q){B.isScene!==!0&&(B=Kt);let X=_.get(w),H=E.state.lights,ut=E.state.shadowsArray,mt=H.state.version,ft=Mt.getParameters(w,H.state,ut,B,q),_t=Mt.getProgramCacheKey(ft),wt=X.programs;X.environment=w.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(w.isMeshStandardMaterial?j:Z).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,wt===void 0&&(w.addEventListener("dispose",vn),wt=new Map,X.programs=wt);let Lt=wt.get(_t);if(Lt!==void 0){if(X.currentProgram===Lt&&X.lightsStateVersion===mt)return lh(w,ft),Lt}else ft.uniforms=Mt.getUniforms(w),w.onBeforeCompile(ft,b),Lt=Mt.acquireProgram(ft,_t),wt.set(_t,Lt),X.uniforms=ft.uniforms;let At=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(At.clippingPlanes=vt.uniform),lh(w,ft),X.needsLights=Um(w),X.lightsStateVersion=mt,X.needsLights&&(At.ambientLightColor.value=H.state.ambient,At.lightProbe.value=H.state.probe,At.directionalLights.value=H.state.directional,At.directionalLightShadows.value=H.state.directionalShadow,At.spotLights.value=H.state.spot,At.spotLightShadows.value=H.state.spotShadow,At.rectAreaLights.value=H.state.rectArea,At.ltc_1.value=H.state.rectAreaLTC1,At.ltc_2.value=H.state.rectAreaLTC2,At.pointLights.value=H.state.point,At.pointLightShadows.value=H.state.pointShadow,At.hemisphereLights.value=H.state.hemi,At.directionalShadowMap.value=H.state.directionalShadowMap,At.directionalShadowMatrix.value=H.state.directionalShadowMatrix,At.spotShadowMap.value=H.state.spotShadowMap,At.spotLightMatrix.value=H.state.spotLightMatrix,At.spotLightMap.value=H.state.spotLightMap,At.pointShadowMap.value=H.state.pointShadowMap,At.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Lt,X.uniformsList=null,Lt}function ah(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=Ur.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function lh(w,B){let q=_.get(w);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Dm(w,B,q,X,H){B.isScene!==!0&&(B=Kt),F.resetTextureUnits();let ut=B.fog,mt=X.isMeshStandardMaterial?B.environment:null,ft=G===null?b.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Bi,_t=(X.isMeshStandardMaterial?j:Z).get(X.envMap||mt),wt=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Lt=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),At=!!q.morphAttributes.position,Gt=!!q.morphAttributes.normal,ne=!!q.morphAttributes.color,me=_n;X.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(me=b.toneMapping);let ge=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ie=ge!==void 0?ge.length:0,Ct=_.get(X),ee=E.state.lights;if(xt===!0&&(qt===!0||w!==z)){let Be=w===z&&X.id===C;vt.setState(X,w,Be)}let Jt=!1;X.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==ee.state.version||Ct.outputColorSpace!==ft||H.isBatchedMesh&&Ct.batching===!1||!H.isBatchedMesh&&Ct.batching===!0||H.isBatchedMesh&&Ct.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ct.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ct.instancing===!1||!H.isInstancedMesh&&Ct.instancing===!0||H.isSkinnedMesh&&Ct.skinning===!1||!H.isSkinnedMesh&&Ct.skinning===!0||H.isInstancedMesh&&Ct.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ct.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ct.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ct.instancingMorph===!1&&H.morphTexture!==null||Ct.envMap!==_t||X.fog===!0&&Ct.fog!==ut||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==vt.numPlanes||Ct.numIntersection!==vt.numIntersection)||Ct.vertexAlphas!==wt||Ct.vertexTangents!==Lt||Ct.morphTargets!==At||Ct.morphNormals!==Gt||Ct.morphColors!==ne||Ct.toneMapping!==me||Ct.morphTargetsCount!==ie)&&(Jt=!0):(Jt=!0,Ct.__version=X.version);let Ze=Ct.currentProgram;Jt===!0&&(Ze=oo(X,B,H));let Zi=!1,Je=!1,zr=!1,oe=Ze.getUniforms(),Ge=Ct.uniforms;if(yt.useProgram(Ze.program)&&(Zi=!0,Je=!0,zr=!0),X.id!==C&&(C=X.id,Je=!0),Zi||z!==w){yt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),oe.setValue(L,"projectionMatrix",w.projectionMatrix),oe.setValue(L,"viewMatrix",w.matrixWorldInverse);let He=oe.map.cameraPosition;He!==void 0&&He.setValue(L,Ht.setFromMatrixPosition(w.matrixWorld)),Qt.logarithmicDepthBuffer&&oe.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&oe.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),z!==w&&(z=w,Je=!0,zr=!0)}if(Ct.needsLights&&(ee.state.directionalShadowMap.length>0&&oe.setValue(L,"directionalShadowMap",ee.state.directionalShadowMap,F),ee.state.spotShadowMap.length>0&&oe.setValue(L,"spotShadowMap",ee.state.spotShadowMap,F),ee.state.pointShadowMap.length>0&&oe.setValue(L,"pointShadowMap",ee.state.pointShadowMap,F)),H.isSkinnedMesh){oe.setOptional(L,H,"bindMatrix"),oe.setOptional(L,H,"bindMatrixInverse");let Be=H.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),oe.setValue(L,"boneTexture",Be.boneTexture,F))}H.isBatchedMesh&&(oe.setOptional(L,H,"batchingTexture"),oe.setValue(L,"batchingTexture",H._matricesTexture,F),oe.setOptional(L,H,"batchingIdTexture"),oe.setValue(L,"batchingIdTexture",H._indirectTexture,F),oe.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&oe.setValue(L,"batchingColorTexture",H._colorsTexture,F));let an=q.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Vt.update(H,q,Ze),(Je||Ct.receiveShadow!==H.receiveShadow)&&(Ct.receiveShadow=H.receiveShadow,oe.setValue(L,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ge.envMap.value=_t,Ge.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(Ge.envMapIntensity.value=B.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=YM()),Je&&(oe.setValue(L,"toneMappingExposure",b.toneMappingExposure),Ct.needsLights&&Nm(Ge,zr),ut&&X.fog===!0&&Nt.refreshFogUniforms(Ge,ut),Nt.refreshMaterialUniforms(Ge,X,Et,gt,E.state.transmissionRenderTarget[w.id]),Ur.upload(L,ah(Ct),Ge,F)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ur.upload(L,ah(Ct),Ge,F),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&oe.setValue(L,"center",H.center),oe.setValue(L,"modelViewMatrix",H.modelViewMatrix),oe.setValue(L,"normalMatrix",H.normalMatrix),oe.setValue(L,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Be=X.uniformsGroups;for(let He=0,Kl=Be.length;He<Kl;He++){let vi=Be[He];nt.update(vi,Ze),nt.bind(vi,Ze)}}return Ze}function Nm(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Um(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(w,B,q){let X=_.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),_.get(w.texture).__webglTexture=B,_.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let q=_.get(w);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};let Fm=L.createFramebuffer();this.setRenderTarget=function(w,B=0,q=0){G=w,D=B,V=q;let X=null,H=!1,ut=!1;if(w){let ft=_.get(w);if(ft.__useDefaultFramebuffer!==void 0){yt.bindFramebuffer(L.FRAMEBUFFER,ft.__webglFramebuffer),P.copy(w.viewport),N.copy(w.scissor),W=w.scissorTest,yt.viewport(P),yt.scissor(N),yt.setScissorTest(W),C=-1;return}else if(ft.__webglFramebuffer===void 0)F.setupRenderTarget(w);else if(ft.__hasExternalTextures)F.rebindTextures(w,_.get(w.texture).__webglTexture,_.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Lt=w.depthTexture;if(ft.__boundDepthTexture!==Lt){if(Lt!==null&&_.has(Lt)&&(w.width!==Lt.image.width||w.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(w)}}let _t=w.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(ut=!0);let wt=_.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(wt[B])?X=wt[B][q]:X=wt[B],H=!0):w.samples>0&&F.useMultisampledRTT(w)===!1?X=_.get(w).__webglMultisampledFramebuffer:Array.isArray(wt)?X=wt[q]:X=wt,P.copy(w.viewport),N.copy(w.scissor),W=w.scissorTest}else P.copy($).multiplyScalar(Et).floor(),N.copy(K).multiplyScalar(Et).floor(),W=ct;if(q!==0&&(X=Fm),yt.bindFramebuffer(L.FRAMEBUFFER,X)&&yt.drawBuffers(w,X),yt.viewport(P),yt.scissor(N),yt.setScissorTest(W),H){let ft=_.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,ft.__webglTexture,q)}else if(ut){let ft=B;for(let _t=0;_t<w.textures.length;_t++){let wt=_.get(w.textures[_t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+_t,wt.__webglTexture,q,ft)}}else if(w!==null&&q!==0){let ft=_.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ft.__webglTexture,q)}C=-1},this.readRenderTargetPixels=function(w,B,q,X,H,ut,mt,ft=0){if(!(w&&w.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(_t=_t[mt]),_t){yt.bindFramebuffer(L.FRAMEBUFFER,_t);try{let wt=w.textures[ft],Lt=wt.format,At=wt.type;if(!Qt.textureFormatReadable(Lt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(At)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-X&&q>=0&&q<=w.height-H&&(w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ft),L.readPixels(B,q,X,H,rt.convert(Lt),rt.convert(At),ut))}finally{let wt=G!==null?_.get(G).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(w,B,q,X,H,ut,mt,ft=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=_.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(_t=_t[mt]),_t)if(B>=0&&B<=w.width-X&&q>=0&&q<=w.height-H){yt.bindFramebuffer(L.FRAMEBUFFER,_t);let wt=w.textures[ft],Lt=wt.format,At=wt.type;if(!Qt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Gt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Gt),L.bufferData(L.PIXEL_PACK_BUFFER,ut.byteLength,L.STREAM_READ),w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ft),L.readPixels(B,q,X,H,rt.convert(Lt),rt.convert(At),0);let ne=G!==null?_.get(G).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,ne);let me=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Dp(L,me,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Gt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ut),L.deleteBuffer(Gt),L.deleteSync(me),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,q=0){let X=Math.pow(2,-q),H=Math.floor(w.image.width*X),ut=Math.floor(w.image.height*X),mt=B!==null?B.x:0,ft=B!==null?B.y:0;F.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,mt,ft,H,ut),yt.unbindTexture()};let Bm=L.createFramebuffer(),Om=L.createFramebuffer();this.copyTextureToTexture=function(w,B,q=null,X=null,H=0,ut=null){ut===null&&(H!==0?(Sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=H,H=0):ut=0);let mt,ft,_t,wt,Lt,At,Gt,ne,me,ge=w.isCompressedTexture?w.mipmaps[ut]:w.image;if(q!==null)mt=q.max.x-q.min.x,ft=q.max.y-q.min.y,_t=q.isBox3?q.max.z-q.min.z:1,wt=q.min.x,Lt=q.min.y,At=q.isBox3?q.min.z:0;else{let an=Math.pow(2,-H);mt=Math.floor(ge.width*an),ft=Math.floor(ge.height*an),w.isDataArrayTexture?_t=ge.depth:w.isData3DTexture?_t=Math.floor(ge.depth*an):_t=1,wt=0,Lt=0,At=0}X!==null?(Gt=X.x,ne=X.y,me=X.z):(Gt=0,ne=0,me=0);let ie=rt.convert(B.format),Ct=rt.convert(B.type),ee;B.isData3DTexture?(F.setTexture3D(B,0),ee=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(F.setTexture2DArray(B,0),ee=L.TEXTURE_2D_ARRAY):(F.setTexture2D(B,0),ee=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);let Jt=L.getParameter(L.UNPACK_ROW_LENGTH),Ze=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Zi=L.getParameter(L.UNPACK_SKIP_PIXELS),Je=L.getParameter(L.UNPACK_SKIP_ROWS),zr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ge.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ge.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,wt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Lt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,At);let oe=w.isDataArrayTexture||w.isData3DTexture,Ge=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let an=_.get(w),Be=_.get(B),He=_.get(an.__renderTarget),Kl=_.get(Be.__renderTarget);yt.bindFramebuffer(L.READ_FRAMEBUFFER,He.__webglFramebuffer),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Kl.__webglFramebuffer);for(let vi=0;vi<_t;vi++)oe&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_.get(w).__webglTexture,H,At+vi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_.get(B).__webglTexture,ut,me+vi)),L.blitFramebuffer(wt,Lt,mt,ft,Gt,ne,mt,ft,L.DEPTH_BUFFER_BIT,L.NEAREST);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||_.has(w)){let an=_.get(w),Be=_.get(B);yt.bindFramebuffer(L.READ_FRAMEBUFFER,Bm),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Om);for(let He=0;He<_t;He++)oe?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,an.__webglTexture,H,At+He):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,an.__webglTexture,H),Ge?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Be.__webglTexture,ut,me+He):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Be.__webglTexture,ut),H!==0?L.blitFramebuffer(wt,Lt,mt,ft,Gt,ne,mt,ft,L.COLOR_BUFFER_BIT,L.NEAREST):Ge?L.copyTexSubImage3D(ee,ut,Gt,ne,me+He,wt,Lt,mt,ft):L.copyTexSubImage2D(ee,ut,Gt,ne,wt,Lt,mt,ft);yt.bindFramebuffer(L.READ_FRAMEBUFFER,null),yt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ge?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(ee,ut,Gt,ne,me,mt,ft,_t,ie,Ct,ge.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(ee,ut,Gt,ne,me,mt,ft,_t,ie,ge.data):L.texSubImage3D(ee,ut,Gt,ne,me,mt,ft,_t,ie,Ct,ge):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ut,Gt,ne,mt,ft,ie,Ct,ge.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ut,Gt,ne,ge.width,ge.height,ie,ge.data):L.texSubImage2D(L.TEXTURE_2D,ut,Gt,ne,mt,ft,ie,Ct,ge);L.pixelStorei(L.UNPACK_ROW_LENGTH,Jt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ze),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Zi),L.pixelStorei(L.UNPACK_SKIP_ROWS,Je),L.pixelStorei(L.UNPACK_SKIP_IMAGES,zr),ut===0&&B.generateMipmaps&&L.generateMipmap(ee),yt.unbindTexture()},this.initRenderTarget=function(w){_.get(w).__webglFramebuffer===void 0&&F.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?F.setTextureCube(w,0):w.isData3DTexture?F.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?F.setTexture2DArray(w,0):F.setTexture2D(w,0),yt.unbindTexture()},this.resetState=function(){D=0,V=0,G=null,yt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};function pm(){let n=y.container,t=n.clientWidth,e=n.clientHeight,i=document.createElement("canvas");if(!(i.getContext("webgl2")||i.getContext("webgl")))return n.innerHTML=`
            <div style="display:flex;align-items:center;justify-content:center;height:100%;
                        font-family:sans-serif;color:#666;text-align:center;padding:40px;">
                <div>
                    <h3>WebGL Not Available</h3>
                    <p>This visualization requires WebGL support. Please use a modern browser with WebGL enabled.</p>
                </div>
            </div>`,!1;let s=new Cs,o=y.config.canvas.backgroundColor;s.background=new It(o);let a=new Vi(0,t,0,e,.1,100);a.position.set(0,0,50),a.lookAt(0,0,0);let l=new Wl({antialias:!0,alpha:!1,preserveDrawingBuffer:!0});l.setSize(t,e),l.setPixelRatio(window.devicePixelRatio),l.sortObjects=!0,n.appendChild(l.domElement),l.domElement.style.display="block";let c=new Hn;return c.renderOrder=0,s.add(c),y.scene=s,y.camera=a,y.renderer=l,y.ellipseGroup=c,!0}function Br(){let n=y.transform,t=y.container,e=t.clientWidth,i=t.clientHeight,r=y.camera;r.left=-n.x/n.k,r.right=(e-n.x)/n.k,r.top=-n.y/n.k,r.bottom=(i-n.y)/n.k,r.updateProjectionMatrix()}function mm(){y.renderer&&y.renderer.render(y.scene,y.camera)}var Or=new re,Yl=new It;function Zu(){y.nodesFillMesh&&(y.scene.remove(y.nodesFillMesh),y.nodesFillMesh.geometry.dispose(),y.nodesFillMesh.material.dispose()),y.nodesBorderMesh&&(y.scene.remove(y.nodesBorderMesh),y.nodesBorderMesh.geometry.dispose(),y.nodesBorderMesh.material.dispose());let n=y.nodes.length;if(n===0)return;let t=new Er(1,32),e=new Cn({transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,side:Ve}),i=new Tr(t,e,n);i.instanceMatrix.setUsage(Jn),i.renderOrder=5,y.scene.add(i),y.nodesFillMesh=i;let r=new Er(1,32),s=new Cn({transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,side:Ve}),o=new Tr(r,s,n);o.instanceMatrix.setUsage(Jn),o.renderOrder=4,y.scene.add(o),y.nodesBorderMesh=o,Ju()}function Ju(){let{nodes:n,selectedNodes:t,config:e,nodesFillMesh:i,nodesBorderMesh:r}=y;if(!i||!r)return;let s=e.nodes.borderWidth;n.forEach((o,a)=>{let l=t.has(o),c=o.size||e.nodes.defaultSize,f=(l?c+e.nodes.selectedSizeIncrease:c)/2;Or.makeScale(f,f,1),Or.setPosition(o.x||0,o.y||0,0),i.setMatrixAt(a,Or);let d=o.group?Pe(o.group):o.color||e.nodes.defaultColor;Yl.set(d),i.setColorAt(a,Yl);let h=f+s;Or.makeScale(h,h,1),Or.setPosition(o.x||0,o.y||0,0),r.setMatrixAt(a,Or);let g=l?e.nodes.selectedBorderColor:e.nodes.borderColor;Yl.set(g),r.setColorAt(a,Yl)}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0)}function Ku(){y.normalEdgesMesh&&(y.scene.remove(y.normalEdgesMesh),y.normalEdgesMesh.geometry.dispose(),y.normalEdgesMesh.material.dispose()),y.highlightedEdgesMesh&&(y.scene.remove(y.highlightedEdgesMesh),y.highlightedEdgesMesh.geometry.dispose(),y.highlightedEdgesMesh.material.dispose()),y.arrowMesh&&(y.scene.remove(y.arrowMesh),y.arrowMesh.geometry.dispose(),y.arrowMesh.material.dispose(),y.arrowMesh=null);let{edges:n,config:t}=y;if(n.length===0)return;let e=new we,i=new Float32Array(n.length*6),r=new Float32Array(n.length*6);e.setAttribute("position",new fe(i,3)),e.setAttribute("color",new fe(r,3)),e.attributes.position.setUsage(Jn),e.attributes.color.setUsage(Jn);let s=new Rn({vertexColors:!0,transparent:!0,opacity:t.edges.defaultOpacity,depthTest:!1,depthWrite:!1}),o=new Oi(e,s);o.renderOrder=2,y.scene.add(o),y.normalEdgesMesh=o;let a=new we,l=new Float32Array(n.length*6),c=new Float32Array(n.length*6);a.setAttribute("position",new fe(l,3)),a.setAttribute("color",new fe(c,3)),a.attributes.position.setUsage(Jn),a.attributes.color.setUsage(Jn);let u=new Rn({vertexColors:!0,transparent:!0,opacity:t.edges.selectedOpacity,depthTest:!1,depthWrite:!1}),f=new Oi(a,u);f.renderOrder=3,y.scene.add(f),y.highlightedEdgesMesh=f}function gm(){let{edges:n,selectedNodes:t,config:e,normalEdgesMesh:i,highlightedEdgesMesh:r}=y;if(!i||!r)return;let s=i.geometry.attributes.position.array,o=i.geometry.attributes.color.array,a=r.geometry.attributes.position.array,l=r.geometry.attributes.color.array,c=0,u=0,f=new It(e.edges.defaultColor),d=new It(e.edges.selectedColor);n.forEach(h=>{let g=h.source.x||0,x=h.source.y||0,m=h.target.x||0,p=h.target.y||0;if(t.has(h.source)||t.has(h.target)){let v=u*6;a[v]=g,a[v+1]=x,a[v+2]=0,a[v+3]=m,a[v+4]=p,a[v+5]=0;let S=h.color?new It(h.color):y.colorEdgesByGroup&&h.source.group?new It(Pe(h.source.group)):d;l[v]=S.r,l[v+1]=S.g,l[v+2]=S.b,l[v+3]=S.r,l[v+4]=S.g,l[v+5]=S.b,u++}else{let v=c*6;s[v]=g,s[v+1]=x,s[v+2]=0,s[v+3]=m,s[v+4]=p,s[v+5]=0;let S=h.color?new It(h.color):y.colorEdgesByGroup&&h.source.group?new It(Pe(h.source.group)):f;o[v]=S.r,o[v+1]=S.g,o[v+2]=S.b,o[v+3]=S.r,o[v+4]=S.g,o[v+5]=S.b,c++}}),i.geometry.setDrawRange(0,c*2),i.geometry.attributes.position.needsUpdate=!0,i.geometry.attributes.color.needsUpdate=!0,r.geometry.setDrawRange(0,u*2),r.geometry.attributes.position.needsUpdate=!0,r.geometry.attributes.color.needsUpdate=!0}function xm(){if(!y.showArrows){y.arrowMesh&&(y.arrowMesh.visible=!1);return}let{edges:n,config:t}=y;if(n.length===0)return;y.arrowMesh&&(y.scene.remove(y.arrowMesh),y.arrowMesh.geometry.dispose(),y.arrowMesh.material.dispose());let e=t.edges.arrowSize,i=t.edges.arrowWidth,r=new Float32Array(n.length*4*3),s=new Float32Array(n.length*4*3),o=new It(t.edges.defaultColor);n.forEach((u,f)=>{let d=(u.target.x||0)-(u.source.x||0),h=(u.target.y||0)-(u.source.y||0),g=Math.atan2(h,d),m=(u.target.size||t.nodes.defaultSize)/2+t.nodes.borderWidth,p=(u.target.x||0)-m*Math.cos(g),M=(u.target.y||0)-m*Math.sin(g),v=f*12;r[v]=p,r[v+1]=M,r[v+2]=0,r[v+3]=p-e*Math.cos(g-Math.PI/6),r[v+4]=M-e*Math.sin(g-Math.PI/6),r[v+5]=0,r[v+6]=p,r[v+7]=M,r[v+8]=0,r[v+9]=p-e*Math.cos(g+Math.PI/6),r[v+10]=M-e*Math.sin(g+Math.PI/6),r[v+11]=0;let S=u.color?new It(u.color):o;for(let E=0;E<4;E++)s[v+E*3]=S.r,s[v+E*3+1]=S.g,s[v+E*3+2]=S.b});let a=new we;a.setAttribute("position",new fe(r,3)),a.setAttribute("color",new fe(s,3));let l=new Rn({vertexColors:!0,transparent:!0,opacity:t.edges.defaultOpacity,depthTest:!1,depthWrite:!1}),c=new Oi(a,l);c.renderOrder=3,y.scene.add(c),y.arrowMesh=c}function _m(){let{nodes:n,config:t,ellipseGroup:e}=y;if(!e)return;for(;e.children.length>0;){let r=e.children[0];e.remove(r),r.geometry&&r.geometry.dispose(),r.material&&r.material.dispose()}if(!t.groups.showEllipses)return;[...new Set(n.map(r=>r.group).filter(Boolean))].forEach(r=>{let s=n.filter(o=>o.group===r);if(s.length>1){let o={x:s.reduce((V,G)=>V+(G.x||0),0)/s.length,y:s.reduce((V,G)=>V+(G.y||0),0)/s.length},a=0,l=0,c=0;s.forEach(V=>{let G=(V.x||0)-o.x,C=(V.y||0)-o.y;a+=G*G,l+=G*C,c+=C*C});let u=[[a/s.length,l/s.length],[l/s.length,c/s.length]],[f,d,h]=bd(u),g=Math.atan2(h[1],h[0]),x=Math.sqrt(Math.max(f,0))*2+5,m=Math.sqrt(Math.max(d,0))*2+5,p=Pe(r),M=new It(p),v=64,S=new Cr;S.moveTo(x,0);for(let V=1;V<=v;V++){let G=V/v*Math.PI*2;S.lineTo(x*Math.cos(G),m*Math.sin(G))}let E=new Ws(S),R=new Cn({color:M,transparent:!0,opacity:t.groups.fillOpacity,depthTest:!1,depthWrite:!1,side:Ve}),I=new Ue(E,R);I.position.set(o.x,o.y,0),I.rotation.z=g,I.renderOrder=0,e.add(I);let O=new Float32Array((v+1)*3);for(let V=0;V<=v;V++){let G=V/v*Math.PI*2;O[V*3]=x*Math.cos(G),O[V*3+1]=m*Math.sin(G),O[V*3+2]=0}let b=new we;b.setAttribute("position",new fe(O,3));let T=new Rn({color:M,linewidth:t.groups.strokeWidth,depthTest:!1,depthWrite:!1}),D=new Ds(b,T);D.position.set(o.x,o.y,0),D.rotation.z=g,D.renderOrder=1,e.add(D)}})}function ym(){let n=document.createElement("div");n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.width="100%",n.style.height="100%",n.style.pointerEvents="none",n.style.overflow="hidden",n.style.zIndex="1",y.container.appendChild(n),y.labelContainer=n}function Qu(){if(!y.labelContainer)return;y.labelContainer.innerHTML="",y.labelDivs=[];let{nodes:n,config:t}=y,e=ce[y.currentTheme]||ce.dark;n.forEach(i=>{let r=document.createElement("div");r.textContent=i.id,r.style.position="absolute",r.style.top="0",r.style.left="0",r.style.fontSize=(i.labelFontSize||t.labels.fontSize)+"px",r.style.fontFamily=t.labels.fontFamily,r.style.color=t.labels.color,r.style.whiteSpace="nowrap",r.style.pointerEvents="none",r.style.userSelect="none",r.style.willChange="transform",r.style.textShadow=y.currentTheme==="dark"?"0 1px 3px rgba(0,0,0,0.8)":"0 1px 2px rgba(255,255,255,0.8)",y.labelContainer.appendChild(r),y.labelDivs.push(r)})}function vm(){let{nodes:n,selectedNodes:t,config:e,labelDivs:i,labelContainer:r}=y;if(!r)return;if(!e.labels.visible){r.style.display="none";return}r.style.display="";let s=ce[y.currentTheme]||ce.dark;i.forEach((o,a)=>{if(a>=n.length){o.style.display="none";return}let l=n[a],c=Ri(l.x||0,l.y||0),u=l.size||e.nodes.defaultSize,f=t.has(l),d=(u/2+4)*y.transform.k;o.style.transform=`translate(${c.x-d}px, ${c.y}px) translate(-100%, -50%)`,o.style.color=f?e.labels.selectedColor:e.labels.color,o.style.fontWeight=f?"600":"normal",o.style.display=""})}var Kn={zoom:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>',pan:'<svg width="16" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>',select:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>',settings:'<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>',chevronDown:'<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>',chevronRight:'<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>',sun:'<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>',moon:'<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>'};function $i(){return ce[y.currentTheme]||ce.light}function Xt(n,t={},e={}){let i=document.createElement(n);return Object.assign(i,t),Object.assign(i.style,e),i}function Se({id:n,title:t,htmlContent:e,active:i=!1}){let r=$i(),s=Xt("button",{id:n,title:t,innerHTML:e},{padding:"6px 14px",fontSize:"13px",fontWeight:"500",cursor:"pointer",border:i?r.activeButtonBorder:r.buttonBorder,borderRadius:"6px",background:i?r.activeButtonBg:r.buttonBg,color:i?r.activeButtonText:r.buttonText,transition:"all 0.15s ease",outline:"none",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"});return s.addEventListener("mouseenter",()=>{s.dataset.active||(s.style.background=r.buttonHoverBg),s.style.transform="translateY(-1px)"}),s.addEventListener("mouseleave",()=>{let o=s.dataset.active==="true";s.style.background=o?r.activeButtonBg:r.buttonBg,s.style.transform=""}),s}function ae(n,t){let e=$i();n.dataset.active=t,n.style.background=t?e.activeButtonBg:e.buttonBg,n.style.border=t?e.activeButtonBorder:e.buttonBorder,n.style.color=t?e.activeButtonText:e.buttonText}function Sm({id:n,placeholder:t}){let e=$i();return Xt("input",{id:n,type:"text",placeholder:t},{padding:"6px 10px",fontSize:"13px",borderRadius:"6px",border:e.inputBorder,background:e.inputBg,color:e.inputText,outline:"none",width:"140px",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"})}function io(n,t=!0){let e=$i(),i=Xt("div",{innerHTML:`<span style="font-size:12px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">${n}</span><span class="toggle-icon">${t?Kn.chevronDown:Kn.chevronRight}</span>`},{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",padding:"10px 0",borderBottom:`1px solid ${e.panelHeaderBorder}`,color:e.panelText,fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"}),r=Xt("div",{},{padding:"10px 0",display:t?"flex":"none",flexWrap:"wrap",gap:"6px"});return i.addEventListener("click",()=>{let s=r.style.display==="none";r.style.display=s?"flex":"none",i.querySelector(".toggle-icon").innerHTML=s?Kn.chevronDown:Kn.chevronRight}),[i,r]}function Mm(n){let t=y.container,e=y.config,i=$i(),r=Xt("div",{id:"mainBar"},{position:"absolute",top:"12px",right:"12px",display:"flex",gap:"6px",zIndex:"1000",backgroundColor:i.panelBg,borderRadius:"10px",padding:"8px",boxShadow:i.panelShadow,border:i.panelBorder,backdropFilter:"blur(12px)",alignItems:"center"}),s=Se({id:"zoomButton",title:"Zoom & pan mode",htmlContent:`${Kn.zoom} Zoom`,active:!0}),o=Se({id:"selectButton",title:"Selection mode",htmlContent:`${Kn.select} Select`,active:!1});ae(s,!0),ae(o,!1);let a=Sm({id:"searchBox",placeholder:"Search Node..."});a.style.width="160px";let l=Xt("button",{id:"themeToggle",title:"Toggle dark/light theme",innerHTML:y.currentTheme==="dark"?Kn.sun:Kn.moon},{display:"flex",alignItems:"center",justifyContent:"center",padding:"6px",border:i.buttonBorder,borderRadius:"6px",background:i.buttonBg,color:i.iconColor,cursor:"pointer",transition:"all 0.15s ease",outline:"none"}),c=Se({id:"sidebarToggle",title:"Display More Tools",htmlContent:Kn.settings});r.append(s,o,a,l,c);let u=Xt("div",{id:"sceneSidebar"},{position:"absolute",top:"60px",right:"-350px",width:"300px",transition:"right 0.3s ease",backgroundColor:i.panelBg,borderRadius:"10px",padding:"16px",boxShadow:i.panelShadow,border:i.panelBorder,backdropFilter:"blur(12px)",color:i.panelText,fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",zIndex:"999"}),[f,d]=io("Display",!0),h=Se({id:"arrowToggle",title:"Toggle arrows",htmlContent:"Arrows",active:e.edges.showArrows}),g=Se({id:"labelsToggle",title:"Toggle labels",htmlContent:"Labels",active:e.labels.visible}),x=Se({id:"ellipsesToggle",title:"Toggle ellipses",htmlContent:"Ellipses",active:e.groups.showEllipses}),m=Se({id:"legendToggle",title:"Toggle legend",htmlContent:"Legend",active:e.ui.showLegend}),p=Se({id:"statsToggle",title:"Toggle stats",htmlContent:"Stats",active:e.ui.showStatistics});ae(h,e.edges.showArrows),ae(g,e.labels.visible),ae(x,e.groups.showEllipses),ae(m,e.ui.showLegend),ae(p,e.ui.showStatistics);let M=Se({id:"edgeColorToggle",title:"Color edges by group",htmlContent:"Edge Colors",active:!1});ae(M,!1),d.append(h,g,x,m,p,M);let[v,S]=io("Appearance",!0);S.style.flexDirection="column",S.style.gap="12px";let E=Xt("div",{},{display:"flex",alignItems:"center",gap:"8px",width:"100%"}),R=Xt("span",{textContent:"Node Size"},{fontSize:"12px",whiteSpace:"nowrap",minWidth:"78px"}),I=Xt("input",{id:"nodeSizeSlider",type:"range",min:"2",max:"40",step:"1",value:String(Math.round(e.nodes.defaultSize))},{flex:"1",cursor:"pointer",accentColor:i.activeButtonText}),O=Xt("span",{id:"nodeSizeValue",textContent:String(Math.round(e.nodes.defaultSize))},{fontSize:"12px",minWidth:"24px",textAlign:"right",fontVariantNumeric:"tabular-nums"});E.append(R,I,O);let b=Xt("div",{},{display:"flex",alignItems:"center",gap:"8px",width:"100%"}),T=Xt("span",{textContent:"Edge Opacity"},{fontSize:"12px",whiteSpace:"nowrap",minWidth:"78px"}),D=Xt("input",{id:"edgeOpacitySlider",type:"range",min:"0.05",max:"1.0",step:"0.05",value:String(e.edges.defaultOpacity)},{flex:"1",cursor:"pointer",accentColor:i.activeButtonText}),V=Xt("span",{id:"edgeOpacityValue",textContent:String(e.edges.defaultOpacity)},{fontSize:"12px",minWidth:"24px",textAlign:"right",fontVariantNumeric:"tabular-nums"});b.append(T,D,V);let G=Xt("div",{},{display:"flex",alignItems:"center",gap:"8px",width:"100%"}),C=Xt("span",{textContent:"Label Size"},{fontSize:"12px",whiteSpace:"nowrap",minWidth:"78px"}),z=Xt("input",{id:"labelSizeSlider",type:"range",min:"2",max:"20",step:"1",value:String(Math.round(e.labels.fontSize))},{flex:"1",cursor:"pointer",accentColor:i.activeButtonText}),P=Xt("span",{id:"labelSizeValue",textContent:String(Math.round(e.labels.fontSize))},{fontSize:"12px",minWidth:"24px",textAlign:"right",fontVariantNumeric:"tabular-nums"});G.append(C,z,P),S.append(E,b,G);let[N,W]=io("Layout",!1),Q=Xt("select",{id:"layoutSelect"},{padding:"6px 10px",borderRadius:"6px",border:i.inputBorder,background:i.inputBg,color:i.inputText,width:"100%",marginBottom:"6px",fontSize:"13px",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",outline:"none"});Q.innerHTML=`
        <option value="force" ${e.layout==="force"?"selected":""}>Force-Directed</option>
        <option value="circular" ${e.layout==="circular"?"selected":""}>Circular</option>
    `;let J=Se({id:"restartButton",title:"Restart simulation",htmlContent:"Restart Layout"});W.style.flexDirection="column",W.append(Q,J);let[et,gt]=io("Export",!1),Et=Se({id:"exportPNG",title:"Raster image of the current view",htmlContent:"PNG"}),Ut=Se({id:"exportSVG",title:"Scalable vector graphic",htmlContent:"SVG"}),zt=Se({id:"exportJSON",title:"Node and edge data with positions",htmlContent:"JSON"});gt.append(Et,Ut,zt);let[$,K]=io("Data",!1),ct=Se({id:"dataEdit",title:"Edit current data in JSON editor",htmlContent:"Edit"}),Pt=Se({id:"dataLoad",title:"Load data from a JSON file",htmlContent:"Load"}),xt=Se({id:"dataDownload",title:"Download current data as JSON",htmlContent:"Download"}),qt=Xt("input",{type:"file",accept:".json"},{display:"none"});K.append(ct,Pt,xt,qt),u.append(f,d,v,S,N,W,et,gt,$,K);let de=Xt("div",{id:"floatingLabelInput"},{position:"absolute",display:"none",background:i.panelBg,padding:"8px",borderRadius:"8px",boxShadow:i.panelShadow,border:i.panelBorder,backdropFilter:"blur(12px)",gap:"4px",zIndex:"1002"}),Ht=Sm({id:"groupLabelInput",placeholder:"Enter label"});Ht.style.width="130px";let Zt=Se({id:"groupLabelButton",title:"Assign group",htmlContent:"&#10003;"}),Kt=Se({id:"clearGroupButton",title:"Clear group",htmlContent:"Clear"});de.append(Ht,Zt,Kt);let Bt=Xt("div",{id:"legendPanel"},{position:"absolute",bottom:"20px",left:"20px",backgroundColor:i.panelBg,borderRadius:"10px",padding:"14px",boxShadow:i.panelShadow,border:i.panelBorder,backdropFilter:"blur(12px)",maxHeight:"200px",overflowY:"auto",fontSize:"12px",display:"none",minWidth:"120px",color:i.panelText,fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",zIndex:"1000"}),pe=Xt("div",{innerHTML:"<strong>Groups</strong>"},{marginBottom:"8px",borderBottom:`1px solid ${i.panelHeaderBorder}`,paddingBottom:"6px",fontSize:"12px",fontWeight:"600",letterSpacing:"0.5px",textTransform:"uppercase"}),L=Xt("div",{id:"legendContent"});Bt.append(pe,L);let ue=Xt("div",{id:"statsPanel"},{position:"absolute",bottom:"20px",right:"20px",backgroundColor:i.panelBg,borderRadius:"10px",padding:"14px",boxShadow:i.panelShadow,border:i.panelBorder,backdropFilter:"blur(12px)",fontSize:"12px",display:"none",color:i.panelText,fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",zIndex:"1000"}),$t=Xt("div",{id:"nodeTooltip"},{position:"absolute",display:"none",backgroundColor:i.tooltipBg,color:i.tooltipText,padding:"8px 12px",borderRadius:"8px",fontSize:"12px",pointerEvents:"none",zIndex:"1001",maxWidth:"220px",boxShadow:i.tooltipShadow,fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",lineHeight:"1.5"}),Qt=Xt("div",{id:"dataModal"},{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"2000"}),yt=Xt("div",{},{backgroundColor:i.panelBg,borderRadius:"12px",padding:"20px",width:"600px",maxWidth:"90vw",maxHeight:"80vh",display:"flex",flexDirection:"column",gap:"12px",border:i.panelBorder,boxShadow:i.panelShadow,color:i.panelText,fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"}),A=Xt("div",{textContent:"Edit Graph Data (JSON)"},{fontSize:"14px",fontWeight:"600"}),_=Xt("textarea",{id:"dataTextarea"},{width:"100%",height:"300px",fontFamily:"'Menlo', 'Monaco', 'Consolas', monospace",fontSize:"12px",borderRadius:"6px",border:i.inputBorder,background:i.inputBg,color:i.inputText,padding:"10px",resize:"vertical",outline:"none",boxSizing:"border-box"}),F=Xt("div",{},{display:"flex",gap:"8px",justifyContent:"flex-end"}),Z=Se({id:"dataApply",title:"Apply changes",htmlContent:"Apply"}),j=Se({id:"dataCancel",title:"Cancel editing",htmlContent:"Cancel"});F.append(Z,j),yt.append(A,_,F),Qt.appendChild(yt);let Y=Xt("div",{id:"helperText",textContent:"Scroll to zoom \xB7 Drag to pan"},{position:"absolute",bottom:"8px",left:"50%",transform:"translateX(-50%)",opacity:"0.4",pointerEvents:"none",fontSize:"12px",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",color:i.panelText,whiteSpace:"nowrap",zIndex:"1"}),St=Xt("div",{id:"selectionBox"},{position:"absolute",display:"none",border:`2px dashed ${i.selectionBoxStroke}`,backgroundColor:i.selectionBoxFill,pointerEvents:"none",zIndex:"2"});t.append(r,u,de,Bt,ue,$t,St,Y,Qt),y.ui={mainControlBar:r,zoomButton:s,selectButton:o,searchBox:a,themeToggle:l,sidebarToggle:c,sceneSidebar:u,arrowToggleButton:h,labelsToggleButton:g,ellipsesToggleButton:x,legendToggleButton:m,statsToggleButton:p,edgeColorToggleButton:M,nodeSizeSlider:I,nodeSizeValue:O,edgeOpacitySlider:D,edgeOpacityValue:V,labelSizeSlider:z,labelSizeValue:P,layoutSelect:Q,restartButton:J,exportPNGButton:Et,exportSVGButton:Ut,exportJSONButton:zt,floatingInput:de,groupInputBox:Ht,groupButton:Zt,clearGroupButton:Kt,legendPanel:Bt,legendContent:L,statsPanel:ue,tooltip:$t,helperText:Y,dataEditButton:ct,dataLoadButton:Pt,dataDownloadButton:xt,dataFileInput:qt,dataModal:Qt,dataTextarea:_,dataApplyButton:Z,dataCancelButton:j},y.selectionBoxDiv=St}function bm(){let{config:n,nodes:t}=y,{legendPanel:e,legendContent:i}=y.ui;if(!e)return;if(!n.ui.showLegend){e.style.display="none";return}let r=[...new Set(t.map(o=>o.group).filter(Boolean))].sort();if(r.length===0){e.style.display="none";return}e.style.display="block",i.innerHTML="";let s=$i();r.forEach(o=>{let a=t.filter(f=>f.group===o).length,l=Xt("div",{},{display:"flex",alignItems:"center",marginTop:"4px",cursor:"pointer",padding:"3px 6px",borderRadius:"4px",transition:"background 0.1s"}),c=Xt("div",{},{width:"12px",height:"12px",borderRadius:"3px",backgroundColor:Pe(o),marginRight:"8px",flexShrink:"0",cursor:"pointer"});c.addEventListener("click",f=>{f.stopPropagation();let d=document.createElement("input");d.type="color",d.value=Pe(o),d.style.position="absolute",d.style.opacity="0",d.style.pointerEvents="none",document.body.appendChild(d),d.addEventListener("input",()=>{y.groupColorOverrides[o]=d.value,c.style.backgroundColor=d.value,y._tickFn&&y._tickFn()}),d.addEventListener("change",()=>{document.body.removeChild(d)}),d.click()});let u=Xt("span",{innerHTML:`${o} <span style="opacity:0.6">(${a})</span>`},{fontSize:"12px"});l.append(c,u),l.addEventListener("mouseenter",()=>{l.style.backgroundColor=s.legendHoverBg}),l.addEventListener("mouseleave",()=>{l.style.backgroundColor=""}),l.addEventListener("click",()=>{rs(t.filter(f=>f.group===o)),y._tickFn&&y._tickFn()}),i.appendChild(l)})}function wm(){let{config:n,nodes:t,edges:e,selectedNodes:i}=y,{statsPanel:r}=y.ui;if(!r)return;if(!n.ui.showStatistics){r.style.display="none";return}r.style.display="block";let s=$i(),o=t.length,a=e.length,l=new Set(t.map(d=>d.group).filter(Boolean)).size,c=o>1?2*a/(o*(o-1)):0,u={};t.forEach(d=>u[d.id]=0),e.forEach(d=>{let h=d.source.id||d.source,g=d.target.id||d.target;u[h]!==void 0&&u[h]++,u[g]!==void 0&&u[g]++});let f=o>0?Object.values(u).reduce((d,h)=>d+h,0)/o:0;r.innerHTML=`
        <div style="font-weight:600;margin-bottom:8px;border-bottom:1px solid ${s.statsBorder};padding-bottom:6px;font-size:12px;letter-spacing:0.5px;text-transform:uppercase;">Statistics</div>
        <table style="border-collapse:collapse;font-size:12px;">
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Nodes</td><td style="text-align:right;font-weight:500;">${o}</td></tr>
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Edges</td><td style="text-align:right;font-weight:500;">${a}</td></tr>
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Groups</td><td style="text-align:right;font-weight:500;">${l}</td></tr>
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Density</td><td style="text-align:right;font-weight:500;">${c.toFixed(4)}</td></tr>
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Avg Degree</td><td style="text-align:right;font-weight:500;">${f.toFixed(2)}</td></tr>
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Selected</td><td style="text-align:right;font-weight:500;">${i.size}</td></tr>
        </table>
    `}function Tm(n,t){let{floatingInput:e,groupInputBox:i}=y.ui;e.style.display="flex",e.style.left=`${n+15}px`,e.style.top=`${t-30}px`,i.focus()}function $l(){y.ui.floatingInput.style.display="none"}function Em(){let n=y.selectionBoxDiv;if(!n)return;let t=y.selectionBox;if(!t){n.style.display="none";return}let e=Ri(t.x,t.y),i=Ri(t.x+t.width,t.y+t.height);n.style.display="block",n.style.left=Math.min(e.x,i.x)+"px",n.style.top=Math.min(e.y,i.y)+"px",n.style.width=Math.abs(i.x-e.x)+"px",n.style.height=Math.abs(i.y-e.y)+"px"}function Am(n){let t=y.config,e=y.renderer.domElement;y._tickFn=n,y.zoom=Bo().scaleExtent([t.canvas.zoomMin,t.canvas.zoomMax]).on("zoom",i=>{y.selectionMode||(y.transform=i.transform,Br(),n())}),Me(e).call(y.zoom),e.addEventListener("mousedown",i=>{if($l(),!y.selectionMode)return;let r=i.shiftKey,[s,o]=We(i),a=Mc(s,o),l=bc(a.x,a.y);l?r?y.selectedNodes.has(l)?y.selectedNodes.delete(l):y.selectedNodes.add(l):(y.draggingNode=l,y.dragOffsetX=l.x-a.x,y.dragOffsetY=l.y-a.y,y.selectedNodes.has(l)||rs([l])):(r||ni(),y.selectionBox={x:a.x,y:a.y,width:0,height:0}),n()}),e.addEventListener("mousemove",i=>{let[r,s]=We(i),o=Mc(r,s);if(t.ui.showTooltips&&!y.selectionMode){let a=bc(o.x,o.y),l=y.ui.tooltip;if(a){let c=`<strong>${a.id}</strong>`;if(a.group&&(c+=`<br><span style="color:${Pe(a.group)}">&#9679; ${a.group}</span>`),a.metadata)for(let[u,f]of Object.entries(a.metadata))c+=`<br><span style="opacity:0.7">${u}:</span> ${f}`;l.innerHTML=c,l.style.display="block",l.style.left=`${r+15}px`,l.style.top=`${s+15}px`}else l.style.display="none"}if(y.selectionMode)if(y.ui.tooltip.style.display="none",y.draggingNode){let a=o.x+y.dragOffsetX-y.draggingNode.x,l=o.y+y.dragOffsetY-y.draggingNode.y;y.selectedNodes.size>0&&y.selectedNodes.has(y.draggingNode)?y.selectedNodes.forEach(c=>{c.x+=a,c.y+=l}):(y.draggingNode.x=o.x+y.dragOffsetX,y.draggingNode.y=o.y+y.dragOffsetY),y.simulation.alpha(.1).restart(),n()}else y.selectionBox&&(y.selectionBox.width=o.x-y.selectionBox.x,y.selectionBox.height=o.y-y.selectionBox.y,n())}),e.addEventListener("mouseleave",()=>{y.ui.tooltip.style.display="none"}),e.addEventListener("mouseup",i=>{if(y.selectionMode){if(y.draggingNode)y.draggingNode=null;else if(y.selectionBox){if(wc(y.nodes.filter(r=>wd(r,y.selectionBox))),y.selectedNodes.size>0){let[r,s]=We(i);Tm(r,s)}y.selectionBox=null}n()}}),y.ui.zoomButton.addEventListener("click",()=>{y.selectionMode&&(y.selectionMode=!1,ae(y.ui.zoomButton,!0),ae(y.ui.selectButton,!1),Me(e).call(y.zoom),y.ui.helperText.textContent="Scroll to zoom \xB7 Drag to pan")}),y.ui.selectButton.addEventListener("click",()=>{y.selectionMode||(y.selectionMode=!0,ae(y.ui.selectButton,!0),ae(y.ui.zoomButton,!1),Me(e).on("mousedown.zoom",null).on("mousemove.zoom",null).on("mouseup.zoom",null).on("wheel.zoom",null).on("dblclick.zoom",null),y.ui.helperText.textContent="Drag to select \xB7 Shift+click to add \xB7 Drag nodes to move")}),y.ui.sidebarToggle.addEventListener("click",i=>{i.stopPropagation();let r=y.ui.sceneSidebar,o=parseFloat(r.style.right)<0;r.style.right=o?"12px":"-350px",ae(y.ui.sidebarToggle,o)}),document.addEventListener("click",i=>{let r=y.ui.sceneSidebar;parseFloat(r.style.right)>=0&&!r.contains(i.target)&&!y.ui.sidebarToggle.contains(i.target)&&(r.style.right="-350px",ae(y.ui.sidebarToggle,!1))}),y.ui.searchBox.addEventListener("input",()=>{let i=y.ui.searchBox.value.toLowerCase();rs(y.nodes.filter(r=>r.id.toLowerCase().includes(i))),n()}),y.ui.arrowToggleButton.addEventListener("click",()=>{y.showArrows=!y.showArrows,ae(y.ui.arrowToggleButton,y.showArrows),n()}),y.ui.labelsToggleButton.addEventListener("click",()=>{t.labels.visible=!t.labels.visible,ae(y.ui.labelsToggleButton,t.labels.visible),n()}),y.ui.ellipsesToggleButton.addEventListener("click",()=>{t.groups.showEllipses=!t.groups.showEllipses,ae(y.ui.ellipsesToggleButton,t.groups.showEllipses),n()}),y.ui.legendToggleButton.addEventListener("click",()=>{t.ui.showLegend=!t.ui.showLegend,ae(y.ui.legendToggleButton,t.ui.showLegend),n()}),y.ui.statsToggleButton.addEventListener("click",()=>{t.ui.showStatistics=!t.ui.showStatistics,ae(y.ui.statsToggleButton,t.ui.showStatistics),n()}),y.ui.edgeColorToggleButton.addEventListener("click",()=>{y.colorEdgesByGroup=!y.colorEdgesByGroup,ae(y.ui.edgeColorToggleButton,y.colorEdgesByGroup),n()}),y.ui.groupButton.addEventListener("click",()=>{let i=[...new Set(y.nodes.map(s=>s.group).filter(Boolean))],r=y.ui.groupInputBox.value||`Group ${i.length+1}`;r&&y.selectedNodes.size>0&&(y.selectedNodes.forEach(s=>s.group=r),n()),y.ui.groupInputBox.value="",$l(),ni()}),y.ui.clearGroupButton.addEventListener("click",()=>{y.selectedNodes.size>0&&(y.selectedNodes.forEach(i=>delete i.group),n()),y.ui.groupInputBox.value="",$l(),ni()}),y.ui.nodeSizeSlider.addEventListener("input",()=>{let i=parseFloat(y.ui.nodeSizeSlider.value);t.nodes.defaultSize=i,y.ui.nodeSizeValue.textContent=String(Math.round(i)),y.userAdjusted.nodeSize=!0,n()}),y.ui.edgeOpacitySlider.addEventListener("input",()=>{let i=parseFloat(y.ui.edgeOpacitySlider.value);t.edges.defaultOpacity=i,y.ui.edgeOpacityValue.textContent=i.toFixed(2),y.userAdjusted.edgeOpacity=!0,y.normalEdgesMesh&&(y.normalEdgesMesh.material.opacity=i),n()}),y.ui.labelSizeSlider.addEventListener("input",()=>{let i=parseFloat(y.ui.labelSizeSlider.value);t.labels.fontSize=i,y.ui.labelSizeValue.textContent=String(Math.round(i)),y.labelDivs.forEach(r=>{r.style.fontSize=i+"px"}),n()}),y.ui.dataEditButton.addEventListener("click",()=>{let i={nodes:y.nodes.map(r=>{let s={id:r.id};return r.group&&(s.group=r.group),r.size&&(s.size=r.size),r.color&&(s.color=r.color),r.metadata&&(s.metadata=r.metadata),s}),edges:y.edges.map(r=>{let s={source:r.source.id||r.source,target:r.target.id||r.target};return r.weight&&(s.weight=r.weight),r.color&&(s.color=r.color),s})};y.ui.dataTextarea.value=JSON.stringify(i,null,2),y.ui.dataModal.style.display="flex"}),y.ui.dataApplyButton.addEventListener("click",()=>{try{let i=JSON.parse(y.ui.dataTextarea.value);if(!i.nodes||!i.edges){alert('JSON must contain "nodes" and "edges" arrays.');return}y.ui.dataModal.style.display="none",y.applyNewData&&y.applyNewData(i)}catch(i){alert("Invalid JSON: "+i.message)}}),y.ui.dataCancelButton.addEventListener("click",()=>{y.ui.dataModal.style.display="none"}),y.ui.dataLoadButton.addEventListener("click",()=>{y.ui.dataFileInput.click()}),y.ui.dataFileInput.addEventListener("change",i=>{let r=i.target.files[0];if(!r)return;let s=new FileReader;s.onload=o=>{try{let a=JSON.parse(o.target.result);if(!a.nodes||!a.edges){alert('JSON must contain "nodes" and "edges" arrays.');return}y.applyNewData&&y.applyNewData(a)}catch(a){alert("Invalid JSON file: "+a.message)}},s.readAsText(r),i.target.value=""}),y.ui.dataDownloadButton.addEventListener("click",()=>{let i={nodes:y.nodes.map(o=>{let a={id:o.id,x:o.x,y:o.y};return o.group&&(a.group=o.group),o.size&&(a.size=o.size),o.color&&(a.color=o.color),o.metadata&&(a.metadata=o.metadata),a}),edges:y.edges.map(o=>({source:o.source.id||o.source,target:o.target.id||o.target,...o.weight&&{weight:o.weight},...o.color&&{color:o.color}}))},r=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),s=document.createElement("a");s.download="lightgraph_data.json",s.href=URL.createObjectURL(r),s.click()}),y.ui.themeToggle.addEventListener("click",()=>{y.currentTheme=y.currentTheme==="dark"?"light":"dark",$M(),n()}),window.addEventListener("resize",()=>{let i=y.container.clientWidth,r=y.container.clientHeight;y.renderer.setSize(i,r),Br(),n()})}function $M(){let n=ce[y.currentTheme]||ce.dark;y.scene.background=new It(n.background),y.config.nodes.defaultColor=n.nodeDefault,y.config.nodes.borderColor=n.nodeBorder,y.config.nodes.selectedBorderColor=n.selectedBorder,y.config.edges.defaultColor=n.edgeDefault,y.config.edges.selectedColor=n.edgeSelected,y.userAdjusted.edgeOpacity||(y.config.edges.defaultOpacity=n.edgeOpacity),y.config.edges.selectedOpacity=n.edgeSelectedOpacity,y.config.labels.color=n.labelColor,y.config.labels.selectedColor=n.selectedLabelColor,y.config.canvas.backgroundColor=n.background,y.config.groups.fillOpacity=n.groupFillOpacity,y.normalEdgesMesh&&(y.normalEdgesMesh.material.opacity=y.config.edges.defaultOpacity),y.highlightedEdgesMesh&&(y.highlightedEdgesMesh.material.opacity=y.config.edges.selectedOpacity),y.ui.edgeOpacitySlider&&(y.ui.edgeOpacitySlider.value=String(y.config.edges.defaultOpacity),y.ui.edgeOpacityValue.textContent=y.config.edges.defaultOpacity.toFixed(2),y.ui.edgeOpacitySlider.style.accentColor=n.activeButtonText),y.ui.nodeSizeSlider&&(y.ui.nodeSizeSlider.style.accentColor=n.activeButtonText),[y.ui.mainControlBar,y.ui.sceneSidebar,y.ui.legendPanel,y.ui.statsPanel,y.ui.floatingInput].forEach(i=>{i&&(i.style.backgroundColor=n.panelBg,i.style.boxShadow=n.panelShadow,i.style.border=n.panelBorder,i.style.color=n.panelText)}),y.ui.tooltip.style.backgroundColor=n.tooltipBg,y.ui.tooltip.style.color=n.tooltipText,y.ui.tooltip.style.boxShadow=n.tooltipShadow,y.selectionBoxDiv&&(y.selectionBoxDiv.style.borderColor=n.selectionBoxStroke,y.selectionBoxDiv.style.backgroundColor=n.selectionBoxFill),y.ui.themeToggle.innerHTML=y.currentTheme==="dark"?'<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>':'<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>',y.ui.mainControlBar.querySelectorAll("button").forEach(i=>{i.style.color=n.iconColor,i.dataset.active!=="true"&&(i.style.border=n.buttonBorder,i.style.background=n.buttonBg)}),y.ui.searchBox.style.background=n.inputBg,y.ui.searchBox.style.border=n.inputBorder,y.ui.searchBox.style.color=n.inputText,y.ui.helperText&&(y.ui.helperText.style.color=n.panelText)}function ro(n){let{nodes:t,edges:e,config:i,container:r}=y;try{let s=document.getElementById("simulationParams"),o,a;if(s){let l=JSON.parse(s.textContent);o=l.totalForce/t.length,a=l.linkDistance}else o=i.simulation.chargeStrength/t.length,a=i.simulation.linkDistance;i.layout==="circular"?(ZM(),y.simulation=wi(t).force("link",Vr(e).id(l=>l.id).distance(a).strength(.1)).force("charge",$r().strength(-o*.1)).on("tick",n)):y.simulation=wi(t).force("link",Vr(e).id(l=>l.id).distance(a)).force("charge",$r().strength(-o)).force("center",ao(r.clientWidth/2,r.clientHeight/2)).on("tick",n),Me(y.renderer.domElement).call(y.zoom)}catch(s){console.error("Error updating visualization:",s)}}function ZM(){let{nodes:n,container:t}=y,e=t.clientWidth/2,i=t.clientHeight/2,r=Math.min(e,i)*.7,s=[...new Set(n.map(l=>l.group||"default"))].sort(),o=new Map;s.forEach((l,c)=>o.set(l,c));let a=[...n].sort((l,c)=>{let u=l.group||"default",f=c.group||"default";return o.get(u)-o.get(f)});a.forEach((l,c)=>{let u=2*Math.PI*c/a.length-Math.PI/2;l.x=e+r*Math.cos(u),l.y=i+r*Math.sin(u),l.fx=l.x,l.fy=l.y}),setTimeout(()=>{n.forEach(l=>{l.fx=null,l.fy=null})},100)}function th(n,t){let e=document.createElement("a");e.download=t,e.href=n,e.click()}function Cm(){let n=y.renderer.domElement,t=window.devicePixelRatio||1,e=n.width,i=n.height,r=document.createElement("canvas");r.width=e,r.height=i;let s=r.getContext("2d");s.drawImage(n,0,0,e,i),s.save(),s.scale(t,t),y.config.labels.visible&&JM(s),y.config.ui.showLegend&&KM(s),y.config.ui.showStatistics&&QM(s),s.restore();let o=r.toDataURL("image/png");th(o,"lightgraph.png")}function JM(n){let{nodes:t,selectedNodes:e,config:i}=y,r=ce[y.currentTheme]||ce.dark;t.forEach(s=>{let o=Ri(s.x||0,s.y||0),a=s.size||i.nodes.defaultSize,l=e.has(s),u=(a/2+4)*y.transform.k,f=s.labelFontSize||i.labels.fontSize,d=l?"600":"normal";n.font=`${d} ${f}px ${i.labels.fontFamily}`,n.fillStyle=l?i.labels.selectedColor:i.labels.color,n.textAlign="right",n.textBaseline="middle",y.currentTheme==="dark"?(n.shadowColor="rgba(0,0,0,0.8)",n.shadowBlur=3,n.shadowOffsetY=1):(n.shadowColor="rgba(255,255,255,0.8)",n.shadowBlur=2,n.shadowOffsetY=1),n.fillText(s.id,o.x-u,o.y),n.shadowColor="transparent",n.shadowBlur=0,n.shadowOffsetY=0})}function KM(n){let{nodes:t,config:e}=y,i=ce[y.currentTheme]||ce.dark,r=[...new Set(t.map(h=>h.group).filter(Boolean))].sort();if(r.length===0)return;let s=y.ui.legendPanel;if(!s||s.style.display==="none")return;let o=s.getBoundingClientRect(),a=y.container.getBoundingClientRect(),l=o.left-a.left,c=o.top-a.top,u=o.width,f=o.height;n.fillStyle=i.panelBg,n.beginPath(),ju(n,l,c,u,f,10),n.fill(),n.fillStyle=i.panelText,n.font="600 12px Inter, -apple-system, system-ui, sans-serif",n.textAlign="left",n.textBaseline="top",n.fillText("Groups",l+14,c+14);let d=c+36;r.forEach(h=>{let g=t.filter(x=>x.group===h).length;n.fillStyle=Pe(h),n.beginPath(),ju(n,l+14,d+1,12,12,3),n.fill(),n.fillStyle=i.panelText,n.font="12px Inter, -apple-system, system-ui, sans-serif",n.fillText(`${h} (${g})`,l+34,d+1),d+=20})}function QM(n){let{nodes:t,edges:e,selectedNodes:i,config:r}=y,s=ce[y.currentTheme]||ce.dark,o=y.ui.statsPanel;if(!o||o.style.display==="none")return;let a=o.getBoundingClientRect(),l=y.container.getBoundingClientRect(),c=a.left-l.left,u=a.top-l.top,f=a.width,d=a.height;n.fillStyle=s.panelBg,n.beginPath(),ju(n,c,u,f,d,10),n.fill(),n.fillStyle=s.panelText,n.font="600 12px Inter, -apple-system, system-ui, sans-serif",n.textAlign="left",n.textBaseline="top",n.fillText("Statistics",c+14,u+14);let h=t.length,g=e.length,x=new Set(t.map(E=>E.group).filter(Boolean)).size,m=h>1?2*g/(h*(h-1)):0,p={};t.forEach(E=>p[E.id]=0),e.forEach(E=>{let R=E.source.id||E.source,I=E.target.id||E.target;p[R]!==void 0&&p[R]++,p[I]!==void 0&&p[I]++});let M=h>0?Object.values(p).reduce((E,R)=>E+R,0)/h:0,v=[["Nodes",h],["Edges",g],["Groups",x],["Density",m.toFixed(4)],["Avg Degree",M.toFixed(2)],["Selected",i.size]];n.font="12px Inter, -apple-system, system-ui, sans-serif";let S=u+36;v.forEach(([E,R])=>{n.globalAlpha=.7,n.textAlign="left",n.fillText(E,c+14,S),n.globalAlpha=1,n.font="500 12px Inter, -apple-system, system-ui, sans-serif",n.textAlign="right",n.fillText(String(R),c+f-14,S),n.font="12px Inter, -apple-system, system-ui, sans-serif",S+=18})}function ju(n,t,e,i,r,s){n.moveTo(t+s,e),n.lineTo(t+i-s,e),n.quadraticCurveTo(t+i,e,t+i,e+s),n.lineTo(t+i,e+r-s),n.quadraticCurveTo(t+i,e+r,t+i-s,e+r),n.lineTo(t+s,e+r),n.quadraticCurveTo(t,e+r,t,e+r-s),n.lineTo(t,e+s),n.quadraticCurveTo(t,e,t+s,e),n.closePath()}function Rm(){let{nodes:n,edges:t,config:e,transform:i}=y,r=y.container,s=r.clientWidth,o=r.clientHeight,a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("width",s),a.setAttribute("height",o),a.setAttribute("xmlns","http://www.w3.org/2000/svg");let l=document.createElementNS("http://www.w3.org/2000/svg","rect");l.setAttribute("width","100%"),l.setAttribute("height","100%"),l.setAttribute("fill",e.canvas.backgroundColor),a.appendChild(l);let c=document.createElementNS("http://www.w3.org/2000/svg","g");if(c.setAttribute("transform",`translate(${i.x},${i.y}) scale(${i.k})`),t.forEach(h=>{let g=document.createElementNS("http://www.w3.org/2000/svg","line");g.setAttribute("x1",h.source.x),g.setAttribute("y1",h.source.y),g.setAttribute("x2",h.target.x),g.setAttribute("y2",h.target.y);let x=h.color?h.color:y.colorEdgesByGroup&&h.source.group?Pe(h.source.group):e.edges.defaultColor;g.setAttribute("stroke",x),g.setAttribute("stroke-opacity",e.edges.defaultOpacity),g.setAttribute("stroke-width",e.edges.defaultWidth),c.appendChild(g)}),n.forEach(h=>{let g=document.createElementNS("http://www.w3.org/2000/svg","circle");if(g.setAttribute("cx",h.x),g.setAttribute("cy",h.y),g.setAttribute("r",(h.size||e.nodes.defaultSize)/2),g.setAttribute("fill",h.group?Pe(h.group):h.color||e.nodes.defaultColor),g.setAttribute("stroke",e.nodes.borderColor),g.setAttribute("stroke-width",e.nodes.borderWidth),c.appendChild(g),e.labels.visible){let x=document.createElementNS("http://www.w3.org/2000/svg","text");x.setAttribute("x",h.x-4),x.setAttribute("y",h.y+4),x.setAttribute("font-size",h.labelFontSize||e.labels.fontSize),x.setAttribute("font-family",e.labels.fontFamily),x.setAttribute("fill",e.labels.color),x.setAttribute("text-anchor","end"),x.textContent=h.id,c.appendChild(x)}}),a.appendChild(c),e.ui.showLegend){let h=[...new Set(n.map(g=>g.group).filter(Boolean))].sort();if(h.length>0){let g=ce[y.currentTheme]||ce.dark,x=document.createElementNS("http://www.w3.org/2000/svg","g"),m=20,p=o-20-(h.length*20+36),M=document.createElementNS("http://www.w3.org/2000/svg","rect");M.setAttribute("x",m),M.setAttribute("y",p),M.setAttribute("width",140),M.setAttribute("height",h.length*20+36),M.setAttribute("rx",10),M.setAttribute("fill",g.panelBg),M.setAttribute("opacity","0.9"),x.appendChild(M);let v=document.createElementNS("http://www.w3.org/2000/svg","text");v.setAttribute("x",m+14),v.setAttribute("y",p+22),v.setAttribute("font-size","12"),v.setAttribute("font-weight","600"),v.setAttribute("fill",g.panelText),v.textContent="Groups",x.appendChild(v),h.forEach((S,E)=>{let R=n.filter(T=>T.group===S).length,I=p+36+E*20,O=document.createElementNS("http://www.w3.org/2000/svg","rect");O.setAttribute("x",m+14),O.setAttribute("y",I),O.setAttribute("width",12),O.setAttribute("height",12),O.setAttribute("rx",3),O.setAttribute("fill",Pe(S)),x.appendChild(O);let b=document.createElementNS("http://www.w3.org/2000/svg","text");b.setAttribute("x",m+34),b.setAttribute("y",I+10),b.setAttribute("font-size","12"),b.setAttribute("fill",g.panelText),b.textContent=`${S} (${R})`,x.appendChild(b)}),a.appendChild(x)}}if(e.ui.showStatistics){let h=ce[y.currentTheme]||ce.dark,g=n.length,x=t.length,m=new Set(n.map(V=>V.group).filter(Boolean)).size,p=g>1?2*x/(g*(g-1)):0,M={};n.forEach(V=>M[V.id]=0),t.forEach(V=>{let G=V.source.id||V.source,C=V.target.id||V.target;M[G]!==void 0&&M[G]++,M[C]!==void 0&&M[C]++});let v=g>0?Object.values(M).reduce((V,G)=>V+G,0)/g:0,S=[["Nodes",g],["Edges",x],["Groups",m],["Density",p.toFixed(4)],["Avg Degree",v.toFixed(2)]],E=document.createElementNS("http://www.w3.org/2000/svg","g"),R=160,I=S.length*18+36,O=s-20-R,b=o-20-I,T=document.createElementNS("http://www.w3.org/2000/svg","rect");T.setAttribute("x",O),T.setAttribute("y",b),T.setAttribute("width",R),T.setAttribute("height",I),T.setAttribute("rx",10),T.setAttribute("fill",h.panelBg),T.setAttribute("opacity","0.9"),E.appendChild(T);let D=document.createElementNS("http://www.w3.org/2000/svg","text");D.setAttribute("x",O+14),D.setAttribute("y",b+22),D.setAttribute("font-size","12"),D.setAttribute("font-weight","600"),D.setAttribute("fill",h.panelText),D.textContent="Statistics",E.appendChild(D),S.forEach(([V,G],C)=>{let z=b+38+C*18,P=document.createElementNS("http://www.w3.org/2000/svg","text");P.setAttribute("x",O+14),P.setAttribute("y",z+10),P.setAttribute("font-size","12"),P.setAttribute("fill",h.panelText),P.setAttribute("opacity","0.7"),P.textContent=V,E.appendChild(P);let N=document.createElementNS("http://www.w3.org/2000/svg","text");N.setAttribute("x",O+R-14),N.setAttribute("y",z+10),N.setAttribute("font-size","12"),N.setAttribute("font-weight","500"),N.setAttribute("fill",h.panelText),N.setAttribute("text-anchor","end"),N.textContent=String(G),E.appendChild(N)}),a.appendChild(E)}let f=new XMLSerializer().serializeToString(a),d=new Blob([f],{type:"image/svg+xml"});th(URL.createObjectURL(d),"lightgraph.svg")}function Im(){let{nodes:n,edges:t,config:e}=y,i={nodes:n.map(s=>({id:s.id,group:s.group,x:s.x,y:s.y,size:s.size,color:s.color})),edges:t.map(s=>({source:s.source.id||s.source,target:s.target.id||s.target,weight:s.weight})),config:e},r=new Blob([JSON.stringify(i,null,2)],{type:"application/json"});th(URL.createObjectURL(r),"lightgraph.json")}window.lightGraph=window.lightGraph||{};window.lightGraph.initializeVisualization=()=>{let n=document.getElementById("lightGraphConfig"),t=n?JSON.parse(n.textContent):{},e=Sc(Sd,t);y.currentTheme=e.ui.theme||"light",Md(e,y.currentTheme),y.config=e,y.showArrows=e.edges.showArrows;let i=t.nodes&&t.nodes.defaultSize!==void 0,r=t.edges&&t.edges.defaultOpacity!==void 0,s=document.getElementById("lightGraph");if(s.clientHeight===0&&(s.style.height="100vh"),s.style.position="relative",s.style.overflow="hidden",y.container=s,!pm())return;y.transform=Mn;let a=[...Oo,...zo,...ko];y.groupColorScale=ir(a),y.simulation=wi([]),Mm(l),ym(),Am(l),y.ui.layoutSelect.addEventListener("change",()=>{e.layout=y.ui.layoutSelect.value,ro(l)}),y.ui.restartButton.addEventListener("click",()=>{ro(l)}),y.ui.exportPNGButton.addEventListener("click",Cm),y.ui.exportSVGButton.addEventListener("click",Rm),y.ui.exportJSONButton.addEventListener("click",Im);function l(){Ju(),gm(),_m(),xm(),vm(),Em(),mm(),bm(),wm()}function c(){try{let d=document.getElementById("nodesData"),h=document.getElementById("edgesData");if(!d||!h){console.error("nodesData or edgesData element not found");return}y.selectionMode=!1,y.transform=Mn,ni(),y.selectionBox=null,y.draggingNode=null,y.dragOffsetX=0,y.dragOffsetY=0,y.nodes=JSON.parse(d.textContent),y.edges=JSON.parse(h.textContent);let g=y.nodes.length,x=y.edges.length;if(!i&&!y.userAdjusted.nodeSize){let m=Math.max(4,Math.min(20,180/Math.sqrt(g)));e.nodes.defaultSize=Math.round(m),y.ui.nodeSizeSlider&&(y.ui.nodeSizeSlider.value=String(e.nodes.defaultSize),y.ui.nodeSizeValue.textContent=String(e.nodes.defaultSize))}if(!r&&!y.userAdjusted.edgeOpacity){let m=g>1?2*x/(g*(g-1)):0,p=Math.max(.08,Math.min(.6,.5/Math.sqrt(Math.max(m*g,.1))));e.edges.defaultOpacity=parseFloat(p.toFixed(2)),y.ui.edgeOpacitySlider&&(y.ui.edgeOpacitySlider.value=String(e.edges.defaultOpacity),y.ui.edgeOpacityValue.textContent=e.edges.defaultOpacity.toFixed(2))}ae(y.ui.zoomButton,!0),ae(y.ui.selectButton,!1),Br(),Zu(),Ku(),Qu(),ro(l)}catch(d){console.error("Error reloading data:",d)}}function u(d){y.selectionMode=!1,y.transform=Mn,ni(),y.selectionBox=null,y.draggingNode=null,y.nodes=d.nodes,y.edges=d.edges,ae(y.ui.zoomButton,!0),ae(y.ui.selectButton,!1),y.ui.helperText.textContent="Scroll to zoom \xB7 Drag to pan",Me(y.renderer.domElement).call(y.zoom),Br(),Zu(),Ku(),Qu(),ro(l)}y.applyNewData=u,c();let f=document.getElementById("networkData");f&&new MutationObserver(()=>{setTimeout(c,500)}).observe(f,{childList:!0,subtree:!0,characterData:!0})};var jM=setInterval(()=>{document.getElementById("lightGraph")&&(clearInterval(jM),window.lightGraph.initializeVisualization())},100);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
