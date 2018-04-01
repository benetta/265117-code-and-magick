var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getHeight = function(times, num) {
  var maxTime = times[0];
  for(var i = 0; i < times.length; i++) {
    if( maxTime < Math.round(times[i]) ) { maxTime = Math.round(times[i]) };
  };

  var percent = Math.round((times[num] * 100) / maxTime);
  return 150 * percent / 100;
};

var renderColumn = function(ctx, x, y, names, times) {
  var COLUMN_WIDTH = 40;
  var COLUMN_HEIGHT = 150;
  var TOP_TEXT_POSITION = 85;
  var BOTTOM_TEXT_POSITION = 265;
  var xInitial = 120;
  var height = 0;
  var yPosition = 0;

  names.forEach( function(name, i) {
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

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT-Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  renderColumn(ctx, 120, 90, names, times);
};
