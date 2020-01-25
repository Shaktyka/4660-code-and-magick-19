'use strict';

var setup = document.querySelector('.setup');
var similarWrap = setup.querySelector('.setup-similar');
var similarContainer = setup.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// Рендерим одного мага
var renderWizard = function (data) {
  var wizard = wizardTemplate.cloneNode(true);
  wizard.querySelector('.setup-similar-label').textContent = data.name;
  wizard.querySelector('.wizard-coat').style.fill = data.coatColor;
  wizard.querySelector('.wizard-eyes').style.fill = data.eyesColor;
  return wizard;
};

// Добавляем магов в их блок
var renderSimilarWizards = function (wizards) {
  var fragment = new DocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    var wizard = renderWizard(wizards[i]);
    fragment.appendChild(wizard);
  }
  similarContainer.appendChild(fragment);
};

renderSimilarWizards(wizards);

// Показываем магов и окно настроек
similarWrap.classList.remove('hidden');
setup.classList.remove('hidden');
