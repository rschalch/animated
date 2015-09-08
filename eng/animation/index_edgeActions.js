
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn-start}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_replay}","click",function(sym,e){sym.play(0);sym.stop(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_siga1}","click",function(sym,e){sym.play();sym.$("siga1").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_siga2}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_siga3}","click",function(sym,e){sym.play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-39497724");