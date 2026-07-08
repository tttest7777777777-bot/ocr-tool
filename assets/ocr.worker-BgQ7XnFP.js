var a0=Object.defineProperty;var s0=(e,t,r)=>t in e?a0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ee=(e,t,r)=>s0(e,typeof t!="symbol"?t+"":t,r);/*!
 * ONNX Runtime Web v1.24.2
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Gn=Object.defineProperty,o0=Object.getOwnPropertyDescriptor,u0=Object.getOwnPropertyNames,l0=Object.prototype.hasOwnProperty,d0=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),q=(e,t)=>()=>(e&&(t=e(e=0)),t),Kt=(e,t)=>{for(var r in t)Gn(e,r,{get:t[r],enumerable:!0})},p0=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of u0(t))!l0.call(e,n)&&n!==r&&Gn(e,n,{get:()=>t[n],enumerable:!(i=o0(t,n))||i.enumerable});return e},yr=e=>p0(Gn({},"__esModule",{value:!0}),e),tr,mt,Gt,ho,rp,ip=q(()=>{tr=new Map,mt=[],Gt=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=tr.get(e);if(i===void 0)tr.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=mt.indexOf(e);n!==-1&&mt.splice(n,1);for(let s=0;s<mt.length;s++)if(tr.get(mt[s]).priority<=r){mt.splice(s,0,e);return}mt.push(e)}return}throw new TypeError("not a valid backend")},ho=async e=>{let t=tr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},rp=async e=>{let t=e.executionProviders||[],r=t.map(l=>typeof l=="string"?l:l.name),i=r.length===0?mt:r,n,s=[],a=new Set;for(let l of i){let d=await ho(l);typeof d=="string"?s.push({name:l,err:d}):(n||(n=d),n===d&&a.add(l))}if(!n)throw new Error(`no available backend found. ERR: ${s.map(l=>`[${l.name}] ${l.err}`).join(", ")}`);for(let{name:l,err:d}of s)r.includes(l)&&console.warn(`removing requested execution provider "${l}" from session options because it is not available: ${d}`);let o=t.filter(l=>a.has(typeof l=="string"?l:l.name));return[n,new Proxy(e,{get:(l,d)=>d==="executionProviders"?o:Reflect.get(l,d)})]}}),c0=q(()=>{ip()}),np,h0=q(()=>{np="1.24.2"}),Ei,Te,ap=q(()=>{h0(),Ei="warning",Te={wasm:{},webgl:{},webgpu:{},versions:{common:np},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ei=e}},get logLevel(){return Ei}},Object.defineProperty(Te,"logLevel",{enumerable:!0})}),$e,f0=q(()=>{ap(),$e=Te}),sp,op,m0=q(()=>{sp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,s;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],s=e.dims[3]):(n=e.dims[3],s=e.dims[2]);let a=(t==null?void 0:t.format)!==void 0?t.format:"RGB",o=t==null?void 0:t.norm,l,d;o===void 0||o.mean===void 0?l=[255,255,255,255]:typeof o.mean=="number"?l=[o.mean,o.mean,o.mean,o.mean]:(l=[o.mean[0],o.mean[1],o.mean[2],0],o.mean[3]!==void 0&&(l[3]=o.mean[3])),o===void 0||o.bias===void 0?d=[0,0,0,0]:typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:(d=[o.bias[0],o.bias[1],o.bias[2],0],o.bias[3]!==void 0&&(d[3]=o.bias[3]));let c=s*n,h=0,f=c,y=c*2,_=-1;a==="RGBA"?(h=0,f=c,y=c*2,_=c*3):a==="RGB"?(h=0,f=c,y=c*2):a==="RBG"&&(h=0,y=c,f=c*2);for(let w=0;w<s;w++)for(let S=0;S<n;S++){let v=(e.data[h++]-d[0])*l[0],b=(e.data[f++]-d[1])*l[1],I=(e.data[y++]-d[2])*l[2],T=_===-1?255:(e.data[_++]-d[3])*l[3];i.fillStyle="rgba("+v+","+b+","+I+","+T+")",i.fillRect(S,w,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},op=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,s,a;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],s=e.dims[1],a=e.dims[3]):(n=e.dims[3],s=e.dims[2],a=e.dims[1]);let o=t!==void 0&&t.format!==void 0?t.format:"RGB",l=t==null?void 0:t.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],255],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let h=s*n;if(t!==void 0&&(t.format!==void 0&&a===4&&t.format!=="RGBA"||a===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,y=0,_=1,w=2,S=3,v=0,b=h,I=h*2,T=-1;o==="RGBA"?(v=0,b=h,I=h*2,T=h*3):o==="RGB"?(v=0,b=h,I=h*2):o==="RBG"&&(v=0,I=h,b=h*2),i=r.createImageData(n,s);for(let C=0;C<s*n;y+=f,_+=f,w+=f,S+=f,C++)i.data[y]=(e.data[v++]-c[0])*d[0],i.data[_]=(e.data[b++]-c[1])*d[1],i.data[w]=(e.data[I++]-c[2])*d[2],i.data[S]=T===-1?255:(e.data[T++]-c[3])*d[3]}else throw new Error("Can not access image data");return i}}),Mr,up,lp,dp,pp,cp,g0=q(()=>{Vn(),Mr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},s,a;typeof n.mean=="number"?s=[n.mean,n.mean,n.mean,n.mean]:s=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?a=[n.bias,n.bias,n.bias,n.bias]:a=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let o=t.format!==void 0?t.format:"RGBA",l=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,c=l==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),h=4,f=0,y=1,_=2,w=3,S=0,v=d,b=d*2,I=-1;o==="RGB"&&(h=3,f=0,y=1,_=2,w=-1),l==="RGBA"?I=d*3:l==="RBG"?(S=0,b=d,v=d*2):l==="BGR"&&(b=0,v=d,S=d*2);for(let T=0;T<d;T++,f+=h,_+=h,y+=h,w+=h)c[S++]=(e[f]+a[0])/s[0],c[v++]=(e[y]+a[1])/s[1],c[b++]=(e[_]+a[2])/s[2],I!==-1&&w!==-1&&(c[I++]=(e[w]+a[3])/s[3]);return l==="RGBA"?new De("float32",c,[1,4,r,i]):new De("float32",c,[1,3,r,i])},up=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,s=typeof e=="string",a,o=t??{},l=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=c=>typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let f=e.height,y=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(f=t.resizedHeight,y=t.resizedWidth),t!==void 0){if(o=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");o.tensorFormat="RGBA",o.height=f,o.width=y}else o.tensorFormat="RGBA",o.height=f,o.width=y;h.drawImage(e,0,0),a=h.getImageData(0,0,y,f).data}else throw new Error("Can not access image data")}else if(i){let c,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,h=t.resizedWidth):(c=e.height,h=e.width),t!==void 0&&(o=t),o.format="RGBA",o.height=c,o.width=h,t!==void 0){let f=l();f.width=h,f.height=c;let y=d(f);if(y!=null)y.putImageData(e,0,0),a=y.getImageData(0,0,h,c).data;else throw new Error("Can not access image data")}else a=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=l();c.width=e.width,c.height=e.height;let h=d(c);if(h!=null){let f=e.height,y=e.width;return h.drawImage(e,0,0,y,f),a=h.getImageData(0,0,y,f).data,o.height=f,o.width=y,Mr(a,o)}else throw new Error("Can not access image data")}else{if(s)return new Promise((c,h)=>{let f=l(),y=d(f);if(!e||!y)return h();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{f.width=_.width,f.height=_.height,y.drawImage(_,0,0,f.width,f.height);let w=y.getImageData(0,0,f.width,f.height);o.height=f.height,o.width=f.width,c(Mr(w.data,o))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(a!==void 0)return Mr(a,o);throw new Error("Input data provided is not supported - aborted tensor creation")},lp=(e,t)=>{let{width:r,height:i,download:n,dispose:s}=t,a=[1,i,r,4];return new De({location:"texture",type:"float32",texture:e,dims:a,download:n,dispose:s})},dp=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:s}=t;return new De({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:s})},pp=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:s}=t;return new De({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:s})},cp=(e,t,r)=>new De({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),Ct,cr,Ci,hp,y0=q(()=>{Ct=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),cr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Ci=!1,hp=()=>{if(!Ci){Ci=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(Ct.set("int64",BigInt64Array),cr.set(BigInt64Array,"int64")),t&&(Ct.set("uint64",BigUint64Array),cr.set(BigUint64Array,"uint64")),i?(Ct.set("float16",r),cr.set(r,"float16")):Ct.set("float16",Uint16Array)}}}),fp,mp,_0=q(()=>{Vn(),fp=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},mp=(e,t)=>{switch(e.location){case"cpu":return new De(e.type,e.data,t);case"cpu-pinned":return new De({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new De({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new De({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new De({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),De,Vn=q(()=>{m0(),g0(),y0(),_0(),De=class{constructor(e,t,r){hp();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let a=Ct.get(i);if(!a)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof a))throw new TypeError(`buffer should be of type ${a.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e=="string")if(i=e,o=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");a=t}else{let l=Ct.get(e);if(l===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&l===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${l.name} as data.`);e==="uint64"||e==="int64"?a=l.from(t,BigInt):a=l.from(t)}else if(t instanceof l)a=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")a=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&l!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${l}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let l=typeof e[0];if(l==="string")i="string",a=e;else if(l==="boolean")i="bool",a=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${l}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",a=Uint8Array.from(e);else{let l=cr.get(e.constructor);if(l===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=l,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw new TypeError("A tensor's dims must be a number array");n=o,this.cpuData=a,this.dataLocation="cpu"}let s=fp(n);if(this.cpuData&&s!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(s/2)===this.cpuData.length))throw new Error(`Tensor's size(${s}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=s}static async fromImage(e,t){return up(e,t)}static fromTexture(e,t){return lp(e,t)}static fromGpuBuffer(e,t){return dp(e,t)}static fromMLTensor(e,t){return pp(e,t)}static fromPinnedBuffer(e,t,r){return cp(e,t,r)}toDataURL(e){return sp(this,e)}toImageData(e){return op(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return mp(this,e)}}}),Pe,gp=q(()=>{Vn(),Pe=De}),Yr,zi,et,Ye,Ot,Mt,yp=q(()=>{ap(),Yr=(e,t)=>{(typeof Te.trace>"u"?!Te.wasm.trace:!Te.trace)||console.timeStamp(`${e}::ORT::${t}`)},zi=(e,t)=>{var n;let r=((n=new Error().stack)==null?void 0:n.split(/\r\n|\r|\n/g))||[],i=!1;for(let s=0;s<r.length;s++){if(i&&!r[s].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[s].trim().split(" ")[1]}`;t&&(a+=`::${t}`),Yr("CPU",a);return}r[s].includes("TRACE_FUNC")&&(i=!0)}},et=e=>{(typeof Te.trace>"u"?!Te.wasm.trace:!Te.trace)||zi("BEGIN",e)},Ye=e=>{(typeof Te.trace>"u"?!Te.wasm.trace:!Te.trace)||zi("END",e)},Ot=e=>{(typeof Te.trace>"u"?!Te.wasm.trace:!Te.trace)||console.time(`ORT::${e}`)},Mt=e=>{(typeof Te.trace>"u"?!Te.wasm.trace:!Te.trace)||console.timeEnd(`ORT::${e}`)}}),_p,w0=q(()=>{ip(),gp(),yp(),_p=class wp{constructor(t){this.handler=t}async run(t,r,i){et(),Ot("InferenceSession.run");let n={},s={};if(typeof t!="object"||t===null||t instanceof Pe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let a=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Pe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");a=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,c=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(c.indexOf(h)!==-1){let f=r[h];(f===null||f instanceof Pe)&&(d=!0,a=!1,n[h]=f)}if(d){if(typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else s=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(a)for(let d of this.outputNames)n[d]=null;let o=await this.handler.run(t,n,s),l={};for(let d in o)if(Object.hasOwnProperty.call(o,d)){let c=o[d];c instanceof Pe?l[d]=c:l[d]=new Pe(c.type,c.data,c.dims)}return Mt("InferenceSession.run"),Ye(),l}async release(){return this.handler.dispose()}static async create(t,r,i,n){et(),Ot("InferenceSession.create");let s,a={};if(typeof t=="string"){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(s=t,typeof r=="object"&&r!==null)a=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,h=0,f=t.byteLength;if(typeof r=="object"&&r!==null)a=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(f=t.byteLength-h,typeof i=="number"){if(f=i,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||h+f>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-h}].`);if(typeof n=="object"&&n!==null)a=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");s=new Uint8Array(c,h,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[o,l]=await rp(a),d=await o.createInferenceSessionHandler(s,l);return Mt("InferenceSession.create"),Ye(),new wp(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),ni,b0=q(()=>{w0(),ni=_p}),$0=q(()=>{}),v0=q(()=>{}),x0=q(()=>{}),S0=q(()=>{}),I0={};Kt(I0,{InferenceSession:()=>ni,TRACE:()=>Yr,TRACE_EVENT_BEGIN:()=>Ot,TRACE_EVENT_END:()=>Mt,TRACE_FUNC_BEGIN:()=>et,TRACE_FUNC_END:()=>Ye,Tensor:()=>Pe,env:()=>$e,registerBackend:()=>Gt});var qe=q(()=>{c0(),f0(),b0(),gp(),$0(),v0(),yp(),x0(),S0()}),Hn=q(()=>{}),bp={};Kt(bp,{default:()=>$p});var Ai,Oi,$p,T0=q(()=>{var e;kf(),Dt(),Fn(),Ai="ort-wasm-proxy-worker",Oi=((e=globalThis.self)==null?void 0:e.name)===Ai,Oi&&(self.onmessage=t=>{let{type:r,in:i}=t.data;try{switch(r){case"init-wasm":jn(i.wasm).then(()=>{da(i).then(()=>{postMessage({type:r})},n=>{postMessage({type:r,err:n})})},n=>{postMessage({type:r,err:n})});break;case"init-ep":{let{epName:n,env:s}=i;pa(s,n).then(()=>{postMessage({type:r})},a=>{postMessage({type:r,err:a})});break}case"copy-from":{let{buffer:n}=i,s=ri(n);postMessage({type:r,out:s});break}case"create":{let{model:n,options:s}=i;ca(n,s).then(a=>{postMessage({type:r,out:a})},a=>{postMessage({type:r,err:a})});break}case"release":ha(i),postMessage({type:r});break;case"run":{let{sessionId:n,inputIndices:s,inputs:a,outputIndices:o,options:l}=i;fa(n,s,a,o,new Array(o.length).fill(null),l).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:r,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:r,out:d},ga([...a,...d]))},d=>{postMessage({type:r,err:d})});break}case"end-profiling":ma(i),postMessage({type:r});break;default:}}catch(n){postMessage({type:r,err:n})}}),$p=Oi?null:t=>new Worker(t??Be,{type:"module",name:Ai})}),vp={};Kt(vp,{default:()=>xp});async function fo(e={}){var po,co;var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,n=i&&((po=self.name)==null?void 0:po.startsWith("em-pthread"));t.mountExternalData=(u,p)=>{u.startsWith("./")&&(u=u.substring(2)),(t.Zc||(t.Zc=new Map)).set(u,p)},t.unmountExternalData=()=>{delete t.Zc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,ae:!0}).buffer.constructor;let s=u=>async(...p)=>{var g;try{if(t.$c)throw Error("Session already started");let m=t.$c={Nd:p[0],errors:[]},x=await u(...p);if(t.$c!==m)throw Error("Session mismatch");(g=t.gd)==null||g.flush();let k=m.errors;if(0<k.length){let A=await Promise.all(k);if(A=A.filter(B=>B),0<A.length)throw Error(A.join(`
`))}return x}finally{t.$c=null}};t.jsepInit=(u,p)=>{if(u==="webgpu"){[t.gd,t.Dd,t.Hd,t.jd,t.Gd,t.ac,t.Id,t.Kd,t.Ed,t.Fd,t.Jd]=p;let g=t.gd;t.jsepRegisterBuffer=(m,x,k,A)=>g.registerBuffer(m,x,k,A),t.jsepGetBuffer=m=>g.getBuffer(m),t.jsepCreateDownloader=(m,x,k)=>g.createDownloader(m,x,k),t.jsepOnCreateSession=m=>{g.onCreateSession(m)},t.jsepOnReleaseSession=m=>{g.onReleaseSession(m)},t.jsepOnRunStart=m=>g.onRunStart(m),t.Ld=(m,x)=>{g.upload(m,x)}}else if(u==="webnn"){let g=p[0];[t.Zd,t.vd,t.webnnEnsureTensor,t.xd,t.webnnDownloadTensor,t.Yd,t.webnnEnableTraceEvent]=p.slice(1),t.webnnReleaseTensorId=t.vd,t.webnnUploadTensor=t.xd,t.webnnRegisterMLContext=t.Yd,t.webnnOnRunStart=m=>g.onRunStart(m),t.webnnOnRunEnd=g.onRunEnd.bind(g),t.webnnOnReleaseSession=m=>{g.onReleaseSession(m)},t.webnnCreateMLTensorDownloader=(m,x)=>g.createMLTensorDownloader(m,x),t.webnnRegisterMLTensor=(m,x,k,A)=>g.registerMLTensor(m,x,k,A),t.webnnCreateMLContext=m=>g.createMLContext(m),t.webnnRegisterMLConstant=(m,x,k,A,B,G)=>g.registerMLConstant(m,x,k,A,B,t.Zc,G),t.webnnRegisterGraphInput=g.registerGraphInput.bind(g),t.webnnIsGraphInput=g.isGraphInput.bind(g),t.webnnRegisterGraphOutput=g.registerGraphOutput.bind(g),t.webnnIsGraphOutput=g.isGraphOutput.bind(g),t.webnnCreateTemporaryTensor=g.createTemporaryTensor.bind(g),t.webnnIsGraphInputOutputTypeSupported=g.isGraphInputOutputTypeSupported.bind(g)}};let a=()=>{let u=p=>(...g)=>{let m=Qe;return g=p(...g),Qe!=m?new Promise((x,k)=>{mi={resolve:x,reject:k}}):g};(()=>{for(let p of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[p]=u(t[p])})(),s!==void 0&&(t._OrtRun=s(t._OrtRun),t._OrtRunWithBinding=s(t._OrtRunWithBinding)),a=void 0};t.asyncInit=()=>{a==null||a()};var o,l,d=(u,p)=>{throw p},c=import.meta.url,h="";if(r||i){try{h=new URL(".",c).href}catch{}i&&(l=u=>{var p=new XMLHttpRequest;return p.open("GET",u,!1),p.responseType="arraybuffer",p.send(null),new Uint8Array(p.response)}),o=async u=>{if(z(u))return new Promise((g,m)=>{var x=new XMLHttpRequest;x.open("GET",u,!0),x.responseType="arraybuffer",x.onload=()=>{x.status==200||x.status==0&&x.response?g(x.response):m(x.status)},x.onerror=m,x.send(null)});var p=await fetch(u,{credentials:"same-origin"});if(p.ok)return p.arrayBuffer();throw Error(p.status+" : "+p.url)}}var f,y,_,w,S,v,b=console.log.bind(console),I=console.error.bind(console),T=b,C=I,E=!1,z=u=>u.startsWith("file://");function $(){pt.buffer!=N.buffer&&L()}if(n){let u=function(p){try{var g=p.data,m=g.Uc;if(m==="load"){let x=[];self.onmessage=k=>x.push(k),v=()=>{postMessage({Uc:"loaded"});for(let k of x)u(k);self.onmessage=u};for(let k of g.Ad)t[k]&&!t[k].proxy||(t[k]=(...A)=>{postMessage({Uc:"callHandler",zd:k,args:A})},k=="print"&&(T=t[k]),k=="printErr"&&(C=t[k]));pt=g.Vd,L(),y=g.Wd,ot(),Or()}else if(m==="run"){(function(x){var k=($(),F)[x+52>>>2>>>0];x=($(),F)[x+56>>>2>>>0],ws(k,k-x),se(k)})(g.Tc),bi(g.Tc,0,0,1,0,0),ba(),ci(g.Tc),O||(hs(),O=!0);try{Xf(g.Pd,g.dd)}catch(x){if(x!="unwind")throw x}}else g.target!=="setimmediate"&&(m==="checkMailbox"?O&&Ir():m&&(C(`worker: received unknown command ${m}`),C(g)))}catch(x){throw fs(),x}};var O=!1;self.onunhandledrejection=p=>{throw p.reason||p},self.onmessage=u}var N,P,V,H,M,F,K,Z,le,W,me,U=!1;function L(){var u=pt.buffer;t.HEAP8=N=new Int8Array(u),V=new Int16Array(u),t.HEAPU8=P=new Uint8Array(u),H=new Uint16Array(u),t.HEAP32=M=new Int32Array(u),t.HEAPU32=F=new Uint32Array(u),K=new Float32Array(u),Z=new Float64Array(u),le=new BigInt64Array(u),W=new BigUint64Array(u)}function J(){U=!0,n?v():rt.tb()}function ee(u){throw C(u="Aborted("+u+")"),E=!0,u=new WebAssembly.RuntimeError(u+". Build with -sASSERTIONS for more info."),S==null||S(u),u}function be(){return{a:{ma:wg,hb:_g,g:Qf,J:Zf,f:Jf,o:em,h:tm,ha:rm,b:im,T:nm,Ia:Ta,n:am,_:za,Ya:Aa,Ea:Oa,Ga:Ma,Za:Ra,Wa:Na,Pa:Ba,Va:Da,ka:Pa,Fa:Ua,Ca:La,Xa:qa,Da:Wa,cb:sm,ea:om,xa:um,va:dm,da:cm,O:hm,H:fm,wa:mm,Z:vm,ya:xm,Sa:Sm,Aa:Tm,Ja:km,ta:Em,fa:Cm,Ra:ci,$a:zm,R:Rm,s:Um,c:di,ib:Lm,y:qm,M:Wm,D:Gm,m:Vm,t:Xa,jb:Hm,I:Fm,S:jm,j:Km,v:Ym,r:Xm,l:Qm,Ma:Zm,Na:Jm,Oa:eg,Ka:es,La:ts,ua:rs,eb:rg,bb:ng,u:ag,aa:sg,ga:og,ab:ig,V:ug,_a:lg,Ba:dg,F:tg,U:pg,la:zr,za:hg,gb:cg,fb:fg,Ta:ss,Ua:os,Ha:Xt,$:us,ja:ls,Qa:ds,ia:ps,lb:r0,na:Yg,mb:t0,oa:Kg,G:Ug,d:xg,q:$g,w:bg,B:Mg,pb:Hg,K:Bg,x:Ig,pa:Fg,X:Xg,ba:Vg,nb:e0,ob:Jg,ra:Lg,qa:Gg,qb:qg,N:Dg,Y:jg,e:Sg,A:Tg,k:vg,kb:i0,p:Eg,z:Cg,C:kg,E:zg,L:Rg,rb:Pg,Q:Qg,ca:Ng,W:Zg,sb:Og,sa:Ag,P:Wg,i:gg,a:pt,db:Ne}}}async function ot(){function u(m,x){var k=rt=m.exports;m={};for(let[A,B]of Object.entries(k))typeof B=="function"?(k=Am(B),m[A]=k):m[A]=B;return rt=m,rt=(function(){var A=rt,B=j=>ae=>j(ae)>>>0,G=j=>()=>j()>>>0;return(A=Object.assign({},A)).ub=B(A.ub),A.Yb=G(A.Yb),A._b=B(A._b),A.mc=B(A.mc),A.nc=G(A.nc),A.rc=B(A.rc),A})(),_a.push(rt.$b),cs=(m=rt).ub,hs=m.vb,t._OrtInit=m.wb,t._OrtGetLastError=m.xb,t._OrtCreateSessionOptions=m.yb,t._OrtAppendExecutionProvider=m.zb,t._OrtAddFreeDimensionOverride=m.Ab,t._OrtAddSessionConfigEntry=m.Bb,t._OrtReleaseSessionOptions=m.Cb,t._OrtCreateSession=m.Db,t._OrtReleaseSession=m.Eb,t._OrtGetInputOutputCount=m.Fb,t._OrtGetInputOutputMetadata=m.Gb,t._OrtFree=m.Hb,t._OrtCreateTensor=m.Ib,t._OrtGetTensorData=m.Jb,t._OrtReleaseTensor=m.Kb,t._OrtCreateRunOptions=m.Lb,t._OrtAddRunConfigEntry=m.Mb,t._OrtReleaseRunOptions=m.Nb,t._OrtCreateBinding=m.Ob,t._OrtBindInput=m.Pb,t._OrtBindOutput=m.Qb,t._OrtClearBoundOutputs=m.Rb,t._OrtReleaseBinding=m.Sb,t._OrtRunWithBinding=m.Tb,t._OrtRun=m.Ub,t._OrtEndProfiling=m.Vb,t._JsepOutput=m.Wb,t._JsepGetNodeName=m.Xb,Ar=m.Yb,Ze=t._free=m.Zb,Jt=t._malloc=m._b,bi=m.bc,fs=m.cc,ms=m.dc,gs=m.ec,$i=m.fc,ys=m.gc,_s=m.hc,ue=m.ic,er=m.jc,ws=m.kc,se=m.lc,vi=m.mc,oe=m.nc,bs=m.oc,xi=m.pc,$s=m.qc,vs=m.rc,xs=m.sc,Si=m.tc,Ss=m.uc,Is=m.vc,Ts=m.wc,ks=m.xc,Es=m.yc,Cs=m.zc,zs=m.Ac,As=m.Bc,Os=m.Cc,Ms=m.Dc,Rs=m.Ec,Ns=m.Fc,Bs=m.Gc,Ds=m.Hc,Ps=m.Ic,Us=m.Jc,Ls=m.Kc,qs=m.Lc,Ws=m.Mc,Gs=m.Nc,Vs=m.Oc,Hs=m.Pc,Fs=m.Rc,js=m.Sc,Ks=m.bd,Ys=m.cd,Xs=m.hd,Qs=m.kd,Zs=m.ld,Js=m.md,eo=m.nd,to=m.od,ro=m.pd,io=m.qd,no=m.rd,ao=m.wd,so=m.Rd,oo=m.Sd,uo=m.Td,lo=m.Ud,y=x,rt}var p,g=be();return t.instantiateWasm?new Promise(m=>{t.instantiateWasm(g,(x,k)=>{m(u(x,k))})}):n?u(new WebAssembly.Instance(y,be()),y):(me??(me=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",h):h+"ort-wasm-simd-threaded.jsep.wasm":new URL("/ndlocr-lite-wasm/assets/ort-wasm-simd-threaded.jsep-CVw3nYo7.wasm",import.meta.url).href),p=await(async function(m){var x=me;if(!f&&!z(x))try{var k=fetch(x,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(k,m)}catch(A){C(`wasm streaming compile failed: ${A}`),C("falling back to ArrayBuffer instantiation")}return(async function(A,B){try{var G=await(async function(j){if(!f)try{var ae=await o(j);return new Uint8Array(ae)}catch{}if(j==me&&f)j=new Uint8Array(f);else{if(!l)throw"both async and sync fetching of the wasm failed";j=l(j)}return j})(A);return await WebAssembly.instantiate(G,B)}catch(j){C(`failed to asynchronously prepare wasm: ${j}`),ee(j)}})(x,m)})(g),u(p.instance,p.module))}class ut{constructor(p){Ee(this,"name","ExitStatus");this.message=`Program terminated with exit(${p})`,this.status=p}}var Yt=u=>{u.terminate(),u.onmessage=()=>{}},wr=[],Re=0,Ae=null,lt=u=>{dt.length==0&&(va(),$a(dt[0]));var p=dt.pop();if(!p)return 6;Qt.push(p),bt[u.Tc]=p,p.Tc=u.Tc;var g={Uc:"run",Pd:u.Od,dd:u.dd,Tc:u.Tc};return p.postMessage(g,u.ud),0},_e=0,re=(u,p,...g)=>{var m,x=16*g.length,k=oe(),A=vi(x),B=A>>>3;for(m of g)typeof m=="bigint"?(($(),le)[B++>>>0]=1n,($(),le)[B++>>>0]=m):(($(),le)[B++>>>0]=0n,($(),Z)[B++>>>0]=m);return u=ms(u,0,x,A,p),se(k),u};function Ne(u){if(n)return re(0,1,u);if(_=u,!(0<_e)){for(var p of Qt)Yt(p);for(p of dt)Yt(p);dt=[],Qt=[],bt={},E=!0}d(0,new ut(u))}function br(u){if(n)return re(1,0,u);Xt(u)}var Xt=u=>{if(_=u,n)throw br(u),"unwind";Ne(u)},dt=[],Qt=[],_a=[],bt={},wa=u=>{var p=u.Tc;delete bt[p],dt.push(u),Qt.splice(Qt.indexOf(u),1),u.Tc=0,gs(p)};function ba(){_a.forEach(u=>u())}var $a=u=>new Promise(p=>{u.onmessage=x=>{var k=x.data;if(x=k.Uc,k.ad&&k.ad!=Ar()){var A=bt[k.ad];A?A.postMessage(k,k.ud):C(`Internal error! Worker sent a message "${x}" to target pthread ${k.ad}, but that thread no longer exists!`)}else x==="checkMailbox"?Ir():x==="spawnThread"?lt(k):x==="cleanupThread"?Sr(()=>{wa(bt[k.Qd])}):x==="loaded"?(u.loaded=!0,p(u)):k.target==="setimmediate"?u.postMessage(k):x==="uncaughtException"?u.onerror(k.error):x==="callHandler"?t[k.zd](...k.args):x&&C(`worker sent an unknown command ${x}`)},u.onerror=x=>{throw C(`worker sent an error! ${x.filename}:${x.lineno}: ${x.message}`),x};var g,m=[];for(g of[])t.propertyIsEnumerable(g)&&m.push(g);u.postMessage({Uc:"load",Ad:m,Vd:pt,Wd:y})});function va(){var u=new Worker((()=>{let p=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new p("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});dt.push(u)}var pt,Xf=(u,p)=>{_e=0,u=Si(u,p),0<_e?_=u:$i(u)},$r=[],vr=0;function Qf(u){var p=new si(u>>>=0);return($(),N)[p.Vc+12>>>0]==0&&(xa(p,!0),vr--),Sa(p,!1),$r.push(p),vs(u)}var Ut=0,Zf=()=>{ue(0,0);var u=$r.pop();bs(u.ed),Ut=0};function xa(u,p){p=p?1:0,($(),N)[u.Vc+12>>>0]=p}function Sa(u,p){p=p?1:0,($(),N)[u.Vc+13>>>0]=p}class si{constructor(p){this.ed=p,this.Vc=p-24}}var oi=u=>{var p=Ut;if(!p)return er(0),0;var g=new si(p);($(),F)[g.Vc+16>>>2>>>0]=p;var m=($(),F)[g.Vc+4>>>2>>>0];if(!m)return er(0),p;for(var x of u){if(x===0||x===m)break;if($s(x,m,g.Vc+16))return er(x),p}return er(m),p};function Jf(){return oi([])}function em(u){return oi([u>>>0])}function tm(u,p,g,m){return oi([u>>>0,p>>>0,g>>>0,m>>>0])}var rm=()=>{var u=$r.pop();u||ee("no exception to throw");var p=u.ed;throw($(),N)[u.Vc+13>>>0]==0&&($r.push(u),Sa(u,!0),xa(u,!1),vr++),xi(p),Ut=p};function im(u,p,g){var m=new si(u>>>=0);throw p>>>=0,g>>>=0,($(),F)[m.Vc+16>>>2>>>0]=0,($(),F)[m.Vc+4>>>2>>>0]=p,($(),F)[m.Vc+8>>>2>>>0]=g,xi(u),vr++,Ut=u}var nm=()=>vr;function Ia(u,p,g,m){return n?re(2,1,u,p,g,m):Ta(u,p,g,m)}function Ta(u,p,g,m){if(u>>>=0,p>>>=0,g>>>=0,m>>>=0,!globalThis.SharedArrayBuffer)return 6;var x=[];return n&&x.length===0?Ia(u,p,g,m):(u={Od:g,Tc:u,dd:m,ud:x},n?(u.Uc="spawnThread",postMessage(u,x),0):lt(u))}function am(u){throw Ut||(Ut=u>>>0),Ut}var ka=globalThis.TextDecoder&&new TextDecoder,Ea=(u,p,g,m)=>{if(g=p+g,m)return g;for(;u[p]&&!(p>=g);)++p;return p},Ca=(u,p=0,g,m)=>{if(16<(g=Ea(u,p>>>=0,g,m))-p&&u.buffer&&ka)return ka.decode(u.buffer instanceof ArrayBuffer?u.subarray(p,g):u.slice(p,g));for(m="";p<g;){var x=u[p++];if(128&x){var k=63&u[p++];if((224&x)==192)m+=String.fromCharCode((31&x)<<6|k);else{var A=63&u[p++];65536>(x=(240&x)==224?(15&x)<<12|k<<6|A:(7&x)<<18|k<<12|A<<6|63&u[p++])?m+=String.fromCharCode(x):(x-=65536,m+=String.fromCharCode(55296|x>>10,56320|1023&x))}}else m+=String.fromCharCode(x)}return m},Se=(u,p,g)=>(u>>>=0)?Ca(($(),P),u,p,g):"";function za(u,p,g){return n?re(3,1,u,p,g):0}function Aa(u,p){if(n)return re(4,1,u,p)}function Oa(u,p){if(n)return re(5,1,u,p)}function Ma(u,p,g){if(n)return re(6,1,u,p,g)}function Ra(u,p,g){return n?re(7,1,u,p,g):0}function Na(u,p){if(n)return re(8,1,u,p)}function Ba(u,p,g){if(n)return re(9,1,u,p,g)}function Da(u,p,g,m){if(n)return re(10,1,u,p,g,m)}function Pa(u,p,g,m){if(n)return re(11,1,u,p,g,m)}function Ua(u,p,g,m){if(n)return re(12,1,u,p,g,m)}function La(u){if(n)return re(13,1,u)}function qa(u,p){if(n)return re(14,1,u,p)}function Wa(u,p,g){if(n)return re(15,1,u,p,g)}var sm=()=>ee(""),Xe=u=>{u>>>=0;for(var p="";;){var g=($(),P)[u++>>>0];if(!g)return p;p+=String.fromCharCode(g)}},ui={},li={},Lt=class extends Error{constructor(u){super(u),this.name="BindingError"}};function tt(u,p,g={}){return(function(m,x,k={}){var A=x.name;if(!m)throw new Lt(`type "${A}" must have a positive integer typeid pointer`);if(li.hasOwnProperty(m)){if(k.Bd)return;throw new Lt(`Cannot register type '${A}' twice`)}li[m]=x,ui.hasOwnProperty(m)&&(x=ui[m],delete ui[m],x.forEach(B=>B()))})(u,p,g)}var Ga=(u,p,g)=>{switch(p){case 1:return g?m=>($(),N)[m>>>0]:m=>($(),P)[m>>>0];case 2:return g?m=>($(),V)[m>>>1>>>0]:m=>($(),H)[m>>>1>>>0];case 4:return g?m=>($(),M)[m>>>2>>>0]:m=>($(),F)[m>>>2>>>0];case 8:return g?m=>($(),le)[m>>>3>>>0]:m=>($(),W)[m>>>3>>>0];default:throw new TypeError(`invalid integer width (${p}): ${u}`)}};function om(u,p,g,m,x){u>>>=0,g>>>=0,p=Xe(p>>>0);let k=A=>A;if(m=m===0n){let A=8*g;k=B=>BigInt.asUintN(A,B),x=k(x)}tt(u,{name:p,Qc:k,Xc:(A,B)=>(typeof B=="number"&&(B=BigInt(B)),B),Wc:Ga(p,g,!m),Yc:null})}function um(u,p,g,m){tt(u>>>=0,{name:p=Xe(p>>>0),Qc:function(x){return!!x},Xc:function(x,k){return k?g:m},Wc:function(x){return this.Qc(($(),P)[x>>>0])},Yc:null})}var Va=[],$t=[0,1,,1,null,1,!0,1,!1,1];function di(u){9<(u>>>=0)&&--$t[u+1]==0&&($t[u]=void 0,Va.push(u))}var Le=u=>{if(!u)throw new Lt(`Cannot use deleted val. handle = ${u}`);return $t[u]},We=u=>{switch(u){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let p=Va.pop()||$t.length;return $t[p]=u,$t[p+1]=1,p}};function pi(u){return this.Qc(($(),F)[u>>>2>>>0])}var lm={name:"emscripten::val",Qc:u=>{var p=Le(u);return di(u),p},Xc:(u,p)=>We(p),Wc:pi,Yc:null};function dm(u){return tt(u>>>0,lm)}var pm=(u,p)=>{switch(p){case 4:return function(g){return this.Qc(($(),K)[g>>>2>>>0])};case 8:return function(g){return this.Qc(($(),Z)[g>>>3>>>0])};default:throw new TypeError(`invalid float width (${p}): ${u}`)}};function cm(u,p,g){g>>>=0,tt(u>>>=0,{name:p=Xe(p>>>0),Qc:m=>m,Xc:(m,x)=>x,Wc:pm(p,g),Yc:null})}function hm(u,p,g,m,x){u>>>=0,g>>>=0,p=Xe(p>>>0);let k=B=>B;if(m===0){var A=32-8*g;k=B=>B<<A>>>A,x=k(x)}tt(u,{name:p,Qc:k,Xc:(B,G)=>G,Wc:Ga(p,g,m!==0),Yc:null})}function fm(u,p,g){function m(k){var A=($(),F)[k>>>2>>>0];return k=($(),F)[k+4>>>2>>>0],new x(($(),N).buffer,k,A)}var x=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][p];tt(u>>>=0,{name:g=Xe(g>>>0),Qc:m,Wc:m},{Bd:!0})}var ct=(u,p,g)=>{var m=($(),P);if(p>>>=0,0<g){var x=p;g=p+g-1;for(var k=0;k<u.length;++k){var A=u.codePointAt(k);if(127>=A){if(p>=g)break;m[p++>>>0]=A}else if(2047>=A){if(p+1>=g)break;m[p++>>>0]=192|A>>6,m[p++>>>0]=128|63&A}else if(65535>=A){if(p+2>=g)break;m[p++>>>0]=224|A>>12,m[p++>>>0]=128|A>>6&63,m[p++>>>0]=128|63&A}else{if(p+3>=g)break;m[p++>>>0]=240|A>>18,m[p++>>>0]=128|A>>12&63,m[p++>>>0]=128|A>>6&63,m[p++>>>0]=128|63&A,k++}}m[p>>>0]=0,u=p-x}else u=0;return u},xr=u=>{for(var p=0,g=0;g<u.length;++g){var m=u.charCodeAt(g);127>=m?p++:2047>=m?p+=2:55296<=m&&57343>=m?(p+=4,++g):p+=3}return p};function mm(u,p){tt(u>>>=0,{name:p=Xe(p>>>0),Qc(g){var m=($(),F)[g>>>2>>>0];return m=Se(g+4,m,!0),Ze(g),m},Xc(g,m){m instanceof ArrayBuffer&&(m=new Uint8Array(m));var x=typeof m=="string";if(!(x||ArrayBuffer.isView(m)&&m.BYTES_PER_ELEMENT==1))throw new Lt("Cannot pass non-string to std::string");var k=x?xr(m):m.length,A=Jt(4+k+1),B=A+4;return($(),F)[A>>>2>>>0]=k,x?ct(m,B,k+1):($(),P).set(m,B>>>0),g!==null&&g.push(Ze,A),A},Wc:pi,Yc(g){Ze(g)}})}var Ha=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,gm=(u,p,g)=>{if(u>>>=1,16<(p=Ea(($(),H),u,p/2,g))-u&&Ha)return Ha.decode(($(),H).slice(u,p));for(g="";u<p;++u){var m=($(),H)[u>>>0];g+=String.fromCharCode(m)}return g},ym=(u,p,g)=>{if(g??(g=2147483647),2>g)return 0;var m=p;g=(g-=2)<2*u.length?g/2:u.length;for(var x=0;x<g;++x){var k=u.charCodeAt(x);($(),V)[p>>>1>>>0]=k,p+=2}return($(),V)[p>>>1>>>0]=0,p-m},_m=u=>2*u.length,wm=(u,p,g)=>{var m="";u>>>=2;for(var x=0;!(x>=p/4);x++){var k=($(),F)[u+x>>>0];if(!k&&!g)break;m+=String.fromCodePoint(k)}return m},bm=(u,p,g)=>{if(p>>>=0,g??(g=2147483647),4>g)return 0;var m=p;g=m+g-4;for(var x=0;x<u.length;++x){var k=u.codePointAt(x);if(65535<k&&x++,($(),M)[p>>>2>>>0]=k,(p+=4)+4>g)break}return($(),M)[p>>>2>>>0]=0,p-m},$m=u=>{for(var p=0,g=0;g<u.length;++g)65535<u.codePointAt(g)&&g++,p+=4;return p};function vm(u,p,g){if(u>>>=0,p>>>=0,g=Xe(g>>>=0),p===2)var m=gm,x=ym,k=_m;else m=wm,x=bm,k=$m;tt(u,{name:g,Qc:A=>{var B=($(),F)[A>>>2>>>0];return B=m(A+4,B*p,!0),Ze(A),B},Xc:(A,B)=>{if(typeof B!="string")throw new Lt(`Cannot pass non-string to C++ string type ${g}`);var G=k(B),j=Jt(4+G+p);return($(),F)[j>>>2>>>0]=G/p,x(B,j+4,G+p),A!==null&&A.push(Ze,j),j},Wc:pi,Yc(A){Ze(A)}})}function xm(u,p){tt(u>>>=0,{Cd:!0,name:p=Xe(p>>>0),Qc:()=>{},Xc:()=>{}})}function Sm(u){bi(u>>>0,!i,1,!r,131072,!1),ba()}var Sr=u=>{if(!E)try{if(u(),!(0<_e))try{n?Ar()&&$i(_):Xt(_)}catch(p){p instanceof ut||p=="unwind"||d(0,p)}}catch(p){p instanceof ut||p=="unwind"||d(0,p)}},Im=!Atomics.waitAsync||((co=globalThis.navigator)==null?void 0:co.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ci(u){u>>>=0,Im||(Atomics.waitAsync(($(),M),u>>>2,u).value.then(Ir),u+=128,Atomics.store(($(),M),u>>>2,1))}var Ir=()=>Sr(()=>{var u=Ar();u&&(ci(u),_s())});function Tm(u,p){(u>>>=0)==p>>>0?setTimeout(Ir):n?postMessage({ad:u,Uc:"checkMailbox"}):(u=bt[u])&&u.postMessage({Uc:"checkMailbox"})}var hi=[];function km(u,p,g,m,x){for(p>>>=0,x>>>=0,hi.length=0,g=x>>>3,m=x+m>>>3;g<m;){var k;k=($(),le)[g++>>>0]?($(),le)[g++>>>0]:($(),Z)[g++>>>0],hi.push(k)}return(p?Ii[p]:yg[u])(...hi)}var Em=()=>{_e=0};function Cm(u){u>>>=0,n?postMessage({Uc:"cleanupThread",Qd:u}):wa(bt[u])}function zm(u){}var Tr=u=>{try{u()}catch(p){ee(p)}};function Am(u){var p=(...g)=>{kr.push(u);try{return u(...g)}finally{E||(kr.pop(),Qe&&ht===1&&kr.length===0&&(ht=0,_e+=1,Tr(oo),typeof Fibers<"u"&&Fibers.ce()))}};return Ka.set(u,p),p}var ht=0,Qe=null,Fa=0,kr=[],fi=new Map,ja=new Map,Ka=new Map,Om=0,mi=null,Mm=[],Ya=u=>(function(p){if(!E){if(ht===0){var g=!1,m=!1;p((x=0)=>{if(!E&&(Fa=x,g=!0,m)){ht=2,Tr(()=>uo(Qe)),typeof MainLoop<"u"&&MainLoop.yd&&MainLoop.resume(),x=!1;try{var k=(function(){var G=($(),M)[Qe+8>>>2>>>0];return G=ja.get(G),G=Ka.get(G),--_e,G()})()}catch(G){k=G,x=!0}var A=!1;if(!Qe){var B=mi;B&&(mi=null,(x?B.reject:B.resolve)(k),A=!0)}if(x&&!A)throw k}}),m=!0,g||(ht=1,Qe=(function(){var x=Jt(65548),k=x+12;if(($(),F)[x>>>2>>>0]=k,($(),F)[x+4>>>2>>>0]=k+65536,k=kr[0],!fi.has(k)){var A=Om++;fi.set(k,A),ja.set(A,k)}return k=fi.get(k),($(),M)[x+8>>>2>>>0]=k,x})(),typeof MainLoop<"u"&&MainLoop.yd&&MainLoop.pause(),Tr(()=>so(Qe)))}else ht===2?(ht=0,Tr(lo),Ze(Qe),Qe=null,Mm.forEach(Sr)):ee(`invalid state: ${ht}`);return Fa}})(p=>{u().then(p)});function Rm(u){return u>>>=0,Ya(async()=>{var p=await Le(u);return We(p)})}var gi=[],Nm=u=>{var p=gi.length;return gi.push(u),p},Bm=(u,p)=>{for(var g=Array(u),m=0;m<u;++m){var x=m,k=($(),F)[p+4*m>>>2>>>0],A=li[k];if(A===void 0)throw u=`parameter ${m}`,k=cs(k),p=Xe(k),Ze(k),new Lt(`${u} has unknown type ${p}`);g[x]=A}return g},Dm=(u,p,g)=>{var m=[];return u=u(m,g),m.length&&(($(),F)[p>>>2>>>0]=We(m)),u},Pm={},Er=u=>{var p=Pm[u];return p===void 0?Xe(u):p};function Um(u,p,g){var[m,...x]=Bm(u,p>>>0);p=m.Xc.bind(m);var k=x.map(G=>G.Wc.bind(G));u--;var A={toValue:Le};switch(u=k.map((G,j)=>{var ae=`argFromPtr${j}`;return A[ae]=G,`${ae}(args${j?"+"+8*j:""})`}),g){case 0:var B="toValue(handle)";break;case 2:B="new (toValue(handle))";break;case 3:B="";break;case 1:A.getStringOrSymbol=Er,B="toValue(handle)[getStringOrSymbol(methodName)]"}return B+=`(${u})`,m.Cd||(A.toReturnWire=p,A.emval_returnValue=Dm,B=`return emval_returnValue(toReturnWire, destructorsRef, ${B})`),B=`return function (handle, methodName, destructorsRef, args) {
  ${B}
  }`,g=new Function(Object.keys(A),B)(...Object.values(A)),B=`methodCaller<(${x.map(G=>G.name)}) => ${m.name}>`,Nm(Object.defineProperty(g,"name",{value:B}))}function Lm(u,p){return p>>>=0,(u=Le(u>>>0))==Le(p)}function qm(u){return(u>>>=0)?(u=Er(u),We(globalThis[u])):We(globalThis)}function Wm(u){return u=Er(u>>>0),We(t[u])}function Gm(u,p){return p>>>=0,u=Le(u>>>0),p=Le(p),We(u[p])}function Vm(u){9<(u>>>=0)&&($t[u+1]+=1)}function Xa(u,p,g,m,x){return gi[u>>>0](p>>>0,g>>>0,m>>>0,x>>>0)}function Hm(u,p,g,m,x){return Xa(u>>>0,p>>>0,g>>>0,m>>>0,x>>>0)}function Fm(){return We([])}function jm(u){u=Le(u>>>0);for(var p=Array(u.length),g=0;g<u.length;g++)p[g]=u[g];return We(p)}function Km(u){return We(Er(u>>>0))}function Ym(){return We({})}function Xm(u){for(var p=Le(u>>>=0);p.length;){var g=p.pop();p.pop()(g)}di(u)}function Qm(u,p,g){p>>>=0,g>>>=0,u=Le(u>>>0),p=Le(p),g=Le(g),u[p]=g}function Zm(u,p){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),p>>>=0,u=new Date(1e3*u),($(),M)[p>>>2>>>0]=u.getUTCSeconds(),($(),M)[p+4>>>2>>>0]=u.getUTCMinutes(),($(),M)[p+8>>>2>>>0]=u.getUTCHours(),($(),M)[p+12>>>2>>>0]=u.getUTCDate(),($(),M)[p+16>>>2>>>0]=u.getUTCMonth(),($(),M)[p+20>>>2>>>0]=u.getUTCFullYear()-1900,($(),M)[p+24>>>2>>>0]=u.getUTCDay(),u=(u.getTime()-Date.UTC(u.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,($(),M)[p+28>>>2>>>0]=u}var Qa=u=>u%4==0&&(u%100!=0||u%400==0),Za=[0,31,60,91,121,152,182,213,244,274,305,335],Ja=[0,31,59,90,120,151,181,212,243,273,304,334];function Jm(u,p){u=-9007199254740992>u||9007199254740992<u?NaN:Number(u),p>>>=0,u=new Date(1e3*u),($(),M)[p>>>2>>>0]=u.getSeconds(),($(),M)[p+4>>>2>>>0]=u.getMinutes(),($(),M)[p+8>>>2>>>0]=u.getHours(),($(),M)[p+12>>>2>>>0]=u.getDate(),($(),M)[p+16>>>2>>>0]=u.getMonth(),($(),M)[p+20>>>2>>>0]=u.getFullYear()-1900,($(),M)[p+24>>>2>>>0]=u.getDay();var g=(Qa(u.getFullYear())?Za:Ja)[u.getMonth()]+u.getDate()-1|0;($(),M)[p+28>>>2>>>0]=g,($(),M)[p+36>>>2>>>0]=-60*u.getTimezoneOffset(),g=new Date(u.getFullYear(),6,1).getTimezoneOffset();var m=new Date(u.getFullYear(),0,1).getTimezoneOffset();u=0|(g!=m&&u.getTimezoneOffset()==Math.min(m,g)),($(),M)[p+32>>>2>>>0]=u}function eg(u){u>>>=0;var p=new Date(($(),M)[u+20>>>2>>>0]+1900,($(),M)[u+16>>>2>>>0],($(),M)[u+12>>>2>>>0],($(),M)[u+8>>>2>>>0],($(),M)[u+4>>>2>>>0],($(),M)[u>>>2>>>0],0),g=($(),M)[u+32>>>2>>>0],m=p.getTimezoneOffset(),x=new Date(p.getFullYear(),6,1).getTimezoneOffset(),k=new Date(p.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(k,x);return 0>g?($(),M)[u+32>>>2>>>0]=+(x!=k&&A==m):0<g!=(A==m)&&(x=Math.max(k,x),p.setTime(p.getTime()+6e4*((0<g?A:x)-m))),($(),M)[u+24>>>2>>>0]=p.getDay(),g=(Qa(p.getFullYear())?Za:Ja)[p.getMonth()]+p.getDate()-1|0,($(),M)[u+28>>>2>>>0]=g,($(),M)[u>>>2>>>0]=p.getSeconds(),($(),M)[u+4>>>2>>>0]=p.getMinutes(),($(),M)[u+8>>>2>>>0]=p.getHours(),($(),M)[u+12>>>2>>>0]=p.getDate(),($(),M)[u+16>>>2>>>0]=p.getMonth(),($(),M)[u+20>>>2>>>0]=p.getYear(),u=p.getTime(),BigInt(isNaN(u)?-1:u/1e3)}function es(u,p,g,m,x,k,A){return n?re(16,1,u,p,g,m,x,k,A):-52}function ts(u,p,g,m,x,k){if(n)return re(17,1,u,p,g,m,x,k)}var Zt={},tg=()=>performance.timeOrigin+performance.now();function rs(u,p){if(n)return re(18,1,u,p);if(Zt[u]&&(clearTimeout(Zt[u].id),delete Zt[u]),!p)return 0;var g=setTimeout(()=>{delete Zt[u],Sr(()=>ys(u,performance.timeOrigin+performance.now()))},p);return Zt[u]={id:g,be:p},0}function rg(u,p,g,m){u>>>=0,p>>>=0,g>>>=0,m>>>=0;var x=new Date().getFullYear(),k=new Date(x,0,1).getTimezoneOffset();x=new Date(x,6,1).getTimezoneOffset();var A=Math.max(k,x);($(),F)[u>>>2>>>0]=60*A,($(),M)[p>>>2>>>0]=+(k!=x),u=(p=B=>{var G=Math.abs(B);return`UTC${0<=B?"-":"+"}${String(Math.floor(G/60)).padStart(2,"0")}${String(G%60).padStart(2,"0")}`})(k),p=p(x),x<k?(ct(u,g,17),ct(p,m,17)):(ct(u,m,17),ct(p,g,17))}var ig=()=>Date.now();function ng(u,p,g){return g>>>=0,0<=u&&3>=u?(u===0?u=Date.now():u=performance.timeOrigin+performance.now(),u=Math.round(1e6*u),($(),le)[g>>>3>>>0]=BigInt(u),0):28}var yi=[],is=(u,p)=>{yi.length=0;for(var g;g=($(),P)[u++>>>0];){var m=g!=105;p+=(m&=g!=112)&&p%8?4:0,yi.push(g==112?($(),F)[p>>>2>>>0]:g==106?($(),le)[p>>>3>>>0]:g==105?($(),M)[p>>>2>>>0]:($(),Z)[p>>>3>>>0]),p+=m?8:4}return yi};function ag(u,p,g){return u>>>=0,p=is(p>>>0,g>>>0),Ii[u](...p)}function sg(u,p,g){return u>>>=0,p=is(p>>>0,g>>>0),Ii[u](...p)}var og=()=>{};function ug(u,p){return C(Se(u>>>0,p>>>0))}var lg=()=>{throw _e+=1,"unwind"};function dg(){return 4294901760}var pg=()=>navigator.hardwareConcurrency,vt={},Cr=u=>{var p;return(p=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(u))?+p[1]:(p=/:(\d+):\d+(?:\)|$)/.exec(u))?2147483648|+p[1]:0},ns=u=>{for(var p of u)(u=Cr(p))&&(vt[u]=p)};function cg(){var u=Error().stack.toString().split(`
`);return u[0]=="Error"&&u.shift(),ns(u),vt.sd=Cr(u[3]),vt.Md=u,vt.sd}function zr(u){if(!(u=vt[u>>>0]))return 0;var p;if(p=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(u))u=p[1];else if(p=/^\s+at (.*) \(.*\)$/.exec(u))u=p[1];else{if(!(p=/^(.+?)@/.exec(u)))return 0;u=p[1]}Ze(zr.td??0),p=xr(u)+1;var g=Jt(p);return g&&ct(u,g,p),zr.td=g,zr.td}function hg(u){u>>>=0;var p=($(),P).length;if(u<=p||4294901760<u)return!1;for(var g=1;4>=g;g*=2){var m=p*(1+.2/g);m=Math.min(m,u+100663296);e:{m=(Math.min(4294901760,65536*Math.ceil(Math.max(u,m)/65536))-pt.buffer.byteLength+65535)/65536|0;try{pt.grow(m),L();var x=1;break e}catch{}x=void 0}if(x)return!0}return!1}function fg(u,p,g){if(u>>>=0,p>>>=0,vt.sd==u)var m=vt.Md;else(m=Error().stack.toString().split(`
`))[0]=="Error"&&m.shift(),ns(m);for(var x=3;m[x]&&Cr(m[x])!=u;)++x;for(u=0;u<g&&m[u+x];++u)($(),M)[p+4*u>>>2>>>0]=Cr(m[u+x]);return u}var _i,wi={},as=()=>{var m;if(!_i){var u,p={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((m=globalThis.navigator)==null?void 0:m.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(u in wi)wi[u]===void 0?delete p[u]:p[u]=wi[u];var g=[];for(u in p)g.push(`${u}=${p[u]}`);_i=g}return _i};function ss(u,p){if(n)return re(19,1,u,p);u>>>=0,p>>>=0;var g,m=0,x=0;for(g of as()){var k=p+m;($(),F)[u+x>>>2>>>0]=k,m+=ct(g,k,1/0)+1,x+=4}return 0}function os(u,p){if(n)return re(20,1,u,p);u>>>=0,p>>>=0;var g=as();for(var m of(($(),F)[u>>>2>>>0]=g.length,u=0,g))u+=xr(m)+1;return($(),F)[p>>>2>>>0]=u,0}function us(u){return n?re(21,1,u):52}function ls(u,p,g,m){return n?re(22,1,u,p,g,m):52}function ds(u,p,g,m){return n?re(23,1,u,p,g,m):70}var mg=[null,[],[]];function ps(u,p,g,m){if(n)return re(24,1,u,p,g,m);p>>>=0,g>>>=0,m>>>=0;for(var x=0,k=0;k<g;k++){var A=($(),F)[p>>>2>>>0],B=($(),F)[p+4>>>2>>>0];p+=8;for(var G=0;G<B;G++){var j=u,ae=($(),P)[A+G>>>0],pe=mg[j];ae===0||ae===10?((j===1?T:C)(Ca(pe)),pe.length=0):pe.push(ae)}x+=B}return($(),F)[m>>>2>>>0]=x,0}function gg(u){return u>>>0}n||(function(){for(var u=t.numThreads-1;u--;)va();wr.push(async()=>{var p=(async function(){if(!n)return Promise.all(dt.map($a))})();Re++,await p,--Re==0&&Ae&&(p=Ae,Ae=null,p())})})(),n||(pt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),L()),t.wasmBinary&&(f=t.wasmBinary),t.stackSave=()=>oe(),t.stackRestore=u=>se(u),t.stackAlloc=u=>vi(u),t.setValue=function(u,p,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":($(),N)[u>>>0]=p;break;case"i16":($(),V)[u>>>1>>>0]=p;break;case"i32":($(),M)[u>>>2>>>0]=p;break;case"i64":($(),le)[u>>>3>>>0]=BigInt(p);break;case"float":($(),K)[u>>>2>>>0]=p;break;case"double":($(),Z)[u>>>3>>>0]=p;break;case"*":($(),F)[u>>>2>>>0]=p;break;default:ee(`invalid type for setValue: ${g}`)}},t.getValue=function(u,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":return($(),N)[u>>>0];case"i16":return($(),V)[u>>>1>>>0];case"i32":return($(),M)[u>>>2>>>0];case"i64":return($(),le)[u>>>3>>>0];case"float":return($(),K)[u>>>2>>>0];case"double":return($(),Z)[u>>>3>>>0];case"*":return($(),F)[u>>>2>>>0];default:ee(`invalid type for getValue: ${p}`)}},t.UTF8ToString=Se,t.stringToUTF8=ct,t.lengthBytesUTF8=xr;var cs,hs,Ar,Ze,Jt,bi,fs,ms,gs,$i,ys,_s,ue,er,ws,se,vi,oe,bs,xi,$s,vs,xs,Si,Ss,Is,Ts,ks,Es,Cs,zs,As,Os,Ms,Rs,Ns,Bs,Ds,Ps,Us,Ls,qs,Ws,Gs,Vs,Hs,Fs,js,Ks,Ys,Xs,Qs,Zs,Js,eo,to,ro,io,no,ao,so,oo,uo,lo,rt,yg=[Ne,br,Ia,za,Aa,Oa,Ma,Ra,Na,Ba,Da,Pa,Ua,La,qa,Wa,es,ts,rs,ss,os,us,ls,ds,ps],Ii={927820:(u,p,g,m,x)=>{if(t===void 0||!t.Zc)return 1;if((u=Se(Number(u>>>0))).startsWith("./")&&(u=u.substring(2)),!(u=t.Zc.get(u)))return 2;if(p=Number(p>>>0),g=Number(g>>>0),m=Number(m>>>0),p+g>u.byteLength)return 3;try{let k=u.subarray(p,p+g);switch(x){case 0:($(),P).set(k,m>>>0);break;case 1:t.Xd?t.Xd(m,k):t.Ld(m,k);break;default:return 4}return 0}catch{return 4}},928644:(u,p,g)=>{t.xd(u,($(),P).subarray(p>>>0,p+g>>>0))},928708:()=>t.Zd(),928750:u=>{t.vd(u)},928787:()=>{t.Ed()},928818:()=>{t.Fd()},928847:()=>{t.Jd()},928872:u=>t.Dd(u),928905:u=>t.Hd(u),928937:(u,p,g)=>{t.jd(Number(u),Number(p),Number(g),!0)},929e3:(u,p,g)=>{t.jd(Number(u),Number(p),Number(g))},929057:()=>typeof wasmOffsetConverter<"u",929114:u=>{t.ac("Abs",u,void 0)},929165:u=>{t.ac("Neg",u,void 0)},929216:u=>{t.ac("Floor",u,void 0)},929269:u=>{t.ac("Ceil",u,void 0)},929321:u=>{t.ac("Reciprocal",u,void 0)},929379:u=>{t.ac("Sqrt",u,void 0)},929431:u=>{t.ac("Exp",u,void 0)},929482:u=>{t.ac("Erf",u,void 0)},929533:u=>{t.ac("Sigmoid",u,void 0)},929588:(u,p,g)=>{t.ac("HardSigmoid",u,{alpha:p,beta:g})},929667:u=>{t.ac("Log",u,void 0)},929718:u=>{t.ac("Sin",u,void 0)},929769:u=>{t.ac("Cos",u,void 0)},929820:u=>{t.ac("Tan",u,void 0)},929871:u=>{t.ac("Asin",u,void 0)},929923:u=>{t.ac("Acos",u,void 0)},929975:u=>{t.ac("Atan",u,void 0)},930027:u=>{t.ac("Sinh",u,void 0)},930079:u=>{t.ac("Cosh",u,void 0)},930131:u=>{t.ac("Asinh",u,void 0)},930184:u=>{t.ac("Acosh",u,void 0)},930237:u=>{t.ac("Atanh",u,void 0)},930290:u=>{t.ac("Tanh",u,void 0)},930342:u=>{t.ac("Not",u,void 0)},930393:(u,p,g)=>{t.ac("Clip",u,{min:p,max:g})},930462:u=>{t.ac("Clip",u,void 0)},930514:(u,p)=>{t.ac("Elu",u,{alpha:p})},930572:u=>{t.ac("Gelu",u,void 0)},930624:u=>{t.ac("Relu",u,void 0)},930676:(u,p)=>{t.ac("LeakyRelu",u,{alpha:p})},930740:(u,p)=>{t.ac("ThresholdedRelu",u,{alpha:p})},930810:(u,p)=>{t.ac("Cast",u,{to:p})},930868:u=>{t.ac("Add",u,void 0)},930919:u=>{t.ac("Sub",u,void 0)},930970:u=>{t.ac("Mul",u,void 0)},931021:u=>{t.ac("Div",u,void 0)},931072:u=>{t.ac("Pow",u,void 0)},931123:u=>{t.ac("Equal",u,void 0)},931176:u=>{t.ac("Greater",u,void 0)},931231:u=>{t.ac("GreaterOrEqual",u,void 0)},931293:u=>{t.ac("Less",u,void 0)},931345:u=>{t.ac("LessOrEqual",u,void 0)},931404:(u,p,g,m,x)=>{t.ac("ReduceMean",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},931579:(u,p,g,m,x)=>{t.ac("ReduceMax",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},931753:(u,p,g,m,x)=>{t.ac("ReduceMin",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},931927:(u,p,g,m,x)=>{t.ac("ReduceProd",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},932102:(u,p,g,m,x)=>{t.ac("ReduceSum",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},932276:(u,p,g,m,x)=>{t.ac("ReduceL1",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},932449:(u,p,g,m,x)=>{t.ac("ReduceL2",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},932622:(u,p,g,m,x)=>{t.ac("ReduceLogSum",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},932799:(u,p,g,m,x)=>{t.ac("ReduceSumSquare",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},932979:(u,p,g,m,x)=>{t.ac("ReduceLogSumExp",u,{keepDims:!!p,noopWithEmptyAxes:!!g,axes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},933159:u=>{t.ac("Where",u,void 0)},933212:(u,p,g)=>{t.ac("Transpose",u,{perm:p?Array.from(($(),M).subarray(Number(p)>>>0,Number(g)>>>0)):[]})},933336:(u,p,g,m)=>{t.ac("DepthToSpace",u,{blocksize:p,mode:Se(g),format:m?"NHWC":"NCHW"})},933469:(u,p,g,m)=>{t.ac("DepthToSpace",u,{blocksize:p,mode:Se(g),format:m?"NHWC":"NCHW"})},933602:(u,p,g,m,x,k,A,B,G,j,ae,pe,ge,we,ft)=>{t.ac("ConvTranspose",u,{format:G?"NHWC":"NCHW",autoPad:p,dilations:[g],group:m,kernelShape:[x],pads:[k,A],strides:[B],wIsConst:()=>!!($(),N)[j>>>0],outputPadding:ae?Array.from(($(),M).subarray(Number(ae)>>>0,Number(pe)>>>0)):[],outputShape:ge?Array.from(($(),M).subarray(Number(ge)>>>0,Number(we)>>>0)):[],activation:Se(ft)})},934035:(u,p,g,m,x,k,A,B,G,j,ae,pe,ge,we)=>{t.ac("ConvTranspose",u,{format:B?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),M).subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:m,kernelShape:Array.from(($(),M).subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(($(),M).subarray(Number(k)>>>0,4+(Number(k)>>>0)>>>0)),strides:Array.from(($(),M).subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!($(),N)[G>>>0],outputPadding:j?Array.from(($(),M).subarray(Number(j)>>>0,Number(ae)>>>0)):[],outputShape:pe?Array.from(($(),M).subarray(Number(pe)>>>0,Number(ge)>>>0)):[],activation:Se(we)})},934696:(u,p,g,m,x,k,A,B,G,j,ae,pe,ge,we,ft)=>{t.ac("ConvTranspose",u,{format:G?"NHWC":"NCHW",autoPad:p,dilations:[g],group:m,kernelShape:[x],pads:[k,A],strides:[B],wIsConst:()=>!!($(),N)[j>>>0],outputPadding:ae?Array.from(($(),M).subarray(Number(ae)>>>0,Number(pe)>>>0)):[],outputShape:ge?Array.from(($(),M).subarray(Number(ge)>>>0,Number(we)>>>0)):[],activation:Se(ft)})},935129:(u,p,g,m,x,k,A,B,G,j,ae,pe,ge,we)=>{t.ac("ConvTranspose",u,{format:B?"NHWC":"NCHW",autoPad:p,dilations:Array.from(($(),M).subarray(Number(g)>>>0,2+(Number(g)>>>0)>>>0)),group:m,kernelShape:Array.from(($(),M).subarray(Number(x)>>>0,2+(Number(x)>>>0)>>>0)),pads:Array.from(($(),M).subarray(Number(k)>>>0,4+(Number(k)>>>0)>>>0)),strides:Array.from(($(),M).subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!($(),N)[G>>>0],outputPadding:j?Array.from(($(),M).subarray(Number(j)>>>0,Number(ae)>>>0)):[],outputShape:pe?Array.from(($(),M).subarray(Number(pe)>>>0,Number(ge)>>>0)):[],activation:Se(we)})},935790:(u,p)=>{t.ac("GlobalAveragePool",u,{format:p?"NHWC":"NCHW"})},935881:(u,p,g,m,x,k,A,B,G,j,ae,pe,ge,we)=>{t.ac("AveragePool",u,{format:we?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:m,storage_order:x,dilations:k?Array.from(($(),M).subarray(Number(k)>>>0,Number(A)>>>0)):[],kernel_shape:B?Array.from(($(),M).subarray(Number(B)>>>0,Number(G)>>>0)):[],pads:j?Array.from(($(),M).subarray(Number(j)>>>0,Number(ae)>>>0)):[],strides:pe?Array.from(($(),M).subarray(Number(pe)>>>0,Number(ge)>>>0)):[]})},936360:(u,p)=>{t.ac("GlobalAveragePool",u,{format:p?"NHWC":"NCHW"})},936451:(u,p,g,m,x,k,A,B,G,j,ae,pe,ge,we)=>{t.ac("AveragePool",u,{format:we?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:m,storage_order:x,dilations:k?Array.from(($(),M).subarray(Number(k)>>>0,Number(A)>>>0)):[],kernel_shape:B?Array.from(($(),M).subarray(Number(B)>>>0,Number(G)>>>0)):[],pads:j?Array.from(($(),M).subarray(Number(j)>>>0,Number(ae)>>>0)):[],strides:pe?Array.from(($(),M).subarray(Number(pe)>>>0,Number(ge)>>>0)):[]})},936930:(u,p)=>{t.ac("GlobalMaxPool",u,{format:p?"NHWC":"NCHW"})},937017:(u,p,g,m,x,k,A,B,G,j,ae,pe,ge,we)=>{t.ac("MaxPool",u,{format:we?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:m,storage_order:x,dilations:k?Array.from(($(),M).subarray(Number(k)>>>0,Number(A)>>>0)):[],kernel_shape:B?Array.from(($(),M).subarray(Number(B)>>>0,Number(G)>>>0)):[],pads:j?Array.from(($(),M).subarray(Number(j)>>>0,Number(ae)>>>0)):[],strides:pe?Array.from(($(),M).subarray(Number(pe)>>>0,Number(ge)>>>0)):[]})},937492:(u,p)=>{t.ac("GlobalMaxPool",u,{format:p?"NHWC":"NCHW"})},937579:(u,p,g,m,x,k,A,B,G,j,ae,pe,ge,we)=>{t.ac("MaxPool",u,{format:we?"NHWC":"NCHW",auto_pad:p,ceil_mode:g,count_include_pad:m,storage_order:x,dilations:k?Array.from(($(),M).subarray(Number(k)>>>0,Number(A)>>>0)):[],kernel_shape:B?Array.from(($(),M).subarray(Number(B)>>>0,Number(G)>>>0)):[],pads:j?Array.from(($(),M).subarray(Number(j)>>>0,Number(ae)>>>0)):[],strides:pe?Array.from(($(),M).subarray(Number(pe)>>>0,Number(ge)>>>0)):[]})},938054:(u,p,g,m,x)=>{t.ac("Gemm",u,{alpha:p,beta:g,transA:m,transB:x})},938158:u=>{t.ac("MatMul",u,void 0)},938212:(u,p,g,m)=>{t.ac("ArgMax",u,{keepDims:!!p,selectLastIndex:!!g,axis:m})},938320:(u,p,g,m)=>{t.ac("ArgMin",u,{keepDims:!!p,selectLastIndex:!!g,axis:m})},938428:(u,p)=>{t.ac("Softmax",u,{axis:p})},938491:(u,p)=>{t.ac("Concat",u,{axis:p})},938551:(u,p,g,m,x)=>{t.ac("Split",u,{axis:p,numOutputs:g,splitSizes:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},938707:u=>{t.ac("Expand",u,void 0)},938761:(u,p)=>{t.ac("Gather",u,{axis:Number(p)})},938832:(u,p)=>{t.ac("GatherElements",u,{axis:Number(p)})},938911:(u,p)=>{t.ac("GatherND",u,{batch_dims:Number(p)})},938990:(u,p,g,m,x,k,A,B,G,j,ae)=>{t.ac("Resize",u,{antialias:p,axes:g?Array.from(($(),M).subarray(Number(g)>>>0,Number(m)>>>0)):[],coordinateTransformMode:Se(x),cubicCoeffA:k,excludeOutside:A,extrapolationValue:B,keepAspectRatioPolicy:Se(G),mode:Se(j),nearestMode:Se(ae)})},939352:(u,p,g,m,x,k,A)=>{t.ac("Slice",u,{starts:p?Array.from(($(),M).subarray(Number(p)>>>0,Number(g)>>>0)):[],ends:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[],axes:k?Array.from(($(),M).subarray(Number(k)>>>0,Number(A)>>>0)):[]})},939616:u=>{t.ac("Tile",u,void 0)},939668:(u,p,g)=>{t.ac("InstanceNormalization",u,{epsilon:p,format:g?"NHWC":"NCHW"})},939782:(u,p,g)=>{t.ac("InstanceNormalization",u,{epsilon:p,format:g?"NHWC":"NCHW"})},939896:u=>{t.ac("Range",u,void 0)},939949:(u,p)=>{t.ac("Einsum",u,{equation:Se(p)})},940030:(u,p,g,m,x)=>{t.ac("Pad",u,{mode:p,value:g,pads:m?Array.from(($(),M).subarray(Number(m)>>>0,Number(x)>>>0)):[]})},940173:(u,p,g,m,x,k)=>{t.ac("BatchNormalization",u,{epsilon:p,momentum:g,spatial:!!x,trainingMode:!!m,format:k?"NHWC":"NCHW"})},940342:(u,p,g,m,x,k)=>{t.ac("BatchNormalization",u,{epsilon:p,momentum:g,spatial:!!x,trainingMode:!!m,format:k?"NHWC":"NCHW"})},940511:(u,p,g)=>{t.ac("CumSum",u,{exclusive:Number(p),reverse:Number(g)})},940608:(u,p,g)=>{t.ac("DequantizeLinear",u,{axis:p,blockSize:g})},940698:(u,p,g,m,x)=>{t.ac("GridSample",u,{align_corners:p,mode:Se(g),padding_mode:Se(m),format:x?"NHWC":"NCHW"})},940868:(u,p,g,m,x)=>{t.ac("GridSample",u,{align_corners:p,mode:Se(g),padding_mode:Se(m),format:x?"NHWC":"NCHW"})},941038:(u,p)=>{t.ac("ScatterND",u,{reduction:Se(p)})},941123:(u,p,g,m,x,k,A,B,G)=>{t.ac("Attention",u,{numHeads:p,isUnidirectional:g,maskFilterValue:m,scale:x,doRotary:k,qkvHiddenSizes:A?Array.from(($(),M).subarray(Number(B)>>>0,Number(B)+A>>>0)):[],pastPresentShareBuffer:!!G})},941395:u=>{t.ac("BiasAdd",u,void 0)},941450:u=>{t.ac("BiasSplitGelu",u,void 0)},941511:u=>{t.ac("FastGelu",u,void 0)},941567:(u,p,g,m,x,k,A,B,G,j,ae,pe,ge,we,ft,Ti)=>{t.ac("Conv",u,{format:pe?"NHWC":"NCHW",auto_pad:p,dilations:g?Array.from(($(),M).subarray(Number(g)>>>0,Number(m)>>>0)):[],group:x,kernel_shape:k?Array.from(($(),M).subarray(Number(k)>>>0,Number(A)>>>0)):[],pads:B?Array.from(($(),M).subarray(Number(B)>>>0,Number(G)>>>0)):[],strides:j?Array.from(($(),M).subarray(Number(j)>>>0,Number(ae)>>>0)):[],w_is_const:()=>!!($(),N)[Number(ge)>>>0],activation:Se(we),activation_params:ft?Array.from(($(),K).subarray(Number(ft)>>>0,Number(Ti)>>>0)):[]})},942151:u=>{t.ac("Gelu",u,void 0)},942203:(u,p,g,m,x,k,A,B,G)=>{t.ac("GroupQueryAttention",u,{numHeads:p,kvNumHeads:g,scale:m,softcap:x,doRotary:k,rotaryInterleaved:A,smoothSoftmax:B,localWindowSize:G})},942420:(u,p,g,m)=>{t.ac("LayerNormalization",u,{axis:p,epsilon:g,simplified:!!m})},942531:(u,p,g,m)=>{t.ac("LayerNormalization",u,{axis:p,epsilon:g,simplified:!!m})},942642:(u,p,g,m,x,k)=>{t.ac("MatMulNBits",u,{k:p,n:g,accuracyLevel:m,bits:x,blockSize:k})},942769:(u,p,g,m,x,k)=>{t.ac("MultiHeadAttention",u,{numHeads:p,isUnidirectional:g,maskFilterValue:m,scale:x,doRotary:k})},942928:(u,p)=>{t.ac("QuickGelu",u,{alpha:p})},942992:(u,p,g,m,x)=>{t.ac("RotaryEmbedding",u,{interleaved:!!p,numHeads:g,rotaryEmbeddingDim:m,scale:x})},943131:(u,p,g)=>{t.ac("SkipLayerNormalization",u,{epsilon:p,simplified:!!g})},943233:(u,p,g)=>{t.ac("SkipLayerNormalization",u,{epsilon:p,simplified:!!g})},943335:(u,p,g,m)=>{t.ac("GatherBlockQuantized",u,{gatherAxis:p,quantizeAxis:g,blockSize:m})},943456:u=>{t.Id(u)},943490:(u,p)=>t.Kd(Number(u),Number(p),t.$c.Nd,t.$c.errors)};function _g(u,p,g){return Ya(async()=>{await t.Gd(Number(u),Number(p),Number(g))})}function wg(){return typeof wasmOffsetConverter<"u"}function bg(u,p,g,m){var x=oe();try{return As(u,p,g,m)}catch(k){if(se(x),k!==k+0)throw k;ue(1,0)}}function $g(u,p,g){var m=oe();try{return ks(u,p,g)}catch(x){if(se(m),x!==x+0)throw x;ue(1,0)}}function vg(u,p,g){var m=oe();try{xs(u,p,g)}catch(x){if(se(m),x!==x+0)throw x;ue(1,0)}}function xg(u,p){var g=oe();try{return Si(u,p)}catch(m){if(se(g),m!==m+0)throw m;ue(1,0)}}function Sg(u){var p=oe();try{Ss(u)}catch(g){if(se(p),g!==g+0)throw g;ue(1,0)}}function Ig(u,p,g,m,x,k,A){var B=oe();try{return Cs(u,p,g,m,x,k,A)}catch(G){if(se(B),G!==G+0)throw G;ue(1,0)}}function Tg(u,p){var g=oe();try{Os(u,p)}catch(m){if(se(g),m!==m+0)throw m;ue(1,0)}}function kg(u,p,g,m,x,k){var A=oe();try{Is(u,p,g,m,x,k)}catch(B){if(se(A),B!==B+0)throw B;ue(1,0)}}function Eg(u,p,g,m){var x=oe();try{zs(u,p,g,m)}catch(k){if(se(x),k!==k+0)throw k;ue(1,0)}}function Cg(u,p,g,m,x){var k=oe();try{Ts(u,p,g,m,x)}catch(A){if(se(k),A!==A+0)throw A;ue(1,0)}}function zg(u,p,g,m,x,k,A){var B=oe();try{Rs(u,p,g,m,x,k,A)}catch(G){if(se(B),G!==G+0)throw G;ue(1,0)}}function Ag(u,p,g,m,x,k,A){var B=oe();try{Ns(u,p,g,m,x,k,A)}catch(G){if(se(B),G!==G+0)throw G;ue(1,0)}}function Og(u,p,g,m,x,k,A,B){var G=oe();try{Us(u,p,g,m,x,k,A,B)}catch(j){if(se(G),j!==j+0)throw j;ue(1,0)}}function Mg(u,p,g,m,x){var k=oe();try{return Ms(u,p,g,m,x)}catch(A){if(se(k),A!==A+0)throw A;ue(1,0)}}function Rg(u,p,g,m,x,k,A,B){var G=oe();try{Ls(u,p,g,m,x,k,A,B)}catch(j){if(se(G),j!==j+0)throw j;ue(1,0)}}function Ng(u,p,g,m,x,k,A,B,G,j,ae,pe){var ge=oe();try{Bs(u,p,g,m,x,k,A,B,G,j,ae,pe)}catch(we){if(se(ge),we!==we+0)throw we;ue(1,0)}}function Bg(u,p,g,m,x,k){var A=oe();try{return Ds(u,p,g,m,x,k)}catch(B){if(se(A),B!==B+0)throw B;ue(1,0)}}function Dg(u,p,g){var m=oe();try{return qs(u,p,g)}catch(x){if(se(m),x!==x+0)throw x;return ue(1,0),0n}}function Pg(u,p,g,m,x,k,A,B,G){var j=oe();try{Es(u,p,g,m,x,k,A,B,G)}catch(ae){if(se(j),ae!==ae+0)throw ae;ue(1,0)}}function Ug(u){var p=oe();try{return Ws(u)}catch(g){if(se(p),g!==g+0)throw g;ue(1,0)}}function Lg(u,p,g){var m=oe();try{return Gs(u,p,g)}catch(x){if(se(m),x!==x+0)throw x;ue(1,0)}}function qg(u,p){var g=oe();try{return ao(u,p)}catch(m){if(se(g),m!==m+0)throw m;return ue(1,0),0n}}function Wg(u,p,g,m,x){var k=oe();try{Vs(u,p,g,m,x)}catch(A){if(se(k),A!==A+0)throw A;ue(1,0)}}function Gg(u){var p=oe();try{return Hs(u)}catch(g){if(se(p),g!==g+0)throw g;return ue(1,0),0n}}function Vg(u,p,g,m,x,k){var A=oe();try{return Qs(u,p,g,m,x,k)}catch(B){if(se(A),B!==B+0)throw B;ue(1,0)}}function Hg(u,p,g,m,x,k){var A=oe();try{return Zs(u,p,g,m,x,k)}catch(B){if(se(A),B!==B+0)throw B;ue(1,0)}}function Fg(u,p,g,m,x,k,A,B){var G=oe();try{return Ps(u,p,g,m,x,k,A,B)}catch(j){if(se(G),j!==j+0)throw j;ue(1,0)}}function jg(u,p,g,m,x){var k=oe();try{return Js(u,p,g,m,x)}catch(A){if(se(k),A!==A+0)throw A;return ue(1,0),0n}}function Kg(u,p,g,m){var x=oe();try{return eo(u,p,g,m)}catch(k){if(se(x),k!==k+0)throw k;ue(1,0)}}function Yg(u,p,g,m){var x=oe();try{return to(u,p,g,m)}catch(k){if(se(x),k!==k+0)throw k;ue(1,0)}}function Xg(u,p,g,m,x,k,A,B,G,j,ae,pe){var ge=oe();try{return ro(u,p,g,m,x,k,A,B,G,j,ae,pe)}catch(we){if(se(ge),we!==we+0)throw we;ue(1,0)}}function Qg(u,p,g,m,x,k,A,B,G,j,ae){var pe=oe();try{Ys(u,p,g,m,x,k,A,B,G,j,ae)}catch(ge){if(se(pe),ge!==ge+0)throw ge;ue(1,0)}}function Zg(u,p,g,m,x,k,A,B,G,j,ae,pe,ge,we,ft,Ti){var n0=oe();try{Xs(u,p,g,m,x,k,A,B,G,j,ae,pe,ge,we,ft,Ti)}catch(ki){if(se(n0),ki!==ki+0)throw ki;ue(1,0)}}function Jg(u,p,g,m){var x=oe();try{return io(u,p,g,m)}catch(k){if(se(x),k!==k+0)throw k;ue(1,0)}}function e0(u,p,g,m,x){var k=oe();try{return no(u,p,g,m,x)}catch(A){if(se(k),A!==A+0)throw A;ue(1,0)}}function t0(u,p,g){var m=oe();try{return Fs(u,p,g)}catch(x){if(se(m),x!==x+0)throw x;ue(1,0)}}function r0(u,p,g){var m=oe();try{return js(u,p,g)}catch(x){if(se(m),x!==x+0)throw x;ue(1,0)}}function i0(u,p,g,m){var x=oe();try{Ks(u,p,g,m)}catch(k){if(se(x),k!==k+0)throw k;ue(1,0)}}function Or(){if(0<Re)Ae=Or;else if(n)w==null||w(t),J();else{for(var u=wr;0<u.length;)u.shift()(t);0<Re?Ae=Or:(t.calledRun=!0,E||(J(),w==null||w(t)))}}return n||(rt=await ot(),Or()),t.PTR_SIZE=4,U?t:new Promise((u,p)=>{w=u,S=p})}var xp,mo,k0=q(()=>{var e,t;xp=fo,mo=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),mo&&fo()}),Mi,kn,go,Be,Sp,Rr,yo,_o,Ri,wo,Ni,Ip,Bi,Tp,Fn=q(()=>{Hn(),Mi=typeof location>"u"?void 0:location.origin,kn=import.meta.url>"file:"&&import.meta.url<"file;",go=()=>{{if(kn){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Mi).href}return import.meta.url}},Be=go(),Sp=()=>{if(Be&&!Be.startsWith("blob:"))return Be.substring(0,Be.lastIndexOf("/")+1)},Rr=(e,t)=>{try{let r=t??Be;return(r?new URL(e,r):new URL(e)).origin===Mi}catch{return!1}},yo=(e,t)=>{let r=t??Be;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},_o=(e,t)=>`${t??"./"}${e}`,Ri=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},wo=async e=>(await import(e)).default,Ni=(T0(),yr(bp)).default,Ip=async()=>{if(!Be)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Rr(Be))return[void 0,Ni()];let e=await Ri(Be);return[e,Ni(e)]},Bi=(k0(),yr(vp)).default,Tp=async(e,t,r,i)=>{let n=Bi&&!(e||t);if(n)if(Be)n=Rr(Be);else if(i&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,Bi];{let s="ort-wasm-simd-threaded.jsep.mjs",a=e??yo(s,t),o=r&&a&&!Rr(a,t),l=o?await Ri(a):a??_o(s,t);return[o?l:void 0,await wo(l)]}}}),Di,Nr,rr,Pi,bo,$o,vo,jn,ye,Dt=q(()=>{Fn(),Nr=!1,rr=!1,Pi=!1,bo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},$o=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},vo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},jn=async e=>{if(Nr)return Promise.resolve();if(rr)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Pi)throw new Error("previous call to 'initializeWebAssembly()' failed.");rr=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!vo())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!$o())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=bo();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,s=typeof n=="string"?n:void 0,a=n==null?void 0:n.mjs,o=(a==null?void 0:a.href)??a,l=n==null?void 0:n.wasm,d=(l==null?void 0:l.href)??l,c=e.wasmBinary,[h,f]=await Tp(o,s,r>1,!!c||!!d),y=!1,_=[];if(t>0&&_.push(new Promise(w=>{setTimeout(()=>{y=!0,w()},t)})),_.push(new Promise((w,S)=>{let v={numThreads:r};if(c)v.wasmBinary=c;else if(d||s)v.locateFile=b=>d??s+b;else if(o&&o.indexOf("blob:")!==0)v.locateFile=b=>new URL(b,o).href;else if(h){let b=Sp();b&&(v.locateFile=I=>b+I)}f(v).then(b=>{rr=!1,Nr=!0,Di=b,w(),h&&URL.revokeObjectURL(h)},b=>{rr=!1,Pi=!0,S(b)})})),await Promise.race(_),y)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ye=()=>{if(Nr&&Di)return Di;throw new Error("WebAssembly is not initialized yet.")}}),Ke,Xr,fe,Kn=q(()=>{Dt(),Ke=(e,t)=>{let r=ye(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},Xr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,s])=>{let a=t?t+n:n;if(typeof s=="object")Xr(s,a+".",r,i);else if(typeof s=="string"||typeof s=="number")i(a,s.toString());else if(typeof s=="boolean")i(a,s?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof s}`)})},fe=e=>{let t=ye(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let s=Number(t.getValue(n,i===4?"i32":"i64")),a=t.getValue(n+i,"*"),o=a?t.UTF8ToString(a):"";throw new Error(`${e} ERROR_CODE: ${s}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(r)}}}),kp,E0=q(()=>{Dt(),Kn(),kp=e=>{let t=ye(),r=0,i=[],n=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(n.terminate=!1);let s=0;return(e==null?void 0:e.tag)!==void 0&&(s=Ke(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,s),r===0&&fe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Xr(e.extra,"",new WeakSet,(a,o)=>{let l=Ke(a,i),d=Ke(o,i);t._OrtAddRunConfigEntry(r,l,d)!==0&&fe(`Can't set a run config entry: ${a} - ${o}.`)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(a=>t._free(a)),s}}}),xo,So,Io,ir,To,Ep,C0=q(()=>{Dt(),Kn(),xo=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},So=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Io=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},ir=(e,t,r,i)=>{let n=Ke(t,i),s=Ke(r,i);ye()._OrtAddSessionConfigEntry(e,n,s)!==0&&fe(`Can't set a session config entry: ${t} - ${r}.`)},To=async(e,t,r)=>{let i=t.executionProviders;for(let n of i){let s=typeof n=="string"?n:n.name,a=[];switch(s){case"webnn":if(s="WEBNN",typeof n!="string"){let h=n==null?void 0:n.deviceType;h&&ir(e,"deviceType",h,r)}break;case"webgpu":if(s="JS",typeof n!="string"){let h=n;if(h!=null&&h.preferredLayout){if(h.preferredLayout!=="NCHW"&&h.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${h.preferredLayout}`);ir(e,"preferredLayout",h.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${s}`)}let o=Ke(s,r),l=a.length,d=0,c=0;if(l>0){d=ye()._malloc(l*ye().PTR_SIZE),r.push(d),c=ye()._malloc(l*ye().PTR_SIZE),r.push(c);for(let h=0;h<l;h++)ye().setValue(d+h*ye().PTR_SIZE,a[h][0],"*"),ye().setValue(c+h*ye().PTR_SIZE,a[h][1],"*")}await ye()._OrtAppendExecutionProvider(e,o,d,c,l)!==0&&fe(`Can't append execution provider: ${s}.`)}},Ep=async e=>{let t=ye(),r=0,i=[],n=e||{};Io(n);try{let s=xo(n.graphOptimizationLevel??"all"),a=So(n.executionMode??"sequential"),o=typeof n.logId=="string"?Ke(n.logId,i):0,l=n.logSeverityLevel??2;if(!Number.isInteger(l)||l<0||l>4)throw new Error(`log severity level is not valid: ${l}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let c=typeof n.optimizedModelFilePath=="string"?Ke(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(s,!!n.enableCpuMemArena,!!n.enableMemPattern,a,!!n.enableProfiling,0,o,l,d,c),r===0&&fe("Can't create session options."),n.executionProviders&&await To(r,n,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);ir(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[h,f]of Object.entries(n.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let y=Ke(h,i);t._OrtAddFreeDimensionOverride(r,y,f)!==0&&fe(`Can't set a free dimension override: ${h} - ${f}.`)}return n.extra!==void 0&&Xr(n.extra,"",new WeakSet,(h,f)=>{ir(r,h,f,i)}),[r,i]}catch(s){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&fe("Can't release session options."),i.forEach(a=>t._free(a)),s}}}),zt,nt,At,ai,Qr,Yn,Xn,En,te=q(()=>{zt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},nt=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},At=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,s)=>n*s,1);return r>0?Math.ceil(i*r):void 0},ai=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Qr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Yn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Xn=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",En=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Qn,Cp=q(()=>{Hn(),Qn=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),s;try{s=new ArrayBuffer(i)}catch(o){if(o instanceof RangeError){let l=Math.ceil(i/65536);s=new WebAssembly.Memory({initial:l,maximum:l}).buffer}else throw o}let a=0;for(;;){let{done:o,value:l}=await n.read();if(o)break;let d=l.byteLength;new Uint8Array(s,a,d).set(l),a+=d}return new Uint8Array(s,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),ko,Eo,Co,zo,Zn,Ao,de,st=q(()=>{te(),ko=["V","I","W","E","F"],Eo=(e,t)=>{console.log(`[${ko[e]},${new Date().toISOString()}]${t}`)},Zn=(e,t)=>{Co=e,zo=t},Ao=(e,t)=>{let r=Qr(e),i=Qr(Co);r>=i&&Eo(r,typeof t=="function"?t():t)},de=(...e)=>{zo&&Ao(...e)}}),Oo,Ft,R,Zr,zp,Ap,Op,ie=q(()=>{Oo=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Ft=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let s=Math.max(e.length,t.length),a=new Array(s);if(r){if(i<2||n<2)return;let o=Oo.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(o===void 0)return;[a[s-2],a[s-1]]=o}for(let o=r?3:1;o<=s;o++){let l=i-o<0?1:e[i-o],d=n-o<0?1:t[n-o];if(l!==d&&l>1&&d>1)return;let c=Math.max(l,d);if(l&&d)a[s-o]=Math.max(l,d);else{if(c>1)return;a[s-o]=0}}return a}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},R=class jr{static size(t){return jr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),s=i-1;for(;s>=0;){if(t[s]%r===0){n[s]=t[s]/r;break}if(r%t[s]!==0)throw new Error("cannot convert shape");n[s]=1,r/=t[s],s--}for(s--;s>=0;s--)n[s]=t[s];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return jr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return jr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let s=r;s<i;s++){if(t[s]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[s])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,s)=>n+r[s]+r[s+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},Zr=class hr{static adjustPoolAttributes(t,r,i,n,s,a){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let o=0;o<r.length-2;o++)o>=i.length?i.push(r[o+2]):i[o]=r[o+2];for(let o=0;o<i.length;o++)if(o<n.length){if(n[o]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let o=0;o<i.length;o++)if(o<s.length){if(s[o]<0)throw new Error("dilations should be greater than or equal to 1")}else s.push(1);for(let o=0;o<i.length*2;o++)if(o<a.length){if(a[o]<0)throw new Error("pad should be greater than or equal to 1")}else a.push(0);for(let o=0;o<i.length;o++){if(i[o]<=0)throw new Error("kernel shapes need to be greater than 0");if(a[o]>=i[o]||a[o+i.length]>=i[o])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,s,a,o){if(o){if(s.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let l=0;l<t.length-2;l++)hr.adjustPadAndReturnShape(t[l+(a?1:2)],r[l],i[l],n[l],s,l,l+t.length-2,o)}}static computePoolOutputShape(t,r,i,n,s,a,o){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let l=[r[0],r[1]];return hr.computeShapeHelper(t,r,l,i,n,s,a,o),l}static computeConvOutputShape(t,r,i,n,s,a,o){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let l=[t[0],r[0]];return hr.computeShapeHelper(!1,t,l,i,n,s,a,o),l}static computeShapeHelper(t,r,i,n,s,a,o,l){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(hr.adjustPadAndReturnShape(r[d+2],n[d],s[d],a[d],o,d,d+r.length-2,l))}static adjustPadAndReturnShape(t,r,i,n,s,a,o,l){let d=i*(n-1)+1;if(l&&l!=="NOTSET")switch(l){case"VALID":return s[a]=0,s[o]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let c=((t+r-1)/r-1)*r+n-t;return s[a]=Math.floor(l==="SAME_LOWER"?(c+1)/2:c/2),s[o]=c-s[a],Math.floor((t+c-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+s[a]+s[o]-d)/r+1)}},zp=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let s,a,o;t?(s=e[1],a=e[0]):(s=e[0],a=e[1]);let l=-1;if(i?(o=r[0],l=1):(o=r[1],l=0),r[l]!==a)throw new Error("dimension mismatch");if(s<=0||o<=0||a<=0)throw new Error("invalid shape specified");if(n&&!Ft.isValidBroadcast(n,[s,o]))throw new Error("gemm: invalid bias shape for broadcast");return[s,o,a]}},Ap=-34028234663852886e22,Op=34028234663852886e22}),Jn,Mp=q(()=>{te(),Jn=(e,t)=>new(ai(t))(e)}),Ui,Cn,Li,Mo,qi,Ro,Wi,Gi,Vi,No,Rp,z0=q(()=>{te(),st(),Ui=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Cn=(e,t)=>{if(t==="int32")return e;let r=Ui.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,s=new(ai(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let a=new Int32Array(n);for(let o=0;o<n;o++){let l=s[o];if(l>2147483647n||l<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");a[o]=Number(l)}return new Uint8Array(a.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&s.some(o=>o>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let a=Int32Array.from(s,Number);return new Uint8Array(a.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Li=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(s=>s<-128||s>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(s=>s<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Mo=1,qi=()=>Mo++,Ro=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Wi=(e,t)=>{let r=Ui.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},Gi=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:s,fallbackDataType:a}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=s,this.fallbackDataType=a}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Wi(this.dataType,this.tensorShape)}destroy(){de("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=Li(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},Vi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),s=this.tensorManager.getMLOpSupportLimits(e),a;if(!(s!=null&&s.input.dataTypes.includes(t))){if(a=Ro.get(t),!a||(s==null?void 0:s.input.dataTypes.includes(a)))throw new Error(`WebNN backend does not support data type: ${t}`);de("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${a}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==Wi(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,o,!0,!0,a),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=Cn(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else de("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,r;if(this.activeUpload){let i=(t=this.wrapper)!=null&&t.isDataConverted?Li(this.activeUpload,(r=this.wrapper)==null?void 0:r.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(i):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(i);return}else return i.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},No=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=qi();return this.tensorTrackersById.set(e,new Vi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){de("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let s=this.tensorTrackersById.get(t);if(!s)throw new Error("Tensor not found.");return s.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){de("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),s=qi(),a=new Gi({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(s,new Vi(this,a)),this.externalTensors.add(a),s}async getCachedTensor(e,t,r,i,n,s,a){let o=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(o,t,r)){de("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}`);let h=this.freeTensors.splice(d,1)[0];return h.sessionId=e,h}de("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${a?`fallbackDataType: ${a},`:""} shape: ${r}}`);let l=await o.createTensor({dataType:a??t,shape:r,dimensions:r,usage:i,writable:n,readable:s});return new Gi({sessionId:e,context:o,tensor:l,dataType:t,shape:r,fallbackDataType:a})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Rp=(...e)=>new No(...e)}),nr,Bo,Np,A0=q(()=>{te(),Dt(),Mp(),z0(),st(),nr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Bo=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,s)=>n===i[s]&&e[n]===t[n])},Np=class{constructor(e){this.tensorManager=Rp(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Zn(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){de("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){de("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)de("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>Bo(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){de("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let s=nr.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,s,i,n)}async createTemporaryTensor(e,t,r){de("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=nr.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let s=this.temporarySessionTensorIds.get(e);return s?s.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!ye().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");de("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Jn(r,t)}}registerMLTensor(e,t,r,i){let n=nr.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let s=this.tensorManager.registerTensor(e,t,n,i);return de("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${s}}`),s}registerMLConstant(e,t,r,i,n,s,a=!1){if(!s)throw new Error("External mounted files are not available.");let o=e;e.startsWith("./")&&(o=e.substring(2));let l=s.get(o);if(!l)throw new Error(`File with name ${o} not found in preloaded files.`);if(t+r>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+r).buffer,c;switch(n.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":if(a){let h=Cn(new Uint8Array(d),"int64");c=new Int32Array(h.buffer),n.dataType="int32"}else c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return de("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${a?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(n,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=nr.get(zt(t)),n=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!(n!=null&&n.input.dataTypes.includes(i)):!!(n!=null&&n.output.dataTypes.includes(i))}flush(){}}}),ea=q(()=>{}),Hi,Br,Dr,Do,Po,Fi,zn,Uo,Bp,O0=q(()=>{st(),ea(),Hi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Br=[],Dr=e=>Math.ceil(Number(e)/16)*16,Do=e=>{for(let t=0;t<Br.length;t++){let r=Br[t];if(e<=r)return r}return Math.ceil(e/16)*16},Po=1,Fi=()=>Po++,zn=async(e,t,r,i)=>{let n=Dr(r),s=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let a=e.getCommandEncoder();e.endComputePass(),a.copyBufferToBuffer(t,0,s,0,n),e.flush(),await s.mapAsync(GPUMapMode.READ);let o=s.getMappedRange();if(i){let l=i();return l.set(new Uint8Array(o,0,r)),l}else return new Uint8Array(o.slice(0,r))}finally{s.destroy()}},Uo=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Hi)Br.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,s=Dr(n),a=this.storageCache.get(e);if(!a)throw new Error("gpu data for uploading does not exist");if(Number(a.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${a.originalSize}, data size=${n}`);let o=this.backend.device.createBuffer({mappedAtCreation:!0,size:s,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),l=o.getMappedRange();new Uint8Array(l).set(new Uint8Array(r,i,n)),o.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(o,0,a.gpuData.buffer,0,s),this.backend.device.queue.submit([d.finish()]),o.destroy(),de("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Dr(r.originalSize),s=this.backend.getCommandEncoder();this.backend.endComputePass(),s.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=Fi();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),de("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),de("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Do(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,s=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||s){let o=(n?this.freeBuffers:this.freeUniformBuffers).get(r);o?o.length>0?i=o.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let a={id:Fi(),type:0,buffer:i};return this.storageCache.set(a.id,{gpuData:a,originalSize:Number(e)}),de("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${a.id}`),a}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return de("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await zn(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Hi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(de("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Bp=(...e)=>new Uo(...e)}),Lo,he,xe=q(()=>{Lo=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},he=e=>new Lo(e)}),jt,Pr,Ie,Ce,Q,ve,An,Vt,_t,X,ar,D,Y,Dp,ta,qo,Pp,ne=q(()=>{te(),ie(),jt=64,Pr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ie=(e,t=1)=>{let r=Pr(e,t);return typeof r=="string"?r:r[0]},Ce=(e,t=1)=>{let r=Pr(e,t);return typeof r=="string"?r:r[1]},Q=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:R.computeStrides(r)})}),t},ve=e=>e%4===0?4:e%2===0?2:1,An=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Vt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,_t=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,X=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,ar=(e,t,r,i,n)=>{let s=typeof r=="number",a=s?r:r.length,o=[...new Array(a).keys()],l=a<2?"u32":a<=4?`vec${a}<u32>`:`array<u32, ${a}>`,d=Pr(t,n),c=typeof d=="string"?d:d[1],h=typeof d=="string"?d:d[0],f={indices:l,value:c,storage:h,tensor:t},y=U=>typeof U=="string"?U:`${U}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},w=s?"uniforms.":"",S=`${w}${e}_shape`,v=`${w}${e}_strides`,b="";for(let U=0;U<a-1;U++)b+=`
    let dim${U} = current / ${X(v,U,a)};
    let rest${U} = current % ${X(v,U,a)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;b+=`indices[${a-1}] = current;`;let I=a<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${b}
    return indices;
  }`,T=U=>(_.offsetToIndices=!0,a<2?U:`o2i_${e}(${U})`),C=[];if(a>=2)for(let U=a-1;U>=0;U--)C.push(`${X(v,U,a)} * (indices[${U}])`);let E=a<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${C.join("+")};
  }`,z=U=>(_.indicesToOffset=!0,a<2?U:`i2o_${e}(${U})`),$=(...U)=>a===0?"0u":`${f.indices}(${U.map(y).join(",")})`,O=(U,L)=>a<2?`${U}`:`${X(U,L,a)}`,N=(U,L,J)=>a<2?`${U}=${J};`:`${X(U,L,a)}=${J};`,P={},V=(U,L)=>{_.broadcastedIndicesToOffset=!0;let J=`${L.name}broadcastedIndicesTo${e}Offset`;if(J in P)return`${J}(${U})`;let ee=[];for(let be=a-1;be>=0;be--){let ot=L.indicesGet("outputIndices",be+L.rank-a);ee.push(`${O(v,be)} * (${ot} % ${O(S,be)})`)}return P[J]=`fn ${J}(outputIndices: ${L.type.indices}) -> u32 {
             return ${ee.length>0?ee.join("+"):"0u"};
           }`,`${J}(${U})`},H=(U,L)=>(()=>{if(f.storage===f.value)return`${e}[${U}]=${L};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${L}), select(0u, 0xFFFFFFFFu, ${L} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${L}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${L}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),M=U=>(()=>{if(f.storage===f.value)return`${e}[${U}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${U}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${U}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),F=a<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${c} {
    return ${M(`i2o_${e}(indices)`)};
  }`,K=a<2?"":(()=>{let U=o.map(J=>`d${J}: u32`).join(", "),L=o.map(J=>`d${J}`).join(", ");return`
  fn get_${e}(${U}) -> ${c} {
    return get_${e}ByIndices(${$(L)});
  }`})(),Z=(...U)=>{if(U.length!==a)throw new Error(`indices length must be ${a}`);let L=U.map(y).join(",");return a===0?M("0u"):a===1?M(L[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${L})`)},le=U=>a<2?M(U):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${U})`),W=a<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${c}) {
    ${H(`i2o_${e}(indices)`,"value")}
  }`,me=a<2?"":(()=>{let U=o.map(J=>`d${J}: u32`).join(", "),L=o.map(J=>`d${J}`).join(", ");return`
  fn set_${e}(${U}, value: ${c}) {
    set_${e}ByIndices(${$(L)}, value);
  }`})();return{impl:()=>{let U=[],L=!1;return _.offsetToIndices&&(U.push(I),L=!0),_.indicesToOffset&&(U.push(E),L=!0),_.broadcastedIndicesToOffset&&(Object.values(P).forEach(J=>U.push(J)),L=!0),_.set&&(U.push(me),L=!0),_.setByIndices&&(U.push(W),L=!0),_.get&&(U.push(K),L=!0),_.getByIndices&&(U.push(F),L=!0),!s&&L&&U.unshift(`const ${S} = ${f.indices}(${r.join(",")});`,`const ${v} = ${f.indices}(${R.computeStrides(r).join(",")});`),U.join(`
`)},type:f,offsetToIndices:T,indicesToOffset:z,broadcastedIndicesToOffset:V,indices:$,indicesGet:O,indicesSet:N,set:(...U)=>{if(U.length!==a+1)throw new Error(`indices length must be ${a}`);let L=U[a];if(typeof L!="string")throw new Error("value must be string");let J=U.slice(0,a).map(y).join(",");return a===0?H("0u",L):a===1?H(J[0],L):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${J}, ${L})`)},setByOffset:H,setByIndices:(U,L)=>a<2?H(U,L):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${L});`),get:Z,getByOffset:M,getByIndices:le,usage:i,name:e,strides:v,shape:S,rank:a}},D=(e,t,r,i=1)=>ar(e,t,r,"input",i),Y=(e,t,r,i=1)=>ar(e,t,r,"output",i),Dp=(e,t,r)=>ar(e,t,r,"atomicOutput",1),ta=(e,t,r,i=1)=>ar(e,t,r,"internal",i),qo=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=jt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,s=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,a=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${s}) {
    ${a}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Pp=(e,t)=>new qo(e,t)}),Wo,ji,Go,Vo,Ho,Fo,Ue,Up,Lp,wt=q(()=>{te(),ie(),xe(),ne(),Wo=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},ji=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Go=(e,t)=>R.sortBasedOnPerm(e,ji(e.length,t)),Vo=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let s=0;s<t;++s)n+=`a[${e[s]}]=i[${s}];`;return n+="return a;}"},Ho=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},Fo=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},Ue=(e,t)=>{let r=e.dataType,i=e.dims.length,n=ji(i,t),s=Go(e.dims,n),a=e.dims,o=s,l=i<2||Fo(n,e.dims),d;if(l)return d=_=>{let w=D("input",r,a,4),S=Y("output",r,o,4);return`
  ${_.registerUniform("output_size","u32").declareVariables(w,S)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=R.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:d};let{newShape:c,newPerm:h}=Ho(e.dims,n),f=R.areEqual(h,[2,3,1]),y=R.areEqual(h,[3,1,2]);if(c.length===2||f||y){a=f?[c[0],c[1]*c[2]]:y?[c[0]*c[1],c[2]]:c,o=[a[1],a[0]];let _=16;return d=w=>{let S=D("a",r,a.length),v=Y("output",r,o.length);return`
  ${w.registerUniform("output_size","u32").declareVariables(S,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${_+1}>, ${_}>;
  ${w.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let w=R.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(o[1]/_),y:Math.ceil(o[0]/_)},programUniforms:[{type:12,data:w},...Q(a,o)]}},getShaderSource:d}}return d=_=>{let w=D("a",r,a.length),S=Y("output",r,o.length);return`
  ${_.registerUniform("output_size","u32").declareVariables(w,S)}

  ${Vo(n,i,w,S)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",w.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=R.size(s);return{outputs:[{dims:s,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...Q(a,o)]}},getShaderSource:d}},Up=(e,t)=>{Wo(e.inputs,t.perm),e.compute(Ue(e.inputs[0],t.perm))},Lp=e=>he({perm:e.perm})}),jo,Ko,Yo,Xo,Qo,Zo,Jo,eu,tu,ru,Ge,qp,Wp,Gp,Vp,Hp,Fp,jp,Kp,Yp,Xp,M0=q(()=>{te(),ie(),ne(),ra(),wt(),jo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Ko={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Yo={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Xo={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Qo=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},Zo=(e,t)=>{let r=[],i=e.length;for(let s=0;s<i;s++)t.indexOf(s)===-1&&r.push(e[s]);let n=t.map(s=>e[s]);return[r,n]},Jo=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let s=0;s<r;s++)t.indexOf(s)===-1?i.push(e[n++]):i.push(1);return i},eu=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},tu=(e,t)=>{let r=[];if(!eu(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},ru=(e,t,r,i,n,s,a)=>{let o=r[0].dims,l=R.size(s),d=R.size(a),c=D("_A",r[0].dataType,o),h=Y("output",n,s),f=64;l===1&&(f=256);let y=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `,_=w=>`
        ${w.registerUniform("reduceSize","u32").declareVariables(c,h)}
        ${y}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${w.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Yo[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${jo[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Ko[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${i==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${Xo[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:l},programUniforms:[{type:12,data:d}]})}},Ge=(e,t,r,i)=>{let n=e.inputs.length===1?r:On(e.inputs,r),s=n.axes;s.length===0&&!n.noopWithEmptyAxes&&(s=e.inputs[0].dims.map((y,_)=>_));let a=R.normalizeAxes(s,e.inputs[0].dims.length),o=a,l=e.inputs[0],d=tu(o,e.inputs[0].dims.length);d.length>0&&(l=e.compute(Ue(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],o=Qo(o.length,l.dims.length));let[c,h]=Zo(l.dims,o),f=c;n.keepDims&&(f=Jo(c,a)),e.compute(ru(t,n.cacheKey,[l],i,e.inputs[0].dataType,f,h),{inputs:[l]})},qp=(e,t)=>{Ge(e,"ReduceMeanShared",t,"mean")},Wp=(e,t)=>{Ge(e,"ReduceL1Shared",t,"l1")},Gp=(e,t)=>{Ge(e,"ReduceL2Shared",t,"l2")},Vp=(e,t)=>{Ge(e,"ReduceLogSumExpShared",t,"logSumExp")},Hp=(e,t)=>{Ge(e,"ReduceMaxShared",t,"max")},Fp=(e,t)=>{Ge(e,"ReduceMinShared",t,"min")},jp=(e,t)=>{Ge(e,"ReduceProdShared",t,"prod")},Kp=(e,t)=>{Ge(e,"ReduceSumShared",t,"sum")},Yp=(e,t)=>{Ge(e,"ReduceSumSquareShared",t,"sumSquare")},Xp=(e,t)=>{Ge(e,"ReduceLogSumShared",t,"logSum")}}),Ve,iu,Jr,On,He,nu,au,su,ou,uu,lu,du,pu,cu,hu,Fe,Qp,Zp,Jp,ec,tc,rc,ic,nc,ac,sc,ra=q(()=>{te(),ie(),xe(),ne(),M0(),Ve=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},iu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Jr=(e,t,r,i,n,s,a=!1,o=!1)=>{let l=[],d=r[0].dims,c=d.length,h=R.normalizeAxes(n,c),f=!o&&h.length===0;d.forEach((w,S)=>{f||h.indexOf(S)>=0?a&&l.push(1):l.push(w)});let y=l.length,_=R.size(l);return{name:e,shaderCache:t,getShaderSource:w=>{let S=[],v=D("_A",r[0].dataType,c),b=Y("output",s,y),I=i(v,b,h),T=I[2];for(let C=0,E=0;C<c;C++)f||h.indexOf(C)>=0?(a&&E++,T=`for(var j${C}: u32 = 0; j${C} < ${d[C]}; j${C}++) {
                  ${I[2].includes("last_index")?`let last_index = j${C};`:""}
                  ${v.indicesSet("input_indices",C,`j${C}`)}
                  ${T}
                }`):(S.push(`${v.indicesSet("input_indices",C,b.indicesGet("output_indices",E))};`),E++);return`

        ${w.registerUniform("output_size","u32").declareVariables(v,b)}

        ${w.mainStart()}
          ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${I[0]}       // init ops for reduce max/min
          ${I[1]}
          ${T}
          ${I[3]}
          ${I.length===4?b.setByOffset("global_idx","value"):I.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:l,dataType:s}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...Q(d,l)]})}},On=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),he({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},He=(e,t,r,i)=>{let n=e.inputs,s=n.length===1?r:On(n,r);e.compute(Jr(t,{hint:s.cacheKey,inputDependencies:["rank"]},[n[0]],s.noopWithEmptyAxes&&s.axes.length===0?iu:i,s.axes,n[0].dataType,s.keepDims,s.noopWithEmptyAxes),{inputs:[0]})},nu=(e,t)=>{Ve(e.inputs),He(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},au=(e,t)=>{Ve(e.inputs),He(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},su=(e,t)=>{Ve(e.inputs),He(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},ou=(e,t)=>{Ve(e.inputs),He(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},uu=(e,t)=>{Ve(e.inputs),He(e,"ReduceMax",t,(r,i,n)=>{let s=[];for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&s.push(r.indicesSet("input_indices",a,0));return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},lu=(e,t)=>{Ve(e.inputs),He(e,"ReduceMean",t,(r,i,n)=>{let s=1;for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&(s*=e.inputs[0].dims[a]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${s});`]})},du=(e,t)=>{Ve(e.inputs),He(e,"ReduceMin",t,(r,i,n)=>{let s=[];for(let a=0;a<r.rank;a++)(n.indexOf(a)>=0||n.length===0)&&s.push(`input_indices[${a}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},pu=(e,t)=>{Ve(e.inputs),He(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},cu=(e,t)=>{Ve(e.inputs),He(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},hu=(e,t)=>{Ve(e.inputs),He(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Fe=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let s=0;s<t.length;s++)t.indexOf(s)===-1?i*=e[s]:n*=e[s];return n<32&&i>1024},Qp=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lu(e,t):qp(e,t)},Zp=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?au(e,t):Wp(e,t)},Jp=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?su(e,t):Gp(e,t)},ec=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ou(e,t):Vp(e,t)},tc=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uu(e,t):Hp(e,t)},rc=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?du(e,t):Fp(e,t)},ic=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pu(e,t):jp(e,t)},nc=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cu(e,t):Kp(e,t)},ac=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hu(e,t):Yp(e,t)},sc=(e,t)=>{Fe(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nu(e,t):Xp(e,t)}}),Ki,oc,uc,Mn,R0=q(()=>{te(),xe(),ra(),Ki=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},oc=(e,t)=>{Ki(e.inputs);let r=(i,n,s)=>{let a=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Jr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},uc=(e,t)=>{Ki(e.inputs);let r=(i,n,s)=>{let a=[];for(let o=0;o<i.rank;o++)(s.indexOf(o)>=0||s.length===0)&&a.push(`input_indices[${o}] = 0;`);return[`${a.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Jr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Mn=e=>he(e)}),fu,Ur,mu,gu,yu,_r,_u,lc,ia=q(()=>{te(),ie(),ea(),ne(),fu=(e,t)=>{let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5];if(a&&o)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let l=r.dims[0],d=r.dims[1],c=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=n.dims[0]/3,f=h,y=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let I of t.qkvHiddenSizes)if(I%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],y=t.qkvHiddenSizes[2]}let _=d;if(h!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==h+f+y)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let w=0;if(a){if(f!==y)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(a.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(a.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(a.dims[1]!==l)throw new Error('Input "past" second dimension must be batch_size');if(a.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(a.dims[4]!==f/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(w=a.dims[3])}let S=_+w,v=-1,b=0;if(s)throw new Error("Mask not supported");if(a)throw new Error("past is not supported");if(o){if(o.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(o.dims[0]!==l||o.dims[1]!==t.numHeads||o.dims[2]!==d||o.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:l,sequenceLength:d,pastSequenceLength:w,kvSequenceLength:_,totalSequenceLength:S,maxSequenceLength:v,inputHiddenSize:c,hiddenSize:h,vHiddenSize:y,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor(y/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ur=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,mu=(e,t,r,i,n,s,a,o)=>{let l=ve(a?1:s),d=64,c=s/l;c<d&&(d=32);let h=Math.ceil(s/l/d),f=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:c},{type:12,data:h}],y=Ie(e.dataType,l),_=Ce(1,l),w=["type"];a&&w.push("type"),o&&w.push("type");let S=v=>{let b=Y("x",e.dataType,e.dims,l),I=[b],T=a?D("seq_lens",a.dataType,a.dims):void 0;T&&I.push(T);let C=o?D("total_sequence_length_input",o.dataType,o.dims):void 0;C&&I.push(C);let E=Ce(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${v.registerUniforms(z).declareVariables(...I)}
  ${v.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ur(T,C,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${a?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(l){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(l){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${l}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${E}(1.0) / ${E}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${a?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${E}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${y};${l}`,inputDependencies:w},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:f})}},gu=(e,t,r,i,n,s,a,o,l)=>{let d=a+s.kvSequenceLength,c=[s.batchSize,s.numHeads,s.sequenceLength,d],h=e>1&&i,f=s.kvNumHeads?s.kvNumHeads:s.numHeads,y=h?[s.batchSize,f,d,s.headSize]:void 0,_=s.nReps?s.nReps:1,w=s.scale===0?1/Math.sqrt(s.headSize):s.scale,S=ve(s.headSize),v=s.headSize/S,b=12,I={x:Math.ceil(d/b),y:Math.ceil(s.sequenceLength/b),z:s.batchSize*s.numHeads},T=[{type:12,data:s.sequenceLength},{type:12,data:v},{type:12,data:d},{type:12,data:s.numHeads},{type:12,data:s.headSize},{type:1,data:w},{type:12,data:a},{type:12,data:s.kvSequenceLength},{type:12,data:_}],C=h&&i&&R.size(i.dims)>0,E=["type","type"];C&&E.push("type"),n&&E.push("type"),o&&E.push("type"),l&&E.push("type");let z=[{dims:c,dataType:t.dataType,gpuDataType:0}];h&&z.push({dims:y,dataType:t.dataType,gpuDataType:0});let $=O=>{let N=D("q",t.dataType,t.dims,S),P=D("key",r.dataType,r.dims,S),V=[N,P];if(C){let W=D("past_key",i.dataType,i.dims,S);V.push(W)}n&&V.push(D("attention_bias",n.dataType,n.dims));let H=o?D("seq_lens",o.dataType,o.dims):void 0;H&&V.push(H);let M=l?D("total_sequence_length_input",l.dataType,l.dims):void 0;M&&V.push(M);let F=Y("output",t.dataType,c),K=[F];h&&K.push(Y("present_key",t.dataType,y,S));let Z=Ce(1,S),le=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${N.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${N.type.storage}, ${b*b}>;
  ${O.registerUniforms(le).declareVariables(...V,...K)}
  ${O.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Ur(H,M,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${C&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Z}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${C&&h?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${h?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Z}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${F.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${n!==void 0};${i!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:z,dispatchGroup:I,programUniforms:T}),getShaderSource:$}},yu=(e,t,r,i,n,s,a=void 0,o=void 0)=>{let l=s+n.kvSequenceLength,d=n.nReps?n.nReps:1,c=n.vHiddenSize*d,h=e>1&&i,f=n.kvNumHeads?n.kvNumHeads:n.numHeads,y=h?[n.batchSize,f,l,n.headSize]:void 0,_=[n.batchSize,n.sequenceLength,c],w=12,S={x:Math.ceil(n.vHeadSize/w),y:Math.ceil(n.sequenceLength/w),z:n.batchSize*n.numHeads},v=[{type:12,data:n.sequenceLength},{type:12,data:l},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:c},{type:12,data:s},{type:12,data:n.kvSequenceLength},{type:12,data:d}],b=h&&i&&R.size(i.dims)>0,I=["type","type"];b&&I.push("type"),a&&I.push("type"),o&&I.push("type");let T=[{dims:_,dataType:t.dataType,gpuDataType:0}];h&&T.push({dims:y,dataType:t.dataType,gpuDataType:0});let C=E=>{let z=D("probs",t.dataType,t.dims),$=D("v",r.dataType,r.dims),O=[z,$];b&&O.push(D("past_value",i.dataType,i.dims));let N=a?D("seq_lens",a.dataType,a.dims):void 0;a&&O.push(N);let P=o?D("total_sequence_length_input",o.dataType,o.dims):void 0;o&&O.push(P);let V=[Y("output",t.dataType,_)];h&&V.push(Y("present_value",t.dataType,y));let H=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;
  var<workgroup> tileQ: array<${z.type.value}, ${w*w}>;
  var<workgroup> tileV: array<${z.type.value}, ${w*w}>;
  ${E.registerUniforms(H).declareVariables(...O,...V)}
  ${E.mainStart([w,w,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ur(N,P,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&h?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${h?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:T,dispatchGroup:S,programUniforms:v}),getShaderSource:C}},_r=(e,t,r,i,n,s,a,o,l,d,c=void 0,h=void 0)=>{let f=Math.min(e.outputCount,1+(a?1:0)+(o?1:0)),y=f>1?d.pastSequenceLength:0,_=y+d.kvSequenceLength,w=l&&R.size(l.dims)>0?l:void 0,S=[t,r];f>1&&a&&R.size(a.dims)>0&&S.push(a),w&&S.push(w),c&&S.push(c),h&&S.push(h);let v=e.compute(gu(f,t,r,a,w,d,y,c,h),{inputs:S,outputs:f>1?[-1,1]:[-1]})[0];e.compute(mu(v,d.batchSize,d.numHeads,y,d.sequenceLength,_,c,h),{inputs:c&&h?[v,c,h]:[v],outputs:[]});let b=[v,i];f>1&&o&&R.size(o.dims)>0&&b.push(o),c&&b.push(c),h&&b.push(h),e.compute(yu(f,v,i,o,d,y,c,h),{inputs:b,outputs:f>1?[0,2]:[0]})},_u=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,s=t.headSize,a=12,o={x:Math.ceil(t.headSize/a),y:Math.ceil(t.sequenceLength/a),z:t.batchSize*t.numHeads},l=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:n},{type:12,data:s},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=h=>{let f=Y("output_q",l[0].dataType,r),y=Y("output_k",l[0].dataType,r),_=Y("output_v",l[0].dataType,r),w=D("input",l[0].dataType,l[0].dims),S=D("weight",l[1].dataType,l[1].dims),v=D("bias",l[2].dataType,l[2].dims),b=w.type.storage,I=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${a}u;
  var<workgroup> tileInput: array<${b}, ${a*a}>;
  var<workgroup> tileWeightQ: array<${b}, ${a*a}>;
  var<workgroup> tileWeightK: array<${b}, ${a*a}>;
  var<workgroup> tileWeightV: array<${b}, ${a*a}>;
  ${h.registerUniforms(I).declareVariables(w,S,v,f,y,_)}
  ${h.mainStart([a,a,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:d}),getShaderSource:c},{inputs:l,outputs:[-1,-1,-1]})},lc=(e,t)=>{let r=fu(e.inputs,t),[i,n,s]=_u(e,r);return _r(e,i,n,s,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),wu,bu,$u,dc,N0=q(()=>{qe(),te(),ie(),xe(),ne(),wu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,s)=>{let a=n.length;if(a!==i.length)throw new Error(`${s}: num dimensions != ${a}`);n.forEach((o,l)=>{if(o!==i[l])throw new Error(`${s}: dim[${l}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},bu=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,s=e[0].dims,a=i?ve(s[s.length-1]):1,o=n==="NHWC"&&s.length>1?a:1,l=R.size(s)/a,d=i,c=d?s.length:s,h=D("x",e[0].dataType,e[0].dims,a),f=D("scale",e[1].dataType,e[1].dims,o),y=D("bias",e[2].dataType,e[2].dims,o),_=D("inputMean",e[3].dataType,e[3].dims,o),w=D("inputVar",e[4].dataType,e[4].dims,o),S=Y("y",e[0].dataType,c,a),v=()=>{let I="";if(i)I=`let cOffset = ${s.length===1?"0u":n==="NHWC"?`outputIndices[${s.length-1}] / ${a}`:"outputIndices[1]"};`;else if(n==="NCHW")I=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{I=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${s.length-1}];`;for(let T=1;T<f.rank;T++)I+=`cIndices[${T}] = outputIndices[${T}];`;I+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return I},b=I=>`
  const epsilon = ${r};
  ${I.registerUniform("outputSize","u32").declareVariables(h,f,y,_,w,S)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${a}`)};
    ${v()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${y.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${w.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${a}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d?[{type:12,data:l},...Q(s)]:[{type:12,data:l}]})}},$u=e=>he(e),dc=(e,t)=>{let{inputs:r,outputCount:i}=e,n=$u({...t,outputCount:i});if($e.webgpu.validateInputContent&&wu(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(bu(r,n))}}),vu,xu,pc,B0=q(()=>{ie(),ne(),vu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},xu=e=>{let t=e[0].dims,r=e[0].dims[2],i=R.size(t)/4,n=e[0].dataType,s=D("input",n,t,4),a=D("bias",n,[r],4),o=D("residual",n,t,4),l=Y("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(s,a,o,l)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${s.getByOffset("global_idx")}
      + ${a.getByOffset("global_idx % channels")} + ${o.getByOffset("global_idx")};
    ${l.setByOffset("global_idx","value")}
  }`}},pc=e=>{vu(e.inputs),e.compute(xu(e.inputs))}}),Su,ce,cc,hc,fc,mc,gc,yc,_c,wc,bc,Iu,$c,vc,xc,Sc,fr,Ic,Kr,Tc,kc,Ec,Cc,zc,Ac,Oc,Mc,Rc,Nc,Bc,Dc,Pc,Uc,Lc,qc,Yi,Wc,Rn,Nn,Gc,Vc,Hc,Tu,ku,Fc,na=q(()=>{te(),ie(),xe(),ne(),Su=(e,t,r,i,n,s,a)=>{let o=Math.ceil(t/4),l="";typeof n=="string"?l=`${n}(a)`:l=n("a");let d=D("inputData",r,[o],4),c=Y("outputData",i,[o],4),h=[{name:"vec_size",type:"u32"}];return a&&h.push(...a),`
      ${e.registerUniforms(h).declareVariables(d,c)}

  ${s??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",l)}
  }`},ce=(e,t,r,i,n,s=e.dataType,a,o)=>{let l=[{type:12,data:Math.ceil(R.size(e.dims)/4)}];return a&&l.push(...a),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>Su(d,R.size(e.dims),e.dataType,s,r,i,o),getRunData:d=>({outputs:[{dims:e.dims,dataType:s}],dispatchGroup:{x:Math.ceil(R.size(d[0].dims)/64/4)},programUniforms:l})}},cc=e=>{e.compute(ce(e.inputs[0],"Abs","abs"))},hc=e=>{e.compute(ce(e.inputs[0],"Acos","acos"))},fc=e=>{e.compute(ce(e.inputs[0],"Acosh","acosh"))},mc=e=>{e.compute(ce(e.inputs[0],"Asin","asin"))},gc=e=>{e.compute(ce(e.inputs[0],"Asinh","asinh"))},yc=e=>{e.compute(ce(e.inputs[0],"Atan","atan"))},_c=e=>{e.compute(ce(e.inputs[0],"Atanh","atanh"))},wc=e=>he(e),bc=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ce(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Iu=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return he({min:t,max:r})},$c=(e,t)=>{let r=t||Iu(e.inputs),i=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},vc=e=>{e.compute(ce(e.inputs[0],"Ceil","ceil"))},xc=e=>{e.compute(ce(e.inputs[0],"Cos","cos"))},Sc=e=>{e.compute(ce(e.inputs[0],"Cosh","cosh"))},fr=e=>he(e),Ic=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Kr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Tc=e=>{let t=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,Kr(t)))},kc=e=>{e.compute(ce(e.inputs[0],"Exp","exp"))},Ec=e=>{e.compute(ce(e.inputs[0],"Floor","floor"))},Cc=e=>{let t=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,Kr(t)))},zc=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Ac=e=>{e.compute(ce(e.inputs[0],"Not",t=>`!${t}`))},Oc=e=>{e.compute(ce(e.inputs[0],"Neg",t=>`-${t}`))},Mc=e=>{e.compute(ce(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Rc=e=>{let t=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Nc=e=>{e.compute(ce(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Bc=e=>he(e),Dc=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Pc=e=>{e.compute(ce(e.inputs[0],"Sin","sin"))},Uc=e=>{e.compute(ce(e.inputs[0],"Sinh","sinh"))},Lc=e=>{e.compute(ce(e.inputs[0],"Sqrt","sqrt"))},qc=e=>{e.compute(ce(e.inputs[0],"Tan","tan"))},Yi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Wc=e=>{e.compute(ce(e.inputs[0],"Tanh",Yi))},Rn=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Yi("v")};
}
`,Nn=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Gc=e=>{let t=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"FastGelu",Nn,Rn(t),void 0,e.inputs[0].dataType))},Vc=(e,t)=>{let r=Ce(e.inputs[0].dataType);return e.compute(ce(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Hc=e=>{e.compute(ce(e.inputs[0],"Log","log"))},Tu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,ku=e=>`quick_gelu_impl(${e})`,Fc=(e,t)=>{let r=Ce(e.inputs[0].dataType);e.compute(ce(e.inputs[0],"QuickGelu",ku,Tu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Eu,Cu,jc,D0=q(()=>{ie(),ne(),na(),Eu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Cu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=D("input",e[0].dataType,e[0].dims,4),i=D("bias",e[0].dataType,[e[0].dims[2]],4),n=Y("output",e[0].dataType,t,4),s=R.size(t)/4,a=Ie(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:o=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${o.declareVariables(r,i,n)}

  ${Kr(a)}

  ${o.mainStart()}
    ${o.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},jc=e=>{Eu(e.inputs),e.compute(Cu(e.inputs))}}),zu,Au,je,Kc,Yc,Xc,Qc,Zc,Jc,eh,th,rh,ih,P0=q(()=>{te(),ie(),ne(),zu=(e,t,r,i,n,s,a,o,l,d,c,h)=>{let f,y;typeof o=="string"?f=y=(b,I)=>`${o}((${b}),(${I}))`:typeof o=="function"?f=y=o:(f=o.scalar,y=o.vector);let _=Y("outputData",c,i.length,4),w=D("aData",l,t.length,4),S=D("bData",d,r.length,4),v;if(n)if(s){let b=R.size(t)===1,I=R.size(r)===1,T=t.length>0&&t[t.length-1]%4===0,C=r.length>0&&r[r.length-1]%4===0;b||I?v=_.setByOffset("global_idx",y(b?`${w.type.value}(${w.getByOffset("0")}.x)`:w.getByOffset("global_idx"),I?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):v=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${w.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",y(a||T?w.getByOffset("offsetA / 4u"):`${w.type.value}(${w.getByOffset("offsetA / 4u")}[offsetA % 4u])`,a||C?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=_.setByOffset("global_idx",y(w.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!s)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(I,T,C="")=>{let E=`aData[indexA${T}][componentA${T}]`,z=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${_.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${w.broadcastedIndicesToOffset(`outputIndices${T}`,_)};
            let offsetB${T} = ${S.broadcastedIndicesToOffset(`outputIndices${T}`,_)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${I}[${T}] = ${C}(${f(E,z)});
          `};c===9?v=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(w,S,_)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},Au=(e,t,r,i,n,s,a=r.dataType)=>{let o=r.dims.map(Number),l=i.dims.map(Number),d=!R.areEqual(o,l),c=o,h=R.size(o),f=!1,y=!1,_=[d];if(d){let w=Ft.calcShape(o,l,!1);if(!w)throw new Error("Can't perform binary op on the given tensors");c=w.slice(),h=R.size(c);let S=R.size(o)===1,v=R.size(l)===1,b=o.length>0&&o[o.length-1]%4===0,I=l.length>0&&l[l.length-1]%4===0;_.push(S),_.push(v),_.push(b),_.push(I);let T=1;for(let C=1;C<c.length;C++){let E=o[o.length-C],z=l[l.length-C];if(E===z)T*=E;else break}T%4===0?(y=!0,f=!0):(S||v||b||I)&&(f=!0)}else f=!0;return _.push(f),{name:e,shaderCache:{hint:t+_.map(w=>w.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:w=>zu(w,o,l,c,f,d,y,n,r.dataType,i.dataType,a,s),getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(R.size(c)/4)},...Q(o,l,c)]})}},je=(e,t,r,i,n,s)=>{e.compute(Au(t,n??"",e.inputs[0],e.inputs[1],r,i,s))},Kc=e=>{je(e,"Add",(t,r)=>`${t}+${r}`)},Yc=e=>{je(e,"Div",(t,r)=>`${t}/${r}`)},Xc=e=>{je(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Qc=e=>{je(e,"Mul",(t,r)=>`${t}*${r}`)},Zc=e=>{let t=D("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;je(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Jc=e=>{je(e,"Sub",(t,r)=>`${t}-${r}`)},eh=e=>{je(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},th=e=>{je(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},rh=e=>{je(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},ih=e=>{je(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Ou,Mu,Ru,Nu,nh,ah,U0=q(()=>{te(),ie(),xe(),ne(),Ou=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,s=i.dims.length;e.forEach((a,o)=>{if(o!==r){if(a.dataType!==n)throw new Error("input tensors should be one type");if(a.dims.length!==s)throw new Error("input tensors should have the same shape");a.dims.forEach((l,d)=>{if(d!==t&&l!==i.dims[d])throw new Error("non concat dimensions must match")})}})},Mu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Ru=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let s=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(s):n===0?i.push(`if (inputIndex == ${n}u) { ${s} }`):n===r-1?i.push(`else { ${s} }`):i.push(`else if (inputIndex == ${n}) { ${s} }`)}return i.join(`
`)},Nu=(e,t,r,i)=>{let n=R.size(r),s=new Array(e.length),a=new Array(e.length),o=0,l=[],d=[],c=[{type:12,data:n}];for(let w=0;w<e.length;++w)o+=e[w].dims[t],s[w]=o,d.push(e[w].dims.length),a[w]=D(`input${w}`,i,d[w]),l.push("rank"),c.push({type:12,data:s[w]});for(let w=0;w<e.length;++w)c.push(...Q(e[w].dims));c.push(...Q(r));let h=Y("output",i,r.length),f=h.indicesGet("indices",t),y=Array.from(Array(s.length).keys()).map(w=>`uniforms.sizeInConcatAxis${w}`).join(","),_=w=>`

  ${(()=>{w.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)w.registerUniform(`sizeInConcatAxis${S}`,"u32");return w.declareVariables(...a,h)})()}

  ${Mu(s.length,y)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${s.length}u>(${y});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Ru(a,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}),getShaderSource:_}},nh=(e,t)=>{let r=e.inputs,i=r[0].dims,n=R.normalizeAxis(t.axis,i.length);Ou(r,n);let s=i.slice();s[n]=r.reduce((o,l)=>o+(l.dims.length>n?l.dims[n]:0),0);let a=r.filter(o=>R.size(o.dims)>0);e.compute(Nu(a,n,s,r[0].dataType),{inputs:a})},ah=e=>he({axis:e.axis})}),Rt,Nt,Bt,aa,Pt=q(()=>{te(),ie(),Rt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Nt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Bt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},aa=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[r,i]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=(e==null?void 0:e.activation_params)||[Ap,Op];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:r}}return{activation:t}}}),ke,sh,sa=q(()=>{ke=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},sh=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),oh,L0=q(()=>{oh=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),gr,oa,ua=q(()=>{te(),ie(),ne(),Pt(),gr=(e,t,r,i,n)=>{let s=i-r;return`
      ${Array.from({length:r}).map((a,o)=>`
      if (${X(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,X(n,o+s,i))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join("")}
`},oa=(e,t,r,i,n=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a[a.length-2],d=o[o.length-1],c=a[a.length-1],h=ve(d),f=ve(c),y=ve(l),_=R.size(r)/h/y,w=e.length>2,S=i?i.slice(0,-2):r.slice(0,-2),v=[R.size(S),l,d],b=[{type:12,data:_},{type:12,data:l},{type:12,data:d},{type:12,data:c}];Nt(t,b),b.push(...Q(S,a,o)),w&&b.push(...Q(e[2].dims)),b.push(...Q(v));let I=T=>{let C=ta("batch_dims",e[0].dataType,S.length),E=D("a",e[0].dataType,a.length,f),z=D("b",e[1].dataType,o.length,h),$=Y("output",e[0].dataType,v.length,h),O=Ie($.type.tensor),N=Rt(t,$.type.value,O),P=[E,z],V="";if(w){let F=n?h:1;P.push(D("bias",e[2].dataType,e[2].dims.length,F)),V=`${n?`value += bias[col / ${F}];`:`value += ${$.type.value}(bias[row + i]);`}`}let H=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Bt(t,H);let M=()=>{let F=`var a_data: ${E.type.value};`;for(let K=0;K<f;K++)F+=`
              let b_data${K} = b[(b_offset + (k + ${K}) * uniforms.N + col) / ${h}];`;for(let K=0;K<y;K++){F+=`a_data = a[(a_offset + (row + ${K}) * uniforms.K + k) / ${f}];`;for(let Z=0;Z<f;Z++)F+=`
            values[${K}] = fma(${z.type.value}(a_data${f===1?"":`[${Z}]`}), b_data${Z}, values[${K}]);
`}return F};return`
  ${T.registerUniforms(H).registerInternalVariables(C).declareVariables(...P,$)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${y};
    let row = (index1 % stride1) * ${y};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${C.offsetToIndices("batch")};`}

    var a_indices: ${E.type.indices};
    ${gr("a_indices",E,E.rank-2,C.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${gr("b_indices",z,z.rank-2,C.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${$.type.value}, ${y}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${M()}
    }
    for (var i = 0u; i < ${y}u; i++) {
      var value = values[i];
      ${V}
      ${N}
      let cur_indices = ${$.type.indices}(batch, row + i, col);
      let offset = ${$.indicesToOffset("cur_indices")};
      ${$.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${f};${y};${n}`,inputDependencies:w?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:b}),getShaderSource:I}}}),Bu,Du,Bn,Xi,Pu,Dn,Uu,ei,la=q(()=>{te(),ie(),ne(),Pt(),ua(),sa(),Bu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Du=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Bn=(e,t,r="f32",i,n=!1,s=32,a=!1,o=32)=>{let l=t[1]*e[1],d=t[0]*e[0],c=n?l:s,h=n?s:l,f=c/t[0],y=s/t[1];if(!((n&&f===4&&e[1]===4||!n&&(f===3||f===4))&&c%t[0]===0&&s%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${s} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${r}>, ${c/f}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${s}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${a?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${l};

  let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${y};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Bu(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Du(n,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Xi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Pu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Dn=(e,t,r="f32",i,n=!1,s=32,a=!1,o=32,l=!1)=>{let d=e[1]*t[1],c=e[0]*t[0],h=n?d:s,f=n?s:d;if(!(f%t[1]===0&&h%t[0]===0&&s%t[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${s} must be divisible by workgroupSize[1]${t[1]}`);let y=f/t[1],_=h/t[0],w=s/t[1],S=l?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${Xi(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${s}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${y};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${w};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Xi(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Pu(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${h}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${s}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${s};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${a?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${a?`${Math.ceil(o/s)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${a?`i32(globalId.z) * ${o}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},Uu=(e,t,r,i,n=!1)=>{let[s,a,o,l]=i,d=Ie(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${ke(e,d)} {
      var value = ${ke(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${a.type.indices};
        ${gr("aIndices",a,a.rank-2,s.rank,"batchIndices")}
        ${a.indicesSet("aIndices",a.rank-2,"u32(row)")}
        ${a.indicesSet("aIndices",a.rank-1,"u32(colIn)")}
        value = ${a.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${s.type.indices}) -> ${ke(e,d)} {
      var value = ${ke(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${o.type.indices};
        ${gr("bIndices",o,o.rank-2,s.rank,"batchIndices")}
        ${o.indicesSet("bIndices",o.rank-2,"u32(row)")}
        ${o.indicesSet("bIndices",o.rank-1,"u32(colIn)")}
        value = ${o.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${ke(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${ke(e,d)}(bias[row])`};`:""}
        ${r}
        ${l.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ei=(e,t,r,i,n=!1,s)=>{let a=e[0].dims,o=e[1].dims,l=a.slice(0,-2),d=o.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),h=R.size(c),f=a[a.length-2],y=a[a.length-1],_=o[o.length-1],w=y%4===0&&_%4===0,S=f<=8?[4,1,1]:[4,4,1],v=[8,8,1],b=[Math.ceil(_/v[0]/S[0]),Math.ceil(f/v[1]/S[1]),Math.ceil(h/v[2]/S[2])],I=w?4:1,T=[...l,f,y/I],C=T.length,E=[...d,y,_/I],z=E.length,$=[h,f,_/I],O=[{type:6,data:f},{type:6,data:_},{type:6,data:y}];Nt(t,O),O.push(...Q(c,T,E));let N=["rank","rank"],P=e.length>2;P&&(O.push(...Q(e[2].dims)),N.push("rank")),O.push(...Q($));let V=H=>{let M=c.length,F=ta("batchDims",e[0].dataType,M,1),K=Ie(e[0].dataType),Z=D("a",e[0].dataType,C,I),le=D("b",e[1].dataType,z,I),W=Y("result",e[0].dataType,$.length,I),me=[Z,le];if(P){let be=n?I:1;me.push(D("bias",e[2].dataType,e[2].dims.length,be))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Bt(t,U);let L=Ie(W.type.tensor),J=Rt(t,W.type.value,L),ee=Uu(I,P,J,[F,Z,le,W],n);return`
  ${H.registerUniforms(U).registerInternalVariables(F).declareVariables(...me,W)}
  ${ee}
  ${w?Bn(S,v,K,F):Dn(S,v,K,F)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${w};${n}`,inputDependencies:N},getRunData:()=>({outputs:[{dims:s?s(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:O}),getShaderSource:V}}}),Lu,uh,q0=q(()=>{te(),st(),ne(),Pt(),sa(),L0(),la(),Lu=(e,t,r,i,n=!1,s,a=4,o=4,l=4,d="f32")=>{let c=O=>{switch(O){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},h=O=>{switch(O){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${O} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,y=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",w=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",v=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${ke(a,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${w}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(a)}
    }
    return resData;`,I=e?t&&i?`
    let col = colIn * ${a};
    ${b}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${ke(a,d)}(0.0);`:i&&r?`
    let col = colIn * ${a};
    ${b}`:`
    let col = colIn * ${a};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${ke(a,d)}(0.0);`,T=e?i&&r?h(o):`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(o)}
    }
    return ${ke(o,d)}(0.0);`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(o)}
    }
    return ${ke(o,d)}(0.0);`,C=ke(l,d),E=ke(e?a:o,d),z=ke(e?o:a,d),$=Rt(s,C,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?I:T}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?T:I}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${C}) {
      let col = colIn * ${l};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${y}
      ${sh(n)}
      ${$}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},uh=(e,t,r,i,n,s,a,o,l)=>{let d=t.format==="NHWC",c=d?e[0].dims[3]:e[0].dims[1],h=r[0],f=d?r[2]:r[3],y=d?r[1]:r[2],_=d?r[3]:r[1],w=d&&(c%4===0||c%3===0)&&_%4===0,S=d?_:f*y,v=d?f*y:_,b=[8,8,1],I=i<=8?[4,1,1]:[4,4,1],T=[Math.ceil(S/b[0]/I[0]),Math.ceil(v/b[1]/I[1]),Math.ceil(h/b[2]/I[2])];de("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let C=w?d&&c%4!==0?3:4:1,E=b[1]*I[1],z=b[0]*I[0],$=Math.max(b[0]*C,b[1]),O=i%E===0,N=n%z===0,P=s%$===0,V=w?[C,4,4]:[1,1,1],H=[{type:6,data:i},{type:6,data:n},{type:6,data:s},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Nt(t,H),H.push(...Q(e[0].dims,e[1].dims));let M=["rank","rank"];a&&(H.push(...Q(e[2].dims)),M.push("rank")),H.push(...Q(r));let F=K=>{let Z=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Bt(t,Z);let le=w?4:1,W=Ie(e[0].dataType),me=`
      fn setOutputAtIndex(flatIndex : i32, value : ${w?`vec4<${W}>`:W}) {
        result[flatIndex] = ${w?`vec4<${W}>`:W}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${w?`vec4<${W}>`:W}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${w?"/ 4":""}, value);
      }`,U=D("x",e[0].dataType,e[0].dims.length,C===3?1:C),L=D("w",e[1].dataType,e[1].dims.length,le),J=[U,L],ee=Y("result",e[0].dataType,r.length,le);if(a){let be=D("bias",e[2].dataType,e[2].dims.length,le);J.push(be),me+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${w?`vec4<${W}>`:W} {
          return bias[coords.${d?"w":"y"}${w?"/ 4":""}];
        }`}return`
        ${oh("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(Z).declareVariables(...J,ee)}
        ${me}
        ${Lu(d,O,N,P,a,t,V[0],V[1],V[2],W)}
        ${w?Bn(I,b,W,void 0,!d,$):Dn(I,b,W,void 0,!d,$,!1,void 0,o)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${C};${w};${O};${N};${P};${E};${z};${$}`,inputDependencies:M},getRunData:()=>({outputs:[{dims:l?l(r):r,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:H}),getShaderSource:F}}}),qu,Qi,sr,Wu,Zi,Gu,lh,dh,W0=q(()=>{te(),st(),ie(),ne(),Pt(),sa(),qu=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Qi=e=>typeof e=="number"?[e,e,e]:e,sr=(e,t)=>t<=1?e:e+(e-1)*(t-1),Wu=(e,t,r,i=1)=>{let n=sr(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},Zi=(e,t,r,i,n)=>{n==null&&(n=Wu(e,t[0],i[0]));let s=[0,0,0,r];for(let a=0;a<3;a++)e[a]+2*n>=t[a]&&(s[a]=Math.trunc((e[a]-t[a]+2*n)/i[a]+1));return s},Gu=(e,t,r,i,n,s,a,o,l,d)=>{let c,h,f,y;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=Zi([t,r,i,1],[o,l,d],1,[n,s,a],e);h=_[0],f=_[1],y=_[2]}else if(Array.isArray(e)){if(!e.every((w,S,v)=>w===v[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=Zi([t,r,i,1],[o,l,d],1,[n,s,a],e[0]);h=_[0],f=_[1],y=_[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/n),f=Math.ceil(r/s),y=Math.ceil(i/a);let _=(h-1)*n+o-t,w=(f-1)*s+l-r,S=(y-1)*a+d-i,v=Math.floor(_/2),b=_-v,I=Math.floor(w/2),T=w-I,C=Math.floor(S/2),E=S-C;c={top:I,bottom:T,left:C,right:E,front:v,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:h,outHeight:f,outWidth:y}},lh=(e,t,r,i,n,s=!1,a="channelsLast")=>{let o,l,d,c,h;if(a==="channelsLast")[o,l,d,c,h]=e;else if(a==="channelsFirst")[o,h,l,d,c]=e;else throw new Error(`Unknown dataFormat ${a}`);let[f,,y,_,w]=t,[S,v,b]=Qi(r),[I,T,C]=Qi(i),E=sr(y,I),z=sr(_,T),$=sr(w,C),{padInfo:O,outDepth:N,outHeight:P,outWidth:V}=Gu(n,l,d,c,S,v,b,E,z,$),H=s?f*h:f,M=[0,0,0,0,0];return a==="channelsFirst"?M=[o,H,N,P,V]:a==="channelsLast"&&(M=[o,N,P,V,H]),{batchSize:o,dataFormat:a,inDepth:l,inHeight:d,inWidth:c,inChannels:h,outDepth:N,outHeight:P,outWidth:V,outChannels:H,padInfo:O,strideDepth:S,strideHeight:v,strideWidth:b,filterDepth:y,filterHeight:_,filterWidth:w,effectiveFilterDepth:E,effectiveFilterHeight:z,effectiveFilterWidth:$,dilationDepth:I,dilationHeight:T,dilationWidth:C,inShape:e,outShape:M,filterShape:t}},dh=(e,t,r,i,n,s)=>{let a=s==="channelsLast";a?e[0].dims[3]:e[0].dims[1];let o=[64,1,1],l={x:r.map((S,v)=>v)},d=[Math.ceil(qu(l.x.map(S=>r[S]))/o[0]),1,1];de("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let c=1,h=R.size(r),f=[{type:12,data:h},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];Nt(t,f),f.push(...Q(e[0].dims,e[1].dims));let y=["rank","rank"],_=e.length===3;_&&(f.push(...Q(e[2].dims)),y.push("rank")),f.push(...Q(r));let w=S=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Bt(t,v);let b=1,I=Ie(e[0].dataType),T=D("x",e[0].dataType,e[0].dims.length,c),C=D("W",e[1].dataType,e[1].dims.length,b),E=[T,C],z=Y("result",e[0].dataType,r.length,b),$="";if(_){let P=D("bias",e[2].dataType,e[2].dims.length,b);E.push(P),$+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${I} {
          return bias[${a?X("coords",4,5):X("coords",1,5)}];
        }`}let O=ke(c,I),N=Rt(t,O,I);return`
            ${$}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
          ${S.registerUniforms(v).declareVariables(...E,z)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${z.offsetToIndices("global_idx")};
              let batch = ${X("coords",0,T.rank)};
              let d2 = ${a?X("coords",T.rank-1,T.rank):X("coords",1,T.rank)};
              let xFRCCorner = vec3<u32>(${a?X("coords",1,T.rank):X("coords",2,T.rank)},
              ${a?X("coords",2,T.rank):X("coords",3,T.rank)},
              ${a?X("coords",3,T.rank):X("coords",4,T.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${a?X("uniforms.x_shape",1,T.rank):X("uniforms.x_shape",2,T.rank)};
              let xShapeZ = ${a?X("uniforms.x_shape",2,T.rank):X("uniforms.x_shape",3,T.rank)};
              let xShapeW = ${a?X("uniforms.x_shape",3,T.rank):X("uniforms.x_shape",4,T.rank)};
              let xShapeU = ${a?X("uniforms.x_shape",4,T.rank):X("uniforms.x_shape",1,T.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${a?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${a?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${a?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${a?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${_?"value = value + getBiasByOutputCoords(coords)":""};
              ${N}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${a};${c};${_}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:f}),getShaderSource:w}}}),ph,ch,G0=q(()=>{te(),ie(),ne(),Pt(),ph=(e,t,r,i)=>{let n=e.length>2,s=n?"value += b[output_channel];":"",a=e[0].dims,o=e[1].dims,l=t.format==="NHWC",d=l?r[3]:r[1],c=d/t.group,h=l&&c>=4?ve(d):1,f=R.size(r)/h,y=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];Nt(t,y),y.push(...Q(a,[o[0],o[1],o[2],o[3]/h]));let _=n?["rank","rank","rank"]:["rank","rank"];y.push(...Q([r[0],r[1],r[2],r[3]/h]));let w=S=>{let v=Y("output",e[0].dataType,r.length,h),b=Ie(v.type.tensor),I=Rt(t,v.type.value,b),T=D("x",e[0].dataType,a.length),C=D("w",e[1].dataType,o.length,h),E=[T,C];n&&E.push(D("b",e[2].dataType,e[2].dims,h));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Bt(t,z);let $=l?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${T.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${C.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${T.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${C.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(z).declareVariables(...E,v)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${l?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${l?1:2}], outputIndices[${l?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${l?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${$}
    ${s}
    ${I}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:y}),getShaderSource:w}},ch=(e,t,r,i)=>{let n=e.length>2,s=ve(r[3]),a=ve(r[2]),o=R.size(r)/s/a,l=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/s],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/s],c=[r[0],r[1],r[2],r[3]/s],h=[{type:12,data:o},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Nt(t,h),h.push(...Q(l,d,c));let f=(a-1)*t.strides[1]+d[1],y=_=>{let w=Y("output",e[0].dataType,c.length,s),S=Ie(w.type.tensor),v=Rt(t,w.type.value,S),b=D("x",e[0].dataType,l.length,s),I=D("w",e[1].dataType,d.length,s),T=[b,I];n&&T.push(D("b",e[2].dataType,e[2].dims,s));let C=n?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Bt(t,E),`
  ${_.registerUniforms(E).declareVariables(...T,w)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${a}u;
    let col = (index1 % width1) * ${a}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${f}>;
    var values: array<${w.type.value}, ${a}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${I.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${a}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${a}u; i++) {
      var value = values[i];
      ${C}
      ${v}
      ${w.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${s};${a};${f};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:h}),getShaderSource:y}}}),Vu,Lr,Hu,qr,Pn,Ji,Fu,ju,Un,V0=q(()=>{ie(),q0(),W0(),la(),G0(),Pt(),ua(),wt(),Vu=(e,t,r,i,n,s)=>{let a=e[0],o=e.slice(s?1:2,s?3:4),l=o.length,d=t[0],c=t.slice(2).map((f,y)=>f+(f-1)*(r[y]-1)),h=o.map((f,y)=>f+i[y]+i[y+l]).map((f,y)=>Math.floor((f-c[y]+n[y])/n[y]));return h.splice(0,0,a),h.splice(s?3:1,0,d),h},Lr=[2,3,1,0],Hu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},qr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let s=2;s<t[1].dims.length;++s)r[s-2]===0&&(r[s-2]=t[1].dims[s]);let i=e.pads.slice();Zr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},Pn=e=>{let t=aa(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,s=e.group,a=e.kernel_shape,o=e.pads,l=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:s,kernelShape:a,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Ji=(e,t,r,i)=>{let n=r.format==="NHWC",s=Vu(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let E=[t[0]];if(n){let z=e.kernelCustomData.wT??e.compute(Ue(t[1],Lr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),E.push(z)}else E.push(t[1]);t.length===3&&E.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(ch(E,r,s,i),{inputs:E}):e.compute(ph(E,r,s,i),{inputs:E});return}let a=t.length===3,o=t[0].dims[n?1:2],l=t[0].dims[n?2:3],d=t[0].dims[n?3:1],c=t[1].dims[2],h=t[1].dims[3],f=s[n?1:2],y=s[n?2:3],_=s[n?3:1],w=n&&c===o&&h===l&&r.pads[0]===0&&r.pads[1]===0;if(w||c===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let E=s[0],z,$,O,N=[];if(n){let H=e.kernelCustomData.wT??e.compute(Ue(t[1],Lr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=H),w){let M=o*l*d;z=t[0].reshape([1,E,M]),$=H.reshape([1,M,_]),O=[1,E,_]}else z=t[0].reshape([E,o*l,d]),$=H.reshape([1,d,_]),O=[E,f*y,_];N.push(z),N.push($)}else z=t[0].reshape([E,d,o*l]),$=t[1].reshape([1,_,d]),O=[E,_,f*y],N.push($),N.push(z);a&&N.push(t[2]);let P=O[2],V=N[0].dims[N[0].dims.length-1];P<8&&V<8?e.compute(oa(N,r,s,O,n,i),{inputs:N}):e.compute(ei(N,r,s,O,n,i),{inputs:N});return}let S=!0,v=e.kernelCustomData.wT??e.compute(Ue(t[1],Lr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let b=[t[0],v];a&&b.push(t[2]);let I=n?f*y:_,T=n?_:f*y,C=c*h*d;e.compute(uh(b,r,s,I,T,C,a,S,i),{inputs:b})},Fu=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],s=[1].concat(t.strides),a=[1].concat(t.dilations),o=[1].concat(t.kernelShape),l=qr({...t,pads:n,strides:s,dilations:a,kernelShape:o},i);Ji(e,i,l,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},ju=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=qr(r,t),s=r.autoPad==="NOTSET"?r.pads:r.autoPad,a=lh(t[0].dims,t[1].dims,r.strides,r.dilations,s,!1,i);e.compute(dh(t,n,a.outShape,[a.filterDepth,a.filterHeight,a.filterWidth],[a.padInfo.front,a.padInfo.top,a.padInfo.left],i))},Un=(e,t)=>{if(Hu(e.inputs,t),e.inputs[0].dims.length===3)Fu(e,t);else if(e.inputs[0].dims.length===5)ju(e,e.inputs,t);else{let r=qr(t,e.inputs);Ji(e,e.inputs,r)}}}),hh,H0=q(()=>{te(),st(),ie(),ne(),hh=(e,t,r)=>{let i=e.length>2,n=t.outputShape,s=t.format==="NHWC",a=t.group,o=e[1].dims,l=o[2]/a,d=o[3],c=s?ve(l):1,h=s&&d===1&&l>=4,f=h?Math.floor(l/4)*4:Math.floor(l/c)*c,y=l-f,_=s?ve(d):1,w=s?d===1?c:_:1,S=R.size(n)/_,v=[Math.ceil(S/64),1,1];de("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${v}`);let b=["rank","rank"],I=[t.strides[0],t.strides[1]],T=[t.kernelShape[s?1:2],t.kernelShape[s?2:3]],C=[t.dilations[0],t.dilations[1]],E=[T[0]+(t.dilations[0]<=1?0:(t.kernelShape[s?1:2]-1)*(t.dilations[0]-1)),T[1]+(t.dilations[1]<=1?0:(t.kernelShape[s?2:3]-1)*(t.dilations[1]-1))],z=[E[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),E[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],$=[{type:12,data:S},{type:12,data:I},{type:12,data:T},{type:12,data:C},{type:12,data:E},{type:6,data:z},{type:12,data:f},{type:12,data:l},{type:12,data:d},...Q(e[0].dims,e[1].dims)];i&&($.push(...Q(e[2].dims)),b.push("rank")),$.push(...Q(n));let O=N=>{let P=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:I.length},{name:"filter_dims",type:"u32",length:T.length},{name:"dilations",type:"u32",length:T.length},{name:"effective_filter_dims",type:"u32",length:E.length},{name:"pads",type:"i32",length:z.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],V=Ie(e[0].dataType),H=s?1:2,M=s?2:3,F=s?3:1,K=D("W",e[1].dataType,e[1].dims.length,w),Z=D("Dy",e[0].dataType,e[0].dims.length,c),le=[Z,K];i&&le.push(D("bias",e[2].dataType,[n[F]].length,_));let W=Y("result",e[0].dataType,n.length,_),me=()=>{let J="";if(h)c===4?J+=`
        let xValue = ${Z.getByOffset("x_offset")};
        let wValue = ${K.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:c===2?J+=`
          dotProd = dotProd + dot(vec4<${V}>(${Z.getByOffset("x_offset")}, ${Z.getByOffset("x_offset + 1u")}), vec4<${V}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:c===1&&(J+=`
          dotProd = dotProd + dot(vec4<${V}>(${Z.getByOffset("x_offset")}, ${Z.getByOffset("x_offset + 1u")}, ${Z.getByOffset("x_offset + 2u")}, ${Z.getByOffset("x_offset + 3u")}), vec4<${V}>(${K.getByOffset("w_offset")}, ${K.getByOffset("w_offset + 1u")}, ${K.getByOffset("w_offset + 2u")}, ${K.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(J+=`
                  let xValue = ${s?Z.getByOffset(`${Z.indicesToOffset(`${Z.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c}`):Z.get("batch","inputChannel","idyR","idyC")};
        `,c===1)J+=`
          let w_offset = ${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${K.getByOffset(`w_offset / ${w}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let ee=0;ee<c;ee++)J+=`
            let wValue${ee} = ${K.getByOffset(`${K.indicesToOffset(`${K.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ee}, wOutChannel)`)} / ${w}`)};
            dotProd = dotProd + xValue[${ee}] * wValue${ee};`;return J},U=()=>{if(y===0)return"";if(!h)throw new Error(`packInputAs4 ${h} is not true.`);let J="";if(c===1){J+="dotProd = dotProd";for(let ee=0;ee<y;ee++)J+=`
            + ${Z.getByOffset(`x_offset + ${ee}`)} * ${K.getByOffset(`w_offset + ${ee}`)}`;J+=";"}else if(c===2){if(y!==2)throw new Error(`Invalid inputChannelsRemainder ${y}.`);J+=`
          let xValue = ${Z.getByOffset("x_offset")};
          let wValue = ${K.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return J},L=`
            let outputIndices = ${W.offsetToIndices(`global_idx * ${_}`)};
            let batch = ${W.indicesGet("outputIndices",0)};
            let d1 = ${W.indicesGet("outputIndices",F)};
            let r = ${W.indicesGet("outputIndices",H)};
            let c = ${W.indicesGet("outputIndices",M)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${W.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${V}(dyRCorner) + ${V}(wR)) / ${V}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${V}(uniforms.Dy_shape[${H}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${V}(dyCCorner) + ${V}(wC)) / ${V}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${V}(uniforms.Dy_shape[${M}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${h?`
                var x_offset = ${Z.indicesToOffset(`${Z.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${c};
                var w_offset = ${K.indicesToOffset(`${K.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${w};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${h?4:c}) {
                  ${me()}
                  inputChannel = inputChannel + ${h?4:c};
                }
                ${U()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${_}]`:""};
            ${W.setByOffset("global_idx","value")};
          `;return`
    ${N.registerUniforms(P).declareVariables(...le,W)}
      ${N.mainStart()}
      ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${L}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${c}${w}${_}${h}${y}`,inputDependencies:b},getRunData:()=>({dispatchGroup:{x:v[0],y:v[1],z:v[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:$}),getShaderSource:O}}}),Ku,Yu,Xu,en,fh,Qu,tn,Zu,mh,F0=q(()=>{H0(),Pt(),wt(),Ku=(e,t,r,i,n,s)=>(e-1)*t+r+(i-1)*n+1-s,Yu=(e,t,r,i,n)=>{let s=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=s,r[n]=e-s):t==="SAME_LOWER"&&(r[i]=e-s,r[n]=s)},Xu=(e,t,r,i,n,s,a,o,l,d)=>{let c=e.length-2,h=d.length===0;l.length<c&&l.push(...Array(c-l.length).fill(0));let f=e[0],y=t[o?3:1]*n;for(let _=0,w=e.length-c-(o?1:0);_<c;++_,++w){let S=e[w],v=h?S*a[_]:d[_],b=Ku(S,a[_],s[_],t[w],r[_],v);Yu(b,i,s,_,_+c),h&&d.push(a[_]*(S-1)+l[_]+(t[w]-1)*r[_]+1-s[_]-s[_+c])}d.splice(0,0,f),d.splice(o?3:1,0,y)},en=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,f)=>h*f,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),s=e.outputShape.slice(),a=e.outputPadding.slice(),o=t[0].dims,l=e.dilations.slice();if(l.reduce((h,f)=>h+f,0)===0){let h=t[0].dims.length-2;l=new Array(h).fill(1)}let d=e.strides.slice();if(d.reduce((h,f)=>h+f,0)===0){let h=t[0].dims.length-2;d=new Array(h).fill(1)}Xu(o,r,l,e.autoPad,e.group,n,d,i,a,s);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:n,outputPadding:a,outputShape:s,dilations:l,strides:d}),c},fh=e=>{let t=aa(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,s=e.group??1,a=e.kernelShape,o=e.pads,l=e.strides,d=e.wIsConst(),c=e.outputPadding,h=e.outputShape;return{autoPad:i,format:r,dilations:n,group:s,kernelShape:a,outputPadding:c,outputShape:h,pads:o,strides:l,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Qu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let s=e[0].dims.length-2;if(t.dilations.reduce((a,o)=>a+o,0)>0&&t.dilations.length!==s)throw new Error(`dilations should be ${s}D`);if(t.strides.reduce((a,o)=>a+o,0)>0&&t.strides.length!==s)throw new Error(`strides should be ${s}D`);if(t.pads.reduce((a,o)=>a+o,0)>0&&t.pads.length!==s*2)throw new Error(`pads should be ${s*2}D`);if(t.outputPadding.length!==s&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${s}D`);if(t.kernelShape.reduce((a,o)=>a+o,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},tn=(e,t,r,i)=>{let n=e.kernelCustomData.wT??e.compute(Ue(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let s=[t[0],n];t.length===3&&s.push(t[2]),e.compute(hh(s,r,i),{inputs:s})},Zu=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let s=t.dilations;(s.length===0||s[0]===0)&&(s=[1]);let a=t.strides;(a.length===0||a[0]===0)&&(a=[1]);let o=t.pads;o.length===0&&(o=[0,0]),o=[0,o[0],0,o[1]],a=[1].concat(a),s=[1].concat(s),n=[1].concat(n);let l=t.outputPadding;l=[0].concat(l);let d=en({...t,pads:o,strides:a,dilations:s,kernelShape:n,outputPadding:l},i);tn(e,i,d,c=>r?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},mh=(e,t)=>{if(Qu(e.inputs,t),e.inputs[0].dims.length===3)Zu(e,t);else{let r=en(t,e.inputs);tn(e,e.inputs,r)}}}),Ju,gh,yh,j0=q(()=>{te(),ie(),xe(),ne(),Ju=(e,t,r,i)=>{let n=R.size(t),s=t.length,a=D("input",e,s),o=Y("output",e,s),l=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=R.normalizeAxis(l,s),c=h=>{let f=` i32(${a.indicesGet("inputIndices","uniforms.axis")}) `,y=X("uniforms.input_shape","uniforms.axis",s),_=i.reverse?f+(i.exclusive?" + 1":""):"0",w=i.reverse?y:f+(i.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(a,o)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${o.offsetToIndices("global_idx")};
                  var sum = ${o.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${w};
                  for (var i : i32 = first; i < last; i++) {
                    ${a.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${a.getByIndices("inputIndices")};
                  }
                  ${o.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...Q(t,t)]}),getShaderSource:c}},gh=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(Ju(i,r,n,t),{inputs:[0]})},yh=e=>{let t=e.exclusive===1,r=e.reverse===1;return he({exclusive:t,reverse:r})}}),el,tl,rl,_h,wh,K0=q(()=>{te(),ie(),xe(),ne(),el=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},tl=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let s=0;s<t;++s)n.push(r.indicesSet("a",e[s],`i[${s}]`));return n.push("return a;}"),n.join(`
`)},rl=(e,t)=>{let r,i,n,s,a,o,l=t.format==="NHWC",d=t.blocksize,c=t.mode==="DCR";l?([r,i,n,s]=e.dims,a=c?[r,i,n,d,d,s/d**2]:[r,i,n,s/d**2,d,d],o=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,s]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],a=c?[r,d,d,s/d**2,i,n]:[r,s/d**2,d,d,i,n],o=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(a),f=h.dims.length,y=e.dataType,_=D("a",y,f),w=Y("output",y,f),S=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,w)}

  ${tl(o,f,_,w)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${w.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${w.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let b=l?[r,i*d,n*d,s/d**2]:[r,s/d**2,i*d,n*d],I=R.size(b),T=h.dims,C=R.sortBasedOnPerm(T,o);return{outputs:[{dims:b,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...Q(T,C)]}},getShaderSource:S}},_h=(e,t)=>{el(e.inputs),e.compute(rl(e.inputs[0],t))},wh=e=>he({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Wr,or,rn,il,nl,al,sl,nn,ol,bh,$h,Y0=q(()=>{te(),ie(),xe(),ne(),Wr="[a-zA-Z]|\\.\\.\\.",or="("+Wr+")+",rn="^"+or+"$",il="("+or+",)*"+or,nl="^"+il+"$",al=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},sl=class{constructor(e,t){var n;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(nl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((s,a)=>{let o=e[a].dims.slice();if(!s.match(RegExp(rn)))throw new Error("Invalid LHS term");let l=this.processTerm(s,!0,o,a);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([s,a])=>a.count===1||s==="...").map(([s])=>s).join("");else if(!i.match(RegExp(or)))throw new Error("Invalid RHS");(n=i.match(RegExp(Wr,"g")))==null||n.forEach(s=>{if(s==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(s);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,s=!1,a=[],o=0;if(!e.match(RegExp(rn))&&!t&&e!=="")throw new Error("Invalid LHS term");let l=e.match(RegExp(Wr,"g")),d=new al(i);return l==null||l.forEach((c,h)=>{if(c==="..."){if(s)throw new Error("Only one ellipsis is allowed per input term");s=!0;let f=n-l.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(a=r.slice(o,o+f),this.hasEllipsis){if(this.ellipsisDims.length!==a.length||this.ellipsisDims.toString()!==a.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=a;else throw new Error("Ellipsis must be specified in the LHS");for(let y=0;y<a.length;y++){let _=String.fromCharCode(48+y);d.addSymbol(_,h+y),this.addSymbol(_,r[o++],i)}}else d.addSymbol(c,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[o++],i)}),d}},nn=e=>e+"_max",ol=(e,t,r,i)=>{let n=e.map(d=>d.length).map((d,c)=>D(`input${c}`,t,d)),s=R.size(i),a=Y("output",t,i.length),o=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),l=d=>{let c=[],h="var prod = 1.0;",f="var sum = 0.0;",y="sum += prod;",_=[],w=[],S=[],v=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((T,C)=>{var E;if(r.rhs.symbolToIndices.has(C)){let z=(E=r.rhs.symbolToIndices.get(C))==null?void 0:E[0];z!==void 0&&r.lhs.forEach(($,O)=>{if(T.inputIndices.includes(O)){let N=$.symbolToIndices.get(C);if(N===void 0)throw new Error("Invalid symbol error");N.forEach(P=>{c.push(`${n[O].indicesSet(`input${O}Indices`,P,a.indicesGet("outputIndices",z))}`)})}})}else r.lhs.forEach((z,$)=>{if(T.inputIndices.includes($)){let O=z.symbolToIndices.get(C);if(O===void 0)throw new Error("Invalid symbol error");O.forEach(N=>{_.push(`${n[$].indicesSet(`input${$}Indices`,N,`${C}`)}`)}),v.push(`prod *= ${n[$].getByIndices(`input${$}Indices`)};`)}}),w.push(`for(var ${C}: u32 = 0; ${C} < uniforms.${nn(C)}; ${C}++) {`),S.push("}")});let I=b?[...c,`let sum = ${n.map((T,C)=>T.getByIndices(`input${C}Indices`)).join(" * ")};`]:[...c,f,...w,..._,h,...v,y,...S];return`
            ${d.registerUniforms(o.map(T=>({name:`${nn(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,a)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${a.offsetToIndices("global_idx")};
            ${n.map((T,C)=>`var input${C}Indices: ${n[C].type.indices};`).join(`
`)}
            ${I.join(`
`)};
            ${a.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=o.filter(h=>r.symbolToInfo.has(h)).map(h=>{var f;return{type:12,data:((f=r.symbolToInfo.get(h))==null?void 0:f.dimValue)||0}});d.push({type:12,data:s});let c=e.map((h,f)=>[...Q(h)]).reduce((h,f)=>h.concat(f),d);return c.push(...Q(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}},getShaderSource:l}},bh=(e,t)=>{let r=new sl(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((s,a)=>s.dims);e.compute(ol(n,e.inputs[0].dataType,r,i))},$h=e=>{let t=e.equation.replace(/\s+/g,"");return he({equation:t})}}),ul,an,ll,dl,vh,X0=q(()=>{te(),ie(),ne(),ul=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},an=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},ll=(e,t)=>e.length>t.length?an(e,t):an(t,e),dl=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=ll(t,r),n=e[0].dataType,s=n===9||R.size(t)===1,a=n===9||t.length>0&&t[t.length-1]%4===0?4:1,o=s||i.length>0&&i[i.length-1]%4===0?4:1,l=Math.ceil(R.size(i)/o),d=h=>{let f=D("input",n,t.length,a),y=Y("output",n,i.length,o),_;if(n===9){let w=(S,v,b="")=>`
          let outputIndices${v} = ${y.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${f.broadcastedIndicesToOffset(`outputIndices${v}`,y)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${S}[${v}] = ${b}(${f.getByOffset(`index${v}`)}[component${v}]);
        `;_=`
        let outputOffset = global_idx * ${o};
        var data = vec4<u32>(0);
        ${w("data",0,"u32")}
        ${w("data",1,"u32")}
        ${w("data",2,"u32")}
        ${w("data",3,"u32")}
        ${y.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${y.offsetToIndices(`global_idx * ${o}`)};
        let inputOffset = ${f.broadcastedIndicesToOffset("outputIndices",y)};
        let data = ${y.type.value}(${f.getByOffset(`inputOffset / ${a}`)});
        ${y.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(f,y)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},c=[{type:12,data:l},...Q(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${a}${o}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:c})}},vh=e=>{ul(e.inputs),e.compute(dl(e.inputs),{inputs:[0]})}}),pl,xh,Q0=q(()=>{te(),ie(),ne(),na(),pl=e=>{let t=e[0].dataType,r=R.size(e[0].dims),i=R.size(e[1].dims),n=i%4===0,s=a=>{let o=D("x",t,[1],4),l=D("bias",t,[1],4),d=Y("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=y=>`
      let bias${y}_offset: u32 = (global_idx * 4 + ${y}) % uniforms.bias_size;
      let bias${y} = ${l.getByOffset(`bias${y}_offset / 4`)}[bias${y}_offset % 4];`,f=n?`
      let bias = ${l.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${o.type.value}(bias0, bias1, bias2, bias3);`;return`${a.registerUniforms(c).declareVariables(o,l,d)}

    ${Rn(Ce(t))}

    ${a.mainStart(jt)}
      ${a.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${o.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",Nn("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:s,getRunData:a=>({outputs:[{dims:a[0].dims,dataType:a[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/jt/4)}})}},xh=e=>{e.inputs.length<2||R.size(e.inputs[1].dims)===0?Gc(e):e.compute(pl(e.inputs))}}),cl,hl,Sh,Ih,Z0=q(()=>{te(),ie(),xe(),ne(),cl=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},hl=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,s=R.normalizeAxis(t.axis,n),a=r.slice(0);a.splice(s,1,...i);let o=r[s],l=e[0].dataType===9?4:1,d=Math.ceil(R.size(a)/l),c=[{type:12,data:d},{type:6,data:o},{type:12,data:s},...Q(e[0].dims,e[1].dims,a)],h=f=>{let y=D("data",e[0].dataType,e[0].dims.length,l),_=D("inputIndices",e[1].dataType,e[1].dims.length),w=Y("output",e[0].dataType,a.length,l),S=b=>{let I=i.length,T=`var indicesIndices${b}  = ${_.type.indices}(0);`;for(let C=0;C<I;C++)T+=`${I>1?`indicesIndices${b}[${C}]`:`indicesIndices${b}`} = ${a.length>1?`outputIndices${b}[uniforms.axis + ${C}]`:`outputIndices${b}`};`;T+=`
          var idx${b} = ${_.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${y.type.indices};
        `;for(let C=0,E=0;C<n;C++)C===s?(T+=`${n>1?`dataIndices${b}[${C}]`:`dataIndices${b}`} = u32(idx${b});`,E+=I):(T+=`${n>1?`dataIndices${b}[${C}]`:`dataIndices${b}`} = ${a.length>1?`outputIndices${b}[${E}]`:`outputIndices${b}`};`,E++);return T},v;if(e[0].dataType===9){let b=(I,T,C="")=>`
          let outputIndices${T} = ${w.offsetToIndices(`outputOffset + ${T}u`)};
          ${S(T)};
          let offset${T} = ${y.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${I}[${T}] = ${C}(${y.getByOffset(`index${T}`)}[component${T}]);
        `;v=`
        let outputOffset = global_idx * ${l};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${w.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${w.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${y.getByIndices("dataIndices")};
      ${w.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(y,_,w)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:h}},Sh=e=>he({axis:e.axis}),Ih=(e,t)=>{let r=e.inputs;cl(r),e.compute(hl(e.inputs,t))}}),fl,Th,kh,J0=q(()=>{te(),ie(),ne(),fl=(e,t,r,i,n,s,a,o,l)=>{let d=[{type:12,data:s},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:a},{type:12,data:o},{type:12,data:l}],c=[s];d.push(...Q(t.dims,c));let h=f=>{let y=D("indices_data",t.dataType,t.dims.length),_=Y("input_slice_offsets_data",12,1,1),w=[y,_],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${f.registerUniforms(S).declareVariables(...w)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},Th=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,s=r[1].dims,a=s[s.length-1],o=R.sizeToDimension(s,s.length-1),l=R.sizeFromDimension(i,t.batchDims+a),d=R.sizeToDimension(i,t.batchDims),c=R.sizeFromDimension(i,t.batchDims),h=o/d,f=new Array(a),y=l;for(let T=0;T<a;++T)f[a-1-T]=y,y*=i[t.batchDims+a-1-T];let _=fl(e,r[1],f,t.batchDims,i,o,h,c,a),w=t.batchDims+a;if(w>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=s.slice(0,-1).concat(i.slice(w)),v=R.size(S),b=[{type:12,data:v},{type:12,data:l},...Q(r[0].dims,_.dims,S)],I=T=>{let C=D("data",r[0].dataType,r[0].dims.length),E=D("slice_offsets",12,_.dims.length),z=Y("output",r[0].dataType,S.length);return`
          ${T.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(C,E,z)}
            ${T.mainStart()}
            ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:n}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:b}),getShaderSource:I},{inputs:[r[0],_]})},kh=e=>({batchDims:e.batch_dims,cacheKey:""})}),ml,gl,Eh,Ch,ey=q(()=>{te(),ie(),xe(),ne(),ml=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=R.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],s=e[2],a=e.length===4?e[3]:void 0;if(s.dims.length!==n.dims.length||!n.dims.map((o,l)=>l===r?Math.ceil(o/i)===s.dims[l]:o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(a){if(a.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(a.dims.length!==s.dims.length||!a.dims.map((o,l)=>o===s.dims[l]).reduce((o,l)=>o&&l,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},gl=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,s=R.normalizeAxis(t.gatherAxis,n),a=R.normalizeAxis(t.quantizeAxis,n),o=r.slice(0);o.splice(s,1,...i);let l=R.size(o),d=e[2].dataType,c=e[0].dataType===22,h=[{type:12,data:l},{type:12,data:a},{type:12,data:s},{type:12,data:t.blockSize},...Q(...e.map((y,_)=>y.dims),o)],f=y=>{let _=D("data",e[0].dataType,e[0].dims.length),w=D("inputIndices",e[1].dataType,e[1].dims.length),S=D("scales",e[2].dataType,e[2].dims.length),v=e.length>3?D("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=Y("output",d,o.length),I=[_,w,S];v&&I.push(v);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${y.registerUniforms(T).declareVariables(...I,b)}
        ${y.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${w.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${w.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${w.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[s]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${o.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ce(d)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((y,_)=>_!==1).map(y=>y.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(y,_)=>"rank")},getRunData:()=>({outputs:[{dims:o,dataType:d}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:f}},Eh=(e,t)=>{let r=e.inputs;ml(r,t),e.compute(gl(e.inputs,t))},Ch=e=>he({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),yl,_l,zh,Ah,ty=q(()=>{te(),ie(),xe(),ne(),yl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},_l=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,s=e[1].dims,a=e[1].dataType,o=R.normalizeAxis(t.axis,n),l=r[o],d=s.slice(0),c=R.size(d),h=D("input",i,n),f=D("indicesInput",a,s.length),y=Y("output",i,d.length),_=[{type:12,data:c},{type:6,data:l},{type:12,data:o}];return _.push(...Q(r,s,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:_}),getShaderSource:w=>`
      ${w.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,f,y)}
      ${w.mainStart()}
      ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${y.offsetToIndices("global_idx")};

      var idx = ${f.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${y.setByOffset("global_idx","value")};
  }`}},zh=e=>he({axis:e.axis}),Ah=(e,t)=>{let r=e.inputs;yl(r),e.compute(_l(e.inputs,t))}}),wl,bl,Oh,Mh,ry=q(()=>{te(),ie(),ne(),wl=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},bl=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,s,a]=zp.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),o=[n,s];if(!o)throw new Error("Can't use gemm on the given tensors");let l=16,d=Math.ceil(s/l),c=Math.ceil(n/l),h=!0,f=R.size(o),y=[{type:12,data:h?d:f},{type:12,data:n},{type:12,data:s},{type:12,data:a},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(y.push(...Q(e[2].dims)),_.push("rank")),y.push(...Q(o));let w=v=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let I=t.alpha===1?"":"value *= uniforms.alpha;",T=D("a",e[0].dataType,e[0].dims),C=D("b",e[1].dataType,e[1].dims),E=T.type.value,z=null,$=[T,C];e.length===3&&(z=D("c",e[2].dataType,e[2].dims.length),$.push(z));let O=Y("output",e[0].dataType,o.length);$.push(O);let N=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(N).declareVariables(...$)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${I}
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",O)}; value += ${E}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=v=>{let b=D("a",e[0].dataType,e[0].dims),I=D("b",e[1].dataType,e[1].dims),T=null,C=[b,I];e.length===3&&(T=D("c",e[2].dataType,e[2].dims.length),C.push(T));let E=Y("output",e[0].dataType,o.length);C.push(E);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],$="",O="";t.transA&&t.transB?(O=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(O=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,$="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(O=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(O=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,$="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let N=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(z).declareVariables(...C)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${l}>, ${l}>;
  var<workgroup> tile_b: array<array<${I.type.storage}, ${l}>, ${l}>;
  ${v.mainStart([l,l,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${l};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${l};
    let num_tiles = (uniforms.K - 1) / ${l} + 1;
    var k_start = 0u;
    var value = ${E.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${O}
      k_start = k_start + ${l};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${l}; k++) {
        ${$}
      }
      workgroupBarrier();
    }

    ${N}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:d*c},programUniforms:y}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:y}),getShaderSource:w}},Oh=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Mh=(e,t)=>{wl(e.inputs),e.compute(bl(e.inputs,t))}}),Je,it,xt,St,$l,vl,xl,Sl,Il,Tl,kl,El,Rh,Nh,iy=q(()=>{te(),ie(),xe(),ne(),[Je,it,xt,St]=[0,1,2,3],$l=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},vl=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,xl=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Sl=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Il=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Tl=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Je}] = batch;
     indices[${it}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${xt}] = u32(r);
            indices[${St}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${xt}] = u32(clamp(r, 0, H - 1));
          indices[${St}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${xt}] = gs_reflect(r, border[1], border[3]);
          indices[${St}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,kl=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Je}], indices[${it}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Je}], indices[${it}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Je}], indices[${it}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Je}], indices[${it}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Je}], indices[${it}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Je}], indices[${it}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,El=(e,t)=>{let r=D("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=D("grid",e[1].dataType,i.length,2),s=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(s=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Je,it,xt,St]=[0,3,1,2]);let a=Y("output",e[0].dataType,s.length),o=r.type.value,l=R.size(s),d=[{type:12,data:l},...Q(e[0].dims,i,s)],c=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,n,a)}
  ${vl}
  ${xl(o)}
  ${Sl(t)}
  ${Il(t)}
  ${Tl(r,o,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${xt}]);
      let W_in = i32(uniforms.x_shape[${St}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${a.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Je}], indices[${xt}], indices[${St}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${kl(a,o,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let f=R.size(s);return{outputs:[{dims:s,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:d}},getShaderSource:c}},Rh=(e,t)=>{$l(e.inputs),e.compute(El(e.inputs,t))},Nh=e=>he({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),ze,Cl,Bh,sn,zl,mr,Dh,Ph=q(()=>{te(),ie(),xe(),ea(),ia(),ne(),wt(),ze=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Cl=(e,t)=>{let r=e[0],i=ze(e,1),n=ze(e,2),s=ze(e,3),a=ze(e,4),o=ze(e,5),l=ze(e,6),d=ze(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],h=r.dims[1],f=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],y=h,_=0,w=0,S=Math.floor(f/t.numHeads);if(l&&d&&R.size(l.dims)&&R.size(d.dims)){if(l.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(l.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=l.dims[2],w=l.dims[2]}else if(l&&R.size(l.dims)||d&&R.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&R.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,y=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,y=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,y=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(s&&R.size(s.dims)>0){if(s.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=_+y,I=0;if(a&&R.size(a.dims)>0){I=8;let z=a.dims;throw z.length===1?z[0]===c?I=1:z[0]===3*c+2&&(I=3):z.length===2&&z[0]===c&&z[1]===b&&(I=5),I===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,C=f;if(n&&R.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(y!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=n.dims[2]}else{if(y!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');C=n.dims[1]*n.dims[3],T=!0}}let E=!1;if(a&&R.size(a.dims)>0)throw new Error("Key padding mask is not supported");if(o&&R.size(o.dims)>0){if(o.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(o.dims[0]!==c||o.dims[1]!==t.numHeads||o.dims[2]!==h||o.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:h,pastSequenceLength:_,kvSequenceLength:y,totalSequenceLength:b,maxSequenceLength:w,inputHiddenSize:0,hiddenSize:f,vHiddenSize:C,headSize:S,vHeadSize:Math.floor(C/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:E,passPastInKv:T,qkvFormat:v}},Bh=e=>he({...e}),sn=he({perm:[0,2,1,3]}),zl=(e,t,r,i,n,s,a)=>{let o=[i,n,s],l=R.size(o),d=[{type:12,data:l},{type:12,data:a},{type:12,data:s}],c=h=>{let f=Y("qkv_with_bias",t.dataType,o),y=D("qkv",t.dataType,o),_=D("bias",r.dataType,o),w=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(w).declareVariables(y,_,f)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},mr=(e,t,r,i,n,s,a,o)=>{let l=s;if(a&&R.size(a.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return l=zl(e,s,a,t,i,r*n,o),l=l.reshape([t,i,r,n]),r===1||i===1?l:e.compute(Ue(l,sn.perm),{inputs:[l],outputs:[-1]})[0]}else return s.dims.length===3&&(l=s.reshape([t,i,r,n])),r===1||i===1?l:e.compute(Ue(l,sn.perm),{inputs:[l],outputs:[-1]})[0]},Dh=(e,t)=>{let r=Cl(e.inputs,t),i=e.inputs[0],n=ze(e.inputs,1),s=ze(e.inputs,2),a=ze(e.inputs,3),o=ze(e.inputs,4),l=ze(e.inputs,5),d=ze(e.inputs,6),c=ze(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if((n==null?void 0:n.dims.length)===5)throw new Error("Packed KV is not implemented");let h=n&&s&&n.dims.length===4&&s.dims.length===4,f=mr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,a,0);if(h)return _r(e,f,n,s,o,void 0,d,c,l,r);if(!n||!s)throw new Error("key and value must be provided");let y=mr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,a,r.hiddenSize),_=mr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,s,a,2*r.hiddenSize);_r(e,f,y,_,o,void 0,d,c,l,r)}}),Al,Ol,Ml,Rl,Ln,Uh,Lh,qh=q(()=>{te(),ie(),xe(),ne(),Al=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Ol=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),he({numOutputs:i,axis:t.axis,splitSizes:r})},Ml=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${X("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Rl=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},Ln=(e,t)=>{let r=e[0].dims,i=R.size(r),n=e[0].dataType,s=R.normalizeAxis(t.axis,r.length),a=new Array(t.numOutputs),o=D("input",n,r.length),l=new Array(t.numOutputs),d=[],c=[],h=0,f=[{type:12,data:i}];for(let _=0;_<t.numOutputs;_++){h+=t.splitSizes[_],l[_]=h;let w=r.slice();w[s]=t.splitSizes[_],c.push(w),a[_]=Y(`output${_}`,n,w.length),d.push({dims:c[_],dataType:e[0].dataType})}f.push({type:12,data:l},...Q(r,...c));let y=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",l.length).declareVariables(o,...a)}
  ${Ml(l.length)}
  ${Rl(a)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${o.offsetToIndices("global_idx")};
    var index = ${o.indicesGet("indices",s)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${X("uniforms.size_in_split_axis","output_number - 1u",l.length)};
      ${o.indicesSet("indices",s,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:y,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:f})}},Uh=(e,t)=>{Al(e.inputs);let r=e.inputs.length===1?t:Ol(e.inputs,t);e.compute(Ln(e.inputs,r),{inputs:[0]})},Lh=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return he({axis:t,numOutputs:i,splitSizes:r})}}),Nl,ti,Wh,Gh=q(()=>{te(),ie(),xe(),ne(),Nl=(e,t)=>{let[r,i,n,s]=e,{numHeads:a,rotaryEmbeddingDim:o}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!R.areEqual(i.dims,[])&&!R.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(s.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${s.dims.length}`);if(!R.areEqual(n.dims,s.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(o>0&&a===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let l=r.dims[0],d=r.dims[r.dims.length-2],c=n.dims[0],h=R.sizeFromDimension(r.dims,1)/d,f=o===0?n.dims[1]*2:h/a;if(o>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(l!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(f/2!==n.dims[1]&&o/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(d>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},ti=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:s}=t,a=e[0].dims[0],o=R.sizeFromDimension(e[0].dims,1),l=e[0].dims[e[0].dims.length-2],d=o/l,c=e[2].dims[1],h=n===0?c*2:d/i,f=new Array(a,l,d/h,h-c),y=R.computeStrides(f),_=[{type:1,data:s},{type:12,data:f},{type:12,data:y},...e[0].dims.length===3?new Array({type:12,data:[o,d,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[o,h,l*h,1]}):[],...Q(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],w=S=>{let v=D("input",e[0].dataType,e[0].dims.length),b=D("position_ids",e[1].dataType,e[1].dims.length),I=D("cos_cache",e[2].dataType,e[2].dims.length),T=D("sin_cache",e[3].dataType,e[3].dims.length),C=Y("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:y.length},{name:"input_output_strides",type:"u32",length:y.length}]),`
        ${S.declareVariables(v,b,I,T,C)}

        ${S.mainStart(jt)}
          let half_rotary_emb_dim = uniforms.${I.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",Y("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${C.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${C.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${C.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:he({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(f)/jt)},programUniforms:_})}},Wh=(e,t)=>{Nl(e.inputs,t),e.compute(ti(e.inputs,t))}}),Bl,Dl,on,Pl,Vh,ny=q(()=>{xe(),te(),ia(),Ph(),qh(),wt(),Gh(),ne(),Bl=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],s=e[3],a=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let o=!1,l=r.dims[0],d=r.dims[1],c=r.dims.length===3?o?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=d,f=0,y=!i||i.dims.length===0,_=Math.floor(y?c/(t.numHeads+2*t.kvNumHeads):c/t.numHeads);y&&(c=_*t.numHeads);let w=s&&s.dims.length!==0,S=a&&a.dims.length!==0;if(w&&s.dims.length===4&&s.dims[0]===l&&s.dims[1]!==t.kvNumHeads&&s.dims[2]===t.kvNumHeads&&s.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if(w&&S){if(s.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(a.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=s.dims[2]}else if(w||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');h=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let b=0,I=!1,T=t.kvNumHeads?_*t.kvNumHeads:c;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(h!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=n.dims[2]}else{if(h!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=n.dims[1]*n.dims[3],I=!0}}let C=e.length>4?e[5]:void 0;if(C&&C.dims.length!==1&&C.dims[0]!==l)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:l,sequenceLength:d,pastSequenceLength:f,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:c,vHiddenSize:T,headSize:_,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:I,qkvFormat:v}},Dl=he({perm:[0,2,1,3]}),on=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute(Ue(i,Dl.perm),{inputs:[i],outputs:[-1]})[0]),i},Pl=(e,t,r,i)=>{let n=7,s=["type","type"],a=[e*t],o=e*t,l=[{type:12,data:o},{type:12,data:t},{type:12,data:e}],d=c=>{let h=D("seq_lens",r.dataType,r.dims),f=D("total_seq_lens",i.dataType,i.dims),y=Y("pos_ids",n,a),_=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${c.registerUniforms(_).declareVariables(h,f,y)}
  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${f.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${h.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${y.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${y.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:l}),getShaderSource:d}},Vh=(e,t)=>{var T;let r=Bl(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((T=e.inputs[1])==null?void 0:T.dims.length)===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,s=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,o=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,l=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,c=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=he({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,c*r.headSize,c*r.headSize]}),[f,y,_]=!n&&!s?e.compute(Ln([i],h),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,s],w,S;if(t.doRotary){let C=e.compute(Pl(r.batchSize,r.sequenceLength,l,d),{inputs:[l,d],outputs:[-1]})[0],E=e.inputs[7],z=e.inputs[8],$=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),O=[f,C,E,z],N=[-1];w=e.compute(ti(O,$),{inputs:O,outputs:N})[0],O.splice(0,1,y);let P=he({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(ti(O,P),{inputs:O,outputs:N})[0]}let v=mr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?w:f,void 0,0),b=on(e,t.doRotary?S:y,r),I=on(e,_,r);_r(e,v,b,I,void 0,void 0,a,o,void 0,r,l,d)}}),un,Ul,Ll,Hh,ay=q(()=>{te(),ie(),wt(),ne(),un=(e,t,r,i,n,s,a,o)=>{let l=ve(s),d=l===1?"f32":`vec${l}f`,c=l===1?"vec2f":`mat2x${l}f`,h=n*a,f=64;h===1&&(f=256);let y=[n,a,s/l],_=[n,a,2],w=["rank","type","type"],S=[];S.push(...Q(y,_));let v=b=>{let I=D("x",t.dataType,3,l),T=D("scale",r.dataType,r.dims),C=D("bias",i.dataType,i.dims),E=Y("output",1,3,2),z=[I,T,C,E];return`
  var<workgroup> workgroup_shared : array<${c}, ${f}>;
  const workgroup_size = ${f}u;
  ${b.declareVariables(...z)}
  ${b.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${I.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${c}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${_t("workgroup_shared[0][0]",l)} / f32(hight * ${l});
      let squared_sum_final = ${_t("workgroup_shared[0][1]",l)} / f32(hight * ${l});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${o}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${l};${o};${f}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:h},programUniforms:S}),getShaderSource:v},{inputs:[t,r,i],outputs:[-1]})[0]},Ul=(e,t,r)=>{let i=t[0].dims,n=i,s=2,a=i[0],o=i[1],l=R.sizeFromDimension(i,s),d=ve(l),c=R.size(n)/d,h=un(e,t[0],t[1],t[2],a,l,o,r.epsilon),f=[a,o,l/d],y=[a,o],_=["type","none"],w=S=>{let v=D("x",t[0].dataType,f.length,d),b=D("scale_shift",1,y.length,2),I=Y("output",t[0].dataType,f.length,d),T=[v,b,I];return`
  ${S.registerUniform("output_size","u32").declareVariables(...T)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${I.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${I.type.value}(scale_shift.x) + ${I.type.value}(scale_shift.y);
      ${I.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:[{type:12,data:c},...Q(f,y,f)]}),getShaderSource:w},{inputs:[t[0],h]})},Ll=(e,t,r)=>{let i=t[0].dims,n=i,s=i[0],a=i[i.length-1],o=R.sizeFromDimension(i,1)/a,l=ve(a),d=R.size(n)/l,c=[{type:12,data:o},{type:12,data:Math.floor(a/l)}],h=["type","type"],f=!1,y=[0,i.length-1];for(let v=0;v<i.length-2;v++)f=f||i[v+1]!==1,y.push(v+1);f=f&&i[i.length-1]!==1;let _=f?e.compute(Ue(e.inputs[0],y),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},(v,b)=>i[y[b]])),w=un(e,_,t[1],t[2],s,o,a,r.epsilon),S=v=>{let b=Ie(t[0].dataType),I=l===1?"vec2f":`mat${l}x2f`,T=z=>{let $=z===0?"x":"y",O=l===1?"f32":`vec${l}f`;switch(l){case 1:return`${b}(${O}(scale.${$}))`;case 2:return`vec2<${b}>(${O}(scale[0].${$}, scale[1].${$}))`;case 4:return`vec4<${b}>(${O}(scale[0].${$}, scale[1].${$}, scale[2].${$}, scale[3].${$}))`;default:throw new Error(`Not supported compoents ${l}`)}},C=D("input",t[0].dataType,t[0].dims,l),E=Y("output",t[0].dataType,n,l);return`
  @group(0) @binding(0) var<storage, read> input : array<${C.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${I}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${T(0)}, ${T(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${l}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:S},{inputs:[t[0],w]})},Hh=(e,t)=>{t.format==="NHWC"?Ll(e,e.inputs,t):Ul(e,e.inputs,t)}}),ql,Wl,Fh,sy=q(()=>{te(),ie(),ne(),ql=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Wl=(e,t,r)=>{let i=t.simplified,n=e[0].dims,s=e[1],a=!i&&e[2],o=n,l=R.normalizeAxis(t.axis,n.length),d=R.sizeToDimension(n,l),c=R.sizeFromDimension(n,l),h=R.size(s.dims),f=a?R.size(a.dims):0;if(h!==c||a&&f!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${f}`);let y=[];for(let C=0;C<n.length;++C)C<l?y.push(n[C]):y.push(1);let _=ve(c),w=["type","type"],S=[{type:12,data:d},{type:1,data:c},{type:12,data:Math.floor(c/_)},{type:1,data:t.epsilon}];a&&w.push("type");let v=r>1,b=r>2,I=C=>{let E=Ie(e[0].dataType),z=[D("x",e[0].dataType,e[0].dims,_),D("scale",s.dataType,s.dims,_)];a&&z.push(D("bias",a.dataType,a.dims,_)),z.push(Y("output",e[0].dataType,o,_)),v&&z.push(Y("mean_data_output",1,y)),b&&z.push(Y("inv_std_output",1,y));let $=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${C.registerUniforms($).declareVariables(...z)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${An("f32",_)};
    var mean_square_vector = ${An("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Vt(E,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${_t("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${_t("mean_square_vector",_)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Vt(E,_,"x[j + offset]")};
      let f32scale = ${Vt(E,_,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${a?`+ ${Vt(E,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:o,dataType:e[0].dataType}];return v&&T.push({dims:y,dataType:1}),b&&T.push({dims:y,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${r};${i}`,inputDependencies:w},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:I}},Fh=(e,t)=>{ql(e.inputs),e.compute(Wl(e.inputs,t,e.outputCount))}}),Gl,jh,oy=q(()=>{ie(),ua(),la(),Gl=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},jh=e=>{Gl(e.inputs);let t=Ft.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(oa(e.inputs,{activation:""},t));else{let n=t[t.length-2],s=R.size(e.inputs[0].dims.slice(0,-2)),a=R.size(e.inputs[1].dims.slice(0,-2));if(s!==1&&n===1&&a===1){let o=e.inputs[0].reshape([1,s,i]),l=e.inputs[1].reshape([1,i,r]),d=[1,s,r],c=[o,l];e.compute(ei(c,{activation:""},t,d),{inputs:c})}else e.compute(ei(e.inputs,{activation:""},t))}}}),Vl,Hl,Fl,Kh,Yh,uy=q(()=>{te(),ie(),xe(),ne(),Vl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),s=t.blockSize/8*t.bits,a=e[1];if(!R.areEqual(a.dims,[t.n,n,s]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let o=e[2].dims;if(R.size(o)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let l=e[3].dims,d=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(R.size(l)!==d)throw new Error("zeroPoints input size error.")}},Hl=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],s=t.k,a=t.n,o=r.slice(0,i-2),l=R.size(o),d=e[1].dims[2]/4,c=e[0].dataType,h=ve(t.k),f=ve(d),y=ve(a),_=o.concat([n,a]),w=n>1&&a/y%2===0?2:1,S=R.size(_)/y/w,v=64,b=[],I=[l,n,s/h],T=R.convertShape(e[1].dims).slice();T.splice(-1,1,d/f),b.push(...Q(I)),b.push(...Q(T)),b.push(...Q(e[2].dims)),e.length===4&&b.push(...Q(R.convertShape(e[3].dims)));let C=[l,n,a/y];b.push(...Q(C));let E=z=>{let $=I.length,O=D("a",e[0].dataType,$,h),N=D("b",12,T.length,f),P=D("scales",e[2].dataType,e[2].dims.length),V=[O,N,P],H=e.length===4?D("zero_points",12,e[3].dims.length):void 0;H&&V.push(H);let M=C.length,F=Y("output",e[0].dataType,M,y),K=Ie(e[0].dataType),Z=(()=>{switch(h){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${h}-component is not supported.`)}})(),le=()=>{let U=`
          // reuse a data
            var input_offset = ${O.indicesToOffset(`${O.type.indices}(batch, row, word_offset)`)};
            var a_data: ${Z};
            for (var j: u32 = 0; j < ${8/h}; j++) {
              a_data[j] = ${O.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let L=0;L<y*w;L++)U+=`
            b_value = ${f===1?`b${L}_data`:`b${L}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${Z}(${Array.from({length:4},(J,ee)=>`${K}(b_value_lower[${ee}]), ${K}(b_value_upper[${ee}])`).join(", ")});
            b_dequantized_values = ${h===1?`${Z}(${Array.from({length:8},(J,ee)=>`(b_quantized_values[${ee}] - ${H?`zero_point${L}`:"zero_point"}) * scale${L}`).join(", ")});`:`(b_quantized_values - ${Z}(${Array(8).fill(`${H?`zero_point${L}`:"zero_point"}`).join(",")})) * scale${L};`};
            workgroup_shared[local_id.x * ${w} + ${Math.floor(L/y)}]${y>1?`[${L%y}]`:""} += ${Array.from({length:8/h},(J,ee)=>`${h===1?`a_data[${ee}] * b_dequantized_values[${ee}]`:`dot(a_data[${ee}], b_dequantized_values[${ee}])`}`).join(" + ")};
          `;return U},W=()=>{let U=`
            var col_index = col * ${y};
            ${H?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${K}(8);`}
            `;for(let L=0;L<y*w;L++)U+=`
            let scale${L} = ${P.getByOffset("col_index * nBlocksPerCol + block")};
            ${H?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${H.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${L} = ${K}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return U},me=()=>{let U=`col_index = col * ${y};`;for(let L=0;L<y*w;L++)U+=`
            let b${L}_data = ${N.getByIndices(`${N.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return U+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Z};
            var b_dequantized_values: ${Z};`,U};return`
        var<workgroup> workgroup_shared: array<${F.type.value}, ${w*v}>;
        ${z.declareVariables(...V,F)}
        ${z.mainStart([v,1,1])}
          let output_indices = ${F.offsetToIndices(`(global_idx / ${v}) * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${W()}
            for (var word: u32 = 0; word < ${d}; word += ${f}) {
              ${me()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${le()}
                word_offset += ${8/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${w}) {
            var output_value: ${F.type.value} = ${F.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${w};
            }
            ${F.setByIndices(`${F.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${f};${y};${w};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:c}],dispatchGroup:{x:S},programUniforms:b}),getShaderSource:E}},Fl=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],s=t.k,a=t.n,o=r.slice(0,i-2),l=R.size(o),d=e[1].dims[2]/4,c=e[0].dataType,h=ve(t.k),f=ve(d),y=o.concat([n,a]),_=128,w=a%8===0?8:a%4===0?4:1,S=_/w,v=S*f*8,b=v/h,I=v/t.blockSize,T=R.size(y)/w,C=[],E=[l,n,s/h],z=R.convertShape(e[1].dims).slice();z.splice(-1,1,d/f),C.push(...Q(E)),C.push(...Q(z)),C.push(...Q(e[2].dims)),e.length===4&&C.push(...Q(R.convertShape(e[3].dims)));let $=[l,n,a];C.push(...Q($));let O=N=>{let P=E.length,V=D("a",e[0].dataType,P,h),H=D("b",12,z.length,f),M=D("scales",e[2].dataType,e[2].dims.length),F=[V,H,M],K=e.length===4?D("zero_points",12,e[3].dims.length):void 0;K&&F.push(K);let Z=$.length,le=Y("output",e[0].dataType,Z),W=Ie(e[0].dataType),me=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${W}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${W}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${W}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${W}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${V.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${le.type.value}, ${S}>, ${w}>;
        ${N.declareVariables(...F,le)}
        ${N.mainStart([S,w,1])}
          let output_indices = ${le.offsetToIndices(`workgroup_index * ${w}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${I} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${V.getByIndices(`${V.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${V.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${I} + local_id.x;
            ${K?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${K.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${W}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${W}(8);`}
            let scale = ${M.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${H.getByIndices(`${H.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${f}; i++) {
              ${me()}
              let b_value = ${f===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${W}>(${Array.from({length:4},(U,L)=>`${W}(b_value_lower[${L}]), ${W}(b_value_upper[${L}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${W}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(U,L)=>`${`dot(a_data${L}, b_dequantized_values[${L}])`}`).join(" + ")};
              word_offset += ${8/h};
            }
            workgroupBarrier();
          }

          if (local_idx < ${w}) {
            var output_value: ${le.type.value} = ${le.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${le.setByIndices(`${le.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${f};${S};${w}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:y,dataType:c}],dispatchGroup:{x:T},programUniforms:C}),getShaderSource:O}},Kh=(e,t)=>{Vl(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Fl(e.inputs,t)):e.compute(Hl(e.inputs,t))},Yh=e=>he(e)}),jl,Kl,Yl,Xl,Ql,Zl,Jl,ed,Xh,ly=q(()=>{te(),ie(),ne(),jl=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Kl=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${X("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${X("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${X("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Yl=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${X("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${X("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${X("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${X("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Xl=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${X("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${X("uniforms.x_shape",n,t)})) {
                  k = i32(${X("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${X("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Ql=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${X("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${X("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${X("uniforms.x_shape",n,t)})) {
                  k -= i32(${X("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${X("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},Zl=(e,t,r)=>{switch(r.mode){case 0:return Kl(e,t,r.pads.length);case 1:return Yl(e,t,r.pads.length);case 2:return Xl(e,t,r.pads.length);case 3:return Ql(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Jl=(e,t)=>{let r=R.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=R.size(r),s=[{type:12,data:n},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;t.mode===0&&s.push({type:a?e[2].dataType:1,data:t.value}),s.push(...Q(e[0].dims,r));let o=["rank"],l=d=>{let c=Y("output",e[0].dataType,r.length),h=D("x",e[0].dataType,i.length),f=h.type.value,y=Zl(c,i.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:a?f:"f32"}),`
            ${d.registerUniforms(_).declareVariables(h,c)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${y}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${a}`,inputDependencies:o},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(R.size(r)/64)},programUniforms:s}),getShaderSource:l}},ed=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,s=new Int32Array(2*n).fill(0);if(e.length>=4){let o=e[3].getBigInt64Array();for(let l=0;l<o.length;l++)s[Number(o[l])]=Number(r[l]),s[Number(o[l])+n]=Number(r[l+o.length])}else r.forEach((o,l)=>s[Number(l)]=Number(o));let a=[];return s.forEach(o=>a.push(o)),{mode:t.mode,value:i,pads:a}}else return t},Xh=(e,t)=>{jl(e.inputs);let r=ed(e.inputs,t);e.compute(Jl(e.inputs,r),{inputs:[0]})}}),ur,ln,dn,pn,cn,td,rd,hn,fn,Qh,Zh,mn,Jh,ef,gn,tf,rf,nf,af,dy=q(()=>{qe(),te(),ie(),ne(),ur=e=>{if($e.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},ln=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let s=Object.hasOwnProperty.call(t,"dilations"),a=t.kernelShape.slice(),o=t.strides.slice(),l=s?t.dilations.slice():[],d=t.pads.slice();Zr.adjustPoolAttributes(r,n,a,o,l,d);let c=Zr.computePoolOutputShape(r,n,o,l,a,d,t.autoPad),h=Object.assign({},t);s?Object.assign(h,{kernelShape:a,strides:o,pads:d,dilations:l,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:a,strides:o,pads:d,cacheKey:t.cacheKey});let f=c.slice();return f.push(f.splice(1,1)[0]),[h,i?f:c]},dn=(e,t)=>{let r=t.format==="NHWC",i=R.size(e),n=R.size(t.kernelShape),s=[{type:12,data:i},{type:12,data:n}],a=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let o=t.kernelShape[t.kernelShape.length-1],l=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],h=!!(d+c);s.push({type:12,data:o},{type:12,data:l},{type:12,data:d},{type:12,data:c}),a.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(t.kernelShape.length===2){let y=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],w=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];f=!!(w+S),s.push({type:12,data:y},{type:12,data:_},{type:12,data:w},{type:12,data:S}),a.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[s,a,!0,h,f]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let o=R.computeStrides(t.kernelShape);s.push({type:12,data:o},{type:12,data:t.pads},{type:12,data:t.strides}),a.push({name:"kernelStrides",type:"u32",length:o.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let l=t.pads.reduce((d,c)=>d+c);return[s,a,!!l,!1,!1]}},pn=(e,t,r,i,n,s,a,o,l,d,c,h)=>{let f=n.format==="NHWC",y=t.type.value,_=Y("output",t.type.tensor,i);if(n.kernelShape.length<=2){let w="",S="",v="",b=r-(f?2:1);if(c?w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`:w=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${s}
                }`,n.kernelShape.length===2){let I=r-(f?3:2);h?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${I}] < 0 || xIndices[${I}] >= uniforms.x_shape[${I}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${y}(${o});
              var pad = 0;
              ${S}
              ${w}
              ${v}
              ${a}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let w=n.kernelShape.length,S=n.pads.length,v="";return d?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${s}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${s}
            `,`
            ${e.registerUniforms(l).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${w}>;

              var value = ${y}(${o});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${w-1}u; j++) {
                  offsets[j] = offset / ${X("uniforms.kernelStrides","j",w)};
                  offset -= offsets[j] * ${X("uniforms.kernelStrides","j",w)};
                }
                offsets[${w-1}] = offset;

                isPad = false;
                for (var j = ${r-w}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${X("uniforms.strides",`j - ${r-w}u`,w)}
                    + offsets[j - ${r-w}u] - ${X("uniforms.pads","j - 2u",S)};
                  ${v}
              }
              ${a}

              output[global_idx] = value;
            }`}},cn=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,td=e=>`${cn(e)};${e.countIncludePad}`,rd=e=>`${cn(e)};${e.storageOrder};${e.dilations}`,hn=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),fn=(e,t,r,i)=>{let[n,s]=ln(t,i,r),a=D("x",t.dataType,t.dims.length),o=a.type.value,l="value += x_val;",d="";n.countIncludePad?d+=`value /= ${o}(uniforms.kernelSize);`:d+=`value /= ${o}(i32(uniforms.kernelSize) - pad);`;let[c,h,f,y,_]=dn(s,n);c.push(...Q(t.dims,s));let w=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${f};${y};${_}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(s)/64)},programUniforms:c}),getShaderSource:S=>pn(S,a,t.dims.length,s.length,n,l,d,0,h,f,y,_)}},Qh=e=>{let t=e.count_include_pad!==0,r=hn(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:td(i)}},Zh=(e,t)=>{ur(e.inputs),e.compute(fn("AveragePool",e.inputs[0],!1,t))},mn={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Jh=e=>{let t=e.format;return{format:t,...mn,cacheKey:t}},ef=(e,t)=>{ur(e.inputs),e.compute(fn("GlobalAveragePool",e.inputs[0],!0,t))},gn=(e,t,r,i)=>{let[n,s]=ln(t,i,r),a=`
      value = max(x_val, value);
    `,o="",l=D("x",t.dataType,t.dims.length),d=["rank"],[c,h,f,y,_]=dn(s,n);return c.push(...Q(t.dims,s)),{name:e,shaderCache:{hint:`${i.cacheKey};${f};${y};${_}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(R.size(s)/64)},programUniforms:c}),getShaderSource:w=>pn(w,l,t.dims.length,s.length,n,a,o,t.dataType===10?-65504:-1e5,h,f,y,_)}},tf=(e,t)=>{ur(e.inputs),e.compute(gn("MaxPool",e.inputs[0],!1,t))},rf=e=>{let t=e.storage_order,r=e.dilations,i=hn(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:rd(n)}},nf=e=>{let t=e.format;return{format:t,...mn,cacheKey:t}},af=(e,t)=>{ur(e.inputs),e.compute(gn("GlobalMaxPool",e.inputs[0],!0,t))}}),id,nd,sf,of,py=q(()=>{te(),ie(),xe(),ne(),id=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,s)=>s===t.axis||n===e[0].dims[s]).reduce((n,s)=>n&&s,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},nd=(e,t)=>{let r=R.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,s=e[0].dims,a=e[1].dataType,o=R.size(s),l=i===3||i===2,d=l?[Math.ceil(R.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,h=e.length>2?e[2]:void 0,f=h?l?[Math.ceil(R.size(h.dims)/4)]:h.dims:void 0,y=c.length===0||c.length===1&&c[0]===1,_=y===!1&&c.length===1,w=ve(o),S=y&&(!l||w===4),v=S?w:1,b=S&&!l?w:1,I=D("input",l?12:i,d.length,b),T=D("scale",a,c.length),C=h?D("zero_point",l?12:i,f.length):void 0,E=Y("output",a,s.length,v),z=[I,T];C&&z.push(C);let $=[d,c];h&&$.push(f);let O=[{type:12,data:o/v},{type:12,data:r},{type:12,data:t.blockSize},...Q(...$,s)],N=P=>{let V=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${P.registerUniforms(V).declareVariables(...z,E)}
      ${P.mainStart()}
          ${P.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${E.offsetToIndices("global_idx")};

          // Set input x
          ${l?`
            let input = ${I.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${I.getByOffset("global_idx")};`};

          // Set scale input
          ${y?`let scale_value= ${T.getByOffset("0")}`:_?`
            let scale_index = ${E.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${T.getByOffset("scale_index")};`:`
            var scale_indices: ${T.type.indices} = output_indices;
            let index = ${T.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${T.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${T.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${C?y?l?`
                let zero_point_input = ${C.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${C.getByOffset("0")}`:_?l?`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${C.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${C.getByOffset("zero_point_index")};`:l?`
                let zero_point_offset = ${T.indicesToOffset("scale_indices")};
                let zero_point_input = ${C.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${C.getByIndices("scale_indices")};`:`let zero_point_value = ${l?n?"i32":"u32":I.type.value}(0);`};
      // Compute and write output
      ${E.setByOffset("global_idx",`${E.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:C?["rank","rank","rank"]:["rank","rank"]},getShaderSource:N,getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(o/v/64),y:1,z:1},programUniforms:O})}},sf=(e,t)=>{id(e.inputs,t),e.compute(nd(e.inputs,t))},of=e=>he({axis:e.axis,blockSize:e.blockSize})}),ad,sd,uf,cy=q(()=>{qe(),te(),ne(),ad=(e,t,r)=>{let i=e===t,n=e<t&&r<0,s=e>t&&r>0;if(i||n||s)throw new Error("Range these inputs' contents are invalid.")},sd=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),s=[n],a=n,o=[{type:12,data:a},{type:i,data:e},{type:i,data:r},...Q(s)],l=d=>{let c=Y("output",i,s.length),h=c.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${d.registerUniforms(f).declareVariables(c)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:l,getRunData:()=>({outputs:[{dims:s,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o})}},uf=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),$e.webgpu.validateInputContent&&ad(t,r,i),e.compute(sd(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),od,ud,lf,df,hy=q(()=>{te(),ie(),xe(),ne(),od=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,s=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${n}bitcast<${i}>(oldValue) + (${r})${s}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${s}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${s}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${s}`;default:throw new Error(`Reduction ${e} is not supported.`)}},ud=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,s=1,a=Math.ceil(R.sizeToDimension(i,i.length-1)/s),o=i[i.length-1],l=R.sizeFromDimension(r,o),d=[{type:12,data:a},{type:12,data:o},{type:12,data:l},...Q(e[1].dims,e[2].dims,n)],c=h=>{let f=D("indices",e[1].dataType,e[1].dims.length),y=D("updates",e[2].dataType,e[2].dims.length,s),_=t.reduction!=="none"&&t.reduction!==""?Dp("output",e[0].dataType,n.length):Y("output",e[0].dataType,n.length,s);return`
      ${h.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(f,y,_)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${od(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:c}},lf=e=>he({reduction:e.reduction}),df=(e,t)=>{e.compute(ud(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),ld,dd,pd,yn,cd,hd,fd,md,gd,yd,_d,wd,_n,bd,$d,vd,xd,Sd,pf,cf,fy=q(()=>{te(),ie(),xe(),ne(),ld=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},dd=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,s)=>i[n]=e[s]),i},pd=(e,t,r,i,n,s)=>{let[a,o,l]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(a>0&&e.length>a&&e[a].dims.length>0)e[a].getFloat32Array().forEach(c=>s.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(o>0&&e.length>o&&e[o].dims.length===1&&e[o].dims[0]>0){if(e[o].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");ld(i,t),t.axes.length>0&&dd(i,t.axes,d).forEach((c,h)=>i[h]=c)}if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0&&(e[l].getBigInt64Array().forEach(c=>n.push(Number(c))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},yn=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,cd=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${yn("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${yn("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",hd=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",fd=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((s,a)=>{i[s]=n[a],i[a+r]=n[t.length+a]}),i):n},md=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(s=>n.push(s)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((s,a)=>n[s]=r[a])}else r.forEach(s=>n.push(s));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((s,a)=>Math.round(s*t[a]))}return n},gd=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(s=>t[s]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(s=>t[s]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(s=>t[s]=i),r.axes.forEach(s=>n[s]=Math.round(e[s]*t[s]))):(t.fill(i,0,t.length),n.forEach((s,a)=>n[a]=Math.round(s*t[a]))),n},yd=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${X("uniforms.scales","i",i)};
        var roi_low = ${X("uniforms.roi","i",n)};
        var roi_hi = ${X("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${X("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${X("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,_d=(e,t,r,i,n,s,a)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${X("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${X("uniforms.roi","i",s)};
          var roi_hi = ${X("uniforms.roi",`i + ${r.length}`,s)};
          var input_shape_i = ${X("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${X("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${a} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,wd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${X("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,_n=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",bd=(e,t,r,i,n)=>{let[s,a,o,l]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(row, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(col, ${r[o]} - 1))`)};
      ${_n(e,l,s,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${a}];
      var col:${d} = originalIndices[${o}];
      ${i?`if (row < 0 || row > (${r[a]} - 1) || col < 0 || col > (${r[o]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[a]} - 1));
      col = max(0, min(col, ${r[o]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${l}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${s}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},$d=(e,t,r,i,n,s,a,o,l,d)=>{let c=r.length===2,[h,f]=c?[0,1]:[2,3],y=e.type.value,_=w=>{let S=w===h?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${y} {
        var output_index = ${t.indicesGet("output_indices",w)};
        var originalIdx: ${y} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[w]},
        ${i[w]}, ${r[w]}, ${s[w]}, ${s[w]} + ${r.length});
        var fractOriginalIdx: ${y} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${o} && (originalIdx < 0 || originalIdx > (${r[w]} - 1))) {
          return ${l};
        }
        var data: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${y} = originalIdx + ${y}(i);
          if (${S} < 0 || ${S} >= ${r[w]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:o?`return ${l};`:`${S} = max(0, min(${S}, ${r[w]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",w,`u32(${S})`)};
          data[i + 1] = ${w===h?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${_(h)};
    ${_(f)};
  fn getCubicInterpolationCoefs(s: ${y}) -> array<${y}, 4> {
    var absS = abs(s);
    var coeffs: array<${y}, 4> = array<${y}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${y} = 1.0 - absS;
    var twoMinusAbsS: ${y} = 2.0 - absS;
    var onePlusAbsS: ${y} = 1.0 + absS;
    coeffs[0] = ((${a} * onePlusAbsS - 5 * ${a}) * onePlusAbsS + 8 * ${a}) * onePlusAbsS - 4 * ${a};
    coeffs[1] = ((${a} + 2) * absS - (${a} + 3)) * absS * absS + 1;
    coeffs[2] = ((${a} + 2) * oneMinusAbsS - (${a} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${a} * twoMinusAbsS - 5 * ${a}) * twoMinusAbsS + 8 * ${a}) * twoMinusAbsS - 4 * ${a};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${y}, 4>, coefs: array<${y}, 4>) -> ${y} {
    var coefsSum: ${y} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${y} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},vd=(e,t,r,i,n)=>{let[s,a,o,l,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",a,`max(0, min(depth, ${r[a]} - 1))`)};
      ${e.indicesSet("input_indices",o,`max(0, min(height, ${r[o]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(width, ${r[l]} - 1))`)};
      ${_n(e,d,s,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${a}];
      var height:${c} = originalIndices[${o}];
      var width:${c} = originalIndices[${l}];
      ${i?`if (depth < 0 || depth > (${r[a]} - 1) || height < 0 || height > (${r[o]} - 1) || width < 0 || (width > ${r[l]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[a]} - 1));
      height = max(0, min(height, ${r[o]} - 1));
      width = max(0, min(width, ${r[l]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${s}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},xd=(e,t,r,i,n,s)=>{let a=e.dims,o=fd(s,t.axes,a.length),l=md(a,i,n,t.axes),d=i.slice();i.length===0&&(d=a.map((b,I)=>b===0?1:l[I]/b),t.keepAspectRatioPolicy!=="stretch"&&(l=gd(a,d,t)));let c=Y("output",e.dataType,l.length),h=D("input",e.dataType,a.length),f=R.size(l),y=a.length===l.length&&a.every((b,I)=>b===l[I]),_=t.coordinateTransformMode==="tf_crop_and_resize",w=t.extrapolationValue,S=h.type.value,v=b=>`
      ${y?"":`
      ${cd(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${wd(h,a)};
              ${hd(t.nearestMode,r,S)};
              ${_d(h,c,a,l,d.length,o.length,_)};
              `;case"linear":return`
              ${yd(c,a,l,d.length,o.length)};
              ${(()=>{if(a.length===2||a.length===4)return`${bd(h,c,a,_,w)}`;if(a.length===3||a.length===5)return`${vd(h,c,a,_,w)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(a.length===2||a.length===4)return`${$d(h,c,a,l,d,o,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",o.length).declareVariables(h,c)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${y?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${a.length===2||a.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${o.length>0?o:""}|${y}|${t.mode==="nearest"?a.length:a}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:l,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:d},{type:1,data:o},...Q(a,l)]})}},Sd=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},pf=(e,t)=>{let r=[],i=[],n=[],s=Sd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");pd(e.inputs,t,s,r,i,n),e.compute(xd(e.inputs[0],t,s,r,i,n),{inputs:[0]})},cf=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,s=e.excludeOutside!==0,a=e.extrapolationValue,o=e.keepAspectRatioPolicy,l=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return he({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:s,extrapolationValue:a,keepAspectRatioPolicy:o,mode:l,nearestMode:d})}}),Id,Td,hf,my=q(()=>{te(),ie(),ne(),Id=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],s=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==s)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let a=e[3];if(a.dims.length!==1)throw new Error("Beta must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let a=e[4];if(a.dims.length!==1)throw new Error("Bias must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},Td=(e,t,r,i)=>{let n=t.simplified,s=e[0].dims,a=R.size(s),o=s,l=a,d=s.slice(-1)[0],c=i?s.slice(0,-1).concat(1):[],h=!n&&e.length>3,f=e.length>4,y=i&&r>1,_=i&&r>2,w=r>3,S=64,v=ve(d),b=[{type:12,data:l},{type:12,data:v},{type:12,data:d},{type:1,data:t.epsilon}],I=C=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[D("x",e[0].dataType,e[0].dims,v),D("skip",e[1].dataType,e[1].dims,v),D("gamma",e[2].dataType,e[2].dims,v)];h&&z.push(D("beta",e[3].dataType,e[3].dims,v)),f&&z.push(D("bias",e[4].dataType,e[4].dims,v)),z.push(Y("output",e[0].dataType,o,v)),y&&z.push(Y("mean_output",1,c)),_&&z.push(Y("inv_std_output",1,c)),w&&z.push(Y("input_skip_bias_sum",e[0].dataType,o,v));let $=Ie(e[0].dataType),O=Ie(1,v);return`

      ${C.registerUniforms(E).declareVariables(...z)}
      var<workgroup> sum_shared : array<${O}, ${S}>;
      var<workgroup> sum_squared_shared : array<${O}, ${S}>;

      ${C.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?"bias[offset1d + i]":$+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${w?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Vt($,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${_t("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${_t("square_sum",v)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${y?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${$}(mean)`}) *
            ${$}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:o,dataType:e[0].dataType}];return r>1&&T.push({dims:c,dataType:1}),r>2&&T.push({dims:c,dataType:1}),r>3&&T.push({dims:s,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${y};${_};${w}`,inputDependencies:e.map((C,E)=>"type")},getShaderSource:I,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(l/d)},programUniforms:b})}},hf=(e,t)=>{Id(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Td(e.inputs,t,e.outputCount,!1),{outputs:r})}}),kd,lr,Ed,wn,Cd,zd,ff,mf,gy=q(()=>{te(),ie(),xe(),ne(),kd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},lr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Ed=(e,t)=>{if(e.length>1){let r=lr(e,1),i=lr(e,2),n=lr(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),he({starts:r,ends:i,axes:n})}else return t},wn=(e,t,r,i,n)=>{let s=e;return e<0&&(s+=r[i[t]]),n[t]<0?Math.max(0,Math.min(s,r[i[t]]-1)):Math.max(0,Math.min(s,r[i[t]]))},Cd=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${X("uniforms.input_shape","i",r.length)};
            let steps_i = ${X("uniforms.steps","i",r.length)};
            let signs_i = ${X("uniforms.signs","i",r.length)};
            let starts_i = ${X("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,zd=(e,t)=>{let r=e[0].dims,i=R.size(r),n=t.axes.length>0?R.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],s=lr(e,4);s.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),s.length===0&&(s=Array(n.length).fill(1));let a=t.starts.map((v,b)=>wn(v,b,r,n,s)),o=t.ends.map((v,b)=>wn(v,b,r,n,s));if(n.length!==a.length||n.length!==o.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let v=0;v<r.length;++v)n.includes(v)||(a.splice(v,0,0),o.splice(v,0,r[v]),s.splice(v,0,1));let l=s.map(v=>Math.sign(v));s.forEach((v,b,I)=>{if(v<0){let T=(o[b]-a[b])/v,C=a[b],E=C+T*s[b];a[b]=E,o[b]=C,I[b]=-v}});let d=r.slice(0);n.forEach((v,b)=>{d[v]=Math.ceil((o[v]-a[v])/s[v])});let c={dims:d,dataType:e[0].dataType},h=Y("output",e[0].dataType,d.length),f=D("input",e[0].dataType,e[0].dims.length),y=R.size(d),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:a.length},{name:"signs",type:"i32",length:l.length},{name:"steps",type:"u32",length:s.length}],w=[{type:12,data:y},{type:12,data:a},{type:6,data:l},{type:12,data:s},...Q(e[0].dims,d)],S=v=>`
      ${v.registerUniforms(_).declareVariables(f,h)}
        ${Cd(f,h,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${l.length}_${a.length}_${s.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:w})}},ff=(e,t)=>{kd(e.inputs,t);let r=Ed(e.inputs,t);e.compute(zd(e.inputs,r),{inputs:[0]})},mf=e=>{let t=e.starts,r=e.ends,i=e.axes;return he({starts:t,ends:r,axes:i})}}),Ad,Od,gf,yf,yy=q(()=>{te(),ie(),xe(),wt(),ne(),Ad=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Od=(e,t)=>{let r=e.inputs[0],i=r.dims,n=R.size(i),s=i.length,a=R.normalizeAxis(t.axis,s),o=a<i.length-1,l,d=[];o?(d=Array.from({length:s},(z,$)=>$),d[a]=s-1,d[s-1]=a,l=e.compute(Ue(r,d),{inputs:[r],outputs:[-1]})[0]):l=r;let c=l.dims,h=c[s-1],f=n/h,y=ve(h),_=h/y,w=64;f===1&&(w=256);let S=(z,$)=>$===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:$===2?`max(${z}.x, ${z}.y)`:$===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,v=D("x",l.dataType,l.dims,y),b=Y("result",l.dataType,l.dims,y),I=v.type.value,T=Ie(l.dataType)==="f32"?`var threadMax = ${I}(-3.4028234663852886e+38f);`:`var threadMax = ${I}(-65504.0h);`,C=z=>`
      var<workgroup> rowMaxShared : ${I};
      var<workgroup> rowSumShared : ${I};
      var<workgroup> threadShared : array<${I}, ${w}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${I} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${I}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${z.registerUniform("packedCols","i32").declareVariables(v,b)}
      ${z.mainStart(w)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${w};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${T}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${I}(${S("threadShared[0]",y)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${I}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${I}(${_t("threadShared[0]",y)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${I}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,E=e.compute({name:"Softmax",shaderCache:{hint:`${y};${w}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:c,dataType:l.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:_}]}),getShaderSource:C},{inputs:[l],outputs:[o?-1:0]})[0];o&&e.compute(Ue(E,d),{inputs:[E]})},gf=(e,t)=>{Ad(e.inputs),Od(e,t)},yf=e=>he({axis:e.axis})}),bn,Md,Rd,Nd,_f,_y=q(()=>{te(),ie(),ne(),bn=e=>Array.from(e.getBigInt64Array(),Number),Md=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(bn(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Rd=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Nd=(e,t)=>{let r=e[0].dims,i=t??bn(e[1]),n=Rd(r,i),s=R.size(n),a=e[0].dataType,o=D("input",a,r.length),l=Y("output",a,n.length),d=c=>`
      const inputShape = ${o.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(o,l)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${l.offsetToIndices("global_idx")};
      var input_indices: ${o.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${o.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${l.indicesGet("output_indices","i")}  % input_dim_i;

        ${o.indicesSet("input_indices","i","input_dim_value")}
      }
      ${l.setByOffset("global_idx",o.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:[{type:12,data:s},...Q(e[0].dims,n)]}),getShaderSource:d}},_f=e=>{Md(e.inputs),e.compute(Nd(e.inputs),{inputs:[0]})}}),Bd,Dd,wf,wy=q(()=>{te(),ie(),ne(),Bd=(e,t,r,i,n)=>{let s=Y("output_data",n,r.length,4),a=D("a_data",t[1].dataType,t[1].dims.length,4),o=D("b_data",t[2].dataType,t[2].dims.length,4),l=D("c_data",t[0].dataType,t[0].dims.length,4),d,c=(h,f,y)=>`select(${f}, ${h}, ${y})`;if(!i)d=s.setByOffset("global_idx",c(a.getByOffset("global_idx"),o.getByOffset("global_idx"),l.getByOffset("global_idx")));else{let h=(f,y,_="")=>{let w=`a_data[index_a${y}][component_a${y}]`,S=`b_data[index_b${y}][component_b${y}]`,v=`bool(c_data[index_c${y}] & (0xffu << (component_c${y} * 8)))`;return`
            let output_indices${y} = ${s.offsetToIndices(`global_idx * 4u + ${y}u`)};
            let offset_a${y} = ${a.broadcastedIndicesToOffset(`output_indices${y}`,s)};
            let offset_b${y} = ${o.broadcastedIndicesToOffset(`output_indices${y}`,s)};
            let offset_c${y} = ${l.broadcastedIndicesToOffset(`output_indices${y}`,s)};
            let index_a${y} = offset_a${y} / 4u;
            let index_b${y} = offset_b${y} / 4u;
            let index_c${y} = offset_c${y} / 4u;
            let component_a${y} = offset_a${y} % 4u;
            let component_b${y} = offset_b${y} % 4u;
            let component_c${y} = offset_c${y} % 4u;
            ${f}[${y}] = ${_}(${c(w,S,v)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(l,a,o,s)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Dd=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,s=!(R.areEqual(t,r)&&R.areEqual(r,i)),a=t,o=R.size(t);if(s){let d=Ft.calcShape(Ft.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");a=d,o=R.size(a)}let l=Math.ceil(o/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Bd(d,e,a,s,n),getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:Math.ceil(o/64/4)},programUniforms:[{type:12,data:l},...Q(i,t,r,a)]})}},wf=e=>{e.compute(Dd(e.inputs))}}),bf,by=q(()=>{R0(),ia(),N0(),B0(),D0(),P0(),U0(),V0(),F0(),j0(),K0(),Y0(),X0(),Q0(),Z0(),J0(),ey(),ty(),ry(),iy(),ny(),ay(),sy(),oy(),uy(),Ph(),ly(),dy(),py(),cy(),hy(),ra(),fy(),Gh(),my(),gy(),yy(),qh(),_y(),wt(),na(),wy(),bf=new Map([["Abs",[cc]],["Acos",[hc]],["Acosh",[fc]],["Add",[Kc]],["ArgMax",[uc,Mn]],["ArgMin",[oc,Mn]],["Asin",[mc]],["Asinh",[gc]],["Atan",[yc]],["Atanh",[_c]],["Attention",[lc]],["AveragePool",[Zh,Qh]],["BatchNormalization",[dc]],["BiasAdd",[pc]],["BiasSplitGelu",[jc]],["Cast",[bc,wc]],["Ceil",[vc]],["Clip",[$c]],["Concat",[nh,ah]],["Conv",[Un,Pn]],["ConvTranspose",[mh,fh]],["Cos",[xc]],["Cosh",[Sc]],["CumSum",[gh,yh]],["DepthToSpace",[_h,wh]],["DequantizeLinear",[sf,of]],["Div",[Yc]],["Einsum",[bh,$h]],["Elu",[Ic,fr]],["Equal",[Xc]],["Erf",[Tc]],["Exp",[kc]],["Expand",[vh]],["FastGelu",[xh]],["Floor",[Ec]],["FusedConv",[Un,Pn]],["Gather",[Ih,Sh]],["GatherElements",[Ah,zh]],["GatherBlockQuantized",[Eh,Ch]],["GatherND",[Th,kh]],["Gelu",[Cc]],["Gemm",[Mh,Oh]],["GlobalAveragePool",[ef,Jh]],["GlobalMaxPool",[af,nf]],["Greater",[eh]],["GreaterOrEqual",[rh]],["GridSample",[Rh,Nh]],["GroupQueryAttention",[Vh]],["HardSigmoid",[Dc,Bc]],["InstanceNormalization",[Hh]],["LayerNormalization",[Fh]],["LeakyRelu",[zc,fr]],["Less",[th]],["LessOrEqual",[ih]],["Log",[Hc]],["MatMul",[jh]],["MatMulNBits",[Kh,Yh]],["MaxPool",[tf,rf]],["Mul",[Qc]],["MultiHeadAttention",[Dh,Bh]],["Neg",[Oc]],["Not",[Ac]],["Pad",[Xh]],["Pow",[Zc]],["QuickGelu",[Fc,fr]],["Range",[uf]],["Reciprocal",[Mc]],["ReduceMin",[rc]],["ReduceMean",[Qp]],["ReduceMax",[tc]],["ReduceSum",[nc]],["ReduceProd",[ic]],["ReduceL1",[Zp]],["ReduceL2",[Jp]],["ReduceLogSum",[sc]],["ReduceLogSumExp",[ec]],["ReduceSumSquare",[ac]],["Relu",[Rc]],["Resize",[pf,cf]],["RotaryEmbedding",[Wh]],["ScatterND",[df,lf]],["Sigmoid",[Nc]],["Sin",[Pc]],["Sinh",[Uc]],["Slice",[ff,mf]],["SkipLayerNormalization",[hf]],["Split",[Uh,Lh]],["Sqrt",[Lc]],["Softmax",[gf,yf]],["Sub",[Jc]],["Tan",[qc]],["Tanh",[Wc]],["ThresholdedRelu",[Vc,fr]],["Tile",[_f]],["Transpose",[Up,Lp]],["Where",[wf]]])}),$f,$y=q(()=>{qe(),st(),ne(),$f=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){et(e.programInfo.name);let s=this.backend.device,a=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let o=[];for(let d of t)o.push({binding:o.length,resource:{buffer:d.buffer}});for(let d of r)o.push({binding:o.length,resource:{buffer:d.buffer}});n&&o.push({binding:o.length,resource:n});let l=s.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:o,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:l,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}a.setPipeline(e.computePipeline),a.setBindGroup(0,l),a.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ye(e.programInfo.name)}dispose(){}build(e,t){et(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let n=Pp(t,this.backend.device.limits),s=e.getShaderSource(n),a=`${i.join(`
`)}
${n.additionalImplementations}
${s}`,o=r.createShaderModule({code:a,label:e.name});de("verbose",()=>`[WebGPU] ${e.name} shader code: ${a}`);let l=r.createComputePipeline({compute:{module:o,entryPoint:"main"},layout:"auto",label:e.name});return Ye(e.name),{programInfo:e,computePipeline:l,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let s=t*r*i,a=Math.ceil(Math.sqrt(s));if(a>n){if(a=Math.ceil(Math.cbrt(s)),a>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[a,a,a]}else return[a,a,1]}}}),vf={};Kt(vf,{WebGpuBackend:()=>xf});var Pd,Ud,Ld,xf,vy=q(()=>{qe(),te(),st(),Mp(),O0(),by(),$y(),Pd=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let s=e[i].dims.length;r.push(`${n};${s}`);break}case"dims":{let s=e[i].dims.join(",");r.push(`${n};${s}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Ud=(e,t,r)=>{var n,s;let i=e.name;return(n=e.shaderCache)!=null&&n.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${Pd(t,((s=e.shaderCache)==null?void 0:s.inputDependencies)??new Array(t.length).fill("dims"))}`,i},Ld=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},xf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=s=>t.features.has(s)&&r.push(s)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i),this.adapterInfo=new Ld(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Bp(this),this.programManager=new $f(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Zn(e.logLevel,!!e.debug),this.device.onuncapturederror=s=>{s.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${s.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;et(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var i;let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let n=0;n<t.length/2;n++){let s=r[n],a=s.kernelId,o=this.kernels.get(a),l=o.kernelType,d=o.kernelName,c=s.programName,h=s.inputTensorViews,f=s.outputTensorViews,y=t[n*2],_=t[n*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=y);let w=Number(y-this.queryTimeBase),S=Number(_-this.queryTimeBase);if(!Number.isSafeInteger(w)||!Number.isSafeInteger(S))throw new RangeError("incorrect timestamp range");if((i=this.env.webgpu.profiling)!=null&&i.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:h.map(v=>({dims:v.dims,dataType:nt(v.dataType)})),outputsMetadata:f.map(v=>({dims:v.dims,dataType:nt(v.dataType)})),kernelId:a,kernelType:l,kernelName:d,programName:c,startTime:w,endTime:S});else{let v="";h.forEach((I,T)=>{v+=`input[${T}]: [${I.dims}] | ${nt(I.dataType)}, `});let b="";f.forEach((I,T)=>{b+=`output[${T}]: [${I.dims}] | ${nt(I.dataType)}, `}),console.log(`[profiling] kernel "${a}|${l}|${d}|${c}" ${v}${b}start time: ${w} ns, execution time: ${S-w} ns`)}Yr("GPU",`${c}::${y}::${_}`)}e.unmap(),this.pendingQueries.delete(e)}),Ye()}run(e,t,r,i,n,s){et(e.name);let a=[];for(let b=0;b<t.length;++b){let I=t[b].data;if(I===0)continue;let T=this.gpuDataManager.get(I);if(!T)throw new Error(`no GPU data for input: ${I}`);a.push(T)}let{outputs:o,dispatchGroup:l,programUniforms:d}=e.getRunData(t),c=r.length===0?o.map((b,I)=>I):r;if(c.length!==o.length)throw new Error(`Output size ${c.length} must be equal to ${o.length}.`);let h=[],f=[];for(let b=0;b<o.length;++b){if(!Number.isInteger(c[b])||c[b]<-3||c[b]>=s)throw new Error(`Invalid output index: ${c[b]}`);if(c[b]===-3)continue;let I=c[b]===-1,T=c[b]===-2,C=I||T?n(o[b].dataType,o[b].dims):i(c[b],o[b].dataType,o[b].dims);if(h.push(C),C.data===0)continue;let E=this.gpuDataManager.get(C.data);if(!E)throw new Error(`no GPU data for output: ${C.data}`);if(I&&this.temporaryData.push(E),T){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(E)}f.push(E)}if(a.length!==t.length||f.length!==h.length){if(f.length===0)return Ye(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let y;if(d){let b=0,I=[];d.forEach(z=>{let $=typeof z.data=="number"?[z.data]:z.data;if($.length===0)return;let O=z.type===10?2:4,N,P;z.type===10?(P=$.length>4?16:$.length>2?8:$.length*O,N=$.length>4?16:O*$.length):(P=$.length<=2?$.length*O:16,N=16),b=Math.ceil(b/P)*P,I.push(b);let V=z.type===10?8:4;b+=$.length>4?Math.ceil($.length/V)*N:$.length*O});let T=16;b=Math.ceil(b/T)*T;let C=new ArrayBuffer(b);d.forEach((z,$)=>{let O=I[$],N=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(C,O,N.length).set(N);else if(z.type===12)new Uint32Array(C,O,N.length).set(N);else if(z.type===10)new Uint16Array(C,O,N.length).set(N);else if(z.type===1)new Float32Array(C,O,N.length).set(N);else throw new Error(`Unsupported uniform type: ${nt(z.type)}`)});let E=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,C,0,b),this.gpuDataManager.release(E.id),y={offset:0,size:b,buffer:E.buffer}}let _=this.programManager.normalizeDispatchGroupSize(l),w=_[1]===1&&_[2]===1,S=Ud(e,t,w),v=this.programManager.getArtifact(S);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact(S,v),de("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&v.uniformVariablesInfo){if(d.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${d.length} in program "${v.programInfo.name}".`);for(let b=0;b<d.length;b++){let I=d[b],T=I.type,C=typeof I.data=="number"?1:I.data.length,[E,z]=v.uniformVariablesInfo[b];if(T!==E||C!==z)throw new Error(`Uniform variable ${b} mismatch: expect type ${E} with size ${z}, got type ${T} with size ${C} in program "${v.programInfo.name}".`)}}if(de("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(v,a,f,_,y),Ye(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=bf.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let s={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,s)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,s=i.kernelName,a=i.kernelEntry,o=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${s}" is not allowed to be called recursively`);this.currentKernelId=e,o[0]&&(o[1]=o[0](o[1]),o[0]=void 0),de("info",()=>`[WebGPU] Start to run kernel "[${n}] ${s}"...`);let l=this.env.debug;this.temporaryData=[];try{return l&&this.device.pushErrorScope("validation"),a(t,o[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${s}" failed. ${d}`)),1}finally{l&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${s}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let s=n.get(t),a=this.gpuDataManager.registerExternalBuffer(r,i,s);return n.set(t,[a,r]),a}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await zn(this,e,t);return Jn(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){de("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){de("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){de("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),s=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(s.computePipeline),n.setBindGroup(0,s.bindGroup),n.dispatchWorkgroups(...s.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Sf={};Kt(Sf,{init:()=>If});var Gr,qd,If,xy=q(()=>{te(),st(),ie(),A0(),Gr=class Tf{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=R.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(R.size(t)!==R.size(this.dims))throw new Error("Invalid new shape");return new Tf(this.module,this.dataType,this.data,t)}},qd=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,s=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,s));let a=Number(e.getValue(i*n++,s));this.outputCount=Number(e.getValue(i*n++,s)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,s));let o=[];for(let l=0;l<a;l++){let d=Number(e.getValue(i*n++,s)),c=Number(e.getValue(i*n++,"*")),h=Number(e.getValue(i*n++,s)),f=[];for(let y=0;y<h;y++)f.push(Number(e.getValue(i*n++,s)));o.push(new Gr(e,d,c,f))}this.inputs=o}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var a;let r=((a=t==null?void 0:t.inputs)==null?void 0:a.map(o=>typeof o=="number"?this.inputs[o]:o))??this.inputs,i=(t==null?void 0:t.outputs)??[],n=(o,l,d)=>new Gr(this.module,l,this.output(o,d),d),s=(o,l)=>{let d=At(o,l);if(!d)throw new Error(`Unsupported data type: ${o}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Gr(this.module,o,c,l)};return this.backend.run(e,r,i,n,s,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",s=this.module.stackAlloc((1+t.length)*i);this.module.setValue(s,t.length,n);for(let a=0;a<t.length;a++)this.module.setValue(s+i*(a+1),t[a],n);return this.module._JsepOutput(this.opKernelContext,e,s)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},If=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let s=(vy(),yr(vf)).WebGpuBackend,a=new s;await a.initialize(r,i),n("webgpu",[a,o=>a.alloc(Number(o)),o=>a.free(o),(o,l,d,c=!1)=>{if(c)de("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(o)}, dst=${Number(l)}, size=${Number(d)}`),a.memcpy(Number(o),Number(l));else{de("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(o)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let h=t.HEAPU8.subarray(Number(o>>>0),Number(o>>>0)+Number(d));a.upload(Number(l),h)}},async(o,l,d)=>{de("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${o}, dataOffset=${l}, size=${d}`),await a.download(Number(o),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(o,l,d)=>a.createKernel(o,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),o=>a.releaseKernel(o),(o,l,d,c)=>{de("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${o}, contextDataOffset=${l}`);let h=new qd(t,a,Number(l));return a.computeKernel(Number(o),h,c)},()=>a.captureBegin(),()=>a.captureEnd(),()=>a.replay()])}else{let s=new Np(r);n("webnn",[s,()=>s.reserveTensorId(),a=>s.releaseTensorId(a),async(a,o,l,d,c)=>s.ensureTensor(a,o,l,d,c),(a,o)=>{s.uploadTensor(a,o)},async(a,o)=>s.downloadTensor(a,o),(a,o)=>s.registerMLContext(a,o),!!r.trace])}}}),Wd,da,pa,gt,Gd,$n,ri,ca,ha,vn,fa,ma,ga,kf=q(()=>{qe(),E0(),C0(),te(),Dt(),Kn(),Cp(),Wd=(e,t)=>{ye()._OrtInit(e,t)!==0&&fe("Can't initialize onnxruntime.")},da=async e=>{Wd(e.wasm.numThreads,Qr(e.logLevel))},pa=async(e,t)=>{var i,n;(n=(i=ye()).asyncInit)==null||n.call(i);let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let s=e.webgpu.powerPreference;if(s!==void 0&&s!=="low-power"&&s!=="high-performance")throw new Error(`Invalid powerPreference setting: "${s}"`);let a=e.webgpu.forceFallbackAdapter;if(a!==void 0&&typeof a!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${a}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:s,forceFallbackAdapter:a}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let s=(xy(),yr(Sf)).init;t==="webgpu"&&await s("webgpu",ye(),e,r),t==="webnn"&&await s("webnn",ye(),e)}},gt=new Map,Gd=e=>{let t=ye(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&fe("Can't get session input/output count.");let s=i===4?"i32":"i64";return[Number(t.getValue(n,s)),Number(t.getValue(n+i,s))]}finally{t.stackRestore(r)}},$n=(e,t)=>{let r=ye(),i=r.stackSave(),n=0;try{let s=r.PTR_SIZE,a=r.stackAlloc(2*s);r._OrtGetInputOutputMetadata(e,t,a,a+s)!==0&&fe("Can't get session input/output metadata.");let o=Number(r.getValue(a,"*"));n=Number(r.getValue(a+s,"*"));let l=r.HEAP32[n/4];if(l===0)return[o,0];let d=r.HEAPU32[n/4+1],c=[];for(let h=0;h<d;h++){let f=Number(r.getValue(n+8+h*s,"*"));c.push(f!==0?r.UTF8ToString(f):Number(r.getValue(n+8+(h+d)*s,"*")))}return[o,l,c]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},ri=e=>{let t=ye(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},ca=async(e,t)=>{var h,f,y,_;let r,i,n=ye();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=ri(e);let s=0,a=0,o=0,l=[],d=[],c=[];try{if([a,l]=await Ep(t),(t==null?void 0:t.externalData)&&n.mountExternalData){let $=[];for(let O of t.externalData){let N=typeof O=="string"?O:O.path;$.push(Qn(typeof O=="string"?O:O.data).then(P=>{n.mountExternalData(N,P)}))}await Promise.all($)}for(let $ of(t==null?void 0:t.executionProviders)??[])if((typeof $=="string"?$:$.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof $!="string"){let O=$,N=O==null?void 0:O.context,P=O==null?void 0:O.gpuDevice,V=O==null?void 0:O.deviceType,H=O==null?void 0:O.powerPreference;N?n.currentContext=N:P?n.currentContext=await n.webnnCreateMLContext(P):n.currentContext=await n.webnnCreateMLContext({deviceType:V,powerPreference:H})}else n.currentContext=await n.webnnCreateMLContext();break}s=await n._OrtCreateSession(r,i,a),(h=n.webgpuOnCreateSession)==null||h.call(n,s),s===0&&fe("Can't create a session."),(f=n.jsepOnCreateSession)==null||f.call(n),n.currentContext&&(n.webnnRegisterMLContext(s,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[w,S]=Gd(s),v=!!(t!=null&&t.enableGraphCapture),b=[],I=[],T=[],C=[],E=[];for(let $=0;$<w;$++){let[O,N,P]=$n(s,$);O===0&&fe("Can't get an input name."),d.push(O);let V=n.UTF8ToString(O);b.push(V),T.push(N===0?{name:V,isTensor:!1}:{name:V,isTensor:!0,type:nt(N),shape:P})}for(let $=0;$<S;$++){let[O,N,P]=$n(s,$+w);O===0&&fe("Can't get an output name."),c.push(O);let V=n.UTF8ToString(O);I.push(V),C.push(N===0?{name:V,isTensor:!1}:{name:V,isTensor:!0,type:nt(N),shape:P});{if(v&&(t==null?void 0:t.preferredOutputLocation)===void 0){E.push("gpu-buffer");continue}let H=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((y=t==null?void 0:t.preferredOutputLocation)==null?void 0:y[V])??"cpu",M=n.webnnIsGraphOutput;if(H==="cpu"&&M&&M(s,V)){E.push("ml-tensor-cpu-output");continue}if(H!=="cpu"&&H!=="cpu-pinned"&&H!=="gpu-buffer"&&H!=="ml-tensor")throw new Error(`Not supported preferred output location: ${H}.`);if(v&&H!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${H}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);E.push(H)}}let z=null;return E.some($=>$==="gpu-buffer"||$==="ml-tensor"||$==="ml-tensor-cpu-output")&&(o=n._OrtCreateBinding(s),o===0&&fe("Can't create IO binding."),z={handle:o,outputPreferredLocations:E,outputPreferredLocationsEncoded:E.map($=>$==="ml-tensor-cpu-output"?"ml-tensor":$).map($=>En($))}),gt.set(s,[s,d,c,z,v,!1]),[s,b,I,T,C]}catch(w){throw d.forEach(S=>n._OrtFree(S)),c.forEach(S=>n._OrtFree(S)),o!==0&&n._OrtReleaseBinding(o)!==0&&fe("Can't release IO binding."),s!==0&&n._OrtReleaseSession(s)!==0&&fe("Can't release session."),w}finally{n._free(r),a!==0&&n._OrtReleaseSessionOptions(a)!==0&&fe("Can't release session options."),l.forEach(w=>n._free(w)),(_=n.unmountExternalData)==null||_.call(n)}},ha=e=>{var l,d,c;let t=ye(),r=gt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,s,a,o]=r;a&&(o&&t._OrtClearBoundOutputs(a.handle)!==0&&fe("Can't clear bound outputs."),t._OrtReleaseBinding(a.handle)!==0&&fe("Can't release IO binding.")),(l=t.jsepOnReleaseSession)==null||l.call(t,e),(d=t.webnnOnReleaseSession)==null||d.call(t,e),(c=t.webgpuOnReleaseSession)==null||c.call(t,e),n.forEach(h=>t._OrtFree(h)),s.forEach(h=>t._OrtFree(h)),t._OrtReleaseSession(i)!==0&&fe("Can't release session."),gt.delete(e)},vn=async(e,t,r,i,n,s,a=!1)=>{if(!e){t.push(0);return}let o=ye(),l=o.PTR_SIZE,d=e[0],c=e[1],h=e[3],f=h,y,_;if(d==="string"&&(h==="gpu-buffer"||h==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(a&&h!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${s} when enableGraphCapture is true.`);if(h==="gpu-buffer"){let v=e[2].gpuBuffer;_=At(zt(d),c);{let b=o.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=b(i,s,v,_)}}else if(h==="ml-tensor"){let v=e[2].mlTensor;_=At(zt(d),c);let b=o.webnnRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=b(i,v,zt(d),c)}else{let v=e[2];if(Array.isArray(v)){_=l*v.length,y=o._malloc(_),r.push(y);for(let b=0;b<v.length;b++){if(typeof v[b]!="string")throw new TypeError(`tensor data at index ${b} is not a string`);o.setValue(y+b*l,Ke(v[b],r),"*")}}else{let b=o.webnnIsGraphInput,I=o.webnnIsGraphOutput;if(d!=="string"&&b&&I){let T=o.UTF8ToString(n);if(b(i,T)||I(i,T)){let C=zt(d);_=At(C,c),f="ml-tensor";let E=o.webnnCreateTemporaryTensor,z=o.webnnUploadTensor;if(!E||!z)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let $=await E(i,C,c);z($,new Uint8Array(v.buffer,v.byteOffset,v.byteLength)),y=$}else _=v.byteLength,y=o._malloc(_),r.push(y),o.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),y)}else _=v.byteLength,y=o._malloc(_),r.push(y),o.HEAPU8.set(new Uint8Array(v.buffer,v.byteOffset,_),y)}}let w=o.stackSave(),S=o.stackAlloc(4*c.length);try{c.forEach((b,I)=>o.setValue(S+I*l,b,l===4?"i32":"i64"));let v=o._OrtCreateTensor(zt(d),y,_,S,c.length,En(f));v===0&&fe(`Can't create tensor for input/output. session=${i}, index=${s}.`),t.push(v)}finally{o.stackRestore(w)}},fa=async(e,t,r,i,n,s)=>{var V,H,M,F;let a=ye(),o=a.PTR_SIZE,l=gt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],c=l[1],h=l[2],f=l[3],y=l[4],_=l[5],w=t.length,S=i.length,v=0,b=[],I=[],T=[],C=[],E=[],z=a.stackSave(),$=a.stackAlloc(w*o),O=a.stackAlloc(w*o),N=a.stackAlloc(S*o),P=a.stackAlloc(S*o);try{[v,b]=kp(s),Ot("wasm prepareInputOutputTensor");for(let W=0;W<w;W++)await vn(r[W],I,C,e,c[t[W]],t[W],y);for(let W=0;W<S;W++)await vn(n[W],T,C,e,h[i[W]],w+i[W],y);Mt("wasm prepareInputOutputTensor");for(let W=0;W<w;W++)a.setValue($+W*o,I[W],"*"),a.setValue(O+W*o,c[t[W]],"*");for(let W=0;W<S;W++)a.setValue(N+W*o,T[W],"*"),a.setValue(P+W*o,h[i[W]],"*");if(f&&!_){let{handle:W,outputPreferredLocations:me,outputPreferredLocationsEncoded:U}=f;if(c.length!==w)throw new Error(`input count from feeds (${w}) is expected to be always equal to model's input count (${c.length}).`);Ot("wasm bindInputsOutputs");for(let L=0;L<w;L++){let J=t[L];await a._OrtBindInput(W,c[J],I[L])!==0&&fe(`Can't bind input[${L}] for session=${e}.`)}for(let L=0;L<S;L++){let J=i[L];(V=n[L])!=null&&V[3]?(E.push(T[L]),a._OrtBindOutput(W,h[J],T[L],0)!==0&&fe(`Can't bind pre-allocated output[${L}] for session=${e}.`)):a._OrtBindOutput(W,h[J],0,U[J])!==0&&fe(`Can't bind output[${L}] to ${me[L]} for session=${e}.`)}Mt("wasm bindInputsOutputs"),gt.set(e,[d,c,h,f,y,!0])}(H=a.jsepOnRunStart)==null||H.call(a,d),(M=a.webnnOnRunStart)==null||M.call(a,d);let K;f?K=await a._OrtRunWithBinding(d,f.handle,S,N,v):K=await a._OrtRun(d,O,$,w,P,S,N,v),K!==0&&fe("failed to call OrtRun().");let Z=[],le=[];Ot("wasm ProcessOutputTensor");for(let W=0;W<S;W++){let me=Number(a.getValue(N+W*o,"*"));if(me===T[W]||E.includes(T[W])){Z.push(n[W]),me!==T[W]&&a._OrtReleaseTensor(me)!==0&&fe("Can't release tensor.");continue}let U=a.stackSave(),L=a.stackAlloc(4*o),J=!1,ee,be=0;try{a._OrtGetTensorData(me,L,L+o,L+2*o,L+3*o)!==0&&fe(`Can't access output tensor data on index ${W}.`);let ot=o===4?"i32":"i64",ut=Number(a.getValue(L,ot));be=a.getValue(L+o,"*");let Yt=a.getValue(L+o*2,"*"),wr=Number(a.getValue(L+o*3,ot)),Re=[];for(let _e=0;_e<wr;_e++)Re.push(Number(a.getValue(Yt+_e*o,ot)));a._OrtFree(Yt)!==0&&fe("Can't free memory for tensor dims.");let Ae=Re.reduce((_e,re)=>_e*re,1);ee=nt(ut);let lt=f==null?void 0:f.outputPreferredLocations[i[W]];if(ee==="string"){if(lt==="gpu-buffer"||lt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let _e=[];for(let re=0;re<Ae;re++){let Ne=a.getValue(be+re*o,"*"),br=a.getValue(be+(re+1)*o,"*"),Xt=re===Ae-1?void 0:br-Ne;_e.push(a.UTF8ToString(Ne,Xt))}Z.push([ee,Re,_e,"cpu"])}else if(lt==="gpu-buffer"&&Ae>0){let _e=a.jsepGetBuffer;if(!_e)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let re=_e(be),Ne=At(ut,Ae);if(Ne===void 0||!Yn(ee))throw new Error(`Unsupported data type: ${ee}`);J=!0,Z.push([ee,Re,{gpuBuffer:re,download:a.jsepCreateDownloader(re,Ne,ee),dispose:()=>{a._OrtReleaseTensor(me)!==0&&fe("Can't release tensor.")}},"gpu-buffer"])}else if(lt==="ml-tensor"&&Ae>0){let _e=a.webnnEnsureTensor,re=a.webnnIsGraphInputOutputTypeSupported;if(!_e||!re)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(At(ut,Ae)===void 0||!Xn(ee))throw new Error(`Unsupported data type: ${ee}`);if(!re(e,ee,!1))throw new Error(`preferredLocation "ml-tensor" for ${ee} output is not supported by current WebNN Context.`);let Ne=await _e(e,be,ut,Re,!1);J=!0,Z.push([ee,Re,{mlTensor:Ne,download:a.webnnCreateMLTensorDownloader(be,ee),dispose:()=>{a.webnnReleaseTensorId(be),a._OrtReleaseTensor(me)}},"ml-tensor"])}else if(lt==="ml-tensor-cpu-output"&&Ae>0){let _e=a.webnnCreateMLTensorDownloader(be,ee)(),re=Z.length;J=!0,le.push((async()=>{let Ne=[re,await _e];return a.webnnReleaseTensorId(be),a._OrtReleaseTensor(me),Ne})()),Z.push([ee,Re,[],"cpu"])}else{let _e=ai(ee),re=new _e(Ae);new Uint8Array(re.buffer,re.byteOffset,re.byteLength).set(a.HEAPU8.subarray(be,be+re.byteLength)),Z.push([ee,Re,re,"cpu"])}}finally{a.stackRestore(U),ee==="string"&&be&&a._free(be),J||a._OrtReleaseTensor(me)}}f&&!y&&(a._OrtClearBoundOutputs(f.handle)!==0&&fe("Can't clear bound outputs."),gt.set(e,[d,c,h,f,y,!1]));for(let[W,me]of await Promise.all(le))Z[W][2]=me;return Mt("wasm ProcessOutputTensor"),Z}finally{(F=a.webnnOnRunEnd)==null||F.call(a,d),a.stackRestore(z),I.forEach(K=>a._OrtReleaseTensor(K)),T.forEach(K=>a._OrtReleaseTensor(K)),C.forEach(K=>a._free(K)),v!==0&&a._OrtReleaseRunOptions(v),b.forEach(K=>a._free(K))}},ma=e=>{let t=ye(),r=gt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&fe("Can't get an profile file name."),t._OrtFree(n)},ga=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),yt,Oe,qt,dr,pr,Vr,xn,Hr,It,Tt,Vd,Ef,Cf,zf,Af,Of,Mf,Rf,Nf=q(()=>{qe(),kf(),Dt(),Fn(),yt=()=>!!$e.wasm.proxy&&typeof document<"u",qt=!1,dr=!1,pr=!1,Hr=new Map,It=(e,t)=>{let r=Hr.get(e);r?r.push(t):Hr.set(e,[t])},Tt=()=>{if(qt||!dr||pr||!Oe)throw new Error("worker not ready")},Vd=e=>{switch(e.data.type){case"init-wasm":qt=!1,e.data.err?(pr=!0,xn[1](e.data.err)):(dr=!0,xn[0]()),Vr&&(URL.revokeObjectURL(Vr),Vr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Hr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Ef=async()=>{if(!dr){if(qt)throw new Error("multiple calls to 'initWasm()' detected.");if(pr)throw new Error("previous call to 'initWasm()' failed.");if(qt=!0,yt())return new Promise((e,t)=>{Oe==null||Oe.terminate(),Ip().then(([r,i])=>{try{Oe=i,Oe.onerror=s=>t(s),Oe.onmessage=Vd,xn=[e,t];let n={type:"init-wasm",in:$e};!n.in.wasm.wasmPaths&&(r||kn)&&(n.in.wasm.wasmPaths={wasm:new URL("/ndlocr-lite-wasm/assets/ort-wasm-simd-threaded.jsep-CVw3nYo7.wasm",import.meta.url).href}),Oe.postMessage(n),Vr=r}catch(n){t(n)}},t)});try{await jn($e.wasm),await da($e),dr=!0}catch(e){throw pr=!0,e}finally{qt=!1}}},Cf=async e=>{if(yt())return Tt(),new Promise((t,r)=>{It("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:$e}};Oe.postMessage(i)});await pa($e,e)},zf=async e=>yt()?(Tt(),new Promise((t,r)=>{It("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Oe.postMessage(i,[e.buffer])})):ri(e),Af=async(e,t)=>{if(yt()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Tt(),new Promise((r,i)=>{It("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},s=[];e instanceof Uint8Array&&s.push(e.buffer),Oe.postMessage(n,s)})}else return ca(e,t)},Of=async e=>{if(yt())return Tt(),new Promise((t,r)=>{It("release",[t,r]);let i={type:"release",in:e};Oe.postMessage(i)});ha(e)},Mf=async(e,t,r,i,n,s)=>{if(yt()){if(r.some(a=>a[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(a=>a))throw new Error("pre-allocated output tensor is not supported for proxy.");return Tt(),new Promise((a,o)=>{It("run",[a,o]);let l=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:l,outputIndices:i,options:s}};Oe.postMessage(d,ga(l))})}else return fa(e,t,r,i,n,s)},Rf=async e=>{if(yt())return Tt(),new Promise((t,r)=>{It("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Oe.postMessage(i)});ma(e)}}),Sn,Hd,Bf,Sy=q(()=>{qe(),Nf(),te(),Hn(),Cp(),Sn=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Hd=e=>{switch(e[3]){case"cpu":return new Pe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Yn(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return Pe.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!Xn(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return Pe.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},Bf=class{async fetchModelAndCopyToWasmMemory(e){return zf(await Qn(e))}async loadModel(e,t){et();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Af(r,t),Ye()}async dispose(){return Of(this.sessionId)}async run(e,t,r){et();let i=[],n=[];Object.entries(e).forEach(h=>{let f=h[0],y=h[1],_=this.inputNames.indexOf(f);if(_===-1)throw new Error(`invalid input '${f}'`);i.push(y),n.push(_)});let s=[],a=[];Object.entries(t).forEach(h=>{let f=h[0],y=h[1],_=this.outputNames.indexOf(f);if(_===-1)throw new Error(`invalid output '${f}'`);s.push(y),a.push(_)});let o=i.map((h,f)=>Sn(h,()=>`input "${this.inputNames[n[f]]}"`)),l=s.map((h,f)=>h?Sn(h,()=>`output "${this.outputNames[a[f]]}"`):null),d=await Mf(this.sessionId,n,o,a,l,r),c={};for(let h=0;h<d.length;h++)c[this.outputNames[a[h]]]=s[h]??Hd(d[h]);return Ye(),c}startProfiling(){}endProfiling(){Rf(this.sessionId)}}}),Df={};Kt(Df,{OnnxruntimeWebAssemblyBackend:()=>Wn,initializeFlags:()=>qn,wasmBackend:()=>Pf});var qn,Wn,Pf,Iy=q(()=>{qe(),Nf(),Sy(),qn=()=>{(typeof $e.wasm.initTimeout!="number"||$e.wasm.initTimeout<0)&&($e.wasm.initTimeout=0);let e=$e.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),$e.wasm.simd=!1),typeof $e.wasm.proxy!="boolean"&&($e.wasm.proxy=!1),typeof $e.wasm.trace!="boolean"&&($e.wasm.trace=!1),typeof $e.wasm.numThreads!="number"||!Number.isInteger($e.wasm.numThreads)||$e.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)$e.wasm.numThreads=1;else{let t=typeof navigator>"u"?d0("node:os").cpus().length:navigator.hardwareConcurrency;$e.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Wn=class{async init(e){qn(),await Ef(),await Cf(e)}async createInferenceSessionHandler(e,t){let r=new Bf;return await r.loadModel(e,t),r}},Pf=new Wn});qe();qe();qe();var Ty="1.24.2";{let e=(Iy(),yr(Df)).wasmBackend;Gt("webgpu",e,5),Gt("webnn",e,5),Gt("cpu",e,10),Gt("wasm",e,10)}Object.defineProperty($e.versions,"web",{value:Ty,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function ky(e){const t=await createImageBitmap(e),r=new OffscreenCanvas(t.width,t.height),i=r.getContext("2d");return i.drawImage(t,0,0),t.close(),i.getImageData(0,0,r.width,r.height)}function Ey(e,t){const r=Math.max(e.width,e.height),i=new OffscreenCanvas(r,r),n=i.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,r,r),n.putImageData(e,0,0);const a=new OffscreenCanvas(t,t).getContext("2d");return a.drawImage(i,0,0,t,t),a.getImageData(0,0,t,t)}function Cy(e,t,r,i,n){const s=Math.max(0,Math.min(t,e.width)),a=Math.max(0,Math.min(r,e.height)),o=Math.max(0,Math.min(t+i,e.width)),l=Math.max(0,Math.min(r+n,e.height)),d=o-s,c=l-a;if(d<=0||c<=0)return new ImageData(1,1);const f=new OffscreenCanvas(d,c).getContext("2d"),y=new OffscreenCanvas(e.width,e.height);return y.getContext("2d").putImageData(e,0,0),f.drawImage(y,s,a,d,c,0,0,d,c),f.getImageData(0,0,d,c)}function zy(e,t,r,i=!0){let n=new OffscreenCanvas(e.width,e.height);n.getContext("2d").putImageData(e,0,0);let a=n;if(i&&e.height>e.width){const d=new OffscreenCanvas(e.height,e.width),c=d.getContext("2d");c.translate(e.height,0),c.rotate(Math.PI/2),c.drawImage(n,0,0),a=d}const l=new OffscreenCanvas(t,r).getContext("2d");return l.drawImage(a,0,0,t,r),l.getImageData(0,0,t,r)}function Uf(e,t,r,i){const n=new Float32Array(i*t*r);for(let s=0;s<i;s++)for(let a=0;a<t;a++)for(let o=0;o<r;o++)n[s*t*r+a*r+o]=e[(a*r+o)*i+s];return n}function Ay(e,t,r){const i=[.485,.456,.406],n=[.229,.224,.225],s=new Float32Array(t*r*3);for(let a=0;a<t*r;a++){const o=a*4;for(let l=0;l<3;l++)s[a*3+l]=(e[o+l]/255-i[l])/n[l]}return s}function Oy(e,t,r){const i=new Float32Array(t*r*3);for(let n=0;n<t*r;n++){const s=n*4;i[n*3+0]=2*(e[s+2]/255)-1,i[n*3+1]=2*(e[s+1]/255)-1,i[n*3+2]=2*(e[s+0]/255)-1}return i}function My(e,t,r){const i=new Int32Array(t);for(let n=0;n<t;n++){let s=-1/0,a=0;const o=n*r;for(let l=0;l<r;l++)e[o+l]>s&&(s=e[o+l],a=l);i[n]=a}return i}const Lf={0:"text_block",1:"line_main",2:"line_caption",3:"line_ad",4:"line_note",5:"line_note_tochu",6:"block_fig",7:"block_ad",8:"block_pillar",9:"block_folio",10:"block_rubi",11:"block_chart",12:"block_eqn",13:"block_cfm",14:"block_eng",15:"block_table",16:"line_title"},Ry=Object.values(Lf),Ny={text_block:"本文ブロック",line_main:"本文",line_caption:"キャプション",line_ad:"広告文字",line_note:"割注",line_note_tochu:"頭注",block_fig:"図版",block_ad:"広告",block_pillar:"柱",block_folio:"ノンブル",block_rubi:"ルビ",block_chart:"組織図",block_eqn:"数式",block_cfm:"化学式",block_eng:"欧文",block_table:"表組",line_title:"タイトル本文"};function Wt(e){return Ny[e]??e}const Fd=[{id:"standard",label:"標準 (77MB)",description:"FP32 — 最高精度",deim:{url:"/ndlocr-lite-wasm/models/deim-s-1024x1024.onnx",inputShape:[1,3,800,800],name:"deim-s-1024x1024.onnx"},parseq:{url:"/ndlocr-lite-wasm/models/parseq-ndl-16x768-100-tiny-165epoch-tegaki2.onnx",inputShape:[1,3,16,768],name:"parseq-ndl-16x768-100-tiny-165epoch-tegaki2.onnx"}},{id:"lite",label:"軽量 (50MB)",description:"検出INT8 + 認識FP32 — 高速ダウンロード",deim:{url:"/ndlocr-lite-wasm/models/deim-s-1024x1024_int8.onnx",inputShape:[1,3,800,800],name:"deim-s-1024x1024_int8.onnx"},parseq:{url:"/ndlocr-lite-wasm/models/parseq-ndl-16x768-100-tiny-165epoch-tegaki2.onnx",inputShape:[1,3,16,768],name:"parseq-ndl-16x768-100-tiny-165epoch-tegaki2.onnx"}}],By="standard",Dy=.25;class Py{constructor(){Ee(this,"session",null);Ee(this,"inputH",0);Ee(this,"inputW",0)}async init(t,r){this.session=await ni.create(t,{executionProviders:["wasm"],graphOptimizationLevel:"all"}),this.inputH=r.inputShape[2],this.inputW=r.inputShape[3]}async detect(t){if(!this.session)throw new Error("DEIM session not initialized");const r=Math.max(t.width,t.height),i=Ey(t,this.inputH),n=Ay(i.data,this.inputH,this.inputW),s=Uf(n,this.inputH,this.inputW,3),a=new Pe("float32",s,[1,3,this.inputH,this.inputW]),o=new Pe("int64",BigInt64Array.from([BigInt(this.inputH),BigInt(this.inputW)]),[1,2]),l={};for(const c of this.session.inputNames)c.toLowerCase().includes("image")?l[c]=a:l[c]=o;const d=await this.session.run(l);return this.postprocess(d,r)}postprocess(t,r){const i=this.session.outputNames,n=y=>i.find(_=>_.toLowerCase().includes(y))??y,s=t[n("label")].data,a=t[n("box")].data,o=t[n("score")].data,l=t[n("char_count")],d=l?l.data:null,c=r/this.inputW,h=r/this.inputH,f=[];for(let y=0;y<o.length;y++){const _=o[y];if(_<=Dy)continue;const w=Math.round(a[y*4+0]*c),S=Math.round(a[y*4+1]*h),v=Math.round(a[y*4+2]*c),b=Math.round(a[y*4+3]*h),I=Number(s[y])-1;f.push({classIndex:I,className:Lf[I]??`class_${I}`,confidence:_,box:[w,S,v,b],predCharCount:d?Number(d[y]):0})}return f}dispose(){var t;(t=this.session)==null||t.release(),this.session=null}}const jd=" !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~×ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρςστυφχψωϑϕϖϱϵ‐‑‒–—―‘’“”‥…※⁃⁻₋←↑→↓⇩−①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭■□▲△▽◆○●★☆♥♪❶❷❸❹❺❻❼❽❾、。〃々〆〇〈〉《》「」『』【】〔〕〝〟〳〴〵〻ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔ゛゜ゝゞゟァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ・ーヽヾヿㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ㈱㈲㈴㈾㊀㊁㊂㊃㊄㊅㊆㊇㊈㊉㊞㸃一丁七万丈三上下不与丐丑且丕世丗丘丙丞両並个中丱串丶丸丹主丼丿乂乃久之乍乎乏乕乖乗乘乙九乞也乢乱乳乾亀亂亅了予争亊事二于云互五井亘亙些亜亞亟亠亡亢交亥亦亨享京亭亮亰亳亶亷人什仁仂仄仆仇今介仍从仏仔仕他仗付仙仝仞仟代令以仭仮仰仲件价任企伉伊伍伎伏伐休会伜伝伯估伴伶伸伹伺似伽佃但佇位低住佐佑体何佗余佚佛作佝佞佩佯佰佳併佶佻佼使侃來侈例侍侏侑侖侘供依侠価侫侭侮侯侵侶便係促俄俊俎俐俑俔俗俘俚俛保俟俠信俣俤俥修俯俱俳俵俶俸俺俾倅倆倉個倍倏們倒倔倖候倚借倡倣値倥倦倨倩倪倫倬倭倶倹偁偃假偈偉偏偐偕偖做停健偬偲側偵偶偸偽傀傅傍傑傘備傚催傭傲傳傴債傷傾僂僅僉僊働像僑僕僖僚僞僣僥僧僭僮僵價僻儀儁儂億儉儒儔儕儖儘儚償儡優儲儷儺儻儼儿兀允元兄充兆兇先光克兌免兎児兒兔党兜兢入內全兩兪八公六兮共兵其具典兼冀冂内円冉冊册再冏冐冑冒冓冕冖冗写冠冢冤冥冦冨冩冪冫冬冰冱冲决冴况冶冷冽凄凅准凉凋凌凍减凖凛凜凝凞几凡処凧凩凪凭凰凱凵凶凸凹出函凾刀刃刄分切刈刊刋刎刑刔列初判別刧利刪刮到刳制刷券刹刺刻剃剄則削剋剌前剏剔剖剛剝剞剣剤剥剩剪副剰剱割剳剴創剽剿劃劄劇劈劉劍劑劒劔力功加劣助努劫劬劭励労劵効劼劾勁勃勅勇勉勍勒動勗勘務勝勞募勠勢勣勤勦勧勲勳勵勸勹勺勾勿匁匂包匆匈匍匏匐匕化北匙匚匝匠匡匣匪匯匱匳匸匹区医匿區十千卅卆升午卉半卍卑卒卓協南単博卜卞占卦卩卮卯印危即却卵卷卸卻卽卿厂厄厖厘厚原厠厥厦厨厩厭厮厰厲厳厶去参參又叉及友双反収叔取受叙叛叟叡叢口古句叨叩只叫召叭叮可台叱史右叶号司叺吁吃各合吉吊吋同名后吏吐向君吝吟吠否吩含听吭吮吳吴吶吸吹吻吼吽吾吿呀呂呆呈呉告呎呑呟周呪呰呱味呵呶呷呻呼命咀咄咆咋和咎咏咐咒咜咢咤咥咨咩咫咬咯咲咳咸咼咽咾哀品哂哄哇哈哉哘員哢哥哦哨哩哭哮哲哺哽唄唆唇唏唐唔唖售唯唱唳唸唹唾啀啄啅商啌問啓啖啗啜啝啣啻啼啾喀喃善喇喉喊喋喘喙喚喜喝喞喟喧喨喩喪喫喬單喰営嗄嗅嗇嗔嗚嗜嗟嗣嗤嗷嗹嗽嗾嘆嘈嘉嘔嘖嘗嘘嘛嘩嘯嘱嘲嘴嘶嘸噂噌噎噐噛噤器噪噫噬噴噸噺嚀嚆嚇嚊嚏嚔嚙嚠嚢嚥嚩嚮嚴嚶嚼囀囁囂囃囈囉囊囎囑囓囗囘囚四回因団囮困囲図囹固国囿圀圃圄圈圉國圍圏園圓圖團圜土圦圧在圭地圷圸圻址坂均坊坎坏坐坑坡坤坦坩坪坿垂垈垉型垓垠垢垣垤垪垰垳垽埀埃埆埋城埒埓埔埖埜域埠埣埴埵執培基埼堀堂堅堆堊堋堕堙堝堡堤堪堯堰報場堵堺堽塀塁塊塋塑塒塔塗塘塙塚塞塡塢塩填塰塲塵塹塾境墅墓増墜增墟墨墫墮墳墸墹墺墻墾壁壅壇壊壌壑壓壔壕壗壘壙壜壞壟壤壥士壬壮壯声壱売壷壹壺壻壼壽夂変夊夏夐夕外夘夙多夛夜夢夥大天太夫夬夭央失夲夷夸夾奄奇奈奉奎奏奐契奔奕套奘奚奠奢奥奧奨奩奪奬奮女奴奸好妁如妃妄妊妍妓妖妙妛妝妣妥妨妬妲妹妻妾姆姉姊始姐姑姓委姙姚姜姥姦姨姪姫姬姶姻姿威娃娉娑娘娚娛娜娟娠娥娩娯娵娶娼婀婁婆婉婚婢婦婪婬婿媒媚媛媼媽媾嫁嫂嫉嫋嫌嫐嫖嫗嫡嫣嫦嫩嫺嫻嬉嬋嬌嬖嬢嬪嬬嬰嬲嬶嬾孀孃孅子孑孔孕字存孚孛孜孝孟季孤孥学孩孫孰孱孳孵學孺宀它宅宇守安宋完宍宏宕宗官宙定宛宜宝実客宣室宥宦宮宰害宴宵家宸容宿寂寃寄寅密寇寉富寐寒寓寔寛寝寞察寡寢寤寥實寧寨審寫寬寮寰寳寵寶寸寺対寿封専射尅将將專尉尊尋對導小少尓尖尙尚尠尢尤尨尭就尸尹尺尻尼尽尾尿局屁居屆屈届屋屍屎屏屐屑屓展屛属屠屡屢層履屬屮屯山屶屹岌岐岑岔岡岨岩岫岬岱岳岶岷岸岻岼岾峅峇峙峠峡峨峩峪峭峯峰島峺峻峽崇崋崎崑崔崕崖崗崘崙崚崛崟崢崩嵋嵌嵎嵐嵒嵜嵩嵬嵯嵳嵶嶂嶄嶇嶋嶌嶐嶝嶢嶬嶮嶷嶺嶼嶽巉巌巍巒巓巖巛川州巡巢巣工左巧巨巫差己已巳巴巵巷巻巽巾市布帆帋希帑帖帙帚帛帝帥師席帯帰帳帶帷常帽幀幃幄幅幇幌幎幔幕幗幟幡幢幣幤干平年幵并幷幸幹幺幻幼幽幾广庁広庄庇床序底庖店庚府庠度座庫庭庵庶康庸廁廂廃廈廉廊廏廐廓廖廚廛廝廟廠廡廢廣廨廩廬廰廱廳廴延廷廸建廻廼廾廿弁弃弄弉弊弋弌弍式弐弑弓弔引弖弗弘弛弟弥弦弧弩弭弯弱張強弸强弼弾彁彈彊彌彎彑当彖彗彙彜彝彡形彥彦彩彪彫彬彭彰影彳彷役彼彿往征徂徃径待徇很徊律後徐徑徒従得徘徙從徠御徨復循徭微徳徴徵德徹徼徽心必忌忍忖志忘忙応忝忠忤快忰忱念忸忻忽忿怎怏怐怒怕怖怙怛怜思怠怡急怦性怨怩怪怫怯怱怺恁恂恃恆恊恋恍恐恒恕恙恚恟恠恢恣恤恥恨恩恪恫恬恭息恰恵恷悁悃悄悅悉悋悌悍悒悔悖悗悚悛悟悠患悦悧悩悪悲悳悴悵悶悸悼悽情惆惇惑惓惘惚惜惟惠惡惣惧惨惰惱想惴惶惷惹惺惻愀愁愃愆愈愉愍愎意愕愚愛感愡愧愨愬愴愼愽愾愿慂慄慇慈慊態慌慍慎慓慕慘慙慚慝慟慢慣慥慧慨慫慮慯慰慱慳慴慵慶慷慾憂憇憊憎憐憑憔憖憙憚憤憧憩憫憬憮憲憶憺憾懃懆懇懈應懊懋懌懍懐懣懦懲懴懶懷懸懺懼懽懾懿戀戈戉戊戌戍戎成我戒戔或戚戛戝戞戟戡戦截戮戯戰戱戲戳戴戶戸戻戾房所扁扇扈扉手才扎打払托扛扞扠扣扨扮扱扶批扼找承技抂抃抄抉把抑抒抓抔投抖抗折抛抜択抦披抬抱抵抹抻押抽拂担拆拇拈拉拊拌拍拏拐拑拒拓拔拗拘拙招拜拝拠拡括拭拮拯拱拳拵拶拷拾拿持挂指挈按挌挑挙挟挧挨挫振挹挺挽挾挿捉捌捍捏捐捕捗捜捧捨捩捫据捲捶捷捺捻掀掃授掉掌掎掏排掖掘掛掟掠採探掣接控推掩措掫掬掲掴掵掻掾揀揃揄揆揉描提插揖揚換握揣揩揭揮援揶揷揺搆損搏搓搔搖搗搜搦搨搬搭搴搶携搾摂摎摑摘摧摩摯摶摸摺撃撈撒撓撕撚撞撤撥撩撫播撮撰撲撹撻撼擁擂擅擇擊操擒擔擘據擠擡擢擣擦擧擬擯擱擲擴擶擺擽擾攀攅攘攜攝攣攤攪攫攬支攴攵收攷攸改攺攻放政故效敍敎敏救敕敖敗敘教敝敞敢散敦敬数敲整敵敷數斂斃文斈斉斌斎斐斑斗料斛斜斟斡斤斥斧斫斬断斯新斷方於施旁旃旄旅旆旋旌族旒旗旙旛无旡既旣日旦旧旨早旬旭旱旺旻昂昃昆昇昊昌明昏易昔昜星映春昧昨昭是昴昵昶昻昼昿晁時晃晄晉晋晏晒晚晝晞晟晢晤晦晧晨晩普景晰晴晶智暁暃暄暇暈暉暎暑暖暗暘暝暢暦暫暮暴暸暹暼暾曁曄曆曇曉曖曙曚曜曝曠曦曩曰曲曳更曵曷書曹曼曽曾替最會月有朋服朏朔朕朖朗望朝朞期朦朧木未末本札朮朱朴朶朷朸机朽朿杁杆杉李杏材村杓杖杙杜杞束杠条杢杣杤来杪杭杯杰東杲杳杵杷杼松板枅枇枉枋枌析枕林枚果枝枠枡枢枦枩枯枳枴架枷枸枹柁柄柆柊柎柏某柑染柔柘柚柝柞柢柤查柧柩柬柮柯柱柳柴柵査柾柿栂栃栄栅栓栖栗栞校栢栩株栫栲栴核根格栽桀桁桂桃框案桍桎桐桑桓桔桙桜桝桟档桧桴桶桷桾桿梁梃梅梍梏梓梔梗梛條梟梠梢梦梧梨梭梯械梱梳梵梶梹梺梼棄棆棉棊棋棍棒棔棕棗棘棚棟棠棡棣棧森棯棲棹棺椀椁椄椅椈椋椌植椎椏椒椙椚椛検椡椢椣椥椦椨椪椰椴椶椹椽椿楊楓楔楕楙楚楜楝楞楠楡楢楪楫業楮楯楳楴極楷楸楹楼楽楾榁概榊榎榑榔榕榛榜榠榧榮榱榲榴榻榾榿槁槃槇槊構槌槍槎槐槓様槙槝槞槧槨槪槫槭槲槹槻槽槿樂樅樊樋樌樒樓樔樗標樛樞樟模樢樣権横樫樮樵樶樸樹樺樽橄橇橈橋橘橙機橡橢橦橫橲橸橿檀檄檍檎檐檗檜檠檢檣檪檬檮檳檸檻櫁櫂櫃櫑櫓櫚櫛櫞櫟櫨櫪櫺櫻欄欅權欒欖欝欟欠次欣欧欲欷欸欹欺欽款歃歇歉歌歎歐歓歔歙歛歟歡止正此步武歩歪歯歲歳歴歷歸歹死歿殀殃殄殆殉殊残殍殕殖殘殞殤殪殫殯殱殲殳殴段殷殺殻殼殿毀毅毆毋母毎每毒毓比毗毘毛毟毫毬毯毳氈氏民氓气気氛氣氤水氷永氾汀汁求汎汐汕汗汚汝汞江池汢汨汪汰汲汳決汽汾沁沂沃沈沌沍沐沒沓沖沙沚沛没沢沫沮沱河沸油沺治沼沽沾沿況泄泅泉泊泌泓法泗泙泛泝泡波泣泥注泪泯泰泱泳洇洋洌洒洗洙洛洞洟津洩洪洫洲洳洵洶洸活洽派流浄浅浙浚浜浣浤浦浩浪浬浮浴海浸浹涅消涉涌涎涓涕涙涛涜涯液涵涸涼淀淅淆淇淋淌淑淒淕淘淙淚淞淡淤淦淨淪淫淬淮深淳淵混淸淹淺添淼清渇済渉渊渋渓渕渙渚減渝渟渠渡渣渤渥渦温渫測渭渮港游渺渾湃湊湍湎湖湘湛湟湧湫湮湯湲湶湾湿満溂溌溏源準溘溜溝溟溢溥溪溫溯溲溶溷溺溽滂滄滅滉滊滋滌滑滓滔滕滝滞滬滯滲滴滷滸滾滿漁漂漆漉漏漑漓演漕漠漢漣漫漬漱漲漸漾漿潁潅潑潔潘潛潜潟潤潦潭潮潯潰潴潸潺潼澀澁澂澄澆澎澑澗澡澣澤澥澪澱澳澹激濁濂濃濆濔濕濘濛濟濠濡濤濫濬濮濯濱濳濶濺濾瀁瀉瀋瀏瀑瀕瀘瀚瀛瀝瀞瀟瀦瀧瀨瀬瀰瀲瀾灌灑灘灣火灯灰灸灼災炉炊炎炒炙炬炭炮炯炳炸点為烈烋烏烙烝烟烱烹烽焉焔焙焚焜無焦然焼煉煌煎煑煕煖煙煢煤煥煦照煩煬煮煽熄熈熊熏熔熕熙熟熨熬熱熹熾燃燈燉燎燐燒燔燕燗營燠燥燦燧燬燭燮燵燹燻燼燿爆爍爐爛爨爪爬爭爰爲爵父爺爻爼爽爾爿牀牆片版牋牌牒牘牙牛牝牟牡牢牧物牲牴特牽牾犀犁犂犇犒犖犠犢犧犬犯犲状犹狀狂狃狄狆狎狐狒狗狙狛狠狡狢狩独狭狷狸狹狼狽猊猖猗猛猜猝猟猥猩猪猫献猯猴猶猷猽猾猿獄獅獎獏獗獣獨獪獰獲獵獸獺獻玄玆率玉王玖玩玲玳玻珀珂珈珊珍珎珞珠珥珪班珮珱珸現球琅理琉琢琥琲琳琴琵琶琺琿瑁瑕瑙瑚瑛瑜瑞瑟瑠瑣瑤瑩瑪瑯瑰瑳瑶瑾璃璋璞璢璧環璽瓊瓏瓔瓜瓠瓢瓣瓦瓧瓩瓮瓰瓱瓲瓶瓷瓸甃甄甅甌甍甎甑甓甕甘甚甜甞生產産甥甦用甫甬田由甲申男甸町画甼畄畆畉畊畋界畍畏畑畔留畚畛畜畝畠畢畤略畦畧畩番畫畭異畳畴畵當畷畸畿疂疆疇疉疊疋疎疏疑疔疚疝疣疥疫疱疲疳疵疸疹疼疽疾痂痃病症痊痍痒痔痕痘痙痛痞痢痣痩痰痲痳痴痹痺痼痾痿瘁瘉瘋瘍瘟瘠瘡瘢瘤瘧瘰瘴瘻療癆癇癈癌癒癖癘癜癡癢癧癨癩癪癬癰癲癶癸発登發白百皀皃的皆皇皈皋皎皐皓皖皙皚皮皰皴皷皸皹皺皿盂盃盆盈益盍盒盖盗盛盜盞盟盡監盤盥盧盪目盲直相盻盾省眄眇眈眉看県眛眞真眠眤眥眦眩眷眸眺眼着睇睚睛睡督睥睦睨睪睫睹睾睿瞋瞎瞑瞞瞠瞥瞬瞭瞰瞳瞶瞹瞻瞼瞽瞿矇矍矗矚矛矜矢矣知矧矩短矮矯石矼砂砌砒研砕砠砥砦砧砲破砺砿硅硏硝硫硬硯硲硴硼碁碆碇碌碍碎碑碓碕碗碚碣碧碩碪碯碵確碼碾磁磅磆磊磋磐磑磔磚磧磨磬磯磴磽礁礇礎礑礒礙礦礪礫礬示礼社祀祁祇祈祉祐祓祕祖祗祚祝神祟祠祢祥票祭祷祺祿禀禁禄禅禊禍禎福禝禦禧禪禮禰禱禳禹禺禽禾禿秀私秉秋科秒秕秘租秡秣秤秦秧秩秬称移稀稅稈程稍税稔稗稘稙稚稜稟稠種稱稲稷稻稼稽稾稿穀穂穃穆穉積穎穏穐穗穡穢穣穩穫穰穴究穹空穽穿突窃窄窈窒窓窕窖窗窘窟窩窪窮窯窰窶窺窿竃竄竅竇竈竊立竍竏竒竓竕站竚竜竝竟章竡竢竣童竦竪竭端竰競竸竹竺竿笂笄笆笈笊笋笏笑笘笙笛笞笠笥符笨第笳笵笶笹筅筆筈等筋筌筍筏筐筑筒答策筝筥筧筬筮筰筱筴筵筺箆箇箋箍箏箒箔箕算箘箙箚箜箝箟管箪箭箱箴箸節篁範篆篇築篋篌篏篝篠篤篥篦篩篭篳篶篷簀簇簍簑簒簓簔簗簞簟簡簣簧簪簫簷簸簽簾簿籀籃籌籍籏籐籔籖籘籟籠籤籥籬米籵籾粁粂粃粉粋粍粐粒粕粗粘粛粟粡粢粤粥粧粨粫粭粮粱粲粳粹粽精糀糂糅糊糎糒糓糖糘糜糞糟糠糢糧糯糲糴糶糸糺系糾紀紂約紅紆紊紋納紐純紕紗紘紙級紛紜素紡索紫紬紮累細紲紳紵紹紺紿終絃組絅絆絋経絎絏結絕絖絛絞絡絢絣給絨絮統絲絳絵絶絹絽綁綉綏經継続綛綜綟綠綢綣綫綬維綮綯綰綱網綴綵綸綺綻綽綾綿緃緇緊緋総緑緒緕緖緘線緜緝緞締緡緣緤編緩緬緯緲練緻縁縄縅縉縊縋縒縛縞縟縡縢縣縦縫縮縱縲縵縷縹縺縻總績繁繃繆繊繋繍織繕繖繙繚繝繞繡繦繧繩繪繫繭繰繹繻繼繽繿纂纃纈纉續纎纏纐纒纓纔纖纛纜缶缸缺缼罅罌罍罎罐网罔罕罘罟罠罧罨罩罪罫置罰署罵罷罸罹羂羃羅羆羇羈羊羌美羔羚羝羞羣群羨義羮羯羲羶羸羹羽翁翅翆翊翌習翔翕翠翡翦翩翫翰翳翹翻翼耀老考耄者耆耋而耐耒耕耗耘耙耜耡耨耳耶耻耽耿聆聊聒聖聘聚聞聟聡聢聨聯聰聲聳聴聶職聹聽聾聿肄肅肆肇肉肋肌肓肖肘肚肛肝股肢肥肩肪肬肭肯肱育肴肺胃胄胆背胎胖胙胚胛胝胞胡胤胥胯胱胴胸胼能脂脅脆脇脈脉脊脚脛脣脩脫脯脱脳脹脾腆腋腎腐腑腓腔腕腟腥腦腫腮腰腱腴腸腹腺腿膀膂膃膈膊膏膓膕膚膜膝膠膣膤膨膩膰膳膵膸膺膽膾膿臀臂臆臈臉臍臑臓臘臙臚臟臠臣臥臧臨自臭至致臺臻臼臾舁舂舅與興舉舊舌舍舎舐舒舖舗舘舛舜舞舟舩航舫般舮舳舵舶舷舸船艀艇艘艙艚艝艟艢艤艦艨艪艫艮良艱色艶艷艸艾芋芍芒芙芝芟芥芦芫芬芭芯花芳芸芹芻芽苅苑苒苓苔苗苙苛苜苞苟苡苣若苦苧苫英苳苴苹苺苻茂范茄茅茆茉茎茖茗茘茜茣茨茫茯茱茲茴茵茶茸茹荀荅草荊荏荐荒荘荳荵荷荻荼莅莇莉莊莎莓莖莚莞莟莠莢莨莪莫莱莵莽菁菅菊菌菎菓菖菘菜菟菠菩菪菫華菰菱菲菴菷菻菽萃萄萇萊萋萌萍萎萓萠萢萩萪萬萱萵萸萼落葆葉葎著葛葡葢董葦葩葫葬葭葮葯葱葵葷葹葺蒂蒄蒋蒐蒔蒙蒜蒟蒡蒭蒲蒸蒹蒻蒼蒿蓁蓄蓆蓉蓊蓋蓍蓐蓑蓖蓙蓚蓬蓮蓴蓼蓿蔀蔆蔑蔓蔔蔕蔗蔘蔚蔟蔡蔣蔦蔬蔭蔵蔽蕀蕁蕃蕈蕉蕊蕋蕎蕕蕗蕘蕚蕣蕨蕩蕪蕭蕷蕾薀薄薇薈薊薐薑薔薗薙薛薜薤薦薨薩薪薫薬薮薯薰薹薺藁藉藍藏藐藕藜藝藤藥藩藪藷藹藺藻藾蘂蘆蘇蘊蘋蘓蘖蘗蘚蘢蘭蘯蘰蘿虍虎虐虔處虚虛虜虞號虧虫虱虹虻蚊蚋蚌蚓蚕蚣蚤蚩蚪蚫蚯蚰蚶蛄蛆蛇蛉蛋蛍蛎蛔蛙蛛蛞蛟蛤蛩蛬蛭蛮蛯蛸蛹蛻蛾蜀蜂蜃蜆蜈蜉蜊蜍蜑蜒蜘蜚蜜蜥蜩蜴蜷蜻蜿蝉蝋蝌蝎蝓蝕蝗蝙蝟蝠蝣蝦蝨蝪蝮蝴蝶蝸蝿螂融螟螢螩螫螯螳螺螻螽蟀蟄蟆蟇蟋蟐蟒蟠蟬蟯蟲蟶蟷蟹蟻蟾蠅蠍蠎蠏蠑蠕蠖蠟蠡蠢蠣蠧蠱蠶蠹蠻血衂衄衆行衍衒術街衙衛衝衞衡衢衣表衫衰衲衵衷衽衾衿袁袂袈袋袍袒袖袗袙袞袢袤袪被袮袰袱袴袵袷袿裁裂裃裄装裏裔裕裘裙補裝裟裡裨裲裳裴裸裹裼製裾褂褄複褊褌褐褒褓褝褞褥褪褫褶褸褻襁襃襄襌襍襖襞襟襠襤襦襪襭襯襲襴襷襾西要覃覆覇覈覊見規覓視覗覘覚覡覦覧覩親覬覯覲観覺覽覿觀角觚觜觝解触觧觴觸言訂訃計訊訌討訐訓訖託記訛訝訟訣訥訪設許訳訴訶診註証詁詆詈詐詑詒詔評詛詞詠詢詣試詩詫詬詭詮詰話該詳詼誂誄誅誇誉誌認誑誓誕誘誚語誠誡誣誤誥誦誨說説読誰課誹誼調諂諄談請諌諍諏諒論諚諛諜諞諠諡諢諤諦諧諫諭諮諱諳諷諸諺諾謀謁謂謄謇謌謎謐謔謖謗謙謚講謝謠謡謦謨謫謬謳謹謾譁譃證譌譎譏譖識譚譛譜譟警譫譬譯議譱譲譴護譽讀讃變讌讎讐讒讓讖讙讚谷谺谿豁豆豈豊豌豎豐豕豚象豢豪豫豬豸豹豺豼貂貅貉貊貌貍貎貔貘貝貞負財貢貧貨販貪貫責貭貮貯貰貲貳貴貶買貸費貼貽貿賀賁賂賃賄資賈賊賍賎賑賓賚賛賜賞賠賢賣賤賦質賭賴賺賻購賽贄贅贇贈贊贋贍贏贐贓贔贖赤赦赧赫赭走赱赳赴起趁超越趙趣趨足趺趾跂跋跌跏跖跚跛距跟跡跣跨跪跫路跳践跼跿踈踉踊踏踐踝踞踟踪踰踴踵蹂蹄蹇蹈蹉蹊蹌蹐蹕蹙蹟蹠蹣蹤蹲蹴蹶蹼躁躄躅躇躊躋躍躑躓躔躙躡躪身躬躯躰躱躾軅軆軈車軋軌軍軒軛軟転軣軫軸軻軼軽軾較輅載輊輌輒輓輔輕輙輛輜輝輟輦輩輪輯輳輸輹輻輾輿轂轄轅轆轉轌轍轎轗轜轟轡轢轣轤辛辜辞辟辣辧辨辭辮辯辰辱農辷辺辻込辿迂迄迅迎近返迚迠迢迥迦迩迪迫迭迯述迴迷迸迹迺追退送逃逅逆逋逍逎透逐逑逓途逕逖逗這通逝逞速造逡逢連逧逮週進逵逶逸逹逼逾遁遂遅遇遉遊運遍過遏遐遑遒道達違遖遘遙遜遞遠遡遣遥遨適遭遮遯遲遵遶遷選遺遼遽避邀邁邂邃還邇邉邊邏邑那邦邨邪邯邱邵邸郁郊郎郛郞郡郢郤部郭郵郷都鄂鄒鄕鄙鄭鄰鄲酉酊酋酌配酎酒酔酖酘酢酣酥酩酪酬酲酳酵酷酸醂醇醉醋醍醐醒醗醜醢醤醪醫醬醯醴醵醸醺釀釁釆采釈釉釋里重野量釐金釖釘釛釜針釟釡釣釦釧釵釶釼釿鈍鈎鈑鈔鈕鈞鈩鈬鈴鈶鈷鈿鉄鉅鉈鉉鉋鉐鉗鉚鉛鉞鉢鉤鉦鉱鉾銀銃銅銈銑銓銕銖銘銚銛銜銭銳銷銹鋏鋒鋤鋩鋪鋭鋲鋳鋸鋺鋼錄錆錏錐錘錙錚錠錢錣錦錨錫錬錮錯録錵錺錻鍄鍊鍋鍍鍔鍖鍛鍜鍠鍬鍮鍵鍼鍾鎌鎔鎖鎗鎚鎧鎬鎭鎮鎰鎹鏃鏈鏐鏑鏖鏗鏘鏝鏡鏤鏥鏨鐃鐇鐐鐓鐔鐘鐙鐚鐡鐫鐵鐶鐸鐺鑁鑄鑑鑒鑓鑚鑛鑞鑠鑢鑪鑰鑵鑷鑼鑽鑾鑿钁長門閂閃閇閉閊開閏閑間閔閖閘閙閠関閣閤閥閧閨閭閱閲閹閻閼閾闃闇闊闌闍闔闕闖闘關闡闢闥阜阡阨阪阮阯防阻阿陀陂附陋陌降陏限陛陜陝陞陟院陣除陥陦陪陬陰陲陳陵陶陷陸険陽隅隆隈隊隋隍階随隔隕隗隘隙際障隠隣隧隨險隰隱隲隴隶隷隸隹隻隼雀雁雄雅集雇雉雋雌雍雎雑雕雖雙雛雜離難雨雪雫雰雲零雷雹電需霄霆震霈霊霍霎霏霑霓霖霙霜霞霤霧霪霰露霸霹霽霾靂靄靆靈靉靑青靖静靜非靠靡面靤靦靨革靫靭靱靴靹靺靼鞁鞄鞅鞆鞋鞍鞏鞐鞘鞜鞠鞣鞦鞨鞫鞭鞳鞴韃韆韈韋韓韜韭韮韲音韵韶韻響頁頂頃項順須頌頏預頑頒頓頗領頚頡頤頬頭頴頷頸頻頼頽顆顋題額顎顏顔顕願顚顛類顧顫顯顰顱顳顴風颪颯颱颶飃飄飆飛飜食飢飩飫飭飮飯飲飴飼飽飾餃餅餉養餌餐餒餓餔餘餝餞餠餡餤館餬餮餽餾饂饅饉饋饌饐饑饒饕饗首馗馘香馥馨馬馭馮馳馴馼駁駄駅駆駈駐駑駒駕駘駛駝駟駢駭駮駱駲駸駻駿騁騅騎騏騒験騙騨騫騰騷騾驀驂驃驅驍驒驕驗驚驛驟驢驤驥驩驪驫骨骭骰骸骼髀髄髏髑髓體高髞髟髢髣髦髪髫髭髮髯髱髴髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬱鬲鬻鬼魁魂魃魄魅魍魎魏魑魔魘魚魯魴鮃鮎鮑鮒鮓鮖鮗鮟鮠鮨鮪鮫鮭鮮鮴鮹鯀鯆鯉鯊鯏鯑鯒鯔鯖鯛鯡鯢鯣鯤鯨鯰鯱鯲鯵鰄鰆鰈鰉鰊鰌鰍鰐鰒鰓鰔鰕鰛鰡鰤鰥鰭鰮鰯鰰鰲鰹鰺鰻鰾鱆鱇鱈鱒鱗鱚鱠鱧鱶鱸鳥鳧鳩鳫鳬鳰鳳鳴鳶鴃鴆鴇鴈鴉鴎鴒鴕鴛鴟鴣鴦鴨鴪鴫鴬鴻鴾鴿鵁鵄鵆鵈鵐鵑鵙鵜鵝鵞鵠鵡鵤鵬鵯鵲鵺鶇鶉鶏鶚鶤鶩鶫鶯鶲鶴鶸鶺鶻鷁鷂鷄鷆鷏鷓鷙鷦鷭鷯鷲鷸鷹鷺鷽鸚鸛鸞鹵鹸鹹鹼鹽鹿麁麈麋麌麑麒麓麕麗麝麟麥麦麩麪麭麴麸麹麺麻麼麾麿黃黄黌黍黎黏黐黑黒黔默黙黛黜黝點黠黥黨黯黴黶黷黹黻黼黽鼇鼈鼎鼓鼕鼠鼡鼬鼻鼾齊齋齎齏齒齔齟齠齡齢齣齦齧齪齬齲齶齷龍龕龜龝龠蘭朗寧旅蓮連廉惡類隆糖塚晴凞猪益神祥福靖精羽諸都飯飼館鶴僧免勉勤卑嘆器塀墨層悔慨懲敏既梅海漢琢社祉祈祐祖祝禎穀突節練繁署者臭著褐視謁謹賓贈逸難響頻﹣！＃＄％＆（）＊＋，－．／：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［］＿ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～￥𢌞￣〽◯│‾•◇桅痧〱閩▢◦─㐧◑煠你蒅卄縀匾嗩瘀歒〖〗虬糕𤍽◎剉晡▼𦾔儋㢲珉撿瀹叚帕芎脘樝𠮷鯽‼㤙焻㙒︎芩＼焮刕刁䕶怔";class Uy{constructor(){Ee(this,"session",null);Ee(this,"inputH",0);Ee(this,"inputW",0)}async init(t,r){this.session=await ni.create(t,{executionProviders:["wasm"],graphOptimizationLevel:"all"}),this.inputH=r.inputShape[2],this.inputW=r.inputShape[3]}async read(t){if(!this.session)throw new Error("PARSeq session not initialized");const r=zy(t,this.inputW,this.inputH,!0),i=Oy(r.data,this.inputH,this.inputW),n=Uf(i,this.inputH,this.inputW,3),s=new Pe("float32",n,[1,3,this.inputH,this.inputW]),a=this.session.inputNames[0],o=await this.session.run({[a]:s}),l=this.session.outputNames[0],d=o[l],c=d.dims,h=c[1],f=c[2],y=d.data,_=My(y,h,f);let w="";for(let S=0;S<h;S++){const v=_[S];if(v===0)break;v-1>=0&&v-1<jd.length&&(w+=jd[v-1])}return w}dispose(){var t;(t=this.session)==null||t.release(),this.session=null}}function Me(e,t={},r=[]){return{tag:e,attrs:t,children:r}}function Ly(e,t,r){const i=r.length;let n=!1,s=r[0][0],a=r[0][1];for(let o=1;o<=i;o++){const l=r[o%i][0],d=r[o%i][1];if(Math.min(a,d)<t&&t<=Math.max(a,d)&&e<=Math.max(s,l)&&a!==d){const c=(t-a)*(l-s)/(d-a)+s;(s===l||e<=c)&&(n=!n)}s=l,a=d}for(let o=0;o<i;o++){const l=r[o][0],d=r[o][1],c=r[(o+1)%i][0],h=r[(o+1)%i][1];if(d===h&&d===t&&Math.min(l,c)<=e&&e<=Math.max(l,c)||l===c&&l===e&&Math.min(d,h)<=t&&t<=Math.max(d,h))return 0}return n?1:-1}function qy(e,t,r){const i=r.length;let n=!1,s=1/0,a=r[0][0],o=r[0][1];for(let l=1;l<=i;l++){const d=r[l%i][0],c=r[l%i][1];if(Math.min(o,c)<t&&t<=Math.max(o,c)&&e<=Math.max(a,d)&&o!==c){const y=(t-o)*(d-a)/(c-o)+a;(a===d||e<=y)&&(n=!n)}const h=(d-a)**2+(c-o)**2;let f;if(h===0)f=Math.hypot(e-a,t-o);else{let y=((e-a)*(d-a)+(t-o)*(c-o))/h;y=Math.max(0,Math.min(1,y)),f=Math.hypot(e-(a+y*(d-a)),t-(o+y*(c-o)))}f<s&&(s=f),a=d,o=c}return n?s:-s}function Wy(e,t=5){const r=[];for(const i of e){const[n,s,a,o]=i;a-n<t&&o-s<t||r.push({points:[[n,s],[n,o],[a,o],[a,s]]})}return r}function Kd(e,t){let r,i;if(Array.isArray(t)&&typeof t[0]=="number"){const n=t;r=(n[0]+n[2])/2,i=(n[1]+n[3])/2}else{const n=t,s=n.points.map(o=>o[0]),a=n.points.map(o=>o[1]);r=(Math.min(...s)+Math.max(...s))/2,i=(Math.min(...a)+Math.max(...a))/2}return e[0]<=r&&r<=e[2]&&e[1]<=i&&i<=e[3]}function Fr(e){let t=1/0,r=1/0,i=-1/0,n=-1/0;for(const[s,a]of e.points)s<t&&(t=s),a<r&&(r=a),s>i&&(i=s),a>n&&(n=a);return[t,r,i-t,n-r]}function Gy(e,t,r,i=.1){r.indexOf("text_block");const n=r.indexOf("block_ad"),s=r.indexOf("block_table"),a=t.map(()=>[]),o=(e[n]??[]).map(()=>[]),l=(e[s]??[]).map(()=>[]),d=[];for(let c=0;c<r.length;c++){if(!r[c].startsWith("line_"))continue;const h=e[c]??[];for(let f=0;f<h.length;f++){const y=h[f];if(y[4]<i)continue;let _=!1;for(let w=0;w<t.length;w++){if(t[w]===null){a[w]=null;continue}const S=(y[0]+y[2])/2,v=(y[1]+y[3])/2;if(Ly(S,v,t[w].points)>=0){a[w].push([c,f]),_=!0;break}}if(!_){for(let w=0;w<(e[n]??[]).length;w++)if(Kd(e[n][w],y)){o[w].push([c,f]),_=!0;break}}if(!_){for(let w=0;w<(e[s]??[]).length;w++)if(Kd(e[s][w],y)){l[w].push([c,f]),_=!0;break}}_||d.push([c,f])}}return[a,o,l,d]}function Vy(e,t,r,i=50){const n=r.indexOf("text_block");for(let s=0;s<e.length;s++)if(!(e[s]===null||t[s]===null))for(let a=0;a<e.length;a++){if(s===a||e[a]===null||t[a]===null)continue;let o=!0;for(const l of e[s].points)if(qy(l[0],l[1],e[a].points)<-i){o=!1;break}if(o){if(t[s].length===0)t[a].push([n,s]),t[s]=null;else{for(const l of t[s])t[a].push(l);t[s]=null}break}}for(let s=0;s<t.length;s++){if(t[s]===null)continue;let a=!0;for(const[o]of t[s])if(o!==n){a=!1;break}a&&(t[s]=[])}return t}function Hy(e,t,r,i,n=.1,s=5){var C;const a=Ry,o=a.indexOf("text_block"),l=a.indexOf("block_ad"),d=a.indexOf("block_table"),c=a.map(()=>[]),h=[[]];for(const E of i){const[z,$,O,N]=E.box;E.classIndex===0&&h[0].push([z,$,O,N]),(C=c[E.classIndex])==null||C.push([z,$,O,N,E.confidence])}const f=Wy(h[0],s);let[y,_,w,S]=Gy(c,f,a,n);y=Vy(f,y,a,50);const v=Me("PAGE",{IMAGENAME:r,WIDTH:String(e),HEIGHT:String(t)});function b(E,z,$,O){const N=Math.round(z[0]),P=Math.round(z[1]),V=Math.round(z[2]-z[0]),H=Math.round(z[3]-z[1]);return Me("LINE",{TYPE:Wt(a[E]),X:String(N),Y:String(P),WIDTH:String(V),HEIGHT:String(H),CONF:$.toFixed(3),PRED_CHAR_CNT:O.toFixed(3)})}function I(E){var P;const z=f[E],$=((P=c[o][E])==null?void 0:P[4])??0,O=z.points.map(V=>`${V[0]},${V[1]}`).join(","),N=Me("SHAPE",{},[Me("POLYGON",{POINTS:O})]);return Me("TEXTBLOCK",{CONF:$.toFixed(3)},[N])}function T(E,z){for(const[$,O]of z){const N=c[$][O],P=N[4];if(P<n)continue;const V=N.length>=6?N[5]:0;if($===o){const[H,M,F,K]=Fr(f[O]);F>=s&&K>=s&&E.children.push(Me("LINE",{TYPE:Wt(a[1]),X:String(Math.round(H)),Y:String(Math.round(M)),WIDTH:String(Math.round(F)),HEIGHT:String(Math.round(K)),CONF:P.toFixed(3),PRED_CHAR_CNT:V.toFixed(3)}))}else E.children.push(b($,N,P,V))}}for(let E=0;E<(c[d]??[]).length;E++){if(w[E]===null)continue;const z=c[d][E],$=Me("BLOCK",{TYPE:"表組",X:String(Math.round(z[0])),Y:String(Math.round(z[1])),WIDTH:String(Math.round(z[2]-z[0])),HEIGHT:String(Math.round(z[3]-z[1])),CONF:z[4].toFixed(3)});for(const[O,N]of w[E])if(O===o){if(y[N]===null)continue;if(y[N].length===0){const[P,V,H,M]=Fr(f[N]);H>=s&&M>=s&&$.children.push(Me("LINE",{TYPE:Wt(a[0]),X:String(Math.round(P)),Y:String(Math.round(V)),WIDTH:String(Math.round(H)),HEIGHT:String(Math.round(M))}))}else T($,y[N]);y[N]=null}else{const P=c[O][N];if(P[4]<n)continue;$.children.push(b(O,P,P[4],P.length>=6?P[5]:0))}v.children.push($)}for(let E=0;E<(c[l]??[]).length;E++){if(_[E]===null)continue;const z=c[l][E],$=Me("BLOCK",{TYPE:"広告",X:String(Math.round(z[0])),Y:String(Math.round(z[1])),WIDTH:String(Math.round(z[2]-z[0])),HEIGHT:String(Math.round(z[3]-z[1])),CONF:z[4].toFixed(3)});for(const[O,N]of _[E])if(O===o){if(y[N]===null)continue;const P=I(N);if(y[N].length===0){const[V,H,M,F]=Fr(f[N]);M>=s&&F>=s&&P.children.push(Me("LINE",{TYPE:Wt(a[0]),X:String(Math.round(V)),Y:String(Math.round(H)),WIDTH:String(Math.round(M)),HEIGHT:String(Math.round(F))}))}else T(P,y[N]);$.children.push(P),y[N]=null}else{const P=c[O][N];if(P[4]<n)continue;$.children.push(b(O,P,P[4],P.length>=6?P[5]:0))}v.children.push($)}for(let E=0;E<y.length;E++){if(y[E]===null||f[E]===null)continue;const z=I(E);if(y[E].length===0){const[$,O,N,P]=Fr(f[E]);N>=s&&P>=s&&z.children.push(Me("LINE",{TYPE:Wt(a[1]),X:String(Math.round($)),Y:String(Math.round(O)),WIDTH:String(Math.round(N)),HEIGHT:String(Math.round(P))}))}else T(z,y[E]);v.children.push(z)}for(const[E,z]of S){const $=c[E][z];$[4]<n||v.children.push(b(E,$,$[4],$.length>=6?$[5]:0))}for(let E=0;E<a.length;E++)if(a[E].startsWith("block_")&&a[E]!=="block_table")for(const z of c[E]??[])z[4]<n||v.children.push(Me("BLOCK",{TYPE:Wt(a[E]),X:String(Math.round(z[0])),Y:String(Math.round(z[1])),WIDTH:String(Math.round(z[2]-z[0])),HEIGHT:String(Math.round(z[3]-z[1])),CONF:z[4].toFixed(3)}));return v}function ii(e,t){const r=[];function i(n){n.tag===t&&r.push(n);for(const s of n.children)i(s)}return i(e),r}function qf(e,t){for(const r of e.children){if(r===t)return e;const i=qf(r,t);if(i)return i}return null}class Wf{constructor(t,r,i,n,s){Ee(this,"x0");Ee(this,"y0");Ee(this,"x1");Ee(this,"y1");Ee(this,"parent");Ee(this,"children",[]);Ee(this,"lineIdx",[]);Ee(this,"numLines",0);Ee(this,"numVerticalLines",0);this.x0=Math.floor(t),this.y0=Math.floor(r),this.x1=Math.floor(i),this.y1=Math.floor(n),this.parent=s}getCoords(){return[this.x0,this.y0,this.x1,this.y1]}isXSplit(){const[,t,,r]=this.getCoords();for(const i of this.children){const[,n,,s]=i.getCoords();if(t!==n||r!==s)return!1}return!0}isVertical(){return this.numLines<this.numVerticalLines*2}}function Yd(e){if(e.length<=1)return[0,1,0];let t=1/0,r=-1/0;for(let l=0;l<e.length;l++)e[l]<t&&(t=e[l]),e[l]>r&&(r=e[l]);let i=0,n=0,s=0,a=-1;for(let l=0;l<=e.length;l++)if(l<e.length&&e[l]===t)a<0&&(a=l);else if(a>=0){const d=l-a;d>s&&(s=d,i=a,n=l),a=-1}const o=r>0?-t/r:0;return[i,n,o]}function Fy(e,t,r,i,n,s){const a=new Float64Array(n-r),o=new Float64Array(s-i);for(let l=i;l<s;l++)for(let d=r;d<n;d++){const c=e[l*t+d];a[d-r]+=c,o[l-i]+=c}return[a,o]}function Ht(e,t,r,i,n,s,a){if(i=i??e.x0,n=n??e.y0,s=s??e.x1,a=a??e.y1,!(i<s&&n<a))return;const[o,l,d,c]=e.getCoords();if(i===o&&n===l&&s===d&&a===c)return;const h=new Wf(i,n,s,a,e);e.children.push(h),Gf(t,r,h)}function Xd(e,t,r,i,n){Ht(e,t,r,void 0,void 0,i,void 0),Ht(e,t,r,i,void 0,n,void 0),Ht(e,t,r,n,void 0,void 0,void 0)}function Qd(e,t,r,i,n){Ht(e,t,r,void 0,void 0,void 0,i),Ht(e,t,r,void 0,i,void 0,n),Ht(e,t,r,void 0,n,void 0,void 0)}function Gf(e,t,r){const[i,n,s,a]=r.getCoords(),[o,l]=Fy(e,t,i,n,s,a);let[d,c,h]=Yd(o),[f,y,_]=Yd(l);d+=i,c+=i,f+=n,y+=n,!(i===d&&s===c&&n===f&&a===y)&&(_<h?Xd(r,e,t,d,c):h<_||c-d<y-f?Qd(r,e,t,f,y):Xd(r,e,t,d,c))}function jy(e){return 100*Math.sqrt(e)}function Ky(e,t){const r=e.length,i=e.map(f=>[...f]);for(let f=0;f<r;f++)i[f][0]>=i[f][2]&&(i[f][2]=i[f][0]),i[f][1]>=i[f][3]&&(i[f][3]=i[f][1]);let n=1/0,s=1/0,a=-1/0,o=-1/0;for(let f=0;f<r;f++)i[f][0]<n&&(n=i[f][0]),i[f][1]<s&&(s=i[f][1]),i[f][2]>a&&(a=i[f][2]),i[f][3]>o&&(o=i[f][3]);const l=a-n,d=o-s;if(l<=0||d<=0)return i;const c=l<d?t:t*(l/d),h=d<l?t:t*(d/l);for(let f=0;f<r;f++)i[f][0]=Math.max(0,Math.floor((i[f][0]-n)*c/l)),i[f][1]=Math.max(0,Math.floor((i[f][1]-s)*h/d)),i[f][2]=Math.max(0,Math.floor((i[f][2]-n)*c/l)),i[f][3]=Math.max(0,Math.floor((i[f][3]-s)*h/d));return i}function Yy(e){let t=0,r=0;for(const n of e)n[2]+1>t&&(t=n[2]+1),n[3]+1>r&&(r=n[3]+1);const i=new Int32Array(r*t);for(const n of e)for(let s=n[1];s<n[3];s++)for(let a=n[0];a<n[2];a++)i[s*t+a]=1;return[i,t]}function Vf(e,t,r){for(const i of e.lineIdx)t[i]=r,r++;for(const i of e.children)r=Vf(i,t,r);return r}function Xy(e,t){const r=[];for(const i of t){const n=Math.max(e[0],i[0]),s=Math.max(e[1],i[1]),a=Math.min(e[2],i[2]),o=Math.min(e[3],i[3]),l=Math.max(0,a-n+1)*Math.max(0,o-s+1),d=(e[2]-i[0]+1)*(e[3]-i[1]+1),c=(i[2]-e[0]+1)*(i[3]-e[1]+1),h=d+c-l;r.push(h>0?l/h:0)}return r}function Qy(e){const t=[],r=[];function i(n,s){n.children.length===0&&(t.push(n.getCoords()),r.push([...s]));for(let a=0;a<n.children.length;a++)i(n.children[a],[...s,a])}return i(e,[]),[r,t]}function Zy(e,t){let r=e;for(const i of t)r=r.children[i];return r}function Jy(e,t){const[r,i]=Qy(e);for(let n=0;n<t.length;n++){const s=Xy(t[n],i);let a=0,o=-1/0;for(let l=0;l<s.length;l++)(s[l]>o||isNaN(o)&&!isNaN(s[l]))&&(o=s[l],a=l);Zy(e,r[a]).lineIdx.push(n)}}function Hf(e,t){if(e.lineIdx.length>0){let r=0;for(const i of e.lineIdx){const n=t[i][2]-t[i][0],s=t[i][3]-t[i][1];n<s&&r++}if(e.numLines=e.lineIdx.length,e.numVerticalLines=r,e.lineIdx.length>1){const i=e.isVertical(),n=[...e.lineIdx].sort((s,a)=>{if(i){const o=-t[s][0]+t[a][0];return o!==0?o:t[s][1]-t[a][1]}else{const o=t[s][1]-t[a][1];return o!==0?o:t[s][0]-t[a][0]}});e.lineIdx=n}}else{for(const r of e.children){const[i,n]=Hf(r,t);e.numLines+=i,e.numVerticalLines+=n}e.isXSplit()&&e.isVertical()&&e.children.reverse()}return[e.numLines,e.numVerticalLines]}function e_(e){if(e.length===0)return[];const t=jy(e.length),r=Ky(e,t),[i,n]=Yy(r);let s=0,a=0;for(const d of r)d[2]+1>s&&(s=d[2]+1),d[3]+1>a&&(a=d[3]+1);const o=new Wf(0,0,s,a,null);Gf(i,n,o),Jy(o,r),Hf(o,r);const l=new Array(e.length).fill(-1);return Vf(o,l,0),l}function t_(e,t){let r=1/0,i=null;const n=new Uint8Array(t);function s(a,o,l){if(!(l>=r)){if(o.length===t){a===t-1&&l<r&&(r=l,i=[...o]);return}for(const d of e[a])n[d.to]||(n[d.to]=1,o.push(d.to),s(d.to,o,l+d.weight),o.pop(),n[d.to]=0)}}return n[0]=1,s(0,[0],0),[i,r]}function Zd(e){const t=parseFloat(e.attrs.WIDTH),r=parseFloat(e.attrs.HEIGHT),i=Math.sqrt(t*t+r*r);function n(s){const a=[],o=[];for(const w of s.children)if(w.tag==="TEXTBLOCK"){const S=[];let v=!0,b=[0,0],I=[0,0];for(const C of w.children){if(C.tag!=="LINE")continue;const E=parseFloat(C.attrs.ORDER??"NaN");S.push(E);const z=parseFloat(C.attrs.X??"NaN"),$=parseFloat(C.attrs.Y??"NaN"),O=parseFloat(C.attrs.WIDTH??"NaN"),N=parseFloat(C.attrs.HEIGHT??"NaN");v&&(b=[z+O/2,$],v=!1),I=[z+O/2,$+N]}if(S.length===0)continue;const T=S[Math.floor(S.length/2)];a.push([T,b,I,w])}else if(w.tag==="LINE"){const S=parseFloat(w.attrs.ORDER??"NaN"),v=parseFloat(w.attrs.X??"NaN"),b=parseFloat(w.attrs.Y??"NaN"),I=parseFloat(w.attrs.WIDTH??"NaN"),T=parseFloat(w.attrs.HEIGHT??"NaN"),C=[v+I/2,b],E=[v+I/2,b+T];a.push([S,C,E,w])}else w.tag==="BLOCK"&&n(w),o.push(w);const l=a.length;if(l<=0)return;const d=a.map(w=>w[0]),c=Math.max(...d)-Math.min(...d);if(c<=0)return;function h(w,S){const[v,,b]=a[w],[I,T]=a[S],C=Math.abs(v-I)/c,E=T[0]-b[0],z=T[1]-b[1];return Math.sqrt(E*E+z*z)/i+C}const f=Array.from({length:l},()=>[]),y=l<20?3:2;for(let w=1;w<y;w++)for(let S=0;S<l-w;S++)f[S].push({to:S+w,weight:h(S,S+w)}),f[S+w].push({to:S,weight:h(S+w,S)});const[_]=t_(f,l);_&&(s.children=[..._.map(w=>a[w][3]),...o])}n(e)}function r_(e){if(e.tag==="PAGE")Zd(e);else for(const t of e.children)t.tag==="PAGE"&&Zd(t)}function i_(e){const t=parseInt(e.attrs.X),r=parseInt(e.attrs.Y),i=parseInt(e.attrs.WIDTH),n=parseInt(e.attrs.HEIGHT);return[t,r,t+i,r+n]}function Jd(e,t,r,i){return i<e?0:r<e?i-e:i<t?i-r:r<t?t-r:0}function n_(e,t){return Jd(e[0],e[2],t[0],t[2])*Jd(e[1],e[3],t[1],t[3])}function a_(e){let t=1/0,r=1/0,i=-1/0,n=-1/0;for(const[s,a,o,l]of e)s<t&&(t=s),a<r&&(r=a),o>i&&(i=o),l>n&&(n=l);return[t,r,i,n]}function s_(e,t,r){const i=e.children.indexOf(r);i>=0&&e.children.splice(i,0,t)}function o_(e){function t(r){const i="__warichu_idx__";let n=0;function s(h){h.attrs[i]=String(n++);for(const f of h.children)s(f)}s(r);const a=[],o=ii(r,"LINE");for(const h of o){if(h.attrs.TYPE!=="割注")continue;const f=qf(r,h);if(!f)continue;const y=i_(h);a.push({bbox:[...y],bboxOrig:[...y],obj:h,parent:f,order:parseFloat(h.attrs.ORDER??"0")})}for(const h of a){const[f,y,_,w]=h.bbox,S=_-f,v=w-y;if(S<v){const I=S*.1;h.bbox=[f-I/2,y,_+I/2,w]}else{const I=v*.1;h.bbox=[f,y-I/2,_,w+I/2]}}const l=new Set,d=[];for(let h=0;h<a.length;h++){if(l.has(h))continue;const f=[a[h]];l.add(h);for(let y=0;y<a.length;y++)l.has(y)||n_(a[h].bbox,a[y].bbox)>0&&(f.push(a[y]),l.add(y));d.push(f)}for(const h of d){const f=h.map(E=>E.bboxOrig),[y,_,w,S]=a_(f),v=h.map(E=>E.order);v.sort((E,z)=>E-z);const b=v[Math.floor(v.length/2)],I=Me("WARICHUBLOCK",{X:String(y),Y:String(_),WIDTH:String(w-y),HEIGHT:String(S-_),ORDER:String(b)});for(const E of h)I.children.push(E.obj);let T=null,C=null;for(const E of h)if(E.parent.tag==="TEXTBLOCK"){T=E.parent,C=E.obj;break}if(!T&&h.length>0&&(T=h[0].parent,C=h[0].obj),T&&C){s_(T,I,C);for(const E of h){const z=E.parent.children.indexOf(E.obj);z>=0&&E.parent.children.splice(z,1)}}}function c(h){delete h.attrs[i];for(const f of h.children)c(f)}c(r)}if(e.tag==="PAGE")t(e);else for(const r of e.children)r.tag==="PAGE"&&t(r)}function u_(e){function t(r){const i=[];for(const n of r.children)if(t(n),n.tag==="WARICHUBLOCK")for(const s of n.children)i.push(s);else i.push(n);r.children=i}t(e)}function l_(e,t){o_(e),t(),u_(e)}function d_(e,t){const r=(e[2]-e[0])*(e[3]-e[1]),i=(t[2]-t[0])*(t[3]-t[1]),n=Math.max(e[0],t[0]),s=Math.max(e[1],t[1]),a=Math.min(e[2],t[2]),o=Math.min(e[3],t[3]),l=Math.max(0,a-n),d=Math.max(0,o-s),c=l*d,h=Math.min(r,i);return h>0&&c/h>.8}function Ff(e){const t=[],r=[];for(const i of e)if(i.tag==="LINE"||i.tag==="WARICHUBLOCK"){const n=parseFloat(i.attrs.WIDTH??"-1"),s=parseFloat(i.attrs.HEIGHT??"-1"),a=parseFloat(i.attrs.CONF??"-1"),o=parseFloat(i.attrs.X??"-1"),l=parseFloat(i.attrs.Y??"-1");if(t.length>0&&(t[t.length-1].tag==="LINE"||t[t.length-1].tag==="WARICHUBLOCK")){const d=r[r.length-1],c=[o,l,o+n,l+s],h=[d[0],d[1],d[2],d[3]];if(d_(h,c)){if(d[4]>=a)continue;t.pop(),r.pop()}}t.push(i),r.push([o,l,o+n,l+s,a])}else t.push(i);return t}function In(e){let t=0,r=0;const i=[],n=[],s=[],a=[];for(const _ of e.children)if(_.tag==="LINE"||_.tag==="WARICHUBLOCK"){const w=parseFloat(_.attrs.WIDTH??"-1"),S=parseFloat(_.attrs.HEIGHT??"-1");w<S&&t++,r++,s.push(w),a.push(S);const v=parseFloat(_.attrs.X??"-1"),b=parseFloat(_.attrs.Y??"-1"),I=parseFloat(_.attrs.ORDER??"NaN");i.push([v+w/2,b+S/2,I,_])}else n.push(_);if(s.length===0)return[e,-1];const o=r<t*2,l=o?[...s].sort((_,w)=>_-w):[...a].sort((_,w)=>_-w),c=l[Math.floor(l.length/2)]*.3;i.sort((_,w)=>{const[S,v]=_,[b,I]=w;return o?c<b-S?1:c<S-b?-1:v-I:c<v-I?1:c<I-v?-1:S-b});let h=i.map(_=>_[3]);h.length>0&&(h=Ff(h));const f=i.map(_=>_[2]).filter(_=>!isNaN(_)).sort((_,w)=>_-w),y=f.length>0?f[Math.floor(f.length/2)]:NaN;return e.children=[...h,...n],[e,y]}function jf(e){const t=[],r=[];for(const n of e.children)if(n.tag==="TEXTBLOCK"){for(const a of n.children)a.tag==="WARICHUBLOCK"&&In(a);const[,s]=In(n);t.push([s,n])}else if(n.tag==="LINE"){const s=parseFloat(n.attrs.ORDER??"NaN");t.push([s,n])}else if(n.tag==="WARICHUBLOCK"){const[,s]=In(n);t.push([s,n])}else(n.tag==="BLOCK"||n.tag==="PAGE")&&jf(n),r.push(n);t.sort((n,s)=>n[0]-s[0]);let i=t.map(n=>n[1]);i.length>0&&(i=Ff(i)),e.children=[...i,...r]}function p_(e,t=!0){l_(e,()=>{jf(e)}),t&&r_(e)}function c_(e,t=!0){const r=e.tag==="PAGE"?[e]:ii(e,"PAGE");for(const i of r){const n=ii(i,"LINE");if(n.length===0)continue;const s=n.map(o=>{const l=parseInt(o.attrs.X),d=parseInt(o.attrs.Y),c=parseInt(o.attrs.WIDTH),h=parseInt(o.attrs.HEIGHT);return[l,d,l+c,d+h]}),a=e_(s);for(let o=0;o<n.length;o++)n[o].attrs.ORDER=String(a[o]);p_(i,t)}}function ya(e){return new Promise((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)})}function h_(e,t){let r;const i=()=>{if(r)return r;const n=indexedDB.open(e);return n.onupgradeneeded=()=>n.result.createObjectStore(t),r=ya(n),r.then(s=>{s.onclose=()=>r=void 0},()=>{}),r};return(n,s)=>i().then(a=>s(a.transaction(t,n).objectStore(t)))}let Tn;function Kf(){return Tn||(Tn=h_("keyval-store","keyval")),Tn}function f_(e,t=Kf()){return t("readonly",r=>ya(r.get(e)))}function m_(e,t,r=Kf()){return r("readwrite",i=>(i.put(t,e),ya(i.transaction)))}async function ep(e,t,r){const i=await f_(t);if(i)return r==null||r(i.byteLength,i.byteLength),i;const n=await fetch(e);if(!n.ok)throw new Error(`Failed to fetch model: ${n.status} ${n.statusText}`);const s=Number(n.headers.get("Content-Length")??0),a=n.body.getReader(),o=[];let l=0;for(;;){const{done:f,value:y}=await a.read();if(f)break;o.push(y),l+=y.byteLength,r==null||r(l,s)}const d=new Uint8Array(l);let c=0;for(const f of o)d.set(f,c),c+=f.byteLength;const h=d.buffer;return await m_(t,h),h}let kt=null,Et=null,tp=null;function at(e){self.postMessage(e)}function g_(e){return Fd.find(t=>t.id===e)??Fd.find(t=>t.id===By)}async function Yf(e){const t=g_(e);if(tp===t.id&&kt&&Et){at({type:"init-done"});return}kt==null||kt.dispose(),Et==null||Et.dispose(),kt=new Py,Et=new Uy;const r=await ep(t.deim.url,t.deim.name,(n,s)=>at({type:"init-progress",model:"DEIM (検出)",loaded:n,total:s}));await kt.init(r,t.deim);const i=await ep(t.parseq.url,t.parseq.name,(n,s)=>at({type:"init-progress",model:"PARSeq (認識)",loaded:n,total:s}));await Et.init(i,t.parseq),tp=t.id,at({type:"init-done"})}async function y_(e,t){try{await Yf(t);const r=await ky(e),i=r.width,n=r.height,s=await kt.detect(r);at({type:"detect-done",numDetections:s.length});const a=Hy(i,n,"input.jpg",s),o=Me("OCRDATASET",{},[a]);c_(o,!0);const l=ii(a,"LINE"),d=l.length,c=[];for(let h=0;h<l.length;h++){const f=l[h],y=parseInt(f.attrs.X??"0"),_=parseInt(f.attrs.Y??"0"),w=parseInt(f.attrs.WIDTH??"0"),S=parseInt(f.attrs.HEIGHT??"0"),v=parseFloat(f.attrs.CONF??"0");if(w<=0||S<=0){c.push({text:"",x:y,y:_,w,h:S,conf:v});continue}const b=Cy(r,y,_,w,S),I=await Et.read(b);f.attrs.STRING=I,c.push({text:I,x:y,y:_,w,h:S,conf:v}),((h+1)%5===0||h===d-1)&&at({type:"recognize-progress",current:h+1,total:d})}at({type:"result",lines:c,detections:s,page:a})}catch(r){at({type:"error",message:r instanceof Error?r.message:String(r)})}}self.onmessage=async e=>{const t=e.data;if(t.type==="init")try{await Yf(t.presetId)}catch(r){at({type:"error",message:r instanceof Error?r.message:String(r)})}else t.type==="run"&&await y_(t.imageBlob,t.presetId)};
