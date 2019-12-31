gdjs.IlonaCode = {};
gdjs.IlonaCode.forEachIndex2 = 0;

gdjs.IlonaCode.forEachObjects2 = [];

gdjs.IlonaCode.forEachTemporary2 = null;

gdjs.IlonaCode.forEachTotalCount2 = 0;

gdjs.IlonaCode.GDMonsterObjects1= [];
gdjs.IlonaCode.GDMonsterObjects2= [];
gdjs.IlonaCode.GDMonsterObjects3= [];
gdjs.IlonaCode.GDMonsterObjects4= [];
gdjs.IlonaCode.GDShape1Objects1= [];
gdjs.IlonaCode.GDShape1Objects2= [];
gdjs.IlonaCode.GDShape1Objects3= [];
gdjs.IlonaCode.GDShape1Objects4= [];
gdjs.IlonaCode.GDScoreObjects1= [];
gdjs.IlonaCode.GDScoreObjects2= [];
gdjs.IlonaCode.GDScoreObjects3= [];
gdjs.IlonaCode.GDScoreObjects4= [];
gdjs.IlonaCode.GDObstacle1Objects1= [];
gdjs.IlonaCode.GDObstacle1Objects2= [];
gdjs.IlonaCode.GDObstacle1Objects3= [];
gdjs.IlonaCode.GDObstacle1Objects4= [];
gdjs.IlonaCode.GDLifeObjects1= [];
gdjs.IlonaCode.GDLifeObjects2= [];
gdjs.IlonaCode.GDLifeObjects3= [];
gdjs.IlonaCode.GDLifeObjects4= [];
gdjs.IlonaCode.GDGameOverObjects1= [];
gdjs.IlonaCode.GDGameOverObjects2= [];
gdjs.IlonaCode.GDGameOverObjects3= [];
gdjs.IlonaCode.GDGameOverObjects4= [];
gdjs.IlonaCode.GDButtonTryAgainObjects1= [];
gdjs.IlonaCode.GDButtonTryAgainObjects2= [];
gdjs.IlonaCode.GDButtonTryAgainObjects3= [];
gdjs.IlonaCode.GDButtonTryAgainObjects4= [];
gdjs.IlonaCode.GDButtonMainMenuObjects1= [];
gdjs.IlonaCode.GDButtonMainMenuObjects2= [];
gdjs.IlonaCode.GDButtonMainMenuObjects3= [];
gdjs.IlonaCode.GDButtonMainMenuObjects4= [];
gdjs.IlonaCode.GDObstacle2Objects1= [];
gdjs.IlonaCode.GDObstacle2Objects2= [];
gdjs.IlonaCode.GDObstacle2Objects3= [];
gdjs.IlonaCode.GDObstacle2Objects4= [];

gdjs.IlonaCode.conditionTrue_0 = {val:false};
gdjs.IlonaCode.condition0IsTrue_0 = {val:false};
gdjs.IlonaCode.condition1IsTrue_0 = {val:false};
gdjs.IlonaCode.condition2IsTrue_0 = {val:false};


gdjs.IlonaCode.eventsList0x75cc74 = function(runtimeScene) {

{

gdjs.IlonaCode.GDMonsterObjects2.createFrom(runtimeScene.getObjects("Monster"));

gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IlonaCode.GDMonsterObjects2.length;i<l;++i) {
    if ( gdjs.IlonaCode.GDMonsterObjects2[i].getX() > gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) + 5 ) {
        gdjs.IlonaCode.condition0IsTrue_0.val = true;
        gdjs.IlonaCode.GDMonsterObjects2[k] = gdjs.IlonaCode.GDMonsterObjects2[i];
        ++k;
    }
}
gdjs.IlonaCode.GDMonsterObjects2.length = k;}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IlonaCode.GDMonsterObjects2 */
{for(var i = 0, len = gdjs.IlonaCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.IlonaCode.GDMonsterObjects2[i].addForce(-(450), 0, 0);
}
}}

}


