g = 0;
var array1 = {"items" : [
{'a':1, 'b':'Евгений',       'c':'Масьянов',	'd':'нет',	'g':'программист'   },
{'a':2, 'b':'Андрей',        'c':'Петров',      'd':'да',   'g':'стример'		},
{'a':3, 'b':'Александр',     'c':'Шляпик',		'd':'нет',	'g':'банкир'		},
{'a':4, 'b':'Айнур',         'c':'Хамитов',		'd':'да',	'g':'муж'			},
{'a':5, 'b':'Егор',          'c':'Соколов',		'd':'да',	'g':'программист'	},
{'a':6, 'b':'Вася',          'c':'Пупкин',   'd':'нет', 'g':'геймер' },
{'a':7, 'b':'Федя',          'c':'Лапкин',   'd':'нет', 'g':'бухгалтер' },
{'a':8, 'b':'Виталий',          'c':'Лапкин',   'd':'нет', 'g':'бухгалтер' },
{'a':9, 'b':'Егов',          'c':'Лапкин',   'd':'нет', 'g':'бухгалтер' },
{'a':10, 'b':'Яролслав',          'c':'Лапкин',   'd':'нет', 'g':'бухгалтер' },
{'a':11, 'b':'Федя',          'c':'Лапкин',   'd':'нет', 'g':'бухгалтер' },
{'a':12, 'b':'Женя',          'c':'Лапкин',   'd':'да', 'g':'бухгалтер' },
{'a':13, 'b':'Вадим',          'c':'Лапкин',   'd':'да', 'g':'бухгалтер' },
{'a':14, 'b':'Евгений',          'c':'Лапкин',   'd':'нет', 'g':'бухгалтер' },
{'a':15, 'b':'Сергей',          'c':'Бурлов',   'd':'да', 'g':'программист' },
{'a':16, 'b':'Данил',          'c':'Лапкин',   'd':'нет', 'g':'бухгалтер' },
{'a':17, 'b':'Регина',          'c':'Лапкин',   'd':'нет', 'g':'бухгалтер' },
{'a':18, 'b':'Света',          'c':'Мамкин',   'd':'да', 'g':'бухгалтер' },
{'a':19, 'b':'Вероника',          'c':'Писарчик',   'd':'нет', 'g':'бухгалтер' },
{'a':20, 'b':'Мария',          'c':'Ефимовна',   'd':'нет', 'g':'бухгалтер' }
]}

function plus() {
	g+=1;
var tt = document.getElementById("sort");
tt.innerHTML = "";
var i = 0;
array1.items.forEach(function(v) {
  
tt.innerHTML += "<tr><td>"+v.a+"</td><td>"+v.b+"</td><td>"+v.c+"</td><td>"+v.d+"</td><td>"+v.g+"</td></tr>";
});

tt.innerHTML += "<thead id='head' style='visibility: visible;' > <tr> <th><input id='top' type='text' name='name' >от</input><input id='down' type='text' name='name' >до</input>  Номер</th> <th> <input id='name' type='text' name='name'></input> Имя</th> <th>	<input id='soname' type='text' name='name'></input>	Фаммилия</th> <th><input type='radio' id='answer3' type='text' name='name' value=c>Всё</input><input type='radio' id='answer2' type='text' name='name' value=b>нет</input>	<input type='radio' id='answer1' type='text' name='name' value=a>да</input></th> <th> <select id='sels'><option value='a'>программист</option><option value='b'>стример </option><option value='c'>банкир </option><option value='d'>бухгалтер</option><option value='all'>all</option></select></th>  </tr>  </thead>";

}


function plus2(){
	var tt = document.getElementById("sort");
tt.innerHTML = "";
var i = 0;
array1.items.forEach(function(v) {
  
tt.innerHTML += "<tr><td>"+v.a+"</td><td>"+v.b+"</td><td>"+v.c+"</td><td>"+v.d+"</td><td>"+v.g+"</td></tr>";
});

tt.innerHTML += "<thead id='head' style='visibility: visible;' > <tr> <th><input id='top' type='text' name='name' >от</input><input id='down' type='text' name='name' >до</input>  Номер</th> <th> <input id='name' type='text' name='name'></input> Имя</th> <th>	<input id='soname' type='text' name='name'></input>	Фаммилия</th> <th><input type='radio' id='answer3' type='text' name='name' value=c>Всё</input><input type='radio' id='answer2' type='text' name='name' value=b>нет</input>	<input type='radio' id='answer1' type='text' name='name' value=a>да</input></th> <th> <select id='sels'><option value='a'>программист</option><option value='b'>стример </option><option value='c'>банкир </option><option value='d'>бухгалтер</option><option value='all'>all</option></select></th>  </tr>  </thead>";

text.innerHTML += "   \nОчистка фильтров\n";
}




