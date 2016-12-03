		var start = new Date().getTime();

		function displayAgain(){
			var color = '#'+ Math.random().toString(16).substr(-6); // Random color Generation
			var top = Math.random() * 500; // Random Margin
			var left = Math.random() * 1000;
			var width = Math.random() * (300 - 200) + 200; // Random size
			var height = Math.random() * (300 - 200) + 200;
			var radius = Math.random() * 100;
			
			document.getElementById("shape").style.borderRadius = radius + "%";
			document.getElementById("shape").style.width = width + "px";
			document.getElementById("shape").style.height = height + "px";
			document.getElementById("shape").style.top = top + "px";
			document.getElementById("shape").style.backgroundColor = color;
			document.getElementById("shape").style.left = left + "px";
			start = new Date().getTime();
			document.getElementById("shape").style.display = "block";
		}
		
		document.getElementById("shape").onclick = function(){
			document.getElementById("shape").style.display = "none";
			var end = new Date().getTime();
			var time = end - start;
			document.getElementById("timeDisplay").innerHTML = " " + time / 1000 + " seconds";
			setTimeout(displayAgain, 1000); // This will display new shape after 1 second
		}