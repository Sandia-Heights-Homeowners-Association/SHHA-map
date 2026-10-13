var wms_layers = [];

var format_SandiaHeightsParcelsCountyZoning_0 = new ol.format.GeoJSON();
var features_SandiaHeightsParcelsCountyZoning_0 = format_SandiaHeightsParcelsCountyZoning_0.readFeatures(json_SandiaHeightsParcelsCountyZoning_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SandiaHeightsParcelsCountyZoning_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SandiaHeightsParcelsCountyZoning_0.addFeatures(features_SandiaHeightsParcelsCountyZoning_0);
var lyr_SandiaHeightsParcelsCountyZoning_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SandiaHeightsParcelsCountyZoning_0, 
                style: style_SandiaHeightsParcelsCountyZoning_0,
                popuplayertitle: 'Sandia Heights Parcels — County Zoning',
                interactive: true,
    title: 'Sandia Heights Parcels — County Zoning<br />\
    <img src="styles/legend/SandiaHeightsParcelsCountyZoning_0_0.png" /> SINGLE FAMILY RESIDENTIAL ZONE<br />\
    <img src="styles/legend/SandiaHeightsParcelsCountyZoning_0_1.png" /> APARTMENT ZONE<br />\
    <img src="styles/legend/SandiaHeightsParcelsCountyZoning_0_2.png" /> NEIGHBORHOOD COMMERCIAL ZONE<br />\
    <img src="styles/legend/SandiaHeightsParcelsCountyZoning_0_3.png" /> RURAL AGRICULTURAL - 1-ACRE MINIMUM ZONE<br />\
    <img src="styles/legend/SandiaHeightsParcelsCountyZoning_0_4.png" /> <br />' });
var format_SandiaHeightsParcelsSolarPanels_1 = new ol.format.GeoJSON();
var features_SandiaHeightsParcelsSolarPanels_1 = format_SandiaHeightsParcelsSolarPanels_1.readFeatures(json_SandiaHeightsParcelsSolarPanels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SandiaHeightsParcelsSolarPanels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SandiaHeightsParcelsSolarPanels_1.addFeatures(features_SandiaHeightsParcelsSolarPanels_1);
var lyr_SandiaHeightsParcelsSolarPanels_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SandiaHeightsParcelsSolarPanels_1, 
                style: style_SandiaHeightsParcelsSolarPanels_1,
                popuplayertitle: 'Sandia Heights Parcels — Solar Panels',
                interactive: true,
    title: 'Sandia Heights Parcels — Solar Panels<br />\
    <img src="styles/legend/SandiaHeightsParcelsSolarPanels_1_0.png" /> <br />\
    <img src="styles/legend/SandiaHeightsParcelsSolarPanels_1_1.png" /> Solar Panels Present<br />' });
var format_SandiaHeightsParcelsDevelopmentUnitsParcels_2 = new ol.format.GeoJSON();
var features_SandiaHeightsParcelsDevelopmentUnitsParcels_2 = format_SandiaHeightsParcelsDevelopmentUnitsParcels_2.readFeatures(json_SandiaHeightsParcelsDevelopmentUnitsParcels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SandiaHeightsParcelsDevelopmentUnitsParcels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SandiaHeightsParcelsDevelopmentUnitsParcels_2.addFeatures(features_SandiaHeightsParcelsDevelopmentUnitsParcels_2);
var lyr_SandiaHeightsParcelsDevelopmentUnitsParcels_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SandiaHeightsParcelsDevelopmentUnitsParcels_2, 
                style: style_SandiaHeightsParcelsDevelopmentUnitsParcels_2,
                popuplayertitle: 'Sandia Heights Parcels — Development Units Parcels',
                interactive: true,
    title: 'Sandia Heights Parcels — Development Units Parcels<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_0.png" /> <br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_1.png" /> Church<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_2.png" /> Little Cloud Park<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_3.png" /> W.L. Jackson Park<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_4.png" /> North 1<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_5.png" /> North 2<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_6.png" /> South 2 North Tramway Estates<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_7.png" /> North 3<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_8.png" /> Sandia Heights North<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_9.png" /> South 1<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_10.png" /> South 2<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_11.png" /> South 3<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_12.png" /> South 4<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_13.png" /> South 5<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_14.png" /> South 6<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_15.png" /> South 7<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_16.png" /> South 7 Chamisa Park<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_17.png" /> South 7 HOA1<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_18.png" /> South 7 HOA2<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_19.png" /> South 7 HOA3<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_20.png" /> South 7CC Cedar Canyon<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_21.png" /> South 8<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_22.png" /> South 8C<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_23.png" /> South 8 Hawks Landing<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_24.png" /> South 9<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_25.png" /> South 10<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_26.png" /> South 11<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_27.png" /> South 12<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_28.png" /> South 14<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_29.png" /> South 15<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_30.png" /> South 16<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_31.png" /> South 16 Red Rada<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_32.png" /> South 17<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_33.png" /> South 18<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_34.png" /> South 19<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_35.png" /> South 20<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_36.png" /> South 21<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_37.png" /> South 23<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_38.png" /> South 24<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_39.png" /> South 25<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_40.png" /> South 26<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_41.png" /> South 27<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_42.png" /> South 27B<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_43.png" /> South 27C<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_44.png" /> South 28<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_45.png" /> South 28B<br />\
    <img src="styles/legend/SandiaHeightsParcelsDevelopmentUnitsParcels_2_46.png" /> South 28C<br />' });
