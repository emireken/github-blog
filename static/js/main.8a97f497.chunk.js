(this["webpackJsonpegek-blog-app"]=this["webpackJsonpegek-blog-app"]||[]).push([[0],{136:function(e,n,t){e.exports=t(491)},490:function(e,n,t){},491:function(e,n,t){"use strict";t.r(n);var r,o,a,i,c,l,u,s,d,m=t(0),p=t.n(m),b=t(122),f=t.n(b),g=t(14),h=t(13),x=t(123),v=t(5),w="Z2hwXzRTeTBaelVzd29BZHR6SXNOa2JmaXhSY3B2UGUzWDBnOHZWYg==",E="emireken",k="egek-blog-app",j=!1,O="6a0cb037efb98b792eb9",y="1f05ddbdec4944d10016f40bdadece632c986b27",C="Emir Gokberk Eken",S="IT Project Leader / Software Analyst / Jr. Software Developer  ",z="emirgokberk.eken@gmail.com  ",A={backgroundColor:"#f1f6f8",backgroundColorDark:"#4C566A",titleColor:"#ff5252",titleColorDark:"#16a085",subtitleColor:"#37474f",subtitleColorDark:"#D8DEE9",contactColor:"#37474f",contactColorDark:"#D8DEE9"},T=t(36),M=new T.a({uri:"https://api.github.com/graphql",request:function(e){e.setContext({headers:{authorization:"Bearer ".concat(atob(w))}})}}),B=function(e){return new T.a({uri:"https://api.github.com/graphql",request:function(n){n.setContext({headers:{authorization:"Bearer ".concat(e)}})}})},U=t(81),D=t(7),R=t(4),F=t(121),L=t(35),H=A,I=H.backgroundColor,Y=H.backgroundColorDark,W=v.c.div(r||(r=Object(R.a)(["\n  position: relative;\n  padding: 5em;\n  text-align: center;\n  background: ",";\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n\n  @media only screen and (max-width: 768px) {\n    padding: 3em;\n  }\n"])),(function(e){return"light"===e.theme.mode?I:Y})),_=v.c.div(o||(o=Object(R.a)(["\n  margin: 0 auto;\n  padding: 0 1em;\n  max-width: 1140px;\n  text-align: center;\n"]))),P=A,N=P.titleColor,G=P.titleColorDark,q=v.c.h1(a||(a=Object(R.a)(["\n  font-weight: 700;\n  line-height: 1.15;\n  margin: 1.25rem 0;\n  font-size: 4.5em;\n  text-align: center;\n  color: ",";\n\n  @media only screen and (max-width: 768px) {\n    font-size: 3em;\n  }\n"])),(function(e){return"light"===e.theme.mode?N:G})),J=A,Q=J.subtitleColor,X=J.subtitleColorDark,Z=v.c.h1(i||(i=Object(R.a)(["\n  font-weight: 400;\n  color: ",";\n  line-height: 1.15;\n  margin: 1.25rem 0;\n  font-size: 2em;\n  text-align: center;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 2em;\n  }\n"])),(function(e){return"light"===e.theme.mode?Q:X})),V=A,K=V.contactColor,$=V.contactColorDark,ee=v.c.h1(c||(c=Object(R.a)(["\n  font-weight: 400;\n  color: ",";\n  line-height: 1.15;\n  margin: 1.25rem 0;\n  font-size: 1.5em;\n  text-align: center;\n\n  @media only screen and (max-width: 768px) {\n    font-size: 2em;\n  }\n"])),(function(e){return"light"===e.theme.mode?K:$})),ne=function(){return p.a.createElement(W,null,p.a.createElement(me,{isAbsolute:!0}),p.a.createElement(_,null,p.a.createElement(q,null,C),p.a.createElement(Z,null,S),p.a.createElement(ee,null,z)))},te=t(15),re=t.n(te),oe=t(25),ae=t(130),ie=t(131),ce=j,le=O,ue=v.c.div(l||(l=Object(R.a)(["\n  display: ",";\n  position: ",";\n  top: 10px;\n  right: 10px;\n"])),ce?"block":"none",(function(e){return e.absolute?"absolute":"initial"})),se=v.c.button(u||(u=Object(R.a)(["\n  -webkit-appearance: none;\n  background: linear-gradient(180deg, rgb(136, 220, 109) 0%, rgb(92, 168, 65) 100%);\n  color: #FFF;\n  border: none;\n  padding: 8px 16px;\n  font-size: 16px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: 0.2s;\n  outline: 0;\n\n  :hover {\n    box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.10);\n  }\n"]))),de=v.c.span(s||(s=Object(R.a)(["\n  color: #FFF;\n  font-size: 18px;\n"]))),me=function(e){var n=e.isAbsolute,t=localStorage.getItem("githubToken")||!1,r=function(){var e=Object(oe.a)(re.a.mark((function e(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.location.href="https://github.com/login/oauth/authorize?client_id="+le;case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return p.a.createElement(ue,{absolute:n},t?p.a.createElement(de,null,"Logged in as ",localStorage.getItem("githubUsername")):p.a.createElement(se,{onClick:r},p.a.createElement(ae.a,{icon:ie.a})," Log in"))};function pe(e){var n=e.fill;return p.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:n},p.a.createElement("g",{fill:"none","fill-rule":"evenodd"},p.a.createElement("g",{transform:"translate(1 1)","stroke-width":"2"},p.a.createElement("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),p.a.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},p.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))}var be,fe,ge,he,xe,ve,we,Ee,ke,je,Oe,ye,Ce,Se,ze,Ae,Te,Me,Be,Ue,De,Re,Fe,Le=v.c.span(d||(d=Object(R.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n"]))),He=function(){return p.a.createElement(Le,null,p.a.createElement(pe,{fill:"#2ecc71"}))},Ie=v.c.div(be||(be=Object(R.a)(["\n  margin: 2rem auto 0;\n  width: 90%;\n  max-width: 700px;\n  padding: 20px 10px;\n"]))),Ye=v.c.div(fe||(fe=Object(R.a)(["\n  cursor: pointer;\n  margin-bottom: 6rem;\n  border-radius: 10px;\n  padding: 10px;\n  transition: 0.2s;\n  position: relative;\n\n  :hover {\n    background-color: ",";\n  }\n"])),(function(e){return"light"===e.theme.mode?"#F5F5F5":"#3B4252"})),We=v.c.div(ge||(ge=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),_e=v.c.div(he||(he=Object(R.a)(["\n  display: inline-block;\n  background: #009bbb;\n  border-radius: 3px;\n  padding: 3px 15px;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: ",';\n  font-weight: 300;\n  line-height: 28px;\n  font-family: "Quicksand";\n  margin-right: 10px;\n'])),(function(e){return e.theme.body})),Pe=function(e){var n=e.value;return p.a.createElement(_e,{key:n.id,style:{backgroundColor:"#".concat(n.color)}},n.name)},Ne=v.c.h2(xe||(xe=Object(R.a)(["\n  font-size: 34px;\n"]))),Ge=v.c.p(ve||(ve=Object(R.a)(["\n  font-size: 18px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n"]))),qe=v.c.p(we||(we=Object(R.a)(["\n  color: #b5b5b5;\n  font-size: 15px;\n  position: absolute;\n  top: -10px;\n  right: 10px;\n"]))),Je=function(e){var n=e.time;return p.a.createElement(qe,null,n," Min Read")},Qe=t(56),Xe=t.n(Qe),Ze=function(e){var n=e.blog,t=Object(m.useState)([]),r=Object(g.a)(t,2),o=r[0],a=r[1],i=Object(D.f)();return Object(m.useEffect)((function(){var e=n.labels.nodes.filter((function(e){return"blog"!==e.name}));a(e)}),[n.labels.nodes]),p.a.createElement(Ye,null,p.a.createElement(We,null,p.a.createElement(p.a.Fragment,null,o.map((function(e,n){return p.a.createElement(Pe,{value:e,key:n})}))),p.a.createElement("n",null),p.a.createElement(Je,{time:Xe()(n.body).minutes})),p.a.createElement("div",{onClick:function(){return e=n.title,t=n.number,void i.push("/blog/".concat(e,"/").concat(t));var e,t}},p.a.createElement(Ne,null,n.title),p.a.createElement(Ge,null,n.bodyText)))},Ve=Object(F.a)(Ee||(Ee=Object(R.a)(['\n{\n  repository(owner: "','", name: "','") {\n    issues(first: 100, states: OPEN, filterBy: { labels: "blog" }, orderBy: { direction: DESC, field: CREATED_AT }) {\n      nodes {\n        title\n        body\n        bodyHTML\n        bodyText\n        number\n        labels(first: 100) {\n          nodes {\n            color\n            name\n            id\n          }\n        }\n        author {\n          url\n          avatarUrl\n          login\n        }\n        updatedAt\n        id\n      }\n    }\n  }\n}\n'])),E,k),Ke=function(){var e=Object(m.useState)([]),n=Object(g.a)(e,2),t=n[0],r=n[1],o=Object(L.a)(Ve),a=o.loading,i=o.error,c=o.data;return Object(m.useEffect)((function(){var e,n;a||(i&&console.error(i),c&&r(null===c||void 0===c||null===(e=c.repository)||void 0===e||null===(n=e.issues)||void 0===n?void 0:n.nodes))}),[a,i,c]),p.a.createElement(p.a.Fragment,null,p.a.createElement(ne,null),p.a.createElement(Ie,null,a?p.a.createElement(He,null):t.map((function(e,n){return p.a.createElement(Ze,{blog:e,key:n})}))))},$e=t(57),en=t.n($e),nn=t(58),tn=t(84),rn={THUMBS_UP:"\ud83d\udc4d",THUMBS_DOWN:"\ud83d\udc4e",LAUGH:"\ud83d\ude04",HOORAY:"\ud83c\udf89",CONFUSED:"\ud83d\ude15",HEART:"\u2764\ufe0f",ROCKET:"\ud83d\ude80",EYES:"\ud83d\udc40"},on=function(e){return function(e){var n={};return Object.keys(e).forEach((function(t){n[e[t]]=t})),n}(rn)[e]||""},an=function(){var e=Object(oe.a)(re.a.mark((function e(){var n,t,r;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=localStorage.getItem("githubToken"))){e.next=10;break}return e.next=4,fetch("https://api.github.com/user",{headers:new Headers({authorization:"Bearer ".concat(n)})});case 4:return t=e.sent,e.next=7,t.json();case 7:return(r=e.sent).token=n,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),cn=v.c.div(ke||(ke=Object(R.a)(["\n  margin: 2rem auto 0;\n  width: 90%;\n  max-width: 700px;\n  padding: 20px 10px;\n  position: relative;\n"]))),ln=v.c.h1(je||(je=Object(R.a)(["\n  @media only screen and (max-width: 768px) {\n    font-size: 30px;\n  }\n"]))),un=v.c.p(Oe||(Oe=Object(R.a)(["\n  color: ",";\n  font-weight: 400;\n  font-size: 14px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n"])),(function(e){return e.theme.toggleBorder})),sn=v.c.a(ye||(ye=Object(R.a)(["\n  font-size: 14px;\n  text-decoration: none;\n  transition-duration: 0.15s, 0.15s, 0.15s;\n  transition-timing-function: ease-in, ease-in, ease-in;\n  transition-delay: 0s, 0s, 0s;\n  color: ",";\n  \n  :hover {\n    color: ",";\n  }\n"])),(function(e){return e.theme.toggleBorder}),(function(e){return e.theme.text})),dn=v.c.span(Ce||(Ce=Object(R.a)(["\n  position: static;\n  bottom: 60px;\n  animation-name: scale-in;\n  animation-duration: 0.15s;\n  animation-timing-function: cubic-bezier(0.2, 0, 0.13, 1.5);\n"]))),mn=v.c.button(Se||(Se=Object(R.a)(['\n  outline: none;\n  border: 1px solid;\n  font-size: 22px;\n  font-family: "Quicksand", serif;\n  border-radius: 5px;\n  padding: 0px 20px 0 30px;\n  cursor: pointer;\n  position: relative;\n  background-color: ',";\n  color: ",";\n\n  :hover {\n    background-color: ",';\n    color: white;\n  }\n\n  :before {\n    content: "\\27A4";\n    position: absolute;\n    transform: translateY(-50%) rotate(180deg);\n    left: 10px;\n    font-size: 16px;\n    top: 54%;\n  }\n'],['\n  outline: none;\n  border: 1px solid;\n  font-size: 22px;\n  font-family: "Quicksand", serif;\n  border-radius: 5px;\n  padding: 0px 20px 0 30px;\n  cursor: pointer;\n  position: relative;\n  background-color: ',";\n  color: ",";\n\n  :hover {\n    background-color: ",';\n    color: white;\n  }\n\n  :before {\n    content: "\\\\27A4";\n    position: absolute;\n    transform: translateY(-50%) rotate(180deg);\n    left: 10px;\n    font-size: 16px;\n    top: 54%;\n  }\n'])),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return"light"===e.theme.mode?"#373737":"#6B8096"})),pn=v.c.div(ze||(ze=Object(R.a)(["\n  display: flex;\n  align-items: center;\n"]))),bn=v.c.img(Ae||(Ae=Object(R.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 40px;\n  margin: 10px;\n  margin-left: 0px;\n"]))),fn=v.c.p(Te||(Te=Object(R.a)(["\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-size: 16px;\n  color: ",";\n"])),(function(e){return e.theme.text})),gn=t(135),hn=t(496),xn=t(495),vn=function(e){var n=e.children,t=Object(gn.a)(e,["children"]);return p.a.createElement("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",className:"blog-post-anchor"},n,p.a.createElement("style",{jsx:"true"},"\n        a {\n          color: #484848;\n          font-weight: 400;\n        }\n      "))},wn=function(e){var n=e.children;return p.a.createElement(hn.a,{language:"javascript",style:xn.a},n.props.children)},En=function(e){var n=e.comment;return p.a.createElement(kn,null,p.a.createElement(pn,null,p.a.createElement(bn,{src:n.author.avatarUrl,alt:n.author.login}),p.a.createElement("div",null,p.a.createElement(fn,null,n.author.login),p.a.createElement(un,null,en()(n.updatedAt).format("DD MMM YYYY")))),p.a.createElement(nn.a,{options:{overrides:{a:{component:vn},pre:{component:wn}}}},n.body))},kn=v.c.div(Me||(Me=Object(R.a)(["\n  margin-top: 3rem;\n  border-radius: 10px;\n  padding: 10px 30px;\n  position: relative;\n  color: ",";\n  border: "," solid 1px;\n  font-size: 16px;\n"])),(function(e){return e.theme.text}),(function(e){return e.theme.text})),jn=v.c.a(Be||(Be=Object(R.a)(['\n  outline: none;\n  border: 1px solid;\n  font-size: 22px;\n  font-family: "Quicksand", serif;\n  border-radius: 5px;\n  padding: 0px 20px 0 20px;\n  cursor: pointer;\n  position: relative;\n  background-color: ',";\n  color: ",";\n  text-decoration: none;\n  margin: auto;\n\n  :hover {\n    background-color: ",";\n    color: white;\n  }\n"])),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return"light"===e.theme.mode?"#373737":"#6B8096"})),On=v.c.div(Ue||(Ue=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 3rem;\n"]))),yn=function(e){var n=e.postUrl,t=e.comments;return p.a.createElement(p.a.Fragment,null,p.a.createElement(On,null,p.a.createElement(jn,{href:n+"#issue-comment-box",target:"_blank"},"Post a comment")),t.map((function(e,n){return p.a.createElement(En,{comment:e,key:n})})))};function Cn(){var e=parseInt(window.location.href.split("/").pop()),n=Object(F.a)(De||(De=Object(R.a)(['{\n    repository(owner: "','", name: "','") {\n      issue(number: ',") {\n        title\n        body\n        bodyHTML\n        url\n        bodyText\n        number\n        bodyHTML\n        author {\n          url\n          avatarUrl\n          login\n        }\n        reactions(first:100){\n          nodes{\n            content\n            user{\n              id\n              login\n            }\n          }\n        }\n        updatedAt\n        id\n        comments(first:100) {\n          nodes {\n            author {\n              ... on User {\n                avatarUrl\n                name\n                login\n              }\n            }\n            body\n            bodyHTML\n            bodyText\n            publishedAt\n            updatedAt\n          }\n        }\n      }\n    }\n  }\n  "])),E,k,e),t=Object(m.useState)([]),r=Object(g.a)(t,2),o=r[0],a=r[1],i=Object(m.useState)(""),c=Object(g.a)(i,2),l=c[0],u=c[1],s=Object(m.useState)(!1),d=Object(g.a)(s,2),b=d[0],f=d[1],h=Object(m.useState)([]),x=Object(g.a)(h,2),v=x[0],w=x[1],j=Object(m.useState)([]),O=Object(g.a)(j,2),y=O[0],C=O[1],S=Object(L.a)(n),z=S.loading,A=S.error,T=S.data,M=Object(m.useRef)(null),U=localStorage.getItem("githubToken"),D=Object(m.useCallback)((function(e){var n=[];e.forEach((function(e){var t,r={by:e.user.login,emoji:(t=e.content,rn[t]||"")};n.push(r)})),w(n)}),[]),H=function(){var e=Object(oe.a)(re.a.mark((function e(n){var t,r,o;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v,e.next=3,an();case 3:if(r=e.sent,0!==t.filter((function(e){return e.emoji===n&&e.by===r.login})).length){e.next=12;break}return o={by:r.login,emoji:n},e.next=9,B(U).mutate({mutation:Object(F.a)(Re||(Re=Object(R.a)(['\n          mutation AddReaction {\n            addReaction(input:{subjectId:"','",content:',',clientMutationId:"','"}) {\n              reaction {\n                id\n              }\n            }\n          }\n        '])),l,on(n),r.node_id)});case 9:t.push(o),e.next=15;break;case 12:return e.next=14,B(U).mutate({mutation:Object(F.a)(Fe||(Fe=Object(R.a)(['\n          mutation RemoveReaction {\n            removeReaction(input:{subjectId:"','",content:',',clientMutationId:"','"}) {\n              reaction {\n                id\n              }\n            }\n          }\n        '])),l,on(n),r.node_id)});case 14:t=t.filter((function(e){return!(e.by===r.login&&e.emoji===n)}));case 15:w(t),M.current.forceUpdate(),f(!1);case 18:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();if(Object(m.useEffect)((function(){if(!z&&T){var e=T.repository.issue;u(e.id),a(e),D(e.reactions.nodes),C(e.comments.nodes)}}),[z,A,T,D]),z)return p.a.createElement(He,null);return p.a.createElement(p.a.Fragment,null,o.title&&p.a.createElement(cn,null,p.a.createElement(mn,{onClick:function(){return window.history.go(),void window.history.back()}},"Back"),p.a.createElement(ln,null,o.title),p.a.createElement("div",null,p.a.createElement(pn,null,p.a.createElement(bn,{src:o.author.avatarUrl,alt:o.author.login}),p.a.createElement("div",null,p.a.createElement(fn,null,o.author.login),p.a.createElement(un,null,en()(o.updatedAt).format("DD MMM YYYY")," .",Xe()(o.body).minutes," Min Read .",p.a.createElement(sn,{href:o.url,target:"_black"},"View On Github"))))),p.a.createElement(nn.a,{options:{overrides:{a:{component:vn},pre:{component:wn}}}},o.body),b&&p.a.createElement(dn,null,U?p.a.createElement(tn.GithubSelector,{onSelect:function(e){return H(e)}}):p.a.createElement(me,{isAbsolute:!1})),p.a.createElement(tn.GithubCounter,{ref:M,counters:v,onSelect:function(e){return H(e)},onAdd:function(){return f(!b)}}),p.a.createElement(yn,{postUrl:o.url,comments:y})))}var Sn,zn=(0,t(18).createBrowserHistory)(),An=function(){return p.a.createElement(U.a,{history:zn},p.a.createElement(D.c,null,p.a.createElement(D.a,{exact:!0,path:"/",component:Ke}),p.a.createElement(D.a,{exact:!0,path:"/blog/:title/:issueNumber",component:Cn})))},Tn=j,Mn=O,Bn=y,Un=function(){var e=Object(m.useState)(!0),n=Object(g.a)(e,2),t=n[0],r=n[1],o=function(){var e=Object(oe.a)(re.a.mark((function e(n){var t;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",{method:"POST",body:new URLSearchParams({client_id:Mn,client_secret:Bn,code:n}),headers:new Headers({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"})});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),a=function(){var e=Object(oe.a)(re.a.mark((function e(){var n,t;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,an();case 2:n=e.sent,t=n.login,localStorage.setItem("githubUsername",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.useEffect)((function(){var e=new URLSearchParams(window.location.search);o(e.get("code")).then((function(e){e&&(localStorage.setItem("githubToken",e.access_token),a().then((function(){return r(!1)})))}))}),[]),Tn&&t?p.a.createElement(He,null):window.location.replace(window.location.origin+window.location.pathname)};function Dn(){return p.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p.a.createElement("circle",{cx:"12",cy:"12",r:"5"}),p.a.createElement("path",{d:"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"}))}function Rn(){return p.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p.a.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}))}var Fn,Ln=v.c.button(Sn||(Sn=Object(R.a)(["\n  background-color: ",";\n  border: 2px solid ",";\n  color: ",";\n  width: 70px;\n  height: 70px;\n  outline: none;\n  border-radius: 50%;\n  transition: all 0.1s ease-in-out;\n  color: white;\n  text-align: center;\n  position: fixed;\n  cursor: pointer;\n  right: 30px;\n  bottom: 30px;\n  box-shadow:\n  0 2.8px 2.2px rgba(0, 0, 0, 0.034),\n  0 6.7px 5.3px rgba(0, 0, 0, 0.048),\n  0 12.5px 10px rgba(0, 0, 0, 0.06),\n  0 22.3px 17.9px rgba(0, 0, 0, 0.072),\n  0 41.8px 33.4px rgba(0, 0, 0, 0.086),\n  0 100px 80px rgba(0, 0, 0, 0.12);\n  }"])),(function(e){return e.theme.background}),(function(e){return e.theme.background}),(function(e){return e.theme.text})),Hn=function(e){var n=e.theme,t=e.toggleTheme;return p.a.createElement(Ln,{onClick:t},"light"===n?p.a.createElement(Rn,null):p.a.createElement(Dn,null))},In=Object(v.b)(Fn||(Fn=Object(R.a)(["\n  body {\n    background: ",";\n    color: ",";\n    transition: all 0.25s linear;\n  }\n  "])),(function(e){return e.theme.body}),(function(e){return e.theme.text})),Yn={mode:"light",body:"#fff",text:"#363537",toggleBorder:"#070707",background:"#363537"},Wn={mode:"dark",body:"#2E3440",text:"#FAFAFA",toggleBorder:"#6B8096",background:"#999"},_n=function(){var e=new URLSearchParams(window.location.search),n=function(){var e=Object(m.useState)("light"),n=Object(g.a)(e,2),t=n[0],r=n[1],o=function(e){window.localStorage.setItem("theme",e),r(e)};return Object(m.useEffect)((function(){var e=window.localStorage.getItem("theme");e&&r(e)}),[]),[t,function(){o("light"===t?"dark":"light")}]}(),t=Object(g.a)(n,2),r=t[0],o=t[1],a="light"===r?Yn:Wn;return e.get("code")?p.a.createElement(Un,null):p.a.createElement(p.a.Fragment,null,p.a.createElement(x.Helmet,null,p.a.createElement("title",null,C),p.a.createElement("meta",{charSet:"utf-8"}),p.a.createElement("meta",{name:"description",content:S}),p.a.createElement("meta",{name:"contact",content:z}),p.a.createElement("meta",{name:"theme-color",content:A.backgroundColor})),p.a.createElement(h.a,{client:M},p.a.createElement(v.a,{theme:a,toggleTheme:o},p.a.createElement(In,null),p.a.createElement(An,null),p.a.createElement(Hn,{theme:r,toggleTheme:o}))))},Pn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Nn(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(490);f.a.render(p.a.createElement(_n,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/egek-blog-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/egek-blog-app","/service-worker.js");Pn?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Nn(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Nn(n,e)}))}}()}},[[136,1,2]]]);
//# sourceMappingURL=main.8a97f497.chunk.js.map