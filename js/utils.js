'use strict';

// Генерация рандомного числа включительно
var getRandomNumber = function (min, max) {
  return min + Math.floor(Math.random() * (max + 1 - min));
};
