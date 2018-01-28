'use strict';

var fireballSize = 22;
var getFireballSpeed = function (left) {
    return getFireballSpeed = left ? 5 : 2;  
}
var  wizardSpeed = 3;
var wizardWidth = 70;
var getWizardHeight = function() {
    var getWizardHeight = 1.337 * wizardWidth;
    return getWizardHeight;
}
function getWizardX(width) {
    var getWizardX = 0 + width / 2;
    return getWizardX;
}
function getWizardY(height) {
    var getWizardY = 100 % - 2/3 * height;
    return getWizardY;
}