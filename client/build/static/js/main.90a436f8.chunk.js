(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{107:function(e,t,a){e.exports=a(207)},198:function(e,t){},206:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(37),s=a.n(r),l=(a(112),a(8)),c=a(9),i=a(11),u=a(10),m=a(12),d=a(24),g=a(7),h=a(213),p=a(211),f=a(5),b=a.n(f),E=function(e){return o.a.createElement(h.a,{className:"nav justify-content-end d-flex ",style:{backgroundColor:"#4056a1"}},o.a.createElement(h.a.Brand,null,o.a.createElement(g.b,{className:"text-white",style:{textDecoration:"none",fontSize:"25px"},to:"/"},"GloChat")),o.a.createElement(p.a,{className:"mr-auto"},e.user?o.a.createElement(o.a.Fragment,null,o.a.createElement(g.b,{className:"text-white ml-4",style:{textDecoration:"none",fontSize:"20px"},to:"/"},"Chat"),o.a.createElement(g.b,{className:"text-white ml-4",style:{textDecoration:"none",fontSize:"20px"},to:"/",onClick:function(){b.a.delete("/auth/logout"),e.clearUser(null)}},"Logout"),o.a.createElement(g.b,{className:"text-white ml-4",style:{textDecoration:"none",fontSize:"20px"},to:"/Settings"},"Settings"),o.a.createElement(g.b,{className:"text-white ml-4",style:{textDecoration:"none",fontSize:"20px"},to:"/About"},"About")):o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{className:"text-white",style:{textDecoration:"none",fontSize:"20px",color:"white"},href:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_SERVER_URL||"","/auth/google")},"Sign in with Google"),o.a.createElement(g.b,{className:"text-white ml-4",style:{textDecoration:"none",fontSize:"20px"},to:"/signup"},"Signup"),o.a.createElement(g.b,{className:"text-white ml-4",style:{textDecoration:"none",fontSize:"20px"},to:"/login"},"Login"))))},y=a(209),v=a(215),w=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{backgroundImage:"url('walls.jpg')",padding:"20px"}},o.a.createElement("div",{className:"container "},o.a.createElement(g.b,{style:{padding:"20px 20px",backgroundColor:"crimson",color:"white",margin:"0  auto",display:"flex",justifyContent:"center",alignItems:"flex-end",width:"20%",textDecoration:"none"},to:"/signup"},"Signup"),o.a.createElement(g.b,{style:{padding:"20px 20px",backgroundColor:"crimson",color:"white",margin:"20px auto",display:"flex",justifyContent:"center",alignItems:"center",width:"20%",textDecoration:"none"},to:"/login"},"Login"),o.a.createElement("h2",{style:{color:"white",textAlign:"center"}},"Never Been So Easy!"),o.a.createElement("div",null,o.a.createElement(y.a,null,o.a.createElement(v.a,null,o.a.createElement(v.a.Img,{variant:"top",src:"chats.jpg"}),o.a.createElement(v.a.Body,null,o.a.createElement(v.a.Title,{style:{color:"grey",fontSize:"1.5em"}},"Live Chat"),o.a.createElement(v.a.Text,{style:{color:"#1D2951",fontSize:"1.1em"}},"Simply Login or Join the Chatroom to chat Live."))),o.a.createElement(v.a,null,o.a.createElement(v.a.Img,{variant:"top",src:"peoples.jpg"}),o.a.createElement(v.a.Body,null,o.a.createElement(v.a.Title,{style:{color:"grey",fontSize:"1.5em"}},"Connect to people Globally"),o.a.createElement(v.a.Text,{style:{color:"#1D2951",fontSize:"1.1em"}},"Connect to different countries and culture people all around the World!"))),o.a.createElement(v.a,null,o.a.createElement(v.a.Img,{variant:"top",src:"auto.jpg"}),o.a.createElement(v.a.Body,null,o.a.createElement(v.a.Title,{style:{color:"grey",fontSize:"1.5em"}},"Auto-Translated"),o.a.createElement(v.a.Text,{style:{color:"#1D2951",fontSize:"1.1em"}},"Get your messages translated on your selected Language and Chat Live.")))))),o.a.createElement("footer",null,o.a.createElement("p",{style:{color:"white",textAlign:"center",padding:"20px 20px",fontSize:"20px"}},"Developed by: Davide Bernocchi, Floriano Albertini and Madhavi Yalamanchili")))}}]),t}(n.Component),x=a(20),O=a(212),j=a(214),S=a(210),C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={username:"",password:"",email:"",bio:"",defaultLanguage:"en - Anglais",listeLanguages:{},profilePic:"",error:"",upload:!1},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.name,e.target.value),(function(){return console.log(a.state.defaultLanguage)}))},a.imageUpload=function(e){console.log("the file to be added is",e.target.files[0]);var t=e.target.files[0],n=new FormData;n.append("profilePic",t),a.setState({upload:!0},(function(){b.a.post("/api/cloudinary",n).then((function(e){a.setState({profilePic:e.data.secure_url},(function(){console.log(a.state),a.setState({upload:!1})}))}))}))},a.handleSubmit=function(e){e.preventDefault(),b.a.post("/auth/signup",{username:a.state.username,password:a.state.password,email:a.state.email,defaultLanguage:a.state.defaultLanguage,profilePic:a.state.profilePic,bio:a.state.bio}).then((function(e){console.log("LOOOOOOOOOOOOOOOOK",a.state.defaultLanguage),console.log(e.data),a.props.setUser(e.data),a.props.history.push("/")})).catch((function(e){e.response.data.message&&a.setState({error:e.response.data.message})}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://api.cognitive.microsofttranslator.com/languages?api-version=3.0").then((function(t){e.setState({listeLanguages:t.data.dictionary})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"container border border-secondary p-4 mt-4 mr-auto ml-auto col-md-4  "},o.a.createElement("h2",{className:"text-center",style:{fontWeight:"bold"}},"SignUp"),o.a.createElement(O.a,{onSubmit:this.handleSubmit,encType:"multipart/form-data"},o.a.createElement(O.a.Group,null,o.a.createElement(O.a.Label,{htmlFor:"email",style:{fontWeight:"500"}},"Email id:"," "),o.a.createElement(O.a.Control,{type:"text",name:"email",id:"email",value:this.state.email,onChange:this.handleChange})),o.a.createElement(O.a.Group,null,o.a.createElement(O.a.Label,{htmlFor:"username",style:{fontWeight:"500"}},"Username:"," "),o.a.createElement(O.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),o.a.createElement(O.a.Group,null,o.a.createElement(O.a.Label,{htmlFor:"password",style:{fontWeight:"500"}},"Password:"," "),o.a.createElement(O.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange,required:"true"}),o.a.createElement("b",{style:{color:"#1D2951",textAlign:"center",fontSize:"0.5em "}},"Your password should contain at least one uppercase letter, one downcase letter, one number and be at least 8 to 15 characters long and special characters.")),o.a.createElement(O.a.Group,null,o.a.createElement(O.a.Label,{htmlFor:"text",style:{fontWeight:"500"}},"Add a Bio:"," "),o.a.createElement(O.a.Control,{type:"text",name:"bio",id:"bio",value:this.state.bio,onChange:this.handleChange})),o.a.createElement(O.a.Group,null,o.a.createElement(O.a.Label,{htmlFor:"text",style:{fontWeight:"500"}},"Upload an Image:"," "),o.a.createElement(O.a.Control,{id:"image",type:"file",name:"imagePath",placeholder:"User image",onChange:this.imageUpload})),this.state.upload&&o.a.createElement("div",null,"Please wait for a second while we make your image look amazing"),o.a.createElement(O.a.Group,{controlId:"exampleForm.ControlSelect1"},o.a.createElement(O.a.Label,{style:{fontWeight:"500"}},"Default Language"),o.a.createElement(O.a.Control,{as:"select",value:this.state.defaultLanguage,onChange:this.handleChange,name:"defaultLanguage"},Object.entries(this.state.listeLanguages).map((function(e){return o.a.createElement("option",{key:e[0]}," ",e[0]," - ",e[1].name," ")})))),this.state.error&&o.a.createElement(j.a,{variant:"danger"},this.state.error),!this.state.upload&&o.a.createElement(S.a,{style:{backgroundColor:"crimson",color:"white",margin:"20px auto",display:"flex",justifyContent:"center",alignItems:"center",width:"50%"},type:"submit"},"SignUp")))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={username:"",password:"",error:""},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),b.a.post("/auth/login",{username:a.state.username,password:a.state.password}).then((function(e){console.log(e.data),a.props.setUser(e.data),a.props.history.push("/"),console.log(e.data)})).catch((function(e){e.response.data.message&&a.setState({error:e.response.data.message})}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props),o.a.createElement("div",{className:"container border border-secondary p-4 mt-4 mr-auto ml-auto col-md-3 "},o.a.createElement("h2",{className:"text-center",style:{fontWeight:"bold"}},"Login"),o.a.createElement(O.a,{onSubmit:this.handleSubmit},o.a.createElement(O.a.Group,null,o.a.createElement(O.a.Label,{htmlFor:"username",style:{fontWeight:"500"}},"Username:"," "),o.a.createElement(O.a.Control,{type:"text",name:"username",id:"username",value:this.state.username,onChange:this.handleChange})),o.a.createElement(O.a.Group,null,o.a.createElement(O.a.Label,{htmlFor:"password",style:{fontWeight:"500"}},"Password:"," "),o.a.createElement(O.a.Control,{type:"password",name:"password",id:"password",value:this.state.password,onChange:this.handleChange})),this.state.error&&o.a.createElement(j.a,{variant:"danger"},this.state.error),o.a.createElement(S.a,{style:{backgroundColor:"crimson",color:"white",margin:"20px auto",display:"flex",justifyContent:"center",alignItems:"center",width:"50%"},type:"submit"},"Log in")))}}]),t}(n.Component),k=a(43),P=(a(134),a(104)),D=a.n(P),N=function(e){var t=e.msg,a=e.user;return o.a.createElement(o.a.Fragment,null,a.username==t.username?o.a.createElement("div",{class:"outgoing_msg"},o.a.createElement("div",{key:t._id,id:"message",className:"sent_msg"},o.a.createElement("p",null,a.username===t.username?t.text:t.translation),o.a.createElement("span",{class:"time_date"}," ",t.created_at," "))):o.a.createElement("div",{class:"incoming_msg"},o.a.createElement("div",{class:"incoming_msg_img"},o.a.createElement("img",{className:"profile-pic",src:a.profilePic,alt:"sunil"})),o.a.createElement("div",{class:"received_msg"},o.a.createElement("div",{key:t._id,id:"message",class:"received_withd_msg"},o.a.createElement("p",null,a.username===t.username?t.text:t.translation),o.a.createElement("span",{class:"time_date"}," ",t.created_at," ")))))},U=function(e){var t=function(t){return e.onlineUsers.map((function(e){return e&&e._id})).includes(t.users[1]._id)};return e.rooms.map((function(a){return o.a.createElement("a",{onClick:function(){return e.joinRoom(a)}},o.a.createElement("div",{key:a._id,className:"room"},o.a.createElement("img",{className:"profile-pic",src:a.users[1].profilePic,alt:"user"}),o.a.createElement("h5",null,e.user._id===a.users[0]._id?a.users[1].username:a.users[0].username),o.a.createElement("img",{className:"dot",src:t(a)?"green-dot.png":"red-dot.png",alt:"dot"})))}))};function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){Object(x.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a(201).config();var A=Object({NODE_ENV:"production",PUBLIC_URL:""}).CALLBACK_URL,I=D()(A),B=(Object({NODE_ENV:"production",PUBLIC_URL:""}).GEO_KEY,function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={user:a.props.user,users:[],onlineUsers:[],messages:[],message:"",roomId:"",rooms:[],search:"",socketId:I.id,listeLanguages:{},defaultLanguage:a.props.user.defaultLanguage},a.scrollToBottom=function(){a.messagesEnd.scrollIntoView({behavior:"smooth"})},a.componentDidMount=function(){b.a.get("https://api.cognitive.microsofttranslator.com/languages?api-version=3.0").then((function(e){a.setState({listeLanguages:e.data.dictionary})})).catch((function(e){return console.log(e)})),b.a.get("/geo").then((function(e){var t=e.data,n=t.country,o=t.region;console.log(e.data),a.getRooms(),I.emit("new_user",a.state.user),I.on("users",(function(e){a.setState({onlineUsers:e,user:z({},a.props.user,{isOnline:!0,connection:{countryCode:n,city:o}})})})),I.on("message",(function(e){a.setState({messages:[].concat(Object(k.a)(a.state.messages),[e])})})),I.on("welcome",(function(e){a.getRooms()})),I.on("room",(function(e){a.setState({roomId:e[0]._id},(function(){return a.joinRoom(e[0])})),a.getRooms()}))})).catch((function(e){return console.log(e)})),a.scrollToBottom(),I.emit("disconnect"),I.off()},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.name,e.target.value))},a.handleSubmitLang=function(e){e.preventDefault(),a.setState({defaultLanguage:e.target.value},(function(){b.a.post("/auth/updateLang",{id:a.state.user._id,defaultLanguage:a.state.defaultLanguage}).then((function(e){})).catch((function(e){e.response.data.message&&a.setState({error:e.response.data.message})}))}))},a.searchUsers=function(e){e.preventDefault(),b.a.get("/users/".concat(a.state.search)).then((function(e){console.log(e.data),a.setState({users:[].concat(Object(k.a)(a.state.users),Object(k.a)(e.data)),search:""})})).catch((function(e){return console.log(e)}))},a.joinRoom=function(e){I.emit("joinRoom",{user:a.state.user,room:e._id}),a.setState({roomId:e._id}),a.getMessages(e)},a.joinPrivate=function(e){I.emit("joinPrivate",{user1:a.state.user,user2:e}),a.setState({users:[]})},a.sendMessage=function(e){e.preventDefault(),a.state.message&&(I.emit("message",{message:a.state.message,userId:a.state.user._id,username:a.state.user.username,socketId:a.state.socketId,roomId:a.state.roomId,defaultLanguage:a.state.user.defaultLanguage}),a.setState({message:""}))},a.getMessages=function(e){b.a.get("/messages/".concat(e._id)).then((function(e){a.setState({messages:e.data})})).catch((function(e){return console.log(e)}))},a.getRooms=function(){b.a.get("/rooms").then((function(e){a.setState({rooms:e.data})}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this;return console.log(this.state.messages),o.a.createElement("div",{className:"chat-container"},o.a.createElement("div",{className:"rooms-container"},o.a.createElement("div",{className:"search-area"},o.a.createElement("input",{type:"text",placeholder:"Search for a user"})),o.a.createElement(U,{user:this.state.user,rooms:this.state.rooms,users:this.state.users,onlineUsers:this.state.onlineUsers,joinRoom:this.joinRoom}),o.a.createElement("div",{className:"select-language"},o.a.createElement("label",null,"Select your language"),o.a.createElement("select",{value:this.state.defaultLanguage,onChange:this.handleSubmitLang,name:"defaultLanguage",class:"form-control"},Object.entries(this.state.listeLanguages).map((function(e){return o.a.createElement("option",{key:e[0]},e[0]," - ",e[1].name)}))))),o.a.createElement("div",{className:"messages-container"},o.a.createElement("div",{className:"messages"},this.state.messages.map((function(t){return o.a.createElement("div",null,o.a.createElement(N,{user:e.state.user,msg:t,key:t._id}))})),o.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(t){e.messagesEnd=t}})),o.a.createElement("div",null,o.a.createElement("form",{className:"message-area",onSubmit:this.sendMessage},o.a.createElement("input",{type:"text",name:"message",id:"message-text",value:this.state.message,onChange:this.handleChange,rows:"2"}),o.a.createElement("button",{className:"submit-message",type:"submit"},o.a.createElement("i",{className:"fa fa-send fa-2x","aria-hidden":"true"}))))))}}]),t}(n.Component)),T=a(59),F=a.n(T),R=a(105),G=a(102),W=a(106),M=a(103),H=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={password:"",confirmPassword:"",error:"",profilePic:"",bio:"",completed:!1,upload:!1},a.handleChange=function(e){a.setState(Object(x.a)({},e.target.id,e.target.value))},a.imageUpload=function(e){console.log("the file to be added is",e.target.files[0]);var t=e.target.files[0],n=new FormData;n.append("profilePic",t),a.setState({upload:!0},(function(){b.a.post("/api/cloudinary",n).then((function(e){a.setState({profilePic:e.data.secure_url},(function(){console.log(a.state),a.setState({upload:!1})}))}))}))},a.handleChangeClick=function(){var e=Object(R.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log(a.validateForm()),!0===a.validateForm()?b.a.post("/auth/changeDetails",{password:a.state.password,bio:a.state.bio,profilePic:a.state.profilePic}).then((function(e){console.log(e.data),a.setState({completed:!0,error:""}),setTimeout((function(){a.props.history.push("/")}),1e3)})).catch((function(e){console.log(e)})):a.setState({error:"Password is too short / did not match"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=function(){console.log("hello"),b.a.get("/api/test").then((function(e){console.log(e.data),a.setState({profilePic:e.data.profilePic},(function(){return console.log(a.state.profilePic)}))}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"validateForm",value:function(){return this.state.password.length>8&&this.state.password===this.state.confirmPassword}},{key:"render",value:function(){return o.a.createElement("div",{className:"container border border-secondary p-4 mt-4 mr-auto ml-auto col-md-3 "},o.a.createElement("h2",{style:{color:"black",textAlign:"center"}},"Edit your Details!"),o.a.createElement("form",{onSubmit:this.handleChangeClick},o.a.createElement(G.a,{bsSize:"large",controlId:"password"},o.a.createElement(W.a,null,"New Password"),o.a.createElement(M.a,{type:"password",value:this.state.password,onChange:this.handleChange})),o.a.createElement(G.a,{bsSize:"large",controlId:"confirmPassword"},o.a.createElement(W.a,null,"Confirm Password"),o.a.createElement(M.a,{type:"password",onChange:this.handleChange,value:this.state.confirmPassword,pattern:"(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^\\da-zA-Z]).{8,15}"}),o.a.createElement("b",{style:{color:"#1D2951",textAlign:"center",fontSize:"0.5em "}},"Your password should contain at least one uppercase letter, one downcase letter, one number and be at least 8 to 15 characters long and special characters.")),o.a.createElement(O.a.Group,null,o.a.createElement(O.a.Label,{htmlFor:"text"},"Add a Bio: "),o.a.createElement(O.a.Control,{type:"text",name:"bio",id:"bio",value:this.state.bio,onChange:this.handleChange})),o.a.createElement(O.a.Group,null,o.a.createElement(O.a.Label,{htmlFor:"text",style:{fontWeight:"500"}},"Upload an Image:"," "),o.a.createElement(O.a.Control,{id:"image",type:"file",name:"imagePath",placeholder:"User image",onChange:this.imageUpload})),this.state.upload&&o.a.createElement("div",null,"Please wait for a second while we make your image look amazing"),o.a.createElement("img",{src:this.state.profilePic,style:{border:"2px solid black",margin:"30px  20px",display:"flex",float:"right",width:"10%",position:"fixed",bottom:"65%",left:"85%"},alt:"profile"}),o.a.createElement(S.a,{block:!0,type:"submit",bsSize:"large",text:"Change Password",loadingText:"Changing\u2026",isLoading:this.state.isChanging,style:{backgroundColor:"crimson",color:"white",margin:"20px auto",display:"flex",justifyContent:"center",alignItems:"center",width:"50%"}},"Submit")),this.state.error&&o.a.createElement(j.a,{variant:"danger"},this.state.error),this.state.completed&&o.a.createElement(j.a,{variant:"success"},"Password updaded"))}}]),t}(n.Component),Y=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(v.a,{className:"text-center container border border-dark p-4 mt-4"},o.a.createElement(v.a.Header,{style:{fontWeight:"bolder",fontSize:"20px",color:"#1D2951"}},"About GloChat"),o.a.createElement(v.a.Body,null,o.a.createElement(v.a.Text,{style:{fontSize:"15px",color:"  #5b342e"}},"GloChat is a web App which help people around the world to connect with each other and can also exchange messages with different people in different languages globally."))),o.a.createElement(v.a,{className:"text-center container border border-dark p-4 mt-4"},o.a.createElement(v.a.Header,{style:{fontWeight:"bolder",fontSize:"20px",color:"#1D2951"}},"How to use this App?"),o.a.createElement(v.a.Body,null,o.a.createElement(v.a.Text,{style:{fontSize:"15px",color:"#5b342e"}},"Simply Signup and Login with your credentials, choose the language in which you want to chat and connect with people around the globe."))),o.a.createElement(v.a,{className:"text-center container border border-dark p-4 mt-4"},o.a.createElement(v.a.Header,{style:{fontWeight:"bolder",fontSize:"20px",color:"#1D2951"}},"About us!"),o.a.createElement(v.a.Body,null,o.a.createElement(v.a.Text,{style:{fontSize:"15px",color:"#5b342e"}},"This project was made as part of the Ironhack Web Development bootcamp in Berlin by Davide Bernocchi, Floriano Albertini and Madhavi Yalamanchili. The aim of the project was to build our full-stack MERN web application. This was our final project during the bootcamp and the development time was one week. You can check out the Github repo here."))),o.a.createElement(v.a,{className:"text-center container border border-dark p-4 mt-4"},o.a.createElement(v.a.Header,{style:{fontWeight:"bolder",fontSize:"20px",color:"#1D2951"}},"Technologies Used"),o.a.createElement(v.a.Body,null,o.a.createElement(v.a.Text,{style:{fontSize:"15px",color:"#5b342e"}},"The tech stack we used was the MERN stack: HTML/CSS, JavaScript,Bootstrap, Node.js,MongoDB,Cloudinary(Pictures) Express.js,Socket.io,Microsoft Azure API(Translation) and React.js."))),o.a.createElement(v.a.Footer,{className:"text-center"},"Find the Project Repo on"," ",o.a.createElement("a",{href:"https://github.com/davideberno/GloChat",style:{color:"#1D2951",fontWeight:"bold"}},"Github")))}}]),t}(n.Component),V=(a(205),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={user:a.props.user},a.setUser=function(e){a.setState({user:e})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(E,{user:this.state.user,clearUser:this.setUser}),this.state.user?o.a.createElement(d.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(B,Object.assign({user:e.state.user},t))}}):o.a.createElement(d.a,{exact:!0,path:"/",component:w}),o.a.createElement(d.a,{exact:!0,path:"/login",render:function(t){return o.a.createElement(L,Object.assign({user:e.state.user,setUser:e.setUser},t))}}),o.a.createElement(d.a,{exact:!0,path:"/signup",render:function(t){return o.a.createElement(C,Object.assign({user:e.state.user,setUser:e.setUser},t))}}),o.a.createElement(d.a,{exact:!0,path:"/auth/google",render:function(t){return o.a.createElement(C,Object.assign({user:e.state.user,setUser:e.setUser},t))}}),o.a.createElement(d.a,{exact:!0,path:"/settings",setUser:this.setUser,component:H}),o.a.createElement(d.a,{exact:!0,path:"/about",setUser:this.setUser,component:Y}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(206);b.a.get("/auth/loggedin").then((function(e){var t=e.data;s.a.render(o.a.createElement(g.a,null,o.a.createElement(V,{user:t})),document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[107,1,2]]]);
//# sourceMappingURL=main.90a436f8.chunk.js.map