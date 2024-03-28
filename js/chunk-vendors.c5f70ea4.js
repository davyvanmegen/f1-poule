"use strict";(self["webpackChunkf1_poule"]=self["webpackChunkf1_poule"]||[]).push([[504],{4046:function(e,t,n){n.d(t,{Am:function(){return U},FA:function(){return D},Fy:function(){return _},I9:function(){return V},Im:function(){return L},Ku:function(){return K},T9:function(){return y},Tj:function(){return g},Uj:function(){return c},XA:function(){return v},ZQ:function(){return b},bD:function(){return M},cY:function(){return w},eX:function(){return R},g:function(){return N},hp:function(){return j},jZ:function(){return E},lT:function(){return C},lV:function(){return S},nr:function(){return A},sr:function(){return I},tD:function(){return B},u:function(){return u},yU:function(){return m},zW:function(){return k}});n(4114),n(4979);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,a=s?n[e.charAt(i)]:0;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;++i;const l=i<e.length,h=l?n[e.charAt(i)]:64;if(++i,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(r.push(d),64!==u){const e=a<<4&240|u>>2;if(r.push(e),64!==h){const e=u<<6&192|h;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=r(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/f1-poule/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},f=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},p=()=>{try{return h()||d()||f()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},g=e=>{var t,n;return null===(n=null===(t=p())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},m=e=>{const t=g(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},y=()=>{var e;return null===(e=p())||void 0===e?void 0:e.config},v=e=>{var t;return null===(t=p())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function T(){var e;const t=null===(e=p())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function I(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function S(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function A(){return!T()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function k(){try{return"object"===typeof indexedDB}catch(e){return!1}}function R(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const O="FirebaseError";class N extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=O,Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,D.prototype.create)}}class D{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?x(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new N(r,o,n);return a}}function x(e,t){return e.replace(P,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const P=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function M(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(F(n)&&F(s)){if(!M(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function F(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function V(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function j(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t){const n=new $(e,t);return n.subscribe.bind(n)}class ${constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=q(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=z),void 0===r.error&&(r.error=z),void 0===r.complete&&(r.complete=z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function q(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){return e&&e._delegate?e._delegate:e}},144:function(e,t,n){n.d(t,{C4:function(){return y},EW:function(){return Ae},Gc:function(){return ge},IG:function(){return Te},IJ:function(){return De},KR:function(){return Ne},Kh:function(){return pe},Pr:function(){return Fe},R1:function(){return Le},X2:function(){return u},bl:function(){return v},fE:function(){return _e},g8:function(){return ve},hZ:function(){return R},i9:function(){return Oe},ju:function(){return be},o5:function(){return c},u4:function(){return k},ux:function(){return Ee},yC:function(){return o}});n(4114);var r=n(4232);let i,s;class o{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function a(e,t=i){t&&t.active&&t.effects.push(e)}function c(){return i}class u{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,a(this,r)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,y();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(l(t.computed),this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),v()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=p,t=s;try{return p=!0,s=this,this._runnings++,h(this),this.fn()}finally{d(this),this._runnings--,s=t,p=e}}stop(){var e;this.active&&(h(this),d(this),null==(e=this.onStop)||e.call(this),this.active=!1)}}function l(e){return e.value}function h(e){e._trackId++,e._depsLength=0}function d(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)f(e.deps[t],e);e.deps.length=e._depsLength}}function f(e,t){const n=e.get(t);void 0!==n&&t._trackId!==n&&(e.delete(t),0===e.size&&e.cleanup())}let p=!0,g=0;const m=[];function y(){m.push(p),p=!1}function v(){const e=m.pop();p=void 0===e||e}function w(){g++}function _(){g--;while(!g&&E.length)E.shift()()}function b(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const n=e.deps[e._depsLength];n!==t?(n&&f(n,e),e.deps[e._depsLength++]=t):e._depsLength++}}const E=[];function T(e,t,n){w();for(const r of e.keys()){let n;r._dirtyLevel<t&&(null!=n?n:n=e.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=0===r._dirtyLevel),r._dirtyLevel=t),r._shouldSchedule&&(null!=n?n:n=e.get(r)===r._trackId)&&(r.trigger(),r._runnings&&!r.allowRecurse||2===r._dirtyLevel||(r._shouldSchedule=!1,r.scheduler&&E.push(r.scheduler)))}_()}const I=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},S=new WeakMap,C=Symbol(""),A=Symbol("");function k(e,t,n){if(p&&s){let t=S.get(e);t||S.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=I((()=>t.delete(n)))),b(s,r,void 0)}}function R(e,t,n,i,s,o){const a=S.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.cy)(e)){const e=Number(i);a.forEach(((t,n)=>{("length"===n||!(0,r.Bm)(n)&&n>=e)&&c.push(t)}))}else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.cy)(e)?(0,r.yI)(n)&&c.push(a.get("length")):(c.push(a.get(C)),(0,r.CE)(e)&&c.push(a.get(A)));break;case"delete":(0,r.cy)(e)||(c.push(a.get(C)),(0,r.CE)(e)&&c.push(a.get(A)));break;case"set":(0,r.CE)(e)&&c.push(a.get(C));break}w();for(const r of c)r&&T(r,4,void 0);_()}const O=(0,r.pD)("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.Bm)),D=x();function x(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ee(this);for(let t=0,i=this.length;t<i;t++)k(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ee)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){y(),w();const n=Ee(this)[t].apply(this,e);return _(),v(),n}})),e}function P(e){const t=Ee(this);return k(t,"has",e),t.hasOwnProperty(e)}class L{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!i;if("__v_isReadonly"===t)return i;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(i?s?he:le:s?ue:ce).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=(0,r.cy)(e);if(!i){if(o&&(0,r.$3)(D,t))return Reflect.get(D,t,n);if("hasOwnProperty"===t)return P}const a=Reflect.get(e,t,n);return((0,r.Bm)(t)?N.has(t):O(t))?a:(i||k(e,"get",t),s?a:Oe(a)?o&&(0,r.yI)(t)?a:a.value:(0,r.Gv)(a)?i?me(a):pe(a):a)}}class M extends L{constructor(e=!1){super(!1,e)}set(e,t,n,i){let s=e[t];if(!this._isShallow){const t=we(s);if(_e(n)||we(n)||(s=Ee(s),n=Ee(n)),!(0,r.cy)(e)&&Oe(s)&&!Oe(n))return!t&&(s.value=n,!0)}const o=(0,r.cy)(e)&&(0,r.yI)(t)?Number(t)<e.length:(0,r.$3)(e,t),a=Reflect.set(e,t,n,i);return e===Ee(i)&&(o?(0,r.$H)(n,s)&&R(e,"set",t,n,s):R(e,"add",t,n)),a}deleteProperty(e,t){const n=(0,r.$3)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&R(e,"delete",t,void 0,i),s}has(e,t){const n=Reflect.has(e,t);return(0,r.Bm)(t)&&N.has(t)||k(e,"has",t),n}ownKeys(e){return k(e,"iterate",(0,r.cy)(e)?"length":C),Reflect.ownKeys(e)}}class F extends L{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const U=new M,V=new F,j=new M(!0),B=e=>e,$=e=>Reflect.getPrototypeOf(e);function q(e,t,n=!1,i=!1){e=e["__v_raw"];const s=Ee(e),o=Ee(t);n||((0,r.$H)(t,o)&&k(s,"get",t),k(s,"get",o));const{has:a}=$(s),c=i?B:n?Se:Ie;return a.call(s,t)?c(e.get(t)):a.call(s,o)?c(e.get(o)):void(e!==s&&e.get(t))}function z(e,t=!1){const n=this["__v_raw"],i=Ee(n),s=Ee(e);return t||((0,r.$H)(e,s)&&k(i,"has",e),k(i,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function K(e,t=!1){return e=e["__v_raw"],!t&&k(Ee(e),"iterate",C),Reflect.get(e,"size",e)}function H(e){e=Ee(e);const t=Ee(this),n=$(t),r=n.has.call(t,e);return r||(t.add(e),R(t,"add",e,e)),this}function G(e,t){t=Ee(t);const n=Ee(this),{has:i,get:s}=$(n);let o=i.call(n,e);o||(e=Ee(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.$H)(t,a)&&R(n,"set",e,t,a):R(n,"add",e,t),this}function W(e){const t=Ee(this),{has:n,get:r}=$(t);let i=n.call(t,e);i||(e=Ee(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&R(t,"delete",e,void 0,s),o}function Q(){const e=Ee(this),t=0!==e.size,n=void 0,r=e.clear();return t&&R(e,"clear",void 0,void 0,n),r}function X(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ee(s),a=t?B:e?Se:Ie;return!e&&k(o,"iterate",C),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function J(e,t,n){return function(...i){const s=this["__v_raw"],o=Ee(s),a=(0,r.CE)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?B:t?Se:Ie;return!t&&k(o,"iterate",u?A:C),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function Y(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function Z(){const e={get(e){return q(this,e)},get size(){return K(this)},has:z,add:H,set:G,delete:W,clear:Q,forEach:X(!1,!1)},t={get(e){return q(this,e,!1,!0)},get size(){return K(this)},has:z,add:H,set:G,delete:W,clear:Q,forEach:X(!1,!0)},n={get(e){return q(this,e,!0)},get size(){return K(this,!0)},has(e){return z.call(this,e,!0)},add:Y("add"),set:Y("set"),delete:Y("delete"),clear:Y("clear"),forEach:X(!0,!1)},r={get(e){return q(this,e,!0,!0)},get size(){return K(this,!0)},has(e){return z.call(this,e,!0)},add:Y("add"),set:Y("set"),delete:Y("delete"),clear:Y("clear"),forEach:X(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=J(i,!1,!1),n[i]=J(i,!0,!1),t[i]=J(i,!1,!0),r[i]=J(i,!0,!0)})),[e,n,t,r]}const[ee,te,ne,re]=Z();function ie(e,t){const n=t?e?re:ne:e?te:ee;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.$3)(n,i)&&i in t?n:t,i,s)}const se={get:ie(!1,!1)},oe={get:ie(!1,!0)},ae={get:ie(!0,!1)};const ce=new WeakMap,ue=new WeakMap,le=new WeakMap,he=new WeakMap;function de(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:de((0,r.Zf)(e))}function pe(e){return we(e)?e:ye(e,!1,U,se,ce)}function ge(e){return ye(e,!1,j,oe,ue)}function me(e){return ye(e,!0,V,ae,le)}function ye(e,t,n,i,s){if(!(0,r.Gv)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=fe(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function ve(e){return we(e)?ve(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function we(e){return!(!e||!e["__v_isReadonly"])}function _e(e){return!(!e||!e["__v_isShallow"])}function be(e){return ve(e)||we(e)}function Ee(e){const t=e&&e["__v_raw"];return t?Ee(t):e}function Te(e){return Object.isExtensible(e)&&(0,r.yQ)(e,"__v_skip",!0),e}const Ie=e=>(0,r.Gv)(e)?pe(e):e,Se=e=>(0,r.Gv)(e)?me(e):e;class Ce{constructor(e,t,n,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new u((()=>e(this._value)),(()=>Re(this,2===this.effect._dirtyLevel?2:3))),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ee(this);return e._cacheable&&!e.effect.dirty||!(0,r.$H)(e._value,e._value=e.effect.run())||Re(e,4),ke(e),e.effect._dirtyLevel>=2&&Re(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ae(e,t,n=!1){let i,s;const o=(0,r.Tn)(e);o?(i=e,s=r.tE):(i=e.get,s=e.set);const a=new Ce(i,s,o||!s,n);return a}function ke(e){var t;p&&s&&(e=Ee(e),b(s,null!=(t=e.dep)?t:e.dep=I((()=>e.dep=void 0),e instanceof Ce?e:void 0),void 0))}function Re(e,t=4,n){e=Ee(e);const r=e.dep;r&&T(r,t,void 0)}function Oe(e){return!(!e||!0!==e.__v_isRef)}function Ne(e){return xe(e,!1)}function De(e){return xe(e,!0)}function xe(e,t){return Oe(e)?e:new Pe(e,t)}class Pe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ee(e),this._value=t?e:Ie(e)}get value(){return ke(this),this._value}set value(e){const t=this.__v_isShallow||_e(e)||we(e);e=t?e:Ee(e),(0,r.$H)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ie(e),Re(this,4,e))}}function Le(e){return Oe(e)?e.value:e}const Me={get:(e,t,n)=>Le(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Oe(i)&&!Oe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Fe(e){return ve(e)?e:new Proxy(e,Me)}},6768:function(e,t,n){n.d(t,{$u:function(){return We},CE:function(){return pn},Df:function(){return De},EW:function(){return nr},FK:function(){return nn},Fv:function(){return An},Gt:function(){return Ct},Gy:function(){return Ee},K9:function(){return Gt},Lk:function(){return bn},MZ:function(){return Ne},OW:function(){return ke},Q3:function(){return kn},QP:function(){return Ie},Qi:function(){return L},WQ:function(){return At},Wv:function(){return gn},bF:function(){return En},bo:function(){return ve},dY:function(){return v},eW:function(){return Cn},g2:function(){return H},h:function(){return rr},jt:function(){return M},k6:function(){return F},nI:function(){return Un},pI:function(){return tt},pM:function(){return xe},pR:function(){return Ce},qL:function(){return o},tY:function(){return Z},uX:function(){return un},wB:function(){return fe}});n(4114);var r=n(144),i=n(4232);function s(e,t,n,r){try{return r?e(...r):e()}catch(i){a(i,t,n)}}function o(e,t,n,r){if((0,i.Tn)(e)){const o=s(e,t,n,r);return o&&(0,i.yL)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let i=0;i<e.length;i++)c.push(o(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,g=0;const m=Promise.resolve();let y=null;function v(e){const t=y||m;return e?t.then(this?e.bind(this):e):t}function w(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=h[r],s=C(i);s<e||s===e&&i.pre?t=r+1:n=r}return t}function _(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(w(e.id),0,e),b())}function b(){u||l||(l=!0,y=m.then(k))}function E(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function T(e){(0,i.cy)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?g+1:g)||f.push(e),b()}function I(e,t,n=(u?d+1:0)){for(0;n<h.length;n++){const t=h[n];if(t&&t.pre){if(e&&t.id!==e.uid)continue;0,h.splice(n,1),n--,t()}}}function S(e){if(f.length){const e=[...new Set(f)].sort(((e,t)=>C(e)-C(t)));if(f.length=0,p)return void p.push(...e);for(p=e,g=0;g<p.length;g++)p[g]();p=null,g=0}}const C=e=>null==e.id?1/0:e.id,A=(e,t)=>{const n=C(e)-C(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function k(e){l=!1,u=!0,h.sort(A);i.tE;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,S(e),u=!1,y=null,(h.length||f.length)&&k(e)}}function R(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.MZ;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.MZ;o&&(s=n.map((e=>(0,i.Kg)(e)?e.trim():e))),t&&(s=n.map(i.bB))}let u;let l=r[u=(0,i.rU)(t)]||r[u=(0,i.rU)((0,i.PT)(t))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function O(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.Tn)(e)){const r=e=>{const n=O(e,t,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach((e=>a[e]=null)):(0,i.X$)(a,o),(0,i.Gv)(e)&&r.set(e,a),a):((0,i.Gv)(e)&&r.set(e,null),null)}function N(e,t){return!(!e||!(0,i.Mp)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.$3)(e,t[0].toLowerCase()+t.slice(1))||(0,i.$3)(e,(0,i.Tg)(t))||(0,i.$3)(e,t))}let D=null,x=null;function P(e){const t=D;return D=e,x=e&&e.type.__scopeId||null,t}function L(e){x=e}function M(){x=null}function F(e,t=D,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&dn(-1);const i=P(t);let s;try{s=e(...n)}finally{P(i),r._d&&dn(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function U(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:g,ctx:m,inheritAttrs:y}=e;let v,w;const _=P(e);try{if(4&n.shapeFlag){const e=s||r,t=e;v=Rn(d.call(t,e,f,o,g,p,m)),w=l}else{const e=t;0,v=Rn(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),w=t.props?l:j(l)}}catch(E){an.length=0,a(E,e,1),v=En(sn)}let b=v;if(w&&!1!==y){const e=Object.keys(w),{shapeFlag:t}=b;e.length&&7&t&&(c&&e.some(i.CP)&&(w=B(w,c)),b=Sn(b,w))}return n.dirs&&(b=Sn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),v=b,P(_),v}function V(e,t=!0){let n;for(let r=0;r<e.length;r++){const t=e[r];if(!mn(t))return;if(t.type!==sn||"v-if"===t.children){if(n)return;n=t}}return n}const j=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.Mp)(n))&&((t||(t={}))[n]=e[n]);return t},B=(e,t)=>{const n={};for(const r in e)(0,i.CP)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function $(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||q(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?q(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!N(u,n))return!0}}return!1}function q(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!N(n,s))return!0}return!1}function z({vnode:e,parent:t},n){while(t){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}const K="components";function H(e,t){return W(K,e,!0,t)||e}const G=Symbol.for("v-ndc");function W(e,t,n=!0,r=!1){const s=D||Fn;if(s){const n=s.type;if(e===K){const e=er(n,!1);if(e&&(e===t||e===(0,i.PT)(t)||e===(0,i.ZH)((0,i.PT)(t))))return n}const o=Q(s[e]||n[e],t)||Q(s.appContext[e],t);return!o&&r?n:o}}function Q(e,t){return e&&(e[t]||e[(0,i.PT)(t)]||e[(0,i.ZH)((0,i.PT)(t))])}const X=e=>e.__isSuspense;let J=0;const Y={name:"Suspense",__isSuspense:!0,process(e,t,n,r,i,s,o,a,c,u){if(null==e)te(t,n,r,i,s,o,a,c,u);else{if(s&&s.deps>0)return t.suspense=e.suspense,t.suspense.vnode=t,void(t.el=e.el);ne(e,t,n,r,i,o,a,c,u)}},hydrate:ie,create:re,normalize:se},Z=Y;function ee(e,t){const n=e.props&&e.props[t];(0,i.Tn)(n)&&n()}function te(e,t,n,r,i,s,o,a,c){const{p:u,o:{createElement:l}}=c,h=l("div"),d=e.suspense=re(e,i,r,t,h,n,s,o,a,c);u(null,d.pendingBranch=e.ssContent,h,null,r,d,s,o),d.deps>0?(ee(e,"onPending"),ee(e,"onFallback"),u(null,e.ssFallback,t,n,r,null,s,o),ce(d,e.ssFallback)):d.resolve(!1,!0)}function ne(e,t,n,r,i,s,o,a,{p:c,um:u,o:{createElement:l}}){const h=t.suspense=e.suspense;h.vnode=t,t.el=e.el;const d=t.ssContent,f=t.ssFallback,{activeBranch:p,pendingBranch:g,isInFallback:m,isHydrating:y}=h;if(g)h.pendingBranch=d,yn(d,g)?(c(g,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():m&&(y||(c(p,f,n,r,i,null,s,o,a),ce(h,f)))):(h.pendingId=J++,y?(h.isHydrating=!1,h.activeBranch=g):u(g,i,h),h.deps=0,h.effects.length=0,h.hiddenContainer=l("div"),m?(c(null,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0?h.resolve():(c(p,f,n,r,i,null,s,o,a),ce(h,f))):p&&yn(d,p)?(c(p,d,n,r,i,h,s,o,a),h.resolve(!0)):(c(null,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0&&h.resolve()));else if(p&&yn(d,p))c(p,d,n,r,i,h,s,o,a),ce(h,d);else if(ee(t,"onPending"),h.pendingBranch=d,512&d.shapeFlag?h.pendingId=d.component.suspenseId:h.pendingId=J++,c(null,d,h.hiddenContainer,null,i,h,s,o,a),h.deps<=0)h.resolve();else{const{timeout:e,pendingId:t}=h;e>0?setTimeout((()=>{h.pendingId===t&&h.fallback(f)}),e):0===e&&h.fallback(f)}}function re(e,t,n,r,s,o,c,u,l,h,d=!1){const{p:f,m:p,um:g,n:m,o:{parentNode:y,remove:v}}=h;let w;const _=ue(e);_&&(null==t?void 0:t.pendingBranch)&&(w=t.pendingId,t.deps++);const b=e.props?(0,i.Ro)(e.props.timeout):void 0;const E=o,I={vnode:e,parent:t,parentComponent:n,namespace:c,container:r,hiddenContainer:s,deps:0,pendingId:J++,timeout:"number"===typeof b?b:-1,activeBranch:null,pendingBranch:null,isInFallback:!d,isHydrating:d,isUnmounted:!1,effects:[],resolve(e=!1,n=!1){const{vnode:r,activeBranch:i,pendingBranch:s,pendingId:a,effects:c,parentComponent:u,container:l}=I;let h=!1;I.isHydrating?I.isHydrating=!1:e||(h=i&&s.transition&&"out-in"===s.transition.mode,h&&(i.transition.afterLeave=()=>{a===I.pendingId&&(p(s,l,o===E?m(i):o,0),T(c))}),i&&(y(i.el)!==I.hiddenContainer&&(o=m(i)),g(i,u,I,!0)),h||p(s,l,o,0)),ce(I,s),I.pendingBranch=null,I.isInFallback=!1;let d=I.parent,f=!1;while(d){if(d.pendingBranch){d.effects.push(...c),f=!0;break}d=d.parent}f||h||T(c),I.effects=[],_&&t&&t.pendingBranch&&w===t.pendingId&&(t.deps--,0!==t.deps||n||t.resolve()),ee(r,"onResolve")},fallback(e){if(!I.pendingBranch)return;const{vnode:t,activeBranch:n,parentComponent:r,container:i,namespace:s}=I;ee(t,"onFallback");const o=m(n),a=()=>{I.isInFallback&&(f(null,e,i,o,r,null,s,u,l),ce(I,e))},c=e.transition&&"out-in"===e.transition.mode;c&&(n.transition.afterLeave=a),I.isInFallback=!0,g(n,r,null,!0),c||a()},move(e,t,n){I.activeBranch&&p(I.activeBranch,e,t,n),I.container=e},next(){return I.activeBranch&&m(I.activeBranch)},registerDep(e,t){const n=!!I.pendingBranch;n&&I.deps++;const r=e.vnode.el;e.asyncDep.catch((t=>{a(t,e,0)})).then((i=>{if(e.isUnmounted||I.isUnmounted||I.pendingId!==e.suspenseId)return;e.asyncResolved=!0;const{vnode:s}=e;Qn(e,i,!1),r&&(s.el=r);const o=!r&&e.subTree.el;t(e,s,y(r||e.subTree.el),r?null:m(e.subTree),I,c,l),o&&v(o),z(e,s.el),n&&0===--I.deps&&I.resolve()}))},unmount(e,t){I.isUnmounted=!0,I.activeBranch&&g(I.activeBranch,n,e,t),I.pendingBranch&&g(I.pendingBranch,n,e,t)}};return I}function ie(e,t,n,r,i,s,o,a,c){const u=t.suspense=re(t,r,n,e.parentNode,document.createElement("div"),null,i,s,o,a,!0),l=c(e,u.pendingBranch=t.ssContent,n,u,s,o);return 0===u.deps&&u.resolve(!1,!0),l}function se(e){const{shapeFlag:t,children:n}=e,r=32&t;e.ssContent=oe(r?n.default:n),e.ssFallback=r?oe(n.fallback):En(sn)}function oe(e){let t;if((0,i.Tn)(e)){const n=hn&&e._c;n&&(e._d=!1,un()),e=e(),n&&(e._d=!0,t=cn,ln())}if((0,i.cy)(e)){const t=V(e);0,e=t}return e=Rn(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter((t=>t!==e))),e}function ae(e,t){t&&t.pendingBranch?(0,i.cy)(e)?t.effects.push(...e):t.effects.push(e):T(e)}function ce(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e;let i=t.el;while(!i&&t.component)t=t.component.subTree,i=t.el;n.el=i,r&&r.subTree===n&&(r.vnode.el=i,z(r,i))}function ue(e){var t;return null!=(null==(t=e.props)?void 0:t.suspensible)&&!1!==e.props.suspensible}const le=Symbol.for("v-scx"),he=()=>{{const e=At(le);return e}};const de={};function fe(e,t,n){return pe(e,t,n)}function pe(e,t,{immediate:n,deep:a,flush:c,once:u,onTrack:l,onTrigger:h}=i.MZ){if(t&&u){const e=t;t=(...t)=>{e(...t),C()}}const d=Fn,f=e=>!0===a?e:ye(e,!1===a?1:void 0);let p,g,m=!1,y=!1;if((0,r.i9)(e)?(p=()=>e.value,m=(0,r.fE)(e)):(0,r.g8)(e)?(p=()=>f(e),m=!0):(0,i.cy)(e)?(y=!0,m=e.some((e=>(0,r.g8)(e)||(0,r.fE)(e))),p=()=>e.map((e=>(0,r.i9)(e)?e.value:(0,r.g8)(e)?f(e):(0,i.Tn)(e)?s(e,d,2):void 0))):p=(0,i.Tn)(e)?t?()=>s(e,d,2):()=>(g&&g(),o(e,d,3,[w])):i.tE,t&&a){const e=p;p=()=>ye(e())}let v,w=e=>{g=I.onStop=()=>{s(e,d,4),g=I.onStop=void 0}};if(Hn){if(w=i.tE,t?n&&o(t,d,3,[p(),y?[]:void 0,w]):p(),"sync"!==c)return i.tE;{const e=he();v=e.__watcherHandles||(e.__watcherHandles=[])}}let b=y?new Array(e.length).fill(de):de;const E=()=>{if(I.active&&I.dirty)if(t){const e=I.run();(a||m||(y?e.some(((e,t)=>(0,i.$H)(e,b[t]))):(0,i.$H)(e,b)))&&(g&&g(),o(t,d,3,[e,b===de?void 0:y&&b[0]===de?[]:b,w]),b=e)}else I.run()};let T;E.allowRecurse=!!t,"sync"===c?T=E:"post"===c?T=()=>Ht(E,d&&d.suspense):(E.pre=!0,d&&(E.id=d.uid),T=()=>_(E));const I=new r.X2(p,i.tE,T),S=(0,r.o5)(),C=()=>{I.stop(),S&&(0,i.TF)(S.effects,I)};return t?n?E():b=I.run():"post"===c?Ht(I.run.bind(I),d&&d.suspense):I.run(),v&&v.push(C),C}function ge(e,t,n){const r=this.proxy,s=(0,i.Kg)(e)?e.includes(".")?me(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.Tn)(t)?o=t:(o=t.handler,n=t);const a=Bn(this),c=pe(s,o.bind(r),n);return a(),c}function me(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ye(e,t,n=0,s){if(!(0,i.Gv)(e)||e["__v_skip"])return e;if(t&&t>0){if(n>=t)return e;n++}if(s=s||new Set,s.has(e))return e;if(s.add(e),(0,r.i9)(e))ye(e.value,t,n,s);else if((0,i.cy)(e))for(let r=0;r<e.length;r++)ye(e[r],t,n,s);else if((0,i.vM)(e)||(0,i.CE)(e))e.forEach((e=>{ye(e,t,n,s)}));else if((0,i.Qd)(e))for(const r in e)ye(e[r],t,n,s);return e}function ve(e,t){if(null===D)return e;const n=Zn(D)||D.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,o,a,c=i.MZ]=t[s];e&&((0,i.Tn)(e)&&(e={mounted:e,updated:e}),e.deep&&ye(o),r.push({dir:e,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function we(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),o(l,n,8,[e.el,u,e,t]),(0,r.bl)())}}const _e=Symbol("_leaveCb"),be=Symbol("_enterCb");function Ee(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return He((()=>{e.isMounted=!0})),Qe((()=>{e.isUnmounting=!0})),e}const Te=[Function,Array],Ie={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Te,onEnter:Te,onAfterEnter:Te,onEnterCancelled:Te,onBeforeLeave:Te,onLeave:Te,onAfterLeave:Te,onLeaveCancelled:Te,onBeforeAppear:Te,onAppear:Te,onAfterAppear:Te,onAppearCancelled:Te},Se={name:"BaseTransition",props:Ie,setup(e,{slots:t}){const n=Un(),i=Ee();return()=>{const s=t.default&&De(t.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let e=!1;for(const t of s)if(t.type!==sn){0,o=t,e=!0;break}}const a=(0,r.ux)(e),{mode:c}=a;if(i.isLeaving)return Re(o);const u=Oe(o);if(!u)return Re(o);const l=ke(u,a,i,n);Ne(u,l);const h=n.subTree,d=h&&Oe(h);if(d&&d.type!==sn&&!yn(u,d)){const e=ke(d,a,i,n);if(Ne(d,e),"out-in"===c)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},Re(o);"in-out"===c&&u.type!==sn&&(e.delayLeave=(e,t,n)=>{const r=Ae(i,d);r[String(d.key)]=d,e[_e]=()=>{t(),e[_e]=void 0,delete l.delayedLeave},l.delayedLeave=n})}return o}}},Ce=Se;function Ae(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ke(e,t,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:_}=t,b=String(e.key),E=Ae(n,e),T=(e,t)=>{e&&o(e,r,9,t)},I=(e,t)=>{const n=t[1];T(e,t),(0,i.cy)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!s)return;r=y||u}t[_e]&&t[_e](!0);const i=E[b];i&&yn(e,i)&&i.el[_e]&&i.el[_e](),T(r,[t])},enter(e){let t=l,r=h,i=d;if(!n.isMounted){if(!s)return;t=v||l,r=w||h,i=_||d}let o=!1;const a=e[be]=t=>{o||(o=!0,T(t?i:r,[e]),S.delayedLeave&&S.delayedLeave(),e[be]=void 0)};t?I(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t[be]&&t[be](!0),n.isUnmounting)return r();T(f,[t]);let s=!1;const o=t[_e]=n=>{s||(s=!0,r(),T(n?m:g,[t]),t[_e]=void 0,E[i]===e&&delete E[i])};E[i]=e,p?I(p,[t,o]):o()},clone(e){return ke(e,t,n,r)}};return S}function Re(e){if(Le(e))return e=Sn(e),e.children=null,e}function Oe(e){return Le(e)?e.children?e.children[0]:void 0:e}function Ne(e,t){6&e.shapeFlag&&e.component?Ne(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function De(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===nn?(128&o.patchFlag&&i++,r=r.concat(De(o.children,t,a))):(t||o.type!==sn)&&r.push(null!=a?Sn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function xe(e,t){return(0,i.Tn)(e)?(()=>(0,i.X$)({name:e.name},t,{setup:e}))():e}const Pe=e=>!!e.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const Le=e=>e.type.__isKeepAlive;RegExp,RegExp;function Me(e,t){return(0,i.cy)(e)?e.some((e=>Me(e,t))):(0,i.Kg)(e)?e.split(",").includes(t):!!(0,i.gd)(e)&&e.test(t)}function Fe(e,t){Ve(e,"a",t)}function Ue(e,t){Ve(e,"da",t)}function Ve(e,t,n=Fn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(qe(t,r,n),n){let e=n.parent;while(e&&e.parent)Le(e.parent.vnode)&&je(r,t,n,e),e=e.parent}}function je(e,t,n,r){const s=qe(t,e,r,!0);Xe((()=>{(0,i.TF)(r[t],s)}),n)}function Be(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function $e(e){return 128&e.shapeFlag?e.ssContent:e}function qe(e,t,n=Fn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.C4)();const s=Bn(n),a=o(t,n,e,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const ze=e=>(t,n=Fn)=>(!Hn||"sp"===e)&&qe(e,((...e)=>t(...e)),n),Ke=ze("bm"),He=ze("m"),Ge=ze("bu"),We=ze("u"),Qe=ze("bum"),Xe=ze("um"),Je=ze("sp"),Ye=ze("rtg"),Ze=ze("rtc");function et(e,t=Fn){qe("ec",e,t)}function tt(e,t,n,r){let s;const o=n&&n[r];if((0,i.cy)(e)||(0,i.Kg)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Gv)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const nt=e=>e?qn(e)?Zn(e)||e.proxy:nt(e.parent):null,rt=(0,i.X$)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>nt(e.parent),$root:e=>nt(e.root),$emit:e=>e.emit,$options:e=>dt(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,_(e.update)}),$nextTick:e=>e.n||(e.n=v.bind(e.proxy)),$watch:e=>ge.bind(e)}),it=(e,t)=>e!==i.MZ&&!e.__isScriptSetup&&(0,i.$3)(e,t),st={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(it(s,t))return c[t]=1,s[t];if(o!==i.MZ&&(0,i.$3)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.$3)(h,t))return c[t]=3,a[t];if(n!==i.MZ&&(0,i.$3)(n,t))return c[t]=4,n[t];at&&(c[t]=0)}}const d=rt[t];let f,p;return d?("$attrs"===t&&(0,r.u4)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.MZ&&(0,i.$3)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.$3)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return it(s,t)?(s[t]=n,!0):r!==i.MZ&&(0,i.$3)(r,t)?(r[t]=n,!0):!(0,i.$3)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.MZ&&(0,i.$3)(e,a)||it(t,a)||(c=o[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(rt,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.$3)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ot(e){return(0,i.cy)(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let at=!0;function ct(e){const t=dt(e),n=e.proxy,s=e.ctx;at=!1,t.beforeCreate&&lt(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:_,destroyed:b,unmounted:E,render:T,renderTracked:I,renderTriggered:S,errorCaptured:C,serverPrefetch:A,expose:k,inheritAttrs:R,components:O,directives:N,filters:D}=t,x=null;if(h&&ut(h,s,x),c)for(const r in c){const e=c[r];(0,i.Tn)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Gv)(t)&&(e.data=(0,r.Kh)(t))}if(at=!0,a)for(const r in a){const e=a[r],t=(0,i.Tn)(e)?e.bind(n,n):(0,i.Tn)(e.get)?e.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(e)&&(0,i.Tn)(e.set)?e.set.bind(n):i.tE,c=nr({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)ht(u[r],s,n,r);if(l){const e=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{Ct(t,e[t])}))}function P(e,t){(0,i.cy)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&lt(d,e,"c"),P(Ke,f),P(He,p),P(Ge,g),P(We,m),P(Fe,y),P(Ue,v),P(et,C),P(Ze,I),P(Ye,S),P(Qe,_),P(Xe,E),P(Je,A),(0,i.cy)(k))if(k.length){const t=e.exposed||(e.exposed={});k.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===i.tE&&(e.render=T),null!=R&&(e.inheritAttrs=R),O&&(e.components=O),N&&(e.directives=N)}function ut(e,t,n=i.tE){(0,i.cy)(e)&&(e=yt(e));for(const s in e){const n=e[s];let o;o=(0,i.Gv)(n)?"default"in n?At(n.from||s,n.default,!0):At(n.from||s):At(n),(0,r.i9)(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e}):t[s]=o}}function lt(e,t,n){o((0,i.cy)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function ht(e,t,n,r){const s=r.includes(".")?me(n,r):()=>n[r];if((0,i.Kg)(e)){const n=t[e];(0,i.Tn)(n)&&fe(s,n)}else if((0,i.Tn)(e))fe(s,e.bind(n));else if((0,i.Gv)(e))if((0,i.cy)(e))e.forEach((e=>ht(e,t,n,r)));else{const r=(0,i.Tn)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.Tn)(r)&&fe(s,r,e)}else 0}function dt(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((e=>ft(u,e,a,!0))),ft(u,t,a)):u=t,(0,i.Gv)(t)&&o.set(t,u),u}function ft(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&ft(e,s,n,!0),i&&i.forEach((t=>ft(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=pt[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const pt={data:gt,props:_t,emits:_t,methods:wt,computed:wt,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:wt,directives:wt,watch:bt,provide:gt,inject:mt};function gt(e,t){return t?e?function(){return(0,i.X$)((0,i.Tn)(e)?e.call(this,this):e,(0,i.Tn)(t)?t.call(this,this):t)}:t:e}function mt(e,t){return wt(yt(e),yt(t))}function yt(e){if((0,i.cy)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function vt(e,t){return e?[...new Set([].concat(e,t))]:t}function wt(e,t){return e?(0,i.X$)(Object.create(null),e,t):t}function _t(e,t){return e?(0,i.cy)(e)&&(0,i.cy)(t)?[...new Set([...e,...t])]:(0,i.X$)(Object.create(null),ot(e),ot(null!=t?t:{})):t}function bt(e,t){if(!e)return t;if(!t)return e;const n=(0,i.X$)(Object.create(null),e);for(const r in t)n[r]=vt(e[r],t[r]);return n}function Et(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tt=0;function It(e,t){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=Et(),o=new WeakSet;let a=!1;const c=s.app={_uid:Tt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:ir,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.Tn)(e.install)?(o.add(e),e.install(c,...t)):(0,i.Tn)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=En(n,r);return l.appContext=s,!0===u?u="svg":!1===u&&(u=void 0),o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Zn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c},runWithContext(e){const t=St;St=c;try{return e()}finally{St=t}}};return c}}let St=null;function Ct(e,t){if(Fn){let n=Fn.provides;const r=Fn.parent&&Fn.parent.provides;r===n&&(n=Fn.provides=Object.create(r)),n[e]=t}else 0}function At(e,t,n=!1){const r=Fn||D;if(r||St){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:St._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.Tn)(t)?t.call(r&&r.proxy):t}else 0}function kt(e,t,n,s=!1){const o={},a={};(0,i.yQ)(a,vn,1),e.propsDefaults=Object.create(null),Ot(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Gc)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Rt(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.ux)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;Ot(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.$3)(t,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=Nt(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.$3)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(N(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i.PT)(s);o[t]=Nt(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(e,"set","$attrs")}function Ot(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.SU)(r))continue;const l=t[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:N(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Nt(o,t,c,s[c],e,!(0,i.$3)(s,c))}}return u}function Nt(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.$3)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(e)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=Bn(s);r=i[n]=e.call(null,t),o()}}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}function Dt(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.Tn)(e)){const r=e=>{u=!0;const[n,r]=Dt(e,t,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Gv)(e)&&r.set(e,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const e=(0,i.PT)(o[h]);xt(e)&&(a[e]=i.MZ)}else if(o){0;for(const e in o){const t=(0,i.PT)(e);if(xt(t)){const n=o[e],r=a[t]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n);if(r){const e=Mt(Boolean,r.type),n=Mt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.$3)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Gv)(e)&&r.set(e,l),l}function xt(e){return"$"!==e[0]&&!(0,i.SU)(e)}function Pt(e){if(null===e)return"null";if("function"===typeof e)return e.name||"";if("object"===typeof e){const t=e.constructor&&e.constructor.name;return t||""}return""}function Lt(e,t){return Pt(e)===Pt(t)}function Mt(e,t){return(0,i.cy)(t)?t.findIndex((t=>Lt(t,e))):(0,i.Tn)(t)&&Lt(t,e)?0:-1}const Ft=e=>"_"===e[0]||"$stable"===e,Ut=e=>(0,i.cy)(e)?e.map(Rn):[Rn(e)],Vt=(e,t,n)=>{if(t._n)return t;const r=F(((...e)=>Ut(t(...e))),n);return r._c=!1,r},jt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ft(s))continue;const n=e[s];if((0,i.Tn)(n))t[s]=Vt(s,n,r);else if(null!=n){0;const e=Ut(n);t[s]=()=>e}}},Bt=(e,t)=>{const n=Ut(t);e.slots.default=()=>n},$t=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.ux)(t),(0,i.yQ)(t,"_",n)):jt(t,e.slots={})}else e.slots={},t&&Bt(e,t);(0,i.yQ)(e.slots,vn,1)},qt=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.MZ;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.X$)(s,t),n||1!==e||delete s._):(o=!t.$stable,jt(t,s)),a=t}else t&&(Bt(e,t),a={default:1});if(o)for(const i in s)Ft(i)||null!=a[i]||delete s[i]};function zt(e,t,n,o,a=!1){if((0,i.cy)(e))return void e.forEach(((e,r)=>zt(e,t&&((0,i.cy)(t)?t[r]:t),n,o,a)));if(Pe(o)&&!a)return;const c=4&o.shapeFlag?Zn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.Kg)(d)?(f[d]=null,(0,i.$3)(p,d)&&(p[d]=null)):(0,r.i9)(d)&&(d.value=null)),(0,i.Tn)(h))s(h,l,12,[u,f]);else{const t=(0,i.Kg)(h),s=(0,r.i9)(h);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.$3)(p,h)?p[h]:f[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.$3)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.$3)(p,h)&&(p[h]=u)):s&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,Ht(r,n)):r()}else 0}}function Kt(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Ht=ae;function Gt(e){return Wt(e)}function Wt(e,t){Kt();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=e,y=(e,t,n,r=null,i=null,s=null,o=void 0,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!yn(e,t)&&(r=Y(e),G(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case rn:v(e,t,n,r);break;case sn:w(e,t,n,r);break;case on:null==e&&b(t,n,r,o);break;case nn:P(e,t,n,r,i,s,o,a,c);break;default:1&h?A(e,t,n,r,i,s,o,a,c):6&h?L(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,te)}null!=l&&i&&zt(l,e&&e.ref,s,t||e,!t)},v=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},b=(e,t,n,r)=>{[e.el,e.anchor]=m(e.children,t,n,r,e.el,e.anchor)},T=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},C=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},A=(e,t,n,r,i,s,o,a,c)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?k(t,n,r,i,s,o,a,c):N(e,t,i,s,o,a,c)},k=(e,t,n,r,o,u,l,h)=>{let f,p;const{props:g,shapeFlag:m,transition:y,dirs:v}=e;if(f=e.el=c(e.type,u,g&&g.is,g),8&m?d(f,e.children):16&m&&O(e.children,f,null,r,o,Qt(e,u),l,h),v&&we(e,null,r,"created"),R(f,e,e.scopeId,l,r),g){for(const t in g)"value"===t||(0,i.SU)(t)||a(f,t,null,g[t],u,e.children,r,o,J);"value"in g&&a(f,"value",null,g.value,u),(p=g.onVnodeBeforeMount)&&xn(p,r,e)}v&&we(e,null,r,"beforeMount");const w=Jt(o,y);w&&y.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||w||v)&&Ht((()=>{p&&xn(p,r,e),w&&y.enter(f),v&&we(e,null,r,"mounted")}),o)},R=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let s=0;s<r.length;s++)g(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;R(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},O=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?On(e[u]):Rn(e[u]);y(null,c,t,n,r,i,s,o,a)}},N=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.MZ,g=t.props||i.MZ;let m;if(n&&Xt(n,!1),(m=g.onVnodeBeforeUpdate)&&xn(m,n,t,e),f&&we(t,e,n,"beforeUpdate"),n&&Xt(n,!0),h?D(e.dynamicChildren,h,u,n,r,Qt(t,s),o):c||B(e,t,u,null,n,r,Qt(t,s),o,!1),l>0){if(16&l)x(u,t,p,g,n,r,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=g[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,J)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||x(u,t,p,g,n,r,s);((m=g.onVnodeUpdated)||f)&&Ht((()=>{m&&xn(m,n,t,e),f&&we(t,e,n,"updated")}),r)},D=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===nn||!yn(c,u)||70&c.shapeFlag)?f(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},x=(e,t,n,r,s,o,c)=>{if(n!==r){if(n!==i.MZ)for(const u in n)(0,i.SU)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,J);for(const u in r){if((0,i.SU)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,J)}"value"in r&&a(e,"value",n.value,r.value,c)}},P=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(s(h,n,r),s(d,n,r),O(t.children||[],n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(D(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Yt(e,t,!0)):B(e,t,n,d,i,o,a,c,l)},L=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):M(t,n,r,i,s,o,c):F(e,t,c)},M=(e,t,n,r,i,s,o)=>{const a=e.component=Mn(e,r,i);if(Le(e)&&(a.ctx.renderer=te),Gn(a),a.asyncDep){if(i&&i.registerDep(a,V),!e.el){const e=a.subTree=En(sn);w(null,e,t,n)}}else V(a,e,t,n,i,s,o)},F=(e,t,n)=>{const r=t.component=e.component;if($(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,t,n);r.next=t,E(r.update),r.effect.dirty=!0,r.update()}else t.el=e.el,r.vnode=t},V=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:l}=e;{const n=en(e);if(n)return t&&(t.el=l.el,j(e,t,c)),void n.asyncDep.then((()=>{e.isUnmounted||u()}))}let h,d=t;0,Xt(e,!1),t?(t.el=l.el,j(e,t,c)):t=l,n&&(0,i.DY)(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&xn(h,s,t,l),Xt(e,!0);const p=U(e);0;const g=e.subTree;e.subTree=p,y(g,p,f(g.el),Y(g),e,o,a),t.el=p.el,null===d&&z(e,p.el),r&&Ht(r,o),(h=t.props&&t.props.onVnodeUpdated)&&Ht((()=>xn(h,s,t,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=Pe(t);if(Xt(e,!1),l&&(0,i.DY)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&xn(r,d,t),Xt(e,!0),c&&re){const n=()=>{e.subTree=U(e),re(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=U(e);0,y(null,r,n,s,e,o,a),t.el=r.el}if(h&&Ht(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;Ht((()=>xn(r,d,e)),o)}(256&t.shapeFlag||d&&Pe(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&Ht(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.X2(u,i.tE,(()=>_(h)),e.scope),h=e.update=()=>{l.dirty&&l.run()};h.id=e.uid,Xt(e,!0),h()},j=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,Rt(e,t.props,i,n),qt(e,t.children,n),(0,r.C4)(),I(e),(0,r.bl)()},B=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void K(u,h,n,r,i,s,o,a,c);if(256&f)return void q(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&J(u,i,s),h!==u&&d(n,h)):16&l?16&p?K(u,h,n,r,i,s,o,a,c):J(u,i,s,!0):(8&l&&d(n,""),16&p&&O(h,n,r,i,s,o,a,c))},q=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Oj,t=t||i.Oj;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?On(t[f]):Rn(t[f]);y(e[f],r,n,null,s,o,a,c,u)}l>h?J(e,s,o,!0,!1,d):O(t,n,r,s,o,a,c,u,d)},K=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?On(t[l]):Rn(t[l]);if(!yn(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?On(t[f]):Rn(t[f]);if(!yn(r,i))break;y(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)y(null,t[l]=u?On(t[l]):Rn(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)G(e[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=f;l++){const e=t[l]=u?On(t[l]):Rn(t[l]);null!=e.key&&m.set(e.key,l)}let v,w=0;const _=f-g+1;let b=!1,E=0;const T=new Array(_);for(l=0;l<_;l++)T[l]=0;for(l=p;l<=d;l++){const r=e[l];if(w>=_){G(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=f;v++)if(0===T[v-g]&&yn(r,t[v])){i=v;break}void 0===i?G(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:b=!0,y(r,t[i],n,null,s,o,a,c,u),w++)}const I=b?Zt(T):i.Oj;for(v=I.length-1,l=_-1;l>=0;l--){const e=g+l,i=t[e],d=e+1<h?t[e+1].el:r;0===T[l]?y(null,i,n,d,s,o,a,c,u):b&&(v<0||l!==I[v]?H(i,n,d,2):v--)}}},H=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void H(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,te);if(a===nn){s(o,t,n);for(let e=0;e<u.length;e++)H(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===on)return void T(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),Ht((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},G=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&zt(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!Pe(e);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&xn(g,t,e),6&l)X(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&we(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,te,r):u&&(s!==nn||h>0&&64&h)?J(u,t,n,!1,!0):(s===nn&&384&h||!i&&16&l)&&J(c,t,n),r&&W(e)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&Ht((()=>{g&&xn(g,t,e),f&&we(e,null,t,"unmounted")}),n)},W=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===nn)return void Q(n,r);if(t===on)return void C(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},Q=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},X=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.DY)(r),s.stop(),o&&(o.active=!1,G(a,e,t,n)),c&&Ht(c,t),Ht((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},J=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)G(e[o],t,n,r,i)},Y=e=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el);let Z=!1;const ee=(e,t,n)=>{null==e?t._vnode&&G(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),Z||(Z=!0,I(),S(),Z=!1),t._vnode=e},te={p:y,um:G,m:H,r:W,mt:M,mc:O,pc:B,pbc:D,n:Y,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:It(ee,ne)}}function Qt({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Xt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Jt(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Yt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=On(s[i]),t.el=e.el),n||Yt(e,t)),t.type===rn&&(t.el=e.el)}}function Zt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}function en(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:en(t)}const tn=e=>e.__isTeleport;const nn=Symbol.for("v-fgt"),rn=Symbol.for("v-txt"),sn=Symbol.for("v-cmt"),on=Symbol.for("v-stc"),an=[];let cn=null;function un(e=!1){an.push(cn=e?null:[])}function ln(){an.pop(),cn=an[an.length-1]||null}let hn=1;function dn(e){hn+=e}function fn(e){return e.dynamicChildren=hn>0?cn||i.Oj:null,ln(),hn>0&&cn&&cn.push(e),e}function pn(e,t,n,r,i,s){return fn(bn(e,t,n,r,i,s,!0))}function gn(e,t,n,r,i){return fn(En(e,t,n,r,i,!0))}function mn(e){return!!e&&!0===e.__v_isVNode}function yn(e,t){return e.type===t.type&&e.key===t.key}const vn="__vInternal",wn=({key:e})=>null!=e?e:null,_n=({ref:e,ref_key:t,ref_for:n})=>("number"===typeof e&&(e=""+e),null!=e?(0,i.Kg)(e)||(0,r.i9)(e)||(0,i.Tn)(e)?{i:D,r:e,k:t,f:!!n}:e:null);function bn(e,t=null,n=null,r=0,s=null,o=(e===nn?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&wn(t),ref:t&&_n(t),scopeId:x,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:D};return c?(Nn(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),hn>0&&!a&&cn&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&cn.push(u),u}const En=Tn;function Tn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==G||(e=sn),mn(e)){const r=Sn(e,t,!0);return n&&Nn(r,n),hn>0&&!a&&cn&&(6&r.shapeFlag?cn[cn.indexOf(e)]=r:cn.push(r)),r.patchFlag|=-2,r}if(tr(e)&&(e=e.__vccOpts),t){t=In(t);let{class:e,style:n}=t;e&&!(0,i.Kg)(e)&&(t.class=(0,i.C4)(e)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),t.style=(0,i.Tr)(n))}const c=(0,i.Kg)(e)?1:X(e)?128:tn(e)?64:(0,i.Gv)(e)?4:(0,i.Tn)(e)?2:0;return bn(e,t,n,s,o,c,a,!0)}function In(e){return e?(0,r.ju)(e)||vn in e?(0,i.X$)({},e):e:null}function Sn(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?Dn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&wn(c),ref:t&&t.ref?n&&s?(0,i.cy)(s)?s.concat(_n(t)):[s,_n(t)]:_n(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==nn?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Sn(e.ssContent),ssFallback:e.ssFallback&&Sn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u}function Cn(e=" ",t=0){return En(rn,null,e,t)}function An(e,t){const n=En(on,null,e);return n.staticCount=t,n}function kn(e="",t=!1){return t?(un(),gn(sn,null,e)):En(sn,null,e)}function Rn(e){return null==e||"boolean"===typeof e?En(sn):(0,i.cy)(e)?En(nn,null,e.slice()):"object"===typeof e?On(e):En(rn,null,String(e))}function On(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Sn(e)}function Nn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.cy)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Nn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||vn in t?3===r&&D&&(1===D.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=D}}else(0,i.Tn)(t)?(t={default:t,_ctx:D},n=32):(t=String(t),64&r?(n=16,t=[Cn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Dn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C4)([t.class,r.class]));else if("style"===e)t.style=(0,i.Tr)([t.style,r.style]);else if((0,i.Mp)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function xn(e,t,n,r=null){o(e,t,7,[n,r])}const Pn=Et();let Ln=0;function Mn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Pn,a={uid:Ln++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dt(s,o),emitsOptions:O(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=R.bind(null,a),e.ce&&e.ce(a),a}let Fn=null;const Un=()=>Fn||D;let Vn,jn;{const e=(0,i.We)(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};Vn=t("__VUE_INSTANCE_SETTERS__",(e=>Fn=e)),jn=t("__VUE_SSR_SETTERS__",(e=>Hn=e))}const Bn=e=>{const t=Fn;return Vn(e),e.scope.on(),()=>{e.scope.off(),Vn(t)}},$n=()=>{Fn&&Fn.scope.off(),Vn(null)};function qn(e){return 4&e.vnode.shapeFlag}let zn,Kn,Hn=!1;function Gn(e,t=!1){t&&jn(t);const{props:n,children:r}=e.vnode,i=qn(e);kt(e,n,i,t),$t(e,r);const s=i?Wn(e,t):void 0;return t&&jn(!1),s}function Wn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.IG)(new Proxy(e.ctx,st));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Yn(e):null,c=Bn(e);(0,r.C4)();const u=s(o,e,0,[e.props,n]);if((0,r.bl)(),c(),(0,i.yL)(u)){if(u.then($n,$n),t)return u.then((n=>{Qn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=u}else Qn(e,u,t)}else Xn(e,t)}function Qn(e,t,n){(0,i.Tn)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Gv)(t)&&(e.setupState=(0,r.Pr)(t)),Xn(e,n)}function Xn(e,t,n){const s=e.type;if(!e.render){if(!t&&zn&&!s.render){const t=s.template||dt(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=zn(t,c)}}e.render=s.render||i.tE,Kn&&Kn(e)}{const t=Bn(e);(0,r.C4)();try{ct(e)}finally{(0,r.bl)(),t()}}}function Jn(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return(0,r.u4)(e,"get","$attrs"),t[n]}}))}function Yn(e){const t=t=>{e.exposed=t||{}};return{get attrs(){return Jn(e)},slots:e.slots,emit:e.emit,expose:t}}function Zn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(e.exposed)),{get(t,n){return n in t?t[n]:n in rt?rt[n](e):void 0},has(e,t){return t in e||t in rt}}))}function er(e,t=!0){return(0,i.Tn)(e)?e.displayName||e.name:e.name||t&&e.__name}function tr(e){return(0,i.Tn)(e)&&"__vccOpts"in e}const nr=(e,t)=>{const n=(0,r.EW)(e,t,Hn);return n};function rr(e,t,n){const r=arguments.length;return 2===r?(0,i.Gv)(t)&&!(0,i.cy)(t)?mn(t)?En(e,null,[t]):En(e,t):En(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&mn(n)&&(n=[n]),En(e,t,n))}const ir="3.4.20"},5130:function(e,t,n){n.d(t,{Ef:function(){return Se},Jo:function(){return ve},u1:function(){return we}});n(4114);var r=n(6768),i=n(4232),s=n(144);
/**
* @vue/runtime-dom v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const o="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",c="undefined"!==typeof document?document:null,u=c&&c.createElement("template"),l={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i="svg"===t?c.createElementNS(o,e):"mathml"===t?c.createElementNS(a,e):c.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>c.createTextNode(e),createComment:e=>c.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>c.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{u.innerHTML="svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e;const i=u.content;if("svg"===r||"mathml"===r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},h="transition",d="animation",f=Symbol("_vtc"),p=(e,{slots:t})=>(0,r.h)(r.pR,w(e),t);p.displayName="Transition";const g={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m=p.props=(0,i.X$)({},r.QP,g),y=(e,t=[])=>{(0,i.cy)(e)?e.forEach((e=>e(...t))):e&&e(...t)},v=e=>!!e&&((0,i.cy)(e)?e.some((e=>e.length>1)):e.length>1);function w(e){const t={};for(const i in e)i in g||(t[i]=e[i]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=_(s),w=m&&m[0],b=m&&m[1],{onBeforeEnter:S,onEnter:A,onEnterCancelled:k,onLeave:R,onLeaveCancelled:N,onBeforeAppear:D=S,onAppear:x=A,onAppearCancelled:P=k}=t,L=(e,t,n)=>{T(e,t?h:c),T(e,t?l:a),n&&n()},M=(e,t)=>{e._isLeaving=!1,T(e,d),T(e,p),T(e,f),t&&t()},F=e=>(t,n)=>{const i=e?x:A,s=()=>L(t,e,n);y(i,[t,s]),I((()=>{T(t,e?u:o),E(t,e?h:c),v(i)||C(t,r,w,s)}))};return(0,i.X$)(t,{onBeforeEnter(e){y(S,[e]),E(e,o),E(e,a)},onBeforeAppear(e){y(D,[e]),E(e,u),E(e,l)},onEnter:F(!1),onAppear:F(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>M(e,t);E(e,d),O(),E(e,f),I((()=>{e._isLeaving&&(T(e,d),E(e,p),v(R)||C(e,r,b,n))})),y(R,[e,n])},onEnterCancelled(e){L(e,!1),y(k,[e])},onAppearCancelled(e){L(e,!0),y(P,[e])},onLeaveCancelled(e){M(e),y(N,[e])}})}function _(e){if(null==e)return null;if((0,i.Gv)(e))return[b(e.enter),b(e.leave)];{const t=b(e);return[t,t]}}function b(e){const t=(0,i.Ro)(e);return t}function E(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[f]||(e[f]=new Set)).add(t)}function T(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[f];n&&(n.delete(t),n.size||(e[f]=void 0))}function I(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let S=0;function C(e,t,n,r){const i=e._endId=++S,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=A(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function A(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${h}Delay`),s=r(`${h}Duration`),o=k(i,s),a=r(`${d}Delay`),c=r(`${d}Duration`),u=k(a,c);let l=null,f=0,p=0;t===h?o>0&&(l=h,f=o,p=s.length):t===d?u>0&&(l=d,f=u,p=c.length):(f=Math.max(o,u),l=f>0?o>u?h:d:null,p=l?l===h?s.length:c.length:0);const g=l===h&&/\b(transform|all)(,|$)/.test(r(`${h}Property`).toString());return{type:l,timeout:f,propCount:p,hasTransform:g}}function k(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>R(t)+R(e[n]))))}function R(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function O(){return document.body.offsetHeight}function N(e,t,n){const r=e[f];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const D=Symbol("_vod"),x=Symbol("_vsh");const P=Symbol("");const L=/(^|;)\s*display\s*:/;function M(e,t,n){const r=e.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(t)if((0,i.Kg)(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&U(r,t,"")}else for(const e in t)null==n[e]&&U(r,e,"");for(const e in n)"display"===e&&(o=!0),U(r,e,n[e])}else if(s){if(t!==n){const e=r[P];e&&(n+=";"+e),r.cssText=n,o=L.test(n)}}else t&&e.removeAttribute("style");D in e&&(e[D]=o?r.display:"",e[x]&&(r.display="none"))}const F=/\s*!important$/;function U(e,t,n){if((0,i.cy)(n))n.forEach((n=>U(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=B(e,t);F.test(n)?e.setProperty((0,i.Tg)(r),n.replace(F,""),"important"):e[r]=n}}const V=["Webkit","Moz","ms"],j={};function B(e,t){const n=j[t];if(n)return n;let r=(0,i.PT)(t);if("filter"!==r&&r in e)return j[t]=r;r=(0,i.ZH)(r);for(let i=0;i<V.length;i++){const n=V[i]+r;if(n in e)return j[t]=n}return t}const $="http://www.w3.org/1999/xlink";function q(e,t,n,r,s){if(r&&t.startsWith("xlink:"))null==n?e.removeAttributeNS($,t.slice(6,t.length)):e.setAttributeNS($,t,n);else{const r=(0,i.J$)(t);null==n||r&&!(0,i.Y2)(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function z(e,t,n,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==n?"":n);const c=e.tagName;if("value"===t&&"PROGRESS"!==c&&!c.includes("-")){e._value=n;const r="OPTION"===c?e.getAttribute("value")||"":e.value,i=null==n?"":n;return r!==i&&(e.value=i),void(null==n&&e.removeAttribute(t))}let u=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",u=!0):"number"===r&&(n=0,u=!0)}try{e[t]=n}catch(l){0}u&&e.removeAttribute(t)}function K(e,t,n,r){e.addEventListener(t,n,r)}function H(e,t,n,r){e.removeEventListener(t,n,r)}const G=Symbol("_vei");function W(e,t,n,r,i=null){const s=e[G]||(e[G]={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=X(t);if(r){const o=s[t]=ee(r,i);K(e,n,o,a)}else o&&(H(e,n,o,a),s[t]=void 0)}}const Q=/(?:Once|Passive|Capture)$/;function X(e){let t;if(Q.test(e)){let n;t={};while(n=e.match(Q))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,i.Tg)(e.slice(2));return[n,t]}let J=0;const Y=Promise.resolve(),Z=()=>J||(Y.then((()=>J=0)),J=Date.now());function ee(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,r.qL)(te(e,n.value),t,5,[e])};return n.value=e,n.attached=Z(),n}function te(e,t){if((0,i.cy)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const ne=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,re=(e,t,n,r,s,o,a,c,u)=>{const l="svg"===s;"class"===t?N(e,r,l):"style"===t?M(e,n,r):(0,i.Mp)(t)?(0,i.CP)(t)||W(e,t,n,r,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):ie(e,t,r,l))?z(e,t,r,o,a,c,u):("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),q(e,t,r,l))};function ie(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&ne(t)&&(0,i.Tn)(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!ne(t)||!(0,i.Kg)(n))&&t in e}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const se=new WeakMap,oe=new WeakMap,ae=Symbol("_moveCb"),ce=Symbol("_enterCb"),ue={name:"TransitionGroup",props:(0,i.X$)({},m,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,r.nI)(),i=(0,r.Gy)();let o,a;return(0,r.$u)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!fe(o[0].el,n.vnode.el,t))return;o.forEach(le),o.forEach(he);const r=o.filter(de);O(),r.forEach((e=>{const n=e.el,r=n.style;E(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[ae]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n[ae]=null,T(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.ux)(e),u=w(c);let l=c.tag||r.FK;o=a,a=t.default?(0,r.Df)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,r.MZ)(t,(0,r.OW)(t,u,i,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,r.MZ)(t,(0,r.OW)(t,u,i,n)),se.set(t,t.el.getBoundingClientRect())}return(0,r.bF)(l,null,a)}}};ue.props;function le(e){const t=e.el;t[ae]&&t[ae](),t[ce]&&t[ce]()}function he(e){oe.set(e,e.el.getBoundingClientRect())}function de(e){const t=se.get(e),n=oe.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function fe(e,t,n){const r=e.cloneNode(),i=e[f];i&&i.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const s=1===t.nodeType?t:t.parentNode;s.appendChild(r);const{hasTransform:o}=A(r);return s.removeChild(r),o}const pe=e=>{const t=e.props["onUpdate:modelValue"]||!1;return(0,i.cy)(t)?e=>(0,i.DY)(t,e):t};function ge(e){e.target.composing=!0}function me(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ye=Symbol("_assign"),ve={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[ye]=pe(s);const o=r||s.props&&"number"===s.props.type;K(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),o&&(r=(0,i.bB)(r)),e[ye](r)})),n&&K(e,"change",(()=>{e.value=e.value.trim()})),t||(K(e,"compositionstart",ge),K(e,"compositionend",me),K(e,"change",me))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},o){if(e[ye]=pe(o),e.composing)return;const a=s||"number"===e.type?(0,i.bB)(e.value):e.value,c=null==t?"":t;if(a!==c){if(document.activeElement===e&&"range"!==e.type){if(n)return;if(r&&e.value.trim()===c)return}e.value=c}}};const we={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const o=(0,i.vM)(t);K(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?(0,i.bB)(be(e)):be(e)));e[ye](e.multiple?o?new Set(t):t:t[0]),e._assigning=!0,(0,r.dY)((()=>{e._assigning=!1}))})),e[ye]=pe(s)},mounted(e,{value:t,modifiers:{number:n}}){_e(e,t,n)},beforeUpdate(e,t,n){e[ye]=pe(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||_e(e,t,n)}};function _e(e,t,n){const r=e.multiple,s=(0,i.cy)(t);if(!r||s||(0,i.vM)(t)){for(let o=0,a=e.options.length;o<a;o++){const a=e.options[o],c=be(a);if(r)if(s){const e=typeof c;a.selected="string"===e||"number"===e?t.includes(n?(0,i.bB)(c):c):(0,i.u3)(t,c)>-1}else a.selected=t.has(c);else if((0,i.BX)(be(a),t))return void(e.selectedIndex!==o&&(e.selectedIndex=o))}r||-1===e.selectedIndex||(e.selectedIndex=-1)}}function be(e){return"_value"in e?e._value:e.value}const Ee=(0,i.X$)({patchProp:re},l);let Te;function Ie(){return Te||(Te=(0,r.K9)(Ee))}const Se=(...e)=>{const t=Ie().createApp(...e);const{mount:n}=t;return t.mount=e=>{const r=Ae(e);if(!r)return;const s=t._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,Ce(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Ce(e){return e instanceof SVGElement?"svg":"function"===typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function Ae(e){if((0,i.Kg)(e)){const t=document.querySelector(e);return t}return e}},4232:function(e,t,n){n.d(t,{$3:function(){return f},$H:function(){return F},BH:function(){return K},BX:function(){return ne},Bm:function(){return b},C4:function(){return J},CE:function(){return g},CP:function(){return u},DY:function(){return U},Gv:function(){return E},J$:function(){return Z},Kg:function(){return _},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return D},Qd:function(){return A},Ro:function(){return B},SU:function(){return R},TF:function(){return h},Tg:function(){return P},Tn:function(){return w},Tr:function(){return H},We:function(){return q},X$:function(){return l},Y2:function(){return ee},ZH:function(){return L},Zf:function(){return C},bB:function(){return j},cy:function(){return p},gd:function(){return v},pD:function(){return r},rU:function(){return M},tE:function(){return o},u3:function(){return re},vM:function(){return m},v_:function(){return ie},yI:function(){return k},yL:function(){return T},yQ:function(){return V}});n(4114);
/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function r(e,t){const n=new Set(e.split(","));return t?e=>n.has(e.toLowerCase()):e=>n.has(e)}const i={},s=[],o=()=>{},a=()=>!1,c=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),u=e=>e.startsWith("onUpdate:"),l=Object.assign,h=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},d=Object.prototype.hasOwnProperty,f=(e,t)=>d.call(e,t),p=Array.isArray,g=e=>"[object Map]"===S(e),m=e=>"[object Set]"===S(e),y=e=>"[object Date]"===S(e),v=e=>"[object RegExp]"===S(e),w=e=>"function"===typeof e,_=e=>"string"===typeof e,b=e=>"symbol"===typeof e,E=e=>null!==e&&"object"===typeof e,T=e=>(E(e)||w(e))&&w(e.then)&&w(e.catch),I=Object.prototype.toString,S=e=>I.call(e),C=e=>S(e).slice(8,-1),A=e=>"[object Object]"===S(e),k=e=>_(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),O=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},N=/-(\w)/g,D=O((e=>e.replace(N,((e,t)=>t?t.toUpperCase():"")))),x=/\B([A-Z])/g,P=O((e=>e.replace(x,"-$1").toLowerCase())),L=O((e=>e.charAt(0).toUpperCase()+e.slice(1))),M=O((e=>{const t=e?`on${L(e)}`:"";return t})),F=(e,t)=>!Object.is(e,t),U=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},V=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},j=e=>{const t=parseFloat(e);return isNaN(t)?e:t},B=e=>{const t=_(e)?Number(e):NaN;return isNaN(t)?e:t};let $;const q=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",K=r(z);function H(e){if(p(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=_(r)?X(r):H(r);if(i)for(const e in i)t[e]=i[e]}return t}if(_(e)||E(e))return e}const G=/;(?![^(]*\))/g,W=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function X(e){const t={};return e.replace(Q,"").split(G).forEach((e=>{if(e){const n=e.split(W);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function J(e){let t="";if(_(e))t=e;else if(p(e))for(let n=0;n<e.length;n++){const r=J(e[n]);r&&(t+=r+" ")}else if(E(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Y="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z=r(Y);function ee(e){return!!e||""===e}function te(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ne(e[r],t[r]);return n}function ne(e,t){if(e===t)return!0;let n=y(e),r=y(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=b(e),r=b(t),n||r)return e===t;if(n=p(e),r=p(t),n||r)return!(!n||!r)&&te(e,t);if(n=E(e),r=E(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ne(e[n],t[n]))return!1}}return String(e)===String(t)}function re(e,t){return e.findIndex((e=>ne(e,t)))}const ie=e=>_(e)?e:null==e?"":p(e)||E(e)&&(e.toString===I||!w(e.toString))?JSON.stringify(e,se,2):String(e),se=(e,t)=>t&&t.__v_isRef?se(e,t.value):g(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[oe(t,r)+" =>"]=n,e)),{})}:m(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>oe(e)))}:b(t)?oe(t):!E(t)||p(t)||A(t)?t:String(t),oe=(e,t="")=>{var n;return b(e)?`Symbol(${null!=(n=e.description)?n:t})`:e}},1241:function(e,t){t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},9306:function(e,t,n){var r=n(4901),i=n(6823),s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not a function")}},3506:function(e,t,n){var r=n(3925),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s("Can't set "+i(e)+" as a prototype")}},679:function(e,t,n){var r=n(1625),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw new i("Incorrect invocation")}},8551:function(e,t,n){var r=n(34),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw new s(i(e)+" is not an object")}},7811:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},7394:function(e,t,n){var r=n(6706),i=n(4576),s=TypeError;e.exports=r(ArrayBuffer.prototype,"byteLength","get")||function(e){if("ArrayBuffer"!==i(e))throw new s("ArrayBuffer expected");return e.byteLength}},3238:function(e,t,n){var r=n(9504),i=n(7394),s=r(ArrayBuffer.prototype.slice);e.exports=function(e){if(0!==i(e))return!1;try{return s(e,0,0),!1}catch(t){return!0}}},5636:function(e,t,n){var r=n(4475),i=n(9504),s=n(6706),o=n(7696),a=n(3238),c=n(7394),u=n(4483),l=n(1548),h=r.structuredClone,d=r.ArrayBuffer,f=r.DataView,p=r.TypeError,g=Math.min,m=d.prototype,y=f.prototype,v=i(m.slice),w=s(m,"resizable","get"),_=s(m,"maxByteLength","get"),b=i(y.getInt8),E=i(y.setInt8);e.exports=(l||u)&&function(e,t,n){var r,i=c(e),s=void 0===t?i:o(t),m=!w||!w(e);if(a(e))throw new p("ArrayBuffer is detached");if(l&&(e=h(e,{transfer:[e]}),i===s&&(n||m)))return e;if(i>=s&&(!n||m))r=v(e,0,s);else{var y=n&&!m&&_?{maxByteLength:_(e)}:void 0;r=new d(s,y);for(var T=new f(e),I=new f(r),S=g(s,i),C=0;C<S;C++)E(I,C,b(T,C))}return l||u(e),r}},4644:function(e,t,n){var r,i,s,o=n(7811),a=n(3724),c=n(4475),u=n(4901),l=n(34),h=n(9297),d=n(6955),f=n(6823),p=n(6699),g=n(6840),m=n(2106),y=n(1625),v=n(2787),w=n(2967),_=n(8227),b=n(3392),E=n(1181),T=E.enforce,I=E.get,S=c.Int8Array,C=S&&S.prototype,A=c.Uint8ClampedArray,k=A&&A.prototype,R=S&&v(S),O=C&&v(C),N=Object.prototype,D=c.TypeError,x=_("toStringTag"),P=b("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",M=o&&!!w&&"Opera"!==d(c.opera),F=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},j=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(U,t)||h(V,t)},B=function(e){var t=v(e);if(l(t)){var n=I(t);return n&&h(n,L)?n[L]:B(t)}},$=function(e){if(!l(e))return!1;var t=d(e);return h(U,t)||h(V,t)},q=function(e){if($(e))return e;throw new D("Target is not a typed array")},z=function(e){if(u(e)&&(!w||y(R,e)))return e;throw new D(f(e)+" is not a typed array constructor")},K=function(e,t,n,r){if(a){if(n)for(var i in U){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}O[e]&&!n||g(O,e,n?t:M&&C[e]||t,r)}},H=function(e,t,n){var r,i;if(a){if(w){if(n)for(r in U)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(R[e]&&!n)return;try{return g(R,e,n?t:M&&R[e]||t)}catch(s){}}for(r in U)i=c[r],!i||i[e]&&!n||g(i,e,t)}};for(r in U)i=c[r],s=i&&i.prototype,s?T(s)[L]=i:M=!1;for(r in V)i=c[r],s=i&&i.prototype,s&&(T(s)[L]=i);if((!M||!u(R)||R===Function.prototype)&&(R=function(){throw new D("Incorrect invocation")},M))for(r in U)c[r]&&w(c[r],R);if((!M||!O||O===N)&&(O=R.prototype,M))for(r in U)c[r]&&w(c[r].prototype,O);if(M&&v(k)!==O&&w(k,O),a&&!h(O,x))for(r in F=!0,m(O,x,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),U)c[r]&&p(c[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&P,aTypedArray:q,aTypedArrayConstructor:z,exportTypedArrayMethod:K,exportTypedArrayStaticMethod:H,getTypedArrayConstructor:B,isView:j,isTypedArray:$,TypedArray:R,TypedArrayPrototype:O}},5370:function(e,t,n){var r=n(6198);e.exports=function(e,t,n){var i=0,s=arguments.length>2?n:r(t),o=new e(s);while(s>i)o[i]=t[i++];return o}},9617:function(e,t,n){var r=n(5397),i=n(5610),s=n(6198),o=function(e){return function(t,n,o){var a=r(t),c=s(a);if(0===c)return!e&&-1;var u,l=i(o,c);if(e&&n!==n){while(c>l)if(u=a[l++],u!==u)return!0}else for(;c>l;l++)if((e||l in a)&&a[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},4527:function(e,t,n){var r=n(3724),i=n(4376),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw new s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},7628:function(e,t,n){var r=n(6198);e.exports=function(e,t){for(var n=r(e),i=new t(n),s=0;s<n;s++)i[s]=e[n-s-1];return i}},9928:function(e,t,n){var r=n(6198),i=n(1291),s=RangeError;e.exports=function(e,t,n,o){var a=r(e),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw new s("Incorrect index");for(var l=new t(a),h=0;h<a;h++)l[h]=h===u?o:e[h];return l}},4576:function(e,t,n){var r=n(9504),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},6955:function(e,t,n){var r=n(2140),i=n(4901),s=n(4576),o=n(8227),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"===(r=s(t))&&i(t.callee)?"Arguments":r}},7740:function(e,t,n){var r=n(9297),i=n(5031),s=n(7347),o=n(4913);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},2211:function(e,t,n){var r=n(9039);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},6699:function(e,t,n){var r=n(3724),i=n(4913),s=n(6980);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},6980:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2106:function(e,t,n){var r=n(283),i=n(4913);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},6840:function(e,t,n){var r=n(4901),i=n(4913),s=n(283),o=n(9433);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},9433:function(e,t,n){var r=n(4475),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3724:function(e,t,n){var r=n(9039);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4483:function(e,t,n){var r,i,s,o,a=n(4475),c=n(9714),u=n(1548),l=a.structuredClone,h=a.ArrayBuffer,d=a.MessageChannel,f=!1;if(u)f=function(e){l(e,{transfer:[e]})};else if(h)try{d||(r=c("worker_threads"),r&&(d=r.MessageChannel)),d&&(i=new d,s=new h(2),o=function(e){i.port1.postMessage(null,[e])},2===s.byteLength&&(o(s),0===s.byteLength&&(f=o)))}catch(p){}e.exports=f},4055:function(e,t,n){var r=n(4475),i=n(34),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},6837:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},5002:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},7290:function(e,t,n){var r=n(516),i=n(9088);e.exports=!r&&!i&&"object"==typeof window&&"object"==typeof document},516:function(e){e.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},9088:function(e,t,n){var r=n(4475),i=n(4576);e.exports="process"===i(r.process)},9392:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7388:function(e,t,n){var r,i,s=n(4475),o=n(9392),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},8727:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6193:function(e,t,n){var r=n(9504),i=Error,s=r("".replace),o=function(e){return String(new i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},6518:function(e,t,n){var r=n(4475),i=n(7347).f,s=n(6699),o=n(6840),a=n(9433),c=n(7740),u=n(2796);e.exports=function(e,t){var n,l,h,d,f,p,g=e.target,m=e.global,y=e.stat;if(l=m?r:y?r[g]||a(g,{}):r[g]&&r[g].prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(m?h:g+(y?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},9039:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},616:function(e,t,n){var r=n(9039);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},9565:function(e,t,n){var r=n(616),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},350:function(e,t,n){var r=n(3724),i=n(9297),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},6706:function(e,t,n){var r=n(9504),i=n(9306);e.exports=function(e,t,n){try{return r(i(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},9504:function(e,t,n){var r=n(616),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},7751:function(e,t,n){var r=n(4475),i=n(4901),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},5966:function(e,t,n){var r=n(9306),i=n(4117);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},4475:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},9297:function(e,t,n){var r=n(9504),i=n(8981),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},421:function(e){e.exports={}},5917:function(e,t,n){var r=n(3724),i=n(9039),s=n(4055);e.exports=!r&&!i((function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},7055:function(e,t,n){var r=n(9504),i=n(9039),s=n(4576),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"===s(e)?a(e,""):o(e)}:o},3167:function(e,t,n){var r=n(4901),i=n(34),s=n(2967);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},3706:function(e,t,n){var r=n(9504),i=n(4901),s=n(7629),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},1181:function(e,t,n){var r,i,s,o=n(8622),a=n(4475),c=n(34),u=n(6699),l=n(9297),h=n(7629),d=n(6119),f=n(421),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw new g("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var w=h.state||(h.state=new m);w.get=w.get,w.has=w.has,w.set=w.set,r=function(e,t){if(w.has(e))throw new g(p);return t.facade=e,w.set(e,t),t},i=function(e){return w.get(e)||{}},s=function(e){return w.has(e)}}else{var _=d("state");f[_]=!0,r=function(e,t){if(l(e,_))throw new g(p);return t.facade=e,u(e,_,t),t},i=function(e){return l(e,_)?e[_]:{}},s=function(e){return l(e,_)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},4376:function(e,t,n){var r=n(4576);e.exports=Array.isArray||function(e){return"Array"===r(e)}},1108:function(e,t,n){var r=n(6955);e.exports=function(e){var t=r(e);return"BigInt64Array"===t||"BigUint64Array"===t}},4901:function(e){var t="object"==typeof document&&document.all;e.exports="undefined"==typeof t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},2796:function(e,t,n){var r=n(9039),i=n(4901),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n===l||n!==u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},4117:function(e){e.exports=function(e){return null===e||void 0===e}},34:function(e,t,n){var r=n(4901);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},3925:function(e,t,n){var r=n(34);e.exports=function(e){return r(e)||null===e}},6395:function(e){e.exports=!1},757:function(e,t,n){var r=n(7751),i=n(4901),s=n(1625),o=n(7040),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6198:function(e,t,n){var r=n(8014);e.exports=function(e){return r(e.length)}},283:function(e,t,n){var r=n(9504),i=n(9039),s=n(4901),o=n(9297),a=n(3724),c=n(350).CONFIGURABLE,u=n(3706),l=n(1181),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),y=r([].join),v=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),w=String(String).split("String"),_=e.exports=function(e,t,n){"Symbol("===g(f(t),0,7)&&(t="["+m(f(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),v&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=h(e);return o(r,"source")||(r.source=y(w,"string"==typeof t?t:"")),e};Function.prototype.toString=_((function(){return s(this)&&d(this).source||u(this)}),"toString")},741:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},2603:function(e,t,n){var r=n(655);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},4913:function(e,t,n){var r=n(3724),i=n(5917),s=n(8686),o=n(8551),a=n(6969),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7347:function(e,t,n){var r=n(3724),i=n(9565),s=n(8773),o=n(6980),a=n(5397),c=n(6969),u=n(9297),l=n(5917),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8480:function(e,t,n){var r=n(1828),i=n(8727),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},3717:function(e,t){t.f=Object.getOwnPropertySymbols},2787:function(e,t,n){var r=n(9297),i=n(4901),s=n(8981),o=n(6119),a=n(2211),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},1625:function(e,t,n){var r=n(9504);e.exports=r({}.isPrototypeOf)},1828:function(e,t,n){var r=n(9504),i=n(9297),s=n(5397),o=n(9617).indexOf,a=n(421),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},8773:function(e,t){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2967:function(e,t,n){var r=n(6706),i=n(8551),s=n(3506);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},4270:function(e,t,n){var r=n(9565),i=n(4901),s=n(34),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw new o("Can't convert object to primitive value")}},5031:function(e,t,n){var r=n(7751),i=n(9504),s=n(8480),o=n(3717),a=n(8551),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},7750:function(e,t,n){var r=n(4117),i=TypeError;e.exports=function(e){if(r(e))throw new i("Can't call method on "+e);return e}},6119:function(e,t,n){var r=n(5745),i=n(3392),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},7629:function(e,t,n){var r=n(6395),i=n(4475),s=n(9433),o="__core-js_shared__",a=e.exports=i[o]||s(o,{});(a.versions||(a.versions=[])).push({version:"3.36.0",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"})},5745:function(e,t,n){var r=n(7629);e.exports=function(e,t){return r[e]||(r[e]=t||{})}},1548:function(e,t,n){var r=n(4475),i=n(9039),s=n(7388),o=n(7290),a=n(516),c=n(9088),u=r.structuredClone;e.exports=!!u&&!i((function(){if(a&&s>92||c&&s>94||o&&s>97)return!1;var e=new ArrayBuffer(8),t=u(e,{transfer:[e]});return 0!==e.byteLength||8!==t.byteLength}))},4495:function(e,t,n){var r=n(7388),i=n(9039),s=n(4475),o=s.String;e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol("symbol detection");return!o(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},5610:function(e,t,n){var r=n(1291),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5854:function(e,t,n){var r=n(2777),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw new i("Can't convert number to bigint");return BigInt(t)}},7696:function(e,t,n){var r=n(1291),i=n(8014),s=RangeError;e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=i(t);if(t!==n)throw new s("Wrong length or index");return n}},5397:function(e,t,n){var r=n(7055),i=n(7750);e.exports=function(e){return r(i(e))}},1291:function(e,t,n){var r=n(741);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},8014:function(e,t,n){var r=n(1291),i=Math.min;e.exports=function(e){var t=r(e);return t>0?i(t,9007199254740991):0}},8981:function(e,t,n){var r=n(7750),i=Object;e.exports=function(e){return i(r(e))}},2777:function(e,t,n){var r=n(9565),i=n(34),s=n(757),o=n(5966),a=n(4270),c=n(8227),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},6969:function(e,t,n){var r=n(2777),i=n(757);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},2140:function(e,t,n){var r=n(8227),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},655:function(e,t,n){var r=n(6955),i=String;e.exports=function(e){if("Symbol"===r(e))throw new TypeError("Cannot convert a Symbol value to a string");return i(e)}},9714:function(e,t,n){var r=n(9088);e.exports=function(e){try{if(r)return Function('return require("'+e+'")')()}catch(t){}}},6823:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},3392:function(e,t,n){var r=n(9504),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},7040:function(e,t,n){var r=n(4495);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},8686:function(e,t,n){var r=n(3724),i=n(9039);e.exports=r&&i((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},2812:function(e){var t=TypeError;e.exports=function(e,n){if(e<n)throw new t("Not enough arguments");return e}},8622:function(e,t,n){var r=n(4475),i=n(4901),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},8227:function(e,t,n){var r=n(4475),i=n(5745),s=n(9297),o=n(3392),a=n(4495),c=n(7040),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},6573:function(e,t,n){var r=n(3724),i=n(2106),s=n(3238),o=ArrayBuffer.prototype;r&&!("detached"in o)&&i(o,"detached",{configurable:!0,get:function(){return s(this)}})},7936:function(e,t,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},8100:function(e,t,n){var r=n(6518),i=n(5636);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},4114:function(e,t,n){var r=n(6518),i=n(8981),s=n(6198),o=n(4527),a=n(6837),c=n(9039),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},7467:function(e,t,n){var r=n(7628),i=n(4644),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},4732:function(e,t,n){var r=n(4644),i=n(9504),s=n(9306),o=n(5370),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&s(e);var t=a(this),n=o(c(t),t);return l(n,e)}))},9577:function(e,t,n){var r=n(9928),i=n(4644),s=n(1108),o=n(1291),a=n(5854),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),i=o(e),l=s(n)?a(t):+t;return r(n,u(n),i,l)}}["with"],!h)},6280:function(e,t,n){n(6573)},7801:function(e,t,n){n(7936)},7913:function(e,t,n){n(8100)},4979:function(e,t,n){var r=n(6518),i=n(4475),s=n(7751),o=n(6980),a=n(4913).f,c=n(9297),u=n(679),l=n(3167),h=n(2603),d=n(5002),f=n(6193),p=n(3724),g=n(6395),m="DOMException",y=s("Error"),v=s(m),w=function(){u(this,_);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new v(t,n),i=new y(t);return i.name=m,a(r,"stack",o(1,f(i.stack,1))),l(r,this,w),r},_=w.prototype=v.prototype,b="stack"in new y(m),E="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,m),I=!!T&&!(T.writable&&T.configurable),S=b&&!I&&!E;r({global:!0,constructor:!0,forced:g||S},{DOMException:S?w:v});var C=s(m),A=C.prototype;if(A.constructor!==C)for(var k in g||a(A,"constructor",o(1,C)),d)if(c(d,k)){var R=d[k],O=R.s;c(C,O)||a(C,O,o(6,R.c))}},4603:function(e,t,n){var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.append),l=i(c["delete"]),h=i(c.forEach),d=i([].push),f=new a("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(c,"delete",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=[];h(this,(function(e,t){d(r,{key:t,value:e})})),o(t,1);var i,a=s(e),c=s(n),f=0,p=0,g=!1,m=r.length;while(f<m)i=r[f++],g||i.key===a?(g=!0,l(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===c||u(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7566:function(e,t,n){var r=n(6840),i=n(9504),s=n(655),o=n(2812),a=URLSearchParams,c=a.prototype,u=i(c.getAll),l=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(e){var t=arguments.length,n=t<2?void 0:arguments[1];if(t&&void 0===n)return l(this,e);var r=u(this,e);o(t,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},8721:function(e,t,n){var r=n(3724),i=n(9504),s=n(2106),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var e=0;return a(this,(function(){e++})),e},configurable:!0,enumerable:!0})},3405:function(e,t,n){n.d(t,{MF:function(){return ge},j6:function(){return he},om:function(){return le},Sx:function(){return ye},Wp:function(){return me},KO:function(){return ve}});n(4114);var r=n(852),i=n(1363),s=n(4046);n(4979);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,g=new WeakMap;function m(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(E(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),g.set(t,e),t}function y(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){v=e(v)}function _(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(T(this),t),E(h.get(this))}:function(...t){return E(e.apply(T(this),t))}:function(t,...n){const r=e.call(T(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function b(e){return"function"===typeof e?_(e):(e instanceof IDBTransaction&&y(e),o(e,u())?new Proxy(e,v):e)}function E(e){if(e instanceof IDBRequest)return m(e);if(p.has(e))return p.get(e);const t=b(e);return t!==e&&(p.set(e,t),g.set(t,e)),t}const T=e=>g.get(e);function I(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],A=new Map;function k(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(A.get(t))return A.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return A.set(t,s),s}w((e=>({...e,get:(t,n,r)=>k(t,n)||e.get(t,n,r),has:(t,n)=>!!k(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(O(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function O(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",D="0.9.28",x=new i.Vy("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",B="@firebase/database",$="@firebase/database-compat",q="@firebase/functions",z="@firebase/functions-compat",K="@firebase/installations",H="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",Q="@firebase/performance",X="@firebase/performance-compat",J="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="10.8.1",se="[DEFAULT]",oe={[N]:"fire-core",[P]:"fire-core-compat",[M]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-rtdb-compat",[q]:"fire-fn",[z]:"fire-fn-compat",[K]:"fire-iid",[H]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[Q]:"fire-perf",[X]:"fire-perf-compat",[J]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){x.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e){const t=e.name;if(ce.has(t))return x.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function he(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const de={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},fe=new s.FA("app","Firebase",de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=ie;function me(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw fe.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw fe.create("no-options");const a=ae.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw fe.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of ce.values())c.addComponent(r);const u=new pe(n,i,c);return ae.set(o,u),u}function ye(e=se){const t=ae.get(e);if(!t&&e===se&&(0,s.T9)())return me();if(!t)throw fe.create("no-app",{appName:e});return t}function ve(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void x.warn(e.join(" "))}le(new r.uA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const we="firebase-heartbeat-database",_e=1,be="firebase-heartbeat-store";let Ee=null;function Te(){return Ee||(Ee=I(we,_e,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(be)}catch(n){console.warn(n)}}}}).catch((e=>{throw fe.create("idb-open",{originalErrorMessage:e.message})}))),Ee}async function Ie(e){try{const t=await Te(),n=t.transaction(be),r=await n.objectStore(be).get(Ce(e));return await n.done,r}catch(t){if(t instanceof s.g)x.warn(t.message);else{const e=fe.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});x.warn(e.message)}}}async function Se(e,t){try{const n=await Te(),r=n.transaction(be,"readwrite"),i=r.objectStore(be);await i.put(t,Ce(e)),await r.done}catch(n){if(n instanceof s.g)x.warn(n.message);else{const e=fe.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});x.warn(e.message)}}}function Ce(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=1024,ke=2592e6;class Re{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new De(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=Oe();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=ke})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Oe(),{heartbeatsToSend:n,unsentEntries:r}=Ne(this._heartbeatsCache.heartbeats),i=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Oe(){const e=new Date;return e.toISOString().substring(0,10)}function Ne(e,t=Ae){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),xe(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xe(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class De{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ie(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Se(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function xe(e){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(e){le(new r.uA("platform-logger",(e=>new R(e)),"PRIVATE")),le(new r.uA("heartbeat",(e=>new Re(e)),"PRIVATE")),ve(N,D,e),ve(N,D,"esm2017"),ve("fire-js","")}Pe("")},852:function(e,t,n){n.d(t,{h1:function(){return u},uA:function(){return i}});var r=n(4046);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.cY;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1363:function(e,t,n){n.d(t,{$b:function(){return i},Vy:function(){return u}});n(4114);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},8355:function(e,t,n){n.d(t,{A:function(){return $t}});var r={};n.r(r),n.d(r,{hasBrowserEnv:function(){return De},hasStandardBrowserEnv:function(){return xe},hasStandardBrowserWebWorkerEnv:function(){return Pe}});n(4114),n(7467),n(4732),n(9577),n(6280),n(7913),n(7801);function i(e,t){return function(){return e.apply(t,arguments)}}const{toString:s}=Object.prototype,{getPrototypeOf:o}=Object,a=(e=>t=>{const n=s.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),c=e=>(e=e.toLowerCase(),t=>a(t)===e),u=e=>t=>typeof t===e,{isArray:l}=Array,h=u("undefined");function d(e){return null!==e&&!h(e)&&null!==e.constructor&&!h(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const f=c("ArrayBuffer");function p(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t}const g=u("string"),m=u("function"),y=u("number"),v=e=>null!==e&&"object"===typeof e,w=e=>!0===e||!1===e,_=e=>{if("object"!==a(e))return!1;const t=o(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},b=c("Date"),E=c("File"),T=c("Blob"),I=c("FileList"),S=e=>v(e)&&m(e.pipe),C=e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||m(e.append)&&("formdata"===(t=a(e))||"object"===t&&m(e.toString)&&"[object FormData]"===e.toString()))},A=c("URLSearchParams"),k=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function R(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,i;if("object"!==typeof e&&(e=[e]),l(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let o;for(r=0;r<s;r++)o=i[r],t.call(null,e[o],o,e)}}function O(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,i=n.length;while(i-- >0)if(r=n[i],t===r.toLowerCase())return r;return null}const N=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),D=e=>!h(e)&&e!==N;function x(){const{caseless:e}=D(this)&&this||{},t={},n=(n,r)=>{const i=e&&O(t,r)||r;_(t[i])&&_(n)?t[i]=x(t[i],n):_(n)?t[i]=x({},n):l(n)?t[i]=n.slice():t[i]=n};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&R(arguments[r],n);return t}const P=(e,t,n,{allOwnKeys:r}={})=>(R(t,((t,r)=>{n&&m(t)?e[r]=i(t,n):e[r]=t}),{allOwnKeys:r}),e),L=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),M=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},F=(e,t,n,r)=>{let i,s,a;const c={};if(t=t||{},null==e)return t;do{i=Object.getOwnPropertyNames(e),s=i.length;while(s-- >0)a=i[s],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&o(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},U=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},V=e=>{if(!e)return null;if(l(e))return e;let t=e.length;if(!y(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},j=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&o(Uint8Array)),B=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let i;while((i=r.next())&&!i.done){const n=i.value;t.call(e,n[0],n[1])}},$=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},q=c("HTMLFormElement"),z=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),K=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),H=c("RegExp"),G=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};R(n,((n,i)=>{let s;!1!==(s=t(n,i,e))&&(r[i]=s||n)})),Object.defineProperties(e,r)},W=e=>{G(e,((t,n)=>{if(m(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];m(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},Q=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return l(e)?r(e):r(String(e).split(t)),n},X=()=>{},J=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Y="abcdefghijklmnopqrstuvwxyz",Z="0123456789",ee={DIGIT:Z,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+Z},te=(e=16,t=ee.ALPHA_DIGIT)=>{let n="";const{length:r}=t;while(e--)n+=t[Math.random()*r|0];return n};function ne(e){return!!(e&&m(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])}const re=e=>{const t=new Array(10),n=(e,r)=>{if(v(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const i=l(e)?[]:{};return R(e,((e,t)=>{const s=n(e,r+1);!h(s)&&(i[t]=s)})),t[r]=void 0,i}}return e};return n(e,0)},ie=c("AsyncFunction"),se=e=>e&&(v(e)||m(e))&&m(e.then)&&m(e.catch);var oe={isArray:l,isArrayBuffer:f,isBuffer:d,isFormData:C,isArrayBufferView:p,isString:g,isNumber:y,isBoolean:w,isObject:v,isPlainObject:_,isUndefined:h,isDate:b,isFile:E,isBlob:T,isRegExp:H,isFunction:m,isStream:S,isURLSearchParams:A,isTypedArray:j,isFileList:I,forEach:R,merge:x,extend:P,trim:k,stripBOM:L,inherits:M,toFlatObject:F,kindOf:a,kindOfTest:c,endsWith:U,toArray:V,forEachEntry:B,matchAll:$,isHTMLForm:q,hasOwnProperty:K,hasOwnProp:K,reduceDescriptors:G,freezeMethods:W,toObjectSet:Q,toCamelCase:z,noop:X,toFiniteNumber:J,findKey:O,global:N,isContextDefined:D,ALPHABET:ee,generateString:te,isSpecCompliantForm:ne,toJSONObject:re,isAsyncFn:ie,isThenable:se};function ae(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}oe.inherits(ae,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:oe.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ce=ae.prototype,ue={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{ue[e]={value:e}})),Object.defineProperties(ae,ue),Object.defineProperty(ce,"isAxiosError",{value:!0}),ae.from=(e,t,n,r,i,s)=>{const o=Object.create(ce);return oe.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),ae.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var le=ae,he=null;function de(e){return oe.isPlainObject(e)||oe.isArray(e)}function fe(e){return oe.endsWith(e,"[]")?e.slice(0,-2):e}function pe(e,t,n){return e?e.concat(t).map((function(e,t){return e=fe(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function ge(e){return oe.isArray(e)&&!e.some(de)}const me=oe.toFlatObject(oe,{},null,(function(e){return/^is[A-Z]/.test(e)}));function ye(e,t,n){if(!oe.isObject(e))throw new TypeError("target must be an object");t=t||new(he||FormData),n=oe.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!oe.isUndefined(t[e])}));const r=n.metaTokens,i=n.visitor||l,s=n.dots,o=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&oe.isSpecCompliantForm(t);if(!oe.isFunction(i))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(oe.isDate(e))return e.toISOString();if(!c&&oe.isBlob(e))throw new le("Blob is not supported. Use a Buffer instead.");return oe.isArrayBuffer(e)||oe.isTypedArray(e)?c&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,i){let a=e;if(e&&!i&&"object"===typeof e)if(oe.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(oe.isArray(e)&&ge(e)||(oe.isFileList(e)||oe.endsWith(n,"[]"))&&(a=oe.toArray(e)))return n=fe(n),a.forEach((function(e,r){!oe.isUndefined(e)&&null!==e&&t.append(!0===o?pe([n],r,s):null===o?n:n+"[]",u(e))})),!1;return!!de(e)||(t.append(pe(i,n,s),u(e)),!1)}const h=[],d=Object.assign(me,{defaultVisitor:l,convertValue:u,isVisitable:de});function f(e,n){if(!oe.isUndefined(e)){if(-1!==h.indexOf(e))throw Error("Circular reference detected in "+n.join("."));h.push(e),oe.forEach(e,(function(e,r){const s=!(oe.isUndefined(e)||null===e)&&i.call(t,e,oe.isString(r)?r.trim():r,n,d);!0===s&&f(e,n?n.concat(r):[r])})),h.pop()}}if(!oe.isObject(e))throw new TypeError("data must be an object");return f(e),t}var ve=ye;function we(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function _e(e,t){this._pairs=[],e&&ve(e,this,t)}const be=_e.prototype;be.append=function(e,t){this._pairs.push([e,t])},be.toString=function(e){const t=e?function(t){return e.call(this,t,we)}:we;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Ee=_e;function Te(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ie(e,t,n){if(!t)return e;const r=n&&n.encode||Te,i=n&&n.serialize;let s;if(s=i?i(t,n):oe.isURLSearchParams(t)?t.toString():new Ee(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}class Se{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){oe.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var Ce=Se,Ae={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ke=(n(4603),n(7566),n(8721),"undefined"!==typeof URLSearchParams?URLSearchParams:Ee),Re="undefined"!==typeof FormData?FormData:null,Oe="undefined"!==typeof Blob?Blob:null,Ne={isBrowser:!0,classes:{URLSearchParams:ke,FormData:Re,Blob:Oe},protocols:["http","https","file","blob","url","data"]};const De="undefined"!==typeof window&&"undefined"!==typeof document,xe=(e=>De&&["ReactNative","NativeScript","NS"].indexOf(e)<0)("undefined"!==typeof navigator&&navigator.product),Pe=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)();var Le={...r,...Ne};function Me(e,t){return ve(e,new Le.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Le.isNode&&oe.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function Fe(e){return oe.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function Ue(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function Ve(e){function t(e,n,r,i){let s=e[i++];if("__proto__"===s)return!0;const o=Number.isFinite(+s),a=i>=e.length;if(s=!s&&oe.isArray(r)?r.length:s,a)return oe.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&oe.isObject(r[s])||(r[s]=[]);const c=t(e,n,r[s],i);return c&&oe.isArray(r[s])&&(r[s]=Ue(r[s])),!o}if(oe.isFormData(e)&&oe.isFunction(e.entries)){const n={};return oe.forEachEntry(e,((e,r)=>{t(Fe(e),r,n,0)})),n}return null}var je=Ve;function Be(e,t,n){if(oe.isString(e))try{return(t||JSON.parse)(e),oe.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const $e={transitional:Ae,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,i=oe.isObject(e);i&&oe.isHTMLForm(e)&&(e=new FormData(e));const s=oe.isFormData(e);if(s)return r?JSON.stringify(je(e)):e;if(oe.isArrayBuffer(e)||oe.isBuffer(e)||oe.isStream(e)||oe.isFile(e)||oe.isBlob(e))return e;if(oe.isArrayBufferView(e))return e.buffer;if(oe.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let o;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Me(e,this.formSerializer).toString();if((o=oe.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ve(o?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),Be(e)):e}],transformResponse:[function(e){const t=this.transitional||$e.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&oe.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,s=!n&&r;try{return JSON.parse(e)}catch(i){if(s){if("SyntaxError"===i.name)throw le.from(i,le.ERR_BAD_RESPONSE,this,null,this.response);throw i}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Le.classes.FormData,Blob:Le.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};oe.forEach(["delete","get","head","post","put","patch"],(e=>{$e.headers[e]={}}));var qe=$e;const ze=oe.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Ke=e=>{const t={};let n,r,i;return e&&e.split("\n").forEach((function(e){i=e.indexOf(":"),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!n||t[n]&&ze[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const He=Symbol("internals");function Ge(e){return e&&String(e).trim().toLowerCase()}function We(e){return!1===e||null==e?e:oe.isArray(e)?e.map(We):String(e)}function Qe(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}const Xe=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Je(e,t,n,r,i){return oe.isFunction(r)?r.call(this,t,n):(i&&(t=n),oe.isString(t)?oe.isString(r)?-1!==t.indexOf(r):oe.isRegExp(r)?r.test(t):void 0:void 0)}function Ye(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function Ze(e,t){const n=oe.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})}))}class et{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function i(e,t,n){const i=Ge(t);if(!i)throw new Error("header name must be a non-empty string");const s=oe.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=We(e))}const s=(e,t)=>oe.forEach(e,((e,n)=>i(e,n,t)));return oe.isPlainObject(e)||e instanceof this.constructor?s(e,t):oe.isString(e)&&(e=e.trim())&&!Xe(e)?s(Ke(e),t):null!=e&&i(t,e,n),this}get(e,t){if(e=Ge(e),e){const n=oe.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return Qe(e);if(oe.isFunction(t))return t.call(this,e,n);if(oe.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ge(e),e){const n=oe.findKey(this,e);return!(!n||void 0===this[n]||t&&!Je(this,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function i(e){if(e=Ge(e),e){const i=oe.findKey(n,e);!i||t&&!Je(n,n[i],i,t)||(delete n[i],r=!0)}}return oe.isArray(e)?e.forEach(i):i(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;while(n--){const i=t[n];e&&!Je(this,this[i],i,e,!0)||(delete this[i],r=!0)}return r}normalize(e){const t=this,n={};return oe.forEach(this,((r,i)=>{const s=oe.findKey(n,i);if(s)return t[s]=We(r),void delete t[i];const o=e?Ye(i):String(i).trim();o!==i&&delete t[i],t[o]=We(r),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return oe.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&oe.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=this[He]=this[He]={accessors:{}},n=t.accessors,r=this.prototype;function i(e){const t=Ge(e);n[t]||(Ze(r,e),n[t]=!0)}return oe.isArray(e)?e.forEach(i):i(e),this}}et.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),oe.reduceDescriptors(et.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),oe.freezeMethods(et);var tt=et;function nt(e,t){const n=this||qe,r=t||n,i=tt.from(r.headers);let s=r.data;return oe.forEach(e,(function(e){s=e.call(n,s,i.normalize(),t?t.status:void 0)})),i.normalize(),s}function rt(e){return!(!e||!e.__CANCEL__)}function it(e,t,n){le.call(this,null==e?"canceled":e,le.ERR_CANCELED,t,n),this.name="CanceledError"}oe.inherits(it,le,{__CANCEL__:!0});var st=it;n(4979);function ot(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new le("Request failed with status code "+n.status,[le.ERR_BAD_REQUEST,le.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var at=Le.hasStandardBrowserEnv?{write(e,t,n,r,i,s){const o=[e+"="+encodeURIComponent(t)];oe.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),oe.isString(r)&&o.push("path="+r),oe.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ct(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ut(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function lt(e,t){return e&&!ct(t)?ut(e,t):t}var ht=Le.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=oe.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}();function dt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ft(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[o];i||(i=c),n[s]=a,r[s]=c;let l=o,h=0;while(l!==s)h+=n[l++],l%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const d=u&&c-u;return d?Math.round(1e3*h/d):void 0}}var pt=ft;function gt(e,t){let n=0;const r=pt(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,c=r(a),u=s<=o;n=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-s)/c:void 0,event:i};l[t?"download":"upload"]=!0,e(l)}}const mt="undefined"!==typeof XMLHttpRequest;var yt=mt&&function(e){return new Promise((function(t,n){let r=e.data;const i=tt.from(e.headers).normalize();let s,o,{responseType:a,withXSRFToken:c}=e;function u(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}if(oe.isFormData(r))if(Le.hasStandardBrowserEnv||Le.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if(!1!==(o=i.getContentType())){const[e,...t]=o?o.split(";").map((e=>e.trim())).filter(Boolean):[];i.setContentType([e||"multipart/form-data",...t].join("; "))}let l=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(t+":"+n))}const h=lt(e.baseURL,e.url);function d(){if(!l)return;const r=tt.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),i=a&&"text"!==a&&"json"!==a?l.response:l.responseText,s={data:i,status:l.status,statusText:l.statusText,headers:r,config:e,request:l};ot((function(e){t(e),u()}),(function(e){n(e),u()}),s),l=null}if(l.open(e.method.toUpperCase(),Ie(h,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,"onloadend"in l?l.onloadend=d:l.onreadystatechange=function(){l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))&&setTimeout(d)},l.onabort=function(){l&&(n(new le("Request aborted",le.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new le("Network Error",le.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Ae;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new le(t,r.clarifyTimeoutError?le.ETIMEDOUT:le.ECONNABORTED,e,l)),l=null},Le.hasStandardBrowserEnv&&(c&&oe.isFunction(c)&&(c=c(e)),c||!1!==c&&ht(h))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&at.read(e.xsrfCookieName);t&&i.set(e.xsrfHeaderName,t)}void 0===r&&i.setContentType(null),"setRequestHeader"in l&&oe.forEach(i.toJSON(),(function(e,t){l.setRequestHeader(t,e)})),oe.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),a&&"json"!==a&&(l.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&l.addEventListener("progress",gt(e.onDownloadProgress,!0)),"function"===typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",gt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{l&&(n(!t||t.type?new st(null,e,l):t),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const f=dt(h);f&&-1===Le.protocols.indexOf(f)?n(new le("Unsupported protocol "+f+":",le.ERR_BAD_REQUEST,e)):l.send(r||null)}))};const vt={http:he,xhr:yt};oe.forEach(vt,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));const wt=e=>`- ${e}`,_t=e=>oe.isFunction(e)||null===e||!1===e;var bt={getAdapter:e=>{e=oe.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!_t(n)&&(r=vt[(t=String(n)).toLowerCase()],void 0===r))throw new le(`Unknown adapter '${t}'`);if(r)break;i[t||"#"+s]=r}if(!r){const e=Object.entries(i).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));let n=t?e.length>1?"since :\n"+e.map(wt).join("\n"):" "+wt(e[0]):"as no adapter specified";throw new le("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r},adapters:vt};function Et(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new st(null,e)}function Tt(e){Et(e),e.headers=tt.from(e.headers),e.data=nt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=bt.getAdapter(e.adapter||qe.adapter);return t(e).then((function(t){return Et(e),t.data=nt.call(e,e.transformResponse,t),t.headers=tt.from(t.headers),t}),(function(t){return rt(t)||(Et(e),t&&t.response&&(t.response.data=nt.call(e,e.transformResponse,t.response),t.response.headers=tt.from(t.response.headers))),Promise.reject(t)}))}const It=e=>e instanceof tt?e.toJSON():e;function St(e,t){t=t||{};const n={};function r(e,t,n){return oe.isPlainObject(e)&&oe.isPlainObject(t)?oe.merge.call({caseless:n},e,t):oe.isPlainObject(t)?oe.merge({},t):oe.isArray(t)?t.slice():t}function i(e,t,n){return oe.isUndefined(t)?oe.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!oe.isUndefined(t))return r(void 0,t)}function o(e,t){return oe.isUndefined(t)?oe.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,i,s){return s in t?r(n,i):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>i(It(e),It(t),!0)};return oe.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||i,o=s(e[r],t[r],r);oe.isUndefined(o)&&s!==a||(n[r]=o)})),n}const Ct="1.6.7",At={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{At[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const kt={};function Rt(e,t,n){if("object"!==typeof e)throw new le("options must be an object",le.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;while(i-- >0){const s=r[i],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new le("option "+s+" must be "+n,le.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new le("Unknown option "+s,le.ERR_BAD_OPTION)}}At.transitional=function(e,t,n){function r(e,t){return"[Axios v"+Ct+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,i,s)=>{if(!1===e)throw new le(r(i," has been removed"+(t?" in "+t:"")),le.ERR_DEPRECATED);return t&&!kt[i]&&(kt[i]=!0,console.warn(r(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,s)}};var Ot={assertOptions:Rt,validators:At};const Nt=Ot.validators;class Dt{constructor(e){this.defaults=e,this.interceptors={request:new Ce,response:new Ce}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e;Error.captureStackTrace?Error.captureStackTrace(e={}):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}throw n}}_request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=St(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:i}=t;void 0!==n&&Ot.assertOptions(n,{silentJSONParsing:Nt.transitional(Nt.boolean),forcedJSONParsing:Nt.transitional(Nt.boolean),clarifyTimeoutError:Nt.transitional(Nt.boolean)},!1),null!=r&&(oe.isFunction(r)?t.paramsSerializer={serialize:r}:Ot.assertOptions(r,{encode:Nt.function,serialize:Nt.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=i&&oe.merge(i.common,i[t.method]);i&&oe.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete i[e]})),t.headers=tt.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,h=0;if(!a){const e=[Tt.bind(this),void 0];e.unshift.apply(e,o),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);while(h<l)u=u.then(e[h++],e[h++]);return u}l=o.length;let d=t;h=0;while(h<l){const e=o[h++],t=o[h++];try{d=e(d)}catch(f){t.call(this,f);break}}try{u=Tt.call(this,d)}catch(f){return Promise.reject(f)}h=0,l=c.length;while(h<l)u=u.then(c[h++],c[h++]);return u}getUri(e){e=St(this.defaults,e);const t=lt(e.baseURL,e.url);return Ie(t,e.params,e.paramsSerializer)}}oe.forEach(["delete","get","head","options"],(function(e){Dt.prototype[e]=function(t,n){return this.request(St(n||{},{method:e,url:t,data:(n||{}).data}))}})),oe.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,i){return this.request(St(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Dt.prototype[e]=t(),Dt.prototype[e+"Form"]=t(!0)}));var xt=Dt;class Pt{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,i){n.reason||(n.reason=new st(e,r,i),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;const t=new Pt((function(t){e=t}));return{token:t,cancel:e}}}var Lt=Pt;function Mt(e){return function(t){return e.apply(null,t)}}function Ft(e){return oe.isObject(e)&&!0===e.isAxiosError}const Ut={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ut).forEach((([e,t])=>{Ut[t]=e}));var Vt=Ut;function jt(e){const t=new xt(e),n=i(xt.prototype.request,t);return oe.extend(n,xt.prototype,t,{allOwnKeys:!0}),oe.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return jt(St(e,t))},n}const Bt=jt(qe);Bt.Axios=xt,Bt.CanceledError=st,Bt.CancelToken=Lt,Bt.isCancel=rt,Bt.VERSION=Ct,Bt.toFormData=ve,Bt.AxiosError=le,Bt.Cancel=Bt.CanceledError,Bt.all=function(e){return Promise.all(e)},Bt.spread=Mt,Bt.isAxiosError=Ft,Bt.mergeConfig=St,Bt.AxiosHeaders=tt,Bt.formToJSON=e=>je(oe.isHTMLForm(e)?new FormData(e):e),Bt.getAdapter=bt.getAdapter,Bt.HttpStatusCode=Vt,Bt.default=Bt;var $t=Bt},6400:function(e,t,n){n.d(t,{Wp:function(){return r.Wp}});var r=n(3405),i="firebase",s="10.8.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},8238:function(e,t,n){n.d(t,{eJ:function(){return Pt},xI:function(){return Qr},hg:function(){return jt},x9:function(){return Lt},CI:function(){return Bt},r7:function(){return Ft}});n(4114),n(4603),n(7566),n(8721);var r=n(4046),i=n(3405),s=n(1363);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var a=n(852);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.FA("auth","Firebase",c()),h=new s.Vy("@firebase/auth");function d(e,...t){h.logLevel<=s.$b.WARN&&h.warn(`Auth (${i.MF}): ${e}`,...t)}function f(e,...t){h.logLevel<=s.$b.ERROR&&h.error(`Auth (${i.MF}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,...t){throw y(e,...t)}function g(e,...t){return y(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),s=new r.FA("auth","Firebase",i);return s.create(t,{appName:e.name})}function y(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function v(e,t,...n){if(!e)throw y(t,...n)}function w(e){const t="INTERNAL ASSERTION FAILED: "+e;throw f(t),new Error(t)}function _(e,t){e||w(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function E(){return"http:"===T()||"https:"===T()}function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,r.sr)()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,_(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.jZ)()||(0,r.lV)()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){_(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},O=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function D(e,t,n,i,s={}){return x(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.Am)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),k.fetch()(L(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function x(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw U(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw U(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw U(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);p(e,a)}}catch(s){if(s instanceof r.g)throw s;p(e,"network-request-failed",{message:String(s)})}}async function P(e,t,n,r,i={}){const s=await D(e,t,n,r,i);return"mfaPendingCredential"in s&&p(e,"multi-factor-auth-required",{_serverResponse:s}),s}function L(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?A(e.config,i):`${e.config.apiScheme}://${i}`}function M(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(g(this.auth,"network-request-failed"))),O.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=g(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){return void 0!==e&&void 0!==e.enterprise}class j{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return M(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t){return D(e,"GET","/v2/recaptchaConfig",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return D(e,"POST","/v1/accounts:delete",t)}async function q(e,t){return D(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t=!1){const n=(0,r.Ku)(e),i=await n.getIdToken(t),s=G(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:z(H(s.auth_time)),issuedAtTime:z(H(s.iat)),expirationTime:z(H(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function H(e){return 1e3*Number(e)}function G(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return f("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.u)(n);return e?JSON.parse(e):(f("Failed to decode base64 JWT payload"),null)}catch(s){return f("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function W(e){const t=G(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.g&&X(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function X({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Q(e,q(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ne(s.providerUserInfo):[],a=te(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Y(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function ee(e){const t=(0,r.Ku)(e);await Z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function te(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ne(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e,t){const n=await x(e,{},(async()=>{const n=(0,r.Am)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=L(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",k.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ie(e,t){return D(e,"POST","/v2/accounts:revokeToken",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):W(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await re(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new se;return n&&(v("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new se,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class ae{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Y(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Q(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return K(this,e)}reload(){return ee(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ae(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Q(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:w,emailVerified:_,isAnonymous:b,providerData:E,stsTokenManager:T}=t;v(w&&T,e,"internal-error");const I=se.fromJSON(this.name,T);v("string"===typeof w,e,"internal-error"),oe(l,e.name),oe(h,e.name),v("boolean"===typeof _,e,"internal-error"),v("boolean"===typeof b,e,"internal-error"),oe(d,e.name),oe(f,e.name),oe(p,e.name),oe(g,e.name),oe(m,e.name),oe(y,e.name);const S=new ae({uid:w,auth:e,email:h,emailVerified:_,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(S.providerData=E.map((e=>Object.assign({},e)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new se;r.updateFromServerResponse(t);const i=new ae({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Z(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new Map;function ue(e){_(e instanceof Function,"Expected a class definition");let t=ce.get(e);return t?(_(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ce.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}le.type="NONE";const he=le;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e,t,n){return`firebase:${e}:${t}:${n}`}class fe{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=de(this.userKey,r.apiKey,i),this.fullPersistenceKey=de("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ae._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new fe(ue(he),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||ue(he);const s=de(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=ae._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new fe(i,e,n)):new fe(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ve(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ge(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_e(t))return"Blackberry";if(be(t))return"Webos";if(me(t))return"Safari";if((t.includes("chrome/")||ye(t))&&!t.includes("edge/"))return"Chrome";if(we(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ge(e=(0,r.ZQ)()){return/firefox\//i.test(e)}function me(e=(0,r.ZQ)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ye(e=(0,r.ZQ)()){return/crios\//i.test(e)}function ve(e=(0,r.ZQ)()){return/iemobile/i.test(e)}function we(e=(0,r.ZQ)()){return/android/i.test(e)}function _e(e=(0,r.ZQ)()){return/blackberry/i.test(e)}function be(e=(0,r.ZQ)()){return/webos/i.test(e)}function Ee(e=(0,r.ZQ)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Te(e=(0,r.ZQ)()){var t;return Ee(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ie(){return(0,r.lT)()&&10===document.documentMode}function Se(e=(0,r.ZQ)()){return Ee(e)||we(e)||be(e)||_e(e)||/windows phone/i.test(e)||ve(e)}function Ce(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e,t=[]){let n;switch(e){case"Browser":n=pe((0,r.ZQ)());break;case"Worker":n=`${pe((0,r.ZQ)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.MF}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(e,t={}){return D(e,"GET","/v2/passwordPolicy",N(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=6;class Ne{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:Oe,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pe(this),this.idTokenSubscription=new Pe(this),this.beforeStateQueue=new ke(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ue(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await fe.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Z(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.Ku)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ue(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Re(this),t=new Ne(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.FA("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),await ie(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ue(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await fe.create(this,[ue(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(v(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"===typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ae(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null===t||void 0===t?void 0:t.error)&&d(`Error while retrieving App Check token: ${t.error}`),null===t||void 0===t?void 0:t.token}}function xe(e){return(0,r.Ku)(e)}class Pe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.tD)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Le={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Me(e){Le=e}function Fe(e){return Le.loadJS(e)}function Ue(){return Le.recaptchaEnterpriseScript}function Ve(){return Le.gapiScript}function je(e){return`__${e}${Math.floor(1e6*Math.random())}`}const Be="recaptcha-enterprise",$e="NO_RECAPTCHA";class qe{constructor(e){this.type=Be,this.auth=xe(e)}async verify(e="verify",t=!1){async function n(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{B(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new j(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))}function r(t,n,r){const i=window.grecaptcha;V(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n($e)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{n(this.auth).then((n=>{if(!t&&V(window.grecaptcha))r(n,e,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let t=Ue();0!==t.length&&(t+=n),Fe(t).then((()=>{r(n,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function ze(e,t,n,r=!1){const i=new qe(e);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ke(e,t,n,r){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i?void 0:i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await ze(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const i=await ze(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function He(e,t){const n=(0,i.j6)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.bD)(i,null!==t&&void 0!==t?t:{}))return e;p(e,"already-initialized")}const s=n.initialize({options:t});return s}function Ge(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ue);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}function We(e,t,n){const r=xe(e);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Qe(t),{host:o,port:a}=Xe(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ye()}function Qe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Xe(e){const t=Qe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Je(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Je(t)}}}function Je(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ye(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(e,t){return D(e,"POST","/v1/accounts:signUp",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function tt(e,t){return P(e,"POST","/v1/accounts:signInWithPassword",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function nt(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}async function rt(e,t){return P(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Ze{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new it(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new it(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ke(e,t,"signInWithPassword",tt);case"emailLink":return nt(e,{email:this._email,oobCode:this._password});default:p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ke(e,n,"signUpPassword",et);case"emailLink":return rt(e,{idToken:t,email:this._email,oobCode:this._password});default:p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(e,t){return P(e,"POST","/v1/accounts:signInWithIdp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="http://localhost";class at extends Ze{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new at(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new at(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return st(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,st(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,st(e,t)}buildRequest(){const e={requestUri:ot,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.Am)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(e,t){return D(e,"POST","/v1/accounts:sendVerificationCode",N(e,t))}async function ut(e,t){return P(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t))}async function lt(e,t){const n=await P(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t));if(n.temporaryProof)throw U(e,"account-exists-with-different-credential",n);return n}const ht={["USER_NOT_FOUND"]:"user-not-found"};async function dt(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return P(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,n),ht)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Ze{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ft({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ft({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ut(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return lt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return dt(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new ft({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gt(e){const t=(0,r.I9)((0,r.hp)(e))["link"],n=t?(0,r.I9)((0,r.hp)(t))["deep_link_id"]:null,i=(0,r.I9)((0,r.hp)(e))["deep_link_id"],s=i?(0,r.I9)((0,r.hp)(i))["link"]:null;return s||i||n||t||e}class mt{constructor(e){var t,n,i,s,o,a;const c=(0,r.I9)((0,r.hp)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=pt(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=gt(e);try{return new mt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{constructor(){this.providerId=yt.PROVIDER_ID}static credential(e,t){return it._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=mt.parseLink(t);return v(n,"argument-error"),it._fromEmailAndCode(e,n.code,n.tenantId)}}yt.PROVIDER_ID="password",yt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",yt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends vt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t extends wt{constructor(){super("facebook.com")}static credential(e){return at._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch(t){return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com",_t.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt extends wt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return at._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return bt.credential(t,n)}catch(r){return null}}}bt.GOOGLE_SIGN_IN_METHOD="google.com",bt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends wt{constructor(){super("github.com")}static credential(e){return at._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch(t){return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com",Et.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt extends wt{constructor(){super("twitter.com")}static credential(e,t){return at._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Tt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function It(e,t){return P(e,"POST","/v1/accounts:signUp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt.TWITTER_SIGN_IN_METHOD="twitter.com",Tt.PROVIDER_ID="twitter.com";class St{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await ae._fromIdTokenResponse(e,n,r),s=Ct(n),o=new St({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ct(n);return new St({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ct(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At extends r.g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,At.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new At(e,t,n,r)}}function kt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw At._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,n=!1){const r=await Q(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return St._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ot(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Q(e,kt(r,i,t,e),n);v(s.idToken,r,"internal-error");const o=G(s.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(e.uid===a,r,"user-mismatch"),St._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nt(e,t,n=!1){const r="signIn",i=await kt(e,r,t),s=await St._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Dt(e,t){return Nt(xe(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xt(e){const t=xe(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Pt(e,t,n){const r=xe(e),i={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},s=Ke(r,i,"signUpPassword",It),o=await s.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&xt(e),t})),a=await St._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Lt(e,t,n){return Dt((0,r.Ku)(e),yt.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&xt(e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mt(e,t){return D(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,r.Ku)(e),s=await i.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await Q(i,Mt(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function Ut(e,t,n,i){return(0,r.Ku)(e).onIdTokenChanged(t,n,i)}function Vt(e,t,n){return(0,r.Ku)(e).beforeAuthStateChanged(t,n)}function jt(e,t,n,i){return(0,r.Ku)(e).onAuthStateChanged(t,n,i)}function Bt(e){return(0,r.Ku)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $t(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function qt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}function zt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function Kt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}new WeakMap;const Ht="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ht,"1"),this.storage.removeItem(Ht),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){const e=(0,r.ZQ)();return me(e)||Ee(e)}const Qt=1e3,Xt=10;class Jt extends Gt{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Wt()&&Ce(),this.fallbackToPolling=Se(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ie()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Xt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Qt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jt.type="LOCAL";const Yt=Jt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Gt{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Zt.type="SESSION";const en=Zt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new nn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await tn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.receivers=[];class sn{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=rn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function an(e){on().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(){return"undefined"!==typeof on()["WorkerGlobalScope"]&&"function"===typeof on()["importScripts"]}async function un(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function ln(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function hn(){return cn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn="firebaseLocalStorageDb",fn=1,pn="firebaseLocalStorage",gn="fbase_key";class mn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function yn(e,t){return e.transaction([pn],t?"readwrite":"readonly").objectStore(pn)}function vn(){const e=indexedDB.deleteDatabase(dn);return new mn(e).toPromise()}function wn(){const e=indexedDB.open(dn,fn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(pn,{keyPath:gn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(pn)?t(n):(n.close(),await vn(),t(await wn()))}))}))}async function _n(e,t,n){const r=yn(e,!0).put({[gn]:t,value:n});return new mn(r).toPromise()}async function bn(e,t){const n=yn(e,!1).get(t),r=await new mn(n).toPromise();return void 0===r?null:r.value}function En(e,t){const n=yn(e,!0).delete(t);return new mn(n).toPromise()}const Tn=800,In=3;class Sn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await wn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>In)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=nn._getInstance(hn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await un(),!this.activeServiceWorker)return;this.sender=new sn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&ln()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wn();return await _n(e,Ht,"1"),await En(e,Ht),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>_n(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>bn(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>En(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=yn(e,!1).getAll();return new mn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Tn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Sn.type="LOCAL";const Cn=Sn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:start",N(e,t))}function kn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}function Rn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
je("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const On="recaptcha";async function Nn(e,t,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,e,"argument-error"),v(n.type===On,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){v("enroll"===t.type,e,"internal-error");const n=await $t(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,e,"missing-multi-factor-info");const o=await An(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await ct(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dn{constructor(e){this.providerId=Dn.PROVIDER_ID,this.auth=xe(e)}verifyPhoneNumber(e,t){return Nn(this.auth,e,(0,r.Ku)(t))}static credential(e,t){return ft._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Dn.credentialFromTaggedObject(t)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ft._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xn(e,t){return t?ue(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dn.PROVIDER_ID="phone",Dn.PHONE_SIGN_IN_METHOD="phone";class Pn extends Ze{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return st(e,this._buildIdpRequest())}_linkToIdToken(e,t){return st(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return st(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ln(e){return Nt(e.auth,new Pn(e),e.bypassAuthState)}function Mn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),Ot(n,new Pn(e),e.bypassAuthState)}async function Fn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),Rt(n,new Pn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ln;case"linkViaPopup":case"linkViaRedirect":return Fn;case"reauthViaPopup":case"reauthViaRedirect":return Mn;default:p(this.auth,"internal-error")}}resolve(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new C(2e3,1e4);class jn extends Un{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,jn.currentPopupAction&&jn.currentPopupAction.cancel(),jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){_(1===this.filter.length,"Popup operations only handle one event");const e=rn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Vn.get())};e()}}jn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Bn="pendingRedirect",$n=new Map;class qn extends Un{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=$n.get(this.auth._key());if(!e){try{const t=await zn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}$n.set(this.auth._key(),e)}return this.bypassAuthState||$n.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function zn(e,t){const n=Gn(t),r=Hn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Kn(e,t){$n.set(e._key(),t)}function Hn(e){return ue(e._redirectPersistence)}function Gn(e){return de(Bn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(e,t,n=!1){const r=xe(e),i=xn(r,t),s=new qn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qn=6e5;class Xn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Zn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Yn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(g(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Jn(e))}saveEventToCache(e){this.cachedEventUids.add(Jn(e)),this.lastProcessedEventTime=Date.now()}}function Jn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Yn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Zn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(e,t={}){return D(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nr=/^https?/;async function rr(e){if(e.config.emulator)return;const{authorizedDomains:t}=await er(e);for(const r of t)try{if(ir(r))return}catch(n){}p(e,"unauthorized-domain")}function ir(e){const t=b(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!nr.test(n))return!1;if(tr.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new C(3e4,6e4);function or(){const e=on().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function ar(e){return new Promise(((t,n)=>{var r,i,s;function o(){or(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{or(),n(g(e,"network-request-failed"))},timeout:sr.get()})}if(null===(i=null===(r=on().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=on().gapi)||void 0===s?void 0:s.load)){const t=je("iframefcb");return on()[t]=()=>{gapi.load?o():n(g(e,"network-request-failed"))},Fe(`${Ve()}?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw cr=null,e}))}let cr=null;function ur(e){return cr=cr||ar(e),cr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new C(5e3,15e3),hr="__/auth/iframe",dr="emulator/auth/iframe",fr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gr(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?A(t,dr):`https://${e.config.authDomain}/${hr}`,s={apiKey:t.apiKey,appName:e.name,v:i.MF},o=pr.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.Am)(s).slice(1)}`}async function mr(e){const t=await ur(e),n=on().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:gr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=g(e,"network-request-failed"),s=on().setTimeout((()=>{r(i)}),lr.get());function o(){on().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vr=500,wr=600,_r="_blank",br="http://localhost";class Er{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Tr(e,t,n,i=vr,s=wr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},yr),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.ZQ)().toLowerCase();n&&(c=ye(l)?_r:n),ge(l)&&(t=t||br,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Te(l)&&"_self"!==c)return Ir(t||"",c),new Er(null);const d=window.open(t||"",c,h);v(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Er(d)}function Ir(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="__/auth/handler",Cr="emulator/auth/handler",Ar=encodeURIComponent("fac");async function kr(e,t,n,s,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.MF,eventId:o};if(t instanceof vt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.Im)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof wt){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await e._getAppCheckToken(),h=l?`#${Ar}=${encodeURIComponent(l)}`:"";return`${Rr(e)}?${(0,r.Am)(u).slice(1)}${h}`}function Rr({config:e}){return e.emulator?A(e,Cr):`https://${e.authDomain}/${Sr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="webStorageSupport";class Nr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=en,this._completeRedirectFn=Wn,this._overrideRedirectResult=Kn}async _openPopup(e,t,n,r){var i;_(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await kr(e,t,n,b(),r);return Tr(e,s,rn())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await kr(e,t,n,b(),r);return an(i),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(_(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await mr(e),n=new Xn(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Or,{type:Or},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Or];void 0!==i&&t(!!i),p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rr(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Se()||me()||Ee()}}const Dr=Nr;class xr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return w("unexpected MultiFactorSessionType")}}}class Pr extends xr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Pr(e)}_finalizeEnroll(e,t,n){return qt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return kn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Lr{constructor(){}static assertion(e){return Pr._fromCredential(e)}}Lr.FACTOR_ID="phone";class Mr{static assertionForEnrollment(e,t){return Fr._fromSecret(e,t)}static assertionForSignIn(e,t){return Fr._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const n=e;v("undefined"!==typeof(null===(t=n.user)||void 0===t?void 0:t.auth),"internal-error");const r=await zt(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Ur._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}Mr.FACTOR_ID="totp";class Fr extends xr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new Fr(t,void 0,e)}static _fromEnrollmentId(e,t){return new Fr(t,e)}async _finalizeEnroll(e,t,n){return v("undefined"!==typeof this.secret,e,"argument-error"),Kt(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){v(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return Rn(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Ur{constructor(e,t,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new Ur(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let r=!1;return(Vr(e)||Vr(t))&&(r=!0),r&&(Vr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Vr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Vr(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var jr="@firebase/auth",Br="1.6.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $r{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zr(e){(0,i.om)(new a.uA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ae(e)},u=new De(r,i,s,c);return Ge(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.om)(new a.uA("auth-internal",(e=>{const t=xe(e.getProvider("auth").getImmediate());return(e=>new $r(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KO)(jr,Br,qr(e)),(0,i.KO)(jr,Br,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=300,Hr=(0,r.XA)("authIdTokenMaxAge")||Kr;let Gr=null;const Wr=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hr)return;const i=null===n||void 0===n?void 0:n.token;Gr!==i&&(Gr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Qr(e=(0,i.Sx)()){const t=(0,i.j6)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=He(e,{popupRedirectResolver:Dr,persistence:[Cn,Yt,en]}),s=(0,r.XA)("authTokenSyncURL");if(s){const e=Wr(s);Vt(n,e,(()=>e(n.currentUser))),Ut(n,(t=>e(t)))}const o=(0,r.Tj)("auth");return o&&We(n,`http://${o}`),n}function Xr(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}Me({loadJS(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=g("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Xr().appendChild(r)}))},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),zr("Browser")},9675:function(e,t,n){n.d(t,{rJ:function(){return ph},H9:function(){return gh},x7:function(){return ad},GG:function(){return ud},aU:function(){return vh},P:function(){return Wh},BN:function(){return ld}});n(4114),n(7467),n(4732),n(9577),n(6280),n(7913),n(7801),n(4979);var r,i=n(3405),s=n(852),o=n(1363),a=n(4046),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function d(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function f(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function p(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++m)}var g="closure_uid_"+(1e9*Math.random()>>>0),m=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function v(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function w(e,t,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:v,w.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function b(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==T)||p(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function S(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function C(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(d(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function A(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};h.addEventListener("test",e,t),h.removeEventListener("test",e,t)}catch(n){}return e}();function R(e){return/^[\s\xa0]*$/.test(e)}function O(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function N(e){return-1!=O().indexOf(e)}function D(e){return D[" "](e),e}function x(e,t){var n=_r;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}D[" "]=function(){};var P,L,M=N("Opera"),F=N("Trident")||N("MSIE"),U=N("Edge"),V=U||F,j=N("Gecko")&&!(-1!=O().toLowerCase().indexOf("webkit")&&!N("Edge"))&&!(N("Trident")||N("MSIE"))&&!N("Edge"),B=-1!=O().toLowerCase().indexOf("webkit")&&!N("Edge");function $(){var e=h.document;return e?e.documentMode:void 0}e:{var q="",z=function(){var e=O();return j?/rv:([^\);]+)(\)|;)/.exec(e):U?/Edge\/([\d\.]+)/.exec(e):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):B?/WebKit\/(\S+)/.exec(e):M?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(z&&(q=z?z[1]:""),F){var K=$();if(null!=K&&K>parseFloat(q)){P=String(K);break e}}P=q}if(h.document&&F){var H=$();L=H||(parseInt(P,10)||void 0)}else L=void 0;var G=L;function W(e,t){if(A.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(j){e:{try{D(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Q[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&W.$.h.call(this)}}b(W,A);var Q={2:"touch",3:"pen",4:"mouse"};W.prototype.h=function(){W.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var X="closure_listenable_"+(1e6*Math.random()|0),J=0;function Y(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++J,this.fa=this.ia=!1}function Z(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ee(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function te(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ne(e){const t={};for(const n in e)t[n]=e[n];return t}const re="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ie(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<re.length;t++)n=re[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function se(e){this.src=e,this.g={},this.h=0}function oe(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=I(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Z(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ae(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}se.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=ae(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Y(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};var ce="closure_lm_"+(1e6*Math.random()|0),ue={};function le(e,t,n,r,i){if(r&&r.once)return fe(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)le(e,t[s],n,r,i);return null}return n=_e(n),e&&e[X]?e.O(t,n,f(r)?!!r.capture:!!r,i):he(e,t,n,!1,r,i)}function he(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=f(i)?!!i.capture:!!i,a=ve(e);if(a||(e[ce]=a=new se(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=de(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)k||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(me(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function de(){function e(n){return t.call(e.src,e.listener,n)}const t=ye;return e}function fe(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)fe(e,t[s],n,r,i);return null}return n=_e(n),e&&e[X]?e.P(t,n,f(r)?!!r.capture:!!r,i):he(e,t,n,!0,r,i)}function pe(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)pe(e,t[s],n,r,i);else r=f(r)?!!r.capture:!!r,n=_e(n),e&&e[X]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=ae(s,n,r,i),-1<n&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=ve(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ae(t,n,r,i)),(n=-1<e?t[e]:null)&&ge(n))}function ge(e){if("number"!==typeof e&&e&&!e.fa){var t=e.src;if(t&&t[X])oe(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(me(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=ve(t))?(oe(n,e),0==n.h&&(n.src=null,t[ce]=null)):Z(e)}}}function me(e){return e in ue?ue[e]:ue[e]="on"+e}function ye(e,t){if(e.fa)e=!0;else{t=new W(t,this);var n=e.listener,r=e.la||e.src;e.ia&&ge(e),e=n.call(r,t)}return e}function ve(e){return e=e[ce],e instanceof se?e:null}var we="__closure_events_fn_"+(1e9*Math.random()>>>0);function _e(e){return"function"===typeof e?e:(e[we]||(e[we]=function(t){return e.handleEvent(t)}),e[we])}function be(){E.call(this),this.i=new se(this),this.S=this,this.J=null}function Ee(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,"string"===typeof t)t=new A(t,e);else if(t instanceof A)t.target=t.target||e;else{var i=t;t=new A(r,e),ie(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Te(o,r,!0,t)&&i}if(o=t.g=e,i=Te(o,r,!0,t)&&i,i=Te(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Te(o,r,!1,t)&&i}function Te(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&oe(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}b(be,E),be.prototype[X]=!0,be.prototype.removeEventListener=function(e,t,n,r){pe(this,e,t,n,r)},be.prototype.N=function(){if(be.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Z(n[r]);delete t.g[e],t.h--}}this.J=null},be.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},be.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ie=h.JSON.stringify;class Se{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Ce(){var e=Pe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ae{constructor(){this.h=this.g=null}add(e,t){const n=ke.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var ke=new Se((()=>new Re),(e=>e.reset()));class Re{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Oe(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ne(e){h.setTimeout((()=>{throw e}),0)}let De,xe=!1,Pe=new Ae,Le=()=>{const e=h.Promise.resolve(void 0);De=()=>{e.then(Me)}};var Me=()=>{for(var e;e=Ce();){try{e.h.call(e.g)}catch(n){Ne(n)}var t=ke;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}xe=!1};function Fe(e,t){be.call(this),this.h=e||1,this.g=t||h,this.j=w(this.qb,this),this.l=Date.now()}function Ue(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Ve(e,t,n){if("function"===typeof e)n&&(e=w(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=w(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function je(e){e.g=Ve((()=>{e.g=null,e.i&&(e.i=!1,je(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}b(Fe,be),r=Fe.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ee(this,"tick"),this.ga&&(Ue(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Fe.$.N.call(this),Ue(this),delete this.g};class Be extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:je(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(e){E.call(this),this.h=e,this.g={}}b($e,E);var qe=[];function ze(e,t,n,r){Array.isArray(n)||(n&&(qe[0]=n.toString()),n=qe);for(var i=0;i<n.length;i++){var s=le(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Ke(e){ee(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ge(e)}),e),e.g={}}function He(){this.g=!0}function Ge(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function We(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Qe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Je(e,n)+(r?" "+r:"")}))}function Xe(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Je(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ie(n)}catch(a){return t}}$e.prototype.N=function(){$e.$.N.call(this),Ke(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},He.prototype.Ea=function(){this.g=!1},He.prototype.info=function(){};var Ye={},Ze=null;function et(){return Ze=Ze||new be}function tt(e){A.call(this,Ye.Ta,e)}function nt(e){const t=et();Ee(t,new tt(t))}function rt(e,t){A.call(this,Ye.STAT_EVENT,e),this.stat=t}function it(e){const t=et();Ee(t,new rt(t,e))}function st(e,t){A.call(this,Ye.Ua,e),this.size=t}function ot(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}Ye.Ta="serverreachability",b(tt,A),Ye.STAT_EVENT="statevent",b(rt,A),Ye.Ua="timingevent",b(st,A);var at={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ct={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ut(){}function lt(e){return e.h||(e.h=e.i())}function ht(){}ut.prototype.h=null;var dt,ft={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pt(){A.call(this,"d")}function gt(){A.call(this,"c")}function mt(){}function yt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new $e(this),this.P=wt,e=V?125:void 0,this.V=new Fe(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new vt}function vt(){this.i=null,this.g="",this.h=!1}b(pt,A),b(gt,A),b(mt,ut),mt.prototype.g=function(){return new XMLHttpRequest},mt.prototype.i=function(){return{}},dt=new mt;var wt=45e3,_t={},bt={};function Et(e,t,n){e.L=1,e.A=zt(Vt(t)),e.u=n,e.S=!0,Tt(e,null)}function Tt(e,t){e.G=Date.now(),At(e),e.B=Vt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),rn(n.i,"t",r),e.o=0,n=e.l.J,e.h=new vt,e.g=ur(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Be(w(e.Pa,e,e.g),e.O)),ze(e.U,e.g,"readystatechange",e.nb),t=e.I?ne(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),nt(),Ge(e.j,e.v,e.B,e.m,e.W,e.u)}function It(e){return!!e.g&&("GET"==e.v&&2!=e.L&&e.l.Ha)}function St(e,t,n){let r,i=!0;for(;!e.J&&e.o<n.length;){if(r=Ct(e,n),r==bt){4==t&&(e.s=4,it(14),i=!1),Qe(e.j,e.m,null,"[Incomplete Response]");break}if(r==_t){e.s=4,it(15),Qe(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Qe(e.j,e.m,r,null),Dt(e,r)}It(e)&&0!=e.o&&(e.h.g=e.h.g.slice(e.o),e.o=0),4!=t||0!=n.length||e.h.h||(e.s=1,it(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),tr(t),t.M=!0,it(11))):(Qe(e.j,e.m,n,"[Invalid Chunked Response]"),Nt(e),Ot(e))}function Ct(e,t){var n=e.o,r=t.indexOf("\n",n);return-1==r?bt:(n=Number(t.substring(n,r)),isNaN(n)?_t:(r+=1,r+n>t.length?bt:(t=t.slice(r,r+n),e.o=r+n,t)))}function At(e){e.Y=Date.now()+e.P,kt(e,e.P)}function kt(e,t){if(null!=e.C)throw Error("WatchDog timer not null");e.C=ot(w(e.lb,e),t)}function Rt(e){e.C&&(h.clearTimeout(e.C),e.C=null)}function Ot(e){0==e.l.H||e.J||ir(e.l,e)}function Nt(e){Rt(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Ue(e.V),Ke(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Dt(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||dn(n.i,e)))if(!e.K&&dn(n.i,e)&&3==n.H){try{var r=n.Ja.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;rr(n),Hn(n)}er(n),it(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=ot(w(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else or(n,11)}else if((e.K||n.g==e)&&rr(n),!R(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const t=u[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(fn(s,s.h),s.h=null))}if(r.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.Da=e,qt(r.I,r.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=cr(r,r.J?r.pa:null,r.Y),o.K){pn(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Rt(a),At(a)),r.g=o}else Zn(r);0<n.j.length&&Wn(n)}else"stop"!=u[0]&&"close"!=u[0]||or(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?or(n,7):Kn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}nt(4)}catch(u){}}function xt(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(d(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Pt(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(d(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Lt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(d(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Pt(e),r=xt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=yt.prototype,r.setTimeout=function(e){this.P=e},r.nb=function(e){e=e.target;const t=this.M;t&&3==Un(e)?t.l():this.Pa(e)},r.Pa=function(e){try{if(e==this.g)e:{const l=Un(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>l)&&(3!=l||V||this.g&&(this.h.h||this.g.ja()||Vn(this.g)))){this.J||4!=l||7==t||nt(8==t||0>=d?3:2),Rt(this);var n=this.g.da();this.ca=n;t:if(It(this)){var r=Vn(this.g);e="";var i=r.length,s=4==Un(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Nt(this),Ot(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,We(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.s=3,it(12),Nt(this),Ot(this);break e}Qe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dt(this,n)}this.S?(St(this,l,o),V&&this.i&&3==l&&(ze(this.U,this.V,"tick",this.mb),this.V.start())):(Qe(this.j,this.m,o,null),Dt(this,o)),4==l&&Nt(this),this.i&&!this.J&&(4==l?ir(this.l,this):(this.i=!1,At(this)))}else jn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Nt(this),Ot(this)}}}catch(l){}},r.mb=function(){if(this.g){var e=Un(this.g),t=this.g.ja();this.o<t.length&&(Rt(this),St(this,e,t),this.i&&4!=e&&At(this))}},r.cancel=function(){this.J=!0,Nt(this)},r.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(Xe(this.j,this.B),2!=this.L&&(nt(),it(17)),Nt(this),this.s=2,Ot(this)):kt(this,this.Y-e)};var Mt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ft(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ut(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ut){this.h=e.h,jt(this,e.j),this.s=e.s,this.g=e.g,Bt(this,e.m),this.l=e.l;var t=e.i,n=new Zt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),$t(this,n),this.o=e.o}else e&&(t=String(e).match(Mt))?(this.h=!1,jt(this,t[1]||"",!0),this.s=Kt(t[2]||""),this.g=Kt(t[3]||"",!0),Bt(this,t[4]),this.l=Kt(t[5]||"",!0),$t(this,t[6]||"",!0),this.o=Kt(t[7]||"")):(this.h=!1,this.i=new Zt(null,this.h))}function Vt(e){return new Ut(e)}function jt(e,t,n){e.j=n?Kt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Bt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function $t(e,t,n){t instanceof Zt?(e.i=t,on(e.i,e.h)):(n||(t=Ht(t,Jt)),e.i=new Zt(t,e.h))}function qt(e,t,n){e.i.set(t,n)}function zt(e){return qt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Kt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ht(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Gt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Gt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Ut.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ht(t,Wt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Ht(t,Wt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Ht(n,"/"==n.charAt(0)?Xt:Qt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ht(n,Yt)),e.join("")};var Wt=/[#\/\?@]/g,Qt=/[#\?:]/g,Xt=/[#\?]/g,Jt=/[#\?@]/g,Yt=/#/g;function Zt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function en(e){e.g||(e.g=new Map,e.h=0,e.i&&Ft(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function tn(e,t){en(e),t=sn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nn(e,t){return en(e),t=sn(e,t),e.g.has(t)}function rn(e,t,n){tn(e,t),0<n.length&&(e.i=null,e.g.set(sn(e,t),S(n)),e.h+=n.length)}function sn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function on(e,t){t&&!e.j&&(en(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(tn(this,t),rn(this,n,e))}),e)),e.j=t}r=Zt.prototype,r.add=function(e,t){en(this),this.i=null,e=sn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){en(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.ta=function(){en(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.Z=function(e){en(this);let t=[];if("string"===typeof e)nn(this,e)&&(t=t.concat(this.g.get(sn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return en(this),this.i=null,e=sn(this,e),nn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var an=class{constructor(e,t){this.g=e,this.map=t}};function cn(e){this.l=e||un,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var un=10;function ln(e){return!!e.h||!!e.g&&e.g.size>=e.j}function hn(e){return e.h?1:e.g?e.g.size:0}function dn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function fn(e,t){e.g?e.g.add(t):e.h=t}function pn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function gn(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return S(e.i)}cn.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var mn=class{stringify(e){return h.JSON.stringify(e,void 0)}parse(e){return h.JSON.parse(e,void 0)}};function yn(){this.g=new mn}function vn(e,t,n){const r=n||"";try{Lt(e,(function(e,n){let i=e;f(e)&&(i=Ie(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function wn(e,t){const n=new He;if(h.Image){const r=new Image;r.onload=_(_n,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(_n,n,r,"TestLoadImage: error",!1,t),r.onabort=_(_n,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(_n,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function _n(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function bn(e){this.l=e.ec||null,this.j=e.ob||!1}function En(e,t){be.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Tn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}b(bn,ut),bn.prototype.g=function(){return new En(this.l,this.j)},bn.prototype.i=function(e){return function(){return e}}({}),b(En,be);var Tn=0;function In(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Sn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Cn(e)}function Cn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=En.prototype,r.open=function(e,t){if(this.readyState!=Tn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Cn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||h).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Sn(this)),this.readyState=Tn},r.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;In(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Sn(this):Cn(this),3==this.readyState&&In(this)}},r.Za=function(e){this.g&&(this.response=this.responseText=e,Sn(this))},r.Ya=function(e){this.g&&(this.response=e,Sn(this))},r.ka=function(){this.g&&Sn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var An=h.JSON.parse;function kn(e){be.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Rn,this.L=this.M=!1}b(kn,be);var Rn="",On=/^https?$/i,Nn=["POST","PUT"];function Dn(e){return F&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function xn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Pn(e),Mn(e)}function Pn(e){e.F||(e.F=!0,Ee(e,"complete"),Ee(e,"error"))}function Ln(e){if(e.h&&"undefined"!=typeof l&&(!e.C[1]||4!=Un(e)||2!=e.da()))if(e.v&&4==Un(e))Ve(e.La,0,e);else if(Ee(e,"readystatechange"),4==Un(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===a){var i=String(e.I).match(Mt)[1]||null;!i&&h.self&&h.self.location&&(i=h.self.location.protocol.slice(0,-1)),r=!On.test(i?i.toLowerCase():"")}n=r}if(n)Ee(e,"complete"),Ee(e,"success");else{e.m=6;try{var s=2<Un(e)?e.g.statusText:""}catch(o){s=""}e.j=s+" ["+e.da()+"]",Pn(e)}}finally{Mn(e)}}}function Mn(e,t){if(e.g){Fn(e);const r=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ee(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Fn(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Un(e){return e.g?e.g.readyState:0}function Vn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Rn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Xr){return null}}function jn(e){const t={};e=(e.g&&2<=Un(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(R(e[r]))continue;var n=Oe(e[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}te(t,(function(e){return e.join(", ")}))}function Bn(e){let t="";return ee(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function $n(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Bn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):qt(e,t,n))}function qn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function zn(e){this.Ga=0,this.j=[],this.l=new He,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=qn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=qn("baseRetryDelayMs",5e3,e),this.hb=qn("retryDelaySeedMs",1e4,e),this.eb=qn("forwardChannelMaxRetries",2,e),this.xa=qn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(e&&e.concurrentRequestLimit),this.Ja=new yn,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Kn(e){if(Gn(e),3==e.H){var t=e.W++,n=Vt(e.I);if(qt(n,"SID",e.K),qt(n,"RID",t),qt(n,"TYPE","terminate"),Jn(e,n),t=new yt(e,e.l,t),t.L=2,t.A=zt(Vt(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(t.A.toString(),"")}catch(r){}!n&&h.Image&&((new Image).src=t.A,n=!0),n||(t.g=ur(t.l,null),t.g.ha(t.A)),t.G=Date.now(),At(t)}ar(e)}function Hn(e){e.g&&(tr(e),e.g.cancel(),e.g=null)}function Gn(e){Hn(e),e.u&&(h.clearTimeout(e.u),e.u=null),rr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Wn(e){if(!ln(e.i)&&!e.m){e.m=!0;var t=e.Na;De||Le(),xe||(De(),xe=!0),Pe.add(t,e),e.C=0}}function Qn(e,t){return!(hn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.j=t.F.concat(e.j),!0):!(1==e.H||2==e.H||e.C>=(e.cb?0:e.eb))&&(e.m=ot(w(e.Na,e,t),sr(e,e.C)),e.C++,!0))}function Xn(e,t){var n;n=t?t.m:e.W++;const r=Vt(e.I);qt(r,"SID",e.K),qt(r,"RID",n),qt(r,"AID",e.V),Jn(e,r),e.o&&e.s&&$n(r,e.o,e.s),n=new yt(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Yn(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),fn(e.i,n),Et(n,r,t)}function Jn(e,t){e.na&&ee(e.na,(function(e,n){qt(t,n,e)})),e.h&&Lt({},(function(e,n){qt(t,n,e)}))}function Yn(e,t,n){n=Math.min(e.j.length,n);var r=e.h?w(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{vn(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Zn(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;De||Le(),xe||(De(),xe=!0),Pe.add(t,e),e.A=0}}function er(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=ot(w(e.Ma,e),sr(e,e.A)),e.A++,!0)}function tr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function nr(e){e.g=new yt(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Vt(e.wa);qt(t,"RID","rpc"),qt(t,"SID",e.K),qt(t,"AID",e.V),qt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&qt(t,"TO",e.qa),qt(t,"TYPE","xmlhttp"),Jn(e,t),e.o&&e.s&&$n(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=zt(Vt(t)),n.u=null,n.S=!0,Tt(n,e)}function rr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function ir(e,t){var n=null;if(e.g==t){rr(e),tr(e),e.g=null;var r=2}else{if(!dn(e.i,t))return;n=t.F,pn(e.i,t),r=1}if(0!=e.H)if(t.i)if(1==r){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=et(),Ee(r,new st(r,n)),Wn(e)}else Zn(e);else if(i=t.s,3==i||0==i&&0<t.ca||!(1==r&&Qn(e,t)||2==r&&er(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:or(e,5);break;case 4:or(e,10);break;case 3:or(e,6);break;default:or(e,2)}}function sr(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function or(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var r=w(e.pb,e);n||(n=new Ut("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||jt(n,"https"),zt(n)),wn(n.toString(),r)}else it(2);e.H=0,e.h&&e.h.za(t),ar(e),Gn(e)}function ar(e){if(e.H=0,e.ma=[],e.h){const t=gn(e.i);0==t.length&&0==e.j.length||(C(e.ma,t),C(e.ma,e.j),e.i.i.length=0,S(e.j),e.j.length=0),e.h.ya()}}function cr(e,t,n){var r=n instanceof Ut?Vt(n):new Ut(n);if(""!=r.g)t&&(r.g=t+"."+r.g),Bt(r,r.m);else{var i=h.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Ut(null);r&&jt(s,r),t&&(s.g=t),i&&Bt(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&qt(r,n,t),qt(r,"VER",e.ra),Jn(e,r),r}function ur(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new kn(new bn({ob:n})):new kn(e.va),t.Oa(e.J),t}function lr(){}function hr(){if(F&&!(10<=Number(G)))throw Error("Environmental error: no available transport.")}function dr(e,t){be.call(this),this.g=new zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!R(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!R(t)&&(this.g.F=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new gr(this)}function fr(e){pt.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function pr(){gt.call(this),this.status=1}function gr(e){this.g=e}function mr(){this.blockSize=-1}function yr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function vr(e,t,n){n||(n=0);var r=Array(16);if("string"===typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function wr(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}r=kn.prototype,r.Oa=function(e){this.M=e},r.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():dt.g(),this.C=this.u?lt(this.u):lt(dt),this.g.onreadystatechange=w(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){return void xn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=I(Nn,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fn(this),0<this.B&&((this.L=Dn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.ua,this)):this.A=Ve(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){xn(this,s)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ee(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ee(this,"complete"),Ee(this,"abort"),Mn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mn(this,!0)),kn.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Ln(this):this.kb())},r.kb=function(){Ln(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Un(this)?this.g.status:-1}catch(e){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),An(t)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=zn.prototype,r.ra=8,r.H=1,r.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new yt(this,this.l,e);let s=this.s;if(this.U&&(s?(s=ne(s),ie(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Yn(this,i,t),n=Vt(this.I),qt(n,"RID",e),qt(n,"CVER",22),this.F&&qt(n,"X-HTTP-Session-Id",this.F),Jn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Bn(s)))+"&"+t:this.o&&$n(n,this.o,s)),fn(this.i,i),this.bb&&qt(n,"TYPE","init"),this.P?(qt(n,"$req",t),qt(n,"SID","null"),i.aa=!0,Et(i,n,null)):Et(i,n,t),this.H=2}}else 3==this.H&&(e?Xn(this,e):0==this.j.length||ln(this.i)||Xn(this))},r.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ot(w(this.jb,this),e)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,it(10),Hn(this),nr(this))},r.ib=function(){null!=this.v&&(this.v=null,Hn(this),er(this),it(19))},r.pb=function(e){e?(this.l.info("Successfully pinged google.com"),it(2)):(this.l.info("Failed to ping google.com"),it(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=lr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},hr.prototype.g=function(e,t){return new dr(e,t)},b(dr,be),dr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;it(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=cr(e,null,e.Y),Wn(e)},dr.prototype.close=function(){Kn(this.g)},dr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ie(e),e=n);t.j.push(new an(t.fb++,e)),3==t.H&&Wn(t)},dr.prototype.N=function(){this.g.h=null,delete this.j,Kn(this.g),delete this.g,dr.$.N.call(this)},b(fr,pt),b(pr,gt),b(gr,lr),gr.prototype.Ba=function(){Ee(this.g,"a")},gr.prototype.Aa=function(e){Ee(this.g,new fr(e))},gr.prototype.za=function(e){Ee(this.g,new pr)},gr.prototype.ya=function(){Ee(this.g,"b")},b(yr,mr),yr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},yr.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(0==i)for(;s<=n;)vr(this,e,s),s+=this.blockSize;if("string"===typeof e){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){vr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){vr(this,r),i=0;break}}this.h=i,this.i+=t},yr.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var _r={};function br(e){return-128<=e&&128>e?x(e,(function(e){return new wr([0|e],0>e?-1:0)})):new wr([0|e],0>e?-1:0)}function Er(e){if(isNaN(e)||!isFinite(e))return Sr;if(0>e)return Or(Er(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Ir;return new wr(t,0)}function Tr(e,t){if(0==e.length)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if("-"==e.charAt(0))return Or(Tr(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(t,8)),r=Sr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Er(Math.pow(t,s)),r=r.R(s).add(Er(o))):(r=r.R(n),r=r.add(Er(o)))}return r}var Ir=4294967296,Sr=br(0),Cr=br(1),Ar=br(16777216);function kr(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Rr(e){return-1==e.h}function Or(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new wr(n,~e.h).add(Cr)}function Nr(e,t){return e.add(Or(t))}function Dr(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function xr(e,t){this.g=e,this.h=t}function Pr(e,t){if(kr(t))throw Error("division by zero");if(kr(e))return new xr(Sr,Sr);if(Rr(e))return t=Pr(Or(e),t),new xr(Or(t.g),Or(t.h));if(Rr(t))return t=Pr(e,Or(t)),new xr(Or(t.g),t.h);if(30<e.g.length){if(Rr(e)||Rr(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Cr,r=t;0>=r.X(e);)n=Lr(n),r=Lr(r);var i=Mr(n,1),s=Mr(r,1);for(r=Mr(r,2),n=Mr(n,2);!kr(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Mr(r,1),n=Mr(n,1)}return t=Nr(e,i.R(t)),new xr(i,t)}for(i=Sr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Er(n),o=s.R(t);Rr(o)||0<o.X(e);)n-=r,s=Er(n),o=s.R(t);kr(s)&&(s=Cr),i=i.add(s),e=Nr(e,o)}return new xr(i,e)}function Lr(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new wr(n,e.h)}function Mr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new wr(i,e.h)}r=wr.prototype,r.ea=function(){if(Rr(this))return-Or(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Ir+r)*t,t*=Ir}return e},r.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(kr(this))return"0";if(Rr(this))return"-"+Or(this).toString(e);for(var t=Er(Math.pow(e,6)),n=this,r="";;){var i=Pr(n,t).g;n=Nr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,kr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},r.X=function(e){return e=Nr(this,e),Rr(e)?-1:kr(e)?0:1},r.abs=function(){return Rr(this)?Or(this):this},r.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(65535&this.D(i))+(65535&e.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new wr(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(e){if(kr(this)||kr(e))return Sr;if(Rr(this))return Rr(e)?Or(this).R(Or(e)):Or(Or(this).R(e));if(Rr(e))return Or(this.R(Or(e)));if(0>this.X(Ar)&&0>e.X(Ar))return Er(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=e.D(i)>>>16,c=65535&e.D(i);n[2*r+2*i]+=o*c,Dr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Dr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Dr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Dr(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new wr(n,0)},r.gb=function(e){return Pr(this,e).h},r.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new wr(n,this.h&e.h)},r.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new wr(n,this.h|e.h)},r.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new wr(n,this.h^e.h)},hr.prototype.createWebChannel=hr.prototype.g,dr.prototype.send=dr.prototype.u,dr.prototype.open=dr.prototype.m,dr.prototype.close=dr.prototype.close,at.NO_ERROR=0,at.TIMEOUT=8,at.HTTP_ERROR=6,ct.COMPLETE="complete",ht.EventType=ft,ft.OPEN="a",ft.CLOSE="b",ft.ERROR="c",ft.MESSAGE="d",be.prototype.listen=be.prototype.O,kn.prototype.listenOnce=kn.prototype.P,kn.prototype.getLastError=kn.prototype.Sa,kn.prototype.getLastErrorCode=kn.prototype.Ia,kn.prototype.getStatus=kn.prototype.da,kn.prototype.getResponseJson=kn.prototype.Wa,kn.prototype.getResponseText=kn.prototype.ja,kn.prototype.send=kn.prototype.ha,kn.prototype.setWithCredentials=kn.prototype.Oa,yr.prototype.digest=yr.prototype.l,yr.prototype.reset=yr.prototype.reset,yr.prototype.update=yr.prototype.j,wr.prototype.add=wr.prototype.add,wr.prototype.multiply=wr.prototype.R,wr.prototype.modulo=wr.prototype.gb,wr.prototype.compare=wr.prototype.X,wr.prototype.toNumber=wr.prototype.ea,wr.prototype.toString=wr.prototype.toString,wr.prototype.getBits=wr.prototype.D,wr.fromNumber=Er,wr.fromString=Tr;var Fr=u.createWebChannelTransport=function(){return new hr},Ur=u.getStatEventTarget=function(){return et()},Vr=u.ErrorCode=at,jr=u.EventType=ct,Br=u.Event=Ye,$r=u.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},qr=(u.FetchXmlHttpFactory=bn,u.WebChannel=ht),zr=u.XhrIo=kn,Kr=u.Md5=yr,Hr=u.Integer=wr;const Gr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Wr.UNAUTHENTICATED=new Wr(null),Wr.GOOGLE_CREDENTIALS=new Wr("google-credentials-uid"),Wr.FIRST_PARTY=new Wr("first-party-uid"),Wr.MOCK_USER=new Wr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qr="10.8.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new o.Vy("@firebase/firestore");function Jr(){return Xr.logLevel}function Yr(e,...t){if(Xr.logLevel<=o.$b.DEBUG){const n=t.map(ti);Xr.debug(`Firestore (${Qr}): ${e}`,...n)}}function Zr(e,...t){if(Xr.logLevel<=o.$b.ERROR){const n=t.map(ti);Xr.error(`Firestore (${Qr}): ${e}`,...n)}}function ei(e,...t){if(Xr.logLevel<=o.$b.WARN){const n=t.map(ti);Xr.warn(`Firestore (${Qr}): ${e}`,...n)}}function ti(e){if("string"==typeof e)return e;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(e){return JSON.stringify(e)}(e)}catch(t){return e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e="Unexpected state"){const t=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: `+e;throw Zr(t),new Error(t)}function ri(e,t){e||ni()}function ii(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oi extends a.g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ui{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Wr.UNAUTHENTICATED)))}shutdown(){}}class li{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class hi{constructor(e){this.t=e,this.currentUser=Wr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new ai;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ai,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Yr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Yr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ai)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Yr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ri("string"==typeof t.accessToken),new ci(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ri(null===e||"string"==typeof e),new Wr(e)}}class di{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Wr.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fi{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new di(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Wr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class pi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gi{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&Yr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,Yr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Yr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):Yr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ri("string"==typeof e.token),this.R=e.token,new pi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mi(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=mi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function vi(e,t){return e<t?-1:e>t?1:0}function wi(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _i{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oi(si.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oi(si.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new oi(si.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oi(si.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _i.fromMillis(Date.now())}static fromDate(e){return _i.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new _i(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?vi(this.nanoseconds,e.nanoseconds):vi(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.timestamp=e}static fromTimestamp(e){return new bi(e)}static min(){return new bi(new _i(0,0))}static max(){return new bi(new _i(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,n){void 0===t?t=0:t>e.length&&ni(),void 0===n?n=e.length-t:n>e.length-t&&ni(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ei.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ei?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ti extends Ei{construct(e,t,n){return new Ti(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new oi(si.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ti(t)}static emptyPath(){return new Ti([])}}const Ii=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Si extends Ei{construct(e,t,n){return new Si(e,t,n)}static isValidIdentifier(e){return Ii.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Si.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Si(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new oi(si.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new oi(si.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new oi(si.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new oi(si.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Si(t)}static emptyPath(){return new Si([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.path=e}static fromPath(e){return new Ci(Ti.fromString(e))}static fromName(e){return new Ci(Ti.fromString(e).popFirst(5))}static empty(){return new Ci(Ti.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ti.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ti.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ci(new Ti(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}Ai.UNKNOWN_ID=-1;function ki(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=bi.fromTimestamp(1e9===r?new _i(n+1,0):new _i(n,r));return new Oi(i,Ci.empty(),t)}function Ri(e){return new Oi(e.readTime,e.key,-1)}class Oi{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Oi(bi.min(),Ci.empty(),-1)}static max(){return new Oi(bi.max(),Ci.empty(),-1)}}function Ni(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ci.comparator(e.documentKey,t.documentKey),0!==n?n:vi(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const Di="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(e){if(e.code!==si.FAILED_PRECONDITION||e.message!==Di)throw e;Yr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ni(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Li(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Li?t:Li.resolve(t)}catch(e){return Li.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Li.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Li.reject(t)}static resolve(e){return new Li(((t,n)=>{t(e)}))}static reject(e){return new Li(((t,n)=>{n(e)}))}static waitFor(e){return new Li(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Li.resolve(!1);for(const n of e)t=t.next((e=>e?Li.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Li(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Li(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new ai,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Vi(e,t.error)):this.V.resolve()},this.transaction.onerror=t=>{const n=zi(t.target.error);this.V.reject(new Vi(e,n))}}static open(e,t,n,r){try{return new Mi(t,e.transaction(r,n))}catch(e){throw new Vi(t,e)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(Yr("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Bi(t)}}class Fi{constructor(e,t,n){this.name=e,this.version=t,this.p=n,12.2===Fi.S((0,a.ZQ)())&&Zr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Yr("SimpleDb","Removing database:",e),$i(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,a.zW)())return!1;if(Fi.C())return!0;const e=(0,a.ZQ)(),t=Fi.S(e),n=0<t&&t<10,r=Fi.v(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static C(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.__PRIVATE_env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static v(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async O(e){return this.db||(Yr("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Vi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new oi(si.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new oi(si.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Vi(e,r))},r.onupgradeneeded=e=>{Yr("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.p.N(t,r.transaction,e.oldVersion,this.version).next((()=>{Yr("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.O(e);const t=Mi.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.g(),e))).catch((e=>(t.abort(e),Li.reject(e)))).toPromise();return s.catch((()=>{})),await t.m,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(Yr("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Ui{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return $i(this.k.delete())}}class Vi extends oi{constructor(e,t){super(si.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ji(e){return"IndexedDbTransactionError"===e.name}class Bi{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Yr("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Yr("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),$i(n)}add(e){return Yr("SimpleDb","ADD",this.store.name,e,e),$i(this.store.add(e))}get(e){return $i(this.store.get(e)).next((t=>(void 0===t&&(t=null),Yr("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Yr("SimpleDb","DELETE",this.store.name,e),$i(this.store.delete(e))}count(){return Yr("SimpleDb","COUNT",this.store.name),$i(this.store.count())}W(e,t){const n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){const e=r.getAll(n.range);return new Li(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}{const e=this.cursor(n),t=[];return this.G(e,((e,n)=>{t.push(n)})).next((()=>t))}}j(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Li(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}H(e,t){Yr("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.J=!1;const r=this.cursor(n);return this.G(r,((e,t,n)=>n.delete()))}Y(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.G(r,t)}Z(e){const t=this.cursor({});return new Li(((n,r)=>{t.onerror=e=>{const t=zi(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}G(e,t){const n=[];return new Li(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new Ui(i),o=t(i.primaryKey,i.value,s);if(o instanceof Li){const e=o.catch((e=>(s.done(),Li.reject(e))));n.push(e)}s.isDone?r():null===s.$?i.continue():i.continue(s.$)}})).next((()=>Li.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.J?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function $i(e){return new Li(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=zi(e.target.error);n(t)}}))}let qi=!1;function zi(e){const t=Fi.S((0,a.ZQ)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new oi("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return qi||(qi=!0,setTimeout((()=>{throw e}),0)),e}}return e}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ki{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}function Hi(e){return null==e}function Gi(e){return 0===e&&1/e==-1/0}function Wi(e){return"number"==typeof e&&Number.isInteger(e)&&!Gi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ki._e=-1;const Qi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Xi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ji=Xi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Zi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function es(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.comparator=e,this.root=t||rs.EMPTY}insert(e,t){return new ts(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rs.BLACK,null,null))}remove(e){return new ts(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ns(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ns(this.root,e,this.comparator,!1)}getReverseIterator(){return new ns(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ns(this.root,e,this.comparator,!0)}}class ns{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rs{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:rs.RED,this.left=null!=r?r:rs.EMPTY,this.right=null!=i?i:rs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new rs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return rs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return rs.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ni();if(this.right.isRed())throw ni();const e=this.left.check();if(e!==this.right.check())throw ni();return e+(this.isRed()?0:1)}}rs.EMPTY=null,rs.RED=!0,rs.BLACK=!1,rs.EMPTY=new class{constructor(){this.size=0}get key(){throw ni()}get value(){throw ni()}get color(){throw ni()}get left(){throw ni()}get right(){throw ni()}copy(e,t,n,r,i){return this}insert(e,t,n){return new rs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class is{constructor(e){this.comparator=e,this.data=new ts(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ss(this.data.getIterator())}getIteratorFrom(e){return new ss(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof is))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new is(this.comparator);return t.data=e,t}}class ss{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class os{constructor(e){this.fields=e,e.sort(Si.comparator)}static empty(){return new os([])}unionWith(e){let t=new is(Si.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new os(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wi(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cs{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new as("Invalid base64 string: "+e):e}}(e);return new cs(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new cs(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return vi(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}cs.EMPTY_BYTE_STRING=new cs("");const us=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ls(e){if(ri(!!e),"string"==typeof e){let t=0;const n=us.exec(e);if(ri(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:hs(e.seconds),nanos:hs(e.nanos)}}function hs(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ds(e){return"string"==typeof e?cs.fromBase64String(e):cs.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ps(e){const t=e.mapValue.fields.__previous_value__;return fs(t)?ps(t):t}function gs(e){const t=ls(e.mapValue.fields.__local_write_time__.timestampValue);return new _i(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class ys{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ys("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ys&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ws(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?fs(e)?4:xs(e)?9007199254740991:10:ni()}function _s(e,t){if(e===t)return!0;const n=ws(e);if(n!==ws(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return gs(e).isEqual(gs(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=ls(e.timestampValue),r=ls(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ds(e.bytesValue).isEqual(ds(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return hs(e.geoPointValue.latitude)===hs(t.geoPointValue.latitude)&&hs(e.geoPointValue.longitude)===hs(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return hs(e.integerValue)===hs(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=hs(e.doubleValue),r=hs(t.doubleValue);return n===r?Gi(n)===Gi(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return wi(e.arrayValue.values||[],t.arrayValue.values||[],_s);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Yi(n)!==Yi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!_s(n[i],r[i])))return!1;return!0}(e,t);default:return ni()}}function bs(e,t){return void 0!==(e.values||[]).find((e=>_s(e,t)))}function Es(e,t){if(e===t)return 0;const n=ws(e),r=ws(t);if(n!==r)return vi(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return vi(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=hs(e.integerValue||e.doubleValue),r=hs(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Ts(e.timestampValue,t.timestampValue);case 4:return Ts(gs(e),gs(t));case 5:return vi(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ds(e),r=ds(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=vi(n[i],r[i]);if(0!==e)return e}return vi(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=vi(hs(e.latitude),hs(t.latitude));return 0!==n?n:vi(hs(e.longitude),hs(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Es(n[i],r[i]);if(e)return e}return vi(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===vs.mapValue&&t===vs.mapValue)return 0;if(e===vs.mapValue)return 1;if(t===vs.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=vi(r[o],s[o]);if(0!==e)return e;const t=Es(n[r[o]],i[s[o]]);if(0!==t)return t}return vi(r.length,s.length)}(e.mapValue,t.mapValue);default:throw ni()}}function Ts(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return vi(e,t);const n=ls(e),r=ls(t),i=vi(n.seconds,r.seconds);return 0!==i?i:vi(n.nanos,r.nanos)}function Is(e){return Ss(e)}function Ss(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=ls(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(e){return ds(e).toBase64()}(e.bytesValue):"referenceValue"in e?function(e){return Ci.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Ss(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Ss(e.fields[i])}`;return n+"}"}(e.mapValue):ni()}function Cs(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function As(e){return!!e&&"integerValue"in e}function ks(e){return!!e&&"arrayValue"in e}function Rs(e){return!!e&&"nullValue"in e}function Os(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ns(e){return!!e&&"mapValue"in e}function Ds(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Zi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ds(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ds(e.arrayValue.values[n]);return t}return Object.assign({},e)}function xs(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ps{constructor(e){this.value=e}static empty(){return new Ps({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ns(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(t)}setAll(e){let t=Si.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Ds(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Ns(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return _s(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ns(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Zi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Ps(Ds(this.value))}}function Ls(e){const t=[];return Zi(e.fields,((e,n)=>{const r=new Si([e]);if(Ns(n)){const e=Ls(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new os(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ms{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Ms(e,0,bi.min(),bi.min(),bi.min(),Ps.empty(),0)}static newFoundDocument(e,t,n,r){return new Ms(e,1,t,bi.min(),n,r,0)}static newNoDocument(e,t){return new Ms(e,2,t,bi.min(),bi.min(),Ps.empty(),0)}static newUnknownDocument(e,t){return new Ms(e,3,t,bi.min(),bi.min(),Ps.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(bi.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ps.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ps.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=bi.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ms&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ms(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t){this.position=e,this.inclusive=t}}function Us(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Ci.comparator(Ci.fromName(o.referenceValue),n.key):Es(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Vs(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!_s(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t="asc"){this.field=e,this.dir=t}}function Bs(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{}class qs extends $s{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Js(e,t,n):"array-contains"===t?new to(e,n):"in"===t?new no(e,n):"not-in"===t?new ro(e,n):"array-contains-any"===t?new io(e,n):new qs(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ys(e,n):new Zs(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Es(t,this.value)):null!==t&&ws(this.value)===ws(t)&&this.matchesComparison(Es(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ni()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zs extends $s{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new zs(e,t)}matches(e){return Ks(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Ks(e){return"and"===e.op}function Hs(e){return Gs(e)&&Ks(e)}function Gs(e){for(const t of e.filters)if(t instanceof zs)return!1;return!0}function Ws(e){if(e instanceof qs)return e.field.canonicalString()+e.op.toString()+Is(e.value);if(Hs(e))return e.filters.map((e=>Ws(e))).join(",");{const t=e.filters.map((e=>Ws(e))).join(",");return`${e.op}(${t})`}}function Qs(e,t){return e instanceof qs?function(e,t){return t instanceof qs&&e.op===t.op&&e.field.isEqual(t.field)&&_s(e.value,t.value)}(e,t):e instanceof zs?function(e,t){return t instanceof zs&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Qs(n,t.filters[r])),!0)}(e,t):void ni()}function Xs(e){return e instanceof qs?function(e){return`${e.field.canonicalString()} ${e.op} ${Is(e.value)}`}(e):e instanceof zs?function(e){return e.op.toString()+" {"+e.getFilters().map(Xs).join(" ,")+"}"}(e):"Filter"}class Js extends qs{constructor(e,t,n){super(e,t,n),this.key=Ci.fromName(n.referenceValue)}matches(e){const t=Ci.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ys extends qs{constructor(e,t){super(e,"in",t),this.keys=eo("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Zs extends qs{constructor(e,t){super(e,"not-in",t),this.keys=eo("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function eo(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ci.fromName(e.referenceValue)))}class to extends qs{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ks(t)&&bs(t.arrayValue,this.value)}}class no extends qs{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&bs(this.value.arrayValue,t)}}class ro extends qs{constructor(e,t){super(e,"not-in",t)}matches(e){if(bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!bs(this.value.arrayValue,t)}}class io extends qs{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ks(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>bs(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ce=null}}function oo(e,t=null,n=[],r=[],i=null,s=null,o=null){return new so(e,t,n,r,i,s,o)}function ao(e){const t=ii(e);if(null===t.ce){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Ws(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Hi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Is(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Is(e))).join(",")),t.ce=e}return t.ce}function co(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Bs(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Qs(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Vs(e.startAt,t.startAt)&&Vs(e.endAt,t.endAt)}function uo(e){return Ci.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lo{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function ho(e,t,n,r,i,s,o,a){return new lo(e,t,n,r,i,s,o,a)}function fo(e){return new lo(e)}function po(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function go(e){return null!==e.collectionGroup}function mo(e){const t=ii(e);if(null===t.le){t.le=[];const e=new Set;for(const i of t.explicitOrderBy)t.le.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc",r=function(e){let t=new is(Si.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t}(t);r.forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.le.push(new js(r,n))})),e.has(Si.keyField().canonicalString())||t.le.push(new js(Si.keyField(),n))}return t.le}function yo(e){const t=ii(e);return t.he||(t.he=vo(t,mo(e))),t.he}function vo(e,t){if("F"===e.limitType)return oo(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new js(e.field,t)}));const n=e.endAt?new Fs(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Fs(e.startAt.position,e.startAt.inclusive):null;return oo(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function wo(e,t){const n=e.filters.concat([t]);return new lo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function _o(e,t,n){return new lo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function bo(e,t){return co(yo(e),yo(t))&&e.limitType===t.limitType}function Eo(e){return`${ao(yo(e))}|lt:${e.limitType}`}function To(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Xs(e))).join(", ")}]`),Hi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Is(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Is(e))).join(",")),`Target(${t})`}(yo(e))}; limitType=${e.limitType})`}function Io(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ci.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of mo(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Us(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,mo(e),t))&&!(e.endAt&&!function(e,t,n){const r=Us(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,mo(e),t))}(e,t)}function So(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Co(e){return(t,n)=>{let r=!1;for(const i of mo(e)){const e=Ao(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Ao(e,t,n){const r=e.field.isKeyField()?Ci.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Es(r,i):ni()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ni()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Zi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return es(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new ts(Ci.comparator);function Oo(){return Ro}const No=new ts(Ci.comparator);function Do(...e){let t=No;for(const n of e)t=t.insert(n.key,n);return t}function xo(e){let t=No;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Po(){return Mo()}function Lo(){return Mo()}function Mo(){return new ko((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Fo=new ts(Ci.comparator),Uo=new is(Ci.comparator);function Vo(...e){let t=Uo;for(const n of e)t=t.add(n);return t}const jo=new is(vi);function Bo(){return jo}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gi(t)?"-0":t}}function qo(e){return{integerValue:""+e}}function zo(e,t){return Wi(t)?qo(t):$o(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this._=void 0}}function Ho(e,t,n){return e instanceof Qo?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&fs(t)&&(t=ps(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Xo?Jo(e,t):e instanceof Yo?Zo(e,t):function(e,t){const n=Wo(e,t),r=ta(n)+ta(e.Ie);return As(n)&&As(e.Ie)?qo(r):$o(e.serializer,r)}(e,t)}function Go(e,t,n){return e instanceof Xo?Jo(e,t):e instanceof Yo?Zo(e,t):n}function Wo(e,t){return e instanceof ea?function(e){return As(e)||function(e){return!!e&&"doubleValue"in e}(e)}(t)?t:{integerValue:0}:null}class Qo extends Ko{}class Xo extends Ko{constructor(e){super(),this.elements=e}}function Jo(e,t){const n=na(t);for(const r of e.elements)n.some((e=>_s(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Yo extends Ko{constructor(e){super(),this.elements=e}}function Zo(e,t){let n=na(t);for(const r of e.elements)n=n.filter((e=>!_s(e,r)));return{arrayValue:{values:n}}}class ea extends Ko{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function ta(e){return hs(e.integerValue||e.doubleValue)}function na(e){return ks(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Xo&&t instanceof Xo||e instanceof Yo&&t instanceof Yo?wi(e.elements,t.elements,_s):e instanceof ea&&t instanceof ea?_s(e.Ie,t.Ie):e instanceof Qo&&t instanceof Qo}(e.transform,t.transform)}class ia{constructor(e,t){this.version=e,this.transformResults=t}}class sa{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new sa}static exists(e){return new sa(void 0,e)}static updateTime(e){return new sa(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oa(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class aa{}function ca(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new va(e.key,sa.none()):new fa(e.key,e.data,sa.none());{const n=e.data,r=Ps.empty();let i=new is(Si.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new pa(e.key,r,new os(i.toArray()),sa.none())}}function ua(e,t,n){e instanceof fa?function(e,t,n){const r=e.value.clone(),i=ma(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof pa?function(e,t,n){if(!oa(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=ma(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(ga(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function la(e,t,n,r){return e instanceof fa?function(e,t,n,r){if(!oa(e.precondition,t))return n;const i=e.value.clone(),s=ya(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof pa?function(e,t,n,r){if(!oa(e.precondition,t))return n;const i=ya(e.fieldTransforms,r,t),s=t.data;return s.setAll(ga(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return oa(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function ha(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Wo(r.transform,e||null);null!=i&&(null===n&&(n=Ps.empty()),n.set(r.field,i))}return n||null}function da(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&wi(e,t,((e,t)=>ra(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class fa extends aa{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class pa extends aa{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ga(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function ma(e,t,n){const r=new Map;ri(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Go(o,a,n[i]))}return r}function ya(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Ho(e,s,t))}return r}class va extends aa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wa extends aa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&ua(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=la(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=la(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Lo();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=ca(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(bi.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Vo())}isEqual(e){return this.batchId===e.batchId&&wi(this.mutations,e.mutations,((e,t)=>da(e,t)))&&wi(this.baseMutations,e.baseMutations,((e,t)=>da(e,t)))}}class ba{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){ri(e.mutations.length===n.length);let r=function(){return Fo}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new ba(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ta{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ia,Sa;function Ca(e){switch(e){default:return ni();case si.CANCELLED:case si.UNKNOWN:case si.DEADLINE_EXCEEDED:case si.RESOURCE_EXHAUSTED:case si.INTERNAL:case si.UNAVAILABLE:case si.UNAUTHENTICATED:return!1;case si.INVALID_ARGUMENT:case si.NOT_FOUND:case si.ALREADY_EXISTS:case si.PERMISSION_DENIED:case si.FAILED_PRECONDITION:case si.ABORTED:case si.OUT_OF_RANGE:case si.UNIMPLEMENTED:case si.DATA_LOSS:return!0}}function Aa(e){if(void 0===e)return Zr("GRPC error has no .code"),si.UNKNOWN;switch(e){case Ia.OK:return si.OK;case Ia.CANCELLED:return si.CANCELLED;case Ia.UNKNOWN:return si.UNKNOWN;case Ia.DEADLINE_EXCEEDED:return si.DEADLINE_EXCEEDED;case Ia.RESOURCE_EXHAUSTED:return si.RESOURCE_EXHAUSTED;case Ia.INTERNAL:return si.INTERNAL;case Ia.UNAVAILABLE:return si.UNAVAILABLE;case Ia.UNAUTHENTICATED:return si.UNAUTHENTICATED;case Ia.INVALID_ARGUMENT:return si.INVALID_ARGUMENT;case Ia.NOT_FOUND:return si.NOT_FOUND;case Ia.ALREADY_EXISTS:return si.ALREADY_EXISTS;case Ia.PERMISSION_DENIED:return si.PERMISSION_DENIED;case Ia.FAILED_PRECONDITION:return si.FAILED_PRECONDITION;case Ia.ABORTED:return si.ABORTED;case Ia.OUT_OF_RANGE:return si.OUT_OF_RANGE;case Ia.UNIMPLEMENTED:return si.UNIMPLEMENTED;case Ia.DATA_LOSS:return si.DATA_LOSS;default:return ni()}}(Sa=Ia||(Ia={}))[Sa.OK=0]="OK",Sa[Sa.CANCELLED=1]="CANCELLED",Sa[Sa.UNKNOWN=2]="UNKNOWN",Sa[Sa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Sa[Sa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Sa[Sa.NOT_FOUND=5]="NOT_FOUND",Sa[Sa.ALREADY_EXISTS=6]="ALREADY_EXISTS",Sa[Sa.PERMISSION_DENIED=7]="PERMISSION_DENIED",Sa[Sa.UNAUTHENTICATED=16]="UNAUTHENTICATED",Sa[Sa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Sa[Sa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Sa[Sa.ABORTED=10]="ABORTED",Sa[Sa.OUT_OF_RANGE=11]="OUT_OF_RANGE",Sa[Sa.UNIMPLEMENTED=12]="UNIMPLEMENTED",Sa[Sa.INTERNAL=13]="INTERNAL",Sa[Sa.UNAVAILABLE=14]="UNAVAILABLE",Sa[Sa.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ka=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=new Hr([4294967295,4294967295],0);function Na(e){const t=Ra().encode(e),n=new Kr;return n.update(t),new Uint8Array(n.digest())}function Da(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Hr([n,r],0),new Hr([i,s],0)]}class xa{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Pa(`Invalid padding: ${t}`);if(n<0)throw new Pa(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Pa(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Pa(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=Hr.fromNumber(this.Te)}de(e,t,n){let r=e.add(t.multiply(Hr.fromNumber(n)));return 1===r.compare(Oa)&&(r=new Hr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;const t=Na(e),[n,r]=Da(t);for(let i=0;i<this.hashCount;i++){const e=this.de(n,r,i);if(!this.Ae(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new xa(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Te)return;const t=Na(e),[n,r]=Da(t);for(let i=0;i<this.hashCount;i++){const e=this.de(n,r,i);this.Re(e)}}Re(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Pa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Ma.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new La(bi.min(),r,new ts(vi),Oo(),Vo())}}class Ma{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Ma(n,t,Vo(),Vo(),Vo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t,n,r){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=r}}class Ua{constructor(e,t){this.targetId=e,this.fe=t}}class Va{constructor(e,t,n=cs.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ja{constructor(){this.ge=0,this.pe=qa(),this.ye=cs.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Vo(),t=Vo(),n=Vo();return this.pe.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ni()}})),new Ma(this.ye,this.we,e,t,n)}Fe(){this.Se=!1,this.pe=qa()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ri(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Ba{constructor(e){this.Le=e,this.ke=new Map,this.qe=Oo(),this.Qe=$a(),this.Ke=new ts(vi)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,(t=>{const n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.Ce(e.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(e.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(t);break;case 3:this.je(t)&&(n.Be(),n.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.Ce(e.resumeToken));break;default:ni()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach(((e,n)=>{this.je(n)&&t(n)}))}Je(e){const t=e.targetId,n=e.fe.count,r=this.Ye(t);if(r){const i=r.target;if(uo(i))if(0===n){const e=new Ci(i.path);this.We(t,e,Ms.newNoDocument(e,bi.min()))}else ri(1===n);else{const r=this.Ze(t);if(r!==n){const n=this.Xe(e),i=n?this.et(n,e,r):1;if(0!==i){this.He(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,e)}null==ka||ka.tt(function(e,t,n,r,i){var s,o,a,c,u,l;const h={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(h.bloomFilter={applied:0===i,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(l=null===(u=null==d?void 0:d.bits)||void 0===u?void 0:u.padding)&&void 0!==l?l:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),h}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,e.fe,this.Le.nt(),n,i))}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=ds(n).toUint8Array()}catch(e){if(e instanceof as)return ei("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new xa(s,r,i)}catch(e){return ei(e instanceof Pa?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Te?null:o}et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.Le.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),r++)})),r}it(e){const t=new Map;this.ke.forEach(((n,r)=>{const i=this.Ye(r);if(i){if(n.current&&uo(i.target)){const t=new Ci(i.target.path);null!==this.qe.get(t)||this.st(r,t)||this.We(r,t,Ms.newNoDocument(t,e))}n.De&&(t.set(r,n.ve()),n.Fe())}}));let n=Vo();this.Qe.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.qe.forEach(((t,n)=>n.setReadTime(e)));const r=new La(e,t,this.Ke,this.qe,n);return this.qe=Oo(),this.Qe=$a(),this.Ke=new ts(vi),r}Ue(e,t){if(!this.je(e))return;const n=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,n){if(!this.je(e))return;const r=this.ze(e);this.st(e,t)?r.Me(t,1):r.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new ja,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new is(vi),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=null!==this.Ye(e);return t||Yr("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new ja),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.We(e,t,null)}))}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function $a(){return new ts(Ci.comparator)}function qa(){return new ts(Ci.comparator)}const za=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Ka=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),Ha=(()=>{const e={and:"AND",or:"OR"};return e})();class Ga{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Wa(e,t){return e.useProto3Json||Hi(t)?t:{value:t}}function Qa(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Xa(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ja(e,t){return Qa(e,t.toTimestamp())}function Ya(e){return ri(!!e),bi.fromTimestamp(function(e){const t=ls(e);return new _i(t.seconds,t.nanos)}(e))}function Za(e,t){return ec(e,t).canonicalString()}function ec(e,t){const n=function(e){return new Ti(["projects",e.projectId,"databases",e.database])}(e).child("documents");return void 0===t?n:n.child(t)}function tc(e){const t=Ti.fromString(e);return ri(Ic(t)),t}function nc(e,t){return Za(e.databaseId,t.path)}function rc(e,t){const n=tc(t);if(n.get(1)!==e.databaseId.projectId)throw new oi(si.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new oi(si.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ci(ac(n))}function ic(e,t){return Za(e.databaseId,t)}function sc(e){const t=tc(e);return 4===t.length?Ti.emptyPath():ac(t)}function oc(e){return new Ti(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ac(e){return ri(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function cc(e,t,n){return{name:nc(e,t),fields:n.value.mapValue.fields}}function uc(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ni()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(ri(void 0===t||"string"==typeof t),cs.fromBase64String(t||"")):(ri(void 0===t||t instanceof Uint8Array),cs.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?si.UNKNOWN:Aa(e.code);return new oi(t,e.message||"")}(o);n=new Va(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=rc(e,r.document.name),s=Ya(r.document.updateTime),o=r.document.createTime?Ya(r.document.createTime):bi.min(),a=new Ps({mapValue:{fields:r.document.fields}}),c=Ms.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Fa(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=rc(e,r.document),s=r.readTime?Ya(r.readTime):bi.min(),o=Ms.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Fa([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=rc(e,r.document),s=r.removedTargetIds||[];n=new Fa([],s,i,null)}else{if(!("filter"in t))return ni();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Ta(r,i),o=e.targetId;n=new Ua(o,s)}}return n}function lc(e,t){let n;if(t instanceof fa)n={update:cc(e,t.key,t.value)};else if(t instanceof va)n={delete:nc(e,t.key)};else if(t instanceof pa)n={update:cc(e,t.key,t.data),updateMask:Tc(t.fieldMask)};else{if(!(t instanceof wa))return ni();n={verify:nc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Qo)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Xo)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Yo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ea)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw ni()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ja(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ni()}(e,t.precondition)),n}function hc(e,t){return e&&e.length>0?(ri(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ya(e.updateTime):Ya(t);return n.isEqual(bi.min())&&(n=Ya(t)),new ia(n,e.transformResults||[])}(e,t)))):[]}function dc(e,t){return{documents:[ic(e,t.path)]}}function fc(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ic(e,i);const s=function(e){if(0!==e.length)return Ec(zs.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:_c(e.field),direction:yc(e.dir)}}(e)))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Wa(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(e){return{before:e.inclusive,values:e.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ut:n,parent:i}}function pc(e){let t=sc(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ri(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=mc(e);return t instanceof zs&&Hs(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=function(e){return e.map((e=>function(e){return new js(bc(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e)))}(n.orderBy));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Hi(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Fs(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Fs(n,t)}(n.endAt)),ho(t,i,o,s,a,"F",c,u)}function gc(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ni()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}function mc(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=bc(e.unaryFilter.field);return qs.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=bc(e.unaryFilter.field);return qs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=bc(e.unaryFilter.field);return qs.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=bc(e.unaryFilter.field);return qs.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ni()}}(e):void 0!==e.fieldFilter?function(e){return qs.create(bc(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ni()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return zs.create(e.compositeFilter.filters.map((e=>mc(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ni()}}(e.compositeFilter.op))}(e):ni()}function yc(e){return za[e]}function vc(e){return Ka[e]}function wc(e){return Ha[e]}function _c(e){return{fieldPath:e.canonicalString()}}function bc(e){return Si.fromServerFormat(e.fieldPath)}function Ec(e){return e instanceof qs?function(e){if("=="===e.op){if(Os(e.value))return{unaryFilter:{field:_c(e.field),op:"IS_NAN"}};if(Rs(e.value))return{unaryFilter:{field:_c(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Os(e.value))return{unaryFilter:{field:_c(e.field),op:"IS_NOT_NAN"}};if(Rs(e.value))return{unaryFilter:{field:_c(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_c(e.field),op:vc(e.op),value:e.value}}}(e):e instanceof zs?function(e){const t=e.getFilters().map((e=>Ec(e)));return 1===t.length?t[0]:{compositeFilter:{op:wc(e.op),filters:t}}}(e):ni()}function Tc(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ic(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t,n,r,i=bi.min(),s=bi.min(),o=cs.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Sc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Sc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Sc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Sc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e){this.ct=e}}function Ac(e){const t=pc({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?_o(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(hs(e.integerValue));else if("doubleValue"in e){const n=hs(e.doubleValue);isNaN(n)?this.Et(t,13):(this.Et(t,15),Gi(n)?t.dt(0):t.dt(n))}else if("timestampValue"in e){const n=e.timestampValue;this.Et(t,20),"string"==typeof n?t.At(n):(t.At(`${n.seconds||""}`),t.dt(n.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(ds(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Et(t,45),t.dt(n.latitude||0),t.dt(n.longitude||0)}else"mapValue"in e?xs(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):ni()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const n=e.fields||{};this.Et(t,55);for(const r of Object.keys(n))this.Rt(r,t),this.It(n[r],t)}wt(e,t){const n=e.values||[];this.Et(t,50);for(const r of n)this.It(r,t)}gt(e,t){this.Et(t,37),Ci.fromName(e).path.forEach((e=>{this.Et(t,60),this.St(e,t)}))}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}kc.bt=new kc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rc{constructor(){this._n=new Oc}addToCollectionParentIndex(e,t){return this._n.add(t),Li.resolve()}getCollectionParents(e,t){return Li.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return Li.resolve()}deleteFieldIndex(e,t){return Li.resolve()}deleteAllFieldIndexes(e){return Li.resolve()}createTargetIndexes(e,t){return Li.resolve()}getDocumentsMatchingTarget(e,t){return Li.resolve(null)}getIndexType(e,t){return Li.resolve(0)}getFieldIndexes(e,t){return Li.resolve([])}getNextCollectionGroupToUpdate(e){return Li.resolve(null)}getMinOffset(e,t){return Li.resolve(Oi.min())}getMinOffsetFromCollectionGroup(e,t){return Li.resolve(Oi.min())}updateCollectionGroup(e,t,n){return Li.resolve()}updateIndexEntries(e,t){return Li.resolve()}}class Oc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new is(Ti.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new is(Ti.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Nc{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Nc(e,Nc.DEFAULT_COLLECTION_PERCENTILE,Nc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nc.DEFAULT_COLLECTION_PERCENTILE=10,Nc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nc.DEFAULT=new Nc(41943040,Nc.DEFAULT_COLLECTION_PERCENTILE,Nc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nc.DISABLED=new Nc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dc{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Dc(0)}static Bn(){return new Dc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xc{constructor(){this.changes=new ko((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ms.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Li.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pc{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&la(n.mutation,e,os.empty(),_i.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Vo()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Vo()){const r=Po();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Do();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Po();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Vo())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Oo();const s=Mo(),o=function(){return Mo()}();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof pa)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),la(o.mutation,t,o.mutation.getFieldMask(),_i.now())):s.set(t.key,os.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Pc(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Mo();let r=new ts(((e,t)=>e-t)),i=Vo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||os.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Vo()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Lo();c.forEach((e=>{if(!i.has(e)){const r=ca(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Li.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return function(e){return Ci.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):go(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Li.resolve(Po());let o=-1,a=i;return s.next((t=>Li.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Li.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Vo()))).next((e=>({batchId:o,changes:xo(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ci(t)).next((e=>{let t=Do();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=Do();return this.indexManager.getCollectionParents(e,i).next((o=>Li.forEach(o,(o=>{const a=function(e,t){return new lo(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Ms.newInvalidDocument(r)))}));let n=Do();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&la(s.mutation,r,os.empty(),_i.now()),Io(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return Li.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(e){return{id:e.id,version:e.version,createTime:Ya(e.createTime)}}(t)),Li.resolve()}getNamedQuery(e,t){return Li.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(e){return{name:e.name,query:Ac(e.bundledQuery),readTime:Ya(e.readTime)}}(t)),Li.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this.overlays=new ts(Ci.comparator),this.hr=new Map}getOverlay(e,t){return Li.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Po();return Li.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ht(e,t,r)})),Li.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.hr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.hr.delete(n)),Li.resolve()}getOverlaysForCollection(e,t,n){const r=Po(),i=t.length+1,s=new Ci(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Li.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new ts(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Po(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Po(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Li.resolve(o)}ht(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.hr.get(r.largestBatchId).delete(n.key);this.hr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Ea(t,n));let i=this.hr.get(t);void 0===i&&(i=Vo(),this.hr.set(t,i)),this.hr.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this.Pr=new is(Vc.Ir),this.Tr=new is(Vc.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const n=new Vc(e,t);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.Ar(new Vc(e,t))}Rr(e,t){e.forEach((e=>this.removeReference(e,t)))}Vr(e){const t=new Ci(new Ti([])),n=new Vc(t,e),r=new Vc(t,e+1),i=[];return this.Tr.forEachInRange([n,r],(e=>{this.Ar(e),i.push(e.key)})),i}mr(){this.Pr.forEach((e=>this.Ar(e)))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new Ci(new Ti([])),n=new Vc(t,e),r=new Vc(t,e+1);let i=Vo();return this.Tr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Vc(e,0),n=this.Pr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Vc{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return Ci.comparator(e.key,t.key)||vi(e.pr,t.pr)}static Er(e,t){return vi(e.pr,t.pr)||Ci.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new is(Vc.Ir)}checkEmpty(e){return Li.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new _a(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.wr=this.wr.add(new Vc(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Li.resolve(s)}lookupMutationBatch(e,t){return Li.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.br(n),i=r<0?0:r;return Li.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Li.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(e){return Li.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Vc(t,0),r=new Vc(t,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,r],(e=>{const t=this.Sr(e.pr);i.push(t)})),Li.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new is(vi);return t.forEach((e=>{const t=new Vc(e,0),r=new Vc(e,Number.POSITIVE_INFINITY);this.wr.forEachInRange([t,r],(e=>{n=n.add(e.pr)}))})),Li.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Ci.isDocumentKey(i)||(i=i.child(""));const s=new Vc(new Ci(i),0);let o=new is(vi);return this.wr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.pr)),!0)}),s),Li.resolve(this.Dr(o))}Dr(e){const t=[];return e.forEach((e=>{const n=this.Sr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ri(0===this.Cr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return Li.forEach(t.mutations,(r=>{const i=new Vc(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.wr=n}))}Mn(e){}containsKey(e,t){const n=new Vc(t,0),r=this.wr.firstAfterOrEqual(n);return Li.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Li.resolve()}Cr(e,t){return this.br(e)}br(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.vr=e,this.docs=function(){return new ts(Ci.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.vr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Li.resolve(n?n.document.mutableCopy():Ms.newInvalidDocument(t))}getEntries(e,t){let n=Oo();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Ms.newInvalidDocument(e))})),Li.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Oo();const s=t.path,o=new Ci(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Ni(Ri(o),n)<=0||(r.has(o.key)||Io(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Li.resolve(i)}getAllFromCollectionGroup(e,t,n,r){ni()}Fr(e,t){return Li.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new $c(this)}getSize(e){return Li.resolve(this.size)}}class $c extends xc{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.ar.addEntry(e,r)):this.ar.removeEntry(n)})),Li.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.persistence=e,this.Mr=new ko((e=>ao(e)),co),this.lastRemoteSnapshotVersion=bi.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Uc,this.targetCount=0,this.Br=Dc.Nn()}forEachTarget(e,t){return this.Mr.forEach(((e,n)=>t(n))),Li.resolve()}getLastRemoteSnapshotVersion(e){return Li.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Li.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),Li.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Or&&(this.Or=t),Li.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Br=new Dc(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,Li.resolve()}updateTargetData(e,t){return this.qn(t),Li.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,Li.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Mr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Mr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Li.waitFor(i).next((()=>r))}getTargetCount(e){return Li.resolve(this.targetCount)}getTargetData(e,t){const n=this.Mr.get(t)||null;return Li.resolve(n)}addMatchingKeys(e,t,n){return this.Nr.dr(t,n),Li.resolve()}removeMatchingKeys(e,t,n){this.Nr.Rr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Li.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),Li.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Nr.gr(t);return Li.resolve(n)}containsKey(e,t){return Li.resolve(this.Nr.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t){this.Lr={},this.overlays={},this.kr=new Ki(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new qc(this),this.indexManager=new Rc,this.remoteDocumentCache=function(e){return new Bc(e)}((e=>this.referenceDelegate.Kr(e))),this.serializer=new Cc(t),this.$r=new Mc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Fc,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Lr[e.toKey()];return n||(n=new jc(t,this.referenceDelegate),this.Lr[e.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,n){Yr("MemoryPersistence","Starting transaction:",e);const r=new Kc(this.kr.next());return this.referenceDelegate.Ur(),n(r).next((e=>this.referenceDelegate.Wr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Gr(e,t){return Li.or(Object.values(this.Lr).map((n=>()=>n.containsKey(e,t))))}}class Kc extends xi{constructor(e){super(),this.currentSequenceNumber=e}}class Hc{constructor(e){this.persistence=e,this.zr=new Uc,this.jr=null}static Hr(e){return new Hc(e)}get Jr(){if(this.jr)return this.jr;throw ni()}addReference(e,t,n){return this.zr.addReference(n,t),this.Jr.delete(n.toString()),Li.resolve()}removeReference(e,t,n){return this.zr.removeReference(n,t),this.Jr.add(n.toString()),Li.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),Li.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach((e=>this.Jr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Jr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Li.forEach(this.Jr,(n=>{const r=Ci.fromPath(n);return this.Yr(e,r).next((e=>{e||t.removeEntry(r,bi.min())}))})).next((()=>(this.jr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Yr(e,t).next((e=>{e?this.Jr.delete(t.toString()):this.Jr.add(t.toString())}))}Kr(e){return 0}Yr(e,t){return Li.or([()=>Li.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gc{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.qi=n,this.Qi=r}static Ki(e,t){let n=Vo(),r=Vo();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Gc(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return(0,a.nr)()?8:Fi.v((0,a.ZQ)())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.ji(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Hi(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new Wc;return this.Ji(e,t,n).next((r=>{if(i.result=r,this.Ui)return this.Yi(e,t,n,r.size)}))})).next((()=>i.result))}Yi(e,t,n,r){return n.documentReadCount<this.Wi?(Jr()<=o.$b.DEBUG&&Yr("QueryEngine","SDK will not create cache indexes for query:",To(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),Li.resolve()):(Jr()<=o.$b.DEBUG&&Yr("QueryEngine","Query:",To(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Gi*r?(Jr()<=o.$b.DEBUG&&Yr("QueryEngine","The SDK decides to create cache indexes for query:",To(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yo(t))):Li.resolve())}ji(e,t){if(po(t))return Li.resolve(null);let n=yo(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=_o(t,null,"F"),n=yo(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Vo(...r);return this.zi.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Zi(t,r);return this.Xi(t,s,i,n.readTime)?this.ji(e,_o(t,null,"F")):this.es(e,s,t,n)}))))})))))}Hi(e,t,n,r){return po(t)||r.isEqual(bi.min())?Li.resolve(null):this.zi.getDocuments(e,n).next((i=>{const s=this.Zi(t,i);return this.Xi(t,s,n,r)?Li.resolve(null):(Jr()<=o.$b.DEBUG&&Yr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),To(t)),this.es(e,s,t,ki(r,-1)).next((e=>e)))}))}Zi(e,t){let n=new is(Co(e));return t.forEach(((t,r)=>{Io(e,r)&&(n=n.add(r))})),n}Xi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ji(e,t,n){return Jr()<=o.$b.DEBUG&&Yr("QueryEngine","Using full collection scan to execute query:",To(t)),this.zi.getDocumentsMatchingQuery(e,t,Oi.min(),n)}es(e,t,n,r){return this.zi.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t,n,r){this.persistence=e,this.ts=t,this.serializer=r,this.ns=new ts(vi),this.rs=new ko((e=>ao(e)),co),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(n)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Lc(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ns)))}}function Jc(e,t,n,r){return new Xc(e,t,n,r)}async function Yc(e,t){const n=ii(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n._s(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Vo();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({us:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Zc(e,t){const n=ii(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Li.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);ri(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Vo();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function eu(e){const t=ii(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Qr.getLastRemoteSnapshotVersion(e)))}function tu(e,t){const n=ii(e),r=t.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Qr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Qr.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(cs.EMPTY_BYTE_STRING,bi.min()).withLastLimboFreeSnapshotVersion(bi.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Qr.updateTargetData(e,u))}));let a=Oo(),c=Vo();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(nu(e,s,t.documentUpdates).next((e=>{a=e.cs,c=e.ls}))),!r.isEqual(bi.min())){const t=n.Qr.getLastRemoteSnapshotVersion(e).next((t=>n.Qr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Li.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.ns=i,e)))}function nu(e,t,n){let r=Vo(),i=Vo();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Oo();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(bi.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Yr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{cs:r,ls:i}}))}function ru(e,t){const n=ii(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function iu(e,t){const n=ii(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Qr.getTargetData(e,t).next((i=>i?(r=i,Li.resolve(r)):n.Qr.allocateTargetId(e).next((i=>(r=new Sc(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Qr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.ns.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ns=n.ns.insert(e.targetId,e),n.rs.set(t,e.targetId)),e}))}async function su(e,t,n){const r=ii(e),i=r.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!ji(e))throw e;Yr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function ou(e,t,n){const r=ii(e);let i=bi.min(),s=Vo();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=ii(e),i=r.rs.get(n);return void 0!==i?Li.resolve(r.ns.get(i)):r.Qr.getTargetData(t,n)}(r,e,yo(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.ts.getDocumentsMatchingQuery(e,t,n?i:bi.min(),n?s:Vo()))).next((e=>(au(r,So(t),e),{documents:e,hs:s})))))}function au(e,t,n){let r=e.ss.get(t)||bi.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.ss.set(t,r)}class cu{constructor(){this.activeTargetIds=Bo()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uu{constructor(){this.no=new cu,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,n){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new cu,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{io(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Yr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Yr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let du=null;function fu(){return null===du?du=function(){return 268435456+Math.round(2147483648*Math.random())}():du++,"0x"+du.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const pu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="WebChannelConnection";class yu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.fo=t+"://"+e.host,this.po=`projects/${n}/databases/${r}`,this.yo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get wo(){return!1}So(e,t,n,r,i){const s=fu(),o=this.bo(e,t.toUriEncodedString());Yr("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(a,r,i),this.Co(e,o,a,n).then((t=>(Yr("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw ei("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,r,i,s){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}bo(e,t){const n=pu[e];return`${this.fo}/v1/${t}:${n}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,t,n,r){const i=fu();return new Promise(((s,o)=>{const a=new zr;a.setWithCredentials(!0),a.listenOnce(jr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Vr.NO_ERROR:const t=a.getResponseJson();Yr(mu,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case Vr.TIMEOUT:Yr(mu,`RPC '${e}' ${i} timed out`),o(new oi(si.DEADLINE_EXCEEDED,"Request time out"));break;case Vr.HTTP_ERROR:const n=a.getStatus();if(Yr(mu,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(si).indexOf(t)>=0?t:si.UNKNOWN}(t.status);o(new oi(e,t.message))}else o(new oi(si.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new oi(si.UNAVAILABLE,"Connection failed."));break;default:ni()}}finally{Yr(mu,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);Yr(mu,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Fo(e,t,n){const r=fu(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Fr(),o=Ur(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Yr(mu,`Creating RPC '${e}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,d=!1;const f=new gu({lo:t=>{d?Yr(mu,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(Yr(mu,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),Yr(mu,`RPC '${e}' stream ${r} sending:`,t),l.send(t))},ho:()=>l.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(l,qr.EventType.OPEN,(()=>{d||Yr(mu,`RPC '${e}' stream ${r} transport opened.`)})),p(l,qr.EventType.CLOSE,(()=>{d||(d=!0,Yr(mu,`RPC '${e}' stream ${r} transport closed`),f.Vo())})),p(l,qr.EventType.ERROR,(t=>{d||(d=!0,ei(mu,`RPC '${e}' stream ${r} transport errored:`,t),f.Vo(new oi(si.UNAVAILABLE,"The operation could not be completed")))})),p(l,qr.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];ri(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Yr(mu,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Ia[e];if(void 0!==t)return Aa(t)}(t),i=o.message;void 0===n&&(n=si.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.Vo(new oi(n,i)),l.close()}else Yr(mu,`RPC '${e}' stream ${r} received:`,i),f.mo(i)}})),p(o,Br.STAT_EVENT,(t=>{t.stat===$r.PROXY?Yr(mu,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===$r.NOPROXY&&Yr(mu,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.Ro()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(e){return new Ga(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t,n=1e3,r=1.5,i=6e4){this.oi=e,this.timerId=t,this.Mo=n,this.xo=r,this.Oo=i,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const t=Math.floor(this.No+this.Qo()),n=Math.max(0,Date.now()-this.Lo),r=Math.max(0,t-n);r>0&&Yr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.No} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,r,(()=>(this.Lo=Date.now(),e()))),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){null!==this.Bo&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){null!==this.Bo&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t,n,r,i,s,o,a){this.oi=e,this.$o=n,this.Uo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new _u(e,t)}Ho(){return 1===this.state||5===this.state||this.Jo()}Jo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&null===this.Go&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,(()=>this.e_())))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,t){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,4!==e?this.jo.reset():t&&t.code===si.RESOURCE_EXHAUSTED?(Zr(t.toString()),Zr("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):t&&t.code===si.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(t)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),t=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Wo===t&&this.o_(e,n)}),(t=>{e((()=>{const e=new oi(si.UNKNOWN,"Fetching auth token failed: "+t.message);return this.__(e)}))}))}o_(e,t){const n=this.s_(this.Wo);this.stream=this.a_(e,t),this.stream.Po((()=>{n((()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,(()=>(this.Jo()&&(this.state=3),Promise.resolve()))),this.listener.Po())))})),this.stream.To((e=>{n((()=>this.__(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Yo(){this.state=5,this.jo.qo((async()=>{this.state=0,this.start()}))}__(e){return Yr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return t=>{this.oi.enqueueAndForget((()=>this.Wo===e?t():(Yr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Eu extends bu{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}a_(e,t){return this.connection.Fo("Listen",e,t)}onMessage(e){this.jo.reset();const t=uc(this.serializer,e),n=function(e){if(!("targetChange"in e))return bi.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?bi.min():t.readTime?Ya(t.readTime):bi.min()}(e);return this.listener.u_(t,n)}c_(e){const t={};t.database=oc(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=uo(r)?{documents:dc(e,r)}:{query:fc(e,r).ut},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Xa(e,t.resumeToken);const r=Wa(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(bi.min())>0){n.readTime=Qa(e,t.snapshotVersion.toTimestamp());const r=Wa(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=gc(this.serializer,e);n&&(t.labels=n),this.t_(t)}l_(e){const t={};t.database=oc(this.serializer),t.removeTarget=e,this.t_(t)}}class Tu extends bu{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,t){return this.connection.Fo("Write",e,t)}onMessage(e){if(ri(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const t=hc(e.writeResults,e.commitTime),n=Ya(e.commitTime);return this.listener.T_(n,t)}return ri(!e.writeResults||0===e.writeResults.length),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=oc(this.serializer),this.t_(e)}I_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>lc(this.serializer,e)))};this.t_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.A_=!1}R_(){if(this.A_)throw new oi(si.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.So(e,ec(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===si.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new oi(si.UNKNOWN,e.toString())}))}vo(e,t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.vo(e,ec(t,n),r,s,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===si.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new oi(si.UNKNOWN,e.toString())}))}terminate(){this.A_=!0,this.connection.terminate()}}class Su{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){0===this.m_&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve()))))}S_(e){"Online"===this.state?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,"Online"===e&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Zr(t),this.g_=!1):Yr("OnlineStateTracker",t)}b_(){null!==this.f_&&(this.f_.cancel(),this.f_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io((e=>{n.enqueueAndForget((async()=>{Lu(this)&&(Yr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ii(e);t.v_.add(4),await ku(t),t.x_.set("Unknown"),t.v_.delete(4),await Au(t)}(this))}))})),this.x_=new Su(n,r)}}async function Au(e){if(Lu(e))for(const t of e.F_)await t(!0)}async function ku(e){for(const t of e.F_)await t(!1)}function Ru(e,t){const n=ii(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),Pu(n)?xu(n):Zu(n).Jo()&&Nu(n,t))}function Ou(e,t){const n=ii(e),r=Zu(n);n.C_.delete(t),r.Jo()&&Du(n,t),0===n.C_.size&&(r.Jo()?r.Xo():Lu(n)&&n.x_.set("Unknown"))}function Nu(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(bi.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Zu(e).c_(t)}function Du(e,t){e.O_.Oe(t),Zu(e).l_(t)}function xu(e){e.O_=new Ba({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Zu(e).start(),e.x_.p_()}function Pu(e){return Lu(e)&&!Zu(e).Ho()&&e.C_.size>0}function Lu(e){return 0===ii(e).v_.size}function Mu(e){e.O_=void 0}async function Fu(e){e.C_.forEach(((t,n)=>{Nu(e,t)}))}async function Uu(e,t){Mu(e),Pu(e)?(e.x_.S_(t),xu(e)):e.x_.set("Unknown")}async function Vu(e,t,n){if(e.x_.set("Online"),t instanceof Va&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.C_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.C_.delete(r),e.O_.removeTarget(r))}(e,t)}catch(n){Yr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ju(e,n)}else if(t instanceof Fa?e.O_.$e(t):t instanceof Ua?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(bi.min()))try{const t=await eu(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.O_.it(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.C_.get(r);i&&e.C_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.C_.get(t);if(!r)return;e.C_.set(t,r.withResumeToken(cs.EMPTY_BYTE_STRING,r.snapshotVersion)),Du(e,t);const i=new Sc(r.target,t,n,r.sequenceNumber);Nu(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Yr("RemoteStore","Failed to raise snapshot:",t),await ju(e,t)}}async function ju(e,t,n){if(!ji(t))throw t;e.v_.add(1),await ku(e),e.x_.set("Offline"),n||(n=()=>eu(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Yr("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Au(e)}))}function Bu(e,t){return t().catch((n=>ju(e,n,t)))}async function $u(e){const t=ii(e),n=el(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;qu(t);)try{const e=await ru(t.localStore,r);if(null===e){0===t.D_.length&&n.Xo();break}r=e.batchId,zu(t,e)}catch(e){await ju(t,e)}Ku(t)&&Hu(t)}function qu(e){return Lu(e)&&e.D_.length<10}function zu(e,t){e.D_.push(t);const n=el(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function Ku(e){return Lu(e)&&!el(e).Ho()&&e.D_.length>0}function Hu(e){el(e).start()}async function Gu(e){el(e).d_()}async function Wu(e){const t=el(e);for(const n of e.D_)t.I_(n.mutations)}async function Qu(e,t,n){const r=e.D_.shift(),i=ba.from(r,t,n);await Bu(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await $u(e)}async function Xu(e,t){t&&el(e).P_&&await async function(e,t){if(function(e){return Ca(e)&&e!==si.ABORTED}(t.code)){const n=e.D_.shift();el(e).Zo(),await Bu(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await $u(e)}}(e,t),Ku(e)&&Hu(e)}async function Ju(e,t){const n=ii(e);n.asyncQueue.verifyOperationInProgress(),Yr("RemoteStore","RemoteStore received new credentials");const r=Lu(n);n.v_.add(3),await ku(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Au(n)}async function Yu(e,t){const n=ii(e);t?(n.v_.delete(2),await Au(n)):t||(n.v_.add(2),await ku(n),n.x_.set("Unknown"))}function Zu(e){return e.N_||(e.N_=function(e,t,n){const r=ii(e);return r.R_(),new Eu(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Po:Fu.bind(null,e),To:Uu.bind(null,e),u_:Vu.bind(null,e)}),e.F_.push((async t=>{t?(e.N_.Zo(),Pu(e)?xu(e):e.x_.set("Unknown")):(await e.N_.stop(),Mu(e))}))),e.N_}function el(e){return e.B_||(e.B_=function(e,t,n){const r=ii(e);return r.R_(),new Tu(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Po:Gu.bind(null,e),To:Xu.bind(null,e),E_:Wu.bind(null,e),T_:Qu.bind(null,e)}),e.F_.push((async t=>{t?(e.B_.Zo(),await $u(e)):(await e.B_.stop(),e.D_.length>0&&(Yr("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))}))),e.B_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class tl{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new tl(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new oi(si.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nl(e,t){if(Zr("AsyncQueue",`${t}: ${e}`),ji(e))return new oi(si.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ci.comparator(t.key,n.key):(e,t)=>Ci.comparator(e.key,t.key),this.keyedMap=Do(),this.sortedSet=new ts(this.comparator)}static emptySet(e){return new rl(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rl))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new rl;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(){this.L_=new ts(Ci.comparator)}track(e){const t=e.doc.key,n=this.L_.get(t);n?0!==e.type&&3===n.type?this.L_=this.L_.insert(t,e):3===e.type&&1!==n.type?this.L_=this.L_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.L_=this.L_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.L_=this.L_.remove(t):1===e.type&&2===n.type?this.L_=this.L_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.L_=this.L_.insert(t,{type:2,doc:e.doc}):ni():this.L_=this.L_.insert(t,e)}k_(){const e=[];return this.L_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class sl{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new sl(e,t,rl.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.q_=void 0,this.Q_=[]}}class al{constructor(){this.queries=new ko((e=>Eo(e)),bo),this.onlineState="Unknown",this.K_=new Set}}async function cl(e,t){const n=ii(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new ol),i)try{s.q_=await n.onListen(r)}catch(e){const n=nl(e,`Initialization of query '${To(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.Q_.push(t),t.U_(n.onlineState),s.q_&&t.W_(s.q_)&&dl(n)}async function ul(e,t){const n=ii(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.Q_.indexOf(t);e>=0&&(s.Q_.splice(e,1),i=0===s.Q_.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function ll(e,t){const n=ii(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.Q_)e.W_(i)&&(r=!0);t.q_=i}}r&&dl(n)}function hl(e,t,n){const r=ii(e),i=r.queries.get(t);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(t)}function dl(e){e.K_.forEach((e=>{e.next()}))}class fl{constructor(e,t,n){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}W_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new sl(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Z_||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}H_(e){if(e.docChanges.length>0)return!0;const t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Y_(e){e=sl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pl{constructor(e){this.key=e}}class gl{constructor(e){this.key=e}}class ml{constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=Vo(),this.mutatedKeys=Vo(),this.ua=Co(e),this.ca=new rl(this.ua)}get la(){return this.oa}ha(e,t){const n=t?t.Pa:new il,r=t?t.ca:this.ca;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Io(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Ia(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.ua(l,a)>0||c&&this.ua(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ca:s,Pa:n,Xi:o,mutatedKeys:i}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const s=e.Pa.k_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ni()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.ua(e.doc,t.doc))),this.Ta(n),r=null!=r&&r;const o=t&&!r?this.Ea():[],a=0===this.aa.size&&this.current&&!r?1:0,c=a!==this._a;return this._a=a,0!==s.length||c?{snapshot:new sl(this.query,e.ca,i,s,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),da:o}:{da:o}}U_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new il,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach((e=>this.oa=this.oa.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.oa=this.oa.delete(e))),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=Vo(),this.ca.forEach((e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))}));const t=[];return e.forEach((e=>{this.aa.has(e)||t.push(new gl(e))})),this.aa.forEach((n=>{e.has(n)||t.push(new pl(n))})),t}Ra(e){this.oa=e.hs,this.aa=Vo();const t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return sl.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}}class yl{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class vl{constructor(e){this.key=e,this.ma=!1}}class wl{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new ko((e=>Eo(e)),bo),this.pa=new Map,this.ya=new Set,this.wa=new ts(Ci.comparator),this.Sa=new Map,this.ba=new Uc,this.Da={},this.Ca=new Map,this.va=Dc.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return!0===this.Fa}}async function _l(e,t){const n=Vl(e);let r,i;const s=n.ga.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const e=await iu(n.localStore,yo(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await bl(n,t,r,"current"===s,e.resumeToken),n.isPrimaryClient&&Ru(n.remoteStore,e)}return i}async function bl(e,t,n,r,i){e.Ma=(t,n,r)=>async function(e,t,n,r){let i=t.view.ha(n);i.Xi&&(i=await ou(e.localStore,t.query,!1).then((({documents:e})=>t.view.ha(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return xl(e,t.targetId,a.da),a.snapshot}(e,t,n,r);const s=await ou(e.localStore,t,!0),o=new ml(t,s.hs),a=o.ha(s.documents),c=Ma.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);xl(e,n,u.da);const l=new yl(t,n,o);return e.ga.set(t,l),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),u.snapshot}async function El(e,t){const n=ii(e),r=n.ga.get(t),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter((e=>!bo(e,t)))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await su(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Ou(n.remoteStore,r.targetId),Nl(n,r.targetId)})).catch(Pi)):(Nl(n,r.targetId),await su(n.localStore,r.targetId,!0))}async function Tl(e,t,n){const r=jl(e);try{const e=await function(e,t){const n=ii(e),r=_i.now(),i=t.reduce(((e,t)=>e.add(t.key)),Vo());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Oo(),c=Vo();return n.os.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=ha(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new pa(e.key,t,Ls(t.value.mapValue),sa.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:xo(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Da[e.currentUser.toKey()];r||(r=new ts(vi)),r=r.insert(t,n),e.Da[e.currentUser.toKey()]=r}(r,e.batchId,n),await Ml(r,e.changes),await $u(r.remoteStore)}catch(e){const t=nl(e,"Failed to persist write");n.reject(t)}}async function Il(e,t){const n=ii(e);try{const e=await tu(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Sa.get(t);r&&(ri(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.ma=!0:e.modifiedDocuments.size>0?ri(r.ma):e.removedDocuments.size>0&&(ri(r.ma),r.ma=!1))})),await Ml(n,e,t)}catch(e){await Pi(e)}}function Sl(e,t,n){const r=ii(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ga.forEach(((n,r)=>{const i=r.view.U_(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=ii(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.Q_)i.U_(t)&&(r=!0)})),r&&dl(n)}(r.eventManager,t),e.length&&r.fa.u_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Cl(e,t,n){const r=ii(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Sa.get(t),s=i&&i.key;if(s){let e=new ts(Ci.comparator);e=e.insert(s,Ms.newNoDocument(s,bi.min()));const n=Vo().add(s),i=new La(bi.min(),new Map,new ts(vi),e,n);await Il(r,i),r.wa=r.wa.remove(s),r.Sa.delete(t),Ll(r)}else await su(r.localStore,t,!1).then((()=>Nl(r,t,n))).catch(Pi)}async function Al(e,t){const n=ii(e),r=t.batch.batchId;try{const e=await Zc(n.localStore,t);Ol(n,r,null),Rl(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ml(n,e)}catch(e){await Pi(e)}}async function kl(e,t,n){const r=ii(e);try{const e=await function(e,t){const n=ii(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(ri(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Ol(r,t,n),Rl(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ml(r,e)}catch(n){await Pi(n)}}function Rl(e,t){(e.Ca.get(t)||[]).forEach((e=>{e.resolve()})),e.Ca.delete(t)}function Ol(e,t,n){const r=ii(e);let i=r.Da[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Da[r.currentUser.toKey()]=i}}function Nl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach((t=>{e.ba.containsKey(t)||Dl(e,t)}))}function Dl(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);null!==n&&(Ou(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),Ll(e))}function xl(e,t,n){for(const r of n)r instanceof pl?(e.ba.addReference(r.key,t),Pl(e,r)):r instanceof gl?(Yr("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||Dl(e,r.key)):ni()}function Pl(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(Yr("SyncEngine","New document in limbo: "+n),e.ya.add(r),Ll(e))}function Ll(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new Ci(Ti.fromString(t)),r=e.va.next();e.Sa.set(r,new vl(n)),e.wa=e.wa.insert(n,r),Ru(e.remoteStore,new Sc(yo(fo(n.path)),r,"TargetPurposeLimboResolution",Ki._e))}}async function Ml(e,t,n){const r=ii(e),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach(((e,a)=>{o.push(r.Ma(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Gc.Ki(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.fa.u_(i),await async function(e,t){const n=ii(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Li.forEach(t,(t=>Li.forEach(t.qi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Li.forEach(t.Qi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!ji(e))throw e;Yr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.ns.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.ns=n.ns.insert(e,i)}}}(r.localStore,s))}async function Fl(e,t){const n=ii(e);if(!n.currentUser.isEqual(t)){Yr("SyncEngine","User change. New user:",t.toKey());const e=await Yc(n.localStore,t);n.currentUser=t,function(e,t){e.Ca.forEach((e=>{e.forEach((e=>{e.reject(new oi(si.CANCELLED,t))}))})),e.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Ml(n,e.us)}}function Ul(e,t){const n=ii(e),r=n.Sa.get(t);if(r&&r.ma)return Vo().add(r.key);{let e=Vo();const r=n.pa.get(t);if(!r)return e;for(const t of r){const r=n.ga.get(t);e=e.unionWith(r.view.la)}return e}}function Vl(e){const t=ii(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Il.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ul.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Cl.bind(null,t),t.fa.u_=ll.bind(null,t.eventManager),t.fa.xa=hl.bind(null,t.eventManager),t}function jl(e){const t=ii(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Al.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=kl.bind(null,t),t}class Bl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=wu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Jc(this.persistence,new Qc,e.initialUser,this.serializer)}createPersistence(e){return new zc(Hc.Hr,this.serializer)}createSharedClientState(e){return new uu}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $l{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Sl(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fl.bind(null,this.syncEngine),await Yu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new al}()}createDatastore(e){const t=wu(e.databaseInfo.databaseId),n=function(e){return new yu(e)}(e.databaseInfo);return function(e,t,n,r){return new Iu(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(e,t,n,r,i){return new Cu(e,t,n,r,i)}(this.localStore,this.datastore,e.asyncQueue,(e=>Sl(this.syncEngine,e,0)),function(){return hu.D()?new hu:new lu}())}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new wl(e,t,n,r,i,s);return o&&(a.Fa=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(e){const t=ii(e);Yr("RemoteStore","RemoteStore shutting down."),t.v_.add(5),await ku(t),t.M_.shutdown(),t.x_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ql{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):Zr("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zl{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Wr.UNAUTHENTICATED,this.clientId=yi.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Yr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Yr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new oi(si.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ai;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=nl(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Kl(e,t){e.asyncQueue.verifyOperationInProgress(),Yr("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Yc(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Hl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Wl(e);Yr("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>Ju(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Ju(t.remoteStore,n))),e._onlineComponents=t}function Gl(e){return"FirebaseError"===e.name?e.code===si.FAILED_PRECONDITION||e.code===si.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Wl(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Yr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kl(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Gl(n))throw n;ei("Error using user provided cache. Falling back to memory cache: "+n),await Kl(e,new Bl)}}else Yr("FirestoreClient","Using default OfflineComponentProvider"),await Kl(e,new Bl);return e._offlineComponents}async function Ql(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Yr("FirestoreClient","Using user provided OnlineComponentProvider"),await Hl(e,e._uninitializedComponentsProvider._online)):(Yr("FirestoreClient","Using default OnlineComponentProvider"),await Hl(e,new $l))),e._onlineComponents}function Xl(e){return Ql(e).then((e=>e.syncEngine))}async function Jl(e){const t=await Ql(e),n=t.eventManager;return n.onListen=_l.bind(null,t.syncEngine),n.onUnlisten=El.bind(null,t.syncEngine),n}function Yl(e,t,n={}){const r=new ai;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new ql({next:s=>{t.enqueueAndForget((()=>ul(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new oi(si.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new oi(si.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new fl(fo(n.path),s,{includeMetadataChanges:!0,Z_:!0});return cl(e,o)}(await Jl(e),e.asyncQueue,t,n,r))),r.promise}function Zl(e,t,n={}){const r=new ai;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new ql({next:n=>{t.enqueueAndForget((()=>ul(e,o))),n.fromCache&&"server"===r.source?i.reject(new oi(si.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new fl(n,s,{includeMetadataChanges:!0,Z_:!0});return cl(e,o)}(await Jl(e),e.asyncQueue,t,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function eh(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const th=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(e,t,n){if(!n)throw new oi(si.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function rh(e,t,n,r){if(!0===t&&!0===r)throw new oi(si.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function ih(e){if(!Ci.isDocumentKey(e))throw new oi(si.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function sh(e){if(Ci.isDocumentKey(e))throw new oi(si.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oh(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ni()}function ah(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new oi(si.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oh(e);throw new oi(si.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ch{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new oi(si.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new oi(si.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rh("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eh(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new oi(si.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new oi(si.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new oi(si.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(e,t){return e.timeoutSeconds===t.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uh{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ch({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new oi(si.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new oi(si.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ch(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ui;switch(e.type){case"firstParty":return new fi(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new oi(si.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=th.get(e);t&&(Yr("ComponentProvider","Removing Datastore"),th.delete(e),t.terminate())}(this),Promise.resolve()}}function lh(e,t,n,r={}){var i;const s=(e=ah(e,uh))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Wr.MOCK_USER;else{t=(0,a.Fy)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new oi(si.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Wr(s)}e._authCredentials=new li(new ci(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new hh(this.firestore,e,this._query)}}class dh{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dh(this.firestore,e,this._key)}}class fh extends hh{constructor(e,t,n){super(e,t,fo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dh(this.firestore,null,new Ci(e))}withConverter(e){return new fh(this.firestore,e,this._path)}}function ph(e,t,...n){if(e=(0,a.Ku)(e),nh("collection","path",t),e instanceof uh){const r=Ti.fromString(t,...n);return sh(r),new fh(e,null,r)}{if(!(e instanceof dh||e instanceof fh))throw new oi(si.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ti.fromString(t,...n));return sh(r),new fh(e.firestore,null,r)}}function gh(e,t,...n){if(e=(0,a.Ku)(e),1===arguments.length&&(t=yi.newId()),nh("doc","path",t),e instanceof uh){const r=Ti.fromString(t,...n);return ih(r),new dh(e,null,new Ci(r))}{if(!(e instanceof dh||e instanceof fh))throw new oi(si.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ti.fromString(t,...n));return ih(r),new dh(e.firestore,e instanceof fh?e.converter:null,new Ci(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mh{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new _u(this,"async_queue_retry"),this._u=()=>{const e=vu();e&&Yr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const e=vu();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const t=vu();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise((()=>{}));const t=new ai;return this.uu((()=>this.tu&&this.su?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.eu.push(e),this.cu())))}async cu(){if(0!==this.eu.length){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!ji(e))throw e;Yr("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo((()=>this.cu()))}}uu(e){const t=this.Xa.then((()=>(this.iu=!0,e().catch((e=>{this.ru=e,this.iu=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Zr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.iu=!1,e))))));return this.Xa=t,t}enqueueAfterDelay(e,t,n){this.au(),this.ou.indexOf(e)>-1&&(t=0);const r=tl.createAndSchedule(this,e,t,n,(e=>this.lu(e)));return this.nu.push(r),r}au(){this.ru&&ni()}verifyOperationInProgress(){}async hu(){let e;do{e=this.Xa,await e}while(e!==this.Xa)}Pu(e){for(const t of this.nu)if(t.timerId===e)return!0;return!1}Iu(e){return this.hu().then((()=>{this.nu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.nu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.hu()}))}Tu(e){this.ou.push(e)}lu(e){const t=this.nu.indexOf(e);this.nu.splice(t,1)}}class yh extends uh{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=function(){return new mh}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_h(this),this._firestoreClient.terminate()}}function vh(e,t){const n="object"==typeof e?e:(0,i.Sx)(),r="string"==typeof e?e:t||"(default)",s=(0,i.j6)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(0,a.yU)("firestore");e&&lh(s,...e)}return s}function wh(e){return e._firestoreClient||_h(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function _h(e){var t,n,r;const i=e._freezeSettings(),s=function(e,t,n,r){return new ms(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,eh(r.experimentalLongPollingOptions),r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new zl(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bh(cs.fromBase64String(e))}catch(e){throw new oi(si.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new bh(cs.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new oi(si.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Si(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Th{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oi(si.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oi(si.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return vi(this._lat,e._lat)||vi(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=/^__.*__$/;class Ch{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new pa(e,this.data,this.fieldMask,t,this.fieldTransforms):new fa(e,this.data,t,this.fieldTransforms)}}function Ah(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ni()}}class kh{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Eu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new kh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Au({path:n,Vu:!1});return r.mu(e),r}fu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Au({path:n,Vu:!1});return r.Eu(),r}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return jh(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(0===e.length)throw this.pu("Document fields must not be empty");if(Ah(this.du)&&Sh.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class Rh{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||wu(e)}Su(e,t,n,r=!1){return new kh({du:e,methodName:t,wu:n,path:Si.emptyPath(),Vu:!1,yu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oh(e){const t=e._freezeSettings(),n=wu(e._databaseId);return new Rh(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Nh(e,t,n,r,i,s={}){const o=e.Su(s.merge||s.mergeFields?2:0,t,n,i);Mh("Data must be an object, but it was:",o,r);const a=Ph(r,o);let c,u;if(s.merge)c=new os(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Fh(t,r,n);if(!o.contains(i))throw new oi(si.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Bh(e,i)||e.push(i)}c=new os(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Ch(new Ps(a),c,u)}function Dh(e,t,n,r=!1){return xh(n,e.Su(r?4:3,t))}function xh(e,t){if(Lh(e=(0,a.Ku)(e)))return Mh("Unsupported field value:",t,e),Ph(e,t);if(e instanceof Th)return function(e,t){if(!Ah(t.du))throw t.pu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.pu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Vu&&4!==t.du)throw t.pu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=xh(i,t.gu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.Ku)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return zo(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=_i.fromDate(e);return{timestampValue:Qa(t.serializer,n)}}if(e instanceof _i){const n=new _i(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Qa(t.serializer,n)}}if(e instanceof Ih)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof bh)return{bytesValue:Xa(t.serializer,e._byteString)};if(e instanceof dh){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.pu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Za(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.pu(`Unsupported field value: ${oh(e)}`)}(e,t)}function Ph(e,t){const n={};return es(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Zi(e,((e,r)=>{const i=xh(r,t.Ru(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Lh(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof _i||e instanceof Ih||e instanceof bh||e instanceof dh||e instanceof Th)}function Mh(e,t,n){if(!Lh(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=oh(n);throw"an object"===r?t.pu(e+" a custom object"):t.pu(e+" "+r)}}function Fh(e,t,n){if((t=(0,a.Ku)(t))instanceof Eh)return t._internalPath;if("string"==typeof t)return Vh(e,t);throw jh("Field path arguments must be of type string or ",e,!1,void 0,n)}const Uh=new RegExp("[~\\*/\\[\\]]");function Vh(e,t,n){if(t.search(Uh)>=0)throw jh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Eh(...t.split("."))._internalPath}catch(b){throw jh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function jh(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new oi(si.INVALID_ARGUMENT,a+e+c)}function Bh(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new dh(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new qh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class qh extends $h{data(){return super.data()}}function zh(e,t){return"string"==typeof t?Vh(e,t):t instanceof Eh?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new oi(si.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hh{}class Gh extends Hh{}function Wh(e,t,...n){let r=[];t instanceof Hh&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Xh)).length,n=e.filter((e=>e instanceof Qh)).length;if(t>1||t>0&&n>0)throw new oi(si.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class Qh extends Gh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Qh(e,t,n)}_apply(e){const t=this._parse(e);return Zh(e._query,t),new hh(e.firestore,e.converter,wo(e._query,t))}_parse(e){const t=Oh(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new oi(si.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Yh(o,s);const t=[];for(const n of o)t.push(Jh(r,e,n));a={arrayValue:{values:t}}}else a=Jh(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Yh(o,s),a=Dh(n,t,o,"in"===s||"not-in"===s);return qs.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class Xh extends Hh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Xh(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:zs.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)Zh(n,i),n=wo(n,i)}(e._query,t),new hh(e.firestore,e.converter,wo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Jh(e,t,n){if("string"==typeof(n=(0,a.Ku)(n))){if(""===n)throw new oi(si.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!go(t)&&-1!==n.indexOf("/"))throw new oi(si.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ti.fromString(n));if(!Ci.isDocumentKey(r))throw new oi(si.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Cs(e,new Ci(r))}if(n instanceof dh)return Cs(e,n._key);throw new oi(si.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oh(n)}.`)}function Yh(e,t){if(!Array.isArray(e)||0===e.length)throw new oi(si.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Zh(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new oi(si.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new oi(si.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class ed{convertValue(e,t="none"){switch(ws(e)){case 0:return null;case 1:return e.booleanValue;case 2:return hs(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ni()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Zi(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Ih(hs(e.latitude),hs(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ps(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(gs(e));default:return null}}convertTimestamp(e){const t=ls(e);return new _i(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ti.fromString(e);ri(Ic(n));const r=new ys(n.get(1),n.get(3)),i=new Ci(n.popFirst(5));return r.isEqual(t)||Zr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nd{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rd extends $h{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new id(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(zh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class id extends rd{data(e={}){return super.data(e)}}class sd{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new nd(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new id(this._firestore,this._userDataWriter,n.key,n,new nd(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oi(si.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new id(e._firestore,e._userDataWriter,n.doc.key,n.doc,new nd(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new id(e._firestore,e._userDataWriter,t.doc.key,t.doc,new nd(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:od(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function od(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ni()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ad(e){e=ah(e,dh);const t=ah(e.firestore,yh);return Yl(wh(t),e._key).then((n=>dd(t,e,n)))}class cd extends ed{constructor(e){super(),this.firestore=e}convertBytes(e){return new bh(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new dh(this.firestore,null,t)}}function ud(e){e=ah(e,hh);const t=ah(e.firestore,yh),n=wh(t),r=new cd(t);return Kh(e._query),Zl(n,e._query).then((n=>new sd(t,r,e,n)))}function ld(e,t,n){e=ah(e,dh);const r=ah(e.firestore,yh),i=td(e.converter,t,n);return hd(r,[Nh(Oh(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,sa.none())])}function hd(e,t){return function(e,t){const n=new ai;return e.asyncQueue.enqueueAndForget((async()=>Tl(await Xl(e),t,n))),n.promise}(wh(e),t)}function dd(e,t,n){const r=n.docs.get(t._key),i=new cd(e);return new rd(e,i,t._key,r,new nd(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Qr=e}(i.MF),(0,i.om)(new s.uA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new yh(new hi(e.getProvider("auth-internal")),new gi(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new oi(si.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ys(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(Gr,"4.4.3",e),(0,i.KO)(Gr,"4.4.3","esm2017")}()},1387:function(e,t,n){n.d(t,{Bt:function(){return ae},aE:function(){return nt}});n(4114);var r=n(6768),i=n(144);
/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof document;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const h=/#/g,d=/&/g,f=/\//g,p=/=/g,g=/\?/g,m=/\+/g,y=/%5B/g,v=/%5D/g,w=/%5E/g,_=/%60/g,b=/%7B/g,E=/%7C/g,T=/%7D/g,I=/%20/g;function S(e){return encodeURI(""+e).replace(E,"|").replace(y,"[").replace(v,"]")}function C(e){return S(e).replace(b,"{").replace(T,"}").replace(w,"^")}function A(e){return S(e).replace(m,"%2B").replace(I,"+").replace(h,"%23").replace(d,"%26").replace(_,"`").replace(b,"{").replace(T,"}").replace(w,"^")}function k(e){return A(e).replace(p,"%3D")}function R(e){return S(e).replace(h,"%23").replace(g,"%3F")}function O(e){return null==e?"":R(e).replace(f,"%2F")}function N(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}const D=/\/$/,x=e=>e.replace(D,"");function P(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=$(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:N(o)}}function L(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function M(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function F(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&U(t.matched[r],n.matched[i])&&V(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function U(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function V(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!j(e[n],t[n]))return!1;return!0}function j(e,t){return l(e)?B(e,t):l(t)?B(t,e):e===t}function B(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function $(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s).join("/")}var q,z;(function(e){e["pop"]="pop",e["push"]="push"})(q||(q={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(z||(z={}));function K(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),x(e)}const H=/^[^#]+#/;function G(e,t){return e.replace(H,"#")+t}function W(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Q=()=>({left:window.scrollX,top:window.scrollY});function X(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=W(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}function J(e,t){const n=history.state?history.state.position-t:-1;return n+e}const Y=new Map;function Z(e,t){Y.set(e,t)}function ee(e){const t=Y.get(e);return Y.delete(e),t}let te=()=>location.protocol+"//"+location.host;function ne(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),M(n,"")}const o=M(n,e);return o+r+i}function re(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=ne(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:q.pop,direction:l?l>0?z.forward:z.back:z.unknown})}))};function u(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:Q()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:d}}function ie(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Q():null}}function se(e){const{history:t,location:n}=window,r={value:ne(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:te()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,ie(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:Q()});s(o.current,o,!0);const c=a({},ie(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function oe(e){e=K(e);const t=se(e),n=re(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:G.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function ae(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),oe(e)}function ce(e){return"string"===typeof e||e&&"object"===typeof e}function ue(e){return"string"===typeof e||"symbol"===typeof e}const le={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},he=Symbol("");var de;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(de||(de={}));function fe(e,t){return a(new Error,{type:e,[he]:!0},t)}function pe(e,t){return e instanceof Error&&he in e&&(null==t||!!(e.type&t))}const ge="[^/]+?",me={sensitive:!1,strict:!1,start:!0,end:!0},ye=/[.+*?^${}()[\]/\\]/g;function ve(e,t){const n=a({},me,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ye,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const l=u||ge;if(l!==ge){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function we(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function _e(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=we(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(be(r))return 1;if(be(i))return-1}return i.length-r.length}function be(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ee={type:0,value:""},Te=/[a-zA-Z0-9_]/;function Ie(e){if(!e)return[[]];if("/"===e)return[[Ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Te.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function Se(e,t,n){const r=ve(Ie(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function Ce(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=ke(e);c.aliasOf=r&&r.record;const h=De(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=Se(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!Oe(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{o(p)}:u}function o(e){if(ue(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){let t=0;while(t<n.length&&_e(e,n[t])>=0&&(e.record.path!==n[t].record.path||!xe(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!Oe(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw fe(1,{location:e});0,o=i.record.name,c=a(Ae(t.params,i.keys.filter((e=>!e.optional)).concat(i.parent?i.parent.keys.filter((e=>e.optional)):[]).map((e=>e.name))),e.params&&Ae(e.params,i.keys.map((e=>e.name)))),s=i.stringify(c)}else if(null!=e.path)s=e.path,i=n.find((e=>e.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw fe(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:Ne(u)}}return t=De({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function Ae(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ke(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Re(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Re(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"===typeof n?n[r]:n;return t}function Oe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ne(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function De(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function xe(e,t){return t.children.some((t=>t===e||xe(e,t)))}function Pe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(m," "),n=e.indexOf("="),s=N(n<0?e:e.slice(0,n)),o=n<0?null:N(e.slice(n+1));if(s in t){let e=t[s];l(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Le(e){let t="";for(let n in e){const r=e[n];if(n=k(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&A(e))):[r&&A(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Me(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Fe=Symbol(""),Ue=Symbol(""),Ve=Symbol(""),je=Symbol(""),Be=Symbol("");function $e(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function qe(e,t,n,r,i,s=(e=>e())){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((a,c)=>{const u=e=>{!1===e?c(fe(4,{from:n,to:t})):e instanceof Error?c(e):ce(e)?c(fe(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),a())},l=s((()=>e.call(r&&r.instances[i],t,n,u)));let h=Promise.resolve(l);e.length<3&&(h=h.then(u)),h.catch((e=>c(e)))}))}function ze(e,t,n,r,i=(e=>e())){const s=[];for(const a of e){0;for(const e in a.components){let c=a.components[e];if("beforeRouteEnter"===t||a.instances[e])if(Ke(c)){const o=c.__vccOpts||c,u=o[t];u&&s.push(qe(u,n,r,a,e,i))}else{let u=c();0,s.push((()=>u.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${a.path}"`));const c=o(s)?s.default:s;a.components[e]=c;const u=c.__vccOpts||c,l=u[t];return l&&qe(l,n,r,a,e,i)()}))))}}}return s}function Ke(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=(0,r.WQ)(Ve),n=(0,r.WQ)(je),s=(0,r.EW)((()=>t.resolve((0,i.R1)(e.to)))),o=(0,r.EW)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(U.bind(null,r));if(o>-1)return o;const a=Je(e[t-2]);return t>1&&Je(r)===a&&i[i.length-1].path!==a?i.findIndex(U.bind(null,e[t-2])):o})),a=(0,r.EW)((()=>o.value>-1&&Xe(n.params,s.value.params))),c=(0,r.EW)((()=>o.value>-1&&o.value===n.matched.length-1&&V(n.params,s.value.params)));function l(n={}){return Qe(n)?t[(0,i.R1)(e.replace)?"replace":"push"]((0,i.R1)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.EW)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const Ge=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=(0,i.Kh)(He(e)),{options:s}=(0,r.WQ)(Ve),o=(0,r.EW)((()=>({[Ye(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),We=Ge;function Qe(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Je(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.WQ)(Be),o=(0,r.EW)((()=>e.route||s.value)),c=(0,r.WQ)(Ue,0),u=(0,r.EW)((()=>{let e=(0,i.R1)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.EW)((()=>o.value.matched[u.value]));(0,r.Gt)(Ue,(0,r.EW)((()=>u.value+1))),(0,r.Gt)(Fe,l),(0,r.Gt)(Be,o);const h=(0,i.KR)();return(0,r.wB)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&U(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,c=l.value,u=c&&c.components[s];if(!u)return et(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},g=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return et(n.default,{Component:g,route:i})||g}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Ze;function nt(e){const t=Ce(e.routes,e),n=e.parseQuery||Pe,o=e.stringifyQuery||Le,h=e.history;const d=$e(),f=$e(),p=$e(),g=(0,i.IJ)(le);let m=le;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=c.bind(null,(e=>""+e)),v=c.bind(null,O),w=c.bind(null,N);function _(e,n){let r,i;return ue(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function b(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function E(){return t.getRoutes().map((e=>e.record))}function T(e){return!!t.getRecordMatcher(e)}function I(e,r){if(r=a({},r||g.value),"string"===typeof e){const i=P(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:w(s.params),hash:N(i.hash),redirectedFrom:void 0,href:o})}let i;if(null!=e.path)i=a({},e,{path:P(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:v(t)}),r.params=v(r.params)}const s=t.resolve(i,r),c=e.hash||"";s.params=y(w(s.params));const u=L(o,a({},e,{hash:C(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Le?Me(e.query):e.query||{}},s,{redirectedFrom:void 0,href:l})}function S(e){return"string"===typeof e?P(n,e,g.value.path):a({},e)}function A(e,t){if(m!==e)return fe(8,{from:t,to:e})}function k(e){return x(e)}function R(e){return k(a(S(e),{replace:!0}))}function D(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=S(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function x(e,t){const n=m=I(e),r=g.value,i=e.state,s=e.force,c=!0===e.replace,u=D(n);if(u)return x(a(S(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!s&&F(o,r,n)&&(h=fe(16,{to:l,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):V(l,r)).catch((e=>pe(e)?pe(e,2)?e:te(e):W(e,l,r))).then((e=>{if(e){if(pe(e,2))return x(a({replace:c},S(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||l)}else e=B(l,r,!0,c,i);return j(l,r,e),e}))}function M(e,t){const n=A(e,t);return n?Promise.reject(n):Promise.resolve()}function U(e){const t=se.values().next().value;return t&&"function"===typeof t.runWithContext?t.runWithContext(e):e()}function V(e,t){let n;const[r,i,s]=rt(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(qe(r,e,t))}));const o=M.bind(null,e,t);return n.push(o),ae(n).then((()=>{n=[];for(const r of d.list())n.push(qe(r,e,t));return n.push(o),ae(n)})).then((()=>{n=ze(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(qe(r,e,t))}));return n.push(o),ae(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(qe(i,e,t));else n.push(qe(r.beforeEnter,e,t));return n.push(o),ae(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ze(s,"beforeRouteEnter",e,t,U),n.push(o),ae(n)))).then((()=>{n=[];for(const r of f.list())n.push(qe(r,e,t));return n.push(o),ae(n)})).catch((e=>pe(e,8)?e:Promise.reject(e)))}function j(e,t,n){p.list().forEach((r=>U((()=>r(e,t,n)))))}function B(e,t,n,r,i){const o=A(e,t);if(o)return o;const c=t===le,u=s?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(e.fullPath,i)),g.value=e,ne(e,t,n,c),te()}let $;function z(){$||($=h.listen(((e,t,n)=>{if(!oe.listening)return;const r=I(e),i=D(r);if(i)return void x(a(i,{replace:!0}),r).catch(u);m=r;const o=g.value;s&&Z(J(o.fullPath,n.delta),Q()),V(r,o).catch((e=>pe(e,12)?e:pe(e,2)?(x(e.to,r).then((e=>{pe(e,20)&&!n.delta&&n.type===q.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),W(e,r,o)))).then((e=>{e=e||B(r,o,!1),e&&(n.delta&&!pe(e,8)?h.go(-n.delta,!1):n.type===q.pop&&pe(e,20)&&h.go(-1,!1)),j(r,o,e)})).catch(u)})))}let K,H=$e(),G=$e();function W(e,t,n){te(e);const r=G.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function Y(){return K&&g.value!==le?Promise.resolve():new Promise(((e,t)=>{H.add([e,t])}))}function te(e){return K||(K=!e,z(),H.list().forEach((([t,n])=>e?n(e):t())),H.reset()),e}function ne(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&ee(J(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then((()=>a(t,n,c))).then((e=>e&&X(e))).catch((e=>W(e,t,n)))}const re=e=>h.go(e);let ie;const se=new Set,oe={currentRoute:g,listening:!0,addRoute:_,removeRoute:b,hasRoute:T,getRoutes:E,resolve:I,options:e,push:k,replace:R,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:f.add,afterEach:p.add,onError:G.add,isReady:Y,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(g)}),s&&!ie&&g.value===le&&(ie=!0,k(h.location).catch((e=>{0})));const n={};for(const i in le)Object.defineProperty(n,i,{get:()=>g.value[i],enumerable:!0});e.provide(Ve,t),e.provide(je,(0,i.Gc)(n)),e.provide(Be,g);const r=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(m=le,$&&$(),$=null,g.value=le,ie=!1,K=!1),r()}}};function ae(e){return e.reduce(((e,t)=>e.then((()=>U(t)))),Promise.resolve())}return oe}function rt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>U(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>U(e,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.c5f70ea4.js.map