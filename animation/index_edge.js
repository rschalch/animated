
(function($,Edge,compId){var _=null,y=true,n=false,e37='${_coelho2}',e39='${_btn-start}',e33='${_r-left}',b='block',e46='${_siga3}',e36='${_r-bottom}',x35='hidden',s='style',e57='${_flor}',x4='horizontal',i='none',e40='${_tela3}',lf='left',e45='${_heart}',bg='background-color',e52='${_pedroepri1}',tp='top',e55='${_arvore}',ov='overflow',xc='rgba(0,0,0,1)',x29='stage',zy='scaleY',t='transform',x2='4.0.0.359',e38='${_solo}',c='color',x5='rgba(0,0,0,0)',e30='${_r-right}',zx='scaleX',x3='both',e32='${_r-top}',e48='${_hamburger}',e61='${_tela1}',e60='${_cidade}',e59='${_lastfm}',e34='${_Stage}',m='rect',e56='${_pri}',e54='${_bg}',h='height',e53='${_coelho3}',d='display',e50='${_replay}',e49='${_siga2}',e47='${_tela2}',e44='${_btn_replay}',e43='${_coelho}',p='px',x31='pointer',qoe='easeOutExpo',x22='rgba(0,0,0,1.00)',x1='4.0.0',e42='${_pe}',e41='${_siga1}',g='image',o='opacity',a='Base State',e51='${_templo}',dt='Default Timeline',w='width',ql='linear',e58='${_button}';var im='images/';var g7='lastfm.png',g12='templo.png',g28='siga3.png',g27='siga2.png',g14='pri.png',g18='coelho.png',g6='bg.jpg',g9='hamburger.png',g16='heart.png',g20='tela2.gif',g23='button.gif',g19='tela1.gif',g24='btn-start.png',g15='pe.png',g25='btn_replay.png',g13='flor.png',g17='pedroepri1.png',g10='arvore.png',g11='solo.jpg',g21='tela3.gif',g8='cidade.png',g26='siga1.png';var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:x3,cg:x4,iS:a,gpu:n,rI:n,cn:{dom:[{id:'bg',t:g,r:['0px','0px','1024px','400px','auto','auto'],f:[x5,im+g6,'0px','0px']},{id:'lastfm',v:b,t:g,r:['622px','401px','90px','44px','auto','auto'],f:[x5,im+g7,'0px','0px']},{id:'cidade',v:b,t:g,r:['0px','96px','1024px','257px','auto','auto'],f:[x5,im+g8,'0px','0px']},{id:'hamburger',v:b,t:g,r:['156px','369px','287px','177px','auto','auto'],f:[x5,im+g9,'0px','0px']},{id:'arvore',t:g,r:['28px','355px','108px','130px','auto','auto'],f:[x5,im+g10,'0px','0px']},{id:'solo',t:g,r:['0px','353px','1024px','47px','auto','auto'],f:[x5,im+g11,'0px','0px']},{id:'templo',t:g,r:['157px','194px','299px','159px','auto','auto'],f:[x5,im+g12,'0px','0px']},{id:'flor',t:g,r:['569px','333','11px','20px','auto','auto'],f:[x5,im+g13,'0px','0px']},{id:'pri',t:g,r:['643px','239px','90px','114px','auto','auto'],f:[x5,im+g14,'0px','0px']},{id:'pe',t:g,r:['156px','256px','99px','99px','auto','auto'],f:[x5,im+g15,'0px','0px']},{id:'heart',t:g,r:['449px','185px','40px','40px','auto','auto'],f:[x5,im+g16,'0px','0px']},{id:'pedroepri1',v:b,t:g,r:['-250px','220px','224px','133px','auto','auto'],f:[x5,im+g17,'0px','0px']},{id:'coelho',v:b,t:g,r:['-305px','304px','55px','49px','auto','auto'],f:[x5,im+g18,'0px','0px']},{id:'coelho2',v:b,t:g,r:['609px','313px','45px','40px','auto','auto'],f:[x5,im+g18,'0px','0px'],tf:[[],[],[],['-1']]},{id:'coelho3',t:g,r:['728px','313px','45px','40px','auto','auto'],f:[x5,im+g18,'0px','0px'],tf:[[],[],[],['-1']]},{id:'tela1',v:b,t:g,r:['0px','0px','600px','400px','auto','auto'],f:[x5,im+g19,'0px','0px']},{id:'tela2',v:i,t:g,r:['0px','0px','600px','400px','auto','auto'],f:[x5,im+g20,'0px','0px']},{id:'tela3',v:b,t:g,r:['0px','0px','600px','400px','auto','auto'],f:[x5,im+g21,'0px','0px']},{id:'replay',t:m,r:['0px','0px','600px','400px','auto','auto'],f:[x22],s:[0,xc,i]},{id:'button',v:b,t:g,r:['144px','337px','312px','21px','auto','auto'],cu:['pointer'],f:[x5,im+g23,'0px','0px']},{id:'btn-start',v:b,t:g,r:['255px','332px','90px','21px','auto','auto'],cu:['pointer'],f:[x5,im+g24,'0px','0px']},{id:'btn_replay',v:i,t:g,r:['246px','194px','108px','21px','auto','auto'],cu:['pointer'],f:[x5,im+g25,'0px','0px']},{id:'siga1',v:i,t:g,r:['520px','22px','60px','60px','auto','auto'],cu:['pointer'],f:[x5,im+g26,'0px','0px']},{id:'siga2',v:i,t:g,r:['520px','22px','60px','60px','auto','auto'],cu:['pointer'],f:[x5,im+g27,'0px','0px']},{id:'siga3',v:i,t:g,r:['522px','20px','60px','60px','auto','auto'],cu:['pointer'],f:[x5,im+g28,'0px','0px']},{id:'r-left',t:m,r:['-7px','-13px','11px','420px','auto','auto'],f:[x22],s:[0,xc,i]},{id:'r-top',t:m,r:['-10px','-13px','626px','17px','auto','auto'],f:[x22],s:[0,"rgb(0, 0, 0)",i]},{id:'r-right',t:m,r:['596px','0px','20px','423px','auto','auto'],f:[x22],s:[0,"rgb(0, 0, 0)",i]},{id:'r-bottom',t:m,r:['-10px','396px','634px','20px','auto','auto'],f:[x22],s:[0,"rgb(0, 0, 0)",i]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:18500,a:n,tt:[]}}}};var S1=symbols[x29];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e30).P(bg,x22,c).P(lf,596).P(w,20);A1.A(e32).P(tp,-13).P(bg,x22,c).P(h,17);A1.A(e33).P(h,420).P(bg,x22,c).P(lf,-7).P(w,11);A1.A(e34).P(bg,x22,c).P(w,600).P(h,400).P(ov,x35);A1.A(e36).P(h,20).P(bg,x22,c).P(tp,396);A1.A(e37).P(tp,313).P(zy,1,t,_,"").P(h,40,_,_,p).P(zx,-1,t,_,"").P(w,45,_,_,p).P(lf,609).T(9,376,1,ql).P(d,b).T(11.5,i);A1.A(e38).P(tp,353).P(lf,0).T(0,0).T(6,0).T(9,0);A1.A(e39).P(tp,348).P("cursor",x31).P(lf,255).P(d,b).T(0.5,i).T(5.5,b).T(6.5,i).P(o,1,_,_,"").T(0,0,0.5,ql).T(5.5,1,0.5).T(6,0,0.5);A1.A(e40).P(tp,0).P(lf,0).P(d,b).T(12,i).P(o,0,_,_,"").T(11,1,0.5,ql).T(11.5,0,0.5);A1.A(e41).P(tp,22).P("cursor",x31).P(lf,520).P(d,i).T(0,i).T(5.5,b).T(6,i).P(o,1,_,_,"").T(5.5,0,0.5,ql);A1.A(e42).P(tp,256).P(h,99).P(w,99).P(lf,156).T(13.75,344,1,qoe).P(o,0,_,_,"").T(13.75,1,1,ql);A1.A(e43).P(tp,304).P(d,b).T(6,i).T(11.5,i).P(lf,130).T(2,130).T(6,130);A1.A(e44).P(tp,194).P("cursor",x31).P(lf,246).P(d,i).T(0,i).T(18,b).P(o,0,_,_,"").T(18,1,0.5,ql);A1.A(e45).P(tp,185).P(h,40).P(lf,449).P(w,40).P(zx,0.5,t,_,"").T(15,1,1,ql).P(o,0).T(15,1,0.5).T(15.5,0,0.5).P(zy,0.5,t).T(15,1,1);A1.A(e46).P(tp,20).P("cursor",x31).P(lf,522).P(d,i).T(0,i).T(17,b).T(18,i).P(o,1,_,_,"").T(17,0,1,ql);A1.A(e47).P(tp,0).P(lf,0).P(d,i).T(0,i).T(5.5,b).T(6.5,i).P(o,0,_,_,"").T(5.5,1,0.5,ql).T(6,0,0.5);A1.A(e48).P(lf,156).P(tp,370).T(6,178,3,ql).P(d,b).T(11.5,i);A1.A(e49).P(tp,22).P(lf,520).P("cursor",x31).P(d,i).T(0,i).T(10.5,b).T(11,i).P(o,1,_,_,"").T(10.5,0,0.5,ql);A1.A(e50).P(bg,x22,c).P(o,0,_,_,"").T(17,1,1,ql);A1.A(e51).P(tp,194).P(lf,157).P(o,0,_,_,"").T(12,1,0.5,ql);A1.A(e52).P(tp,220).P(d,b).T(6,i).T(11.5,i).P(lf,195).T(0,195).T(6,195);A1.A(e53).P(zy,1,t,_,"").P(zx,-1,t).P(h,40,_,_,p).P(w,45).P(lf,728).T(12.25,508,1,ql).P(tp,313).T(16,301,0.1).T(16.1,313,0.1).T(16.25,301,0.1).T(16.35,313,0.1);A1.A(e54).P(lf,0).P(tp,0).P(zy,1,t,_,"").T(0,1.3,5.5,ql).T(5.5,1,6).T(11.5,1.3,6.5).P(zx,1,t).T(0,1.3,5.5).T(5.5,1,6).T(11.5,1.3,6.5);A1.A(e55).P(lf,28).P(tp,355).T(12.25,225,0.5,ql);A1.A(e56).P(tp,239).P(h,114).P(w,90).P(lf,643).T(12.25,424,1,ql);A1.A(e57).P(lf,569).P(o,0,_,_,"").T(12.25,1,0.5,ql);A1.A(e58).P(tp,337).P("cursor",x31).P(lf,144).P(d,b).T(12,i).P(o,0,_,_,"").T(11,1,0.5,ql).T(11.5,0,0.5);A1.A(e59).P(lf,258).P(tp,401).T(0,30,5.5,ql).P(d,b).T(11.5,i);A1.A(e60).P(tp,96).P(d,b).T(11.5,i).P(lf,0).T(0,0).T(6,0).T(9,0);A1.A(e61).P(tp,0).P(lf,0).P(d,b).T(0.5,i).P(o,1,_,_,"").T(0,0,0.5,ql);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-39497724");