(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5393)}])},4127:function(e,n,i){"use strict";let t=i(6883);e.exports.O=async function(e){try{let n=new t.Hoyolab({cookie:e,lang:t.LanguageEnum.ENGLISH}),i=await n.gamesList(t.GamesEnum.GENSHIN_IMPACT);return i}catch(e){return console.log(e),{error:"error"}}}},7199:function(e,n,i){"use strict";let t=i(6883);e.exports.l=async function(e,n){try{let i=new t.Genshin({cookie:e,lang:t.LanguageEnum.ENGLISH,uid:n}),a=await i.dailyNote(),s=await i.dailyInfo();return{dailyNote:a,dailyInfo:s}}catch(e){return console.log(e),{error:"error"}}}},5393:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return d}});var t=i(5893),a=i(7294),s=i(6467),o=i.n(s),c=i(7199),l=i(4127);function r(e){let{navigateToPage:n}=e,[i,s]=(0,a.useState)([]),[r,_]=(0,a.useState)([]),[d,m]=(0,a.useState)({}),[u,h]=(0,a.useState)(0),[g,x]=(0,a.useState)(""),[f,N]=(0,a.useState)(0),[p,v]=(0,a.useState)(0),[y,j]=(0,a.useState)(!1),[w,P]=(0,a.useState)(!0);async function k(e){P(!0);let n=await (0,l.O)(e);if(n.error){x("Please login to hoyolab");return}_(n),chrome.storage.sync.get(["account_index"],async function(i){if(void 0===i.account_index){chrome.storage.sync.set({account_uid:n[u].game_uid},function(){console.log("Value uid is set to "+n[u].game_uid)}),m(n[u]);let i=await (0,c.l)(e,n[u].game_uid);if(i.error){x("Please login to hoyolab");return}let t=i.dailyNote,a=i.dailyInfo;x("".concat(t.current_resin," / ").concat(t.max_resin)),N(t.resin_recovery_time),v(a.total_sign_day),j(a.is_sign)}else try{m(n[i.account_index]);let t=await (0,c.l)(e,n[i.account_index].game_uid);if(t.error){x("Please login to hoyolab");return}let a=t.dailyNote,s=t.dailyInfo;x("".concat(a.current_resin," / ").concat(a.max_resin)),N(a.resin_recovery_time),v(s.total_sign_day),j(s.is_sign)}catch(e){b(0)}P(!1)})}function b(e){h(Number(e)),chrome.storage.sync.set({account_index:Number(e)},function(){console.log("Value index is set to "+Number(e))}),chrome.storage.sync.set({account_uid:r[Number(e)].game_uid},function(){console.log("Value uid is set to "+r[Number(e)].game_uid)}),k(i)}return(0,a.useEffect)(()=>{var e;e=async e=>{e.length>0?(s(e),k(e)):console.log("No cookies found")},chrome.cookies.getAll({url:"https://www.hoyolab.com"},function(n){if(n.length>0){let i="";for(let e=0;e<n.length;e++)i+=n[e].name+"="+n[e].value+";";e(i)}else e([])})},[]),(0,t.jsx)("div",{className:o().container,children:(0,t.jsxs)("main",{className:o().main,children:[(0,t.jsxs)("div",{className:o().main_item1,children:[(0,t.jsx)("p",{className:o().title,children:"Battle Chronicle"}),(0,t.jsx)("select",{className:o().name,onChange:e=>b(e.target.value),defaultValue:u,children:r.map((e,n)=>(0,t.jsx)("option",{className:o().title,value:n,children:e.nickname},n))}),(0,t.jsxs)("p",{className:o().level,children:["Lv. ",d.level]}),(0,t.jsxs)("div",{className:o().grid_container,children:[(0,t.jsx)("div",{className:o().grid_item,children:(0,t.jsx)("img",{src:"/icons/fragile-resin-genshin-impact.png",alt:"fragile-resin-genshin-impact",width:"30px"})}),(0,t.jsx)("div",{className:o().grid_item,children:(0,t.jsx)("p",{className:o().resin,children:g})}),(0,t.jsx)("div",{className:o().grid_item,children:(0,t.jsx)("p",{className:o().time,children:f>0&&function(e){let n=Math.floor(e/60);return"".concat(Math.floor(n/60),"h ").concat(n%60,"m")}(f)})})]})]}),(0,t.jsx)("div",{className:o().main_item2,children:(0,t.jsxs)("div",{className:o().tool,children:[(0,t.jsxs)("div",{onClick:()=>{window.open("https://act.hoyolab.com/ys/event/signin-sea-v3/index.html?act_id=e202102251931481&mhy_auth_required=true&mhy_presentation_style=fullscreen&utm_source=hoyolab&utm_medium=battlechronicle")},className:o().tool_item,children:["Checkin",!1===w&&(y?(0,t.jsx)("img",{className:o().checkin_icon,src:"/icons/daily-check.png",alt:"You have signed today",width:"30px"}):(0,t.jsx)("img",{className:o().checkin_icon,src:"/icons/daily-uncheck.png",alt:"You have not signed today",width:"30px"})),!1===w&&p+" / "+function(){let e=new Date,n=e.getFullYear(),i=e.getMonth()+1,t=new Date(n,i,1),a=new Date(t-1),s=a.getDate();return s}()]}),(0,t.jsx)("div",{className:o().divider}),(0,t.jsx)("div",{onClick:()=>{window.open("https://act.hoyolab.com/ys/app/interactive-map/index.html")},className:o().tool_item,children:"Teyvat Interactive Map"}),(0,t.jsx)("div",{className:o().divider}),(0,t.jsx)("div",{onClick:()=>{window.open("https://m.hoyolab.com/#/version?game_id=2&hyl_game_version=3.7&utm_source=tools&utm_medium=battlechronicle")},className:o().tool_item,children:"Version Topics Page"}),(0,t.jsx)("div",{className:o().divider}),(0,t.jsx)("div",{onClick:()=>{window.open("https://genshin.hoyoverse.com/en/gift")},className:o().tool_item,children:"Gift Code"})]})})]})})}function _(e){let{navigateToPage:n}=e;return(0,t.jsx)("div",{className:o().container,children:(0,t.jsxs)("main",{className:o().main,children:[(0,t.jsx)("h1",{className:o().title,children:"NEXT-CHROME-STARTER"}),(0,t.jsx)("p",{className:o().description,children:"This is an example of a Browser Extension built with NEXT.JS. Please refer to the GitHub repo for running instructions and documentation"}),(0,t.jsx)("h1",{className:o().code,children:"New Page ./components/New/index.js"}),(0,t.jsx)("p",{children:"[ - This is New page content - ]"}),(0,t.jsx)("p",{onClick:()=>n("index"),children:"< Go Back"})]})})}function d(){let[e,n]=(0,a.useState)("index"),i=e=>{n(e)};return(0,t.jsxs)(t.Fragment,{children:["index"===e&&(0,t.jsx)(r,{navigateToPage:i}),"new"===e&&(0,t.jsx)(_,{navigateToPage:i})]})}},6467:function(e){e.exports={container:"Pages_container__SbWhT",main:"Pages_main__5_Vsf",main_item1:"Pages_main_item1__DKCSk",main_item2:"Pages_main_item2__6XCeO",menu:"Pages_menu__TpC6V",title:"Pages_title__5_zk8",name:"Pages_name__PJopB",level:"Pages_level__9qTH1",description:"Pages_description__Vsj9E",grid_container:"Pages_grid_container__f7bbY",grid_item:"Pages_grid_item__fBsAl",resin:"Pages_resin__ADJCe",time:"Pages_time___6MQq",tool:"Pages_tool__SFSem",tool_item:"Pages_tool_item__K3_sH",divider:"Pages_divider__fTAoQ",checkin_icon:"Pages_checkin_icon__vfoI6",code:"Pages_code__vzNOX"}}},function(e){e.O(0,[883,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);