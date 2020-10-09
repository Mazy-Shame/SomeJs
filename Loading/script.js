//начальные значения высоты и ширины блоков, глобальные переменные
rem1 = 30;
rem2 = 40;

// класс с двумя методами getSmall - уменьшать высоту и ширину блоков, getBig - увеличивать высоту и ширину блоков
class Block {
	
	constructor(x,y) {
    this.x = x;
    this.y = y;

  } 

  getSmall(){

  	this.x -= 1;
  	this.y -= 1;
  	var v = document.getElementsByClassName('block');
  	var i = 0;

  	while ( i < v.length ){
  		v[i].style.width = this.x + "px";
  		v[i].style.height = this.y + "px";
  		i+=1;
  	}

  }

  getBig(){

  	this.x += 1;
  	this.y += 1;
  	var v = document.getElementsByClassName('block');
  	var i = 0;

  	while ( i < v.length ){
  		v[i].style.width = this.x + "px";
  		v[i].style.height = this.y + "px";
  		i+=1;
  	}

  }

}

//Функция вызывающая функцию GetSmall бесконечно
function call1() {

	d = setInterval(GetSmall,30);
}

//Функция создающая экземпляр класса из каждого блока и приминяющая к каждому метод getSmall
function GetSmall() {

	x = rem1;
	y = rem2;

	var block = new Block(x,y);

	block.getSmall();
	

	rem1-=1;
	rem2-=1;

	//Если ширина при уменьшении окажется равна 10, остановить бесконечный вызов функции уменьшения 
	//и вызвать функцию увеличения
	if ( rem1 == 10 ){
		clearInterval(d);
		call2();
	}

}

//Функция вызывающая функцию GetBig бесконечно
function call2(){
	t = setInterval(GetBig,30);
}

//Функция создающая экземпляр класса из каждого блока и приминяющая к каждому метод getBig
function GetBig() {

	x = rem1;
	y = rem2;

	var block = new Block(x,y);

	block.getBig();

	rem1+=1;
	rem2+=1;

	//Если ширина при увеличении окажется равна 30, остановить бесконечный вызов функции увеличения 
	//и вызвать функцию уменьшения
	if ( rem1 == 30 ){
		clearInterval(t);
		call1();
	}


}

