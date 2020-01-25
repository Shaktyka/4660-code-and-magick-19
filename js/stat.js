'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_COLOR = '#ffffff';
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_HIST_HEIGHT = 150;
var TEXT_X = 310;
var TEXT_Y = 30;
var TEXT_SIZE = '16px';
var TEXT_FAMILY = 'PT Mono';
var TEXT_COLOR = '#000000';
var TEXT_PLAYER_COLOR = 'rgba(255, 0, 0, 1)';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var TEXT_1 = 'Ура, вы победили!';
var TEXT_2 = 'Список результатов:';
var SATURATION_VALUES = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Отрисовываем облако
var renderCloud = function (ctx, x, y, color) {
  var indent = 10;
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.moveTo(x, y);
  ctx.lineTo(x + CLOUD_WIDTH / 2, y + indent);
  ctx.lineTo(x + CLOUD_WIDTH, y);
  ctx.lineTo(x + CLOUD_WIDTH - indent, y + CLOUD_HEIGHT / 2);
  ctx.lineTo(x + CLOUD_WIDTH, y + CLOUD_HEIGHT);
  ctx.lineTo(x + CLOUD_WIDTH - CLOUD_WIDTH / 2, y + CLOUD_HEIGHT - indent);
  ctx.lineTo(x, y + CLOUD_HEIGHT);
  ctx.lineTo(x + indent, y + CLOUD_HEIGHT / 2);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
};

// Поиск максимального значения массива
var getMaxValue = function (array) {
  var maxValue = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  return Math.ceil(maxValue);
};

// Генерация рандомного синего цвета
var getRandomBarColor = function () {
  var randomSaturationValue = SATURATION_VALUES[getRandomNumber(0, SATURATION_VALUES.length - 1)];
  return 'hsl(240, ' + randomSaturationValue + '%, 50%)';
};

// Отрисовываем поздравительный текст
var renderText = function (ctx) {
  ctx.fillStyle = TEXT_COLOR;
  ctx.font = TEXT_SIZE + ' ' + TEXT_FAMILY;
  ctx.textBaseline = 'hanging';
  ctx.textAlign = 'center';
  ctx.fillText(TEXT_1, TEXT_X, TEXT_Y);
  ctx.fillText(TEXT_2, TEXT_X, TEXT_Y + GAP * 2);
};

// Отрисовываем гистограмму
var renderHistogram = function (ctx, names, times) {
  // Параметры гистограммы
  ctx.textAlign = 'left';
  ctx.textBaseline = 'baseline';
  ctx.font = TEXT_SIZE + ' ' + TEXT_FAMILY;
  var maxTime = getMaxValue(times);

  // Имена и столбцы гистограммы
  for (var i = 0; i < names.length; i++) {
    var cloudBottom = CLOUD_Y + CLOUD_HEIGHT;
    ctx.fillStyle = TEXT_COLOR;
    // Имя
    ctx.fillText(
        names[i],
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        cloudBottom - GAP * 3);
    ctx.fillStyle = (names[i] === 'Вы') ? TEXT_PLAYER_COLOR : getRandomBarColor();
    // Столбец гистограммы
    ctx.fillRect(
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        (cloudBottom) - (GAP * 3 + GAP) - (times[i] * MAX_HIST_HEIGHT) / maxTime,
        BAR_WIDTH,
        (times[i] * MAX_HIST_HEIGHT) / maxTime);
    ctx.fillStyle = TEXT_COLOR;
    // Время
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i,
        cloudBottom - (GAP * 3 + GAP) - (times[i] * MAX_HIST_HEIGHT) / maxTime - GAP * 1.5);
  }
};

// Отрисовываем окно со статистикой
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  renderText(ctx);
  renderHistogram(ctx, names, times);
};
