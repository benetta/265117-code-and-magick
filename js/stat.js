'use strict';

var COLUMN_WIDTH = 40;
var TOP_TEXT_POSITION = 85;
var BOTTOM_TEXT_POSITION = 265;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, (y + 10));
  ctx.lineTo(x, (y + 260));
  ctx.bezierCurveTo(x, (y + 260), (x + 75), 300, (x + 125), (y + 260));
  ctx.bezierCurveTo((x + 125), (y + 260), (x + 150), 300, (x + 180), (y + 260));
  ctx.bezierCurveTo((x + 180), (y + 260), (x + 200), 285, (x + 240), (y + 260));
  ctx.bezierCurveTo((x + 240), (y + 260), (x + 275), 320, (x + 350), (y + 260));
  ctx.bezierCurveTo((x + 350), (y + 260), (x + 390), 290, (x + 420), (y + 260));
  ctx.lineTo((x + 420), (y + 10));
  ctx.bezierCurveTo((x + 420), (y + 10), (x + 380), (y - 25), (x + 250), (y + 10));
  ctx.bezierCurveTo((x + 250), (y + 10), (x + 210), (y - 10), (x + 150), (y + 10));
  ctx.bezierCurveTo((x + 150), (y + 10), (x + 105), (y - 30), (x + 50), (y + 10));
  ctx.bezierCurveTo((x + 50), (y + 10), (x + 25), (y - 20), x, (y + 10));
  ctx.fill();
};

var getHeight = function (times, num) {
  var maxTime = times[0];
  for (var i = 0; i < times.length; i++) {
    if (maxTime < Math.round(times[i])) {
      maxTime = Math.round(times[i]);
    }
  }

  var percent = Math.round((times[num] * 100) / maxTime);
  return 150 * percent / 100;
};

var renderColumn = function (ctx, x, y, names, times) {
  var xInitial = 120;
  var height = 0;
  var yPosition = 0;

  names.forEach(function (name, i) {
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsla(235, 96%, 27%, ' + Math.random() + ')';
    }

    height = getHeight(times, i);
    yPosition = 90 + (150 - height);

    ctx.fillRect(xInitial, yPosition, COLUMN_WIDTH, height);
    ctx.fillStyle = '#000';
    ctx.fillText(name, xInitial, BOTTOM_TEXT_POSITION);
    ctx.fillText(Math.round(times[i]), xInitial, TOP_TEXT_POSITION);

    xInitial += 90;
  });
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  renderColumn(ctx, 120, 90, names, times);
};
