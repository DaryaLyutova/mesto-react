(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),r=n(4),i=n.n(r),o=(n(12),n(2)),l=n.p+"static/media/logo.c2821b38.svg";var u=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{src:l,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f",className:"logo"})})},p=n(5),h=n(6),d=new(function(){function e(t){Object(p.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(h.a)(e,[{key:"_showErrow",value:function(e){if(e.ok)return e.json();Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._showErrow(t)}))}},{key:"patchUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._showErrow(e)}))}},{key:"patchUserAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._showErrow(e)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._showErrow(t)}))}},{key:"makeNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._showErrow(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._showErrow(e)}))}},{key:"putLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._showErrow(e)}))}},{key:"deleteLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._showErrow(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"db246294-1b1a-41e2-ab61-b5ce8b44318f","Content-Type":"application/json"}});var j=function(e){var t=e.card,n=e.onCardClick,c=e.onImageClick;return Object(a.jsxs)("div",{className:"place__container",children:[Object(a.jsx)("img",{src:t.src,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043c\u0435\u0441\u0442\u0430",className:"place__image",onClick:function(){n(t),c()}}),Object(a.jsx)("button",{type:"button",className:"place__delete"}),Object(a.jsxs)("div",{className:"place__group",children:[Object(a.jsx)("h2",{className:"place__title",children:t.name}),Object(a.jsxs)("form",{className:"place__like-container",children:[Object(a.jsx)("button",{type:"button",className:"place__like"}),Object(a.jsx)("p",{className:"place__like-counter",children:t.likes.length})]})]})]})};var m=function(e){var t=s.a.useState(),n=Object(o.a)(t,2),c=n[0],r=n[1],i=s.a.useState(),l=Object(o.a)(i,2),u=l[0],p=l[1],h=s.a.useState(),m=Object(o.a)(h,2),_=m[0],b=m[1];s.a.useEffect((function(){d.getUserInfo().then((function(e){r(e.avatar),p(e.name),b(e.about)})).catch((function(e){alert(e)}))}),[]);var f=s.a.useState([]),O=Object(o.a)(f,2),x=O[0],v=O[1];return s.a.useEffect((function(){d.getInitialCards().then((function(e){v(e.map((function(e){return{id:e._id,name:e.name,src:e.link,likes:e.likes}})))})).catch((function(e){alert(e)}))}),[]),Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsx)("img",{src:c,type:"button",alt:"\u0424\u043e\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"avatar",onClick:e.onEditAvatar}),Object(a.jsx)("div",{className:"avatar avatar__hover"}),Object(a.jsxs)("div",{className:"profile-info",children:[Object(a.jsxs)("div",{className:"profile-info__container",children:[Object(a.jsx)("h1",{className:"profile-info__name",children:u}),Object(a.jsx)("button",{type:"button",className:"edit-button",onClick:e.onEditProfile})]}),Object(a.jsx)("p",{className:"profile-info__activity",children:_})]}),Object(a.jsx)("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlace})]}),Object(a.jsx)("section",{className:"places",children:x.map((function(t){return Object(a.jsx)(j,{card:t,onCardClick:e.onCardClick,onImageClick:e.onImageClick},t.id)}))})]})};var _=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var b=function(e){return Object(a.jsx)("form",{className:"popup popup__".concat(e.name," ").concat(e.isOpen?"popup_opened":""),name:e.name,children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),Object(a.jsx)("h2",{className:"popup__title",children:e.title}),Object(a.jsx)("fieldset",{className:"popup__profile",children:e.children}),Object(a.jsx)("button",{type:"submit",className:"popup__button",children:e.buttonTitle})]})})};var f=function(e){return Object(a.jsx)("div",{className:"popup popup_photo ".concat(e.isOpen?"popup_opened":""),children:Object(a.jsxs)("figure",{className:"popup__photo-container",children:[Object(a.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_photo",onClick:e.onClose}),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043c\u0435\u0441\u0442\u0430",src:e.isOpen?e.card.src:"",className:"popup__image"}),Object(a.jsx)("figcaption",{className:"popup__title-photo",children:e.isOpen?e.card.name:""})]})]})})};var O=function(){var e=s.a.useState(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=s.a.useState(!1),i=Object(o.a)(r,2),l=i[0],p=i[1],h=s.a.useState(!1),d=Object(o.a)(h,2),j=d[0],O=d[1],x=s.a.useState(null),v=Object(o.a)(x,2),N=v[0],g=v[1],k=s.a.useState(!1),C=Object(o.a)(k,2),y=C[0],E=C[1];function w(){c(),p(),O(),E()}var T=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"text",placeholder:"\u0418\u043c\u044f",className:"popup__input popup__input_name",id:"name-input",name:"name",minlength:"2",maxlength:"40",required:!0}),Object(a.jsx)("span",{className:"popup__error",id:"name-input-error"}),Object(a.jsx)("input",{type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",className:"popup__input popup__input_activity",id:"activity-input",name:"about",minlength:"2",maxlength:"200",required:!0}),Object(a.jsx)("span",{className:"popup__error",id:"activity-input-error"})]}),S=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_placename",id:"placename-input",name:"name",minlength:"1",maxlength:"30",required:!0}),Object(a.jsx)("span",{className:"popup__error",id:"placename-input-error"}),Object(a.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_link",id:"email-input",name:"link",required:!0}),Object(a.jsx)("span",{className:"popup__error",id:"email-input-error"})]}),I=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",className:"popup__input popup__input_avatar-link",id:"avatar-input",name:"avatar",required:!0}),Object(a.jsx)("span",{className:"popup__error",id:"avatar-input-error"})]});return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(u,{}),Object(a.jsx)(m,{onEditAvatar:function(){O(!j)},onAddPlace:function(){p(!l)},onEditProfile:function(){c(!n)},onCardClick:g,onImageClick:function(){E(!y)}}),Object(a.jsx)(_,{}),Object(a.jsx)(b,{name:"info",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:n,onClose:w,children:T}),Object(a.jsx)(b,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:l,onClose:w,children:S}),Object(a.jsx)(b,{name:"submit",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonTitle:"\u0414\u0430",onClose:w,children:""}),Object(a.jsx)(b,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:j,onClose:w,children:I}),Object(a.jsx)(f,{card:N,onClose:w,isOpen:y})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),x()}},[[13,1,2]]]);
//# sourceMappingURL=main.b3966e58.chunk.js.map