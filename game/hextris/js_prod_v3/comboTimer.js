<link rel="stylesheet" type="text/css" href="/hint.min.css">function drawTimer() {
	if(gameState==1){
        var leftVertexes = [];
        var rightVertexes = [];
	if(MainHex.ct - MainHex.lastCombo < settings.comboTime){
		for(var i=0;i