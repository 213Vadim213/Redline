gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code = {};
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.localVariables = [];
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.idToCallbackMap = new Map();
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDTinySkullGameOverDialogObjects1= [];
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDTinySkullGameOverDialogObjects2= [];
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSpriteObjects1= [];
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSpriteObjects2= [];
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewTextObjects1= [];
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewTextObjects2= [];
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSprite2Objects1= [];
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSprite2Objects2= [];


gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewTextObjects1);
{for(var i = 0, len = gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewTextObjects1[i].getBehavior("Text").setText("FinalScore: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "GameOver.mp3", false, 20, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSprite2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSprite2Objects1.length;i<l;++i) {
    if ( gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSprite2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSprite2Objects1[k] = gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSprite2Objects1[i];
        ++k;
    }
}
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSprite2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "начало", false);
}
}

}


};

gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDTinySkullGameOverDialogObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDTinySkullGameOverDialogObjects2.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSpriteObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSpriteObjects2.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewTextObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewTextObjects2.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSprite2Objects1.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSprite2Objects2.length = 0;

gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.eventsList0(runtimeScene);
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDTinySkullGameOverDialogObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDTinySkullGameOverDialogObjects2.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSpriteObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSpriteObjects2.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewTextObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewTextObjects2.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSprite2Objects1.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSprite2Objects2.length = 0;


return;

}

gdjs['_1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code'] = gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code;
