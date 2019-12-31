gdjs.IntroCode = {};
gdjs.IntroCode.GDNewObjectObjects1= [];
gdjs.IntroCode.GDNewObjectObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};


gdjs.IntroCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.IntroCode.condition0IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "Intro");
}if (gdjs.IntroCode.condition0IsTrue_0.val) {
{gdjs.deviceVibration.startVibration(3);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


}; //End of gdjs.IntroCode.eventsList0xb5aa0


gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDNewObjectObjects1.length = 0;
gdjs.IntroCode.GDNewObjectObjects2.length = 0;

gdjs.IntroCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['IntroCode'] = gdjs.IntroCode;