var format_SandiaHeightsParcelsPropertyMaintenance_3 = new ol.format.GeoJSON();
var features_SandiaHeightsParcelsPropertyMaintenance_3 = format_SandiaHeightsParcelsPropertyMaintenance_3.readFeatures(json_SandiaHeightsParcelsPropertyMaintenance_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SandiaHeightsParcelsPropertyMaintenance_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SandiaHeightsParcelsPropertyMaintenance_3.addFeatures(features_SandiaHeightsParcelsPropertyMaintenance_3);
var lyr_SandiaHeightsParcelsPropertyMaintenance_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SandiaHeightsParcelsPropertyMaintenance_3, 
                style: style_SandiaHeightsParcelsPropertyMaintenance_3,
                popuplayertitle: 'Sandia Heights Parcels — Property Maintenance',
                interactive: true,
    title: 'Sandia Heights Parcels — Property Maintenance<br />\
    <img src="styles/legend/SandiaHeightsParcelsPropertyMaintenance_3_0.png" /> Clearcut<br />\
    <img src="styles/legend/SandiaHeightsParcelsPropertyMaintenance_3_1.png" /> Xeriscape<br />\
    <img src="styles/legend/SandiaHeightsParcelsPropertyMaintenance_3_2.png" /> <br />\
    <img src="styles/legend/SandiaHeightsParcelsPropertyMaintenance_3_3.png" /> Xeriscape + Clearcut<br />\
    <img src="styles/legend/SandiaHeightsParcelsPropertyMaintenance_3_4.png" /> Natural<br />\
    <img src="styles/legend/SandiaHeightsParcelsPropertyMaintenance_3_5.png" /> Not Assessed<br />\
    <img src="styles/legend/SandiaHeightsParcelsPropertyMaintenance_3_6.png" /> Green Lawn<br />' });
var format_SandiaHeightsParcelsUndevelopedParcels_4 = new ol.format.GeoJSON();
var features_SandiaHeightsParcelsUndevelopedParcels_4 = format_SandiaHeightsParcelsUndevelopedParcels_4.readFeatures(json_SandiaHeightsParcelsUndevelopedParcels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SandiaHeightsParcelsUndevelopedParcels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SandiaHeightsParcelsUndevelopedParcels_4.addFeatures(features_SandiaHeightsParcelsUndevelopedParcels_4);
var lyr_SandiaHeightsParcelsUndevelopedParcels_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SandiaHeightsParcelsUndevelopedParcels_4, 
                style: style_SandiaHeightsParcelsUndevelopedParcels_4,
                popuplayertitle: 'Sandia Heights Parcels — Undeveloped Parcels',
                interactive: true,
    title: 'Sandia Heights Parcels — Undeveloped Parcels<br />\
    <img src="styles/legend/SandiaHeightsParcelsUndevelopedParcels_4_0.png" /> false<br />\
    <img src="styles/legend/SandiaHeightsParcelsUndevelopedParcels_4_1.png" /> true<br />\
    <img src="styles/legend/SandiaHeightsParcelsUndevelopedParcels_4_2.png" /> <br />' });
var format_SHUnmaintainedAreas_5 = new ol.format.GeoJSON();
var features_SHUnmaintainedAreas_5 = format_SHUnmaintainedAreas_5.readFeatures(json_SHUnmaintainedAreas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHUnmaintainedAreas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHUnmaintainedAreas_5.addFeatures(features_SHUnmaintainedAreas_5);
var lyr_SHUnmaintainedAreas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SHUnmaintainedAreas_5, 
                style: style_SHUnmaintainedAreas_5,
                popuplayertitle: 'SH Unmaintained Areas',
                interactive: true,
                title: '<img src="styles/legend/SHUnmaintainedAreas_5.png" /> SH Unmaintained Areas'
            });
var format_SandiaHeightsDevelopmentUnitsBoundaries_6 = new ol.format.GeoJSON();
var features_SandiaHeightsDevelopmentUnitsBoundaries_6 = format_SandiaHeightsDevelopmentUnitsBoundaries_6.readFeatures(json_SandiaHeightsDevelopmentUnitsBoundaries_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SandiaHeightsDevelopmentUnitsBoundaries_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SandiaHeightsDevelopmentUnitsBoundaries_6.addFeatures(features_SandiaHeightsDevelopmentUnitsBoundaries_6);
var lyr_SandiaHeightsDevelopmentUnitsBoundaries_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SandiaHeightsDevelopmentUnitsBoundaries_6, 
                style: style_SandiaHeightsDevelopmentUnitsBoundaries_6,
                popuplayertitle: 'Sandia Heights Development Units Boundaries',
                interactive: true,
                title: '<img src="styles/legend/SandiaHeightsDevelopmentUnitsBoundaries_6.png" /> Sandia Heights Development Units Boundaries'
            });
