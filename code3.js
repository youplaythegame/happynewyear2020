gdjs.CongratulateCode = {};
gdjs.CongratulateCode.GDNewObject2Objects1= [];
gdjs.CongratulateCode.GDNewObject2Objects2= [];
gdjs.CongratulateCode.GDNewObjectObjects1= [];
gdjs.CongratulateCode.GDNewObjectObjects2= [];
gdjs.CongratulateCode.GDNewObject3Objects1= [];
gdjs.CongratulateCode.GDNewObject3Objects2= [];
gdjs.CongratulateCode.GDNewObject4Objects1= [];
gdjs.CongratulateCode.GDNewObject4Objects2= [];
gdjs.CongratulateCode.GDNewObject5Objects1= [];
gdjs.CongratulateCode.GDNewObject5Objects2= [];

gdjs.CongratulateCode.conditionTrue_0 = {val:false};
gdjs.CongratulateCode.condition0IsTrue_0 = {val:false};
gdjs.CongratulateCode.condition1IsTrue_0 = {val:false};


gdjs.CongratulateCode.mapOfGDgdjs_46CongratulateCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.CongratulateCode.GDNewObject3Objects1});gdjs.CongratulateCode.eventsList0x73cbec = function(runtimeScene) {

{


gdjs.CongratulateCode.condition0IsTrue_0.val = false;
{
gdjs.CongratulateCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.CongratulateCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Congratulate2", false);
}}

}


}; //End of gdjs.CongratulateCode.eventsList0x73cbec
gdjs.CongratulateCode.eventsList0xb5aa0 = function(runtimeScene) {

{

gdjs.CongratulateCode.GDNewObject3Objects1.createFrom(runtimeScene.getObjects("NewObject3"));

gdjs.CongratulateCode.condition0IsTrue_0.val = false;
{
gdjs.CongratulateCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CongratulateCode.mapOfGDgdjs_46CongratulateCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if (gdjs.CongratulateCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CongratulateCode.eventsList0x73cbec(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.CongratulateCode.eventsList0xb5aa0


gdjs.CongratulateCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CongratulateCode.GDNewObject2Objects1.length = 0;
gdjs.CongratulateCode.GDNewObject2Objects2.length = 0;
gdjs.CongratulateCode.GDNewObjectObjects1.length = 0;
gdjs.CongratulateCode.GDNewObjectObjects2.length = 0;
gdjs.CongratulateCode.GDNewObject3Objects1.length = 0;
gdjs.CongratulateCode.GDNewObject3Objects2.length = 0;
gdjs.CongratulateCode.GDNewObject4Objects1.length = 0;
gdjs.CongratulateCode.GDNewObject4Objects2.length = 0;
gdjs.CongratulateCode.GDNewObject5Objects1.length = 0;
gdjs.CongratulateCode.GDNewObject5Objects2.length = 0;

gdjs.CongratulateCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['CongratulateCode'] = gdjs.CongratulateCode;
