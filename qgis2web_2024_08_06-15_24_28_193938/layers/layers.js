var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AlbertaWaterbodies_1 = new ol.format.GeoJSON();
var features_AlbertaWaterbodies_1 = format_AlbertaWaterbodies_1.readFeatures(json_AlbertaWaterbodies_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlbertaWaterbodies_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaWaterbodies_1.addFeatures(features_AlbertaWaterbodies_1);
var lyr_AlbertaWaterbodies_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaWaterbodies_1, 
                style: style_AlbertaWaterbodies_1,
                popuplayertitle: "Alberta Waterbodies",
                interactive: false,
                title: '<img src="styles/legend/AlbertaWaterbodies_1.png" /> Alberta Waterbodies'
            });
var format_AlbertaBoundary_2 = new ol.format.GeoJSON();
var features_AlbertaBoundary_2 = format_AlbertaBoundary_2.readFeatures(json_AlbertaBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlbertaBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlbertaBoundary_2.addFeatures(features_AlbertaBoundary_2);
var lyr_AlbertaBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlbertaBoundary_2, 
                style: style_AlbertaBoundary_2,
                popuplayertitle: "Alberta Boundary",
                interactive: false,
                title: '<img src="styles/legend/AlbertaBoundary_2.png" /> Alberta Boundary'
            });
var format_FishStockingPoints_3 = new ol.format.GeoJSON();
var features_FishStockingPoints_3 = format_FishStockingPoints_3.readFeatures(json_FishStockingPoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FishStockingPoints_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStockingPoints_3.addFeatures(features_FishStockingPoints_3);
var lyr_FishStockingPoints_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStockingPoints_3, 
                style: style_FishStockingPoints_3,
                popuplayertitle: "Fish Stocking Points",
                interactive: true,
    title: 'Fish Stocking Points<br />\
    <img src="styles/legend/FishStockingPoints_3_0.png" /> 0 - 2600<br />\
    <img src="styles/legend/FishStockingPoints_3_1.png" /> 2600 - 8120<br />\
    <img src="styles/legend/FishStockingPoints_3_2.png" /> 8120 - 23500<br />\
    <img src="styles/legend/FishStockingPoints_3_3.png" /> 23500 - 110000<br />\
    <img src="styles/legend/FishStockingPoints_3_4.png" /> 110000 - 1613075<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_AlbertaWaterbodies_1.setVisible(true);lyr_AlbertaBoundary_2.setVisible(true);lyr_FishStockingPoints_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AlbertaWaterbodies_1,lyr_AlbertaBoundary_2,lyr_FishStockingPoints_3];
lyr_AlbertaWaterbodies_1.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_AlbertaBoundary_2.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_FishStockingPoints_3.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'Map Author': 'Map Author', 'S_NUMBER': 'S_NUMBER', });
lyr_AlbertaWaterbodies_1.set('fieldImages', {'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'Range', 'PRUID': 'TextEdit', });
lyr_AlbertaBoundary_2.set('fieldImages', {'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_FishStockingPoints_3.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'Map Author': 'TextEdit', 'S_NUMBER': 'TextEdit', });
lyr_AlbertaWaterbodies_1.set('fieldLabels', {'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', });
lyr_AlbertaBoundary_2.set('fieldLabels', {'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_FishStockingPoints_3.set('fieldLabels', {'DISTRICT': 'hidden field', 'WATERBODY': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'inline label - always visible', 'GENOTYPE': 'hidden field', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'hidden field', 'Map Author': 'header label - always visible', 'S_NUMBER': 'inline label - always visible', });
lyr_FishStockingPoints_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});