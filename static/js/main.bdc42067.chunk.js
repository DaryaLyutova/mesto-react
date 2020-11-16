(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),i=n(6),o=n.n(i),s=(n(16),n(9)),u=n(2),l=n.p+"static/media/logo.c2821b38.svg";var p=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{src:l,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f",className:"logo"})})},d=n(10),h=n(7),j=n(8),_=new(function(){function e(t){Object(h.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(j.a)(e,[{key:"_showErrow",value:function(e){if(e.ok)return e.json();Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._showErrow(t)}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._showErrow(e)}))}},{key:"sethUserAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._showErrow(e)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._showErrow(t)}))}},{key:"makeNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return t._showErrow(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._showErrow(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){var n=this;return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:this._headers}).then((function(e){return n._showErrow(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"db246294-1b1a-41e2-ab61-b5ce8b44318f","Content-Type":"application/json"}}),m=r.a.createContext();var b=function(e){var t=e.card,n=e.onCardClick,c=e.onImageClick,i=e.onCardLike,o=e.onCardDelete,s=r.a.useContext(m),u=t.owner._id===s._id,l=t.likes.some((function(e){return e._id===s._id}));return Object(a.jsxs)("div",{className:"place__container",children:[Object(a.jsx)("img",{src:t.link,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043c\u0435\u0441\u0442\u0430",className:"place__image",onClick:function(){n(t),c()}}),Object(a.jsx)("button",{type:"button",className:"place__delete ".concat(u?"place__delete_visible":""),onClick:function(){o(t)}}),Object(a.jsxs)("div",{className:"place__group",children:[Object(a.jsx)("h2",{className:"place__title",children:t.name}),Object(a.jsxs)("form",{className:"place__like-container",children:[Object(a.jsx)("button",{type:"button",className:"place__like ".concat(l?"place__like_active":""),onClick:function(){i(t)}}),Object(a.jsx)("p",{className:"place__like-counter",children:t.likes.length})]})]})]})};var f=function(e){var t=e.cards,n=Object(d.a)(e,["cards"]),c=r.a.useContext(m);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsx)("img",{src:c.avatar,type:"button",alt:"\u0424\u043e\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"avatar"}),Object(a.jsx)("div",{className:"avatar avatar__hover",onClick:n.onEditAvatar}),Object(a.jsxs)("div",{className:"profile-info",children:[Object(a.jsxs)("div",{className:"profile-info__container",children:[Object(a.jsx)("h1",{className:"profile-info__name",children:c.name}),Object(a.jsx)("button",{type:"button",className:"edit-button",onClick:n.onEditProfile})]}),Object(a.jsx)("p",{className:"profile-info__activity",children:c.about})]}),Object(a.jsx)("button",{type:"button",className:"profile__add-button",onClick:n.onAddPlace})]}),Object(a.jsx)("section",{className:"places",children:t.map((function(e){return Object(a.jsx)(b,{cards:n.cards,card:e,onCardLike:n.onCardLike,onCardDelete:n.onCardDelete,onCardClick:n.onCardClick,onImageClick:n.onImageClick},e._id)}))})]})};var O=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var v=function(e){return Object(a.jsx)("form",{className:"popup popup__".concat(e.name," ").concat(e.isOpen?"popup_opened":""),name:e.name,onSubmit:e.onSubmit,children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{type:"button",className:"popup__close-button",onClick:e.onClose}),Object(a.jsx)("h2",{className:"popup__title",children:e.title}),Object(a.jsx)("fieldset",{className:"popup__profile",children:e.children}),Object(a.jsx)("button",{type:"submit",className:"popup__button",children:e.buttonTitle})]})})};var x=function(e){var t=r.a.useContext(m),n=r.a.useState(""),c=Object(u.a)(n,2),i=c[0],o=c[1],s=r.a.useState(""),l=Object(u.a)(s,2),p=l[0],d=l[1];r.a.useEffect((function(){o(t.name),d(t.about)}),[t]);var h=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"text",placeholder:"\u0418\u043c\u044f",className:"popup__input popup__input_name",id:"name-input",name:"name",minLength:"2",maxLength:"40",onChange:function(e){o(e.target.value)},value:i,required:!0}),Object(a.jsx)("span",{className:"popup__error",id:"name-input-error"}),Object(a.jsx)("input",{type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",className:"popup__input popup__input_activity",id:"activity-input",name:"about",minLength:"2",maxLength:"200",onChange:function(e){d(e.target.value)},value:p,required:!0}),Object(a.jsx)("span",{className:"popup__error",id:"activity-input-error"})]});return Object(a.jsx)(v,{name:"info",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:i,about:p})},children:h})};var C=function(e){var t=r.a.useRef(""),n=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",className:"popup__input popup__input_avatar-link",id:"avatar-input",name:"avatar",ref:t,required:!0}),Object(a.jsx)("span",{className:"popup__error",id:"avatar-input-error"})]});return Object(a.jsx)(v,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},onUpdateAvatar:e.onUpdateAvatar,children:n})};var k=function(e){var t=r.a.useRef(""),n=r.a.useRef(""),c=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_placename",id:"placename-input",name:"name",minLength:"1",maxLength:"30",ref:t,required:!0}),Object(a.jsx)("span",{className:"popup__error",id:"placename-input-error"}),Object(a.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_link",id:"email-input",name:"link",ref:n,required:!0}),Object(a.jsx)("span",{className:"popup__error",id:"email-input-error"})]});return Object(a.jsx)(v,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonTitle:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onAddPlace({name:t.current.value,link:n.current.value})},onAddPlace:e.onAddPlace,children:c})};var N=function(e){return Object(a.jsx)("div",{className:"popup popup_photo ".concat(e.isOpen?"popup_opened":""),children:Object(a.jsxs)("figure",{className:"popup__photo-container",children:[Object(a.jsx)("button",{type:"button",className:"popup__close-button popup__close-button_photo",onClick:e.onClose}),Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043c\u0435\u0441\u0442\u0430",src:e.isOpen?e.card.link:"",className:"popup__image"}),Object(a.jsx)("figcaption",{className:"popup__title-photo",children:e.isOpen?e.card.name:""})]})]})})};var g=function(){var e=r.a.useState(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],i=r.a.useState(!1),o=Object(u.a)(i,2),l=o[0],d=o[1],h=r.a.useState(!1),j=Object(u.a)(h,2),b=j[0],g=j[1],y=r.a.useState(null),w=Object(u.a)(y,2),E=w[0],S=w[1],A=r.a.useState(!1),L=Object(u.a)(A,2),P=L[0],T=L[1],U=r.a.useState({}),I=Object(u.a)(U,2),D=I[0],F=I[1];function q(){c(),d(),g(),T()}r.a.useEffect((function(){_.getUserInfo().then((function(e){F(e)})).catch((function(e){alert(e)}))}),[]);var J=r.a.useState([]),R=Object(u.a)(J,2),B=R[0],G=R[1];return r.a.useEffect((function(){_.getInitialCards().then((function(e){G(e.map((function(e){return{_id:e._id,name:e.name,link:e.link,likes:e.likes,owner:e.owner}})))})).catch((function(e){alert(e)}))}),[]),Object(a.jsx)(m.Provider,{value:D,children:Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(p,{}),Object(a.jsx)(f,{onEditAvatar:function(){g(!b)},onAddPlace:function(){d(!l)},onEditProfile:function(){c(!n)},onCardClick:S,onImageClick:function(){T(!P)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===D._id}));_.changeLikeCardStatus(e._id,t).then((function(t){var n=B.map((function(n){return n._id===e._id?t:n}));G(n)})).catch((function(e){alert(e)}))},onCardDelete:function(e){_.deleteCard(e._id).then((function(){var t=e._id,n=B.filter((function(e){return e._id!==t}));G(n)})).catch((function(e){alert(e)}))},cards:B}),Object(a.jsx)(O,{}),Object(a.jsx)(x,{isOpen:n,onClose:q,onUpdateUser:function(e){_.setUserInfo(e).then((function(e){F(e),q()}))}}),Object(a.jsx)(k,{isOpen:l,onClose:q,onAddPlace:function(e){_.makeNewCard(e).then((function(e){G([e].concat(Object(s.a)(B))),q()})).catch((function(e){alert(e)}))}}),Object(a.jsx)(v,{name:"submit",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonTitle:"\u0414\u0430",onClose:q,children:""}),Object(a.jsx)(C,{isOpen:b,onClose:q,onUpdateAvatar:function(e){_.sethUserAvatar(e).then((function(e){F(e),q()}))}}),Object(a.jsx)(N,{card:E,onClose:q,isOpen:P})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root")),y()}},[[17,1,2]]]);
//# sourceMappingURL=main.bdc42067.chunk.js.map