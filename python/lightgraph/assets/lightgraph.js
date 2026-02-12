var __lightgraph_internal=(()=>{function ss(n,t,e){var i,r=1;n==null&&(n=0),t==null&&(t=0),e==null&&(e=0);function s(){var o,a=i.length,l,c=0,h=0,u=0;for(o=0;o<a;++o)l=i[o],c+=l.x||0,h+=l.y||0,u+=l.z||0;for(c=(c/a-n)*r,h=(h/a-t)*r,u=(u/a-e)*r,o=0;o<a;++o)l=i[o],c&&(l.x-=c),h&&(l.y-=h),u&&(l.z-=u)}return s.initialize=function(o){i=o},s.x=function(o){return arguments.length?(n=+o,s):n},s.y=function(o){return arguments.length?(t=+o,s):t},s.z=function(o){return arguments.length?(e=+o,s):e},s.strength=function(o){return arguments.length?(r=+o,s):r},s}function qu(n){let t=+this._x.call(null,n);return Yu(this.cover(t),t,n)}function Yu(n,t,e){if(isNaN(t))return n;var i,r=n._root,s={data:e},o=n._x0,a=n._x1,l,c,h,u,f;if(!r)return n._root=s,n;for(;r.length;)if((h=t>=(l=(o+a)/2))?o=l:a=l,i=r,!(r=r[u=+h]))return i[u]=s,n;if(c=+n._x.call(null,r.data),t===c)return s.next=r,i?i[u]=s:n._root=s,n;do i=i?i[u]=new Array(2):n._root=new Array(2),(h=t>=(l=(o+a)/2))?o=l:a=l;while((u=+h)==(f=+(c>=l)));return i[f]=r,i[u]=s,n}function Zu(n){Array.isArray(n)||(n=Array.from(n));let t=n.length,e=new Float64Array(t),i=1/0,r=-1/0;for(let s=0,o;s<t;++s)isNaN(o=+this._x.call(null,n[s]))||(e[s]=o,o<i&&(i=o),o>r&&(r=o));if(i>r)return this;this.cover(i).cover(r);for(let s=0;s<t;++s)Yu(this,e[s],n[s]);return this}function $u(n){if(isNaN(n=+n))return this;var t=this._x0,e=this._x1;if(isNaN(t))e=(t=Math.floor(n))+1;else{for(var i=e-t||1,r=this._root,s,o;t>n||n>=e;)switch(o=+(n<t),s=new Array(2),s[o]=r,r=s,i*=2,o){case 0:e=t+i;break;case 1:t=e-i;break}this._root&&this._root.length&&(this._root=r)}return this._x0=t,this._x1=e,this}function Ju(){var n=[];return this.visit(function(t){if(!t.length)do n.push(t.data);while(t=t.next)}),n}function Ku(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function pn(n,t,e){this.node=n,this.x0=t,this.x1=e}function ju(n,t){var e,i=this._x0,r,s,o=this._x1,a=[],l=this._root,c,h;for(l&&a.push(new pn(l,i,o)),t==null?t=1/0:(i=n-t,o=n+t);c=a.pop();)if(!(!(l=c.node)||(r=c.x0)>o||(s=c.x1)<i))if(l.length){var u=(r+s)/2;a.push(new pn(l[1],u,s),new pn(l[0],r,u)),(h=+(n>=u))&&(c=a[a.length-1],a[a.length-1]=a[a.length-1-h],a[a.length-1-h]=c)}else{var f=Math.abs(n-+this._x.call(null,l.data));f<t&&(t=f,i=n-f,o=n+f,e=l.data)}return e}function Qu(n){if(isNaN(l=+this._x.call(null,n)))return this;var t,e=this._root,i,r,s,o=this._x0,a=this._x1,l,c,h,u,f;if(!e)return this;if(e.length)for(;;){if((h=l>=(c=(o+a)/2))?o=c:a=c,t=e,!(e=e[u=+h]))return this;if(!e.length)break;t[u+1&1]&&(i=t,f=u)}for(;e.data!==n;)if(r=e,!(e=e.next))return this;return(s=e.next)&&delete e.next,r?(s?r.next=s:delete r.next,this):t?(s?t[u]=s:delete t[u],(e=t[0]||t[1])&&e===(t[1]||t[0])&&!e.length&&(i?i[f]=e:this._root=e),this):(this._root=s,this)}function tf(n){for(var t=0,e=n.length;t<e;++t)this.remove(n[t]);return this}function ef(){return this._root}function nf(){var n=0;return this.visit(function(t){if(!t.length)do++n;while(t=t.next)}),n}function rf(n){var t=[],e,i=this._root,r,s,o;for(i&&t.push(new pn(i,this._x0,this._x1));e=t.pop();)if(!n(i=e.node,s=e.x0,o=e.x1)&&i.length){var a=(s+o)/2;(r=i[1])&&t.push(new pn(r,a,o)),(r=i[0])&&t.push(new pn(r,s,a))}return this}function sf(n){var t=[],e=[],i;for(this._root&&t.push(new pn(this._root,this._x0,this._x1));i=t.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.x1,l=(o+a)/2;(s=r[0])&&t.push(new pn(s,o,l)),(s=r[1])&&t.push(new pn(s,l,a))}e.push(i)}for(;i=e.pop();)n(i.node,i.x0,i.x1);return this}function of(n){return n[0]}function af(n){return arguments.length?(this._x=n,this):this._x}function os(n,t){var e=new Ec(t??of,NaN,NaN);return n==null?e:e.addAll(n)}function Ec(n,t,e){this._x=n,this._x0=t,this._x1=e,this._root=void 0}function lf(n){for(var t={data:n.data},e=t;n=n.next;)e=e.next={data:n.data};return t}var Ke=os.prototype=Ec.prototype;Ke.copy=function(){var n=new Ec(this._x,this._x0,this._x1),t=this._root,e,i;if(!t)return n;if(!t.length)return n._root=lf(t),n;for(e=[{source:t,target:n._root=new Array(2)}];t=e.pop();)for(var r=0;r<2;++r)(i=t.source[r])&&(i.length?e.push({source:i,target:t.target[r]=new Array(2)}):t.target[r]=lf(i));return n};Ke.add=qu;Ke.addAll=Zu;Ke.cover=$u;Ke.data=Ju;Ke.extent=Ku;Ke.find=ju;Ke.remove=Qu;Ke.removeAll=tf;Ke.root=ef;Ke.size=nf;Ke.visit=rf;Ke.visitAfter=sf;Ke.x=af;function cf(n){let t=+this._x.call(null,n),e=+this._y.call(null,n);return hf(this.cover(t,e),t,e,n)}function hf(n,t,e,i){if(isNaN(t)||isNaN(e))return n;var r,s=n._root,o={data:i},a=n._x0,l=n._y0,c=n._x1,h=n._y1,u,f,d,m,_,g,p,M;if(!s)return n._root=o,n;for(;s.length;)if((_=t>=(u=(a+c)/2))?a=u:c=u,(g=e>=(f=(l+h)/2))?l=f:h=f,r=s,!(s=s[p=g<<1|_]))return r[p]=o,n;if(d=+n._x.call(null,s.data),m=+n._y.call(null,s.data),t===d&&e===m)return o.next=s,r?r[p]=o:n._root=o,n;do r=r?r[p]=new Array(4):n._root=new Array(4),(_=t>=(u=(a+c)/2))?a=u:c=u,(g=e>=(f=(l+h)/2))?l=f:h=f;while((p=g<<1|_)===(M=(m>=f)<<1|d>=u));return r[M]=s,r[p]=o,n}function uf(n){var t,e,i=n.length,r,s,o=new Array(i),a=new Array(i),l=1/0,c=1/0,h=-1/0,u=-1/0;for(e=0;e<i;++e)isNaN(r=+this._x.call(null,t=n[e]))||isNaN(s=+this._y.call(null,t))||(o[e]=r,a[e]=s,r<l&&(l=r),r>h&&(h=r),s<c&&(c=s),s>u&&(u=s));if(l>h||c>u)return this;for(this.cover(l,c).cover(h,u),e=0;e<i;++e)hf(this,o[e],a[e],n[e]);return this}function ff(n,t){if(isNaN(n=+n)||isNaN(t=+t))return this;var e=this._x0,i=this._y0,r=this._x1,s=this._y1;if(isNaN(e))r=(e=Math.floor(n))+1,s=(i=Math.floor(t))+1;else{for(var o=r-e||1,a=this._root,l,c;e>n||n>=r||i>t||t>=s;)switch(c=(t<i)<<1|n<e,l=new Array(4),l[c]=a,a=l,o*=2,c){case 0:r=e+o,s=i+o;break;case 1:e=r-o,s=i+o;break;case 2:r=e+o,i=s-o;break;case 3:e=r-o,i=s-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=e,this._y0=i,this._x1=r,this._y1=s,this}function df(){var n=[];return this.visit(function(t){if(!t.length)do n.push(t.data);while(t=t.next)}),n}function pf(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Ie(n,t,e,i,r){this.node=n,this.x0=t,this.y0=e,this.x1=i,this.y1=r}function mf(n,t,e){var i,r=this._x0,s=this._y0,o,a,l,c,h=this._x1,u=this._y1,f=[],d=this._root,m,_;for(d&&f.push(new Ie(d,r,s,h,u)),e==null?e=1/0:(r=n-e,s=t-e,h=n+e,u=t+e,e*=e);m=f.pop();)if(!(!(d=m.node)||(o=m.x0)>h||(a=m.y0)>u||(l=m.x1)<r||(c=m.y1)<s))if(d.length){var g=(o+l)/2,p=(a+c)/2;f.push(new Ie(d[3],g,p,l,c),new Ie(d[2],o,p,g,c),new Ie(d[1],g,a,l,p),new Ie(d[0],o,a,g,p)),(_=(t>=p)<<1|n>=g)&&(m=f[f.length-1],f[f.length-1]=f[f.length-1-_],f[f.length-1-_]=m)}else{var M=n-+this._x.call(null,d.data),v=t-+this._y.call(null,d.data),b=M*M+v*v;if(b<e){var S=Math.sqrt(e=b);r=n-S,s=t-S,h=n+S,u=t+S,i=d.data}}return i}function gf(n){if(isNaN(h=+this._x.call(null,n))||isNaN(u=+this._y.call(null,n)))return this;var t,e=this._root,i,r,s,o=this._x0,a=this._y0,l=this._x1,c=this._y1,h,u,f,d,m,_,g,p;if(!e)return this;if(e.length)for(;;){if((m=h>=(f=(o+l)/2))?o=f:l=f,(_=u>=(d=(a+c)/2))?a=d:c=d,t=e,!(e=e[g=_<<1|m]))return this;if(!e.length)break;(t[g+1&3]||t[g+2&3]||t[g+3&3])&&(i=t,p=g)}for(;e.data!==n;)if(r=e,!(e=e.next))return this;return(s=e.next)&&delete e.next,r?(s?r.next=s:delete r.next,this):t?(s?t[g]=s:delete t[g],(e=t[0]||t[1]||t[2]||t[3])&&e===(t[3]||t[2]||t[1]||t[0])&&!e.length&&(i?i[p]=e:this._root=e),this):(this._root=s,this)}function xf(n){for(var t=0,e=n.length;t<e;++t)this.remove(n[t]);return this}function _f(){return this._root}function yf(){var n=0;return this.visit(function(t){if(!t.length)do++n;while(t=t.next)}),n}function vf(n){var t=[],e,i=this._root,r,s,o,a,l;for(i&&t.push(new Ie(i,this._x0,this._y0,this._x1,this._y1));e=t.pop();)if(!n(i=e.node,s=e.x0,o=e.y0,a=e.x1,l=e.y1)&&i.length){var c=(s+a)/2,h=(o+l)/2;(r=i[3])&&t.push(new Ie(r,c,h,a,l)),(r=i[2])&&t.push(new Ie(r,s,h,c,l)),(r=i[1])&&t.push(new Ie(r,c,o,a,h)),(r=i[0])&&t.push(new Ie(r,s,o,c,h))}return this}function bf(n){var t=[],e=[],i;for(this._root&&t.push(new Ie(this._root,this._x0,this._y0,this._x1,this._y1));i=t.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.y0,l=i.x1,c=i.y1,h=(o+l)/2,u=(a+c)/2;(s=r[0])&&t.push(new Ie(s,o,a,h,u)),(s=r[1])&&t.push(new Ie(s,h,a,l,u)),(s=r[2])&&t.push(new Ie(s,o,u,h,c)),(s=r[3])&&t.push(new Ie(s,h,u,l,c))}e.push(i)}for(;i=e.pop();)n(i.node,i.x0,i.y0,i.x1,i.y1);return this}function Mf(n){return n[0]}function Sf(n){return arguments.length?(this._x=n,this):this._x}function wf(n){return n[1]}function Tf(n){return arguments.length?(this._y=n,this):this._y}function as(n,t,e){var i=new Ac(t??Mf,e??wf,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function Ac(n,t,e,i,r,s){this._x=n,this._y=t,this._x0=e,this._y0=i,this._x1=r,this._y1=s,this._root=void 0}function Ef(n){for(var t={data:n.data},e=t;n=n.next;)e=e.next={data:n.data};return t}var We=as.prototype=Ac.prototype;We.copy=function(){var n=new Ac(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,e,i;if(!t)return n;if(!t.length)return n._root=Ef(t),n;for(e=[{source:t,target:n._root=new Array(4)}];t=e.pop();)for(var r=0;r<4;++r)(i=t.source[r])&&(i.length?e.push({source:i,target:t.target[r]=new Array(4)}):t.target[r]=Ef(i));return n};We.add=cf;We.addAll=uf;We.cover=ff;We.data=df;We.extent=pf;We.find=mf;We.remove=gf;We.removeAll=xf;We.root=_f;We.size=yf;We.visit=vf;We.visitAfter=bf;We.x=Sf;We.y=Tf;function Af(n){let t=+this._x.call(null,n),e=+this._y.call(null,n),i=+this._z.call(null,n);return Cf(this.cover(t,e,i),t,e,i,n)}function Cf(n,t,e,i,r){if(isNaN(t)||isNaN(e)||isNaN(i))return n;var s,o=n._root,a={data:r},l=n._x0,c=n._y0,h=n._z0,u=n._x1,f=n._y1,d=n._z1,m,_,g,p,M,v,b,S,T,R,N;if(!o)return n._root=a,n;for(;o.length;)if((b=t>=(m=(l+u)/2))?l=m:u=m,(S=e>=(_=(c+f)/2))?c=_:f=_,(T=i>=(g=(h+d)/2))?h=g:d=g,s=o,!(o=o[R=T<<2|S<<1|b]))return s[R]=a,n;if(p=+n._x.call(null,o.data),M=+n._y.call(null,o.data),v=+n._z.call(null,o.data),t===p&&e===M&&i===v)return a.next=o,s?s[R]=a:n._root=a,n;do s=s?s[R]=new Array(8):n._root=new Array(8),(b=t>=(m=(l+u)/2))?l=m:u=m,(S=e>=(_=(c+f)/2))?c=_:f=_,(T=i>=(g=(h+d)/2))?h=g:d=g;while((R=T<<2|S<<1|b)===(N=(v>=g)<<2|(M>=_)<<1|p>=m));return s[N]=o,s[R]=a,n}function Rf(n){Array.isArray(n)||(n=Array.from(n));let t=n.length,e=new Float64Array(t),i=new Float64Array(t),r=new Float64Array(t),s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,h=-1/0;for(let u=0,f,d,m,_;u<t;++u)isNaN(d=+this._x.call(null,f=n[u]))||isNaN(m=+this._y.call(null,f))||isNaN(_=+this._z.call(null,f))||(e[u]=d,i[u]=m,r[u]=_,d<s&&(s=d),d>l&&(l=d),m<o&&(o=m),m>c&&(c=m),_<a&&(a=_),_>h&&(h=_));if(s>l||o>c||a>h)return this;this.cover(s,o,a).cover(l,c,h);for(let u=0;u<t;++u)Cf(this,e[u],i[u],r[u],n[u]);return this}function If(n,t,e){if(isNaN(n=+n)||isNaN(t=+t)||isNaN(e=+e))return this;var i=this._x0,r=this._y0,s=this._z0,o=this._x1,a=this._y1,l=this._z1;if(isNaN(i))o=(i=Math.floor(n))+1,a=(r=Math.floor(t))+1,l=(s=Math.floor(e))+1;else{for(var c=o-i||1,h=this._root,u,f;i>n||n>=o||r>t||t>=a||s>e||e>=l;)switch(f=(e<s)<<2|(t<r)<<1|n<i,u=new Array(8),u[f]=h,h=u,c*=2,f){case 0:o=i+c,a=r+c,l=s+c;break;case 1:i=o-c,a=r+c,l=s+c;break;case 2:o=i+c,r=a-c,l=s+c;break;case 3:i=o-c,r=a-c,l=s+c;break;case 4:o=i+c,a=r+c,s=l-c;break;case 5:i=o-c,a=r+c,s=l-c;break;case 6:o=i+c,r=a-c,s=l-c;break;case 7:i=o-c,r=a-c,s=l-c;break}this._root&&this._root.length&&(this._root=h)}return this._x0=i,this._y0=r,this._z0=s,this._x1=o,this._y1=a,this._z1=l,this}function Pf(){var n=[];return this.visit(function(t){if(!t.length)do n.push(t.data);while(t=t.next)}),n}function Df(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function Qt(n,t,e,i,r,s,o){this.node=n,this.x0=t,this.y0=e,this.z0=i,this.x1=r,this.y1=s,this.z1=o}function Lf(n,t,e,i){var r,s=this._x0,o=this._y0,a=this._z0,l,c,h,u,f,d,m=this._x1,_=this._y1,g=this._z1,p=[],M=this._root,v,b;for(M&&p.push(new Qt(M,s,o,a,m,_,g)),i==null?i=1/0:(s=n-i,o=t-i,a=e-i,m=n+i,_=t+i,g=e+i,i*=i);v=p.pop();)if(!(!(M=v.node)||(l=v.x0)>m||(c=v.y0)>_||(h=v.z0)>g||(u=v.x1)<s||(f=v.y1)<o||(d=v.z1)<a))if(M.length){var S=(l+u)/2,T=(c+f)/2,R=(h+d)/2;p.push(new Qt(M[7],S,T,R,u,f,d),new Qt(M[6],l,T,R,S,f,d),new Qt(M[5],S,c,R,u,T,d),new Qt(M[4],l,c,R,S,T,d),new Qt(M[3],S,T,h,u,f,R),new Qt(M[2],l,T,h,S,f,R),new Qt(M[1],S,c,h,u,T,R),new Qt(M[0],l,c,h,S,T,R)),(b=(e>=R)<<2|(t>=T)<<1|n>=S)&&(v=p[p.length-1],p[p.length-1]=p[p.length-1-b],p[p.length-1-b]=v)}else{var N=n-+this._x.call(null,M.data),w=t-+this._y.call(null,M.data),A=e-+this._z.call(null,M.data),D=N*N+w*w+A*A;if(D<i){var B=Math.sqrt(i=D);s=n-B,o=t-B,a=e-B,m=n+B,_=t+B,g=e+B,r=M.data}}return r}var _0=(n,t,e,i,r,s)=>Math.sqrt((n-i)**2+(t-r)**2+(e-s)**2);function Nf(n,t,e,i){let r=[],s=n-i,o=t-i,a=e-i,l=n+i,c=t+i,h=e+i;return this.visit((u,f,d,m,_,g,p)=>{if(!u.length)do{let M=u.data;_0(n,t,e,this._x(M),this._y(M),this._z(M))<=i&&r.push(M)}while(u=u.next);return f>l||d>c||m>h||_<s||g<o||p<a}),r}function Uf(n){if(isNaN(f=+this._x.call(null,n))||isNaN(d=+this._y.call(null,n))||isNaN(m=+this._z.call(null,n)))return this;var t,e=this._root,i,r,s,o=this._x0,a=this._y0,l=this._z0,c=this._x1,h=this._y1,u=this._z1,f,d,m,_,g,p,M,v,b,S,T;if(!e)return this;if(e.length)for(;;){if((M=f>=(_=(o+c)/2))?o=_:c=_,(v=d>=(g=(a+h)/2))?a=g:h=g,(b=m>=(p=(l+u)/2))?l=p:u=p,t=e,!(e=e[S=b<<2|v<<1|M]))return this;if(!e.length)break;(t[S+1&7]||t[S+2&7]||t[S+3&7]||t[S+4&7]||t[S+5&7]||t[S+6&7]||t[S+7&7])&&(i=t,T=S)}for(;e.data!==n;)if(r=e,!(e=e.next))return this;return(s=e.next)&&delete e.next,r?(s?r.next=s:delete r.next,this):t?(s?t[S]=s:delete t[S],(e=t[0]||t[1]||t[2]||t[3]||t[4]||t[5]||t[6]||t[7])&&e===(t[7]||t[6]||t[5]||t[4]||t[3]||t[2]||t[1]||t[0])&&!e.length&&(i?i[T]=e:this._root=e),this):(this._root=s,this)}function Ff(n){for(var t=0,e=n.length;t<e;++t)this.remove(n[t]);return this}function Of(){return this._root}function Bf(){var n=0;return this.visit(function(t){if(!t.length)do++n;while(t=t.next)}),n}function zf(n){var t=[],e,i=this._root,r,s,o,a,l,c,h;for(i&&t.push(new Qt(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));e=t.pop();)if(!n(i=e.node,s=e.x0,o=e.y0,a=e.z0,l=e.x1,c=e.y1,h=e.z1)&&i.length){var u=(s+l)/2,f=(o+c)/2,d=(a+h)/2;(r=i[7])&&t.push(new Qt(r,u,f,d,l,c,h)),(r=i[6])&&t.push(new Qt(r,s,f,d,u,c,h)),(r=i[5])&&t.push(new Qt(r,u,o,d,l,f,h)),(r=i[4])&&t.push(new Qt(r,s,o,d,u,f,h)),(r=i[3])&&t.push(new Qt(r,u,f,a,l,c,d)),(r=i[2])&&t.push(new Qt(r,s,f,a,u,c,d)),(r=i[1])&&t.push(new Qt(r,u,o,a,l,f,d)),(r=i[0])&&t.push(new Qt(r,s,o,a,u,f,d))}return this}function kf(n){var t=[],e=[],i;for(this._root&&t.push(new Qt(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=t.pop();){var r=i.node;if(r.length){var s,o=i.x0,a=i.y0,l=i.z0,c=i.x1,h=i.y1,u=i.z1,f=(o+c)/2,d=(a+h)/2,m=(l+u)/2;(s=r[0])&&t.push(new Qt(s,o,a,l,f,d,m)),(s=r[1])&&t.push(new Qt(s,f,a,l,c,d,m)),(s=r[2])&&t.push(new Qt(s,o,d,l,f,h,m)),(s=r[3])&&t.push(new Qt(s,f,d,l,c,h,m)),(s=r[4])&&t.push(new Qt(s,o,a,m,f,d,u)),(s=r[5])&&t.push(new Qt(s,f,a,m,c,d,u)),(s=r[6])&&t.push(new Qt(s,o,d,m,f,h,u)),(s=r[7])&&t.push(new Qt(s,f,d,m,c,h,u))}e.push(i)}for(;i=e.pop();)n(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function Vf(n){return n[0]}function Gf(n){return arguments.length?(this._x=n,this):this._x}function Hf(n){return n[1]}function Wf(n){return arguments.length?(this._y=n,this):this._y}function Xf(n){return n[2]}function qf(n){return arguments.length?(this._z=n,this):this._z}function ls(n,t,e,i){var r=new Cc(t??Vf,e??Hf,i??Xf,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function Cc(n,t,e,i,r,s,o,a,l){this._x=n,this._y=t,this._z=e,this._x0=i,this._y0=r,this._z0=s,this._x1=o,this._y1=a,this._z1=l,this._root=void 0}function Yf(n){for(var t={data:n.data},e=t;n=n.next;)e=e.next={data:n.data};return t}var Le=ls.prototype=Cc.prototype;Le.copy=function(){var n=new Cc(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),t=this._root,e,i;if(!t)return n;if(!t.length)return n._root=Yf(t),n;for(e=[{source:t,target:n._root=new Array(8)}];t=e.pop();)for(var r=0;r<8;++r)(i=t.source[r])&&(i.length?e.push({source:i,target:t.target[r]=new Array(8)}):t.target[r]=Yf(i));return n};Le.add=Af;Le.addAll=Rf;Le.cover=If;Le.data=Pf;Le.extent=Df;Le.find=Lf;Le.findAllWithinRadius=Nf;Le.remove=Uf;Le.removeAll=Ff;Le.root=Of;Le.size=Bf;Le.visit=zf;Le.visitAfter=kf;Le.x=Gf;Le.y=Wf;Le.z=qf;function Ni(n){return function(){return n}}function Mn(n){return(n()-.5)*1e-6}function y0(n){return n.index}function Zf(n,t){var e=n.get(t);if(!e)throw new Error("node not found: "+t);return e}function cs(n){var t=y0,e=f,i,r=Ni(30),s,o,a,l,c,h,u=1;n==null&&(n=[]);function f(p){return 1/Math.min(l[p.source.index],l[p.target.index])}function d(p){for(var M=0,v=n.length;M<u;++M)for(var b=0,S,T,R,N=0,w=0,A=0,D,B;b<v;++b)S=n[b],T=S.source,R=S.target,N=R.x+R.vx-T.x-T.vx||Mn(h),a>1&&(w=R.y+R.vy-T.y-T.vy||Mn(h)),a>2&&(A=R.z+R.vz-T.z-T.vz||Mn(h)),D=Math.sqrt(N*N+w*w+A*A),D=(D-s[b])/D*p*i[b],N*=D,w*=D,A*=D,R.vx-=N*(B=c[b]),a>1&&(R.vy-=w*B),a>2&&(R.vz-=A*B),T.vx+=N*(B=1-B),a>1&&(T.vy+=w*B),a>2&&(T.vz+=A*B)}function m(){if(o){var p,M=o.length,v=n.length,b=new Map(o.map((T,R)=>[t(T,R,o),T])),S;for(p=0,l=new Array(M);p<v;++p)S=n[p],S.index=p,typeof S.source!="object"&&(S.source=Zf(b,S.source)),typeof S.target!="object"&&(S.target=Zf(b,S.target)),l[S.source.index]=(l[S.source.index]||0)+1,l[S.target.index]=(l[S.target.index]||0)+1;for(p=0,c=new Array(v);p<v;++p)S=n[p],c[p]=l[S.source.index]/(l[S.source.index]+l[S.target.index]);i=new Array(v),_(),s=new Array(v),g()}}function _(){if(o)for(var p=0,M=n.length;p<M;++p)i[p]=+e(n[p],p,n)}function g(){if(o)for(var p=0,M=n.length;p<M;++p)s[p]=+r(n[p],p,n)}return d.initialize=function(p,...M){o=p,h=M.find(v=>typeof v=="function")||Math.random,a=M.find(v=>[1,2,3].includes(v))||2,m()},d.links=function(p){return arguments.length?(n=p,m(),d):n},d.id=function(p){return arguments.length?(t=p,d):t},d.iterations=function(p){return arguments.length?(u=+p,d):u},d.strength=function(p){return arguments.length?(e=typeof p=="function"?p:Ni(+p),_(),d):e},d.distance=function(p){return arguments.length?(r=typeof p=="function"?p:Ni(+p),g(),d):r},d}var v0={value:()=>{}};function Jf(){for(var n=0,t=arguments.length,e={},i;n<t;++n){if(!(i=arguments[n]+"")||i in e||/[\s.]/.test(i))throw new Error("illegal type: "+i);e[i]=[]}return new Fo(e)}function Fo(n){this._=n}function b0(n,t){return n.trim().split(/^|\s+/).map(function(e){var i="",r=e.indexOf(".");if(r>=0&&(i=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:i}})}Fo.prototype=Jf.prototype={constructor:Fo,on:function(n,t){var e=this._,i=b0(n+"",e),r,s=-1,o=i.length;if(arguments.length<2){for(;++s<o;)if((r=(n=i[s]).type)&&(r=M0(e[r],n.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<o;)if(r=(n=i[s]).type)e[r]=$f(e[r],n.name,t);else if(t==null)for(r in e)e[r]=$f(e[r],n.name,null);return this},copy:function(){var n={},t=this._;for(var e in t)n[e]=t[e].slice();return new Fo(n)},call:function(n,t){if((r=arguments.length-2)>0)for(var e=new Array(r),i=0,r,s;i<r;++i)e[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(s=this._[n],i=0,r=s.length;i<r;++i)s[i].value.apply(t,e)},apply:function(n,t,e){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,s=i.length;r<s;++r)i[r].value.apply(t,e)}};function M0(n,t){for(var e=0,i=n.length,r;e<i;++e)if((r=n[e]).name===t)return r.value}function $f(n,t,e){for(var i=0,r=n.length;i<r;++i)if(n[i].name===t){n[i]=v0,n=n.slice(0,i).concat(n.slice(i+1));break}return e!=null&&n.push({name:t,value:e}),n}var Ui=Jf;var fr=0,us=0,hs=0,jf=1e3,Oo,fs,Bo=0,Fi=0,zo=0,ds=typeof performance=="object"&&performance.now?performance:Date,Qf=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function ms(){return Fi||(Qf(S0),Fi=ds.now()+zo)}function S0(){Fi=0}function ps(){this._call=this._time=this._next=null}ps.prototype=dr.prototype={constructor:ps,restart:function(n,t,e){if(typeof n!="function")throw new TypeError("callback is not a function");e=(e==null?ms():+e)+(t==null?0:+t),!this._next&&fs!==this&&(fs?fs._next=this:Oo=this,fs=this),this._call=n,this._time=e,Rc()},stop:function(){this._call&&(this._call=null,this._time=1/0,Rc())}};function dr(n,t,e){var i=new ps;return i.restart(n,t,e),i}function td(){ms(),++fr;for(var n=Oo,t;n;)(t=Fi-n._time)>=0&&n._call.call(void 0,t),n=n._next;--fr}function Kf(){Fi=(Bo=ds.now())+zo,fr=us=0;try{td()}finally{fr=0,T0(),Fi=0}}function w0(){var n=ds.now(),t=n-Bo;t>jf&&(zo-=t,Bo=n)}function T0(){for(var n,t=Oo,e,i=1/0;t;)t._call?(i>t._time&&(i=t._time),n=t,t=t._next):(e=t._next,t._next=null,t=n?n._next=e:Oo=e);fs=n,Rc(i)}function Rc(n){if(!fr){us&&(us=clearTimeout(us));var t=n-Fi;t>24?(n<1/0&&(us=setTimeout(Kf,n-ds.now()-zo)),hs&&(hs=clearInterval(hs))):(hs||(Bo=ds.now(),hs=setInterval(w0,jf)),fr=1,Qf(Kf))}}function ko(n,t,e){var i=new ps;return t=t==null?0:+t,i.restart(r=>{i.stop(),n(r+t)},t,e),i}function ed(){let n=1;return()=>(n=(1664525*n+1013904223)%4294967296)/4294967296}var nd=3;function Vo(n){return n.x}function Ic(n){return n.y}function id(n){return n.z}var E0=10,A0=Math.PI*(3-Math.sqrt(5)),C0=Math.PI*20/(9+Math.sqrt(221));function Oi(n,t){t=t||2;var e=Math.min(nd,Math.max(1,Math.round(t))),i,r=1,s=.001,o=1-Math.pow(s,1/300),a=0,l=.6,c=new Map,h=dr(d),u=Ui("tick","end"),f=ed();n==null&&(n=[]);function d(){m(),u.call("tick",i),r<s&&(h.stop(),u.call("end",i))}function m(p){var M,v=n.length,b;p===void 0&&(p=1);for(var S=0;S<p;++S)for(r+=(a-r)*o,c.forEach(function(T){T(r)}),M=0;M<v;++M)b=n[M],b.fx==null?b.x+=b.vx*=l:(b.x=b.fx,b.vx=0),e>1&&(b.fy==null?b.y+=b.vy*=l:(b.y=b.fy,b.vy=0)),e>2&&(b.fz==null?b.z+=b.vz*=l:(b.z=b.fz,b.vz=0));return i}function _(){for(var p=0,M=n.length,v;p<M;++p){if(v=n[p],v.index=p,v.fx!=null&&(v.x=v.fx),v.fy!=null&&(v.y=v.fy),v.fz!=null&&(v.z=v.fz),isNaN(v.x)||e>1&&isNaN(v.y)||e>2&&isNaN(v.z)){var b=E0*(e>2?Math.cbrt(.5+p):e>1?Math.sqrt(.5+p):p),S=p*A0,T=p*C0;e===1?v.x=b:e===2?(v.x=b*Math.cos(S),v.y=b*Math.sin(S)):(v.x=b*Math.sin(S)*Math.cos(T),v.y=b*Math.cos(S),v.z=b*Math.sin(S)*Math.sin(T))}(isNaN(v.vx)||e>1&&isNaN(v.vy)||e>2&&isNaN(v.vz))&&(v.vx=0,e>1&&(v.vy=0),e>2&&(v.vz=0))}}function g(p){return p.initialize&&p.initialize(n,f,e),p}return _(),i={tick:m,restart:function(){return h.restart(d),i},stop:function(){return h.stop(),i},numDimensions:function(p){return arguments.length?(e=Math.min(nd,Math.max(1,Math.round(p))),c.forEach(g),i):e},nodes:function(p){return arguments.length?(n=p,_(),c.forEach(g),i):n},alpha:function(p){return arguments.length?(r=+p,i):r},alphaMin:function(p){return arguments.length?(s=+p,i):s},alphaDecay:function(p){return arguments.length?(o=+p,i):+o},alphaTarget:function(p){return arguments.length?(a=+p,i):a},velocityDecay:function(p){return arguments.length?(l=1-p,i):1-l},randomSource:function(p){return arguments.length?(f=p,c.forEach(g),i):f},force:function(p,M){return arguments.length>1?(M==null?c.delete(p):c.set(p,g(M)),i):c.get(p)},find:function(){var p=Array.prototype.slice.call(arguments),M=p.shift()||0,v=(e>1?p.shift():null)||0,b=(e>2?p.shift():null)||0,S=p.shift()||1/0,T=0,R=n.length,N,w,A,D,B,G;for(S*=S,T=0;T<R;++T)B=n[T],N=M-B.x,w=v-(B.y||0),A=b-(B.z||0),D=N*N+w*w+A*A,D<S&&(G=B,S=D);return G},on:function(p,M){return arguments.length>1?(u.on(p,M),i):u.on(p)}}}function gs(){var n,t,e,i,r,s=Ni(-30),o,a=1,l=1/0,c=.81;function h(m){var _,g=n.length,p=(t===1?os(n,Vo):t===2?as(n,Vo,Ic):t===3?ls(n,Vo,Ic,id):null).visitAfter(f);for(r=m,_=0;_<g;++_)e=n[_],p.visit(d)}function u(){if(n){var m,_=n.length,g;for(o=new Array(_),m=0;m<_;++m)g=n[m],o[g.index]=+s(g,m,n)}}function f(m){var _=0,g,p,M=0,v,b,S,T,R=m.length;if(R){for(v=b=S=T=0;T<R;++T)(g=m[T])&&(p=Math.abs(g.value))&&(_+=g.value,M+=p,v+=p*(g.x||0),b+=p*(g.y||0),S+=p*(g.z||0));_*=Math.sqrt(4/R),m.x=v/M,t>1&&(m.y=b/M),t>2&&(m.z=S/M)}else{g=m,g.x=g.data.x,t>1&&(g.y=g.data.y),t>2&&(g.z=g.data.z);do _+=o[g.data.index];while(g=g.next)}m.value=_}function d(m,_,g,p,M){if(!m.value)return!0;var v=[g,p,M][t-1],b=m.x-e.x,S=t>1?m.y-e.y:0,T=t>2?m.z-e.z:0,R=v-_,N=b*b+S*S+T*T;if(R*R/c<N)return N<l&&(b===0&&(b=Mn(i),N+=b*b),t>1&&S===0&&(S=Mn(i),N+=S*S),t>2&&T===0&&(T=Mn(i),N+=T*T),N<a&&(N=Math.sqrt(a*N)),e.vx+=b*m.value*r/N,t>1&&(e.vy+=S*m.value*r/N),t>2&&(e.vz+=T*m.value*r/N)),!0;if(m.length||N>=l)return;(m.data!==e||m.next)&&(b===0&&(b=Mn(i),N+=b*b),t>1&&S===0&&(S=Mn(i),N+=S*S),t>2&&T===0&&(T=Mn(i),N+=T*T),N<a&&(N=Math.sqrt(a*N)));do m.data!==e&&(R=o[m.data.index]*r/N,e.vx+=b*R,t>1&&(e.vy+=S*R),t>2&&(e.vz+=T*R));while(m=m.next)}return h.initialize=function(m,..._){n=m,i=_.find(g=>typeof g=="function")||Math.random,t=_.find(g=>[1,2,3].includes(g))||2,u()},h.strength=function(m){return arguments.length?(s=typeof m=="function"?m:Ni(+m),u(),h):s},h.distanceMin=function(m){return arguments.length?(a=m*m,h):Math.sqrt(a)},h.distanceMax=function(m){return arguments.length?(l=m*m,h):Math.sqrt(l)},h.theta=function(m){return arguments.length?(c=m*m,h):Math.sqrt(c)},h}var Go="http://www.w3.org/1999/xhtml",Pc={svg:"http://www.w3.org/2000/svg",xhtml:Go,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function qn(n){var t=n+="",e=t.indexOf(":");return e>=0&&(t=n.slice(0,e))!=="xmlns"&&(n=n.slice(e+1)),Pc.hasOwnProperty(t)?{space:Pc[t],local:n}:n}function R0(n){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===Go&&t.documentElement.namespaceURI===Go?t.createElement(n):t.createElementNS(e,n)}}function I0(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function Ho(n){var t=qn(n);return(t.local?I0:R0)(t)}function P0(){}function Bi(n){return n==null?P0:function(){return this.querySelector(n)}}function rd(n){typeof n!="function"&&(n=Bi(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=i[r]=new Array(o),l,c,h=0;h<o;++h)(l=s[h])&&(c=n.call(l,l.__data__,h,s))&&("__data__"in l&&(c.__data__=l.__data__),a[h]=c);return new ve(i,this._parents)}function Dc(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function D0(){return[]}function xs(n){return n==null?D0:function(){return this.querySelectorAll(n)}}function L0(n){return function(){return Dc(n.apply(this,arguments))}}function sd(n){typeof n=="function"?n=L0(n):n=xs(n);for(var t=this._groups,e=t.length,i=[],r=[],s=0;s<e;++s)for(var o=t[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&(i.push(n.call(l,l.__data__,c,o)),r.push(l));return new ve(i,r)}function _s(n){return function(){return this.matches(n)}}function Wo(n){return function(t){return t.matches(n)}}var N0=Array.prototype.find;function U0(n){return function(){return N0.call(this.children,n)}}function F0(){return this.firstElementChild}function od(n){return this.select(n==null?F0:U0(typeof n=="function"?n:Wo(n)))}var O0=Array.prototype.filter;function B0(){return Array.from(this.children)}function z0(n){return function(){return O0.call(this.children,n)}}function ad(n){return this.selectAll(n==null?B0:z0(typeof n=="function"?n:Wo(n)))}function ld(n){typeof n!="function"&&(n=_s(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=i[r]=[],l,c=0;c<o;++c)(l=s[c])&&n.call(l,l.__data__,c,s)&&a.push(l);return new ve(i,this._parents)}function Xo(n){return new Array(n.length)}function cd(){return new ve(this._enter||this._groups.map(Xo),this._parents)}function ys(n,t){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=t}ys.prototype={constructor:ys,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,t){return this._parent.insertBefore(n,t)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function hd(n){return function(){return n}}function k0(n,t,e,i,r,s){for(var o=0,a,l=t.length,c=s.length;o<c;++o)(a=t[o])?(a.__data__=s[o],i[o]=a):e[o]=new ys(n,s[o]);for(;o<l;++o)(a=t[o])&&(r[o]=a)}function V0(n,t,e,i,r,s,o){var a,l,c=new Map,h=t.length,u=s.length,f=new Array(h),d;for(a=0;a<h;++a)(l=t[a])&&(f[a]=d=o.call(l,l.__data__,a,t)+"",c.has(d)?r[a]=l:c.set(d,l));for(a=0;a<u;++a)d=o.call(n,s[a],a,s)+"",(l=c.get(d))?(i[a]=l,l.__data__=s[a],c.delete(d)):e[a]=new ys(n,s[a]);for(a=0;a<h;++a)(l=t[a])&&c.get(f[a])===l&&(r[a]=l)}function G0(n){return n.__data__}function ud(n,t){if(!arguments.length)return Array.from(this,G0);var e=t?V0:k0,i=this._parents,r=this._groups;typeof n!="function"&&(n=hd(n));for(var s=r.length,o=new Array(s),a=new Array(s),l=new Array(s),c=0;c<s;++c){var h=i[c],u=r[c],f=u.length,d=H0(n.call(h,h&&h.__data__,c,i)),m=d.length,_=a[c]=new Array(m),g=o[c]=new Array(m),p=l[c]=new Array(f);e(h,u,_,g,p,d,t);for(var M=0,v=0,b,S;M<m;++M)if(b=_[M]){for(M>=v&&(v=M+1);!(S=g[v])&&++v<m;);b._next=S||null}}return o=new ve(o,i),o._enter=a,o._exit=l,o}function H0(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function fd(){return new ve(this._exit||this._groups.map(Xo),this._parents)}function dd(n,t,e){var i=this.enter(),r=this,s=this.exit();return typeof n=="function"?(i=n(i),i&&(i=i.selection())):i=i.append(n+""),t!=null&&(r=t(r),r&&(r=r.selection())),e==null?s.remove():e(s),i&&r?i.merge(r).order():r}function pd(n){for(var t=n.selection?n.selection():n,e=this._groups,i=t._groups,r=e.length,s=i.length,o=Math.min(r,s),a=new Array(r),l=0;l<o;++l)for(var c=e[l],h=i[l],u=c.length,f=a[l]=new Array(u),d,m=0;m<u;++m)(d=c[m]||h[m])&&(f[m]=d);for(;l<r;++l)a[l]=e[l];return new ve(a,this._parents)}function md(){for(var n=this._groups,t=-1,e=n.length;++t<e;)for(var i=n[t],r=i.length-1,s=i[r],o;--r>=0;)(o=i[r])&&(s&&o.compareDocumentPosition(s)^4&&s.parentNode.insertBefore(o,s),s=o);return this}function gd(n){n||(n=W0);function t(u,f){return u&&f?n(u.__data__,f.__data__):!u-!f}for(var e=this._groups,i=e.length,r=new Array(i),s=0;s<i;++s){for(var o=e[s],a=o.length,l=r[s]=new Array(a),c,h=0;h<a;++h)(c=o[h])&&(l[h]=c);l.sort(t)}return new ve(r,this._parents).order()}function W0(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function xd(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function _d(){return Array.from(this)}function yd(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],r=0,s=i.length;r<s;++r){var o=i[r];if(o)return o}return null}function vd(){let n=0;for(let t of this)++n;return n}function bd(){return!this.node()}function Md(n){for(var t=this._groups,e=0,i=t.length;e<i;++e)for(var r=t[e],s=0,o=r.length,a;s<o;++s)(a=r[s])&&n.call(a,a.__data__,s,r);return this}function X0(n){return function(){this.removeAttribute(n)}}function q0(n){return function(){this.removeAttributeNS(n.space,n.local)}}function Y0(n,t){return function(){this.setAttribute(n,t)}}function Z0(n,t){return function(){this.setAttributeNS(n.space,n.local,t)}}function $0(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(n):this.setAttribute(n,e)}}function J0(n,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}}function Sd(n,t){var e=qn(n);if(arguments.length<2){var i=this.node();return e.local?i.getAttributeNS(e.space,e.local):i.getAttribute(e)}return this.each((t==null?e.local?q0:X0:typeof t=="function"?e.local?J0:$0:e.local?Z0:Y0)(e,t))}function qo(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function K0(n){return function(){this.style.removeProperty(n)}}function j0(n,t,e){return function(){this.style.setProperty(n,t,e)}}function Q0(n,t,e){return function(){var i=t.apply(this,arguments);i==null?this.style.removeProperty(n):this.style.setProperty(n,i,e)}}function wd(n,t,e){return arguments.length>1?this.each((t==null?K0:typeof t=="function"?Q0:j0)(n,t,e??"")):ai(this.node(),n)}function ai(n,t){return n.style.getPropertyValue(t)||qo(n).getComputedStyle(n,null).getPropertyValue(t)}function tx(n){return function(){delete this[n]}}function ex(n,t){return function(){this[n]=t}}function nx(n,t){return function(){var e=t.apply(this,arguments);e==null?delete this[n]:this[n]=e}}function Td(n,t){return arguments.length>1?this.each((t==null?tx:typeof t=="function"?nx:ex)(n,t)):this.node()[n]}function Ed(n){return n.trim().split(/^|\s+/)}function Lc(n){return n.classList||new Ad(n)}function Ad(n){this._node=n,this._names=Ed(n.getAttribute("class")||"")}Ad.prototype={add:function(n){var t=this._names.indexOf(n);t<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var t=this._names.indexOf(n);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function Cd(n,t){for(var e=Lc(n),i=-1,r=t.length;++i<r;)e.add(t[i])}function Rd(n,t){for(var e=Lc(n),i=-1,r=t.length;++i<r;)e.remove(t[i])}function ix(n){return function(){Cd(this,n)}}function rx(n){return function(){Rd(this,n)}}function sx(n,t){return function(){(t.apply(this,arguments)?Cd:Rd)(this,n)}}function Id(n,t){var e=Ed(n+"");if(arguments.length<2){for(var i=Lc(this.node()),r=-1,s=e.length;++r<s;)if(!i.contains(e[r]))return!1;return!0}return this.each((typeof t=="function"?sx:t?ix:rx)(e,t))}function ox(){this.textContent=""}function ax(n){return function(){this.textContent=n}}function lx(n){return function(){var t=n.apply(this,arguments);this.textContent=t??""}}function Pd(n){return arguments.length?this.each(n==null?ox:(typeof n=="function"?lx:ax)(n)):this.node().textContent}function cx(){this.innerHTML=""}function hx(n){return function(){this.innerHTML=n}}function ux(n){return function(){var t=n.apply(this,arguments);this.innerHTML=t??""}}function Dd(n){return arguments.length?this.each(n==null?cx:(typeof n=="function"?ux:hx)(n)):this.node().innerHTML}function fx(){this.nextSibling&&this.parentNode.appendChild(this)}function Ld(){return this.each(fx)}function dx(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Nd(){return this.each(dx)}function Ud(n){var t=typeof n=="function"?n:Ho(n);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function px(){return null}function Fd(n,t){var e=typeof n=="function"?n:Ho(n),i=t==null?px:typeof t=="function"?t:Bi(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),i.apply(this,arguments)||null)})}function mx(){var n=this.parentNode;n&&n.removeChild(this)}function Od(){return this.each(mx)}function gx(){var n=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function xx(){var n=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(n,this.nextSibling):n}function Bd(n){return this.select(n?xx:gx)}function zd(n){return arguments.length?this.property("__data__",n):this.node().__data__}function _x(n){return function(t){n.call(this,t,this.__data__)}}function yx(n){return n.trim().split(/^|\s+/).map(function(t){var e="",i=t.indexOf(".");return i>=0&&(e=t.slice(i+1),t=t.slice(0,i)),{type:t,name:e}})}function vx(n){return function(){var t=this.__on;if(t){for(var e=0,i=-1,r=t.length,s;e<r;++e)s=t[e],(!n.type||s.type===n.type)&&s.name===n.name?this.removeEventListener(s.type,s.listener,s.options):t[++i]=s;++i?t.length=i:delete this.__on}}}function bx(n,t,e){return function(){var i=this.__on,r,s=_x(t);if(i){for(var o=0,a=i.length;o<a;++o)if((r=i[o]).type===n.type&&r.name===n.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=s,r.options=e),r.value=t;return}}this.addEventListener(n.type,s,e),r={type:n.type,name:n.name,value:t,listener:s,options:e},i?i.push(r):this.__on=[r]}}function kd(n,t,e){var i=yx(n+""),r,s=i.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,h;l<c;++l)for(r=0,h=a[l];r<s;++r)if((o=i[r]).type===h.type&&o.name===h.name)return h.value}return}for(a=t?bx:vx,r=0;r<s;++r)this.each(a(i[r],t,e));return this}function Vd(n,t,e){var i=qo(n),r=i.CustomEvent;typeof r=="function"?r=new r(t,e):(r=i.document.createEvent("Event"),e?(r.initEvent(t,e.bubbles,e.cancelable),r.detail=e.detail):r.initEvent(t,!1,!1)),n.dispatchEvent(r)}function Mx(n,t){return function(){return Vd(this,n,t)}}function Sx(n,t){return function(){return Vd(this,n,t.apply(this,arguments))}}function Gd(n,t){return this.each((typeof t=="function"?Sx:Mx)(n,t))}function*Hd(){for(var n=this._groups,t=0,e=n.length;t<e;++t)for(var i=n[t],r=0,s=i.length,o;r<s;++r)(o=i[r])&&(yield o)}var Nc=[null];function ve(n,t){this._groups=n,this._parents=t}function Wd(){return new ve([[document.documentElement]],Nc)}function wx(){return this}ve.prototype=Wd.prototype={constructor:ve,select:rd,selectAll:sd,selectChild:od,selectChildren:ad,filter:ld,data:ud,enter:cd,exit:fd,join:dd,merge:pd,selection:wx,order:md,sort:gd,call:xd,nodes:_d,node:yd,size:vd,empty:bd,each:Md,attr:Sd,style:wd,property:Td,classed:Id,text:Pd,html:Dd,raise:Ld,lower:Nd,append:Ud,insert:Fd,remove:Od,clone:Bd,datum:zd,on:kd,dispatch:Gd,[Symbol.iterator]:Hd};var Yn=Wd;function Se(n){return typeof n=="string"?new ve([[document.querySelector(n)]],[document.documentElement]):new ve([[n]],Nc)}function Xd(n){let t;for(;t=n.sourceEvent;)n=t;return n}function je(n,t){if(n=Xd(n),t===void 0&&(t=n.currentTarget),t){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var i=e.createSVGPoint();return i.x=n.clientX,i.y=n.clientY,i=i.matrixTransform(t.getScreenCTM().inverse()),[i.x,i.y]}if(t.getBoundingClientRect){var r=t.getBoundingClientRect();return[n.clientX-r.left-t.clientLeft,n.clientY-r.top-t.clientTop]}}return[n.pageX,n.pageY]}var Yo={capture:!0,passive:!1};function Zo(n){n.preventDefault(),n.stopImmediatePropagation()}function Uc(n){var t=n.document.documentElement,e=Se(n).on("dragstart.drag",Zo,Yo);"onselectstart"in t?e.on("selectstart.drag",Zo,Yo):(t.__noselect=t.style.MozUserSelect,t.style.MozUserSelect="none")}function Fc(n,t){var e=n.document.documentElement,i=Se(n).on("dragstart.drag",null);t&&(i.on("click.drag",Zo,Yo),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in e?i.on("selectstart.drag",null):(e.style.MozUserSelect=e.__noselect,delete e.__noselect)}function $o(n,t,e){n.prototype=t.prototype=e,e.constructor=n}function Oc(n,t){var e=Object.create(n.prototype);for(var i in t)e[i]=t[i];return e}function Ms(){}var vs=.7,jo=1/vs,pr="\\s*([+-]?\\d+)\\s*",bs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ln="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Tx=/^#([0-9a-f]{3,8})$/,Ex=new RegExp(`^rgb\\(${pr},${pr},${pr}\\)$`),Ax=new RegExp(`^rgb\\(${Ln},${Ln},${Ln}\\)$`),Cx=new RegExp(`^rgba\\(${pr},${pr},${pr},${bs}\\)$`),Rx=new RegExp(`^rgba\\(${Ln},${Ln},${Ln},${bs}\\)$`),Ix=new RegExp(`^hsl\\(${bs},${Ln},${Ln}\\)$`),Px=new RegExp(`^hsla\\(${bs},${Ln},${Ln},${bs}\\)$`),qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};$o(Ms,li,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Yd,formatHex:Yd,formatHex8:Dx,formatHsl:Lx,formatRgb:Zd,toString:Zd});function Yd(){return this.rgb().formatHex()}function Dx(){return this.rgb().formatHex8()}function Lx(){return tp(this).formatHsl()}function Zd(){return this.rgb().formatRgb()}function li(n){var t,e;return n=(n+"").trim().toLowerCase(),(t=Tx.exec(n))?(e=t[1].length,t=parseInt(t[1],16),e===6?$d(t):e===3?new Qe(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?Jo(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?Jo(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Ex.exec(n))?new Qe(t[1],t[2],t[3],1):(t=Ax.exec(n))?new Qe(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Cx.exec(n))?Jo(t[1],t[2],t[3],t[4]):(t=Rx.exec(n))?Jo(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Ix.exec(n))?jd(t[1],t[2]/100,t[3]/100,1):(t=Px.exec(n))?jd(t[1],t[2]/100,t[3]/100,t[4]):qd.hasOwnProperty(n)?$d(qd[n]):n==="transparent"?new Qe(NaN,NaN,NaN,0):null}function $d(n){return new Qe(n>>16&255,n>>8&255,n&255,1)}function Jo(n,t,e,i){return i<=0&&(n=t=e=NaN),new Qe(n,t,e,i)}function Nx(n){return n instanceof Ms||(n=li(n)),n?(n=n.rgb(),new Qe(n.r,n.g,n.b,n.opacity)):new Qe}function mr(n,t,e,i){return arguments.length===1?Nx(n):new Qe(n,t,e,i??1)}function Qe(n,t,e,i){this.r=+n,this.g=+t,this.b=+e,this.opacity=+i}$o(Qe,mr,Oc(Ms,{brighter(n){return n=n==null?jo:Math.pow(jo,n),new Qe(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?vs:Math.pow(vs,n),new Qe(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new Qe(ki(this.r),ki(this.g),ki(this.b),Qo(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Jd,formatHex:Jd,formatHex8:Ux,formatRgb:Kd,toString:Kd}));function Jd(){return`#${zi(this.r)}${zi(this.g)}${zi(this.b)}`}function Ux(){return`#${zi(this.r)}${zi(this.g)}${zi(this.b)}${zi((isNaN(this.opacity)?1:this.opacity)*255)}`}function Kd(){let n=Qo(this.opacity);return`${n===1?"rgb(":"rgba("}${ki(this.r)}, ${ki(this.g)}, ${ki(this.b)}${n===1?")":`, ${n})`}`}function Qo(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function ki(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function zi(n){return n=ki(n),(n<16?"0":"")+n.toString(16)}function jd(n,t,e,i){return i<=0?n=t=e=NaN:e<=0||e>=1?n=t=NaN:t<=0&&(n=NaN),new Sn(n,t,e,i)}function tp(n){if(n instanceof Sn)return new Sn(n.h,n.s,n.l,n.opacity);if(n instanceof Ms||(n=li(n)),!n)return new Sn;if(n instanceof Sn)return n;n=n.rgb();var t=n.r/255,e=n.g/255,i=n.b/255,r=Math.min(t,e,i),s=Math.max(t,e,i),o=NaN,a=s-r,l=(s+r)/2;return a?(t===s?o=(e-i)/a+(e<i)*6:e===s?o=(i-t)/a+2:o=(t-e)/a+4,a/=l<.5?s+r:2-s-r,o*=60):a=l>0&&l<1?0:o,new Sn(o,a,l,n.opacity)}function ep(n,t,e,i){return arguments.length===1?tp(n):new Sn(n,t,e,i??1)}function Sn(n,t,e,i){this.h=+n,this.s=+t,this.l=+e,this.opacity=+i}$o(Sn,ep,Oc(Ms,{brighter(n){return n=n==null?jo:Math.pow(jo,n),new Sn(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?vs:Math.pow(vs,n),new Sn(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,t=isNaN(n)||isNaN(this.s)?0:this.s,e=this.l,i=e+(e<.5?e:1-e)*t,r=2*e-i;return new Qe(Bc(n>=240?n-240:n+120,r,i),Bc(n,r,i),Bc(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new Sn(Qd(this.h),Ko(this.s),Ko(this.l),Qo(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let n=Qo(this.opacity);return`${n===1?"hsl(":"hsla("}${Qd(this.h)}, ${Ko(this.s)*100}%, ${Ko(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Qd(n){return n=(n||0)%360,n<0?n+360:n}function Ko(n){return Math.max(0,Math.min(1,n||0))}function Bc(n,t,e){return(n<60?t+(e-t)*n/60:n<180?e:n<240?t+(e-t)*(240-n)/60:t)*255}function zc(n,t,e,i,r){var s=n*n,o=s*n;return((1-3*n+3*s-o)*t+(4-6*s+3*o)*e+(1+3*n+3*s-3*o)*i+o*r)/6}function np(n){var t=n.length-1;return function(e){var i=e<=0?e=0:e>=1?(e=1,t-1):Math.floor(e*t),r=n[i],s=n[i+1],o=i>0?n[i-1]:2*r-s,a=i<t-1?n[i+2]:2*s-r;return zc((e-i/t)*t,o,r,s,a)}}function ip(n){var t=n.length;return function(e){var i=Math.floor(((e%=1)<0?++e:e)*t),r=n[(i+t-1)%t],s=n[i%t],o=n[(i+1)%t],a=n[(i+2)%t];return zc((e-i/t)*t,r,s,o,a)}}var kc=n=>()=>n;function Fx(n,t){return function(e){return n+e*t}}function Ox(n,t,e){return n=Math.pow(n,e),t=Math.pow(t,e)-n,e=1/e,function(i){return Math.pow(n+i*t,e)}}function rp(n){return(n=+n)==1?ta:function(t,e){return e-t?Ox(t,e,n):kc(isNaN(t)?e:t)}}function ta(n,t){var e=t-n;return e?Fx(n,e):kc(isNaN(n)?t:n)}var ea=(function n(t){var e=rp(t);function i(r,s){var o=e((r=mr(r)).r,(s=mr(s)).r),a=e(r.g,s.g),l=e(r.b,s.b),c=ta(r.opacity,s.opacity);return function(h){return r.r=o(h),r.g=a(h),r.b=l(h),r.opacity=c(h),r+""}}return i.gamma=n,i})(1);function sp(n){return function(t){var e=t.length,i=new Array(e),r=new Array(e),s=new Array(e),o,a;for(o=0;o<e;++o)a=mr(t[o]),i[o]=a.r||0,r[o]=a.g||0,s[o]=a.b||0;return i=n(i),r=n(r),s=n(s),a.opacity=1,function(l){return a.r=i(l),a.g=r(l),a.b=s(l),a+""}}}var Bx=sp(np),zx=sp(ip);function mn(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}var Gc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Vc=new RegExp(Gc.source,"g");function kx(n){return function(){return n}}function Vx(n){return function(t){return n(t)+""}}function Hc(n,t){var e=Gc.lastIndex=Vc.lastIndex=0,i,r,s,o=-1,a=[],l=[];for(n=n+"",t=t+"";(i=Gc.exec(n))&&(r=Vc.exec(t));)(s=r.index)>e&&(s=t.slice(e,s),a[o]?a[o]+=s:a[++o]=s),(i=i[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,l.push({i:o,x:mn(i,r)})),e=Vc.lastIndex;return e<t.length&&(s=t.slice(e),a[o]?a[o]+=s:a[++o]=s),a.length<2?l[0]?Vx(l[0].x):kx(t):(t=l.length,function(c){for(var h=0,u;h<t;++h)a[(u=l[h]).i]=u.x(c);return a.join("")})}var op=180/Math.PI,na={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Wc(n,t,e,i,r,s){var o,a,l;return(o=Math.sqrt(n*n+t*t))&&(n/=o,t/=o),(l=n*e+t*i)&&(e-=n*l,i-=t*l),(a=Math.sqrt(e*e+i*i))&&(e/=a,i/=a,l/=a),n*i<t*e&&(n=-n,t=-t,l=-l,o=-o),{translateX:r,translateY:s,rotate:Math.atan2(t,n)*op,skewX:Math.atan(l)*op,scaleX:o,scaleY:a}}var ia;function ap(n){let t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return t.isIdentity?na:Wc(t.a,t.b,t.c,t.d,t.e,t.f)}function lp(n){return n==null?na:(ia||(ia=document.createElementNS("http://www.w3.org/2000/svg","g")),ia.setAttribute("transform",n),(n=ia.transform.baseVal.consolidate())?(n=n.matrix,Wc(n.a,n.b,n.c,n.d,n.e,n.f)):na)}function cp(n,t,e,i){function r(c){return c.length?c.pop()+" ":""}function s(c,h,u,f,d,m){if(c!==u||h!==f){var _=d.push("translate(",null,t,null,e);m.push({i:_-4,x:mn(c,u)},{i:_-2,x:mn(h,f)})}else(u||f)&&d.push("translate("+u+t+f+e)}function o(c,h,u,f){c!==h?(c-h>180?h+=360:h-c>180&&(c+=360),f.push({i:u.push(r(u)+"rotate(",null,i)-2,x:mn(c,h)})):h&&u.push(r(u)+"rotate("+h+i)}function a(c,h,u,f){c!==h?f.push({i:u.push(r(u)+"skewX(",null,i)-2,x:mn(c,h)}):h&&u.push(r(u)+"skewX("+h+i)}function l(c,h,u,f,d,m){if(c!==u||h!==f){var _=d.push(r(d)+"scale(",null,",",null,")");m.push({i:_-4,x:mn(c,u)},{i:_-2,x:mn(h,f)})}else(u!==1||f!==1)&&d.push(r(d)+"scale("+u+","+f+")")}return function(c,h){var u=[],f=[];return c=n(c),h=n(h),s(c.translateX,c.translateY,h.translateX,h.translateY,u,f),o(c.rotate,h.rotate,u,f),a(c.skewX,h.skewX,u,f),l(c.scaleX,c.scaleY,h.scaleX,h.scaleY,u,f),c=h=null,function(d){for(var m=-1,_=f.length,g;++m<_;)u[(g=f[m]).i]=g.x(d);return u.join("")}}}var Xc=cp(ap,"px, ","px)","deg)"),qc=cp(lp,", ",")",")");var Gx=1e-12;function hp(n){return((n=Math.exp(n))+1/n)/2}function Hx(n){return((n=Math.exp(n))-1/n)/2}function Wx(n){return((n=Math.exp(2*n))-1)/(n+1)}var Yc=(function n(t,e,i){function r(s,o){var a=s[0],l=s[1],c=s[2],h=o[0],u=o[1],f=o[2],d=h-a,m=u-l,_=d*d+m*m,g,p;if(_<Gx)p=Math.log(f/c)/t,g=function(R){return[a+R*d,l+R*m,c*Math.exp(t*R*p)]};else{var M=Math.sqrt(_),v=(f*f-c*c+i*_)/(2*c*e*M),b=(f*f-c*c-i*_)/(2*f*e*M),S=Math.log(Math.sqrt(v*v+1)-v),T=Math.log(Math.sqrt(b*b+1)-b);p=(T-S)/t,g=function(R){var N=R*p,w=hp(S),A=c/(e*M)*(w*Wx(t*N+S)-Hx(S));return[a+A*d,l+A*m,c*w/hp(t*N+S)]}}return g.duration=p*1e3*t/Math.SQRT2,g}return r.rho=function(s){var o=Math.max(.001,+s),a=o*o,l=a*a;return n(o,a,l)},r})(Math.SQRT2,2,4);var Xx=Ui("start","end","cancel","interrupt"),qx=[],dp=0,up=1,sa=2,ra=3,fp=4,oa=5,Ss=6;function ci(n,t,e,i,r,s){var o=n.__transition;if(!o)n.__transition={};else if(e in o)return;Yx(n,e,{name:t,index:i,group:r,on:Xx,tween:qx,time:s.time,delay:s.delay,duration:s.duration,ease:s.ease,timer:null,state:dp})}function ws(n,t){var e=Ee(n,t);if(e.state>dp)throw new Error("too late; already scheduled");return e}function Ne(n,t){var e=Ee(n,t);if(e.state>ra)throw new Error("too late; already running");return e}function Ee(n,t){var e=n.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function Yx(n,t,e){var i=n.__transition,r;i[t]=e,e.timer=dr(s,0,e.time);function s(c){e.state=up,e.timer.restart(o,e.delay,e.time),e.delay<=c&&o(c-e.delay)}function o(c){var h,u,f,d;if(e.state!==up)return l();for(h in i)if(d=i[h],d.name===e.name){if(d.state===ra)return ko(o);d.state===fp?(d.state=Ss,d.timer.stop(),d.on.call("interrupt",n,n.__data__,d.index,d.group),delete i[h]):+h<t&&(d.state=Ss,d.timer.stop(),d.on.call("cancel",n,n.__data__,d.index,d.group),delete i[h])}if(ko(function(){e.state===ra&&(e.state=fp,e.timer.restart(a,e.delay,e.time),a(c))}),e.state=sa,e.on.call("start",n,n.__data__,e.index,e.group),e.state===sa){for(e.state=ra,r=new Array(f=e.tween.length),h=0,u=-1;h<f;++h)(d=e.tween[h].value.call(n,n.__data__,e.index,e.group))&&(r[++u]=d);r.length=u+1}}function a(c){for(var h=c<e.duration?e.ease.call(null,c/e.duration):(e.timer.restart(l),e.state=oa,1),u=-1,f=r.length;++u<f;)r[u].call(n,h);e.state===oa&&(e.on.call("end",n,n.__data__,e.index,e.group),l())}function l(){e.state=Ss,e.timer.stop(),delete i[t];for(var c in i)return;delete n.__transition}}function Vi(n,t){var e=n.__transition,i,r,s=!0,o;if(e){t=t==null?null:t+"";for(o in e){if((i=e[o]).name!==t){s=!1;continue}r=i.state>sa&&i.state<oa,i.state=Ss,i.timer.stop(),i.on.call(r?"interrupt":"cancel",n,n.__data__,i.index,i.group),delete e[o]}s&&delete n.__transition}}function pp(n){return this.each(function(){Vi(this,n)})}function Zx(n,t){var e,i;return function(){var r=Ne(this,n),s=r.tween;if(s!==e){i=e=s;for(var o=0,a=i.length;o<a;++o)if(i[o].name===t){i=i.slice(),i.splice(o,1);break}}r.tween=i}}function $x(n,t,e){var i,r;if(typeof e!="function")throw new Error;return function(){var s=Ne(this,n),o=s.tween;if(o!==i){r=(i=o).slice();for(var a={name:t,value:e},l=0,c=r.length;l<c;++l)if(r[l].name===t){r[l]=a;break}l===c&&r.push(a)}s.tween=r}}function mp(n,t){var e=this._id;if(n+="",arguments.length<2){for(var i=Ee(this.node(),e).tween,r=0,s=i.length,o;r<s;++r)if((o=i[r]).name===n)return o.value;return null}return this.each((t==null?Zx:$x)(e,n,t))}function gr(n,t,e){var i=n._id;return n.each(function(){var r=Ne(this,i);(r.value||(r.value={}))[t]=e.apply(this,arguments)}),function(r){return Ee(r,i).value[t]}}function aa(n,t){var e;return(typeof t=="number"?mn:t instanceof li?ea:(e=li(t))?(t=e,ea):Hc)(n,t)}function Jx(n){return function(){this.removeAttribute(n)}}function Kx(n){return function(){this.removeAttributeNS(n.space,n.local)}}function jx(n,t,e){var i,r=e+"",s;return function(){var o=this.getAttribute(n);return o===r?null:o===i?s:s=t(i=o,e)}}function Qx(n,t,e){var i,r=e+"",s;return function(){var o=this.getAttributeNS(n.space,n.local);return o===r?null:o===i?s:s=t(i=o,e)}}function t_(n,t,e){var i,r,s;return function(){var o,a=e(this),l;return a==null?void this.removeAttribute(n):(o=this.getAttribute(n),l=a+"",o===l?null:o===i&&l===r?s:(r=l,s=t(i=o,a)))}}function e_(n,t,e){var i,r,s;return function(){var o,a=e(this),l;return a==null?void this.removeAttributeNS(n.space,n.local):(o=this.getAttributeNS(n.space,n.local),l=a+"",o===l?null:o===i&&l===r?s:(r=l,s=t(i=o,a)))}}function gp(n,t){var e=qn(n),i=e==="transform"?qc:aa;return this.attrTween(n,typeof t=="function"?(e.local?e_:t_)(e,i,gr(this,"attr."+n,t)):t==null?(e.local?Kx:Jx)(e):(e.local?Qx:jx)(e,i,t))}function n_(n,t){return function(e){this.setAttribute(n,t.call(this,e))}}function i_(n,t){return function(e){this.setAttributeNS(n.space,n.local,t.call(this,e))}}function r_(n,t){var e,i;function r(){var s=t.apply(this,arguments);return s!==i&&(e=(i=s)&&i_(n,s)),e}return r._value=t,r}function s_(n,t){var e,i;function r(){var s=t.apply(this,arguments);return s!==i&&(e=(i=s)&&n_(n,s)),e}return r._value=t,r}function xp(n,t){var e="attr."+n;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var i=qn(n);return this.tween(e,(i.local?r_:s_)(i,t))}function o_(n,t){return function(){ws(this,n).delay=+t.apply(this,arguments)}}function a_(n,t){return t=+t,function(){ws(this,n).delay=t}}function _p(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?o_:a_)(t,n)):Ee(this.node(),t).delay}function l_(n,t){return function(){Ne(this,n).duration=+t.apply(this,arguments)}}function c_(n,t){return t=+t,function(){Ne(this,n).duration=t}}function yp(n){var t=this._id;return arguments.length?this.each((typeof n=="function"?l_:c_)(t,n)):Ee(this.node(),t).duration}function h_(n,t){if(typeof t!="function")throw new Error;return function(){Ne(this,n).ease=t}}function vp(n){var t=this._id;return arguments.length?this.each(h_(t,n)):Ee(this.node(),t).ease}function u_(n,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;Ne(this,n).ease=e}}function bp(n){if(typeof n!="function")throw new Error;return this.each(u_(this._id,n))}function Mp(n){typeof n!="function"&&(n=_s(n));for(var t=this._groups,e=t.length,i=new Array(e),r=0;r<e;++r)for(var s=t[r],o=s.length,a=i[r]=[],l,c=0;c<o;++c)(l=s[c])&&n.call(l,l.__data__,c,s)&&a.push(l);return new Xe(i,this._parents,this._name,this._id)}function Sp(n){if(n._id!==this._id)throw new Error;for(var t=this._groups,e=n._groups,i=t.length,r=e.length,s=Math.min(i,r),o=new Array(i),a=0;a<s;++a)for(var l=t[a],c=e[a],h=l.length,u=o[a]=new Array(h),f,d=0;d<h;++d)(f=l[d]||c[d])&&(u[d]=f);for(;a<i;++a)o[a]=t[a];return new Xe(o,this._parents,this._name,this._id)}function f_(n){return(n+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function d_(n,t,e){var i,r,s=f_(t)?ws:Ne;return function(){var o=s(this,n),a=o.on;a!==i&&(r=(i=a).copy()).on(t,e),o.on=r}}function wp(n,t){var e=this._id;return arguments.length<2?Ee(this.node(),e).on.on(n):this.each(d_(e,n,t))}function p_(n){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==n)return;t&&t.removeChild(this)}}function Tp(){return this.on("end.remove",p_(this._id))}function Ep(n){var t=this._name,e=this._id;typeof n!="function"&&(n=Bi(n));for(var i=this._groups,r=i.length,s=new Array(r),o=0;o<r;++o)for(var a=i[o],l=a.length,c=s[o]=new Array(l),h,u,f=0;f<l;++f)(h=a[f])&&(u=n.call(h,h.__data__,f,a))&&("__data__"in h&&(u.__data__=h.__data__),c[f]=u,ci(c[f],t,e,f,c,Ee(h,e)));return new Xe(s,this._parents,t,e)}function Ap(n){var t=this._name,e=this._id;typeof n!="function"&&(n=xs(n));for(var i=this._groups,r=i.length,s=[],o=[],a=0;a<r;++a)for(var l=i[a],c=l.length,h,u=0;u<c;++u)if(h=l[u]){for(var f=n.call(h,h.__data__,u,l),d,m=Ee(h,e),_=0,g=f.length;_<g;++_)(d=f[_])&&ci(d,t,e,_,f,m);s.push(f),o.push(h)}return new Xe(s,o,t,e)}var m_=Yn.prototype.constructor;function Cp(){return new m_(this._groups,this._parents)}function g_(n,t){var e,i,r;return function(){var s=ai(this,n),o=(this.style.removeProperty(n),ai(this,n));return s===o?null:s===e&&o===i?r:r=t(e=s,i=o)}}function Rp(n){return function(){this.style.removeProperty(n)}}function x_(n,t,e){var i,r=e+"",s;return function(){var o=ai(this,n);return o===r?null:o===i?s:s=t(i=o,e)}}function __(n,t,e){var i,r,s;return function(){var o=ai(this,n),a=e(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(n),ai(this,n))),o===l?null:o===i&&l===r?s:(r=l,s=t(i=o,a))}}function y_(n,t){var e,i,r,s="style."+t,o="end."+s,a;return function(){var l=Ne(this,n),c=l.on,h=l.value[s]==null?a||(a=Rp(t)):void 0;(c!==e||r!==h)&&(i=(e=c).copy()).on(o,r=h),l.on=i}}function Ip(n,t,e){var i=(n+="")=="transform"?Xc:aa;return t==null?this.styleTween(n,g_(n,i)).on("end.style."+n,Rp(n)):typeof t=="function"?this.styleTween(n,__(n,i,gr(this,"style."+n,t))).each(y_(this._id,n)):this.styleTween(n,x_(n,i,t),e).on("end.style."+n,null)}function v_(n,t,e){return function(i){this.style.setProperty(n,t.call(this,i),e)}}function b_(n,t,e){var i,r;function s(){var o=t.apply(this,arguments);return o!==r&&(i=(r=o)&&v_(n,o,e)),i}return s._value=t,s}function Pp(n,t,e){var i="style."+(n+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(t==null)return this.tween(i,null);if(typeof t!="function")throw new Error;return this.tween(i,b_(n,t,e??""))}function M_(n){return function(){this.textContent=n}}function S_(n){return function(){var t=n(this);this.textContent=t??""}}function Dp(n){return this.tween("text",typeof n=="function"?S_(gr(this,"text",n)):M_(n==null?"":n+""))}function w_(n){return function(t){this.textContent=n.call(this,t)}}function T_(n){var t,e;function i(){var r=n.apply(this,arguments);return r!==e&&(t=(e=r)&&w_(r)),t}return i._value=n,i}function Lp(n){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;return this.tween(t,T_(n))}function Np(){for(var n=this._name,t=this._id,e=la(),i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,l,c=0;c<a;++c)if(l=o[c]){var h=Ee(l,t);ci(l,n,e,c,o,{time:h.time+h.delay+h.duration,delay:0,duration:h.duration,ease:h.ease})}return new Xe(i,this._parents,n,e)}function Up(){var n,t,e=this,i=e._id,r=e.size();return new Promise(function(s,o){var a={value:o},l={value:function(){--r===0&&s()}};e.each(function(){var c=Ne(this,i),h=c.on;h!==n&&(t=(n=h).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(l)),c.on=t}),r===0&&s()})}var E_=0;function Xe(n,t,e,i){this._groups=n,this._parents=t,this._name=e,this._id=i}function Fp(n){return Yn().transition(n)}function la(){return++E_}var Zn=Yn.prototype;Xe.prototype=Fp.prototype={constructor:Xe,select:Ep,selectAll:Ap,selectChild:Zn.selectChild,selectChildren:Zn.selectChildren,filter:Mp,merge:Sp,selection:Cp,transition:Np,call:Zn.call,nodes:Zn.nodes,node:Zn.node,size:Zn.size,empty:Zn.empty,each:Zn.each,on:wp,attr:gp,attrTween:xp,style:Ip,styleTween:Pp,text:Dp,textTween:Lp,remove:Tp,tween:mp,delay:_p,duration:yp,ease:vp,easeVarying:bp,end:Up,[Symbol.iterator]:Zn[Symbol.iterator]};function ca(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var A_={time:null,delay:0,duration:250,ease:ca};function C_(n,t){for(var e;!(e=n.__transition)||!(e=e[t]);)if(!(n=n.parentNode))throw new Error(`transition ${t} not found`);return e}function Op(n){var t,e;n instanceof Xe?(t=n._id,n=n._name):(t=la(),(e=A_).time=ms(),n=n==null?null:n+"");for(var i=this._groups,r=i.length,s=0;s<r;++s)for(var o=i[s],a=o.length,l,c=0;c<a;++c)(l=o[c])&&ci(l,n,t,c,o,e||C_(l,t));return new Xe(i,this._parents,n,t)}Yn.prototype.interrupt=pp;Yn.prototype.transition=Op;var Ts=n=>()=>n;function Zc(n,{sourceEvent:t,target:e,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:n,enumerable:!0,configurable:!0},sourceEvent:{value:t,enumerable:!0,configurable:!0},target:{value:e,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function wn(n,t,e){this.k=n,this.x=t,this.y=e}wn.prototype={constructor:wn,scale:function(n){return n===1?this:new wn(this.k*n,this.x,this.y)},translate:function(n,t){return n===0&t===0?this:new wn(this.k,this.x+this.k*n,this.y+this.k*t)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var gn=new wn(1,0,0);$c.prototype=wn.prototype;function $c(n){for(;!n.__zoom;)if(!(n=n.parentNode))return gn;return n.__zoom}function ha(n){n.stopImmediatePropagation()}function xr(n){n.preventDefault(),n.stopImmediatePropagation()}function R_(n){return(!n.ctrlKey||n.type==="wheel")&&!n.button}function I_(){var n=this;return n instanceof SVGElement?(n=n.ownerSVGElement||n,n.hasAttribute("viewBox")?(n=n.viewBox.baseVal,[[n.x,n.y],[n.x+n.width,n.y+n.height]]):[[0,0],[n.width.baseVal.value,n.height.baseVal.value]]):[[0,0],[n.clientWidth,n.clientHeight]]}function Bp(){return this.__zoom||gn}function P_(n){return-n.deltaY*(n.deltaMode===1?.05:n.deltaMode?1:.002)*(n.ctrlKey?10:1)}function D_(){return navigator.maxTouchPoints||"ontouchstart"in this}function L_(n,t,e){var i=n.invertX(t[0][0])-e[0][0],r=n.invertX(t[1][0])-e[1][0],s=n.invertY(t[0][1])-e[0][1],o=n.invertY(t[1][1])-e[1][1];return n.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),o>s?(s+o)/2:Math.min(0,s)||Math.max(0,o))}function ua(){var n=R_,t=I_,e=L_,i=P_,r=D_,s=[0,1/0],o=[[-1/0,-1/0],[1/0,1/0]],a=250,l=Yc,c=Ui("start","zoom","end"),h,u,f,d=500,m=150,_=0,g=10;function p(I){I.property("__zoom",Bp).on("wheel.zoom",N,{passive:!1}).on("mousedown.zoom",w).on("dblclick.zoom",A).filter(r).on("touchstart.zoom",D).on("touchmove.zoom",B).on("touchend.zoom touchcancel.zoom",G).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(I,V,P,U){var W=I.selection?I.selection():I;W.property("__zoom",Bp),I!==W?S(I,V,P,U):W.interrupt().each(function(){T(this,arguments).event(U).start().zoom(null,typeof V=="function"?V.apply(this,arguments):V).end()})},p.scaleBy=function(I,V,P,U){p.scaleTo(I,function(){var W=this.__zoom.k,j=typeof V=="function"?V.apply(this,arguments):V;return W*j},P,U)},p.scaleTo=function(I,V,P,U){p.transform(I,function(){var W=t.apply(this,arguments),j=this.__zoom,K=P==null?b(W):typeof P=="function"?P.apply(this,arguments):P,et=j.invert(K),_t=typeof V=="function"?V.apply(this,arguments):V;return e(v(M(j,_t),K,et),W,o)},P,U)},p.translateBy=function(I,V,P,U){p.transform(I,function(){return e(this.__zoom.translate(typeof V=="function"?V.apply(this,arguments):V,typeof P=="function"?P.apply(this,arguments):P),t.apply(this,arguments),o)},null,U)},p.translateTo=function(I,V,P,U,W){p.transform(I,function(){var j=t.apply(this,arguments),K=this.__zoom,et=U==null?b(j):typeof U=="function"?U.apply(this,arguments):U;return e(gn.translate(et[0],et[1]).scale(K.k).translate(typeof V=="function"?-V.apply(this,arguments):-V,typeof P=="function"?-P.apply(this,arguments):-P),j,o)},U,W)};function M(I,V){return V=Math.max(s[0],Math.min(s[1],V)),V===I.k?I:new wn(V,I.x,I.y)}function v(I,V,P){var U=V[0]-P[0]*I.k,W=V[1]-P[1]*I.k;return U===I.x&&W===I.y?I:new wn(I.k,U,W)}function b(I){return[(+I[0][0]+ +I[1][0])/2,(+I[0][1]+ +I[1][1])/2]}function S(I,V,P,U){I.on("start.zoom",function(){T(this,arguments).event(U).start()}).on("interrupt.zoom end.zoom",function(){T(this,arguments).event(U).end()}).tween("zoom",function(){var W=this,j=arguments,K=T(W,j).event(U),et=t.apply(W,j),_t=P==null?b(et):typeof P=="function"?P.apply(W,j):P,Et=Math.max(et[1][0]-et[0][0],et[1][1]-et[0][1]),Ut=W.__zoom,Gt=typeof V=="function"?V.apply(W,j):V,Z=l(Ut.invert(_t).concat(Et/Ut.k),Gt.invert(_t).concat(Et/Gt.k));return function(J){if(J===1)J=Gt;else{var ct=Z(J),Nt=Et/ct[2];J=new wn(Nt,_t[0]-ct[0]*Nt,_t[1]-ct[1]*Nt)}K.zoom(null,J)}})}function T(I,V,P){return!P&&I.__zooming||new R(I,V)}function R(I,V){this.that=I,this.args=V,this.active=0,this.sourceEvent=null,this.extent=t.apply(I,V),this.taps=0}R.prototype={event:function(I){return I&&(this.sourceEvent=I),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(I,V){return this.mouse&&I!=="mouse"&&(this.mouse[1]=V.invert(this.mouse[0])),this.touch0&&I!=="touch"&&(this.touch0[1]=V.invert(this.touch0[0])),this.touch1&&I!=="touch"&&(this.touch1[1]=V.invert(this.touch1[0])),this.that.__zoom=V,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(I){var V=Se(this.that).datum();c.call(I,this.that,new Zc(I,{sourceEvent:this.sourceEvent,target:p,type:I,transform:this.that.__zoom,dispatch:c}),V)}};function N(I,...V){if(!n.apply(this,arguments))return;var P=T(this,V).event(I),U=this.__zoom,W=Math.max(s[0],Math.min(s[1],U.k*Math.pow(2,i.apply(this,arguments)))),j=je(I);if(P.wheel)(P.mouse[0][0]!==j[0]||P.mouse[0][1]!==j[1])&&(P.mouse[1]=U.invert(P.mouse[0]=j)),clearTimeout(P.wheel);else{if(U.k===W)return;P.mouse=[j,U.invert(j)],Vi(this),P.start()}xr(I),P.wheel=setTimeout(K,m),P.zoom("mouse",e(v(M(U,W),P.mouse[0],P.mouse[1]),P.extent,o));function K(){P.wheel=null,P.end()}}function w(I,...V){if(f||!n.apply(this,arguments))return;var P=I.currentTarget,U=T(this,V,!0).event(I),W=Se(I.view).on("mousemove.zoom",_t,!0).on("mouseup.zoom",Et,!0),j=je(I,P),K=I.clientX,et=I.clientY;Uc(I.view),ha(I),U.mouse=[j,this.__zoom.invert(j)],Vi(this),U.start();function _t(Ut){if(xr(Ut),!U.moved){var Gt=Ut.clientX-K,Z=Ut.clientY-et;U.moved=Gt*Gt+Z*Z>_}U.event(Ut).zoom("mouse",e(v(U.that.__zoom,U.mouse[0]=je(Ut,P),U.mouse[1]),U.extent,o))}function Et(Ut){W.on("mousemove.zoom mouseup.zoom",null),Fc(Ut.view,U.moved),xr(Ut),U.event(Ut).end()}}function A(I,...V){if(n.apply(this,arguments)){var P=this.__zoom,U=je(I.changedTouches?I.changedTouches[0]:I,this),W=P.invert(U),j=P.k*(I.shiftKey?.5:2),K=e(v(M(P,j),U,W),t.apply(this,V),o);xr(I),a>0?Se(this).transition().duration(a).call(S,K,U,I):Se(this).call(p.transform,K,U,I)}}function D(I,...V){if(n.apply(this,arguments)){var P=I.touches,U=P.length,W=T(this,V,I.changedTouches.length===U).event(I),j,K,et,_t;for(ha(I),K=0;K<U;++K)et=P[K],_t=je(et,this),_t=[_t,this.__zoom.invert(_t),et.identifier],W.touch0?!W.touch1&&W.touch0[2]!==_t[2]&&(W.touch1=_t,W.taps=0):(W.touch0=_t,j=!0,W.taps=1+!!h);h&&(h=clearTimeout(h)),j&&(W.taps<2&&(u=_t[0],h=setTimeout(function(){h=null},d)),Vi(this),W.start())}}function B(I,...V){if(this.__zooming){var P=T(this,V).event(I),U=I.changedTouches,W=U.length,j,K,et,_t;for(xr(I),j=0;j<W;++j)K=U[j],et=je(K,this),P.touch0&&P.touch0[2]===K.identifier?P.touch0[0]=et:P.touch1&&P.touch1[2]===K.identifier&&(P.touch1[0]=et);if(K=P.that.__zoom,P.touch1){var Et=P.touch0[0],Ut=P.touch0[1],Gt=P.touch1[0],Z=P.touch1[1],J=(J=Gt[0]-Et[0])*J+(J=Gt[1]-Et[1])*J,ct=(ct=Z[0]-Ut[0])*ct+(ct=Z[1]-Ut[1])*ct;K=M(K,Math.sqrt(J/ct)),et=[(Et[0]+Gt[0])/2,(Et[1]+Gt[1])/2],_t=[(Ut[0]+Z[0])/2,(Ut[1]+Z[1])/2]}else if(P.touch0)et=P.touch0[0],_t=P.touch0[1];else return;P.zoom("touch",e(v(K,et,_t),P.extent,o))}}function G(I,...V){if(this.__zooming){var P=T(this,V).event(I),U=I.changedTouches,W=U.length,j,K;for(ha(I),f&&clearTimeout(f),f=setTimeout(function(){f=null},d),j=0;j<W;++j)K=U[j],P.touch0&&P.touch0[2]===K.identifier?delete P.touch0:P.touch1&&P.touch1[2]===K.identifier&&delete P.touch1;if(P.touch1&&!P.touch0&&(P.touch0=P.touch1,delete P.touch1),P.touch0)P.touch0[1]=this.__zoom.invert(P.touch0[0]);else if(P.end(),P.taps===2&&(K=je(K,this),Math.hypot(u[0]-K[0],u[1]-K[1])<g)){var et=Se(this).on("dblclick.zoom");et&&et.apply(this,arguments)}}}return p.wheelDelta=function(I){return arguments.length?(i=typeof I=="function"?I:Ts(+I),p):i},p.filter=function(I){return arguments.length?(n=typeof I=="function"?I:Ts(!!I),p):n},p.touchable=function(I){return arguments.length?(r=typeof I=="function"?I:Ts(!!I),p):r},p.extent=function(I){return arguments.length?(t=typeof I=="function"?I:Ts([[+I[0][0],+I[0][1]],[+I[1][0],+I[1][1]]]),p):t},p.scaleExtent=function(I){return arguments.length?(s[0]=+I[0],s[1]=+I[1],p):[s[0],s[1]]},p.translateExtent=function(I){return arguments.length?(o[0][0]=+I[0][0],o[1][0]=+I[1][0],o[0][1]=+I[0][1],o[1][1]=+I[1][1],p):[[o[0][0],o[0][1]],[o[1][0],o[1][1]]]},p.constrain=function(I){return arguments.length?(e=I,p):e},p.duration=function(I){return arguments.length?(a=+I,p):a},p.interpolate=function(I){return arguments.length?(l=I,p):l},p.on=function(){var I=c.on.apply(c,arguments);return I===c?p:I},p.clickDistance=function(I){return arguments.length?(_=(I=+I)*I,p):Math.sqrt(_)},p.tapDistance=function(I){return arguments.length?(g=+I,p):g},p}var _r=class extends Map{constructor(t,e=F_){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),t!=null)for(let[i,r]of t)this.set(i,r)}get(t){return super.get(zp(this,t))}has(t){return super.has(zp(this,t))}set(t,e){return super.set(N_(this,t),e)}delete(t){return super.delete(U_(this,t))}};function zp({_intern:n,_key:t},e){let i=t(e);return n.has(i)?n.get(i):e}function N_({_intern:n,_key:t},e){let i=t(e);return n.has(i)?n.get(i):(n.set(i,e),e)}function U_({_intern:n,_key:t},e){let i=t(e);return n.has(i)&&(e=n.get(i),n.delete(i)),e}function F_(n){return n!==null&&typeof n=="object"?n.valueOf():n}function kp(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}var Jc=Symbol("implicit");function yr(){var n=new _r,t=[],e=[],i=Jc;function r(s){let o=n.get(s);if(o===void 0){if(i!==Jc)return i;n.set(s,o=t.push(s)-1)}return e[o%e.length]}return r.domain=function(s){if(!arguments.length)return t.slice();t=[],n=new _r;for(let o of s)n.has(o)||n.set(o,t.push(o)-1);return r},r.range=function(s){return arguments.length?(e=Array.from(s),r):e.slice()},r.unknown=function(s){return arguments.length?(i=s,r):i},r.copy=function(){return yr(t,e).unknown(i)},kp.apply(r,arguments),r}function vr(n){for(var t=n.length/6|0,e=new Array(t),i=0;i<t;)e[i]="#"+n.slice(i*6,++i*6);return e}var fa=vr("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");var da=vr("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");var pa=vr("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");var ue={dark:{background:"#1a1a2e",nodeDefault:"#6c9fff",nodeBorder:"#2a2a4a",selectedBorder:"#ffd700",edgeDefault:"#aabbcc",edgeOpacity:1,edgeSelected:"#a0aec0",edgeSelectedOpacity:1,labelColor:"#a0aec0",selectedLabelColor:"#ffffff",panelBg:"rgba(30, 30, 50, 0.92)",panelText:"#c0c8d8",panelBorder:"1px solid rgba(255, 255, 255, 0.08)",panelShadow:"0 8px 32px rgba(0, 0, 0, 0.4)",panelHeaderBorder:"rgba(255, 255, 255, 0.1)",buttonBg:"rgba(255, 255, 255, 0.06)",buttonBorder:"1px solid rgba(255, 255, 255, 0.12)",buttonText:"#c0c8d8",buttonHoverBg:"rgba(255, 255, 255, 0.12)",activeButtonBg:"rgba(108, 159, 255, 0.2)",activeButtonBorder:"1px solid #6c9fff",activeButtonText:"#6c9fff",inactiveText:"rgba(255, 255, 255, 0.3)",inputBg:"rgba(255, 255, 255, 0.08)",inputBorder:"1px solid rgba(255, 255, 255, 0.15)",inputText:"#e0e0e0",inputPlaceholder:"rgba(255, 255, 255, 0.3)",tooltipBg:"rgba(20, 20, 40, 0.95)",tooltipText:"#ffffff",tooltipShadow:"0 4px 16px rgba(0, 0, 0, 0.5)",selectionBoxFill:"rgba(108, 159, 255, 0.1)",selectionBoxStroke:"#48bb78",legendHoverBg:"rgba(255, 255, 255, 0.08)",statsBorder:"rgba(255, 255, 255, 0.1)",groupFillOpacity:.15,iconColor:"#a0aec0"},light:{background:"#ffffff",nodeDefault:"#548ff0",nodeBorder:"#ffffff",selectedBorder:"#000000",edgeDefault:"#1a2a3a",edgeOpacity:1,edgeSelected:"#555555",edgeSelectedOpacity:1,labelColor:"#2d3748",selectedLabelColor:"#000000",panelBg:"rgba(255, 255, 255, 0.98)",panelText:"#2d3748",panelBorder:"1px solid #e2e8f0",panelShadow:"0 4px 16px rgba(0, 0, 0, 0.08)",panelHeaderBorder:"#e2e8f0",buttonBg:"linear-gradient(145deg, #f8f9fa, #ffffff)",buttonBorder:"1px solid #e2e8f0",buttonText:"#4a5568",buttonHoverBg:"#f0f4ff",activeButtonBg:"rgba(84, 143, 240, 0.12)",activeButtonBorder:"1px solid #548ff0",activeButtonText:"#548ff0",inactiveText:"#a0aec0",inputBg:"#ffffff",inputBorder:"1px solid #e2e8f0",inputText:"#2d3748",inputPlaceholder:"#a0aec0",tooltipBg:"rgba(0, 0, 0, 0.85)",tooltipText:"#ffffff",tooltipShadow:"0 2px 8px rgba(0, 0, 0, 0.3)",selectionBoxFill:"rgba(100, 200, 255, 0.1)",selectionBoxStroke:"#55c667",legendHoverBg:"rgba(0, 0, 0, 0.04)",statsBorder:"#e2e8f0",groupFillOpacity:.125,iconColor:"#4a5568"}},Vp={nodes:{defaultSize:15,selectedSizeIncrease:5,defaultColor:null,defaultOpacity:1,borderColor:null,borderWidth:1,selectedBorderColor:null},edges:{defaultColor:null,selectedColor:null,defaultOpacity:null,selectedOpacity:null,defaultWidth:1,selectedWidth:2,showArrows:!0,arrowSize:10,arrowWidth:5},labels:{fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",fontSize:8,color:null,selectedColor:null,visible:!0},simulation:{chargeStrength:4e3,linkDistance:100,centerStrength:1},groups:{fillOpacity:null,strokeWidth:2,showEllipses:!0},canvas:{backgroundColor:null,zoomMin:.1,zoomMax:5},ui:{theme:"light",showLegend:!0,showStatistics:!1,showTooltips:!0},layout:"force"};function jc(n,t){let e={...n};for(let i in t)t[i]&&typeof t[i]=="object"&&!Array.isArray(t[i])?e[i]=jc(n[i]||{},t[i]):t[i]!==void 0&&(e[i]=t[i]);return e}function Gp(n,t){let e=ue[t]||ue.light;return n.nodes.defaultColor||(n.nodes.defaultColor=e.nodeDefault),n.nodes.borderColor||(n.nodes.borderColor=e.nodeBorder),n.nodes.selectedBorderColor||(n.nodes.selectedBorderColor=e.selectedBorder),n.edges.defaultColor||(n.edges.defaultColor=e.edgeDefault),n.edges.selectedColor||(n.edges.selectedColor=e.edgeSelected),n.edges.defaultOpacity===null&&(n.edges.defaultOpacity=e.edgeOpacity),n.edges.selectedOpacity===null&&(n.edges.selectedOpacity=e.edgeSelectedOpacity),n.labels.color||(n.labels.color=e.labelColor),n.labels.selectedColor||(n.labels.selectedColor=e.selectedLabelColor),n.groups.fillOpacity===null&&(n.groups.fillOpacity=e.groupFillOpacity),n.canvas.backgroundColor||(n.canvas.backgroundColor=e.background),n}var x={nodes:[],edges:[],selectedNodes:new Set,selectionMode:!1,selectionBox:null,draggingNode:null,dragOffsetX:0,dragOffsetY:0,transform:null,showArrows:!1,colorEdgesByGroup:!1,groupColorOverrides:{},labelPosition:"side",simulation:null,zoom:null,groupColorScale:null,config:null,currentTheme:"light",is3D:!1,camera2D:null,camera3D:null,orbitControls:null,ambientLight:null,directionalLight:null,_savedShowArrows:!1,_animationFrameId:null,scene:null,camera:null,renderer:null,nodesFillMesh:null,nodesBorderMesh:null,normalEdgesMesh:null,highlightedEdgesMesh:null,arrowMesh:null,ellipseGroup:null,container:null,labelContainer:null,labelDivs:[],selectionBoxDiv:null,ui:{},userAdjusted:{nodeSize:!1,edgeOpacity:!1}};var Si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mm=0,Oh=1,Sm=2;var yo=1,wm=2,Jr=3,ni=0,Ye=1,Ze=2,kn=0,Yi=1,Bh=2,zh=3,kh=4,Tm=5,xi=100,Em=101,Am=102,Cm=103,Rm=104,Im=200,Pm=201,Dm=202,Lm=203,ka=204,Va=205,Nm=206,Um=207,Fm=208,Om=209,Bm=210,zm=211,km=212,Vm=213,Gm=214,xl=0,_l=1,yl=2,Zi=3,vl=4,bl=5,Ml=6,Sl=7,Vh=0,Hm=1,Wm=2,In=0,Gh=1,Hh=2,Wh=3,Xh=4,qh=5,Yh=6,Zh=7;var $h=300,Ti=301,tr=302,wl=303,Tl=304,vo=306,Ga=1e3,Nn=1001,Ha=1002,De=1003,Xm=1004;var bo=1005;var Ue=1006,El=1007;var Ei=1008;var en=1009,Jh=1010,Kh=1011,Kr=1012,Al=1013,Pn=1014,vn=1015,Vn=1016,Cl=1017,Rl=1018,jr=1020,jh=35902,Qh=35899,tu=1021,eu=1022,bn=1023,Un=1026,Ai=1027,Il=1028,Pl=1029,er=1030,Dl=1031;var Ll=1033,Mo=33776,So=33777,wo=33778,To=33779,Nl=35840,Ul=35841,Fl=35842,Ol=35843,Bl=36196,zl=37492,kl=37496,Vl=37488,Gl=37489,Hl=37490,Wl=37491,Xl=37808,ql=37809,Yl=37810,Zl=37811,$l=37812,Jl=37813,Kl=37814,jl=37815,Ql=37816,tc=37817,ec=37818,nc=37819,ic=37820,rc=37821,sc=36492,oc=36494,ac=36495,lc=36283,cc=36284,hc=36285,uc=36286;var Bs=2300,Wa=2301,za=2302,Th=2400,Eh=2401,Ah=2402;var qm=3200;var nu=0,Ym=1,si="",ln="srgb",$i="srgb-linear",zs="linear",te="srgb";var qi=7680;var Ch=519,Zm=512,$m=513,Jm=514,fc=515,Km=516,jm=517,dc=518,Qm=519,Rh=35044,Gn=35048;var iu="300 es",Cn=2e3,ks=2001;function ru(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function O_(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Vs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tg(){let n=Vs("canvas");return n.style.display="block",n}var Hp={},Or=null;function su(...n){let t="THREE."+n.shift();Or?Or("log",t,...n):console.log(t,...n)}function Rt(...n){let t="THREE."+n.shift();Or?Or("warn",t,...n):console.warn(t,...n)}function Pt(...n){let t="THREE."+n.shift();Or?Or("error",t,...n):console.error(t,...n)}function Br(...n){let t=n.join(" ");t in Hp||(Hp[t]=!0,Rt(...n))}function eg(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var Fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wp=1234567,Ns=Math.PI/180,zr=180/Math.PI;function nr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function kt(n,t,e){return Math.max(t,Math.min(e,n))}function ou(n,t){return(n%t+t)%t}function B_(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function z_(n,t,e){return n!==t?(e-n)/(t-n):0}function Us(n,t,e){return(1-e)*n+e*t}function k_(n,t,e,i){return Us(n,t,1-Math.exp(-e*i))}function V_(n,t=1){return t-Math.abs(ou(n,t*2)-t)}function G_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function H_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function W_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function X_(n,t){return n+Math.random()*(t-n)}function q_(n){return n*(.5-Math.random())}function Y_(n){n!==void 0&&(Wp=n);let t=Wp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Z_(n){return n*Ns}function $_(n){return n*zr}function J_(n){return(n&n-1)===0&&n!==0}function K_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function j_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Q_(n,t,e,i,r){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),h=o((t+i)/2),u=s((t-i)/2),f=o((t-i)/2),d=s((i-t)/2),m=o((i-t)/2);switch(r){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*m,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*m,a*c);break;case"ZYZ":n.set(l*m,l*d,a*h,a*c);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Nr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var au={DEG2RAD:Ns,RAD2DEG:zr,generateUUID:nr,clamp:kt,euclideanModulo:ou,mapLinear:B_,inverseLerp:z_,lerp:Us,damp:k_,pingpong:V_,smoothstep:G_,smootherstep:H_,randInt:W_,randFloat:X_,randFloatSpread:q_,seededRandom:Y_,degToRad:Z_,radToDeg:$_,isPowerOfTwo:J_,ceilPowerOfTwo:K_,floorPowerOfTwo:j_,setQuaternionFromProperEuler:Q_,normalize:qe,denormalize:Nr},ft=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yn=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],f=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];if(a<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a>=1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==m){let g=l*f+c*d+h*m+u*_;g<0&&(f=-f,d=-d,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){let M=Math.acos(g),v=Math.sin(M);p=Math.sin(p*M)/v,a=Math.sin(a*M)/v,l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+_*a}else{l=l*p+f*a,c=c*p+d*a,h=h*p+m*a,u=u*p+_*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),u=a(s/2),f=l(i/2),d=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>u){let d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-i-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*i),h=2*(a*e-s*r),u=2*(s*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qc.copy(this).projectOnVector(t),this.sub(Qc)}reflect(t){return this.sub(Qc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qc=new O,Xp=new yn,zt=class n{constructor(t,e,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c)}set(t,e,i,r,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],m=i[8],_=r[0],g=r[3],p=r[6],M=r[1],v=r[4],b=r[7],S=r[2],T=r[5],R=r[8];return s[0]=o*_+a*M+l*S,s[3]=o*g+a*v+l*T,s[6]=o*p+a*b+l*R,s[1]=c*_+h*M+u*S,s[4]=c*g+h*v+u*T,s[7]=c*p+h*b+u*R,s[2]=f*_+d*M+m*S,s[5]=f*g+d*v+m*T,s[8]=f*p+d*b+m*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,m=e*u+i*f+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=u*_,t[1]=(r*c-h*i)*_,t[2]=(a*i-r*o)*_,t[3]=f*_,t[4]=(h*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(th.makeScale(t,e)),this}rotate(t){return this.premultiply(th.makeRotation(-t)),this}translate(t,e){return this.premultiply(th.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},th=new zt,qp=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yp=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ty(){let n={enabled:!0,workingColorSpace:$i,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===te&&(r.r=ei(r.r),r.g=ei(r.g),r.b=ei(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===te&&(r.r=Ur(r.r),r.g=Ur(r.g),r.b=Ur(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===si?zs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Br("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Br("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$i]:{primaries:t,whitePoint:i,transfer:zs,toXYZ:qp,fromXYZ:Yp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:i,transfer:te,toXYZ:qp,fromXYZ:Yp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}var Zt=ty();function ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ur(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var br,Xa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{br===void 0&&(br=Vs("canvas")),br.width=t.width,br.height=t.height;let r=br.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=br}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vs("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ei(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ei(e[i]/255)*255):e[i]=ei(e[i]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ey=0,kr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=nr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(eh(r[o].image)):s.push(eh(r[o]))}else s=eh(r);i.url=s}return e||(t.images[this.uuid]=i),i}};function eh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var ny=0,nh=new O,tn=class n extends Fn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Nn,r=Nn,s=Ue,o=Ei,a=bn,l=en,c=n.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=nr(),this.name="",this.source=new kr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nh).x}get height(){return this.source.getSize(nh).y}get depth(){return this.source.getSize(nh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ga:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ga:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=$h;tn.DEFAULT_ANISOTROPY=1;var xe=class n{constructor(t=0,e=0,i=0,r=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,b=(d+1)/2,S=(p+1)/2,T=(h+f)/4,R=(u+_)/4,N=(m+g)/4;return v>b&&v>S?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=R/i):b>S?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=T/r,s=N/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=R/s,r=N/s),this.set(i,r,s,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qa=class extends Fn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let r={width:t,height:e,depth:i.depth},s=new tn(r);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let e={minFilter:Ue,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new kr(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends qa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Gs=class extends tn{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ya=class extends tn{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=De,this.minFilter=De,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var On=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(s,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ma.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ma.copy(i.boundingBox)),ma.applyMatrix4(t.matrixWorld),this.union(ma)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Es),ga.subVectors(this.max,Es),Mr.subVectors(t.a,Es),Sr.subVectors(t.b,Es),wr.subVectors(t.c,Es),hi.subVectors(Sr,Mr),ui.subVectors(wr,Sr),Gi.subVectors(Mr,wr);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-Gi.z,Gi.y,hi.z,0,-hi.x,ui.z,0,-ui.x,Gi.z,0,-Gi.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-Gi.y,Gi.x,0];return!ih(e,Mr,Sr,wr,ga)||(e=[1,0,0,0,1,0,0,0,1],!ih(e,Mr,Sr,wr,ga))?!1:(xa.crossVectors(hi,ui),e=[xa.x,xa.y,xa.z],ih(e,Mr,Sr,wr,ga))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},$n=[new O,new O,new O,new O,new O,new O,new O,new O],Tn=new O,ma=new On,Mr=new O,Sr=new O,wr=new O,hi=new O,ui=new O,Gi=new O,Es=new O,ga=new O,xa=new O,Hi=new O;function ih(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Hi.fromArray(n,s);let a=r.x*Math.abs(Hi.x)+r.y*Math.abs(Hi.y)+r.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),h=i.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var iy=new On,As=new O,rh=new O,ii=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):iy.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);let e=As.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(As,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(rh)),this.expandByPoint(As.copy(t.center).sub(rh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Jn=new O,sh=new O,_a=new O,fi=new O,oh=new O,ya=new O,ah=new O,_i=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){sh.copy(t).add(e).multiplyScalar(.5),_a.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(sh);let s=t.distanceTo(e)*.5,o=-this.direction.dot(_a),a=fi.dot(this.direction),l=-fi.dot(_a),c=fi.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=s*h,u>=0)if(f>=-m)if(f<=m){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(sh).addScaledVector(_a,f),d}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);let i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,i,r,s){oh.subVectors(e,t),ya.subVectors(i,t),ah.crossVectors(oh,ya);let o=this.direction.dot(ah),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,t);let l=a*this.direction.dot(ya.crossVectors(fi,ya));if(l<0)return null;let c=a*this.direction.dot(oh.cross(fi));if(c<0||l+c>o)return null;let h=-a*fi.dot(ah);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class n{constructor(t,e,i,r,s,o,a,l,c,h,u,f,d,m,_,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,l,c,h,u,f,d,m,_,g)}set(t,e,i,r,s,o,a,l,c,h,u,f,d,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let e=this.elements,i=t.elements,r=1/Tr.setFromMatrixColumn(t,0).length(),s=1/Tr.setFromMatrixColumn(t,1).length(),o=1/Tr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,_=c*u;e[0]=f+_*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ry,t,sy)}lookAt(t,e,i){let r=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),di.crossVectors(i,on),di.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),di.crossVectors(i,on)),di.normalize(),va.crossVectors(on,di),r[0]=di.x,r[4]=va.x,r[8]=on.x,r[1]=di.y,r[5]=va.y,r[9]=on.y,r[2]=di.z,r[6]=va.z,r[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],m=i[2],_=i[6],g=i[10],p=i[14],M=i[3],v=i[7],b=i[11],S=i[15],T=r[0],R=r[4],N=r[8],w=r[12],A=r[1],D=r[5],B=r[9],G=r[13],I=r[2],V=r[6],P=r[10],U=r[14],W=r[3],j=r[7],K=r[11],et=r[15];return s[0]=o*T+a*A+l*I+c*W,s[4]=o*R+a*D+l*V+c*j,s[8]=o*N+a*B+l*P+c*K,s[12]=o*w+a*G+l*U+c*et,s[1]=h*T+u*A+f*I+d*W,s[5]=h*R+u*D+f*V+d*j,s[9]=h*N+u*B+f*P+d*K,s[13]=h*w+u*G+f*U+d*et,s[2]=m*T+_*A+g*I+p*W,s[6]=m*R+_*D+g*V+p*j,s[10]=m*N+_*B+g*P+p*K,s[14]=m*w+_*G+g*U+p*et,s[3]=M*T+v*A+b*I+S*W,s[7]=M*R+v*D+b*V+S*j,s[11]=M*N+v*B+b*P+S*K,s[15]=M*w+v*G+b*U+S*et,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],_=t[7],g=t[11],p=t[15],M=l*d-c*f,v=a*d-c*u,b=a*f-l*u,S=o*d-c*h,T=o*f-l*h,R=o*u-a*h;return e*(_*M-g*v+p*b)-i*(m*M-g*S+p*T)+r*(m*v-_*S+p*R)-s*(m*b-_*T+g*R)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],_=t[13],g=t[14],p=t[15],M=u*g*c-_*f*c+_*l*d-a*g*d-u*l*p+a*f*p,v=m*f*c-h*g*c-m*l*d+o*g*d+h*l*p-o*f*p,b=h*_*c-m*u*c+m*a*d-o*_*d-h*a*p+o*u*p,S=m*u*l-h*_*l-m*a*f+o*_*f+h*a*g-o*u*g,T=e*M+i*v+r*b+s*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return t[0]=M*R,t[1]=(_*f*s-u*g*s-_*r*d+i*g*d+u*r*p-i*f*p)*R,t[2]=(a*g*s-_*l*s+_*r*c-i*g*c-a*r*p+i*l*p)*R,t[3]=(u*l*s-a*f*s-u*r*c+i*f*c+a*r*d-i*l*d)*R,t[4]=v*R,t[5]=(h*g*s-m*f*s+m*r*d-e*g*d-h*r*p+e*f*p)*R,t[6]=(m*l*s-o*g*s-m*r*c+e*g*c+o*r*p-e*l*p)*R,t[7]=(o*f*s-h*l*s+h*r*c-e*f*c-o*r*d+e*l*d)*R,t[8]=b*R,t[9]=(m*u*s-h*_*s-m*i*d+e*_*d+h*i*p-e*u*p)*R,t[10]=(o*_*s-m*a*s+m*i*c-e*_*c-o*i*p+e*a*p)*R,t[11]=(h*a*s-o*u*s-h*i*c+e*u*c+o*i*d-e*a*d)*R,t[12]=S*R,t[13]=(h*_*r-m*u*r+m*i*f-e*_*f-h*i*g+e*u*g)*R,t[14]=(m*a*r-o*_*r-m*i*l+e*_*l+o*i*g-e*a*g)*R,t[15]=(o*u*r-h*a*r+h*i*l-e*u*l-o*i*f+e*a*f)*R,this}scale(t){let e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,m=s*u,_=o*h,g=o*u,p=a*u,M=l*c,v=l*h,b=l*u,S=i.x,T=i.y,R=i.z;return r[0]=(1-(_+p))*S,r[1]=(d+b)*S,r[2]=(m-v)*S,r[3]=0,r[4]=(d-b)*T,r[5]=(1-(f+p))*T,r[6]=(g+M)*T,r[7]=0,r[8]=(m+v)*R,r[9]=(g-M)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let s=Tr.set(r[0],r[1],r[2]).length(),o=Tr.set(r[4],r[5],r[6]).length(),a=Tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),En.copy(this);let c=1/s,h=1/o,u=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=Cn,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),d=(i+r)/(i-r),m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===Cn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ks)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=Cn,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-r),f=-(e+t)/(e-t),d=-(i+r)/(i-r),m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===Cn)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===ks)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Tr=new O,En=new ee,ry=new O(0,0,0),sy=new O(1,1,1),di=new O,va=new O,on=new O,Zp=new ee,$p=new yn,Rn=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Zp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zp,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $p.setFromEuler(this),this.setFromQuaternion($p,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},oy=0,Jp=new O,Er=new yn,Kn=new ee,ba=new O,Cs=new O,ay=new O,ly=new yn,Kp=new O(1,0,0),jp=new O(0,1,0),Qp=new O(0,0,1),tm={type:"added"},cy={type:"removed"},Ar={type:"childadded",child:null},lh={type:"childremoved",child:null},ke=class n extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,e=new Rn,i=new yn,r=new O(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ee},normalMatrix:{value:new zt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(Kp,t)}rotateY(t){return this.rotateOnAxis(jp,t)}rotateZ(t){return this.rotateOnAxis(Qp,t)}translateOnAxis(t,e){return Jp.copy(t).applyQuaternion(this.quaternion),this.position.add(Jp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kp,t)}translateY(t){return this.translateOnAxis(jp,t)}translateZ(t){return this.translateOnAxis(Qp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ba.copy(t):ba.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Cs,ba,this.up):Kn.lookAt(ba,Cs,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),Er.setFromRotationMatrix(Kn),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tm),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cy),lh.child=t,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tm),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,ay),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,ly,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}};ke.DEFAULT_UP=new O(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new O,jn=new O,ch=new O,Qn=new O,Cr=new O,Rr=new O,em=new O,hh=new O,uh=new O,fh=new O,dh=new xe,ph=new xe,mh=new xe,gi=class n{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),An.subVectors(t,e),r.cross(An);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){An.subVectors(r,e),jn.subVectors(i,e),ch.subVectors(t,e);let o=An.dot(An),a=An.dot(jn),l=An.dot(ch),c=jn.dot(jn),h=jn.dot(ch),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,i,r,s,o,a,l){return this.getBarycoord(t,e,i,r,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,o){return dh.setScalar(0),ph.setScalar(0),mh.setScalar(0),dh.fromBufferAttribute(t,e),ph.fromBufferAttribute(t,i),mh.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(dh,s.x),o.addScaledVector(ph,s.y),o.addScaledVector(mh,s.z),o}static isFrontFacing(t,e,i,r){return An.subVectors(i,e),jn.subVectors(t,e),An.cross(jn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),An.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,s=this.c,o,a;Cr.subVectors(r,i),Rr.subVectors(s,i),hh.subVectors(t,i);let l=Cr.dot(hh),c=Rr.dot(hh);if(l<=0&&c<=0)return e.copy(i);uh.subVectors(t,r);let h=Cr.dot(uh),u=Rr.dot(uh);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Cr,o);fh.subVectors(t,s);let d=Cr.dot(fh),m=Rr.dot(fh);if(m>=0&&d<=m)return e.copy(s);let _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(Rr,a);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return em.subVectors(s,r),a=(u-h)/(u-h+(d-m)),e.copy(r).addScaledVector(em,a);let p=1/(g+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(Cr,o).addScaledVector(Rr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function gh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Dt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Zt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Zt.workingColorSpace){if(t=ou(t,1),e=kt(e,0,1),i=kt(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=gh(o,s,t+1/3),this.g=gh(o,s,t),this.b=gh(o,s,t-1/3)}return Zt.colorSpaceToWorking(this,r),this}setStyle(t,e=ln){function i(s){s!==void 0&&parseFloat(s)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let i=ng[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=Ur(t.r),this.g=Ur(t.g),this.b=Ur(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return Zt.workingToColorSpace(Be.copy(this),t),Math.round(kt(Be.r*255,0,255))*65536+Math.round(kt(Be.g*255,0,255))*256+Math.round(kt(Be.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.workingToColorSpace(Be.copy(this),e);let i=Be.r,r=Be.g,s=Be.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=ln){Zt.workingToColorSpace(Be.copy(this),t);let e=Be.r,i=Be.g,r=Be.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Ma);let i=Us(pi.h,Ma.h,e),r=Us(pi.s,Ma.s,e),s=Us(pi.l,Ma.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new Dt;Dt.NAMES=ng;var hy=0,ri=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=Yi,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Va,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(i.blending=this.blending),this.side!==ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ka&&(i.blendSrc=this.blendSrc),this.blendDst!==Va&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Bn=class extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new O,Sa=new ft,uy=0,me=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Rh,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Sa.fromBufferAttribute(this,e),Sa.applyMatrix3(t),this.setXY(e,Sa.x,Sa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Nr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nr(e,this.array)),e}setX(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nr(e,this.array)),e}setY(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nr(e,this.array)),e}setW(t,e){return this.normalized&&(e=qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array),r=qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=qe(e,this.array),i=qe(i,this.array),r=qe(r,this.array),s=qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rh&&(t.usage=this.usage),t}};var Hs=class extends me{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ws=class extends me{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ge=class extends me{constructor(t,e,i){super(new Float32Array(t),e,i)}},fy=0,xn=new ee,xh=new ke,Ir=new O,an=new On,Rs=new On,Pe=new O,Te=class n extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ru(t)?Ws:Hs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new zt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,i){return xn.makeTranslation(t,e,i),this.applyMatrix4(xn),this}scale(t,e,i){return xn.makeScale(t,e,i),this.applyMatrix4(xn),this}lookAt(t){return xh.lookAt(t),xh.updateMatrix(),this.applyMatrix4(xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ge(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let s=e[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(an.min,Rs.min),an.expandByPoint(Pe),Pe.addVectors(an.max,Rs.max),an.expandByPoint(Pe)):(an.expandByPoint(Rs.min),an.expandByPoint(Rs.max))}an.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Pe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Pe));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pe.fromBufferAttribute(a,c),l&&(Ir.fromBufferAttribute(t,c),Pe.add(Ir)),r=Math.max(r,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new O,l[N]=new O;let c=new O,h=new O,u=new O,f=new ft,d=new ft,m=new ft,_=new O,g=new O;function p(N,w,A){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,A),f.fromBufferAttribute(s,N),d.fromBufferAttribute(s,w),m.fromBufferAttribute(s,A),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let D=1/(d.x*m.y-m.x*d.y);isFinite(D)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(D),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(D),a[N].add(_),a[w].add(_),a[A].add(_),l[N].add(g),l[w].add(g),l[A].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let N=0,w=M.length;N<w;++N){let A=M[N],D=A.start,B=A.count;for(let G=D,I=D+B;G<I;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let v=new O,b=new O,S=new O,T=new O;function R(N){S.fromBufferAttribute(r,N),T.copy(S);let w=a[N];v.copy(w),v.sub(S.multiplyScalar(S.dot(w))).normalize(),b.crossVectors(T,w);let D=b.dot(l[N])<0?-1:1;o.setXYZW(N,v.x,v.y,v.z,D)}for(let N=0,w=M.length;N<w;++N){let A=M[N],D=A.start,B=A.count;for(let G=D,I=D+B;G<I;G+=3)R(t.getX(G+0)),R(t.getX(G+1)),R(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,h=new O,u=new O;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);r.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new me(f,h,u)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,i);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},nm=new ee,Wi=new _i,wa=new ii,im=new O,Ta=new O,Ea=new O,Aa=new O,_h=new O,Ca=new O,rm=new O,Ra=new O,Ve=class extends ke{constructor(t=new Te,e=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Ca.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(_h.fromBufferAttribute(u,t),o?Ca.addScaledVector(_h,h):Ca.addScaledVector(_h.sub(e),h))}e.add(Ca)}return e}raycast(t,e){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(s),Wi.copy(t.ray).recast(t.near),!(wa.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(wa,im)===null||Wi.origin.distanceToSquared(im)>(t.far-t.near)**2))&&(nm.copy(s).invert(),Wi.copy(t.ray).applyMatrix4(nm),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let b=M,S=v;b<S;b+=3){let T=a.getX(b),R=a.getX(b+1),N=a.getX(b+2);r=Ia(this,p,t,i,c,h,u,T,R,N),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let M=a.getX(g),v=a.getX(g+1),b=a.getX(g+2);r=Ia(this,o,t,i,c,h,u,M,v,b),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=o[g.materialIndex],M=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let b=M,S=v;b<S;b+=3){let T=b,R=b+1,N=b+2;r=Ia(this,p,t,i,c,h,u,T,R,N),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){let M=g,v=g+1,b=g+2;r=Ia(this,o,t,i,c,h,u,M,v,b),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function dy(n,t,e,i,r,s,o,a){let l;if(t.side===Ye?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===ni,a),l===null)return null;Ra.copy(a),Ra.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ra);return c<e.near||c>e.far?null:{distance:c,point:Ra.clone(),object:n}}function Ia(n,t,e,i,r,s,o,a,l,c){n.getVertexPosition(a,Ta),n.getVertexPosition(l,Ea),n.getVertexPosition(c,Aa);let h=dy(n,t,e,i,Ta,Ea,Aa,rm);if(h){let u=new O;gi.getBarycoord(rm,Ta,Ea,Aa,u),r&&(h.uv=gi.getInterpolatedAttribute(r,a,l,c,u,new ft)),s&&(h.uv1=gi.getInterpolatedAttribute(s,a,l,c,u,new ft)),o&&(h.normal=gi.getInterpolatedAttribute(o,a,l,c,u,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new O,materialIndex:0};gi.getNormal(Ta,Ea,Aa,f.normal),h.face=f,h.barycoord=u}return h}var Gr=class n extends Te{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,i,e,t,o,s,0),m("z","y","x",1,-1,i,e,-t,o,s,1),m("x","z","y",1,1,t,i,e,r,o,2),m("x","z","y",1,-1,t,i,-e,r,o,3),m("x","y","z",1,-1,t,e,i,r,s,4),m("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(u,2));function m(_,g,p,M,v,b,S,T,R,N,w){let A=b/R,D=S/N,B=b/2,G=S/2,I=T/2,V=R+1,P=N+1,U=0,W=0,j=new O;for(let K=0;K<P;K++){let et=K*D-G;for(let _t=0;_t<V;_t++){let Et=_t*A-B;j[_]=Et*M,j[g]=et*v,j[p]=I,c.push(j.x,j.y,j.z),j[_]=0,j[g]=0,j[p]=T>0?1:-1,h.push(j.x,j.y,j.z),u.push(_t/R),u.push(1-K/N),U+=1}}for(let K=0;K<N;K++)for(let et=0;et<R;et++){let _t=f+et+V*K,Et=f+et+V*(K+1),Ut=f+(et+1)+V*(K+1),Gt=f+(et+1)+V*K;l.push(_t,Et,Gt),l.push(Et,Ut,Gt),W+=6}a.addGroup(d,W,w),d+=W,f+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ir(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Ge(n){let t={};for(let e=0;e<n.length;e++){let i=ir(n[e]);for(let r in i)t[r]=i[r]}return t}function py(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function lu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var ig={clone:ir,merge:Ge},my=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=my,this.fragmentShader=gy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=py(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Xs=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mi=new O,sm=new ft,om=new ft,ze=class extends Xs{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,sm,om),e.subVectors(om,sm)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Pr=-90,Dr=1,Za=class extends ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ze(Pr,Dr,t,e);r.layers=this.layers,this.add(r);let s=new ze(Pr,Dr,t,e);s.layers=this.layers,this.add(s);let o=new ze(Pr,Dr,t,e);o.layers=this.layers,this.add(o);let a=new ze(Pr,Dr,t,e);a.layers=this.layers,this.add(a);let l=new ze(Pr,Dr,t,e);l.layers=this.layers,this.add(l);let c=new ze(Pr,Dr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},qs=class extends tn{constructor(t=[],e=Ti,i,r,s,o,a,l,c,h){super(t,e,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ys=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new qs(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gr(5,5,5),s=new hn({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ye,blending:kn});s.uniforms.tEquirect.value=e;let o=new Ve(r,s),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=Ue),new Za(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}},ti=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},xy={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ti;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}};var Zs=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var $s=class extends tn{constructor(t=null,e=1,i=1,r,s,o,a,l,c=De,h=De,u,f){super(null,o,a,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Js=class extends me{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Lr=new ee,am=new ee,Pa=[],lm=new On,_y=new ee,Is=new Ve,Ps=new ii,Ji=class extends Ve{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Js(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,_y)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new On),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Lr),lm.copy(t.boundingBox).applyMatrix4(Lr),this.boundingBox.union(lm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Lr),Ps.copy(t.boundingSphere).applyMatrix4(Lr),this.boundingSphere.union(Ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(t,e){let i=this.matrixWorld,r=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(i),t.ray.intersectsSphere(Ps)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Lr),am.multiplyMatrices(i,Lr),Is.matrixWorld=am,Is.raycast(t,Pa);for(let o=0,a=Pa.length;o<a;o++){let l=Pa[o];l.instanceId=s,l.object=this,e.push(l)}Pa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Js(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new $s(new Float32Array(r*this.count),r,this.count,Il,vn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},yh=new O,yy=new O,vy=new zt,_n=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=yh.subVectors(i,e).cross(yy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(yh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||vy.getNormalMatrix(t),r=this.coplanarPoint(yh).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xi=new ii,by=new ft(.5,.5),Da=new O,Wr=class{constructor(t=new _n,e=new _n,i=new _n,r=new _n,s=new _n,o=new _n){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Cn,i=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],m=s[8],_=s[9],g=s[10],p=s[11],M=s[12],v=s[13],b=s[14],S=s[15];if(r[0].setComponents(c-o,d-h,p-m,S-M).normalize(),r[1].setComponents(c+o,d+h,p+m,S+M).normalize(),r[2].setComponents(c+a,d+u,p+_,S+v).normalize(),r[3].setComponents(c-a,d-u,p-_,S-v).normalize(),i)r[4].setComponents(l,f,g,b).normalize(),r[5].setComponents(c-l,d-f,p-g,S-b).normalize();else if(r[4].setComponents(c-l,d-f,p-g,S-b).normalize(),e===Cn)r[5].setComponents(c+l,d+f,p+g,S+b).normalize();else if(e===ks)r[5].setComponents(l,f,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){Xi.center.set(0,0,0);let e=by.distanceTo(t.center);return Xi.radius=.7071067811865476+e,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Da.x=r.normal.x>0?t.max.x:t.min.x,Da.y=r.normal.y>0?t.max.y:t.min.y,Da.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Da)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var zn=class extends ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},$a=new O,Ja=new O,cm=new ee,Ds=new _i,La=new ii,vh=new O,hm=new O,Ks=class extends ke{constructor(t=new Te,e=new zn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)$a.fromBufferAttribute(e,r-1),Ja.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=$a.distanceTo(Ja);t.setAttribute("lineDistance",new ge(i,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(r),La.radius+=s,t.ray.intersectsSphere(La)===!1)return;cm.copy(r).invert(),Ds.copy(t.ray).applyMatrix4(cm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){let p=h.getX(_),M=h.getX(_+1),v=Na(this,t,Ds,l,p,M,_);v&&e.push(v)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(d),p=Na(this,t,Ds,l,_,g,m-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){let p=Na(this,t,Ds,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){let _=Na(this,t,Ds,l,m-1,d,m-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Na(n,t,e,i,r,s,o){let a=n.geometry.attributes.position;if($a.fromBufferAttribute(a,r),Ja.fromBufferAttribute(a,s),e.distanceSqToSegment($a,Ja,vh,hm)>i)return;vh.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(vh);if(!(c<t.near||c>t.far))return{distance:c,point:hm.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var um=new O,fm=new O,Ki=class extends Ks{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)um.fromBufferAttribute(e,r),fm.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+um.distanceTo(fm);t.setAttribute("lineDistance",new ge(i,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},js=class extends Ks{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}};var yi=class extends tn{constructor(t,e,i=Pn,r,s,o,a=De,l=De,c,h=Un,u=1){if(h!==Un&&h!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ka=class extends yi{constructor(t,e=Pn,i=Ti,r,s,o=De,a=De,l,c=Un){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Qs=class extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Xr=class n extends Te{constructor(t=1,e=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new O,h=new ft;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(a,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Rt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),r=0,s=i.length,o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let h=i[r],f=i[r+1]-h,d=(o-h)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new ft:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new O,r=[],s=[],o=[],a=new O,l=new ee;for(let d=0;d<=t;d++){let m=d/t;r[d]=this.getTangentAt(m,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(kt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(kt(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],d*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},qr=class extends un{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ft){let i=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ja=class extends qr{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function cu(){let n=0,t=0,e=0,i=0;function r(s,o,a,l){n=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,r(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return n+t*s+e*o+i*a}}}var Ua=new O,bh=new cu,Mh=new cu,Sh=new cu,Qa=class extends un{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new O){let i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Ua.subVectors(r[0],r[1]).add(r[0]),c=Ua);let u=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Ua.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Ua),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),bh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,_,g),Mh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,_,g),Sh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(bh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Mh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Sh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(bh.calc(l),Mh.calc(l),Sh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new O().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function dm(n,t,e,i,r){let s=(i-t)*.5,o=(r-e)*.5,a=n*n,l=n*a;return(2*e-2*i+s+o)*l+(-3*e+3*i-2*s-o)*a+s*n+e}function My(n,t){let e=1-n;return e*e*t}function Sy(n,t){return 2*(1-n)*n*t}function wy(n,t){return n*n*t}function Fs(n,t,e,i){return My(n,t)+Sy(n,e)+wy(n,i)}function Ty(n,t){let e=1-n;return e*e*e*t}function Ey(n,t){let e=1-n;return 3*e*e*n*t}function Ay(n,t){return 3*(1-n)*n*n*t}function Cy(n,t){return n*n*n*t}function Os(n,t,e,i,r){return Ty(n,t)+Ey(n,e)+Ay(n,i)+Cy(n,r)}var to=class extends un{constructor(t=new ft,e=new ft,i=new ft,r=new ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new ft){let i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Os(t,r.x,s.x,o.x,a.x),Os(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},tl=class extends un{constructor(t=new O,e=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new O){let i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Os(t,r.x,s.x,o.x,a.x),Os(t,r.y,s.y,o.y,a.y),Os(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},eo=class extends un{constructor(t=new ft,e=new ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ft){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},el=class extends un{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends un{constructor(t=new ft,e=new ft,i=new ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ft){let i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Fs(t,r.x,s.x,o.x),Fs(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},nl=class extends un{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){let i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(Fs(t,r.x,s.x,o.x),Fs(t,r.y,s.y,o.y),Fs(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},io=class extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ft){let i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],u=r[o>r.length-3?r.length-1:o+2];return i.set(dm(a,l.x,c.x,h.x,u.x),dm(a,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new ft().fromArray(r))}return this}},pm=Object.freeze({__proto__:null,ArcCurve:ja,CatmullRomCurve3:Qa,CubicBezierCurve:to,CubicBezierCurve3:tl,EllipseCurve:qr,LineCurve:eo,LineCurve3:el,QuadraticBezierCurve:no,QuadraticBezierCurve3:nl,SplineCurve:io}),il=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pm[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(new pm[r.type]().fromJSON(r))}return this}},ro=class extends il{constructor(t){super(),this.type="Path",this.currentPoint=new ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new eo(this.currentPoint.clone(),new ft(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){let s=new no(this.currentPoint.clone(),new ft(t,e),new ft(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,s,o){let a=new to(this.currentPoint.clone(),new ft(t,e),new ft(i,r),new ft(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new io(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,r,s,o),this}absarc(t,e,i,r,s,o){return this.absellipse(t,e,i,i,r,s,o),this}ellipse(t,e,i,r,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,r,s,o,a,l),this}absellipse(t,e,i,r,s,o,a,l){let c=new qr(t,e,i,r,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Yr=class extends ro{constructor(t){super(t),this.uuid=nr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(new ro().fromJSON(r))}return this}};function Ry(n,t,e=2){let i=t&&t.length,r=i?t[0]*e:n.length,s=rg(n,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=Ny(n,t,s,e)),n.length>80*e){a=n[0],l=n[1];let h=a,u=l;for(let f=e;f<r;f+=e){let d=n[f],m=n[f+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return so(s,o,e,a,l,c,0),o}function rg(n,t,e,i,r){let s;if(r===Xy(n,t,e,i)>0)for(let o=t;o<e;o+=i)s=mm(o/i|0,n[o],n[o+1],s);else for(let o=e-i;o>=t;o-=i)s=mm(o/i|0,n[o],n[o+1],s);return s&&Zr(s,s.next)&&(ao(s),s=s.next),s}function ji(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Zr(e,e.next)||pe(e.prev,e,e.next)===0)){if(ao(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function so(n,t,e,i,r,s,o){if(!n)return;!o&&s&&zy(n,i,r,s);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(s?Py(n,i,r,s):Iy(n)){t.push(l.i,n.i,c.i),ao(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Dy(ji(n),t),so(n,t,e,i,r,s,2)):o===2&&Ly(n,t,e,i,r,s):so(ji(n),t,e,i,r,s,1);break}}}function Iy(n){let t=n.prev,e=n,i=n.next;if(pe(t,e,i)>=0)return!1;let r=t.x,s=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),m=i.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Ls(r,a,s,l,o,c,m.x,m.y)&&pe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Py(n,t,e,i){let r=n.prev,s=n,o=n.next;if(pe(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,d=Math.min(a,l,c),m=Math.min(h,u,f),_=Math.max(a,l,c),g=Math.max(h,u,f),p=Ih(d,m,t,e,i),M=Ih(_,g,t,e,i),v=n.prevZ,b=n.nextZ;for(;v&&v.z>=p&&b&&b.z<=M;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&Ls(a,h,l,u,c,f,v.x,v.y)&&pe(v.prev,v,v.next)>=0||(v=v.prevZ,b.x>=d&&b.x<=_&&b.y>=m&&b.y<=g&&b!==r&&b!==o&&Ls(a,h,l,u,c,f,b.x,b.y)&&pe(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==r&&v!==o&&Ls(a,h,l,u,c,f,v.x,v.y)&&pe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;b&&b.z<=M;){if(b.x>=d&&b.x<=_&&b.y>=m&&b.y<=g&&b!==r&&b!==o&&Ls(a,h,l,u,c,f,b.x,b.y)&&pe(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Dy(n,t){let e=n;do{let i=e.prev,r=e.next.next;!Zr(i,r)&&og(i,e,e.next,r)&&oo(i,r)&&oo(r,i)&&(t.push(i.i,e.i,r.i),ao(e),ao(e.next),e=n=r),e=e.next}while(e!==n);return ji(e)}function Ly(n,t,e,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gy(o,a)){let l=ag(o,a);o=ji(o,o.next),l=ji(l,l.next),so(o,t,e,i,r,s,0),so(l,t,e,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function Ny(n,t,e,i){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*i,l=s<o-1?t[s+1]*i:n.length,c=rg(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Vy(c))}r.sort(Uy);for(let s=0;s<r.length;s++)e=Fy(r[s],e);return e}function Uy(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=i-r}return e}function Fy(n,t){let e=Oy(n,t);if(!e)return t;let i=ag(e,n);return ji(i,i.next),ji(e,e.next)}function Oy(n,t){let e=t,i=n.x,r=n.y,s=-1/0,o;if(Zr(n,e))return e;do{if(Zr(n,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&sg(r<c?i:s,r,l,c,r<c?s:i,r,e.x,e.y)){let u=Math.abs(r-e.y)/(i-e.x);oo(e,n)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&By(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function By(n,t){return pe(n.prev,n,t.prev)<0&&pe(t.next,n,n.next)<0}function zy(n,t,e,i){let r=n;do r.z===0&&(r.z=Ih(r.x,r.y,t,e,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,ky(r)}function ky(n){let t,e=1;do{let i=n,r;n=null;let s=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,e*=2}while(t>1);return n}function Ih(n,t,e,i,r){return n=(n-e)*r|0,t=(t-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Vy(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function sg(n,t,e,i,r,s,o,a){return(r-o)*(t-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(i-a)}function Ls(n,t,e,i,r,s,o,a){return!(n===o&&t===a)&&sg(n,t,e,i,r,s,o,a)}function Gy(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Hy(n,t)&&(oo(n,t)&&oo(t,n)&&Wy(n,t)&&(pe(n.prev,n,t.prev)||pe(n,t.prev,t))||Zr(n,t)&&pe(n.prev,n,n.next)>0&&pe(t.prev,t,t.next)>0)}function pe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Zr(n,t){return n.x===t.x&&n.y===t.y}function og(n,t,e,i){let r=Oa(pe(n,t,e)),s=Oa(pe(n,t,i)),o=Oa(pe(e,i,n)),a=Oa(pe(e,i,t));return!!(r!==s&&o!==a||r===0&&Fa(n,e,t)||s===0&&Fa(n,i,t)||o===0&&Fa(e,n,i)||a===0&&Fa(e,t,i))}function Fa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Oa(n){return n>0?1:n<0?-1:0}function Hy(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&og(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function oo(n,t){return pe(n.prev,n,n.next)<0?pe(n,t,n.next)>=0&&pe(n,n.prev,t)>=0:pe(n,t,n.prev)<0||pe(n,n.next,t)<0}function Wy(n,t){let e=n,i=!1,r=(n.x+t.x)/2,s=(n.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function ag(n,t){let e=Ph(n.i,n.x,n.y),i=Ph(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function mm(n,t,e,i){let r=Ph(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ao(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ph(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xy(n,t,e,i){let r=0;for(let s=t,o=e-i;s<e;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}var Dh=class{static triangulate(t,e,i=2){return Ry(t,e,i)}},Fr=class n{static area(t){let e=t.length,i=0;for(let r=e-1,s=0;s<e;r=s++)i+=t[r].x*t[s].y-t[s].x*t[r].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],r=[],s=[];gm(t),xm(i,t);let o=t.length;e.forEach(gm);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,xm(i,e[l]);let a=Dh.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function gm(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function xm(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var lo=class n extends Te{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let M=p*f-o;for(let v=0;v<c;v++){let b=v*u-s;m.push(b,-M,0),_.push(0,0,1),g.push(v/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let v=M+c*p,b=M+c*(p+1),S=M+1+c*(p+1),T=M+1+c*p;d.push(v,b,T),d.push(b,S,T)}this.setIndex(d),this.setAttribute("position",new ge(m,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var co=class n extends Te{constructor(t=new Yr([new ft(0,.5),new ft(-.5,-.5),new ft(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(s,3)),this.setAttribute("uv",new ge(o,2));function c(h){let u=r.length/3,f=h.extractPoints(e),d=f.shape,m=f.holes;Fr.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){let M=m[g];Fr.isClockWise(M)===!0&&(m[g]=M.reverse())}let _=Fr.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){let M=m[g];d=d.concat(M)}for(let g=0,p=d.length;g<p;g++){let M=d[g];r.push(M.x,M.y,0),s.push(0,0,1),o.push(M.x,M.y)}for(let g=0,p=_.length;g<p;g++){let M=_[g],v=M[0]+u,b=M[1]+u,S=M[2]+u;i.push(v,b,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return qy(e,t)}static fromJSON(t,e){let i=[];for(let r=0,s=t.shapes.length;r<s;r++){let o=e[t.shapes[r]];i.push(o)}return new n(i,t.curveSegments)}};function qy(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let r=n[e];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t}var ho=class n extends Te{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new O,f=new O,d=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){let M=[],v=p/i,b=0;p===0&&o===0?b=.5/e:p===i&&l===Math.PI&&(b=-.5/e);for(let S=0;S<=e;S++){let T=S/e;u.x=-t*Math.cos(r+T*s)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(r+T*s)*Math.sin(o+v*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(T+b,1-v),M.push(c++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){let v=h[p][M+1],b=h[p][M],S=h[p+1][M],T=h[p+1][M+1];(p!==0||o>0)&&d.push(v,b,T),(p!==i-1||l<Math.PI)&&d.push(b,S,T)}this.setIndex(d),this.setAttribute("position",new ge(m,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var rl=class extends hn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},uo=class extends ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nu,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var sl=class extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ol=class extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ba(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}var Qi=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],s=e[i-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=i+2;;){if(r===void 0){if(t<s)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=e[++i],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(r=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},al=class extends Qi{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Th,endingEnd:Th}}intervalChanged_(t,e,i){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Eh:s=t,a=2*e-i;break;case Ah:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Eh:o=t,l=2*i-e;break;case Ah:o=1,l=i+r[1]-r[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(i-e)/(r-e),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,M=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,v=(-1-d)*g+(1.5+d)*_+.5*m,b=d*g-d*_;for(let S=0;S!==a;++S)s[S]=p*o[h+S]+M*o[c+S]+v*o[l+S]+b*o[u+S];return s}},ll=class extends Qi{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},cl=class extends Qi{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},fn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ba(e,this.TimeBufferType),this.values=Ba(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ba(t.times,Array),values:Ba(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new al(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Bs:e=this.InterpolantFactoryMethodDiscrete;break;case Wa:e=this.InterpolantFactoryMethodLinear;break;case za:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Rt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return Wa;case this.InterpolantFactoryMethodSmooth:return za}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Pt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Pt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Pt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Pt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&O_(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Pt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===za,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*i,f=u-i,d=u+i;for(let m=0;m!==i;++m){let _=e[u+m];if(_!==e[f+m]||_!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Wa;var vi=class extends fn{constructor(t,e,i){super(t,e,i)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Bs;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends fn{constructor(t,e,i,r){super(t,e,i,r)}};hl.prototype.ValueTypeName="color";var ul=class extends fn{constructor(t,e,i,r){super(t,e,i,r)}};ul.prototype.ValueTypeName="number";var fl=class extends Qi{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)yn.slerpFlat(s,0,o,c-a,o,c,l);return s}},fo=class extends fn{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}};fo.prototype.ValueTypeName="quaternion";fo.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends fn{constructor(t,e,i){super(t,e,i)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=Bs;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends fn{constructor(t,e,i,r){super(t,e,i,r)}};dl.prototype.ValueTypeName="vector";var pl=class{constructor(t,e,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lg=new pl,ml=class{constructor(t){this.manager=t!==void 0?t:lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var po=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var wh=new ee,_m=new O,ym=new O,Lh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wr,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;_m.setFromMatrixPosition(t.matrixWorld),e.position.copy(_m),ym.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ym),e.updateMatrixWorld(),wh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Mi=class extends Xs{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-t,o=i+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Nh=class extends Lh{constructor(){super(new Mi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mo=class extends po{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new Nh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},go=class extends po{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var gl=class extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var hu="\\[\\]\\.:\\/",Yy=new RegExp("["+hu+"]","g"),uu="[^"+hu+"]",Zy="[^"+hu.replace("\\.","")+"]",$y=/((?:WC+[\/:])*)/.source.replace("WC",uu),Jy=/(WCOD+)?/.source.replace("WCOD",Zy),Ky=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uu),jy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uu),Qy=new RegExp("^"+$y+Jy+Ky+jy+"$"),tv=["material","materials","bones","map"],Uh=class{constructor(t,e,i){let r=i||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},he=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yy,"")}static parseTrackName(t){let e=Qy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);tv.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;Pt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Uh;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var s3=new Float32Array(1);var vm=new ee,xo=class{constructor(t,e,i=0,r=1/0){this.ray=new _i(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Pt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vm.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vm),this}intersectObject(t,e=!0,i=[]){return Fh(t,this,i,e),i.sort(bm),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Fh(t[r],this,i,e);return i.sort(bm),i}};function bm(n,t){return n.distance-t.distance}function Fh(n,t,e,i){let r=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(r=!1),r===!0&&i===!0){let s=n.children;for(let o=0,a=s.length;o<a;o++)Fh(s[o],t,e,!0)}}var $r=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var _o=class extends Fn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Rt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function fu(n,t,e,i){let r=ev(i);switch(e){case tu:return n*t;case Il:return n*t/r.components*r.byteLength;case Pl:return n*t/r.components*r.byteLength;case er:return n*t*2/r.components*r.byteLength;case Dl:return n*t*2/r.components*r.byteLength;case eu:return n*t*3/r.components*r.byteLength;case bn:return n*t*4/r.components*r.byteLength;case Ll:return n*t*4/r.components*r.byteLength;case Mo:case So:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case wo:case To:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ul:case Ol:return Math.max(n,16)*Math.max(t,8)/4;case Nl:case Fl:return Math.max(n,8)*Math.max(t,8)/2;case Bl:case zl:case Vl:case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case kl:case Hl:case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case $l:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case sc:case oc:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*16;case lc:case cc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case hc:case uc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ev(n){switch(n){case en:case Jh:return{byteLength:1,components:1};case Kr:case Kh:case Vn:return{byteLength:2,components:1};case Cl:case Rl:return{byteLength:2,components:4};case Pn:case Al:case vn:return{byteLength:4,components:1};case jh:case Qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function Pg(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function iv(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],_=u[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let _=u[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var rv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sv=`#ifdef USE_ALPHAHASH
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
#endif`,ov=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hv=`#ifdef USE_AOMAP
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
#endif`,uv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fv=`#ifdef USE_BATCHING
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
#endif`,dv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xv=`#ifdef USE_IRIDESCENCE
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
#endif`,_v=`#ifdef USE_BUMPMAP
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
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Av=`#define PI 3.141592653589793
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
} // validated`,Cv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rv=`vec3 transformedNormal = objectNormal;
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
#endif`,Iv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
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
#endif`,zv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kv=`#ifdef USE_ENVMAP
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
#endif`,Vv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xv=`#ifdef USE_GRADIENTMAP
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
}`,qv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$v=`uniform bool receiveShadow;
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
#endif`,Jv=`#ifdef USE_ENVMAP
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
#endif`,Kv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eb=`PhysicalMaterial material;
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
#endif`,nb=`uniform sampler2D dfgLUT;
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
}`,ib=`
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
#endif`,rb=`#if defined( RE_IndirectDiffuse )
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
#endif`,sb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ob=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ub=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,db=`#if defined( USE_POINTS_UV )
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
#endif`,pb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_b=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yb=`#ifdef USE_MORPHTARGETS
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
#endif`,vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eb=`#ifdef USE_NORMALMAP
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
#endif`,Ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ib=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Db=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ob=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gb=`float getShadowMask() {
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
}`,Hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wb=`#ifdef USE_SKINNING
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
#endif`,Xb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qb=`#ifdef USE_SKINNING
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
#endif`,Yb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$b=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kb=`#ifdef USE_TRANSMISSION
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
#endif`,jb=`#ifdef USE_TRANSMISSION
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
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rM=`uniform sampler2D t2D;
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
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`#include <common>
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
}`,hM=`#if DEPTH_PACKING == 3200
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
}`,uM=`#define DISTANCE
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
}`,fM=`#define DISTANCE
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
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`uniform float scale;
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
}`,gM=`uniform vec3 diffuse;
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
}`,xM=`#include <common>
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
}`,_M=`uniform vec3 diffuse;
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
}`,yM=`#define LAMBERT
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
}`,vM=`#define LAMBERT
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
}`,bM=`#define MATCAP
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
}`,MM=`#define MATCAP
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
}`,SM=`#define NORMAL
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
}`,wM=`#define NORMAL
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
}`,TM=`#define PHONG
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
}`,EM=`#define PHONG
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
}`,AM=`#define STANDARD
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
}`,CM=`#define STANDARD
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
}`,RM=`#define TOON
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
}`,IM=`#define TOON
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
}`,PM=`uniform float size;
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
}`,DM=`uniform vec3 diffuse;
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
}`,LM=`#include <common>
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
}`,NM=`uniform vec3 color;
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
}`,UM=`uniform float rotation;
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
}`,FM=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:rv,alphahash_pars_fragment:sv,alphamap_fragment:ov,alphamap_pars_fragment:av,alphatest_fragment:lv,alphatest_pars_fragment:cv,aomap_fragment:hv,aomap_pars_fragment:uv,batching_pars_vertex:fv,batching_vertex:dv,begin_vertex:pv,beginnormal_vertex:mv,bsdfs:gv,iridescence_fragment:xv,bumpmap_pars_fragment:_v,clipping_planes_fragment:yv,clipping_planes_pars_fragment:vv,clipping_planes_pars_vertex:bv,clipping_planes_vertex:Mv,color_fragment:Sv,color_pars_fragment:wv,color_pars_vertex:Tv,color_vertex:Ev,common:Av,cube_uv_reflection_fragment:Cv,defaultnormal_vertex:Rv,displacementmap_pars_vertex:Iv,displacementmap_vertex:Pv,emissivemap_fragment:Dv,emissivemap_pars_fragment:Lv,colorspace_fragment:Nv,colorspace_pars_fragment:Uv,envmap_fragment:Fv,envmap_common_pars_fragment:Ov,envmap_pars_fragment:Bv,envmap_pars_vertex:zv,envmap_physical_pars_fragment:Jv,envmap_vertex:kv,fog_vertex:Vv,fog_pars_vertex:Gv,fog_fragment:Hv,fog_pars_fragment:Wv,gradientmap_pars_fragment:Xv,lightmap_pars_fragment:qv,lights_lambert_fragment:Yv,lights_lambert_pars_fragment:Zv,lights_pars_begin:$v,lights_toon_fragment:Kv,lights_toon_pars_fragment:jv,lights_phong_fragment:Qv,lights_phong_pars_fragment:tb,lights_physical_fragment:eb,lights_physical_pars_fragment:nb,lights_fragment_begin:ib,lights_fragment_maps:rb,lights_fragment_end:sb,logdepthbuf_fragment:ob,logdepthbuf_pars_fragment:ab,logdepthbuf_pars_vertex:lb,logdepthbuf_vertex:cb,map_fragment:hb,map_pars_fragment:ub,map_particle_fragment:fb,map_particle_pars_fragment:db,metalnessmap_fragment:pb,metalnessmap_pars_fragment:mb,morphinstance_vertex:gb,morphcolor_vertex:xb,morphnormal_vertex:_b,morphtarget_pars_vertex:yb,morphtarget_vertex:vb,normal_fragment_begin:bb,normal_fragment_maps:Mb,normal_pars_fragment:Sb,normal_pars_vertex:wb,normal_vertex:Tb,normalmap_pars_fragment:Eb,clearcoat_normal_fragment_begin:Ab,clearcoat_normal_fragment_maps:Cb,clearcoat_pars_fragment:Rb,iridescence_pars_fragment:Ib,opaque_fragment:Pb,packing:Db,premultiplied_alpha_fragment:Lb,project_vertex:Nb,dithering_fragment:Ub,dithering_pars_fragment:Fb,roughnessmap_fragment:Ob,roughnessmap_pars_fragment:Bb,shadowmap_pars_fragment:zb,shadowmap_pars_vertex:kb,shadowmap_vertex:Vb,shadowmask_pars_fragment:Gb,skinbase_vertex:Hb,skinning_pars_vertex:Wb,skinning_vertex:Xb,skinnormal_vertex:qb,specularmap_fragment:Yb,specularmap_pars_fragment:Zb,tonemapping_fragment:$b,tonemapping_pars_fragment:Jb,transmission_fragment:Kb,transmission_pars_fragment:jb,uv_pars_fragment:Qb,uv_pars_vertex:tM,uv_vertex:eM,worldpos_vertex:nM,background_vert:iM,background_frag:rM,backgroundCube_vert:sM,backgroundCube_frag:oM,cube_vert:aM,cube_frag:lM,depth_vert:cM,depth_frag:hM,distance_vert:uM,distance_frag:fM,equirect_vert:dM,equirect_frag:pM,linedashed_vert:mM,linedashed_frag:gM,meshbasic_vert:xM,meshbasic_frag:_M,meshlambert_vert:yM,meshlambert_frag:vM,meshmatcap_vert:bM,meshmatcap_frag:MM,meshnormal_vert:SM,meshnormal_frag:wM,meshphong_vert:TM,meshphong_frag:EM,meshphysical_vert:AM,meshphysical_frag:CM,meshtoon_vert:RM,meshtoon_frag:IM,points_vert:PM,points_frag:DM,shadow_vert:LM,shadow_frag:NM,sprite_vert:UM,sprite_frag:FM},ut={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Wn={basic:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ge([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ge([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ge([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ge([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ge([ut.points,ut.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ge([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ge([ut.common,ut.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ge([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ge([ut.sprite,ut.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distance:{uniforms:Ge([ut.common,ut.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distance_vert,fragmentShader:Vt.distance_frag},shadow:{uniforms:Ge([ut.lights,ut.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Wn.physical={uniforms:Ge([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var pc={r:0,b:0,g:0},rr=new Rn,OM=new ee;function BM(n,t,e,i,r,s,o){let a=new Dt(0),l=s===!0?0:1,c,h,u=null,f=0,d=null;function m(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?e:t).get(b)),b}function _(v){let b=!1,S=m(v);S===null?p(a,l):S&&S.isColor&&(p(S,1),b=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,b){let S=m(b);S&&(S.isCubeTexture||S.mapping===vo)?(h===void 0&&(h=new Ve(new Gr(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:ir(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),rr.copy(b.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(OM.makeRotationFromEuler(rr)),h.material.toneMapped=Zt.getTransfer(S.colorSpace)!==te,(u!==S||f!==S.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ve(new lo(2,2),new hn({name:"BackgroundMaterial",uniforms:ir(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(S.colorSpace)!==te,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,b){v.getRGB(pc,lu(n)),i.buffers.color.setClear(pc.r,pc.g,pc.b,b,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:_,addToRenderList:g,dispose:M}}function zM(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(A,D,B,G,I){let V=!1,P=u(G,B,D);s!==P&&(s=P,c(s.object)),V=d(A,G,B,I),V&&m(A,G,B,I),I!==null&&t.update(I,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,b(A,D,B,G),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function h(A){return n.deleteVertexArray(A)}function u(A,D,B){let G=B.wireframe===!0,I=i[A.id];I===void 0&&(I={},i[A.id]=I);let V=I[D.id];V===void 0&&(V={},I[D.id]=V);let P=V[G];return P===void 0&&(P=f(l()),V[G]=P),P}function f(A){let D=[],B=[],G=[];for(let I=0;I<e;I++)D[I]=0,B[I]=0,G[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:G,object:A,attributes:{},index:null}}function d(A,D,B,G){let I=s.attributes,V=D.attributes,P=0,U=B.getAttributes();for(let W in U)if(U[W].location>=0){let K=I[W],et=V[W];if(et===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(et=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(et=A.instanceColor)),K===void 0||K.attribute!==et||et&&K.data!==et.data)return!0;P++}return s.attributesNum!==P||s.index!==G}function m(A,D,B,G){let I={},V=D.attributes,P=0,U=B.getAttributes();for(let W in U)if(U[W].location>=0){let K=V[W];K===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(K=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(K=A.instanceColor));let et={};et.attribute=K,K&&K.data&&(et.data=K.data),I[W]=et,P++}s.attributes=I,s.attributesNum=P,s.index=G}function _(){let A=s.newAttributes;for(let D=0,B=A.length;D<B;D++)A[D]=0}function g(A){p(A,0)}function p(A,D){let B=s.newAttributes,G=s.enabledAttributes,I=s.attributeDivisors;B[A]=1,G[A]===0&&(n.enableVertexAttribArray(A),G[A]=1),I[A]!==D&&(n.vertexAttribDivisor(A,D),I[A]=D)}function M(){let A=s.newAttributes,D=s.enabledAttributes;for(let B=0,G=D.length;B<G;B++)D[B]!==A[B]&&(n.disableVertexAttribArray(B),D[B]=0)}function v(A,D,B,G,I,V,P){P===!0?n.vertexAttribIPointer(A,D,B,I,V):n.vertexAttribPointer(A,D,B,G,I,V)}function b(A,D,B,G){_();let I=G.attributes,V=B.getAttributes(),P=D.defaultAttributeValues;for(let U in V){let W=V[U];if(W.location>=0){let j=I[U];if(j===void 0&&(U==="instanceMatrix"&&A.instanceMatrix&&(j=A.instanceMatrix),U==="instanceColor"&&A.instanceColor&&(j=A.instanceColor)),j!==void 0){let K=j.normalized,et=j.itemSize,_t=t.get(j);if(_t===void 0)continue;let Et=_t.buffer,Ut=_t.type,Gt=_t.bytesPerElement,Z=Ut===n.INT||Ut===n.UNSIGNED_INT||j.gpuType===Al;if(j.isInterleavedBufferAttribute){let J=j.data,ct=J.stride,Nt=j.offset;if(J.isInstancedInterleavedBuffer){for(let yt=0;yt<W.locationSize;yt++)p(W.location+yt,J.meshPerAttribute);A.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let yt=0;yt<W.locationSize;yt++)g(W.location+yt);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let yt=0;yt<W.locationSize;yt++)v(W.location+yt,et/W.locationSize,Ut,K,ct*Gt,(Nt+et/W.locationSize*yt)*Gt,Z)}else{if(j.isInstancedBufferAttribute){for(let J=0;J<W.locationSize;J++)p(W.location+J,j.meshPerAttribute);A.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let J=0;J<W.locationSize;J++)g(W.location+J);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let J=0;J<W.locationSize;J++)v(W.location+J,et/W.locationSize,Ut,K,et*Gt,et/W.locationSize*J*Gt,Z)}}else if(P!==void 0){let K=P[U];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(W.location,K);break;case 3:n.vertexAttrib3fv(W.location,K);break;case 4:n.vertexAttrib4fv(W.location,K);break;default:n.vertexAttrib1fv(W.location,K)}}}}M()}function S(){N();for(let A in i){let D=i[A];for(let B in D){let G=D[B];for(let I in G)h(G[I].object),delete G[I];delete D[B]}delete i[A]}}function T(A){if(i[A.id]===void 0)return;let D=i[A.id];for(let B in D){let G=D[B];for(let I in G)h(G[I].object),delete G[I];delete D[B]}delete i[A.id]}function R(A){for(let D in i){let B=i[D];if(B[A.id]===void 0)continue;let G=B[A.id];for(let I in G)h(G[I].object),delete G[I];delete B[A.id]}}function N(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:w,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function kM(n,t,e){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*f[_];e.update(m,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function VM(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==bn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let N=R===Vn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==en&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==vn&&!N)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Rt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:b,maxSamples:S,samples:T}}function GM(n){let t=this,e=null,i=0,r=!1,s=!1,o=new _n,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||r;return r=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=n.get(u);if(!r||m===null||m.length===0||s&&!g)s?h(null):c();else{let M=s?0:i,v=M*4,b=p.clippingState||null;l.value=b,b=h(m,f,v,d);for(let S=0;S!==v;++S)b[S]=e[S];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=d+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,b=d;v!==_;++v,b+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function HM(n){let t=new WeakMap;function e(o,a){return a===wl?o.mapping=Ti:a===Tl&&(o.mapping=tr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===wl||a===Tl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ys(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}var Ci=4,cg=[.125,.215,.35,.446,.526,.582],or=20,WM=256,Eo=new Mi,hg=new Dt,du=null,pu=0,mu=0,gu=!1,XM=new O,gc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){let{size:o=256,position:a=XM}=s;du=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(du,pu,mu),this._renderer.xr.enabled=gu,t.scissorTest=!1,Qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),du=this._renderer.getRenderTarget(),pu=this._renderer.getActiveCubeFace(),mu=this._renderer.getActiveMipmapLevel(),gu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:Vn,format:bn,colorSpace:$i,depthBuffer:!1},r=ug(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ug(t,e,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qM(s)),this._blurMaterial=ZM(s,t,e),this._ggxMaterial=YM(s,t,e)}return r}_compileMaterial(t){let e=new Ve(new Te,t);this._renderer.compile(e,Eo)}_sceneToCubeUV(t,e,i,r,s){let l=new ze(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(hg),u.toneMapping=In,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ve(new Gr,new Bn({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,p=!0):(g.color.copy(hg),p=!0);for(let v=0;v<6;v++){let b=v%3;b===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[v],s.y,s.z)):b===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[v]));let S=this._cubeSize;Qr(r,b*S,v>2?S:0,S,S),u.setRenderTarget(r),p&&u.render(_,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=M}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===Ti||t.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fg());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Qr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Eo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:m}=this,_=this._sizeLods[i],g=3*_*(i>m-Ci?i-m+Ci:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,Qr(s,g,p,3*_,2*_),r.setRenderTarget(s),r.render(a,Eo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Qr(t,g,p,3*_,2*_),r.setRenderTarget(t),r.render(a,Eo)}_blur(t,e,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[r];u.material=c;let f=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*or-1),_=s/m,g=isFinite(s)?1+Math.floor(h*_):or;g>or&&Rt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${or}`);let p=[],M=0;for(let R=0;R<or;++R){let N=R/_,w=Math.exp(-N*N/2);p.push(w),R===0?M+=w:R<g&&(M+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/M;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-i;let b=this._sizeLods[r],S=3*b*(r>v-Ci?r-v+Ci:0),T=4*(this._cubeSize-b);Qr(e,S,T,3*b,2*b),l.setRenderTarget(e),l.render(u,Eo)}};function qM(n){let t=[],e=[],i=[],r=n,s=n-Ci+1+cg.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ci?l=cg[o-n+Ci-1]:o===0&&(l=0),e.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,_=3,g=2,p=1,M=new Float32Array(_*m*d),v=new Float32Array(g*m*d),b=new Float32Array(p*m*d);for(let T=0;T<d;T++){let R=T%3*2/3-1,N=T>2?0:-1,w=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];M.set(w,_*m*T),v.set(f,g*m*T);let A=[T,T,T,T,T,T];b.set(A,p*m*T)}let S=new Te;S.setAttribute("position",new me(M,_)),S.setAttribute("uv",new me(v,g)),S.setAttribute("faceIndex",new me(b,p)),i.push(new Ve(S,null)),r>Ci&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function ug(n,t,e){let i=new cn(n,t,e);return i.texture.mapping=vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function YM(n,t,e){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ZM(n,t,e){let i=new Float32Array(or),r=new O(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_c(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function fg(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function dg(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}function $M(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===wl||l===Tl,h=l===Ti||l===tr;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new gc(n)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&r(d)?(e===null&&(e=new gc(n)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function JM(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&Br("WebGLRenderer: "+i+" extension not supported."),r}}}function KM(n,t,e,i){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],n.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,m=u.attributes.position,_=0;if(d!==null){let M=d.array;_=d.version;for(let v=0,b=M.length;v<b;v+=3){let S=M[v+0],T=M[v+1],R=M[v+2];f.push(S,T,T,R,R,S)}}else if(m!==void 0){let M=m.array;_=m.version;for(let v=0,b=M.length/3-1;v<b;v+=3){let S=v+0,T=v+1,R=v+2;f.push(S,T,T,R,R,S)}}else return;let g=new(ru(f)?Ws:Hs)(f,1);g.version=_;let p=s.get(u);p&&t.remove(p),s.set(u,g)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function jM(n,t,e){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*o),e.update(d,i,1)}function c(f,d,m){m!==0&&(n.drawElementsInstanced(i,d,s,f*o,m),e.update(d,i,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,i,1)}function u(f,d,m,_){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,_,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*_[M];e.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function QM(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:Pt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function tS(n,t,e){let i=new WeakMap,r=new xe;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==u){let w=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],v=0;d===!0&&(v=1),m===!0&&(v=2),_===!0&&(v=3);let b=a.attributes.position.count*v,S=1;b>t.maxTextureSize&&(S=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let T=new Float32Array(b*S*4*u),R=new Gs(T,b,S,u);R.type=vn,R.needsUpdate=!0;let N=v*4;for(let A=0;A<u;A++){let D=g[A],B=p[A],G=M[A],I=b*S*4*A;for(let V=0;V<D.count;V++){let P=V*N;d===!0&&(r.fromBufferAttribute(D,V),T[I+P+0]=r.x,T[I+P+1]=r.y,T[I+P+2]=r.z,T[I+P+3]=0),m===!0&&(r.fromBufferAttribute(B,V),T[I+P+4]=r.x,T[I+P+5]=r.y,T[I+P+6]=r.z,T[I+P+7]=0),_===!0&&(r.fromBufferAttribute(G,V),T[I+P+8]=r.x,T[I+P+9]=r.y,T[I+P+10]=r.z,T[I+P+11]=G.itemSize===4?r.w:1)}}f={count:u,texture:R,size:new ft(b,S)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function eS(n,t,e,i){let r=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var nS={[Gh]:"LINEAR_TONE_MAPPING",[Hh]:"REINHARD_TONE_MAPPING",[Wh]:"CINEON_TONE_MAPPING",[Xh]:"ACES_FILMIC_TONE_MAPPING",[Yh]:"AGX_TONE_MAPPING",[Zh]:"NEUTRAL_TONE_MAPPING",[qh]:"CUSTOM_TONE_MAPPING"};function iS(n,t,e,i,r){let s=new cn(t,e,{type:n,depthBuffer:i,stencilBuffer:r}),o=new cn(t,e,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),a=new Te;a.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ge([0,2,0,0,2,0],2));let l=new rl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ve(a,l),h=new Mi(-1,1,1,-1,0,1),u=null,f=null,d=!1,m,_=null,g=[],p=!1;this.setSize=function(M,v){s.setSize(M,v),o.setSize(M,v);for(let b=0;b<g.length;b++){let S=g[b];S.setSize&&S.setSize(M,v)}},this.setEffects=function(M){g=M,p=g.length>0&&g[0].isRenderPass===!0;let v=s.width,b=s.height;for(let S=0;S<g.length;S++){let T=g[S];T.setSize&&T.setSize(v,b)}},this.begin=function(M,v){if(d||M.toneMapping===In&&g.length===0)return!1;if(_=v,v!==null){let b=v.width,S=v.height;(s.width!==b||s.height!==S)&&this.setSize(b,S)}return p===!1&&M.setRenderTarget(s),m=M.toneMapping,M.toneMapping=In,!0},this.hasRenderPass=function(){return p},this.end=function(M,v){M.toneMapping=m,d=!0;let b=s,S=o;for(let T=0;T<g.length;T++){let R=g[T];if(R.enabled!==!1&&(R.render(M,S,b,v),R.needsSwap!==!1)){let N=b;b=S,S=N}}if(u!==M.outputColorSpace||f!==M.toneMapping){u=M.outputColorSpace,f=M.toneMapping,l.defines={},Zt.getTransfer(u)===te&&(l.defines.SRGB_TRANSFER="");let T=nS[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(_),M.render(c,h),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var Dg=new tn,yu=new yi(1,1),Lg=new Gs,Ng=new Ya,Ug=new qs,pg=[],mg=[],gg=new Float32Array(16),xg=new Float32Array(9),_g=new Float32Array(4);function es(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,s=pg[r];if(s===void 0&&(s=new Float32Array(r),pg[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Ae(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ce(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function yc(n,t){let e=mg[t];e===void 0&&(e=new Int32Array(t),mg[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function rS(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function sS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2fv(this.addr,t),Ce(e,t)}}function oS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;n.uniform3fv(this.addr,t),Ce(e,t)}}function aS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4fv(this.addr,t),Ce(e,t)}}function lS(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,i))return;_g.set(i),n.uniformMatrix2fv(this.addr,!1,_g),Ce(e,i)}}function cS(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,i))return;xg.set(i),n.uniformMatrix3fv(this.addr,!1,xg),Ce(e,i)}}function hS(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,i))return;gg.set(i),n.uniformMatrix4fv(this.addr,!1,gg),Ce(e,i)}}function uS(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function fS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2iv(this.addr,t),Ce(e,t)}}function dS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3iv(this.addr,t),Ce(e,t)}}function pS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4iv(this.addr,t),Ce(e,t)}}function mS(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function gS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2uiv(this.addr,t),Ce(e,t)}}function xS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3uiv(this.addr,t),Ce(e,t)}}function _S(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4uiv(this.addr,t),Ce(e,t)}}function yS(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(yu.compareFunction=e.isReversedDepthBuffer()?dc:fc,s=yu):s=Dg,e.setTexture2D(t||s,r)}function vS(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Ng,r)}function bS(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Ug,r)}function MS(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Lg,r)}function SS(n){switch(n){case 5126:return rS;case 35664:return sS;case 35665:return oS;case 35666:return aS;case 35674:return lS;case 35675:return cS;case 35676:return hS;case 5124:case 35670:return uS;case 35667:case 35671:return fS;case 35668:case 35672:return dS;case 35669:case 35673:return pS;case 5125:return mS;case 36294:return gS;case 36295:return xS;case 36296:return _S;case 35678:case 36198:case 36298:case 36306:case 35682:return yS;case 35679:case 36299:case 36307:return vS;case 35680:case 36300:case 36308:case 36293:return bS;case 36289:case 36303:case 36311:case 36292:return MS}}function wS(n,t){n.uniform1fv(this.addr,t)}function TS(n,t){let e=es(t,this.size,2);n.uniform2fv(this.addr,e)}function ES(n,t){let e=es(t,this.size,3);n.uniform3fv(this.addr,e)}function AS(n,t){let e=es(t,this.size,4);n.uniform4fv(this.addr,e)}function CS(n,t){let e=es(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function RS(n,t){let e=es(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function IS(n,t){let e=es(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function PS(n,t){n.uniform1iv(this.addr,t)}function DS(n,t){n.uniform2iv(this.addr,t)}function LS(n,t){n.uniform3iv(this.addr,t)}function NS(n,t){n.uniform4iv(this.addr,t)}function US(n,t){n.uniform1uiv(this.addr,t)}function FS(n,t){n.uniform2uiv(this.addr,t)}function OS(n,t){n.uniform3uiv(this.addr,t)}function BS(n,t){n.uniform4uiv(this.addr,t)}function zS(n,t,e){let i=this.cache,r=t.length,s=yc(e,r);Ae(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=yu:o=Dg;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function kS(n,t,e){let i=this.cache,r=t.length,s=yc(e,r);Ae(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Ng,s[o])}function VS(n,t,e){let i=this.cache,r=t.length,s=yc(e,r);Ae(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Ug,s[o])}function GS(n,t,e){let i=this.cache,r=t.length,s=yc(e,r);Ae(i,s)||(n.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Lg,s[o])}function HS(n){switch(n){case 5126:return wS;case 35664:return TS;case 35665:return ES;case 35666:return AS;case 35674:return CS;case 35675:return RS;case 35676:return IS;case 5124:case 35670:return PS;case 35667:case 35671:return DS;case 35668:case 35672:return LS;case 35669:case 35673:return NS;case 5125:return US;case 36294:return FS;case 36295:return OS;case 36296:return BS;case 35678:case 36198:case 36298:case 36306:case 35682:return zS;case 35679:case 36299:case 36307:return kS;case 35680:case 36300:case 36308:case 36293:return VS;case 36289:case 36303:case 36311:case 36292:return GS}}var vu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=SS(e.type)}},bu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=HS(e.type)}},Mu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],i)}}},xu=/(\w+)(\])?(\[|\.)?/g;function yg(n,t){n.seq.push(t),n.map[t.id]=t}function WS(n,t,e){let i=n.name,r=i.length;for(xu.lastIndex=0;;){let s=xu.exec(i),o=xu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){yg(e,c===void 0?new vu(a,n,t):new bu(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Mu(a),yg(e,u)),e=u}}}var ts=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);WS(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){let s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&i.push(o)}return i}};function vg(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var XS=37297,qS=0;function YS(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var bg=new zt;function ZS(n){Zt._getMatrix(bg,Zt.workingColorSpace,n);let t=`mat3( ${bg.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(n)){case zs:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Mg(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+YS(n.getShaderSource(t),a)}else return s}function $S(n,t){let e=ZS(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var JS={[Gh]:"Linear",[Hh]:"Reinhard",[Wh]:"Cineon",[Xh]:"ACESFilmic",[Yh]:"AgX",[Zh]:"Neutral",[qh]:"Custom"};function KS(n,t){let e=JS[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mc=new O;function jS(){Zt.getLuminanceCoefficients(mc);let n=mc.x.toFixed(4),t=mc.y.toFixed(4),e=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function tw(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ew(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(t,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Co(n){return n!==""}function Sg(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wg(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Su(n){return n.replace(nw,rw)}var iw=new Map;function rw(n,t){let e=Vt[t];if(e===void 0){let i=iw.get(t);if(i!==void 0)e=Vt[i],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Su(e)}var sw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tg(n){return n.replace(sw,ow)}function ow(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Eg(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var aw={[yo]:"SHADOWMAP_TYPE_PCF",[Jr]:"SHADOWMAP_TYPE_VSM"};function lw(n){return aw[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cw={[Ti]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE_UV"};function hw(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":cw[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var uw={[tr]:"ENVMAP_MODE_REFRACTION"};function fw(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":uw[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var dw={[Vh]:"ENVMAP_BLENDING_MULTIPLY",[Hm]:"ENVMAP_BLENDING_MIX",[Wm]:"ENVMAP_BLENDING_ADD"};function pw(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":dw[n.combine]||"ENVMAP_BLENDING_NONE"}function mw(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function gw(n,t,e,i){let r=n.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=lw(e),c=hw(e),h=fw(e),u=pw(e),f=mw(e),d=QS(e),m=tw(s),_=r.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Co).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Co).join(`
`),p.length>0&&(p+=`
`)):(g=[Eg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),p=[Eg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?Vt.tonemapping_pars_fragment:"",e.toneMapping!==In?KS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,$S("linearToOutputTexel",e.outputColorSpace),jS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Co).join(`
`)),o=Su(o),o=Sg(o,e),o=wg(o,e),a=Su(a),a=Sg(a,e),a=wg(a,e),o=Tg(o),a=Tg(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=M+g+o,b=M+p+a,S=vg(r,r.VERTEX_SHADER,v),T=vg(r,r.FRAGMENT_SHADER,b);r.attachShader(_,S),r.attachShader(_,T),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(D){if(n.debug.checkShaderErrors){let B=r.getProgramInfoLog(_)||"",G=r.getShaderInfoLog(S)||"",I=r.getShaderInfoLog(T)||"",V=B.trim(),P=G.trim(),U=I.trim(),W=!0,j=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,S,T);else{let K=Mg(r,S,"vertex"),et=Mg(r,T,"fragment");Pt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+K+`
`+et)}else V!==""?Rt("WebGLProgram: Program Info Log:",V):(P===""||U==="")&&(j=!1);j&&(D.diagnostics={runnable:W,programLog:V,vertexShader:{log:P,prefix:g},fragmentShader:{log:U,prefix:p}})}r.deleteShader(S),r.deleteShader(T),N=new ts(r,_),w=ew(r,_)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(_,XS)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=T,this}var xw=0,wu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Tu(t),e.set(t,i)),i}},Tu=class{constructor(t){this.id=xw++,this.code=t,this.usedTimes=0}};function _w(n,t,e,i,r,s,o){let a=new Vr,l=new wu,c=new Set,h=[],u=new Map,f=r.logarithmicDepthBuffer,d=r.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,A,D,B,G){let I=B.fog,V=G.geometry,P=w.isMeshStandardMaterial?B.environment:null,U=(w.isMeshStandardMaterial?e:t).get(w.envMap||P),W=U&&U.mapping===vo?U.image.height:null,j=m[w.type];w.precision!==null&&(d=r.getMaxPrecision(w.precision),d!==w.precision&&Rt("WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));let K=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,et=K!==void 0?K.length:0,_t=0;V.morphAttributes.position!==void 0&&(_t=1),V.morphAttributes.normal!==void 0&&(_t=2),V.morphAttributes.color!==void 0&&(_t=3);let Et,Ut,Gt,Z;if(j){let ie=Wn[j];Et=ie.vertexShader,Ut=ie.fragmentShader}else Et=w.vertexShader,Ut=w.fragmentShader,l.update(w),Gt=l.getVertexShaderID(w),Z=l.getFragmentShaderID(w);let J=n.getRenderTarget(),ct=n.state.buffers.depth.getReversed(),Nt=G.isInstancedMesh===!0,yt=G.isBatchedMesh===!0,qt=!!w.map,Me=!!w.matcap,Xt=!!U,Jt=!!w.aoMap,Kt=!!w.lightMap,Bt=!!w.bumpMap,fe=!!w.normalMap,L=!!w.displacementMap,de=!!w.emissiveMap,Yt=!!w.metalnessMap,jt=!!w.roughnessMap,bt=w.anisotropy>0,C=w.clearcoat>0,y=w.dispersion>0,z=w.iridescence>0,$=w.sheen>0,Q=w.transmission>0,Y=bt&&!!w.anisotropyMap,Mt=C&&!!w.clearcoatMap,st=C&&!!w.clearcoatNormalMap,St=C&&!!w.clearcoatRoughnessMap,It=z&&!!w.iridescenceMap,nt=z&&!!w.iridescenceThicknessMap,at=$&&!!w.sheenColorMap,xt=$&&!!w.sheenRoughnessMap,wt=!!w.specularMap,ot=!!w.specularColorMap,Ht=!!w.specularIntensityMap,F=Q&&!!w.transmissionMap,pt=Q&&!!w.thicknessMap,rt=!!w.gradientMap,mt=!!w.alphaMap,it=w.alphaTest>0,tt=!!w.alphaHash,lt=!!w.extensions,Ft=In;w.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ft=n.toneMapping);let le={shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:Et,fragmentShader:Ut,defines:w.defines,customVertexShaderID:Gt,customFragmentShaderID:Z,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:yt,batchingColor:yt&&G._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&G.instanceColor!==null,instancingMorph:Nt&&G.morphTexture!==null,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:$i,alphaToCoverage:!!w.alphaToCoverage,map:qt,matcap:Me,envMap:Xt,envMapMode:Xt&&U.mapping,envMapCubeUVHeight:W,aoMap:Jt,lightMap:Kt,bumpMap:Bt,normalMap:fe,displacementMap:L,emissiveMap:de,normalMapObjectSpace:fe&&w.normalMapType===Ym,normalMapTangentSpace:fe&&w.normalMapType===nu,metalnessMap:Yt,roughnessMap:jt,anisotropy:bt,anisotropyMap:Y,clearcoat:C,clearcoatMap:Mt,clearcoatNormalMap:st,clearcoatRoughnessMap:St,dispersion:y,iridescence:z,iridescenceMap:It,iridescenceThicknessMap:nt,sheen:$,sheenColorMap:at,sheenRoughnessMap:xt,specularMap:wt,specularColorMap:ot,specularIntensityMap:Ht,transmission:Q,transmissionMap:F,thicknessMap:pt,gradientMap:rt,opaque:w.transparent===!1&&w.blending===Yi&&w.alphaToCoverage===!1,alphaMap:mt,alphaTest:it,alphaHash:tt,combine:w.combine,mapUv:qt&&_(w.map.channel),aoMapUv:Jt&&_(w.aoMap.channel),lightMapUv:Kt&&_(w.lightMap.channel),bumpMapUv:Bt&&_(w.bumpMap.channel),normalMapUv:fe&&_(w.normalMap.channel),displacementMapUv:L&&_(w.displacementMap.channel),emissiveMapUv:de&&_(w.emissiveMap.channel),metalnessMapUv:Yt&&_(w.metalnessMap.channel),roughnessMapUv:jt&&_(w.roughnessMap.channel),anisotropyMapUv:Y&&_(w.anisotropyMap.channel),clearcoatMapUv:Mt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:at&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(w.sheenRoughnessMap.channel),specularMapUv:wt&&_(w.specularMap.channel),specularColorMapUv:ot&&_(w.specularColorMap.channel),specularIntensityMapUv:Ht&&_(w.specularIntensityMap.channel),transmissionMapUv:F&&_(w.transmissionMap.channel),thicknessMapUv:pt&&_(w.thicknessMap.channel),alphaMapUv:mt&&_(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(fe||bt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!V.attributes.uv&&(qt||mt),fog:!!I,useFog:w.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ct,skinning:G.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:_t,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ft,decodeVideoTexture:qt&&w.map.isVideoTexture===!0&&Zt.getTransfer(w.map.colorSpace)===te,decodeVideoTextureEmissive:de&&w.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(w.emissiveMap.colorSpace)===te,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ze,flipSided:w.side===Ye,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:lt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&w.extensions.multiDraw===!0||yt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function p(w){let A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(let D in w.defines)A.push(D),A.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(M(A,w),v(A,w),A.push(n.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function M(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function v(w,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),w.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),w.push(a.mask)}function b(w){let A=m[w.type],D;if(A){let B=Wn[A];D=ig.clone(B.uniforms)}else D=w.uniforms;return D}function S(w,A){let D=u.get(A);return D!==void 0?++D.usedTimes:(D=new gw(n,A,w,s),h.push(D),u.set(A,D)),D}function T(w){if(--w.usedTimes===0){let A=h.indexOf(w);h[A]=h[h.length-1],h.pop(),u.delete(w.cacheKey),w.destroy()}}function R(w){l.remove(w)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:b,acquireProgram:S,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:N}}function yw(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function vw(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Ag(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Cg(){let n=[],t=0,e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(u,f,d,m,_,g){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,f,d,m,_,g){let p=o(u,f,d,m,_,g);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):e.push(p)}function l(u,f,d,m,_,g){let p=o(u,f,d,m,_,g);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||vw),i.length>1&&i.sort(f||Ag),r.length>1&&r.sort(f||Ag)}function h(){for(let u=t,f=n.length;u<f;u++){let d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function bw(){let n=new WeakMap;function t(i,r){let s=n.get(i),o;return s===void 0?(o=new Cg,n.set(i,[o])):r>=s.length?(o=new Cg,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Mw(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Dt};break;case"SpotLight":e={position:new O,direction:new O,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function Sw(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var ww=0;function Tw(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ew(n){let t=new Mw,e=Sw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let r=new O,s=new ee,o=new ee;function a(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,M=0,v=0,b=0,S=0,T=0,R=0;c.sort(Tw);for(let w=0,A=c.length;w<A;w++){let D=c[w],B=D.color,G=D.intensity,I=D.distance,V=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===er?V=D.shadow.map.texture:V=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*G,u+=B.g*G,f+=B.b*G;else if(D.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(D.sh.coefficients[P],G);R++}else if(D.isDirectionalLight){let P=t.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let U=D.shadow,W=e.get(D);W.shadowIntensity=U.intensity,W.shadowBias=U.bias,W.shadowNormalBias=U.normalBias,W.shadowRadius=U.radius,W.shadowMapSize=U.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=V,i.directionalShadowMatrix[d]=D.shadow.matrix,M++}i.directional[d]=P,d++}else if(D.isSpotLight){let P=t.get(D);P.position.setFromMatrixPosition(D.matrixWorld),P.color.copy(B).multiplyScalar(G),P.distance=I,P.coneCos=Math.cos(D.angle),P.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),P.decay=D.decay,i.spot[_]=P;let U=D.shadow;if(D.map&&(i.spotLightMap[S]=D.map,S++,U.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[_]=U.matrix,D.castShadow){let W=e.get(D);W.shadowIntensity=U.intensity,W.shadowBias=U.bias,W.shadowNormalBias=U.normalBias,W.shadowRadius=U.radius,W.shadowMapSize=U.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=V,b++}_++}else if(D.isRectAreaLight){let P=t.get(D);P.color.copy(B).multiplyScalar(G),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=P,g++}else if(D.isPointLight){let P=t.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity),P.distance=D.distance,P.decay=D.decay,D.castShadow){let U=D.shadow,W=e.get(D);W.shadowIntensity=U.intensity,W.shadowBias=U.bias,W.shadowNormalBias=U.normalBias,W.shadowRadius=U.radius,W.shadowMapSize=U.mapSize,W.shadowCameraNear=U.camera.near,W.shadowCameraFar=U.camera.far,i.pointShadow[m]=W,i.pointShadowMap[m]=V,i.pointShadowMatrix[m]=D.shadow.matrix,v++}i.point[m]=P,m++}else if(D.isHemisphereLight){let P=t.get(D);P.skyColor.copy(D.color).multiplyScalar(G),P.groundColor.copy(D.groundColor).multiplyScalar(G),i.hemi[p]=P,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let N=i.hash;(N.directionalLength!==d||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==g||N.hemiLength!==p||N.numDirectionalShadows!==M||N.numPointShadows!==v||N.numSpotShadows!==b||N.numSpotMaps!==S||N.numLightProbes!==R)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=b+S-T,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,N.directionalLength=d,N.pointLength=m,N.spotLength=_,N.rectAreaLength=g,N.hemiLength=p,N.numDirectionalShadows=M,N.numPointShadows=v,N.numSpotShadows=b,N.numSpotMaps=S,N.numLightProbes=R,i.version=ww++)}function l(c,h){let u=0,f=0,d=0,m=0,_=0,g=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let v=c[p];if(v.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),u++}else if(v.isSpotLight){let b=i.spot[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),d++}else if(v.isRectAreaLight){let b=i.rectArea[m];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let b=i.hemi[_];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function Rg(n){let t=new Ew(n),e=[],i=[];function r(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Aw(n){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Rg(n),t.set(r,[a])):s>=o.length?(a=new Rg(n),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rw=`uniform sampler2D shadow_pass;
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
}`,Iw=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Pw=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Ig=new ee,Ao=new O,_u=new O;function Dw(n,t,e){let i=new Wr,r=new ft,s=new ft,o=new xe,a=new sl,l=new ol,c={},h=e.maxTextureSize,u={[ni]:Ye,[Ye]:ni,[Ze]:Ze},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Cw,fragmentShader:Rw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Te;m.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ve(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yo;let p=this.type;this.render=function(T,R,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;T.type===wm&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=yo);let w=n.getRenderTarget(),A=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),B=n.state;B.setBlending(kn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let G=p!==this.type;G&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=T.length;I<V;I++){let P=T[I],U=P.shadow;if(U===void 0){Rt("WebGLShadowMap:",P,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);let W=U.getFrameExtents();if(r.multiply(W),s.copy(U.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/W.x),r.x=s.x*W.x,U.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/W.y),r.y=s.y*W.y,U.mapSize.y=s.y)),U.map===null||G===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Jr){if(P.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new cn(r.x,r.y,{format:er,type:Vn,minFilter:Ue,magFilter:Ue,generateMipmaps:!1}),U.map.texture.name=P.name+".shadowMap",U.map.depthTexture=new yi(r.x,r.y,vn),U.map.depthTexture.name=P.name+".shadowMapDepth",U.map.depthTexture.format=Un,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=De,U.map.depthTexture.magFilter=De}else{P.isPointLight?(U.map=new Ys(r.x),U.map.depthTexture=new Ka(r.x,Pn)):(U.map=new cn(r.x,r.y),U.map.depthTexture=new yi(r.x,r.y,Pn)),U.map.depthTexture.name=P.name+".shadowMap",U.map.depthTexture.format=Un;let K=n.state.buffers.depth.getReversed();this.type===yo?(U.map.depthTexture.compareFunction=K?dc:fc,U.map.depthTexture.minFilter=Ue,U.map.depthTexture.magFilter=Ue):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=De,U.map.depthTexture.magFilter=De)}U.camera.updateProjectionMatrix()}let j=U.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<j;K++){if(U.map.isWebGLCubeRenderTarget)n.setRenderTarget(U.map,K),n.clear();else{K===0&&(n.setRenderTarget(U.map),n.clear());let et=U.getViewport(K);o.set(s.x*et.x,s.y*et.y,s.x*et.z,s.y*et.w),B.viewport(o)}if(P.isPointLight){let et=U.camera,_t=U.matrix,Et=P.distance||et.far;Et!==et.far&&(et.far=Et,et.updateProjectionMatrix()),Ao.setFromMatrixPosition(P.matrixWorld),et.position.copy(Ao),_u.copy(et.position),_u.add(Iw[K]),et.up.copy(Pw[K]),et.lookAt(_u),et.updateMatrixWorld(),_t.makeTranslation(-Ao.x,-Ao.y,-Ao.z),Ig.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),U._frustum.setFromProjectionMatrix(Ig,et.coordinateSystem,et.reversedDepth)}else U.updateMatrices(P);i=U.getFrustum(),b(R,N,U.camera,P,this.type)}U.isPointLightShadow!==!0&&this.type===Jr&&M(U,N),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(w,A,D)};function M(T,R){let N=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new cn(r.x,r.y,{format:er,type:Vn})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,N,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,N,d,_,null)}function v(T,R,N,w){let A=null,D=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)A=D;else if(A=N.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let B=A.uuid,G=R.uuid,I=c[B];I===void 0&&(I={},c[B]=I);let V=I[G];V===void 0&&(V=A.clone(),I[G]=V,R.addEventListener("dispose",S)),A=V}if(A.visible=R.visible,A.wireframe=R.wireframe,w===Jr?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:u[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,N.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let B=n.properties.get(A);B.light=N}return A}function b(T,R,N,w,A){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===Jr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);let G=t.update(T),I=T.material;if(Array.isArray(I)){let V=G.groups;for(let P=0,U=V.length;P<U;P++){let W=V[P],j=I[W.materialIndex];if(j&&j.visible){let K=v(T,j,w,A);T.onBeforeShadow(n,T,R,N,G,K,W),n.renderBufferDirect(N,null,G,K,T,W),T.onAfterShadow(n,T,R,N,G,K,W)}}}else if(I.visible){let V=v(T,I,w,A);T.onBeforeShadow(n,T,R,N,G,V,null),n.renderBufferDirect(N,null,G,V,T,null),T.onAfterShadow(n,T,R,N,G,V,null)}}let B=T.children;for(let G=0,I=B.length;G<I;G++)b(B[G],R,N,w,A)}function S(T){T.target.removeEventListener("dispose",S);for(let N in c){let w=c[N],A=T.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}var Lw={[xl]:_l,[yl]:Ml,[vl]:Sl,[Zi]:bl,[_l]:xl,[Ml]:yl,[Sl]:vl,[bl]:Zi};function Nw(n,t){function e(){let F=!1,pt=new xe,rt=null,mt=new xe(0,0,0,0);return{setMask:function(it){rt!==it&&!F&&(n.colorMask(it,it,it,it),rt=it)},setLocked:function(it){F=it},setClear:function(it,tt,lt,Ft,le){le===!0&&(it*=Ft,tt*=Ft,lt*=Ft),pt.set(it,tt,lt,Ft),mt.equals(pt)===!1&&(n.clearColor(it,tt,lt,Ft),mt.copy(pt))},reset:function(){F=!1,rt=null,mt.set(-1,0,0,0)}}}function i(){let F=!1,pt=!1,rt=null,mt=null,it=null;return{setReversed:function(tt){if(pt!==tt){let lt=t.get("EXT_clip_control");tt?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT),pt=tt;let Ft=it;it=null,this.setClear(Ft)}},getReversed:function(){return pt},setTest:function(tt){tt?J(n.DEPTH_TEST):ct(n.DEPTH_TEST)},setMask:function(tt){rt!==tt&&!F&&(n.depthMask(tt),rt=tt)},setFunc:function(tt){if(pt&&(tt=Lw[tt]),mt!==tt){switch(tt){case xl:n.depthFunc(n.NEVER);break;case _l:n.depthFunc(n.ALWAYS);break;case yl:n.depthFunc(n.LESS);break;case Zi:n.depthFunc(n.LEQUAL);break;case vl:n.depthFunc(n.EQUAL);break;case bl:n.depthFunc(n.GEQUAL);break;case Ml:n.depthFunc(n.GREATER);break;case Sl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}mt=tt}},setLocked:function(tt){F=tt},setClear:function(tt){it!==tt&&(pt&&(tt=1-tt),n.clearDepth(tt),it=tt)},reset:function(){F=!1,rt=null,mt=null,it=null,pt=!1}}}function r(){let F=!1,pt=null,rt=null,mt=null,it=null,tt=null,lt=null,Ft=null,le=null;return{setTest:function(ie){F||(ie?J(n.STENCIL_TEST):ct(n.STENCIL_TEST))},setMask:function(ie){pt!==ie&&!F&&(n.stencilMask(ie),pt=ie)},setFunc:function(ie,Dn,Xn){(rt!==ie||mt!==Dn||it!==Xn)&&(n.stencilFunc(ie,Dn,Xn),rt=ie,mt=Dn,it=Xn)},setOp:function(ie,Dn,Xn){(tt!==ie||lt!==Dn||Ft!==Xn)&&(n.stencilOp(ie,Dn,Xn),tt=ie,lt=Dn,Ft=Xn)},setLocked:function(ie){F=ie},setClear:function(ie){le!==ie&&(n.clearStencil(ie),le=ie)},reset:function(){F=!1,pt=null,rt=null,mt=null,it=null,tt=null,lt=null,Ft=null,le=null}}}let s=new e,o=new i,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,M=null,v=null,b=null,S=null,T=null,R=new Dt(0,0,0),N=0,w=!1,A=null,D=null,B=null,G=null,I=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,U=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(W)[1]),P=U>=1):W.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),P=U>=2);let j=null,K={},et=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),Et=new xe().fromArray(et),Ut=new xe().fromArray(_t);function Gt(F,pt,rt,mt){let it=new Uint8Array(4),tt=n.createTexture();n.bindTexture(F,tt),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let lt=0;lt<rt;lt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(pt,0,n.RGBA,1,1,mt,0,n.RGBA,n.UNSIGNED_BYTE,it):n.texImage2D(pt+lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,it);return tt}let Z={};Z[n.TEXTURE_2D]=Gt(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Gt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Gt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Gt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(n.DEPTH_TEST),o.setFunc(Zi),Bt(!1),fe(Oh),J(n.CULL_FACE),Jt(kn);function J(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function ct(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Nt(F,pt){return u[F]!==pt?(n.bindFramebuffer(F,pt),u[F]=pt,F===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=pt),F===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=pt),!0):!1}function yt(F,pt){let rt=d,mt=!1;if(F){rt=f.get(pt),rt===void 0&&(rt=[],f.set(pt,rt));let it=F.textures;if(rt.length!==it.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,lt=it.length;tt<lt;tt++)rt[tt]=n.COLOR_ATTACHMENT0+tt;rt.length=it.length,mt=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,mt=!0);mt&&n.drawBuffers(rt)}function qt(F){return m!==F?(n.useProgram(F),m=F,!0):!1}let Me={[xi]:n.FUNC_ADD,[Em]:n.FUNC_SUBTRACT,[Am]:n.FUNC_REVERSE_SUBTRACT};Me[Cm]=n.MIN,Me[Rm]=n.MAX;let Xt={[Im]:n.ZERO,[Pm]:n.ONE,[Dm]:n.SRC_COLOR,[ka]:n.SRC_ALPHA,[Bm]:n.SRC_ALPHA_SATURATE,[Fm]:n.DST_COLOR,[Nm]:n.DST_ALPHA,[Lm]:n.ONE_MINUS_SRC_COLOR,[Va]:n.ONE_MINUS_SRC_ALPHA,[Om]:n.ONE_MINUS_DST_COLOR,[Um]:n.ONE_MINUS_DST_ALPHA,[zm]:n.CONSTANT_COLOR,[km]:n.ONE_MINUS_CONSTANT_COLOR,[Vm]:n.CONSTANT_ALPHA,[Gm]:n.ONE_MINUS_CONSTANT_ALPHA};function Jt(F,pt,rt,mt,it,tt,lt,Ft,le,ie){if(F===kn){_===!0&&(ct(n.BLEND),_=!1);return}if(_===!1&&(J(n.BLEND),_=!0),F!==Tm){if(F!==g||ie!==w){if((p!==xi||b!==xi)&&(n.blendEquation(n.FUNC_ADD),p=xi,b=xi),ie)switch(F){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bh:n.blendFunc(n.ONE,n.ONE);break;case zh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pt("WebGLState: Invalid blending: ",F);break}else switch(F){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case zh:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kh:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",F);break}M=null,v=null,S=null,T=null,R.set(0,0,0),N=0,g=F,w=ie}return}it=it||pt,tt=tt||rt,lt=lt||mt,(pt!==p||it!==b)&&(n.blendEquationSeparate(Me[pt],Me[it]),p=pt,b=it),(rt!==M||mt!==v||tt!==S||lt!==T)&&(n.blendFuncSeparate(Xt[rt],Xt[mt],Xt[tt],Xt[lt]),M=rt,v=mt,S=tt,T=lt),(Ft.equals(R)===!1||le!==N)&&(n.blendColor(Ft.r,Ft.g,Ft.b,le),R.copy(Ft),N=le),g=F,w=!1}function Kt(F,pt){F.side===Ze?ct(n.CULL_FACE):J(n.CULL_FACE);let rt=F.side===Ye;pt&&(rt=!rt),Bt(rt),F.blending===Yi&&F.transparent===!1?Jt(kn):Jt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let mt=F.stencilWrite;a.setTest(mt),mt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),de(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(F){A!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),A=F)}function fe(F){F!==Mm?(J(n.CULL_FACE),F!==D&&(F===Oh?n.cullFace(n.BACK):F===Sm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ct(n.CULL_FACE),D=F}function L(F){F!==B&&(P&&n.lineWidth(F),B=F)}function de(F,pt,rt){F?(J(n.POLYGON_OFFSET_FILL),(G!==pt||I!==rt)&&(n.polygonOffset(pt,rt),G=pt,I=rt)):ct(n.POLYGON_OFFSET_FILL)}function Yt(F){F?J(n.SCISSOR_TEST):ct(n.SCISSOR_TEST)}function jt(F){F===void 0&&(F=n.TEXTURE0+V-1),j!==F&&(n.activeTexture(F),j=F)}function bt(F,pt,rt){rt===void 0&&(j===null?rt=n.TEXTURE0+V-1:rt=j);let mt=K[rt];mt===void 0&&(mt={type:void 0,texture:void 0},K[rt]=mt),(mt.type!==F||mt.texture!==pt)&&(j!==rt&&(n.activeTexture(rt),j=rt),n.bindTexture(F,pt||Z[F]),mt.type=F,mt.texture=pt)}function C(){let F=K[j];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(F){Pt("WebGLState:",F)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(F){Pt("WebGLState:",F)}}function $(){try{n.texSubImage2D(...arguments)}catch(F){Pt("WebGLState:",F)}}function Q(){try{n.texSubImage3D(...arguments)}catch(F){Pt("WebGLState:",F)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(F){Pt("WebGLState:",F)}}function Mt(){try{n.compressedTexSubImage3D(...arguments)}catch(F){Pt("WebGLState:",F)}}function st(){try{n.texStorage2D(...arguments)}catch(F){Pt("WebGLState:",F)}}function St(){try{n.texStorage3D(...arguments)}catch(F){Pt("WebGLState:",F)}}function It(){try{n.texImage2D(...arguments)}catch(F){Pt("WebGLState:",F)}}function nt(){try{n.texImage3D(...arguments)}catch(F){Pt("WebGLState:",F)}}function at(F){Et.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Et.copy(F))}function xt(F){Ut.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ut.copy(F))}function wt(F,pt){let rt=c.get(pt);rt===void 0&&(rt=new WeakMap,c.set(pt,rt));let mt=rt.get(F);mt===void 0&&(mt=n.getUniformBlockIndex(pt,F.name),rt.set(F,mt))}function ot(F,pt){let mt=c.get(pt).get(F);l.get(pt)!==mt&&(n.uniformBlockBinding(pt,mt,F.__bindingPointIndex),l.set(pt,mt))}function Ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},j=null,K={},u={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,M=null,v=null,b=null,S=null,T=null,R=new Dt(0,0,0),N=0,w=!1,A=null,D=null,B=null,G=null,I=null,Et.set(0,0,n.canvas.width,n.canvas.height),Ut.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:ct,bindFramebuffer:Nt,drawBuffers:yt,useProgram:qt,setBlending:Jt,setMaterial:Kt,setFlipSided:Bt,setCullFace:fe,setLineWidth:L,setPolygonOffset:de,setScissorTest:Yt,activeTexture:jt,bindTexture:bt,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:z,texImage2D:It,texImage3D:nt,updateUBOMapping:wt,uniformBlockBinding:ot,texStorage2D:st,texStorage3D:St,texSubImage2D:$,texSubImage3D:Q,compressedTexSubImage2D:Y,compressedTexSubImage3D:Mt,scissor:at,viewport:xt,reset:Ht}}function Uw(n,t,e,i,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,y){return d?new OffscreenCanvas(C,y):Vs("canvas")}function _(C,y,z){let $=1,Q=bt(C);if((Q.width>z||Q.height>z)&&($=z/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Y=Math.floor($*Q.width),Mt=Math.floor($*Q.height);u===void 0&&(u=m(Y,Mt));let st=y?m(Y,Mt):u;return st.width=Y,st.height=Mt,st.getContext("2d").drawImage(C,0,0,Y,Mt),Rt("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+Mt+")."),st}else return"data"in C&&Rt("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(C,y,z,$,Q=!1){if(C!==null){if(n[C]!==void 0)return n[C];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=y;if(y===n.RED&&(z===n.FLOAT&&(Y=n.R32F),z===n.HALF_FLOAT&&(Y=n.R16F),z===n.UNSIGNED_BYTE&&(Y=n.R8)),y===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(Y=n.R8UI),z===n.UNSIGNED_SHORT&&(Y=n.R16UI),z===n.UNSIGNED_INT&&(Y=n.R32UI),z===n.BYTE&&(Y=n.R8I),z===n.SHORT&&(Y=n.R16I),z===n.INT&&(Y=n.R32I)),y===n.RG&&(z===n.FLOAT&&(Y=n.RG32F),z===n.HALF_FLOAT&&(Y=n.RG16F),z===n.UNSIGNED_BYTE&&(Y=n.RG8)),y===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(Y=n.RG8UI),z===n.UNSIGNED_SHORT&&(Y=n.RG16UI),z===n.UNSIGNED_INT&&(Y=n.RG32UI),z===n.BYTE&&(Y=n.RG8I),z===n.SHORT&&(Y=n.RG16I),z===n.INT&&(Y=n.RG32I)),y===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),z===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),z===n.UNSIGNED_INT&&(Y=n.RGB32UI),z===n.BYTE&&(Y=n.RGB8I),z===n.SHORT&&(Y=n.RGB16I),z===n.INT&&(Y=n.RGB32I)),y===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),z===n.UNSIGNED_INT&&(Y=n.RGBA32UI),z===n.BYTE&&(Y=n.RGBA8I),z===n.SHORT&&(Y=n.RGBA16I),z===n.INT&&(Y=n.RGBA32I)),y===n.RGB&&(z===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),y===n.RGBA){let Mt=Q?zs:Zt.getTransfer($);z===n.FLOAT&&(Y=n.RGBA32F),z===n.HALF_FLOAT&&(Y=n.RGBA16F),z===n.UNSIGNED_BYTE&&(Y=Mt===te?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function b(C,y){let z;return C?y===null||y===Pn||y===jr?z=n.DEPTH24_STENCIL8:y===vn?z=n.DEPTH32F_STENCIL8:y===Kr&&(z=n.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Pn||y===jr?z=n.DEPTH_COMPONENT24:y===vn?z=n.DEPTH_COMPONENT32F:y===Kr&&(z=n.DEPTH_COMPONENT16),z}function S(C,y){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==De&&C.minFilter!==Ue?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function T(C){let y=C.target;y.removeEventListener("dispose",T),N(y),y.isVideoTexture&&h.delete(y)}function R(C){let y=C.target;y.removeEventListener("dispose",R),A(y)}function N(C){let y=i.get(C);if(y.__webglInit===void 0)return;let z=C.source,$=f.get(z);if($){let Q=$[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(C),Object.keys($).length===0&&f.delete(z)}i.remove(C)}function w(C){let y=i.get(C);n.deleteTexture(y.__webglTexture);let z=C.source,$=f.get(z);delete $[y.__cacheKey],o.memory.textures--}function A(C){let y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let Q=0;Q<y.__webglFramebuffer[$].length;Q++)n.deleteFramebuffer(y.__webglFramebuffer[$][Q]);else n.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)n.deleteFramebuffer(y.__webglFramebuffer[$]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=C.textures;for(let $=0,Q=z.length;$<Q;$++){let Y=i.get(z[$]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(z[$])}i.remove(C)}let D=0;function B(){D=0}function G(){let C=D;return C>=r.maxTextures&&Rt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),D+=1,C}function I(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function V(C,y){let z=i.get(C);if(C.isVideoTexture&&Yt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let $=C.image;if($===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,C,y);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+y)}function P(C,y){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Z(z,C,y);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+y)}function U(C,y){let z=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){Z(z,C,y);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+y)}function W(C,y){let z=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){J(z,C,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+y)}let j={[Ga]:n.REPEAT,[Nn]:n.CLAMP_TO_EDGE,[Ha]:n.MIRRORED_REPEAT},K={[De]:n.NEAREST,[Xm]:n.NEAREST_MIPMAP_NEAREST,[bo]:n.NEAREST_MIPMAP_LINEAR,[Ue]:n.LINEAR,[El]:n.LINEAR_MIPMAP_NEAREST,[Ei]:n.LINEAR_MIPMAP_LINEAR},et={[Zm]:n.NEVER,[Qm]:n.ALWAYS,[$m]:n.LESS,[fc]:n.LEQUAL,[Jm]:n.EQUAL,[dc]:n.GEQUAL,[Km]:n.GREATER,[jm]:n.NOTEQUAL};function _t(C,y){if(y.type===vn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ue||y.magFilter===El||y.magFilter===bo||y.magFilter===Ei||y.minFilter===Ue||y.minFilter===El||y.minFilter===bo||y.minFilter===Ei)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,j[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,j[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,j[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,K[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,K[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,et[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===De||y.minFilter!==bo&&y.minFilter!==Ei||y.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Et(C,y){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",T));let $=y.source,Q=f.get($);Q===void 0&&(Q={},f.set($,Q));let Y=I(y);if(Y!==C.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[Y].usedTimes++;let Mt=Q[C.__cacheKey];Mt!==void 0&&(Q[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&w(y)),C.__cacheKey=Y,C.__webglTexture=Q[Y].texture}return z}function Ut(C,y,z){return Math.floor(Math.floor(C/z)/y)}function Gt(C,y,z,$){let Y=C.updateRanges;if(Y.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,z,$,y.data);else{Y.sort((nt,at)=>nt.start-at.start);let Mt=0;for(let nt=1;nt<Y.length;nt++){let at=Y[Mt],xt=Y[nt],wt=at.start+at.count,ot=Ut(xt.start,y.width,4),Ht=Ut(at.start,y.width,4);xt.start<=wt+1&&ot===Ht&&Ut(xt.start+xt.count-1,y.width,4)===ot?at.count=Math.max(at.count,xt.start+xt.count-at.start):(++Mt,Y[Mt]=xt)}Y.length=Mt+1;let st=n.getParameter(n.UNPACK_ROW_LENGTH),St=n.getParameter(n.UNPACK_SKIP_PIXELS),It=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let nt=0,at=Y.length;nt<at;nt++){let xt=Y[nt],wt=Math.floor(xt.start/4),ot=Math.ceil(xt.count/4),Ht=wt%y.width,F=Math.floor(wt/y.width),pt=ot,rt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ht),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),e.texSubImage2D(n.TEXTURE_2D,0,Ht,F,pt,rt,z,$,y.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,st),n.pixelStorei(n.UNPACK_SKIP_PIXELS,St),n.pixelStorei(n.UNPACK_SKIP_ROWS,It)}}function Z(C,y,z){let $=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=n.TEXTURE_3D);let Q=Et(C,y),Y=y.source;e.bindTexture($,C.__webglTexture,n.TEXTURE0+z);let Mt=i.get(Y);if(Y.version!==Mt.__version||Q===!0){e.activeTexture(n.TEXTURE0+z);let st=Zt.getPrimaries(Zt.workingColorSpace),St=y.colorSpace===si?null:Zt.getPrimaries(y.colorSpace),It=y.colorSpace===si||st===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let nt=_(y.image,!1,r.maxTextureSize);nt=jt(y,nt);let at=s.convert(y.format,y.colorSpace),xt=s.convert(y.type),wt=v(y.internalFormat,at,xt,y.colorSpace,y.isVideoTexture);_t($,y);let ot,Ht=y.mipmaps,F=y.isVideoTexture!==!0,pt=Mt.__version===void 0||Q===!0,rt=Y.dataReady,mt=S(y,nt);if(y.isDepthTexture)wt=b(y.format===Ai,y.type),pt&&(F?e.texStorage2D(n.TEXTURE_2D,1,wt,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,wt,nt.width,nt.height,0,at,xt,null));else if(y.isDataTexture)if(Ht.length>0){F&&pt&&e.texStorage2D(n.TEXTURE_2D,mt,wt,Ht[0].width,Ht[0].height);for(let it=0,tt=Ht.length;it<tt;it++)ot=Ht[it],F?rt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,ot.width,ot.height,at,xt,ot.data):e.texImage2D(n.TEXTURE_2D,it,wt,ot.width,ot.height,0,at,xt,ot.data);y.generateMipmaps=!1}else F?(pt&&e.texStorage2D(n.TEXTURE_2D,mt,wt,nt.width,nt.height),rt&&Gt(y,nt,at,xt)):e.texImage2D(n.TEXTURE_2D,0,wt,nt.width,nt.height,0,at,xt,nt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){F&&pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,wt,Ht[0].width,Ht[0].height,nt.depth);for(let it=0,tt=Ht.length;it<tt;it++)if(ot=Ht[it],y.format!==bn)if(at!==null)if(F){if(rt)if(y.layerUpdates.size>0){let lt=fu(ot.width,ot.height,y.format,y.type);for(let Ft of y.layerUpdates){let le=ot.data.subarray(Ft*lt/ot.data.BYTES_PER_ELEMENT,(Ft+1)*lt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,Ft,ot.width,ot.height,1,at,le)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,ot.width,ot.height,nt.depth,at,ot.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,wt,ot.width,ot.height,nt.depth,0,ot.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,ot.width,ot.height,nt.depth,at,xt,ot.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,wt,ot.width,ot.height,nt.depth,0,at,xt,ot.data)}else{F&&pt&&e.texStorage2D(n.TEXTURE_2D,mt,wt,Ht[0].width,Ht[0].height);for(let it=0,tt=Ht.length;it<tt;it++)ot=Ht[it],y.format!==bn?at!==null?F?rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,ot.width,ot.height,at,ot.data):e.compressedTexImage2D(n.TEXTURE_2D,it,wt,ot.width,ot.height,0,ot.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?rt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,ot.width,ot.height,at,xt,ot.data):e.texImage2D(n.TEXTURE_2D,it,wt,ot.width,ot.height,0,at,xt,ot.data)}else if(y.isDataArrayTexture)if(F){if(pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,wt,nt.width,nt.height,nt.depth),rt)if(y.layerUpdates.size>0){let it=fu(nt.width,nt.height,y.format,y.type);for(let tt of y.layerUpdates){let lt=nt.data.subarray(tt*it/nt.data.BYTES_PER_ELEMENT,(tt+1)*it/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,nt.width,nt.height,1,at,xt,lt)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,at,xt,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,wt,nt.width,nt.height,nt.depth,0,at,xt,nt.data);else if(y.isData3DTexture)F?(pt&&e.texStorage3D(n.TEXTURE_3D,mt,wt,nt.width,nt.height,nt.depth),rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,at,xt,nt.data)):e.texImage3D(n.TEXTURE_3D,0,wt,nt.width,nt.height,nt.depth,0,at,xt,nt.data);else if(y.isFramebufferTexture){if(pt)if(F)e.texStorage2D(n.TEXTURE_2D,mt,wt,nt.width,nt.height);else{let it=nt.width,tt=nt.height;for(let lt=0;lt<mt;lt++)e.texImage2D(n.TEXTURE_2D,lt,wt,it,tt,0,at,xt,null),it>>=1,tt>>=1}}else if(Ht.length>0){if(F&&pt){let it=bt(Ht[0]);e.texStorage2D(n.TEXTURE_2D,mt,wt,it.width,it.height)}for(let it=0,tt=Ht.length;it<tt;it++)ot=Ht[it],F?rt&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,at,xt,ot):e.texImage2D(n.TEXTURE_2D,it,wt,at,xt,ot);y.generateMipmaps=!1}else if(F){if(pt){let it=bt(nt);e.texStorage2D(n.TEXTURE_2D,mt,wt,it.width,it.height)}rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at,xt,nt)}else e.texImage2D(n.TEXTURE_2D,0,wt,at,xt,nt);g(y)&&p($),Mt.__version=Y.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function J(C,y,z){if(y.image.length!==6)return;let $=Et(C,y),Q=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+z);let Y=i.get(Q);if(Q.version!==Y.__version||$===!0){e.activeTexture(n.TEXTURE0+z);let Mt=Zt.getPrimaries(Zt.workingColorSpace),st=y.colorSpace===si?null:Zt.getPrimaries(y.colorSpace),St=y.colorSpace===si||Mt===st?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let It=y.isCompressedTexture||y.image[0].isCompressedTexture,nt=y.image[0]&&y.image[0].isDataTexture,at=[];for(let tt=0;tt<6;tt++)!It&&!nt?at[tt]=_(y.image[tt],!0,r.maxCubemapSize):at[tt]=nt?y.image[tt].image:y.image[tt],at[tt]=jt(y,at[tt]);let xt=at[0],wt=s.convert(y.format,y.colorSpace),ot=s.convert(y.type),Ht=v(y.internalFormat,wt,ot,y.colorSpace),F=y.isVideoTexture!==!0,pt=Y.__version===void 0||$===!0,rt=Q.dataReady,mt=S(y,xt);_t(n.TEXTURE_CUBE_MAP,y);let it;if(It){F&&pt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Ht,xt.width,xt.height);for(let tt=0;tt<6;tt++){it=at[tt].mipmaps;for(let lt=0;lt<it.length;lt++){let Ft=it[lt];y.format!==bn?wt!==null?F?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt,0,0,Ft.width,Ft.height,wt,Ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt,Ht,Ft.width,Ft.height,0,Ft.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt,0,0,Ft.width,Ft.height,wt,ot,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt,Ht,Ft.width,Ft.height,0,wt,ot,Ft.data)}}}else{if(it=y.mipmaps,F&&pt){it.length>0&&mt++;let tt=bt(at[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Ht,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(nt){F?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,at[tt].width,at[tt].height,wt,ot,at[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ht,at[tt].width,at[tt].height,0,wt,ot,at[tt].data);for(let lt=0;lt<it.length;lt++){let le=it[lt].image[tt].image;F?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt+1,0,0,le.width,le.height,wt,ot,le.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt+1,Ht,le.width,le.height,0,wt,ot,le.data)}}else{F?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,wt,ot,at[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ht,wt,ot,at[tt]);for(let lt=0;lt<it.length;lt++){let Ft=it[lt];F?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt+1,0,0,wt,ot,Ft.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt+1,Ht,wt,ot,Ft.image[tt])}}}g(y)&&p(n.TEXTURE_CUBE_MAP),Y.__version=Q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ct(C,y,z,$,Q,Y){let Mt=s.convert(z.format,z.colorSpace),st=s.convert(z.type),St=v(z.internalFormat,Mt,st,z.colorSpace),It=i.get(y),nt=i.get(z);if(nt.__renderTarget=y,!It.__hasExternalTextures){let at=Math.max(1,y.width>>Y),xt=Math.max(1,y.height>>Y);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,St,at,xt,y.depth,0,Mt,st,null):e.texImage2D(Q,Y,St,at,xt,0,Mt,st,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),de(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Q,nt.__webglTexture,0,L(y)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Q,nt.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(C,y,z){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){let $=y.depthTexture,Q=$&&$.isDepthTexture?$.type:null,Y=b(y.stencilBuffer,Q),Mt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;de(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(y),Y,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(y),Y,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Y,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Mt,n.RENDERBUFFER,C)}else{let $=y.textures;for(let Q=0;Q<$.length;Q++){let Y=$[Q],Mt=s.convert(Y.format,Y.colorSpace),st=s.convert(Y.type),St=v(Y.internalFormat,Mt,st,Y.colorSpace);de(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,L(y),St,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,L(y),St,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,St,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function yt(C,y,z){let $=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",T)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),_t(n.TEXTURE_CUBE_MAP,y.depthTexture);let It=s.convert(y.depthTexture.format),nt=s.convert(y.depthTexture.type),at;y.depthTexture.format===Un?at=n.DEPTH_COMPONENT24:y.depthTexture.format===Ai&&(at=n.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,at,y.width,y.height,0,It,nt,null)}}else V(y.depthTexture,0);let Y=Q.__webglTexture,Mt=L(y),st=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,St=y.depthTexture.format===Ai?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Un)de(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,St,st,Y,0,Mt):n.framebufferTexture2D(n.FRAMEBUFFER,St,st,Y,0);else if(y.depthTexture.format===Ai)de(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,St,st,Y,0,Mt):n.framebufferTexture2D(n.FRAMEBUFFER,St,st,Y,0);else throw new Error("Unknown depthTexture format")}function qt(C){let y=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let $=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=$}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let $=0;$<6;$++)yt(y.__webglFramebuffer[$],C,$);else{let $=C.texture.mipmaps;$&&$.length>0?yt(y.__webglFramebuffer[0],C,0):yt(y.__webglFramebuffer,C,0)}else if(z){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=n.createRenderbuffer(),Nt(y.__webglDepthbuffer[$],C,!1);else{let Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}else{let $=C.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Nt(y.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,Y)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(C,y,z){let $=i.get(C);y!==void 0&&ct($.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&qt(C)}function Xt(C){let y=C.texture,z=i.get(C),$=i.get(y);C.addEventListener("dispose",R);let Q=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Mt=Q.length>1;if(Mt||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=y.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[st]=[];for(let St=0;St<y.mipmaps.length;St++)z.__webglFramebuffer[st][St]=n.createFramebuffer()}else z.__webglFramebuffer[st]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let st=0;st<y.mipmaps.length;st++)z.__webglFramebuffer[st]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(Mt)for(let st=0,St=Q.length;st<St;st++){let It=i.get(Q[st]);It.__webglTexture===void 0&&(It.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&de(C)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let st=0;st<Q.length;st++){let St=Q[st];z.__webglColorRenderbuffer[st]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[st]);let It=s.convert(St.format,St.colorSpace),nt=s.convert(St.type),at=v(St.internalFormat,It,nt,St.colorSpace,C.isXRRenderTarget===!0),xt=L(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,at,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,z.__webglColorRenderbuffer[st])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Nt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),_t(n.TEXTURE_CUBE_MAP,y);for(let st=0;st<6;st++)if(y.mipmaps&&y.mipmaps.length>0)for(let St=0;St<y.mipmaps.length;St++)ct(z.__webglFramebuffer[st][St],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,St);else ct(z.__webglFramebuffer[st],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);g(y)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let st=0,St=Q.length;st<St;st++){let It=Q[st],nt=i.get(It),at=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(at,nt.__webglTexture),_t(at,It),ct(z.__webglFramebuffer,C,It,n.COLOR_ATTACHMENT0+st,at,0),g(It)&&p(at)}e.unbindTexture()}else{let st=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(st=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,$.__webglTexture),_t(st,y),y.mipmaps&&y.mipmaps.length>0)for(let St=0;St<y.mipmaps.length;St++)ct(z.__webglFramebuffer[St],C,y,n.COLOR_ATTACHMENT0,st,St);else ct(z.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,st,0);g(y)&&p(st),e.unbindTexture()}C.depthBuffer&&qt(C)}function Jt(C){let y=C.textures;for(let z=0,$=y.length;z<$;z++){let Q=y[z];if(g(Q)){let Y=M(C),Mt=i.get(Q).__webglTexture;e.bindTexture(Y,Mt),p(Y),e.unbindTexture()}}}let Kt=[],Bt=[];function fe(C){if(C.samples>0){if(de(C)===!1){let y=C.textures,z=C.width,$=C.height,Q=n.COLOR_BUFFER_BIT,Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Mt=i.get(C),st=y.length>1;if(st)for(let It=0;It<y.length;It++)e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let St=C.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let It=0;It<y.length;It++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),st){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[It]);let nt=i.get(y[It]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,nt,0)}n.blitFramebuffer(0,0,z,$,0,0,z,$,Q,n.NEAREST),l===!0&&(Kt.length=0,Bt.length=0,Kt.push(n.COLOR_ATTACHMENT0+It),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Kt.push(Y),Bt.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Bt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Kt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),st)for(let It=0;It<y.length;It++){e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,Mt.__webglColorRenderbuffer[It]);let nt=i.get(y[It]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function L(C){return Math.min(r.maxSamples,C.samples)}function de(C){let y=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Yt(C){let y=o.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function jt(C,y){let z=C.colorSpace,$=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==$i&&z!==si&&(Zt.getTransfer(z)===te?($!==bn||Q!==en)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",z)),y}function bt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=V,this.setTexture2DArray=P,this.setTexture3D=U,this.setTextureCube=W,this.rebindTextures=Me,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=qt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Fw(n,t){function e(i,r=si){let s,o=Zt.getTransfer(r);if(i===en)return n.UNSIGNED_BYTE;if(i===Cl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Qh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jh)return n.BYTE;if(i===Kh)return n.SHORT;if(i===Kr)return n.UNSIGNED_SHORT;if(i===Al)return n.INT;if(i===Pn)return n.UNSIGNED_INT;if(i===vn)return n.FLOAT;if(i===Vn)return n.HALF_FLOAT;if(i===tu)return n.ALPHA;if(i===eu)return n.RGB;if(i===bn)return n.RGBA;if(i===Un)return n.DEPTH_COMPONENT;if(i===Ai)return n.DEPTH_STENCIL;if(i===Il)return n.RED;if(i===Pl)return n.RED_INTEGER;if(i===er)return n.RG;if(i===Dl)return n.RG_INTEGER;if(i===Ll)return n.RGBA_INTEGER;if(i===Mo||i===So||i===wo||i===To)if(o===te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===To)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Ul||i===Fl||i===Ol)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ol)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bl||i===zl||i===kl||i===Vl||i===Gl||i===Hl||i===Wl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bl||i===zl)return o===te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===kl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vl)return s.COMPRESSED_R11_EAC;if(i===Gl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Hl)return s.COMPRESSED_RG11_EAC;if(i===Wl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xl||i===ql||i===Yl||i===Zl||i===$l||i===Jl||i===Kl||i===jl||i===Ql||i===tc||i===ec||i===nc||i===ic||i===rc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ql)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$l)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jl)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ql)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ec)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ic)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rc)return o===te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sc||i===oc||i===ac)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===sc)return o===te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lc||i===cc||i===hc||i===uc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===lc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Ow=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bw=`
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

}`,Eu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Qs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new hn({vertexShader:Ow,fragmentShader:Bw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ve(new lo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Au=class extends Fn{constructor(t,e){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,_=typeof XRWebGLBinding<"u",g=new Eu,p={},M=e.getContextAttributes(),v=null,b=null,S=[],T=[],R=new ft,N=null,w=new ze;w.viewport=new xe;let A=new ze;A.viewport=new xe;let D=[w,A],B=new gl,G=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let J=S[Z];return J===void 0&&(J=new Hr,S[Z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Z){let J=S[Z];return J===void 0&&(J=new Hr,S[Z]=J),J.getGripSpace()},this.getHand=function(Z){let J=S[Z];return J===void 0&&(J=new Hr,S[Z]=J),J.getHandSpace()};function V(Z){let J=T.indexOf(Z.inputSource);if(J===-1)return;let ct=S[J];ct!==void 0&&(ct.update(Z.inputSource,Z.frame,c||o),ct.dispatchEvent({type:Z.type,data:Z.inputSource}))}function P(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",U);for(let Z=0;Z<S.length;Z++){let J=T[Z];J!==null&&(T[Z]=null,S[Z].disconnect(J))}G=null,I=null,g.reset();for(let Z in p)delete p[Z];t.setRenderTarget(v),d=null,f=null,u=null,r=null,b=null,Gt.stop(),i.isPresenting=!1,t.setPixelRatio(N),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(v=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",P),r.addEventListener("inputsourceschange",U),M.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,Nt=null,yt=null;M.depth&&(yt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=M.stencil?Ai:Un,Nt=M.stencil?jr:Pn);let qt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(qt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new cn(f.textureWidth,f.textureHeight,{format:bn,type:en,depthTexture:new yi(f.textureWidth,f.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ct={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,ct),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new cn(d.framebufferWidth,d.framebufferHeight,{format:bn,type:en,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Gt.setContext(r),Gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function U(Z){for(let J=0;J<Z.removed.length;J++){let ct=Z.removed[J],Nt=T.indexOf(ct);Nt>=0&&(T[Nt]=null,S[Nt].disconnect(ct))}for(let J=0;J<Z.added.length;J++){let ct=Z.added[J],Nt=T.indexOf(ct);if(Nt===-1){for(let qt=0;qt<S.length;qt++)if(qt>=T.length){T.push(ct),Nt=qt;break}else if(T[qt]===null){T[qt]=ct,Nt=qt;break}if(Nt===-1)break}let yt=S[Nt];yt&&yt.connect(ct)}}let W=new O,j=new O;function K(Z,J,ct){W.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(ct.matrixWorld);let Nt=W.distanceTo(j),yt=J.projectionMatrix.elements,qt=ct.projectionMatrix.elements,Me=yt[14]/(yt[10]-1),Xt=yt[14]/(yt[10]+1),Jt=(yt[9]+1)/yt[5],Kt=(yt[9]-1)/yt[5],Bt=(yt[8]-1)/yt[0],fe=(qt[8]+1)/qt[0],L=Me*Bt,de=Me*fe,Yt=Nt/(-Bt+fe),jt=Yt*-Bt;if(J.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(jt),Z.translateZ(Yt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),yt[10]===-1)Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let bt=Me+Yt,C=Xt+Yt,y=L-jt,z=de+(Nt-jt),$=Jt*Xt/C*bt,Q=Kt*Xt/C*bt;Z.projectionMatrix.makePerspective(y,z,$,Q,bt,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function et(Z,J){J===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(J.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let J=Z.near,ct=Z.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(ct=g.depthFar)),B.near=A.near=w.near=J,B.far=A.far=w.far=ct,(G!==B.near||I!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),G=B.near,I=B.far),B.layers.mask=Z.layers.mask|6,w.layers.mask=B.layers.mask&3,A.layers.mask=B.layers.mask&5;let Nt=Z.parent,yt=B.cameras;et(B,Nt);for(let qt=0;qt<yt.length;qt++)et(yt[qt],Nt);yt.length===2?K(B,w,A):B.projectionMatrix.copy(w.projectionMatrix),_t(Z,B,Nt)};function _t(Z,J,ct){ct===null?Z.matrix.copy(J.matrixWorld):(Z.matrix.copy(ct.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(J.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=zr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(Z){return p[Z]};let Et=null;function Ut(Z,J){if(h=J.getViewerPose(c||o),m=J,h!==null){let ct=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let Nt=!1;ct.length!==B.cameras.length&&(B.cameras.length=0,Nt=!0);for(let Xt=0;Xt<ct.length;Xt++){let Jt=ct[Xt],Kt=null;if(d!==null)Kt=d.getViewport(Jt);else{let fe=u.getViewSubImage(f,Jt);Kt=fe.viewport,Xt===0&&(t.setRenderTargetTextures(b,fe.colorTexture,fe.depthStencilTexture),t.setRenderTarget(b))}let Bt=D[Xt];Bt===void 0&&(Bt=new ze,Bt.layers.enable(Xt),Bt.viewport=new xe,D[Xt]=Bt),Bt.matrix.fromArray(Jt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Jt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),Xt===0&&(B.matrix.copy(Bt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Nt===!0&&B.cameras.push(Bt)}let yt=r.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let Xt=u.getDepthInformation(ct[0]);Xt&&Xt.isValid&&Xt.texture&&g.init(Xt,r.renderState)}if(yt&&yt.includes("camera-access")&&_){t.state.unbindTexture(),u=i.getBinding();for(let Xt=0;Xt<ct.length;Xt++){let Jt=ct[Xt].camera;if(Jt){let Kt=p[Jt];Kt||(Kt=new Qs,p[Jt]=Kt);let Bt=u.getCameraImage(Jt);Kt.sourceTexture=Bt}}}}for(let ct=0;ct<S.length;ct++){let Nt=T[ct],yt=S[ct];Nt!==null&&yt!==void 0&&yt.update(Nt,J,c||o)}Et&&Et(Z,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),m=null}let Gt=new Pg;Gt.setAnimationLoop(Ut),this.setAnimationLoop=function(Z){Et=Z},this.dispose=function(){}}},sr=new Rn,zw=new ee;function kw(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,lu(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,M,v,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,b)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ye&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ye&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),v=M.envMap,b=M.envMapRotation;v&&(g.envMap.value=v,sr.copy(b),sr.x*=-1,sr.y*=-1,sr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),g.envMapRotation.value.setFromMatrix4(zw.makeRotationFromEuler(sr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=v*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Vw(n,t,e,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){let b=v.program;i.uniformBlockBinding(M,b)}function c(M,v){let b=r[M.id];b===void 0&&(m(M),b=h(M),r[M.id]=b,M.addEventListener("dispose",g));let S=v.program;i.updateUBOMapping(M,S);let T=t.render.frame;s[M.id]!==T&&(f(M),s[M.id]=T)}function h(M){let v=u();M.__bindingPointIndex=v;let b=n.createBuffer(),S=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,S,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,b),b}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let v=r[M.id],b=M.uniforms,S=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,R=b.length;T<R;T++){let N=Array.isArray(b[T])?b[T]:[b[T]];for(let w=0,A=N.length;w<A;w++){let D=N[w];if(d(D,T,w,S)===!0){let B=D.__offset,G=Array.isArray(D.value)?D.value:[D.value],I=0;for(let V=0;V<G.length;V++){let P=G[V],U=_(P);typeof P=="number"||typeof P=="boolean"?(D.__data[0]=P,n.bufferSubData(n.UNIFORM_BUFFER,B+I,D.__data)):P.isMatrix3?(D.__data[0]=P.elements[0],D.__data[1]=P.elements[1],D.__data[2]=P.elements[2],D.__data[3]=0,D.__data[4]=P.elements[3],D.__data[5]=P.elements[4],D.__data[6]=P.elements[5],D.__data[7]=0,D.__data[8]=P.elements[6],D.__data[9]=P.elements[7],D.__data[10]=P.elements[8],D.__data[11]=0):(P.toArray(D.__data,I),I+=U.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,v,b,S){let T=M.value,R=v+"_"+b;if(S[R]===void 0)return typeof T=="number"||typeof T=="boolean"?S[R]=T:S[R]=T.clone(),!0;{let N=S[R];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return S[R]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function m(M){let v=M.uniforms,b=0,S=16;for(let R=0,N=v.length;R<N;R++){let w=Array.isArray(v[R])?v[R]:[v[R]];for(let A=0,D=w.length;A<D;A++){let B=w[A],G=Array.isArray(B.value)?B.value:[B.value];for(let I=0,V=G.length;I<V;I++){let P=G[I],U=_(P),W=b%S,j=W%U.boundary,K=W+j;b+=j,K!==0&&S-K<U.storage&&(b+=S-K),B.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=U.storage}}}let T=b%S;return T>0&&(b+=S-T),M.__size=b,M.__cache={},this}function _(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Rt("WebGLRenderer: Unsupported uniform value type.",M),v}function g(M){let v=M.target;v.removeEventListener("dispose",g);let b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(let M in r)n.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}var Gw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function Hw(){return Hn===null&&(Hn=new $s(Gw,16,16,er,Vn),Hn.name="DFG_LUT",Hn.minFilter=Ue,Hn.magFilter=Ue,Hn.wrapS=Nn,Hn.wrapT=Nn,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var xc=class{constructor(t={}){let{canvas:e=tg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=en}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let _=d,g=new Set([Ll,Dl,Pl]),p=new Set([en,Pn,Kr,jr,Cl,Rl]),M=new Uint32Array(4),v=new Int32Array(4),b=null,S=null,T=[],R=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,A=!1;this._outputColorSpace=ln;let D=0,B=0,G=null,I=-1,V=null,P=new xe,U=new xe,W=null,j=new Dt(0),K=0,et=e.width,_t=e.height,Et=1,Ut=null,Gt=null,Z=new xe(0,0,et,_t),J=new xe(0,0,et,_t),ct=!1,Nt=new Wr,yt=!1,qt=!1,Me=new ee,Xt=new O,Jt=new xe,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function fe(){return G===null?Et:1}let L=i;function de(E,k){return e.getContext(E,k)}try{let E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"182"}`),e.addEventListener("webglcontextlost",Ft,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",ie,!1),L===null){let k="webgl2";if(L=de(k,E),L===null)throw de(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Pt("WebGLRenderer: "+E.message),E}let Yt,jt,bt,C,y,z,$,Q,Y,Mt,st,St,It,nt,at,xt,wt,ot,Ht,F,pt,rt,mt,it;function tt(){Yt=new JM(L),Yt.init(),rt=new Fw(L,Yt),jt=new VM(L,Yt,t,rt),bt=new Nw(L,Yt),jt.reversedDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),C=new QM(L),y=new yw,z=new Uw(L,Yt,bt,y,jt,rt,C),$=new HM(w),Q=new $M(w),Y=new iv(L),mt=new zM(L,Y),Mt=new KM(L,Y,C,mt),st=new eS(L,Mt,Y,C),Ht=new tS(L,jt,z),xt=new GM(y),St=new _w(w,$,Q,Yt,jt,mt,xt),It=new kw(w,y),nt=new bw,at=new Aw(Yt),ot=new BM(w,$,Q,bt,st,m,l),wt=new Dw(w,st,jt),it=new Vw(L,C,jt,bt),F=new kM(L,Yt,C),pt=new jM(L,Yt,C),C.programs=St.programs,w.capabilities=jt,w.extensions=Yt,w.properties=y,w.renderLists=nt,w.shadowMap=wt,w.state=bt,w.info=C}tt(),_!==en&&(N=new iS(_,e.width,e.height,r,s));let lt=new Au(w,L);this.xr=lt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=Yt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Yt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(E){E!==void 0&&(Et=E,this.setSize(et,_t,!1))},this.getSize=function(E){return E.set(et,_t)},this.setSize=function(E,k,q=!0){if(lt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}et=E,_t=k,e.width=Math.floor(E*Et),e.height=Math.floor(k*Et),q===!0&&(e.style.width=E+"px",e.style.height=k+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(et*Et,_t*Et).floor()},this.setDrawingBufferSize=function(E,k,q){et=E,_t=k,Et=q,e.width=Math.floor(E*q),e.height=Math.floor(k*q),this.setViewport(0,0,E,k)},this.setEffects=function(E){if(_===en){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let k=0;k<E.length;k++)if(E[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,k,q,X){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,k,q,X),bt.viewport(P.copy(Z).multiplyScalar(Et).round())},this.getScissor=function(E){return E.copy(J)},this.setScissor=function(E,k,q,X){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,k,q,X),bt.scissor(U.copy(J).multiplyScalar(Et).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(E){bt.setScissorTest(ct=E)},this.setOpaqueSort=function(E){Ut=E},this.setTransparentSort=function(E){Gt=E},this.getClearColor=function(E){return E.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,q=!0){let X=0;if(E){let H=!1;if(G!==null){let ht=G.texture.format;H=g.has(ht)}if(H){let ht=G.texture.type,gt=p.has(ht),dt=ot.getClearColor(),vt=ot.getClearAlpha(),Tt=dt.r,Lt=dt.g,At=dt.b;gt?(M[0]=Tt,M[1]=Lt,M[2]=At,M[3]=vt,L.clearBufferuiv(L.COLOR,0,M)):(v[0]=Tt,v[1]=Lt,v[2]=At,v[3]=vt,L.clearBufferiv(L.COLOR,0,v))}else X|=L.COLOR_BUFFER_BIT}k&&(X|=L.DEPTH_BUFFER_BIT),q&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ft,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",ie,!1),ot.dispose(),nt.dispose(),at.dispose(),y.dispose(),$.dispose(),Q.dispose(),st.dispose(),mt.dispose(),it.dispose(),St.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",zu),lt.removeEventListener("sessionend",ku),Di.stop()};function Ft(E){E.preventDefault(),su("WebGLRenderer: Context Lost."),A=!0}function le(){su("WebGLRenderer: Context Restored."),A=!1;let E=C.autoReset,k=wt.enabled,q=wt.autoUpdate,X=wt.needsUpdate,H=wt.type;tt(),C.autoReset=E,wt.enabled=k,wt.autoUpdate=q,wt.needsUpdate=X,wt.type=H}function ie(E){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Dn(E){let k=E.target;k.removeEventListener("dispose",Dn),Xn(k)}function Xn(E){h0(E),y.remove(E)}function h0(E){let k=y.get(E).programs;k!==void 0&&(k.forEach(function(q){St.releaseProgram(q)}),E.isShaderMaterial&&St.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,q,X,H,ht){k===null&&(k=Kt);let gt=H.isMesh&&H.matrixWorld.determinant()<0,dt=f0(E,k,q,X,H);bt.setMaterial(X,gt);let vt=q.index,Tt=1;if(X.wireframe===!0){if(vt=Mt.getWireframeAttribute(q),vt===void 0)return;Tt=2}let Lt=q.drawRange,At=q.attributes.position,Wt=Lt.start*Tt,se=(Lt.start+Lt.count)*Tt;ht!==null&&(Wt=Math.max(Wt,ht.start*Tt),se=Math.min(se,(ht.start+ht.count)*Tt)),vt!==null?(Wt=Math.max(Wt,0),se=Math.min(se,vt.count)):At!=null&&(Wt=Math.max(Wt,0),se=Math.min(se,At.count));let _e=se-Wt;if(_e<0||_e===1/0)return;mt.setup(H,X,dt,q,vt);let ye,ae=F;if(vt!==null&&(ye=Y.get(vt),ae=pt,ae.setIndex(ye)),H.isMesh)X.wireframe===!0?(bt.setLineWidth(X.wireframeLinewidth*fe()),ae.setMode(L.LINES)):ae.setMode(L.TRIANGLES);else if(H.isLine){let Ct=X.linewidth;Ct===void 0&&(Ct=1),bt.setLineWidth(Ct*fe()),H.isLineSegments?ae.setMode(L.LINES):H.isLineLoop?ae.setMode(L.LINE_LOOP):ae.setMode(L.LINE_STRIP)}else H.isPoints?ae.setMode(L.POINTS):H.isSprite&&ae.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Br("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Yt.get("WEBGL_multi_draw"))ae.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ct=H._multiDrawStarts,re=H._multiDrawCounts,$t=H._multiDrawCount,rn=vt?Y.get(vt).bytesPerElement:1,ur=y.get(X).currentProgram.getUniforms();for(let sn=0;sn<$t;sn++)ur.setValue(L,"_gl_DrawID",sn),ae.render(Ct[sn]/rn,re[sn])}else if(H.isInstancedMesh)ae.renderInstances(Wt,_e,H.count);else if(q.isInstancedBufferGeometry){let Ct=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,re=Math.min(q.instanceCount,Ct);ae.renderInstances(Wt,_e,re)}else ae.render(Wt,_e)};function Bu(E,k,q){E.transparent===!0&&E.side===Ze&&E.forceSinglePass===!1?(E.side=Ye,E.needsUpdate=!0,Uo(E,k,q),E.side=ni,E.needsUpdate=!0,Uo(E,k,q),E.side=Ze):Uo(E,k,q)}this.compile=function(E,k,q=null){q===null&&(q=E),S=at.get(q),S.init(k),R.push(S),q.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),E!==q&&E.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),S.setupLights();let X=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ht=H.material;if(ht)if(Array.isArray(ht))for(let gt=0;gt<ht.length;gt++){let dt=ht[gt];Bu(dt,q,H),X.add(dt)}else Bu(ht,q,H),X.add(ht)}),S=R.pop(),X},this.compileAsync=function(E,k,q=null){let X=this.compile(E,k,q);return new Promise(H=>{function ht(){if(X.forEach(function(gt){y.get(gt).currentProgram.isReady()&&X.delete(gt)}),X.size===0){H(E);return}setTimeout(ht,10)}Yt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Sc=null;function u0(E){Sc&&Sc(E)}function zu(){Di.stop()}function ku(){Di.start()}let Di=new Pg;Di.setAnimationLoop(u0),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(E){Sc=E,lt.setAnimationLoop(E),E===null?Di.stop():Di.start()},lt.addEventListener("sessionstart",zu),lt.addEventListener("sessionend",ku),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;let q=lt.enabled===!0&&lt.isPresenting===!0,X=N!==null&&(G===null||q)&&N.begin(w,G);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(k),k=lt.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,k,G),S=at.get(E,R.length),S.init(k),R.push(S),Me.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Nt.setFromProjectionMatrix(Me,Cn,k.reversedDepth),qt=this.localClippingEnabled,yt=xt.init(this.clippingPlanes,qt),b=nt.get(E,T.length),b.init(),T.push(b),lt.enabled===!0&&lt.isPresenting===!0){let gt=w.xr.getDepthSensingMesh();gt!==null&&wc(gt,k,-1/0,w.sortObjects)}wc(E,k,0,w.sortObjects),b.finish(),w.sortObjects===!0&&b.sort(Ut,Gt),Bt=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Bt&&ot.addToRenderList(b,E),this.info.render.frame++,yt===!0&&xt.beginShadows();let H=S.state.shadowsArray;if(wt.render(H,E,k),yt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&N.hasRenderPass())===!1){let gt=b.opaque,dt=b.transmissive;if(S.setupLights(),k.isArrayCamera){let vt=k.cameras;if(dt.length>0)for(let Tt=0,Lt=vt.length;Tt<Lt;Tt++){let At=vt[Tt];Gu(gt,dt,E,At)}Bt&&ot.render(E);for(let Tt=0,Lt=vt.length;Tt<Lt;Tt++){let At=vt[Tt];Vu(b,E,At,At.viewport)}}else dt.length>0&&Gu(gt,dt,E,k),Bt&&ot.render(E),Vu(b,E,k)}G!==null&&B===0&&(z.updateMultisampleRenderTarget(G),z.updateRenderTargetMipmap(G)),X&&N.end(w),E.isScene===!0&&E.onAfterRender(w,E,k),mt.resetDefaultState(),I=-1,V=null,R.pop(),R.length>0?(S=R[R.length-1],yt===!0&&xt.setGlobalState(w.clippingPlanes,S.state.camera)):S=null,T.pop(),T.length>0?b=T[T.length-1]:b=null};function wc(E,k,q,X){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Nt.intersectsSprite(E)){X&&Jt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Me);let gt=st.update(E),dt=E.material;dt.visible&&b.push(E,gt,dt,q,Jt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Nt.intersectsObject(E))){let gt=st.update(E),dt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Jt.copy(E.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Jt.copy(gt.boundingSphere.center)),Jt.applyMatrix4(E.matrixWorld).applyMatrix4(Me)),Array.isArray(dt)){let vt=gt.groups;for(let Tt=0,Lt=vt.length;Tt<Lt;Tt++){let At=vt[Tt],Wt=dt[At.materialIndex];Wt&&Wt.visible&&b.push(E,gt,Wt,q,Jt.z,At)}}else dt.visible&&b.push(E,gt,dt,q,Jt.z,null)}}let ht=E.children;for(let gt=0,dt=ht.length;gt<dt;gt++)wc(ht[gt],k,q,X)}function Vu(E,k,q,X){let{opaque:H,transmissive:ht,transparent:gt}=E;S.setupLightsView(q),yt===!0&&xt.setGlobalState(w.clippingPlanes,q),X&&bt.viewport(P.copy(X)),H.length>0&&No(H,k,q),ht.length>0&&No(ht,k,q),gt.length>0&&No(gt,k,q),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Gu(E,k,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[X.id]===void 0){let Wt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[X.id]=new cn(1,1,{generateMipmaps:!0,type:Wt?Vn:en,minFilter:Ei,samples:jt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}let ht=S.state.transmissionRenderTarget[X.id],gt=X.viewport||P;ht.setSize(gt.z*w.transmissionResolutionScale,gt.w*w.transmissionResolutionScale);let dt=w.getRenderTarget(),vt=w.getActiveCubeFace(),Tt=w.getActiveMipmapLevel();w.setRenderTarget(ht),w.getClearColor(j),K=w.getClearAlpha(),K<1&&w.setClearColor(16777215,.5),w.clear(),Bt&&ot.render(q);let Lt=w.toneMapping;w.toneMapping=In;let At=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),S.setupLightsView(X),yt===!0&&xt.setGlobalState(w.clippingPlanes,X),No(E,q,X),z.updateMultisampleRenderTarget(ht),z.updateRenderTargetMipmap(ht),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let se=0,_e=k.length;se<_e;se++){let ye=k[se],{object:ae,geometry:Ct,material:re,group:$t}=ye;if(re.side===Ze&&ae.layers.test(X.layers)){let rn=re.side;re.side=Ye,re.needsUpdate=!0,Hu(ae,q,X,Ct,re,$t),re.side=rn,re.needsUpdate=!0,Wt=!0}}Wt===!0&&(z.updateMultisampleRenderTarget(ht),z.updateRenderTargetMipmap(ht))}w.setRenderTarget(dt,vt,Tt),w.setClearColor(j,K),At!==void 0&&(X.viewport=At),w.toneMapping=Lt}function No(E,k,q){let X=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ht=E.length;H<ht;H++){let gt=E[H],{object:dt,geometry:vt,group:Tt}=gt,Lt=gt.material;Lt.allowOverride===!0&&X!==null&&(Lt=X),dt.layers.test(q.layers)&&Hu(dt,k,q,vt,Lt,Tt)}}function Hu(E,k,q,X,H,ht){E.onBeforeRender(w,k,q,X,H,ht),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(w,k,q,X,E,ht),H.transparent===!0&&H.side===Ze&&H.forceSinglePass===!1?(H.side=Ye,H.needsUpdate=!0,w.renderBufferDirect(q,k,X,H,E,ht),H.side=ni,H.needsUpdate=!0,w.renderBufferDirect(q,k,X,H,E,ht),H.side=Ze):w.renderBufferDirect(q,k,X,H,E,ht),E.onAfterRender(w,k,q,X,H,ht)}function Uo(E,k,q){k.isScene!==!0&&(k=Kt);let X=y.get(E),H=S.state.lights,ht=S.state.shadowsArray,gt=H.state.version,dt=St.getParameters(E,H.state,ht,k,q),vt=St.getProgramCacheKey(dt),Tt=X.programs;X.environment=E.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(E.isMeshStandardMaterial?Q:$).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Tt===void 0&&(E.addEventListener("dispose",Dn),Tt=new Map,X.programs=Tt);let Lt=Tt.get(vt);if(Lt!==void 0){if(X.currentProgram===Lt&&X.lightsStateVersion===gt)return Xu(E,dt),Lt}else dt.uniforms=St.getUniforms(E),E.onBeforeCompile(dt,w),Lt=St.acquireProgram(dt,vt),Tt.set(vt,Lt),X.uniforms=dt.uniforms;let At=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=xt.uniform),Xu(E,dt),X.needsLights=p0(E),X.lightsStateVersion=gt,X.needsLights&&(At.ambientLightColor.value=H.state.ambient,At.lightProbe.value=H.state.probe,At.directionalLights.value=H.state.directional,At.directionalLightShadows.value=H.state.directionalShadow,At.spotLights.value=H.state.spot,At.spotLightShadows.value=H.state.spotShadow,At.rectAreaLights.value=H.state.rectArea,At.ltc_1.value=H.state.rectAreaLTC1,At.ltc_2.value=H.state.rectAreaLTC2,At.pointLights.value=H.state.point,At.pointLightShadows.value=H.state.pointShadow,At.hemisphereLights.value=H.state.hemi,At.directionalShadowMap.value=H.state.directionalShadowMap,At.directionalShadowMatrix.value=H.state.directionalShadowMatrix,At.spotShadowMap.value=H.state.spotShadowMap,At.spotLightMatrix.value=H.state.spotLightMatrix,At.spotLightMap.value=H.state.spotLightMap,At.pointShadowMap.value=H.state.pointShadowMap,At.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Lt,X.uniformsList=null,Lt}function Wu(E){if(E.uniformsList===null){let k=E.currentProgram.getUniforms();E.uniformsList=ts.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Xu(E,k){let q=y.get(E);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.batchingColor=k.batchingColor,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.instancingMorph=k.instancingMorph,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function f0(E,k,q,X,H){k.isScene!==!0&&(k=Kt),z.resetTextureUnits();let ht=k.fog,gt=X.isMeshStandardMaterial?k.environment:null,dt=G===null?w.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:$i,vt=(X.isMeshStandardMaterial?Q:$).get(X.envMap||gt),Tt=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Lt=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),At=!!q.morphAttributes.position,Wt=!!q.morphAttributes.normal,se=!!q.morphAttributes.color,_e=In;X.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(_e=w.toneMapping);let ye=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ae=ye!==void 0?ye.length:0,Ct=y.get(X),re=S.state.lights;if(yt===!0&&(qt===!0||E!==V)){let He=E===V&&X.id===I;xt.setState(X,E,He)}let $t=!1;X.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==re.state.version||Ct.outputColorSpace!==dt||H.isBatchedMesh&&Ct.batching===!1||!H.isBatchedMesh&&Ct.batching===!0||H.isBatchedMesh&&Ct.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ct.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ct.instancing===!1||!H.isInstancedMesh&&Ct.instancing===!0||H.isSkinnedMesh&&Ct.skinning===!1||!H.isSkinnedMesh&&Ct.skinning===!0||H.isInstancedMesh&&Ct.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ct.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ct.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ct.instancingMorph===!1&&H.morphTexture!==null||Ct.envMap!==vt||X.fog===!0&&Ct.fog!==ht||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==xt.numPlanes||Ct.numIntersection!==xt.numIntersection)||Ct.vertexAlphas!==Tt||Ct.vertexTangents!==Lt||Ct.morphTargets!==At||Ct.morphNormals!==Wt||Ct.morphColors!==se||Ct.toneMapping!==_e||Ct.morphTargetsCount!==ae)&&($t=!0):($t=!0,Ct.__version=X.version);let rn=Ct.currentProgram;$t===!0&&(rn=Uo(X,k,H));let ur=!1,sn=!1,rs=!1,ce=rn.getUniforms(),$e=Ct.uniforms;if(bt.useProgram(rn.program)&&(ur=!0,sn=!0,rs=!0),X.id!==I&&(I=X.id,sn=!0),ur||V!==E){bt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ce.setValue(L,"projectionMatrix",E.projectionMatrix),ce.setValue(L,"viewMatrix",E.matrixWorldInverse);let Je=ce.map.cameraPosition;Je!==void 0&&Je.setValue(L,Xt.setFromMatrixPosition(E.matrixWorld)),jt.logarithmicDepthBuffer&&ce.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ce.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),V!==E&&(V=E,sn=!0,rs=!0)}if(Ct.needsLights&&(re.state.directionalShadowMap.length>0&&ce.setValue(L,"directionalShadowMap",re.state.directionalShadowMap,z),re.state.spotShadowMap.length>0&&ce.setValue(L,"spotShadowMap",re.state.spotShadowMap,z),re.state.pointShadowMap.length>0&&ce.setValue(L,"pointShadowMap",re.state.pointShadowMap,z)),H.isSkinnedMesh){ce.setOptional(L,H,"bindMatrix"),ce.setOptional(L,H,"bindMatrixInverse");let He=H.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),ce.setValue(L,"boneTexture",He.boneTexture,z))}H.isBatchedMesh&&(ce.setOptional(L,H,"batchingTexture"),ce.setValue(L,"batchingTexture",H._matricesTexture,z),ce.setOptional(L,H,"batchingIdTexture"),ce.setValue(L,"batchingIdTexture",H._indirectTexture,z),ce.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&ce.setValue(L,"batchingColorTexture",H._colorsTexture,z));let dn=q.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Ht.update(H,q,rn),(sn||Ct.receiveShadow!==H.receiveShadow)&&(Ct.receiveShadow=H.receiveShadow,ce.setValue(L,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&($e.envMap.value=vt,$e.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&($e.envMapIntensity.value=k.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=Hw()),sn&&(ce.setValue(L,"toneMappingExposure",w.toneMappingExposure),Ct.needsLights&&d0($e,rs),ht&&X.fog===!0&&It.refreshFogUniforms($e,ht),It.refreshMaterialUniforms($e,X,Et,_t,S.state.transmissionRenderTarget[E.id]),ts.upload(L,Wu(Ct),$e,z)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ts.upload(L,Wu(Ct),$e,z),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ce.setValue(L,"center",H.center),ce.setValue(L,"modelViewMatrix",H.modelViewMatrix),ce.setValue(L,"normalMatrix",H.normalMatrix),ce.setValue(L,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let He=X.uniformsGroups;for(let Je=0,Tc=He.length;Je<Tc;Je++){let Li=He[Je];it.update(Li,rn),it.bind(Li,rn)}}return rn}function d0(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function p0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(E,k,q){let X=y.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),y.get(E.texture).__webglTexture=k,y.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){let q=y.get(E);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0};let m0=L.createFramebuffer();this.setRenderTarget=function(E,k=0,q=0){G=E,D=k,B=q;let X=null,H=!1,ht=!1;if(E){let dt=y.get(E);if(dt.__useDefaultFramebuffer!==void 0){bt.bindFramebuffer(L.FRAMEBUFFER,dt.__webglFramebuffer),P.copy(E.viewport),U.copy(E.scissor),W=E.scissorTest,bt.viewport(P),bt.scissor(U),bt.setScissorTest(W),I=-1;return}else if(dt.__webglFramebuffer===void 0)z.setupRenderTarget(E);else if(dt.__hasExternalTextures)z.rebindTextures(E,y.get(E.texture).__webglTexture,y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Lt=E.depthTexture;if(dt.__boundDepthTexture!==Lt){if(Lt!==null&&y.has(Lt)&&(E.width!==Lt.image.width||E.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(E)}}let vt=E.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ht=!0);let Tt=y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Tt[k])?X=Tt[k][q]:X=Tt[k],H=!0):E.samples>0&&z.useMultisampledRTT(E)===!1?X=y.get(E).__webglMultisampledFramebuffer:Array.isArray(Tt)?X=Tt[q]:X=Tt,P.copy(E.viewport),U.copy(E.scissor),W=E.scissorTest}else P.copy(Z).multiplyScalar(Et).floor(),U.copy(J).multiplyScalar(Et).floor(),W=ct;if(q!==0&&(X=m0),bt.bindFramebuffer(L.FRAMEBUFFER,X)&&bt.drawBuffers(E,X),bt.viewport(P),bt.scissor(U),bt.setScissorTest(W),H){let dt=y.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,dt.__webglTexture,q)}else if(ht){let dt=k;for(let vt=0;vt<E.textures.length;vt++){let Tt=y.get(E.textures[vt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+vt,Tt.__webglTexture,q,dt)}}else if(E!==null&&q!==0){let dt=y.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dt.__webglTexture,q)}I=-1},this.readRenderTargetPixels=function(E,k,q,X,H,ht,gt,dt=0){if(!(E&&E.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(vt=vt[gt]),vt){bt.bindFramebuffer(L.FRAMEBUFFER,vt);try{let Tt=E.textures[dt],Lt=Tt.format,At=Tt.type;if(!jt.textureFormatReadable(Lt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(At)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-X&&q>=0&&q<=E.height-H&&(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+dt),L.readPixels(k,q,X,H,rt.convert(Lt),rt.convert(At),ht))}finally{let Tt=G!==null?y.get(G).__webglFramebuffer:null;bt.bindFramebuffer(L.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(E,k,q,X,H,ht,gt,dt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&gt!==void 0&&(vt=vt[gt]),vt)if(k>=0&&k<=E.width-X&&q>=0&&q<=E.height-H){bt.bindFramebuffer(L.FRAMEBUFFER,vt);let Tt=E.textures[dt],Lt=Tt.format,At=Tt.type;if(!jt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Wt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Wt),L.bufferData(L.PIXEL_PACK_BUFFER,ht.byteLength,L.STREAM_READ),E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+dt),L.readPixels(k,q,X,H,rt.convert(Lt),rt.convert(At),0);let se=G!==null?y.get(G).__webglFramebuffer:null;bt.bindFramebuffer(L.FRAMEBUFFER,se);let _e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await eg(L,_e,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Wt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ht),L.deleteBuffer(Wt),L.deleteSync(_e),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,q=0){let X=Math.pow(2,-q),H=Math.floor(E.image.width*X),ht=Math.floor(E.image.height*X),gt=k!==null?k.x:0,dt=k!==null?k.y:0;z.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,gt,dt,H,ht),bt.unbindTexture()};let g0=L.createFramebuffer(),x0=L.createFramebuffer();this.copyTextureToTexture=function(E,k,q=null,X=null,H=0,ht=null){ht===null&&(H!==0?(Br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=H,H=0):ht=0);let gt,dt,vt,Tt,Lt,At,Wt,se,_e,ye=E.isCompressedTexture?E.mipmaps[ht]:E.image;if(q!==null)gt=q.max.x-q.min.x,dt=q.max.y-q.min.y,vt=q.isBox3?q.max.z-q.min.z:1,Tt=q.min.x,Lt=q.min.y,At=q.isBox3?q.min.z:0;else{let dn=Math.pow(2,-H);gt=Math.floor(ye.width*dn),dt=Math.floor(ye.height*dn),E.isDataArrayTexture?vt=ye.depth:E.isData3DTexture?vt=Math.floor(ye.depth*dn):vt=1,Tt=0,Lt=0,At=0}X!==null?(Wt=X.x,se=X.y,_e=X.z):(Wt=0,se=0,_e=0);let ae=rt.convert(k.format),Ct=rt.convert(k.type),re;k.isData3DTexture?(z.setTexture3D(k,0),re=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(z.setTexture2DArray(k,0),re=L.TEXTURE_2D_ARRAY):(z.setTexture2D(k,0),re=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);let $t=L.getParameter(L.UNPACK_ROW_LENGTH),rn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ur=L.getParameter(L.UNPACK_SKIP_PIXELS),sn=L.getParameter(L.UNPACK_SKIP_ROWS),rs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ye.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ye.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Tt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Lt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,At);let ce=E.isDataArrayTexture||E.isData3DTexture,$e=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){let dn=y.get(E),He=y.get(k),Je=y.get(dn.__renderTarget),Tc=y.get(He.__renderTarget);bt.bindFramebuffer(L.READ_FRAMEBUFFER,Je.__webglFramebuffer),bt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Tc.__webglFramebuffer);for(let Li=0;Li<vt;Li++)ce&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,y.get(E).__webglTexture,H,At+Li),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,y.get(k).__webglTexture,ht,_e+Li)),L.blitFramebuffer(Tt,Lt,gt,dt,Wt,se,gt,dt,L.DEPTH_BUFFER_BIT,L.NEAREST);bt.bindFramebuffer(L.READ_FRAMEBUFFER,null),bt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||y.has(E)){let dn=y.get(E),He=y.get(k);bt.bindFramebuffer(L.READ_FRAMEBUFFER,g0),bt.bindFramebuffer(L.DRAW_FRAMEBUFFER,x0);for(let Je=0;Je<vt;Je++)ce?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,dn.__webglTexture,H,At+Je):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,dn.__webglTexture,H),$e?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,He.__webglTexture,ht,_e+Je):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,He.__webglTexture,ht),H!==0?L.blitFramebuffer(Tt,Lt,gt,dt,Wt,se,gt,dt,L.COLOR_BUFFER_BIT,L.NEAREST):$e?L.copyTexSubImage3D(re,ht,Wt,se,_e+Je,Tt,Lt,gt,dt):L.copyTexSubImage2D(re,ht,Wt,se,Tt,Lt,gt,dt);bt.bindFramebuffer(L.READ_FRAMEBUFFER,null),bt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else $e?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(re,ht,Wt,se,_e,gt,dt,vt,ae,Ct,ye.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(re,ht,Wt,se,_e,gt,dt,vt,ae,ye.data):L.texSubImage3D(re,ht,Wt,se,_e,gt,dt,vt,ae,Ct,ye):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ht,Wt,se,gt,dt,ae,Ct,ye.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ht,Wt,se,ye.width,ye.height,ae,ye.data):L.texSubImage2D(L.TEXTURE_2D,ht,Wt,se,gt,dt,ae,Ct,ye);L.pixelStorei(L.UNPACK_ROW_LENGTH,$t),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,rn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ur),L.pixelStorei(L.UNPACK_SKIP_ROWS,sn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,rs),ht===0&&k.generateMipmaps&&L.generateMipmap(re),bt.unbindTexture()},this.initRenderTarget=function(E){y.get(E).__webglFramebuffer===void 0&&z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?z.setTextureCube(E,0):E.isData3DTexture?z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?z.setTexture2DArray(E,0):z.setTexture2D(E,0),bt.unbindTexture()},this.resetState=function(){D=0,B=0,G=null,bt.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var Fg={type:"change"},Ru={type:"start"},Bg={type:"end"},vc=new _i,Og=new _n,Ww=Math.cos(70*au.DEG2RAD),Re=new O,nn=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cu=1e-6,Ro=class extends _o{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new yn,this._lastTargetPosition=new O,this._quat=new yn().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $r,this._sphericalDelta=new $r,this._scale=1,this._panOffset=new O,this._rotateStart=new ft,this._rotateEnd=new ft,this._rotateDelta=new ft,this._panStart=new ft,this._panEnd=new ft,this._panDelta=new ft,this._dollyStart=new ft,this._dollyEnd=new ft,this._dollyDelta=new ft,this._dollyDirection=new O,this._mouse=new ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qw.bind(this),this._onPointerDown=Xw.bind(this),this._onPointerUp=Yw.bind(this),this._onContextMenu=t1.bind(this),this._onMouseWheel=Jw.bind(this),this._onKeyDown=Kw.bind(this),this._onTouchStart=jw.bind(this),this._onTouchMove=Qw.bind(this),this._onMouseDown=Zw.bind(this),this._onMouseMove=$w.bind(this),this._interceptControlDown=e1.bind(this),this._interceptControlUp=n1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fg),this.update(),this.state=oe.NONE}update(t=null){let e=this.object.position;Re.copy(e).sub(this.target),Re.applyQuaternion(this._quat),this._spherical.setFromVector3(Re),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=nn:i>Math.PI&&(i-=nn),r<-Math.PI?r+=nn:r>Math.PI&&(r-=nn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Re.setFromSpherical(this._spherical),Re.applyQuaternion(this._quatInverse),e.copy(this.target).add(Re),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Re.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){let a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;let c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Re.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(vc.origin.copy(this.object.position),vc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vc.direction))<Ww?this.object.lookAt(this.target):(Og.setFromNormalAndCoplanarPoint(this.object.up,this.target),vc.intersectPlane(Og,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Cu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cu||this._lastTargetPosition.distanceToSquared(this.target)>Cu?(this.dispatchEvent(Fg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Re.setFromMatrixColumn(e,0),Re.multiplyScalar(-t),this._panOffset.add(Re)}_panUp(t,e){this.screenSpacePanning===!0?Re.setFromMatrixColumn(e,1):(Re.setFromMatrixColumn(e,0),Re.crossVectors(this.object.up,Re)),Re.multiplyScalar(t),this._panOffset.add(Re)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Re.copy(r).sub(this.target);let s=Re.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ft,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Xw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function qw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Yw(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bg),this.state=oe.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Zw(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Si.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=oe.DOLLY;break;case Si.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}break;case Si.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Ru)}function $w(n){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Jw(n){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(n.preventDefault(),this.dispatchEvent(Ru),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Bg))}function Kw(n){this.enabled!==!1&&this._handleKeyDown(n)}function jw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case wi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=oe.TOUCH_ROTATE;break;case wi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=oe.TOUCH_DOLLY_PAN;break;case wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Ru)}function Qw(n){switch(this._trackPointer(n),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=oe.NONE}}function t1(n){this.enabled!==!1&&n.preventDefault()}function e1(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function n1(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Iu(n,t){let e=x.transform;return{x:(n-e.x)/e.k,y:(t-e.y)/e.k}}function Ri(n,t){let e=x.transform;return{x:n*e.k+e.x,y:t*e.k+e.y}}function Vg(n){let t=n[0][0],e=n[0][1],i=n[1][1],r=t+i,s=t*i-e*e,o=Math.sqrt(r*r-4*s),a=(r+o)/2,l=(r-o)/2,c,h;e!==0?(c=[a-i,e],h=[l-i,e]):(c=[1,0],h=[0,1]);let u=f=>{let d=Math.sqrt(f[0]*f[0]+f[1]*f[1]);return[f[0]/d,f[1]/d]};return c=u(c),h=u(h),[a,l,c,h]}function Gg(n,t){let e=Math.min(t.x,t.x+t.width),i=Math.max(t.x,t.x+t.width),r=Math.min(t.y,t.y+t.height),s=Math.max(t.y,t.y+t.height);return n.x>=e&&n.x<=i&&n.y>=r&&n.y<=s}function Pu(n,t){let e=x.config?x.config.nodes.defaultSize:15;return x.nodes.find(i=>Math.sqrt((i.x-n)**2+(i.y-t)**2)<(i.size||e)/2)}var ar=new O,zg=new xo,kg=new ft;function bc(n,t,e){ar.set(n,t,e),ar.project(x.camera);let i=x.container.clientWidth,r=x.container.clientHeight;return{x:(ar.x*.5+.5)*i,y:(-ar.y*.5+.5)*r,visible:ar.z<1}}function Du(n,t){let e=x.container.clientWidth,i=x.container.clientHeight;kg.set(n/e*2-1,-(t/i)*2+1),zg.setFromCamera(kg,x.camera);let r=zg.ray,s=null,o=1/0;return x.nodes.forEach(a=>{let c=(a.size||x.config.nodes.defaultSize)/2;ar.set(a.x||0,a.y||0,a.z||0);let h=r.distanceToPoint(ar);h<c*1.5&&h<o&&(o=h,s=a)}),s}function Fe(n){return x.groupColorOverrides[n]||x.groupColorScale(n)}function Ii(){x.selectedNodes.clear()}function Lu(n){n.forEach(t=>x.selectedNodes.add(t))}function Io(n){Ii(),Lu(n)}function Hg(){let n=x.container,t=n.clientWidth,e=n.clientHeight,i=document.createElement("canvas");if(!(i.getContext("webgl2")||i.getContext("webgl")))return n.innerHTML=`
            <div style="display:flex;align-items:center;justify-content:center;height:100%;
                        font-family:sans-serif;color:#666;text-align:center;padding:40px;">
                <div>
                    <h3>WebGL Not Available</h3>
                    <p>This visualization requires WebGL support. Please use a modern browser with WebGL enabled.</p>
                </div>
            </div>`,!1;let s=new Zs,o=x.config.canvas.backgroundColor;s.background=new Dt(o);let a=new Mi(0,t,0,e,.1,100);a.position.set(0,0,50),a.lookAt(0,0,0);let l=new ze(60,t/e,1,1e4);l.position.set(t/2,e/2,800),l.lookAt(t/2,e/2,0);let c=new go(16777215,.6);c.visible=!1,s.add(c);let h=new mo(16777215,.8);h.position.set(1,-1,1).normalize(),h.visible=!1,s.add(h);let u=new xc({antialias:!0,alpha:!1,preserveDrawingBuffer:!0});u.setSize(t,e),u.setPixelRatio(window.devicePixelRatio),u.sortObjects=!0,n.appendChild(u.domElement),u.domElement.style.display="block";let f=new ti;return f.renderOrder=0,s.add(f),x.scene=s,x.camera=a,x.camera2D=a,x.camera3D=l,x.renderer=u,x.ellipseGroup=f,x.ambientLight=c,x.directionalLight=h,!0}function Wg(){let n=x.container.clientWidth,t=x.container.clientHeight,e=n/2,i=t/2;x.camera3D.position.set(e,i,800),x.camera3D.lookAt(e,i,0),x.camera3D.aspect=n/t,x.camera3D.updateProjectionMatrix(),x.camera=x.camera3D,x.ambientLight.visible=!0,x.directionalLight.visible=!0}function Xg(){x.camera=x.camera2D,x.ambientLight.visible=!1,x.directionalLight.visible=!1,Pi()}function Pi(){if(x.is3D)return;let n=x.transform,t=x.container,e=t.clientWidth,i=t.clientHeight,r=x.camera;r.left=-n.x/n.k,r.right=(e-n.x)/n.k,r.top=-n.y/n.k,r.bottom=(i-n.y)/n.k,r.updateProjectionMatrix()}function qg(){x.renderer&&x.renderer.render(x.scene,x.camera)}function Yg(n){function t(){if(!x.is3D){x._animationFrameId=null;return}x.orbitControls&&x.orbitControls.update(),n(),x._animationFrameId=requestAnimationFrame(t)}x._animationFrameId||t()}function Zg(){x._animationFrameId&&(cancelAnimationFrame(x._animationFrameId),x._animationFrameId=null)}var lr=new ee,is=new Dt;function Po(){x.nodesFillMesh&&(x.scene.remove(x.nodesFillMesh),x.nodesFillMesh.geometry.dispose(),x.nodesFillMesh.material.dispose()),x.nodesBorderMesh&&(x.scene.remove(x.nodesBorderMesh),x.nodesBorderMesh.geometry.dispose(),x.nodesBorderMesh.material.dispose()),x.nodesBorderMesh=null;let n=x.nodes.length;if(n!==0){if(x.is3D){let t=new ho(1,16,12),e=new uo({roughness:.6,metalness:.1,transparent:!0,opacity:1,depthTest:!0,depthWrite:!0}),i=new Ji(t,e,n);i.instanceMatrix.setUsage(Gn),i.renderOrder=5,x.scene.add(i),x.nodesFillMesh=i}else{let t=new Xr(1,32),e=new Bn({transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,side:Ze}),i=new Ji(t,e,n);i.instanceMatrix.setUsage(Gn),i.renderOrder=5,x.scene.add(i),x.nodesFillMesh=i;let r=new Xr(1,32),s=new Bn({transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,side:Ze}),o=new Ji(r,s,n);o.instanceMatrix.setUsage(Gn),o.renderOrder=4,x.scene.add(o),x.nodesBorderMesh=o}Nu()}}function Nu(){let{nodes:n,selectedNodes:t,config:e,nodesFillMesh:i,nodesBorderMesh:r,is3D:s}=x;if(!i)return;let o=e.nodes.borderWidth;n.forEach((a,l)=>{let c=t.has(a),h=a.size||e.nodes.defaultSize,f=(c?h+e.nodes.selectedSizeIncrease:h)/2,d=a.x||0,m=a.y||0,_=s&&a.z||0;s?lr.makeScale(f,f,f):lr.makeScale(f,f,1),lr.setPosition(d,m,_),i.setMatrixAt(l,lr);let g=a.group?Fe(a.group):a.color||e.nodes.defaultColor;if(is.set(g),i.setColorAt(l,is),s)c&&(is.set(e.nodes.selectedBorderColor),i.setColorAt(l,is));else if(r){let p=f+o;lr.makeScale(p,p,1),lr.setPosition(d,m,0),r.setMatrixAt(l,lr);let M=c?e.nodes.selectedBorderColor:e.nodes.borderColor;is.set(M),r.setColorAt(l,is)}}),i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0),r&&(r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0))}function Do(){x.normalEdgesMesh&&(x.scene.remove(x.normalEdgesMesh),x.normalEdgesMesh.geometry.dispose(),x.normalEdgesMesh.material.dispose()),x.highlightedEdgesMesh&&(x.scene.remove(x.highlightedEdgesMesh),x.highlightedEdgesMesh.geometry.dispose(),x.highlightedEdgesMesh.material.dispose()),x.arrowMesh&&(x.scene.remove(x.arrowMesh),x.arrowMesh.geometry.dispose(),x.arrowMesh.material.dispose(),x.arrowMesh=null);let{edges:n,config:t}=x;if(n.length===0)return;let e=6,i=new Te,r=new Float32Array(n.length*e),s=new Float32Array(n.length*e);i.setAttribute("position",new me(r,3)),i.setAttribute("color",new me(s,3)),i.attributes.position.setUsage(Gn),i.attributes.color.setUsage(Gn);let o=x.is3D,a=new zn({vertexColors:!0,transparent:!0,opacity:t.edges.defaultOpacity,depthTest:o,depthWrite:o}),l=new Ki(i,a);l.renderOrder=2,x.scene.add(l),x.normalEdgesMesh=l;let c=new Te,h=new Float32Array(n.length*e),u=new Float32Array(n.length*e);c.setAttribute("position",new me(h,3)),c.setAttribute("color",new me(u,3)),c.attributes.position.setUsage(Gn),c.attributes.color.setUsage(Gn);let f=new zn({vertexColors:!0,transparent:!0,opacity:t.edges.selectedOpacity,depthTest:o,depthWrite:o}),d=new Ki(c,f);d.renderOrder=3,x.scene.add(d),x.highlightedEdgesMesh=d}function $g(){let{edges:n,selectedNodes:t,config:e,normalEdgesMesh:i,highlightedEdgesMesh:r}=x;if(!i||!r)return;let s=i.geometry.attributes.position.array,o=i.geometry.attributes.color.array,a=r.geometry.attributes.position.array,l=r.geometry.attributes.color.array,c=0,h=0,u=new Dt(e.edges.defaultColor),f=x.is3D;n.forEach(d=>{let m=d.source.x||0,_=d.source.y||0,g=f&&d.source.z||0,p=d.target.x||0,M=d.target.y||0,v=f&&d.target.z||0,b=t.has(d.source)||t.has(d.target),S=d.color?new Dt(d.color):x.colorEdgesByGroup&&d.source.group?new Dt(Fe(d.source.group)):u;if(b){let T=h*6;a[T]=m,a[T+1]=_,a[T+2]=g,a[T+3]=p,a[T+4]=M,a[T+5]=v,l[T]=S.r,l[T+1]=S.g,l[T+2]=S.b,l[T+3]=S.r,l[T+4]=S.g,l[T+5]=S.b,h++}else{let T=c*6;s[T]=m,s[T+1]=_,s[T+2]=g,s[T+3]=p,s[T+4]=M,s[T+5]=v,o[T]=S.r,o[T+1]=S.g,o[T+2]=S.b,o[T+3]=S.r,o[T+4]=S.g,o[T+5]=S.b,c++}}),i.geometry.setDrawRange(0,c*2),i.geometry.attributes.position.needsUpdate=!0,i.geometry.attributes.color.needsUpdate=!0,r.geometry.setDrawRange(0,h*2),r.geometry.attributes.position.needsUpdate=!0,r.geometry.attributes.color.needsUpdate=!0}function Jg(){if(!x.showArrows||x.is3D){x.arrowMesh&&(x.arrowMesh.visible=!1);return}let{edges:n,config:t}=x;if(n.length===0)return;x.arrowMesh&&(x.scene.remove(x.arrowMesh),x.arrowMesh.geometry.dispose(),x.arrowMesh.material.dispose());let e=t.edges.arrowSize,i=t.edges.arrowWidth,r=new Float32Array(n.length*4*3),s=new Float32Array(n.length*4*3),o=new Dt(t.edges.defaultColor);n.forEach((h,u)=>{let f=(h.target.x||0)-(h.source.x||0),d=(h.target.y||0)-(h.source.y||0),m=Math.atan2(d,f),g=(h.target.size||t.nodes.defaultSize)/2+t.nodes.borderWidth,p=(h.target.x||0)-g*Math.cos(m),M=(h.target.y||0)-g*Math.sin(m),v=u*12;r[v]=p,r[v+1]=M,r[v+2]=0,r[v+3]=p-e*Math.cos(m-Math.PI/6),r[v+4]=M-e*Math.sin(m-Math.PI/6),r[v+5]=0,r[v+6]=p,r[v+7]=M,r[v+8]=0,r[v+9]=p-e*Math.cos(m+Math.PI/6),r[v+10]=M-e*Math.sin(m+Math.PI/6),r[v+11]=0;let b=h.color?new Dt(h.color):o;for(let S=0;S<4;S++)s[v+S*3]=b.r,s[v+S*3+1]=b.g,s[v+S*3+2]=b.b});let a=new Te;a.setAttribute("position",new me(r,3)),a.setAttribute("color",new me(s,3));let l=new zn({vertexColors:!0,transparent:!0,opacity:t.edges.defaultOpacity,depthTest:!1,depthWrite:!1}),c=new Ki(a,l);c.renderOrder=3,x.scene.add(c),x.arrowMesh=c}function Kg(){let{nodes:n,config:t,ellipseGroup:e}=x;if(!e)return;for(;e.children.length>0;){let r=e.children[0];e.remove(r),r.geometry&&r.geometry.dispose(),r.material&&r.material.dispose()}if(!t.groups.showEllipses||x.is3D)return;[...new Set(n.map(r=>r.group).filter(Boolean))].forEach(r=>{let s=n.filter(o=>o.group===r);if(s.length>1){let o={x:s.reduce((B,G)=>B+(G.x||0),0)/s.length,y:s.reduce((B,G)=>B+(G.y||0),0)/s.length},a=0,l=0,c=0;s.forEach(B=>{let G=(B.x||0)-o.x,I=(B.y||0)-o.y;a+=G*G,l+=G*I,c+=I*I});let h=[[a/s.length,l/s.length],[l/s.length,c/s.length]],[u,f,d]=Vg(h),m=Math.atan2(d[1],d[0]),_=Math.sqrt(Math.max(u,0))*2+5,g=Math.sqrt(Math.max(f,0))*2+5,p=Fe(r),M=new Dt(p),v=64,b=new Yr;b.moveTo(_,0);for(let B=1;B<=v;B++){let G=B/v*Math.PI*2;b.lineTo(_*Math.cos(G),g*Math.sin(G))}let S=new co(b),T=new Bn({color:M,transparent:!0,opacity:t.groups.fillOpacity,depthTest:!1,depthWrite:!1,side:Ze}),R=new Ve(S,T);R.position.set(o.x,o.y,0),R.rotation.z=m,R.renderOrder=0,e.add(R);let N=new Float32Array((v+1)*3);for(let B=0;B<=v;B++){let G=B/v*Math.PI*2;N[B*3]=_*Math.cos(G),N[B*3+1]=g*Math.sin(G),N[B*3+2]=0}let w=new Te;w.setAttribute("position",new me(N,3));let A=new zn({color:M,linewidth:t.groups.strokeWidth,depthTest:!1,depthWrite:!1}),D=new js(w,A);D.position.set(o.x,o.y,0),D.rotation.z=m,D.renderOrder=1,e.add(D)}})}function jg(){let n=document.createElement("div");n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.width="100%",n.style.height="100%",n.style.pointerEvents="none",n.style.overflow="hidden",n.style.zIndex="1",x.container.appendChild(n),x.labelContainer=n}function Uu(){if(!x.labelContainer)return;x.labelContainer.innerHTML="",x.labelDivs=[];let{nodes:n,config:t}=x,e=ue[x.currentTheme]||ue.dark;n.forEach(i=>{let r=document.createElement("div");r.textContent=i.id,r.style.position="absolute",r.style.top="0",r.style.left="0",r.style.fontSize=(i.labelFontSize||t.labels.fontSize)+"px",r.style.fontFamily=t.labels.fontFamily,r.style.color=t.labels.color,r.style.whiteSpace="nowrap",r.style.pointerEvents="none",r.style.userSelect="none",r.style.willChange="transform",x.labelContainer.appendChild(r),x.labelDivs.push(r)})}function Qg(){let{nodes:n,selectedNodes:t,config:e,labelDivs:i,labelContainer:r}=x;if(!r)return;if(!e.labels.visible){r.style.display="none";return}r.style.display="";let s=ue[x.currentTheme]||ue.dark,o=x.is3D;i.forEach((a,l)=>{if(l>=n.length){a.style.display="none";return}let c=n[l],h=c.size||e.nodes.defaultSize,u=t.has(c);if(o){let f=bc(c.x||0,c.y||0,c.z||0);if(!f.visible){a.style.display="none";return}a.style.transform=`translate(${f.x}px, ${f.y}px) translate(-50%, -50%)`,a.style.textAlign="center"}else if(x.labelPosition==="center"){let f=Ri(c.x||0,c.y||0);a.style.transform=`translate(${f.x}px, ${f.y}px) translate(-50%, -50%)`,a.style.textAlign="center"}else{let f=Ri(c.x||0,c.y||0),d=(h/2+4)*x.transform.k;a.style.transform=`translate(${f.x-d}px, ${f.y}px) translate(-100%, -50%)`,a.style.textAlign=""}a.style.color=u?e.labels.selectedColor:e.labels.color,a.style.fontWeight=u?"600":"normal",a.style.display=""})}var oi={zoom:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>',pan:'<svg width="16" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>',select:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>',settings:'<svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>',chevronDown:'<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>',chevronRight:'<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>',sun:'<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>',moon:'<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>'};function cr(){return ue[x.currentTheme]||ue.light}function Ot(n,t={},e={}){let i=document.createElement(n);return Object.assign(i,t),Object.assign(i.style,e),i}function be({id:n,title:t,htmlContent:e,active:i=!1}){let r=cr(),s=Ot("button",{id:n,title:t,innerHTML:e},{padding:"6px 14px",fontSize:"13px",fontWeight:"500",cursor:"pointer",border:i?r.activeButtonBorder:r.buttonBorder,borderRadius:"6px",background:i?r.activeButtonBg:r.buttonBg,color:i?r.activeButtonText:r.buttonText,transition:"all 0.15s ease",outline:"none",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"});return s.addEventListener("mouseenter",()=>{s.dataset.active||(s.style.background=r.buttonHoverBg),s.style.transform="translateY(-1px)"}),s.addEventListener("mouseleave",()=>{let o=s.dataset.active==="true";s.style.background=o?r.activeButtonBg:r.buttonBg,s.style.transform=""}),s}function ne(n,t){let e=cr();n.dataset.active=t,n.style.background=t?e.activeButtonBg:e.buttonBg,n.style.border=t?e.activeButtonBorder:e.buttonBorder,n.style.color=t?e.activeButtonText:e.buttonText}function t0({id:n,placeholder:t}){let e=cr();return Ot("input",{id:n,type:"text",placeholder:t},{padding:"6px 10px",fontSize:"13px",borderRadius:"6px",border:e.inputBorder,background:e.inputBg,color:e.inputText,outline:"none",width:"140px",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"})}function Lo(n,t=!0){let e=cr(),i=Ot("div",{innerHTML:`<span style="font-size:12px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">${n}</span><span class="toggle-icon">${t?oi.chevronDown:oi.chevronRight}</span>`},{display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",padding:"10px 0",borderBottom:`1px solid ${e.panelHeaderBorder}`,color:e.panelText,fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"}),r=Ot("div",{},{padding:"10px 0",display:t?"flex":"none",flexWrap:"wrap",gap:"6px"});return i.addEventListener("click",()=>{let s=r.style.display==="none";r.style.display=s?"flex":"none",i.querySelector(".toggle-icon").innerHTML=s?oi.chevronDown:oi.chevronRight}),[i,r]}function e0(n){let t=x.container,e=x.config,i=cr(),r=Ot("div",{id:"mainBar"},{position:"absolute",top:"12px",right:"12px",display:"flex",gap:"6px",zIndex:"1000",backgroundColor:i.panelBg,borderRadius:"10px",padding:"8px",boxShadow:i.panelShadow,border:i.panelBorder,backdropFilter:"blur(12px)",alignItems:"center"}),s=be({id:"zoomButton",title:"Zoom & pan mode",htmlContent:`${oi.zoom} Zoom`,active:!0}),o=be({id:"selectButton",title:"Selection mode",htmlContent:`${oi.select} Select`,active:!1});ne(s,!0),ne(o,!1);let a=be({id:"dimensionToggle",title:"Toggle 2D/3D view",htmlContent:"3D",active:!1}),l=t0({id:"searchBox",placeholder:"Search Node..."});l.style.width="160px";let c=Ot("button",{id:"themeToggle",title:"Toggle dark/light theme",innerHTML:x.currentTheme==="dark"?oi.sun:oi.moon},{display:"flex",alignItems:"center",justifyContent:"center",padding:"6px",border:i.buttonBorder,borderRadius:"6px",background:i.buttonBg,color:i.iconColor,cursor:"pointer",transition:"all 0.15s ease",outline:"none"}),h=be({id:"sidebarToggle",title:"Display More Tools",htmlContent:oi.settings});r.append(s,o,a,l,c,h);let u=Ot("div",{id:"sceneSidebar"},{position:"absolute",top:"60px",right:"-350px",width:"300px",transition:"right 0.3s ease",backgroundColor:i.panelBg,borderRadius:"10px",padding:"16px",boxShadow:i.panelShadow,border:i.panelBorder,backdropFilter:"blur(12px)",color:i.panelText,fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",zIndex:"999"}),[f,d]=Lo("Display",!0),m=be({id:"arrowToggle",title:"Toggle arrows",htmlContent:"Arrows",active:e.edges.showArrows}),_=be({id:"labelsToggle",title:"Toggle labels",htmlContent:"Labels",active:e.labels.visible}),g=be({id:"ellipsesToggle",title:"Toggle ellipses",htmlContent:"Ellipses",active:e.groups.showEllipses}),p=be({id:"legendToggle",title:"Toggle legend",htmlContent:"Legend",active:e.ui.showLegend}),M=be({id:"statsToggle",title:"Toggle stats",htmlContent:"Stats",active:e.ui.showStatistics});ne(m,e.edges.showArrows),ne(_,e.labels.visible),ne(g,e.groups.showEllipses),ne(p,e.ui.showLegend),ne(M,e.ui.showStatistics);let v=be({id:"edgeColorToggle",title:"Color edges by group",htmlContent:"Edge Colors",active:!1});ne(v,!1);let b=be({id:"labelPositionToggle",title:"Toggle label position (side / center)",htmlContent:"Center Labels",active:!1});ne(b,!1),d.append(m,_,b,g,p,M,v);let[S,T]=Lo("Appearance",!0);T.style.flexDirection="column",T.style.gap="12px";let R=Ot("div",{},{display:"flex",alignItems:"center",gap:"8px",width:"100%"}),N=Ot("span",{textContent:"Node Size"},{fontSize:"12px",whiteSpace:"nowrap",minWidth:"78px"}),w=Ot("input",{id:"nodeSizeSlider",type:"range",min:"2",max:"40",step:"1",value:String(Math.round(e.nodes.defaultSize))},{flex:"1",cursor:"pointer",accentColor:i.activeButtonText}),A=Ot("span",{id:"nodeSizeValue",textContent:String(Math.round(e.nodes.defaultSize))},{fontSize:"12px",minWidth:"24px",textAlign:"right",fontVariantNumeric:"tabular-nums"});R.append(N,w,A);let D=Ot("div",{},{display:"flex",alignItems:"center",gap:"8px",width:"100%"}),B=Ot("span",{textContent:"Edge Opacity"},{fontSize:"12px",whiteSpace:"nowrap",minWidth:"78px"}),G=Ot("input",{id:"edgeOpacitySlider",type:"range",min:"0.05",max:"1.0",step:"0.05",value:String(e.edges.defaultOpacity)},{flex:"1",cursor:"pointer",accentColor:i.activeButtonText}),I=Ot("span",{id:"edgeOpacityValue",textContent:String(e.edges.defaultOpacity)},{fontSize:"12px",minWidth:"24px",textAlign:"right",fontVariantNumeric:"tabular-nums"});D.append(B,G,I);let V=Ot("div",{},{display:"flex",alignItems:"center",gap:"8px",width:"100%"}),P=Ot("span",{textContent:"Label Size"},{fontSize:"12px",whiteSpace:"nowrap",minWidth:"78px"}),U=Ot("input",{id:"labelSizeSlider",type:"range",min:"2",max:"20",step:"1",value:String(Math.round(e.labels.fontSize))},{flex:"1",cursor:"pointer",accentColor:i.activeButtonText}),W=Ot("span",{id:"labelSizeValue",textContent:String(Math.round(e.labels.fontSize))},{fontSize:"12px",minWidth:"24px",textAlign:"right",fontVariantNumeric:"tabular-nums"});V.append(P,U,W);let j=Ot("div",{},{display:"flex",alignItems:"center",gap:"8px",width:"100%"}),K=Ot("span",{textContent:"Edge Color"},{fontSize:"12px",whiteSpace:"nowrap",minWidth:"78px"}),et=Ot("input",{id:"edgeColorPicker",type:"color",value:e.edges.defaultColor},{width:"32px",height:"24px",border:"none",padding:"0",cursor:"pointer",borderRadius:"4px",background:"none"});j.append(K,et);let _t=Ot("div",{},{display:"flex",alignItems:"center",gap:"8px",width:"100%"}),Et=Ot("span",{textContent:"Node Color"},{fontSize:"12px",whiteSpace:"nowrap",minWidth:"78px"}),Ut=Ot("input",{id:"ungroupedColorPicker",type:"color",value:e.nodes.defaultColor},{width:"32px",height:"24px",border:"none",padding:"0",cursor:"pointer",borderRadius:"4px",background:"none"});_t.append(Et,Ut),T.append(R,D,V,j,_t);let[Gt,Z]=Lo("Layout",!1),J=Ot("select",{id:"layoutSelect"},{padding:"6px 10px",borderRadius:"6px",border:i.inputBorder,background:i.inputBg,color:i.inputText,width:"100%",marginBottom:"6px",fontSize:"13px",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",outline:"none"});J.innerHTML=`
        <option value="force" ${e.layout==="force"?"selected":""}>Force-Directed</option>
        <option value="circular" ${e.layout==="circular"?"selected":""}>Circular</option>
    `;let ct=be({id:"restartButton",title:"Restart simulation",htmlContent:"Restart Layout"});Z.style.flexDirection="column",Z.append(J,ct);let[Nt,yt]=Lo("Export",!1),qt=be({id:"exportPNG",title:"Raster image of the current view",htmlContent:"PNG"}),Me=be({id:"exportSVG",title:"Scalable vector graphic",htmlContent:"SVG"}),Xt=be({id:"exportJSON",title:"Node and edge data with positions",htmlContent:"JSON"});yt.append(qt,Me,Xt);let[Jt,Kt]=Lo("Data",!1),Bt=be({id:"dataEdit",title:"Edit current data in JSON editor",htmlContent:"Edit"}),fe=be({id:"dataLoad",title:"Load data from a JSON file",htmlContent:"Load"}),L=be({id:"dataDownload",title:"Download current data as JSON",htmlContent:"Download"}),de=Ot("input",{type:"file",accept:".json"},{display:"none"});Kt.append(Bt,fe,L,de),u.append(f,d,S,T,Gt,Z,Nt,yt,Jt,Kt);let Yt=Ot("div",{id:"floatingLabelInput"},{position:"absolute",display:"none",background:i.panelBg,padding:"8px",borderRadius:"8px",boxShadow:i.panelShadow,border:i.panelBorder,backdropFilter:"blur(12px)",gap:"4px",zIndex:"1002"}),jt=t0({id:"groupLabelInput",placeholder:"Enter label"});jt.style.width="130px";let bt=be({id:"groupLabelButton",title:"Assign group",htmlContent:"&#10003;"}),C=be({id:"clearGroupButton",title:"Clear group",htmlContent:"Clear"});Yt.append(jt,bt,C);let y=Ot("div",{id:"legendPanel"},{position:"absolute",bottom:"20px",left:"20px",backgroundColor:i.panelBg,borderRadius:"10px",padding:"14px",boxShadow:i.panelShadow,border:i.panelBorder,backdropFilter:"blur(12px)",maxHeight:"200px",overflowY:"auto",fontSize:"12px",display:"none",minWidth:"120px",color:i.panelText,fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",zIndex:"1000"}),z=Ot("div",{innerHTML:"<strong>Groups</strong>"},{marginBottom:"8px",borderBottom:`1px solid ${i.panelHeaderBorder}`,paddingBottom:"6px",fontSize:"12px",fontWeight:"600",letterSpacing:"0.5px",textTransform:"uppercase"}),$=Ot("div",{id:"legendContent"});y.append(z,$);let Q=Ot("div",{id:"statsPanel"},{position:"absolute",bottom:"20px",right:"20px",backgroundColor:i.panelBg,borderRadius:"10px",padding:"14px",boxShadow:i.panelShadow,border:i.panelBorder,backdropFilter:"blur(12px)",fontSize:"12px",display:"none",color:i.panelText,fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",zIndex:"1000"}),Y=Ot("div",{id:"nodeTooltip"},{position:"absolute",display:"none",backgroundColor:i.tooltipBg,color:i.tooltipText,padding:"8px 12px",borderRadius:"8px",fontSize:"12px",pointerEvents:"none",zIndex:"1001",maxWidth:"220px",boxShadow:i.tooltipShadow,fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",lineHeight:"1.5"}),Mt=Ot("div",{id:"dataModal"},{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)",display:"none",alignItems:"center",justifyContent:"center",zIndex:"2000"}),st=Ot("div",{},{backgroundColor:i.panelBg,borderRadius:"12px",padding:"20px",width:"600px",maxWidth:"90vw",maxHeight:"80vh",display:"flex",flexDirection:"column",gap:"12px",border:i.panelBorder,boxShadow:i.panelShadow,color:i.panelText,fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"}),St=Ot("div",{textContent:"Edit Graph Data (JSON)"},{fontSize:"14px",fontWeight:"600"}),It=Ot("textarea",{id:"dataTextarea"},{width:"100%",height:"300px",fontFamily:"'Menlo', 'Monaco', 'Consolas', monospace",fontSize:"12px",borderRadius:"6px",border:i.inputBorder,background:i.inputBg,color:i.inputText,padding:"10px",resize:"vertical",outline:"none",boxSizing:"border-box"}),nt=Ot("div",{},{display:"flex",gap:"8px",justifyContent:"flex-end"}),at=be({id:"dataApply",title:"Apply changes",htmlContent:"Apply"}),xt=be({id:"dataCancel",title:"Cancel editing",htmlContent:"Cancel"});nt.append(at,xt),st.append(St,It,nt),Mt.appendChild(st);let wt=Ot("div",{id:"helperText",textContent:"Scroll to zoom \xB7 Drag to pan"},{position:"absolute",bottom:"8px",left:"50%",transform:"translateX(-50%)",opacity:"0.4",pointerEvents:"none",fontSize:"12px",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",color:i.panelText,whiteSpace:"nowrap",zIndex:"1"}),ot=Ot("div",{id:"selectionBox"},{position:"absolute",display:"none",border:`2px dashed ${i.selectionBoxStroke}`,backgroundColor:i.selectionBoxFill,pointerEvents:"none",zIndex:"2"});t.append(r,u,Yt,y,Q,Y,ot,wt,Mt),x.ui={mainControlBar:r,zoomButton:s,selectButton:o,dimensionToggle:a,searchBox:l,themeToggle:c,sidebarToggle:h,sceneSidebar:u,arrowToggleButton:m,labelsToggleButton:_,ellipsesToggleButton:g,legendToggleButton:p,statsToggleButton:M,edgeColorToggleButton:v,labelPositionButton:b,nodeSizeSlider:w,nodeSizeValue:A,edgeOpacitySlider:G,edgeOpacityValue:I,labelSizeSlider:U,labelSizeValue:W,layoutSelect:J,restartButton:ct,exportPNGButton:qt,exportSVGButton:Me,exportJSONButton:Xt,floatingInput:Yt,groupInputBox:jt,groupButton:bt,clearGroupButton:C,legendPanel:y,legendContent:$,statsPanel:Q,tooltip:Y,helperText:wt,dataEditButton:Bt,dataLoadButton:fe,dataDownloadButton:L,dataFileInput:de,dataModal:Mt,dataTextarea:It,edgeColorPicker:et,ungroupedColorPicker:Ut,dataApplyButton:at,dataCancelButton:xt},x.selectionBoxDiv=ot}function n0(){let{config:n,nodes:t}=x,{legendPanel:e,legendContent:i}=x.ui;if(!e)return;if(!n.ui.showLegend){e.style.display="none";return}let r=[...new Set(t.map(o=>o.group).filter(Boolean))].sort();if(r.length===0){e.style.display="none";return}e.style.display="block",i.innerHTML="";let s=cr();r.forEach(o=>{let a=t.filter(f=>f.group===o).length,l=Ot("div",{},{display:"flex",alignItems:"center",marginTop:"4px",cursor:"pointer",padding:"3px 6px",borderRadius:"4px",transition:"background 0.1s"}),c=Ot("div",{title:"Click to change color"},{width:"12px",height:"12px",borderRadius:"3px",backgroundColor:Fe(o),marginRight:"8px",flexShrink:"0",cursor:"pointer",border:"2px solid transparent",boxSizing:"content-box",transition:"border-color 0.15s ease, transform 0.15s ease"});c.addEventListener("mouseenter",()=>{c.style.borderColor=Fe(o),c.style.transform="scale(1.2)"}),c.addEventListener("mouseleave",()=>{c.style.borderColor="transparent",c.style.transform=""}),c.addEventListener("click",f=>{f.stopPropagation();let d=document.createElement("input");d.type="color",d.value=Fe(o),d.style.position="absolute",d.style.opacity="0",d.style.pointerEvents="none",document.body.appendChild(d),d.addEventListener("input",()=>{x.groupColorOverrides[o]=d.value,c.style.backgroundColor=d.value,x._tickFn&&x._tickFn()}),d.addEventListener("change",()=>{document.body.removeChild(d)}),d.click()});let h=Ot("span",{textContent:"\u270E"},{fontSize:"10px",opacity:"0",transition:"opacity 0.15s ease",marginLeft:"-4px",marginRight:"4px",pointerEvents:"none"}),u=Ot("span",{innerHTML:`${o} <span style="opacity:0.6">(${a})</span>`},{fontSize:"12px"});l.append(c,h,u),l.addEventListener("mouseenter",()=>{l.style.backgroundColor=s.legendHoverBg,h.style.opacity="0.5"}),l.addEventListener("mouseleave",()=>{l.style.backgroundColor="",h.style.opacity="0"}),l.addEventListener("click",()=>{Io(t.filter(f=>f.group===o)),x._tickFn&&x._tickFn()}),i.appendChild(l)})}function i0(){let{config:n,nodes:t,edges:e,selectedNodes:i}=x,{statsPanel:r}=x.ui;if(!r)return;if(!n.ui.showStatistics){r.style.display="none";return}r.style.display="block";let s=cr(),o=t.length,a=e.length,l=new Set(t.map(f=>f.group).filter(Boolean)).size,c=o>1?2*a/(o*(o-1)):0,h={};t.forEach(f=>h[f.id]=0),e.forEach(f=>{let d=f.source.id||f.source,m=f.target.id||f.target;h[d]!==void 0&&h[d]++,h[m]!==void 0&&h[m]++});let u=o>0?Object.values(h).reduce((f,d)=>f+d,0)/o:0;r.innerHTML=`
        <div style="font-weight:600;margin-bottom:8px;border-bottom:1px solid ${s.statsBorder};padding-bottom:6px;font-size:12px;letter-spacing:0.5px;text-transform:uppercase;">Statistics</div>
        <table style="border-collapse:collapse;font-size:12px;">
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Nodes</td><td style="text-align:right;font-weight:500;">${o}</td></tr>
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Edges</td><td style="text-align:right;font-weight:500;">${a}</td></tr>
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Groups</td><td style="text-align:right;font-weight:500;">${l}</td></tr>
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Density</td><td style="text-align:right;font-weight:500;">${c.toFixed(4)}</td></tr>
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Avg Degree</td><td style="text-align:right;font-weight:500;">${u.toFixed(2)}</td></tr>
            <tr><td style="padding:2px 16px 2px 0;opacity:0.7;">Selected</td><td style="text-align:right;font-weight:500;">${i.size}</td></tr>
        </table>
    `}function r0(n,t){let{floatingInput:e,groupInputBox:i}=x.ui;e.style.display="flex",e.style.left=`${n+15}px`,e.style.top=`${t-30}px`,i.focus()}function Mc(){x.ui.floatingInput.style.display="none"}function s0(){let n=x.selectionBoxDiv;if(!n)return;let t=x.selectionBox;if(!t){n.style.display="none";return}let e=Ri(t.x,t.y),i=Ri(t.x+t.width,t.y+t.height);n.style.display="block",n.style.left=Math.min(e.x,i.x)+"px",n.style.top=Math.min(e.y,i.y)+"px",n.style.width=Math.abs(i.x-e.x)+"px",n.style.height=Math.abs(i.y-e.y)+"px"}function hr(n){let{nodes:t,edges:e,config:i,container:r}=x;try{let s=document.getElementById("simulationParams"),o,a;if(s){let c=JSON.parse(s.textContent);o=c.totalForce/t.length,a=c.linkDistance}else o=i.simulation.chargeStrength/t.length,a=i.simulation.linkDistance;let l=x.is3D?3:2;if(i.layout==="circular")i1(),x.simulation=Oi(t).numDimensions(l).force("link",cs(e).id(c=>c.id).distance(a).strength(.1)).force("charge",gs().strength(-o*.1)).on("tick",n);else{let c=x.is3D?ss(r.clientWidth/2,r.clientHeight/2,0):ss(r.clientWidth/2,r.clientHeight/2);x.simulation=Oi(t).numDimensions(l).force("link",cs(e).id(h=>h.id).distance(a)).force("charge",gs().strength(-o)).force("center",c).on("tick",n)}x.is3D||Se(x.renderer.domElement).call(x.zoom)}catch(s){console.error("Error updating visualization:",s)}}function i1(){let{nodes:n,container:t}=x,e=t.clientWidth/2,i=t.clientHeight/2,r=Math.min(e,i)*.7,s=[...new Set(n.map(l=>l.group||"default"))].sort(),o=new Map;s.forEach((l,c)=>o.set(l,c));let a=[...n].sort((l,c)=>{let h=l.group||"default",u=c.group||"default";return o.get(h)-o.get(u)});a.forEach((l,c)=>{let h=2*Math.PI*c/a.length-Math.PI/2;l.x=e+r*Math.cos(h),l.y=i+r*Math.sin(h),l.fx=l.x,l.fy=l.y}),setTimeout(()=>{n.forEach(l=>{l.fx=null,l.fy=null})},100)}function o0(n){let t=x.config,e=x.renderer.domElement;x._tickFn=n,x.zoom=ua().scaleExtent([t.canvas.zoomMin,t.canvas.zoomMax]).on("zoom",i=>{x.selectionMode||(x.transform=i.transform,Pi(),n())}),Se(e).call(x.zoom),e.addEventListener("mousedown",i=>{if(Mc(),!x.selectionMode)return;let r=i.shiftKey,[s,o]=je(i),a=Iu(s,o),l=x.is3D?Du(s,o):Pu(a.x,a.y);l?r?x.selectedNodes.has(l)?x.selectedNodes.delete(l):x.selectedNodes.add(l):(x.draggingNode=l,x.dragOffsetX=l.x-a.x,x.dragOffsetY=l.y-a.y,x.selectedNodes.has(l)||Io([l])):(r||Ii(),x.selectionBox={x:a.x,y:a.y,width:0,height:0}),n()}),e.addEventListener("mousemove",i=>{let[r,s]=je(i),o=Iu(r,s);if(t.ui.showTooltips&&!x.selectionMode){let a=x.is3D?Du(r,s):Pu(o.x,o.y),l=x.ui.tooltip;if(a){let c=`<strong>${a.id}</strong>`;if(a.group&&(c+=`<br><span style="color:${Fe(a.group)}">&#9679; ${a.group}</span>`),a.metadata)for(let[h,u]of Object.entries(a.metadata))c+=`<br><span style="opacity:0.7">${h}:</span> ${u}`;l.innerHTML=c,l.style.display="block",l.style.left=`${r+15}px`,l.style.top=`${s+15}px`}else l.style.display="none"}if(x.selectionMode)if(x.ui.tooltip.style.display="none",x.draggingNode){let a=o.x+x.dragOffsetX-x.draggingNode.x,l=o.y+x.dragOffsetY-x.draggingNode.y;x.selectedNodes.size>0&&x.selectedNodes.has(x.draggingNode)?x.selectedNodes.forEach(c=>{c.x+=a,c.y+=l}):(x.draggingNode.x=o.x+x.dragOffsetX,x.draggingNode.y=o.y+x.dragOffsetY),x.simulation.alpha(.1).restart(),n()}else x.selectionBox&&(x.selectionBox.width=o.x-x.selectionBox.x,x.selectionBox.height=o.y-x.selectionBox.y,n())}),e.addEventListener("mouseleave",()=>{x.ui.tooltip.style.display="none"}),e.addEventListener("mouseup",i=>{if(x.selectionMode){if(x.draggingNode)x.draggingNode=null;else if(x.selectionBox){if(Lu(x.nodes.filter(r=>Gg(r,x.selectionBox))),x.selectedNodes.size>0){let[r,s]=je(i);r0(r,s)}x.selectionBox=null}n()}}),x.ui.zoomButton.addEventListener("click",()=>{x.selectionMode&&(x.selectionMode=!1,ne(x.ui.zoomButton,!0),ne(x.ui.selectButton,!1),x.is3D?(x.orbitControls&&(x.orbitControls.enabled=!0),x.ui.helperText.textContent="Drag to rotate \xB7 Right-click to pan \xB7 Scroll to zoom"):(Se(e).call(x.zoom),x.ui.helperText.textContent="Scroll to zoom \xB7 Drag to pan"))}),x.ui.selectButton.addEventListener("click",()=>{x.selectionMode||(x.selectionMode=!0,ne(x.ui.selectButton,!0),ne(x.ui.zoomButton,!1),x.is3D?x.orbitControls&&(x.orbitControls.enabled=!1):Se(e).on("mousedown.zoom",null).on("mousemove.zoom",null).on("mouseup.zoom",null).on("wheel.zoom",null).on("dblclick.zoom",null),x.ui.helperText.textContent="Click to select \xB7 Shift+click to add")}),x.ui.sidebarToggle.addEventListener("click",i=>{i.stopPropagation();let r=x.ui.sceneSidebar,o=parseFloat(r.style.right)<0;r.style.right=o?"12px":"-350px",ne(x.ui.sidebarToggle,o)}),document.addEventListener("click",i=>{let r=x.ui.sceneSidebar;parseFloat(r.style.right)>=0&&!r.contains(i.target)&&!x.ui.sidebarToggle.contains(i.target)&&(r.style.right="-350px",ne(x.ui.sidebarToggle,!1))}),x.ui.searchBox.addEventListener("input",()=>{let i=x.ui.searchBox.value.toLowerCase();Io(x.nodes.filter(r=>r.id.toLowerCase().includes(i))),n()}),x.ui.arrowToggleButton.addEventListener("click",()=>{x.showArrows=!x.showArrows,ne(x.ui.arrowToggleButton,x.showArrows),n()}),x.ui.labelsToggleButton.addEventListener("click",()=>{t.labels.visible=!t.labels.visible,ne(x.ui.labelsToggleButton,t.labels.visible),n()}),x.ui.labelPositionButton.addEventListener("click",()=>{x.labelPosition=x.labelPosition==="side"?"center":"side";let i=x.labelPosition==="center";ne(x.ui.labelPositionButton,i),n()}),x.ui.ellipsesToggleButton.addEventListener("click",()=>{t.groups.showEllipses=!t.groups.showEllipses,ne(x.ui.ellipsesToggleButton,t.groups.showEllipses),n()}),x.ui.legendToggleButton.addEventListener("click",()=>{t.ui.showLegend=!t.ui.showLegend,ne(x.ui.legendToggleButton,t.ui.showLegend),n()}),x.ui.statsToggleButton.addEventListener("click",()=>{t.ui.showStatistics=!t.ui.showStatistics,ne(x.ui.statsToggleButton,t.ui.showStatistics),n()}),x.ui.edgeColorToggleButton.addEventListener("click",()=>{x.colorEdgesByGroup=!x.colorEdgesByGroup,ne(x.ui.edgeColorToggleButton,x.colorEdgesByGroup),n()}),x.ui.groupButton.addEventListener("click",()=>{let i=[...new Set(x.nodes.map(s=>s.group).filter(Boolean))],r=x.ui.groupInputBox.value||`Group ${i.length+1}`;r&&x.selectedNodes.size>0&&(x.selectedNodes.forEach(s=>s.group=r),n()),x.ui.groupInputBox.value="",Mc(),Ii()}),x.ui.clearGroupButton.addEventListener("click",()=>{x.selectedNodes.size>0&&(x.selectedNodes.forEach(i=>delete i.group),n()),x.ui.groupInputBox.value="",Mc(),Ii()}),x.ui.nodeSizeSlider.addEventListener("input",()=>{let i=parseFloat(x.ui.nodeSizeSlider.value);t.nodes.defaultSize=i,x.ui.nodeSizeValue.textContent=String(Math.round(i)),x.userAdjusted.nodeSize=!0,n()}),x.ui.edgeOpacitySlider.addEventListener("input",()=>{let i=parseFloat(x.ui.edgeOpacitySlider.value);t.edges.defaultOpacity=i,x.ui.edgeOpacityValue.textContent=i.toFixed(2),x.userAdjusted.edgeOpacity=!0,x.normalEdgesMesh&&(x.normalEdgesMesh.material.opacity=i),n()}),x.ui.labelSizeSlider.addEventListener("input",()=>{let i=parseFloat(x.ui.labelSizeSlider.value);t.labels.fontSize=i,x.ui.labelSizeValue.textContent=String(Math.round(i)),x.labelDivs.forEach(r=>{r.style.fontSize=i+"px"}),n()}),x.ui.edgeColorPicker.addEventListener("input",()=>{t.edges.defaultColor=x.ui.edgeColorPicker.value,n()}),x.ui.ungroupedColorPicker.addEventListener("input",()=>{t.nodes.defaultColor=x.ui.ungroupedColorPicker.value,n()}),x.ui.dataEditButton.addEventListener("click",()=>{let i={nodes:x.nodes.map(r=>{let s={id:r.id};return r.group&&(s.group=r.group),r.size&&(s.size=r.size),r.color&&(s.color=r.color),r.metadata&&(s.metadata=r.metadata),s}),edges:x.edges.map(r=>{let s={source:r.source.id||r.source,target:r.target.id||r.target};return r.weight&&(s.weight=r.weight),r.color&&(s.color=r.color),s})};x.ui.dataTextarea.value=JSON.stringify(i,null,2),x.ui.dataModal.style.display="flex"}),x.ui.dataApplyButton.addEventListener("click",()=>{try{let i=JSON.parse(x.ui.dataTextarea.value);if(!i.nodes||!i.edges){alert('JSON must contain "nodes" and "edges" arrays.');return}x.ui.dataModal.style.display="none",x.applyNewData&&x.applyNewData(i)}catch(i){alert("Invalid JSON: "+i.message)}}),x.ui.dataCancelButton.addEventListener("click",()=>{x.ui.dataModal.style.display="none"}),x.ui.dataLoadButton.addEventListener("click",()=>{x.ui.dataFileInput.click()}),x.ui.dataFileInput.addEventListener("change",i=>{let r=i.target.files[0];if(!r)return;let s=new FileReader;s.onload=o=>{try{let a=JSON.parse(o.target.result);if(!a.nodes||!a.edges){alert('JSON must contain "nodes" and "edges" arrays.');return}x.applyNewData&&x.applyNewData(a)}catch(a){alert("Invalid JSON file: "+a.message)}},s.readAsText(r),i.target.value=""}),x.ui.dataDownloadButton.addEventListener("click",()=>{let i={nodes:x.nodes.map(o=>{let a={id:o.id,x:o.x,y:o.y};return o.group&&(a.group=o.group),o.size&&(a.size=o.size),o.color&&(a.color=o.color),o.metadata&&(a.metadata=o.metadata),a}),edges:x.edges.map(o=>({source:o.source.id||o.source,target:o.target.id||o.target,...o.weight&&{weight:o.weight},...o.color&&{color:o.color}}))},r=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),s=document.createElement("a");s.download="lightgraph_data.json",s.href=URL.createObjectURL(r),s.click()}),x.ui.themeToggle.addEventListener("click",()=>{x.currentTheme=x.currentTheme==="dark"?"light":"dark",r1(),n()}),x.ui.dimensionToggle.addEventListener("click",()=>{let i=!x.is3D;if(x.is3D=i,i){Se(e).on(".zoom",null),Wg();let r=x.container.clientWidth/2,s=x.container.clientHeight/2;x.orbitControls=new Ro(x.camera3D,e),x.orbitControls.enableDamping=!0,x.orbitControls.dampingFactor=.1,x.orbitControls.target.set(r,s,0),x._savedShowArrows=x.showArrows,x.showArrows=!1,x.ui.dimensionToggle.innerHTML="2D",ne(x.ui.dimensionToggle,!0),x.selectionMode?x.ui.helperText.textContent="Click to select \xB7 Shift+click to add":x.ui.helperText.textContent="Drag to rotate \xB7 Right-click to pan \xB7 Scroll to zoom"}else x.orbitControls&&(x.orbitControls.dispose(),x.orbitControls=null),Zg(),x.nodes.forEach(r=>{r.z=0,r.vz=0}),Xg(),x.transform=gn,Se(e).call(x.zoom),Pi(),x.showArrows=x._savedShowArrows||!1,x.ui.dimensionToggle.innerHTML="3D",ne(x.ui.dimensionToggle,!1),x.selectionMode?x.ui.helperText.textContent="Drag to select \xB7 Shift+click to add \xB7 Drag nodes to move":x.ui.helperText.textContent="Scroll to zoom \xB7 Drag to pan";Po(),Do(),hr(n),i&&Yg(n)}),window.addEventListener("resize",()=>{let i=x.container.clientWidth,r=x.container.clientHeight;x.renderer.setSize(i,r),x.is3D?(x.camera3D.aspect=i/r,x.camera3D.updateProjectionMatrix()):Pi(),n()})}function r1(){let n=ue[x.currentTheme]||ue.dark;x.scene.background=new Dt(n.background),x.config.nodes.defaultColor=n.nodeDefault,x.config.nodes.borderColor=n.nodeBorder,x.config.nodes.selectedBorderColor=n.selectedBorder,x.config.edges.defaultColor=n.edgeDefault,x.config.edges.selectedColor=n.edgeSelected,x.userAdjusted.edgeOpacity||(x.config.edges.defaultOpacity=n.edgeOpacity),x.config.edges.selectedOpacity=n.edgeSelectedOpacity,x.config.labels.color=n.labelColor,x.config.labels.selectedColor=n.selectedLabelColor,x.config.canvas.backgroundColor=n.background,x.config.groups.fillOpacity=n.groupFillOpacity,x.ui.edgeColorPicker&&(x.ui.edgeColorPicker.value=n.edgeDefault),x.ui.ungroupedColorPicker&&(x.ui.ungroupedColorPicker.value=n.nodeDefault),x.normalEdgesMesh&&(x.normalEdgesMesh.material.opacity=x.config.edges.defaultOpacity),x.highlightedEdgesMesh&&(x.highlightedEdgesMesh.material.opacity=x.config.edges.selectedOpacity),x.ui.edgeOpacitySlider&&(x.ui.edgeOpacitySlider.value=String(x.config.edges.defaultOpacity),x.ui.edgeOpacityValue.textContent=x.config.edges.defaultOpacity.toFixed(2),x.ui.edgeOpacitySlider.style.accentColor=n.activeButtonText),x.ui.nodeSizeSlider&&(x.ui.nodeSizeSlider.style.accentColor=n.activeButtonText),[x.ui.mainControlBar,x.ui.sceneSidebar,x.ui.legendPanel,x.ui.statsPanel,x.ui.floatingInput].forEach(r=>{r&&(r.style.backgroundColor=n.panelBg,r.style.boxShadow=n.panelShadow,r.style.border=n.panelBorder,r.style.color=n.panelText)}),x.ui.tooltip.style.backgroundColor=n.tooltipBg,x.ui.tooltip.style.color=n.tooltipText,x.ui.tooltip.style.boxShadow=n.tooltipShadow,x.selectionBoxDiv&&(x.selectionBoxDiv.style.borderColor=n.selectionBoxStroke,x.selectionBoxDiv.style.backgroundColor=n.selectionBoxFill),x.ui.themeToggle.innerHTML=x.currentTheme==="dark"?'<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>':'<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>',x.ui.mainControlBar.querySelectorAll("button").forEach(r=>{r.style.color=n.iconColor,r.dataset.active!=="true"&&(r.style.border=n.buttonBorder,r.style.background=n.buttonBg)}),x.ui.searchBox.style.background=n.inputBg,x.ui.searchBox.style.border=n.inputBorder,x.ui.searchBox.style.color=n.inputText,x.ui.helperText&&(x.ui.helperText.style.color=n.panelText);let i=x.ui.sceneSidebar;i&&(i.querySelectorAll("button").forEach(r=>{let s=r.dataset.active==="true";r.style.color=s?n.activeButtonText:n.buttonText,r.style.border=s?n.activeButtonBorder:n.buttonBorder,r.style.background=s?n.activeButtonBg:n.buttonBg}),i.querySelectorAll("div").forEach(r=>{r.style.cursor==="pointer"&&r.style.borderBottom&&(r.style.color=n.panelText,r.style.borderBottom=`1px solid ${n.panelHeaderBorder}`)}),i.querySelectorAll("select").forEach(r=>{r.style.background=n.inputBg,r.style.border=n.inputBorder,r.style.color=n.inputText}),i.querySelectorAll('input[type="range"]').forEach(r=>{r.style.accentColor=n.activeButtonText}))}function Ou(n,t){let e=document.createElement("a");e.download=t,e.href=n,e.click()}function a0(){let n=x.renderer.domElement,t=window.devicePixelRatio||1,e=n.width,i=n.height,r=document.createElement("canvas");r.width=e,r.height=i;let s=r.getContext("2d");s.drawImage(n,0,0,e,i),s.save(),s.scale(t,t),x.config.labels.visible&&s1(s),x.config.ui.showLegend&&o1(s),x.config.ui.showStatistics&&a1(s),s.restore();let o=r.toDataURL("image/png");Ou(o,"lightgraph.png")}function s1(n){let{nodes:t,selectedNodes:e,config:i}=x,r=ue[x.currentTheme]||ue.dark;t.forEach(s=>{let o=e.has(s),a=s.labelFontSize||i.labels.fontSize,l=o?"600":"normal";if(n.font=`${l} ${a}px ${i.labels.fontFamily}`,n.fillStyle=o?i.labels.selectedColor:i.labels.color,n.textBaseline="middle",x.is3D){let c=bc(s.x||0,s.y||0,s.z||0);if(!c.visible)return;n.textAlign="center",n.fillText(s.id,c.x,c.y)}else{let c=Ri(s.x||0,s.y||0),f=((s.size||i.nodes.defaultSize)/2+4)*x.transform.k;x.labelPosition==="center"?(n.textAlign="center",n.fillText(s.id,c.x,c.y)):(n.textAlign="right",n.fillText(s.id,c.x-f,c.y))}})}function o1(n){let{nodes:t,config:e}=x,i=ue[x.currentTheme]||ue.dark,r=[...new Set(t.map(d=>d.group).filter(Boolean))].sort();if(r.length===0)return;let s=x.ui.legendPanel;if(!s||s.style.display==="none")return;let o=s.getBoundingClientRect(),a=x.container.getBoundingClientRect(),l=o.left-a.left,c=o.top-a.top,h=o.width,u=o.height;n.fillStyle=i.panelBg,n.beginPath(),Fu(n,l,c,h,u,10),n.fill(),n.fillStyle=i.panelText,n.font="600 12px Inter, -apple-system, system-ui, sans-serif",n.textAlign="left",n.textBaseline="top",n.fillText("Groups",l+14,c+14);let f=c+36;r.forEach(d=>{let m=t.filter(_=>_.group===d).length;n.fillStyle=Fe(d),n.beginPath(),Fu(n,l+14,f+1,12,12,3),n.fill(),n.fillStyle=i.panelText,n.font="12px Inter, -apple-system, system-ui, sans-serif",n.fillText(`${d} (${m})`,l+34,f+1),f+=20})}function a1(n){let{nodes:t,edges:e,selectedNodes:i,config:r}=x,s=ue[x.currentTheme]||ue.dark,o=x.ui.statsPanel;if(!o||o.style.display==="none")return;let a=o.getBoundingClientRect(),l=x.container.getBoundingClientRect(),c=a.left-l.left,h=a.top-l.top,u=a.width,f=a.height;n.fillStyle=s.panelBg,n.beginPath(),Fu(n,c,h,u,f,10),n.fill(),n.fillStyle=s.panelText,n.font="600 12px Inter, -apple-system, system-ui, sans-serif",n.textAlign="left",n.textBaseline="top",n.fillText("Statistics",c+14,h+14);let d=t.length,m=e.length,_=new Set(t.map(S=>S.group).filter(Boolean)).size,g=d>1?2*m/(d*(d-1)):0,p={};t.forEach(S=>p[S.id]=0),e.forEach(S=>{let T=S.source.id||S.source,R=S.target.id||S.target;p[T]!==void 0&&p[T]++,p[R]!==void 0&&p[R]++});let M=d>0?Object.values(p).reduce((S,T)=>S+T,0)/d:0,v=[["Nodes",d],["Edges",m],["Groups",_],["Density",g.toFixed(4)],["Avg Degree",M.toFixed(2)],["Selected",i.size]];n.font="12px Inter, -apple-system, system-ui, sans-serif";let b=h+36;v.forEach(([S,T])=>{n.globalAlpha=.7,n.textAlign="left",n.fillText(S,c+14,b),n.globalAlpha=1,n.font="500 12px Inter, -apple-system, system-ui, sans-serif",n.textAlign="right",n.fillText(String(T),c+u-14,b),n.font="12px Inter, -apple-system, system-ui, sans-serif",b+=18})}function Fu(n,t,e,i,r,s){n.moveTo(t+s,e),n.lineTo(t+i-s,e),n.quadraticCurveTo(t+i,e,t+i,e+s),n.lineTo(t+i,e+r-s),n.quadraticCurveTo(t+i,e+r,t+i-s,e+r),n.lineTo(t+s,e+r),n.quadraticCurveTo(t,e+r,t,e+r-s),n.lineTo(t,e+s),n.quadraticCurveTo(t,e,t+s,e),n.closePath()}function l0(){if(x.is3D){alert("SVG export is not available in 3D mode. Use PNG export instead.");return}let{nodes:n,edges:t,config:e,transform:i}=x,r=x.container,s=r.clientWidth,o=r.clientHeight,a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("width",s),a.setAttribute("height",o),a.setAttribute("xmlns","http://www.w3.org/2000/svg");let l=document.createElementNS("http://www.w3.org/2000/svg","rect");l.setAttribute("width","100%"),l.setAttribute("height","100%"),l.setAttribute("fill",e.canvas.backgroundColor),a.appendChild(l);let c=document.createElementNS("http://www.w3.org/2000/svg","g");if(c.setAttribute("transform",`translate(${i.x},${i.y}) scale(${i.k})`),t.forEach(d=>{let m=document.createElementNS("http://www.w3.org/2000/svg","line");m.setAttribute("x1",d.source.x),m.setAttribute("y1",d.source.y),m.setAttribute("x2",d.target.x),m.setAttribute("y2",d.target.y);let _=d.color?d.color:x.colorEdgesByGroup&&d.source.group?Fe(d.source.group):e.edges.defaultColor;m.setAttribute("stroke",_),m.setAttribute("stroke-opacity",e.edges.defaultOpacity),m.setAttribute("stroke-width",e.edges.defaultWidth),c.appendChild(m)}),n.forEach(d=>{let m=document.createElementNS("http://www.w3.org/2000/svg","circle");if(m.setAttribute("cx",d.x),m.setAttribute("cy",d.y),m.setAttribute("r",(d.size||e.nodes.defaultSize)/2),m.setAttribute("fill",d.group?Fe(d.group):d.color||e.nodes.defaultColor),m.setAttribute("stroke",e.nodes.borderColor),m.setAttribute("stroke-width",e.nodes.borderWidth),c.appendChild(m),e.labels.visible){let _=document.createElementNS("http://www.w3.org/2000/svg","text"),g=d.labelFontSize||e.labels.fontSize;if(x.labelPosition==="center")_.setAttribute("x",d.x),_.setAttribute("y",d.y+g/3),_.setAttribute("text-anchor","middle");else{let p=d.size||e.nodes.defaultSize;_.setAttribute("x",d.x-p/2-4),_.setAttribute("y",d.y+g/3),_.setAttribute("text-anchor","end")}_.setAttribute("font-size",g),_.setAttribute("font-family",e.labels.fontFamily),_.setAttribute("fill",e.labels.color),_.textContent=d.id,c.appendChild(_)}}),a.appendChild(c),e.ui.showLegend){let d=[...new Set(n.map(m=>m.group).filter(Boolean))].sort();if(d.length>0){let m=ue[x.currentTheme]||ue.dark,_=document.createElementNS("http://www.w3.org/2000/svg","g"),g=20,p=o-20-(d.length*20+36),M=document.createElementNS("http://www.w3.org/2000/svg","rect");M.setAttribute("x",g),M.setAttribute("y",p),M.setAttribute("width",140),M.setAttribute("height",d.length*20+36),M.setAttribute("rx",10),M.setAttribute("fill",m.panelBg),M.setAttribute("opacity","0.9"),_.appendChild(M);let v=document.createElementNS("http://www.w3.org/2000/svg","text");v.setAttribute("x",g+14),v.setAttribute("y",p+22),v.setAttribute("font-size","12"),v.setAttribute("font-weight","600"),v.setAttribute("fill",m.panelText),v.textContent="Groups",_.appendChild(v),d.forEach((b,S)=>{let T=n.filter(A=>A.group===b).length,R=p+36+S*20,N=document.createElementNS("http://www.w3.org/2000/svg","rect");N.setAttribute("x",g+14),N.setAttribute("y",R),N.setAttribute("width",12),N.setAttribute("height",12),N.setAttribute("rx",3),N.setAttribute("fill",Fe(b)),_.appendChild(N);let w=document.createElementNS("http://www.w3.org/2000/svg","text");w.setAttribute("x",g+34),w.setAttribute("y",R+10),w.setAttribute("font-size","12"),w.setAttribute("fill",m.panelText),w.textContent=`${b} (${T})`,_.appendChild(w)}),a.appendChild(_)}}if(e.ui.showStatistics){let d=ue[x.currentTheme]||ue.dark,m=n.length,_=t.length,g=new Set(n.map(B=>B.group).filter(Boolean)).size,p=m>1?2*_/(m*(m-1)):0,M={};n.forEach(B=>M[B.id]=0),t.forEach(B=>{let G=B.source.id||B.source,I=B.target.id||B.target;M[G]!==void 0&&M[G]++,M[I]!==void 0&&M[I]++});let v=m>0?Object.values(M).reduce((B,G)=>B+G,0)/m:0,b=[["Nodes",m],["Edges",_],["Groups",g],["Density",p.toFixed(4)],["Avg Degree",v.toFixed(2)]],S=document.createElementNS("http://www.w3.org/2000/svg","g"),T=160,R=b.length*18+36,N=s-20-T,w=o-20-R,A=document.createElementNS("http://www.w3.org/2000/svg","rect");A.setAttribute("x",N),A.setAttribute("y",w),A.setAttribute("width",T),A.setAttribute("height",R),A.setAttribute("rx",10),A.setAttribute("fill",d.panelBg),A.setAttribute("opacity","0.9"),S.appendChild(A);let D=document.createElementNS("http://www.w3.org/2000/svg","text");D.setAttribute("x",N+14),D.setAttribute("y",w+22),D.setAttribute("font-size","12"),D.setAttribute("font-weight","600"),D.setAttribute("fill",d.panelText),D.textContent="Statistics",S.appendChild(D),b.forEach(([B,G],I)=>{let V=w+38+I*18,P=document.createElementNS("http://www.w3.org/2000/svg","text");P.setAttribute("x",N+14),P.setAttribute("y",V+10),P.setAttribute("font-size","12"),P.setAttribute("fill",d.panelText),P.setAttribute("opacity","0.7"),P.textContent=B,S.appendChild(P);let U=document.createElementNS("http://www.w3.org/2000/svg","text");U.setAttribute("x",N+T-14),U.setAttribute("y",V+10),U.setAttribute("font-size","12"),U.setAttribute("font-weight","500"),U.setAttribute("fill",d.panelText),U.setAttribute("text-anchor","end"),U.textContent=String(G),S.appendChild(U)}),a.appendChild(S)}let u=new XMLSerializer().serializeToString(a),f=new Blob([u],{type:"image/svg+xml"});Ou(URL.createObjectURL(f),"lightgraph.svg")}function c0(){let{nodes:n,edges:t,config:e}=x,i={nodes:n.map(s=>({id:s.id,group:s.group,x:s.x,y:s.y,...x.is3D&&{z:s.z||0},size:s.size,color:s.color})),edges:t.map(s=>({source:s.source.id||s.source,target:s.target.id||s.target,weight:s.weight})),config:e},r=new Blob([JSON.stringify(i,null,2)],{type:"application/json"});Ou(URL.createObjectURL(r),"lightgraph.json")}window.lightGraph=window.lightGraph||{};window.lightGraph.initializeVisualization=()=>{let n=document.getElementById("lightGraphConfig"),t=n?JSON.parse(n.textContent):{},e=jc(Vp,t);x.currentTheme=e.ui.theme||"light",Gp(e,x.currentTheme),x.config=e,x.showArrows=e.edges.showArrows;let i=t.nodes&&t.nodes.defaultSize!==void 0,r=t.edges&&t.edges.defaultOpacity!==void 0,s=document.getElementById("lightGraph");if(s.clientHeight===0&&(s.style.height="100vh"),s.style.position="relative",s.style.overflow="hidden",x.container=s,!Hg())return;x.transform=gn;let a=[...fa,...da,...pa];x.groupColorScale=yr(a),x.simulation=Oi([]),e0(l),jg(),o0(l),x.ui.layoutSelect.addEventListener("change",()=>{e.layout=x.ui.layoutSelect.value,hr(l)}),x.ui.restartButton.addEventListener("click",()=>{hr(l)}),x.ui.exportPNGButton.addEventListener("click",a0),x.ui.exportSVGButton.addEventListener("click",l0),x.ui.exportJSONButton.addEventListener("click",c0);function l(){Nu(),$g(),Kg(),Jg(),Qg(),s0(),qg(),n0(),i0()}function c(){try{let f=document.getElementById("nodesData"),d=document.getElementById("edgesData");if(!f||!d){console.error("nodesData or edgesData element not found");return}x.selectionMode=!1,x.transform=gn,Ii(),x.selectionBox=null,x.draggingNode=null,x.dragOffsetX=0,x.dragOffsetY=0,x.nodes=JSON.parse(f.textContent),x.edges=JSON.parse(d.textContent);let m=x.nodes.length,_=x.edges.length;if(!i&&!x.userAdjusted.nodeSize){let g=Math.max(4,Math.min(20,180/Math.sqrt(m)));e.nodes.defaultSize=Math.round(g),x.ui.nodeSizeSlider&&(x.ui.nodeSizeSlider.value=String(e.nodes.defaultSize),x.ui.nodeSizeValue.textContent=String(e.nodes.defaultSize))}if(!r&&!x.userAdjusted.edgeOpacity){let g=m>1?2*_/(m*(m-1)):0,p=Math.max(.4,Math.min(1,2/Math.sqrt(Math.max(g*m,.1))));e.edges.defaultOpacity=parseFloat(p.toFixed(2)),x.ui.edgeOpacitySlider&&(x.ui.edgeOpacitySlider.value=String(e.edges.defaultOpacity),x.ui.edgeOpacityValue.textContent=e.edges.defaultOpacity.toFixed(2))}ne(x.ui.zoomButton,!0),ne(x.ui.selectButton,!1),Pi(),Po(),Do(),Uu(),hr(l)}catch(f){console.error("Error reloading data:",f)}}function h(f){x.selectionMode=!1,x.transform=gn,Ii(),x.selectionBox=null,x.draggingNode=null,x.nodes=f.nodes,x.edges=f.edges,ne(x.ui.zoomButton,!0),ne(x.ui.selectButton,!1),x.ui.helperText.textContent="Scroll to zoom \xB7 Drag to pan",Se(x.renderer.domElement).call(x.zoom),Pi(),Po(),Do(),Uu(),hr(l)}x.applyNewData=h,c();let u=document.getElementById("networkData");u&&new MutationObserver(()=>{setTimeout(c,500)}).observe(u,{childList:!0,subtree:!0,characterData:!0})};var l1=setInterval(()=>{document.getElementById("lightGraph")&&(clearInterval(l1),window.lightGraph.initializeVisualization())},100);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
