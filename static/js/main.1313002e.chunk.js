(this.webpackJsonpportofolio=this.webpackJsonpportofolio||[]).push([[0],{22:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(15),i=n.n(a),l=n(7),o=n(2),s=(n(22),n(0)),r=function(e){var t=e.links,n=void 0===t?[]:t;return Object(s.jsxs)("header",{children:[Object(s.jsx)(l.b,{to:"/",className:"logo",children:Object(s.jsx)("h1",{children:"MyPortoPage"})}),Object(s.jsx)("input",{type:"checkbox",id:"toggle-nav",className:"toggle-navbar"}),Object(s.jsxs)("label",{htmlFor:"toggle-nav",className:"toggle-nav-label",children:[Object(s.jsx)("span",{className:"hamburger-icon"}),Object(s.jsx)("span",{className:"close-nav-icon"})]}),Object(s.jsx)("nav",{children:Object(s.jsx)("ul",{children:n?n.map((function(e){return e.sublinks?function(e){return Object(s.jsxs)("li",{className:"nav-parent-link",children:[Object(s.jsx)(l.b,{className:"nav-link desktop-link",to:e.location,children:e.title}),Object(s.jsxs)("label",{htmlFor:"sublinks-".concat(e.position),className:"nav-link",children:[e.title," +"]}),Object(s.jsx)("input",{type:"checkbox",id:"sublinks-".concat(e.position),className:"sublinks-toggle"}),Object(s.jsx)("ul",{className:"sublinks",children:(t=e.sublinks,t.map((function(e){return Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{className:"nav-link",to:e.location,children:e.title})},e.title)})))})]},e.title);var t}(e):Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{className:"nav-link",to:e.location,children:e.title})},e.title)})):null})})]})},j=(n(32),function(e){var t=e.data,n="left"===t.imagePosition?"image-left":"image-right",c="left"===t.imagePosition?"content-left":"content-right";return Object(s.jsxs)("section",{className:"section-segment",children:[t.imageUrl?Object(s.jsx)("div",{className:"".concat(n," image"),style:{backgroundImage:"url(".concat(t.imageUrl,")")}}):null,t.text&&t.title?Object(s.jsxs)("div",{className:"".concat(c," content"),children:[Object(s.jsx)("h2",{children:t.title}),Object(s.jsx)("p",{children:t.text}),t.link&&t.buttonText?Object(s.jsx)(l.b,{to:t.link,className:"button-slide button",children:t.buttonText}):null]}):null]})}),u=(n(33),function(e){var t=e.links,n=e.social;return Object(s.jsxs)("footer",{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"links",children:t?t.map((function(e){return Object(s.jsx)(l.b,{to:e.location,className:"footer-link",children:e.title},e.title)})):null}),Object(s.jsx)("div",{className:"links",children:n?n.map((function(e){return Object(s.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.location,className:"footer-social-link",children:Object(s.jsx)("i",{className:"bi bi-".concat(e.title)})},e.title)})):null})]}),Object(s.jsxs)("div",{className:"copyright",children:["\xa9 2021 - ",(new Date).getFullYear()]})]})}),b=n(8),m=n(17),p=n.n(m),d=(n(36),function(e){var t=e.from,n=Object(c.useState)(""),a=Object(b.a)(n,2),i=a[0],l=a[1],o=Object(c.useState)(""),r=Object(b.a)(o,2),j=r[0],u=r[1],m=Object(c.useState)(""),d=Object(b.a)(m,2),h=d[0],x=d[1],O=Object(c.useState)(""),g=Object(b.a)(O,2),f=g[0],v=g[1],k=Object(c.useState)(""),N=Object(b.a)(k,2),y=N[0],S=N[1],C=Object(c.useState)(""),F=Object(b.a)(C,2),w=F[0],P=F[1],T=Object(c.useState)(""),Y=Object(b.a)(T,2),J=Y[0],M=Y[1],U=Object(c.useState)(""),D=Object(b.a)(U,2),I=D[0],_=D[1],q=Object(c.useState)(""),z=Object(b.a)(q,2),E=z[0],H=z[1],L="home"===t?"main-page":"";return Object(s.jsxs)("div",{className:"".concat(L," contact-form"),children:[Object(s.jsx)("h1",{children:"Contact me!"}),Object(s.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),M(i?"":"error"),P(j?"":"error"),S(h?"":"error"),_(f?"":"error"),""===i||""===j||""===f||""===h)return null;var t;t=e.target,p.a.sendForm("service_ri4oqmc","template_qo2p8p8",t,"user_1UmZ4XzjHF4eiz5gzMPbv").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)})),x(""),v(""),u(""),l(""),H("success"),setTimeout((function(){H("")}),1500)},children:[Object(s.jsx)("label",{htmlFor:"input-subject",children:"Subject :"}),Object(s.jsx)("input",{name:"subject",autoComplete:"off",className:y,value:h,onChange:function(e){return x(e.target.value)},id:"input-subject",type:"text",placeholder:"Contact"}),Object(s.jsx)("div",{className:"".concat(y," message"),children:"You must enter a valid subject!"}),Object(s.jsx)("label",{htmlFor:"input-name",children:"Full Name :"}),Object(s.jsx)("input",{name:"name",autoComplete:"off",className:w,value:j,onChange:function(e){return u(e.target.value)},id:"input-name",type:"text",placeholder:"John Doe"}),Object(s.jsx)("div",{className:"".concat(w," message"),children:"You must enter a valid name!"}),Object(s.jsx)("label",{htmlFor:"input-email",children:"Email :"}),Object(s.jsx)("input",{name:"email",autoComplete:"off",className:J,value:i,onChange:function(e){return l(e.target.value)},id:"input-email",type:"email",placeholder:"johndoe@gmail.com"}),Object(s.jsx)("div",{className:"".concat(J," message"),children:"You must enter a valid email!"}),Object(s.jsx)("label",{htmlFor:"input-message",children:"Message :"}),Object(s.jsx)("textarea",{name:"message",className:I,value:f,onChange:function(e){return v(e.target.value)},id:"input-message",placeholder:"Hi there!"}),Object(s.jsx)("div",{className:"".concat(I," message"),children:"You must enter a valid message!"}),Object(s.jsx)("div",{className:"".concat(E," message"),children:"Your message has been sent!"}),Object(s.jsx)("button",{className:"button-submit",type:"submit",children:"Submit"})]})]})}),h=[{title:"home",location:"/"},{title:"about me",location:"/about"},{title:"procjects",location:"/projects",sublinks:[{title:"YouTube search app",location:"/project/youtube-api"},{title:"Landing page",location:"/project/landing-page"},{title:"E-comerce page",location:"/projects/ecomerce-page"}],position:"second"},{title:"contact me",location:"/contact"}],x=[{title:"about me",location:"/about"},{title:"contact me",location:"/contact"}],O=[{title:"facebook",location:"https://www.facebook.com/jeanpierre.novak.391"},{title:"instagram",location:"https://www.instagram.com/jeanpierrenovak/"},{title:"github",location:"https://github.com/Jean-PierreNovak0612"}],g={imageUrl:"".concat("/portofolio","/images/code.png"),title:"Check out my project list!",text:"On this site I included a small project list that contains some descriptions and links to the projects",link:"/projects",imagePosition:"left",buttonText:"Check out the list"},f={imageUrl:"".concat("/portofolio","/images/me.png"),title:"But who am I?",text:"I am a 20 years old self-taught web developer. My journey started in 2018 and is still ongoing...",link:"/projects",imagePosition:"right",buttonText:"Read more"},v=[{type:"input",inputType:"text",label:"Subject",placeholder:"Contact",id:"input-subject"},{type:"input",inputType:"text",label:"Full Name",placeholder:"John Doe",id:"input-name"},{type:"input",inputType:"email",label:"Email",placeholder:"johndoe@gmail.com",id:"input-email"},{type:"textarea",label:"Message",placeholder:"Hi there!",id:"input-message"}],k=(n(37),function(){return Object(s.jsxs)("main",{children:[Object(s.jsx)(j,{data:g}),Object(s.jsx)(j,{data:f}),Object(s.jsx)(d,{from:"home",formFields:v}),Object(s.jsx)(u,{links:x,social:O})]})}),N=(n(38),function(){return Object(s.jsxs)("main",{children:[Object(s.jsx)(d,{}),Object(s.jsx)(u,{links:x,social:O})]})}),y=function(){return Object(s.jsx)("main",{children:"ProjectList"})},S=(n(39),function(){return Object(s.jsx)("div",{children:Object(s.jsxs)(l.a,{basename:"/portofolio",children:[Object(s.jsx)(r,{links:h}),Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{path:"/",exact:!0,component:k}),Object(s.jsx)(o.a,{path:"/contact",exact:!0,component:N}),Object(s.jsx)(o.a,{path:"/projects",exact:!0,component:y})]})]})})});i.a.render(Object(s.jsx)(S,{}),document.querySelector("#root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.1313002e.chunk.js.map