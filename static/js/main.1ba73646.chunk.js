(this["webpackJsonpimage-manager"]=this["webpackJsonpimage-manager"]||[]).push([[0],{134:function(e,t,a){e.exports=a(175)},153:function(e,t,a){},175:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),o=a(32),l=a(12),u=a(26),s=a(16),m=a(63),p=a(108),d=a(107),g=(a(140),a(219)),b=a(206),h=a(205),f=a(202),E=a(207),v=a(218),j=a(221),x=a(123),O=a(204),y=function(e){var t=e.register,a=e.oldPreview,i=Object(n.useState)(),c=Object(s.a)(i,2),o=c[0],l=c[1],u=Object(n.useCallback)((function(e){var t,a=null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.files[0];if(a){var n=new FileReader;n.onload=function(e){e&&e.target&&l(e.target.result)},n.readAsDataURL(a)}}),[l]),m=o||a;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,m?r.a.createElement("img",{style:{width:"100%"},src:m,alt:"preview"}):r.a.createElement(O.a,null,"There is no uploaded image.")),r.a.createElement(f.a,null,r.a.createElement(h.a,{color:"primary",variant:"outlined",component:"label"},"Upload File",r.a.createElement("input",{ref:t,type:"file",accept:".png, .jpg, .jpeg",style:{display:"none"},name:"image",onChange:u}))))},k=a(39),C=a.n(k),w=Object(x.a)((function(e){return C()({buttonsContainer:{display:"flex",justifyContent:"space-between"},errorLabel:{color:"red"}})})),N=function(e){var t,a,n,i,c,o,l,u=e.onSubmit,s=e.onCancel,x=e.defaultValues,k=void 0===x?{}:x,C=e.oldPreview,N=e.schema,S=Object(m.useForm)({defaultValues:k,resolver:Object(d.yupResolver)(N)}),I=S.register,W=S.handleSubmit,T=S.control,U=S.errors,L=w();return r.a.createElement(b.a,{maxWidth:"md"},r.a.createElement("form",{onSubmit:W(u)},r.a.createElement(f.a,{container:!0,spacing:2},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(E.a,{fullWidth:!0,margin:"normal"},r.a.createElement(y,{oldPreview:C,register:I})),r.a.createElement(O.a,{className:L.errorLabel},null===(t=U.image)||void 0===t?void 0:t.message)),r.a.createElement(f.a,{item:!0,xs:12,sm:12,md:6},r.a.createElement(E.a,{fullWidth:!0,margin:"normal"},r.a.createElement(g.a,{inputRef:I,name:"tooltip.text",label:"Toolip text",variant:"outlined"})),r.a.createElement(O.a,{className:L.errorLabel},null===(a=U.tooltip)||void 0===a||null===(n=a.text)||void 0===n?void 0:n.message)),r.a.createElement(f.a,{item:!0,xs:12,sm:12,md:6},r.a.createElement(E.a,{fullWidth:!0,margin:"normal"},r.a.createElement(m.Controller,{name:"tooltip.position",as:r.a.createElement(v.a,null,r.a.createElement(j.a,{value:"top"},"Top"),r.a.createElement(j.a,{value:"right"},"Right"),r.a.createElement(j.a,{value:"bottom"},"Bottom"),r.a.createElement(j.a,{value:"left"},"Left")),control:T})),r.a.createElement(O.a,{className:L.errorLabel},null===(i=U.tooltip)||void 0===i||null===(c=i.position)||void 0===c?void 0:c.message)),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(E.a,{fullWidth:!0,margin:"normal"},r.a.createElement(O.a,null,"Tooltip Color"),r.a.createElement(m.Controller,{name:"tooltip.color",render:function(e){var t=e.value,a=e.onChange;return r.a.createElement(p.a,{color:t,onChange:a})},control:T})),r.a.createElement(O.a,{className:L.errorLabel},null===(o=U.tooltip)||void 0===o||null===(l=o.color)||void 0===l?void 0:l.message)),r.a.createElement(f.a,{container:!0,item:!0,xs:12,className:L.buttonsContainer},r.a.createElement(h.a,{type:"button",onClick:s,color:"primary",variant:"outlined"},"Back"),r.a.createElement(h.a,{type:"submit",color:"primary",variant:"outlined"},"Submit")))))},S=a(57),I=a(7),W=a.n(I),T=a(18),U=a(109),L=a(110),B=a(118),R=new(function(){function e(){Object(U.a)(this,e),this.db=void 0,this.dbName="imageApp",this.imageStoreName="images"}return Object(L.a)(e,[{key:"store",value:function(){var e=Object(T.a)(W.a.mark((function e(t){var a,n,r;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initDb();case 2:return a=e.sent,e.next=5,a.add(this.imageStoreName,t);case 5:return n=e.sent,e.next=8,a.get(this.imageStoreName,n);case 8:return r=e.sent,e.abrupt("return",this.substituteImageWithUrl(r));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"destroy",value:function(){var e=Object(T.a)(W.a.mark((function e(t){var a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initDb();case 2:return a=e.sent,e.abrupt("return",a.delete(this.imageStoreName,t));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"show",value:function(){var e=Object(T.a)(W.a.mark((function e(t){var a,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initDb();case 2:return a=e.sent,e.next=5,a.get(this.imageStoreName,t);case 5:return n=e.sent,e.abrupt("return",this.substituteImageWithUrl(n));case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"index",value:function(){var e=Object(T.a)(W.a.mark((function e(){var t,a,n,r=this;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initDb();case 2:return t=e.sent,e.next=5,t.getAll(this.imageStoreName);case 5:return a=e.sent,n=a.map((function(e){return r.substituteImageWithUrl(e)})),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(T.a)(W.a.mark((function e(t){var a,n,r,i;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initDb();case 2:return a=e.sent,e.next=5,a.get(this.imageStoreName,t.id);case 5:return n=e.sent,t.image||(t.image=n.image),e.next=9,a.put(this.imageStoreName,t);case 9:return r=e.sent,e.next=12,a.get(this.imageStoreName,r);case 12:return i=e.sent,e.abrupt("return",this.substituteImageWithUrl(i));case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"initDb",value:function(){var e=Object(T.a)(W.a.mark((function e(){var t;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.imageStoreName,!this.db){e.next=3;break}return e.abrupt("return",this.db);case 3:return e.next=5,Object(B.a)(this.dbName,1,{upgrade:function(e){e.objectStoreNames.contains(t)||e.createObjectStore(t,{keyPath:"id",autoIncrement:!0})}});case 5:return this.db=e.sent,e.abrupt("return",this.db);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getImageUrl",value:function(e){var t=[],a="";return t.push(e),e&&(a=window.URL.createObjectURL(new Blob(t,{type:e.type}))),a}},{key:"substituteImageWithUrl",value:function(e){var t=this.getImageUrl(e.image);return Object(u.a)(Object(u.a)({},e),{},{image:t})}}]),e}()),q=function(e){return R.store(e)},D=function(){return R.index()},F=function(e){return R.destroy(e)},M=function(e,t){return R.show(t)},A=function(e){return R.update(e)},P=function(e,t){return Object(S.b)(["showImage",e],M,t)},z=a(20),G=z.b().shape({tooltip:z.b().shape({text:z.c().required(),color:z.c().required(),position:z.c().required()}),image:z.a().required().test("fileType","File is Required. Allowed file types: jpeg, jpg, png; allowed file size < 5mb",(function(e){var t=e[0];if(!t)return!1;var a=t.name.split(".").pop();return!!["jpeg","jpg","png"].includes(a)&&Math.floor(t.size/1e6)<5}))}),V={tooltip:{color:"rgb(0, 0, 0)",position:"top"}},J=function(){var e,t=Object(l.g)(),a=Object(n.useCallback)((function(){return t.push("/")}),[t]),i=(e={onSuccess:function(){return t.push("/")}},Object(S.a)(q,e)),c=Object(s.a)(i,1)[0],o=Object(n.useCallback)((function(e){var t=e.image[0];c(Object(u.a)(Object(u.a)({},e),{},{image:t}))}),[c]);return r.a.createElement("div",null,r.a.createElement(N,{schema:G,onCancel:a,defaultValues:V,onSubmit:o}))},Y=a(215),H=a(210),K=a(214),Q=a(211),X=a(213),Z=a(212),$=a(114),_=a.n($),ee=(a(153),function(e){var t=e.children,a=e.position,i=e.color,c=e.text,o=Object(n.useState)(!1),l=Object(s.a)(o,2),u=l[0],m=l[1],p=Object(n.useCallback)((function(){return m(!0)}),[m]),d=Object(n.useCallback)((function(){return m(!1)}),[m]);return r.a.createElement("div",{className:"tooltip-container"},r.a.createElement("div",{onMouseOver:p,onMouseLeave:d},t),u&&r.a.createElement("div",{style:{color:i,borderColor:i},className:"tooltip tooltip-".concat(a)},c))}),te=Object(H.a)((function(e){return C()({card:{height:"100%",display:"flex",flexDirection:"column",cursor:"pointer"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},cardButtonsGroup:{marginLeft:"auto"}})})),ae=function(e){var t=e.image,a=e.handleRemove,n=e.handleClick,i=te();return r.a.createElement(f.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(ee,t.tooltip,r.a.createElement(Q.a,{className:i.card,onClick:function(){return n(t.id)}},r.a.createElement(Z.a,{className:i.cardMedia,image:t.image}),r.a.createElement(X.a,{className:i.cardButtonsGroup},r.a.createElement(K.a,{onClick:function(e){return a(e,t.id)},size:"small",color:"primary"},r.a.createElement(_.a,null))))))},ne=Object(H.a)((function(e){return C()({heroContent:{backgroundColor:e.palette.background.paper},heroButtons:{marginTop:e.spacing(2),marginBottom:e.spacing(2)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)}})})),re=function(){var e,t=Object(l.g)(),a=ne(),i=(e={retry:!1},Object(S.b)("indexImage",D,e)),c=i.data,u=void 0===c?[]:c,m=i.refetch,p=i.isFetching,d=function(e){return Object(S.a)(F,e)}({onSuccess:m}),g=Object(s.a)(d,1)[0],E=Object(n.useCallback)((function(e,t){g(t),e.stopPropagation()}),[g]),v=Object(n.useCallback)((function(e){return t.push("/images/".concat(e))}),[t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,null),r.a.createElement("div",{className:a.heroContent},r.a.createElement(b.a,{maxWidth:"sm"},r.a.createElement("div",{className:a.heroButtons},r.a.createElement(f.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(f.a,{item:!0},r.a.createElement(o.b,{to:"/images/create"},r.a.createElement(h.a,{variant:"contained",color:"primary"},"Add image"))))))),r.a.createElement(b.a,{className:a.cardGrid,maxWidth:"md"},p?r.a.createElement(O.a,null,"Loading ..."):u.length?r.a.createElement(f.a,{container:!0,spacing:4},u.map((function(e){return r.a.createElement(ae,{handleClick:v,key:e.id,image:e,handleRemove:E})}))):"There is no images. You can add them by pressed on 'Add Image' button."))},ie=function(e){var t=e.image,a=e.handleUpdate;return r.a.createElement(b.a,{maxWidth:"md"},r.a.createElement(f.a,{container:!0,spacing:2},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement("img",{style:{width:"100%"},alt:"img",src:t.image})),r.a.createElement(f.a,{item:!0,xs:12,sm:12,md:6},r.a.createElement(O.a,{variant:"h6"},"Tooltip text"),r.a.createElement(O.a,null,t.tooltip.text)),r.a.createElement(f.a,{item:!0,xs:12,sm:12,md:6},r.a.createElement(O.a,{variant:"h6"},"Tooltip position"),r.a.createElement(O.a,null,t.tooltip.position)),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(O.a,{variant:"h6"},"Tooltip color"),r.a.createElement(O.a,{style:{color:t.tooltip.color}},t.tooltip.color)),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(h.a,{variant:"outlined",color:"primary",onClick:a},"Update"))))},ce=function(){var e=Object(l.h)().id,t=Object(l.g)(),a=P(Number(e)).data,i=Object(n.useCallback)((function(){return t.push("/images/".concat(e,"/update"))}),[t,e]);return a?r.a.createElement(ie,{image:a,handleUpdate:i}):null},oe=a(117),le=z.b().shape({tooltip:z.b().shape({text:z.c().required(),color:z.c().required(),position:z.c().required()}),image:z.a().required().test("fileType","Wrong file type, allowed: jpeg, jpg, png",(function(e){var t=e[0];if(!t)return!0;var a=t.name.split(".").pop();return["jpeg","jpg","png"].includes(a)})).test("fileSize","Image should be less then 5 mb",(function(e){var t=e[0];return!t||Math.floor(t.size/1e6)<5}))}),ue=function(){var e,t=Object(l.h)().id,a=Object(l.g)(),i=P(Number(t)).data,c=Object(n.useCallback)((function(){return a.push("/images/".concat(t))}),[a,t]),o=(e={onSuccess:function(){return a.push("/")}},Object(S.a)(A,e)),m=Object(s.a)(o,1)[0],p=Object(n.useCallback)((function(e){var a=e.image,n=Object(oe.a)(e,["image"]),r=a[0],i=n;r&&(i.image=r),m(Object(u.a)({id:Number(t)},i))}),[m,t]);return r.a.createElement("div",null,i&&r.a.createElement(N,{schema:le,oldPreview:i.image,onCancel:c,onSubmit:p,defaultValues:{tooltip:i.tooltip}}))},se=a(115),me=a.n(se),pe=a(216),de=a(116),ge=a.n(de),be=a(217),he=me()((function(e){return C()({icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper},heroButtons:{marginTop:e.spacing(4)},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},link:{color:"white",textDecoration:"none"}})})),fe=function(e){var t=e.children,a=he();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,null),r.a.createElement(pe.a,{position:"relative"},r.a.createElement(be.a,null,r.a.createElement(ge.a,{className:a.icon}),r.a.createElement(o.b,{to:"/",className:a.link},r.a.createElement(O.a,{variant:"h6",color:"inherit",noWrap:!0},"Image Manager")))),r.a.createElement("main",null,t),r.a.createElement("footer",{className:a.footer},r.a.createElement(O.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Image manager, 2020")))};function Ee(){return r.a.createElement(o.a,null,r.a.createElement(fe,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/images"},r.a.createElement(re,null)),r.a.createElement(l.b,{exact:!0,path:"/images/create"},r.a.createElement(J,null)),r.a.createElement(l.b,{exact:!0,path:"/images/:id"},r.a.createElement(ce,null)),r.a.createElement(l.b,{exact:!0,path:"/images/:id/update"},r.a.createElement(ue,null)),r.a.createElement(l.a,{exact:!0,from:"/",to:"/images"}))))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.1ba73646.chunk.js.map