var format_RoadsandStreetsSpeedLimits_7 = new ol.format.GeoJSON();
var features_RoadsandStreetsSpeedLimits_7 = format_RoadsandStreetsSpeedLimits_7.readFeatures(json_RoadsandStreetsSpeedLimits_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadsandStreetsSpeedLimits_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadsandStreetsSpeedLimits_7.addFeatures(features_RoadsandStreetsSpeedLimits_7);
var lyr_RoadsandStreetsSpeedLimits_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadsandStreetsSpeedLimits_7, 
                style: style_RoadsandStreetsSpeedLimits_7,
                popuplayertitle: 'Roads and Streets - Speed Limits',
                interactive: true,
    title: 'Roads and Streets - Speed Limits<br />\
    <img src="styles/legend/RoadsandStreetsSpeedLimits_7_0.png" /> 15<br />\
    <img src="styles/legend/RoadsandStreetsSpeedLimits_7_1.png" /> 20<br />\
    <img src="styles/legend/RoadsandStreetsSpeedLimits_7_2.png" /> 25<br />\
    <img src="styles/legend/RoadsandStreetsSpeedLimits_7_3.png" /> 30<br />\
    <img src="styles/legend/RoadsandStreetsSpeedLimits_7_4.png" /> 45<br />\
    <img src="styles/legend/RoadsandStreetsSpeedLimits_7_5.png" /> 50<br />\
    <img src="styles/legend/RoadsandStreetsSpeedLimits_7_6.png" /> unknown<br />\
    <img src="styles/legend/RoadsandStreetsSpeedLimits_7_7.png" /> <br />' });
var format_RoadsandStreets_8 = new ol.format.GeoJSON();
var features_RoadsandStreets_8 = format_RoadsandStreets_8.readFeatures(json_RoadsandStreets_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadsandStreets_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadsandStreets_8.addFeatures(features_RoadsandStreets_8);
var lyr_RoadsandStreets_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadsandStreets_8, 
                style: style_RoadsandStreets_8,
                popuplayertitle: 'Roads and Streets',
                interactive: true,
                title: '<img src="styles/legend/RoadsandStreets_8.png" /> Roads and Streets'
            });
var format_BookExchanges_9 = new ol.format.GeoJSON();
var features_BookExchanges_9 = format_BookExchanges_9.readFeatures(json_BookExchanges_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BookExchanges_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BookExchanges_9.addFeatures(features_BookExchanges_9);
var lyr_BookExchanges_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BookExchanges_9, 
                style: style_BookExchanges_9,
                popuplayertitle: 'BookExchanges',
                interactive: true,
                title: '<img src="styles/legend/BookExchanges_9.png" /> BookExchanges'
            });
var format_Trees_10 = new ol.format.GeoJSON();
var features_Trees_10 = format_Trees_10.readFeatures(json_Trees_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trees_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trees_10.addFeatures(features_Trees_10);
var lyr_Trees_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trees_10, 
                style: style_Trees_10,
                popuplayertitle: 'Trees',
                interactive: true,
    title: 'Trees<br />\
    <img src="styles/legend/Trees_10_0.png" /> DEAD<br />\
    <img src="styles/legend/Trees_10_1.png" /> ELM<br />\
    <img src="styles/legend/Trees_10_2.png" /> ELM NV<br />\
    <img src="styles/legend/Trees_10_3.png" /> COTTONWOOD<br />\
    <img src="styles/legend/Trees_10_4.png" /> COTTONWOOD NV<br />\
    <img src="styles/legend/Trees_10_5.png" /> ASH<br />\
    <img src="styles/legend/Trees_10_6.png" /> DESERT WILLOW<br />\
    <img src="styles/legend/Trees_10_7.png" /> GAMBEL OAK<br />\
    <img src="styles/legend/Trees_10_8.png" /> MOUNTAIN MAHOGANY<br />\
    <img src="styles/legend/Trees_10_9.png" /> <br />' });

