var O=Object.defineProperty;var u=(a,i)=>O(a,"name",{value:i,configurable:!0});import{z as x,A as R,B as S,C as I,o as N,D as C,E as T,F as j}from"./iframe.b1d869d6.js";var D=x,q=I,z=R,V=S,k=D.RangeError,A=u(function(i){var r=z(V(this)),e="",t=q(i);if(t<0||t==1/0)throw k("Wrong number of repetitions");for(;t>0;(t>>>=1)&&(r+=r))t&1&&(e+=r);return e},"repeat"),B=N,y=x,p=C,M=I,U=j,W=A,d=T,_=y.RangeError,E=y.String,F=Math.floor,$=p(W),w=p("".slice),g=p(1 .toFixed),l=u(function(a,i,r){return i===0?r:i%2===1?l(a,i-1,r*a):l(a*a,i/2,r)},"pow"),G=u(function(a){for(var i=0,r=a;r>=4096;)i+=12,r/=4096;for(;r>=2;)i+=1,r/=2;return i},"log"),f=u(function(a,i,r){for(var e=-1,t=r;++e<6;)t+=i*a[e],a[e]=t%1e7,t=F(t/1e7)},"multiply"),b=u(function(a,i){for(var r=6,e=0;--r>=0;)e+=a[r],a[r]=F(e/i),e=e%i*1e7},"divide"),m=u(function(a){for(var i=6,r="";--i>=0;)if(r!==""||i===0||a[i]!==0){var e=E(a[i]);r=r===""?e:r+$("0",7-e.length)+e}return r},"dataToString"),H=d(function(){return g(8e-5,3)!=="0.000"||g(.9,0)!=="1"||g(1.255,2)!=="1.25"||g(0xde0b6b3a7640080,0)!=="1000000000000000128"})||!d(function(){g({})});B({target:"Number",proto:!0,forced:H},{toFixed:u(function(i){var r=U(this),e=M(i),t=[0,0,0,0,0,0],h="",n="0",o,c,v,s;if(e<0||e>20)throw _("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return E(r);if(r<0&&(h="-",r=-r),r>1e-21)if(o=G(r*l(2,69,1))-69,c=o<0?r*l(2,-o,1):r/l(2,o,1),c*=4503599627370496,o=52-o,o>0){for(f(t,0,c),v=e;v>=7;)f(t,1e7,0),v-=7;for(f(t,l(10,v,1),0),v=o-1;v>=23;)b(t,1<<23),v-=23;b(t,1<<v),f(t,1,1),b(t,2),n=m(t)}else f(t,0,c),f(t,1<<-o,0),n=m(t)+$("0",e);return e>0?(s=n.length,n=h+(s<=e?"0."+$("0",e-s)+n:w(n,0,s-e)+"."+w(n,s-e))):n=h+n,n},"toFixed")});export{A as s};
//# sourceMappingURL=es.number.to-fixed.51b46869.js.map
