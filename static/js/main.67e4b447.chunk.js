(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{69:function(e,t,n){e.exports=n(87)},87:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(17),i=n.n(l),o=n(39),c=n(16),s=n(23),m=n(24),u=n(26),d=n(25),f=n(27),h=n(118),g=n(112),E=n(88),b=n(120),p=n(123),v=n(114),x=n(117),w=n(113),k=n(115),y=function(e){return r.a.createElement(E.a,Object.assign({tag:"header",direction:"row",align:"center",justify:"between",background:"brand",pad:{left:"medium",right:"small",vertical:"small"},elevation:"medium",style:{zIndex:"1"}},e))},j=n(104),S=n(119),I=n(121),C=n(122),O=n(116),A=n(105),P=n(106),z=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={activeIndex:0,posts:[]},n.onRight=function(){var e=n.state,t=e.activeIndex;t<e.posts.length-1&&n.setState({activeIndex:t+1,title:null})},n.onLeft=function(){var e=n.state.activeIndex;e>0&&n.setState({activeIndex:e-1,title:null})},n.postToUrl=function(e){return e.Title.replace(" ","_")},n.findIndex=function(e,t){if(!e)return-1;for(var n=0;n<e.length;n++){if(t===this.postToUrl(e[n]))return n}},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"updatePosts",value:function(e){var t=this;this.setState({posts:e}),e.map(function(n){return fetch(n.Post).then(function(e){return e.text()}).then(function(a){n.Content=a,t.setState({posts:e,activeIndex:e.length-1})})})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.title;this.setState({title:t}),fetch("/posts.json").then(function(e){return e.json()}).then(function(t){return e.updatePosts(t.posts)})}},{key:"render",value:function(){var e=this.state,t=e.activeIndex,n=e.posts,a=e.title;if(a){var l=this.findIndex(n,a);if(-1!==l){if(t!==l)return this.setState({activeIndex:l}),null}else console.log("Post not found")}var i,o,c=t>0?n[t-1].Image:"1px.png",s=n.length>0?n[t].Image:"1px.png",m=n.length>1&&t<n.length-1?n[t+1].Image:"1px.png",u=this.onLeft,d=this.onRight;n.length>0?n[t].Content?(i=n[t].Content,o=n[t].Date):(i="Loading...",o=""):(i="",o="");var f=i,h=o;return r.a.createElement(E.a,{flex:!0,align:"center",justify:"center"},r.a.createElement(j.a,{onLeft:u,onRight:d},r.a.createElement(E.a,{height:"medium",direction:"row"},r.a.createElement(S.a,{areas:[{name:"previcon",start:[0,0],end:[0,1]},{name:"left",start:[1,0],end:[1,0]},{name:"center",start:[2,0],end:[2,0]},{name:"right",start:[3,0],end:[3,0]},{name:"nexticon",start:[4,0],end:[4,1]},{name:"title",start:[1,1],end:[3,1]}],columns:["xxsmall","flex","medium","flex","xxsmall"],rows:["medium","small"]},r.a.createElement(b.a,{fill:!0,icon:r.a.createElement(A.a,null),gridArea:"previcon",onClick:u,hoverIndicator:!0}),r.a.createElement(E.a,{gridArea:"left",overflow:"hidden"},r.a.createElement(I.a,{alignSelf:"end",src:c,fit:"contain",opacity:"0.2"})),r.a.createElement(E.a,{gridArea:"center",direction:"row"},r.a.createElement(I.a,{alignSelf:"center",src:s,fit:"contain"})),r.a.createElement(E.a,{gridArea:"right",overflow:"hidden"},r.a.createElement(I.a,{alignSelf:"start",src:m,fit:"contain",opacity:"0.2"})),r.a.createElement(b.a,{fill:!0,icon:r.a.createElement(P.a,null),gridArea:"nexticon",onClick:d,hoverIndicator:!0})))),r.a.createElement(E.a,{align:"center",flex:!0,width:"large"},r.a.createElement(C.a,{alignSelf:"center"},h),r.a.createElement(O.a,null,f)))}}]),t}(a.Component),L=n(107),R=n(108),B=n(109),F=n(110),T=n(111),D=r.a.createElement(E.a,null,r.a.createElement(E.a,{background:"buttonbg",margin:"xsmall",round:"medium"},r.a.createElement(b.a,{icon:r.a.createElement(L.a,null),label:"Subscribe",href:"/rss.xml",target:"#"})),r.a.createElement(E.a,{background:"buttonbg",margin:"xsmall",round:"medium"},r.a.createElement(b.a,{icon:r.a.createElement(R.a,null),label:"Posts",onClick:function(){}})),r.a.createElement(E.a,{background:"buttonbg",margin:"xsmall",round:"medium"},r.a.createElement(b.a,{icon:r.a.createElement(B.a,null),label:"EMail",href:"mailto:duncan.thomas@gmail.com",target:"#"})),r.a.createElement(E.a,{background:"buttonbg",margin:"xsmall",round:"medium"},r.a.createElement(b.a,{icon:r.a.createElement(F.a,null),label:"Connect",href:"https://www.linkedin.com/in/duncanthomas/",target:"#"})),r.a.createElement(E.a,{background:"buttonbg",margin:"xsmall",round:"medium"},r.a.createElement(b.a,{icon:r.a.createElement(T.a,null),label:"Code",href:"https://github.com/Funcan",target:"#"}))),J={global:{colors:{brand:"#228BE6",buttonbg:"#FFA500",sidebar:"#114583"},font:{family:"Roboto",size:"14px",height:"20px"}}},M=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showSidebar:!1},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showSidebar,n=this.props.post;console.log("Header.render(): Post: "+n);var a=n?r.a.createElement(z,{title:n}):r.a.createElement(z,null);return r.a.createElement(h.a,{theme:J,full:!0},r.a.createElement(g.a.Consumer,null,function(n){return r.a.createElement(E.a,{fill:!0},r.a.createElement(y,null,r.a.createElement(b.a,{icon:r.a.createElement(w.a,null),onClick:function(){return e.setState(function(e){return{showSidebar:!e.showSidebar}})}}),r.a.createElement(p.a,{level:"3",margin:"none"},"funcan.github.io")),r.a.createElement(E.a,{direction:"row",flex:!0,overflow:{horizontal:"hidden"}},t&&"small"===n?r.a.createElement(x.a,null,r.a.createElement(E.a,{background:"sidebar",tag:"header",justify:"end",align:"center",direction:"row"},r.a.createElement(b.a,{icon:r.a.createElement(k.a,null),onClick:function(){return e.setState({showSidebar:!1})}})),r.a.createElement(E.a,{fill:!0,align:"center",justify:"center"},D)):r.a.createElement(v.a,{direction:"horizontal",open:t},r.a.createElement(E.a,{flex:!0,width:"small",background:"sidebar",elevation:"small",align:"center",justify:"center"},D)),r.a.createElement(E.a,{flex:!0,align:"center",justify:"center"},a)))}))}}]),t}(a.Component),U=function(){return r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",render:function(){return r.a.createElement(M,null)}}),r.a.createElement(c.a,{path:"/post/:title",render:function(e){var t=e.match;return r.a.createElement(M,{post:t.params.title})}}),r.a.createElement(c.a,{render:function(){return r.a.createElement("div",null," Sorry, this page does not exist. ")}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(o.a,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[69,1,2]]]);
//# sourceMappingURL=main.67e4b447.chunk.js.map