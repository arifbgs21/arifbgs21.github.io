var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LapakGIScomSIGBatang2021_0 = new ol.format.GeoJSON();
var features_LapakGIScomSIGBatang2021_0 = format_LapakGIScomSIGBatang2021_0.readFeatures(json_LapakGIScomSIGBatang2021_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LapakGIScomSIGBatang2021_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LapakGIScomSIGBatang2021_0.addFeatures(features_LapakGIScomSIGBatang2021_0);var lyr_LapakGIScomSIGBatang2021_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LapakGIScomSIGBatang2021_0, 
                style: style_LapakGIScomSIGBatang2021_0,
    title: '[LapakGIS.com] SIG Batang 2021<br />\
    <img src="styles/legend/LapakGIScomSIGBatang2021_0_0.png" />  0 - 0 <br />\
    <img src="styles/legend/LapakGIScomSIGBatang2021_0_1.png" />  0 - 2096 <br />\
    <img src="styles/legend/LapakGIScomSIGBatang2021_0_2.png" />  2096 - 3143 <br />\
    <img src="styles/legend/LapakGIScomSIGBatang2021_0_3.png" />  3143 - 4191 <br />\
    <img src="styles/legend/LapakGIScomSIGBatang2021_0_4.png" />  4191 - 5239 <br />'
        });

lyr_LapakGIScomSIGBatang2021_0.setVisible(true);
var layersList = [baseLayer,lyr_LapakGIScomSIGBatang2021_0];
lyr_LapakGIScomSIGBatang2021_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Kecamatan': 'Kecamatan', 'Ketinggian': 'Ketinggian', 'CurahHujan': 'CurahHujan', });
lyr_LapakGIScomSIGBatang2021_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Kecamatan': 'TextEdit', 'Ketinggian': 'TextEdit', 'CurahHujan': 'TextEdit', });
lyr_LapakGIScomSIGBatang2021_0.set('fieldLabels', {'OBJECTID': 'inline label', 'Kecamatan': 'inline label', 'Ketinggian': 'inline label', 'CurahHujan': 'inline label', });
lyr_LapakGIScomSIGBatang2021_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});