{

gdjs.IlonaCode.GDMonsterObjects1.createFrom(runtimeScene.getObjects("Monster"));

gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IlonaCode.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.IlonaCode.GDMonsterObjects1[i].getX() < gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - 5 ) {
        gdjs.IlonaCode.condition0IsTrue_0.val = true;
        gdjs.IlonaCode.GDMonsterObjects1[k] = gdjs.IlonaCode.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.IlonaCode.GDMonsterObjects1.length = k;}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IlonaCode.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.IlonaCode.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDMonsterObjects1[i].addForce(450, 0, 0);
}
}}

}


}; //End of gdjs.IlonaCode.eventsList0x75cc74
gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDShape1Objects1Objects = Hashtable.newFrom({"Shape1": gdjs.IlonaCode.GDShape1Objects1});gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDShape1Objects2Objects = Hashtable.newFrom({"Shape1": gdjs.IlonaCode.GDShape1Objects2});gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.IlonaCode.GDMonsterObjects2});gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDShape1Objects3Objects = Hashtable.newFrom({"Shape1": gdjs.IlonaCode.GDShape1Objects3});gdjs.IlonaCode.eventsList0x7a3d14 = function(runtimeScene) {

{


gdjs.IlonaCode.condition0IsTrue_0.val = false;
if (gdjs.IlonaCode.condition0IsTrue_0.val) {
{}{}}

}


}; //End of gdjs.IlonaCode.eventsList0x7a3d14
gdjs.IlonaCode.eventsList0x7a3934 = function(runtimeScene) {

{



}


{

gdjs.IlonaCode.GDShape1Objects3.createFrom(gdjs.IlonaCode.GDShape1Objects2);


gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDShape1Objects3Objects) != 0;
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
{}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Grouped events"); }gdjs.IlonaCode.eventsList0x7a3d14(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Grouped events"); }
}


{


gdjs.IlonaCode.condition0IsTrue_0.val = false;
if (gdjs.IlonaCode.condition0IsTrue_0.val) {
{}{}}

}


{


gdjs.IlonaCode.condition0IsTrue_0.val = false;
if (gdjs.IlonaCode.condition0IsTrue_0.val) {
{}{}}

}


{



}


{


{
gdjs.IlonaCode.GDScoreObjects3.createFrom(runtimeScene.getObjects("Score"));
gdjs.IlonaCode.GDShape1Objects3.createFrom(gdjs.IlonaCode.GDShape1Objects2);

{for(var i = 0, len = gdjs.IlonaCode.GDShape1Objects3.length ;i < len;++i) {
    gdjs.IlonaCode.GDShape1Objects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "НГ поздравление\\140382__dwoboyle__coins-01.wav", false, 100, 1);
}{runtimeScene.getVariables().get("Score").add(1);
}{for(var i = 0, len = gdjs.IlonaCode.GDScoreObjects3.length ;i < len;++i) {
    gdjs.IlonaCode.GDScoreObjects3[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Score"))));
}
}}

}


}; //End of gdjs.IlonaCode.eventsList0x7a3934
gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDObstacle1Objects2Objects = Hashtable.newFrom({"Obstacle1": gdjs.IlonaCode.GDObstacle1Objects2});gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.IlonaCode.GDMonsterObjects2});gdjs.IlonaCode.eventsList0x6ed0ac = function(runtimeScene) {

}; //End of gdjs.IlonaCode.eventsList0x6ed0ac
gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDObstacle2Objects2Objects = Hashtable.newFrom({"Obstacle2": gdjs.IlonaCode.GDObstacle2Objects2});gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDMonsterObjects2Objects = Hashtable.newFrom({"Monster": gdjs.IlonaCode.GDMonsterObjects2});gdjs.IlonaCode.eventsList0x7a1114 = function(runtimeScene) {

}; //End of gdjs.IlonaCode.eventsList0x7a1114
gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDObstacle1Objects1Objects = Hashtable.newFrom({"Obstacle1": gdjs.IlonaCode.GDObstacle1Objects1});gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDObstacle2Objects1Objects = Hashtable.newFrom({"Obstacle2": gdjs.IlonaCode.GDObstacle2Objects1});gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDButtonTryAgainObjects2Objects = Hashtable.newFrom({"ButtonTryAgain": gdjs.IlonaCode.GDButtonTryAgainObjects2});gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDButtonTryAgainObjects2Objects = Hashtable.newFrom({"ButtonTryAgain": gdjs.IlonaCode.GDButtonTryAgainObjects2});gdjs.IlonaCode.eventsList0x73dcc4 = function(runtimeScene) {

{


gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
gdjs.IlonaCode.GDButtonTryAgainObjects3.createFrom(gdjs.IlonaCode.GDButtonTryAgainObjects2);

{for(var i = 0, len = gdjs.IlonaCode.GDButtonTryAgainObjects3.length ;i < len;++i) {
    gdjs.IlonaCode.GDButtonTryAgainObjects3[i].setAnimationName("TryAgainPressed");
}
}}

}


