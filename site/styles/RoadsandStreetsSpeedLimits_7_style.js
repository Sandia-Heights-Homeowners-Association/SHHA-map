var size = 0;
var placement = 'point';
function categories_RoadsandStreetsSpeedLimits_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case '15':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(152,156,145,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 15.427999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(234,245,255,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 12.76192}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '20':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(152,156,145,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 15.427999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(215,230,245,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 12.76192}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '25':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(152,156,145,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 15.427999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(175,209,231,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 12.76192}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '30':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(152,156,145,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 15.427999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(115,178,216,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 12.76192}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '45':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(152,156,145,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 15.427999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(62,142,196,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 12.76192}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '50':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(152,156,145,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 15.427999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(22,99,170,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 12.76192}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '-1':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(152,156,145,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 15.427999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 12.76192}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
default:
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(152,156,145,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 15.427999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,127,0,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 12.76192}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_RoadsandStreetsSpeedLimits_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Speed_Limit");
    var labelFont = "7.800000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'line';
    if (feature.get("FullName") !== null) {
        labelText = String(feature.get("FullName"));
    }
    
    var style = categories_RoadsandStreetsSpeedLimits_7(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
