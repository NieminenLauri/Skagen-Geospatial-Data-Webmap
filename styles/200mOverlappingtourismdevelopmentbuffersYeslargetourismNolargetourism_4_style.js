function createRedHatchPattern() {
    const canvas = document.createElement('canvas');
    canvas.width = 8;
    canvas.height = 8;
    const context = canvas.getContext('2d');

    context.strokeStyle = 'rgba(228,26,28,0.6)'; // punainen viiva
    context.lineWidth = 1;
    context.beginPath();
    context.moveTo(0, 8);
    context.lineTo(8, 0);
    context.stroke();

    return context.createPattern(canvas, 'repeat');
}

const redHatchFill = new ol.style.Fill({
    color: createRedHatchPattern()
});

var style_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4 = function(feature, resolution) {
    var labelText = ""; 
    var labelFont = "10px sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var placement = 'point';

    return [
        new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgba(228,26,28,1.0)', 
                width: 1.748,
                lineCap: 'square',
                lineJoin: 'bevel',
                lineDash: null
            }),
            fill: redHatchFill,
            text: createTextStyle(
                feature, resolution, labelText, labelFont,
                labelFill, placement, bufferColor, bufferWidth
            )
        })
    ];
};