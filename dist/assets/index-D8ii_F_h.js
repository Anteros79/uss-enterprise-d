(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,te=33777,M=33778,N=33779,P=35840,ne=35841,re=35842,ie=35843,ae=36196,oe=37492,se=37496,ce=37488,F=37489,I=37490,le=37491,ue=37808,de=37809,fe=37810,pe=37811,me=37812,he=37813,ge=37814,_e=37815,ve=37816,ye=37817,be=37818,xe=37819,Se=37820,Ce=37821,we=36492,Te=36494,Ee=36495,De=36283,Oe=36284,ke=36285,Ae=36286,je=2300,Me=2301,L=2302,Ne=2303,Pe=2400,Fe=2401,R=2402,Ie=3200,Le=`srgb`,z=`srgb-linear`,Re=`linear`,ze=`srgb`,Be=7680,Ve=35044,He=2e3;function Ue(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function We(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ge(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ke(){let e=Ge(`canvas`);return e.style.display=`block`,e}var qe={};function Je(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ye(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function B(...e){e=Ye(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Xe(...e){e=Ye(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ze(...e){let t=e.join(` `);t in qe||(qe[t]=!0,B(...e))}function Qe(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var $e={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},et=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},tt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),nt=1234567,rt=Math.PI/180,it=180/Math.PI;function at(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(tt[e&255]+tt[e>>8&255]+tt[e>>16&255]+tt[e>>24&255]+`-`+tt[t&255]+tt[t>>8&255]+`-`+tt[t>>16&15|64]+tt[t>>24&255]+`-`+tt[n&63|128]+tt[n>>8&255]+`-`+tt[n>>16&255]+tt[n>>24&255]+tt[r&255]+tt[r>>8&255]+tt[r>>16&255]+tt[r>>24&255]).toLowerCase()}function ot(e,t,n){return Math.max(t,Math.min(n,e))}function st(e,t){return(e%t+t)%t}function ct(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function lt(e,t,n){return e===t?0:(n-e)/(t-e)}function ut(e,t,n){return(1-n)*e+n*t}function dt(e,t,n,r){return ut(e,t,1-Math.exp(-n*r))}function ft(e,t=1){return t-Math.abs(st(e,t*2)-t)}function pt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function mt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function ht(e,t){return e+Math.floor(Math.random()*(t-e+1))}function gt(e,t){return e+Math.random()*(t-e)}function _t(e){return e*(.5-Math.random())}function vt(e){e!==void 0&&(nt=e);let t=nt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yt(e){return e*rt}function bt(e){return e*it}function xt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function St(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ct(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function wt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:B(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Tt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Et(e,t){if(t.constructor===Float32Array)return e;let n=Tt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Dt(e,t){if(t.constructor===Float32Array)return e;let n=Tt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var Ot={DEG2RAD:rt,RAD2DEG:it,generateUUID:at,clamp:ot,euclideanModulo:st,mapLinear:ct,inverseLerp:lt,lerp:ut,damp:dt,pingpong:ft,smoothstep:pt,smootherstep:mt,randInt:ht,randFloat:gt,randFloatSpread:_t,seededRandom:vt,degToRad:yt,radToDeg:bt,isPowerOfTwo:xt,ceilPowerOfTwo:St,floorPowerOfTwo:Ct,setQuaternionFromProperEuler:wt,normalize:Dt,denormalize:Et},V=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:B(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return At.copy(this).projectOnVector(e),this.sub(At)}reflect(e){return this.sub(At.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},At=new H,jt=new kt,Mt=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Ze(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Nt.makeScale(e,t)),this}rotate(e){return Ze(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Nt.makeRotation(-e)),this}translate(e,t){return Ze(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Nt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nt=new Mt,Pt=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ft=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function It(){let e={enabled:!0,workingColorSpace:z,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Rt(e.r),e.g=Rt(e.g),e.b=Rt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=zt(e.r),e.g=zt(e.g),e.b=zt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Re:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[z]:{primaries:t,whitePoint:r,transfer:Re,toXYZ:Pt,fromXYZ:Ft,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:Pt,fromXYZ:Ft,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),e}var Lt=It();function Rt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function zt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Bt,Vt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bt===void 0&&(Bt=Ge(`canvas`)),Bt.width=e.width,Bt.height=e.height;let t=Bt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Bt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ge(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Rt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Rt(t[e]/255)*255):t[e]=Rt(t[e]);return{data:t,width:e.width,height:e.height}}return B(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ht=0,Ut=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=at(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Wt(r[t].image)):e.push(Wt(r[t]))}else e=Wt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Wt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Vt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(B(`Texture: Unable to serialize Texture.`),{})}var Gt=0,Kt=new H,qt=class r extends et{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gt++}),this.uuid=at(),this.name=``,this.source=new Ut(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Kt).x}get height(){return this.source.getSize(Kt).y}get depth(){return this.source.getSize(Kt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){B(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null,qt.DEFAULT_MAPPING=300,qt.DEFAULT_ANISOTROPY=1;var Jt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yt=class extends et{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new qt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ut(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Xt=class extends Yt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zt=class extends qt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Qt=class extends qt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},$t=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/en.setFromMatrixColumn(e,0).length(),i=1/en.setFromMatrixColumn(e,1).length(),a=1/en.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nn,e,rn)}lookAt(e,t,n){let r=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),an.crossVectors(n,sn),an.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),an.crossVectors(n,sn)),an.normalize(),on.crossVectors(sn,an),r[0]=an.x,r[4]=on.x,r[8]=sn.x,r[1]=an.y,r[5]=on.y,r[9]=sn.y,r[2]=an.z,r[6]=on.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],te=r[3],M=r[7],N=r[11],P=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*ee+c*N,i[12]=a*w+o*O+s*j+c*P,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*ee+f*N,i[13]=l*w+u*O+d*j+f*P,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*ee+g*N,i[14]=p*w+m*O+h*j+g*P,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*ee+b*N,i[15]=_*w+v*O+y*j+b*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=en.set(r[0],r[1],r[2]).length(),o=en.set(r[4],r[5],r[6]).length(),s=en.set(r[8],r[9],r[10]).length();i<0&&(a=-a),tn.copy(this);let c=1/a,l=1/o,u=1/s;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=l,tn.elements[5]*=l,tn.elements[6]*=l,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,t.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},en=new H,tn=new $t,nn=new H(0,0,0),rn=new H(1,1,1),an=new H,on=new H,sn=new H,cn=new $t,ln=new kt,un=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ot(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:B(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return cn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ln.setFromEuler(this),this.setFromQuaternion(ln,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER=`XYZ`;var dn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},fn=0,pn=new H,mn=new kt,hn=new $t,gn=new H,_n=new H,vn=new H,yn=new kt,bn=new H(1,0,0),xn=new H(0,1,0),Sn=new H(0,0,1),Cn={type:`added`},wn={type:`removed`},Tn={type:`childadded`,child:null},En={type:`childremoved`,child:null},Dn=class e extends et{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fn++}),this.uuid=at(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new un,r=new kt,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new Mt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.multiply(mn),this}rotateOnWorldAxis(e,t){return mn.setFromAxisAngle(e,t),this.quaternion.premultiply(mn),this}rotateX(e){return this.rotateOnAxis(bn,e)}rotateY(e){return this.rotateOnAxis(xn,e)}rotateZ(e){return this.rotateOnAxis(Sn,e)}translateOnAxis(e,t){return pn.copy(e).applyQuaternion(this.quaternion),this.position.add(pn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bn,e)}translateY(e){return this.translateOnAxis(xn,e)}translateZ(e){return this.translateOnAxis(Sn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gn.copy(e):gn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),_n.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(_n,gn,this.up):hn.lookAt(gn,_n,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),mn.setFromRotationMatrix(hn),this.quaternion.premultiply(mn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(Xe(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null):Xe(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wn),En.child=e,this.dispatchEvent(En),En.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cn),Tn.child=e,this.dispatchEvent(Tn),Tn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,e,vn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_n,yn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Dn.DEFAULT_UP=new H(0,1,0),Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var U=class extends Dn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},On={type:`move`},kn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new U,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new U,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new U,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(On)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new U;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},An={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Mn={h:0,s:0,l:0};function Nn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Le){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Lt.workingColorSpace){if(e=st(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Nn(i,r,e+1/3),this.g=Nn(i,r,e),this.b=Nn(i,r,e-1/3)}return Lt.colorSpaceToWorking(this,r),this}setStyle(e,t=Le){function n(t){t!==void 0&&parseFloat(t)<1&&B(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:B(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);B(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Le){let n=An[e.toLowerCase()];return n===void 0?B(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rt(e.r),this.g=Rt(e.g),this.b=Rt(e.b),this}copyLinearToSRGB(e){return this.r=zt(e.r),this.g=zt(e.g),this.b=zt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Le){return Lt.workingToColorSpace(Pn.copy(this),e),Math.round(ot(Pn.r*255,0,255))*65536+Math.round(ot(Pn.g*255,0,255))*256+Math.round(ot(Pn.b*255,0,255))}getHexString(e=Le){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Pn.copy(this),t);let n=Pn.r,r=Pn.g,i=Pn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Le){Lt.workingToColorSpace(Pn.copy(this),e);let t=Pn.r,n=Pn.g,r=Pn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(Mn);let n=ut(jn.h,Mn.h,t),r=ut(jn.s,Mn.s,t),i=ut(jn.l,Mn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new W;W.NAMES=An;var Fn=class extends Dn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},In=new H,Ln=new H,Rn=new H,zn=new H,Bn=new H,Vn=new H,Hn=new H,Un=new H,Wn=new H,Gn=new H,Kn=new Jt,qn=new Jt,Jn=new Jt,Yn=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),In.subVectors(e,t),r.cross(In);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){In.subVectors(r,t),Ln.subVectors(n,t),Rn.subVectors(e,t);let a=In.dot(In),o=In.dot(Ln),s=In.dot(Rn),c=Ln.dot(Ln),l=Ln.dot(Rn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,zn)!==null&&zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,zn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,zn.x),s.addScaledVector(a,zn.y),s.addScaledVector(o,zn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Kn.setScalar(0),qn.setScalar(0),Jn.setScalar(0),Kn.fromBufferAttribute(e,t),qn.fromBufferAttribute(e,n),Jn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Kn,i.x),a.addScaledVector(qn,i.y),a.addScaledVector(Jn,i.z),a}static isFrontFacing(e,t,n,r){return In.subVectors(n,t),Ln.subVectors(e,t),In.cross(Ln).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),In.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Bn.subVectors(r,n),Vn.subVectors(i,n),Un.subVectors(e,n);let s=Bn.dot(Un),c=Vn.dot(Un);if(s<=0&&c<=0)return t.copy(n);Wn.subVectors(e,r);let l=Bn.dot(Wn),u=Vn.dot(Wn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Bn,a);Gn.subVectors(e,i);let f=Bn.dot(Gn),p=Vn.dot(Gn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Vn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Hn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Hn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Bn,a).addScaledVector(Vn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Qn):Qn.fromBufferAttribute(r,t),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),$n.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),$n.copy(e.boundingBox)),$n.applyMatrix4(e.matrixWorld),this.union($n)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),sr.subVectors(this.max,or),er.subVectors(e.a,or),tr.subVectors(e.b,or),nr.subVectors(e.c,or),rr.subVectors(tr,er),ir.subVectors(nr,tr),ar.subVectors(er,nr);let t=[0,-rr.z,rr.y,0,-ir.z,ir.y,0,-ar.z,ar.y,rr.z,0,-rr.x,ir.z,0,-ir.x,ar.z,0,-ar.x,-rr.y,rr.x,0,-ir.y,ir.x,0,-ar.y,ar.x,0];return!ur(t,er,tr,nr,sr)||(t=[1,0,0,0,1,0,0,0,1],!ur(t,er,tr,nr,sr))?!1:(cr.crossVectors(rr,ir),t=[cr.x,cr.y,cr.z],ur(t,er,tr,nr,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zn=[new H,new H,new H,new H,new H,new H,new H,new H],Qn=new H,$n=new Xn,er=new H,tr=new H,nr=new H,rr=new H,ir=new H,ar=new H,or=new H,sr=new H,cr=new H,lr=new H;function ur(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){lr.fromArray(e,a);let o=i.x*Math.abs(lr.x)+i.y*Math.abs(lr.y)+i.z*Math.abs(lr.z),s=t.dot(lr),c=n.dot(lr),l=r.dot(lr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var dr=new H,fr=new V,pr=0,mr=class extends et{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ve,this.updateRanges=[],this.gpuType=h,this.version=0,this._normalizationScale=e===void 0?void 0:Tt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix4(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyNormalMatrix(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.transformDirection(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Et(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Dt(e,this.array):Math.round(e*t)}},hr=class extends mr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},gr=class extends mr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},G=class extends mr{constructor(e,t,n){super(new Float32Array(e),t,n)}},_r=new Xn,vr=new H,yr=new H,br=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?_r.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);let t=vr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(vr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(yr)),this.expandByPoint(vr.copy(e.center).sub(yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xr=0,Sr=new $t,Cr=new Dn,wr=new H,Tr=new Xn,Er=new Xn,Dr=new H,Or=class e extends et{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xr++}),this.uuid=at(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ue(e)?gr:hr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Mt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sr.makeRotationFromQuaternion(e),this.applyMatrix4(Sr),this}rotateX(e){return Sr.makeRotationX(e),this.applyMatrix4(Sr),this}rotateY(e){return Sr.makeRotationY(e),this.applyMatrix4(Sr),this}rotateZ(e){return Sr.makeRotationZ(e),this.applyMatrix4(Sr),this}translate(e,t,n){return Sr.makeTranslation(e,t,n),this.applyMatrix4(Sr),this}scale(e,t,n){return Sr.makeScale(e,t,n),this.applyMatrix4(Sr),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new G(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&B(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Xe(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Dr.addVectors(this.boundingBox.min,Tr.min),this.boundingBox.expandByPoint(Dr),Dr.addVectors(this.boundingBox.max,Tr.max),this.boundingBox.expandByPoint(Dr)):(this.boundingBox.expandByPoint(Tr.min),this.boundingBox.expandByPoint(Tr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)Xe(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(Tr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Er.setFromBufferAttribute(n),this.morphTargetsRelative?(Dr.addVectors(Tr.min,Er.min),Tr.expandByPoint(Dr),Dr.addVectors(Tr.max,Er.max),Tr.expandByPoint(Dr)):(Tr.expandByPoint(Er.min),Tr.expandByPoint(Er.max))}Tr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Dr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Dr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Dr.fromBufferAttribute(a,t),o&&(wr.fromBufferAttribute(e,t),Dr.add(wr)),r=Math.max(r,n.distanceToSquared(Dr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xe(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new mr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let l=new H,u=new H,d=new H,f=new V,p=new V,m=new V,h=new H,g=new H;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new H,b=new H,x=new H,S=new H;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new mr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dr.fromBufferAttribute(e,t),Dr.normalize(),e.setXYZ(t,Dr.x,Dr.y,Dr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new mr(a,r,i)}if(this.index===null)return B(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},kr=new H,Ar=new H,jr=new Mt,Mr=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=kr.subVectors(n,t).cross(Ar.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(kr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||jr.getNormalMatrix(e),r=this.coplanarPoint(kr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Nr=0,Pr=class extends et{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nr++}),this.uuid=at(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Be,this.stencilZFail=Be,this.stencilZPass=Be,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){B(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?B(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Mr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new V().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Fr=new H,Ir=new H,Lr=new H,Rr=new H,zr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fr.copy(this.origin).addScaledVector(this.direction,t),Fr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ir.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(Ir);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Lr),o=Rr.dot(this.direction),s=-Rr.dot(Lr),c=Rr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ir).addScaledVector(Lr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Fr.subVectors(e.center,this.origin);let n=Fr.dot(this.direction),r=Fr.dot(Fr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,te;if(y>=b&&y>=x?(w=s,D=u,A=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let M=S/w,N=C/w,P=1/w,ne=T-M*D,re=E-N*D,ie=O-M*A,ae=k-N*A,oe=ee-M*te,se=j-N*te,ce=oe*ae-se*ie,F=ne*se-re*oe,I=ie*re-ae*ne;if(r){if(ce<0||F<0||I<0)return null}else if((ce<0||F<0||I<0)&&(ce>0||F>0||I>0))return null;let le=ce+F+I;if(le===0)return null;let ue=P*(ce*D+F*A+I*te);return(le>0?ue<0:ue>0)?null:this.at(ue/le,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},K=class extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Br=new $t,Vr=new zr,Hr=new br,Ur=new H,Wr=new H,Gr=new H,Kr=new H,qr=new H,Jr=new H,Yr=new H,Xr=new H,q=class extends Dn{constructor(e=new Or,t=new K){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Jr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(qr.fromBufferAttribute(s,e),a?Jr.addScaledVector(qr,r):Jr.addScaledVector(qr.sub(t),r))}t.add(Jr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(i),Vr.copy(e.ray).recast(e.near),Hr.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Hr,Ur)===null||Vr.origin.distanceToSquared(Ur)>(e.far-e.near)**2)||(Br.copy(i).invert(),Vr.copy(e.ray).applyMatrix4(Br),(n.boundingBox===null||Vr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Qr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Qr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Qr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Qr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Zr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Xr.copy(s),Xr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Xr);return l<n.near||l>n.far?null:{distance:l,point:Xr.clone(),object:e}}function Qr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Wr),e.getVertexPosition(c,Gr),e.getVertexPosition(l,Kr);let u=Zr(e,t,n,r,Wr,Gr,Kr,Yr);if(u){let e=new H;Yn.getBarycoord(Yr,Wr,Gr,Kr,e),i&&(u.uv=Yn.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=Yn.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=Yn.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};Yn.getNormal(Wr,Gr,Kr,t.normal),u.face=t,u.barycoord=e}return u}var $r=class extends qt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ei=new br,ti=new V(.5,.5),ni=new H,ri=class{constructor(e=new Mr,t=new Mr,n=new Mr,r=new Mr,i=new Mr,a=new Mr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=He,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476+ti.distanceTo(e.center),ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ni.x=r.normal.x>0?e.max.x:e.min.x,ni.y=r.normal.y>0?e.max.y:e.min.y,ni.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ni)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ii=new $t,ai=class e{constructor(){this.coordinateSystem=He,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];ii.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new ri),n[e].setFromProjectionMatrix(ii,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new ri),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},oi=class extends Pr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},si=new $t,ci=new zr,li=new br,ui=new H,di=class extends Dn{constructor(e=new Or,t=new oi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),li.copy(n.boundingSphere),li.applyMatrix4(r),li.radius+=i,e.ray.intersectsSphere(li)===!1)return;si.copy(r).invert(),ci.copy(e.ray).applyMatrix4(si);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ui.fromBufferAttribute(l,n),fi(ui,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ui.fromBufferAttribute(l,a),fi(ui,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function fi(e,t,n,r,i,a,o){let s=ci.distanceSqToPoint(e);if(s<n){let n=new H;ci.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var pi=class extends qt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mi=class extends qt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},hi=class extends qt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ut(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},gi=class extends hi{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},_i=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},J=class e extends Or{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new G(c,3)),this.setAttribute(`normal`,new G(l,3)),this.setAttribute(`uv`,new G(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},vi=class e extends Or{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new H,g=new H;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new G(o,3)),this.setAttribute(`normal`,new G(s,3)),this.setAttribute(`uv`,new G(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},yi=class e extends Or{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new H,l=new V;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new G(a,3)),this.setAttribute(`normal`,new G(o,3)),this.setAttribute(`uv`,new G(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Y=class e extends Or{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new G(u,3)),this.setAttribute(`normal`,new G(d,3)),this.setAttribute(`uv`,new G(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bi=class e extends Y{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xi=class e extends Or{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new G(i,3)),this.setAttribute(`normal`,new G(i.slice(),3)),this.setAttribute(`uv`,new G(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new H,r=new H,i=new H;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new H;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new H;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new H,t=new H,n=new H,r=new H,o=new V,s=new V,c=new V;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Si=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){B(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new V:new H);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,r=[],i=[],a=[],o=new H,s=new $t;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new H)}i[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(ot(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(ot(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ci=class extends Si{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new V){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},wi=class extends Ci{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ti(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ei=new H,Di=new H,Oi=new Ti,ki=new Ti,Ai=new Ti,ji=class extends Si{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new H){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Di.subVectors(r[0],r[1]).add(r[0]),c=Di);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ei.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ei),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Oi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ki.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Ai.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Oi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ki.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Ai.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Oi.calc(s),ki.calc(s),Ai.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Mi(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ni(e,t){let n=1-e;return n*n*t}function Pi(e,t){return 2*(1-e)*e*t}function Fi(e,t){return e*e*t}function Ii(e,t,n,r){return Ni(e,t)+Pi(e,n)+Fi(e,r)}function Li(e,t){let n=1-e;return n*n*n*t}function Ri(e,t){let n=1-e;return 3*n*n*e*t}function zi(e,t){return 3*(1-e)*e*e*t}function Bi(e,t){return e*e*e*t}function Vi(e,t,n,r,i){return Li(e,t)+Ri(e,n)+zi(e,r)+Bi(e,i)}var Hi=class extends Si{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Vi(e,r.x,i.x,a.x,o.x),Vi(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ui=class extends Si{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Vi(e,r.x,i.x,a.x,o.x),Vi(e,r.y,i.y,a.y,o.y),Vi(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wi=class extends Si{constructor(e=new V,t=new V){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gi=class extends Si{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ki=class extends Si{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ii(e,r.x,i.x,a.x),Ii(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qi=class extends Si{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Ii(e,r.x,i.x,a.x),Ii(e,r.y,i.y,a.y),Ii(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ji=class extends Si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new V){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Mi(o,s.x,c.x,l.x,u.x),Mi(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this}},Yi=Object.freeze({__proto__:null,ArcCurve:wi,CatmullRomCurve3:ji,CubicBezierCurve:Hi,CubicBezierCurve3:Ui,EllipseCurve:Ci,LineCurve:Wi,LineCurve3:Gi,QuadraticBezierCurve:Ki,QuadraticBezierCurve3:qi,SplineCurve:Ji}),Xi=class extends Si{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Yi[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Yi[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Zi=class extends Xi{constructor(e){super(),this.type=`Path`,this.currentPoint=new V,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Wi(this.currentPoint.clone(),new V(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Ki(this.currentPoint.clone(),new V(e,t),new V(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Hi(this.currentPoint.clone(),new V(e,t),new V(n,r),new V(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Ji([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Ci(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Qi=class extends Zi{constructor(e){super(e),this.uuid=at(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Zi().fromJSON(n))}return this}};function $i(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=ea(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=sa(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return na(a,o,n,s,c,l,0),o}function ea(e,t,n,r,i){let a;if(i===ja(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Oa(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Oa(i/r|0,e[i],e[i+1],a);return a&&ba(a,a.next)&&(ka(a),a=a.next),a}function ta(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(ba(n,n.next)||ya(n.prev,n,n.next)===0)){if(ka(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function na(e,t,n,r,i,a,o){if(!e)return;!o&&a&&fa(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?ia(e,r,i,a):ra(e))t.push(c.i,e.i,l.i),ka(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=aa(ta(e),t),na(e,t,n,r,i,a,2)):o===2&&oa(e,t,n,r,i,a):na(ta(e),t,n,r,i,a,1);break}}}function ra(e){let t=e.prev,n=e,r=e.next;if(ya(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&_a(i,s,a,c,o,l,m.x,m.y)&&ya(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ia(e,t,n,r){let i=e.prev,a=e,o=e.next;if(ya(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=ma(p,m,t,n,r),v=ma(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&_a(s,u,c,d,l,f,y.x,y.y)&&ya(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&_a(s,u,c,d,l,f,b.x,b.y)&&ya(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&_a(s,u,c,d,l,f,y.x,y.y)&&ya(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&_a(s,u,c,d,l,f,b.x,b.y)&&ya(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function aa(e,t){let n=e;do{let r=n.prev,i=n.next.next;!ba(r,i)&&xa(r,n,n.next,i)&&Ta(r,i)&&Ta(i,r)&&(t.push(r.i,n.i,i.i),ka(n),ka(n.next),n=e=i),n=n.next}while(n!==e);return ta(n)}function oa(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&va(o,e)){let s=Da(o,e);o=ta(o,o.next),s=ta(s,s.next),na(o,t,n,r,i,a,0),na(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function sa(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=ea(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(ha(o))}i.sort(ca);for(let e=0;e<i.length;e++)n=la(i[e],n);return n}function ca(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function la(e,t){let n=ua(e,t);if(!n)return t;let r=Da(n,e);return ta(r,r.next),ta(n,n.next)}function ua(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(ba(e,n))return n;do{if(ba(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&ga(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Ta(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&da(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function da(e,t){return ya(e.prev,e,t.prev)<0&&ya(t.next,e,e.next)<0}function fa(e,t,n,r){let i=e;do i.z===0&&(i.z=ma(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,pa(i)}function pa(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function ma(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ha(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ga(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function _a(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&ga(e,t,n,r,i,a,o,s)}function va(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!wa(e,t)&&(Ta(e,t)&&Ta(t,e)&&Ea(e,t)&&(ya(e.prev,e,t.prev)||ya(e,t.prev,t))||ba(e,t)&&ya(e.prev,e,e.next)>0&&ya(t.prev,t,t.next)>0)}function ya(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function ba(e,t){return e.x===t.x&&e.y===t.y}function xa(e,t,n,r){let i=Ca(ya(e,t,n)),a=Ca(ya(e,t,r)),o=Ca(ya(n,r,e)),s=Ca(ya(n,r,t));return!!(i!==a&&o!==s||i===0&&Sa(e,n,t)||a===0&&Sa(e,r,t)||o===0&&Sa(n,e,r)||s===0&&Sa(n,t,r))}function Sa(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ca(e){return e>0?1:e<0?-1:0}function wa(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&xa(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Ta(e,t){return ya(e.prev,e,e.next)<0?ya(e,t,e.next)>=0&&ya(e,e.prev,t)>=0:ya(e,t,e.prev)<0||ya(e,e.next,t)<0}function Ea(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Da(e,t){let n=Aa(e.i,e.x,e.y),r=Aa(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Oa(e,t,n,r){let i=Aa(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function ka(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Aa(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ja(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ma=class{static triangulate(e,t,n=2){return $i(e,t,n)}},Na=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Pa(e),Fa(n,e);let a=e.length;t.forEach(Pa);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Fa(n,t[e]);let o=Ma.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Pa(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Fa(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ia=class e extends Or{constructor(e=new Qi([new V(.5,.5),new V(-.5,.5),new V(-.5,-.5),new V(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new G(r,3)),this.setAttribute(`uv`,new G(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?La:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new H,b=new H,x=new H}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Na.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Na.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||Xe(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new V(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new V(r/a,i/a)}let ee=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),ee[e]=A(D[e],D[n],D[r]);let j=[],te,M=ee.concat();for(let e=0,t=E;e<t;e++){let t=w[e];te=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),te[e]=A(t[e],t[r],t[i]);j.push(te),M=M.concat(te)}let N;if(p===0)N=Na.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],ee[t],a);oe(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];te=j[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],te[e],a);oe(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}N=Na.triangulateShape(e,t)}let P=N.length,ne=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],M[e],ne):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),oe(x.x,x.y,x.z)):oe(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],M[t],ne):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),oe(x.x,x.y,x.z)):oe(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],ee[e],r);oe(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];te=j[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],te[e],r);_?oe(i.x,i.y+g[s-1].y,g[s-1].x+n):oe(i.x,i.y,c+n)}}}re(),ie();function re(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<P;e++){let n=N[e];se(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<P;e++){let n=N[e];se(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<P;e++){let t=N[e];se(t[2],t[1],t[0])}for(let e=0;e<P;e++){let t=N[e];se(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ce(t+r+n,t+i+n,t+i+a,t+r+a)}}}function oe(e,t,n){a.push(e),a.push(t),a.push(n)}function se(e,t,i){F(e),F(t),F(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);I(o[0]),I(o[1]),I(o[2])}function ce(e,t,i,a){F(e),F(t),F(a),F(t),F(i),F(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);I(s[0]),I(s[1]),I(s[3]),I(s[1]),I(s[2]),I(s[3])}function F(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function I(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ra(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Yi[i.type]().fromJSON(i)),new e(r,t.options)}},La={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new V(a,o),new V(s,c),new V(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new V(o,1-c),new V(l,1-d),new V(f,1-m),new V(h,1-_)]:[new V(s,1-c),new V(u,1-d),new V(p,1-m),new V(g,1-_)]}};function Ra(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var za=class e extends xi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ba=class e extends Or{constructor(e=[new V(0,-.5),new V(.5,0),new V(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ot(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new H,d=new V,f=new H,p=new H,m=new H,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new G(a,3)),this.setAttribute(`uv`,new G(o,2)),this.setAttribute(`normal`,new G(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Va=class e extends xi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Ha=class e extends Or{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new G(p,3)),this.setAttribute(`normal`,new G(m,3)),this.setAttribute(`uv`,new G(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ua=class e extends Or{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new H,p=new V;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new G(s,3)),this.setAttribute(`normal`,new G(c,3)),this.setAttribute(`uv`,new G(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Wa=class e extends Or{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new G(p,3)),this.setAttribute(`normal`,new G(m,3)),this.setAttribute(`uv`,new G(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ga=class e extends Or{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new H,f=new H,p=new H;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new G(c,3)),this.setAttribute(`normal`,new G(l,3)),this.setAttribute(`uv`,new G(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ka(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ja(i))i.isRenderTargetTexture?(B(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ja(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function qa(e){let t={};for(let n=0;n<e.length;n++){let r=Ka(e[n]);for(let e in r)t[e]=r[e]}return t}function Ja(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ya(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Xa(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Lt.workingColorSpace}var Za={clone:Ka,merge:qa},Qa=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$a=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,eo=class extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qa,this.fragmentShader=$a,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ka(e.uniforms),this.uniformsGroups=Ya(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Jt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Mt().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new $t().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},to=class extends eo{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},X=class extends Pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},no=class extends X{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new V(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new W(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new W(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new W(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ze(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ze(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ro=class extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ie,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},io=class extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ao(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function oo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var so=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},co=class extends so{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pe,endingEnd:Pe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fe:i=e,o=2*t-n;break;case R:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Fe:a=e,s=2*n-t;break;case R:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},lo=class extends so{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},uo=class extends so{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},fo=class extends so{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ho(n,t,g,y,r);i[p]=po(x,o,_,b,m)}return i}};function po(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function mo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ho(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=po(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=mo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var go=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ao(t,this.TimeBufferType),this.values=ao(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ao(e.times,Array),values:ao(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),oo(e.settings)&&(n.settings={inTangents:ao(e.settings.inTangents,Array),outTangents:ao(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case je:t=this.InterpolantFactoryMethodDiscrete;break;case Me:t=this.InterpolantFactoryMethodLinear;break;case L:t=this.InterpolantFactoryMethodSmooth;break;case Ne:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return B(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return je;case this.InterpolantFactoryMethodLinear:return Me;case this.InterpolantFactoryMethodSmooth:return L;case this.InterpolantFactoryMethodBezier:return Ne}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;oo(this.settings)&&(_o(this.settings.inTangents,e),_o(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;oo(this.settings)&&(vo(this.settings.inTangents,e),vo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(Xe(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){Xe(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){Xe(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&We(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){Xe(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===L,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,oo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function _o(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function vo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}go.prototype.ValueTypeName=``,go.prototype.TimeBufferType=Float32Array,go.prototype.ValueBufferType=Float32Array,go.prototype.DefaultInterpolation=Me;var yo=class extends go{constructor(e,t,n){super(e,t,n)}};yo.prototype.ValueTypeName=`bool`,yo.prototype.ValueBufferType=Array,yo.prototype.DefaultInterpolation=je,yo.prototype.InterpolantFactoryMethodLinear=void 0,yo.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends go{constructor(e,t,n,r){super(e,t,n,r)}};bo.prototype.ValueTypeName=`color`;var xo=class extends go{constructor(e,t,n,r){super(e,t,n,r)}};xo.prototype.ValueTypeName=`number`;var So=class extends so{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)kt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Co=class extends go{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new So(this.times,this.values,this.getValueSize(),e)}};Co.prototype.ValueTypeName=`quaternion`,Co.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends go{constructor(e,t,n){super(e,t,n)}};wo.prototype.ValueTypeName=`string`,wo.prototype.ValueBufferType=Array,wo.prototype.DefaultInterpolation=je,wo.prototype.InterpolantFactoryMethodLinear=void 0,wo.prototype.InterpolantFactoryMethodSmooth=void 0;var To=class extends go{constructor(e,t,n,r){super(e,t,n,r)}};To.prototype.ValueTypeName=`vector`;var Eo=class extends Dn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Do=new $t,Oo=new H,ko=new H,Ao=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ri,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Oo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oo),ko.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ko),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Do.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Do,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Do)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},jo=new H,Mo=new kt,No=new H,Po=class extends Dn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=He,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(jo,Mo,No),No.x===1&&No.y===1&&No.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jo,Mo,No.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(jo,Mo,No),No.x===1&&No.y===1&&No.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jo,Mo,No.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fo=new H,Io=new V,Lo=new V,Ro=class extends Po{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=it*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return it*2*Math.atan(Math.tan(rt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fo.x,Fo.y).multiplyScalar(-e/Fo.z),Fo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fo.x,Fo.y).multiplyScalar(-e/Fo.z)}getViewSize(e,t){return this.getViewBounds(e,Io,Lo),t.subVectors(Lo,Io)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zo=class extends Ao{constructor(){super(new Ro(90,1,.5,500)),this.isPointLightShadow=!0}},Bo=class extends Eo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new zo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Vo=class extends Po{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ho=class extends Ao{constructor(){super(new Vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Uo=class extends Eo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new Ho}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Wo=class extends Eo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Go=-90,Ko=1,qo=class extends Dn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ro(Go,Ko,e,t);r.layers=this.layers,this.add(r);let i=new Ro(Go,Ko,e,t);i.layers=this.layers,this.add(i);let a=new Ro(Go,Ko,e,t);a.layers=this.layers,this.add(a);let o=new Ro(Go,Ko,e,t);o.layers=this.layers,this.add(o);let s=new Ro(Go,Ko,e,t);s.layers=this.layers,this.add(s);let c=new Ro(Go,Ko,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Jo=class extends Ro{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Yo=`\\[\\]\\.:\\/`,Xo=RegExp(`[\\[\\]\\.:\\/]`,`g`),Zo=`[^\\[\\]\\.:\\/]`,Qo=`[^`+Yo.replace(`\\.`,``)+`]`,$o=`((?:WC+[\\/:])*)`.replace(`WC`,Zo),es=`(WCOD+)?`.replace(`WCOD`,Qo),ts=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Zo),ns=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Zo),rs=RegExp(`^`+$o+es+ts+ns+`$`),is=[`material`,`materials`,`bones`,`map`],as=class{constructor(e,t,n){let r=n||os.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},os=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Xo,``)}static parseTrackName(e){let t=rs.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);is.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){B(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){Xe(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){Xe(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){Xe(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){Xe(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){Xe(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){Xe(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){Xe(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;Xe(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){Xe(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){Xe(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};os.Composite=as,os.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},os.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},os.prototype.GetterByBindingType=[os.prototype._getValue_direct,os.prototype._getValue_array,os.prototype._getValue_arrayElement,os.prototype._getValue_toArray],os.prototype.SetterByBindingTypeAndVersioning=[[os.prototype._setValue_direct,os.prototype._setValue_direct_setNeedsUpdate,os.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[os.prototype._setValue_array,os.prototype._setValue_array_setNeedsUpdate,os.prototype._setValue_array_setMatrixWorldNeedsUpdate],[os.prototype._setValue_arrayElement,os.prototype._setValue_arrayElement_setNeedsUpdate,os.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[os.prototype._setValue_fromArray,os.prototype._setValue_fromArray_setNeedsUpdate,os.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ss=new $t,cs=class{constructor(e,t,n=0,r=1/0){this.ray=new zr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new dn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Xe(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return ss.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ss),this}intersectObject(e,t=!0,n=[]){return us(e,this,n,t),n.sort(ls),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)us(e[r],this,n,t);return n.sort(ls),n}};function ls(e,t){return e.distance-t.distance}function us(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)us(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function ds(e,t,n,r){let i=fs(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ne:case ie:return Math.max(e,16)*Math.max(t,8)/4;case P:case re:return Math.max(e,8)*Math.max(t,8)/2;case ae:case oe:case ce:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case se:case I:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case me:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Se:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ce:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case we:case Te:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*16;case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function fs(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?B(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function ps(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function ms(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var hs={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
void main() {
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Z={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},gs={basic:{uniforms:qa([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:hs.meshbasic_vert,fragmentShader:hs.meshbasic_frag},lambert:{uniforms:qa([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:hs.meshlambert_vert,fragmentShader:hs.meshlambert_frag},phong:{uniforms:qa([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:hs.meshphong_vert,fragmentShader:hs.meshphong_frag},standard:{uniforms:qa([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:hs.meshphysical_vert,fragmentShader:hs.meshphysical_frag},toon:{uniforms:qa([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new W(0)}}]),vertexShader:hs.meshtoon_vert,fragmentShader:hs.meshtoon_frag},matcap:{uniforms:qa([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:hs.meshmatcap_vert,fragmentShader:hs.meshmatcap_frag},points:{uniforms:qa([Z.points,Z.fog]),vertexShader:hs.points_vert,fragmentShader:hs.points_frag},dashed:{uniforms:qa([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:hs.linedashed_vert,fragmentShader:hs.linedashed_frag},depth:{uniforms:qa([Z.common,Z.displacementmap]),vertexShader:hs.depth_vert,fragmentShader:hs.depth_frag},normal:{uniforms:qa([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:hs.meshnormal_vert,fragmentShader:hs.meshnormal_frag},sprite:{uniforms:qa([Z.sprite,Z.fog]),vertexShader:hs.sprite_vert,fragmentShader:hs.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:hs.background_vert,fragmentShader:hs.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:hs.backgroundCube_vert,fragmentShader:hs.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:hs.cube_vert,fragmentShader:hs.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:hs.equirect_vert,fragmentShader:hs.equirect_frag},distance:{uniforms:qa([Z.common,Z.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:hs.distance_vert,fragmentShader:hs.distance_frag},shadow:{uniforms:qa([Z.lights,Z.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:hs.shadow_vert,fragmentShader:hs.shadow_frag}};gs.physical={uniforms:qa([gs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:hs.meshphysical_vert,fragmentShader:hs.meshphysical_frag};var _s={r:0,b:0,g:0},vs=new $t,ys=new Mt;ys.set(-1,0,0,0,1,0,0,0,1);function bs(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new q(new J(1,1,1),new eo({name:`BackgroundCubeMaterial`,uniforms:Ka(gs.backgroundCube.uniforms),vertexShader:gs.backgroundCube.vertexShader,fragmentShader:gs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(vs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ys),l.material.toneMapped=Lt.getTransfer(i.colorSpace)!==ze,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new q(new Ha(2,2),new eo({name:`BackgroundMaterial`,uniforms:Ka(gs.background.uniforms),vertexShader:gs.background.vertexShader,fragmentShader:gs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(i.colorSpace)!==ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(_s,Xa(e)),n.buffers.color.setClear(_s.r,_s.g,_s.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function xs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Ss(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Cs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(B(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&B(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&B(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ws(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Mr,s=new Mt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Ts=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new pi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new J(5,5,5),i=new eo({name:`CubemapFromEquirect`,uniforms:Ka(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new q(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new qo(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Es=256,Ds=3,Os=20,ks=256,As=16,js=3,Ms=new H,Ns=new W,Ps=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new qo(1,10,null),this._boxMesh=new q(new J(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Ms}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Ns));let h=new qo(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bs(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Es,Ct(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Es:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Fs(e,!1,!1),n=Math.log2(e)-Ds;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Fs(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vs()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bs()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Ls(),this._integrationMaterial=Rs());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/As);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-js)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(ks*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=zs());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Fs(e,t,n){return new Ts(e,{minFilter:c,generateMipmaps:t,type:g,colorSpace:z,depthBuffer:n})}function Is(e,t,n){return new eo({name:e,uniforms:t,vertexShader:hs.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Ls(){return Is(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ks}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Rs(){return Is(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:As}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function zs(){return Is(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Os}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Bs(){return Is(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Vs(){return Is(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Hs(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Ts(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ps(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ps(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Us(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ze(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ws(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?gr:hr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Gs(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ks(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:Xe(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function qs(e,t,n){let r=new WeakMap,i=new Jt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Zt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new V(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Js(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ys={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Xs(e,t,n,r,i,a){let o=new Xt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Or;u.setAttribute(`position`,new G([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new G([0,2,0,0,2,0],2));let d=new to({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new q(u,d),p=new Vo(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,b=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new Xt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Xt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new hi(t,n),a===!0&&(l.format=E,l.type=y)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(_||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Lt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Ys[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(f,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Zs=new qt,Qs=new hi(1,1),$s=new gi(1),ec=new Zt,tc=new Qt,nc=new pi,rc=[],ic=[],ac=new Float32Array(16),oc=new Float32Array(9),sc=new Float32Array(4);function cc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=rc[i];if(a===void 0&&(a=new Float32Array(i),rc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function lc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function uc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function dc(e,t){let n=ic[t];n===void 0&&(n=new Int32Array(t),ic[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function fc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(lc(n,t))return;e.uniform2fv(this.addr,t),uc(n,t)}}function mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(lc(n,t))return;e.uniform3fv(this.addr,t),uc(n,t)}}function hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(lc(n,t))return;e.uniform4fv(this.addr,t),uc(n,t)}}function gc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(lc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),uc(n,t)}else{if(lc(n,r))return;sc.set(r),e.uniformMatrix2fv(this.addr,!1,sc),uc(n,r)}}function _c(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(lc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),uc(n,t)}else{if(lc(n,r))return;oc.set(r),e.uniformMatrix3fv(this.addr,!1,oc),uc(n,r)}}function vc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(lc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),uc(n,t)}else{if(lc(n,r))return;ac.set(r),e.uniformMatrix4fv(this.addr,!1,ac),uc(n,r)}}function yc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(lc(n,t))return;e.uniform2iv(this.addr,t),uc(n,t)}}function xc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(lc(n,t))return;e.uniform3iv(this.addr,t),uc(n,t)}}function Sc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(lc(n,t))return;e.uniform4iv(this.addr,t),uc(n,t)}}function Cc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function wc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(lc(n,t))return;e.uniform2uiv(this.addr,t),uc(n,t)}}function Tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(lc(n,t))return;e.uniform3uiv(this.addr,t),uc(n,t)}}function Ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(lc(n,t))return;e.uniform4uiv(this.addr,t),uc(n,t)}}function Dc(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Oc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Dc(Qs):Zs,n.setTexture2D(t||a,i)}function kc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||tc,i)}function Ac(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Dc($s):nc,n.setTextureCube(t||a,i)}function jc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ec,i)}function Mc(e){switch(e){case 5126:return fc;case 35664:return pc;case 35665:return mc;case 35666:return hc;case 35674:return gc;case 35675:return _c;case 35676:return vc;case 5124:case 35670:return yc;case 35667:case 35671:return bc;case 35668:case 35672:return xc;case 35669:case 35673:return Sc;case 5125:return Cc;case 36294:return wc;case 36295:return Tc;case 36296:return Ec;case 35678:case 36198:case 36298:case 36306:case 35682:return Oc;case 35679:case 36299:case 36307:return kc;case 35680:case 36300:case 36308:case 36293:return Ac;case 36289:case 36303:case 36311:case 36292:return jc}}function Nc(e,t){e.uniform1fv(this.addr,t)}function Pc(e,t){let n=cc(t,this.size,2);e.uniform2fv(this.addr,n)}function Fc(e,t){let n=cc(t,this.size,3);e.uniform3fv(this.addr,n)}function Ic(e,t){let n=cc(t,this.size,4);e.uniform4fv(this.addr,n)}function Lc(e,t){let n=cc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Rc(e,t){let n=cc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function zc(e,t){let n=cc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Bc(e,t){e.uniform1iv(this.addr,t)}function Vc(e,t){e.uniform2iv(this.addr,t)}function Hc(e,t){e.uniform3iv(this.addr,t)}function Uc(e,t){e.uniform4iv(this.addr,t)}function Wc(e,t){e.uniform1uiv(this.addr,t)}function Gc(e,t){e.uniform2uiv(this.addr,t)}function Kc(e,t){e.uniform3uiv(this.addr,t)}function qc(e,t){e.uniform4uiv(this.addr,t)}function Jc(e,t,n){let r=this.cache,i=t.length,a=dc(n,i);lc(r,a)||(e.uniform1iv(this.addr,a),uc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Dc(Qs):Zs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Yc(e,t,n){let r=this.cache,i=t.length,a=dc(n,i);lc(r,a)||(e.uniform1iv(this.addr,a),uc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||tc,a[e])}function Xc(e,t,n){let r=this.cache,i=t.length,a=dc(n,i);lc(r,a)||(e.uniform1iv(this.addr,a),uc(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Dc($s):nc;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Zc(e,t,n){let r=this.cache,i=t.length,a=dc(n,i);lc(r,a)||(e.uniform1iv(this.addr,a),uc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ec,a[e])}function Qc(e){switch(e){case 5126:return Nc;case 35664:return Pc;case 35665:return Fc;case 35666:return Ic;case 35674:return Lc;case 35675:return Rc;case 35676:return zc;case 5124:case 35670:return Bc;case 35667:case 35671:return Vc;case 35668:case 35672:return Hc;case 35669:case 35673:return Uc;case 5125:return Wc;case 36294:return Gc;case 36295:return Kc;case 36296:return qc;case 35678:case 36198:case 36298:case 36306:case 35682:return Jc;case 35679:case 36299:case 36307:return Yc;case 35680:case 36300:case 36308:case 36293:return Xc;case 36289:case 36303:case 36311:case 36292:return Zc}}var $c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mc(t.type)}},el=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qc(t.type)}},tl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},nl=/(\w+)(\])?(\[|\.)?/g;function rl(e,t){e.seq.push(t),e.map[t.id]=t}function il(e,t,n){let r=e.name,i=r.length;for(nl.lastIndex=0;;){let a=nl.exec(r),o=nl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){rl(n,l===void 0?new $c(s,e,t):new el(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new tl(s),rl(n,e)),n=e}}}var al=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);il(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function ol(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var sl=37297,cl=0;function ll(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ul=new Mt;function dl(e){Lt._getMatrix(ul,Lt.workingColorSpace,e);let t=`mat3( ${ul.elements.map(e=>e.toFixed(4))} )`;switch(Lt.getTransfer(e)){case Re:return[t,`LinearTransferOETF`];case ze:return[t,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function fl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ll(e.getShaderSource(t),r)}return i}function pl(e,t){let n=dl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var ml={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function hl(e,t){let n=ml[t];return n===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var gl=new H;function _l(){return Lt.getLuminanceCoefficients(gl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${gl.x.toFixed(4)}, ${gl.y.toFixed(4)}, ${gl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function vl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(xl).join(`
`)}function yl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function bl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function xl(e){return e!==``}function Sl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Cl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(e){return e.replace(wl,El)}function El(e,t){let n=hs[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Tl(n)}var Dl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(e){return e.replace(Dl,kl)}function kl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Al(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var jl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Ml(e){return jl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Nl={302:`ENVMAP_MODE_REFRACTION`};function Pl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Nl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Fl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Il(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Fl[e.combine]||`ENVMAP_BLENDING_NONE`}function Ll(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Ml(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Pl(n),d=Il(n),f=vl(n),p=yl(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(xl).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(xl).join(`
`),g.length>0&&(g+=`
`)):(h=[Al(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(xl).join(`
`),g=[Al(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:hs.tonemapping_pars_fragment,n.toneMapping===0?``:hl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,hs.colorspace_pars_fragment,pl(`linearToOutputTexel`,n.outputColorSpace),_l(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(xl).join(`
`)),o=Tl(o),o=Sl(o,n),o=Cl(o,n),s=Tl(s),s=Sl(s,n),s=Cl(s,n),o=Ol(o),s=Ol(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=ol(i,i.VERTEX_SHADER,v),x=ol(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=fl(i,b,`vertex`),n=fl(i,x,`fragment`);Xe(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):B(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new al(i,m),w=bl(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,sl)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cl++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Rl=0,zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bl(e),t.set(e,n)),n}},Bl=class{constructor(e){this.id=Rl++,this.code=e,this.usedTimes=0}};function Vl(e){return e===1030||e===37490||e===36285}function Hl(e,t,n,r,i,a){let o=new dn,s=new zl,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&B(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=gs[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),j=m.isInstancedMesh===!0,te=m.isBatchedMesh===!0,M=!!i.map,N=!!i.matcap,P=!!b,ne=P&&b.isPMREMTexture===!0,re=!!i.aoMap,ie=!!i.lightMap,ae=!!i.bumpMap&&i.wireframe===!1,oe=!!i.normalMap,se=!!i.displacementMap,ce=!!i.emissiveMap,F=!!i.metalnessMap,I=!!i.roughnessMap,le=i.anisotropy>0,ue=i.clearcoat>0,de=i.diffuseRoughness>0,fe=i.dispersion>0,pe=i.retroreflectivity>0,me=i.iridescence>0,he=i.sheen>0,ge=i.transmission>0,_e=le&&!!i.anisotropyMap,ve=ue&&!!i.clearcoatMap,ye=ue&&!!i.clearcoatNormalMap,be=ue&&!!i.clearcoatRoughnessMap,xe=de&&!!i.diffuseRoughnessMap,Se=me&&!!i.iridescenceMap,Ce=me&&!!i.iridescenceThicknessMap,we=he&&!!i.sheenColorMap,Te=he&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=ge&&!!i.transmissionMap,Ae=ge&&!!i.thicknessMap,je=!!i.gradientMap,Me=!!i.alphaMap,L=i.alphaTest>0,Ne=!!i.alphaHash,Pe=!!i.extensions,Fe=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Fe=e.toneMapping);let R=ne?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Ie={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:te,batchingColor:te&&m._colorsTexture!==null,instancing:j,instancingColor:j&&m.instanceColor!==null,instancingMorph:j&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:N,envMap:P,envMapMode:P&&b.mapping,envMapPMREM:ne,envMapMaxLod:ne?R.length-1:null,envMapSize:ne?R[0].width:null,aoMap:re,lightMap:ie,bumpMap:ae,normalMap:oe,displacementMap:se,emissiveMap:ce,normalMapObjectSpace:oe&&i.normalMapType===1,normalMapTangentSpace:oe&&i.normalMapType===0,packedNormalMap:oe&&i.normalMapType===0&&Vl(i.normalMap.format),metalnessMap:F,roughnessMap:I,anisotropy:le,anisotropyMap:_e,clearcoat:ue,clearcoatMap:ve,clearcoatNormalMap:ye,clearcoatRoughnessMap:be,diffuseRoughness:de,diffuseRoughnessMap:xe,dispersion:fe,retroreflection:pe,iridescence:me,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:he,sheenColorMap:we,sheenRoughnessMap:Te,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:ge,transmissionMap:ke,thicknessMap:Ae,gradientMap:je,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Me,alphaTest:L,alphaHash:Ne,combine:i.combine,mapUv:M&&p(i.map.channel),aoMapUv:re&&p(i.aoMap.channel),lightMapUv:ie&&p(i.lightMap.channel),bumpMapUv:ae&&p(i.bumpMap.channel),normalMapUv:oe&&p(i.normalMap.channel),displacementMapUv:se&&p(i.displacementMap.channel),emissiveMapUv:ce&&p(i.emissiveMap.channel),metalnessMapUv:F&&p(i.metalnessMap.channel),roughnessMapUv:I&&p(i.roughnessMap.channel),anisotropyMapUv:_e&&p(i.anisotropyMap.channel),clearcoatMapUv:ve&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:ye&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:xe&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Se&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:we&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(i.sheenRoughnessMap.channel),specularMapUv:Ee&&p(i.specularMap.channel),specularColorMapUv:De&&p(i.specularColorMap.channel),specularIntensityMapUv:Oe&&p(i.specularIntensityMap.channel),transmissionMapUv:ke&&p(i.transmissionMap.channel),thicknessMapUv:Ae&&p(i.thicknessMap.channel),alphaMapUv:Me&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(oe||le),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(M||Me),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&oe===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Fe,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&Lt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ce&&i.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Pe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Pe&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=gs[t];n=Za.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Ll(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Ul(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Wl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Gl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Kl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Wl),r.length>1&&r.sort(t||Gl),i.length>1&&i.sort(t||Gl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ql(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Kl,e.set(t,[i])):n>=r.length?(i=new Kl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Jl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new W};break;case`SpotLight`:n={position:new H,direction:new H,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Yl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Xl=0;function Zl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ql(e){let t=new Jl,n=Yl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new $t,o=new $t;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Zl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Xl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function $l(e){let t=new Ql(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function eu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new $l(e),t.set(n,[a])):r>=i.length?(a=new $l(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var tu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nu=`uniform sampler2D shadow_pass;
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
}`,ru=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],iu=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],au=new $t,ou=new H,su=new H;function cu(e,t,n){let i=new ri,a=new V,s=new V,c=new Jt,l=new ro,u=new io,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new eo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:tu,fragmentShader:nu}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new Or;y.setAttribute(`position`,new mr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new q(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){B(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Xt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new hi(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Ts(a.x),p.map.depthTexture=new gi(a.x,m)):(p.map=new Xt(a.x,a.y),p.map.depthTexture=new hi(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ou.setFromMatrixPosition(d.matrixWorld),e.position.copy(ou),su.copy(e.position),su.add(ru[t]),e.up.copy(iu[t]),e.lookAt(su),e.updateMatrixWorld(),n.makeTranslation(-ou.x,-ou.y,-ou.z),au.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(au,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Xt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],r,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function lu(e,t){function n(){let t=!1,n=new Jt,r=null,i=new Jt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?F(e.DEPTH_TEST):I(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=$e[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?F(e.STENCIL_TEST):I(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,N=e.getParameter(e.VERSION);N.indexOf(`WebGL`)===-1?N.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(N)[1]),te=M>=1);let P=null,ne={},re=e.getParameter(e.SCISSOR_BOX),ie=e.getParameter(e.VIEWPORT),ae=new Jt().fromArray(re),oe=new Jt().fromArray(ie);function se(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ce={};ce[e.TEXTURE_2D]=se(e.TEXTURE_2D,e.TEXTURE_2D,1),ce[e.TEXTURE_CUBE_MAP]=se(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[e.TEXTURE_2D_ARRAY]=se(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ce[e.TEXTURE_3D]=se(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),F(e.DEPTH_TEST),o.setFunc(3),ge(!1),_e(1),F(e.CULL_FACE),me(0);function F(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function I(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return h!==t&&(e.useProgram(t),h=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(I(e.BLEND),g=!1);else if(g===!1&&(F(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Xe(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Xe(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Xe(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Xe(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(fe[n],fe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function he(t,n){t.side===2?I(e.CULL_FACE):F(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ge(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?F(e.SAMPLE_ALPHA_TO_COVERAGE):I(e.SAMPLE_ALPHA_TO_COVERAGE)}function ge(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function _e(t){t===0?I(e.CULL_FACE):(F(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ve(t){t!==k&&(te&&e.lineWidth(t),k=t)}function ye(t,n,r){t?(F(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):I(e.POLYGON_OFFSET_FILL)}function be(t){t?F(e.SCISSOR_TEST):I(e.SCISSOR_TEST)}function xe(t){t===void 0&&(t=e.TEXTURE0+j-1),P!==t&&(e.activeTexture(t),P=t)}function Se(t,n,r){r===void 0&&(r=P===null?e.TEXTURE0+j-1:P);let i=ne[r];i===void 0&&(i={type:void 0,texture:void 0},ne[r]=i),(i.type!==t||i.texture!==n)&&(P!==r&&(e.activeTexture(r),P=r),e.bindTexture(t,n||ce[t]),i.type=t,i.texture=n)}function Ce(){let t=ne[P];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function Te(){try{e.compressedTexImage3D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function Ee(){try{e.texSubImage2D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function je(){try{e.texStorage3D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function Me(){try{e.texImage2D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function L(){try{e.texImage3D(...arguments)}catch(e){Xe(`WebGLState:`,e)}}function Ne(t){return d[t]===void 0?e.getParameter(t):d[t]}function Pe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Fe(t){ae.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ae.copy(t))}function R(t){oe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),oe.copy(t))}function Ie(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Le(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function z(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,ne={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,ae.set(0,0,e.canvas.width,e.canvas.height),oe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:F,disable:I,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:he,setFlipSided:ge,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:be,activeTexture:xe,bindTexture:Se,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:Te,texImage2D:Me,texImage3D:L,pixelStorei:Pe,getParameter:Ne,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:Ae,texStorage3D:je,texSubImage2D:Ee,texSubImage3D:De,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:Fe,viewport:R,reset:z}}function uu(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new V,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function D(e,t){return T?new OffscreenCanvas(e,t):Ge(`canvas`)}function O(e,t,n){let r=1,i=z(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=D(n,a));let o=t?D(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),B(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&B(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(e){l.generateMipmap(e)}function ee(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function j(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||B(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Re:Lt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function te(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function M(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function N(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function P(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function ne(e){ie(e.target)}function re(e){ae(e.target)}function ie(e){e.removeEventListener(`dispose`,ne),P(e),se(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function ae(e){e.removeEventListener(`dispose`,re),P(e),F(e)}function oe(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ae(t):ie(t))}C.clear(),b.clear()}function se(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&ce(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function ce(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function F(e){let t=f.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&ie(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=f.get(r[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(r[e])}f.remove(e)}let I=0;function le(){I=0}function ue(){return I}function de(e){I=e}function fe(){let e=I;return e>=p.maxTextures&&B(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),I+=1,e}function pe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function me(e,t){let n=f.get(e);if(e.isVideoTexture&&Ie(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Te(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function he(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Te(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function ge(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Te(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function _e(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?Ee(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let ve={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},ye={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},be={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function xe(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,ve[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,ve[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,ve[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,ye[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,ye[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,be[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function Se(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ne),N(t));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=pe(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&ce(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function Ce(e,t,n){return Math.floor(Math.floor(e/n)/t)}function we(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=Ce(r.start,t.width,4),c=Ce(n.start,t.width,4);r.start<=o+1&&s===c&&Ce(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function Te(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=Se(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=Lt.getPrimaries(Lt.workingColorSpace),n=t.colorSpace===``?null:Lt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=O(t.image,!1,p.maxTextureSize);e=Le(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=j(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);xe(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=M(t,e);if(t.isDepthTexture)u=te(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&we(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=ds(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=ds(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=z(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=z(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);k(t)&&t.mipmapsAutoUpdate===!0&&A(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Ee(e,t,n){if(t.image.length!==6)return;let r=Se(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=Lt.getPrimaries(Lt.workingColorSpace),o=t.colorSpace===``?null:Lt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=O(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Le(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=j(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=M(t,h);xe(l.TEXTURE_CUBE_MAP,t);let C;if(t.isDepthTexture){if(v=te(t.format===E,t.type),b){if(y)d.texStorage2D(l.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let e=0;e<6;e++)d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,h.width,h.height,0,g,_,null)}}else if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=z(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}k(t)&&t.mipmapsAutoUpdate===!0&&A(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function De(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=j(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),R(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Fe(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Oe(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=te(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;R(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Fe(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Fe(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=j(i.internalFormat,a,o,i.normalized,i.colorSpace);R(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Fe(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Fe(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function ke(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?_e(t.depthTexture,0):me(t.depthTexture,0);let o=i.__webglTexture,s=Fe(t),c=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,u=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)R(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else if(t.depthTexture.format===1027)R(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ae(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)ke(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?ke(t.__webglFramebuffer[0],e,0):ke(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Oe(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Oe(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function je(e,t,n){let r=f.get(e);t!==void 0&&De(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Ae(e)}function Me(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,re),N(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&R(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=j(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Fe(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Oe(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),xe(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)De(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else De(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);k(t)?A(l.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&l.texParameteri(l.TEXTURE_CUBE_MAP,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),xe(o,r),De(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),k(r)&&A(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),xe(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)De(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else De(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);k(t)?A(i):t.mipmaps.length>0&&l.texParameteri(i,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}e.depthBuffer&&Ae(e)}function L(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=ee(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let Ne=[];function Pe(e){if(e.samples>0){if(R(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Ne.length=0,Ne.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&Ne.push(a),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Ne))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Fe(e){return Math.min(p.maxSamples,e.samples)}function R(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Ie(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Le(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Lt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Xe(`WebGLTextures: Unsupported texture color space:`,n)),t}function z(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=fe,this.resetTextureUnits=le,this.getTextureUnits=ue,this.setTextureUnits=de,this.setTexture2D=me,this.setTexture2DArray=he,this.setTexture3D=ge,this.setTextureCube=_e,this.rebindTextures=je,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=De,this.useMultisampledRTT=R,this.dispose=oe}function du(e,t){function n(n,r=``){let i,a=Lt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var fu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pu=`
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

}`,mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new _i(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new eo({vertexShader:fu,fragmentShader:pu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new Ha(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hu=class extends et{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new mu,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new V,k=null,A=null,ee=new Ro;ee.viewport=new Jt;let j=new Ro;j.viewport=new Jt;let te=[ee,j],M=new Jo,N=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new kn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new kn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new kn,C[e]=t),t.getHandSpace()};function ne(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}N=null,P=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,F.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,ie),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Xt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new hi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Xt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),F.setContext(r),F.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=ee.near=t,M.far=j.far=ee.far=n,(N!==M.near||P!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,P=M.far),M.layers.mask=e.layers.mask|6,ee.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;ae(M,i);for(let e=0;e<a.length;e++)ae(a[e],i);M.projectionMatrix.copy(ee.projectionMatrix),M.projectionMatrixInverse.copy(ee.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),oe(e,M,i)};function oe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=it*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let se=null;function ce(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=te[n];o===void 0&&(o=new Ro,o.layers.enable(n),o.viewport=new Jt,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new _i,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}se&&se(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let F=new ps;F.setAnimationLoop(ce),this.setAnimationLoop=function(e){se=e},this.dispose=function(){}}},gu=new $t,_u=new Mt;_u.set(-1,0,0,0,1,0,0,0,1);function vu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Xa(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(gu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(_u),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function yu(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):B(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var bu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xu=null;function Su(){return xu===null&&(xu=new $r(bu,16,16,k,g),xu.name=`DFG_LUT`,xu.minFilter=o,xu.magFilter=o,xu.wrapS=t,xu.wrapT=t,xu.generateMipmaps=!1,xu.needsUpdate=!0),xu}var Cu=class{constructor(e={}){let{canvas:t=Ke(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},k=null,j=null,te=[],M=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,ne=!1,re=null,ie=null,ae=null,oe=null;this._outputColorSpace=Le;let se=0,ce=0,F=null,I=-1,le=null,ue=new Jt,de=new Jt,fe=null,pe=new W(0),me=0,he=t.width,ge=t.height,_e=1,ve=null,ye=null,be=new Jt(0,0,he,ge),xe=new Jt(0,0,he,ge),Se=!1,Ce=new ri,we=new ai,Te=!1,Ee=!1,De=new $t,Oe=new H,ke=new Jt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function Me(){return F===null?_e:1}let L=n;function Ne(e,n){return t.getContext(e,n)}let Pe,Fe,R,Ie,z,Re,ze,Be,Ve,Ue,We,Ge,qe,Ye,Ze,$e,et,tt,nt,rt,it,at,ot;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,dt,!1),L===null){let t=`webgl2`;if(L=Ne(t,e),L===null)throw Ne(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}st()}catch(e){throw t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),Xe(`WebGLRenderer: `+e.message),e}function st(){Pe=new Us(L),Pe.init(),it=new du(L,Pe),Fe=new Cs(L,Pe,e,it),R=new lu(L,Pe),Fe.reversedDepthBuffer&&h&&R.buffers.depth.setReversed(!0),ie=L.createFramebuffer(),ae=L.createFramebuffer(),oe=L.createFramebuffer(),Ie=new Ks(L),z=new Ul,Re=new uu(L,Pe,R,z,Fe,it,Ie),ze=new Hs(P),Be=new ms(L),at=new xs(L,Be),Ve=new Ws(L,Be,Ie,at),Ue=new Js(L,Ve,Be,at,Ie),tt=new qs(L,Fe,Re),Ze=new ws(z),We=new Hl(P,ze,Pe,Fe,at,Ze),Ge=new vu(P,z),qe=new ql,Ye=new eu(Pe),et=new bs(P,ze,R,Ue,x,s),$e=new cu(P,Ue,Fe),ot=new yu(L,Ie,Fe,R),nt=new Ss(L,Pe,Ie),rt=new Gs(L,Pe,Ie),Ie.programs=We.programs,P.capabilities=Fe,P.extensions=Pe,P.properties=z,P.renderLists=qe,P.shadowMap=$e,P.state=R,P.info=Ie}S!==1009&&(N=new Xs(S,t.width,t.height,o,r,i));let ct=new hu(P,L);this.xr=ct,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(he,ge,!1))},this.getSize=function(e){return e.set(he,ge)},this.setSize=function(e,n,r=!0){ct.isPresenting?B(`WebGLRenderer: Can't change size while VR device is presenting.`):(he=e,ge=n,t.width=Math.floor(e*_e),t.height=Math.floor(n*_e),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(he*_e,ge*_e).floor()},this.setDrawingBufferSize=function(e,n,r){he=e,ge=n,_e=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)Xe(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){B(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}N.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(ue)},this.getViewport=function(e){return e.copy(be)},this.setViewport=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),R.viewport(ue.copy(be).multiplyScalar(Me()).round())},this.getScissor=function(e){return e.copy(xe)},this.setScissor=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),R.scissor(de.copy(xe).multiplyScalar(Me()).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(e){R.setScissorTest(Se=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){ye=e},this.getClearColor=function(e){return e.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(F!==null){let t=F.texture.format;e=C.has(t)}if(e){let e=F.texture.type,t=w.has(e),n=et.getClearColor(),r=et.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,L.clearBufferuiv(L.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,L.clearBufferiv(L.COLOR,0,E))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),re=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),et.dispose(),qe.dispose(),Ye.dispose(),Re.dispose(),z.dispose(),ze.dispose(),Ue.dispose(),Ve.dispose(),at.dispose(),ot.dispose(),We.dispose(),ct.dispose(),ct.removeEventListener(`sessionstart`,vt),ct.removeEventListener(`sessionend`,yt),bt.stop()};function lt(e){e.preventDefault(),Je(`WebGLRenderer: Context Lost.`),ne=!0}function ut(){Je(`WebGLRenderer: Context Restored.`),ne=!1;let e=Ie.autoReset,t=$e.enabled,n=$e.autoUpdate,r=$e.needsUpdate,i=$e.type;st(),Ie.autoReset=e,$e.enabled=t,$e.autoUpdate=n,$e.needsUpdate=r,$e.type=i}function dt(e){Xe(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ft(e){let t=e.target;t.removeEventListener(`dispose`,ft),pt(t)}function pt(e){mt(e),z.remove(e)}function mt(e){let t=z.get(e).programs;t!==void 0&&(t.forEach(function(e){We.releaseProgram(e)}),e.isShaderMaterial&&We.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ae);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=At(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ve.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;at.setup(i,r,s,n,c);let h,g=nt;if(c!==null&&(h=Be.get(c),g=rt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(R.setLineWidth(r.wireframeLinewidth*Me()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*Me()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh){if(Pe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Be.get(c).bytesPerElement:1,o=z.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n,r){re!==null&&e.isNodeMaterial&&re.setObject(r,e),Te===!0&&Ze.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Dt(e,t,r),e.side=0,e.needsUpdate=!0,Dt(e,t,r),e.side=2):Dt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),re!==null&&re.renderStart(e,t,n),j=Ye.get(n),j.init(t),M.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),re!==null&&re.updateLights(j.state.lightsArray),Ee=this.localClippingEnabled,Te=Ze.init(this.clippingPlanes,Ee),Te===!0&&Ze.setGlobalState(this.clippingPlanes,t),re!==null&&$e.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];ht(o,n,t,e),r.add(o)}else ht(i,n,t,e),r.add(i)}}),j=M.pop(),re!==null&&re.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=z.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Pe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let gt=null;function _t(e){gt&&gt(e)}function vt(){bt.stop()}function yt(){bt.start()}let bt=new ps;bt.setAnimationLoop(_t),typeof self<`u`&&bt.setContext(self),this.setAnimationLoop=function(e){gt=e,ct.setAnimationLoop(e),e===null?bt.stop():bt.start()},ct.addEventListener(`sessionstart`,vt),ct.addEventListener(`sessionend`,yt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){Xe(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ne===!0)return;re!==null&&re.renderStart(e,t);let n=ct.enabled===!0&&ct.isPresenting===!0,r=N!==null&&(F===null||n)&&N.begin(P,F);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(t),t=ct.getCamera()),e.isScene===!0&&e.onBeforeRender(P,e,t,F),j=Ye.get(e,M.length),j.init(t),j.state.textureUnits=Re.getTextureUnits(),M.push(j),De.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?we.setFromArrayCamera(t):Ce.setFromProjectionMatrix(De,He,t.reversedDepth),Ee=this.localClippingEnabled,Te=Ze.init(this.clippingPlanes,Ee),k=qe.get(e,te.length),k.init(),te.push(k),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){let e=P.xr.getDepthSensingMesh();e!==null&&xt(e,t,-1/0,P.sortObjects)}xt(e,t,0,P.sortObjects),k.finish(),re!==null&&re.updateLights(j.state.lightsArray),P.sortObjects===!0&&k.sort(ve,ye),je=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,je&&et.addToRenderList(k,e),this.info.autoReset===!0&&this.info.reset(),Te===!0&&Ze.beginShadows();let i=j.state.shadowsArray;if($e.render(i,e,t),Te===!0&&Ze.endShadows(),(r&&N.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Ct(n,r,e,a)}je&&et.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];St(k,e,n,n.viewport)}}else r.length>0&&Ct(n,r,e,t),je&&et.render(e),St(k,e,t)}F!==null&&ce===0&&(Re.updateMultisampleRenderTarget(F),Re.updateRenderTargetMipmap(F)),r&&N.end(P),e.isScene===!0&&e.onAfterRender(P,e,t),at.resetDefaultState(),I=-1,le=null,M.pop(),M.length>0?(j=M[M.length-1],Re.setTextureUnits(j.state.textureUnits),Te===!0&&Ze.setGlobalState(P.clippingPlanes,j.state.camera)):j=null,te.pop(),k=te.length>0?te[te.length-1]:null,re!==null&&re.renderEnd()};function xt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?we:Ce;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);let i=Ue.update(e),a=e.material;a.visible&&k.push(e,i,a,n,ke.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?we:Ce;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ue.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),ke.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ke.copy(e.boundingSphere.center)),ke.applyMatrix4(e.matrixWorld).applyMatrix4(De)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,ke.z,s,t)}}else a.visible&&k.push(e,i,a,n,ke.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)xt(i[e],t,n,r)}function St(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),Te===!0&&Ze.setGlobalState(P.clippingPlanes,n),r&&R.viewport(ue.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function Ct(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Pe.has(`EXT_color_buffer_half_float`)||Pe.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new Xt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Fe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||ue;a.setSize(o.z*P.transmissionResolutionScale,o.w*P.transmissionResolutionScale);let s=P.getRenderTarget(),u=P.getActiveCubeFace(),d=P.getActiveMipmapLevel();P.setRenderTarget(a),P.getClearColor(pe),me=P.getClearAlpha(),me<1&&P.setClearColor(16777215,.5),P.clear(),je&&et.render(n);let f=P.toneMapping;P.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),Te===!0&&Ze.setGlobalState(P.clippingPlanes,r),wt(e,n,r),Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a),Pe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Re.updateMultisampleRenderTarget(a),Re.updateRenderTargetMipmap(a))}P.setRenderTarget(s,u,d),P.setClearColor(pe,me),p!==void 0&&(r.viewport=p),P.toneMapping=f}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){re!==null&&i.isNodeMaterial&&re.setObject(e,i),e.onBeforeRender(P,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(P,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,P.renderBufferDirect(n,t,r,i,e,a),i.side=2):P.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(P,t,n,r,i,a)}function Et(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Dt(e,t,n){t.isScene!==!0&&(t=Ae);let r=z.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=We.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=We.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ze.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ft),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=We.getUniforms(e),re!==null&&e.isNodeMaterial&&re.build(e,n,s),e.onBeforeCompile(s,P),d=We.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ze.uniform),kt(e,s),r.needsLights=Mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Et(j.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Ot(e,t,n,r,i){let a=z.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Dt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function V(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=al.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=z.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function At(e,t,n,r,i){t.isScene!==!0&&(t=Ae),Re.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Lt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ze.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(h=P.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=z.get(r),y=j.state.lights;if(Te===!0&&(Ee===!0||e!==le)){let t=e===le&&r.id===I;Ze.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ze.numPlanes||v.numIntersection!==Ze.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Et(j.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Ot(r,t,i,s,h):Dt(r,t,i),re&&r.isNodeMaterial&&re.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(R.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==I&&(I=r.id,w=!0),C||le!==e){R.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(L,`projectionMatrix`,e.projectionMatrix),E.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(L,Oe.setFromMatrixPosition(e.matrixWorld)),Fe.logarithmicDepthBuffer&&E.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),le!==e&&(le=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(L,`sunShadowMap`,y.state.sunShadowMap,Re),y.state.directionalShadowMap.length>0&&E.setValue(L,`directionalShadowMap`,y.state.directionalShadowMap,Re),y.state.spotShadowMap.length>0&&E.setValue(L,`spotShadowMap`,y.state.spotShadowMap,Re),y.state.pointShadowMap.length>0&&E.setValue(L,`pointShadowMap`,y.state.pointShadowMap,Re)),i.isSkinnedMesh){E.setOptional(L,i,`bindMatrix`),E.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(L,`boneTexture`,e.boneTexture,Re))}i.isBatchedMesh&&(E.setOptional(L,i,`batchingTexture`),E.setValue(L,`batchingTexture`,i._matricesTexture,Re),E.setOptional(L,i,`batchingIdTexture`),E.setValue(L,`batchingIdTexture`,i._indirectTexture,Re),E.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(L,`batchingColorTexture`,i._colorsTexture,Re));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&tt.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(L,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=Su()),w){if(E.setValue(L,`toneMappingExposure`,P.toneMappingExposure),v.needsLights&&jt(O,T),a&&r.fog===!0&&Ge.refreshFogUniforms(O,a),Ge.refreshMaterialUniforms(O,r,_e,ge,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of j.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}al.upload(L,V(v),O,Re)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(al.upload(L,V(v),O,Re),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(L,`center`,i.center),E.setValue(L,`modelViewMatrix`,i.modelViewMatrix),E.setValue(L,`normalMatrix`,i.normalMatrix),E.setValue(L,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ot.update(n,S),ot.bind(n,S)}}return S}function jt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(e,t,n){let r=z.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){F=e,se=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=z.get(e);if(o.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(L.FRAMEBUFFER,o.__webglFramebuffer),ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest,R.viewport(ue),R.scissor(de),R.setScissorTest(fe),I=-1;return}if(o.__webglFramebuffer===void 0)Re.setupRenderTarget(e);else if(o.__hasExternalTextures)Re.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&z.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Re.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Re.useMultisampledRTT(e)===!1?z.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest}else ue.copy(be).multiplyScalar(_e).floor(),de.copy(xe).multiplyScalar(_e).floor(),fe=Se;if(n!==0&&(r=ie),R.bindFramebuffer(L.FRAMEBUFFER,r)&&R.drawBuffers(e,r),R.viewport(ue),R.scissor(de),R.setScissorTest(fe),i){let r=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=z.get(e.textures[t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=z.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,t.__webglTexture,n)}I=-1};function Nt(e){let t=z.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Fe.textureFormatReadable(e.format),t.__typeReadable=Fe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){Xe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){R.bindFramebuffer(L.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let u=Nt(o);if(u.__formatReadable===!1){Xe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){Xe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,it.convert(c),it.convert(l),a)}finally{let e=F===null?null:z.get(F).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){R.bindFramebuffer(L.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let d=Nt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,it.convert(l),it.convert(u),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let p=F===null?null:z.get(F).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,p);let m=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Qe(L,m,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(f),L.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Re.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),R.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=it.convert(t.format),_=it.convert(t.type),v;t.isData3DTexture?(Re.setTexture3D(t,0),v=L.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Re.setTexture2DArray(t,0),v=L.TEXTURE_2D_ARRAY):(Re.setTexture2D(t,0),v=L.TEXTURE_2D),R.activeTexture(L.TEXTURE0),R.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),R.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),R.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let y=R.getParameter(L.UNPACK_ROW_LENGTH),b=R.getParameter(L.UNPACK_IMAGE_HEIGHT),x=R.getParameter(L.UNPACK_SKIP_PIXELS),S=R.getParameter(L.UNPACK_SKIP_ROWS),C=R.getParameter(L.UNPACK_SKIP_IMAGES);R.pixelStorei(L.UNPACK_ROW_LENGTH,h.width),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,h.height),R.pixelStorei(L.UNPACK_SKIP_PIXELS,l),R.pixelStorei(L.UNPACK_SKIP_ROWS,u),R.pixelStorei(L.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=z.get(e),r=z.get(t),h=z.get(n.__renderTarget),g=z.get(r.__renderTarget);R.bindFramebuffer(L.READ_FRAMEBUFFER,h.__webglFramebuffer),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(e).__webglTexture,i,d+n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(t).__webglTexture,a,m+n)),L.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,L.DEPTH_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||z.has(e)){let n=z.get(e),r=z.get(t);R.bindFramebuffer(L.READ_FRAMEBUFFER,ae),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,n.__webglTexture,i),T?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,r.__webglTexture,a),i===0?T?L.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):L.copyTexSubImage2D(v,a,f,p,l,u,o,s):L.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,L.COLOR_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h);R.pixelStorei(L.UNPACK_ROW_LENGTH,y),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,b),R.pixelStorei(L.UNPACK_SKIP_PIXELS,x),R.pixelStorei(L.UNPACK_SKIP_ROWS,S),R.pixelStorei(L.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&L.generateMipmap(v),R.unbindTexture()},this.initRenderTarget=function(e){z.get(e).__webglFramebuffer===void 0&&Re.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Re.setTextureCube(e,0):e.isData3DTexture?Re.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Re.setTexture2DArray(e,0):Re.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){se=0,ce=0,F=null,R.reset(),at.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return He}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}},wu=2.9,Tu=68.75;function Eu(e){return Number(e<=16?(66.55-e*2.9).toFixed(2):(17.6-(e-17)*2.53).toFixed(2))}function Du(e,t=`saucer`){let n=Eu(e);return e===4&&t===`saucer`?Number((n-3.8).toFixed(2)):e===8&&t===`saucer`?Number((n-2).toFixed(2)):e===8&&t===`stardrive`?30.4:e===10&&t===`saucer`?35:e===36&&t===`stardrive`?-38.8:n}var Ou=[{id:`deck1_bridge`,name:`Main Bridge`,deck:1,section:`saucer`,confidence:`Tier A — Canonical Set`,extrapolated:!1,spawnPos:{x:3.35,y:Du(1,`saucer`)+.12,z:-138.48},lookAt:{x:-1.25,y:Du(1,`saucer`)+1.45,z:-133.9},description:`Stage 9 TNG Season 5–7 Main Bridge featuring the soaring 5.1m ribbed skylight dome, stepped amphitheater deck, double-swept cherry-wood Tactical horseshoe, sculpted camel-leather command chairs, glowing side pedestals, quilted Turbolift alcove, Conn/Ops, and 2048×1024 MSAA Main Viewscreen.`},{id:`deck1_ready_room`,name:`Captain's Ready Room`,deck:1,section:`saucer`,confidence:`Tier A — Canonical Set`,extrapolated:!1,spawnPos:{x:11.8,y:Du(1,`saucer`),z:-141.5},lookAt:{x:15,y:Du(1,`saucer`)+1.55,z:-142.5},description:`Captain Jean-Luc Picard's private office on Deck 1 starboard, with recessed architectural ceiling vault, desktop LCARS terminal, replicator alcove, aquarium (Livingston), Stargazer model, and exterior starboard viewport.`},{id:`deck1_observation`,name:`Observation Lounge`,deck:1,section:`saucer`,confidence:`Tier A — Canonical Set`,extrapolated:!1,spawnPos:{x:0,y:Du(1,`saucer`),z:-125},lookAt:{x:0,y:Du(1,`saucer`)+1.55,z:-119},description:`Senior officers briefing room aft of the Main Bridge featuring the sculpted cherry-wood conference table, gold Enterprise lineage wall relief, coffered ceiling cove, and tall slanted aft windows overlooking the saucer dorsal surface and warp nacelles.`},{id:`deck4_shuttlebay`,name:`Main Shuttlebay (Bay 1)`,deck:4,section:`saucer`,confidence:`Tier A / B — Set & Tech Manual`,extrapolated:!1,spawnPos:{x:2.5,y:Du(4,`saucer`),z:-88.2},lookAt:{x:2.5,y:Du(4,`saucer`)+1.85,z:-72},description:`Two-deck 6.2m-high primary saucer hangar complex housing sculpted Type-6 shuttlecraft Goddard and El-Baz, overhead structural hangar trusses, atmospheric containment field, flight control balcony, and working exterior clamshell bay doors.`},{id:`deck8_quarters`,name:`Senior Officer Crew Quarters`,deck:8,section:`saucer`,confidence:`Tier A — Canonical Set`,extrapolated:!1,spawnPos:{x:-16,y:Du(8,`saucer`),z:-42},lookAt:{x:-24,y:Du(8,`saucer`)+1.55,z:-44},description:`Spacious TNG senior officer stateroom with coffered skylight ceiling, curved window mullions overlooking space, living area, sleeping alcove, replicator, personal LCARS workstation, and adjoining sanitation facility.`},{id:`deck8_transporter`,name:`Transporter Room 1`,deck:8,section:`saucer`,confidence:`Tier A — Canonical Set`,extrapolated:!1,spawnPos:{x:11,y:Du(8,`saucer`),z:-40},lookAt:{x:17.5,y:Du(8,`saucer`)+1.55,z:-40},description:`Primary personnel transporter chamber with 6-pad raised molecular imaging platform, overhead emitter canopy, sculpted operator console, and glowing wall phase transition coils.`},{id:`deck8_sep_interface`,name:`Separation Interface Airlock (Deck 8)`,deck:8,section:`saucer`,confidence:`Tier C — Architectural Extrapolation`,extrapolated:!0,spawnPos:{x:0,y:Du(8,`saucer`),z:-26.5},lookAt:{x:0,y:Du(8,`saucer`)+1.6,z:-18},description:`Extrapolated heavy pressure-interlock passage spanning the physical hull boundary between Deck 8 Saucer and Deck 8 Stardrive Battle Bridge corridor. Automatically seals prior to Saucer Separation.`},{id:`deck8_battle_bridge`,name:`Battle Bridge (Stardrive Command)`,deck:8,section:`stardrive`,confidence:`Tier A — Canonical Set`,extrapolated:!1,spawnPos:{x:0,y:Du(8,`stardrive`),z:-4},lookAt:{x:0,y:Du(8,`stardrive`)+1.55,z:-10.5},description:`Tactical command bridge embedded in the dorsal Cobra-Head crest of the Stardrive neck. Assumes full independent helm, warp propulsion, and tactical authority of the Stardrive section upon Saucer Separation.`},{id:`deck10_ten_forward`,name:`Ten Forward Lounge`,deck:10,section:`saucer`,confidence:`Tier A — Canonical Set`,extrapolated:!1,spawnPos:{x:4.2,y:Du(10,`saucer`),z:-304.2},lookAt:{x:-1.2,y:Du(10,`saucer`)+1.65,z:-314.2},description:`Iconic 4.65m vaulted social lounge at the forward-most edge of Deck 10, featuring tall forward-slanted observation windows looking directly ahead of the saucer bow, radial structural ribs, illuminated glass-block bar, replicator drink service, and seating tables.`},{id:`deck11_holodeck`,name:`Holodeck 4 & Astrometrics Lab`,deck:11,section:`saucer`,confidence:`Tier A — Canonical Set`,extrapolated:!1,spawnPos:{x:-11.2,y:Du(11,`saucer`),z:-138},lookAt:{x:-21,y:Du(11,`saucer`)+1.65,z:-138},description:`High-bay 5.4m omnidirectional holographic simulation chamber with 5 playable programs (Laser Grid & Matter Spawner, Scotty’s 2266 USS Enterprise NCC-1701 TOS Bridge, Worf’s Klingon Mok’bara Combat Arena, Sherlock/Dixon Hill Mystery Office, and 3D Stellar Cartography Warp Navigator).`},{id:`deck12_sickbay`,name:`Primary Sickbay & CMO Office`,deck:12,section:`saucer`,confidence:`Tier A — Canonical Set`,extrapolated:!1,spawnPos:{x:10,y:Du(12,`saucer`),z:-138},lookAt:{x:17.5,y:Du(12,`saucer`)+1.55,z:-138},description:`Main medical facility featuring surgical clamshell biobed with working diagnostic body scanner, recovery biobeds, Dr. Crusher’s glass-walled Chief Medical Officer office, and medical laboratory.`},{id:`deck36_engineering`,name:`Main Engineering & Warp Core`,deck:36,section:`stardrive`,confidence:`Tier A — Canonical Set`,extrapolated:!1,spawnPos:{x:2.2,y:Du(36,`stardrive`),z:44.2},lookAt:{x:0,y:Du(36,`stardrive`)+2.4,z:55},description:`Soaring 8.8m two-level Stardrive propulsion cathedral housing the pulsing Matter/Antimatter Reaction Assembly (Warp Core), Chief Engineer’s pool-table console, 2048×1024 Master Systems Display (MSD), +4.2m upper inspection mezzanine catwalk, emergency isolation door, and walkable Jefferies tube.`}],ku=[{id:`ext_three_quarter`,name:`Three-Quarter Ventral Hero View (Ref 1, 4, 5, 8)`,section:`saucer`,cameraPos:{x:158,y:-14,z:-485},targetPos:{x:-6,y:8,z:-32},description:`Iconic low-angle TNG three-quarter hero perspective showcasing the subtle pearlescent Aztec saucer terraces, compact forward-swept connecting neck, recessed almond navigational deflector dish, swan-neck curved pylons, and hooded Bussard collectors.`},{id:`ext_dorsal_studio`,name:`Dorsal Studio Model Orthoview (Ref 1 / Studio Miniature)`,section:`saucer`,cameraPos:{x:0,y:695,z:2},targetPos:{x:0,y:12,z:0},description:`Exact 642.5m × 463.73m top-down ILM 6-foot studio miniature perspective revealing the integrated concave S-curve aft saucer tail, twin auxiliary impulse notches, Main Impulse Engine, wide 135.2m secondary hull shoulders, and full-length nacelles.`},{id:`ext_cobra_prow`,name:`Cobra Head, Flared Shoulders & Deflector Prow (Ref 3, 5)`,section:`stardrive`,cameraPos:{x:-56,y:46,z:-64},targetPos:{x:0,y:2,z:24},description:`Close-up three-quarter inspection of the smooth 96-segment Andrew Probert Cobra-Head separation deck, continuous swept phaser ribbon, compact forward-swept neck throat, and wide window-studded Secondary Hull shoulders hooding the Almond Deflector.`},{id:`ext_front_ortho`,name:`Bow-On Studio Proportions (Ref 4 Front/Rear Ortho)`,section:`saucer`,cameraPos:{x:0,y:8,z:-560},targetPos:{x:0,y:8,z:0},description:`Front orthographic studio perspective matching the ILM 6-foot model: convex elliptical dorsal saucer arch, 27m exposed neck throat, recessed almond deflector at Y = -26.8m, swan-neck curved pylons, and hooded horizontal stadium Bussards.`},{id:`ext_separation_interface`,name:`Aft Stardrive & Cobra-Head Vista (Ref 3, 6, 7)`,section:`stardrive`,cameraPos:{x:92,y:38,z:245},targetPos:{x:-10,y:30,z:-25},description:`Over-the-nacelle aft Stardrive perspective framing the manta-winged Cobra-Head separation interface, Detachable Battle Bridge, and the Saucer Section auxiliary impulse engines at X = ±106m.`},{id:`ext_deflector`,name:`Main Navigational Deflector Dish & Shoulders (Ref 5)`,section:`stardrive`,cameraPos:{x:42,y:-18,z:-56},targetPos:{x:0,y:-26.8,z:22},description:`Close inspection of the recessed almond-contoured Main Navigational Deflector dish (Y = -26.8m, Z = +12.0m) tucked beneath the overhanging 135.2m flared Secondary Hull shoulders.`},{id:`ext_bridge_module`,name:`Deck 1 Bridge & Observation Windows`,section:`saucer`,cameraPos:{x:36,y:76,z:-112},targetPos:{x:0,y:65.8,z:-136},description:`Close-up inspection of the smooth 128-segment dorsal Bridge teardrop superstructure, Captain’s Ready Room starboard window, and aft Observation Lounge viewports.`},{id:`ext_ten_forward`,name:`Deck 10 Rim — Ten Forward Windows`,section:`saucer`,cameraPos:{x:0,y:38.5,z:-342},targetPos:{x:0,y:36.8,z:-314},description:`Close exterior inspection right in front of the Saucer bow rim, looking directly through the 5 panoramic windows into the vaulted Ten Forward lounge.`},{id:`ext_shuttlebay`,name:`Deck 4 Main Shuttlebay 1, Skylight Grid & Saucer Impulse`,section:`saucer`,cameraPos:{x:0,y:68,z:98},targetPos:{x:0,y:42,z:-28},description:`Dorsal aft saucer overlooking the sculpted curved-arch Main Shuttlebay 1 deckhouse, crisp 1701-D pennant, 2×(6×3) dorsal skylight grid, integrated S-curve aft saucer tail, and outboard twin saucer impulse engines.`},{id:`ext_aft_fantail`,name:`Stardrive Shuttlebays 2 & 3 + Main Impulse (Ref 1, Ref 4)`,section:`stardrive`,cameraPos:{x:0,y:26,z:358},targetPos:{x:0,y:-16,z:165},description:`Aft dorsal view of the squared-off Secondary Hull fantail transom (Z = +276.5m), Shuttlebay 2 (Port) & Shuttlebay 3 (Starboard) clamshell doors, golden pylon-root sensor pads, tapered dorsal spine, and 6-cell Main Impulse Engine.`},{id:`ext_nacelles`,name:`Starboard Warp Nacelle & Hooded Bussard Collector (Ref 1, 4)`,section:`stardrive`,cameraPos:{x:192,y:18,z:18},targetPos:{x:123.5,y:-1.5,z:165},description:`Close inspection of the 266.2m starboard warp nacelle (X = +123.5m, Y = -1.5m), streamlined hull cowl hooding the crimson Bussard ramscoop collector, ochre collar band, Starfleet red pennant, and aft dorsal vents.`}],Au=Array.from({length:42},(e,t)=>{let n=t+1;return{deck:n,y:Eu(n),...ju(n)}});function ju(e){let t={1:{name:`Main Bridge, Ready Room & Observation Lounge`,section:`saucer`,centerZ:-137.5,radiusX:26,radiusZ:24,isHero:!0,confidence:`Tier A — Canonical Set`,purpose:`Primary Command & Senior Officer Briefing`,facilities:[`Main Bridge`,`Captain's Ready Room`,`Observation Lounge`,`Turbolifts 1 & 2`,`Emergency Bridge Turbolift`]},2:{name:`VIP Staterooms & Junior Officers Quarters`,section:`saucer`,centerZ:-138,radiusX:46,radiusZ:40,isHero:!1,confidence:`Tier B — Technical Manual Plan`,purpose:`Officer Habitation & Upper Sensor Pod Access`,facilities:[`Junior Officers Quarters`,`VIP Diplomatic Stateroom`,`Upper Sensor Maintenance`,`Deck 2 Turbolift Lobby`]},3:{name:`Officers' Mess, Quartermaster & Forward RCS`,section:`saucer`,centerZ:-138,radiusX:74,radiusZ:60,isHero:!1,confidence:`Tier B / C — Tech Manual & Extrapolation`,purpose:`Logistics, Dining & Attitude Control`,facilities:[`Officers' Wardroom Mess`,`Quartermaster Supply Depot`,`Forward RCS Thruster Inspection Bay`]},4:{name:`Main Shuttlebay 1, Cargo Hold & Flight Control`,section:`saucer`,centerZ:-64,radiusX:105,radiusZ:86,isHero:!0,confidence:`Tier A / B — Set & Tech Manual`,purpose:`Primary Flight Operations & Bulk Cargo Handling`,facilities:[`Main Shuttlebay 1`,`Flight Control Balcony`,`Type-6 Shuttlecraft Goddard`,`Cargo Bay 1`,`Shuttle Maintenance Shop`]},5:{name:`Main Computer Core (Upper) & Phased Sensor Control`,section:`saucer`,centerZ:-138,radiusX:132,radiusZ:105,isHero:!1,confidence:`Tier B — Technical Manual Plan`,purpose:`Isolinear Optical Processing & Primary Sensors`,facilities:[`Saucer Computer Core Level 1`,`Subspace Transceiver Array Control`,`Science Administrative Offices`]},6:{name:`Saucer Impulse Engineering & Phaser Bank Control`,section:`saucer`,centerZ:-138,radiusX:158,radiusZ:124,isHero:!1,confidence:`Tier B — Technical Manual Plan`,purpose:`Saucer Auxiliary Impulse & Upper Collimated Phaser Servicing`,facilities:[`Saucer Impulse Reaction Chamber`,`Main Computer Core Level 2`,`Upper Dorsal Phaser Conduit`]},7:{name:`Xenobiology Labs, Counseling & Secondary Medical`,section:`saucer`,centerZ:-138,radiusX:182,radiusZ:144,isHero:!1,confidence:`Tier B / C — Tech Manual & Extrapolation`,purpose:`Life Sciences Research & Ship Counselor Suite`,facilities:[`Ship Counselor Office`,`Xenobiology Containment Lab`,`Secondary Medical Triage Ward`]},8:{name:`Senior Quarters, Transporter 1, Separation Airlock & Battle Bridge`,section:`saucer`,hasStardriveSplit:!0,centerZ:-18,radiusX:204,radiusZ:162,isHero:!0,confidence:`Tier A — Canonical Set (+ Tier C Interface)`,purpose:`Habitation, Personnel Transport & Hull Separation Interface / Battle Bridge`,facilities:[`Senior Officer Quarters`,`Transporter Room 1`,`Saucer-Stardrive Separation Airlock`,`Battle Bridge (Stardrive Section)`]},9:{name:`Diplomatic Suites, Gymnasium & Docking Latch Bay`,section:`saucer`,centerZ:-138,radiusX:220,radiusZ:175,isHero:!1,confidence:`Tier B / C — Tech Manual & Extrapolation`,purpose:`Ambassadorial Accommodations & Mechanical Separation Latches`,facilities:[`Ambassadorial Guest Suite`,`Parises Squares / Crew Gymnasium`,`Primary Umbilical Latch Servicing`]},10:{name:`Ten Forward Lounge & Outer Saucer Rim Promenade`,section:`saucer`,centerZ:-309.5,radiusX:231,radiusZ:180,isHero:!0,confidence:`Tier A — Canonical Set`,purpose:`Crew Recreation, Forward Observation & Rim Habitat`,facilities:[`Ten Forward Lounge`,`Panoramic Bow Windows`,`Beverage Replicator Bar`,`Forward Escape Pod Access`]},11:{name:`Holodeck 4, Astrometrics Lab & Jefferies Junction`,section:`saucer`,centerZ:-138,radiusX:214,radiusZ:168,isHero:!0,confidence:`Tier A / B — Canonical Set & Tech Manual`,purpose:`Holographic Simulation, Stellar Cartography & Service Conduits`,facilities:[`Holodeck 4 (Interactive Programs)`,`Astrometrics & Stellar Lab`,`Saucer Jefferies Tube Hub`]},12:{name:`Primary Sickbay, CMO Office & Medical Laboratories`,section:`saucer`,centerZ:-138,radiusX:188,radiusZ:148,isHero:!0,confidence:`Tier A — Canonical Set`,purpose:`Chief Medical Facility, Surgical Intensive Care & Bio-Research`,facilities:[`Main Sickbay Surgical Clamshell`,`Recovery Biobed Ward`,`CMO Dr. Crusher Office`,`Medical Pathology Lab`]},13:{name:`Shuttlebays 2 & 3 (Stardrive), Arboretum & Family Quarters`,section:`saucer`,centerZ:-138,radiusX:156,radiusZ:124,isHero:!1,confidence:`Tier B — Technical Manual Plan`,purpose:`Botanical Life Support, Civilian Schools & Neck Hangars`,facilities:[`Botanical Arboretum`,`Primary School Classroom`,`Stardrive Dorsal Shuttlebays 2 & 3`]},14:{name:`Saucer Fusion Generators, Emergency Batteries & Geology Lab`,section:`saucer`,centerZ:-138,radiusX:122,radiusZ:96,isHero:!1,confidence:`Tier B / C — Tech Manual & Extrapolation`,purpose:`Independent Saucer Power Generation & Planetary Science`,facilities:[`Auxiliary Fusion Reactor 1`,`Sarium Krellide Battery Bank`,`Planetary Geology Assay Lab`]},15:{name:`Ventral Phaser Array Control & Lower Maintenance Ring`,section:`saucer`,centerZ:-138,radiusX:84,radiusZ:68,isHero:!1,confidence:`Tier B / C — Tech Manual & Extrapolation`,purpose:`Lower Saucer Weapons Array & Environmental Scrubbers`,facilities:[`Lower Collimated Phaser Control`,`Atmospheric Scrubber Matrix`,`Ventral Escape Pod Bays`]},16:{name:`Captain's Yacht (Calypso) Docking Cradle & Lower Sensor Dome`,section:`saucer`,centerZ:-138,radiusX:44,radiusZ:36,isHero:!1,confidence:`Tier B — Technical Manual Plan`,purpose:`Diplomatic Auxiliary Craft Dock & Planetary Sensor Array`,facilities:[`Captain's Yacht Boarding Airlock`,`Ventral Planetary Sensor Array`,`Lower Tractor Beam Emitter`]}};if(t[e])return t[e];let n={17:{name:`Neck Spine Level 17 — Security Armory & Brig`,purpose:`Detention Complex & Security Operations`,facilities:[`Security Brig Holding Cells`,`Phaser Range & Armory`,`Neck Turbolift Trunk`]},18:{name:`Neck Spine Level 18 — Emergency Transporters 5 & 6`,purpose:`Evacuation Transport & Neck Structural Truss`,facilities:[`Emergency Evacuation Transporter 5`,`Structural Integrity Field Coil Room`]},19:{name:`Neck Spine Level 19 — Auxiliary Fire Control`,purpose:`Redundant Tactical & Deflector Conduit Routing`,facilities:[`Auxiliary Fire Control Center`,`EPS Vertical Power Trunk`]},20:{name:`Neck Spine Level 20 — Computer Optical Router & Labs`,purpose:`Saucer-to-Stardrive Optical Data Bus`,facilities:[`Optical Subprocessor Junction`,`High-Energy Physics Lab`]},21:{name:`Neck Spine Level 21 — Waste Recycling & Water Reclamation`,purpose:`Closed-Loop Matter Replication Feedstock`,facilities:[`Hydro-Reclamation Processors`,`Matter Synthesizer Storage`]},22:{name:`Neck Spine Level 22 — Lower Neck Structural Junction`,purpose:`Neck-to-Secondary Hull Stress Frame`,facilities:[`Trilithium Frame Stress Monitors`,`Inertial Damper Field Generator`]},23:{name:`Stardrive Impulse Engineering & Pylon Root Junction`,purpose:`Stardrive Primary Impulse Propulsion`,facilities:[`Stardrive Impulse Fusion Reactors`,`Warp Pylon Structural Root Access`]},24:{name:`Secondary Computer Core (Upper) & Cargo Transporters`,purpose:`Stardrive Independent Computation`,facilities:[`Stardrive Computer Core Level 1`,`Heavy Cargo Transporter Bay`]},25:{name:`Forward Photon Torpedo Launcher & Magazine`,purpose:`Primary Ordnance Loading & Dispersal`,facilities:[`Forward Torpedo Launch Tube`,`Reactant Ordnance Magazine`,`Torpedo Guidance Control`]},26:{name:`Upper Deuterium Slush Storage Tanks (Forward)`,purpose:`Matter Fuel Reactant Reserve`,facilities:[`Cryogenic Deuterium Tank Farm A`,`Magnetic Fuel Pumps`]},27:{name:`Primary Deuterium Storage & Fuel Transfer Manifold`,purpose:`Main Matter Reactant Conditioning`,facilities:[`Deuterium Slush Conditioning Matrix`,`Fuel Fill Ports (Port/Starboard)`]},28:{name:`Lower Deuterium Storage & Cryogenic Pumps`,purpose:`Reactant Feed to Upper Matter Injectors`,facilities:[`Cryo-Pump Station 4`,`Reactant Pre-Heater Conduit`]},29:{name:`Secondary Computer Core (Lower) & Metallurgy Workshop`,purpose:`Engineering Computation & Fabrication`,facilities:[`Stardrive Computer Core Level 2`,`Industrial Replicator & Metallurgy Lab`]},30:{name:`Upper Matter Injector Assembly & Warp Core Head`,purpose:`Deuterium Reactant Stream Injection`,facilities:[`Upper Matter Reactant Injector`,`Magnetic Constriction Segment 1`]},31:{name:`Warp Core Upper Shaft & Subspace Field Distortion Lab`,purpose:`Upper Reaction Column & Warp Field Tuning`,facilities:[`Warp Core Shaft Level 31`,`Subspace Field Harmonics Lab`]},32:{name:`Main Navigational Deflector Upper Emitter Stage`,purpose:`Long-Range Particle Sweeping & Subspace Sensors`,facilities:[`Deflector Upper Polaron Generator`,`Long-Range Sensor Array Processor`]},33:{name:`Main Deflector High-Power Graviton Polarity Generators`,purpose:`Subspace Field Beam Projection`,facilities:[`Graviton Polarity Source 1`,`Deflector Cooling Loop`]},34:{name:`Main Deflector Control Room & Dish Alignment Hydraulics`,purpose:`Direct Deflector Dish Steering & Calibration`,facilities:[`Deflector Control Station`,`Gimbal Torque Actuator Room`]},35:{name:`Main Engineering Upper Mezzanine & Catwalk Level`,purpose:`Upper Warp Core Constriction Monitoring`,facilities:[`Engineering Upper Catwalk`,`EPS Main Power Distribution Tap`]},36:{name:`Main Engineering, Dilithium Chamber & Master Systems Display`,section:`stardrive`,centerZ:55,radiusX:28,radiusZ:38,isHero:!0,confidence:`Tier A — Canonical Set`,purpose:`Primary Warp Propulsion Control & Dilithium Articulation`,facilities:[`Matter/Antimatter Reaction Chamber`,`Pool Table Operations Console`,`Master Systems Display (MSD)`,`Engineering Isolation Door`,`Jefferies Tube Access`]},37:{name:`Main Engineering Lower Pit & Plasma Transfer Conduits`,purpose:`Port/Starboard Warp Plasma Split to Nacelles`,facilities:[`Port/Starboard Plasma Conduit Split`,`Lower Magnetic Constrictor Array`]},38:{name:`Lower Antimatter Constrictor Column & Coolant Reserves`,purpose:`Antimatter Stream Containment & Cooling`,facilities:[`Antimatter Magnetic Segment`,`Primary Coolant Heat Exchanger`]},39:{name:`Antimatter Reactant Injector Assembly`,purpose:`Antihydrogen Stream Conditioning`,facilities:[`Lower Antimatter Injector Nozzle`,`Magnetic Quench Override Room`]},40:{name:`Antimatter Generator & Reactant Transfer Conduits`,purpose:`Emergency Antimatter Synthesis & Transfer`,facilities:[`Quantum Charge Reversal Generator`,`Magnetic Transfer Tunnel`]},41:{name:`Antimatter Storage Pods & Ejection Systems`,purpose:`Cryogenic Magnetic Antimatter Containment`,facilities:[`Antimatter Pod Array (30 Pods)`,`Emergency Pod Ejection Locks`]},42:{name:`Keel Antimatter Loading Port, Tractor Emitter & Warp Core Ejection Hatch`,purpose:`Ventral Keel Operations & Emergency Core Jettison`,facilities:[`Ventral Warp Core Ejection Hatch`,`Aft Keel Tractor Beam Emitter`,`Antimatter Resupply Coupling`]}}[e];if(n.isHero)return n;let r=e<=28,i=42+(e-17)*1.4;return{name:n.name,section:`stardrive`,centerZ:r?i:86,radiusX:r?14:42,radiusZ:r?22:68,isHero:!1,confidence:e<=34||e>=40?`Tier B — Technical Manual Plan`:`Tier B / C — Tech Manual & Extrapolation`,purpose:n.purpose,facilities:n.facilities}}var Mu=[`Docked`,`Preparing`,`Interface secured`,`Releasing`,`Separating`,`Independent flight`,`Rendezvous`,`Aligning`,`Docking`,`Reconnected`],Q=new class{constructor(){this.listeners=new Map,this.stardate=47457.1,this.resetToDefault(!1)}resetToDefault(e=!0){this.alertState=`normal`,this.cameraMode=`exterior_orbit`,this.cutawayMode=`off`,this.pipEnabled=!0,this.photoMode=!1,this.qualityLevel=`high`,this.crewMode=`populated`,this.playerSection=`saucer`,this.currentDeck=1,this.currentRoomId=`deck1_bridge`,this.currentRoomName=`Main Bridge (Deck 1)`,this.seatedStation=null,this.crawlMode=!1,this.carriedProp=null,this.separationState=`Docked`,this.separationTimer=0,this.separationTargetMode=`Docked`,this.boundaryClearanceVerified=!0,this.crossingRoutesLocked=!1,this.dockingClampsLatched=!0,this.saucerPose={x:0,y:0,z:0,pitch:0,yaw:0,roll:0,impulsePct:0,rcsActive:!1},this.stardrivePose={x:0,y:0,z:0,pitch:0,yaw:0,roll:0,impulsePct:0,warpFactor:0},this.commandAuthority={mainBridgeControls:`Integrated Starship (Saucer + Stardrive)`,battleBridgeControls:`Standby (Auxiliary Tactical Reserve)`,isSplit:!1},this.power={engines:100,shields:85,lifeSupport:100,sensors:90,auxiliary:75},this.warpCore={online:!0,warpFactor:2,intermixRatio:1,coilFrequency:47.4,coolantPressure:104.2,matterTempK:4200,saucerImpulseOnline:!0},this.environment={temperatureC:21.5,humidityPct:45,gravityG:1,pressureKPa:101.3,oxygenPct:20.9,forcefieldsActive:!0},this.lighting={masterBrightness:1,colorPreset:`warm_tng`,roomLights:{deck1_bridge:!0,deck1_ready_room:!0,deck1_observation:!0,deck4_shuttlebay:!0,deck8_quarters:!0,deck8_transporter:!0,deck8_battle_bridge:!0,deck10_ten_forward:!0,deck11_holodeck:!0,deck12_sickbay:!0,deck36_engineering:!0}},this.viewscreen={mainBridgeMode:`forward`,battleBridgeMode:`forward`,magnification:1,tacticalOverlay:!1},this.sensors={activeTargetId:`veridian_iv`,scanning:!1,scanProgress:100,waypointTargetRoom:null,targets:[{id:`veridian_iv`,name:`Planet Veridian IV (Class-M)`,bearing:`042 Mark 011`,distanceKm:18400,classification:`Class-M Terrestrial Biosphere`,telemetry:`Atmosphere: Nitrogen-Oxygen (78%/21%). Surface temp: 291 K. No artificial subspace emissions.`},{id:`starbase_74`,name:`Starbase 74 (Orbital Relay)`,bearing:`188 Mark 004`,distanceKm:420500,classification:`Federation O’Neill-Type Spacedock`,telemetry:`Subspace beacon active on Channel 47. Bynar maintenance teams logged on Stardate 41242.`},{id:`romulan_scout`,name:`D’deridex Sensor Echo (Long Range)`,bearing:`310 Mark 349`,distanceKm:129e4,classification:`Tetryon Gravimetric Anomaly`,telemetry:`Faint artificial quantum singularity signature detected near Neutral Zone perimeter.`},{id:`other_hull`,name:`Secondary / Primary Hull Section`,bearing:`000 Mark 000`,distanceKm:0,classification:`Galaxy-Class Hull Assembly`,telemetry:`Hull transponder locked. Docking telemetry and life-support beacon nominal.`}]},this.doors={};for(let e of[{id:`door_bridge_tl1`,name:`Bridge Turbolift 1 (Starboard)`,deck:1,section:`saucer`,type:`sliding`},{id:`door_bridge_tl2`,name:`Bridge Turbolift 2 (Port)`,deck:1,section:`saucer`,type:`sliding`},{id:`door_bridge_ready`,name:`Captain's Ready Room Door`,deck:1,section:`saucer`,type:`sliding`},{id:`door_bridge_obs_port`,name:`Observation Lounge Port Door`,deck:1,section:`saucer`,type:`sliding`},{id:`door_bridge_obs_stbd`,name:`Observation Lounge Starboard Door`,deck:1,section:`saucer`,type:`sliding`},{id:`door_deck4_corridor`,name:`Shuttlebay 1 Personnel Airlock`,deck:4,section:`saucer`,type:`airlock`},{id:`door_deck4_space_doors`,name:`Main Shuttlebay Exterior Clamshell Doors`,deck:4,section:`saucer`,type:`clamshell`,mode:`manual`},{id:`door_deck8_quarters`,name:`Senior Officer Quarters Door`,deck:8,section:`saucer`,type:`sliding`},{id:`door_deck8_transporter`,name:`Transporter Room 1 Door`,deck:8,section:`saucer`,type:`sliding`},{id:`door_sep_saucer`,name:`Deck 8 Saucer Separation Interlock Door`,deck:8,section:`saucer`,type:`interlock`},{id:`door_sep_stardrive`,name:`Deck 8 Stardrive Separation Interlock Door`,deck:8,section:`stardrive`,type:`interlock`},{id:`door_battle_bridge_tl`,name:`Battle Bridge Turbolift Door`,deck:8,section:`stardrive`,type:`sliding`},{id:`door_deck10_tenforward`,name:`Ten Forward Main Entrance Doors`,deck:10,section:`saucer`,type:`sliding`},{id:`door_deck11_holodeck`,name:`Holodeck 1 Entrance Arch Doors`,deck:11,section:`saucer`,type:`sliding`},{id:`door_deck11_sciencelab`,name:`Deck 11 Astrometrics & Science Lab Door`,deck:11,section:`saucer`,type:`sliding`},{id:`door_deck12_sickbay`,name:`Primary Sickbay Main Entrance`,deck:12,section:`saucer`,type:`sliding`},{id:`door_deck12_cmo`,name:`Chief Medical Officer Office Door`,deck:12,section:`saucer`,type:`sliding`},{id:`door_deck36_isolation`,name:`Main Engineering Emergency Isolation Door`,deck:36,section:`stardrive`,type:`rolldown`},{id:`door_deck36_jefferies`,name:`Engineering Jefferies Tube Access Hatch`,deck:36,section:`stardrive`,type:`hatch`},{id:`door_modular_room_a`,name:`Modular Deck Compartment A Door`,deck:2,section:`saucer`,type:`sliding`},{id:`door_modular_room_b`,name:`Modular Deck Compartment B Door`,deck:2,section:`saucer`,type:`sliding`}])this.doors[e.id]={...e,state:`closed`,mode:e.mode||`auto`,openAmount:0,holdTimer:0};this.turbolift={activeCabinSection:`saucer`,currentDeck:1,targetDeck:1,state:`idle`,expressMode:!1,progress:0,displayDeck:1,statusMessage:`TURBOLIFT READY — SELECT DESTINATION`},this.transporter={destinationRoomId:`deck36_engineering`,energizing:!1,phase:`idle`,progress:0,statusText:`TRANSPORTER PAD 1 STANDBY — TARGET COORDINATES READY`},this.shuttlebay={spaceDoorsOpen:!1,spaceDoorProgress:0,forcefieldActive:!0,shuttleState:`Docked in Bay 1`,shuttlePhaseTimer:0,shuttlePos:{x:0,y:0,z:0},shuttleYaw:0},this.holodeck={activeProgram:`tos_bridge`,archVisible:!0,safetyProtocols:!0,spawnedHologram:`enterprise_model`,klingonScore:0,klingonLevel:1,cluesFound:[],activeStarSystem:`earth`,spatialDisclosure:`Spatial Expansion Technique: Local 16m × 14m chamber uses omnidirectional forcefield treadmills and parallax horizon projection.`},this.sickbay={scanning:!1,scanProgress:0,subjectName:`Simulated Crewman (Standard Humanoid Reference)`,heartRate:68,bloodPressure:`118 / 74 mmHg`,neuralIndex:`99.4% Nominal`,coreTemp:`37.0 °C`,respiration:`14 breaths/min`,diagnosis:`All cardiopulmonary, neural, and metabolic readings within normal Starfleet parameters. (Simulation Only)`},this.logs=[{stardate:`47457.1`,source:`MAIN COMPUTER`,text:`USS Enterprise NCC-1701-D simulation initialized. Primary and Secondary hulls docked. All 42 decks nominal.`},{stardate:`47457.1`,source:`ENGINEERING`,text:`Matter/Antimatter reaction assembly online at Warp 2.0 equivalent output. Dilithium articulation frame aligned.`}],e&&(this.addLog(`SYSTEM RESET`,`All ship systems, hull couplings, doors, and interior coordinates restored to nominal docked state.`),this.emit(`reset`,this),this.emit(`change`,this))}on(e,t){return this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t),()=>this.listeners.get(e)?.delete(t)}emit(e,t=this){let n=this.listeners.get(e);if(n)for(let r of n)try{r(t)}catch(t){console.error(`ShipState listener error on ${e}:`,t)}}addLog(e,t){this.stardate=Number((this.stardate+.01).toFixed(2)),this.logs.unshift({stardate:this.stardate.toFixed(2),source:e,text:t}),this.logs.length>40&&this.logs.pop(),this.emit(`log`,this.logs[0])}setAlertState(e){this.alertState!==e&&(this.alertState=e,e===`red`?(this.lighting.colorPreset=`red_alert`,this.addLog(`TACTICAL`,`Condition Red Alert initiated. Deflector shields raised; boundary containment doors on alert.`)):e===`reduced`?(this.lighting.colorPreset=`night_shift`,this.lighting.masterBrightness=.45,this.addLog(`ENVIRONMENTAL`,`Shipwide lighting set to Night Watch / Reduced Illumination (45%).`)):e===`yellow`?(this.lighting.colorPreset=`warm_tng`,this.lighting.masterBrightness=.85,this.addLog(`TACTICAL`,`Condition Yellow Alert initiated. Defensive systems on standby.`)):(this.lighting.colorPreset=`warm_tng`,this.lighting.masterBrightness=1,this.addLog(`COMMAND`,`Condition Green — Normal shipboard operations resumed.`)),this.emit(`alertChanged`,this.alertState),this.emit(`change`,this))}isSeparated(){return this.separationState!==`Docked`&&this.separationState!==`Reconnected`}canTraverseCrossSection(){return this.separationState===`Docked`}initiateSeparationSequence(){return this.separationState===`Docked`&&(this.separationTargetMode=`Independent flight`,this.separationState=`Preparing`,this.separationTimer=0,this.addLog(`COMMAND`,`Saucer Separation sequence initiated. Announcing evacuation of Deck 8 separation boundary.`),this.emit(`separationChanged`,this.separationState),this.emit(`change`,this),!0)}initiateReconnectionSequence(){return this.separationState!==`Independent flight`&&this.separationState!==`Separating`?!1:(this.separationTargetMode=`Docked`,this.separationState=`Rendezvous`,this.separationTimer=0,this.addLog(`COMMAND`,`Hull Reconnection sequence initiated. Stardrive and Saucer sections beginning rendezvous maneuver.`),this.emit(`separationChanged`,this.separationState),this.emit(`change`,this),!0)}setWarpFactor(e){let t=Math.max(0,Math.min(9.6,Number(e)));this.warpCore.warpFactor=t,this.stardrivePose.warpFactor=t,this.addLog(`ENGINEERING`,`Warp field output adjusted to Warp ${t.toFixed(1)}.`),this.emit(`warpChanged`,this.warpCore),this.emit(`change`,this)}setPowerAllocation(e,t){e in this.power&&(this.power[e]=Math.max(10,Math.min(150,Number(t))),e===`lifeSupport`&&(this.lighting.masterBrightness=Math.max(.25,Math.min(1.2,this.power.lifeSupport/100))),this.addLog(`ENGINEERING`,`EPS Power allocation for ${e.toUpperCase()} set to ${this.power[e]}%.`),this.emit(`powerChanged`,this.power),this.emit(`change`,this))}setDoorMode(e,t){let n=this.doors[e];n&&((e===`door_sep_saucer`||e===`door_sep_stardrive`)&&this.isSeparated()&&t!==`locked`?this.addLog(`SECURITY INTERLOCK`,`Cannot unlock ${n.name} while hulls are separated (Vacuum hazard).`):(n.mode=t,t===`locked`?(n.state=`locked`,this.addLog(`ACCESS CONTROL`,`${n.name} set to LOCKED.`)):t===`open_manual`?(n.mode=`manual`,n.state=`opening`,this.addLog(`ACCESS CONTROL`,`${n.name} opened via manual command.`)):t===`close_manual`?(n.mode=`manual`,n.state=`closing`,this.addLog(`ACCESS CONTROL`,`${n.name} closed via manual command.`)):(n.mode=`auto`,n.state===`locked`&&(n.state=`closed`),this.addLog(`ACCESS CONTROL`,`${n.name} restored to AUTOMATIC approach mode.`)),this.emit(`doorChanged`,n),this.emit(`change`,this)))}unlockAllDoorsEmergency(){for(let[e,t]of Object.entries(this.doors))(e!==`door_sep_saucer`&&e!==`door_sep_stardrive`||!this.isSeparated())&&(t.mode=`auto`,t.state=`opening`);this.crawlMode=!1,this.seatedStation=null,this.addLog(`EMERGENCY OVERRIDE`,`All internal security locks released; doors opening for emergency egress.`),this.emit(`change`,this)}},$=new class{constructor(){this.ctx=null,this.muted=!1,this.ambienceVolume=.35,this.sfxVolume=.55,this.ambienceGain=null,this.sfxGain=null,this.warpPulseOsc=null,this.warpPulseGain=null,this.warpFilter=null,this.shipHumOsc=null,this.turboliftOsc=null,this.turboliftGain=null,this.alertTimer=0,this.initialized=!1}init(){if(this.initialized)this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume();else try{let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.ambienceGain=this.ctx.createGain(),this.ambienceGain.gain.value=this.muted?0:this.ambienceVolume,this.ambienceGain.connect(this.ctx.destination),this.sfxGain=this.ctx.createGain(),this.sfxGain.gain.value=this.muted?0:this.sfxVolume,this.sfxGain.connect(this.ctx.destination),this.shipHumOsc=this.ctx.createOscillator(),this.shipHumOsc.type=`sawtooth`,this.shipHumOsc.frequency.value=52;let t=this.ctx.createBiquadFilter();t.type=`lowpass`,t.frequency.value=115;let n=this.ctx.createGain();n.gain.value=.18,this.shipHumOsc.connect(t),t.connect(n),n.connect(this.ambienceGain),this.shipHumOsc.start(),this.warpPulseOsc=this.ctx.createOscillator(),this.warpPulseOsc.type=`triangle`,this.warpPulseOsc.frequency.value=68,this.warpFilter=this.ctx.createBiquadFilter(),this.warpFilter.type=`bandpass`,this.warpFilter.frequency.value=95,this.warpFilter.Q.value=2.5,this.warpPulseGain=this.ctx.createGain(),this.warpPulseGain.gain.value=.04,this.warpPulseOsc.connect(this.warpFilter),this.warpFilter.connect(this.warpPulseGain),this.warpPulseGain.connect(this.ambienceGain),this.warpPulseOsc.start(),this.initialized=!0}catch(e){console.warn(`Web Audio API initialization deferred:`,e)}}setMuted(e){this.muted=!!e,this.updateVolumes()}setAmbienceVolume(e){this.ambienceVolume=Math.max(0,Math.min(1,Number(e))),this.updateVolumes()}setSfxVolume(e){this.sfxVolume=Math.max(0,Math.min(1,Number(e))),this.updateVolumes()}updateVolumes(){if(!this.initialized||!this.ctx)return;let e=this.ctx.currentTime;this.ambienceGain.gain.setTargetAtTime(this.muted?0:this.ambienceVolume,e,.05),this.sfxGain.gain.setTargetAtTime(this.muted?0:this.sfxVolume,e,.05)}updateSpatialAmbience(e,t,n,r=100,i=!1){if(!this.initialized||!this.ctx||this.muted)return;let a=n.warpCore.online?Math.max(.5,n.warpCore.warpFactor):.1,o=1.2+a*.45,s=.5+.5*Math.sin(t*o*Math.PI*2),c=n.cameraMode===`interior_walk`?Math.max(.05,Math.min(1,18/Math.max(6,r))):.15,l=i?.45:1,u=(.04+.22*s)*c*l;this.warpPulseGain.gain.setTargetAtTime(u,this.ctx.currentTime,.04),this.warpFilter.frequency.setTargetAtTime(75+a*14+s*45,this.ctx.currentTime,.04),n.alertState===`red`?(this.alertTimer-=e,this.alertTimer<=0&&(this.playRedAlertKlaxon(),this.alertTimer=2.6)):this.alertTimer=0}playLCARSChirp(e=`confirm`){if(!this.initialized||!this.ctx||this.muted)return;let t=this.ctx.currentTime,n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type=`sine`,e===`confirm`?(n.frequency.setValueAtTime(1480,t),n.frequency.setValueAtTime(1975,t+.045),r.gain.setValueAtTime(.18,t),r.gain.exponentialRampToValueAtTime(.001,t+.13),n.connect(r),r.connect(this.sfxGain),n.start(t),n.stop(t+.14)):e===`error`?(n.type=`triangle`,n.frequency.setValueAtTime(340,t),n.frequency.setValueAtTime(270,t+.11),r.gain.setValueAtTime(.24,t),r.gain.exponentialRampToValueAtTime(.001,t+.26),n.connect(r),r.connect(this.sfxGain),n.start(t),n.stop(t+.27)):(n.frequency.setValueAtTime(1760,t),n.frequency.setValueAtTime(2217,t+.03),n.frequency.setValueAtTime(2637,t+.06),r.gain.setValueAtTime(.15,t),r.gain.exponentialRampToValueAtTime(.001,t+.14),n.connect(r),r.connect(this.sfxGain),n.start(t),n.stop(t+.15))}playDoorSound(e=`open`){if(this.init(),!this.ctx||this.muted)return;let t=this.ctx.currentTime;if(e===`obstructed`){this.playLCARSChirp(`error`);return}let n=this.ctx.sampleRate*.55,r=this.ctx.createBuffer(1,n,this.ctx.sampleRate),i=r.getChannelData(0);for(let e=0;e<n;e++)i[e]=(Math.random()*2-1)*Math.sin(e/n*Math.PI);let a=this.ctx.createBufferSource();a.buffer=r;let o=this.ctx.createBiquadFilter();o.type=`bandpass`,o.Q.value=3.2,e===`open`?(o.frequency.setValueAtTime(420,t),o.frequency.exponentialRampToValueAtTime(1150,t+.45)):(o.frequency.setValueAtTime(980,t),o.frequency.exponentialRampToValueAtTime(360,t+.45));let s=this.ctx.createGain();s.gain.setValueAtTime(.22,t),s.gain.exponentialRampToValueAtTime(.005,t+.54),a.connect(o),o.connect(s),s.connect(this.sfxGain),a.start(t)}playTurboliftHum(e){if(this.init(),!this.ctx||this.muted)return;let t=this.ctx.currentTime;if(e){if(this.turboliftOsc)return;this.turboliftOsc=this.ctx.createOscillator(),this.turboliftGain=this.ctx.createGain(),this.turboliftOsc.type=`sine`,this.turboliftOsc.frequency.setValueAtTime(110,t),this.turboliftOsc.frequency.linearRampToValueAtTime(195,t+1.2),this.turboliftGain.gain.setValueAtTime(.01,t),this.turboliftGain.gain.linearRampToValueAtTime(.16,t+.3),this.turboliftOsc.connect(this.turboliftGain),this.turboliftGain.connect(this.sfxGain),this.turboliftOsc.start(t)}else if(this.turboliftOsc){try{this.turboliftGain.gain.linearRampToValueAtTime(.001,t+.25),this.turboliftOsc.stop(t+.26)}catch{}this.turboliftOsc=null,this.turboliftGain=null,this.playLCARSChirp(`confirm`)}}playTransporterBeam(){if(this.init(),!this.ctx||this.muted)return;let e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5,1318.5].forEach((t,n)=>{let r=this.ctx.createOscillator(),i=this.ctx.createGain();r.type=`sine`,r.frequency.setValueAtTime(t*.92,e+n*.08),r.frequency.linearRampToValueAtTime(t*1.18,e+1.4),r.frequency.linearRampToValueAtTime(t,e+2.6),i.gain.setValueAtTime(.001,e),i.gain.linearRampToValueAtTime(.08,e+.4+n*.05),i.gain.exponentialRampToValueAtTime(.001,e+2.7),r.connect(i),i.connect(this.sfxGain),r.start(e),r.stop(e+2.75)})}playRedAlertKlaxon(){if(this.init(),!this.ctx||this.muted)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createOscillator(),r=this.ctx.createBiquadFilter(),i=this.ctx.createGain();t.type=`sawtooth`,n.type=`sawtooth`,t.frequency.setValueAtTime(440,e),t.frequency.exponentialRampToValueAtTime(780,e+.65),n.frequency.setValueAtTime(446,e),n.frequency.exponentialRampToValueAtTime(788,e+.65),r.type=`lowpass`,r.frequency.setValueAtTime(1400,e),i.gain.setValueAtTime(.001,e),i.gain.linearRampToValueAtTime(.14,e+.08),i.gain.setValueAtTime(.14,e+.55),i.gain.exponentialRampToValueAtTime(.001,e+.85),t.connect(r),n.connect(r),r.connect(i),i.connect(this.sfxGain),t.start(e),n.start(e),t.stop(e+.88),n.stop(e+.88)}playSeparationClampRelease(){if(this.init(),!this.ctx||this.muted)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`triangle`,t.frequency.setValueAtTime(145,e),t.frequency.exponentialRampToValueAtTime(48,e+.7),n.gain.setValueAtTime(.32,e),n.gain.exponentialRampToValueAtTime(.001,e+.75),t.connect(n),n.connect(this.sfxGain),t.start(e),t.stop(e+.78)}},Nu=new Map,Pu=[`#cad3dc`,`#cdd6df`,`#d0d8e1`,`#c8d1da`,`#ced7e0`,`#cbd4dd`,`#cfd8e0`,`#c9d2db`],Fu=[`#5a5a5a`,`#646464`,`#555555`,`#6b6b6b`,`#5e5e5e`,`#686868`,`#585858`,`#626262`];function Iu(e,t,n,r,i,a,o=.11){let s=n/i,c=r/a;e.fillStyle=`#ccd5de`,e.fillRect(0,0,n,r),t&&(t.fillStyle=`#606060`,t.fillRect(0,0,n,r));for(let n=0;n<a;n++)for(let r=0;r<i;r++){let i=n*31+r*53+(n>>1)*17+(r>>1)*29&7,a=n*19+r*41+3&7,o=r*s,l=n*c;e.fillStyle=Pu[i],e.fillRect(o,l,s,c),t&&(t.fillStyle=Fu[i],t.fillRect(o,l,s,c));let u=(n*7+r*13)%4;e.fillStyle=Pu[a],t&&(t.fillStyle=Fu[a]),u===0?(e.fillRect(o+s*.35,l,s*.65,c*.52),e.fillRect(o+s*.62,l+c*.52,s*.38,c*.48),t&&(t.fillRect(o+s*.35,l,s*.65,c*.52),t.fillRect(o+s*.62,l+c*.52,s*.38,c*.48))):u===1?(e.fillRect(o,l+c*.45,s*.72,c*.55),e.fillRect(o,l,s*.32,c*.45),t&&(t.fillRect(o,l+c*.45,s*.72,c*.55),t.fillRect(o,l,s*.32,c*.45))):u===2?(e.fillRect(o+s*.18,l+c*.22,s*.64,c*.56),t&&t.fillRect(o+s*.18,l+c*.22,s*.64,c*.56)):(e.fillRect(o,l+c*.28,s,c*.38),e.fillRect(o+s*.42,l,s*.28,c),t&&(t.fillRect(o,l+c*.28,s,c*.38),t.fillRect(o+s*.42,l,s*.28,c)))}if(o>0){e.fillStyle=`rgba(74, 88, 104, ${o})`;for(let t=0;t<a;t+=2)e.fillRect(0,t*c,n,1);for(let t=0;t<i;t+=2)e.fillRect(t*s,0,1,r)}}function Lu(e,t,n,r,i,a,o,s){for(let c=0;c<a;c++){let a=i+c*o,l=a+o+.4,u=(a+l)*.5,d=s+Math.floor(c*2.5);for(let i=0;i<d;i++){let o=i/d*Math.PI*2,s=(i+1.002)/d*Math.PI*2,f=(o+s)*.5,p=c*23+i*41+(c>>1)*13&7,m=c*17+i*29+5&7;e.fillStyle=Pu[p],e.beginPath(),e.arc(n,r,l,o,s),e.arc(n,r,a,s,o,!0),e.closePath(),e.fill(),t&&(t.fillStyle=Fu[p],t.beginPath(),t.arc(n,r,l,o,s),t.arc(n,r,a,s,o,!0),t.closePath(),t.fill()),(c+i)%2==0&&(e.fillStyle=Pu[m],e.beginPath(),e.arc(n,r,l,o,f),e.arc(n,r,u,f,o,!0),e.closePath(),e.fill(),t&&(t.fillStyle=Fu[m],t.beginPath(),t.arc(n,r,l,o,f),t.arc(n,r,u,f,o,!0),t.closePath(),t.fill()))}}}function Ru(){if(Nu.has(`hull_aztec_maps`))return Nu.get(`hull_aztec_maps`);let t=2048,n=document.createElement(`canvas`);n.width=t,n.height=t;let r=n.getContext(`2d`),i=document.createElement(`canvas`);i.width=t,i.height=t,Iu(r,i.getContext(`2d`),t,t,72,72,.09);let a=new mi(n);a.wrapS=e,a.wrapT=e,a.repeat.set(3,3),a.anisotropy=8,a.colorSpace=Le;let o=new mi(i);o.wrapS=e,o.wrapT=e,o.repeat.set(3,3),o.anisotropy=8;let s={map:a,roughnessMap:o};return Nu.set(`hull_aztec_maps`,s),s}function zu(){if(Nu.has(`saucer_dorsal_maps`))return Nu.get(`saucer_dorsal_maps`);let e=4096,t=e/2,n=e/2,r=document.createElement(`canvas`);r.width=e,r.height=e;let i=r.getContext(`2d`),a=document.createElement(`canvas`);a.width=e,a.height=e;let o=a.getContext(`2d`);o.fillStyle=`#000000`,o.fillRect(0,0,e,e);let s=document.createElement(`canvas`);s.width=e,s.height=e;let c=s.getContext(`2d`);c.fillStyle=`#606060`,c.fillRect(0,0,e,e),i.fillStyle=`#ccd5de`,i.fillRect(0,0,e,e),Lu(i,c,t,n,80,96,20.2,132);for(let e of[{rIn:1435,rOut:1505,color:`rgba(176, 189, 202, 0.38)`},{rIn:1860,rOut:1985,color:`rgba(172, 185, 198, 0.35)`}])i.beginPath(),i.arc(t,n,e.rOut,0,Math.PI*2),i.arc(t,n,e.rIn,0,Math.PI*2,!0),i.fillStyle=e.color,i.fill();i.strokeStyle=`rgba(72, 86, 102, 0.14)`,i.lineWidth=1.1;for(let e=0;e<144;e++){let r=e/144*Math.PI*2;i.beginPath(),i.moveTo(t+Math.cos(r)*185,n+Math.sin(r)*185),i.lineTo(t+Math.cos(r)*2010,n+Math.sin(r)*2010),i.stroke()}for(let e of[290,430,575,720,865,1010,1155,1300,1505,1650,1790,1905,1990])i.beginPath(),i.arc(t,n,e,0,Math.PI*2),i.strokeStyle=`rgba(64, 78, 95, 0.22)`,i.lineWidth=1.6,i.stroke();for(let e of[{r:355,count:100},{r:435,count:120},{r:525,count:144},{r:625,count:168},{r:725,count:192},{r:825,count:216},{r:935,count:240},{r:1050,count:268},{r:1165,count:296},{r:1545,count:348},{r:1620,count:372},{r:1700,count:396},{r:1775,count:420},{r:1845,count:444},{r:1912,count:468},{r:1962,count:492}])for(let r=0;r<e.count;r++){let a=r/e.count*Math.PI*2,s=(a*180/Math.PI+360)%360;if(s>68&&s<112&&e.r<1740||e.r>1135&&e.r<1475&&s>235&&s<305)continue;let c=(r*19+e.r*3)%13;if(c>(e.r>1520?8:6))continue;let l=c===0||c===5||c===7,u=c!==1&&c!==4,d=u?c%2==0?`#fff6dc`:`#daf1ff`:`#16202c`;i.save(),i.translate(t+Math.cos(a)*e.r,n+Math.sin(a)*e.r),i.rotate(a+Math.PI/2),i.fillStyle=`#141d28`,i.fillRect(-4.8,-5.4,3.2,10.8),i.fillRect(1.2,-5.4,3.2,10.8),l&&i.fillRect(7.2,-5.4,3.2,10.8),u&&(i.fillStyle=d,i.fillRect(-4.2,-4.5,2,9),i.fillRect(1.8,-4.5,2,9),l&&i.fillRect(7.8,-4.5,2,9)),i.restore(),u&&(o.save(),o.translate(t+Math.cos(a)*e.r,n+Math.sin(a)*e.r),o.rotate(a+Math.PI/2),o.fillStyle=d,o.fillRect(-4.2,-4.6,2.2,9.2),o.fillRect(1.8,-4.6,2.2,9.2),l&&o.fillRect(7.8,-4.6,2.2,9.2),o.restore())}for(let e of[-1,1]){let n=t+e*98;for(let e=0;e<3;e++)for(let t=0;t<6;t++){let r=n-58+t*20,a=3313+e*18;i.fillStyle=`#151e29`,i.fillRect(r,a,14,12),(e+t)%3==0&&(o.fillStyle=`rgba(215, 238, 255, 0.45)`,o.fillRect(r+2,a+2,10,8))}}for(let e of[{r:448,count:24},{r:588,count:32},{r:852,count:42},{r:1018,count:48},{r:1628,count:68},{r:1852,count:78}])for(let r=0;r<e.count;r++){let a=(r+.5)/e.count*Math.PI*2,o=(a*180/Math.PI+360)%360;if(o>66&&o<114||e.r>1145&&e.r<1470&&o>236&&o<304||(r*7+e.r)%3==0)continue;let s=(r+e.r)%2==0;i.save(),i.translate(t+Math.cos(a)*e.r,n+Math.sin(a)*e.r),i.rotate(a+Math.PI/2),i.fillStyle=`rgba(92, 106, 120, 0.55)`,i.fillRect(-11,-13,22,26),i.fillStyle=s?`#ddd8ca`:`#d4dde5`,i.fillRect(-9.5,-11.5,19,23),i.fillStyle=`#ad483c`,i.fillRect(-6.5,-8.5,13,2.4),i.restore()}i.beginPath(),i.arc(t,n,1485,Math.PI*.7,Math.PI*2.3),i.strokeStyle=`#333b45`,i.lineWidth=34,i.stroke(),i.beginPath(),i.arc(t,n,1485,Math.PI*.7,Math.PI*2.3),i.strokeStyle=`#58606b`,i.lineWidth=18,i.stroke();let l=[{a:-Math.PI/2-.075,r:1434,w:108,h:34},{a:-Math.PI/2+.075,r:1434,w:108,h:34},{a:Math.PI/2-.29,r:950,w:56,h:142},{a:Math.PI/2+.29,r:950,w:56,h:142},{a:Math.PI-.14,r:1955,w:68,h:30},{a:.14,r:1955,w:68,h:30}];for(let e of l)i.save(),i.translate(t+Math.cos(e.a)*e.r,n+Math.sin(e.a)*e.r),i.rotate(e.a+Math.PI/2),i.fillStyle=`#b49b58`,i.fillRect(-e.w/2,-e.h/2,e.w,e.h),i.strokeStyle=`#473e23`,i.lineWidth=3,i.strokeRect(-e.w/2,-e.h/2,e.w,e.h),i.restore();Ku(i,`NCC-1701-D`,t,n,1366,-Math.PI/2,.37,`900 108px "Eurostile", "Arial Black", "Helvetica Neue", sans-serif`,`#1c222b`,`#9e2a2b`,3.5),Ku(i,`U.S.S. ENTERPRISE`,t,n,1258,-Math.PI/2,.32,`800 50px "Eurostile", "Arial Black", "Helvetica Neue", sans-serif`,`#202731`,null,0);let u=new mi(r);u.anisotropy=8,u.colorSpace=Le;let d=new mi(a);d.anisotropy=8,d.colorSpace=Le;let f=new mi(s);f.anisotropy=8;let p={map:u,emissiveMap:d,roughnessMap:f};return Nu.set(`saucer_dorsal_maps`,p),p}function Bu(){if(Nu.has(`saucer_ventral_maps`))return Nu.get(`saucer_ventral_maps`);let e=4096,t=e/2,n=e/2,r=document.createElement(`canvas`);r.width=e,r.height=e;let i=r.getContext(`2d`),a=document.createElement(`canvas`);a.width=e,a.height=e;let o=a.getContext(`2d`);o.fillStyle=`#000000`,o.fillRect(0,0,e,e);let s=document.createElement(`canvas`);s.width=e,s.height=e;let c=s.getContext(`2d`);c.fillStyle=`#606060`,c.fillRect(0,0,e,e),i.fillStyle=`#cad3dc`,i.fillRect(0,0,e,e),Lu(i,c,t,n,80,96,20.2,132),i.beginPath(),i.arc(t,n,1790,0,Math.PI*2),i.arc(t,n,1720,0,Math.PI*2,!0),i.fillStyle=`rgba(84, 96, 110, 0.55)`,i.fill(),i.beginPath(),i.arc(t,n,1180,Math.PI*.82,Math.PI*2.18),i.strokeStyle=`#323a44`,i.lineWidth=34,i.stroke();for(let e of[{r:620,count:28},{r:1255,count:52},{r:1845,count:80}])for(let r=0;r<e.count;r++){let a=(r+.5)/e.count*Math.PI*2,o=(a*180/Math.PI+360)%360;o>52&&o<128||(r*5+e.r)%3!=0&&(i.save(),i.translate(t+Math.cos(a)*e.r,n+Math.sin(a)*e.r),i.rotate(a+Math.PI/2),i.fillStyle=`rgba(86, 100, 115, 0.55)`,i.fillRect(-12,-15,24,30),i.fillStyle=(r+e.r)%2==0?`#dfd9ca`:`#d5dee6`,i.fillRect(-10,-13,20,26),i.fillStyle=`#b44238`,i.fillRect(-7,-10,14,3),i.restore())}let l=[{a:-Math.PI/2-.56,r:930},{a:-Math.PI/2-.19,r:930},{a:-Math.PI/2+.19,r:930},{a:-Math.PI/2+.56,r:930},{a:-Math.PI/2-.36,r:580},{a:-Math.PI/2+.36,r:580}];for(let e of l){let r=t+Math.cos(e.a)*e.r,i=n+Math.sin(e.a)*e.r,a=o.createRadialGradient(r,i,10,r,i,210);a.addColorStop(0,`rgba(225, 242, 255, 0.48)`),a.addColorStop(.4,`rgba(186, 220, 255, 0.16)`),a.addColorStop(1,`rgba(0, 0, 0, 0)`),o.fillStyle=a,o.beginPath(),o.arc(r,i,210,0,Math.PI*2),o.fill()}for(let e of[{r:1665,count:368,w:3.1,h:11.2},{r:1610,count:352,w:3.1,h:11.2},{r:1555,count:336,w:3,h:10.8},{r:1500,count:320,w:3,h:10.8},{r:1445,count:304,w:2.9,h:10.4},{r:1390,count:288,w:2.8,h:10.2},{r:1335,count:272,w:2.8,h:9.8},{r:1105,count:228,w:2.7,h:9.5},{r:990,count:200,w:2.6,h:9},{r:810,count:168,w:2.6,h:9},{r:680,count:140,w:2.5,h:8.5},{r:515,count:112,w:2.4,h:8}])for(let r=0;r<e.count;r++){let a=r/e.count*Math.PI*2,s=(a*180/Math.PI+360)%360;if(s>52&&s<128)continue;let c=(r*23+e.r*7)%15;if(c>8)continue;let l=c!==3&&c!==7,u=l?c%3==0?`#ffffff`:c%2==0?`#fff4d2`:`#d8f1ff`:`#1d2a3a`,d=t+Math.cos(a)*e.r,f=n+Math.sin(a)*e.r;i.save(),i.translate(d,f),i.rotate(a+Math.PI/2),i.fillStyle=`#141e2b`,i.fillRect(-e.w/2-.7,-e.h/2-.7,e.w+1.4,e.h+1.4),i.fillStyle=l?`#fff4d4`:`#1d2a3a`,i.fillRect(-e.w/2,-e.h/2,e.w,e.h),i.restore(),l&&(o.save(),o.translate(d,f),o.rotate(a+Math.PI/2),o.fillStyle=u,o.fillRect(-e.w/2,-e.h/2,e.w,e.h),o.restore())}Gu(i,`NCC-1701-D`,t,n,880,-Math.PI/2,.42,`900 102px "Eurostile", "Arial Black", "Helvetica Neue", sans-serif`,`#1d242e`);let u=new mi(r);u.anisotropy=8,u.colorSpace=Le;let d=new mi(a);d.anisotropy=8,d.colorSpace=Le;let f=new mi(s);f.anisotropy=8;let p={map:u,emissiveMap:d,roughnessMap:f};return Nu.set(`saucer_ventral_maps`,p),p}function Vu(){if(Nu.has(`cobra_head_maps`))return Nu.get(`cobra_head_maps`);let e=2048,t=e/2,n=document.createElement(`canvas`);n.width=e,n.height=e;let r=n.getContext(`2d`),i=document.createElement(`canvas`);i.width=e,i.height=e;let a=i.getContext(`2d`);a.fillStyle=`#606060`,a.fillRect(0,0,e,e),r.fillStyle=`#ccd5de`,r.fillRect(0,0,e,e),Lu(r,a,t,1080,70,56,18,96),Ku(r,`NCC-1701-D`,t,1080,922,-Math.PI/2,.4,`900 72px "Eurostile", "Arial Black", "Helvetica Neue", sans-serif`,`#1c222b`,`#9e2a2b`,2.5),r.fillStyle=`#9e8867`,r.fillRect(936,298,176,188),r.strokeStyle=`#3f3628`,r.lineWidth=3.5,r.strokeRect(936,298,176,188);for(let e of[346,434]){r.fillStyle=`#8b96a2`,r.beginPath();for(let n=0;n<8;n++){let i=n/8*Math.PI*2+Math.PI/8,a=t+Math.cos(i)*26,o=e+Math.sin(i)*34;n===0?r.moveTo(a,o):r.lineTo(a,o)}r.closePath(),r.fill(),r.strokeStyle=`#2d333b`,r.lineWidth=3,r.stroke()}for(let e=308;e<=476;e+=16)r.fillStyle=`#4a4030`,r.fillRect(912,e,20,5),r.fillRect(1116,e,20,5);for(let e of[-1,1])for(let n of[0,1])r.save(),r.translate(t+e*(215+n*152),348+n*54),r.rotate(e*(.2+n*.14)),r.fillStyle=`#9aa6b2`,r.fillRect(-30,-58,60,116),r.strokeStyle=`#2e3742`,r.lineWidth=3.5,r.strokeRect(-30,-58,60,116),r.restore();r.beginPath(),r.arc(t,1180,710,-Math.PI*.82,-Math.PI*.18),r.strokeStyle=`#383028`,r.lineWidth=36,r.stroke(),r.fillStyle=`#9a8465`,r.beginPath(),r.moveTo(940,498),r.lineTo(1108,498),r.lineTo(1252,975),r.lineTo(796,975),r.closePath(),r.fill(),r.strokeStyle=`#3d3426`,r.lineWidth=3.5,r.stroke(),r.save(),r.font=`800 30px "Eurostile", "Arial Black", sans-serif`,r.fillStyle=`#1f252e`,r.textAlign=`center`,r.fillText(`ENTERPRISE`,t,855),r.restore();for(let e of[-1,1])r.save(),r.translate(t+e*440,1080),r.rotate(e*.18),r.fillStyle=`#a6936c`,r.fillRect(-145,-60,290,120),r.strokeStyle=`#3d3426`,r.lineWidth=3,r.strokeRect(-145,-60,290,120),r.restore();let o=new mi(n);o.anisotropy=8,o.colorSpace=Le;let s=new mi(i);s.anisotropy=8;let c={map:o,roughnessMap:s};return Nu.set(`cobra_head_maps`,c),c}function Hu(){if(Nu.has(`secondary_hull_maps`))return Nu.get(`secondary_hull_maps`);let e=4096,t=4096,n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`),i=document.createElement(`canvas`);i.width=e,i.height=t;let a=i.getContext(`2d`);a.fillStyle=`#000000`,a.fillRect(0,0,e,t);let o=document.createElement(`canvas`);o.width=e,o.height=t,Iu(r,o.getContext(`2d`),e,t,160,128,.1);let s=(n,i,o,s=!1,c=!0)=>{let l=n*e,u=(1-i)*t,d=c?`#fff6dd`:`#141d2a`;r.save(),r.translate(l,u),r.rotate(o),r.fillStyle=`#0f1722`,r.fillRect(-11,-10,7.5,20),r.fillRect(1.5,-10,7.5,20),s&&r.fillRect(14,-10,7.5,20),c&&(r.fillStyle=d,r.fillRect(-9.4,-8,4.4,16),r.fillRect(3.1,-8,4.4,16),s&&r.fillRect(15.6,-8,4.4,16)),r.restore(),c&&(a.save(),a.translate(l,u),a.rotate(o),a.fillStyle=d,a.fillRect(-9.4,-8,4.6,16.2),a.fillRect(3.1,-8,4.6,16.2),s&&a.fillRect(15.6,-8,4.6,16.2),a.restore())};for(let n of[-1,1]){for(let e=0;e<7;e++){let t=.88-e*.022;for(let r=0;r<6;r++){let i=.5+n*(.042+r*.024),a=(e+r)%4!=1;s(i,t,n*.14,r%2==0,a)}}for(let e=0;e<24;e++){let t=.9-e*.031;for(let r=0;r<8;r++){if((e*7+r*11)%5>2)continue;let i=.5+n*(.095+r*.044),a=(e*3+r)%4!=2,o=(e+r)%3==0;s(i,t,n*.24,o,a)}}for(let i=0;i<7;i++){let a=.74-i*.068,o=(.5+n*(.082+i%2*.058))*e,s=(1-a)*t;r.save(),r.translate(o,s),r.rotate(n*.22),r.fillStyle=`rgba(84, 98, 112, 0.55)`,r.fillRect(-20,-24,40,48),r.fillStyle=`#ded9ca`,r.fillRect(-17,-21,34,42),r.fillStyle=`#b44238`,r.fillRect(-12,-16,24,5),r.restore()}}let c=new mi(n);c.anisotropy=8,c.colorSpace=Le;let l=new mi(i);l.anisotropy=8,l.colorSpace=Le;let u=new mi(o);u.anisotropy=8;let d={map:c,emissiveMap:l,roughnessMap:u};return Nu.set(`secondary_hull_maps`,d),d}function Uu(){if(Nu.has(`shuttlebay_pennant`))return Nu.get(`shuttlebay_pennant`);let e=1024,t=document.createElement(`canvas`);t.width=e,t.height=512;let n=t.getContext(`2d`),r=document.createElement(`canvas`);r.width=e,r.height=512,Iu(n,r.getContext(`2d`),e,512,32,16,.12),n.strokeStyle=`rgba(72, 86, 102, 0.35)`,n.lineWidth=3,n.strokeRect(48,36,928,440),n.fillStyle=`#c8ae62`,n.fillRect(362,140,300,232),n.strokeStyle=`#524523`,n.lineWidth=4,n.strokeRect(362,140,300,232),n.fillStyle=`#9e2a2b`,n.fillRect(380,158,12,196),n.fillRect(632,158,12,196),n.save(),n.font=`900 54px "Eurostile", "Arial Black", "Helvetica Neue", sans-serif`,n.fillStyle=`#1f252e`,n.textAlign=`center`,n.textBaseline=`middle`,n.fillText(`1701-D`,512,256),n.restore();let i=new mi(t);return i.anisotropy=8,i.colorSpace=Le,Nu.set(`shuttlebay_pennant`,i),i}function Wu(){if(Nu.has(`planet_veridian`))return Nu.get(`planet_veridian`);let t=2048,n=1024,r=document.createElement(`canvas`);r.width=t,r.height=n;let i=r.getContext(`2d`),a=i.createLinearGradient(0,0,0,n);a.addColorStop(0,`#dcebfa`),a.addColorStop(.06,`#18375c`),a.addColorStop(.28,`#0c2542`),a.addColorStop(.5,`#091f38`),a.addColorStop(.72,`#0d2847`),a.addColorStop(.94,`#1b3b63`),a.addColorStop(1,`#e2effc`),i.fillStyle=a,i.fillRect(0,0,t,n);for(let e=0;e<14;e++){let n=(e*317+140)%1808+120,r=160+(e*193+85)%704;for(let a=0;a<11;a++){let o=e*11+a,s=(n+Math.sin(o*1.7)*115+Math.cos(a*2.3)*55+t)%t,c=Math.max(110,Math.min(914,r+Math.cos(o*1.3)*68)),l=32+o*23%95,u=22+o*17%62,d=i.createRadialGradient(s,c,l*.15,s,c,l*1.28);d.addColorStop(0,`rgba(26, 98, 124, 0.34)`),d.addColorStop(1,`rgba(9, 31, 56, 0)`),i.save(),i.translate(s,c),i.scale(1,u/l),i.fillStyle=d,i.beginPath(),i.arc(0,0,l*1.28,0,Math.PI*2),i.fill();let f=i.createRadialGradient(0,0,l*.08,0,0,l);f.addColorStop(0,o%4==0?`rgba(116, 126, 86, 0.62)`:`rgba(62, 104, 78, 0.56)`),f.addColorStop(.55,`rgba(46, 86, 72, 0.34)`),f.addColorStop(1,`rgba(16, 54, 78, 0)`),i.fillStyle=f,i.beginPath(),i.arc(0,0,l,0,Math.PI*2),i.fill(),i.restore()}}for(let e=0;e<130;e++){let n=(e*251+63)%t,r=75+(e*149+41)%874,a=55+e*37%165,o=16+e*13%38,s=Math.sin(e*.85)*.28,c=.05+e%6*.022,l=i.createRadialGradient(0,0,a*.05,0,0,a);l.addColorStop(0,`rgba(244, 250, 255, ${c*1.6})`),l.addColorStop(.5,`rgba(232, 244, 255, ${c})`),l.addColorStop(1,`rgba(220, 238, 255, 0)`),i.save(),i.translate(n,r),i.rotate(s),i.scale(1,o/a),i.fillStyle=l,i.beginPath(),i.arc(0,0,a,0,Math.PI*2),i.fill(),i.restore()}let o=new mi(r);return o.wrapS=e,o.anisotropy=8,o.colorSpace=Le,Nu.set(`planet_veridian`,o),o}function Gu(e,t,n,r,i,a,o,s,c){e.save(),e.font=s,e.fillStyle=c,e.textAlign=`center`,e.textBaseline=`middle`;let l=t.length,u=a-o/2,d=o/Math.max(1,l-1);for(let a=0;a<l;a++){let o=u+a*d;e.save(),e.translate(n+Math.cos(o)*i,r+Math.sin(o)*i),e.rotate(o+Math.PI/2),e.scale(1.12,.94),e.fillText(t[a],0,0),e.restore()}e.restore()}function Ku(e,t,n,r,i,a,o,s,c,l=null,u=0){e.save(),e.font=s,e.fillStyle=c,e.textAlign=`center`,e.textBaseline=`middle`;let d=t.length,f=a+o/2,p=o/Math.max(1,d-1);for(let a=0;a<d;a++){let o=f-a*p;e.save(),e.translate(n+Math.cos(o)*i,r+Math.sin(o)*i),e.rotate(o-Math.PI/2),e.scale(1.12,.94),l&&u>0&&(e.strokeStyle=l,e.lineWidth=u,e.strokeText(t[a],0,0)),e.fillText(t[a],0,0),e.restore()}e.restore()}function qu(n=12,r=220,i=`#ccd5de`){let a=`win_band_maps_${n}_${r}_${i}`;if(Nu.has(a))return Nu.get(a);let o=2048,s=document.createElement(`canvas`);s.width=o,s.height=512;let c=s.getContext(`2d`),l=document.createElement(`canvas`);l.width=o,l.height=512;let u=l.getContext(`2d`);u.fillStyle=`#000000`,u.fillRect(0,0,o,512);let d=document.createElement(`canvas`);d.width=o,d.height=512,Iu(c,d.getContext(`2d`),o,512,64,Math.max(8,n*2),.1);let f=o/r,p=512/n;for(let e=0;e<n;e++){c.fillStyle=`rgba(80, 96, 114, 0.14)`,c.fillRect(0,e*p,o,1);for(let t=0;t<r;t++){let n=Math.floor(t/6);if((e*31+n*17)%11>5)continue;let r=t%6;if(r===0||r===5)continue;let i=(e*43+t*29)%13;if(i>7)continue;let a=i!==2&&i!==6,o=Math.max(2,f*.34),s=Math.max(2.4,Math.min(7.5,p*.23)),l=t*f+(f-o)*.5,d=e*p+(p-s)*.5;c.fillStyle=a?`#fff6de`:`#243140`,c.fillRect(l,d,o,s),a&&(u.fillStyle=i%2==0?`#fff6de`:`#d8f0ff`,u.fillRect(l,d,o,s))}}let m=new mi(s);m.wrapS=e,m.wrapT=t,m.anisotropy=8,m.colorSpace=Le;let h=new mi(l);h.wrapS=e,h.wrapT=t,h.anisotropy=8,h.colorSpace=Le;let g=new mi(d);g.wrapS=e,g.wrapT=t,g.anisotropy=8;let _={map:m,emissiveMap:h,roughnessMap:g};return Nu.set(a,_),_}function Ju(){if(Nu.has(`deflector`))return Nu.get(`deflector`);let e=2048,t=1024,n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`);r.fillStyle=`#070b15`,r.fillRect(0,0,e,t);let i=e/2;r.save(),r.translate(i,512),r.scale(1.92,1);let a=r.createRadialGradient(0,0,24,0,0,495);a.addColorStop(0,`#1e3a8a`),a.addColorStop(.28,`#1d4ed8`),a.addColorStop(.48,`#172554`),a.addColorStop(.68,`#1e293b`),a.addColorStop(.82,`#c25927`),a.addColorStop(.93,`#7c2d12`),a.addColorStop(1,`#090d16`),r.fillStyle=a,r.beginPath(),r.arc(0,0,495,0,Math.PI*2),r.fill(),r.restore(),r.save(),r.translate(i,512);for(let e=0;e<96;e++){let t=e/96*Math.PI*2;r.beginPath(),r.moveTo(Math.cos(t)*260,Math.sin(t)*125),r.lineTo(Math.cos(t)*930,Math.sin(t)*475),r.strokeStyle=`rgba(10, 16, 30, 0.58)`,r.lineWidth=5,r.stroke()}r.restore(),r.save(),r.beginPath(),r.roundRect(674,372,700,280,130),r.fillStyle=`#111c3d`,r.fill(),r.restore(),r.save(),r.beginPath(),r.roundRect(679,377,690,270,125),r.strokeStyle=`#60c5ff`,r.lineWidth=34,r.shadowColor=`#38bdf8`,r.shadowBlur=48,r.stroke(),r.beginPath(),r.roundRect(679,377,690,270,125),r.strokeStyle=`#ecfeff`,r.lineWidth=14,r.stroke(),r.restore(),r.save(),r.beginPath(),r.roundRect(244,147,1560,730,355),r.strokeStyle=`rgba(125, 211, 252, 0.82)`,r.lineWidth=16,r.shadowColor=`#38bdf8`,r.shadowBlur=28,r.stroke(),r.restore();let o=new mi(n);return o.anisotropy=8,o.colorSpace=Le,Nu.set(`deflector`,o),o}function Yu(){if(Nu.has(`bussard_louver`))return Nu.get(`bussard_louver`);let e=document.createElement(`canvas`);e.width=1024,e.height=512;let t=e.getContext(`2d`),n=t.createRadialGradient(512,256,20,512,256,480);n.addColorStop(0,`#ffe8d6`),n.addColorStop(.24,`#ff4d38`),n.addColorStop(.58,`#e11d48`),n.addColorStop(.85,`#881337`),n.addColorStop(1,`#2c0512`),t.fillStyle=n,t.fillRect(0,0,1024,512);for(let e=0;e<512;e+=8)t.fillStyle=`rgba(32, 4, 10, 0.34)`,t.fillRect(0,e,1024,2.5);for(let e=0;e<1024;e+=32)t.fillStyle=`rgba(32, 4, 10, 0.22)`,t.fillRect(e,0,2,512);let r=new mi(e);return r.anisotropy=8,r.colorSpace=Le,Nu.set(`bussard_louver`,r),r}function Xu(){if(Nu.has(`holodeck_grid`))return Nu.get(`holodeck_grid`);let t=document.createElement(`canvas`);t.width=1024,t.height=1024;let n=t.getContext(`2d`);n.fillStyle=`#080a0f`,n.fillRect(0,0,1024,1024),n.strokeStyle=`#ffbe0b`,n.lineWidth=5,n.strokeRect(2.5,2.5,1019,1019),n.strokeStyle=`rgba(255, 190, 11, 0.48)`,n.lineWidth=2.5;for(let e=128;e<1024;e+=128)n.beginPath(),n.moveTo(e,0),n.lineTo(e,1024),n.stroke(),n.beginPath(),n.moveTo(0,e),n.lineTo(1024,e),n.stroke();let r=new mi(t);return r.wrapS=e,r.wrapT=e,r.anisotropy=8,r.colorSpace=Le,Nu.set(`holodeck_grid`,r),r}function Zu(e=`LCARS 47457`,t=`#f59e0b`,n=`#60a5fa`){let r=1024,i=document.createElement(`canvas`);i.width=r,i.height=512;let a=i.getContext(`2d`),o=new mi(i);o.anisotropy=8,o.colorSpace=Le;function s(i=`ONLINE`,s=`100%`,c=`normal`){let l=c===`red`?`#ef4444`:t,u=c===`red`?`#f87171`:n,d=c===`red`?`#fca5a5`:`#c084fc`,f=c===`red`?`#fb7185`:`#fdba74`;a.fillStyle=`#030508`,a.fillRect(0,0,r,512),a.fillStyle=l,a.beginPath(),a.roundRect(18,16,170,68,[42,0,0,0]),a.fill(),a.fillRect(18,76,56,188),a.fillStyle=`#030508`,a.beginPath(),a.roundRect(74,46,120,44,[22,0,0,0]),a.fill(),a.fillStyle=l,a.fillRect(194,16,220,26),a.fillStyle=f,a.fillRect(422,16,145,26),a.fillStyle=u,a.beginPath(),a.roundRect(575,16,428,26,[0,13,13,0]),a.fill(),a.fillStyle=d,a.fillRect(18,274,56,162),a.beginPath(),a.roundRect(18,428,170,66,[0,0,0,42]),a.fill(),a.fillStyle=`#030508`,a.beginPath(),a.roundRect(74,420,120,46,[0,0,0,22]),a.fill(),a.fillStyle=d,a.fillRect(194,468,180,26),a.fillStyle=l,a.beginPath(),a.roundRect(382,468,621,26,[0,13,13,0]),a.fill(),a.fillStyle=`#05070b`,a.font=`bold 15px "Eurostile", "Arial Narrow", sans-serif`,a.fillText(`47-01`,24,108),a.fillText(`88-14`,24,245),a.fillText(`09-62`,24,304),a.fillStyle=`#fde68a`,a.font=`bold 30px "Eurostile", "Helvetica Neue", "Arial Narrow", sans-serif`,a.fillText(e.toUpperCase(),96,86),[{code:`47-920`,col:u},{code:`12-408`,col:f},{code:`63-115`,col:l},{code:`04-882`,col:d},{code:`91-307`,col:u}].forEach((e,t)=>{let n=112+t*62;a.fillStyle=e.col,a.beginPath(),a.roundRect(96,n,128,46,23),a.fill(),a.fillStyle=`#05070b`,a.font=`bold 18px "Arial Narrow", sans-serif`,a.textAlign=`right`,a.fillText(e.code,210,n+30)}),a.textAlign=`left`,[.86,.94,.71,.89,.62,.79,.91,.67].forEach((e,t)=>{let n=114+t*38;a.fillStyle=`rgba(96, 165, 250, 0.16)`,a.beginPath(),a.roundRect(246,n,320,22,11),a.fill(),a.fillStyle=t%3==0?u:t%2==0?f:`#93c5fd`,a.beginPath(),a.roundRect(246,n,320*e,22,11),a.fill(),a.fillStyle=`#e2e8f0`,a.font=`bold 18px monospace`,a.fillText(`${4102+t*137}.${t*3%9}`,580,n+18)}),a.strokeStyle=u,a.lineWidth=2.5,a.beginPath(),a.roundRect(684,68,312,376,18),a.stroke(),a.strokeStyle=`rgba(96, 165, 250, 0.35)`,a.lineWidth=1.8,a.beginPath(),a.ellipse(840,168,112,48,0,0,Math.PI*2),a.stroke(),a.beginPath(),a.ellipse(840,168,64,28,0,0,Math.PI*2),a.stroke(),a.strokeStyle=l,a.lineWidth=3,a.beginPath();for(let e=704;e<=976;e+=6){let t=(e-704)/272,n=168+Math.sin(t*Math.PI*6)*26*Math.sin(t*Math.PI);e===704?a.moveTo(e,n):a.lineTo(e,n)}a.stroke(),a.fillStyle=`#f8fafc`,a.font=`bold 24px "Eurostile", "Helvetica Neue", sans-serif`,a.fillText(i,706,282),a.fillStyle=l,a.font=`bold 46px monospace`,a.fillText(s,706,344),a.fillStyle=`#94a3b8`,a.font=`bold 17px "Helvetica Neue", sans-serif`,a.fillText(`LCARS INTERACTIVE [CLICK / E]`,706,412),o.needsUpdate=!0}return s(),{texture:o,render:s}}function Qu(){let e=2048,t=1024,n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`),i=new mi(n);i.anisotropy=8,i.colorSpace=Le;function a(n){let a=n?.alertState===`red`,o=n?.isSeparated?.()||!1,s=a?`#dc2626`:`#f59e0b`,c=a?`#f87171`:`#38bdf8`;r.fillStyle=`#04070e`,r.fillRect(0,0,e,t),r.fillStyle=s,r.beginPath(),r.roundRect(28,28,1992,44,22),r.fill(),r.beginPath(),r.roundRect(28,952,1992,44,22),r.fill(),r.fillRect(28,50,72,924),r.fillRect(1948,50,72,924),r.fillStyle=`#04070e`,r.fillRect(480,20,1088,60),r.fillStyle=`#fde68a`,r.font=`bold 38px "Eurostile", "Arial Narrow", sans-serif`,r.textAlign=`center`,r.fillText(`MASTER SYSTEMS DISPLAY — USS ENTERPRISE NCC-1701-D (42 DECKS)`,e/2,62),r.save();let l=o?-115:0;r.save(),r.translate(l,0),r.strokeStyle=c,r.lineWidth=4.5,r.fillStyle=`rgba(56, 189, 248, 0.14)`,r.beginPath(),r.moveTo(260,415),r.bezierCurveTo(440,320,680,315,880,355),r.lineTo(1015,405),r.lineTo(955,445),r.bezierCurveTo(740,495,440,485,260,415),r.closePath(),r.fill(),r.stroke(),r.beginPath(),r.ellipse(635,322,58,16,0,Math.PI,Math.PI*2),r.fill(),r.stroke(),r.strokeStyle=`rgba(148, 163, 184, 0.36)`,r.lineWidth=1.6;for(let e=1;e<=16;e++){let t=334+e*8.6,n=Math.sin(e/17*Math.PI)*340;r.beginPath(),r.moveTo(625-n,t),r.lineTo(625+n,t),r.stroke()}r.restore(),r.strokeStyle=`#60a5fa`,r.lineWidth=4.5,r.fillStyle=`rgba(96, 165, 250, 0.14)`,r.beginPath(),r.moveTo(915,442),r.lineTo(1035,418),r.quadraticCurveTo(1065,495,1115,555),r.lineTo(1560,585),r.lineTo(1595,625),r.quadraticCurveTo(1320,695,985,695),r.quadraticCurveTo(905,680,888,615),r.quadraticCurveTo(960,540,915,442),r.closePath(),r.fill(),r.stroke(),r.strokeStyle=`rgba(148, 163, 184, 0.32)`,r.lineWidth=1.5;for(let e=455;e<=680;e+=11)r.beginPath(),r.moveTo(e<560?955:920,e),r.lineTo(e<560?1075:1540,e),r.stroke();let u=n?.warpCore?.warpFactor??2;r.fillStyle=u>0?`#67e8f9`:`#64748b`,r.fillRect(1135,552,28,138),r.fillStyle=`#f59e0b`,r.fillRect(1125,612,48,22),r.fillStyle=u>0?`#38bdf8`:`#475569`,r.fillRect(1163,620,315,12),r.fillStyle=`#38bdf8`,r.beginPath(),r.ellipse(902,622,16,34,.22,0,Math.PI*2),r.fill(),r.strokeStyle=`#818cf8`,r.lineWidth=4,r.fillStyle=`rgba(129, 140, 248, 0.22)`,r.beginPath(),r.roundRect(1155,456,635,68,30),r.fill(),r.stroke(),r.fillStyle=u>0?`#60a5fa`:`#334155`,r.beginPath(),r.roundRect(1255,476,485,24,10),r.fill(),r.fillStyle=`#e11d48`,r.beginPath(),r.ellipse(1192,490,36,26,0,Math.PI*.5,Math.PI*1.5),r.fill(),r.fillStyle=`#d97706`,r.fillRect(1218,458,16,64),r.restore(),r.textAlign=`left`,r.font=`bold 28px "Eurostile", monospace`,r.fillStyle=`#fde68a`,r.fillText(`WARP OUTPUT: WARP ${u.toFixed(1)}`,155,865),r.fillStyle=`#7dd3fc`,r.fillText(`HULL CONFIG: ${n?.separationState?.toUpperCase()||`DOCKED`}`,695,865),r.fillStyle=`#fdba74`,r.fillText(`EPS POWER: ENGINES ${n?.power?.engines??100}%  |  SHIELDS ${n?.power?.shields??85}%`,1255,865),i.needsUpdate=!0}return a(null),{texture:i,render:a}}var $u=class{constructor(e,t,n){this.scene=e,this.saucerAssembly=t,this.stardriveAssembly=n,this.saucerExteriorGroup=new U,this.saucerExteriorGroup.name=`SaucerExteriorHull`,this.saucerAssembly.add(this.saucerExteriorGroup),this.stardriveExteriorGroup=new U,this.stardriveExteriorGroup.name=`StardriveExteriorHull`,this.stardriveAssembly.add(this.stardriveExteriorGroup),this.cutawayTargets=[],this.bussardRotors=[],this.navStrobes=[],this.warpGrilleMaterials=[],this.saucerImpulseMaterials=[],this.stardriveImpulseMaterials=[],this.dockingLightMaterials=[],this.shuttlebayPortDoor=null,this.shuttlebayStbdDoor=null,this.exteriorShuttlecraft=null,this.starfield=null,this.planetGroup=null,this.buildMaterials(),this.buildSpaceEnvironment(),this.buildSaucerExterior(),this.buildStardriveExterior()}buildMaterials(){let e=Ru(),t=zu(),n=Bu(),r=Vu(),i=Hu(),a=qu(2,520,`#ccd5de`),o=qu(14,240,`#ccd5de`),s=qu(14,280,`#cad3dc`);this.hullMainMat=new X({map:e.map,roughnessMap:e.roughnessMap,color:16777215,roughness:.42,metalness:.24,side:0}),this.hullDarkAccentMat=new X({map:e.map,roughnessMap:e.roughnessMap,color:11977422,roughness:.46,metalness:.28,side:2}),this.saucerDorsalMat=new X({map:t.map,emissiveMap:t.emissiveMap,emissive:new W(16774356),emissiveIntensity:1.75,roughnessMap:t.roughnessMap,roughness:.44,metalness:.24,side:0}),this.saucerVentralMat=new X({map:n.map,emissiveMap:n.emissiveMap,emissive:new W(16774358),emissiveIntensity:1.95,roughnessMap:n.roughnessMap,roughness:.42,metalness:.24,side:0}),this.cobraHeadMat=new X({map:r.map,roughnessMap:r.roughnessMap,roughness:.42,metalness:.24,side:0}),this.secondaryHullMat=new X({map:i.map,emissiveMap:i.emissiveMap,emissive:new W(16774356),emissiveIntensity:1.85,roughnessMap:i.roughnessMap,roughness:.42,metalness:.24,side:0}),this.shuttlebayPennantMat=new X({map:Uu(),roughnessMap:e.roughnessMap,roughness:.42,metalness:.24}),this.rimWindowMat=new X({map:a.map,emissiveMap:a.emissiveMap,roughnessMap:a.roughnessMap,emissive:new W(16774095),emissiveIntensity:1.85,roughness:.38,metalness:.24,side:0}),this.neckWindowMat=new X({map:o.map,emissiveMap:o.emissiveMap,roughnessMap:o.roughnessMap,emissive:new W(16774356),emissiveIntensity:1.8,roughness:.4,metalness:.24,side:0}),this.windowBandMat=new X({map:s.map,emissiveMap:s.emissiveMap,roughnessMap:s.roughnessMap,emissive:new W(16773836),emissiveIntensity:1.8,roughness:.4,metalness:.24,side:0}),this.phaserStripMat=new X({color:4607318,roughness:.44,metalness:.58,side:2}),this.phaserEmitterMat=new X({color:7036751,roughness:.36,metalness:.64,side:2}),this.lifeboatMat=new X({color:14933712,roughness:.4,metalness:.18}),this.lifeboatTrimMat=new X({color:12073778,roughness:.42,metalness:.2}),this.rcsGoldMat=new X({color:11901783,roughness:.4,metalness:.32}),this.dockingMetalMat=new X({color:9345960,roughness:.42,metalness:.48}),this.windowGlassMat=new no({color:12904703,emissive:new W(16769704),emissiveIntensity:.48,transparent:!0,opacity:.34,roughness:.08,metalness:.1,side:2,depthWrite:!1})}buildSmoothPhaserRibbon(e,t,n,r,i,a=1){let o=new U,s=(e,r,i,o)=>{let s=[],c=[];for(let o=0;o<=n;o++){let l=o/n,u=t(l),d=Math.min(1,l+.002),f=Math.max(0,l-.002),p=t(d),m=t(f),h=new H().subVectors(p.pos,m.pos).normalize(),g=(u.normal?u.normal.clone():new H(0,a,0)).normalize(),_=new H().crossVectors(h,g).normalize(),v=new H().copy(u.pos).addScaledVector(_,-e).addScaledVector(g,r),y=new H().copy(u.pos).addScaledVector(_,-e*.72).addScaledVector(g,r+i),b=new H().copy(u.pos).addScaledVector(_,e*.72).addScaledVector(g,r+i),x=new H().copy(u.pos).addScaledVector(_,e).addScaledVector(g,r);if(s.push(v.x,v.y,v.z,y.x,y.y,y.z,b.x,b.y,b.z,x.x,x.y,x.z),o<n){let e=o*4,t=(o+1)*4;for(let n=0;n<3;n++)a>0?(c.push(e+n,e+n+1,t+n),c.push(e+n+1,t+n+1,t+n)):(c.push(e+n,t+n,e+n+1),c.push(e+n+1,t+n,t+n+1))}}let l=new Or;return l.setAttribute(`position`,new G(s,3)),l.setIndex(c),l.computeVertexNormals(),new q(l,o)};return o.add(s(r,.02,i,this.phaserStripMat)),o.add(s(r*.56,i*.75,i*.42,this.phaserEmitterMat)),e.add(o),o}buildSpaceEnvironment(){let e=new Uo(16775662,2.65);e.position.set(760,490,-820),this.scene.add(e);let t=new Uo(14412542,1.38);t.position.set(-420,-520,-680),this.scene.add(t);let n=new Uo(6333946,1.25);n.position.set(-850,260,750),this.scene.add(n);let r=new Wo(3819870,.88);this.scene.add(r);let i=5600,a=new Float32Array(i*3),o=new Float32Array(i*3);for(let e=0;e<i;e++){let t=5200+Math.random()*9800,n=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1);a[e*3]=t*Math.sin(r)*Math.cos(n),a[e*3+1]=t*Math.sin(r)*Math.sin(n),a[e*3+2]=t*Math.cos(r);let i=Math.random();i<.22?(o[e*3]=.76,o[e*3+1]=.88,o[e*3+2]=1):i<.36?(o[e*3]=1,o[e*3+1]=.91,o[e*3+2]=.74):(o[e*3]=.96,o[e*3+1]=.97,o[e*3+2]=1)}let s=new Or;s.setAttribute(`position`,new mr(a,3)),s.setAttribute(`color`,new mr(o,3));let c=new oi({size:12.5,vertexColors:!0,transparent:!0,opacity:.92,sizeAttenuation:!0});this.starfield=new di(s,c),this.scene.add(this.starfield),this.basePlanetSurface=Wu(),this.planetGroup=new U,this.planetGroup.position.set(-2950,-1380,3850),this.planetCanvas=document.createElement(`canvas`),this.planetCanvas.width=2048,this.planetCanvas.height=1024,this.planetCtx=this.planetCanvas.getContext(`2d`),this.planetTex=new mi(this.planetCanvas),this.planetTex.anisotropy=8,this.planetTex.colorSpace=Le;let l=new q(new Wa(1180,96,64),new X({map:this.planetTex,roughness:.84,metalness:.02}));l.rotation.y=-.52,l.rotation.z=.16,this.planetGroup.add(l),this.atmoMat=new K({color:12248829,transparent:!0,opacity:.18,side:1});let u=new q(new Wa(1204,96,64),this.atmoMat);this.planetGroup.add(u),this.scene.add(this.planetGroup);let d=new U;d.position.set(220,75,-1950);let f=new q(new Wa(210,64,48),new X({map:this.planetTex,roughness:.72}));d.add(f);let p=new q(new Wa(216,64,48),new K({color:12248829,transparent:!0,opacity:.18,side:1}));d.add(p),this.scene.add(d),this.setStarSystemTheme(`earth`)}setStarSystemTheme(e=`earth`){if(!this.planetCtx||!this.planetTex)return;let t={earth:{tint:`rgba(56, 189, 248, 0.08)`,atmo:12248829},vulcan:{tint:`rgba(234, 88, 12, 0.42)`,atmo:16628340},qonos:{tint:`rgba(22, 163, 74, 0.36)`,atmo:8843180},romulus:{tint:`rgba(20, 184, 166, 0.36)`,atmo:6220500},bajor:{tint:`rgba(168, 85, 247, 0.32)`,atmo:14202110}},n=t[e]||t.earth;this.basePlanetSurface?.image&&this.planetCtx.drawImage(this.basePlanetSurface.image,0,0,2048,1024),this.planetCtx.fillStyle=n.tint,this.planetCtx.fillRect(0,0,2048,1024);let r=this.planetCtx.createLinearGradient(0,0,2048,320);r.addColorStop(0,`rgba(255, 255, 255, 0.10)`),r.addColorStop(.55,`rgba(0, 0, 0, 0.0)`),r.addColorStop(.82,`rgba(2, 5, 12, 0.72)`),r.addColorStop(1,`rgba(1, 3, 8, 0.94)`),this.planetCtx.fillStyle=r,this.planetCtx.fillRect(0,0,2048,1024),this.planetTex.needsUpdate=!0,this.atmoMat&&this.atmoMat.color.setHex(n.atmo)}evaluateSaucerPoint(e,t,n=!1){let r=231.86,i=Math.cos(t),a=Math.sin(t),o=i*r*e,s=a*182.25*e;if(a>.02){let t=Math.abs(i*r);if(t<102){let n=27.5*(.5+.5*Math.cos(Math.PI*t/102))**1.32*a**1.45*e**1.35;s+=n}}let c;if(n){let t=Math.max(0,1-e**1.78)**.68,n=e<.88?-.85*Math.min(1,(.88-e)/.035):0;c=35.95-t*21.8+n;let r=-139+s;if(r>-26&&Math.abs(o)<66){let e=Math.min(1,(r+26)/34),t=Math.cos(Math.PI*.5*Math.abs(o)/66),n=e**1.15*Math.max(0,t)**1.2;c=c*(1-n)+34.95*n}}else{let t=Math.max(0,1-e**1.92)**.58,n=e<.93?.55*Math.min(1,(.93-e)/.03):0,l=e<.735?.65*Math.min(1,(.735-e)/.03):0;if(c=38.05+t*24.5+n+l,a>.2&&e>.55){let t=Math.abs(i*r);if(t<72){let n=Math.min(1,(a-.2)/.75)*(1-t/72)*((e-.55)/.45);c=c*(1-n*.42)+n*.42*40.2}}let u=-139+s;if(u>-65&&u<-40&&Math.abs(o)<13.5){let e=.5+.5*Math.cos(Math.PI*Math.abs(o)/13.5),t=Math.sin((u+65)/25*Math.PI);c-=1.35*e*t}}return new H(o,c,s)}buildParametricSaucerSurface(e,t,n){let r=182.25,i=[],a=[],o=[];for(let s=0;s<=e;s++){let c=(s/e)**.88;for(let l=0;l<=t;l++){let u=l/t*Math.PI*2,d=this.evaluateSaucerPoint(c,u,n);i.push(d.x,d.y,d.z);let f=.5+(n?-d.x:d.x)/(231.86*2.02),p=.5-Math.sin(u)*r*c/(r*2.02);if(a.push(f,p),s<e&&l<t){let e=s*(t+1)+l,r=e+1,i=(s+1)*(t+1)+l,a=i+1;n?o.push(e,i,r,r,i,a):o.push(e,r,i,r,a,i)}}}let s=new Or;return s.setAttribute(`position`,new G(i,3)),s.setAttribute(`uv`,new G(a,2)),s.setIndex(o),s.computeVertexNormals(),s}buildParametricSaucerRim(e){let t=[{rMul:.992,dy:-1.08,v:0},{rMul:1,dy:-.44,v:.28},{rMul:1,dy:.44,v:.72},{rMul:.992,dy:1.08,v:1}],n=[],r=[],i=[];for(let a=0;a<t.length;a++){let o=t[a];for(let s=0;s<=e;s++){let c=s/e*Math.PI*2,l=this.evaluateSaucerPoint(o.rMul,c,!1),u=this.evaluateSaucerPoint(o.rMul,c,!0),d=(l.y+u.y)*.5;if(n.push(l.x,d+o.dy,l.z),r.push(s/e*6,o.v),a<t.length-1&&s<e){let t=a*(e+1)+s,n=t+1,r=(a+1)*(e+1)+s,o=r+1;i.push(t,r,n,n,r,o)}}}let a=new Or;return a.setAttribute(`position`,new G(n,3)),a.setAttribute(`uv`,new G(r,2)),a.setIndex(i),a.computeVertexNormals(),a}buildSaucerExterior(){let e=-139,t=231.86,n=new U;n.position.set(0,0,e),this.saucerExteriorGroup.add(n);let r=new q(this.buildParametricSaucerSurface(48,256,!1),this.saucerDorsalMat);n.add(r),this.cutawayTargets.push(r);let i=new U;n.add(i),this.cutawayTargets.push(i),this.buildSmoothPhaserRibbon(i,e=>{let t=(.7+e*1.6)*Math.PI;return{pos:this.evaluateSaucerPoint(.7324,t,!1),normal:new H(Math.cos(t)*.14,1,Math.sin(t)*.14)}},192,1.85,.42,1);for(let e of[[.34,.45],[.55,.66]])this.buildSmoothPhaserRibbon(i,t=>{let n=(e[0]+t*(e[1]-e[0]))*Math.PI;return{pos:this.evaluateSaucerPoint(.858,n,!1),normal:new H(0,1,0)}},32,1.55,.38,1);let a=[{rFrac:1434/2027.7,a:1.5*Math.PI-.075,w:11.8,d:3.8},{rFrac:1434/2027.7,a:1.5*Math.PI+.075,w:11.8,d:3.8},{rFrac:950/2027.7,a:.5*Math.PI-.29,w:6.2,d:13.8},{rFrac:950/2027.7,a:.5*Math.PI+.29,w:6.2,d:13.8},{rFrac:1955/2027.7,a:.14,w:8.4,d:3.4},{rFrac:1955/2027.7,a:Math.PI-.14,w:8.4,d:3.4}];for(let e of a){let n=this.evaluateSaucerPoint(e.rFrac,e.a,!1),r=-Math.sin(e.a)*t,a=Math.cos(e.a)*182.25,o=new q(new J(e.w,.24,e.d),this.rcsGoldMat);o.position.set(n.x,n.y+.08,n.z),o.rotation.y=Math.atan2(-a,r),i.add(o)}let o=new q(this.buildParametricSaucerRim(256),this.rimWindowMat);n.add(o);let s=new U;s.position.set(0,37,-182.25),n.add(s);let c=this.windowGlassMat.clone();c.side=0;for(let e=0;e<5;e++){let t=(e-2)/2*(.24/2),n=Math.sin(t)*17.5,r=(1-Math.cos(t))*5.8,i=new q(new Ha(3.2,1.85),c);if(i.position.set(n,.05,r-.25),i.rotation.y=Math.PI-t,i.rotation.x=-.22,s.add(i),e<4){let e=new q(new Ha(.28,1.95),this.hullMainMat);e.position.set(n+1.68,.05,r-.26),e.rotation.y=Math.PI-t,e.rotation.x=-.22,s.add(e)}}let l=new q(this.buildParametricSaucerSurface(48,256,!0),this.saucerVentralMat);n.add(l);let u=new U;n.add(u),this.buildSmoothPhaserRibbon(u,e=>{let t=(1.08+e*.84)*Math.PI;return{pos:this.evaluateSaucerPoint(.582,t,!0),normal:new H(0,-1,0)}},128,1.65,.38,-1);let d=this.evaluateSaucerPoint(0,0,!0),f=new U;f.position.set(0,d.y+.3,-4),n.add(f);let p=new Ga(18.5,1.25,24,72);p.rotateX(Math.PI/2),p.scale(1.12,1,1.28),f.add(new q(p,this.hullDarkAccentMat));let m=new Wa(13.5,64,24,0,Math.PI*2,Math.PI*.5,Math.PI*.5);m.scale(1.1,.18,1.28);let h=new q(m,this.hullMainMat);h.position.y=.2,f.add(h);let g=Du(1,`saucer`),_=new U;_.position.set(0,g,e),this.saucerExteriorGroup.add(_);let v=new Y(19.5,34,5.2,96,1,!0);v.scale(1.04,1,1.58);let y=new q(v,this.hullMainMat);y.position.set(0,-1.8,9.5),_.add(y),this.cutawayTargets.push(y);let b=new Y(13.8,19.8,4.4,96,1,!0);b.scale(1.02,1,1.38);let x=new q(b,this.hullMainMat);x.position.set(0,2.2,2),_.add(x),this.cutawayTargets.push(x);let S=new Wa(13.8,96,32,0,Math.PI*2,0,Math.PI*.48);S.scale(1.02,.14,1.38);let C=new q(S,this.hullMainMat);C.position.set(0,4.65,2),_.add(C),this.cutawayTargets.push(C);let w=new Wa(5.6,64,20,0,Math.PI*2,0,Math.PI*.5);w.scale(.95,.22,1.25);let T=new q(w,this.hullDarkAccentMat);T.position.set(0,5.55,.2),_.add(T),this.cutawayTargets.push(T),[-21.5,21.5].forEach(e=>{let t=new q(new J(2.2,.45,3),this.lifeboatTrimMat);t.position.set(e,-.5,2),_.add(t)});let E=new U;E.position.set(0,1.9,21.6);for(let e=-2;e<=2;e++){let t=new q(new Ha(2.1,2.05),this.windowGlassMat);t.position.set(e*2.4,0,0),t.rotation.x=-.26,E.add(t)}_.add(E);let D=new U;D.position.set(0,60.8,-64),D.rotation.x=.088,this.saucerExteriorGroup.add(D);let O=new Qi;O.moveTo(-14.2,0),O.quadraticCurveTo(-12.6,3.8,-8.5,4.1),O.quadraticCurveTo(0,4.45,8.5,4.1),O.quadraticCurveTo(12.6,3.8,14.2,0),O.closePath();let k=new q(new Ia(O,{depth:29,bevelEnabled:!0,bevelThickness:.6,bevelSize:.5,bevelSegments:4,curveSegments:32}),this.hullMainMat);k.position.set(0,-.2,-24.2),D.add(k),this.cutawayTargets.push(k);let A=new q(new Ha(18,11.5),this.shuttlebayPennantMat);A.rotation.x=-Math.PI/2,A.position.set(0,4.38,-6.8),D.add(A),this.cutawayTargets.push(A);for(let e=0;e<5;e++){let t=new q(new J(19.5-e*.6,.28,.95),this.hullDarkAccentMat);t.position.set(0,4.32,-22.5+e*2.2),D.add(t),this.cutawayTargets.push(t)}let ee=new q(new J(22.4,1.05,3.4),this.hullDarkAccentMat);ee.position.set(0,3.55,5.2),D.add(ee);let j=new q(new J(14,.52,.55),new K({color:16772784}));j.position.set(0,3.48,6.95),D.add(j),[-10.8,10.8].forEach(e=>{let t=new q(new J(1.5,3.8,3.8),this.hullDarkAccentMat);t.position.set(e,1.75,4.9),D.add(t)});let te=e=>{let t=new U,n=new q(new J(9.6,3.1,1.1),this.hullDarkAccentMat);t.add(n);for(let e=-2;e<=2;e++){let n=new q(new J(9.2,.16,1.24),this.phaserStripMat);n.position.set(0,e*.52,0),t.add(n)}let r=new q(new J(9.4,.24,1.26),this.rcsGoldMat);return r.position.set(0,-1.32,0),t.add(r),t.position.set(e?-4.9:4.9,1.75,5.5),t};this.shuttlebayPortDoor=te(!0),D.add(this.shuttlebayPortDoor),this.shuttlebayStbdDoor=te(!1),D.add(this.shuttlebayStbdDoor);let M=new q(new J(21.2,.65,14.5),this.dockingMetalMat);M.position.set(0,.22,12.8),D.add(M),[-4.8,0,4.8].forEach((e,t)=>{let n=new q(new J(t===1?.62:.44,.7,13),t===1?this.rcsGoldMat:this.lifeboatTrimMat);n.position.set(e,.26,13),D.add(n)});let N=new X({color:16726784,emissive:new W(16722432),emissiveIntensity:3.4,roughness:.16});this.saucerImpulseMaterials.push(N);let P=new U;P.position.set(0,38.6,69.5),this.saucerExteriorGroup.add(P),this.cutawayTargets.push(P);let ne=new q(new J(22,2.8,5.4),this.phaserStripMat);P.add(ne);for(let e=0;e<6;e++){let t=-9+(e+.5)*3,n=new q(new J(2.55,1.95,.8),N);n.position.set(t,0,2.55),P.add(n)}let re=new X({color:16726784,emissive:new W(16722432),emissiveIntensity:3.2,roughness:.18});this.saucerImpulseMaterials.push(re),[-103.5,103.5].forEach(e=>{let t=e<0?-1:1,n=new U;n.position.set(e,36.8,17.5),n.rotation.y=-t*.08,this.saucerExteriorGroup.add(n);let r=new q(new J(23.5,2.4,8.6),this.hullMainMat);n.add(r);let i=new q(new J(21.6,1.85,1.1),this.phaserStripMat);i.position.set(0,0,4),n.add(i);let a=19.8;for(let e=0;e<6;e++){let t=-19.8/2+(e+.5)*(a/6),r=new q(new J(2.75,1.32,.55),re);if(r.position.set(t,0,4.38),n.add(r),e<5){let t=-19.8/2+(e+1)*(a/6),r=new q(new J(.38,1.58,.82),this.phaserStripMat);r.position.set(t,0,4.36),n.add(r)}}let o=new Bo(16726784,2.2,48);o.position.set(0,0,7.5),n.add(o)});let ie=new U;ie.position.set(0,34.85,22),this.saucerExteriorGroup.add(ie);let ae=new q(new Y(26,30,.8,64),this.dockingMetalMat);ae.scale.set(1.42,1,.85),ie.add(ae);let oe=new K({color:2278750});this.dockingLightMaterials.push(oe);for(let e=-2;e<=2;e++){if(e===0)continue;let t=new q(new J(2,.45,.45),oe);t.position.set(e*9,.45,8),ie.add(t)}this.addNavLight(this.saucerExteriorGroup,-231.86,37,e,16720418,!1),this.addNavLight(this.saucerExteriorGroup,t,37,e,2293589,!1),this.addNavLight(this.saucerExteriorGroup,0,38.8,-321.25,16777215,!0),this.addNavLight(this.saucerExteriorGroup,0,Tu+.4,e,16777215,!0)}buildStardriveExterior(){let e=new U;e.position.set(0,34.2,26),this.stardriveExteriorGroup.add(e);let t=new Qi;t.moveTo(0,-44),t.bezierCurveTo(24,-43.5,52,-26,58,-6),t.bezierCurveTo(60,14,48,34,33,47),t.lineTo(-33,47),t.bezierCurveTo(-48,34,-60,14,-58,-6),t.bezierCurveTo(-52,-26,-24,-43.5,0,-44);let n=new Ia(t,{depth:1.1,bevelEnabled:!0,bevelThickness:.65,bevelSize:2.2,bevelSegments:8,curveSegments:96});n.rotateX(Math.PI/2);let r=n.attributes.position,i=new Float32Array(r.count*2);for(let e=0;e<r.count;e++){let t=r.getX(e),n=r.getZ(e);i[e*2]=.5+t/122,i[e*2+1]=1-(n+46)/96}n.setAttribute(`uv`,new mr(i,2)),n.computeVertexNormals();let a=new q(n,this.cobraHeadMat);a.position.set(0,.15,0),e.add(a),this.buildSmoothPhaserRibbon(e,e=>{let t=(-.81+e*.62)*Math.PI,n=31.6;return{pos:new H(Math.cos(t)*n*1.25,.82,8.4+Math.sin(t)*n*.87),normal:new H(0,1,0)}},96,1.38,.4,1);let o=new q(new J(8.4,.24,8.6),this.rcsGoldMat);o.position.set(0,.82,-26.8),e.add(o),[-29,-24.6].forEach(t=>{let n=new q(new Y(1.45,1.55,.34,8),this.dockingMetalMat);n.position.set(0,.88,t),e.add(n)}),[-1,1].forEach(t=>{[0,1].forEach(n=>{let r=new q(new J(2.8,.36,5.4),this.dockingMetalMat);r.position.set(t*(10.5+n*7.6),.82,-25.6+n*2.6),r.rotation.y=-t*(.2+n*.15),e.add(r)})});let s=new q(new Y(11.4,13,.38,64),this.rcsGoldMat);s.scale.set(1.12,1,1.36),s.position.set(0,.84,-4),e.add(s);let c=new Y(7.2,10.6,2.1,72);c.scale(1,1,1.28);let l=new q(c,this.hullMainMat);l.position.set(0,1.45,2),e.add(l),this.cutawayTargets.push(l);let u=new Wa(3.4,48,16,0,Math.PI*2,0,Math.PI*.5);u.scale(.85,.25,1.45);let d=new q(u,this.rcsGoldMat);d.position.set(0,2.48,1.2),e.add(d),this.cutawayTargets.push(d);let f=[],p=[],m=[];for(let e=0;e<=40;e++){let t=e/40,n=-16+t*50.2,r=Math.sin(t**.85*Math.PI),i=(1-t)*5.2+t*-9.5+r*20.5,a=86.5-t**1.15*15,o=(i+a)*.5,s=(a-i)*.5,c=Math.max(0,(t-.38)/.62)**1.85*35.5,l=Math.max(0,(.34-t)/.34)**1.55*14.5,u=14.8+c+l;for(let r=0;r<=96;r++){let i=r/96*Math.PI*2,a=Math.cos(i),c=Math.sin(i),l=a*s,d=(a+1)*.5,h=Math.sin(Math.acos(Math.max(-1,Math.min(1,a))))**.78*(.82+.28*Math.sin(d*Math.PI)),g=Math.sign(c)*Math.abs(c)*u*(.12+.88*h),_=o+l;if(f.push(g,n,_),p.push(r/96*2,t),e<40&&r<96){let t=e*97+r,n=t+1,i=(e+1)*97+r,a=i+1;m.push(t,n,i,n,a,i)}}}let h=new Or;h.setAttribute(`position`,new G(f,3)),h.setAttribute(`uv`,new G(p,2)),h.setIndex(m),h.computeVertexNormals();let g=new q(h,this.neckWindowMat);this.stardriveExteriorGroup.add(g);let _=new Qi;_.moveTo(-3.4,-1),_.quadraticCurveTo(0,-1.35,3.4,-1),_.quadraticCurveTo(4.1,0,3.2,1.05),_.quadraticCurveTo(0,1.35,-3.2,1.05),_.quadraticCurveTo(-4.1,0,-3.4,-1);let v=new q(new Ia(_,{depth:6.2,bevelEnabled:!0,bevelThickness:.45,bevelSize:.45,bevelSegments:4,curveSegments:24}),this.hullMainMat);v.position.set(0,-9.2,10.2),this.stardriveExteriorGroup.add(v);let y=new q(new J(4.4,1.35,.8),this.phaserStripMat);y.position.set(0,-9.2,10.05),this.stardriveExteriorGroup.add(y);let b=new q(new yi(.68,32),new K({color:16733474}));b.position.set(0,-9.2,9.62),b.rotation.y=Math.PI,this.stardriveExteriorGroup.add(b);let x=new X({color:16726784,emissive:new W(16722432),emissiveIntensity:3.5,roughness:.16});this.stardriveImpulseMaterials.push(x);let S=new U;S.position.set(0,-9.8,86.5),this.stardriveExteriorGroup.add(S);let C=new q(new J(20.6,3.8,10.5),this.hullMainMat);C.position.set(0,0,-2.2),S.add(C);let w=new q(new J(19,2.8,1.3),this.phaserStripMat);w.position.set(0,0,2.7),S.add(w);let T=17.4;for(let e=0;e<6;e++){let t=-17.4/2+(e+.5)*(T/6),n=new q(new J(2.45,2.05,.58),x);if(n.position.set(t,0,3.18),S.add(n),e<5){let t=-17.4/2+(e+1)*(T/6),n=new q(new J(.36,2.4,.92),this.phaserStripMat);n.position.set(t,0,3.15),S.add(n)}}let E=new Bo(16726016,3.8,80);E.position.set(0,0,8.5),S.add(E);let D=new Ba([new V(0,9.5),new V(21.6,1.8),new V(31.2,22),new V(37.4,54),new V(38.85,82),new V(36.6,124),new V(31.4,168),new V(25.4,212),new V(23,248),new V(21.8,264.5),new V(0,266.5)],128);D.rotateX(Math.PI/2);let O=D.attributes.position,k=new Float32Array(O.count*2);for(let e=0;e<O.count;e++){let t=O.getX(e),n=O.getY(e),r=O.getZ(e),i=r/266.5;if(t*=1.74,n*=.56,n<0){let e=.68+.28*i;t*=e,n*=1.04}else if(n*=.78,i<.34&&i>.001){let e=(1-i/.34)*Math.min(1,n/11);r-=e*6.8,n+=e*2.8}if(i>.4){let e=(i-.4)/.6;n=n*(1-.46*e**1.25)+e**1.42*8.2}O.setXYZ(e,t,n,r),k[e*2]=.5+t/142,k[e*2+1]=1-i}D.setAttribute(`uv`,new mr(k,2)),D.computeVertexNormals(),D.translate(0,-26.8,10);let A=new q(D,this.secondaryHullMat);this.stardriveExteriorGroup.add(A),this.cutawayTargets.push(A),[-1,1].forEach(e=>{let t=new q(new J(1.9,1.3,4.8),this.rcsGoldMat);t.position.set(e*65.8,-25.8,82),t.rotation.y=e*.14,this.stardriveExteriorGroup.add(t)});let ee=new U;this.stardriveExteriorGroup.add(ee),this.cutawayTargets.push(ee);let j=new J(9.6,4.4,186,1,1,32),te=j.attributes.position;for(let e=0;e<te.count;e++){let t=(te.getZ(e)+93)/186;te.setX(e,te.getX(e)*(1-.66*t))}j.computeVertexNormals();let M=new q(j,this.hullMainMat);M.position.set(0,-10.4,183),M.rotation.x=-.02,ee.add(M);let N=new q(new J(1.3,4.6,184),this.rcsGoldMat);N.position.set(0,-10.25,183),N.rotation.x=-.02,ee.add(N),[-1,1].forEach(e=>{this.buildSmoothPhaserRibbon(ee,t=>({pos:new H(e*(14+t*22),-10.35-t**1.28*6.45,106+t*90),normal:new H(e*.25,1,0)}),64,1.48,.44,1)}),[-1,1].forEach(e=>{let t=e*14.2,n=new U;n.position.set(t,-14.4,263.5),ee.add(n);let r=new Qi;r.moveTo(-8.2,0),r.quadraticCurveTo(-7.6,3.2,0,3.5),r.quadraticCurveTo(7.6,3.2,8.2,0),r.closePath();let i=new q(new Ia(r,{depth:22,bevelEnabled:!0,bevelThickness:.4,bevelSize:.35,bevelSegments:3,curveSegments:24}),this.hullMainMat);i.position.set(0,0,-12.5),n.add(i);let a=new q(new J(10.2,.44,.5),new K({color:16772784}));a.position.set(0,2.75,9.8),n.add(a);let o=new q(new J(13.2,2.4,1),this.hullDarkAccentMat);o.position.set(0,1.25,9),n.add(o);for(let e=-2;e<=2;e++){let t=new q(new J(12.6,.15,1.15),this.phaserStripMat);t.position.set(0,1.25+e*.42,9),n.add(t)}let s=new q(new J(15.2,.65,6.8),this.dockingMetalMat);s.position.set(0,.12,12),n.add(s);let c=new q(new J(5.8,.55,17.5),this.rcsGoldMat);c.position.set(e*17.6,.65,-1.5),n.add(c)});let P=new q(new J(5.8,2.2,3.8),this.phaserStripMat);P.position.set(0,-16.8,274.8),ee.add(P);let ne=new q(new yi(1,24),new K({color:16733474}));ne.position.set(0,-16.8,276.8),ee.add(ne);let re=new U;re.position.set(0,-26.8,11.2),this.stardriveExteriorGroup.add(re);let ie=new Ga(21,2.35,32,96);ie.scale(1.92,.48,.95);let ae=new q(ie,this.hullMainMat);re.add(ae);let oe=new Ga(19.2,1.55,24,96);oe.scale(1.9,.46,1);let se=new q(oe,this.phaserStripMat);se.position.z=.6,re.add(se);let ce=Ju(),F=new X({map:ce,emissiveMap:ce,emissive:new W(16777215),emissiveIntensity:1.95,roughness:.16,metalness:.28,side:2}),I=new Wa(19.6,96,36,0,Math.PI*2,0,Math.PI*.4);I.rotateX(Math.PI/2),I.scale(2.04,.5,.3);let le=I.attributes.position,ue=new Float32Array(le.count*2);for(let e=0;e<le.count;e++)ue[e*2]=.5+le.getX(e)/72,ue[e*2+1]=.5+le.getY(e)/18;I.setAttribute(`uv`,new mr(ue,2)),I.computeVertexNormals();let de=new q(I,F);de.position.z=-1.5,re.add(de);let fe=new Bo(3718648,4.6,105);fe.position.set(0,0,-12),re.add(fe);let pe=new X({color:3718648,emissive:new W(2001151),emissiveIntensity:2.45,roughness:.16});this.warpGrilleMaterials.push(pe);let me=Yu(),he=new X({map:me,emissiveMap:me,emissive:new W(16722722),emissiveIntensity:2.65,roughness:.18,metalness:.08}),ge=new X({color:13933098,roughness:.38,metalness:.24}),_e=new X({color:11807527,roughness:.38,metalness:.22});[-1,1].forEach(e=>{let t=new ji([new H(e*22,-44.8,240),new H(e*62,-46.8,240),new H(e*98,-46.2,240),new H(e*116.5,-41.5,240),new H(e*124.8,-28,240),new H(e*124.4,-14,240),new H(e*123.5,-2.5,240)]),n=[],r=[],i=[],a=t.computeFrenetFrames(96,!1);for(let o=0;o<=96;o++){let s=o/96,c=t.getPointAt(s),l=a.tangents[o],u=new H(-l.y*e,l.x*e,0).normalize(),d=2.85-.7*s,f=202+s*5,p=276-s*1.5,m=(f+p)*.5,h=(p-f)*.5;for(let t=0;t<=36;t++){let a=t/36*Math.PI*2,l=Math.cos(a),f=Math.sin(a),p=(l+1)*.5,g=f*d*(.22+.78*Math.sin(Math.acos(Math.max(-1,Math.min(1,l))))**.75)*(1.08-.24*p),_=c.x+u.x*g,v=c.y+u.y*g,y=m+l*h;if(n.push(_,v,y),r.push(t/36,s*2),o<96&&t<36){let n=o*37+t,r=n+1,a=(o+1)*37+t,s=a+1;e>0?i.push(n,a,r,r,a,s):i.push(n,r,a,r,s,a)}}}let o=new Or;o.setAttribute(`position`,new G(n,3)),o.setAttribute(`uv`,new G(r,2)),o.setIndex(i),o.computeVertexNormals(),this.stardriveExteriorGroup.add(new q(o,this.hullMainMat));let s=new q(new J(28,.55,2.2),this.phaserStripMat);s.position.set(e*74,-43.9,236),this.stardriveExteriorGroup.add(s);let c=new U;c.position.set(e*123.5,-1.5,188.1),this.stardriveExteriorGroup.add(c);let l=[],u=[],d=[],f=(e,t,n)=>{let r=Math.cos(e),i=Math.sin(e),a=.82,o=Math.sign(r)*Math.abs(r)**a*t,s=Math.sign(i)*Math.abs(i)**a*n;return s<0&&(s*=.84),{sx:o,sy:s}};for(let e=0;e<=64;e++){let t=e/64,n,r;if(t<.88){let e=t/.88;n=-113+e*226,r=1-.08*e**1.8}else{let e=(t-.88)/.12;n=113+Math.sin(e*Math.PI*.5)*20.15,r=.92*Math.cos(e*Math.PI*.5)}let i=19.8*r,a=10.2*r;for(let r=0;r<=96;r++){let o=r/96*Math.PI*2,{sx:s,sy:c}=f(o,i,a);if(n>-98&&n<106&&Math.abs(Math.cos(o))>.88&&Math.abs(c)<3.6&&(s*=.935),l.push(s,c,n),u.push(r/96,t*4),e<64&&r<96){let t=e*97+r,n=t+1,i=(e+1)*97+r,a=i+1;d.push(t,n,i,n,a,i)}}}let p=new Or;p.setAttribute(`position`,new G(l,3)),p.setAttribute(`uv`,new G(u,2)),p.setIndex(d),p.computeVertexNormals(),c.add(new q(p,this.hullMainMat)),[-1,1].forEach(e=>{let t=new Qi;t.moveTo(0,-2.55),t.quadraticCurveTo(1.35*e,0,0,2.55),t.lineTo(-.5*e,2.2),t.lineTo(-.5*e,-2.2),t.closePath();let n=new q(new Ia(t,{depth:202,bevelEnabled:!1,curveSegments:16}),pe);n.position.set(e*18.2,-.15,-97),c.add(n)});let m=new Bo(2001151,3.8,135);m.position.set(-e*24,-3,-20),c.add(m);let h=[],g=[];for(let e=0;e<=1;e++){let t=-113.2+e*11;for(let n=0;n<=96;n++){let{sx:r,sy:i}=f(n/96*Math.PI*2,19.95,10.32);if(h.push(r,i,t),e===0&&n<96){let e=n,t=n+1,r=97+n,i=r+1;g.push(e,t,r,t,i,r)}}}let _=new Or;_.setAttribute(`position`,new G(h,3)),_.setIndex(g),_.computeVertexNormals(),c.add(new q(_,ge));let v=new Ga(13.2,.36,16,64);v.rotateY(Math.PI/2),v.scale(1.38,.12,1);let y=new q(v,this.rcsGoldMat);y.position.set(0,-.4,125.5),c.add(y),[-2.1,2.1].forEach(e=>{let t=new q(new J(1.35,.35,148),_e);t.position.set(e,10.15,-12),t.rotation.x=.004,c.add(t)});let b=new bi(4,11,3);b.rotateX(-Math.PI/2),b.scale(1.1,.16,1);let x=new q(b,_e);x.position.set(0,10.35,-86),c.add(x),[-2.8,2.8].forEach(e=>{let t=new q(new J(2.3,.45,16.5),this.phaserStripMat);t.position.set(e,9.55,92),c.add(t)});let S=new U;S.position.set(0,0,-113),c.add(S);let C=new Wa(1,72,36),w=C.attributes.position;for(let e=0;e<w.count;e++){let t=w.getX(e),n=w.getY(e),r=w.getZ(e),i=Math.hypot(t,n),{sx:a,sy:o}=f(Math.atan2(n,t),17.8*i,8.6*i);w.setXYZ(e,a,o-.35,r*20.1)}C.computeVertexNormals();let T=new q(C,he);T.position.set(0,0,-.5),S.add(T);let E=[],D=[],O=[];for(let e=0;e<=24;e++){let t=e/24,n=Math.cos(t*Math.PI*.44),r=19.95*(.62+.38*n),i=10.32*(.58+.42*n);for(let n=0;n<=96;n++){let a=n/96*Math.PI*2,o=Math.sin(a),s;s=o>=0?-17.8+(1-o)*3.2:-11.5- -o*2.2;let c=t*s,{sx:l,sy:u}=f(a,r+.35,i+.35);if(E.push(l,u,c),D.push(n/96,t),e<24&&n<96){let t=e*97+n,r=t+1,i=(e+1)*97+n,a=i+1;O.push(t,r,i,r,a,i)}}}let k=new Or;k.setAttribute(`position`,new G(E,3)),k.setAttribute(`uv`,new G(D,2)),k.setIndex(O),k.computeVertexNormals(),S.add(new q(k,this.hullDarkAccentMat));let A=new q(new Va(5.6,1),new K({color:16760331,wireframe:!0,transparent:!0,opacity:.45}));A.scale.set(1.8,.75,1),A.position.set(0,-.3,-10.5),S.add(A),this.bussardRotors.push(A);let ee=new Bo(16722458,4.4,88);ee.position.set(0,-.5,-24),S.add(ee),this.addNavLight(c,0,10.4,126,16777215,!0)}),this.buildExteriorShuttlecraft()}buildExteriorShuttlecraft(){this.exteriorShuttlecraft=new U,this.exteriorShuttlecraft.name=`ShuttlecraftGoddard_Ext`;let e=new Qi;e.moveTo(-1.85,0),e.lineTo(-1.45,2.05),e.lineTo(1.45,2.05),e.lineTo(1.85,0),e.closePath();let t=new q(new Ia(e,{depth:6.2,bevelEnabled:!0,bevelThickness:.35,bevelSize:.25,bevelSegments:3}),this.hullMainMat);t.position.set(0,.3,-3.1),this.exteriorShuttlecraft.add(t);let n=new q(new J(2.65,.78,1.9),new X({color:988970,roughness:.08,metalness:.85}));n.position.set(0,1.72,2.15),n.rotation.x=.32,this.exteriorShuttlecraft.add(n),[-1.78,1.78].forEach(e=>{let t=new Y(.36,.36,4.6,24);t.rotateX(Math.PI/2);let n=new q(t,this.phaserStripMat);n.position.set(e,.42,-.4),this.exteriorShuttlecraft.add(n);let r=new q(new Wa(.35,16,12),new K({color:15680580}));r.position.set(e,.42,1.9),this.exteriorShuttlecraft.add(r)}),this.exteriorShuttlecraft.position.set(0,Du(4,`saucer`)+.1,-55),this.saucerExteriorGroup.add(this.exteriorShuttlecraft)}addNavLight(e,t,n,r,i,a){let o=new K({color:i}),s=new q(new Wa(.95,16,16),o);s.position.set(t,n,r),e.add(s),a&&this.navStrobes.push(o)}setCutawayMode(e){let t=t=>{e===`off`?(t.visible=!0,t.isMesh&&t.material&&t.userData.origWireframe===void 0&&(t.userData.origWireframe=t.material.wireframe||!1),t.isMesh&&t.material&&(t.material.wireframe=!1,t.userData.wasTransparent||(t.material.transparent=!1,t.material.opacity=1))):e===`cutaway`?t.visible=!1:e===`exploded`&&(t.visible=!0,t.isMesh&&t.material&&(t.userData.wasTransparent===void 0&&(t.userData.wasTransparent=t.material.transparent),t.material.transparent=!0,t.material.opacity=.12,t.material.wireframe=!0))};for(let n of this.cutawayTargets)n.isGroup?(n.visible=e!==`cutaway`,n.traverse(e=>{e.isMesh&&t(e)})):t(n)}update(e,t,n){let r=n.warpCore.online?n.warpCore.warpFactor:0;for(let t of this.bussardRotors)t.rotation.z+=e*(1.2+r*.8);let i=(n.power.engines||100)/100,a=n.warpCore.online?(1.4+r*.32)*i:.2;for(let e of this.warpGrilleMaterials)e.emissiveIntensity=a+Math.sin(t*(2.5+r))*.2;let o=t%1.8<.18;for(let e of this.navStrobes)e.color.setHex(o?16777215:2241348);let s=n.separationState===`Docked`,c=n.separationState===`Preparing`||n.separationState===`Aligning`;for(let e of this.dockingLightMaterials)s?e.color.setHex(2278750):c?e.color.setHex(t%.6<.3?16096779:4528643):e.color.setHex(15680580);let l=n.doors.door_deck4_space_doors?.openAmount??0;if(this.shuttlebayPortDoor&&this.shuttlebayStbdDoor&&(this.shuttlebayPortDoor.position.x=-4.9-l*10.5,this.shuttlebayStbdDoor.position.x=4.9+l*10.5),this.exteriorShuttlecraft){let e=n.shuttlebay;this.exteriorShuttlecraft.position.set(e.shuttlePos.x,Du(4,`saucer`)+.1+e.shuttlePos.y,-55+e.shuttlePos.z),this.exteriorShuttlecraft.rotation.y=e.shuttleYaw}}},ed=class{constructor(e,t,n){this.saucerAssembly=e,this.stardriveAssembly=t,this.shipState=n,this.saucerInteriorRoot=new U,this.saucerInteriorRoot.name=`SaucerInteriorRoot`,this.saucerAssembly.add(this.saucerInteriorRoot),this.stardriveInteriorRoot=new U,this.stardriveInteriorRoot.name=`StardriveInteriorRoot`,this.stardriveAssembly.add(this.stardriveInteriorRoot),this.deckGroups=new Map,this.doorMeshes=new Map,this.interactiveTargets=[],this.roomLights=new Map,this.consoleDisplays=[],this.msdDisplay=null,this.warpCoreRings=[],this.warpCoreLight=null,this.sickbayScannerBeam=null,this.transporterParticles=null,this.livingstonFish=null,this.holodeckEnvironmentGroups=new Map,this.holodeckArchMesh=null,this.holodeckCombatTargets=[],this.holodeckSpawnerMeshes=new Map,this.stellarPlanetMeshes=[],this.structuralPlates=[],this.shuttlebayForcefieldMesh=null,this.waypointMarkersGroup=new U,this.saucerInteriorRoot.add(this.waypointMarkersGroup),this.mainViewscreenMat=new K({color:16777215}),this.battleViewscreenMat=new K({color:16777215}),this.initSharedMaterials(),this.buildAllHeroDecks(),this.buildStructuralDeckStack()}initSharedMaterials(){this.wallBeigeMat=new X({color:14339513,roughness:.54,metalness:.06,side:2}),this.wallTaupeMat=new X({color:11641752,roughness:.6,metalness:.08,side:2}),this.carpetBurgundyMat=new X({color:11034452,roughness:.95,metalness:0}),this.carpetSlateMat=new X({color:6451846,roughness:.93,metalness:0}),this.leatherCamelMat=new X({color:13213304,roughness:.4,metalness:.08}),this.woodCherryMat=new X({color:4989457,roughness:.22,metalness:.14}),this.consoleBodyMat=new X({color:2106670,roughness:.36,metalness:.48}),this.doorCrimsonMat=new X({color:8926003,roughness:.4,metalness:.26}),this.metalGreyMat=new X({color:10134445,roughness:.35,metalness:.52,side:2}),this.coveGlowMat=new K({color:15136511}),this.glassMat=new no({color:12314367,transparent:!0,opacity:.18,roughness:.05,metalness:.1,side:2,depthWrite:!1}),this.ceilingLightMat=new K({color:16774886,side:0}),this.ceilingSoffitMat=new X({color:15064271,roughness:.65,metalness:.05,side:0});let e=new Qi;e.moveTo(-.26,0),e.lineTo(.24,0),e.quadraticCurveTo(.32,.42,.18,.84),e.lineTo(-.22,1.02),e.quadraticCurveTo(-.34,.56,-.26,0),this.consoleStanchionGeo=new Ia(e,{depth:.09,bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:4,curveSegments:24}),this.consoleStanchionGeo.rotateY(-Math.PI/2);let t=new Qi;t.moveTo(0,0),t.lineTo(.38,0),t.lineTo(.18,2.55),t.lineTo(.56,3.72),t.lineTo(0,3.72),t.closePath(),this.corridorRibGeo=new Ia(t,{depth:.24,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:3}),this.corridorRibGeo.center()}getDeckGroup(e,t=`saucer`){let n=`${t}_deck_${e}`;if(this.deckGroups.has(n))return this.deckGroups.get(n);let r=new U;r.name=`Deck_${e}_${t}`;let i=Du(e,t);return r.position.set(0,i,0),r.userData={deck:e,section:t,baseY:i},t===`saucer`?this.saucerInteriorRoot.add(r):this.stardriveInteriorRoot.add(r),this.deckGroups.set(n,r),r}registerLight(e,t){this.roomLights.has(e)||this.roomLights.set(e,[]),this.roomLights.get(e).push(t)}registerInteractive(e,t){e.userData.interactive=t,this.interactiveTargets.push(e)}buildRoomBox(e,t,n,r,i,a,o,s,c={},l={}){let u=new U;u.position.set(t,0,n),e.add(u);let d=new q(new Ha(r,i),o);if(d.rotation.x=-Math.PI/2,d.position.y=.02,u.add(d),!l.customCeiling){let e=Math.min(r*.16,1.35),t=Math.min(i*.16,1.35),n=Math.max(1.2,r-e*2),o=Math.max(1.2,i-t*2),s=Math.min(.38,a*.1),c=a-s,l=new q(new Ha(r,t),this.ceilingSoffitMat);l.rotation.x=Math.PI/2,l.position.set(0,c,-i/2+t/2),u.add(l);let d=new q(new Ha(r,t),this.ceilingSoffitMat);d.rotation.x=Math.PI/2,d.position.set(0,c,i/2-t/2),u.add(d);let f=new q(new Ha(e,o),this.ceilingSoffitMat);f.rotation.x=Math.PI/2,f.position.set(-r/2+e/2,c,0),u.add(f);let p=new q(new Ha(e,o),this.ceilingSoffitMat);p.rotation.x=Math.PI/2,p.position.set(r/2-e/2,c,0),u.add(p);let m=s*.86,h=c+s*.5;[-1,1].forEach(e=>{let t=new q(new Ha(n,m),this.coveGlowMat);t.position.set(0,h,o/2*e),t.rotation.y=e>0?Math.PI:0,u.add(t);let r=new q(new Ha(o,m),this.coveGlowMat);r.position.set(n/2*e,h,0),r.rotation.y=e>0?-Math.PI/2:Math.PI/2,u.add(r)});let g=new q(new Ha(n+.08,o+.08),this.ceilingSoffitMat);g.rotation.x=Math.PI/2,g.position.y=a,u.add(g);let _=new q(new Ha(n*.86,o*.82),this.ceilingLightMat);_.rotation.x=Math.PI/2,_.position.y=a-.015,u.add(_);let v=Math.max(1,Math.min(5,Math.floor(o/3.4)));for(let e=1;e<=v;e++){let t=-o/2+e/(v+1)*o,r=new q(new J(n*.96,.1,.22),this.wallBeigeMat);r.position.set(0,a-.06,t),u.add(r)}}let f=.22,p=new K({color:16096779}),m=(e,t,n,r,i)=>{let o=new q(e?new J(t,a,f):new J(f,a,t),s);o.position.set(n,a/2,r),u.add(o);let c=new q(e?new J(t*.99,.14,.04):new J(.04,.14,t*.99),this.consoleBodyMat),l=i*.125;c.position.set(e?n:n+l,.09,e?r+l:r),u.add(c);let d=new q(e?new J(t*.86,.05,.04):new J(.04,.05,t*.86),p);d.position.set(e?n:n+l,1.42,e?r+l:r),u.add(d)};return c.north||m(!0,r,0,-i/2,1),c.south||m(!0,r,0,i/2,-1),c.west||m(!1,i,-r/2,0,1),c.east||m(!1,i,r/2,0,-1),u}createConsoleStation(e,t,n,r,i,a,o,s,c){let l=new U;l.position.set(t,n,r),l.rotation.y=i,e.add(l);let u=Math.max(.28,a*.44);[-u,u].forEach(e=>{let t=new q(this.consoleStanchionGeo,this.wallBeigeMat);t.position.set(e+.045,0,0),l.add(t)});let d=new q(new J(Math.max(.32,a-.16),.78,.46),this.consoleBodyMat);d.position.set(0,.42,.02),l.add(d);let f=new q(new J(Math.max(.3,a-.22),.18,.48),this.coveGlowMat);f.position.set(0,.11,.03),l.add(f);let p=new q(new J(a,.09,.62),this.consoleBodyMat);p.position.set(0,.94,0),p.rotation.x=-.56,l.add(p);let m=Zu(o,`#f59e0b`,`#38bdf8`);this.consoleDisplays.push({...m,title:o,appId:s});let h=new q(new Ha(a*.93,.54),new K({map:m.texture}));return h.position.set(0,.99,.02),h.rotation.x=-.56,l.add(h),this.registerInteractive(h,{type:`terminal`,appId:s,title:`${o} (${c})`,prompt:`Operate ${o} [Click / E]`}),l}createChair(e,t,n,r,i,a,o,s,c={x:0,z:-5}){let l=new U;l.position.set(t,n,r),l.rotation.y=i,e.add(l);let u=new q(new Y(.28,.3,.04,24),this.metalGreyMat);u.position.y=.02,l.add(u);let d=new q(new Y(.08,.16,.38,20),this.consoleBodyMat);d.position.y=.21,l.add(d);let f=new q(new Y(.33,.3,.12,28),this.carpetBurgundyMat);f.scale.set(1.04,1,.98),f.position.y=.44,l.add(f);let p=new q(new Y(.32,.31,.56,28,1,!1,-Math.PI*.42,Math.PI*.84),this.carpetBurgundyMat);p.position.set(0,.74,.02),l.add(p);let m=new q(new Ga(.315,.045,12,24,Math.PI*.84),this.leatherCamelMat);m.rotation.x=Math.PI/2,m.rotation.z=Math.PI*.08,m.position.set(0,1.02,.02),l.add(m);let h=Du(s,o);return this.registerInteractive(f,{type:`sit`,stationName:a,section:o,deck:s,localSeatPos:{x:l.position.x+e.position.x,y:h+l.position.y+1.25,z:l.position.z+e.position.z},lookOffset:c,prompt:`Sit at ${a} [Click / E]`}),l}createSlidingDoor(e,t,n,r,i,a,o,s=2.05,c=2.68){let l=new U;l.position.set(n,0,r),l.rotation.y=i,e.add(l);let u=this.consoleBodyMat,d=new q(new J(s+.56,.34,.38),u);d.position.y=c+.16,l.add(d),[-1,1].forEach(e=>{let t=new q(new J(.26,c+.32,.38),u);t.position.set(e*(s/2+.13),(c+.16)/2,0),l.add(t)});let f=t.includes(`sep`)||t.includes(`bridge_tl`)?this.metalGreyMat:this.doorCrimsonMat,p=e=>{let t=new q(new J(s/2+.015,c,.14),f);t.position.set(s/4*e,c/2,0);let n=new q(new J(.05,c*.88,.155),u);return n.position.set(-e*(s/4-.06),0,0),t.add(n),t},m=p(-1),h=p(1);l.add(m,h);let g=new K({color:3718648}),_=new q(new J(s*.64,.075,.41),g);return _.position.set(0,c+.16,0),l.add(_),[-.22,.22].forEach(e=>{let n=new q(new J(.24,.42,.05),u);n.position.set(s/2+.34,1.36,e),l.add(n);let r=new q(new J(.18,.34,.065),new K({color:16096779}));r.position.set(s/2+.34,1.36,e),l.add(r),this.registerInteractive(r,{type:`door_control`,doorId:t,prompt:`Operate Door Controls (${this.shipState.doors[t]?.name||t}) [Click / E]`})}),this.registerInteractive(m,{type:`door_leaf`,doorId:t,prompt:`Toggle Door (${this.shipState.doors[t]?.name||t}) [Click / E]`}),this.registerInteractive(h,{type:`door_leaf`,doorId:t,prompt:`Toggle Door (${this.shipState.doors[t]?.name||t}) [Click / E]`}),this.doorMeshes.set(t,{id:t,group:l,leftLeaf:m,rightLeaf:h,statusLedMat:g,width:s,height:c,deck:a,section:o,localPos:new H(n+e.position.x,Du(a,o),r+e.position.z)}),l}createTurboliftStation(e,t,n,r,i,a,o,s=`Turbolift 1`,c=0){let l=new U;l.position.set(n,c,r),l.rotation.y=i,e.add(l);let u=3.3,d=new q(new Y(1.48,1.48,u,32,1,!0,0,Math.PI*1.42),this.wallBeigeMat);d.rotation.y=Math.PI*.29,d.position.set(0,u/2,-1.22),l.add(d);let f=new q(new yi(1.48,32),this.carpetBurgundyMat);f.rotation.x=-Math.PI/2,f.position.set(0,.03,-1.22),l.add(f);let p=new q(new yi(1.42,32),this.ceilingLightMat);p.rotation.x=Math.PI/2,p.position.set(0,3.26,-1.22),l.add(p);let m=new q(new J(.14,2.75,.08),new K({color:16498468}));m.position.set(-1.12,1.55,-1.42),l.add(m);let h=Zu(`TURBOLIFT NETWORK`,`#f59e0b`,`#38bdf8`),g=new q(new J(.46,.68,.1),new K({map:h.texture}));g.position.set(.86,1.42,-.96),g.rotation.y=-.5,l.add(g),this.registerInteractive(g,{type:`turbolift_panel`,deck:a,section:o,label:s,prompt:`Select Turbolift Destination (${s}, Deck ${a}) [Click / E]`});let _=this.createSlidingDoor(e,t,n,r,i,a,o,1.86,2.62);return _.position.y=c,l}buildAllHeroDecks(){this.buildDeck1CommandComplex(),this.buildDeck4ShuttlebayComplex(),this.buildDeck8SaucerAndBattleBridge(),this.buildDeck10TenForward(),this.buildDeck11HolodeckAndScienceLab(),this.buildDeck12Sickbay(),this.buildDeck36MainEngineering()}createCommandBucketChair(e,t,n,r,i,a,o,s,c=!1){let l=new U;l.position.set(t,n,r),l.rotation.y=i,e.add(l);let u=c?.31:.28,d=new q(new Y(.14,.26,.34,24),this.consoleBodyMat);d.position.y=.17,l.add(d);let f=new q(new J(u*2,.11,.54),this.leatherCamelMat);f.position.set(0,.38,-.02),f.rotation.x=-.08,l.add(f);let p=new Qi;p.moveTo(-.28,.36),p.lineTo(.22,.32),p.quadraticCurveTo(.36,.62,.44,1.04),p.lineTo(.35,1.06),p.bezierCurveTo(.22,.72,.04,.56,-.28,.46),p.closePath();let m=new Ia(p,{depth:.06,bevelEnabled:!0,bevelThickness:.025,bevelSize:.025,bevelSegments:4});m.rotateY(-Math.PI/2),[-1,1].forEach(e=>{let t=new q(m,this.leatherCamelMat);t.position.set(e*u+.03,0,0),l.add(t)});let h=.24,g=new q(new J(u*1.92,.74,.09),this.leatherCamelMat);g.position.set(0,.72,.3),g.rotation.x=h,l.add(g),[-.12,.12].forEach(e=>{for(let t=0;t<7;t++){let n=new q(new J(.15,.072,.045),this.leatherCamelMat),r=(t-3)*.088,i=.72+Math.cos(h)*r,a=.25+Math.sin(h)*r;n.position.set(e,i,a),n.rotation.x=h,l.add(n)}});let _=new q(new Y(.085,.085,.34,24),this.leatherCamelMat);_.rotation.z=Math.PI/2,_.scale.set(.78,1,1.25),_.position.set(0,1.13,.4),l.add(_),c&&[-.35,.35].forEach(e=>{let t=new q(new J(.13,.075,.48),this.consoleBodyMat);t.position.set(e,.58,.02),t.rotation.x=-.05,l.add(t);let n=new q(new Ha(.07,.22),new K({color:16096779}));n.rotation.x=-Math.PI/2-.05,n.position.set(e,.62,-.06),l.add(n)});let v=Du(s,o);return this.registerInteractive(f,{type:`sit`,stationName:a,section:o,deck:s,localSeatPos:{x:l.position.x+e.position.x,y:v+l.position.y+1.25,z:l.position.z+e.position.z},lookOffset:{x:0,z:-8},prompt:`Sit at ${a} [Click / E]`}),l}buildSmoothTacticalHorseshoe(e,t=.14){let n=2.88,r=2.1,i=[],a=[],o=[],s=[];for(let e=0;e<=96;e++){let c=e/96,l=(c-.5)*Math.PI*1.4,u=Math.cos((c-.5)*Math.PI)**.68,d=t+.04+1.58*u,f=.055+.145*u,p=.085+.04*u,m=Math.sin(l),h=Math.cos(l),g=m*n,_=.25+h*r,v=m*r,y=h*n,b=Math.hypot(v,y)||1,x=v/b,S=y/b,C=g-x*f,w=_-S*f,T=g+x*f,E=_+S*f;i.push(C,d,w,T,d-.02,E,T,d-p,E,C,d-p,w);let D=t+.04+.24*u,O=t-.02,k=g-f*.82*x,A=_-f*.82*S,ee=g+f*.82*x,j=_+f*.82*S;if(o.push(k,D,A,ee,D,j,ee,O,j,k,O,A),e<96){let t=e*4,n=(e+1)*4;for(let e=0;e<4;e++){let r=(e+1)%4;a.push(t+e,n+e,n+r),a.push(t+e,n+r,t+r),s.push(t+e,n+e,n+r),s.push(t+e,n+r,t+r)}}}let c=new Or;c.setAttribute(`position`,new G(i,3)),c.setIndex(a),c.computeVertexNormals(),e.add(new q(c,this.woodCherryMat));let l=new Or;l.setAttribute(`position`,new G(o,3)),l.setIndex(s),l.computeVertexNormals(),e.add(new q(l,this.wallBeigeMat))}buildDeck1CommandComplex(){let e=this.getDeckGroup(1,`saucer`),t=3.65,n=new U;n.position.set(0,0,-137.5),e.add(n);let r=new Ua(5.65,10.35,72);r.rotateX(-Math.PI/2);let i=new q(r,this.carpetSlateMat);i.position.y=.26,n.add(i);let a=new q(new yi(5.85,64),this.carpetBurgundyMat);a.rotation.x=-Math.PI/2,a.position.set(0,.02,-.75),n.add(a);let o=new Y(3.65,3.75,.12,64);o.scale(1.12,1,.96);let s=new q(o,this.carpetBurgundyMat);s.position.set(0,.08,.42),n.add(s);let c=new q(new Y(5.68,5.68,.24,64,1,!0),this.wallBeigeMat);c.position.set(0,.14,0),n.add(c);let l=new q(new Ga(5.66,.035,10,64),this.coveGlowMat);l.rotation.x=Math.PI/2,l.position.set(0,.24,0),n.add(l);let u=this.wallBeigeMat.clone();u.side=2;let d=10.22;for(let e of[{start:-1.7,end:1.48},{start:1.7,end:4.62}]){let r=new q(new Y(d,d,t,64,1,!0,e.start,e.end-e.start),u);r.position.y=t/2,n.add(r)}let f=new q(new Ua(7.45,10.3,72),this.ceilingSoffitMat);f.rotation.x=Math.PI/2,f.position.y=t,n.add(f);let p=new q(new Y(7.45,7.45,.83,64,1,!0),new X({color:16710126,emissive:16770229,emissiveIntensity:.72,side:1}));p.position.y=4.0649999999999995,n.add(p);let m=new q(new Y(3.6,7.48,.57,64,1,!0),new X({color:16643558,emissive:16772565,emissiveIntensity:.82,roughness:.5,side:1}));m.position.y=4.765,n.add(m);for(let e=0;e<16;e++){let t=e/16*Math.PI*2,r=new U;r.rotation.y=t;let i=new q(new J(.24,.18,4.05),this.wallBeigeMat);i.position.set(0,4.74,5.5),i.rotation.x=.145,r.add(i),n.add(r)}let h=new q(new Ua(3.35,3.68,64),this.wallBeigeMat);h.rotation.x=Math.PI/2,h.position.y=5.05,n.add(h);let g=new q(new yi(3.55,64),this.ceilingLightMat);g.rotation.x=Math.PI/2,g.position.y=5.12,n.add(g);let _=new Bo(16774370,2.8,34);_.position.set(0,4.7700000000000005,0),n.add(_),this.registerLight(`deck1_bridge`,_);let v=new q(new J(8.85,4.05,.42),this.wallTaupeMat);v.position.set(0,2.08,-8.38),n.add(v);let y=new q(new J(8.45,3.72,.36),this.consoleBodyMat);y.position.set(0,2.08,-8.28),n.add(y);let b=new q(new Ha(8.05,3.42),this.mainViewscreenMat);b.position.set(0,2.08,-8.08),n.add(b),this.registerInteractive(b,{type:`terminal`,appId:`viewscreen`,title:`Main Bridge Viewscreen Control`,prompt:`Configure Main Viewscreen Sensor Feed [Click / E]`}),this.createCommandBucketChair(n,0,.16,.35,0,`Captain Picard's Command Chair`,`saucer`,1,!0),this.createCommandBucketChair(n,1.44,.14,.52,.18,`First Officer Commander Riker's Chair`,`saucer`,1,!1),this.createCommandBucketChair(n,-1.44,.14,.52,-.18,`Counselor Deanna Troi's Chair`,`saucer`,1,!1),[-2.38,2.38].forEach(e=>{let t=new U;t.position.set(e,.14,.58),t.rotation.y=e<0?-.22:.22,n.add(t);let r=new q(new J(.56,.48,.68),this.wallBeigeMat);r.position.set(0,.48,0),t.add(r);let i=new q(new J(.52,.26,.62),this.coveGlowMat);i.position.set(0,.14,0),t.add(i);let a=new q(new Ha(.38,.48),new K({color:1120295}));a.rotation.x=-Math.PI/2,a.position.set(0,.725,0),t.add(a)}),this.buildSmoothTacticalHorseshoe(n,.14);let x=new q(new Y(.58,.26,1.46,28),this.wallBeigeMat);x.scale.set(1.42,1,.45),x.position.set(0,.86,2.28),n.add(x),[-1,1].forEach(e=>{let t=new U;t.position.set(e*2.2,.14,-.18),t.rotation.y=e*.42,n.add(t);let r=new q(new J(.62,.54,1.32),this.wallBeigeMat);r.position.set(0,.32,0),t.add(r);let i=new q(new J(.75,.42,.48),this.wallBeigeMat);i.position.set(-e*.22,.26,-.52),t.add(i);let a=new q(new J(.18,.25,1.24),this.coveGlowMat);a.position.set(-e*.28,.13,0),t.add(a);let o=new q(new J(.68,.22,.18),this.coveGlowMat);o.position.set(-e*.2,.12,-.68),t.add(o);let s=Zu(e<0?`SYS TELEMETRY`:`DEFENSE SUBSYS`,`#f59e0b`,`#38bdf8`);this.consoleDisplays.push({...s,title:`Wing Console`,appId:`lighting`});let c=new q(new Ha(.32,.92),new K({map:s.texture,side:2}));c.rotation.y=-e*Math.PI/2,c.rotation.z=-e*.45,c.position.set(-e*.27,.55,.08),t.add(c)});let S=Zu(`TACTICAL / WEAPONS & SECURITY`,`#f59e0b`,`#38bdf8`);this.consoleDisplays.push({...S,title:`TACTICAL / WEAPONS & SECURITY`,appId:`doors`});let C=new q(new Ha(1.78,.36),new K({map:S.texture,side:0}));C.position.set(0,1.56,2.5),C.rotation.x=-.65,n.add(C),this.registerInteractive(C,{type:`terminal`,appId:`doors`,title:`TACTICAL / WEAPONS & SECURITY (Main Bridge)`,prompt:`Operate TACTICAL / WEAPONS & SECURITY [Click / E]`}),this.createConsoleStation(n,-1.55,.02,-3.45,0,1.68,`CONN / FLIGHT CONTROL`,`separation`,`Main Bridge`),this.createCommandBucketChair(n,-1.55,.02,-2.48,0,`Conn / Helm Station`,`saucer`,1,!1),this.createConsoleStation(n,1.55,.02,-3.45,0,1.68,`OPS / OPERATIONS MANAGEMENT`,`sensors`,`Main Bridge`),this.createCommandBucketChair(n,1.55,.02,-2.48,0,`Operations (Ops) Station`,`saucer`,1,!1);for(let e of[{angle:-.1,title:`ENGINEERING / EPS`,appId:`power`},{angle:.08,title:`MASTER SITUATION`,appId:`map`},{angle:.26,title:`SCIENCE I / SENSORS`,appId:`sensors`},{angle:.44,title:`ENVIRONMENT / LIFE`,appId:`environment`}]){let t=new U,r=9.55;t.position.set(Math.sin(e.angle)*r,.26,Math.cos(e.angle)*r),t.rotation.y=e.angle+Math.PI,n.add(t);let i=new q(new J(1.66,2.75,.14),this.consoleBodyMat);i.position.set(0,1.38,.02),t.add(i),[-.52,0,.52].forEach(e=>{let n=new q(new J(.49,.82,.62),this.wallBeigeMat);n.position.set(e,.44,.28),t.add(n)});let a=Zu(e.title,`#38bdf8`,`#fbbf24`),o=new q(new Ha(1.52,.36),new K({map:a.texture}));o.position.set(0,.9,.36),o.rotation.x=-1.12,t.add(o);let s=Zu(e.title,`#fbbf24`,`#60a5fa`);this.consoleDisplays.push({...s,title:e.title,appId:e.appId});let c=new q(new Ha(1.52,1.06),new K({map:s.texture}));c.position.set(0,1.66,.14),t.add(c),this.registerInteractive(c,{type:`terminal`,appId:e.appId,title:`${e.title} (Main Bridge Aft)`,prompt:`Operate ${e.title} [Click / E]`});let l=new q(new J(1.64,.54,.58),this.wallBeigeMat);l.position.set(0,2.66,.24),l.rotation.x=.3,t.add(l);let u=new q(new J(.44,.07,.6),this.consoleBodyMat);u.position.set(0,2.44,.3),t.add(u)}[-1,1].forEach(e=>{let t=new U,r=e*1.05;t.position.set(Math.sin(r)*9.55,.26,Math.cos(r)*9.55),t.rotation.y=r-e*Math.PI,n.add(t);let i=new q(new J(4.2,2.65,.14),this.wallBeigeMat);i.position.set(0,1.48,0),t.add(i);for(let e=-1;e<=1;e++)for(let n=0;n<2;n++){let r=new q(new J(1.24,.98,.18),this.woodCherryMat);r.position.set(e*1.3,.94+n*1.04,.04),t.add(r)}let a=new q(new J(4.02,.18,.26),this.coveGlowMat);a.position.set(0,2.72,.08),t.add(a);let o=new Bo(14217471,1.3,8);o.position.set(0,2.55,.45),t.add(o)});let w=-.5,T=9.45,E=Math.sin(w)*T,D=Math.cos(w)*T,O=w+Math.PI,k=new U;k.position.set(E,.26,D),k.rotation.y=O,n.add(k);let A=new q(new J(3.7,2.84,.08),this.consoleBodyMat);A.position.set(0,1.42,.02),k.add(A);for(let e of[-1,1])for(let t=0;t<2;t++)for(let n=0;n<4;n++){let r=new q(new J(.46,.64,.1),this.wallTaupeMat);r.position.set(e*(1.08+t*.5),.34+n*.67,.06),k.add(r)}let ee=new q(new J(.24,.96,.12),this.consoleBodyMat);ee.position.set(-2.08,1.62,.08),k.add(ee);let j=new q(new Ha(.14,.4),new K({color:16347926}));j.position.set(-2.08,1.44,.15),k.add(j),this.createTurboliftStation(e,`door_bridge_tl1`,E,-137.5+D,O,1,`saucer`,`Bridge Turbolift 1`,.26),this.createTurboliftStation(e,`door_bridge_tl2`,-8.8,-142,-2.18,1,`saucer`,`Bridge Emergency Turbolift 2`,.26);let te=this.createSlidingDoor(e,`door_bridge_ready`,8.9,-141.5,Math.PI/2,1,`saucer`,1.85,2.65);te.position.y=.12;let M=this.buildRoomBox(e,12.2,-141.5,5.8,6.8,3.7,this.carpetSlateMat,this.wallBeigeMat,{west:!0,east:!0}),N=new q(new Ha(4.1,2.1),this.glassMat);N.position.set(2.85,1.92,-.4),N.rotation.y=Math.PI/2,N.rotation.z=.16,M.add(N);let P=new q(new J(.22,.85,6.8),this.wallBeigeMat);P.position.set(2.85,.42,0),M.add(P);let ne=new Qi;ne.moveTo(-1.25,-.58),ne.quadraticCurveTo(0,-.82,1.25,-.58),ne.lineTo(1.18,.58),ne.quadraticCurveTo(0,.42,-1.18,.58),ne.closePath();let re=new Ia(ne,{depth:.76,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:4,curveSegments:32});re.rotateX(Math.PI/2),re.rotateY(-Math.PI/2);let ie=new q(re,this.woodCherryMat);ie.position.set(.82,.78,-1.1),M.add(ie),this.createConsoleStation(M,.82,0,-1.1,-Math.PI/2,.88,`PICARD'S DESK TERMINAL`,`logs`,`Captain's Ready Room`),this.createChair(M,1.78,0,-1.1,-Math.PI/2,`Captain Picard's Desk Chair`,`saucer`,1,{x:-5,z:0});let ae=new X({color:16498468,roughness:.24,metalness:.86}),oe=new q(new Y(.32,.32,.05,24),ae);oe.position.set(-1.65,1.48,.25),M.add(oe);let se=new q(new Y(.5,.5,1.15,28),new no({color:959977,transparent:!0,opacity:.42,roughness:.08}));se.position.set(-1.8,1.65,-2.7),M.add(se),this.livingstonFish=new q(new bi(.12,.28,12),new K({color:16347926})),this.livingstonFish.rotation.z=Math.PI/2,this.livingstonFish.position.set(-1.8,1.65,-2.7),M.add(this.livingstonFish);let ce=new q(new J(.95,.88,.42),new X({color:3718648,emissive:165063,emissiveIntensity:.45}));ce.position.set(-1.6,1.42,2.95),M.add(ce),this.registerInteractive(ce,{type:`replicator`,item:{id:`earl_grey`,name:`Tea, Earl Grey, Hot`,color:14251782},prompt:`Replicate "Tea, Earl Grey, Hot" [Click / E]`});let F=new Bo(16772565,1.7,14);F.position.set(12.2,3.35,-141.5),e.add(F),this.registerLight(`deck1_ready_room`,F);let I=3.72,le=this.createSlidingDoor(e,`door_bridge_obs_port`,-4.2,-126.4,0,1,`saucer`,1.8,2.65);le.position.y=.12;let ue=this.createSlidingDoor(e,`door_bridge_obs_stbd`,6.8,-129.6,-.65,1,`saucer`,1.8,2.65);ue.position.y=.12;let de=this.buildRoomBox(e,0,-121.2,11.6,10.4,I,this.carpetBurgundyMat,this.wallBeigeMat,{north:!0,south:!0});for(let e=-2;e<=2;e++){let t=new q(new Ha(2.12,2.42),this.glassMat);t.position.set(e*2.2,1.82,5.08),t.rotation.x=-.22,de.add(t);let n=new q(new J(.24,I,.58),this.wallBeigeMat);n.position.set(e*2.2+1.1,I/2,4.94),de.add(n)}let fe=new Qi;fe.moveTo(-1.08,-2.25),fe.lineTo(-1.08,2.25),fe.absarc(0,2.25,1.08,Math.PI,0,!0),fe.lineTo(1.08,-2.25),fe.absarc(0,-2.25,1.08,0,Math.PI,!0);let pe=new Ia(fe,{depth:.09,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:4,curveSegments:36});pe.rotateX(Math.PI/2);let me=new q(pe,this.woodCherryMat);me.position.set(0,.78,.2),de.add(me),[-1.45,1.85].forEach(e=>{let t=new q(new Y(.42,.56,.72,24),this.consoleBodyMat);t.position.set(0,.36,e),de.add(t)});for(let e=-1;e<=1;e++)this.createChair(de,-1.78,0,e*1.85,Math.PI/2,`Observation Lounge Port Seat ${e+2}`,`saucer`,1,{x:2,z:0}),this.createChair(de,1.78,0,e*1.85,-Math.PI/2,`Observation Lounge Starboard Seat ${e+2}`,`saucer`,1,{x:-2,z:0});this.createChair(de,0,0,-3.55,0,`Observation Lounge Head Chair`,`saucer`,1,{x:0,z:5});let he=new q(new J(.18,1.32,6.1),this.woodCherryMat);he.position.set(-5.65,1.78,0),de.add(he);for(let e=0;e<6;e++){let t=new q(new Y(.28,.28,.08,24),ae);t.rotation.z=Math.PI/2,t.position.set(-5.52,1.78,-2.3+e*.92),de.add(t)}this.createConsoleStation(de,5.1,0,-2.5,-Math.PI/2,1.5,`OBSERVATION BRIEFING DISPLAY`,`map`,`Observation Lounge`);let ge=new Bo(16773596,1.8,18);ge.position.set(0,3.37,-122),e.add(ge),this.registerLight(`deck1_observation`,ge)}buildDeck4ShuttlebayComplex(){let e=this.getDeckGroup(4,`saucer`),t=6.2;this.buildRoomBox(e,-12,-84,9,12,3.7,this.carpetSlateMat,this.wallBeigeMat,{east:!0}),this.createTurboliftStation(e,`door_deck4_tl`,-15.5,-84,Math.PI/2,4,`saucer`,`Deck 4 Shuttlebay Turbolift`);let n=[165063,14251782,4674921];for(let t=0;t<5;t++){let r=new q(new Y(.76,.76,1.22,8),new X({color:n[t%3],roughness:.42,metalness:.25}));r.position.set(-13.5+t%2*1.65,.61+Math.floor(t/2)*1.24,-88),e.add(r)}let r=new q(new Y(.28,.28,.76,24),new X({color:3718648,emissive:165063,emissiveIntensity:.45}));r.position.set(-10.5,.42,-87),e.add(r),this.registerInteractive(r,{type:`pickup_prop`,prop:{id:`deuterium_sample`,name:`Deuterium Calibration Cylinder`,color:3718648},mesh:r,prompt:`Pick Up Deuterium Calibration Cylinder [Click / E]`}),this.createSlidingDoor(e,`door_deck4_corridor`,-7.5,-84,Math.PI/2,4,`saucer`,2.25,2.75);let i=this.buildRoomBox(e,2.5,-80,21,20,t,new X({color:3359061,roughness:.52,metalness:.26}),this.metalGreyMat,{west:!0,south:!0});for(let e=-7.5;e<=7.5;e+=3.75){let t=new q(new J(20.6,.42,.48),this.consoleBodyMat);t.position.set(0,5.68,e),i.add(t)}let a=new q(new J(11.5,2.15,2.4),this.wallBeigeMat);a.position.set(0,4.45,-8.75),i.add(a);let o=new q(new Ha(10.2,1.35),this.glassMat);o.position.set(0,4.55,-7.52),o.rotation.x=.16,i.add(o);let s=new q(new J(10,.16,.25),this.coveGlowMat);s.position.set(0,5.38,-7.58),i.add(s);let c=new q(new Ua(3.8,4.15,48),new K({color:16436245,side:2}));c.rotation.x=-Math.PI/2,c.position.set(0,.05,-77),e.add(c),this.shuttlebayForcefieldMesh=new q(new Ha(20.5,t),new K({color:3718648,transparent:!0,opacity:.18,side:2})),this.shuttlebayForcefieldMesh.position.set(2.5,t/2,-70.3),e.add(this.shuttlebayForcefieldMesh);let l=(t,n,r)=>{let i=new U;i.position.set(t,0,n),i.rotation.y=r,e.add(i);let a=new Qi;a.moveTo(-1.32,.34),a.lineTo(1.32,.34),a.lineTo(.98,1.76),a.quadraticCurveTo(0,1.92,-.98,1.76),a.closePath();let o=new Ia(a,{depth:4.5,bevelEnabled:!0,bevelThickness:.32,bevelSize:.22,bevelSegments:6,curveSegments:24});o.translate(0,0,-2.25);let s=new q(o,new X({color:15002611,roughness:.3,metalness:.16}));i.add(s);let c=new q(new Y(.92,1.18,.68,24,1,!1,-Math.PI*.35,Math.PI*.7),new X({color:988970,roughness:.12,metalness:.78}));c.position.set(0,1.32,1.62),c.rotation.x=.28,i.add(c),[-1.38,1.38].forEach(e=>{let t=new q(new Y(.24,.26,3.45,24),new X({color:9741240,roughness:.32,metalness:.52}));t.rotation.x=Math.PI/2,t.position.set(e,.42,-.32),i.add(t);let n=new q(new J(.08,.14,2.65),new K({color:6333946}));n.position.set(e+Math.sign(e)*.23,.44,-.35),i.add(n);let r=new q(new Wa(.25,20,16),new K({color:15680580}));r.position.set(e,.42,1.42),i.add(r)})};l(7.8,-83.5,-.24),l(-1.8,-85.2,.12),this.createConsoleStation(e,-5.2,0,-78.5,.4,2.1,`SHUTTLEBAY 1 FLIGHT OPERATIONS`,`shuttlebay`,`Main Shuttlebay`);let u=new Bo(16317180,2.8,38);u.position.set(2.5,5.6000000000000005,-80),e.add(u),this.registerLight(`deck4_shuttlebay`,u)}buildDeck8SaucerAndBattleBridge(){let e=this.getDeckGroup(8,`saucer`),t=this.getDeckGroup(8,`stardrive`),n=3.8;this.buildRoomBox(e,0,-36,5.4,23,n,this.carpetBurgundyMat,this.wallBeigeMat,{south:!0,west:!0,east:!0});for(let t=-45;t<=-26;t+=3.15)[-2.35,2.35].forEach(r=>{let i=new q(this.corridorRibGeo,this.wallTaupeMat);i.position.set(r,n/2,t),r>0&&(i.rotation.y=Math.PI),e.add(i)});this.createTurboliftStation(e,`door_deck8_saucer_tl`,0,-47.5,0,8,`saucer`,`Deck 8 Saucer Turbolift`),this.createSlidingDoor(e,`door_deck8_quarters`,-8,-41.5,Math.PI/2,8,`saucer`,1.85,2.68);let r=this.buildRoomBox(e,-16.5,-41.5,14.5,9.6,n,this.carpetSlateMat,this.wallBeigeMat,{east:!0,west:!0});for(let e=-1;e<=1;e++){let t=new q(new Ha(2.65,2.4),this.glassMat);t.position.set(-7.1,1.88,e*2.85),t.rotation.y=Math.PI/2,t.rotation.z=-.22,r.add(t);let i=new q(new J(.32,n,.26),this.wallBeigeMat);i.position.set(-7,n/2,e*2.85+1.4),r.add(i)}let i=new q(new J(2.35,.5,2.05),this.carpetBurgundyMat);i.position.set(-3.2,.25,-3.2),r.add(i);let a=new q(new J(2.45,1.25,.18),this.woodCherryMat);a.position.set(-3.2,.62,-4.18),r.add(a);let o=new q(new Y(.68,.46,.46,28),this.glassMat);o.position.set(-3.8,.23,1.8),r.add(o),this.createChair(r,-2.5,0,1.8,-Math.PI/2,`Stateroom Lounge Sofa`,`saucer`,8,{x:-6,z:0}),this.createConsoleStation(r,1.8,0,-3.2,0,1.4,`QUARTERS PERSONAL TERMINAL`,`environment`,`Senior Quarters`);let s=new Bo(16772565,1.8,20);s.position.set(-16.5,3.4499999999999997,-41.5),e.add(s),this.registerLight(`deck8_quarters`,s),this.createSlidingDoor(e,`door_deck8_transporter`,8,-40,Math.PI/2,8,`saucer`,1.85,2.68);let c=this.buildRoomBox(e,14.8,-40,12.8,9.6,n,this.carpetBurgundyMat,this.wallBeigeMat,{west:!0}),l=new q(new Y(2.9,3.2,.32,40),this.consoleBodyMat);l.position.set(2.8,.16,0),c.add(l);let u=new q(new Y(2.95,2.85,.34,40),this.consoleBodyMat);u.position.set(2.8,3.5799999999999996,0),c.add(u);let d=new q(new yi(2.65,40),new K({color:12248829,side:0}));d.rotation.x=Math.PI/2,d.position.set(2.8,3.4,0),c.add(d);let f=new q(new Y(3.3,3.3,2.85,32,1,!0,0,Math.PI),new X({color:16096779,emissive:14251782,emissiveIntensity:.58,side:2}));f.position.set(2.8,1.75,0),c.add(f);let p=new K({color:3718648});for(let e=0;e<6;e++){let t=e/6*Math.PI*2,n=e===0?2:2.8+Math.cos(t)*1.48,r=e===0?0:Math.sin(t)*1.48,i=new q(new Y(.48,.48,.06,28),p);i.position.set(n,.34,r),c.add(i)}let m=new Float32Array(1080);for(let e=0;e<360;e++){let t=Math.random()*2.25,n=Math.random()*Math.PI*2;m[e*3]=2.8+Math.cos(n)*t,m[e*3+1]=.35+Math.random()*2.85,m[e*3+2]=Math.sin(n)*t}let h=new Or;h.setAttribute(`position`,new mr(m,3)),this.transporterParticles=new di(h,new oi({color:16707722,size:.16,transparent:!0,opacity:0})),c.add(this.transporterParticles),this.createConsoleStation(c,-2.5,0,0,Math.PI/2,2.1,`TRANSPORTER CHIEF CONSOLE`,`transporter`,`Transporter Room 1`);let g=new Bo(14742270,1.9,18);g.position.set(14.8,3.4499999999999997,-40),e.add(g),this.registerLight(`deck8_transporter`,g),this.createSlidingDoor(e,`door_sep_saucer`,0,-24.8,0,8,`saucer`,2.2,2.68),this.createSlidingDoor(t,`door_sep_stardrive`,0,-18.5,0,8,`stardrive`,2.2,2.68),this.buildRoomBox(t,0,-14.5,4.8,8,3.65,this.carpetSlateMat,this.metalGreyMat,{north:!0,south:!0});let _=this.buildRoomBox(t,0,-4,12.8,12.8,4.05,this.carpetSlateMat,this.metalGreyMat,{north:!0}),v=new q(new J(6.2,2.85,.32),this.consoleBodyMat);v.position.set(0,1.85,-5.65),_.add(v);let y=new q(new Ha(5.8,2.48),this.battleViewscreenMat);y.position.set(0,1.85,-5.46),_.add(y),this.registerInteractive(y,{type:`terminal`,appId:`viewscreen`,title:`Battle Bridge Tactical Viewscreen`,prompt:`Configure Battle Bridge Viewscreen [Click / E]`}),this.createCommandBucketChair(_,0,.08,.5,0,`Battle Bridge Command Chair`,`stardrive`,8,!0),this.createConsoleStation(_,-2.15,0,-2.2,.2,1.65,`STARDRIVE HELM & WARP CONTROL`,`warp`,`Battle Bridge`),this.createCommandBucketChair(_,-2.15,0,-1.25,.2,`Battle Bridge Helm Seat`,`stardrive`,8,!1),this.createConsoleStation(_,2.15,0,-2.2,-.2,1.65,`STARDRIVE TACTICAL & DOCKING`,`separation`,`Battle Bridge`),this.createCommandBucketChair(_,2.15,0,-1.25,-.2,`Battle Bridge Tactical Seat`,`stardrive`,8,!1),this.createConsoleStation(_,0,0,4.4,Math.PI,2.2,`STARDRIVE ENGINEERING RELAY`,`power`,`Battle Bridge`),this.createTurboliftStation(t,`door_battle_bridge_tl`,5.8,-.5,-Math.PI/2,8,`stardrive`,`Stardrive Battle Bridge Turbolift`);let b=new Bo(14742270,2,20);b.position.set(0,3.6999999999999997,-4),t.add(b),this.registerLight(`deck8_battle_bridge`,b)}buildDeck10TenForward(){let e=this.getDeckGroup(10,`saucer`),t=4.65;this.buildRoomBox(e,0,-298.4,8.2,6.8,3.8,this.carpetBurgundyMat,this.wallBeigeMat,{north:!0}),this.createTurboliftStation(e,`door_deck10_tl`,-3.6,-297.2,Math.PI/2,10,`saucer`,`Deck 10 Ten Forward Turbolift`),this.createSlidingDoor(e,`door_deck10_tenforward`,0,-301.8,0,10,`saucer`,2.4,2.75);let n=this.buildRoomBox(e,0,-308.1,28,12.6,t,this.carpetSlateMat,this.wallTaupeMat,{north:!0},{customCeiling:!0}),r=new q(new Ha(28,7.6),this.ceilingSoffitMat);r.rotation.x=Math.PI/2,r.position.set(0,t,2.5),n.add(r);let i=new q(new Ha(21,4.2),this.ceilingLightMat);i.rotation.x=Math.PI/2,i.position.set(0,4.630000000000001,2.5),n.add(i);let a=Math.hypot(5,1.3000000000000003),o=Math.atan2(1.3000000000000003,5),s=new q(new Ha(28,a),this.ceilingSoffitMat);s.rotation.x=Math.PI/2-o,s.position.set(0,4,-3.8),n.add(s);for(let e=-3;e<=3;e++){let t=e*3.85,r=-6.2+e*e*.08,i=new q(new J(.36,3.5,.78),this.wallBeigeMat);if(i.position.set(t,1.675,r),i.rotation.x=.26,n.add(i),e<3){let t=(e+.5)*3.85,r=-6.25+(e+.5)**2*.08,i=new q(new Ha(3.52,3.05),this.glassMat);i.position.set(t,1.72,r),i.rotation.x=.26,i.rotation.y=(e+.5)*.035,n.add(i)}let a=new q(new J(.32,.2,12.2),this.wallBeigeMat);a.position.set(t*.94,4.300000000000001,0),a.rotation.y=e*.025,a.rotation.x=-.085,n.add(a)}let c=new Qi;c.moveTo(-4.4,-.8),c.lineTo(4.4,-.8),c.absarc(4.4,0,.8,-Math.PI/2,Math.PI/2,!1),c.lineTo(-4.4,.8),c.absarc(-4.4,0,.8,Math.PI/2,-Math.PI/2,!1);let l=new Ia(c,{depth:1.08,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:4,curveSegments:32});l.rotateX(-Math.PI/2);let u=new q(l,new X({color:3718648,emissive:new W(165063),emissiveIntensity:.68,roughness:.18}));u.position.set(0,.02,2.2),n.add(u);let d=new Ia(c,{depth:.1,bevelEnabled:!0,bevelThickness:.035,bevelSize:.06,bevelSegments:4,curveSegments:32});d.rotateX(-Math.PI/2);let f=new q(d,this.woodCherryMat);f.position.set(0,1.13,2.2),n.add(f);let p=new q(d,this.wallBeigeMat);p.scale.set(1.04,2.2,1.08),p.position.set(0,3.65,2.2),n.add(p);let m=[3718648,2278750,16096779,11032055,15680580];for(let e=-4;e<=4;e++){let t=new q(new Y(.06,.09,.38,16),new K({color:m[Math.abs(e)%m.length]}));t.position.set(e*.82,1.4,2.62),n.add(t)}this.registerInteractive(u,{type:`replicator`,item:{id:`synthehol`,name:`Ten Forward Synthehol Ambrosia`,color:3718648},prompt:`Order Demonstration Beverage from Ten Forward Bar [Click / E]`}),[{x:-8.4,z:-2.8},{x:-3.8,z:-3.8},{x:3.8,z:-3.8},{x:8.4,z:-2.8}].forEach((e,t)=>{let r=new q(new Y(.95,.62,.74,32),this.consoleBodyMat);r.position.set(e.x,.37,e.z),n.add(r);let i=new q(new Y(.14,.22,.26,20),new K({color:16707722}));i.position.set(e.x,.87,e.z),n.add(i),this.createChair(n,e.x,0,e.z+1.25,0,`Ten Forward Window Table ${t+1}`,`saucer`,10,{x:e.x,z:-12})}),this.createConsoleStation(n,11.4,0,2,-Math.PI/2,1.6,`TEN FORWARD LOUNGE TERMINAL`,`logs`,`Ten Forward`);let h=new Bo(16768168,2.4,34);h.position.set(0,4.2,-308),e.add(h),this.registerLight(`deck10_ten_forward`,h)}buildDeck11HolodeckAndScienceLab(){let e=this.getDeckGroup(11,`saucer`),t=3.95,n=this.buildRoomBox(e,0,-138,14,9,t,this.carpetBurgundyMat,this.wallBeigeMat,{west:!0,east:!0});for(let e=-5.5;e<=5.5;e+=2.75)[-4.15,4.15].forEach(r=>{let i=new q(this.corridorRibGeo,this.wallTaupeMat);i.position.set(e,t/2,r),i.rotation.y=r<0?-Math.PI/2:Math.PI/2,n.add(i)});this.createTurboliftStation(e,`door_deck11_tl`,0,-142.2,0,11,`saucer`,`Deck 11 Holodeck Turbolift`),this.createConsoleStation(e,-6.2,0,-135.4,Math.PI/2,1.15,`HOLODECK 4 OUTER WALL CONTROL`,`holodeck`,`Deck 11 Corridor`),this.createSlidingDoor(e,`door_deck11_holodeck`,-7.2,-138,Math.PI/2,11,`saucer`,2.15,2.75);let r=Xu();r.repeat.set(8,6);let i=new K({map:r,side:2}),a=this.buildRoomBox(e,-15.5,-138,16.5,15,5.4,i,i,{east:!0},{customCeiling:!0}),o=new q(new Ha(16.5,15),new K({map:r,side:0}));o.rotation.x=Math.PI/2,o.position.y=5.36,a.add(o),this.holodeckArchMesh=new U,this.holodeckArchMesh.position.set(7.6,0,0),a.add(this.holodeckArchMesh);let s=3.65;[-1.9,1.9].forEach(e=>{let t=new q(new J(.52,s,.72),this.metalGreyMat);t.position.set(0,s/2,e),this.holodeckArchMesh.add(t)});let c=new q(new J(.54,.44,4.52),this.metalGreyMat);c.position.set(0,3.4299999999999997,0),this.holodeckArchMesh.add(c),this.createConsoleStation(this.holodeckArchMesh,-.42,0,1.85,Math.PI/2,.95,`HOLODECK 4 CONTROL ARCH`,`holodeck`,`Holodeck 4`);let l=new U;a.add(l),this.holodeckEnvironmentGroups.set(`grid`,l);let u=new q(new Y(1.35,1.65,.42,36),this.consoleBodyMat);u.position.set(0,.21,0),l.add(u);let d=new q(new Ga(1.42,.06,14,40),new K({color:16436245}));d.rotation.x=Math.PI/2,d.position.set(0,.43,0),l.add(d);let f=new U;f.position.set(0,1.65,0);let p=new q(new Y(1.65,1.65,.2,48),new X({color:3718648,emissive:165063,emissiveIntensity:.75,transparent:!0,opacity:.85}));p.scale.set(1.25,1,.96),p.position.set(0,.35,-.65),f.add(p);let m=new q(new Y(.42,.32,1.85,32),new X({color:3718648,emissive:165063,emissiveIntensity:.75,transparent:!0,opacity:.85}));m.rotation.x=Math.PI/2,m.position.set(0,-.25,.55),f.add(m),[-1.1,1.1].forEach(e=>{let t=new q(new Y(.14,.14,1.75,24),new K({color:6333946}));t.rotation.x=Math.PI/2,t.position.set(e,.05,.75),f.add(t)}),l.add(f),this.holodeckSpawnerMeshes.set(`enterprise_model`,f);let h=new U;h.position.set(0,1.75,0);let g=new q(new J(1.75,1.75,1.75),new X({color:1332013,emissive:2278750,emissiveIntensity:.65})),_=new q(new J(1.88,1.88,1.88),new K({color:4906624,wireframe:!0}));h.add(g,_),l.add(h),this.holodeckSpawnerMeshes.set(`borg_cube`,h);let v=new U;v.position.set(0,1.75,0);let y=new q(new za(1.35,2),new X({color:14742270,emissive:3718648,emissiveIntensity:.9,wireframe:!0})),b=new q(new Va(.85,1),new K({color:16020150,transparent:!0,opacity:.75}));v.add(y,b),l.add(v),this.holodeckSpawnerMeshes.set(`crystalline_entity`,v),this.registerInteractive(u,{type:`holodeck_action`,action:`cycle_hologram`,prompt:`Cycle Holographic Matter Projection (Enterprise-D / Borg Cube / Crystalline Entity) [Click / E]`});let x=new U;a.add(x),this.holodeckEnvironmentGroups.set(`tos_bridge`,x);let S=new q(new yi(6.8,64),new X({color:4674921,roughness:.85}));S.rotation.x=-Math.PI/2,S.position.y=.04,x.add(S);let C=new q(new yi(4.2,64),new X({color:3359061,roughness:.9}));C.rotation.x=-Math.PI/2,C.position.y=.06,x.add(C);for(let e=0;e<10;e++){if(e===2)continue;let t=e/10*Math.PI*2,n=new U;n.position.set(Math.sin(t)*6.1,0,Math.cos(t)*6.1),n.rotation.y=t+Math.PI,x.add(n);let r=new q(new J(3.4,3.25,.25),new X({color:6583435,roughness:.5}));r.position.y=1.62,n.add(r);let i=new q(new J(3.35,.62,.35),new X({color:14427686,roughness:.4}));i.position.set(0,2.75,.08),n.add(i);let a=e%2==0?16096779:3718648,o=new q(new Ha(2.8,.76),new K({color:a}));o.position.set(0,1.92,.15),n.add(o);let s=new q(new J(3.2,.88,.65),new X({color:1976635,roughness:.4}));s.position.set(0,.46,.28),n.add(s)}let w=new q(new J(1.8,2.55,.32),new X({color:15680580,roughness:.35}));w.position.set(-4.2,1.28,4.2),w.rotation.y=2.35,x.add(w),this.createChair(x,0,.08,.4,Math.PI/2,`Captain James T. Kirk's NCC-1701 Command Chair (2266)`,`saucer`,11,{x:-5,z:0});let T=new q(new J(1.35,.88,2.65),new X({color:14427686,roughness:.35}));T.position.set(-2.35,.44,0),x.add(T);let E=new q(new Y(.18,.24,.55,20),new K({color:3718648}));E.position.set(-2.35,1.1,-.35),E.rotation.z=-.35,x.add(E);let D=new q(new Y(.08,.11,.42,20),new no({color:2278750,emissive:1409085,emissiveIntensity:.65,transparent:!0,opacity:.88}));D.position.set(-2.15,1.08,.55),x.add(D),this.registerInteractive(D,{type:`holodeck_action`,action:`scotty_toast`,prompt:`Raise a Toast with Scotty’s 2266 Aldebaran Whiskey ("To the Enterprise — No bloody A, B, C, or D!") [Click / E]`});let O=new q(new Ha(5.2,2.65),this.mainViewscreenMat);O.position.set(-5.85,1.92,0),O.rotation.y=Math.PI/2,x.add(O);let k=new U;a.add(k),this.holodeckEnvironmentGroups.set(`klingon_arena`,k);let A=new q(new Ha(16,14.5),new X({color:2561820,roughness:.92}));A.rotation.x=-Math.PI/2,A.position.y=.04,k.add(A);let ee=new q(new Ua(2.4,2.85,48),new K({color:15680580,side:2}));ee.rotation.x=-Math.PI/2,ee.position.y=.06,k.add(ee);for(let e of[{x:-5.8,z:-5.2},{x:0,z:-5.6},{x:4.8,z:-5.2},{x:-5.8,z:5.2},{x:0,z:5.6},{x:4.8,z:5.2}]){let t=new q(new Y(.55,.78,5.25,8),new X({color:1841431,roughness:.85}));t.position.set(e.x,5.25/2,e.z),k.add(t);let n=new q(new J(.16,3.2,.82),new K({color:16347926}));n.position.set(e.x,1.85,e.z),k.add(n)}let j=new q(new J(.45,1.65,2.4),this.woodCherryMat);j.position.set(-6.8,.82,0),k.add(j);let te=new q(new Ga(.68,.055,12,32,Math.PI),new X({color:14870768,metalness:.88,roughness:.18}));te.rotation.y=Math.PI/2,te.position.set(-6.5,1.3,0),k.add(te),this.holodeckCombatTargets=[];let M=[15680580,16096779,3718648];for(let e=0;e<3;e++){let t=new U,n=new q(new Va(.68,1),new X({color:M[e],emissive:M[e],emissiveIntensity:.85,wireframe:!0})),r=new q(new Wa(.38,20,20),new K({color:16777215}));t.add(n,r),t.position.set(-3.5+e*2.8,1.55,e%2==0?-2.2:2.2),k.add(t),this.holodeckCombatTargets.push({group:t,outerCage:n,baseX:-3.5+e*2.8,baseZ:e%2==0?-2.2:2.2,phase:e*2.1,hitFlash:0}),this.registerInteractive(r,{type:`holodeck_action`,action:`strike_klingon_target`,targetIndex:e,prompt:`Strike Klingon Combat Drone #${e+1} (+100 Tactical Score) [Click / E]`}),this.registerInteractive(n,{type:`holodeck_action`,action:`strike_klingon_target`,targetIndex:e,prompt:`Strike Klingon Combat Drone #${e+1} (+100 Tactical Score) [Click / E]`})}let N=new U;a.add(N),this.holodeckEnvironmentGroups.set(`sherlock_noir`,N);let P=new q(new Ha(15.8,14.2),this.woodCherryMat);P.rotation.x=-Math.PI/2,P.position.y=.04,N.add(P);let ne=new q(new Ha(10.5,8.5),this.carpetBurgundyMat);ne.rotation.x=-Math.PI/2,ne.position.y=.06,N.add(ne);let re=new q(new J(3.2,2.8,.85),this.woodCherryMat);re.position.set(0,1.4,-6.4),N.add(re);let ie=new q(new J(1.6,1.1,.35),new K({color:16347926}));ie.position.set(0,.65,-6.1),N.add(ie);let ae=new q(new J(2.6,.82,1.45),this.woodCherryMat);ae.position.set(-2.6,.41,-.5),N.add(ae);let oe=new q(new bi(.24,.22,20),new K({color:2278750}));oe.position.set(-2.6,1.05,-.8),N.add(oe),this.createChair(N,-2.6,0,-1.65,0,`Detective's Leather Study Chair`,`saucer`,11,{x:-2.6,z:3});for(let e of[{id:`moriarty_schematic`,name:`Professor Moriarty's Holodeck Override Schematic`,color:16436245,x:-2.1,y:.88,z:-.35},{id:`maltese_statuette`,name:`The Obsidian Falcon Statuette (1941 San Francisco)`,color:3718648,x:0,y:1.55,z:-6.1},{id:`datas_violin`,name:`Lt. Cmdr. Data's Stradivarius Violin & Calabash Pipe`,color:16347926,x:2.8,y:.65,z:2.4},{id:`encrypted_padd`,name:`Encrypted Starfleet Arch Access PADD`,color:11032055,x:-4.8,y:.95,z:3.8}]){let t=new q(new Y(.28,.34,e.y-.15,20),this.consoleBodyMat);t.position.set(e.x,(e.y-.15)/2,e.z),N.add(t);let n=new q(new Va(.26,1),new X({color:e.color,emissive:e.color,emissiveIntensity:.85}));n.position.set(e.x,e.y,e.z),N.add(n),this.registerInteractive(n,{type:`holodeck_action`,action:`inspect_mystery_clue`,clueId:e.id,clueName:e.name,prompt:`Inspect Mystery Clue: ${e.name} [Click / E]`})}let se=new U;a.add(se),this.holodeckEnvironmentGroups.set(`stellar_cartography`,se);for(let e=2;e<=6;e+=2){let t=new q(new Ua(e-.04,e+.04,64),new K({color:165063,side:2}));t.rotation.x=-Math.PI/2,t.position.y=.08,se.add(t)}let ce=[{id:`earth`,name:`Sector 001 — Earth & Spacedock`,color:3718648,x:0,y:1.7,z:0,radius:.74},{id:`vulcan`,name:`40 Eridani A — Vulcan`,color:16347926,x:-4.2,y:1.8,z:-3.2,radius:.6},{id:`qonos`,name:`Qo'noS — Klingon Homeworld`,color:2278750,x:3.8,y:1.8,z:-3.2,radius:.64},{id:`romulus`,name:`Romulus & Remus (Neutral Zone)`,color:1357990,x:-4.2,y:1.8,z:3.2,radius:.6},{id:`bajor`,name:`Bajor & Deep Space 9 Wormhole`,color:12616956,x:3.8,y:1.8,z:3.2,radius:.64}];this.stellarPlanetMeshes=[];for(let e of ce){let t=new U;t.position.set(e.x,e.y,e.z),se.add(t);let n=new q(new Wa(e.radius,32,32),new X({color:e.color,emissive:e.color,emissiveIntensity:.65,roughness:.28})),r=new q(new Ga(e.radius*1.45,.03,14,48),new K({color:14742270}));r.rotation.x=Math.PI/2.4,t.add(n,r),this.stellarPlanetMeshes.push({group:t,globe:n,orbitRing:r}),this.registerInteractive(n,{type:`holodeck_action`,action:`warp_to_star_system`,systemId:e.id,systemName:e.name,prompt:`Engage Warp Drive to ${e.name} (Updates Real Exterior Space View!) [Click / E]`})}this.createSlidingDoor(e,`door_deck11_sciencelab`,7.2,-138,Math.PI/2,11,`saucer`,1.85,2.68);let F=this.buildRoomBox(e,14.5,-138,14,12,t,this.carpetSlateMat,this.wallBeigeMat,{west:!0}),I=new q(new Wa(1.55,32,32),new K({color:3718648,wireframe:!0}));I.position.set(0,1.85,0),F.add(I),this.createConsoleStation(F,0,0,-3.5,0,2.2,`ASTROMETRICS SENSOR ARRAY`,`sensors`,`Science Lab`);let le=new Bo(14742270,2.4,30);le.position.set(-15.5,4.95,-138),e.add(le),this.registerLight(`deck11_holodeck`,le)}buildDeck12Sickbay(){let e=this.getDeckGroup(12,`saucer`),t=3.9;this.buildRoomBox(e,0,-138,12,8,t,this.carpetBurgundyMat,this.wallBeigeMat,{east:!0}),this.createTurboliftStation(e,`door_deck12_tl`,-4.2,-138,Math.PI/2,12,`saucer`,`Deck 12 Medical Turbolift`),this.createSlidingDoor(e,`door_deck12_sickbay`,6.2,-138,Math.PI/2,12,`saucer`,2.05,2.68);let n=this.buildRoomBox(e,14.8,-138,16.5,13.5,t,this.carpetSlateMat,this.wallBeigeMat,{west:!0}),r=new q(new Y(.56,.48,.72,32),this.consoleBodyMat);r.scale.set(1,1,1.95),r.position.set(1.5,.36,0),n.add(r);let i=new q(new vi(.48,1.25,12,24),this.carpetBurgundyMat);i.rotation.x=Math.PI/2,i.scale.set(1.05,1,.28),i.position.set(1.5,.78,0),n.add(i);let a=Zu(`BIOBED 1 TELEMETRY // 68 BPM`,`#38bdf8`,`#22c55e`),o=new q(new Ha(2.35,.95),new K({map:a.texture}));o.position.set(1.5,2.05,1.4),o.rotation.y=Math.PI,n.add(o);let s=new q(new vi(.24,1.1,10,20),new X({color:165063,roughness:.6}));s.rotation.x=Math.PI/2,s.position.set(1.5,1.05,.1),n.add(s);let c=new q(new Ga(.88,.085,14,32,Math.PI),this.metalGreyMat);c.position.set(1.5,.85,-.35),n.add(c),this.sickbayScannerBeam=new q(new Ha(1.25,.85),new K({color:2278750,transparent:!0,opacity:0,side:2})),this.sickbayScannerBeam.position.set(1.5,1.22,0),n.add(this.sickbayScannerBeam),[-4.2,4.2].forEach(e=>{let t=new q(new Y(.5,.45,.74,28),this.consoleBodyMat);t.scale.set(1.9,1,1),t.position.set(5.2,.37,e),n.add(t)}),this.createConsoleStation(n,1.5,0,-2.1,0,1.65,`BIOBED 1 DIAGNOSTIC SCANNER`,`sickbay`,`Primary Sickbay`);let l=new q(new J(5.6,3.5,.12),this.glassMat);l.position.set(-3.5,3.5/2,-3.2),n.add(l),this.createConsoleStation(n,-3.5,0,-5,0,1.5,`DR. CRUSHER'S CMO DESK`,`sickbay`,`CMO Office`);let u=new Bo(15792639,2.1,24);u.position.set(14.8,3.55,-138),e.add(u),this.registerLight(`deck12_sickbay`,u)}buildDeck36MainEngineering(){let e=this.getDeckGroup(36,`stardrive`),t=8.8,n=4.2;this.buildRoomBox(e,0,36.5,7.8,9,3.85,this.carpetSlateMat,this.metalGreyMat,{south:!0}),this.createTurboliftStation(e,`door_deck36_tl`,-3.4,35,Math.PI/2,36,`stardrive`,`Main Engineering Turbolift`),this.createSlidingDoor(e,`door_deck36_isolation`,0,41,0,36,`stardrive`,2.85,2.85);let r=this.buildRoomBox(e,0,55,26,28,t,this.carpetSlateMat,this.metalGreyMat,{north:!0});for(let e=-10.5;e<=10.5;e+=7)[-12.6,12.6].forEach(t=>{let n=new q(new J(.55,8.4,.72),this.consoleBodyMat);n.position.set(t,8.4/2,e),r.add(n)});let i=new U;i.position.set(0,0,0),r.add(i);let a=new q(new Y(1.58,1.58,t,48),new no({color:165063,emissive:new W(223649),emissiveIntensity:.85,transparent:!0,opacity:.68,roughness:.12}));a.position.y=t/2,i.add(a);let o=new q(new Y(2.18,2.18,1.48,48),this.consoleBodyMat);o.position.y=3.25,i.add(o);let s=new q(new Y(2.02,2.02,.72,48),new K({color:14742270}));s.position.y=3.25,i.add(s),[-3.9,3.9].forEach(e=>{let n=new q(new J(.68,t,1.18),this.consoleBodyMat);n.position.set(e,t/2,0),i.add(n);let r=new q(new Ha(.4,t*.88),new K({color:16096779,side:2}));r.position.set(e<0?e+.35:e-.35,t/2,0),r.rotation.y=Math.PI/2,i.add(r)});for(let e=0;e<18;e++){let t=new K({color:8246268}),n=new q(new Ga(1.66,.1,14,48),t);n.rotation.x=Math.PI/2,n.position.y=.45+e*.46,i.add(n),this.warpCoreRings.push({mesh:n,mat:t,index:e})}[1.08,5.28].forEach(e=>{let t=new q(new Ga(3.35,.07,12,48),this.metalGreyMat);t.rotation.x=Math.PI/2,t.position.y=e,i.add(t)}),this.warpCoreLight=new Bo(3718648,4.2,38),this.warpCoreLight.position.set(0,3.4,0),i.add(this.warpCoreLight);let c=new q(new Y(2.15,1.85,.94,8),this.consoleBodyMat);c.scale.set(1.05,1,.68),c.rotation.y=Math.PI/8,c.position.set(0,.47,-6.5),r.add(c);let l=new q(new Y(1.75,1.82,.18,8),this.coveGlowMat);l.scale.set(1.05,1,.68),l.rotation.y=Math.PI/8,l.position.set(0,.1,-6.5),r.add(l);let u=Zu(`WARP CORE & INTERMIX CONTROL`,`#38bdf8`,`#f59e0b`);this.consoleDisplays.push({...u,title:`Pool Table Console`,appId:`warp`});let d=new q(new Ha(3.35,1.82),new K({map:u.texture}));d.rotation.x=-Math.PI/2,d.rotation.z=Math.PI,d.position.set(0,.955,-6.5),r.add(d),this.registerInteractive(d,{type:`terminal`,appId:`warp`,title:`Main Engineering Pool Table (Warp Core & Power)`,prompt:`Operate Engineering Pool Table Console [Click / E]`}),this.msdDisplay=Qu();let f=new q(new J(12.9,5.35,.22),this.consoleBodyMat);f.position.set(0,2.75,13.72),r.add(f);let p=new q(new Ha(12.4,4.95),new K({map:this.msdDisplay.texture}));p.position.set(0,2.75,13.58),p.rotation.y=Math.PI,r.add(p),this.registerInteractive(p,{type:`terminal`,appId:`power`,title:`Master Systems Display (MSD)`,prompt:`Inspect Master Systems Display & EPS Power [Click / E]`});let m=new q(new Ua(4.35,10.6,56),new X({color:8095380,roughness:.42,metalness:.55,side:2}));m.rotation.x=-Math.PI/2,m.position.set(0,n,0),r.add(m);let h=new q(new Ga(10.55,.06,12,56),this.wallBeigeMat);h.rotation.x=Math.PI/2,h.position.set(0,5.25,0),r.add(h);for(let e=0;e<18;e++){let t=new q(new J(1.95,.16,.52),this.metalGreyMat);t.position.set(7.4,(e+1)*(n/18),-7+e*.48),r.add(t)}this.createConsoleStation(r,-6.2,n,0,Math.PI/2,1.75,`UPPER MEZZANINE MAGNETIC COIL MONITOR`,`warp`,`Engineering Upper Catwalk`),this.createSlidingDoor(e,`door_deck36_jefferies`,-12.8,55,Math.PI/2,36,`stardrive`,1.55,2.05);let g=new U;g.position.set(-16.5,0,55),e.add(g);let _=new q(new Ha(7.2,2.4),this.metalGreyMat);_.rotation.x=-Math.PI/2,_.position.y=.05,g.add(_);for(let e=-3;e<=3;e+=1.5){let t=new q(new Ga(1.38,.12,12,24),this.consoleBodyMat);t.rotation.y=Math.PI/2,t.position.set(e,1.32,0),g.add(t)}this.createConsoleStation(g,-2.5,0,0,Math.PI/2,1.1,`JEFFERIES TUBE EPS JUNCTION 36-A`,`power`,`Jefferies Tube Conduit`);let v=new Bo(14742270,2.6,40);v.position.set(0,8.200000000000001,52),e.add(v),this.registerLight(`deck36_engineering`,v)}buildStructuralDeckStack(){let e=new K({color:16096779}),t=new K({color:3718648}),n=new X({color:4940666,roughness:.75}),r=new X({color:7239813,roughness:.65,metalness:.25}),i=new X({color:9082531,roughness:.4,metalness:.5});for(let a of Au){let o=this.getDeckGroup(a.deck,a.section),s=new U;s.name=`Honeycomb_Cutaway_Deck_${a.deck}`,s.visible=!1;let c=a.section===`saucer`,l=!c&&a.deck>=38?Math.max(.42,1-(a.deck-37)*.12):1,u=c?Math.min(218,a.radiusX*.86):Math.min(54,a.radiusX*.84*l),d=c?Math.min(168,a.radiusZ*.86):Math.min(82,a.radiusZ*.84*l),f=c?-139:a.centerZ;s.position.set(0,.04,f);let p=a.isHero?Math.min(u*.45,34):u*.14;if(u>p+4){let r=new Ua(p,u,56,2);r.rotateX(-Math.PI/2),r.scale(1,1,d/u);let i=a.deck%3==0?n:a.deck%2==0?this.carpetBurgundyMat:this.carpetSlateMat;s.add(new q(r,i));let o=p+(u-p)*.54,l=new Y(o,o,2.35,48,1,!0);l.scale(1,1,d/u);let f=new q(l,this.wallBeigeMat);f.position.y=1.18,s.add(f);let m=new Y(o+.15,o+.15,.22,48,1,!0);m.scale(1,1,d/u);let h=new q(m,a.deck%2==0?e:t);h.position.y=1.54,s.add(h);let g=c?Math.min(24,Math.max(8,Math.floor(u/9))):10,_=(u-p)*.88,v=p+(u-p)*.5,y=new J(_,2.35,.34);for(let e=0;e<g;e++){let t=e/g*Math.PI*2+a.deck*.13,n=Math.cos(t)*v,r=Math.sin(t)*v*(d/u),i=new q(y,e%3==0?this.wallTaupeMat:this.wallBeigeMat);i.position.set(n,1.18,r),i.rotation.y=-t*(d/u),s.add(i)}}a.deck%2==0&&[-1,1].forEach(e=>{let t=new q(new Y(1.45,1.45,wu,20),i);t.position.set(e*Math.min(u*.38,42),wu*.5,0),s.add(t)}),c&&a.deck>=5&&a.deck<=12&&a.deck%2==1&&[-1,1].forEach(e=>{let t=new q(new Y(.95,.95,u*.72,16),r);t.rotation.z=Math.PI/2,t.position.set(u*.48*e,1.65,-d*.18),t.rotation.y=e*.32,s.add(t)}),o.add(s),this.structuralPlates.push(s)}}ensureModularDeckPopulated(e){let t=Au[e-1];if(!t||t.isHero)return;let n=this.getDeckGroup(e,t.section);if(n.userData.populated)return;n.userData.populated=!0;let r=t.centerZ,i=3.75,a=this.buildRoomBox(n,0,r,10.2,7.6,i,t.section===`saucer`?this.carpetBurgundyMat:this.carpetSlateMat,t.section===`saucer`?this.wallBeigeMat:this.metalGreyMat,{west:!0,east:!0});[-3.2,3.2].forEach(e=>{let t=new q(this.corridorRibGeo,this.wallTaupeMat);t.position.set(e,i/2,3.45),t.rotation.y=Math.PI/2,a.add(t)}),this.createTurboliftStation(n,`door_deck${e}_tl`,0,r-3.4,0,e,t.section,`Deck ${e} Turbolift`);let o=this.buildRoomBox(n,-8.8,r,7.8,7.8,i,this.carpetSlateMat,this.wallBeigeMat,{east:!0});this.createConsoleStation(o,-1.9,0,0,Math.PI/2,1.6,`${t.facilities[0]||t.name}`,`logs`,`Deck ${e}`);let s=this.buildRoomBox(n,8.8,r,7.8,7.8,i,this.carpetBurgundyMat,this.wallBeigeMat,{west:!0});this.createConsoleStation(s,1.9,0,0,-Math.PI/2,1.6,`${t.facilities[1]||t.purpose}`,`environment`,`Deck ${e}`);let c=new Bo(16773596,1.9,26);c.position.set(0,3.4,r),n.add(c)}setExplodedFactor(e){for(let[,t]of this.deckGroups){let n=t.userData.baseY,r=n-10;t.position.y=e?n+r*.65:n}}update(e,t){let n=this.shipState,r=n.cutawayMode!==`off`;for(let e of this.structuralPlates)e.visible=r;let i=(n.cameraMode===`exterior_orbit`||n.cameraMode===`free_flight`)&&!r;for(let[e,t]of this.deckGroups.entries())t.visible=!i||e===`saucer_deck_1`||e===`saucer_deck_10`;let a=n.alertState===`red`,o=n.alertState===`yellow`,s=n.lighting.masterBrightness;for(let[e,r]of this.roomLights.entries()){let i=n.lighting.roomLights[e]!==!1;for(let e of r)i?a?(e.color.setHex(16726832),e.intensity=(1.2+.7*Math.sin(t*5))*s):o?(e.color.setHex(16498468),e.intensity=1.75*s):(e.color.setHex(16773596),e.intensity=2.1*s):e.intensity=.08}let c=1.5+(n.warpCore.online?n.warpCore.warpFactor:0)*.85;for(let e of this.warpCoreRings)Math.sin(t*c*4-Math.abs(e.index-6.5)*.72)>.35&&n.warpCore.online?(e.mat.color.setHex(16777215),e.mesh.scale.setScalar(1.06)):(e.mat.color.setHex(n.warpCore.online?165063:3359061),e.mesh.scale.setScalar(1));this.warpCoreLight&&(this.warpCoreLight.intensity=n.warpCore.online?3.2+Math.sin(t*c*4)*1.5:.2),this.livingstonFish&&(this.livingstonFish.position.x=-1.8+Math.cos(t*1.4)*.22,this.livingstonFish.position.z=-2.7+Math.sin(t*1.4)*.22,this.livingstonFish.rotation.y=-t*1.4),this.sickbayScannerBeam&&(n.sickbay.scanning?(this.sickbayScannerBeam.material.opacity=.55,this.sickbayScannerBeam.position.z=Math.sin(t*3.2)*.85):this.sickbayScannerBeam.material.opacity=0),this.transporterParticles&&(n.transporter.energizing?(this.transporterParticles.material.opacity=Math.sin(n.transporter.progress*Math.PI),this.transporterParticles.rotation.y+=e*3.5):this.transporterParticles.material.opacity=0);for(let[e,t]of this.holodeckEnvironmentGroups.entries())t.visible=n.holodeck.activeProgram===e;this.holodeckArchMesh&&(this.holodeckArchMesh.visible=n.holodeck.archVisible);for(let[e,r]of this.holodeckSpawnerMeshes.entries())r.visible=n.holodeck.spawnedHologram===e,r.visible&&(r.rotation.y=t*.65,r.position.y=1.68+Math.sin(t*2.2)*.08);if(n.holodeck.activeProgram===`klingon_arena`){let r=1+(n.holodeck.klingonLevel-1)*.35;for(let n of this.holodeckCombatTargets)n.group.position.x=n.baseX+Math.sin(t*1.8*r+n.phase)*1.35,n.group.position.y=1.45+Math.cos(t*2.4*r+n.phase)*.42,n.group.position.z=n.baseZ+Math.cos(t*1.5*r+n.phase)*1.45,n.outerCage.rotation.x+=e*2.2,n.outerCage.rotation.y+=e*3.1,n.hitFlash>0?(n.hitFlash=Math.max(0,n.hitFlash-e*3),n.group.scale.setScalar(1+n.hitFlash*.6)):n.group.scale.setScalar(1)}if(n.holodeck.activeProgram===`stellar_cartography`)for(let e of this.stellarPlanetMeshes)e.globe.rotation.y=t*.55,e.orbitRing.rotation.z=t*.35;this.shuttlebayForcefieldMesh&&(this.shuttlebayForcefieldMesh.visible=n.shuttlebay.forcefieldActive,this.shuttlebayForcefieldMesh.material.opacity=.14+.06*Math.sin(t*4));for(let[e,t]of this.doorMeshes.entries()){let r=n.doors[e],i=r?r.openAmount:0,a=t.width/2*.92*i;t.leftLeaf.position.x=-t.width/4-a,t.rightLeaf.position.x=t.width/4+a,r&&(r.state===`locked`?t.statusLedMat.color.setHex(15680580):r.state===`obstructed`?t.statusLedMat.color.setHex(16096779):r.state===`open`?t.statusLedMat.color.setHex(2278750):t.statusLedMat.color.setHex(3718648))}}},td={command:10033947,ops:14251782,science:165063,civilian:7153881},nd=class{constructor(e,t){this.interior=e,this.shipState=t,this.crewAgents=[],this.buildCrewPopulation()}createHumanoidMesh(e=`ops`,t=`Starfleet Crew`){let n=new U,r=td[e]||td.ops,i=new X({color:1120295,roughness:.7}),a=new X({color:r,roughness:.55}),o=new X({color:15055001,roughness:.6}),s=new X({color:16498468,metalness:.8,roughness:.2}),c=new q(new Y(.085,.07,.78,10),i);c.position.set(-.11,.39,0),n.add(c);let l=new q(new Y(.085,.07,.78,10),i);l.position.set(.11,.39,0),n.add(l);let u=new q(new Y(.21,.17,.62,12),a);u.position.y=1.08,n.add(u);let d=new q(new Y(.22,.21,.16,12),i);d.position.y=1.32,n.add(d);let f=new q(new J(.05,.06,.02),s);f.position.set(.09,1.24,-.2),n.add(f);let p=new q(new Wa(.135,14,12),o);p.position.y=1.54,n.add(p);let m=new q(new Y(.055,.048,.56,10),a);m.position.set(-.26,1.06,0),n.add(m);let h=new q(new Y(.055,.048,.56,10),a);return h.position.set(.26,1.06,0),n.add(h),n.userData={leftLeg:c,rightLeg:l,leftArm:m,rightArm:h,roleLabel:t},n}buildCrewPopulation(){let e=[{role:`Flight Controller — Conn`,div:`ops`,deck:1,section:`saucer`,mode:`station`,x:-1.55,yOffset:.02,z:-141.5,rotY:0},{role:`Operations Officer — Ops`,div:`ops`,deck:1,section:`saucer`,mode:`station`,x:1.55,yOffset:.02,z:-141.5,rotY:0},{role:`Aft Science Specialist`,div:`science`,deck:1,section:`saucer`,mode:`station`,x:5.2,yOffset:.28,z:-130.5,rotY:2.6},{role:`Mission Briefing Officer`,div:`command`,deck:1,section:`saucer`,mode:`station`,x:-2.4,z:-123,rotY:Math.PI/2},{role:`Flight Deck Chief (Bay 1)`,div:`ops`,deck:4,section:`saucer`,mode:`patrol`,waypoints:[{x:-4.5,z:-81},{x:4.5,z:-81}]},{role:`Shuttle Maintenance Engineer`,div:`ops`,deck:4,section:`saucer`,mode:`station`,x:5.6,z:-83.5,rotY:-.6},{role:`Deck 8 Corridor Officer`,div:`command`,deck:8,section:`saucer`,mode:`patrol`,crossesBoundary:!0,waypoints:[{x:0,z:-44},{x:0,z:-26.5}]},{role:`Transporter Chief (Room 1)`,div:`ops`,deck:8,section:`saucer`,mode:`station`,x:11.5,z:-40,rotY:Math.PI/2},{role:`Off-Duty Officer (Quarters)`,div:`science`,deck:8,section:`saucer`,mode:`station`,x:-18.5,z:-41.5,rotY:Math.PI/2},{role:`Battle Bridge Tactical Officer`,div:`command`,deck:8,section:`stardrive`,mode:`station`,x:2.1,z:-5.5,rotY:0},{role:`Battle Bridge Systems Specialist`,div:`ops`,deck:8,section:`stardrive`,mode:`patrol`,waypoints:[{x:-3.5,z:-2},{x:3.5,z:-2}]},{role:`Ten Forward Host (Bar)`,div:`civilian`,deck:10,section:`saucer`,mode:`station`,x:0,z:-304.8,rotY:0},{role:`Off-Duty Science Officer`,div:`science`,deck:10,section:`saucer`,mode:`station`,x:-3.8,z:-312.6,rotY:0},{role:`Ten Forward Patron`,div:`civilian`,deck:10,section:`saucer`,mode:`patrol`,waypoints:[{x:-7.5,z:-309.2},{x:7.5,z:-309.2}]},{role:`Stellar Cartography Researcher`,div:`science`,deck:11,section:`saucer`,mode:`patrol`,waypoints:[{x:11.5,z:-140.5},{x:17.5,z:-135.5}]},{role:`Chief Medical Officer`,div:`science`,deck:12,section:`saucer`,mode:`station`,x:15.2,z:-140.8,rotY:0},{role:`Medical Nurse Specialist`,div:`science`,deck:12,section:`saucer`,mode:`patrol`,waypoints:[{x:12.5,z:-135},{x:18.5,z:-135}]},{role:`Chief Engineering Officer`,div:`ops`,deck:36,section:`stardrive`,mode:`station`,x:-2.4,z:47.5,rotY:Math.PI/2},{role:`Warp Core Specialist`,div:`ops`,deck:36,section:`stardrive`,mode:`patrol`,waypoints:[{x:-5.4,z:49.8},{x:5.4,z:49.8},{x:5.4,z:60.2},{x:-5.4,z:60.2}]},{role:`MSD Diagnostic Engineer`,div:`ops`,deck:36,section:`stardrive`,mode:`station`,x:-3.2,z:65.5,rotY:Math.PI}];for(let t of e){let e=this.createHumanoidMesh(t.div,t.role),n=this.interior.getDeckGroup(t.deck,t.section),r=t.mode===`patrol`?t.waypoints[0].x:t.x,i=t.mode===`patrol`?t.waypoints[0].z:t.z;e.position.set(r,t.yOffset??.02,i),e.rotation.y=t.rotY||0,n.add(e),this.crewAgents.push({...t,mesh:e,wpIndex:0,speed:1.45+Math.random()*.35,phase:Math.random()*Math.PI*2})}}update(e,t){let n=this.shipState.crewMode===`populated`;for(let r of this.crewAgents)if(r.mesh.visible=n,n){if(r.mode===`patrol`&&r.waypoints?.length>1){let n=r.waypoints[r.wpIndex],i=n.x-r.mesh.position.x,a=n.z-r.mesh.position.z,o=Math.hypot(i,a);if(o<.25)r.wpIndex=(r.wpIndex+1)%r.waypoints.length;else{let n=Math.min(o,r.speed*e);r.mesh.position.x+=i/o*n,r.mesh.position.z+=a/o*n,r.mesh.rotation.y=Math.atan2(-i,-a);let s=Math.sin(t*6.5+r.phase)*.42;r.mesh.userData.leftLeg.rotation.x=s,r.mesh.userData.rightLeg.rotation.x=-s,r.mesh.userData.leftArm.rotation.x=-s*.65,r.mesh.userData.rightArm.rotation.x=s*.65}}else r.mesh.userData.leftArm.rotation.x=-.35+Math.sin(t*2.2+r.phase)*.08,r.mesh.userData.rightArm.rotation.x=-.35+Math.cos(t*2.5+r.phase)*.08}}},rd=class{constructor(e,t,n,r,i){this.camera=e,this.domElement=t,this.exterior=n,this.interior=r,this.shipState=i,this.localPos=new H(0,Du(1,`saucer`)+.14,-137.5),this.yaw=0,this.pitch=0,this.eyeHeight=1.72,this.orbitTarget=new H(0,12,-40),this.orbitRadius=560,this.orbitTheta=.68,this.orbitPhi=1.28,this.orbitTrackSection=`both`,this.orbitLerpTarget=null,this.freePos=new H(260,95,-340),this.freeYaw=.65,this.freePitch=-.18,this.tourIndex=0,this.tourTimer=0,this.tourStops=[{mode:`exterior_orbit`,presetId:`ext_three_quarter`,duration:7,label:`Stop 1/8: USS Enterprise NCC-1701-D — Three-Quarter Hero View`},{mode:`exterior_orbit`,presetId:`ext_ten_forward`,duration:6.5,label:`Stop 2/8: Forward Saucer Rim — Ten Forward Panoramic Windows`},{mode:`interior_walk`,roomId:`deck1_bridge`,duration:8,label:`Stop 3/8: Deck 1 — Main Bridge, Conn, Ops & Tactical Horseshoe`},{mode:`interior_walk`,roomId:`deck1_ready_room`,duration:6.5,label:`Stop 4/8: Deck 1 — Captain Picard's Ready Room & Livingston`},{mode:`interior_walk`,roomId:`deck10_ten_forward`,duration:7,label:`Stop 5/8: Deck 10 — Ten Forward Lounge Looking Out into Space`},{mode:`interior_walk`,roomId:`deck11_holodeck`,duration:8,label:`Stop 6/8: Deck 11 — Holodeck 4 Interactive Simulation Matrix`},{mode:`interior_walk`,roomId:`deck36_engineering`,duration:8,label:`Stop 7/8: Deck 36 — Main Engineering & Matter/Antimatter Warp Core`},{mode:`interior_walk`,roomId:`deck8_battle_bridge`,duration:8,label:`Stop 8/8: Deck 8 — Stardrive Battle Bridge & Separation Interface`}],this.keys=new Set,this.isDragging=!1,this.lastPointer={x:0,y:0},this.hoveredInteractive=null,this.raycaster=new cs,this.pointerNDC=new V(0,0),this.heldPropGroup=new U,this.camera.add(this.heldPropGroup),this.bindEvents()}bindEvents(){window.addEventListener(`keydown`,e=>{if(e.target.tagName===`INPUT`||e.target.tagName===`SELECT`||e.target.tagName===`TEXTAREA`)return;let t=e.code;this.keys.add(t),t===`KeyE`?this.triggerPrimaryInteraction():t===`KeyC`&&this.shipState.cameraMode===`interior_walk`?(this.shipState.crawlMode=!this.shipState.crawlMode,this.shipState.seatedStation=null,$.playLCARSChirp(`select`),this.shipState.emit(`change`,this.shipState)):t===`KeyG`&&this.shipState.carriedProp?this.dropCarriedProp():t===`Space`&&this.shipState.seatedStation&&this.standUp()}),window.addEventListener(`keyup`,e=>{this.keys.delete(e.code)}),this.domElement.addEventListener(`pointerdown`,e=>{(e.button===0||e.button===2)&&($.init(),this.isDragging=!0,this.dragMoved=!1,this.lastPointer.x=e.clientX,this.lastPointer.y=e.clientY)}),window.addEventListener(`pointermove`,e=>{let t=this.domElement.getBoundingClientRect();if(this.pointerNDC.x=(e.clientX-t.left)/t.width*2-1,this.pointerNDC.y=-((e.clientY-t.top)/t.height)*2+1,!this.isDragging)return;let n=e.clientX-this.lastPointer.x,r=e.clientY-this.lastPointer.y;Math.hypot(n,r)>3&&(this.dragMoved=!0),this.lastPointer.x=e.clientX,this.lastPointer.y=e.clientY;let i=this.shipState.cameraMode;i===`exterior_orbit`?(this.orbitLerpTarget=null,this.orbitTheta-=n*.0055,this.orbitPhi=Math.max(.12,Math.min(Math.PI-.12,this.orbitPhi-r*.0055))):i===`interior_walk`||i===`guided_tour`?(this.yaw-=n*.0042,this.pitch=Math.max(-1.35,Math.min(1.35,this.pitch-r*.0042))):i===`free_flight`&&(this.freeYaw-=n*.0042,this.freePitch=Math.max(-1.45,Math.min(1.45,this.freePitch-r*.0042)))}),window.addEventListener(`pointerup`,e=>{this.isDragging&&!this.dragMoved&&e.button===0&&this.hoveredInteractive&&this.executeInteraction(this.hoveredInteractive),this.isDragging=!1}),this.domElement.addEventListener(`wheel`,e=>{this.shipState.cameraMode===`exterior_orbit`&&(this.orbitLerpTarget=null,this.orbitRadius=Math.max(18,Math.min(1800,this.orbitRadius+e.deltaY*.35)))},{passive:!0})}enterRoomById(e){let t=Ou.find(t=>t.id===e);t&&this.teleportToRoom(t)}teleportToRoom(e){this.shipState.cameraMode=`interior_walk`,this.shipState.cutawayMode=`off`,this.exterior.setCutawayMode(`off`),this.interior.setExplodedFactor(!1),this.shipState.playerSection=e.section,this.shipState.currentDeck=e.deck,this.shipState.currentRoomId=e.id,this.shipState.currentRoomName=`${e.name} (Deck ${e.deck})`,this.shipState.seatedStation=null,this.localPos.set(e.spawnPos.x,e.spawnPos.y,e.spawnPos.z);let t=e.lookAt.x-e.spawnPos.x,n=e.lookAt.z-e.spawnPos.z;this.yaw=Math.atan2(-t,-n),this.pitch=0,$.playLCARSChirp(`confirm`),this.shipState.emit(`locationChanged`,e),this.shipState.emit(`change`,this.shipState)}arriveAtTurboliftDeck(e,t,n=null){if(n){let e=Ou.find(e=>e.id===n);if(e){this.teleportToRoom(e);return}}let r=Ou.find(n=>n.deck===e&&n.section===t);if(r){this.teleportToRoom(r);return}this.interior.ensureModularDeckPopulated(e);let i=Au[e-1],a=Du(e,t);this.shipState.cameraMode=`interior_walk`,this.shipState.playerSection=t,this.shipState.currentDeck=e,this.shipState.currentRoomId=`deck_${e}_modular`,this.shipState.currentRoomName=`Deck ${e} — ${i.name}`,this.shipState.seatedStation=null,this.localPos.set(0,a,i.centerZ),this.yaw=Math.PI,this.pitch=0,this.shipState.emit(`locationChanged`,i),this.shipState.emit(`change`,this.shipState)}focusExteriorInspectionPoint(e,t=!1){let n=ku.find(t=>t.id===e);if(!n)return;this.shipState.cameraMode=`exterior_orbit`,this.shipState.seatedStation=null,this.activeInspectionPreset=n,e===`ext_cobra_prow`&&!this.shipState.isSeparated()?(this._autoSeparatedForCobra=!0,this.shipState.separationState=`Independent flight`,this.shipState.saucerPose.x=0,this.shipState.saucerPose.y=65,this.shipState.saucerPose.z=-340,this.shipState.stardrivePose.x=0,this.shipState.stardrivePose.y=0,this.shipState.stardrivePose.z=0,this.exterior.saucerAssembly.position.set(0,65,-340),this.exterior.stardriveAssembly.position.set(0,0,0)):e!==`ext_cobra_prow`&&this._autoSeparatedForCobra&&(this._autoSeparatedForCobra=!1,this.shipState.separationState=`Docked`,this.shipState.saucerPose.x=0,this.shipState.saucerPose.y=0,this.shipState.saucerPose.z=0,this.shipState.stardrivePose.x=0,this.shipState.stardrivePose.y=0,this.shipState.stardrivePose.z=0,this.exterior.saucerAssembly.position.set(0,0,0),this.exterior.stardriveAssembly.position.set(0,0,0)),this.exterior.saucerAssembly.updateMatrixWorld(!0),this.exterior.stardriveAssembly.updateMatrixWorld(!0);let r=n.section===`stardrive`?this.exterior.stardriveAssembly:this.exterior.saucerAssembly,i=new H(n.targetPos.x,n.targetPos.y,n.targetPos.z);i.applyMatrix4(r.matrixWorld);let a=new H(n.cameraPos.x,n.cameraPos.y,n.cameraPos.z);a.applyMatrix4(r.matrixWorld);let o=a.clone().sub(i),s=o.length(),c=Math.acos(Math.max(-1,Math.min(1,o.y/s))),l=Math.atan2(o.x,o.z);t?(this.orbitTarget.copy(i),this.orbitRadius=s,this.orbitTheta=l,this.orbitPhi=c,this.orbitLerpTarget=null,this.updateExteriorOrbit(0)):this.orbitLerpTarget={target:i,radius:s,theta:l,phi:c},$.playLCARSChirp(`select`),this.shipState.emit(`change`,this.shipState)}startGuidedTour(){this.shipState.cameraMode=`guided_tour`,this.tourIndex=0,this.tourTimer=0,this.applyTourStop(0),this.shipState.addLog(`GUIDED TOUR`,`Automated USS Enterprise NCC-1701-D Guided Tour started.`),this.shipState.emit(`change`,this.shipState)}applyTourStop(e){let t=this.tourStops[e];t&&(t.mode===`exterior_orbit`?(this.focusExteriorInspectionPoint(t.presetId),this.shipState.cameraMode=`guided_tour`):t.mode===`interior_walk`&&(this.enterRoomById(t.roomId),this.shipState.cameraMode=`guided_tour`))}isObjectVisibleInHierarchy(e){let t=e;for(;t;){if(!t.visible)return!1;t=t.parent}return!0}updateHoverRaycast(){if(this.shipState.cameraMode!==`interior_walk`){this.hoveredInteractive=null;return}this.raycaster.setFromCamera(this.pointerNDC,this.camera),this.raycaster.far=7.5;let e=this.raycaster.intersectObjects(this.interior.interactiveTargets,!1).filter(e=>this.isObjectVisibleInHierarchy(e.object));this.hoveredInteractive=e.length>0?e[0].object.userData.interactive:null}triggerPrimaryInteraction(){if(this.hoveredInteractive){this.executeInteraction(this.hoveredInteractive);return}this.raycaster.setFromCamera(new V(0,0),this.camera),this.raycaster.far=6.5;let e=this.raycaster.intersectObjects(this.interior.interactiveTargets,!1).filter(e=>this.isObjectVisibleInHierarchy(e.object));e.length>0&&e[0].object.userData.interactive&&this.executeInteraction(e[0].object.userData.interactive)}executeInteraction(e){if(!e)return;let t=this.shipState;if(e.type===`terminal`)$.playLCARSChirp(`confirm`),t.emit(`openTerminal`,{appId:e.appId,title:e.title});else if(e.type===`turbolift_panel`)$.playLCARSChirp(`confirm`),t.emit(`openTerminal`,{appId:`map`,title:`${e.label} — Destination Computer`});else if(e.type===`sit`)$.playLCARSChirp(`select`),t.seatedStation=e,t.playerSection=e.section,t.currentDeck=e.deck,this.localPos.set(e.localSeatPos.x,e.localSeatPos.y-1.25,e.localSeatPos.z),this.yaw=Math.atan2(-e.lookOffset.x,-e.lookOffset.z),this.pitch=-.05,t.addLog(`CREW STATION`,`Seated at ${e.stationName}. Press [Space] to stand.`),t.emit(`change`,t);else if(e.type===`door_leaf`||e.type===`door_control`){let n=t.doors[e.doorId];if(!n)return;n.state===`locked`?($.playLCARSChirp(`error`),t.emit(`openTerminal`,{appId:`doors`,title:`Security Access — ${n.name}`})):n.state===`open`||n.state===`opening`?(t.setDoorMode(e.doorId,`close_manual`),$.playDoorSound(`close`)):(t.setDoorMode(e.doorId,`open_manual`),$.playDoorSound(`open`))}else if(e.type===`replicator`)this.equipCarriedProp(e.item),$.playTransporterBeam(),t.addLog(`REPLICATOR`,`Materialized "${e.item.name}". Carried by user (Press [G] to place/clear).`),t.emit(`change`,t);else if(e.type===`pickup_prop`)e.mesh&&(e.mesh.visible=!1),this.equipCarriedProp(e.prop),$.playLCARSChirp(`confirm`),t.addLog(`EQUIPMENT`,`Picked up ${e.prop.name}.`),t.emit(`change`,t);else if(e.type===`board_shuttle`)$.playLCARSChirp(`confirm`),t.seatedStation={stationName:`Type-6 Shuttlecraft "Goddard" Pilot Seat`,section:`saucer`,deck:4},t.playerSection=`saucer`,t.currentDeck=4,this.localPos.set(e.shuttlePos.x,e.shuttlePos.y-.65,e.shuttlePos.z-1.2),this.yaw=Math.PI,this.pitch=-.04,t.addLog(`SHUTTLEBAY`,`Boarded Type-6 Shuttlecraft "Goddard" (NCC-1701-D/05) cockpit. Press [Space] to exit.`),t.emit(`change`,t);else if(e.type===`holodeck_action`){if(e.action===`cycle_hologram`){let e=[`enterprise_model`,`borg_cube`,`crystalline_entity`],n={enterprise_model:`USS Enterprise NCC-1701-D Tactical Scale Model`,borg_cube:`Borg Collective Tactical Cube (Sector 001)`,crystalline_entity:`Crystalline Entity Lattice`},r=(e.indexOf(t.holodeck.spawnedHologram)+1)%e.length;t.holodeck.spawnedHologram=e[r],$.playTransporterBeam(),t.addLog(`HOLODECK 4`,`Materialized Holographic Specimen: ${n[t.holodeck.spawnedHologram]}.`),t.emit(`change`,t)}else if(e.action===`scotty_toast`)this.equipCarriedProp({id:`aldebaran_whiskey`,name:`2266 Aldebaran Whiskey ("No bloody A, B, C, or D!")`,color:1096065}),$.playLCARSChirp(`confirm`),t.addLog(`HOLODECK 4`,`Montgomery Scott: "Here's to ya, lads — the Enterprise NCC-1701. No bloody A, B, C, or D!"`),t.emit(`change`,t);else if(e.action===`strike_klingon_target`){let n=e.targetIndex??0,r=this.interior.holodeckDynamicState?.klingonTargets?.[n];r&&(r.hitFlash=1,r.baseX=(Math.random()-.5)*6.5,r.baseZ=-139-Math.random()*5),t.holodeck.klingonScore=(t.holodeck.klingonScore||0)+100,t.holodeck.klingonLevel=1+Math.floor(t.holodeck.klingonScore/300),$.playPhaserSound(),t.addLog(`HOLODECK 4`,`Qapla'! Struck Klingon Training Drone #${n+1} (+100 pts — Total: ${t.holodeck.klingonScore} pts, Level ${t.holodeck.klingonLevel}).`),t.emit(`change`,t)}else e.action===`inspect_mystery_clue`?(t.holodeck.cluesFound.includes(e.clueId)||t.holodeck.cluesFound.push(e.clueId),$.playLCARSChirp(`confirm`),t.addLog(`HOLODECK 4 (221B BAKER ST)`,`${e.clueTitle}: ${e.clueText} (${t.holodeck.cluesFound.length}/4 Clues Deduced)`),t.holodeck.cluesFound.length===4&&t.addLog(`HOLODECK 4 (CASE SOLVED)`,`Elementary! All 4 Baker Street clues deduced — Professor Moriarty's Arch Override cipher has been neutralized.`),t.emit(`change`,t)):e.action===`warp_to_star_system`&&(t.holodeck.activeStarSystem=e.systemId,t.helm.warpFactor=6,this.exterior&&typeof this.exterior.setStarSystemTheme==`function`&&this.exterior.setStarSystemTheme(e.systemId),$.playLCARSChirp(`confirm`),t.addLog(`STELLAR CARTOGRAPHY`,`Course laid in for ${e.systemName} at Warp 6.0. Exterior planetary environment updated across all ship windows and viewscreens!`),t.emit(`change`,t))}}equipCarriedProp(e){for(this.shipState.carriedProp=e;this.heldPropGroup.children.length>0;)this.heldPropGroup.remove(this.heldPropGroup.children[0]);let t=new q(new Y(.06,.05,.14,16),new X({color:e.color||3718648,emissive:e.color||3718648,emissiveIntensity:.35}));t.position.set(.32,-.26,-.55),this.heldPropGroup.add(t)}dropCarriedProp(){if(!this.shipState.carriedProp)return;let e=this.shipState.carriedProp.name;for(this.shipState.carriedProp=null;this.heldPropGroup.children.length>0;)this.heldPropGroup.remove(this.heldPropGroup.children[0]);$.playLCARSChirp(`select`),this.shipState.addLog(`EQUIPMENT`,`Placed ${e} down.`),this.shipState.emit(`change`,this.shipState)}standUp(){this.shipState.seatedStation=null,$.playLCARSChirp(`select`),this.shipState.emit(`change`,this.shipState)}update(e){this.updateHoverRaycast();let t=this.shipState.cameraMode;t===`exterior_orbit`?this.updateExteriorOrbit(e):t===`free_flight`?this.updateFreeFlight(e):t===`guided_tour`?this.updateGuidedTour(e):this.updateInteriorWalk(e)}updateExteriorOrbit(e){if(this.orbitLerpTarget){let t=Math.min(1,e*4.2);this.orbitTarget.lerp(this.orbitLerpTarget.target,t),this.orbitRadius=Ot.lerp(this.orbitRadius,this.orbitLerpTarget.radius,t),this.orbitTheta=Ot.lerp(this.orbitTheta,this.orbitLerpTarget.theta,t),this.orbitPhi=Ot.lerp(this.orbitPhi,this.orbitLerpTarget.phi,t),this.orbitTarget.distanceTo(this.orbitLerpTarget.target)<.25&&(this.orbitLerpTarget=null)}else this.orbitTrackSection===`saucer`?this.orbitTarget.set(this.shipState.saucerPose.x,this.shipState.saucerPose.y+42,this.shipState.saucerPose.z-135):this.orbitTrackSection===`stardrive`?this.orbitTarget.set(this.shipState.stardrivePose.x,this.shipState.stardrivePose.y-10,this.shipState.stardrivePose.z+65):this.shipState.isSeparated()&&!this.activeInspectionPreset&&this.orbitTarget.set((this.shipState.saucerPose.x+this.shipState.stardrivePose.x)*.5,15+(this.shipState.saucerPose.y+this.shipState.stardrivePose.y)*.5,-55+(this.shipState.saucerPose.z+this.shipState.stardrivePose.z)*.5);let t=1.1*e;(this.keys.has(`KeyA`)||this.keys.has(`ArrowLeft`))&&(this.orbitTheta-=t),(this.keys.has(`KeyD`)||this.keys.has(`ArrowRight`))&&(this.orbitTheta+=t),(this.keys.has(`KeyW`)||this.keys.has(`ArrowUp`))&&(this.orbitRadius=Math.max(20,this.orbitRadius-140*e)),(this.keys.has(`KeyS`)||this.keys.has(`ArrowDown`))&&(this.orbitRadius=Math.min(1800,this.orbitRadius+140*e));let n=this.orbitTarget.x+this.orbitRadius*Math.sin(this.orbitPhi)*Math.sin(this.orbitTheta),r=this.orbitTarget.y+this.orbitRadius*Math.cos(this.orbitPhi),i=this.orbitTarget.z+this.orbitRadius*Math.sin(this.orbitPhi)*Math.cos(this.orbitTheta);this.camera.position.set(n,r,i),this.camera.up.set(0,1,0),this.camera.lookAt(this.orbitTarget)}updateFreeFlight(e){let t=this.keys.has(`ShiftLeft`)||this.keys.has(`ShiftRight`)?95:32,n=new H(-Math.sin(this.freeYaw)*Math.cos(this.freePitch),Math.sin(this.freePitch),-Math.cos(this.freeYaw)*Math.cos(this.freePitch)).normalize(),r=new H(Math.cos(this.freeYaw),0,-Math.sin(this.freeYaw)).normalize();(this.keys.has(`KeyW`)||this.keys.has(`ArrowUp`))&&this.freePos.addScaledVector(n,t*e),(this.keys.has(`KeyS`)||this.keys.has(`ArrowDown`))&&this.freePos.addScaledVector(n,-t*e),(this.keys.has(`KeyD`)||this.keys.has(`ArrowRight`))&&this.freePos.addScaledVector(r,t*e),(this.keys.has(`KeyA`)||this.keys.has(`ArrowLeft`))&&this.freePos.addScaledVector(r,-t*e),this.keys.has(`KeyQ`)&&(this.freePos.y-=t*.7*e),this.keys.has(`KeyR`)&&(this.freePos.y+=t*.7*e),this.camera.position.copy(this.freePos),this.camera.up.set(0,1,0);let i=this.freePos.clone().add(n);this.camera.lookAt(i)}updateGuidedTour(e){this.tourTimer+=e;let t=this.tourStops[this.tourIndex];t&&(t.mode===`exterior_orbit`?(this.orbitTheta+=e*.14,this.updateExteriorOrbit(e)):(this.yaw+=Math.sin(this.tourTimer*.45)*e*.18,this.applySectionLocalCameraTransform()),this.tourTimer>=t.duration&&(this.tourTimer=0,this.tourIndex=(this.tourIndex+1)%this.tourStops.length,this.applyTourStop(this.tourIndex)))}updateInteriorWalk(e){let t=this.shipState;if(!t.seatedStation){let n=t.crawlMode?2.6:this.keys.has(`ShiftLeft`)||this.keys.has(`ShiftRight`)?7.2:4.4,r=0,i=0;if((this.keys.has(`KeyW`)||this.keys.has(`ArrowUp`))&&(r+=1),(this.keys.has(`KeyS`)||this.keys.has(`ArrowDown`))&&--r,(this.keys.has(`KeyD`)||this.keys.has(`ArrowRight`))&&(i+=1),(this.keys.has(`KeyA`)||this.keys.has(`ArrowLeft`))&&--i,r!==0||i!==0){let t=Math.hypot(r,i);r/=t,i/=t;let a=Math.sin(this.yaw),o=Math.cos(this.yaw),s=(-a*r+o*i)*n*e,c=(-o*r-a*i)*n*e,l=this.localPos.x+s,u=this.localPos.z+c;this.isBlockedByClosedDoor(l,u)||(this.localPos.x=l,this.localPos.z=u)}t.currentDeck===8&&t.canTraverseCrossSection()&&(t.playerSection===`saucer`&&this.localPos.z>-15.8?(t.playerSection=`stardrive`,t.currentRoomId=`deck8_battle_bridge`,t.currentRoomName=`Battle Bridge Corridor (Stardrive Deck 8)`,t.emit(`change`,t)):t.playerSection===`stardrive`&&this.localPos.z<-16.2&&(t.playerSection=`saucer`,t.currentRoomId=`deck8_sep_interface`,t.currentRoomName=`Saucer Separation Interface (Saucer Deck 8)`,t.emit(`change`,t)));let a=Du(t.currentDeck,t.playerSection);if(t.currentDeck===1&&t.playerSection===`saucer`){if(this.localPos.z<-126.8&&Math.abs(this.localPos.x)<9.6){let e=Math.hypot(this.localPos.x,this.localPos.z+137.5);e>5.68?this.localPos.y=a+.26:e<3.95&&this.localPos.z>-139.2?this.localPos.y=a+.14:this.localPos.y=a+.02}else this.localPos.y=a}else if(t.currentDeck===36&&t.playerSection===`stardrive`){if(this.localPos.x>5.8&&this.localPos.x<9&&this.localPos.z>=47.5&&this.localPos.z<=57){let e=Math.max(0,Math.min(1,(this.localPos.z-47.8)/8.8));this.localPos.y=a+e*4.2}else if(this.localPos.y>a+2.8){let e=Math.hypot(this.localPos.x,this.localPos.z-55);e>=4.1&&e<=10.8?this.localPos.y=a+4.2:this.localPos.y=a}else this.localPos.y=a}else this.localPos.y=a;this.clampToDeckHullEnvelope()}this.applySectionLocalCameraTransform()}isBlockedByClosedDoor(e,t){let n=this.shipState;for(let[r,i]of this.interior.doorMeshes.entries()){if(i.deck!==n.currentDeck||i.section!==n.playerSection)continue;let a=n.doors[r];if(!(!a||a.openAmount>.65)&&Math.hypot(e-i.localPos.x,t-i.localPos.z)<.85)return!0}return!1}clampToDeckHullEnvelope(){let e=this.shipState,t=Au[e.currentDeck-1];t&&(e.currentDeck===10?(this.localPos.x=Math.max(-13.4,Math.min(13.4,this.localPos.x)),this.localPos.z=Math.max(-313.8,Math.min(-295.5,this.localPos.z))):e.currentDeck===8?(this.localPos.x=Math.max(-23.2,Math.min(20.5,this.localPos.x)),e.isSeparated()?e.playerSection===`saucer`?this.localPos.z=Math.max(-53.5,Math.min(-22,this.localPos.z)):this.localPos.z=Math.max(-14,Math.min(8.5,this.localPos.z)):this.localPos.z=Math.max(-53.5,Math.min(8.5,this.localPos.z))):this.localPos.x=Math.max(-t.radiusX*.85,Math.min(t.radiusX*.85,this.localPos.x)))}applySectionLocalCameraTransform(){let e=this.shipState,t=e.playerSection===`stardrive`?this.exterior.stardriveAssembly:this.exterior.saucerAssembly,n=e.seatedStation?1.25:e.crawlMode?.95:this.eyeHeight,r=new H(this.localPos.x,this.localPos.y+n,this.localPos.z),i=new H(r.x-Math.sin(this.yaw)*Math.cos(this.pitch),r.y+Math.sin(this.pitch),r.z-Math.cos(this.yaw)*Math.cos(this.pitch)),a=new H(0,1,0),o=r.applyMatrix4(t.matrixWorld),s=i.applyMatrix4(t.matrixWorld),c=a.transformDirection(t.matrixWorld).normalize();this.camera.position.copy(o),this.camera.up.copy(c),this.camera.lookAt(s)}},id=class{constructor(e,t,n,r,i){this.shipState=e,this.exterior=t,this.interior=n,this.crewSystem=r,this.playerController=i,this.consoleRefreshTimer=0}update(e,t){this.updateSeparationStateMachine(e,t),this.updateIndependentHullFlight(e),this.updateDoorsAndObstructions(e),this.updateTurboliftTravel(e),this.updateTransporterSequence(e),this.updateShuttlebaySequence(e,t),this.updateSickbayAndSensors(e),this.update3DConsoleDisplays(e)}updateSeparationStateMachine(e){let t=this.shipState;switch(t.separationTimer+=e,t.separationState){case`Docked`:t.dockingClampsLatched=!0,t.crossingRoutesLocked=!1,t.commandAuthority.isSplit=!1,t.commandAuthority.mainBridgeControls=`Integrated Starship (Saucer + Stardrive)`,t.commandAuthority.battleBridgeControls=`Standby (Auxiliary Tactical Reserve)`;break;case`Preparing`:t.separationTimer<.1&&$.playLCARSChirp(`select`),t.currentDeck===8&&Math.abs(this.playerController.localPos.z+25)<3&&Math.abs(this.playerController.localPos.x)<3&&(this.playerController.localPos.z=t.playerSection===`saucer`?-29:-20),t.boundaryClearanceVerified=!0,t.separationTimer>=2&&(t.separationState=`Interface secured`,t.separationTimer=0,t.doors.door_sep_saucer.mode=`locked`,t.doors.door_sep_saucer.state=`locked`,t.doors.door_sep_saucer.openAmount=0,t.doors.door_sep_stardrive.mode=`locked`,t.doors.door_sep_stardrive.state=`locked`,t.doors.door_sep_stardrive.openAmount=0,t.crossingRoutesLocked=!0,$.playDoorSound(`close`),t.addLog(`SEPARATION INTERLOCK`,`Deck 8 boundary pressure doors sealed and locked. Cross-hull turbolifts halted.`),t.emit(`separationChanged`,t.separationState),t.emit(`change`,t));break;case`Interface secured`:t.separationTimer>=1.8&&(t.separationState=`Releasing`,t.separationTimer=0,t.dockingClampsLatched=!1,t.warpCore.saucerImpulseOnline=!0,$.playSeparationClampRelease(),t.addLog(`ENGINEERING`,`Main umbilical latches retracted. Saucer Section on independent Fusion Impulse power.`),t.emit(`separationChanged`,t.separationState),t.emit(`change`,t));break;case`Releasing`:t.separationTimer>=1.4&&(t.separationState=`Separating`,t.separationTimer=0,t.commandAuthority.isSplit=!0,t.commandAuthority.mainBridgeControls=`Saucer Section (Impulse & RCS Only)`,t.commandAuthority.battleBridgeControls=`Stardrive Section (Warp Core & Battle Tactical)`,t.addLog(`CONN`,`Forward dorsal RCS thrusters firing. Saucer clearing Stardrive cobra-head neck.`),t.emit(`separationChanged`,t.separationState),t.emit(`change`,t));break;case`Separating`:{let e=Math.min(1,t.separationTimer/6),n=e*e*(3-2*e);t.saucerPose.impulsePct=95,t.saucerPose.rcsActive=!0,t.saucerPose.x=-n*18,t.saucerPose.y=n*26,t.saucerPose.z=-n*105,t.saucerPose.pitch=Math.sin(e*Math.PI)*.035,t.saucerPose.yaw=n*.06,t.saucerPose.roll=-n*.025;let r=Math.max(0,(e-.15)/.85),i=r*r*(3-2*r);t.stardrivePose.impulsePct=80,t.stardrivePose.x=i*22,t.stardrivePose.y=-n*18,t.stardrivePose.z=i*55,t.stardrivePose.yaw=-i*.1,t.stardrivePose.pitch=-Math.sin(e*Math.PI)*.02,t.stardrivePose.roll=i*.03,e>=1&&(t.separationState=`Independent flight`,t.separationTimer=0,$.playLCARSChirp(`confirm`),t.addLog(`COMMAND`,`Saucer Separation complete. Saucer and Stardrive operating as independent spacecraft (160m clearance).`),t.emit(`separationChanged`,t.separationState),t.emit(`change`,t));break}case`Independent flight`:t.saucerPose.y=26+Math.sin(t.separationTimer*.32)*2,t.stardrivePose.y=-18+Math.cos(t.separationTimer*.28)*2;break;case`Rendezvous`:{let n=Math.min(1,t.separationTimer/2.8),r=e*2.2;t.saucerPose.x=Ot.lerp(t.saucerPose.x,0,r),t.saucerPose.y=Ot.lerp(t.saucerPose.y,18,r),t.saucerPose.z=Ot.lerp(t.saucerPose.z,-65,r),t.saucerPose.yaw=Ot.lerp(t.saucerPose.yaw,0,r*1.5),t.saucerPose.roll=Ot.lerp(t.saucerPose.roll,0,r*1.5),t.stardrivePose.x=Ot.lerp(t.stardrivePose.x,0,r),t.stardrivePose.y=Ot.lerp(t.stardrivePose.y,-10,r),t.stardrivePose.z=Ot.lerp(t.stardrivePose.z,25,r),t.stardrivePose.yaw=Ot.lerp(t.stardrivePose.yaw,0,r*1.5),t.stardrivePose.roll=Ot.lerp(t.stardrivePose.roll,0,r*1.5),n>=1&&(t.separationState=`Aligning`,t.separationTimer=0,$.playLCARSChirp(`select`),t.addLog(`CONN`,`Rendezvous achieved. Aligning Saucer ventral docking recess with Stardrive cobra-head spline.`),t.emit(`separationChanged`,t.separationState),t.emit(`change`,t));break}case`Aligning`:{let e=Math.min(1,t.separationTimer/2),n=e*e*(3-2*e);t.saucerPose.x=Ot.lerp(t.saucerPose.x,0,n),t.saucerPose.y=Ot.lerp(t.saucerPose.y,14,n),t.saucerPose.z=Ot.lerp(t.saucerPose.z,-50,n),t.saucerPose.pitch=Ot.lerp(t.saucerPose.pitch,0,n),t.saucerPose.yaw=0,t.saucerPose.roll=0,t.stardrivePose.x=Ot.lerp(t.stardrivePose.x,0,n),t.stardrivePose.y=Ot.lerp(t.stardrivePose.y,-8,n),t.stardrivePose.z=Ot.lerp(t.stardrivePose.z,20,n),t.stardrivePose.pitch=Ot.lerp(t.stardrivePose.pitch,0,n),t.stardrivePose.yaw=0,t.stardrivePose.roll=0,e>=1&&(t.separationState=`Docking`,t.separationTimer=0,t.addLog(`CONN`,`Alignment locked within 0.02 meters. Executing final docking translation.`),t.emit(`separationChanged`,t.separationState),t.emit(`change`,t));break}case`Docking`:{let e=Math.min(1,t.separationTimer/4.2),n=1-e*e*(3-2*e);t.saucerPose.x=0,t.saucerPose.y=24*n,t.saucerPose.z=-95*n,t.saucerPose.pitch=0,t.stardrivePose.x=0,t.stardrivePose.y=-12*n,t.stardrivePose.z=35*n,t.stardrivePose.pitch=0,e>=1&&(t.separationState=`Reconnected`,t.separationTimer=0,t.saucerPose.x=0,t.saucerPose.y=0,t.saucerPose.z=0,t.saucerPose.pitch=0,t.saucerPose.yaw=0,t.saucerPose.roll=0,t.stardrivePose.x=0,t.stardrivePose.y=0,t.stardrivePose.z=0,t.stardrivePose.pitch=0,t.stardrivePose.yaw=0,t.stardrivePose.roll=0,t.dockingClampsLatched=!0,$.playSeparationClampRelease(),t.addLog(`ENGINEERING`,`Magnetic docking clamps engaged. Umbilical EPS power grid and optical bus reconnected.`),t.emit(`separationChanged`,t.separationState),t.emit(`change`,t));break}case`Reconnected`:t.separationTimer>=1.4&&(t.separationState=`Docked`,t.separationTimer=0,t.crossingRoutesLocked=!1,t.doors.door_sep_saucer.mode=`auto`,t.doors.door_sep_saucer.state=`closed`,t.doors.door_sep_stardrive.mode=`auto`,t.doors.door_sep_stardrive.state=`closed`,$.playLCARSChirp(`confirm`),t.addLog(`COMMAND`,`Docked configuration verified. Deck 8 crossing corridor and cross-hull turbolifts reopened.`),t.emit(`separationChanged`,t.separationState),t.emit(`change`,t))}this.exterior.saucerAssembly.position.set(t.saucerPose.x,t.saucerPose.y,t.saucerPose.z),this.exterior.saucerAssembly.rotation.set(t.saucerPose.pitch,t.saucerPose.yaw,t.saucerPose.roll),this.exterior.saucerAssembly.updateMatrixWorld(!0),this.exterior.stardriveAssembly.position.set(t.stardrivePose.x,t.stardrivePose.y,t.stardrivePose.z),this.exterior.stardriveAssembly.rotation.set(t.stardrivePose.pitch,t.stardrivePose.yaw,t.stardrivePose.roll),this.exterior.stardriveAssembly.updateMatrixWorld(!0)}updateIndependentHullFlight(e){let t=this.shipState;if(t.separationState===`Independent flight`){if(t.saucerPose.impulsePct!==0){let n=t.saucerPose.impulsePct/100*14;t.saucerPose.x-=Math.sin(t.saucerPose.yaw)*n*e,t.saucerPose.z-=Math.cos(t.saucerPose.yaw)*n*e}if(t.stardrivePose.impulsePct!==0){let n=t.stardrivePose.impulsePct/100*16;t.stardrivePose.x-=Math.sin(t.stardrivePose.yaw)*n*e,t.stardrivePose.z-=Math.cos(t.stardrivePose.yaw)*n*e}}}updateDoorsAndObstructions(e){let t=this.shipState,n=t.playerSection,r=this.playerController.localPos;for(let[i,a]of Object.entries(t.doors)){let o=this.interior.doorMeshes.get(i);if(i===`door_deck4_space_doors`){let n=+!!t.shuttlebay.spaceDoorsOpen;a.openAmount=Ot.lerp(a.openAmount,n,e*1.6),a.state=a.openAmount>.9?`open`:a.openAmount<.1?`closed`:`opening`;continue}if(!o)continue;if(a.mode===`locked`||a.state===`locked`){a.state=`locked`,a.openAmount=Math.max(0,a.openAmount-e*2.5);continue}let s=999;if(o.section===n&&o.deck===t.currentDeck&&(s=Math.hypot(r.x-o.localPos.x,r.z-o.localPos.z)),t.crewMode===`populated`){for(let e of this.crewSystem.crewAgents)if(e.section===o.section&&e.deck===o.deck){let t=Math.hypot(e.mesh.position.x-o.localPos.x,e.mesh.position.z-o.localPos.z);t<s&&(s=t)}}a.mode===`auto`&&s<3.4&&((a.state===`closed`||a.state===`closing`)&&(a.state===`closing`&&s<1.35&&a.openAmount<.85?(a.state=`obstructed`,a.holdTimer=1.2,$.playDoorSound(`obstructed`),t.addLog(`DOOR SENSOR`,`${a.name} closing halted due to threshold obstruction; reopening.`)):(a.state=`opening`,$.playDoorSound(`open`))),a.holdTimer=1.5),a.state===`obstructed`?(a.openAmount=Math.min(1,a.openAmount+e*2.6),a.holdTimer-=e,a.openAmount>=1&&a.holdTimer<=0&&(a.state=`open`,a.holdTimer=2)):a.state===`opening`?(a.openAmount=Math.min(1,a.openAmount+e*2.4),a.openAmount>=1&&(a.state=`open`,a.holdTimer=2.2)):a.state===`open`?a.mode===`auto`&&s>=3.6&&(a.holdTimer-=e,a.holdTimer<=0&&(a.state=`closing`,$.playDoorSound(`close`))):a.state===`closing`&&(s<1.25&&a.openAmount>.15?(a.state=`obstructed`,a.holdTimer=1.5,$.playDoorSound(`obstructed`)):(a.openAmount=Math.max(0,a.openAmount-e*2.2),a.openAmount<=0&&(a.state=`closed`)))}}startTurboliftJourney(e,t=null){let n=this.shipState,r=Au[e-1];if(!r)return{ok:!1,reason:`Invalid deck number.`};let i=r.section;if(t===`deck8_battle_bridge`?i=`stardrive`:e===8&&!t&&(i=n.playerSection),n.isSeparated()&&i!==n.playerSection){$.playLCARSChirp(`error`);let e=`ROUTE UNAVAILABLE: Cannot travel from ${n.playerSection.toUpperCase()} to ${i.toUpperCase()} while Saucer is separated.`;return n.turbolift.statusMessage=e,n.addLog(`TURBOLIFT COMPUTER`,e),n.emit(`change`,n),{ok:!1,reason:e}}return this.interior.ensureModularDeckPopulated(e),n.turbolift.targetDeck=e,n.turbolift.targetRoomId=t,n.turbolift.targetSection=i,n.turbolift.state=`doors_closing`,n.turbolift.progress=0,n.turbolift.statusMessage=n.turbolift.expressMode?`IN TRANSIT TO DECK ${e} [EXPRESS TIME COMPRESSED 5x]`:`IN TRANSIT TO DECK ${e} (${r.name})`,$.playDoorSound(`close`),$.playTurboliftHum(!0),n.addLog(`TURBOLIFT`,`Departing Deck ${n.currentDeck} for Deck ${e} (${i.toUpperCase()}).`),n.emit(`change`,n),{ok:!0}}updateTurboliftTravel(e){let t=this.shipState.turbolift;if(t.state===`idle`)return;let n=t.expressMode?3.5:1;if(t.progress+=e*.45*n,t.state===`doors_closing`&&t.progress>=.2)t.state=`traveling`;else if(t.state===`traveling`){let e=Math.min(1,(t.progress-.2)/.65);t.displayDeck=Math.round(Ot.lerp(this.shipState.currentDeck,t.targetDeck,e)),e>=1&&(t.state=`doors_opening`,this.playerController.arriveAtTurboliftDeck(t.targetDeck,t.targetSection,t.targetRoomId),$.playTurboliftHum(!1),$.playDoorSound(`open`))}else t.state===`doors_opening`&&t.progress>=1&&(t.state=`idle`,t.statusMessage=`ARRIVED: DECK ${t.targetDeck} — DOORS OPEN`,this.shipState.emit(`change`,this.shipState))}executeTransporterSequence(e){let t=this.shipState,n=Ou.find(t=>t.id===e);return!n||t.transporter.energizing?!1:(t.transporter.destinationRoomId=e,t.transporter.energizing=!0,t.transporter.phase=`dematerializing`,t.transporter.progress=0,t.transporter.statusText=`ENERGIZING — LOCKING ONTO ${n.name.toUpperCase()}...`,$.playTransporterBeam(),t.addLog(`TRANSPORTER ROOM 1`,`Initiating matter-stream transport to ${n.name} (Deck ${n.deck}).`),t.emit(`change`,t),!0)}updateTransporterSequence(e){let t=this.shipState.transporter;if(t.energizing){if(t.progress+=e*.42,t.phase===`dematerializing`&&t.progress>=.5){t.phase=`rematerializing`;let e=Ou.find(e=>e.id===t.destinationRoomId);e&&this.playerController.teleportToRoom(e),t.statusText=`ANNULAR CONFINEMENT BEAM LOCKED — MATERIALIZING AT ${e?.name.toUpperCase()||`TARGET`}...`}else if(t.progress>=1){t.energizing=!1,t.phase=`idle`,t.progress=0;let e=Ou.find(e=>e.id===t.destinationRoomId);t.statusText=`TRANSPORT COMPLETE — SUBJECT AT ${e?.name.toUpperCase()||`DESTINATION`}`,this.shipState.addLog(`TRANSPORTER`,`Transport complete. Subject and carried equipment rematerialized at ${e?.name}.`),this.shipState.emit(`change`,this.shipState)}}}triggerShuttleLaunchAndRecovery(){let e=this.shipState.shuttlebay;e.shuttleState===`Docked in Bay 1`&&(e.forcefieldActive=!0,e.spaceDoorsOpen=!0,e.shuttleState=`Launching`,e.shuttlePhaseTimer=0,$.playLCARSChirp(`confirm`),this.shipState.addLog(`SHUTTLEBAY 1`,`Atmospheric containment field verified. Opening Clamshell Space Doors; launching Shuttlecraft Goddard.`),this.shipState.emit(`change`,this.shipState))}updateShuttlebaySequence(e){let t=this.shipState.shuttlebay;if(t.shuttleState===`Docked in Bay 1`)return;t.shuttlePhaseTimer+=e;let n=t.shuttlePhaseTimer;if(n<3)t.shuttleState=`Pre-Flight & Clamshell Doors Opening`,t.shuttlePos.y=Math.min(1.2,n*.4);else if(n<8.5){t.shuttleState=`Launching Aft Clear of Dorsal Saucer`;let e=(n-3)/5.5;t.shuttlePos.y=1.2+e*16,t.shuttlePos.z=e*95,t.shuttlePos.x=Math.sin(e*Math.PI)*28,t.shuttleYaw=Math.sin(e*Math.PI)*.4}else if(n<13.5){t.shuttleState=`Final Approach to Main Shuttlebay 1`;let e=1-(n-8.5)/5;t.shuttlePos.y=1.2+e*16,t.shuttlePos.z=e*95,t.shuttlePos.x=-Math.sin(e*Math.PI)*24,t.shuttleYaw=-Math.sin(e*Math.PI)*.35}else t.shuttleState=`Docked in Bay 1`,t.shuttlePos.x=0,t.shuttlePos.y=0,t.shuttlePos.z=0,t.shuttleYaw=0,t.spaceDoorsOpen=!1,$.playLCARSChirp(`confirm`),this.shipState.addLog(`SHUTTLEBAY 1`,`Shuttlecraft Goddard recovered on Pad 1. Clamshell Space Doors secured.`),this.shipState.emit(`change`,this.shipState)}updateSickbayAndSensors(e){let t=this.shipState;if(t.sickbay.scanning&&(t.sickbay.scanProgress+=e*35,t.sickbay.scanProgress>=100&&(t.sickbay.scanProgress=100,t.sickbay.scanning=!1,$.playLCARSChirp(`confirm`),t.addLog(`SICKBAY BIOBED 1`,`Diagnostic scan complete: HR 68 bpm, BP 118/74, Neural 99.4% nominal.`),t.emit(`change`,t))),t.sensors.scanning&&(t.sensors.scanProgress+=e*45,t.sensors.scanProgress>=100)){t.sensors.scanProgress=100,t.sensors.scanning=!1,$.playLCARSChirp(`confirm`);let e=t.sensors.targets.find(e=>e.id===t.sensors.activeTargetId);t.addLog(`SENSORS`,`Active high-resolution scan of ${e?.name||`target`} completed.`),t.emit(`change`,t)}}update3DConsoleDisplays(e){if(this.consoleRefreshTimer+=e,this.consoleRefreshTimer<.5)return;this.consoleRefreshTimer=0;let t=this.shipState;for(let e of this.interior.consoleDisplays){let n=`WARP ${t.warpCore.warpFactor.toFixed(1)}`;e.appId===`separation`?n=t.separationState.toUpperCase():e.appId===`power`?n=`ENG ${t.power.engines}%`:e.appId===`sensors`?n=t.sensors.activeTargetId.toUpperCase():e.appId===`shuttlebay`?n=t.shuttlebay.shuttleState.slice(0,12):e.appId===`sickbay`&&(n=`${t.sickbay.heartRate} BPM`),e.render(t.alertState.toUpperCase(),n,t.alertState)}this.interior.msdDisplay&&this.interior.msdDisplay.render(t)}},ad=class{constructor(e,t,n){this.shipState=e,this.subsystems=t,this.player=n,this.activeApp=`map`,this.dialog=document.getElementById(`lcars-dialog`),this.titleEl=document.getElementById(`lcars-dialog-title`),this.navEl=document.getElementById(`lcars-app-nav`),this.contentEl=document.getElementById(`lcars-app-content`),this.apps=[{id:`map`,label:`01 · SHIP MAP & TURBOLIFT`,color:`amber`},{id:`separation`,label:`02 · SAUCER SEPARATION`,color:`orange`},{id:`warp`,label:`03 · WARP CORE STATUS`,color:`sky`},{id:`power`,label:`04 · EPS POWER GRID`,color:`gold`},{id:`doors`,label:`05 · DOOR & ACCESS CTRL`,color:`lavender`},{id:`lighting`,label:`06 · LIGHTING & ALERTS`,color:`amber`},{id:`environment`,label:`07 · ENVIRONMENTAL`,color:`sky`},{id:`viewscreen`,label:`08 · VIEWSCREEN CTRL`,color:`gold`},{id:`sensors`,label:`09 · SENSOR DEMO`,color:`lavender`},{id:`transporter`,label:`10 · TRANSPORTER CTRL`,color:`orange`},{id:`shuttlebay`,label:`11 · SHUTTLE & HOLODECK`,color:`sky`},{id:`sickbay`,label:`12 · SICKBAY, LOGS & MANIFEST`,color:`amber`}],this.initDialog(),this.shipState.on(`openTerminal`,({appId:e,title:t})=>{this.open(e||`map`,t)}),this.shipState.on(`change`,()=>{this.dialog&&this.dialog.open&&this.renderActiveApp()})}initDialog(){if(this.dialog){if(!(`closedBy`in HTMLDialogElement.prototype)){let e=(e,t)=>{let n=t.getBoundingClientRect();return e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom},t=!1;this.dialog.addEventListener(`pointerdown`,n=>{t=e(n,this.dialog)}),this.dialog.addEventListener(`pointerup`,n=>{t&&e(n,this.dialog)&&this.dialog.close()})}this.dialog.addEventListener(`close`,()=>{this.dialog.returnValue=``,$.playLCARSChirp(`select`)}),this.renderNav()}}open(e=`map`,t=null){if(this.dialog){if(this.activeApp=e,t&&this.titleEl)this.titleEl.textContent=`LCARS 47457 // ${t.toUpperCase()}`;else if(this.titleEl){let t=this.apps.find(t=>t.id===e);this.titleEl.textContent=`LCARS 47457 // ${t?t.label:`MAIN COMPUTER`}`}this.renderNav(),this.renderActiveApp(),this.dialog.open||this.dialog.showModal()}}close(){this.dialog&&this.dialog.open&&this.dialog.close()}renderNav(){if(this.navEl){this.navEl.innerHTML=``;for(let e of this.apps){let t=document.createElement(`button`);t.type=`button`,t.className=`lcars-nav-btn lcars-${e.color} ${this.activeApp===e.id?`is-active`:``}`,t.textContent=e.label,t.addEventListener(`click`,()=>{$.playLCARSChirp(`select`),this.activeApp=e.id,this.titleEl&&(this.titleEl.textContent=`LCARS 47457 // ${e.label}`),this.renderNav(),this.renderActiveApp()}),this.navEl.appendChild(t)}}}renderActiveApp(){if(!this.contentEl)return;let e=this.shipState;switch(this.activeApp){case`map`:this.renderMapAndTurboliftApp(e);break;case`separation`:this.renderSeparationApp(e);break;case`warp`:this.renderWarpCoreApp(e);break;case`power`:this.renderPowerApp(e);break;case`doors`:this.renderDoorsApp(e);break;case`lighting`:this.renderLightingApp(e);break;case`environment`:this.renderEnvironmentApp(e);break;case`viewscreen`:this.renderViewscreenApp(e);break;case`sensors`:this.renderSensorsApp(e);break;case`transporter`:this.renderTransporterApp(e);break;case`shuttlebay`:this.renderShuttleAndHolodeckApp(e);break;case`sickbay`:this.renderSickbayLogsManifestApp(e)}}renderMapAndTurboliftApp(e){let t=e.isSeparated();this.contentEl.innerHTML=`
      <div class="lcars-grid-two">
        <div class="lcars-card">
          <h3>TURBOLIFT & LANDMARK COMPARTMENT ROUTING</h3>
          <p class="lcars-sub">
            Current Location: <strong>${e.currentRoomName}</strong> | Active Hull: <strong>${e.playerSection.toUpperCase()}</strong>
            ${t?`<span class="lcars-badge-alert">SAUCER SEPARATED — CROSS-HULL TUBES LOCKED</span>`:`<span class="lcars-badge-ok">HULLS DOCKED — ALL ROUTES OPEN</span>`}
          </p>
          <div class="lcars-status-banner">${e.turbolift.statusMessage}</div>
          <label class="lcars-checkbox-row">
            <input type="checkbox" id="tl-express-toggle" ${e.turbolift.expressMode?`checked`:``}>
            <span>Enable Express Turbolift Mode <em>[Time Compressed 5x Transit]</em></span>
          </label>
          <div class="lcars-room-list">
            ${Ou.map(n=>{let r=t&&n.section!==e.playerSection;return`
                <div class="lcars-room-item ${r?`is-disabled`:``}">
                  <div>
                    <strong>Deck ${n.deck} — ${n.name}</strong>
                    <small>${n.section.toUpperCase()} | ${n.confidence}</small>
                  </div>
                  <div class="lcars-btn-group">
                    <button type="button" class="lcars-action-btn" data-tl-room="${n.id}" data-tl-deck="${n.deck}" ${r?`disabled`:``}>
                      Ride Turbolift
                    </button>
                    <button type="button" class="lcars-action-btn secondary" data-jump-room="${n.id}">
                      Direct Camera Transfer
                    </button>
                  </div>
                </div>
              `}).join(``)}
          </div>
        </div>

        <div class="lcars-card">
          <h3>ALL 42 DECKS — DIRECT TURBOLIFT & DECK COVERAGE</h3>
          <p class="lcars-sub">Every deck (1–42) fits inside the physical Galaxy-class hull envelope and has a navigable layout.</p>
          <div class="lcars-deck-scroll">
            ${Au.map(n=>{let r=t&&n.section!==e.playerSection;return`
                <div class="lcars-deck-row">
                  <div>
                    <span class="lcars-deck-tag">DECK ${String(n.deck).padStart(2,`0`)}</span>
                    <strong>${n.name}</strong>
                    <small>Elev: ${n.y}m | ${n.section.toUpperCase()} | ${n.confidence}</small>
                  </div>
                  <button type="button" class="lcars-action-btn" data-any-deck="${n.deck}" ${r?`disabled`:``}>
                    ${r?`Cross-Hull Locked`:`Go to Deck ${n.deck}`}
                  </button>
                </div>
              `}).join(``)}
          </div>
        </div>
      </div>
    `,this.contentEl.querySelector(`#tl-express-toggle`)?.addEventListener(`change`,t=>{e.turbolift.expressMode=t.target.checked,$.playLCARSChirp(`select`)}),this.contentEl.querySelectorAll(`[data-tl-room]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-tl-room`),n=Number(e.getAttribute(`data-tl-deck`));this.subsystems.startTurboliftJourney(n,t).ok&&this.close()})}),this.contentEl.querySelectorAll(`[data-jump-room]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-jump-room`);this.player.enterRoomById(t),this.close()})}),this.contentEl.querySelectorAll(`[data-any-deck]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=Number(e.getAttribute(`data-any-deck`));this.subsystems.startTurboliftJourney(t,null).ok&&this.close()})})}renderSeparationApp(e){this.contentEl.innerHTML=`
      <div class="lcars-grid-two">
        <div class="lcars-card">
          <h3>SAUCER SEPARATION STATE MACHINE</h3>
          <p class="lcars-sub">Reversible 10-Stage Galaxy-Class Hull Separation & Docking Sequence</p>
          <div class="lcars-state-chain">
            ${Mu.map(t=>`
              <div class="lcars-state-pill ${e.separationState===t?`is-current`:``}">
                ${t}
              </div>
            `).join(``)}
          </div>

          <div class="lcars-telemetry-box">
            <div><span>CURRENT STATE:</span> <strong>${e.separationState.toUpperCase()}</strong></div>
            <div><span>DECK 8 BOUNDARY DOORS:</span> <strong>${e.crossingRoutesLocked?`SEALED & LOCKED`:`OPEN / AUTO`}</strong></div>
            <div><span>MAGNETIC DOCKING CLAMPS:</span> <strong>${e.dockingClampsLatched?`LATCHED (GREEN)`:`RELEASED (AMBER/RED)`}</strong></div>
            <div><span>MAIN BRIDGE AUTHORITY:</span> <strong>${e.commandAuthority.mainBridgeControls}</strong></div>
            <div><span>BATTLE BRIDGE AUTHORITY:</span> <strong>${e.commandAuthority.battleBridgeControls}</strong></div>
          </div>

          <div class="lcars-btn-group" style="margin-top:14px;">
            <button type="button" class="lcars-action-btn warn" id="btn-init-sep" ${e.separationState===`Docked`?``:`disabled`}>
              INITIATE SAUCER SEPARATION
            </button>
            <button type="button" class="lcars-action-btn" id="btn-init-dock" ${e.separationState!==`Independent flight`&&e.separationState!==`Separating`?`disabled`:``}>
              EXECUTE RENDEZVOUS & RECONNECT
            </button>
          </div>
        </div>

        <div class="lcars-card">
          <h3>INDEPENDENT SPACECRAFT HELM &COMMAND</h3>
          <p class="lcars-sub">
            When separated, Main Bridge steers the Saucer Section (Impulse/RCS Only — no warp nacelles) and Battle Bridge steers the Stardrive Section (Full Warp & Impulse).
          </p>
          <div class="lcars-helm-panel">
            <h4>SAUCER SECTION HELM (Main Bridge Authority)</h4>
            <p>Position: (${e.saucerPose.x.toFixed(1)}m, ${e.saucerPose.y.toFixed(1)}m, ${e.saucerPose.z.toFixed(1)}m) | Propulsion: Sublight Fusion Impulse Only</p>
            <div class="lcars-btn-group">
              <button type="button" class="lcars-action-btn" data-saucer-helm="port" ${e.isSeparated()?``:`disabled`}>Yaw Port</button>
              <button type="button" class="lcars-action-btn" data-saucer-helm="ahead" ${e.isSeparated()?``:`disabled`}>Impulse Ahead (50%)</button>
              <button type="button" class="lcars-action-btn" data-saucer-helm="stop" ${e.isSeparated()?``:`disabled`}>All Stop</button>
              <button type="button" class="lcars-action-btn" data-saucer-helm="stbd" ${e.isSeparated()?``:`disabled`}>Yaw Starboard</button>
            </div>
          </div>

          <div class="lcars-helm-panel" style="margin-top:12px;">
            <h4>STARDRIVE SECTION HELM (Battle Bridge Authority)</h4>
            <p>Position: (${e.stardrivePose.x.toFixed(1)}m, ${e.stardrivePose.y.toFixed(1)}m, ${e.stardrivePose.z.toFixed(1)}m) | Propulsion: Warp Core + Impulse</p>
            <div class="lcars-btn-group">
              <button type="button" class="lcars-action-btn" data-sd-helm="port" ${e.isSeparated()?``:`disabled`}>Yaw Port</button>
              <button type="button" class="lcars-action-btn" data-sd-helm="ahead" ${e.isSeparated()?``:`disabled`}>Impulse Ahead (50%)</button>
              <button type="button" class="lcars-action-btn" data-sd-helm="stop" ${e.isSeparated()?``:`disabled`}>All Stop</button>
              <button type="button" class="lcars-action-btn" data-sd-helm="stbd" ${e.isSeparated()?``:`disabled`}>Yaw Starboard</button>
            </div>
          </div>

          <div class="lcars-btn-group" style="margin-top:14px;">
            <button type="button" class="lcars-action-btn secondary" id="btn-jump-main-bridge">Transfer to Main Bridge (Saucer)</button>
            <button type="button" class="lcars-action-btn secondary" id="btn-jump-battle-bridge">Transfer to Battle Bridge (Stardrive)</button>
          </div>
        </div>
      </div>
    `,this.contentEl.querySelector(`#btn-init-sep`)?.addEventListener(`click`,()=>{$.playLCARSChirp(`confirm`),e.initiateSeparationSequence()}),this.contentEl.querySelector(`#btn-init-dock`)?.addEventListener(`click`,()=>{$.playLCARSChirp(`confirm`),e.initiateReconnectionSequence()}),this.contentEl.querySelectorAll(`[data-saucer-helm]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-saucer-helm`);n===`port`&&(e.saucerPose.yaw+=.15),n===`stbd`&&(e.saucerPose.yaw-=.15),n===`ahead`&&(e.saucerPose.impulsePct=50),n===`stop`&&(e.saucerPose.impulsePct=0),$.playLCARSChirp(`confirm`),e.addLog(`MAIN BRIDGE HELM`,`Saucer Section helm command executed: ${n.toUpperCase()}.`),this.renderActiveApp()})}),this.contentEl.querySelectorAll(`[data-sd-helm]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-sd-helm`);n===`port`&&(e.stardrivePose.yaw+=.15),n===`stbd`&&(e.stardrivePose.yaw-=.15),n===`ahead`&&(e.stardrivePose.impulsePct=50),n===`stop`&&(e.stardrivePose.impulsePct=0),$.playLCARSChirp(`confirm`),e.addLog(`BATTLE BRIDGE HELM`,`Stardrive Section helm command executed: ${n.toUpperCase()}.`),this.renderActiveApp()})}),this.contentEl.querySelector(`#btn-jump-main-bridge`)?.addEventListener(`click`,()=>{this.player.enterRoomById(`deck1_bridge`),this.close()}),this.contentEl.querySelector(`#btn-jump-battle-bridge`)?.addEventListener(`click`,()=>{this.player.enterRoomById(`deck8_battle_bridge`),this.close()})}renderWarpCoreApp(e){let t=e.warpCore;this.contentEl.innerHTML=`
      <div class="lcars-grid-two">
        <div class="lcars-card">
          <h3>MATTER / ANTIMATTER REACTION ASSEMBLY (DECK 36)</h3>
          <p class="lcars-sub">Adjustments here directly modulate the 3D Warp Core pulse speed, audio harmonics, Master Systems Display, and exterior Nacelle warp grilles.</p>
          <div class="lcars-slider-block">
            <label for="warp-factor-slider">SIMULATED WARP FIELD OUTPUT: <strong>WARP ${t.warpFactor.toFixed(1)}</strong></label>
            <input type="range" id="warp-factor-slider" min="0" max="9.6" step="0.1" value="${t.warpFactor}">
          </div>

          <div class="lcars-btn-group" style="margin-top:12px;">
            <button type="button" class="lcars-action-btn" data-warp-preset="0">Sublight (Warp 0.0)</button>
            <button type="button" class="lcars-action-btn" data-warp-preset="2">Cruise (Warp 2.0)</button>
            <button type="button" class="lcars-action-btn" data-warp-preset="6">High Cruise (Warp 6.0)</button>
            <button type="button" class="lcars-action-btn warn" data-warp-preset="9.6">Max Rated (Warp 9.6)</button>
          </div>

          <div class="lcars-btn-group" style="margin-top:12px;">
            <button type="button" class="lcars-action-btn ${t.online?`warn`:``}" id="btn-toggle-core">
              ${t.online?`TAKE WARP CORE OFFLINE (COLD STANDBY)`:`BRING WARP CORE ONLINE`}
            </button>
          </div>
        </div>

        <div class="lcars-card">
          <h3>DILITHIUM ARTICULATION & MAGNETIC CONSTRICTORS</h3>
          <div class="lcars-telemetry-box">
            <div><span>REACTION CHAMBER STATUS:</span> <strong>${t.online?`ONLINE — NOMINAL`:`OFFLINE — STANDBY`}</strong></div>
            <div><span>M/AM INTERMIX RATIO:</span> <strong>${t.intermixRatio.toFixed(2)} : 1.00</strong></div>
            <div><span>CONSTRICTOR FREQUENCY:</span> <strong>${(42+t.warpFactor*3.4).toFixed(1)} MHz</strong></div>
            <div><span>PLASMA COOLANT PRESSURE:</span> <strong>${(101+t.warpFactor*2.1).toFixed(1)} kPa</strong></div>
            <div><span>SAUCER AUX FUSION IMPULSE:</span> <strong>ONLINE (DECK 6 / 14)</strong></div>
          </div>
        </div>
      </div>
    `,this.contentEl.querySelector(`#warp-factor-slider`)?.addEventListener(`input`,t=>{e.setWarpFactor(t.target.value)}),this.contentEl.querySelectorAll(`[data-warp-preset]`).forEach(t=>{t.addEventListener(`click`,()=>{$.playLCARSChirp(`confirm`),e.setWarpFactor(t.getAttribute(`data-warp-preset`))})}),this.contentEl.querySelector(`#btn-toggle-core`)?.addEventListener(`click`,()=>{t.online=!t.online,$.playLCARSChirp(t.online?`confirm`:`error`),e.addLog(`ENGINEERING`,`Warp Core Reaction Assembly set to ${t.online?`ONLINE`:`OFFLINE STANDBY`}.`),e.emit(`change`,e)})}renderPowerApp(e){let t=e.power;this.contentEl.innerHTML=`
      <div class="lcars-card">
        <h3>ELECTRO-PLASMA SYSTEM (EPS) POWER ALLOCATION</h3>
        <p class="lcars-sub">Shared across Main Bridge and Main Engineering. Lowering Life Support dims interior lighting; boosting Engines increases Warp Nacelle field output.</p>
        <div class="lcars-sliders-stack">
          ${[{key:`engines`,label:`PROPULSION & WARP FIELD COILS`},{key:`shields`,label:`DEFLECTOR SHIELDS & PHASER ARRAYS`},{key:`lifeSupport`,label:`LIFE SUPPORT, LIGHTING & GRAVITY`},{key:`sensors`,label:`LONG-RANGE SENSORS & COMPUTERS`}].map(e=>`
            <div class="lcars-slider-block">
              <label for="pwr-${e.key}">${e.label}: <strong>${t[e.key]}%</strong></label>
              <input type="range" id="pwr-${e.key}" data-pwr-sys="${e.key}" min="20" max="140" step="5" value="${t[e.key]}">
            </div>
          `).join(``)}
        </div>
      </div>
    `,this.contentEl.querySelectorAll(`[data-pwr-sys]`).forEach(t=>{t.addEventListener(`change`,n=>{$.playLCARSChirp(`confirm`),e.setPowerAllocation(t.getAttribute(`data-pwr-sys`),n.target.value)})})}renderDoorsApp(e){this.contentEl.innerHTML=`
      <div class="lcars-card">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
          <div>
            <h3>SHIPWIDE DOOR, AIRLOCK & INTERLOCK CONTROL</h3>
            <p class="lcars-sub">Control automatic, manual, and security-locked states for all doors. Includes Emergency Override so the player can never be trapped.</p>
          </div>
          <button type="button" class="lcars-action-btn warn" id="btn-emergency-unlock">
            EMERGENCY OVERRIDE: UNLOCK & OPEN ALL DOORS
          </button>
        </div>

        <div class="lcars-deck-scroll" style="margin-top:12px;">
          ${Object.values(e.doors).map(e=>`
            <div class="lcars-deck-row">
              <div>
                <span class="lcars-deck-tag">DECK ${e.deck}</span>
                <strong>${e.name}</strong>
                <small>State: <strong>${e.state.toUpperCase()}</strong> | Mode: ${e.mode.toUpperCase()} | Section: ${e.section.toUpperCase()}</small>
              </div>
              <div class="lcars-btn-group">
                <button type="button" class="lcars-action-btn" data-door-id="${e.id}" data-door-cmd="open_manual">Open</button>
                <button type="button" class="lcars-action-btn secondary" data-door-id="${e.id}" data-door-cmd="close_manual">Close</button>
                <button type="button" class="lcars-action-btn secondary" data-door-id="${e.id}" data-door-cmd="auto">Auto</button>
                <button type="button" class="lcars-action-btn warn" data-door-id="${e.id}" data-door-cmd="locked">Lock</button>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    `,this.contentEl.querySelector(`#btn-emergency-unlock`)?.addEventListener(`click`,()=>{$.playLCARSChirp(`confirm`),e.unlockAllDoorsEmergency()}),this.contentEl.querySelectorAll(`[data-door-cmd]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-door-id`),r=t.getAttribute(`data-door-cmd`);$.playLCARSChirp(`select`),e.setDoorMode(n,r)})})}renderLightingApp(e){this.contentEl.innerHTML=`
      <div class="lcars-grid-two">
        <div class="lcars-card">
          <h3>SHIP ALERT CONDITION & GLOBAL ILLUMINATION</h3>
          <div class="lcars-btn-group">
            <button type="button" class="lcars-action-btn ${e.alertState===`normal`?`is-active`:``}" data-alert="normal">Condition Green (Normal)</button>
            <button type="button" class="lcars-action-btn ${e.alertState===`reduced`?`is-active`:``}" data-alert="reduced">Reduced / Night Shift</button>
            <button type="button" class="lcars-action-btn ${e.alertState===`yellow`?`is-active`:``}" data-alert="yellow">Yellow Alert</button>
            <button type="button" class="lcars-action-btn warn ${e.alertState===`red`?`is-active`:``}" data-alert="red">RED ALERT</button>
          </div>

          <div class="lcars-slider-block" style="margin-top:16px;">
            <label for="light-master-slider">MASTER INTERIOR ILLUMINATION: <strong>${Math.round(e.lighting.masterBrightness*100)}%</strong></label>
            <input type="range" id="light-master-slider" min="0.15" max="1.3" step="0.05" value="${e.lighting.masterBrightness}">
          </div>
        </div>

        <div class="lcars-card">
          <h3>COMPARTMENT LIGHTING BREAKERS</h3>
          <div class="lcars-deck-scroll">
            ${Ou.filter(e=>e.id!==`deck8_sep_interface`).map(t=>{let n=e.lighting.roomLights[t.id]!==!1;return`
                <div class="lcars-deck-row">
                  <div>
                    <strong>${t.name} (Deck ${t.deck})</strong>
                    <small>Status: ${n?`ILLUMINATED`:`DARKENED`}</small>
                  </div>
                  <button type="button" class="lcars-action-btn ${n?``:`warn`}" data-room-light="${t.id}">
                    ${n?`Turn Lights Off`:`Turn Lights On`}
                  </button>
                </div>
              `}).join(``)}
          </div>
        </div>
      </div>
    `,this.contentEl.querySelectorAll(`[data-alert]`).forEach(t=>{t.addEventListener(`click`,()=>{$.playLCARSChirp(`confirm`),e.setAlertState(t.getAttribute(`data-alert`))})}),this.contentEl.querySelector(`#light-master-slider`)?.addEventListener(`input`,t=>{e.lighting.masterBrightness=Number(t.target.value),e.emit(`change`,e)}),this.contentEl.querySelectorAll(`[data-room-light]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-room-light`);e.lighting.roomLights[n]=e.lighting.roomLights[n]===!1,$.playLCARSChirp(`select`),e.addLog(`LIGHTING CONTROL`,`Compartment lighting for ${n} set to ${e.lighting.roomLights[n]?`ON`:`OFF`}.`),e.emit(`change`,e)})})}renderEnvironmentApp(e){let t=e.environment;this.contentEl.innerHTML=`
      <div class="lcars-card">
        <h3>ATMOSPHERIC, THERMAL & ARTIFICIAL GRAVITY GRID</h3>
        <p class="lcars-sub">Artificial gravity generators are physically locked to each hull assembly (+Y Up local axis) so rotating either ship in space never tilts occupants indoors.</p>
        <div class="lcars-grid-two">
          <div>
            <div class="lcars-slider-block">
              <label for="env-temp">HABITAT TEMPERATURE: <strong>${t.temperatureC.toFixed(1)} °C</strong></label>
              <input type="range" id="env-temp" min="16" max="28" step="0.5" value="${t.temperatureC}">
            </div>
            <div class="lcars-slider-block">
              <label for="env-hum">RELATIVE HUMIDITY: <strong>${t.humidityPct}%</strong></label>
              <input type="range" id="env-hum" min="25" max="75" step="1" value="${t.humidityPct}">
            </div>
          </div>
          <div class="lcars-telemetry-box">
            <div><span>ARTIFICIAL GRAVITY PLATING:</span> <strong>${t.gravityG.toFixed(2)} G (SECTION-ALIGNED)</strong></div>
            <div><span>ATMOSPHERIC PRESSURE:</span> <strong>${t.pressureKPa} kPa (NITROGEN/OXYGEN)</strong></div>
            <div><span>OXYGEN PARTIAL RATIO:</span> <strong>${t.oxygenPct}% NOMINAL</strong></div>
            <div><span>INERTIAL DAMPERS:</span> <strong>ONLINE — ZERO INTERNAL DRIFT</strong></div>
          </div>
        </div>
      </div>
    `,this.contentEl.querySelector(`#env-temp`)?.addEventListener(`change`,n=>{t.temperatureC=Number(n.target.value),$.playLCARSChirp(`confirm`),e.addLog(`ENVIRONMENTAL`,`Habitat temperature adjusted to ${t.temperatureC.toFixed(1)} °C.`),e.emit(`change`,e)}),this.contentEl.querySelector(`#env-hum`)?.addEventListener(`change`,n=>{t.humidityPct=Number(n.target.value),$.playLCARSChirp(`confirm`),e.addLog(`ENVIRONMENTAL`,`Habitat relative humidity adjusted to ${t.humidityPct}%.`),e.emit(`change`,e)})}renderViewscreenApp(e){let t=e.viewscreen;this.contentEl.innerHTML=`
      <div class="lcars-grid-two">
        <div class="lcars-card">
          <h3>MAIN BRIDGE VIEWSCREEN SENSOR DIRECTION (DECK 1)</h3>
          <p class="lcars-sub">Renders the actual live 3D exterior scene from ship-mounted optical/subspace sensors onto the Deck 1 Main Viewscreen.</p>
          <div class="lcars-btn-group">
            ${[{id:`forward`,label:`Forward Bow Optical Sensor`},{id:`aft`,label:`Aft Dorsal / Stardrive Tracking Camera`},{id:`planet`,label:`Planet Veridian IV Lock`},{id:`tactical`,label:`Tactical Overlay + Bow Feed`}].map(e=>`
              <button type="button" class="lcars-action-btn ${t.mainBridgeMode===e.id?`is-active`:``}" data-main-vs="${e.id}">
                ${e.label}
              </button>
            `).join(``)}
          </div>
        </div>

        <div class="lcars-card">
          <h3>BATTLE BRIDGE VIEWSCREEN SENSOR DIRECTION (DECK 8 STARDRIVE)</h3>
          <p class="lcars-sub">Controls the live 3D camera feed on the Stardrive Battle Bridge forward viewscreen.</p>
          <div class="lcars-btn-group">
            ${[{id:`forward`,label:`Stardrive Forward / Saucer Tracking`},{id:`aft`,label:`Stardrive Aft Nacelle View`},{id:`tactical`,label:`Battle Tactical Reticle Mode`}].map(e=>`
              <button type="button" class="lcars-action-btn ${t.battleBridgeMode===e.id?`is-active`:``}" data-bb-vs="${e.id}">
                ${e.label}
              </button>
            `).join(``)}
          </div>
        </div>
      </div>
    `,this.contentEl.querySelectorAll(`[data-main-vs]`).forEach(n=>{n.addEventListener(`click`,()=>{t.mainBridgeMode=n.getAttribute(`data-main-vs`),t.tacticalOverlay=t.mainBridgeMode===`tactical`,$.playLCARSChirp(`confirm`),e.addLog(`MAIN VIEWSCREEN`,`Deck 1 Viewscreen switched to ${t.mainBridgeMode.toUpperCase()} feed.`),e.emit(`change`,e)})}),this.contentEl.querySelectorAll(`[data-bb-vs]`).forEach(n=>{n.addEventListener(`click`,()=>{t.battleBridgeMode=n.getAttribute(`data-bb-vs`),$.playLCARSChirp(`confirm`),e.addLog(`BATTLE BRIDGE VIEWSCREEN`,`Battle Bridge Viewscreen switched to ${t.battleBridgeMode.toUpperCase()} feed.`),e.emit(`change`,e)})})}renderSensorsApp(e){let t=e.sensors.targets.find(t=>t.id===e.sensors.activeTargetId)||e.sensors.targets[0];this.contentEl.innerHTML=`
      <div class="lcars-grid-two">
        <div class="lcars-card">
          <h3>LONG-RANGE & LATERAL SENSOR ARRAY TARGETING</h3>
          <div class="lcars-room-list">
            ${e.sensors.targets.map(e=>`
              <div class="lcars-room-item ${e.id===t.id?`is-selected`:``}">
                <div>
                  <strong>${e.name}</strong>
                  <small>Bearing: ${e.bearing} | Range: ${e.distanceKm.toLocaleString()} km</small>
                </div>
                <button type="button" class="lcars-action-btn" data-sensor-target="${e.id}">
                  Lock & Scan
                </button>
              </div>
            `).join(``)}
          </div>
        </div>

        <div class="lcars-card">
          <h3>ACTIVE TARGET TELEMETRY READOUT</h3>
          <div class="lcars-telemetry-box">
            <div><span>LOCKED TARGET:</span> <strong>${t.name}</strong></div>
            <div><span>CLASSIFICATION:</span> <strong>${t.classification}</strong></div>
            <div><span>BEARING / VECTOR:</span> <strong>${t.bearing}</strong></div>
            <div><span>SCAN RESOLUTION:</span> <strong>${e.sensors.scanning?`SCANNING (${Math.round(e.sensors.scanProgress)}%)`:`100% LOCKED`}</strong></div>
            <div style="margin-top:8px;color:#fde68a;">${t.telemetry}</div>
          </div>
        </div>
      </div>
    `,this.contentEl.querySelectorAll(`[data-sensor-target]`).forEach(t=>{t.addEventListener(`click`,()=>{e.sensors.activeTargetId=t.getAttribute(`data-sensor-target`),e.sensors.scanning=!0,e.sensors.scanProgress=0,$.playLCARSChirp(`trill`),e.emit(`change`,e)})})}renderTransporterApp(e){let t=e.transporter;this.contentEl.innerHTML=`
      <div class="lcars-card">
        <h3>TRANSPORTER ROOM 1 — MATTER-STREAM SITE-TO-SITE & PAD TRANSPORT</h3>
        <p class="lcars-sub">Select any destination in the modeled starship and click ENERGIZE to play the phase-transition particle beam effect and physically transport yourself (and any carried object) to the target compartment.</p>
        <div class="lcars-status-banner">${t.statusText}</div>
        <div class="lcars-room-list" style="margin-top:12px;">
          ${Ou.map(e=>`
            <div class="lcars-room-item ${t.destinationRoomId===e.id?`is-selected`:``}">
              <div>
                <strong>${e.name} (Deck ${e.deck})</strong>
                <small>Section: ${e.section.toUpperCase()} | Coordinates: (${e.spawnPos.x}, ${e.spawnPos.y}, ${e.spawnPos.z})</small>
              </div>
              <button type="button" class="lcars-action-btn warn" data-beam-dest="${e.id}">
                LOCK COORDINATES & ENERGIZE
              </button>
            </div>
          `).join(``)}
        </div>
      </div>
    `,this.contentEl.querySelectorAll(`[data-beam-dest]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-beam-dest`);this.subsystems.executeTransporterSequence(t),this.close()})})}renderShuttleAndHolodeckApp(e){let t=e.shuttlebay,n=e.holodeck;this.contentEl.innerHTML=`
      <div class="lcars-grid-two">
        <div class="lcars-card">
          <h3>MAIN SHUTTLEBAY 1 OPERATIONS (DECK 4)</h3>
          <p class="lcars-sub">Operate the dorsal saucer Clamshell Space Doors and launch Type-6 Shuttlecraft Goddard into 3D space.</p>
          <div class="lcars-telemetry-box">
            <div><span>SHUTTLECRAFT GODDARD:</span> <strong>${t.shuttleState.toUpperCase()}</strong></div>
            <div><span>EXTERIOR SPACE DOORS:</span> <strong>${t.spaceDoorsOpen?`OPEN TO SPACE`:`CLOSED & SEALED`}</strong></div>
            <div><span>ATMOSPHERIC FORCEFIELD:</span> <strong>${t.forcefieldActive?`ACTIVE (CONTAINMENT NOMINAL)`:`STANDBY`}</strong></div>
          </div>

          <div class="lcars-btn-group" style="margin-top:12px;">
            <button type="button" class="lcars-action-btn warn" id="btn-launch-shuttle" ${t.shuttleState===`Docked in Bay 1`?``:`disabled`}>
              EXECUTE SHUTTLE LAUNCH & RECOVERY DEMO
            </button>
            <button type="button" class="lcars-action-btn" id="btn-toggle-bay-doors">
              ${t.spaceDoorsOpen?`Close Clamshell Space Doors`:`Open Clamshell Space Doors`}
            </button>
            <button type="button" class="lcars-action-btn secondary" id="btn-view-shuttlebay">
              Visit Main Shuttlebay (Deck 4)
            </button>
          </div>
        </div>

        <div class="lcars-card">
          <h3>HOLODECK 4 INTERACTIVE SIMULATOR (DECK 11 SAUCER)</h3>
          <p class="lcars-sub">${n.spatialDisclosure}</p>
          <div class="lcars-telemetry-box" style="margin-bottom:10px;">
            <div><span>ACTIVE SIMULATION:</span> <strong>${n.activeProgram.toUpperCase()}</strong></div>
            <div><span>KLINGON MOK'BARA SCORE:</span> <strong>${n.klingonScore||0} PTS (LEVEL ${n.klingonLevel||1})</strong></div>
            <div><span>221B BAKER ST CLUES:</span> <strong>${(n.cluesFound||[]).length} / 4 CLUES DEDUCED</strong></div>
            <div><span>STELLAR CARTOGRAPHY WARP LOCK:</span> <strong>${(n.activeStarSystem||`earth`).toUpperCase()}</strong></div>
          </div>
          <div class="lcars-btn-group">
            ${[{id:`tos_bridge`,label:`1. Scotty's 1966 USS Enterprise NCC-1701 Bridge ("Relics")`},{id:`klingon_arena`,label:`2. Worf's Klingon Mok'bara Combat Arena (Interactive Drones)`},{id:`sherlock_noir`,label:`3. 221B Baker Street / Dixon Hill Mystery (4 Clickable Clues)`},{id:`stellar_cartography`,label:`4. 3D Stellar Cartography & Live Ship Warp Destination`},{id:`grid`,label:`5. Yellow Laser Grid + Holographic Matter Spawner`}].map(e=>`
              <button type="button" class="lcars-action-btn ${n.activeProgram===e.id?`is-active`:``}" data-holo-prog="${e.id}">
                ${e.label}
              </button>
            `).join(``)}
          </div>

          <div class="lcars-btn-group" style="margin-top:12px;">
            <button type="button" class="lcars-action-btn secondary" id="btn-toggle-arch">
              ${n.archVisible?`Hide Holodeck Control Arch`:`Computer: Show Arch`}
            </button>
            <button type="button" class="lcars-action-btn warn" id="btn-visit-holodeck">
              Enter Holodeck 4 Now (Deck 11)
            </button>
          </div>
        </div>
      </div>
    `,this.contentEl.querySelector(`#btn-launch-shuttle`)?.addEventListener(`click`,()=>{this.subsystems.triggerShuttleLaunchAndRecovery()}),this.contentEl.querySelector(`#btn-toggle-bay-doors`)?.addEventListener(`click`,()=>{t.spaceDoorsOpen=!t.spaceDoorsOpen,$.playDoorSound(t.spaceDoorsOpen?`open`:`close`),e.addLog(`SHUTTLEBAY 1`,`Exterior Clamshell Space Doors ${t.spaceDoorsOpen?`opened`:`closed`}.`),e.emit(`change`,e)}),this.contentEl.querySelector(`#btn-view-shuttlebay`)?.addEventListener(`click`,()=>{this.player.enterRoomById(`deck4_shuttlebay`),this.close()}),this.contentEl.querySelectorAll(`[data-holo-prog]`).forEach(t=>{t.addEventListener(`click`,()=>{n.activeProgram=t.getAttribute(`data-holo-prog`),$.playLCARSChirp(`confirm`),e.addLog(`HOLODECK 4`,`Holographic simulation set to "${n.activeProgram.toUpperCase()}".`),e.emit(`change`,e)})}),this.contentEl.querySelector(`#btn-toggle-arch`)?.addEventListener(`click`,()=>{n.archVisible=!n.archVisible,$.playLCARSChirp(`select`),e.emit(`change`,e)}),this.contentEl.querySelector(`#btn-visit-holodeck`)?.addEventListener(`click`,()=>{this.player.enterRoomById(`deck11_holodeck`),this.close()})}renderSickbayLogsManifestApp(e){let t=e.sickbay;this.contentEl.innerHTML=`
      <div class="lcars-grid-two">
        <div class="lcars-card">
          <h3>PRIMARY SICKBAY BIOBED 1 DIAGNOSTIC (SIMULATION)</h3>
          <p class="lcars-sub">Fictional demonstration scan of a simulated humanoid subject on Deck 12 Biobed 1.</p>
          <div class="lcars-telemetry-box">
            <div><span>SUBJECT:</span> <strong>${t.subjectName}</strong></div>
            <div><span>SCAN STATUS:</span> <strong>${t.scanning?`ACTIVE LASER SWEEP (${Math.round(t.scanProgress)}%)`:`COMPLETE / STANDBY`}</strong></div>
            <div><span>CARDIAC RATE:</span> <strong>${t.heartRate} BPM (Sinus Rhythm)</strong></div>
            <div><span>ARTERIAL PRESSURE:</span> <strong>${t.bloodPressure}</strong></div>
            <div><span>ISOCORTICAL NEURAL INDEX:</span> <strong>${t.neuralIndex}</strong></div>
            <div><span>CORE TEMPERATURE:</span> <strong>${t.coreTemp}</strong></div>
            <div style="margin-top:6px;color:#86efac;">${t.diagnosis}</div>
          </div>
          <div class="lcars-btn-group" style="margin-top:10px;">
            <button type="button" class="lcars-action-btn" id="btn-run-biobed-scan">
              RUN BIOBED 1 DIAGNOSTIC SCAN
            </button>
            <button type="button" class="lcars-action-btn secondary" id="btn-visit-sickbay">
              Visit Sickbay (Deck 12)
            </button>
          </div>

          <h3 style="margin-top:18px;">LIVE SHIP COMPUTER OPERATIONAL LOGS</h3>
          <div class="lcars-log-list">
            ${e.logs.slice(0,10).map(e=>`
              <div class="lcars-log-entry">
                <span>[SD ${e.stardate} // ${e.source}]</span> ${e.text}
              </div>
            `).join(``)}
          </div>
        </div>

        <div class="lcars-card">
          <h3>REFERENCE MANIFEST & VISUAL-ERA SPECIFICATION</h3>
          <div class="lcars-telemetry-box">
            <div><span>VISUAL ERA:</span> <strong>TNG Late-Series Television Configuration (Seasons 5–7)</strong></div>
            <div><span>OVERALL DIMENSIONS:</span> <strong>642.51m Length × 463.73m Beam × 137.50m Height (42 Decks)</strong></div>
            <div><span>PRIMARY REFERENCES:</span> <strong>Sternbach & Okuda TNG Technical Manual; Probert & Zimmerman Sets</strong></div>
            <div><span>DOCUMENTED SPACES:</span> <strong>Main Bridge, Ready Room, Observation Lounge, Ten Forward, Main Engineering, Sickbay, Transporter 1, Senior Quarters, Battle Bridge, Holodeck 1, Shuttlebay 1</strong></div>
            <div><span>EXTRAPOLATED SPACES:</span> <strong>Deck 8 Saucer-Stardrive Separation Airlock Passage, Modular Decks 2–42 Corridors & Support Compartments (Explicitly Tagged)</strong></div>
            <div><span>ASSET ATTRIBUTION:</span> <strong>100% Original Procedural Three.js Geometry, Canvas 2D Aztec/LCARS Textures & Web Audio API Synthesis</strong></div>
          </div>
        </div>
      </div>
    `,this.contentEl.querySelector(`#btn-run-biobed-scan`)?.addEventListener(`click`,()=>{t.scanning=!0,t.scanProgress=0,$.playLCARSChirp(`trill`),e.emit(`change`,e)}),this.contentEl.querySelector(`#btn-visit-sickbay`)?.addEventListener(`click`,()=>{this.player.enterRoomById(`deck12_sickbay`),this.close()})}};window.enterpriseApp=new class{constructor(){this.canvas=document.getElementById(`three-canvas`),this.renderer=new Cu({canvas:this.canvas,antialias:!0,logarithmicDepthBuffer:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.12,this.scene=new Fn,this.scene.background=new W(132106),this.camera=new Ro(60,window.innerWidth/window.innerHeight,.15,28e3),this.scene.add(this.camera),this.pipCamera=new Ro(50,300/185,1,25e3),this.saucerAssembly=new U,this.saucerAssembly.name=`SaucerAssembly`,this.scene.add(this.saucerAssembly),this.stardriveAssembly=new U,this.stardriveAssembly.name=`StardriveAssembly`,this.scene.add(this.stardriveAssembly),this.exterior=new $u(this.scene,this.saucerAssembly,this.stardriveAssembly),this.interior=new ed(this.saucerAssembly,this.stardriveAssembly,Q),this.crewSystem=new nd(this.interior,Q),this.player=new rd(this.camera,this.canvas,this.exterior,this.interior,Q),this.subsystems=new id(Q,this.exterior,this.interior,this.crewSystem,this.player),this.lcarsTerminal=new ad(Q,this.subsystems,this.player),this.initLiveViewscreens(),window.addEventListener(`pointerdown`,()=>$.init(),{once:!0}),window.addEventListener(`keydown`,()=>$.init(),{once:!0}),this.initUIControls(),this.player.focusExteriorInspectionPoint(`ext_three_quarter`,!0),this.lastFrameTime=performance.now(),this.elapsedTime=0,this.frameCount=0,this.fpsAccum=0,this.measuredFps=60,this.vsFrameCounter=0,window.addEventListener(`resize`,()=>this.onResize()),this.animate()}initLiveViewscreens(){this.mainBridgeRT=new Xt(2048,1024,{minFilter:o,magFilter:o,samples:4}),this.mainBridgeRT.texture.colorSpace=Le,this.mainBridgeRT.texture.anisotropy=8,this.battleBridgeRT=new Xt(2048,1024,{minFilter:o,magFilter:o,samples:4}),this.battleBridgeRT.texture.colorSpace=Le,this.battleBridgeRT.texture.anisotropy=8,this.mainSensorCam=new Ro(50,2,2,24e3),this.saucerAssembly.add(this.mainSensorCam),this.battleSensorCam=new Ro(50,2,2,24e3),this.stardriveAssembly.add(this.battleSensorCam),this.interior.mainViewscreenMat.map=this.mainBridgeRT.texture,this.interior.mainViewscreenMat.needsUpdate=!0,this.interior.battleViewscreenMat.map=this.battleBridgeRT.texture,this.interior.battleViewscreenMat.needsUpdate=!0,this.interior.holodeckDynamicState?.tosViewscreenMat&&(this.interior.holodeckDynamicState.tosViewscreenMat.map=this.mainBridgeRT.texture,this.interior.holodeckDynamicState.tosViewscreenMat.needsUpdate=!0)}updateLiveViewscreens(){if(this.vsFrameCounter++,this.vsFrameCounter%2!=0)return;let e=Q.viewscreen.mainBridgeMode;e===`forward`||e===`tactical`?(this.mainSensorCam.position.set(0,38,-323),this.mainSensorCam.lookAt(this.saucerAssembly.localToWorld(new H(190,68,-1950)))):e===`aft`?(this.mainSensorCam.position.set(0,56,-25),this.mainSensorCam.lookAt(this.stardriveAssembly.localToWorld(new H(0,14,130)))):e===`planet`&&(this.mainSensorCam.position.set(0,76,55),this.mainSensorCam.lookAt(new H(-2450,-1550,2200))),Q.viewscreen.battleBridgeMode===`aft`?(this.battleSensorCam.position.set(0,37.5,42),this.battleSensorCam.lookAt(this.stardriveAssembly.localToWorld(new H(0,12,260)))):(this.battleSensorCam.position.set(0,36.8,-12),this.battleSensorCam.lookAt(this.saucerAssembly.localToWorld(new H(0,37,-145))));let t=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.mainBridgeRT),this.renderer.render(this.scene,this.mainSensorCam),this.renderer.setRenderTarget(this.battleBridgeRT),this.renderer.render(this.scene,this.battleSensorCam),this.renderer.setRenderTarget(t)}initUIControls(){let e=document.getElementById(`select-any-deck`);e&&(e.innerHTML=Au.map(e=>`<option value="${e.deck}">Deck ${String(e.deck).padStart(2,`0`)} — ${e.name.slice(0,34)}</option>`).join(``)),document.getElementById(`btn-hero-exterior`)?.addEventListener(`click`,()=>{this.player.focusExteriorInspectionPoint(`ext_three_quarter`)}),document.getElementById(`btn-hero-bridge`)?.addEventListener(`click`,()=>{this.player.enterRoomById(`deck1_bridge`)}),document.getElementById(`btn-hero-holodeck`)?.addEventListener(`click`,()=>{this.player.enterRoomById(`deck11_holodeck`)}),document.getElementById(`btn-hero-tour`)?.addEventListener(`click`,()=>{this.player.startGuidedTour()}),document.getElementById(`btn-hero-separation`)?.addEventListener(`click`,()=>{$.init(),Q.separationState===`Docked`?Q.initiateSeparationSequence():(Q.separationState===`Independent flight`||Q.separationState===`Separating`)&&Q.initiateReconnectionSequence()}),document.querySelectorAll(`[data-holo-hud]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-holo-hud`);Q.holodeck.activeProgram=t,$.playLCARSChirp(`confirm`),Q.addLog(`HOLODECK 4`,`Loaded Holographic Program: "${t.toUpperCase()}".`),Q.emit(`change`,Q)})}),document.getElementById(`btn-holo-hud-arch`)?.addEventListener(`click`,()=>{Q.holodeck.archVisible=!Q.holodeck.archVisible,$.playLCARSChirp(`select`),Q.emit(`change`,Q)}),document.getElementById(`btn-holo-hud-spawn`)?.addEventListener(`click`,()=>{this.player.executeInteraction({type:`holodeck_action`,action:`cycle_hologram`})}),document.getElementById(`btn-open-lcars`)?.addEventListener(`click`,()=>{$.playLCARSChirp(`confirm`),this.lcarsTerminal.open(`map`)}),document.querySelectorAll(`[data-cam-mode]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-cam-mode`);t===`guided_tour`?this.player.startGuidedTour():t===`interior_walk`?this.player.enterRoomById(Q.currentRoomId||`deck1_bridge`):(Q.cameraMode=t,$.playLCARSChirp(`select`),Q.emit(`change`,Q))})}),document.getElementById(`select-ext-landmark`)?.addEventListener(`change`,e=>{this.player.focusExteriorInspectionPoint(e.target.value)}),document.querySelectorAll(`[data-cutaway]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-cutaway`);Q.cutawayMode=t,this.exterior.setCutawayMode(t),this.interior.setExplodedFactor(t===`exploded`),t!==`off`&&Q.cameraMode===`interior_walk`&&(Q.cameraMode=`exterior_orbit`,this.player.focusExteriorInspectionPoint(`ext_bridge_module`)),$.playLCARSChirp(`select`),Q.emit(`change`,Q)})}),document.getElementById(`btn-go-selected-room`)?.addEventListener(`click`,()=>{let e=document.getElementById(`select-hero-room`)?.value;e&&this.player.enterRoomById(e)}),document.getElementById(`btn-ride-turbolift-room`)?.addEventListener(`click`,()=>{let e=document.getElementById(`select-hero-room`)?.value,t=Ou.find(t=>t.id===e);t&&(Q.cameraMode!==`interior_walk`&&this.player.enterRoomById(Q.currentRoomId||`deck1_bridge`),this.subsystems.startTurboliftJourney(t.deck,t.id))}),document.getElementById(`btn-go-any-deck`)?.addEventListener(`click`,()=>{let e=Number(document.getElementById(`select-any-deck`)?.value||1),t=Au[e-1];t&&this.player.arriveAtTurboliftDeck(e,t.section)}),document.getElementById(`btn-panel-separate`)?.addEventListener(`click`,()=>{$.playLCARSChirp(`confirm`),Q.initiateSeparationSequence()}),document.getElementById(`btn-panel-reconnect`)?.addEventListener(`click`,()=>{$.playLCARSChirp(`confirm`),Q.initiateReconnectionSequence()}),document.querySelectorAll(`[data-track-sec]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-track-sec`);this.player.orbitTrackSection=t,this.player.orbitLerpTarget=null,document.querySelectorAll(`[data-track-sec]`).forEach(t=>t.classList.toggle(`is-active`,t===e)),$.playLCARSChirp(`select`)})}),document.querySelectorAll(`[data-alert-btn]`).forEach(e=>{e.addEventListener(`click`,()=>{$.playLCARSChirp(`confirm`),Q.setAlertState(e.getAttribute(`data-alert-btn`))})}),document.getElementById(`btn-toggle-crew`)?.addEventListener(`click`,e=>{Q.crewMode=Q.crewMode===`populated`?`empty`:`populated`,e.target.textContent=`Crew: ${Q.crewMode===`populated`?`Populated`:`Empty`}`,$.playLCARSChirp(`select`),Q.emit(`change`,Q)});let t=document.getElementById(`btn-toggle-pip`);t?.addEventListener(`click`,()=>{Q.pipEnabled=!Q.pipEnabled,t.textContent=`Ext Inset: ${Q.pipEnabled?`ON`:`OFF`}`,$.playLCARSChirp(`select`),Q.emit(`change`,Q)}),document.getElementById(`btn-hide-pip`)?.addEventListener(`click`,()=>{Q.pipEnabled=!1,t&&(t.textContent=`Ext Inset: OFF`),Q.emit(`change`,Q)}),document.getElementById(`audio-ambience`)?.addEventListener(`input`,e=>{$.setAmbienceVolume(e.target.value)}),document.getElementById(`audio-sfx`)?.addEventListener(`input`,e=>{$.setSfxVolume(e.target.value)}),document.getElementById(`btn-mute-audio`)?.addEventListener(`click`,e=>{$.setMuted(!$.muted),e.target.textContent=`Mute: ${$.muted?`ON`:`OFF`}`});let n=()=>{Q.photoMode=!Q.photoMode,document.getElementById(`top-hud-bar`)?.classList.toggle(`is-hidden`,Q.photoMode),document.getElementById(`ops-drawer`)?.classList.toggle(`is-hidden`,Q.photoMode),document.getElementById(`pip-frame-overlay`)?.classList.toggle(`is-hidden`,Q.photoMode||Q.cameraMode===`exterior_orbit`),this.syncHUD()};document.getElementById(`btn-photo-mode`)?.addEventListener(`click`,n),document.getElementById(`btn-reset-ship`)?.addEventListener(`click`,()=>{$.playLCARSChirp(`confirm`),Q.resetToDefault(!0),this.exterior.setCutawayMode(`off`),this.interior.setExplodedFactor(!1),this.player.focusExteriorInspectionPoint(`ext_three_quarter`)}),window.addEventListener(`keydown`,e=>{e.target.tagName!==`INPUT`&&e.target.tagName!==`SELECT`&&(e.code===`KeyT`?(e.preventDefault(),this.lcarsTerminal.dialog?.open?this.lcarsTerminal.close():this.lcarsTerminal.open(`map`)):e.code===`KeyH`?this.player.enterRoomById(`deck11_holodeck`):e.code===`KeyP`&&n())}),Q.on(`change`,()=>this.syncHUD()),this.syncHUD()}syncHUD(){let e=Q,t=document.getElementById(`hud-location-readout`);if(t){if(e.cameraMode===`exterior_orbit`)t.textContent=`EXTERIOR ORBIT // HULL: ${e.separationState.toUpperCase()}`;else if(e.cameraMode===`free_flight`)t.textContent=`FREE-FLIGHT 6DOF INSPECTION // HULL: ${e.separationState.toUpperCase()}`;else if(e.cameraMode===`guided_tour`){let e=this.player.tourStops[this.player.tourIndex];t.textContent=e?e.label.toUpperCase():`GUIDED SHIP TOUR`}else t.textContent=`${e.currentRoomName.toUpperCase()} // SECTION: ${e.playerSection.toUpperCase()}`}let n=document.getElementById(`chip-hull-state`);n&&(n.textContent=`HULL: ${e.separationState.toUpperCase()}`);let r=document.getElementById(`chip-warp-state`);r&&(r.textContent=e.warpCore.online?`WARP ${e.warpCore.warpFactor.toFixed(1)}`:`CORE STANDBY`);let i=document.getElementById(`btn-hero-separation`);i&&(i.textContent=e.isSeparated()?`Reconnect Hulls`:`Saucer Separation Demo`),document.querySelectorAll(`[data-cam-mode]`).forEach(t=>{t.classList.toggle(`is-active`,t.getAttribute(`data-cam-mode`)===e.cameraMode)}),document.querySelectorAll(`[data-cutaway]`).forEach(t=>{t.classList.toggle(`is-active`,t.getAttribute(`data-cutaway`)===e.cutawayMode)}),document.querySelectorAll(`[data-alert-btn]`).forEach(t=>{t.classList.toggle(`is-active`,t.getAttribute(`data-alert-btn`)===e.alertState)});let a=document.getElementById(`panel-sep-state`);a&&(a.textContent=e.separationState);let o=document.getElementById(`panel-main-auth`);o&&(o.textContent=e.commandAuthority.mainBridgeControls);let s=document.getElementById(`panel-battle-auth`);s&&(s.textContent=e.commandAuthority.battleBridgeControls);let c=e.cameraMode===`interior_walk`||e.cameraMode===`guided_tour`&&this.player.tourStops[this.player.tourIndex]?.mode===`interior_walk`;document.getElementById(`reticle-overlay`)?.classList.toggle(`is-hidden`,!c||e.photoMode),document.getElementById(`pip-frame-overlay`)?.classList.toggle(`is-hidden`,!c||!e.pipEnabled||e.photoMode);let l=c&&e.currentRoomId===`deck11_holodeck`&&!e.photoMode,u=document.getElementById(`holodeck-hud`);if(u&&(u.classList.toggle(`is-hidden`,!l),l)){let t=e.holodeck,n=document.getElementById(`holodeck-hud-status`);n&&(n.textContent={tos_bridge:`SCOTTY'S 1966 NCC-1701 BRIDGE ("RELICS") — Sit in Kirk's Chair or Click Aldebaran Whiskey!`,klingon_arena:`KLINGON MOK'BARA ARENA — SCORE: ${t.klingonScore||0} PTS (LVL ${t.klingonLevel||1}) — Click Moving Drones to Strike!`,sherlock_noir:`221B BAKER STREET MYSTERY — CLUES DEDUCED: ${(t.cluesFound||[]).length} / 4 — Click Clues Around the Study!`,stellar_cartography:`3D STELLAR CARTOGRAPHY — SECTOR: ${(t.activeStarSystem||`earth`).toUpperCase()} — Click Any 3D Planet to Warp!`,grid:`OMNIDIRECTIONAL LASER GRID — SPECIMEN: ${(t.spawnedHologram||`enterprise_model`).toUpperCase()} — Click Pedestal to Cycle!`}[t.activeProgram]||t.activeProgram.toUpperCase()),document.querySelectorAll(`[data-holo-hud]`).forEach(e=>{e.classList.toggle(`is-active`,e.getAttribute(`data-holo-hud`)===t.activeProgram)})}let d=document.getElementById(`status-toast`);if(d){let t=[];e.turbolift.state!==`idle`&&t.push(`TURBOLIFT TRANSIT: Passing Deck ${e.turbolift.displayDeck} → Destination Deck ${e.turbolift.targetDeck}`),e.transporter.energizing&&t.push(e.transporter.statusText),e.seatedStation&&t.push(`Seated at ${e.seatedStation.stationName} — Press [Space] to stand`),e.crawlMode&&t.push(`Jefferies Tube Crouch / Inspection Mode Active — Press [C] to stand`),e.carriedProp&&t.push(`Carrying: ${e.carriedProp.name} — Press [G] to place down`),t.length>0&&!e.photoMode?(d.textContent=t.join(`  |  `),d.classList.remove(`is-hidden`)):d.classList.add(`is-hidden`)}}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(()=>this.animate());let e=performance.now(),t=Math.min(.05,Math.max(.001,(e-this.lastFrameTime)/1e3));if(this.lastFrameTime=e,this.elapsedTime+=t,this.frameCount++,this.fpsAccum+=t,this.fpsAccum>=.5){this.measuredFps=Math.round(this.frameCount/this.fpsAccum);let e=document.getElementById(`chip-fps`);e&&(e.textContent=`${this.measuredFps} FPS`),this.frameCount=0,this.fpsAccum=0}this.subsystems.update(t,this.elapsedTime),this.exterior.update(t,this.elapsedTime,Q),this.interior.update(t,this.elapsedTime),this.crewSystem.update(t,this.elapsedTime),this.player.update(t);let n=document.getElementById(`interaction-prompt`);n&&(this.player.hoveredInteractive&&this.player.hoveredInteractive.prompt?(n.textContent=this.player.hoveredInteractive.prompt,n.classList.remove(`is-hidden`)):n.classList.add(`is-hidden`));let r=this.stardriveAssembly.localToWorld(new H(0,Eu(36)+9,19)),i=this.camera.position.distanceTo(r),a=(Q.doors.door_deck36_isolation?.openAmount??0)<.2;$.updateSpatialAmbience(t,this.elapsedTime,Q,i,a),this.updateLiveViewscreens();let o=window.innerWidth,s=window.innerHeight;if(this.renderer.setViewport(0,0,o,s),this.renderer.setScissorTest(!1),this.renderer.render(this.scene,this.camera),(Q.cameraMode===`interior_walk`||Q.cameraMode===`guided_tour`&&this.player.tourStops[this.player.tourIndex]?.mode===`interior_walk`)&&Q.pipEnabled&&!Q.photoMode){let e=o-300-16,t=new H((Q.saucerPose.x+Q.stardrivePose.x)*.5,(Q.saucerPose.y+Q.stardrivePose.y)*.5+22,(Q.saucerPose.z+Q.stardrivePose.z)*.5-40);this.pipCamera.position.set(t.x+Math.cos(this.elapsedTime*.18)*440,t.y+135,t.z-Math.sin(this.elapsedTime*.18)*440),this.pipCamera.lookAt(t),this.renderer.setViewport(e,16,300,185),this.renderer.setScissor(e,16,300,185),this.renderer.setScissorTest(!0),this.renderer.clearDepth(),this.renderer.render(this.scene,this.pipCamera),this.renderer.setScissorTest(!1)}}};