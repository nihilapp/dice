(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45],{2588:function(e,t,r){"use strict";var i=r(7294),o=r(2870),n=r(3806),l=r(4586),a=r(4695);t.Z=function(){var e=(0,i.useContext)(n.b).state,t=(0,o.iv)("&>.result-item{background-color:#eeeeee;margin:20px 0;padding:10px;border-radius:0 10px 10px 0;transition:all 0.3s;border-left:20px solid #aaaaaa;box-shadow:0 0 5px -2px #000000;&:nth-of-type(1){border-left:20px solid #333333;}&>.message-box{font-weight:900;color:#333333;transition:all 0.3s;& span.red{background-color:#ff4242;color:#ffffff;padding:0 10px;border-radius:5px;margin-right:10px;}}@media (min-width: 1px) and (max-width: 600px){&>.message-box{font-size:",a.Z[3],";}}@media (min-width: 601px) and (max-width: 900px){&>.message-box{font-size:",a.Z[4],";}}@media (min-width: 901px){&>.message-box{font-size:",a.Z[5],";}}}","","");return(0,o.tZ)(i.Fragment,null,(0,o.tZ)("div",{id:"dice-result",css:t},e.slice().reverse().map((function(e){return(0,o.tZ)("div",{key:(0,l.Z)(),className:"result-item"},(0,o.tZ)("div",{className:"message-box"},(0,o.tZ)("p",null,e.ErrorMessage)),(0,o.tZ)("div",{className:"detail-box"},e.dicedetails))}))))}},4254:function(e,t,r){"use strict";var i=r(7294),o=r(2870),n=r(4695);t.Z=function(e){var t=e.onclickRollDices,r=e.onclickRollRest,l=(0,o.iv)("display:flex;flex-direction:row;&>#roll-type{text-align-last:center;outline:none;transition:all 0.3s;padding:5px 10px;background-color:#333333;color:#ffffff;border:none;cursor:pointer;}&>#roll-dice{outline:none;transition:all 0.3s;background-color:#333333;color:#ffffff;border:none;padding:5px 10px;cursor:pointer;}&>#roll-reset{outline:none;transition:all 0.3s;background-color:#333333;color:#ffffff;border:none;padding:5px 10px;cursor:pointer;}@media (min-width: 1px) and (max-width: 600px){&>#roll-type,&>#roll-dice,&>#roll-reset{flex:1;font-size:",n.Z[2],";}&>#roll-type,&>#roll-dice{margin-right:3px;}&>#roll-type{border-radius:0 0 0 10px;}&>#roll-reset{border-radius:0 0 10px 0;}}@media (min-width: 601px) and (max-width: 900px){&>#roll-type,&>#roll-dice,&>#roll-reset{font-size:",n.Z[3],";}&>#roll-type,&>#roll-dice{margin-right:3px;}&>#roll-reset{border-radius:0 10px 10px 0;}}@media (min-width: 901px){&>#roll-type,&>#roll-dice,&>#roll-reset{font-size:",n.Z[4],";}&>#roll-type,&>#roll-dice{margin-right:3px;}&>#roll-reset{border-radius:0 10px 10px 0;}}","","");return(0,o.tZ)(i.Fragment,null,(0,o.tZ)("div",{css:l},(0,o.tZ)("select",{name:"roll-type",id:"roll-type",defaultValue:"normal"},(0,o.tZ)("option",{value:"normal"},"\ub79c\ub364"),(0,o.tZ)("option",{value:"maximum"},"\ucd5c\ub300\uac12"),(0,o.tZ)("option",{value:"minimum"},"\ucd5c\uc18c\uac12")),(0,o.tZ)("button",{id:"roll-dice",onClick:t},"\uad74\ub9ac\uae30"),(0,o.tZ)("button",{id:"roll-reset",onClick:r},"\ucd08\uae30\ud654")))}},7581:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var i=r(7294),o=r(7044),n=r(2870),l=r(3806),a=r(7822),d=r(4254),s=r(4695),p=function(){var e=(0,i.useContext)(l.b),t=e.suffixs,r=e.dispatch,o=(0,i.useRef)(null),p=(0,n.iv)("padding:10px;background-color:#666666;border-radius:10px;margin-bottom:20px;transition:all 0.3s;&>#preset-list{text-align-last:center;outline:none;transition:all 0.3s;width:100%;background-color:#333333;color:#ffffff;padding:5px 10px;box-sizing:border-box;border:none;cursor:pointer;}@media (min-width: 1px) and (max-width: 600px){&>#preset-list{font-size:",s.Z[2],";margin-bottom:3px;border-radius:10px 10px 0 0;}}@media (min-width: 601px) and (max-width: 900px){display:flex;flex-direction:row;&>#preset-list{flex:3 1 0;font-size:",s.Z[3],";margin-right:3px;border-radius:10px 0 0 10px;}}@media (min-width: 901px){display:flex;flex-direction:row;&>#preset-list{flex:3 1 0;font-size:",s.Z[4],";margin-right:3px;border-radius:10px 0 0 10px;}}","",""),u=(0,i.useCallback)((function(){r({type:a.SF,value:o.current.value})}),[]),c=(0,i.useCallback)((function(){r({type:a.ti}),document.getElementById("preset-list").value="none",document.getElementById("roll-type").value="normal"}),[]);return(0,n.tZ)(i.Fragment,null,(0,n.tZ)("div",{css:p},(0,n.tZ)("select",{id:"preset-list",ref:o,defaultValue:"none"},(0,n.tZ)("option",{value:"none",disabled:!0},"\uc8fc\uc0ac\uc704 \ud504\ub9ac\uc14b"),t.map((function(e){return(0,n.tZ)("option",{key:e,value:e},e)}))),(0,n.tZ)(d.Z,{onclickRollDices:u,onclickRollRest:c})))},u=(r(1035),r(2588)),c=function(){return(0,n.tZ)(i.Fragment,null,(0,n.tZ)(o.Z,null,(0,n.tZ)(p,null),(0,n.tZ)(u.Z,null)))}},6924:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/preset",function(){return r(7581)}])}},function(e){e.O(0,[927,888,774,179],(function(){return t=6924,e(e.s=t);var t}));var t=e.O();_N_E=t}]);