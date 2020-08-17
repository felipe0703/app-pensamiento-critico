(this.webpackJsonppensamiento_critico_cliente=this.webpackJsonppensamiento_critico_cliente||[]).push([[0],{75:function(e,a,t){e.exports=t(96)},80:function(e,a,t){},96:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(66),o=t.n(n),s=(t(80),t(1)),m=t(67),c=t(44),d=t.n(c),u=(t(81),t(97),{apiKey:"AIzaSyBuJjjzVg6w_XTxi1tGV-A8oS8W0PyUlnE",authDomain:"pensamiento-critico.firebaseapp.com",databaseURL:"https://pensamiento-critico.firebaseio.com",projectId:"pensamiento-critico",storageBucket:"pensamiento-critico.appspot.com",messagingSenderId:"329133039386",appId:"1:329133039386:web:fe7874e4cc58d29a6f16a3",measurementId:"G-CPPVYRR6F7"}),i=new function e(){Object(m.a)(this,e),d.a.apps.length||d.a.initializeApp(u),this.db=d.a.firestore(),this.storage=d.a.storage()},b=Object(r.createContext)(),g=i,h=t(74),p=t(42),f=t(26),E=function(e){var a=e.challenge,t=Object(r.useRef)(a.status),n=Object(r.useContext)(b).firebase,o=a.id,s=a.name,m=a.description,c=a.image,d=a.status;return l.a.createElement("div",{className:"w-full px-3 mb-4"},l.a.createElement("div",{className:"p-5 shadow-md bg-white rounded-md"},l.a.createElement("div",{className:"lg:flex "},l.a.createElement("div",{className:"lg:w-5/12 xl:w-3/12"},l.a.createElement("img",{className:"rounded-md",src:c,alt:"Imagen del desaf\xedo"}),l.a.createElement("div",{className:"sm:flex sm:-mx-2 pl-2"},l.a.createElement("label",{className:"block mt-5 sm:w-2/4"},l.a.createElement("span",{className:"block text-gray-800 mb-2"},"Visualizaci\xf3n:"),l.a.createElement("select",{className:"bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline",value:d,ref:t,onChange:function(){return function(){var e="true"===t.current.value;try{n.db.collection("challenges").doc(o).update({status:e})}catch(a){console.log(a)}}()}},l.a.createElement("option",{value:"true"},"Activo"),l.a.createElement("option",{value:"false"},"Inactivo"))))),l.a.createElement("div",{className:"lg:w-7/12 xl:w-9/12 pl-5"},l.a.createElement("p",{className:"font-bold text-2xl text-yellow-600 mb-4"},s.toUpperCase()),l.a.createElement("p",{className:"text-gray-600 mb-4"},m)))))},x=function(){var e=Object(r.useState)([]),a=Object(p.a)(e,2),t=a[0],n=a[1],o=Object(r.useContext)(b).firebase;function s(e){var a=e.docs.map((function(e){return Object(h.a)({id:e.id},e.data())}));n(a)}return Object(r.useEffect)((function(){o.db.collection("challenges").onSnapshot(s)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"text-3xl font-bold text-gray-600 mb-4"},"Desaf\xedos"),l.a.createElement(f.b,{to:"/nuevo-desafio",className:"bg-blue-600 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold rounded-md"},"Agregar Desaf\xedo"),t.map((function(e){return l.a.createElement(E,{key:e.id,challenge:e})})))},v=t(60),N=t.n(v),w=t(68),_=t(73),y=t(71),C=t.n(y),B=t(8),k=function(){var e=Object(r.useState)(!1),a=Object(p.a)(e,2),t=a[0],n=a[1],o=Object(r.useState)(0),m=Object(p.a)(o,2),c=m[0],d=m[1],u=Object(r.useState)(""),i=Object(p.a)(u,2),g=i[0],h=i[1],f=Object(r.useContext)(b).firebase,E=Object(s.g)(),x=Object(_.a)({initialValues:{name:"",description:"",image:"",approach:"",thesis1:"",thesis2:"",arguments1_1:"",arguments1_2:"",arguments1_3:"",arguments1_4:"",arguments2_1:"",arguments2_2:"",arguments2_3:"",arguments2_4:""},validationSchema:B.a({name:B.b().min(3,"El nombre del desad\xedo debe tener como m\xednimo 3 caracteres").required("El nombre del desaf\xedo es obligatorio"),description:B.b().min(10,"La descripci\xf3n del desad\xedo debe tener como m\xednimo 10 caracteres").required("La descripci\xf3n del desaf\xedo es obligatoria"),approach:B.b().min(10,"El planteamiento del desad\xedo debe tener como m\xednimo 10 caracteres").required("El planteamiento del desaf\xedo es obligatorio"),thesis1:B.b().min(10,"La tesis del desad\xedo debe tener como m\xednimo 10 caracteres").required("La tesis del desaf\xedo es obligatorio"),thesis2:B.b().min(10,"La tesis del desad\xedo debe tener como m\xednimo 10 caracteres").required("La tesis del desaf\xedo es obligatorio"),arguments1_1:B.b().min(10,"El argumento del desad\xedo debe tener como m\xednimo 10 caracteres").required("El argumento del desaf\xedo es obligatorio"),arguments1_2:B.b().min(10,"El argumento del desad\xedo debe tener como m\xednimo 10 caracteres").required("El argumento del desaf\xedo es obligatorio"),arguments1_3:B.b().min(10,"El argumento del desad\xedo debe tener como m\xednimo 10 caracteres").required("El argumento del desaf\xedo es obligatorio"),arguments1_4:B.b().min(10,"El argumento del desad\xedo debe tener como m\xednimo 10 caracteres").required("El argumento del desaf\xedo es obligatorio"),arguments2_1:B.b().min(10,"El argumento del desad\xedo debe tener como m\xednimo 10 caracteres").required("El argumento del desaf\xedo es obligatorio"),arguments2_2:B.b().min(10,"El argumento del desad\xedo debe tener como m\xednimo 10 caracteres").required("El argumento del desaf\xedo es obligatorio"),arguments2_3:B.b().min(10,"El argumento del desad\xedo debe tener como m\xednimo 10 caracteres").required("El argumento del desaf\xedo es obligatorio"),arguments2_4:B.b().min(10,"El argumento del desad\xedo debe tener como m\xednimo 10 caracteres").required("El argumento del desaf\xedo es obligatorio")}),onSubmit:function(e){try{var a=function(e){return{order:0,name:e.name,image:g,description:e.description,status:!1,created:"",updated:"",approach:e.approach,thesis1:{text:e.thesis1,arguments:[e.arguments1_1,e.arguments1_2,e.arguments1_3,e.arguments1_4],conclusion:""},thesis2:{text:e.thesis2,arguments:[e.arguments2_1,e.arguments2_2,e.arguments2_3,e.arguments2_4],conclusion:""}}}(e);f.db.collection("challenges").add(a),E("/portada")}catch(t){console.log(t)}}}),v=function(){var e=Object(w.a)(N.a.mark((function e(a){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(100),n(!1),e.next=4,f.storage.ref("challenges").child(a).getDownloadURL();case 4:t=e.sent,h(t);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"text-3xl font-bold text-gray-600 mb-4"},"Nuevo Desaf\xedo"),l.a.createElement("div",{className:"flex justify-center mt-10"},l.a.createElement("div",{className:"w-full max-w-3xl"},l.a.createElement("form",{onSubmit:x.handleSubmit},l.a.createElement("div",{className:"my-4"},l.a.createElement("p",{className:"font-bold text-xl text-gray-700 text-center"},"Portada")),l.a.createElement("div",{className:"mb-4"},l.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"name"},"Nombre"),l.a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"name",type:"text",placeholder:"Nombre desaf\xedo",value:x.values.name,onChange:x.handleChange,onBlur:x.handleBlur})),x.touched.name&&x.errors.name?l.a.createElement("div",{className:"bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5",role:"alert"},l.a.createElement("p",{className:"font-bold"},"Hubo un error:"),l.a.createElement("p",null,x.errors.name)):null,l.a.createElement("div",{className:"mb-4"},l.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"image"},"Imagen del desaf\xedo"),l.a.createElement(C.a,{accept:"image/*",id:"image",name:"image",randomizeFilename:!0,storageRef:f.storage.ref("challenges"),onUploadStart:function(){d(0),n(!0)},onUploadError:function(e){n(!1)},onUploadSuccess:v,onProgress:function(e){d(e)}})),t&&l.a.createElement("div",{className:"h-12 relative w-full border"},l.a.createElement("div",{className:"bg-green-500 absolute left-0 top-0 text-white px-2 text-sm h-12 flex items-center",style:{width:"".concat(c,"%")}},c," %")),g&&l.a.createElement("p",{className:"bg-green-500 text-white p-3 text-center my-5"},"La imagen se subi\xf3 correctamente"),l.a.createElement("div",{className:"mb-6"},l.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"description"},"Descripci\xf3n"),l.a.createElement("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20",id:"description",placeholder:"Descripci\xf3n desaf\xedo",value:x.values.description,onChange:x.handleChange,onBlur:x.handleBlur})),x.touched.description&&x.errors.description?l.a.createElement("div",{className:"bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5",role:"alert"},l.a.createElement("p",{className:"font-bold"},"Hubo un error:"),l.a.createElement("p",null,x.errors.description)):null,l.a.createElement("div",{className:"my-10"},l.a.createElement("p",{className:"font-bold text-xl text-gray-700 text-center"},"Tesis")),l.a.createElement("div",{className:"mb-4 "},l.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"approach"},"Planteamiento"),l.a.createElement("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40",id:"approach",placeholder:"Descripci\xf3n el planteamiento de la tesis",value:x.values.approach,onChange:x.handleChange,onBlur:x.handleBlur})),x.touched.approach&&x.errors.approach?l.a.createElement("div",{className:"bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5",role:"alert"},l.a.createElement("p",{className:"font-bold"},"Hubo un error:"),l.a.createElement("p",null,x.errors.approach)):null,l.a.createElement("div",{className:"mb-4 mt-4 "},l.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"thesis1"},"Tesis 1"),l.a.createElement("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20",id:"thesis1",placeholder:"Descripci\xf3n el planteamiento de la tesis",value:x.values.thesis1,onChange:x.handleChange,onBlur:x.handleBlur})),x.touched.thesis1&&x.errors.thesis1?l.a.createElement("div",{className:"bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5",role:"alert"},l.a.createElement("p",{className:"font-bold"},"Hubo un error:"),l.a.createElement("p",null,x.errors.thesis1)):null,l.a.createElement("div",{className:"mb-4 mt-4 "},l.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"thesis2"},"Tesis 2"),l.a.createElement("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20",id:"thesis2",placeholder:"Descripci\xf3n el planteamiento de la tesis",value:x.values.thesis2,onChange:x.handleChange,onBlur:x.handleBlur})),x.touched.thesis2&&x.errors.thesis2?l.a.createElement("div",{className:"bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5",role:"alert"},l.a.createElement("p",{className:"font-bold"},"Hubo un error:"),l.a.createElement("p",null,x.errors.thesis2)):null,l.a.createElement("div",{className:"my-10"},l.a.createElement("p",{className:"font-bold text-xl text-gray-700 text-center"},"Argumentos Tesis 1")),l.a.createElement("div",{className:"mb-4 mt-4 "},l.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"arguments1_1"},"Argumento a favor de la Tesis 1"),l.a.createElement("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20",id:"arguments1_1",placeholder:"Argumento a favor de la tesis 1",value:x.values.arguments1_1,onChange:x.handleChange,onBlur:x.handleBlur})),x.touched.arguments1_1&&x.errors.arguments1_1?l.a.createElement("div",{className:"bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5",role:"alert"},l.a.createElement("p",{className:"font-bold"},"Hubo un error:"),l.a.createElement("p",null,x.errors.arguments1_1)):null,l.a.createElement("div",{className:"mb-4 mt-4 "},l.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"arguments1_2"},"Argumento a favor de la Tesis 1"),l.a.createElement("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20",id:"arguments1_2",placeholder:"Argumento a favor de la tesis 1",value:x.values.arguments1_2,onChange:x.handleChange,onBlur:x.handleBlur})),x.touched.arguments1_2&&x.errors.arguments1_2?l.a.createElement("div",{className:"bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5",role:"alert"},l.a.createElement("p",{className:"font-bold"},"Hubo un error:"),l.a.createElement("p",null,x.errors.arguments1_2)):null,l.a.createElement("div",{className:"mb-4 mt-4 "},l.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"arguments1_3"},"Argumento a favor de la Tesis 1"),l.a.createElement("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20",id:"arguments1_3",placeholder:"Argumento a favor de la tesis 1",value:x.values.arguments1_3,onChange:x.handleChange,onBlur:x.handleBlur})),x.touched.arguments1_3&&x.errors.arguments1_3?l.a.createElement("div",{className:"bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5",role:"alert"},l.a.createElement("p",{className:"font-bold"},"Hubo un error:"),l.a.createElement("p",null,x.errors.arguments1_3)):null,l.a.createElement("div",{className:"mb-4 mt-4 "},l.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"arguments1_4"},"Argumento a favor de la Tesis 1"),l.a.createElement("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20",id:"arguments1_4",placeholder:"Argumento a favor de la tesis 1",value:x.values.arguments1_4,onChange:x.handleChange,onBlur:x.handleBlur})),x.touched.arguments1_4&&x.errors.arguments1_4?l.a.createElement("div",{className:"bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5",role:"alert"},l.a.createElement("p",{className:"font-bold"},"Hubo un error:"),l.a.createElement("p",null,x.errors.arguments1_4)):null,l.a.createElement("div",{className:"my-10"},l.a.createElement("p",{className:"font-bold text-xl text-gray-700 text-center"},"Argumentos Tesis 2")),l.a.createElement("div",{className:"mb-4 mt-4 "},l.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"arguments2_1"},"Argumento a favor de la Tesis 2"),l.a.createElement("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20",id:"arguments2_1",placeholder:"Argumento a favor de la tesis 2",value:x.values.arguments2_1,onChange:x.handleChange,onBlur:x.handleBlur})),x.touched.arguments2_1&&x.errors.arguments2_1?l.a.createElement("div",{className:"bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5",role:"alert"},l.a.createElement("p",{className:"font-bold"},"Hubo un error:"),l.a.createElement("p",null,x.errors.arguments2_1)):null,l.a.createElement("div",{className:"mb-4 mt-4 "},l.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"arguments2_2"},"Argumento a favor de la Tesis 2"),l.a.createElement("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20",id:"arguments2_2",placeholder:"Argumento a favor de la tesis 2",value:x.values.arguments2_2,onChange:x.handleChange,onBlur:x.handleBlur})),x.touched.arguments2_2&&x.errors.arguments2_2?l.a.createElement("div",{className:"bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5",role:"alert"},l.a.createElement("p",{className:"font-bold"},"Hubo un error:"),l.a.createElement("p",null,x.errors.arguments2_2)):null,l.a.createElement("div",{className:"mb-4 mt-4 "},l.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"arguments2_3"},"Argumento a favor de la Tesis 2"),l.a.createElement("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20",id:"arguments2_3",placeholder:"Argumento a favor de la tesis 2",value:x.values.arguments2_3,onChange:x.handleChange,onBlur:x.handleBlur})),x.touched.arguments2_3&&x.errors.arguments2_3?l.a.createElement("div",{className:"bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5",role:"alert"},l.a.createElement("p",{className:"font-bold"},"Hubo un error:"),l.a.createElement("p",null,x.errors.arguments2_3)):null,l.a.createElement("div",{className:"mb-4 mt-4 "},l.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"arguments2_4"},"Argumento a favor de la Tesis 2"),l.a.createElement("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20",id:"arguments2_4",placeholder:"Argumento a favor de la tesis 2",value:x.values.arguments2_4,onChange:x.handleChange,onBlur:x.handleBlur})),x.touched.arguments2_4&&x.errors.arguments2_4?l.a.createElement("div",{className:"bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5",role:"alert"},l.a.createElement("p",{className:"font-bold"},"Hubo un error:"),l.a.createElement("p",null,x.errors.arguments2_4)):null,l.a.createElement("input",{type:"submit",className:"bg-blue-600 rounded-md hover:bg-yellow-500 hover:text-gray-600 w-full mt-5 p-2 text-white uppercase font-bold",value:"Agregar Desaf\xedo"})))))},A=function(){return l.a.createElement("div",{className:"md:w-2/5 xl:w-1/5 border-gray-600 border-r bg-blue-600"},l.a.createElement("div",{className:"p-6 border-black"},l.a.createElement("p",{className:" text-white text-2xl tracking-wide text-center font-bold"},"Pensamiento Cr\xedtico"),l.a.createElement("p",{className:"mt-3 text-white "},"Administra tus desaf\xedos en las siguientes opciones:"),l.a.createElement("nav",{className:"mt-10"},l.a.createElement(f.c,{className:"p-2 text-gray-400 block rounded-md hover:bg-yellow-500 hover:text-gray-600 hover:font-bold",activeClassName:"text-yellow-500",exact:"true",to:"/desafios"},"Desaf\xedos"))))};var j=function(){return l.a.createElement(b.Provider,{value:{firebase:g}},l.a.createElement("div",{className:"md:flex min-h-screen"},l.a.createElement(A,null),l.a.createElement("div",{className:"md:w-3/5 xl:w-4/5 p-6 bg-gray-200"},l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/desafios",element:l.a.createElement(x,null)}),l.a.createElement(s.a,{path:"/nuevo-desafio",element:l.a.createElement(k,null)})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(f.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);
//# sourceMappingURL=main.3ad3bd0e.chunk.js.map