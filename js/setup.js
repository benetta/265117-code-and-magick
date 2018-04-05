'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var similarWizards = [];

function getRandomNum(i) {
  var num = Math.floor(Math.random() * i);
  return num;
}

function Wizard() {
  this.name = WIZARD_NAMES[getRandomNum(WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[getRandomNum(WIZARD_SURNAMES.length)];
  this.coatColor = COAT_COLORS[getRandomNum(COAT_COLORS.length)];
  this.eyesColor = EYE_COLORS[getRandomNum(EYE_COLORS.length)];
}

for (var i = 0; i < 4; i++) {
  similarWizards.push(new Wizard());
}

var similarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(similarWizards[i]));
}

similarList.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
