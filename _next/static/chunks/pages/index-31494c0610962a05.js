(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(3471)}])},3471:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return C}});var t=s(5893),l=s(9008),a=s.n(l),i=s(7294),n=(0,i.createContext)(),c=function(e){var r=e.children,s=(0,i.useState)(""),l={activeLinkId:s[0],setActiveLinkId:s[1]};return(0,t.jsx)(n.Provider,{value:l,children:r})},o=function(){var e=(0,i.useRef)(null),r=(0,i.useContext)(n).activeLinkId;return(0,i.useEffect)((function(){!function(){if(r){var s=e.current,t=document.getElementById(r),l=t.offsetLeft+t.offsetWidth/2-s.offsetWidth/2;e.current.scrollTo({left:l,behavior:"smooth"})}}()}),[r]),(0,t.jsx)("div",{className:"top-[0] fixed w-full shadow-xl z-[100] bg-[#e3e3e3] p-4",children:(0,t.jsxs)("nav",{ref:e,className:"flex pb-4 flex-row justify-between items-center overflow-x-scroll scrollbar-thin scrollbar-thumb-red-400/75 scrollbar-track-slate-400/25",children:[["Home","About","Education","Experience","Skills","Contact"].map((function(e,s){return function(e,s){var l="".concat(e.toLowerCase(),"Section");return(0,t.jsx)("ul",{className:"",children:(0,t.jsxs)("li",{id:e,onClick:function(){document.getElementById(l).scrollIntoView({behavior:"smooth"})},className:r===e?"group text-sm ml-2 mr-2 px-2 uppercase border-b-2 border-red-400 bg-red-400/25 cursor-pointer":"group text-sm ml-2 mr-2 px-2 uppercase border-b-2 border-[#e3e3e3] hover:border-red-400 hover:bg-red-400 hover:bg-opacity-25 cursor-pointer",children:[(0,t.jsxs)("span",{className:r===e.toLowerCase?"text-red-400":"text-red-400/75 group-hover:text-red-400",children:["[0",s,"]\xa0"]}),(0,t.jsx)("span",{className:r===e.toLowerCase?"text-white":"group-hover:text-white",children:e})]})},e)}(e,s)})),(0,t.jsx)("ul",{children:(0,t.jsx)("li",{className:"text-sm ml-2 mr-2 px-2 uppercase border-b-2 border-[#e3e3e3] hover:border-red-400 hover:bg-red-400 hover:bg-opacity-25 hover:text-white",children:(0,t.jsx)("a",{href:"".concat("/nextjs_gh-pages_site","/resume/ChrisJohansonResume2022.pdf"),download:"ChrisJohansonResume2022.pdf",children:"Resume"})})})]})})},d=s(8193),p=s(9583);function h(e,r){(null==r||r>e.length)&&(r=e.length);for(var s=0,t=new Array(r);s<r;s++)t[s]=e[s];return t}function m(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"===typeof e)return h(e,r);var s=Object.prototype.toString.call(e).slice(8,-1);return"Object"===s&&e.constructor&&(s=e.constructor.name),"Map"===s||"Set"===s?Array.from(s):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?h(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=function(e){var r=(0,i.useRef)(null),s=(0,i.useContext)(n).setActiveLinkId,t=function(e){var r=(0,i.useState)(!1),s=r[0],t=r[1];return(0,i.useEffect)((function(){var r=new IntersectionObserver((function(e){var r=m(e,1)[0];t(r.isIntersecting)}),{threshold:.35});return r.observe(e.current),function(){return r.disconnect()}})),s}(r);return(0,i.useEffect)((function(){t&&s(e)}),[t,s,e]),r},x=function(){var e=u("Home");return(0,t.jsx)("div",{ref:e,id:"home",className:"w-full pt-[25vh] pb-[25vh] text-center",children:(0,t.jsx)("div",{className:"max-w-[66%] w-full h-full mx-auto p-2 flex justify-center",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"py-4 text-gray-700",children:"Chris Johanson"}),(0,t.jsxs)("div",{className:"uppercase border-r-2 m-auto w-[22ch] text-md tracking-wideest text-gray-600 overflow-hidden whitespace-nowrap animate-typing ",children:["//","Software Developer"]}),(0,t.jsxs)("div",{className:"flex items-center justify-between m-auto py-4 max-w-[70%] ",children:[(0,t.jsx)("div",{children:(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/chris-johanson-75931b24a/",children:(0,t.jsx)("div",{className:"w-[45px] h-[45px] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 hover:bg-blue-400 ease-in duration-150",children:(0,t.jsx)(p.BUd,{size:"lg"})})})}),(0,t.jsx)("div",{children:(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/C-Johanson/",children:(0,t.jsx)("div",{className:"w-[45px] h-[45px] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 hover:bg-purple-400 ease-in duration-150",children:(0,t.jsx)(p.hJX,{size:"lg"})})})}),(0,t.jsx)("div",{children:(0,t.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:C.Alx.Johanson@gmail.com",children:(0,t.jsx)("div",{className:"w-[45px] h-[45px] rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-125 hover:bg-red-400 ease-in duration-150",children:(0,t.jsx)(d.Dme,{size:"lg"})})})})]})]})})})},f=function(){var e=u("About");return(0,t.jsx)("div",{ref:e,id:"about",className:"w-full pt-[25vh] pb-[25vh] p-12 flex items-center",children:(0,t.jsxs)("div",{className:"w-full m-auto md:grid grid-cols-3 gap-8",children:[(0,t.jsxs)("div",{className:"col-span-2",children:[(0,t.jsxs)("p",{className:"uppercase text-xl tracking-widest",children:[(0,t.jsx)("span",{className:"text-red-400/75",children:"[01] "}),"About Me"]}),(0,t.jsx)("p",{className:"py-2",children:"I am a goal-oriented and motivated individual with experience teaching myself complex topics in a broad set of technical fields in the pursuit of these goals. I like to challenge myself, enjoy working with others, and excell in an agile organized development team. I have professional experience in backend development on large and complex systems."}),(0,t.jsx)("p",{className:"py-2",children:"I have spent the past ten years developing my programming skills and experience. Growing up, I was always captivated by the technology depicted in the Sci-Fi worlds of Star Wars, Alien, and others. This fascination led to me trying to learn everything I could about the technology here in the real world. From low level communication protocols like I2C and robotics control systems like PIDs used to control the flight of a drone, to programming micro controllers and modding video games that I liked to play, I have taught myself a broad range of complex topics and concepts. At Cornell University, I enrolled as a computer science major and continued building my skill set. I am always excited to tackle complex problems, whether I have experience in the problem space or not."})]}),(0,t.jsx)("div",{})]})})},g=function(){var e=u("Skills"),r=[["Assembly","75%"],["C++","55%"],["CSS","45%"],["HTML","45%"],["Java","75%"],["JavaScript","65%"],["OCamel","25%"],["Python","65%"],["SQL","25%"]];return(0,t.jsx)("div",{ref:e,id:"skills",className:"w-full pt-[25vh] pb-[25vh] p-12 flex flex-col items-center",children:(0,t.jsx)("div",{className:"w-full md:grid grid-cols-3 gap-8",children:(0,t.jsxs)("div",{className:"py-2 col-span-2 col-start-2",children:[(0,t.jsxs)("p",{className:"uppercase text-xl tracking-widest",children:[(0,t.jsx)("span",{className:"text-red-400/75",children:"[04] "}),"Skills"]}),(0,t.jsx)("p",{className:"uppercase text-3xl md:text-4xl tracking-widest",children:"Programming Languages"}),(0,t.jsxs)("div",{className:"w-full flex flex-cols py-8",children:[(0,t.jsx)("div",{className:"w-[20%] h-full",children:(0,t.jsx)("ul",{className:"uppercase whitespace-nowrap list-none text-right space-y-2",children:r.map((function(e){return r=(r=e)[0]+" - ",(0,t.jsx)("li",{className:"cursor-text",children:(0,t.jsx)("em",{className:"text-[.55rem] sm:text-[.8rem] md:text-[.85rem] lg:text-[1rem] pr-1",children:r})},r);var r}))})}),(0,t.jsxs)("div",{className:"relative w-[80%] h-full",children:[(0,t.jsx)("ul",{className:"uppercase whitespace-nowrap list-none text-right w-full space-y-2",children:r.map((function(e){return r=e,(0,t.jsx)("li",{className:"relative bg-red-400 opacity-25 hover:opacity-75 hover:scale-y-125 z-[98]",style:{width:"".concat(r[1])},children:(0,t.jsx)("span",{className:"",children:"\xa0"})},r[0]);var r}))}),(0,t.jsxs)("div",{className:"flex flex-row h-[100%] w-[100%] top-0 absolute text-sm border-b-2 border-solid border-slate-400 z-0",children:[(0,t.jsx)("div",{className:"relative border-r-2 border-slate-400 border-dotted w-[25%] h-full",children:(0,t.jsx)("p",{className:"absolute uppercase bottom-[-15%] w-full text-center text-[.5rem] sm:text-[.8rem] md:text-[.95rem] lg:text-[1rem]",children:"Basic"})}),(0,t.jsx)("div",{className:"relative border-r-2 border-slate-400 border-dotted w-[25%] h-full",children:(0,t.jsx)("p",{className:"absolute uppercase bottom-[-15%] w-full text-center text-[.5rem] sm:text-[.8rem] md:text-[.95rem] lg:text-[1rem]",children:"Proficient"})}),(0,t.jsx)("div",{className:"relative border-r-2 border-slate-400 border-dotted w-[25%] h-full",children:(0,t.jsx)("p",{className:"absolute uppercase bottom-[-15%] w-full text-center text-[.5rem] sm:text-[.8rem] md:text-[.95rem] lg:text-[1rem]",children:"Advanced"})}),(0,t.jsx)("div",{className:"relative w-[25%] h-full",children:(0,t.jsx)("p",{className:"absolute uppercase bottom-[-15%] w-full text-center text-[.5rem] sm:text-[.8rem] md:text-[.95rem] lg:text-[1rem]",children:"Expert"})})]})]})]}),(0,t.jsx)("p",{className:"uppercase text-3xl md:text-4xl tracking-widest py-8",children:"Programs & Frameworks"}),(0,t.jsx)("ul",{className:"uppercase whitespace-nowrap list-none w-full space-y-2",children:["Git & GitHub","React.js","Node.js","Tailwind CSS","CAD","ROS","TensorFlow","Jupyter Notebook"].map((function(e){return function(e){return(0,t.jsx)("li",{className:"cursor-text",children:e},e)}(e)}))})]})})})},j=function(){var e=u("Education");return(0,t.jsxs)("div",{ref:e,id:"education",className:"w-full pt-[25vh] pb-[25vh] p-12 flex flex-col items-center",children:[(0,t.jsx)("div",{className:"w-full md:grid grid-cols-3 gap-8",children:(0,t.jsx)("div",{className:"py-2 col-span-2 col-start-2",children:(0,t.jsxs)("p",{className:"uppercase text-xl tracking-widest",children:[(0,t.jsx)("span",{className:"text-red-400/75",children:"[02] "}),"Education"]})})}),(0,t.jsxs)("div",{className:"w-full md:grid grid-cols-3 gap-8",children:[(0,t.jsx)("div",{className:"py-0 col-span-1 col-start-2",children:(0,t.jsx)("p",{className:"uppercase text-3xl md:text-4xl tracking-widest",children:"CORNELL UNIVERSITY"})}),(0,t.jsx)("div",{className:"py-0 col-span-1 col-start-3",children:(0,t.jsx)("p",{className:"uppercase text-l text-right tracking-wide",children:"Septmeber 2016 - May 2020"})})]}),(0,t.jsx)("div",{className:"w-full md:grid grid-cols-3 gap-8",children:(0,t.jsx)("div",{className:"py-2 col-span-1 col-start-2",children:(0,t.jsx)("p",{className:"uppercase text-xl tracking-wide",children:"College of Engineering, Ithaca NY"})})}),(0,t.jsx)("div",{className:"w-full md:grid grid-cols-3 gap-8",children:(0,t.jsx)("div",{className:"pt-0 pb-2 col-span-1 col-start-2",children:(0,t.jsx)("p",{className:"uppercase text-l tracking-wide",children:"Bachelor of Science, Computer Science"})})}),(0,t.jsx)("div",{className:"w-full md:grid grid-cols-3 gap-8",children:(0,t.jsx)("div",{className:"py-2 col-span-2 col-start-2",children:(0,t.jsx)("p",{className:"uppercase text-2xl md:text-3xl tracking-wide",children:"Relevant Courses"})})}),(0,t.jsx)("div",{className:"w-full md:grid grid-cols-3 gap-8",children:(0,t.jsxs)("div",{className:"flex py-0 col-span-2 col-start-2",children:[(0,t.jsxs)("ul",{className:"mr-8",children:[(0,t.jsx)("li",{children:"CS 3410 - Systems Programming"}),(0,t.jsx)("li",{children:"CS 4320 - Intro to Database Systems"}),(0,t.jsx)("li",{children:"CS 4410 - Operating Systems"}),(0,t.jsx)("li",{children:"CS 4750 - Foundations of Robotics"}),(0,t.jsx)("li",{children:"CS 4700 - Foundations of Artif Inllgnce"})]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"CS 4780 - Machine Learning Intell Sys"}),(0,t.jsx)("li",{children:"CS 4820 - Intro Analysis of Algorithms"}),(0,t.jsx)("li",{children:"MATH 2930 - Differential Equations for Engineers"}),(0,t.jsx)("li",{children:"MATH 1920 - Multivariable Calculus for Engineers"}),(0,t.jsx)("li",{children:"MATH 2940 - Linear Algebra for Engineers"})]})]})}),(0,t.jsx)("div",{className:"w-full md:grid grid-cols-3 gap-8",children:(0,t.jsxs)("div",{className:"py-2 col-span-2 col-start-2",children:[(0,t.jsx)("p",{className:"uppercase text-2xl md:text-3xl tracking-wide",children:"Extracurriculars"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Cornell University Rugby Football Club"}),(0,t.jsx)("li",{children:"Cornell Barbell Club"}),(0,t.jsx)("li",{children:"Cornell Rowing"}),(0,t.jsx)("li",{children:"Pi Kappa Alpha: Beta Theta Chapter"})]})]})})]})},v=function(){var e=u("Experience");return(0,t.jsxs)("div",{ref:e,id:"experience",className:"w-full pt-[25vh] pb-[25vh] p-12 flex flex-col items-center",children:[(0,t.jsx)("div",{className:"w-full md:grid grid-cols-3 gap-8",children:(0,t.jsx)("div",{className:"py-2 col-span-2 col-start-1",children:(0,t.jsxs)("p",{className:"uppercase text-xl tracking-widest",children:[(0,t.jsx)("span",{className:"text-red-400/75",children:"[03] "}),"Experience"]})})}),(0,t.jsxs)("div",{className:"w-full md:grid grid-cols-3 gap-8",children:[(0,t.jsx)("div",{className:"py-0 col-span-1 col-start-1",children:(0,t.jsx)("p",{className:"uppercase text-3xl md:text-4xl tracking-widest",children:"IBM"})}),(0,t.jsx)("div",{className:"py-0 col-span-1 col-start-2",children:(0,t.jsx)("p",{className:"uppercase text-l text-right tracking-wide",children:"July 2020 - Present"})})]}),(0,t.jsx)("div",{className:"w-full md:grid grid-cols-3 gap-8",children:(0,t.jsx)("div",{className:"py-2 col-span-1 col-start-1",children:(0,t.jsx)("p",{className:"uppercase text-xl tracking-wide",children:"Backend Software Engineer "})})}),(0,t.jsx)("div",{className:"w-full md:grid grid-cols-3 gap-8",children:(0,t.jsx)("div",{className:"pt-0 pb-2 col-span-1 col-start-1",children:(0,t.jsx)("p",{className:"uppercase text-l tracking-wide",children:"Band 7"})})}),(0,t.jsx)("div",{className:"w-full md:grid grid-cols-3 gap-8",children:(0,t.jsx)("div",{className:"py-2 col-span-2 col-start-1",children:(0,t.jsx)("p",{className:"uppercase text-2xl md:text-3xl tracking-wide",children:"Accomplishments"})})}),(0,t.jsx)("div",{className:"w-full md:grid grid-cols-3 gap-8",children:(0,t.jsx)("div",{className:"flex py-0 col-span-2 col-start-1",children:(0,t.jsxs)("ul",{className:"mr-8 pl-6 list-disc",children:[(0,t.jsx)("li",{children:"Lead AI and Machine Learning initiatives for IMS Infrastructure department"}),(0,t.jsx)("li",{children:"Research opportunities for AI and Machine Learning integration into IMS"}),(0,t.jsx)("li",{children:"Lead developer on year long project,  implemented new functionality for IMS asynchronous transactions, wrote assembly logic for function activation and transaction routing, organized the team in weekly meetings, completed the project ahead of schedule"}),(0,t.jsx)("li",{children:"Designed, developed, and trained Recurrent Neural Network model utilizing LSTM layers and autoencoders for preemptive service outage detection in IMS systems using real time data"}),(0,t.jsx)("li",{children:"Wrote production code in assembly, used virtual machines to build and test the code"}),(0,t.jsx)("li",{children:"Recreated customer reported issues, located source of and resolved the issue with the production code"}),(0,t.jsx)("li",{children:"Performed functional verification testing on provided fixes as well as development line items"})]})})}),(0,t.jsxs)("div",{className:"w-full pt-10 md:grid grid-cols-3 gap-8",children:[(0,t.jsx)("div",{className:"py-0 col-span-1 col-start-1",children:(0,t.jsx)("p",{className:"uppercase text-3xl md:text-4xl tracking-widest",children:"Cornell University"})}),(0,t.jsxs)("div",{className:"py-0 col-span-1 col-start-2",children:[(0,t.jsx)("p",{className:"uppercase text-l text-right tracking-wide",children:"June 2018 - Sept 2018"}),(0,t.jsx)("p",{className:"uppercase text-l text-right tracking-wide",children:"June 2019 - Sept 2019"})]})]}),(0,t.jsx)("div",{className:"w-full md:grid grid-cols-3 gap-8",children:(0,t.jsx)("div",{className:"py-2 col-span-1 col-start-1",children:(0,t.jsx)("p",{className:"uppercase text-xl tracking-wide",children:"Assistant Web Developer"})})}),(0,t.jsx)("div",{className:"w-full md:grid grid-cols-3 gap-8",children:(0,t.jsx)("div",{className:"py-2 col-span-2 col-start-1",children:(0,t.jsx)("p",{className:"uppercase text-2xl md:text-3xl tracking-wide",children:"Accomplishments"})})}),(0,t.jsx)("div",{className:"w-full md:grid grid-cols-3 gap-8",children:(0,t.jsx)("div",{className:"flex py-0 col-span-2 col-start-1",children:(0,t.jsxs)("ul",{className:"mr-8 pl-6 list-disc",children:[(0,t.jsx)("li",{children:"Wrote Python script to scrape employee hierarchy data from the Cornell School of Business website in order to construct a tree diagram of employee relations"}),(0,t.jsx)("li",{children:"Integrated the data with google sheets and Workday API\u2019s to validate this model and organize and track link relationships for employee pages on the website"}),(0,t.jsx)("li",{children:"Worked closely with professional programmers to complete tasks as part of a team"})]})})})]})};const w={_origin:"https://api.emailjs.com"},b=(e,r,s)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!r)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class N{constructor(e){this.status=e.status,this.text=e.responseText}}const y=(e,r,s={})=>new Promise(((t,l)=>{const a=new XMLHttpRequest;a.addEventListener("load",(({target:e})=>{const r=new N(e);200===r.status||"OK"===r.text?t(r):l(r)})),a.addEventListener("error",(({target:e})=>{l(new N(e))})),a.open("POST",w._origin+e,!0),Object.keys(s).forEach((e=>{a.setRequestHeader(e,s[e])})),a.send(r)}));var k=(e,r,s,t)=>{const l=t||w._userID,a=(e=>{let r;if(r="string"===typeof e?document.querySelector(e):e,!r||"FORM"!==r.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return r})(s);b(l,e,r);const i=new FormData(a);return i.append("lib_version","3.2.0"),i.append("service_id",e),i.append("template_id",r),i.append("user_id",l),y("/api/v1.0/email/send-form",i)},S=function(){var e=u("Contact"),r="service_lv836hr",s="template_1gepxda",l="W_4ibjcG4o0BodwcM",a=(0,i.useState)("Send"),n=a[0],c=a[1];return(0,t.jsx)("div",{ref:e,id:"contact",className:"w-full pt-[25vh] pb-[25vh] p-12 flex items-center",children:(0,t.jsx)("div",{className:"w-full m-auto md:grid grid-cols-3 gap-8",children:(0,t.jsx)("div",{className:"col-span-2",children:(0,t.jsxs)("form",{onSubmit:function(e){c("Sending..."),e.preventDefault(),k(r,s,e.target,l).then((function(e){window.location.reload(),c("Sent")}),(function(e){console.log(e.text)}))},children:[(0,t.jsxs)("p",{className:"uppercase text-xl tracking-widest",children:[(0,t.jsx)("span",{className:"text-red-400/75",children:"[05] "}),"Contact Me"]}),(0,t.jsx)("p",{className:"py-2",children:"Name"}),(0,t.jsx)("input",{type:"text",id:"name",className:"w-full bg-white/50 transition ease-in-out rounded border border-solid focus:border-red-400/75 focus:outline-none"}),(0,t.jsx)("p",{className:"py-2",children:"Email"}),(0,t.jsx)("input",{type:"text",id:"email",className:"w-full bg-white/50 transition ease-in-out rounded border border-solid focus:border-red-400/75 focus:outline-none"}),(0,t.jsx)("p",{className:"py-2",children:"Message"}),(0,t.jsx)("input",{type:"text",id:"message",className:"w-full bg-white/50 transition ease-in-out rounded border border-solid focus:border-red-400/75 focus:outline-none"}),(0,t.jsx)("button",{type:"submit",className:"mt-2 p-2 shadow-none text-black uppercase border-b-2 border-[#e3e3e3] hover:border-red-400 hover:bg-red-400 hover:bg-opacity-25 hover:text-white",children:n})]})})})})};function C(){var e=(0,i.useRef)(null),r=(0,i.useRef)(null),s=(0,i.useRef)(null),l=(0,i.useRef)(null),n=(0,i.useRef)(null),d=(0,i.useRef)(null);return(0,t.jsxs)("div",{className:"h-screen scrollbar-thin scrollbar-track-slate-400/25 scrollbar-thumb-red-400/75",children:[(0,t.jsxs)(a(),{children:[(0,t.jsx)("title",{children:"Chris Johanson | Fullstack SWE"}),(0,t.jsx)("meta",{name:"My personal site",content:"Generated by create next app"}),(0,t.jsx)("link",{rel:"icon",href:"".concat("/nextjs_gh-pages_site","/favicon.ico")})]}),(0,t.jsxs)(c,{children:[(0,t.jsx)(o,{}),(0,t.jsx)("section",{id:"homeSection",ref:e,children:(0,t.jsx)(x,{})}),(0,t.jsx)("section",{id:"aboutSection",ref:r,children:(0,t.jsx)(f,{})}),(0,t.jsx)("section",{id:"educationSection",ref:s,children:(0,t.jsx)(j,{})}),(0,t.jsx)("section",{id:"experienceSection",ref:l,children:(0,t.jsx)(v,{})}),(0,t.jsx)("section",{id:"skillsSection",ref:n,children:(0,t.jsx)(g,{})}),(0,t.jsx)("section",{id:"contactSection",ref:d,children:(0,t.jsx)(S,{})})]}),(0,t.jsx)("footer",{})]})}},9008:function(e,r,s){e.exports=s(5443)},8357:function(e,r,s){"use strict";s.d(r,{w_:function(){return o}});var t=s(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=t.createContext&&t.createContext(l),i=function(){return i=Object.assign||function(e){for(var r,s=1,t=arguments.length;s<t;s++)for(var l in r=arguments[s])Object.prototype.hasOwnProperty.call(r,l)&&(e[l]=r[l]);return e},i.apply(this,arguments)},n=function(e,r){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(t=Object.getOwnPropertySymbols(e);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(s[t[l]]=e[t[l]])}return s};function c(e){return e&&e.map((function(e,r){return t.createElement(e.tag,i({key:r},e.attr),c(e.child))}))}function o(e){return function(r){return t.createElement(d,i({attr:i({},e.attr)},r),c(e.child))}}function d(e){var r=function(r){var s,l=e.attr,a=e.size,c=e.title,o=n(e,["attr","size","title"]),d=a||r.size||"1em";return r.className&&(s=r.className),e.className&&(s=(s?s+" ":"")+e.className),t.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,l,o,{className:s,style:i(i({color:e.color||r.color},r.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&t.createElement("title",null,c),e.children)};return void 0!==a?t.createElement(a.Consumer,null,(function(e){return r(e)})):r(l)}}},function(e){e.O(0,[445,617,774,888,179],(function(){return r=5557,e(e.s=r);var r}));var r=e.O();_N_E=r}]);