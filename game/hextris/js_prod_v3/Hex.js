function Hex(sideLength) {
	this.playThrough = 0;
	this.fillColor = [44,62,80];
    this.tempColor = [44,62,80];
	this.angularVelocity = 0;
	this.position = 0;
	this.dy = 0;
	this.sides = 6;
	this.blocks = [];
	this.angle = 180 / this.sides;
	this.targetAngle = this.angle;
	this.shakes = [];
	this.sideLength = sideLength;
	this.strokeColor = 'blue';
	this.x = trueCanvas.width / 2;
	this.y = trueCanvas.height / 2;
	this.ct = 0;
	this.lastCombo = this.ct - settings.comboTime;
    this.lastColorScored = "#000";
	this.comboTime = 1;
	this.texts = [];
        this.lastRotate = Date.now();
	for (var i = 0; i < this.sides; i++) {
		this.blocks.push([]);
	}

	this.shake = function(obj) { //lane as in particle lane
		var angle = 30 + obj.lane * 60;
		angle *= Math.PI / 180;
		var dx = Math.cos(angle) * obj.magnitude;
		var dy = Math.sin(angle) * obj.magnitude;
		gdx -= dx;
		gdy += dy;
		obj.magnitude /= 2;
		if (obj.magnitude < 1) {
			for (var i = 0; i < this.shakes.length; i++) {
				if (this.shakes[i] == obj) {
					this.shakes.splice(i, 1);
				}
			}
		}
	};

	this.addBlock = function(block) {
		if (!(gameState == 1 || gameState === 0)) return;
		block.settled = 1;
		block.tint = 0.6;
		var lane = this.sides - block.fallingLane;// -this.position;
		this.shakes.push({lane:block.fallingLane, magnitude:4.5 * (window.devicePixelRatio ? window.devicePixelRatio : 1) * (settings.scale)});
		lane += this.position;
		lane = (lane + this.sides) % this.sides;
		block.distFromHex = MainHex.sideLength / 2 * Math.sqrt(3) + block.height * this.blocks[lane].length;
		this.blocks[lane].push(block);
		block.attachedLane = lane;
        block.checked = 1;
	};

	this.doesBlockCollide = function(block, position, tArr) {
		if (block.settled) {
			return;
		}

		if (position !== undefined) {
			arr = tArr;
			if (position <= 0)="" {="" if="" (block.distfromhex="" -="" block.iter="" *="" settings.scale="" (this.sidelength="" 2)="" math.sqrt(3)="" <="0)" block.distfromhex="(this.sideLength" math.sqrt(3);="" block.settled="1;" block.checked="1;" }="" else="" +="" (waveone.difficulty="" 15)="" 3;="" (arr[position="" 1].settled="" &&="" arr[position="" 1].distfromhex="" 1].height="" 1].height;="" var="" lane="this.sides" block.fallinglane;="" -this.position;="" %="" this.sides;="" arr="this.blocks[lane];" (arr.length=""> 0) {
				if (block.distFromHex + block.iter * settings.scale - arr[arr.length - 1].distFromHex - arr[arr.length - 1].height <= 1="" 0)="" {="" block.distfromhex="arr[arr.length" -="" 1].distfromhex="" +="" arr[arr.length="" 1].height;="" this.addblock(block);="" }="" else="" if="" (block.distfromhex="" block.iter="" *="" settings.scale="" (this.sidelength="" 2)="" math.sqrt(3)="" <="0)" math.sqrt(3);="" };="" this.rotate="function(steps)" if(date.now()-this.lastrotate<75="" &&="" !(="" android|webos|iphone|ipad|ipod|blackberry|iemobile|opera="" mini="" i.test(navigator.useragent))="" )="" return;="" (!(gamestate="==" ||="" gamestate="==" 0))="" this.position="" (!history[this.ct])="" history[this.ct]="{};" (!history[this.ct].rotate)="" history[this.ct].rotate="steps;" while="" (this.position="" %="" this.sides;="" this.blocks.foreach(function(blocks)="" blocks.foreach(function(block)="" block.targetangle="block.targetAngle" steps="" 60;="" });="" this.targetangle="this.targetAngle" this.lastrotate="Date.now();" this.draw="function()" this.x="trueCanvas.width/2;" (gamestate="" !="-2)" this.y="trueCanvas.height/2;" this.sidelength="settings.hexWidth;" gdx="0;" gdy="0;" for="" (var="" i="0;" this.shakes.length;="" i++)="" this.shake(this.shakes[i]);="" (this.angle=""> this.targetAngle) {
			this.angularVelocity -= angularVelocityConst;
		}
		else if(this.angle < this.targetAngle) {
			this.angularVelocity += angularVelocityConst;
		}

		if (Math.abs(this.angle - this.targetAngle + this.angularVelocity) </=></=>