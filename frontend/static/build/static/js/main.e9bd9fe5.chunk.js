(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},218:function(e,t,n){},219:function(e,t,n){},221:function(e,t,n){},222:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),r=n.n(s),c=n(19),o=n.n(c),i=(n(96),n(97),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,233)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))}),l=n(23),d=n(30),h=n(7),u=n.n(h),j=n(17),b=n(10),p=n(11),m=n(5),O=n(13),f=n(12),g=n(8),v=n(22),x=(n(99),function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={username:"",password:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(p.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return Object(a.jsx)(r.a.Fragment,{children:Object(a.jsx)("div",{className:"d-flex justify-content-center",children:Object(a.jsxs)("form",{className:"col-8 col-sm-6 login",onSubmit:function(t){return e.props.logIn(t,e.state)},children:[Object(a.jsx)("img",{style:{width:"10%",display:"block",margin:"auto",paddingTop:"5%"},src:"https://cdn0.iconfinder.com/data/icons/money-25/192/__-2-512.png",alt:""}),Object(a.jsx)("h5",{className:"Register",children:"Log in"}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{style:{width:"75%",borderRadius:"18px"},type:"text",className:"form-control",placeholder:"Username",id:"username",name:"username",autoComplete:"on",value:this.state.username,onChange:this.handleChange})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{style:{width:"75%",borderRadius:"18px"},type:"password",className:"form-control",placeholder:"Password",id:"password",name:"password",autoComplete:"on",value:this.state.password,onChange:this.handleChange})}),Object(a.jsxs)("div",{className:"form-bottom",children:[Object(a.jsx)("button",{className:"form-button",children:"Log in"}),Object(a.jsx)(l.b,{to:"/Register",children:"Don't have an account?"})]})]})})})}}]),n}(s.Component)),y=(n(104),function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(p.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"d-flex justify-content-center",children:Object(a.jsxs)("form",{className:"col-8 col-sm-6 register",onSubmit:function(t){return e.props.registerUser(t,e.state)},children:[Object(a.jsx)("img",{style:{width:"10%",display:"block",margin:"auto",paddingTop:"5%"},src:"https://cdn0.iconfinder.com/data/icons/money-25/192/__-2-512.png",alt:""}),Object(a.jsx)("h5",{className:"Register",children:"Create Account"}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{style:{width:"75%",borderRadius:"18px"},type:"text",className:"form-control",placeholder:"Username",id:"username",name:"username",autoComplete:"on",value:this.state.username,onChange:this.handleChange})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{style:{width:"75%",borderRadius:"18px"},type:"text",className:"form-control",placeholder:"Email",id:"email",name:"email",autoComplete:"on",value:this.state.email,onChange:this.handleChange})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{style:{width:"75%",borderRadius:"18px"},type:"password",className:"form-control",placeholder:"Password",id:"password1",name:"password1",autoComplete:"on",value:this.state.password1,onChange:this.handleChange})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{style:{width:"75%",borderRadius:"18px"},type:"password",className:"form-control",placeholder:"Confirm Password",id:"password2",name:"password2",autoComplete:"on",value:this.state.password2,onChange:this.handleChange})}),Object(a.jsxs)("div",{className:"form-bottom",children:[Object(a.jsx)("button",{className:"form-button",children:"Register"}),Object(a.jsx)(l.b,{to:"/",children:"Already have an account?"})]})]})})}}]),n}(s.Component)),C=n(37),k=n(230),w=n(231),N=n(15),S=n.n(N),E=(n(105),function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={isEditing:!1,name:a.props.envelope.name,money:a.props.envelope.money},a.handleInput=a.handleInput.bind(Object(m.a)(a)),a.toggleEdit=a.toggleEdit.bind(Object(m.a)(a)),a.handleSave=a.handleSave.bind(Object(m.a)(a)),a}return Object(p.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"toggleEdit",value:function(){this.setState({isEditing:!this.state.isEditing})}},{key:"handleSave",value:function(e){var t={name:this.state.name,money:this.state.money};this.props.editEnvelope(t,this.props.envelope.id),this.toggleEdit()}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"square shadow p-3 mb-5 rounded mr-2",style:{backgroundColor:this.props.color},children:[Object(a.jsx)("div",{children:Object(a.jsx)("span",{children:Object(a.jsx)("button",{onClick:function(){return e.props.deleteEnvelope(e.props.envelope.id)},className:"ml-2",style:{backgroundColor:this.props.color,border:"none",borderRadius:"18px"},children:"x"})})}),Object(a.jsxs)("div",{style:{textAlign:"center"},children:[this.state.isEditing?Object(a.jsx)("input",{type:"text",id:"name",name:"name",value:this.state.name,onChange:this.handleInput,required:!0}):Object(a.jsx)("h3",{children:this.props.envelope.name}),Object(a.jsx)("hr",{}),this.state.isEditing?Object(a.jsx)("input",{type:"number",min:"0",id:"money",name:"money",value:this.state.money,onChange:this.handleInput,required:!0}):Object(a.jsxs)("p",{children:["$",this.props.envelope.money]})]}),this.state.isEditing?Object(a.jsx)("button",{className:"btn btn-link",onClick:this.handleSave,type:"button",children:"Save"}):Object(a.jsx)("button",{className:"btn btn-link",onClick:function(){return e.toggleEdit()},children:"Edit"})]})})}}]),n}(s.Component));var I=function(e){var t=["#ebebeb","#f5a25d","#fa7f72","#389393","#d2d3c9","#0e918c","#f6830f","#bb2205"],n=0,s=e.envelopes.map((function(s){var r=t[n];return n===t.length-1?n=0:n++,Object(a.jsx)(E,{envelope:s,deleteEnvelope:e.deleteEnvelope,editEnvelope:e.editEnvelope,color:r},s.id)}));return Object(a.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"},children:s})},M=n(89),T=(n(201),function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={envelopes:[],show:!1,display:!1,name:"",money:0},a.createEnvelope=a.createEnvelope.bind(Object(m.a)(a)),a.handleModal=a.handleModal.bind(Object(m.a)(a)),a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.deleteEnvelope=a.deleteEnvelope.bind(Object(m.a)(a)),a.handleModal2=a.handleModal2.bind(Object(m.a)(a)),a.editEnvelope=a.editEnvelope.bind(Object(m.a)(a)),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/v1/envelopes/user/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({envelopes:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleModal",value:function(){this.setState({show:!this.state.show})}},{key:"handleModal2",value:function(){this.setState({display:!this.state.display})}},{key:"createEnvelope",value:function(){var e=Object(j.a)(u.a.mark((function e(t,n){var a,s,r,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"X-CSRFToken":S.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(n)},s=function(e){return console.warn(e)},e.next=5,fetch("api/v1/envelopes/user/",a);case 5:return r=e.sent,e.next=8,r.json().catch(s);case 8:c=e.sent,o=[].concat(Object(C.a)(this.state.envelopes),[c]),this.setState({envelopes:o});case 11:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"deleteEnvelope",value:function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a,s,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"DELETE",headers:{"X-CSRFToken":S.a.get("csrftoken"),"Content-Type":"application/json"}},a=function(e){return console.warn(e)},e.next=4,fetch("api/v1/envelopes/user/".concat(t,"/"),n);case 4:return s=e.sent,e.next=7,s.json().catch(a);case 7:e.sent,r=Object(C.a)(this.state.envelopes),c=r.findIndex((function(e){return e.id===t})),r.splice(c,1),this.setState({envelopes:r});case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"editEnvelope",value:function(){var e=Object(j.a)(u.a.mark((function e(t,n){var a,s,r,c,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"PUT",headers:{"X-CSRFToken":S.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(t)},s=function(e){return console.warn(e)},e.next=4,fetch("api/v1/envelopes/user/".concat(n,"/"),a);case 4:return r=e.sent,e.next=7,r.json().catch(s);case 7:c=e.sent,o=Object(C.a)(this.state.envelopes),i=o.findIndex((function(e){return e.id===n})),o[i]=c,this.setState({envelopes:o});case 12:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.envelopes.map((function(e){return e.money})),n=this.state.envelopes.map((function(e){return e.name}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("aside",{children:[Object(a.jsxs)(k.a,{animation:!1,show:this.state.show,onHide:function(){e.handleModal()},children:[Object(a.jsx)(k.a.Header,{closeButton:!0,children:"New Envelope"}),Object(a.jsx)(k.a.Body,{children:Object(a.jsxs)("form",{onSubmit:function(t){e.createEnvelope(t,e.state),e.setState({name:"",money:0})},children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("label",{htmlFor:"name",className:"mr-2",children:"Envelope name"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("label",{htmlFor:"money",className:"mr-2",children:"Money"}),Object(a.jsx)("input",{type:"number",className:"form-control",min:"0",id:"money",name:"money",value:this.state.money,onChange:this.handleChange})]})]}),Object(a.jsx)("button",{className:"mt-2",type:"submit",children:"Create"})]})}),Object(a.jsx)(k.a.Footer,{children:Object(a.jsx)(w.a,{onClick:function(){e.handleModal()},children:"Close"})})]}),Object(a.jsxs)(k.a,{animation:!1,show:this.state.display,onHide:function(){e.handleModal2()},children:[Object(a.jsx)(k.a.Header,{closeButton:!0,children:"Spending habits"}),Object(a.jsx)(k.a.Body,{children:Object(a.jsx)("div",{className:"chart",children:Object(a.jsx)(M.Pie,{data:{datasets:[{data:t,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"]}],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1,labels:n},options:{}})})}),Object(a.jsx)(k.a.Footer,{children:Object(a.jsx)(w.a,{onClick:function(){e.handleModal2()},children:"Close"})})]})]}),Object(a.jsx)(I,{envelopes:this.state.envelopes,deleteEnvelope:this.deleteEnvelope,editEnvelope:this.editEnvelope}),Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsx)(w.a,{className:"aside-buttons",onClick:function(){e.handleModal()},children:Object(a.jsx)("i",{className:"fas fa-plus"})}),Object(a.jsx)(w.a,{className:"aside-buttons ml-2",onClick:function(){e.handleModal2()},children:Object(a.jsx)("i",{className:"fas fa-chart-pie"})})]})]})}}]),n}(s.Component)),F=(n(202),n(90)),R=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={menuOpen:!1},a.handleStateChange=a.handleStateChange.bind(Object(m.a)(a)),a.closeMenu=a.closeMenu.bind(Object(m.a)(a)),a}return Object(p.a)(n,[{key:"handleStateChange",value:function(e){this.setState({menuOpen:e.isOpen})}},{key:"closeMenu",value:function(){this.setState({menuOpen:!1})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(F.bubble,{isOpen:this.state.menuOpen,onStateChange:function(t){return e.handleStateChange(t)},children:[Object(a.jsxs)(l.b,{to:"/dashboard",onClick:function(){return e.closeMenu()},children:[Object(a.jsx)("i",{className:"fas fa-home mr-2"}),"DashBoard"]}),Object(a.jsxs)(l.b,{to:"/social",onClick:function(){return e.closeMenu()},children:[Object(a.jsx)("i",{className:"fas fa-users mr-2"}),"Social"]}),Object(a.jsxs)(l.b,{to:"/guides",onClick:function(){return e.closeMenu()},children:[Object(a.jsx)("i",{className:"fas fa-glasses mr-2"}),"Tips & Guides"]}),Object(a.jsxs)(l.b,{to:"/settings",onClick:function(){return e.closeMenu()},children:[Object(a.jsx)("i",{className:"fas fa-user mr-2"}),"Settings"]})]}),Object(a.jsx)("div",{className:"d-flex flex-row-reverse bd-highlight",children:Object(a.jsx)("button",{className:"navbar-buttons mr-2 p-2 bd-highlight",onClick:this.props.logOut,children:"Log out"})})]})}}]),n}(s.Component),P=(n(218),function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={image:e.image,preview:e.image,message:""},a.addPicture=a.addPicture.bind(Object(m.a)(a)),a.handleImage=a.handleImage.bind(Object(m.a)(a)),a}return Object(p.a)(n,[{key:"addPicture",value:function(){var e=Object(j.a)(u.a.mark((function e(t){var n,a,s,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("avatar",this.state.image),a={method:"POST",headers:{"X-CSRFToken":S.a.get("csrftoken")},body:n},s=function(e){return console.warn(e)},e.next=7,fetch("/api/v1/profile/",a);case 7:return r=e.sent,e.next=10,r.json().catch(s);case 10:c=e.sent,this.props.updateImage(c.avatar);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({image:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"settings shadow p-3 mb-5",children:[Object(a.jsxs)("form",{onSubmit:function(t){return e.addPicture(t,e.state)},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"avatar",children:"Upload a profile picture:"}),Object(a.jsx)("input",{className:"form-control-file",type:"file",id:"avatar",name:"avatar",onChange:this.handleImage}),Object(a.jsx)("img",{style:{width:"30%"},src:this.state.preview,alt:""})]}),Object(a.jsx)("button",{children:"Add Profile"})]}),Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{className:"form-group mt-2",children:[Object(a.jsx)("label",{htmlFor:"message",children:"Example Messages"}),Object(a.jsxs)("select",{className:"form-control",id:"message",children:[Object(a.jsx)("option",{children:"Stop Spending Money!"}),Object(a.jsx)("option",{children:"You are reaching your limit!"}),Object(a.jsx)("option",{children:"Please don't"})]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"percentage",children:"At what percentage would you like it sent out?"}),Object(a.jsxs)("select",{multiple:!0,className:"form-control",id:"percentage",children:[Object(a.jsx)("option",{children:"75%"}),Object(a.jsx)("option",{children:"50%"}),Object(a.jsx)("option",{children:"25%"})]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"custom",children:"Create Custom Message"}),Object(a.jsx)("textarea",{className:"form-control",id:"custom",rows:"3"})]}),Object(a.jsx)("button",{children:"Done"})]})]})}}]),n}(s.Component)),D=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={user:"",message:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(p.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this;return Object(a.jsx)(r.a.Fragment,{children:Object(a.jsx)("div",{className:"form",onSubmit:function(t){e.props.postChat(t,e.state),e.setState({user:"",message:""})},children:Object(a.jsxs)("form",{className:"col-12 col-md-6",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"message",children:"Message"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"message",name:"message",value:this.state.message,onChange:this.handleChange})]}),Object(a.jsx)("button",{className:"btn btn-primary",children:"Post Message"})]})})})}}]),n}(s.Component),A=n(232),B=n(228),L=n(229),U=(n(219),function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={show:!0},a.handleToast=a.handleToast.bind(Object(m.a)(a)),a}return Object(p.a)(n,[{key:"handleToast",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){var e=this.props.chats.map((function(e){return Object(a.jsx)(A.a,{border:"info",className:"mb-2",children:Object(a.jsx)(A.a.Body,{children:Object(a.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(a.jsx)("p",{children:e.message}),Object(a.jsx)("footer",{className:"blockquote-footer",children:Object(a.jsx)("cite",{title:"Source Title",children:e.user})})]})})},e.id)}));return Object(a.jsxs)("div",{className:"messages d-inline-flex flex-column bd-highlight shadow p-3 mb-5 rounded",children:[Object(a.jsxs)("div",{style:{textAlign:"center"},children:[Object(a.jsx)(L.a,{placement:"right",delay:{show:250,hide:400},overlay:function(e){return Object(a.jsx)(B.a,Object(d.a)(Object(d.a)({id:"button-tooltip"},e),{},{children:"Share Budget Tips!"}))},children:Object(a.jsx)("img",{style:{width:"20%"},src:"https://cdn3.iconfinder.com/data/icons/currency-and-money-4/64/Balance-Budget-Money-Arrows-Avatar-512.png",alt:""})}),","]}),Object(a.jsx)("div",{className:"p-2 bd-highlight",children:e})]})}}]),n}(s.Component)),X=(n(221),function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={chats:[],show:!1},a.postChat=a.postChat.bind(Object(m.a)(a)),a.handleModal=a.handleModal.bind(Object(m.a)(a)),a}return Object(p.a)(n,[{key:"handleModal",value:function(){this.setState({show:!this.state.show})}},{key:"componentDidMount",value:function(){var e=Object(j.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/v1/chats/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({chats:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"postChat",value:function(){var e=Object(j.a)(u.a.mark((function e(t,n){var a,s,r,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"X-CSRFToken":S.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(n)},s=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/chats/",a);case 5:return r=e.sent,e.next=8,r.json().catch(s);case 8:c=e.sent,o=[].concat(Object(C.a)(this.state.chats),[c]),this.setState({chats:o});case 11:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("aside",{children:Object(a.jsxs)(k.a,{animation:!1,show:this.state.show,onHide:function(){e.handleModal()},children:[Object(a.jsx)(k.a.Header,{closeButton:!0,children:"New Message"}),Object(a.jsx)(k.a.Body,{children:Object(a.jsx)(D,{postChat:this.postChat})}),Object(a.jsx)(k.a.Footer,{children:Object(a.jsx)(w.a,{onClick:function(){e.handleModal()},children:"Close"})})]})}),Object(a.jsx)(U,{chats:this.state.chats}),Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)(w.a,{className:"aside-buttons",onClick:function(){e.handleModal()},children:Object(a.jsx)("i",{className:"fas fa-comment-alt"})})})]})}}]),n}(s.Component));n(222);var J=function(e){return Object(a.jsx)("div",{className:"guides",children:"here"})},q=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!!S.a.get("Authorization"),image:localStorage.getItem("avatar")},a.registerUser=a.registerUser.bind(Object(m.a)(a)),a.logIn=a.logIn.bind(Object(m.a)(a)),a.logOut=a.logOut.bind(Object(m.a)(a)),a.updateImage=a.updateImage.bind(Object(m.a)(a)),a}return Object(p.a)(n,[{key:"registerUser",value:function(){var e=Object(j.a)(u.a.mark((function e(t,n){var a,s,r,c,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"X-CSRFToken":S.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(n)},s=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/rest-auth/registration/",a);case 5:return r=e.sent,e.next=8,r.json().catch(s);case 8:(c=e.sent).key&&(S.a.set("Authorization","Token ".concat(c.key)),this.setState({isLoggedIn:!0}),localStorage.setItem("avatar",null===(o=c.user.profile)||void 0===o?void 0:o.avatar));case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateImage",value:function(e){this.setState({image:e})}},{key:"logIn",value:function(){var e=Object(j.a)(u.a.mark((function e(t,n){var a,s,r,c,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"X-CSRFToken":S.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify(n)},s=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/rest-auth/login/",a);case 5:return r=e.sent,e.next=8,r.json().catch(s);case 8:(c=e.sent).key&&(S.a.set("Authorization","Token ".concat(c.key)),this.setState({isLoggedIn:!0,image:null===(o=c.user.profile)||void 0===o?void 0:o.avatar}),localStorage.setItem("avatar",null===(i=c.user.profile)||void 0===i?void 0:i.avatar));case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"logOut",value:function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"X-CSRFToken":S.a.get("csrftoken"),"Content-Type":"application/json"}},n=function(e){return console.warn(e)},e.next=4,fetch("/api/v1/rest-auth/logout/",t);case 4:return a=e.sent,e.next=7,a.json().catch(n);case 7:"Successfully logged out."===e.sent.detail&&(S.a.remove("Authorization"),this.setState({isLoggedIn:!1}),localStorage.removeItem("avatar"),this.props.history.push("/"));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.isLoggedIn;return Object(a.jsxs)(r.a.Fragment,{children:[!1===t?"":Object(a.jsx)(R,{logOut:this.logOut,pageWrapId:"page-wrap",outerContainerId:"outer-container",image:this.state.image}),Object(a.jsxs)(g.d,{children:[Object(a.jsx)(g.b,{path:"/dashboard",render:function(e){return Object(a.jsx)(T,Object(d.a)({},e))}}),Object(a.jsx)(g.b,{path:"/settings",render:function(t){return Object(a.jsx)(P,Object(d.a)(Object(d.a)({},t),{},{image:e.state.image,updateImage:e.updateImage}))}}),Object(a.jsx)(g.b,{path:"/social",render:function(e){return Object(a.jsx)(X,Object(d.a)({},e))}}),Object(a.jsx)(g.b,{path:"/guides",render:function(e){return Object(a.jsx)(J,Object(d.a)({},e))}}),Object(a.jsx)(g.b,{exact:!0,path:"/",children:!1===t?Object(a.jsx)(x,{logIn:this.logIn}):Object(a.jsx)(g.a,{to:"/dashboard"})}),Object(a.jsx)(g.b,{path:"/Register",children:!1===t?Object(a.jsx)(y,{registerUser:this.registerUser}):Object(a.jsx)(g.a,{to:"/settings"})})]})]})}}]),n}(s.Component),H=Object(g.g)(q);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(H,{})})}),document.getElementById("root")),i()},97:function(e,t,n){},99:function(e,t,n){}},[[223,1,2]]]);
//# sourceMappingURL=main.e9bd9fe5.chunk.js.map