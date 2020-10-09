															//button change color of div
								function Change() {
									var d = document.getElementById('12');
									d.style.backgroundColor = 'green';
									setTimeout(Change1,200);
									setTimeout(Change2,500);
									setInterval(Change,1000);
								}

								function Change1() {
									var d = document.getElementById('12');
									d.style.backgroundColor = 'yellow';
								}

								function Change2(){
									var d = document.getElementById('12');
									d.style.backgroundColor = 'red';
								}

														//Change color of text inside the tag <p></p>
								function TextChange(){
									var c = document.getElementsByTagName('p');
									console.log(c);
									var i = 0;
									while (i <= c.length){
										c[i].style.color = 'white';
										i+=1;
									}
								}

								       					//animation of Cube
								var MoveThis = function() {
									var i = 0 ;
									var pos = 0;
									var box = document.getElementById('box');
									var t = setInterval(move,10);

								function move() {
									if(	pos >= 150 ){
										box.style.left = 0 + 'px';
										clearInterval(t);
									}
									else{
										pos += 1;
										box.style.left = pos + 'px';
									}

								}
								}

		//Slide images
		var images = [
			"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPFYbU54Etf06VFTYfezQOROezGgE3zV5ws9lVRw4yqAP_uXqG&usqp=CAU",
			"https://i.pinimg.com/originals/09/6f/be/096fbe5269d2fae069305fe2742d5be5.jpg",
			"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMm6TMywNSTXs0B4DKNj_A-K-gzLd8s5xSjZ_J0E0gizv6YgDk&usqp=CAU"
		]
			
			var num = 0;

		function next() {
			var slider = document.getElementById('slider');
			num++;
			if ( num >= images.length){
				num = 0;
			}
			slider.src = images[num];
		}

		function prev() {
			var slider = document.getElementById('slider');
			num--;
			if ( num < 0 ){
				num = images.length - 1;
			}
			slider.src = images[num];
		}