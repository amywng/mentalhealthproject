const myCanvas = new fabric.Canvas("c", {
  width: window.innerWidth - 200,
  height: window.innerHeight - 100,
  backgroundColor: "white",
  isDrawingMode: true,
});

const setColorListener = () => {
	const picker = document.getElementById("colorPicker")
	picker.addEventListener("change", (event) => {
		console.log(event.target.value)
		picked_color = event.target.value
		myCanvas.freeDrawingBrush.color = picked_color
		myCanvas.renderAll()
	})
}

window.toggleDraw = () => {
  myCanvas.isDrawingMode=true
	myCanvas.freeDrawingBrush.color = document.getElementById("colorPicker").value
};

window.createRectangle = () => {
	const rectangle = new fabric.Rect({
  	width: 100,
  	height: 100,
	fill: picked_color,
	});
	myCanvas.add(rectangle);
	myCanvas.isDrawingMode = false;
};

window.createCircle = () => {
	const circle = new fabric.Circle({
	radius: 100,
	fill: picked_color,
	});
	myCanvas.add(circle);
	myCanvas.isDrawingMode = false;
}

window.createTextbox = () => {
	const textbox = new fabric.Textbox("Write text here",{
		width: 400,
		fill: picked_color,
	});
	myCanvas.add(textbox);
	myCanvas.isDrawingMode = false;
};

window.changeMode = () => {
	myCanvas.set({ isDrawingMode: !myCanvas.get("isDrawingMode") })
	if (myCanvas.isDrawingMode) {
		myCanvas.freeDrawingBrush.color="#000000"
		document.getElementById('drawing-mode').innerHTML = 'Cancel drawing mode'
		document.getElementById('options').style.display = ''
	} else {
		document.getElementById('drawing-mode').innerHTML = 'Enter drawing mode'
		document.getElementById('options').style.display = 'none'
	}
}

window.eraseDrawing = () => {
	myCanvas.set({ isDrawingMode: true })
	color="#ffffff"
	myCanvas.freeDrawingBrush.color = color
}

var slider = document.getElementById("myRange")
var output = document.getElementById("demo")
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value
}

const setBrushWidth = () => {
	const pick = document.getElementById("myRange");
	pick.addEventListener("change", (event) => {
		console.log(event.target.value)
		width=parseInt(event.target.value)
		myCanvas.freeDrawingBrush.width = width
		myCanvas.renderAll()
	})
}

window.clearCanvas = () => {
	myCanvas.clear()
	myCanvas.setBackgroundColor("white")
}

let picked_color = "#000000"
setColorListener()
setBrushWidth()

window.saveImage = () => {
 document.getElementById("c").toBlob(function(blob) {
  saveAs(blob);
 });     
}
