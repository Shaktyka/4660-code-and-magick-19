'use strict';

var WIZARDS_AMOUNT = 4;
var wizards = [];

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var fornames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColors = [
  'rgb (101, 137, 164)',
  'rgb (241, 43, 107)',
  'rgb (146, 100, 161)',
  'rgb (56, 159, 117)',
  'rgb (215, 210, 55)',
  'rgb (0, 0, 0)'
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

// Возвращает имя мага
var getFullName = function (reversed) {
  var name = names[getRandomNumber(0, names.length - 1)];
  var forname = fornames[getRandomNumber(0, fornames.length - 1)];
  return reversed ? (forname + ' ' + name) : (name + ' ' + forname);
};

// Генерируем данные для одного волшебника
var getWizardData = function () {
  return {
    name: getFullName(getRandomNumber(0, 1)),
    coatColor: coatColors[getRandomNumber(0, coatColors.length - 1)],
    eyesColor: eyesColors[getRandomNumber(0, eyesColors.length - 1)]
  };
};

// Генерируем массив данных для мага
var getWizardsData = function (amount) {
  for (var i = 0; i < amount; i++) {
    wizards.push(getWizardData());
  }
};

// Рендерим моковые данные
getWizardsData(WIZARDS_AMOUNT);
