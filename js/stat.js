'use strict';

var CLOUD_COLOR = 'rgba(255, 255, 255, 1)';
var CLOUD_COORD_X = 100;
var CLOUD_COORD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CONGRATULATION_TEXT = 'Ура, вы победили!\nСписок результатов:';
var CLOUD_FONT_FAMILY = 'PT Mono';
var CLOUD_FONT_SIZE = '16px';
var TEXT_COLOR = 'rgba(0, 0, 0, 1)';
var CLOUD_PADDING = 20;
var CLOUD_TEXT_PADDING = 30;
var CLOUD_CONVEX_SIZE = 10;

var IS_SHADOW = true;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var SHADOW_OFFSET = 10;

var CHART_HEIGHT = 150;
var CHART_WIDTH = 40;
var CHART_GAP = 50;
var CHART_PLAYER_COLOR = 'rgba(255, 0, 0, 1)';
var CHART_BASE_COLOR = 'hsl(240, 100%, 50%)';
var CHART_BAR_COLORS = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var getRandomNumber = function (min, max) {
  return min + Math.floor(Math.random() * (max + 1 - min));
};

// 2. Отрисовать гистограмму

// Для выбора цвета
// CHART_BAR_COLORS[getRandomNumber(0, CHART_BAR_COLORS.length - 1)];

// Рисует окно для сообщения
var renderCloud = function (ctx, color, coordX, coordY, width, height, shadow = false) {
  var coordinateX = shadow ? (coordX += SHADOW_OFFSET) : coordX;
  var coordinateY = shadow ? (coordY += SHADOW_OFFSET) : coordY;

  ctx.fillStyle = color;
  ctx.fillRect(coordinateX, coordinateY, width, height);
};

var renderCongratulation = function (ctx, strings, fontData, coordinates) {
  ctx.fillStyle = fontData.color;
  ctx.font = fontData.size + ' ' + fontData.family;
  ctx.textBaseline = 'hanging';
  
  var coordX = coordinates.x;
  var coordY = coordinates.y;

  strings.forEach(function (string) {
    ctx.fillText(string, coordX, coordY);
    coordY += CLOUD_PADDING;
  });
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, SHADOW_COLOR, CLOUD_COORD_X, CLOUD_COORD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, IS_SHADOW);
  renderCloud(ctx, CLOUD_COLOR, CLOUD_COORD_X, CLOUD_COORD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
  
  var strings = CONGRATULATION_TEXT.split('\n');

  renderCongratulation(
    ctx,
    strings,
    {size: CLOUD_FONT_SIZE, family: CLOUD_FONT_FAMILY, color: TEXT_COLOR},
    {x: CLOUD_COORD_X + CLOUD_TEXT_PADDING, y: CLOUD_COORD_Y + CLOUD_PADDING}
  );

  // Рисуем гистограмму
  // for (var i = 0; i < names.length; i++) {
    // Отрисовывем стобик
  // }
};