{


gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


}; //End of gdjs.IlonaCode.eventsList0x73dcc4
gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDButtonMainMenuObjects2Objects = Hashtable.newFrom({"ButtonMainMenu": gdjs.IlonaCode.GDButtonMainMenuObjects2});gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDButtonMainMenuObjects1Objects = Hashtable.newFrom({"ButtonMainMenu": gdjs.IlonaCode.GDButtonMainMenuObjects1});gdjs.IlonaCode.eventsList0x75b034 = function(runtimeScene) {

{


gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
gdjs.IlonaCode.GDButtonMainMenuObjects2.createFrom(gdjs.IlonaCode.GDButtonMainMenuObjects1);

{for(var i = 0, len = gdjs.IlonaCode.GDButtonMainMenuObjects2.length ;i < len;++i) {
    gdjs.IlonaCode.GDButtonMainMenuObjects2[i].setAnimationName("MainMenuPressed");
}
}}

}


{


gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


}; //End of gdjs.IlonaCode.eventsList0x75b034
gdjs.IlonaCode.eventsList0x73d67c = function(runtimeScene) {

{

gdjs.IlonaCode.GDButtonTryAgainObjects2.createFrom(runtimeScene.getObjects("ButtonTryAgain"));

gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDButtonTryAgainObjects2Objects, runtimeScene, true, true);
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IlonaCode.GDButtonTryAgainObjects2 */
{for(var i = 0, len = gdjs.IlonaCode.GDButtonTryAgainObjects2.length ;i < len;++i) {
    gdjs.IlonaCode.GDButtonTryAgainObjects2[i].setAnimationName("TryAgainNormal");
}
}}

}


{

gdjs.IlonaCode.GDButtonTryAgainObjects2.createFrom(runtimeScene.getObjects("ButtonTryAgain"));

gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDButtonTryAgainObjects2Objects, runtimeScene, true, false);
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IlonaCode.GDButtonTryAgainObjects2 */
{for(var i = 0, len = gdjs.IlonaCode.GDButtonTryAgainObjects2.length ;i < len;++i) {
    gdjs.IlonaCode.GDButtonTryAgainObjects2[i].setAnimationName("TryAgainHover");
}
}
{ //Subevents
gdjs.IlonaCode.eventsList0x73dcc4(runtimeScene);} //End of subevents
}

}


{

gdjs.IlonaCode.GDButtonMainMenuObjects2.createFrom(runtimeScene.getObjects("ButtonMainMenu"));

gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDButtonMainMenuObjects2Objects, runtimeScene, true, true);
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IlonaCode.GDButtonMainMenuObjects2 */
{for(var i = 0, len = gdjs.IlonaCode.GDButtonMainMenuObjects2.length ;i < len;++i) {
    gdjs.IlonaCode.GDButtonMainMenuObjects2[i].setAnimationName("MainMenuNormal");
}
}}

}


{

gdjs.IlonaCode.GDButtonMainMenuObjects1.createFrom(runtimeScene.getObjects("ButtonMainMenu"));

gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDButtonMainMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IlonaCode.GDButtonMainMenuObjects1 */
{for(var i = 0, len = gdjs.IlonaCode.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDButtonMainMenuObjects1[i].setAnimationName("MainMenuHover");
}
}
{ //Subevents
gdjs.IlonaCode.eventsList0x75b034(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.IlonaCode.eventsList0x73d67c
gdjs.IlonaCode.eventsList0xb5aa0 = function(runtimeScene) {

{



}


{


gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
gdjs.IlonaCode.GDMonsterObjects1.createFrom(runtimeScene.getObjects("Monster"));
{for(var i = 0, len = gdjs.IlonaCode.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDMonsterObjects1[i].addForce(-(450), 0, 0);
}
}}

}


{


gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
gdjs.IlonaCode.GDMonsterObjects1.createFrom(runtimeScene.getObjects("Monster"));
{for(var i = 0, len = gdjs.IlonaCode.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDMonsterObjects1[i].addForce(450, 0, 0);
}
}}

}


{


gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.IlonaCode.eventsList0x75cc74(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "ShapeCreation");
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
gdjs.IlonaCode.GDShape1Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDShape1Objects1Objects, "Shape1", gdjs.randomInRange(80, 640 - 80), 800, "");
}{for(var i = 0, len = gdjs.IlonaCode.GDShape1Objects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDShape1Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
}{}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShapeCreation");
}}

}


