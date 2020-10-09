x1 = 150;
y1 = 150;

x2 = 240;
y2 = 230;

x3 = 150;
y3 = 330;

x4 = 300;
y4 = 300;

x5 = 400;
y5 = 400;

x6 = 100;
y6 = 460;

var currentAngle = 0; // текущее значение угла
var radius = 100; // радиус окружности

const animationGo = () => {
  var canv = document.getElementById('canvas');
  const width = 550;
  const height = 550;

  var bg = canv.getContext('2d');
  var point1 = canv.getContext('2d');
  var point2 = canv.getContext('2d');
  var point3 = canv.getContext('2d');
  var point4 = canv.getContext('2d');
  var point5 = canv.getContext('2d');
  var point6 = canv.getContext('2d');

  var line1 = canv.getContext('2d');


  setInterval(function () {
    var vx = Math.cos(currentAngle) * radius;
    var vy = Math.sin(currentAngle) * radius;



    bg.fillStyle = 'white';
    bg.fillRect(0,0,width,height);



    var currentPoint1x = x1 + vx;
    var currentPoint1y = y1 + vy;
    point1.fillStyle = 'black';
    point1.fillRect(currentPoint1x, currentPoint1y, 10, 10);

    var currentPoint2x = x2 - vx;
    var currentPoint2y = y2 - vy;
    point2.fillStyle = 'black';
    point2.fillRect(currentPoint2x, currentPoint2y, 10, 10);

    if ( (currentPoint1x - currentPoint2x) <= 100 ){
      line1.beginPath();
      line1.moveTo(currentPoint1x,currentPoint1y);
      line1.lineTo(currentPoint2x,currentPoint2y);
      line1.stroke();
    }


    var currentPoint3x = x3 - vx;
    var currentPoint3y = y3 + vy;
    point3.fillStyle = 'black';
    point3.fillRect(currentPoint3x, currentPoint3y, 10, 10);

    if ( (Math.abs(currentPoint1x - currentPoint3x)) <= 100 ){
      line1.beginPath();
      line1.moveTo(currentPoint1x,currentPoint1y);
      line1.lineTo(currentPoint3x,currentPoint3y);
      line1.stroke();
    }

    var currentPoint4x = x4 + vx;
    var currentPoint4y = y4 - vy;
    point4.fillStyle = 'black';
    point4.fillRect(currentPoint4x, currentPoint4y, 10, 10);

    if ( (Math.abs(currentPoint2x - currentPoint4x)) <= 100 ){
      line1.beginPath();
      line1.moveTo(currentPoint2x,currentPoint2y);
      line1.lineTo(currentPoint4x,currentPoint4y);
      line1.stroke();
    }

    var currentPoint5x = x5 + vx;
    var currentPoint5y = y5 + vy;
    point4.fillStyle = 'black';
    point4.fillRect(currentPoint5x, currentPoint5y, 10, 10);

    if ( (Math.abs(currentPoint3x - currentPoint5x)) <= 250 ){
      line1.beginPath();
      line1.moveTo(currentPoint3x,currentPoint3y);
      line1.lineTo(currentPoint5x,currentPoint5y);
      line1.stroke();
    }


    currentAngle += 0.05;

  },15);

  // switch (random) {
  //   case 1:
  //   t = setInterval(function () {
  //     point1.fillStyle = 'white';
  //     point1.fillRect(0,0,width,height);
  //     point1.fillStyle = 'black';
  //     point1.fillRect(x1++, y1++, 30, 30);
  //     if ((x1 || y1) == 500){
  //       clearInterval(t);
  //     }
  //   },100);
  //   break;
  //   case 2:
  //   t = setInterval(function () {
  //     point1.fillStyle = 'white';
  //     point1.fillRect(0,0,width,height);
  //     point1.fillStyle = 'black';
  //     point1.fillRect(x1--, y1--, 30, 30);
  //     if ((x1 * y1) == 0){
  //       clearInterval(t);
  //     }
  //   },100);
  //
  //   break;
  //   case 3:
  //   t = setInterval(function () {
  //     point1.fillStyle = 'white';
  //     point1.fillRect(0,0,width,height);
  //     point1.fillStyle = 'black';
  //     point1.fillRect(x1++, y1--, 30, 30);
  //     if ((x1 * y1) == 0){
  //       clearInterval(t);
  //     }
  //   },100);
  //
  //   break;
  //   case 4:
  //   t = setInterval(function () {
  //     point1.fillStyle = 'white';
  //     point1.fillRect(0,0,width,height);
  //     point1.fillStyle = 'black';
  //     point1.fillRect(x1--, y1++, 30, 30);
  //     if ((x1 * y1) == 0){
  //       clearInterval(t);
  //     }
  //   },100);
  //
  //   break;
  //
  //   default:
  //   break;
  //
  //
  // }





}
