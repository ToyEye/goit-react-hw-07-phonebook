(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{30:function(e,n,t){},31:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a,r,c,o,i,b,d,s,l=t(0),j=t.n(l),u=t(12),p=t.n(u),x=(t(30),t(31),t(2)),m=t(3),O=m.a.div(a||(a=Object(x.a)(["\n  max-width: 1120px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px;\n"]))),h=t(17),f=t(11),g=t(5),v=t(6),C=t(25),w={addContact:Object(v.b)("contact/addContact",(function(e,n){return{payload:{id:Object(C.a)(),name:e,number:n}}})),deleteContact:Object(v.b)("contact/delete"),filterChange:Object(v.b)("contact/filter")},y=function(e){return e.contacts.contacts},k=function(e){return e.contacts.filter},A=function(e){var n=y(e),t=k(e).toLocaleLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))},z=m.a.button(r||(r=Object(x.a)(["\n  padding: 5px 15px;\n  width: 110px;\n  margin-right: auto;\n  margin-left: auto;\n  border: none;\n  border-radius: 5px;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n"]))),S=m.a.input(c||(c=Object(x.a)(["\n  width: 220px;\n  padding: 5px 15px;\n  border-radius: 5px;\n  border-color: #d4d4d4;\n\n  &:hover,\n  &:active {\n    border-color: #7cb1ec;\n  }\n"]))),E=m.a.label(o||(o=Object(x.a)(["\n  margin-bottom: 10px;\n  &:hover,\n  &:active {\n    border-color: #7cb1ec;\n  }\n"]))),D=m.a.p(i||(i=Object(x.a)(["\n  margin-bottom: 5px;\n"]))),J=t(1),L=m.a.form(b||(b=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  width: 450px;\n  padding: 10px 15px;\n  border: 1px solid black;\n  border-radius: 5px;\n"])));function N(){var e=Object(l.useState)(""),n=Object(h.a)(e,2),t=n[0],a=n[1],r=Object(l.useState)(""),c=Object(h.a)(r,2),o=c[0],i=c[1],b=Object(g.c)(y),d=Object(g.b)(),s=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":a(r);break;case"number":i(r);break;default:return}},j=function(){a(""),i("")};return Object(J.jsxs)(L,{onSubmit:function(e){e.preventDefault(),function(e){var n=e.name,t=e.number;b.find((function(e){return e.name===n}))?f.b.error("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"):(f.b.success("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d"),d(w.addContact(n,t)))}({name:t,number:o}),j()},children:[Object(J.jsxs)(E,{children:[" ",Object(J.jsx)(D,{children:"Name"}),Object(J.jsx)(S,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",placeholder:"Enter your name",required:!0,value:t,onChange:s})]}),Object(J.jsxs)(E,{children:[" ",Object(J.jsx)(D,{children:"Name"}),Object(J.jsx)(S,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter your number",value:o,onChange:s})]}),Object(J.jsx)(z,{type:"submit",children:"Add contact"})]})}var Z,q,B,F,K,M,P=m.a.section(d||(d=Object(x.a)(["\n  margin-top: 25px;\n  margin-bottom: 25px;\n  text-align: center;\n"]))),H=m.a.h1(s||(s=Object(x.a)(["\n  font-weight: 600;\n  font-size: 20px;\n  margin-bottom: 25px;\n  text-align: center;\n"]))),I=m.a.li(Z||(Z=Object(x.a)(["\n  color: black;\n  &:not(:last-child) {\n    margin-bottom: 25px;\n  }\n"]))),R=m.a.p(q||(q=Object(x.a)(["\n  color: black;\n  margin-bottom: 15px;\n"]))),$=function(e){var n=e.id,t=e.name,a=e.number,r=Object(g.b)();return Object(J.jsxs)(I,{id:n,children:[Object(J.jsxs)(R,{children:[t," : ",a]}),Object(J.jsx)(z,{onClick:function(){return r(w.deleteContact(n))},type:"button",children:"Delete"})]},n)},G=m.a.ul(B||(B=Object(x.a)(["\n  width: 450px;\n  padding: 15px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  border: 1px solid black;\n  border-radius: 5px;\n"]))),Q=function(){var e=Object(g.c)(A);return Object(J.jsx)(G,{children:e.map((function(e){var n=e.name,t=e.id,a=e.number;return Object(J.jsx)($,{name:n,id:t,number:a},t)}))})},T=m.a.div(F||(F=Object(x.a)(["\n  margin-left: auto;\n  margin-top: auto;\n"]))),U=m.a.a(K||(K=Object(x.a)(["\n  color: orange;\n  font-size: 20px;\n  font-weight: 600;\n"]))),V=m.a.p(M||(M=Object(x.a)(["\n  font-size: 18px;\n  font-weight: 500;\n  color: orange;\n  text-align: right;\n"]))),W=function(){return Object(J.jsx)(T,{children:Object(J.jsxs)(V,{children:["Developed by"," ",Object(J.jsx)(U,{href:"https://www.linkedin.com/in/alexey-korotenko-379613219/",children:"Alexey Korotenko"})]})})},X=function(){var e=Object(g.c)(k),n=Object(g.b)();return Object(J.jsxs)(E,{children:[Object(J.jsx)(D,{children:"Find contact by name"}),Object(J.jsx)(S,{type:"text",value:e,onChange:function(e){n(w.filterChange(e.target.value))}})]})};function Y(){return Object(J.jsxs)(O,{children:[Object(J.jsx)(f.a,{toastOptions:{error:{duration:2e3}}}),Object(J.jsxs)(P,{children:[Object(J.jsx)(H,{children:"Phonebook"}),Object(J.jsx)(N,{})]}),Object(J.jsxs)(P,{children:[Object(J.jsx)(H,{children:"Contacts"}),Object(J.jsx)(X,{}),Object(J.jsx)(Q,{})]}),Object(J.jsx)(W,{})]})}var _,ee=t(15),ne=t(7),te=t(23),ae=t.n(te),re=t(8),ce=t(4),oe=Object(v.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(_={},Object(re.a)(_,w.addContact,(function(e,n){return[n.payload].concat(Object(ee.a)(e))})),Object(re.a)(_,w.deleteContact,(function(e,n){var t=n.payload;return e.filter((function(e){return e.id!==t}))})),_)),ie=Object(v.c)("",Object(re.a)({},w.filterChange,(function(e,n){return n.payload}))),be=Object(ce.b)({contacts:oe,filter:ie}),de=Object(ee.a)(Object(v.d)({serializableCheck:{ignoredActions:[ne.a,ne.f,ne.b,ne.c,ne.d,ne.e]}})),se={key:"contacts",storage:ae.a,blacklist:["filter"]},le=Object(ne.g)(se,be),je=Object(v.a)({reducer:{contacts:le},middleware:de}),ue=Object(ne.h)(je),pe=t(24);p.a.render(Object(J.jsx)(j.a.StrictMode,{children:Object(J.jsx)(g.a,{store:je,children:Object(J.jsx)(pe.a,{loading:null,persistor:ue,children:Object(J.jsx)(Y,{})})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d139eeb1.chunk.js.map