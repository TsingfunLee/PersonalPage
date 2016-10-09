(function() {
	var canvas = document.getElementById('canvas'),
		context = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	//将canvas传入，该方法会返回一个包含属性x和y的对象
    mouse = utils.captureMouse(canvas);
})();