{



}


{


{
gdjs.IlonaCode.GDShape1Objects1.createFrom(runtimeScene.getObjects("Shape1"));
{for(var i = 0, len = gdjs.IlonaCode.GDShape1Objects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDShape1Objects1[i].addPolarForce(-(90), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
}{for(var i = 0, len = gdjs.IlonaCode.GDShape1Objects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDShape1Objects1[i].rotate(-(90), runtimeScene);
}
}}

}


{



}


{

gdjs.IlonaCode.GDShape1Objects1.createFrom(runtimeScene.getObjects("Shape1"));

for(gdjs.IlonaCode.forEachIndex2 = 0;gdjs.IlonaCode.forEachIndex2 < gdjs.IlonaCode.GDShape1Objects1.length;++gdjs.IlonaCode.forEachIndex2) {
gdjs.IlonaCode.GDMonsterObjects2.createFrom(runtimeScene.getObjects("Monster"));
gdjs.IlonaCode.GDShape1Objects2.length = 0;


gdjs.IlonaCode.forEachTemporary2 = gdjs.IlonaCode.GDShape1Objects1[gdjs.IlonaCode.forEachIndex2];
gdjs.IlonaCode.GDShape1Objects2.push(gdjs.IlonaCode.forEachTemporary2);
gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDShape1Objects2Objects, gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDMonsterObjects2Objects, false, runtimeScene, false);
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {

{ //Subevents: 
gdjs.IlonaCode.eventsList0x7a3934(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.IlonaCode.GDObstacle1Objects1.createFrom(runtimeScene.getObjects("Obstacle1"));

for(gdjs.IlonaCode.forEachIndex2 = 0;gdjs.IlonaCode.forEachIndex2 < gdjs.IlonaCode.GDObstacle1Objects1.length;++gdjs.IlonaCode.forEachIndex2) {
gdjs.IlonaCode.GDMonsterObjects2.createFrom(runtimeScene.getObjects("Monster"));
gdjs.IlonaCode.GDObstacle1Objects2.length = 0;


gdjs.IlonaCode.forEachTemporary2 = gdjs.IlonaCode.GDObstacle1Objects1[gdjs.IlonaCode.forEachIndex2];
gdjs.IlonaCode.GDObstacle1Objects2.push(gdjs.IlonaCode.forEachTemporary2);
gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDObstacle1Objects2Objects, gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDMonsterObjects2Objects, false, runtimeScene, false);
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.IlonaCode.GDObstacle1Objects2.length ;i < len;++i) {
    gdjs.IlonaCode.GDObstacle1Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.IlonaCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.IlonaCode.GDMonsterObjects2[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "НГ поздравление\\171640__leszek-szary__scale-c7.wav", false, 100, 1);
}}
}

}


{

gdjs.IlonaCode.GDObstacle2Objects1.createFrom(runtimeScene.getObjects("Obstacle2"));

for(gdjs.IlonaCode.forEachIndex2 = 0;gdjs.IlonaCode.forEachIndex2 < gdjs.IlonaCode.GDObstacle2Objects1.length;++gdjs.IlonaCode.forEachIndex2) {
gdjs.IlonaCode.GDMonsterObjects2.createFrom(runtimeScene.getObjects("Monster"));
gdjs.IlonaCode.GDObstacle2Objects2.length = 0;


gdjs.IlonaCode.forEachTemporary2 = gdjs.IlonaCode.GDObstacle2Objects1[gdjs.IlonaCode.forEachIndex2];
gdjs.IlonaCode.GDObstacle2Objects2.push(gdjs.IlonaCode.forEachTemporary2);
gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDObstacle2Objects2Objects, gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDMonsterObjects2Objects, false, runtimeScene, false);
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.IlonaCode.GDObstacle2Objects2.length ;i < len;++i) {
    gdjs.IlonaCode.GDObstacle2Objects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.IlonaCode.GDMonsterObjects2.length ;i < len;++i) {
    gdjs.IlonaCode.GDMonsterObjects2[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "НГ поздравление\\171640__leszek-szary__scale-c7.wav", false, 100, 1);
}}
}

}