lyr_SandiaHeightsParcelsCountyZoning_0.setVisible(false);lyr_SandiaHeightsParcelsSolarPanels_1.setVisible(false);lyr_SandiaHeightsParcelsDevelopmentUnitsParcels_2.setVisible(true);lyr_SandiaHeightsParcelsPropertyMaintenance_3.setVisible(false);lyr_SandiaHeightsParcelsUndevelopedParcels_4.setVisible(false);lyr_SHUnmaintainedAreas_5.setVisible(false);lyr_SandiaHeightsDevelopmentUnitsBoundaries_6.setVisible(false);lyr_RoadsandStreetsSpeedLimits_7.setVisible(false);lyr_RoadsandStreets_8.setVisible(false);lyr_BookExchanges_9.setVisible(false);lyr_Trees_10.setVisible(false);
var layersList = [lyr_SandiaHeightsParcelsCountyZoning_0,lyr_SandiaHeightsParcelsSolarPanels_1,lyr_SandiaHeightsParcelsDevelopmentUnitsParcels_2,lyr_SandiaHeightsParcelsPropertyMaintenance_3,lyr_SandiaHeightsParcelsUndevelopedParcels_4,lyr_SHUnmaintainedAreas_5,lyr_SandiaHeightsDevelopmentUnitsBoundaries_6,lyr_RoadsandStreetsSpeedLimits_7,lyr_RoadsandStreets_8,lyr_BookExchanges_9,lyr_Trees_10];
lyr_SandiaHeightsParcelsCountyZoning_0.set('fieldAliases', {'fid': 'fid', 'LOT': 'LOT', 'BLOCK': 'BLOCK', 'SUBDIVISIO': 'SUBDIVISIO', 'STREETNUMB': 'STREETNUMB', 'STREETNAME': 'STREETNAME', 'STREETDESI': 'STREETDESI', 'STREETQUAD': 'STREETQUAD', 'APARTMENT': 'APARTMENT', 'PIN': 'PIN', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Jurisdicti': 'Jurisdicti', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADDRESS': 'ADDRESS', 'GISACRES': 'GISACRES', 'undeveloped_lots': 'undeveloped_lots', 'Property_Maintenance': 'Property_Maintenance', 'Development_Unit': 'Development_Unit', 'ZoningDesignation': 'ZoningDesignation', 'ZoningDescription': 'ZoningDescription', 'MapLayoutUnits': 'MapLayoutUnits', 'ProperStreetNumber': 'ProperStreetNumber', 'Number Solar Panels': 'Number Solar Panels', 'NST_Homes': 'NST_Homes', });
lyr_SandiaHeightsParcelsSolarPanels_1.set('fieldAliases', {'fid': 'fid', 'LOT': 'LOT', 'BLOCK': 'BLOCK', 'SUBDIVISIO': 'SUBDIVISIO', 'STREETNUMB': 'STREETNUMB', 'STREETNAME': 'STREETNAME', 'STREETDESI': 'STREETDESI', 'STREETQUAD': 'STREETQUAD', 'APARTMENT': 'APARTMENT', 'PIN': 'PIN', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Jurisdicti': 'Jurisdicti', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADDRESS': 'ADDRESS', 'GISACRES': 'GISACRES', 'undeveloped_lots': 'undeveloped_lots', 'Property_Maintenance': 'Property_Maintenance', 'Development_Unit': 'Development_Unit', 'ZoningDesignation': 'ZoningDesignation', 'ZoningDescription': 'ZoningDescription', 'MapLayoutUnits': 'MapLayoutUnits', 'ProperStreetNumber': 'ProperStreetNumber', 'Number Solar Panels': 'Number Solar Panels', 'NST_Homes': 'NST_Homes', });
lyr_SandiaHeightsParcelsDevelopmentUnitsParcels_2.set('fieldAliases', {'fid': 'fid', 'LOT': 'LOT', 'BLOCK': 'BLOCK', 'SUBDIVISIO': 'SUBDIVISIO', 'STREETNUMB': 'STREETNUMB', 'STREETNAME': 'STREETNAME', 'STREETDESI': 'STREETDESI', 'STREETQUAD': 'STREETQUAD', 'APARTMENT': 'APARTMENT', 'PIN': 'PIN', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Jurisdicti': 'Jurisdicti', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADDRESS': 'ADDRESS', 'GISACRES': 'GISACRES', 'undeveloped_lots': 'undeveloped_lots', 'Property_Maintenance': 'Property_Maintenance', 'Development_Unit': 'Development_Unit', 'ZoningDesignation': 'ZoningDesignation', 'ZoningDescription': 'ZoningDescription', 'MapLayoutUnits': 'MapLayoutUnits', 'ProperStreetNumber': 'ProperStreetNumber', 'Number Solar Panels': 'Number Solar Panels', 'NST_Homes': 'NST_Homes', });
lyr_SandiaHeightsParcelsPropertyMaintenance_3.set('fieldAliases', {'fid': 'fid', 'LOT': 'LOT', 'BLOCK': 'BLOCK', 'SUBDIVISIO': 'SUBDIVISIO', 'STREETNUMB': 'STREETNUMB', 'STREETNAME': 'STREETNAME', 'STREETDESI': 'STREETDESI', 'STREETQUAD': 'STREETQUAD', 'APARTMENT': 'APARTMENT', 'PIN': 'PIN', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Jurisdicti': 'Jurisdicti', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADDRESS': 'ADDRESS', 'GISACRES': 'GISACRES', 'undeveloped_lots': 'undeveloped_lots', 'Property_Maintenance': 'Property_Maintenance', 'Development_Unit': 'Development_Unit', 'ZoningDesignation': 'ZoningDesignation', 'ZoningDescription': 'ZoningDescription', 'MapLayoutUnits': 'MapLayoutUnits', 'ProperStreetNumber': 'ProperStreetNumber', 'Number Solar Panels': 'Number Solar Panels', 'NST_Homes': 'NST_Homes', });
lyr_SandiaHeightsParcelsUndevelopedParcels_4.set('fieldAliases', {'fid': 'fid', 'LOT': 'LOT', 'BLOCK': 'BLOCK', 'SUBDIVISIO': 'SUBDIVISIO', 'STREETNUMB': 'STREETNUMB', 'STREETNAME': 'STREETNAME', 'STREETDESI': 'STREETDESI', 'STREETQUAD': 'STREETQUAD', 'APARTMENT': 'APARTMENT', 'PIN': 'PIN', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Jurisdicti': 'Jurisdicti', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADDRESS': 'ADDRESS', 'GISACRES': 'GISACRES', 'undeveloped_lots': 'undeveloped_lots', 'Property_Maintenance': 'Property_Maintenance', 'Development_Unit': 'Development_Unit', 'ZoningDesignation': 'ZoningDesignation', 'ZoningDescription': 'ZoningDescription', 'MapLayoutUnits': 'MapLayoutUnits', 'ProperStreetNumber': 'ProperStreetNumber', 'Number Solar Panels': 'Number Solar Panels', 'NST_Homes': 'NST_Homes', 'undeveloped_parcels': 'undeveloped_parcels', });
lyr_SHUnmaintainedAreas_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SandiaHeightsDevelopmentUnitsBoundaries_6.set('fieldAliases', {'fid': 'fid', 'LOT': 'LOT', 'BLOCK': 'BLOCK', 'SUBDIVISIO': 'SUBDIVISIO', 'STREETNUMB': 'STREETNUMB', 'STREETNAME': 'STREETNAME', 'STREETDESI': 'STREETDESI', 'STREETQUAD': 'STREETQUAD', 'APARTMENT': 'APARTMENT', 'PIN': 'PIN', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'Jurisdicti': 'Jurisdicti', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADDRESS': 'ADDRESS', 'GISACRES': 'GISACRES', 'undeveloped_lots': 'undeveloped_lots', 'Property_Maintenance': 'Property_Maintenance', 'Development_Unit': 'Development_Unit', 'MapLayoutUnits': 'MapLayoutUnits', });
lyr_RoadsandStreetsSpeedLimits_7.set('fieldAliases', {'fid': 'fid', 'FullName': 'FullName', 'StreetName': 'StreetName', 'StreetDesi': 'StreetDesi', 'StreetSuff': 'StreetSuff', 'FromStreet': 'FromStreet', 'ToStreet': 'ToStreet', 'AliasName': 'AliasName', 'Maintenanc': 'Maintenanc', 'Maintena_1': 'Maintena_1', 'StreetOwne': 'StreetOwne', 'StreetJuri': 'StreetJuri', 'SegmentCar': 'SegmentCar', 'SurfaceTyp': 'SurfaceTyp', 'SurfaceWid': 'SurfaceWid', 'ROWWidth': 'ROWWidth', 'PavementRS': 'PavementRS', 'SnowRemova': 'SnowRemova', 'Maintena_2': 'Maintena_2', 'Commission': 'Commission', 'MRCOGFunct': 'MRCOGFunct', 'StreetClas': 'StreetClas', 'YearBuilt': 'YearBuilt', 'AddDate': 'AddDate', 'DropDate': 'DropDate', 'GISAction': 'GISAction', 'GISMiles': 'GISMiles', 'ERPID': 'ERPID', 'SHAPE_Leng': 'SHAPE_Leng', 'ShowRoad': 'ShowRoad', 'MapLayoutUnits': 'MapLayoutUnits', 'Speed_Limit': 'Speed_Limit', });
lyr_RoadsandStreets_8.set('fieldAliases', {'fid': 'fid', 'FullName': 'FullName', 'StreetName': 'StreetName', 'StreetDesi': 'StreetDesi', 'StreetSuff': 'StreetSuff', 'FromStreet': 'FromStreet', 'ToStreet': 'ToStreet', 'AliasName': 'AliasName', 'Maintenanc': 'Maintenanc', 'Maintena_1': 'Maintena_1', 'StreetOwne': 'StreetOwne', 'StreetJuri': 'StreetJuri', 'SegmentCar': 'SegmentCar', 'SurfaceTyp': 'SurfaceTyp', 'SurfaceWid': 'SurfaceWid', 'ROWWidth': 'ROWWidth', 'PavementRS': 'PavementRS', 'SnowRemova': 'SnowRemova', 'Maintena_2': 'Maintena_2', 'Commission': 'Commission', 'MRCOGFunct': 'MRCOGFunct', 'StreetClas': 'StreetClas', 'YearBuilt': 'YearBuilt', 'AddDate': 'AddDate', 'DropDate': 'DropDate', 'GISAction': 'GISAction', 'GISMiles': 'GISMiles', 'ERPID': 'ERPID', 'SHAPE_Leng': 'SHAPE_Leng', 'ShowRoad': 'ShowRoad', 'MapLayoutUnits': 'MapLayoutUnits', 'Speed_Limit': 'Speed_Limit', });
lyr_BookExchanges_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Book_Xchan': 'Book_Xchan', });
lyr_Trees_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', 'layer': 'layer', 'path': 'path', });
lyr_SandiaHeightsParcelsCountyZoning_0.set('fieldImages', {'fid': 'TextEdit', 'LOT': 'TextEdit', 'BLOCK': 'TextEdit', 'SUBDIVISIO': 'TextEdit', 'STREETNUMB': 'TextEdit', 'STREETNAME': 'TextEdit', 'STREETDESI': 'TextEdit', 'STREETQUAD': 'TextEdit', 'APARTMENT': 'TextEdit', 'PIN': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'Jurisdicti': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADDRESS': 'TextEdit', 'GISACRES': 'TextEdit', 'undeveloped_lots': 'CheckBox', 'Property_Maintenance': 'TextEdit', 'Development_Unit': 'TextEdit', 'ZoningDesignation': 'TextEdit', 'ZoningDescription': 'TextEdit', 'MapLayoutUnits': 'TextEdit', 'ProperStreetNumber': 'TextEdit', 'Number Solar Panels': 'Range', 'NST_Homes': 'TextEdit', });
lyr_SandiaHeightsParcelsSolarPanels_1.set('fieldImages', {'fid': 'TextEdit', 'LOT': 'TextEdit', 'BLOCK': 'TextEdit', 'SUBDIVISIO': 'TextEdit', 'STREETNUMB': 'TextEdit', 'STREETNAME': 'TextEdit', 'STREETDESI': 'TextEdit', 'STREETQUAD': 'TextEdit', 'APARTMENT': 'TextEdit', 'PIN': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'Jurisdicti': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADDRESS': 'TextEdit', 'GISACRES': 'TextEdit', 'undeveloped_lots': 'CheckBox', 'Property_Maintenance': 'TextEdit', 'Development_Unit': 'TextEdit', 'ZoningDesignation': 'TextEdit', 'ZoningDescription': 'TextEdit', 'MapLayoutUnits': 'TextEdit', 'ProperStreetNumber': 'TextEdit', 'Number Solar Panels': 'Range', 'NST_Homes': 'TextEdit', });
lyr_SandiaHeightsParcelsDevelopmentUnitsParcels_2.set('fieldImages', {'fid': 'TextEdit', 'LOT': 'TextEdit', 'BLOCK': 'TextEdit', 'SUBDIVISIO': 'TextEdit', 'STREETNUMB': 'TextEdit', 'STREETNAME': 'TextEdit', 'STREETDESI': 'TextEdit', 'STREETQUAD': 'TextEdit', 'APARTMENT': 'TextEdit', 'PIN': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'Jurisdicti': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADDRESS': 'TextEdit', 'GISACRES': 'TextEdit', 'undeveloped_lots': 'CheckBox', 'Property_Maintenance': 'TextEdit', 'Development_Unit': 'TextEdit', 'ZoningDesignation': 'TextEdit', 'ZoningDescription': 'TextEdit', 'MapLayoutUnits': 'TextEdit', 'ProperStreetNumber': 'TextEdit', 'Number Solar Panels': 'Range', 'NST_Homes': 'TextEdit', });
lyr_SandiaHeightsParcelsPropertyMaintenance_3.set('fieldImages', {'fid': 'TextEdit', 'LOT': 'TextEdit', 'BLOCK': 'TextEdit', 'SUBDIVISIO': 'TextEdit', 'STREETNUMB': 'TextEdit', 'STREETNAME': 'TextEdit', 'STREETDESI': 'TextEdit', 'STREETQUAD': 'TextEdit', 'APARTMENT': 'TextEdit', 'PIN': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'Jurisdicti': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADDRESS': 'TextEdit', 'GISACRES': 'TextEdit', 'undeveloped_lots': 'CheckBox', 'Property_Maintenance': 'TextEdit', 'Development_Unit': 'TextEdit', 'ZoningDesignation': 'TextEdit', 'ZoningDescription': 'TextEdit', 'MapLayoutUnits': 'TextEdit', 'ProperStreetNumber': 'TextEdit', 'Number Solar Panels': 'Range', 'NST_Homes': 'TextEdit', });
lyr_SandiaHeightsParcelsUndevelopedParcels_4.set('fieldImages', {'fid': 'TextEdit', 'LOT': 'TextEdit', 'BLOCK': 'TextEdit', 'SUBDIVISIO': 'TextEdit', 'STREETNUMB': 'TextEdit', 'STREETNAME': 'TextEdit', 'STREETDESI': 'TextEdit', 'STREETQUAD': 'TextEdit', 'APARTMENT': 'TextEdit', 'PIN': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'Jurisdicti': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADDRESS': 'TextEdit', 'GISACRES': 'TextEdit', 'undeveloped_lots': 'CheckBox', 'Property_Maintenance': 'TextEdit', 'Development_Unit': 'TextEdit', 'ZoningDesignation': 'TextEdit', 'ZoningDescription': 'TextEdit', 'MapLayoutUnits': 'TextEdit', 'ProperStreetNumber': 'TextEdit', 'Number Solar Panels': 'Range', 'NST_Homes': 'TextEdit', 'undeveloped_parcels': 'TextEdit', });
lyr_SHUnmaintainedAreas_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_SandiaHeightsDevelopmentUnitsBoundaries_6.set('fieldImages', {'fid': 'TextEdit', 'LOT': 'TextEdit', 'BLOCK': 'TextEdit', 'SUBDIVISIO': 'TextEdit', 'STREETNUMB': 'TextEdit', 'STREETNAME': 'TextEdit', 'STREETDESI': 'TextEdit', 'STREETQUAD': 'TextEdit', 'APARTMENT': 'TextEdit', 'PIN': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'Jurisdicti': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADDRESS': 'TextEdit', 'GISACRES': 'TextEdit', 'undeveloped_lots': 'CheckBox', 'Property_Maintenance': 'TextEdit', 'Development_Unit': 'TextEdit', 'MapLayoutUnits': 'TextEdit', });
lyr_RoadsandStreetsSpeedLimits_7.set('fieldImages', {'fid': 'TextEdit', 'FullName': 'TextEdit', 'StreetName': 'TextEdit', 'StreetDesi': 'TextEdit', 'StreetSuff': 'TextEdit', 'FromStreet': 'TextEdit', 'ToStreet': 'TextEdit', 'AliasName': 'TextEdit', 'Maintenanc': 'TextEdit', 'Maintena_1': 'TextEdit', 'StreetOwne': 'TextEdit', 'StreetJuri': 'TextEdit', 'SegmentCar': 'TextEdit', 'SurfaceTyp': 'TextEdit', 'SurfaceWid': 'Range', 'ROWWidth': 'Range', 'PavementRS': 'Range', 'SnowRemova': 'TextEdit', 'Maintena_2': 'TextEdit', 'Commission': 'TextEdit', 'MRCOGFunct': 'Range', 'StreetClas': 'TextEdit', 'YearBuilt': 'Range', 'AddDate': 'DateTime', 'DropDate': 'DateTime', 'GISAction': 'TextEdit', 'GISMiles': 'TextEdit', 'ERPID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'ShowRoad': 'TextEdit', 'MapLayoutUnits': 'TextEdit', 'Speed_Limit': 'TextEdit', });
lyr_RoadsandStreets_8.set('fieldImages', {'fid': 'TextEdit', 'FullName': 'TextEdit', 'StreetName': 'TextEdit', 'StreetDesi': 'TextEdit', 'StreetSuff': 'TextEdit', 'FromStreet': 'TextEdit', 'ToStreet': 'TextEdit', 'AliasName': 'TextEdit', 'Maintenanc': 'TextEdit', 'Maintena_1': 'TextEdit', 'StreetOwne': 'TextEdit', 'StreetJuri': 'TextEdit', 'SegmentCar': 'TextEdit', 'SurfaceTyp': 'TextEdit', 'SurfaceWid': 'Range', 'ROWWidth': 'Range', 'PavementRS': 'Range', 'SnowRemova': 'TextEdit', 'Maintena_2': 'TextEdit', 'Commission': 'TextEdit', 'MRCOGFunct': 'Range', 'StreetClas': 'TextEdit', 'YearBuilt': 'Range', 'AddDate': 'DateTime', 'DropDate': 'DateTime', 'GISAction': 'TextEdit', 'GISMiles': 'TextEdit', 'ERPID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'ShowRoad': 'TextEdit', 'MapLayoutUnits': 'TextEdit', 'Speed_Limit': '', });
lyr_BookExchanges_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Book_Xchan': 'CheckBox', });
lyr_Trees_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_SandiaHeightsParcelsCountyZoning_0.set('fieldLabels', {'fid': 'hidden field', 'LOT': 'hidden field', 'BLOCK': 'hidden field', 'SUBDIVISIO': 'hidden field', 'STREETNUMB': 'hidden field', 'STREETNAME': 'hidden field', 'STREETDESI': 'hidden field', 'STREETQUAD': 'hidden field', 'APARTMENT': 'hidden field', 'PIN': 'hidden field', 'created_us': 'hidden field', 'created_da': 'hidden field', 'last_edite': 'hidden field', 'last_edi_1': 'hidden field', 'Jurisdicti': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ADDRESS': 'inline label - visible with data', 'GISACRES': 'hidden field', 'undeveloped_lots': 'hidden field', 'Property_Maintenance': 'hidden field', 'Development_Unit': 'hidden field', 'ZoningDesignation': 'inline label - visible with data', 'ZoningDescription': 'inline label - visible with data', 'MapLayoutUnits': 'hidden field', 'ProperStreetNumber': 'hidden field', 'Number Solar Panels': 'hidden field', 'NST_Homes': 'hidden field', });
lyr_SandiaHeightsParcelsSolarPanels_1.set('fieldLabels', {'fid': 'hidden field', 'LOT': 'hidden field', 'BLOCK': 'hidden field', 'SUBDIVISIO': 'hidden field', 'STREETNUMB': 'hidden field', 'STREETNAME': 'hidden field', 'STREETDESI': 'hidden field', 'STREETQUAD': 'hidden field', 'APARTMENT': 'hidden field', 'PIN': 'hidden field', 'created_us': 'hidden field', 'created_da': 'hidden field', 'last_edite': 'hidden field', 'last_edi_1': 'hidden field', 'Jurisdicti': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ADDRESS': 'hidden field', 'GISACRES': 'hidden field', 'undeveloped_lots': 'hidden field', 'Property_Maintenance': 'hidden field', 'Development_Unit': 'hidden field', 'ZoningDesignation': 'hidden field', 'ZoningDescription': 'hidden field', 'MapLayoutUnits': 'hidden field', 'ProperStreetNumber': 'hidden field', 'Number Solar Panels': 'inline label - visible with data', 'NST_Homes': 'hidden field', });
lyr_SandiaHeightsParcelsDevelopmentUnitsParcels_2.set('fieldLabels', {'fid': 'hidden field', 'LOT': 'inline label - visible with data', 'BLOCK': 'hidden field', 'SUBDIVISIO': 'hidden field', 'STREETNUMB': 'inline label - always visible', 'STREETNAME': 'hidden field', 'STREETDESI': 'hidden field', 'STREETQUAD': 'hidden field', 'APARTMENT': 'hidden field', 'PIN': 'hidden field', 'created_us': 'hidden field', 'created_da': 'hidden field', 'last_edite': 'hidden field', 'last_edi_1': 'hidden field', 'Jurisdicti': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ADDRESS': 'inline label - visible with data', 'GISACRES': 'hidden field', 'undeveloped_lots': 'hidden field', 'Property_Maintenance': 'hidden field', 'Development_Unit': 'hidden field', 'ZoningDesignation': 'hidden field', 'ZoningDescription': 'hidden field', 'MapLayoutUnits': 'hidden field', 'ProperStreetNumber': 'hidden field', 'Number Solar Panels': 'hidden field', 'NST_Homes': 'hidden field', });
lyr_SandiaHeightsParcelsPropertyMaintenance_3.set('fieldLabels', {'fid': 'hidden field', 'LOT': 'hidden field', 'BLOCK': 'hidden field', 'SUBDIVISIO': 'hidden field', 'STREETNUMB': 'hidden field', 'STREETNAME': 'hidden field', 'STREETDESI': 'hidden field', 'STREETQUAD': 'hidden field', 'APARTMENT': 'hidden field', 'PIN': 'hidden field', 'created_us': 'hidden field', 'created_da': 'hidden field', 'last_edite': 'hidden field', 'last_edi_1': 'hidden field', 'Jurisdicti': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ADDRESS': 'hidden field', 'GISACRES': 'hidden field', 'undeveloped_lots': 'hidden field', 'Property_Maintenance': 'inline label - always visible', 'Development_Unit': 'hidden field', 'ZoningDesignation': 'hidden field', 'ZoningDescription': 'hidden field', 'MapLayoutUnits': 'hidden field', 'ProperStreetNumber': 'hidden field', 'Number Solar Panels': 'hidden field', 'NST_Homes': 'hidden field', });
lyr_SandiaHeightsParcelsUndevelopedParcels_4.set('fieldLabels', {'fid': 'hidden field', 'LOT': 'hidden field', 'BLOCK': 'hidden field', 'SUBDIVISIO': 'hidden field', 'STREETNUMB': 'hidden field', 'STREETNAME': 'hidden field', 'STREETDESI': 'hidden field', 'STREETQUAD': 'hidden field', 'APARTMENT': 'hidden field', 'PIN': 'hidden field', 'created_us': 'hidden field', 'created_da': 'hidden field', 'last_edite': 'hidden field', 'last_edi_1': 'hidden field', 'Jurisdicti': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ADDRESS': 'hidden field', 'GISACRES': 'hidden field', 'undeveloped_lots': 'hidden field', 'Property_Maintenance': 'hidden field', 'Development_Unit': 'hidden field', 'ZoningDesignation': 'hidden field', 'ZoningDescription': 'hidden field', 'MapLayoutUnits': 'hidden field', 'ProperStreetNumber': 'hidden field', 'Number Solar Panels': 'hidden field', 'NST_Homes': 'hidden field', 'undeveloped_parcels': 'inline label - visible with data', });
lyr_SHUnmaintainedAreas_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_SandiaHeightsDevelopmentUnitsBoundaries_6.set('fieldLabels', {'fid': 'hidden field', 'LOT': 'hidden field', 'BLOCK': 'hidden field', 'SUBDIVISIO': 'hidden field', 'STREETNUMB': 'hidden field', 'STREETNAME': 'hidden field', 'STREETDESI': 'hidden field', 'STREETQUAD': 'hidden field', 'APARTMENT': 'hidden field', 'PIN': 'hidden field', 'created_us': 'hidden field', 'created_da': 'hidden field', 'last_edite': 'hidden field', 'last_edi_1': 'hidden field', 'Jurisdicti': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'ADDRESS': 'hidden field', 'GISACRES': 'hidden field', 'undeveloped_lots': 'hidden field', 'Property_Maintenance': 'hidden field', 'Development_Unit': 'inline label - visible with data', 'MapLayoutUnits': 'hidden field', });
lyr_RoadsandStreetsSpeedLimits_7.set('fieldLabels', {'fid': 'hidden field', 'FullName': 'inline label - visible with data', 'StreetName': 'hidden field', 'StreetDesi': 'hidden field', 'StreetSuff': 'hidden field', 'FromStreet': 'hidden field', 'ToStreet': 'hidden field', 'AliasName': 'hidden field', 'Maintenanc': 'hidden field', 'Maintena_1': 'hidden field', 'StreetOwne': 'inline label - visible with data', 'StreetJuri': 'hidden field', 'SegmentCar': 'hidden field', 'SurfaceTyp': 'hidden field', 'SurfaceWid': 'hidden field', 'ROWWidth': 'hidden field', 'PavementRS': 'hidden field', 'SnowRemova': 'hidden field', 'Maintena_2': 'hidden field', 'Commission': 'hidden field', 'MRCOGFunct': 'hidden field', 'StreetClas': 'hidden field', 'YearBuilt': 'hidden field', 'AddDate': 'hidden field', 'DropDate': 'hidden field', 'GISAction': 'hidden field', 'GISMiles': 'hidden field', 'ERPID': 'hidden field', 'SHAPE_Leng': 'hidden field', 'ShowRoad': 'hidden field', 'MapLayoutUnits': 'hidden field', 'Speed_Limit': 'inline label - visible with data', });
lyr_RoadsandStreets_8.set('fieldLabels', {'fid': 'hidden field', 'FullName': 'inline label - visible with data', 'StreetName': 'hidden field', 'StreetDesi': 'hidden field', 'StreetSuff': 'hidden field', 'FromStreet': 'hidden field', 'ToStreet': 'hidden field', 'AliasName': 'hidden field', 'Maintenanc': 'hidden field', 'Maintena_1': 'hidden field', 'StreetOwne': 'inline label - visible with data', 'StreetJuri': 'hidden field', 'SegmentCar': 'hidden field', 'SurfaceTyp': 'hidden field', 'SurfaceWid': 'hidden field', 'ROWWidth': 'hidden field', 'PavementRS': 'hidden field', 'SnowRemova': 'hidden field', 'Maintena_2': 'hidden field', 'Commission': 'hidden field', 'MRCOGFunct': 'hidden field', 'StreetClas': 'hidden field', 'YearBuilt': 'hidden field', 'AddDate': 'hidden field', 'DropDate': 'hidden field', 'GISAction': 'hidden field', 'GISMiles': 'hidden field', 'ERPID': 'hidden field', 'SHAPE_Leng': 'hidden field', 'ShowRoad': 'hidden field', 'MapLayoutUnits': 'hidden field', 'Speed_Limit': 'no label', });
lyr_BookExchanges_9.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Book_Xchan': 'inline label - visible with data', });
lyr_Trees_10.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'inline label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'snippet': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Trees_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});