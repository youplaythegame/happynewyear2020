gdjs.Congratulate2Code = {};
gdjs.Congratulate2Code.GDNewObjectObjects1= [];
gdjs.Congratulate2Code.GDNewObjectObjects2= [];

gdjs.Congratulate2Code.conditionTrue_0 = {val:false};
gdjs.Congratulate2Code.condition0IsTrue_0 = {val:false};


gdjs.Congratulate2Code.eventsList0x75a2cc = function(runtimeScene) {

{


{
}

}


}; //End of gdjs.Congratulate2Code.eventsList0x75a2cc
gdjs.Congratulate2Code.eventsList0xb5aa0 = function(runtimeScene) {

{


{

{ //Subevents
gdjs.Congratulate2Code.eventsList0x75a2cc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Congratulate2Code.eventsList0xb5aa0


gdjs.Congratulate2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Congratulate2Code.GDNewObjectObjects1.length = 0;
gdjs.Congratulate2Code.GDNewObjectObjects2.length = 0;

gdjs.Congratulate2Code.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Congratulate2Code'] = gdjs.Congratulate2Code;