{



}


{


gdjs.IlonaCode.condition0IsTrue_0.val = false;
gdjs.IlonaCode.condition1IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "ObstacleCreation");
}if ( gdjs.IlonaCode.condition0IsTrue_0.val ) {
{
gdjs.IlonaCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "Second");
}}
if (gdjs.IlonaCode.condition1IsTrue_0.val) {
gdjs.IlonaCode.GDObstacle1Objects1.length = 0;

gdjs.IlonaCode.GDObstacle2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDObstacle1Objects1Objects, gdjs.randomInRange(80, 640 - 80), 800, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ObstacleCreation");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IlonaCode.mapOfGDgdjs_46IlonaCode_46GDObstacle2Objects1Objects, gdjs.randomInRange(80, 640 - 80), 850, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Second");
}}

}


{



}


{


{
gdjs.IlonaCode.GDObstacle1Objects1.createFrom(runtimeScene.getObjects("Obstacle1"));
gdjs.IlonaCode.GDObstacle2Objects1.createFrom(runtimeScene.getObjects("Obstacle2"));
{for(var i = 0, len = gdjs.IlonaCode.GDObstacle1Objects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDObstacle1Objects1[i].addPolarForce(-(90), 3 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
}{for(var i = 0, len = gdjs.IlonaCode.GDObstacle1Objects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDObstacle1Objects1[i].setZOrder(4);
}
}{for(var i = 0, len = gdjs.IlonaCode.GDObstacle2Objects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDObstacle2Objects1[i].addPolarForce(-(90), 3 * gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
}{for(var i = 0, len = gdjs.IlonaCode.GDObstacle2Objects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDObstacle2Objects1[i].setZOrder(4);
}
}}

}


{



}


{

gdjs.IlonaCode.GDMonsterObjects1.createFrom(runtimeScene.getObjects("Monster"));

gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IlonaCode.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.IlonaCode.GDMonsterObjects1[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.IlonaCode.condition0IsTrue_0.val = true;
        gdjs.IlonaCode.GDMonsterObjects1[k] = gdjs.IlonaCode.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.IlonaCode.GDMonsterObjects1.length = k;}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
gdjs.IlonaCode.GDLifeObjects1.createFrom(runtimeScene.getObjects("Life"));
/* Reuse gdjs.IlonaCode.GDMonsterObjects1 */
{for(var i = 0, len = gdjs.IlonaCode.GDLifeObjects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDLifeObjects1[i].setAnimationName("Life" + gdjs.evtTools.common.toString((( gdjs.IlonaCode.GDMonsterObjects1.length === 0 ) ? 0 :gdjs.IlonaCode.GDMonsterObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}{for(var i = 0, len = gdjs.IlonaCode.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDMonsterObjects1[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.IlonaCode.GDMonsterObjects1.createFrom(runtimeScene.getObjects("Monster"));

gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IlonaCode.GDMonsterObjects1.length;i<l;++i) {
    if ( gdjs.IlonaCode.GDMonsterObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.IlonaCode.condition0IsTrue_0.val = true;
        gdjs.IlonaCode.GDMonsterObjects1[k] = gdjs.IlonaCode.GDMonsterObjects1[i];
        ++k;
    }
}
gdjs.IlonaCode.GDMonsterObjects1.length = k;}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
gdjs.IlonaCode.GDLifeObjects1.createFrom(runtimeScene.getObjects("Life"));
/* Reuse gdjs.IlonaCode.GDMonsterObjects1 */
gdjs.IlonaCode.GDObstacle1Objects1.createFrom(runtimeScene.getObjects("Obstacle1"));
gdjs.IlonaCode.GDShape1Objects1.createFrom(runtimeScene.getObjects("Shape1"));
{for(var i = 0, len = gdjs.IlonaCode.GDLifeObjects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDLifeObjects1[i].setAnimationName("Life0");
}
}{for(var i = 0, len = gdjs.IlonaCode.GDMonsterObjects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDMonsterObjects1[i].setAnimationName("MonsterDead");
}
}{for(var i = 0, len = gdjs.IlonaCode.GDShape1Objects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDShape1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.IlonaCode.GDObstacle1Objects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDObstacle1Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}
{ //Subevents
gdjs.IlonaCode.eventsList0x73d67c(runtimeScene);} //End of subevents
}

}


{


{
}

}


{



}


{


gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Score")) == 20;
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Congratulate", false);
}}

}


{


{
}

}


{


gdjs.IlonaCode.condition0IsTrue_0.val = false;
{
gdjs.IlonaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IlonaCode.condition0IsTrue_0.val) {
gdjs.IlonaCode.GDButtonMainMenuObjects1.createFrom(runtimeScene.getObjects("ButtonMainMenu"));
gdjs.IlonaCode.GDButtonTryAgainObjects1.createFrom(runtimeScene.getObjects("ButtonTryAgain"));
gdjs.IlonaCode.GDGameOverObjects1.createFrom(runtimeScene.getObjects("GameOver"));
{for(var i = 0, len = gdjs.IlonaCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDGameOverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IlonaCode.GDButtonTryAgainObjects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDButtonTryAgainObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IlonaCode.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.IlonaCode.GDButtonMainMenuObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "НГ поздравление\\awesomeness.wav", true, 100, 1);
}}

}


{



}


{


{
{runtimeScene.getVariables().getFromIndex(0).add(7 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


}; //End of gdjs.IlonaCode.eventsList0xb5aa0


gdjs.IlonaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IlonaCode.GDMonsterObjects1.length = 0;
gdjs.IlonaCode.GDMonsterObjects2.length = 0;
gdjs.IlonaCode.GDMonsterObjects3.length = 0;
gdjs.IlonaCode.GDMonsterObjects4.length = 0;
gdjs.IlonaCode.GDShape1Objects1.length = 0;
gdjs.IlonaCode.GDShape1Objects2.length = 0;
gdjs.IlonaCode.GDShape1Objects3.length = 0;
gdjs.IlonaCode.GDShape1Objects4.length = 0;
gdjs.IlonaCode.GDScoreObjects1.length = 0;
gdjs.IlonaCode.GDScoreObjects2.length = 0;
gdjs.IlonaCode.GDScoreObjects3.length = 0;
gdjs.IlonaCode.GDScoreObjects4.length = 0;
gdjs.IlonaCode.GDObstacle1Objects1.length = 0;
gdjs.IlonaCode.GDObstacle1Objects2.length = 0;
gdjs.IlonaCode.GDObstacle1Objects3.length = 0;
gdjs.IlonaCode.GDObstacle1Objects4.length = 0;
gdjs.IlonaCode.GDLifeObjects1.length = 0;
gdjs.IlonaCode.GDLifeObjects2.length = 0;
gdjs.IlonaCode.GDLifeObjects3.length = 0;
gdjs.IlonaCode.GDLifeObjects4.length = 0;
gdjs.IlonaCode.GDGameOverObjects1.length = 0;
gdjs.IlonaCode.GDGameOverObjects2.length = 0;
gdjs.IlonaCode.GDGameOverObjects3.length = 0;
gdjs.IlonaCode.GDGameOverObjects4.length = 0;
gdjs.IlonaCode.GDButtonTryAgainObjects1.length = 0;
gdjs.IlonaCode.GDButtonTryAgainObjects2.length = 0;
gdjs.IlonaCode.GDButtonTryAgainObjects3.length = 0;
gdjs.IlonaCode.GDButtonTryAgainObjects4.length = 0;
gdjs.IlonaCode.GDButtonMainMenuObjects1.length = 0;
gdjs.IlonaCode.GDButtonMainMenuObjects2.length = 0;
gdjs.IlonaCode.GDButtonMainMenuObjects3.length = 0;
gdjs.IlonaCode.GDButtonMainMenuObjects4.length = 0;
gdjs.IlonaCode.GDObstacle2Objects1.length = 0;
gdjs.IlonaCode.GDObstacle2Objects2.length = 0;
gdjs.IlonaCode.GDObstacle2Objects3.length = 0;
gdjs.IlonaCode.GDObstacle2Objects4.length = 0;

gdjs.IlonaCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['IlonaCode'] = gdjs.IlonaCode;