function del(){
	var tt = document.getElementById("sort");
	var Table = document.getElementById("sort");
	tt.innerHTML = "";
    Table.innerHTML = "<thead> <tr> <th>Номер</th> <th>Имя</th> <th>Фаммилия</th> <th>Да/нет</th> <th>Должность</th>";
	array1.items.forEach(function(v) {
  
tt.innerHTML += "<tr><td>"+v.a+"</td><td>"+v.b+"</td><td>"+v.c+"</td><td>"+v.d+"</td><td>"+v.g+"</td></tr>";
});
}



function war(){
	var text = document.getElementById("text");

	if (g%2 != 0){
		text.innerHTML += '  \nПоказать фильтры\n';
	}

	if (g%2 == 0){
		text.innerHTML += '   \nСкрыть фильтры\n';

	del();
}
}



function sort(){
	var goodanswer = 0 ;
  
  var text = document.getElementById("text");
  var name = document.getElementById("name").value;
  var soname = document.getElementById("soname").value;
  var answer_1  = document.getElementById("answer1").checked;
  var answer_2  = document.getElementById("answer2").checked;
  var answer_3  = document.getElementById("answer3").checked;
  var select_1  = document.getElementById("sels").value;
  var tt = document.getElementById("sort");
  var top = document.getElementById("top").value;
  
	
	if (select_1 == 'a'){
	   select_1 = "программист"
   }
   if (select_1 == 'b'){
	   select_1 = "стример"
   }
   if (select_1 == 'c'){
	   select_1 = "банкир"
   }
   if (select_1 == 'd'){
	   select_1 = "бухгалтер"
   }
   
   if (select_1 == 'all'){
	   select_1 = ""
   }
   
   if (answer_1 == true){
	   answer_1 = "да"
   }
   if (answer_1 == false){
	   answer_1 = ""
   }
   if (answer_2 == true){
	   answer_2 = "нет"
   }
   if (answer_2 == false){
	   answer_2 = ""
   }
   if (answer_3 == true){
	   answer_3 = "all"
   }
   if (answer_3 == false){
	   answer_3 = ""
   }
  
   if (top == ""){
    top = 1;
   }

    var down = document.getElementById('down').value;
   if ( down == "" ){
    down = 20;
   }
	
	tt.innerHTML = "<thead> <tr> <th><input id='top' type='text' name='name' >от</input><input id='down' type='text' name='name' >до</input>  Номер</th> <th> <input id='name' type='text' name='name'></input> Имя</th> <th>	<input id='soname' type='text' name='name'></input>	Фаммилия</th> <th><input type='radio' id='answer3' type='text' name='name' value=c>Всё</input><input type='radio' id='answer2' type='text' name='name' value=b>нет</input>	<input type='radio' id='answer1' type='text' name='name' value=a>да</input></th> <th> <select id='sels'><option value='a'>программист</option><option value='b'>стример </option><option value='c'>банкир </option><option value='d'>бухгалтер</option><option value='all'>all</option></select></th>  </tr>  </thead>";
	

	array1.items.forEach(function(v) {
      
        
      	if ( v.b.indexOf(name) >= 0 || name == "" ){

          
          if ( v.c.indexOf(soname) >= 0 || soname == "" ){
            
            if ( answer_1 == v.d || answer_1 == "" ){
            	if (answer_1 == v.d){
            		goodanswer = v.d;
            	}
				
				if ( answer_2 == v.d || answer_2 == "" ){
					if (answer_2 == v.d){
            		goodanswer = v.d;
            	}
					if ( answer_3 == 'all' || answer_3 == "" ){
						if (answer_3 == v.d){
            		goodanswer = v.d;
            	}
              
              if ( select_1 == v.g || select_1 == "" ){
            
                  if ( Number(v.a) >= top && Number(v.a) <= down ){
                      tt.innerHTML += "<tr><td>"+v.a+"</td><td>"+v.b+"</td><td>"+v.c+"</td><td>"+v.d+"</td><td>"+v.g+"</td></tr>";
                      
                        
				  }               }  
			  }
              }
            }
          }
        }
      

    });

if (goodanswer == 0){
	goodanswer = 'Всё';
}

if (name == ""){
	name = "все";
}
if (soname == ""){
	soname = "все";
}




text.innerHTML += '\n сортировка от '+top+' до '+down+' по имени '+name+' по фамиллии '+soname+' по запросу '+goodanswer+' по работе '+select_1+'\n';

}




function ShowButton1(){

var button = document.getElementById("filter");
var station = button.style.display;
        button.style.display = "block";
  
   if (station == "block"){
   		button.style.display = "none";
   }

}

function ShowButton2(){

var button = document.getElementById("new");
var station = button.style.display;
        button.style.display = "block";
  
   if (station == "block"){
   		button.style.display = "none";
   }

}

