function insertText () {
    document.getElementsByTagName("td").innerHTML="Whatever text!";
}


var array1 = {"items" : [
{'a':1, 'b':'хватит с меня',       'c':'нужно больше таблицы'},
{'a':2, 'b':'если честно я устал', 'c':'Можете поставить автомат?'},
{'a':3, 'b':'помогите',            'c':'если не хотите я не обижусь'},
{'a':4, 'b':'ладно я шучу',        'c':'мур'},
{'a':5, 'b':'не волнуйтесь',       'c':'мам?'}
]}

function plus() {
var tt = document.getElementById("12");
tt.innerHTML = "";
array1.items.forEach(function(v) {
tt.innerHTML += "<tr><td>"+v.a+"</td><td>"+v.b+"</td><td>"+v.c+"</td></tr>";
});
}

function del(){
	var Table = document.getElementById("12");
    Table.innerHTML = "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
}


function animate({duration, draw, timing}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction)

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}