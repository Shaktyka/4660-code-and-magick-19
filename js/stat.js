'use strict';

var CLOUD_COLOR = 'rgba(255, 255, 255, 1)';
var CLOUD_COORD_X = 100;
var CLOUD_COORD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_FONT_FAMILY = 'PT Mono';
var CLOUD_FONT_SIZE = '16px';
var CLOUD_PADDING = 20;
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

// 1. Отрисовать текст поздравительного сообщения
// 2. Отрисовать гистограмму

// Для выбора цвета
// CHART_BAR_COLORS[getRandomNumber(0, CHART_BAR_COLORS.length - 1)];

// Рисует окно для сообщения
var drawCloud = function (ctx, color, coordX, coordY, width, height, shadow = false) {
  var coordinateX = shadow ? (coordX += SHADOW_OFFSET) : coordX;
  var coordinateY = shadow ? (coordY += SHADOW_OFFSET) : coordY;

  ctx.fillStyle = color;
  ctx.fillRect(coordinateX, coordinateY, width, height);
};

window.renderStatistics = function (ctx, names, times) {
  drawCloud(ctx, SHADOW_COLOR, CLOUD_COORD_X, CLOUD_COORD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, IS_SHADOW);
  drawCloud(ctx, CLOUD_COLOR, CLOUD_COORD_X, CLOUD_COORD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
