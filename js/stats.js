'use strict';
 var max = -1;
    var maxIndex = -1; 
var getMaxElement = function(arr) {
   for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (element > max) {
            max = element;
            maxIndex = i;
        }
    }  
}
window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.strokeRect(110, 20, 420, 270);
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
    ctx.strokeRect(100, 10, 420, 270);
    ctx.fillRect(100, 10, 420, 270);
   
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    
    ctx.fillText('Ура, вы победили!', 120, 40);
   ctx.fillText('Список результатов:', 120, 60);
    
    getMaxElement(times);
    
    var histogramWidth = 150;
    var step = histogramWidth / (max - 0);
    ctx.fillText('Худшее время: ' + max + ' мс у игрока ' + names[maxIndex], initialX, 80);
    var barHeight = 20;
    var indent = 30;
    var initialX = 120;
    var initialY = 100;
    var lineHeight = 15;
    for (var i = 0; i < times.length; i++) {
        ctx.fillRect(initialX, initialY + indent * i, times[i] * step, barHeight);
        ctx.fillText(names[i], initialX + histogramWidth + barHeight, initialY + lineHeight + indent * i);
    }

};
