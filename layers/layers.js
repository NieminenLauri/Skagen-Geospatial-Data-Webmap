var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pargasmunicipalityborders_1 = new ol.format.GeoJSON();
var features_Pargasmunicipalityborders_1 = format_Pargasmunicipalityborders_1.readFeatures(json_Pargasmunicipalityborders_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pargasmunicipalityborders_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pargasmunicipalityborders_1.addFeatures(features_Pargasmunicipalityborders_1);
var lyr_Pargasmunicipalityborders_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pargasmunicipalityborders_1, 
                style: style_Pargasmunicipalityborders_1,
                popuplayertitle: 'Pargas municipality borders',
                interactive: false,
                title: '<img src="styles/legend/Pargasmunicipalityborders_1.png" /> Pargas municipality borders'
            });
var lyr_UneditedZonationrankmap_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Unedited Zonation rankmap<br />\
    <img src="styles/legend/UneditedZonationrankmap_2_0.png" /> 0,0000<br />\
    <img src="styles/legend/UneditedZonationrankmap_2_1.png" /> 0,9900<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/UneditedZonationrankmap_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2337715.820740, 8336960.770243, 2515843.046103, 8513485.964190]
        })
    });
var lyr_FilteredZonationrankmap_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Filtered Zonation rankmap<br />\
    <img src="styles/legend/FilteredZonationrankmap_3_0.png" /> 0,0000<br />\
    <img src="styles/legend/FilteredZonationrankmap_3_1.png" /> 1,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/FilteredZonationrankmap_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [2337715.820740, 8336960.770243, 2515843.046103, 8513485.964190]
        })
    });
var format_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4 = new ol.format.GeoJSON();
var features_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4 = format_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4.readFeatures(json_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4.addFeatures(features_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4);
var lyr_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4, 
                style: style_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4,
                popuplayertitle: '200m Overlapping tourism development buffers (Yes large tourism - No large tourism)',
                interactive: false,
                title: '<img src="styles/legend/legend_hatch_red_framed_16x16.png" /> 200m Overlapping tourism development buffers (Yes large tourism - No large tourism)'
            });
var format_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5 = new ol.format.GeoJSON();
var features_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5 = format_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5.readFeatures(json_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5.addFeatures(features_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5);
var lyr_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5, 
                style: style_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5,
                popuplayertitle: '200m Overlapping tourism development buffers (No large tourism - Yes large tourism)',
                interactive: false,
                title: '<img src="styles/legend/legend_hatch_blue_framed_16x16.png" /> 200m Overlapping tourism development buffers (No large tourism - Yes large tourism)'
            });
var format_Pargaslandscapevaluesbuffered100m_6 = new ol.format.GeoJSON();
var features_Pargaslandscapevaluesbuffered100m_6 = format_Pargaslandscapevaluesbuffered100m_6.readFeatures(json_Pargaslandscapevaluesbuffered100m_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pargaslandscapevaluesbuffered100m_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pargaslandscapevaluesbuffered100m_6.addFeatures(features_Pargaslandscapevaluesbuffered100m_6);
var lyr_Pargaslandscapevaluesbuffered100m_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pargaslandscapevaluesbuffered100m_6, 
                style: style_Pargaslandscapevaluesbuffered100m_6,
                popuplayertitle: 'Pargas landscape values (buffered 100m)',
                interactive: false,
    title: 'Pargas landscape values (buffered 100m)<br />\
    <img src="styles/legend/Pargaslandscapevaluesbuffered100m_6_0.png" /> Beautiful<br />\
    <img src="styles/legend/Pargaslandscapevaluesbuffered100m_6_1.png" /> Biodiversity<br />\
    <img src="styles/legend/Pargaslandscapevaluesbuffered100m_6_2.png" /> Culture<br />\
    <img src="styles/legend/Pargaslandscapevaluesbuffered100m_6_3.png" /> FishingEtc<br />\
    <img src="styles/legend/Pargaslandscapevaluesbuffered100m_6_4.png" /> Learning<br />\
    <img src="styles/legend/Pargaslandscapevaluesbuffered100m_6_5.png" /> Outdoor<br />\
    <img src="styles/legend/Pargaslandscapevaluesbuffered100m_6_6.png" /> Silence<br />\
    <img src="styles/legend/Pargaslandscapevaluesbuffered100m_6_7.png" /> Social<br />\
    <img src="styles/legend/Pargaslandscapevaluesbuffered100m_6_8.png" /> Wilderness<br />' });
var format_Pargasdevelopmentpreferencesbuffered100m_7 = new ol.format.GeoJSON();
var features_Pargasdevelopmentpreferencesbuffered100m_7 = format_Pargasdevelopmentpreferencesbuffered100m_7.readFeatures(json_Pargasdevelopmentpreferencesbuffered100m_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pargasdevelopmentpreferencesbuffered100m_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pargasdevelopmentpreferencesbuffered100m_7.addFeatures(features_Pargasdevelopmentpreferencesbuffered100m_7);
var lyr_Pargasdevelopmentpreferencesbuffered100m_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pargasdevelopmentpreferencesbuffered100m_7, 
                style: style_Pargasdevelopmentpreferencesbuffered100m_7,
                popuplayertitle: 'Pargas development preferences (buffered 100m)',
                interactive: false,
    title: 'Pargas development preferences (buffered 100m)<br />\
    <img src="styles/legend/Pargasdevelopmentpreferencesbuffered100m_7_0.png" /> NoIndustrial<br />\
    <img src="styles/legend/Pargasdevelopmentpreferencesbuffered100m_7_1.png" /> NoLargTourism<br />\
    <img src="styles/legend/Pargasdevelopmentpreferencesbuffered100m_7_2.png" /> NoSettlements<br />\
    <img src="styles/legend/Pargasdevelopmentpreferencesbuffered100m_7_3.png" /> NoSmallTourism<br />\
    <img src="styles/legend/Pargasdevelopmentpreferencesbuffered100m_7_4.png" /> NoWind<br />\
    <img src="styles/legend/Pargasdevelopmentpreferencesbuffered100m_7_5.png" /> YesIndustrial<br />\
    <img src="styles/legend/Pargasdevelopmentpreferencesbuffered100m_7_6.png" /> YesLargTourism<br />\
    <img src="styles/legend/Pargasdevelopmentpreferencesbuffered100m_7_7.png" /> YesSettlements<br />\
    <img src="styles/legend/Pargasdevelopmentpreferencesbuffered100m_7_8.png" /> YesSmallTourism<br />\
    <img src="styles/legend/Pargasdevelopmentpreferencesbuffered100m_7_9.png" /> YesWind<br />' });
var format_Islandaccessibility_8 = new ol.format.GeoJSON();
var features_Islandaccessibility_8 = format_Islandaccessibility_8.readFeatures(json_Islandaccessibility_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Islandaccessibility_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Islandaccessibility_8.addFeatures(features_Islandaccessibility_8);
var lyr_Islandaccessibility_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Islandaccessibility_8, 
                style: style_Islandaccessibility_8,
                popuplayertitle: 'Island accessibility',
                interactive: false,
    title: 'Island accessibility<br />\
    <img src="styles/legend/Islandaccessibility_8_0.png" /> lossiyhteys<br />\
    <img src="styles/legend/Islandaccessibility_8_1.png" /> siltayhteys<br />\
    <img src="styles/legend/Islandaccessibility_8_2.png" /> yhteysalusliikenne<br />' });
var format_Ferryharbors_9 = new ol.format.GeoJSON();
var features_Ferryharbors_9 = format_Ferryharbors_9.readFeatures(json_Ferryharbors_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferryharbors_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferryharbors_9.addFeatures(features_Ferryharbors_9);
var lyr_Ferryharbors_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferryharbors_9, 
                style: style_Ferryharbors_9,
                popuplayertitle: 'Ferry harbors',
                interactive: false,
                title: '<img src="styles/legend/Ferryharbors_9.png" /> Ferry harbors'
            });
var format_Ferryroutes_10 = new ol.format.GeoJSON();
var features_Ferryroutes_10 = format_Ferryroutes_10.readFeatures(json_Ferryroutes_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferryroutes_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferryroutes_10.addFeatures(features_Ferryroutes_10);
var lyr_Ferryroutes_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferryroutes_10, 
                style: style_Ferryroutes_10,
                popuplayertitle: 'Ferry routes',
                interactive: false,
                title: '<img src="styles/legend/Ferryroutes_10.png" /> Ferry routes'
            });
var format_Landscapevaluehotspots_11 = new ol.format.GeoJSON();
var features_Landscapevaluehotspots_11 = format_Landscapevaluehotspots_11.readFeatures(json_Landscapevaluehotspots_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Landscapevaluehotspots_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Landscapevaluehotspots_11.addFeatures(features_Landscapevaluehotspots_11);
var lyr_Landscapevaluehotspots_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Landscapevaluehotspots_11, 
                style: style_Landscapevaluehotspots_11,
                popuplayertitle: 'Landscape value hotspots',
                interactive: false,
                title: '<img src="styles/legend/Landscapevaluehotspots_11.png" /> Landscape value hotspots'
            });
var format_Protectedareas_12 = new ol.format.GeoJSON();
var features_Protectedareas_12 = format_Protectedareas_12.readFeatures(json_Protectedareas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Protectedareas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Protectedareas_12.addFeatures(features_Protectedareas_12);
var lyr_Protectedareas_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Protectedareas_12, 
                style: style_Protectedareas_12,
                popuplayertitle: 'Protected areas',
                interactive: false,
                title: '<img src="styles/legend/Protectedareas_12.png" /> Protected areas'
            });
var format_Naturetrails_13 = new ol.format.GeoJSON();
var features_Naturetrails_13 = format_Naturetrails_13.readFeatures(json_Naturetrails_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Naturetrails_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Naturetrails_13.addFeatures(features_Naturetrails_13);
var lyr_Naturetrails_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Naturetrails_13, 
                style: style_Naturetrails_13,
                popuplayertitle: 'Nature trails',
                interactive: false,
                title: '<img src="styles/legend/Naturetrails_13.png" /> Nature trails'
            });
var format_Pargasroads_14 = new ol.format.GeoJSON();
var features_Pargasroads_14 = format_Pargasroads_14.readFeatures(json_Pargasroads_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pargasroads_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pargasroads_14.addFeatures(features_Pargasroads_14);
var lyr_Pargasroads_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pargasroads_14, 
                style: style_Pargasroads_14,
                popuplayertitle: 'Pargas roads',
                interactive: false,
                title: '<img src="styles/legend/Pargasroads_14.png" /> Pargas roads'
            });
var format_Ringroadbuffered50m_15 = new ol.format.GeoJSON();
var features_Ringroadbuffered50m_15 = format_Ringroadbuffered50m_15.readFeatures(json_Ringroadbuffered50m_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ringroadbuffered50m_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ringroadbuffered50m_15.addFeatures(features_Ringroadbuffered50m_15);
var lyr_Ringroadbuffered50m_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ringroadbuffered50m_15, 
                style: style_Ringroadbuffered50m_15,
                popuplayertitle: 'Ring road (buffered 50m)',
                interactive: false,
                title: '<img src="styles/legend/Ringroadbuffered50m_15.png" /> Ring road (buffered 50m)'
            });
var format_Ringroadintersections_16 = new ol.format.GeoJSON();
var features_Ringroadintersections_16 = format_Ringroadintersections_16.readFeatures(json_Ringroadintersections_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ringroadintersections_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ringroadintersections_16.addFeatures(features_Ringroadintersections_16);
var lyr_Ringroadintersections_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ringroadintersections_16, 
                style: style_Ringroadintersections_16,
                popuplayertitle: 'Ring road intersections',
                interactive: false,
                title: '<img src="styles/legend/Ringroadintersections_16.png" /> Ring road intersections'
            });
var format_Ringroadnetwork1km_17 = new ol.format.GeoJSON();
var features_Ringroadnetwork1km_17 = format_Ringroadnetwork1km_17.readFeatures(json_Ringroadnetwork1km_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ringroadnetwork1km_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ringroadnetwork1km_17.addFeatures(features_Ringroadnetwork1km_17);
var lyr_Ringroadnetwork1km_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ringroadnetwork1km_17, 
                style: style_Ringroadnetwork1km_17,
                popuplayertitle: 'Ring road network (1km)',
                interactive: false,
                title: '<img src="styles/legend/Ringroadnetwork1km_17.png" /> Ring road network (1km)'
            });
var format_Archipelagoringroad_18 = new ol.format.GeoJSON();
var features_Archipelagoringroad_18 = format_Archipelagoringroad_18.readFeatures(json_Archipelagoringroad_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Archipelagoringroad_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Archipelagoringroad_18.addFeatures(features_Archipelagoringroad_18);
var lyr_Archipelagoringroad_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Archipelagoringroad_18, 
                style: style_Archipelagoringroad_18,
                popuplayertitle: 'Archipelago ring road',
                interactive: false,
                title: '<img src="styles/legend/Archipelagoringroad_18.png" /> Archipelago ring road'
            });
var format_Servicenetworkarea_19 = new ol.format.GeoJSON();
var features_Servicenetworkarea_19 = format_Servicenetworkarea_19.readFeatures(json_Servicenetworkarea_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicenetworkarea_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicenetworkarea_19.addFeatures(features_Servicenetworkarea_19);
var lyr_Servicenetworkarea_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicenetworkarea_19, 
                style: style_Servicenetworkarea_19,
                popuplayertitle: 'Service network area',
                interactive: false,
                title: '<img src="styles/legend/Servicenetworkarea_19.png" /> Service network area'
            });
var format_Servicenetwork_20 = new ol.format.GeoJSON();
var features_Servicenetwork_20 = format_Servicenetwork_20.readFeatures(json_Servicenetwork_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicenetwork_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicenetwork_20.addFeatures(features_Servicenetwork_20);
var lyr_Servicenetwork_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Servicenetwork_20, 
                style: style_Servicenetwork_20,
                popuplayertitle: 'Service network',
                interactive: false,
                title: '<img src="styles/legend/Servicenetwork_20.png" /> Service network'
            });
var format_Tourismservicepoints_21 = new ol.format.GeoJSON();
var features_Tourismservicepoints_21 = format_Tourismservicepoints_21.readFeatures(json_Tourismservicepoints_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tourismservicepoints_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tourismservicepoints_21.addFeatures(features_Tourismservicepoints_21);
var lyr_Tourismservicepoints_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tourismservicepoints_21, 
                style: style_Tourismservicepoints_21,
                popuplayertitle: 'Tourism service points',
                interactive: false,
                title: '<img src="styles/legend/Tourismservicepoints_21.png" /> Tourism service points'
            });
var format_Foodpoints_22 = new ol.format.GeoJSON();
var features_Foodpoints_22 = format_Foodpoints_22.readFeatures(json_Foodpoints_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Foodpoints_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Foodpoints_22.addFeatures(features_Foodpoints_22);
var lyr_Foodpoints_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Foodpoints_22, 
                style: style_Foodpoints_22,
                popuplayertitle: 'Food points',
                interactive: false,
                title: '<img src="styles/legend/Foodpoints_22.png" /> Food points'
            });
var format_Accommodationpoints_23 = new ol.format.GeoJSON();
var features_Accommodationpoints_23 = format_Accommodationpoints_23.readFeatures(json_Accommodationpoints_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accommodationpoints_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Accommodationpoints_23.addFeatures(features_Accommodationpoints_23);
var lyr_Accommodationpoints_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Accommodationpoints_23, 
                style: style_Accommodationpoints_23,
                popuplayertitle: 'Accommodation points',
                interactive: false,
                title: '<img src="styles/legend/Accommodationpoints_23.png" /> Accommodation points'
            });
var format_Traditionallandscapes_24 = new ol.format.GeoJSON();
var features_Traditionallandscapes_24 = format_Traditionallandscapes_24.readFeatures(json_Traditionallandscapes_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Traditionallandscapes_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Traditionallandscapes_24.addFeatures(features_Traditionallandscapes_24);
var lyr_Traditionallandscapes_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Traditionallandscapes_24, 
                style: style_Traditionallandscapes_24,
                popuplayertitle: 'Traditional landscapes',
                interactive: true,
                title: '<img src="styles/legend/Traditionallandscapes_24.png" /> Traditional landscapes'
            });
var group_QGIS = new ol.layer.Group({
                                layers: [lyr_Islandaccessibility_8,lyr_Ferryharbors_9,lyr_Ferryroutes_10,lyr_Landscapevaluehotspots_11,lyr_Protectedareas_12,lyr_Naturetrails_13,lyr_Pargasroads_14,lyr_Ringroadbuffered50m_15,lyr_Ringroadintersections_16,lyr_Ringroadnetwork1km_17,lyr_Archipelagoringroad_18,lyr_Servicenetworkarea_19,lyr_Servicenetwork_20,lyr_Tourismservicepoints_21,lyr_Foodpoints_22,lyr_Accommodationpoints_23,lyr_Traditionallandscapes_24,],
                                fold: 'open',
                                title: 'QGIS'});
var group_Participatorypoints = new ol.layer.Group({
                                layers: [lyr_Pargaslandscapevaluesbuffered100m_6,lyr_Pargasdevelopmentpreferencesbuffered100m_7,],
                                fold: 'close',
                                title: 'Participatory points'});
var group_Zonation = new ol.layer.Group({
                                layers: [lyr_UneditedZonationrankmap_2,lyr_FilteredZonationrankmap_3,lyr_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4,lyr_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5,],
                                fold: 'open',
                                title: 'Zonation'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Pargasmunicipalityborders_1.setVisible(true);lyr_UneditedZonationrankmap_2.setVisible(false);lyr_FilteredZonationrankmap_3.setVisible(false);lyr_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4.setVisible(false);lyr_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5.setVisible(false);lyr_Pargaslandscapevaluesbuffered100m_6.setVisible(false);lyr_Pargasdevelopmentpreferencesbuffered100m_7.setVisible(false);lyr_Islandaccessibility_8.setVisible(false);lyr_Ferryharbors_9.setVisible(false);lyr_Ferryroutes_10.setVisible(false);lyr_Landscapevaluehotspots_11.setVisible(false);lyr_Protectedareas_12.setVisible(false);lyr_Naturetrails_13.setVisible(false);lyr_Pargasroads_14.setVisible(false);lyr_Ringroadbuffered50m_15.setVisible(false);lyr_Ringroadintersections_16.setVisible(false);lyr_Ringroadnetwork1km_17.setVisible(false);lyr_Archipelagoringroad_18.setVisible(false);lyr_Servicenetworkarea_19.setVisible(false);lyr_Servicenetwork_20.setVisible(false);lyr_Tourismservicepoints_21.setVisible(false);lyr_Foodpoints_22.setVisible(false);lyr_Accommodationpoints_23.setVisible(false);lyr_Traditionallandscapes_24.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Pargasmunicipalityborders_1,group_Zonation,group_Participatorypoints,group_QGIS];
lyr_Pargasmunicipalityborders_1.set('fieldAliases', {'GML_ID': 'GML_ID', 'NATCODE': 'NATCODE', 'NAMEFIN': 'NAMEFIN', 'NAMESWE': 'NAMESWE', 'LANDAREA': 'LANDAREA', 'FRESHWAREA': 'FRESHWAREA', 'SEAWAREA': 'SEAWAREA', 'TOTALAREA': 'TOTALAREA', });
lyr_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', 'Platform': 'Platform', 'Respondent': 'Respondent', 'Publicatio': 'Publicatio', 'Submitted': 'Submitted', 'first_acti': 'first_acti', 'Publicat_1': 'Publicat_1', 'Language': 'Language', 'Index': 'Index', 'Zoom': 'Zoom', 'geojson': 'geojson', 'geo_point': 'geo_point', });
lyr_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', 'Platform': 'Platform', 'Respondent': 'Respondent', 'Publicatio': 'Publicatio', 'Submitted': 'Submitted', 'first_acti': 'first_acti', 'Publicat_1': 'Publicat_1', 'Language': 'Language', 'Index': 'Index', 'Zoom': 'Zoom', 'geojson': 'geojson', 'geo_point': 'geo_point', });
lyr_Pargaslandscapevaluesbuffered100m_6.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', 'Platform': 'Platform', 'Respondent': 'Respondent', 'Publicatio': 'Publicatio', 'Submitted': 'Submitted', 'first_acti': 'first_acti', 'Publicat_1': 'Publicat_1', 'Language': 'Language', 'Index': 'Index', 'Zoom': 'Zoom', 'geojson': 'geojson', 'geo_point': 'geo_point', });
lyr_Pargasdevelopmentpreferencesbuffered100m_7.set('fieldAliases', {'fid': 'fid', 'Type': 'Type', 'Platform': 'Platform', 'Respondent': 'Respondent', 'Publicatio': 'Publicatio', 'Submitted': 'Submitted', 'first_acti': 'first_acti', 'Publicat_1': 'Publicat_1', 'Language': 'Language', 'Index': 'Index', 'Zoom': 'Zoom', 'geojson': 'geojson', 'geo_point': 'geo_point', });
lyr_Islandaccessibility_8.set('fieldAliases', {'KULKEMINEN': 'KULKEMINEN', 'SAARI': 'SAARI', 'POIKKEAMIN': 'POIKKEAMIN', 'YHTEYSALUS': 'YHTEYSALUS', 'LUOKKA': 'LUOKKA', 'LAUTAT': 'LAUTAT', });
lyr_Ferryharbors_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'name_uk': 'name_uk', 'name_sl': 'name_sl', 'name_pl': 'name_pl', 'name_lt': 'name_lt', 'name_io': 'name_io', 'name_eo': 'name_eo', 'name_de': 'name_de', 'name_ca': 'name_ca', 'name_ru': 'name_ru', 'name_fr': 'name_fr', 'phone': 'phone', 'lit': 'lit', 'bin': 'bin', 'descriptio': 'descriptio', 'start_date': 'start_date', 'cargo': 'cargo', 'toilets_wh': 'toilets_wh', 'wikidata': 'wikidata', 'railway': 'railway', 'ft_link': 'ft_link', 'addr_house': 'addr_house', 'wikimedia_': 'wikimedia_', 'mapillary': 'mapillary', 'website': 'website', 'man_made': 'man_made', 'addr_stree': 'addr_stree', 'network_wi': 'network_wi', 'network__1': 'network__1', 'surface': 'surface', 'shelter': 'shelter', 'bench': 'bench', 'ref': 'ref', 'network': 'network', 'addr_str_1': 'addr_str_1', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'wheelchair': 'wheelchair', 'public_tra': 'public_tra', 'operator': 'operator', 'name_sv': 'name_sv', 'name_fi': 'name_fi', 'name_en': 'name_en', 'name': 'name', 'ferry': 'ferry', 'amenity': 'amenity', });
lyr_Ferryroutes_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'route': 'route', 'vehicle': 'vehicle', 'trailer': 'trailer', 'seamark_ty': 'seamark_ty', 'seamark_fe': 'seamark_fe', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'name_ja': 'name_ja', 'intermitte': 'intermitte', 'waterway': 'waterway', 'cargo': 'cargo', 'was_websit': 'was_websit', 'motorcycle': 'motorcycle', 'hgv': 'hgv', 'ncn': 'ncn', 'horse': 'horse', 'int_ref': 'int_ref', 'vessel': 'vessel', 'access': 'access', 'type': 'type', 'tourism': 'tourism', 'source_top': 'source_top', 'class_bicy': 'class_bicy', 'name_ru': 'name_ru', 'name_en': 'name_en', 'interval': 'interval', 'maxweight': 'maxweight', 'alt_name': 'alt_name', 'descriptio': 'descriptio', 'name_sv': 'name_sv', 'name_fi': 'name_fi', 'area': 'area', 'motorcar': 'motorcar', 'seasonal': 'seasonal', 'roundtrip': 'roundtrip', 'reservatio': 'reservatio', 'ferry_cabl': 'ferry_cabl', 'from': 'from', 'phone': 'phone', 'opening_ho': 'opening_ho', 'fee': 'fee', 'network_wi': 'network_wi', 'network__1': 'network__1', 'network': 'network', 'website': 'website', 'toll': 'toll', 'to': 'to', 'ref': 'ref', 'operator': 'operator', 'name': 'name', 'motor_vehi': 'motor_vehi', 'foot': 'foot', 'ferry': 'ferry', 'duration': 'duration', 'bicycle': 'bicycle', });
lyr_Landscapevaluehotspots_11.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'AREA': 'AREA', 'trad_land': 'trad_land', 'serv_area': 'serv_area', 'services': 'services', });
lyr_Protectedareas_12.set('fieldAliases', {'id': 'id', });
lyr_Naturetrails_13.set('fieldAliases', {'fid': 'fid', 'class1_fi': 'class1_fi', 'class1_se': 'class1_se', 'class1_en': 'class1_en', 'class2_fi': 'class2_fi', 'class2_se': 'class2_se', 'class2_en': 'class2_en', 'name_fi': 'name_fi', 'name_se': 'name_se', 'name_en': 'name_en', 'municipali': 'municipali', 'subregion': 'subregion', 'region': 'region', 'info_fi': 'info_fi', 'info_se': 'info_se', 'info_en': 'info_en', 'chall_clas': 'chall_clas', 'length_m': 'length_m', 'accessibil': 'accessibil', 'www_fi': 'www_fi', 'www_se': 'www_se', 'www_en': 'www_en', 'email': 'email', 'datasource': 'datasource', 'picture': 'picture', 'www_pictur': 'www_pictur', 'telephone': 'telephone', 'upkeepclas': 'upkeepclas', 'shapeestim': 'shapeestim', 'sh_es_date': 'sh_es_date', 'sh_es_pers': 'sh_es_pers', 'timestamp': 'timestamp', 'updater_id': 'updater_id', 'special': 'special', 'munici_nro': 'munici_nro', 'subreg_nro': 'subreg_nro', 'region_nro': 'region_nro', 'publicinfo': 'publicinfo', 'hidden': 'hidden', 'length_km': 'length_km', 'upkeeper': 'upkeeper', 'upkeepinfo': 'upkeepinfo', });
lyr_Pargasroads_14.set('fieldAliases', {'id': 'id', });
lyr_Ringroadbuffered50m_15.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'website': 'website', 'roundtrip': 'roundtrip', 'distance': 'distance', 'type': 'type', 'route': 'route', 'ref': 'ref', 'network': 'network', 'name_sv': 'name_sv', 'name_fi': 'name_fi', 'name': 'name', 'descriptio': 'descriptio', 'descript_1': 'descript_1', 'descript_2': 'descript_2', 'start': 'start', });
lyr_Ringroadintersections_16.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'website': 'website', 'roundtrip': 'roundtrip', 'distance': 'distance', 'type': 'type', 'route': 'route', 'ref': 'ref', 'network': 'network', 'name_sv': 'name_sv', 'name_fi': 'name_fi', 'name': 'name', 'descriptio': 'descriptio', 'descript_1': 'descript_1', 'descript_2': 'descript_2', });
lyr_Ringroadnetwork1km_17.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'website': 'website', 'roundtrip': 'roundtrip', 'distance': 'distance', 'type': 'type', 'route': 'route', 'ref': 'ref', 'network': 'network', 'name_sv': 'name_sv', 'name_fi': 'name_fi', 'name': 'name', 'descriptio': 'descriptio', 'descript_1': 'descript_1', 'descript_2': 'descript_2', 'start': 'start', });
lyr_Archipelagoringroad_18.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'website': 'website', 'roundtrip': 'roundtrip', 'distance': 'distance', 'type': 'type', 'route': 'route', 'ref': 'ref', 'network': 'network', 'name_sv': 'name_sv', 'name_fi': 'name_fi', 'name': 'name', 'descriptio': 'descriptio', 'descript_1': 'descript_1', 'descript_2': 'descript_2', });
lyr_Servicenetworkarea_19.set('fieldAliases', {'id': 'id', 'area': 'area', 'perimeter': 'perimeter', });
lyr_Servicenetwork_20.set('fieldAliases', {'id': 'id', });
lyr_Tourismservicepoints_21.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'image': 'image', 'locked': 'locked', 'addr_unit': 'addr_unit', 'subject_wi': 'subject_wi', 'subject': 'subject', 'man_made': 'man_made', 'layer': 'layer', 'flag_wikid': 'flag_wikid', 'flag_type': 'flag_type', 'flag_name': 'flag_name', 'memorial': 'memorial', 'material': 'material', 'inscriptio': 'inscriptio', 'roof_direc': 'roof_direc', 'was_entran': 'was_entran', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'alt_name_f': 'alt_name_f', 'alt_name': 'alt_name', 'ele': 'ele', 'level': 'level', 'addr_place': 'addr_place', 'bollard': 'bollard', 'descriptio': 'descriptio', 'visibility': 'visibility', 'support': 'support', 'indoor': 'indoor', 'faces': 'faces', 'display': 'display', 'direction': 'direction', 'date': 'date', 'amenity': 'amenity', 'door': 'door', 'motor_vehi': 'motor_vehi', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'wheelchair': 'wheelchair', 'natural': 'natural', 'historic': 'historic', 'addr_count': 'addr_count', 'name_sv': 'name_sv', 'name_fi': 'name_fi', 'name_en': 'name_en', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'url': 'url', 'descript_1': 'descript_1', 'opening_ho': 'opening_ho', 'barrier': 'barrier', 'access': 'access', 'website': 'website', 'phone': 'phone', 'craft': 'craft', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', 'entrance': 'entrance', 'ref': 'ref', 'public_tra': 'public_tra', 'operator': 'operator', 'network': 'network', 'name': 'name', 'ferry': 'ferry', 'traffic_si': 'traffic_si', 'traffic__1': 'traffic__1', 'highway': 'highway', 'crossing_m': 'crossing_m', 'crossing_i': 'crossing_i', 'crossing': 'crossing', 'button_ope': 'button_ope', 'board_titl': 'board_titl', 'start_date': 'start_date', 'operator_w': 'operator_w', 'operator_t': 'operator_t', 'hiking': 'hiking', 'departures': 'departures', 'guidepost': 'guidepost', 'lit': 'lit', 'destinatio': 'destinatio', 'name_ru': 'name_ru', 'brand': 'brand', 'noname': 'noname', 'source_nam': 'source_nam', 'shop': 'shop', 'map_type': 'map_type', 'map_size': 'map_size', 'check_date': 'check_date', 'board_type': 'board_type', 'internet_a': 'internet_a', 'internet_1': 'internet_1', 'informatio': 'informatio', 'email': 'email', 'backrest': 'backrest', 'leisure': 'leisure', 'bench': 'bench', 'fireplace': 'fireplace', 'covered': 'covered', 'tower_cons': 'tower_cons', 'tower_type': 'tower_type', 'fee': 'fee', 'elevator': 'elevator', 'was_tower_': 'was_tower_', 'was_name': 'was_name', 'removed_ma': 'removed_ma', 'path': 'path', });
lyr_Foodpoints_22.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'drink': 'drink', 'seasonal': 'seasonal', 'facebook': 'facebook', 'descriptio': 'descriptio', 'toilets_wh': 'toilets_wh', 'toilets_ac': 'toilets_ac', 'payment_el': 'payment_el', 'payment_de': 'payment_de', 'payment_cr': 'payment_cr', 'payment__1': 'payment__1', 'payment_co': 'payment_co', 'payment_ca': 'payment_ca', 'kids_area': 'kids_area', 'internet_a': 'internet_a', 'internet_1': 'internet_1', 'highchair': 'highchair', 'changing_t': 'changing_t', 'changing_1': 'changing_1', 'brand': 'brand', 'contact_ti': 'contact_ti', 'contact_in': 'contact_in', 'contact_em': 'contact_em', 'karaoke': 'karaoke', 'alt_name': 'alt_name', 'diet_veget': 'diet_veget', 'diet_vegan': 'diet_vegan', 'sport': 'sport', 'url': 'url', 'min_age': 'min_age', 'diet_koshe': 'diet_koshe', 'diet_halal': 'diet_halal', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'source_nam': 'source_nam', 'addr_unit': 'addr_unit', 'microbrewe': 'microbrewe', 'fax': 'fax', 'email': 'email', 'contact_we': 'contact_we', 'contact_ph': 'contact_ph', 'descript_1': 'descript_1', 'restaurant': 'restaurant', 'loc_name': 'loc_name', 'food': 'food', 'contact_fa': 'contact_fa', 'brewery': 'brewery', 'toilets': 'toilets', 'level': 'level', 'website': 'website', 'check_date': 'check_date', 'operator': 'operator', 'phone': 'phone', 'wheelchair': 'wheelchair', 'smoking': 'smoking', 'outdoor_se': 'outdoor_se', 'opening_ho': 'opening_ho', 'name': 'name', 'indoor_sea': 'indoor_sea', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'addr_count': 'addr_count', 'addr_city': 'addr_city', 'website_me': 'website_me', 'reservatio': 'reservatio', 'image': 'image', 'door': 'door', 'diet_lacto': 'diet_lacto', 'diet_dairy': 'diet_dairy', 'diet_glute': 'diet_glute', 'vending': 'vending', 'branch': 'branch', 'pets_allow': 'pets_allow', 'addr_place': 'addr_place', 'opening_da': 'opening_da', 'noname': 'noname', 'payment_ed': 'payment_ed', 'entrance': 'entrance', 'lunch': 'lunch', 'brand_wiki': 'brand_wiki', 'addr_floor': 'addr_floor', 'name_en': 'name_en', 'brand_wi_1': 'brand_wi_1', 'delivery': 'delivery', 'lunch_buff': 'lunch_buff', 'cabins': 'cabins', 'bar': 'bar', 'air_condit': 'air_condit', 'shop': 'shop', 'ref': 'ref', 'piste_amen': 'piste_amen', 'name_fi': 'name_fi', 'old_name': 'old_name', 'start_date': 'start_date', 'payment_vi': 'payment_vi', 'payment_ma': 'payment_ma', 'takeaway': 'takeaway', 'opening__1': 'opening__1', 'delivery_c': 'delivery_c', 'key': 'key', 'provides': 'provides', 'name_sv': 'name_sv', 'interactio': 'interactio', 'identity': 'identity', 'takeaway_c': 'takeaway_c', 'cuisine': 'cuisine', 'postal_cod': 'postal_cod', 'opening__2': 'opening__2', 'fast_food': 'fast_food', 'level_ref': 'level_ref', 'drive_thro': 'drive_thro', 'delivery_p': 'delivery_p', 'access': 'access', 'contact_yo': 'contact_yo', 'contact_tw': 'contact_tw', 'contact_li': 'contact_li', 'diet_kaikk': 'diet_kaikk', 'diet_meat': 'diet_meat', 'date': 'date', 'access_cov': 'access_cov', 'payment_mo': 'payment_mo', 'internet_2': 'internet_2', 'internet_3': 'internet_3', 'internet_4': 'internet_4', 'capacity': 'capacity', 'check_da_1': 'check_da_1', 'opening__3': 'opening__3', 'drive_th_1': 'drive_th_1', 'contact_un': 'contact_un', 'oluthana': 'oluthana', 'phone_mobi': 'phone_mobi', 'long_name': 'long_name', 'wheelcha_1': 'wheelcha_1', 'mobile': 'mobile', 'lunch_menu': 'lunch_menu', 'layer': 'layer', 'building_l': 'building_l', 'building': 'building', 'official_n': 'official_n', 'short_name': 'short_name', 'service_el': 'service_el', 'dog': 'dog', 'seats': 'seats', 'cafe': 'cafe', 'diet_healt': 'diet_healt', 'leisure': 'leisure', 'tourism': 'tourism', 'diet_pesce': 'diet_pesce', 'self_servi': 'self_servi', 'operator2': 'operator2', 'survey_dat': 'survey_dat', 'payment_on': 'payment_on', 'payment_li': 'payment_li', 'currency_X': 'currency_X', 'website_en': 'website_en', 'diet_non-v': 'diet_non-v', 'discount_s': 'discount_s', 'ref_vatin': 'ref_vatin', 'craft': 'craft', 'name_zh': 'name_zh', 'payment_qr': 'payment_qr', 'organic': 'organic', 'diet_sugar': 'diet_sugar', 'diet_lac_1': 'diet_lac_1', 'payment__2': 'payment__2', 'addr_hou_1': 'addr_hou_1', 'board_titl': 'board_titl', 'operator_w': 'operator_w', 'operator_t': 'operator_t', 'foot': 'foot', 'hiking': 'hiking', 'material': 'material', 'traffic_si': 'traffic_si', 'departures': 'departures', 'guidepost': 'guidepost', 'lit': 'lit', 'destinatio': 'destinatio', 'name_ru': 'name_ru', 'bicycle': 'bicycle', 'direction': 'direction', 'map_type': 'map_type', 'map_size': 'map_size', 'board_type': 'board_type', 'informatio': 'informatio', 'type': 'type', 'path': 'path', });
lyr_Accommodationpoints_23.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'contact_ph': 'contact_ph', 'contact_in': 'contact_in', 'contact_fa': 'contact_fa', 'contact_em': 'contact_em', 'name_en': 'name_en', 'descriptio': 'descriptio', 'descript_1': 'descript_1', 'shop': 'shop', 'access': 'access', 'camp_site': 'camp_site', 'name_sv': 'name_sv', 'name_ru': 'name_ru', 'name_fi': 'name_fi', 'backcountr': 'backcountr', 'email': 'email', 'capacity_p': 'capacity_p', 'addr_city': 'addr_city', 'website': 'website', 'toilets': 'toilets', 'shower': 'shower', 'phone': 'phone', 'internet_a': 'internet_a', 'drinking_w': 'drinking_w', 'addr_postc': 'addr_postc', 'tents': 'tents', 'power_supp': 'power_supp', 'operator': 'operator', 'name': 'name', 'fee': 'fee', 'caravans': 'caravans', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', 'reservatio': 'reservatio', 'sanitary_d': 'sanitary_d', 'wilderness': 'wilderness', 'smoking': 'smoking', 'descript_2': 'descript_2', 'addr_place': 'addr_place', 'addr_unit': 'addr_unit', 'entrance': 'entrance', 'wheelchair': 'wheelchair', 'rooms': 'rooms', 'payment_de': 'payment_de', 'guest_hous': 'guest_hous', 'opening_ho': 'opening_ho', 'diet_veget': 'diet_veget', 'diet_vegan': 'diet_vegan', 'amenity': 'amenity', 'ref': 'ref', 'payment_cr': 'payment_cr', 'internet_1': 'internet_1', 'check_date': 'check_date', 'air_condit': 'air_condit', 'addr_count': 'addr_count', 'key': 'key', 'operator_t': 'operator_t', 'contact_li': 'contact_li', 'branch': 'branch', 'barrier': 'barrier', 'image': 'image', 'wikidata': 'wikidata', 'short_name': 'short_name', 'old_operat': 'old_operat', 'old_name_f': 'old_name_f', 'old_brand': 'old_brand', 'level': 'level', 'brand_wiki': 'brand_wiki', 'source_nam': 'source_nam', 'outdoor_se': 'outdoor_se', 'indoor_sea': 'indoor_sea', 'url': 'url', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'layer': 'layer', 'path': 'path', });
lyr_Traditionallandscapes_24.set('fieldAliases', {'ATRIBUUT_1': 'ATRIBUUT_1', 'GEOMETRIA1': 'GEOMETRIA1', 'ARVOLUOKKA': 'ARVOLUOKKA', 'MUOD_ORGAN': 'MUOD_ORGAN', 'KOHDETUNNU': 'KOHDETUNNU', 'PEM_KOODI': 'PEM_KOODI', 'PB_INV_NIM': 'PB_INV_NIM', 'ATRIBUUT_2': 'ATRIBUUT_2', 'GEOMETRI_1': 'GEOMETRI_1', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'TRAIL': 'TRAIL', 'ACCESS': 'ACCESS', 'HOTSPOT': 'HOTSPOT', 'ACCOMO': 'ACCOMO', 'FOOD': 'FOOD', 'TOURISM': 'TOURISM', 'RING_ROAD': 'RING_ROAD', 'VALUE_SUM': 'VALUE_SUM', 'VALUE_TOUR': 'VALUE_TOUR', 'DEV_PREF': 'DEV_PREF', 'NoLargeTou': 'NoLargeTou', 'YesSmallTo': 'YesSmallTo', 'NoSmallTou': 'NoSmallTou', 'YesLargTou': 'YesLargTou', 'NoIndustri': 'NoIndustri', 'YesIndustr': 'YesIndustr', 'YesWind': 'YesWind', 'NoWind': 'NoWind', 'YesSettlem': 'YesSettlem', 'NoSettleme': 'NoSettleme', 'SERV_AREA': 'SERV_AREA', 'PROTECTED': 'PROTECTED', });
lyr_Pargasmunicipalityborders_1.set('fieldImages', {'GML_ID': '', 'NATCODE': '', 'NAMEFIN': '', 'NAMESWE': '', 'LANDAREA': '', 'FRESHWAREA': '', 'SEAWAREA': '', 'TOTALAREA': '', });
lyr_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4.set('fieldImages', {'fid': '', 'Type': '', 'Platform': '', 'Respondent': '', 'Publicatio': '', 'Submitted': '', 'first_acti': '', 'Publicat_1': '', 'Language': '', 'Index': '', 'Zoom': '', 'geojson': '', 'geo_point': '', });
lyr_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5.set('fieldImages', {'fid': '', 'Type': '', 'Platform': '', 'Respondent': '', 'Publicatio': '', 'Submitted': '', 'first_acti': '', 'Publicat_1': '', 'Language': '', 'Index': '', 'Zoom': '', 'geojson': '', 'geo_point': '', });
lyr_Pargaslandscapevaluesbuffered100m_6.set('fieldImages', {'fid': 'Range', 'Type': 'TextEdit', 'Platform': 'TextEdit', 'Respondent': 'TextEdit', 'Publicatio': 'TextEdit', 'Submitted': 'TextEdit', 'first_acti': 'TextEdit', 'Publicat_1': 'TextEdit', 'Language': 'TextEdit', 'Index': 'TextEdit', 'Zoom': 'TextEdit', 'geojson': 'TextEdit', 'geo_point': 'TextEdit', });
lyr_Pargasdevelopmentpreferencesbuffered100m_7.set('fieldImages', {'fid': 'Range', 'Type': 'TextEdit', 'Platform': 'TextEdit', 'Respondent': 'TextEdit', 'Publicatio': 'TextEdit', 'Submitted': 'TextEdit', 'first_acti': 'TextEdit', 'Publicat_1': 'TextEdit', 'Language': 'TextEdit', 'Index': 'TextEdit', 'Zoom': 'TextEdit', 'geojson': 'TextEdit', 'geo_point': 'TextEdit', });
lyr_Islandaccessibility_8.set('fieldImages', {'KULKEMINEN': 'TextEdit', 'SAARI': 'TextEdit', 'POIKKEAMIN': 'TextEdit', 'YHTEYSALUS': 'TextEdit', 'LUOKKA': 'TextEdit', 'LAUTAT': 'TextEdit', });
lyr_Ferryharbors_9.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'name_uk': '', 'name_sl': '', 'name_pl': '', 'name_lt': '', 'name_io': '', 'name_eo': '', 'name_de': '', 'name_ca': '', 'name_ru': '', 'name_fr': '', 'phone': '', 'lit': '', 'bin': '', 'descriptio': '', 'start_date': '', 'cargo': '', 'toilets_wh': '', 'wikidata': '', 'railway': '', 'ft_link': '', 'addr_house': '', 'wikimedia_': '', 'mapillary': '', 'website': '', 'man_made': '', 'addr_stree': '', 'network_wi': '', 'network__1': '', 'surface': '', 'shelter': '', 'bench': '', 'ref': '', 'network': '', 'addr_str_1': '', 'addr_postc': '', 'addr_city': '', 'wheelchair': '', 'public_tra': '', 'operator': '', 'name_sv': '', 'name_fi': '', 'name_en': '', 'name': '', 'ferry': '', 'amenity': '', });
lyr_Ferryroutes_10.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'route': '', 'vehicle': '', 'trailer': '', 'seamark_ty': '', 'seamark_fe': '', 'wikipedia': '', 'wikidata': '', 'name_ja': '', 'intermitte': '', 'waterway': '', 'cargo': '', 'was_websit': '', 'motorcycle': '', 'hgv': '', 'ncn': '', 'horse': '', 'int_ref': '', 'vessel': '', 'access': '', 'type': '', 'tourism': '', 'source_top': '', 'class_bicy': '', 'name_ru': '', 'name_en': '', 'interval': '', 'maxweight': '', 'alt_name': '', 'descriptio': '', 'name_sv': '', 'name_fi': '', 'area': '', 'motorcar': '', 'seasonal': '', 'roundtrip': '', 'reservatio': '', 'ferry_cabl': '', 'from': '', 'phone': '', 'opening_ho': '', 'fee': '', 'network_wi': '', 'network__1': '', 'network': '', 'website': '', 'toll': '', 'to': '', 'ref': '', 'operator': '', 'name': '', 'motor_vehi': '', 'foot': '', 'ferry': '', 'duration': '', 'bicycle': '', });
lyr_Landscapevaluehotspots_11.set('fieldImages', {'fid': '', 'DN': '', 'AREA': '', 'trad_land': '', 'serv_area': '', 'services': '', });
lyr_Protectedareas_12.set('fieldImages', {'id': '', });
lyr_Naturetrails_13.set('fieldImages', {'fid': '', 'class1_fi': '', 'class1_se': '', 'class1_en': '', 'class2_fi': '', 'class2_se': '', 'class2_en': '', 'name_fi': '', 'name_se': '', 'name_en': '', 'municipali': '', 'subregion': '', 'region': '', 'info_fi': '', 'info_se': '', 'info_en': '', 'chall_clas': '', 'length_m': '', 'accessibil': '', 'www_fi': '', 'www_se': '', 'www_en': '', 'email': '', 'datasource': '', 'picture': '', 'www_pictur': '', 'telephone': '', 'upkeepclas': '', 'shapeestim': '', 'sh_es_date': '', 'sh_es_pers': '', 'timestamp': '', 'updater_id': '', 'special': '', 'munici_nro': '', 'subreg_nro': '', 'region_nro': '', 'publicinfo': '', 'hidden': '', 'length_km': '', 'upkeeper': '', 'upkeepinfo': '', });
lyr_Pargasroads_14.set('fieldImages', {'id': '', });
lyr_Ringroadbuffered50m_15.set('fieldImages', {'id': '', 'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'tourism': '', 'website': '', 'roundtrip': '', 'distance': '', 'type': '', 'route': '', 'ref': '', 'network': '', 'name_sv': '', 'name_fi': '', 'name': '', 'descriptio': '', 'descript_1': '', 'descript_2': '', 'start': '', });
lyr_Ringroadintersections_16.set('fieldImages', {'id': '', 'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'tourism': '', 'website': '', 'roundtrip': '', 'distance': '', 'type': '', 'route': '', 'ref': '', 'network': '', 'name_sv': '', 'name_fi': '', 'name': '', 'descriptio': '', 'descript_1': '', 'descript_2': '', });
lyr_Ringroadnetwork1km_17.set('fieldImages', {'id': '', 'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'tourism': '', 'website': '', 'roundtrip': '', 'distance': '', 'type': '', 'route': '', 'ref': '', 'network': '', 'name_sv': '', 'name_fi': '', 'name': '', 'descriptio': '', 'descript_1': '', 'descript_2': '', 'start': '', });
lyr_Archipelagoringroad_18.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'tourism': '', 'website': '', 'roundtrip': '', 'distance': '', 'type': '', 'route': '', 'ref': '', 'network': '', 'name_sv': '', 'name_fi': '', 'name': '', 'descriptio': '', 'descript_1': '', 'descript_2': '', });
lyr_Servicenetworkarea_19.set('fieldImages', {'id': '', 'area': '', 'perimeter': '', });
lyr_Servicenetwork_20.set('fieldImages', {'id': '', });
lyr_Tourismservicepoints_21.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'tourism': '', 'image': '', 'locked': '', 'addr_unit': '', 'subject_wi': '', 'subject': '', 'man_made': '', 'layer': '', 'flag_wikid': '', 'flag_type': '', 'flag_name': '', 'memorial': '', 'material': '', 'inscriptio': '', 'roof_direc': '', 'was_entran': '', 'wikipedia': '', 'wikidata': '', 'alt_name_f': '', 'alt_name': '', 'ele': '', 'level': '', 'addr_place': '', 'bollard': '', 'descriptio': '', 'visibility': '', 'support': '', 'indoor': '', 'faces': '', 'display': '', 'direction': '', 'date': '', 'amenity': '', 'door': '', 'motor_vehi': '', 'horse': '', 'foot': '', 'bicycle': '', 'wheelchair': '', 'natural': '', 'historic': '', 'addr_count': '', 'name_sv': '', 'name_fi': '', 'name_en': '', 'addr_postc': '', 'addr_city': '', 'url': '', 'descript_1': '', 'opening_ho': '', 'barrier': '', 'access': '', 'website': '', 'phone': '', 'craft': '', 'addr_stree': '', 'addr_house': '', 'entrance': '', 'ref': '', 'public_tra': '', 'operator': '', 'network': '', 'name': '', 'ferry': '', 'traffic_si': '', 'traffic__1': '', 'highway': '', 'crossing_m': '', 'crossing_i': '', 'crossing': '', 'button_ope': '', 'board_titl': '', 'start_date': '', 'operator_w': '', 'operator_t': '', 'hiking': '', 'departures': '', 'guidepost': '', 'lit': '', 'destinatio': '', 'name_ru': '', 'brand': '', 'noname': '', 'source_nam': '', 'shop': '', 'map_type': '', 'map_size': '', 'check_date': '', 'board_type': '', 'internet_a': '', 'internet_1': '', 'informatio': '', 'email': '', 'backrest': '', 'leisure': '', 'bench': '', 'fireplace': '', 'covered': '', 'tower_cons': '', 'tower_type': '', 'fee': '', 'elevator': '', 'was_tower_': '', 'was_name': '', 'removed_ma': '', 'path': '', });
lyr_Foodpoints_22.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'drink': '', 'seasonal': '', 'facebook': '', 'descriptio': '', 'toilets_wh': '', 'toilets_ac': '', 'payment_el': '', 'payment_de': '', 'payment_cr': '', 'payment__1': '', 'payment_co': '', 'payment_ca': '', 'kids_area': '', 'internet_a': '', 'internet_1': '', 'highchair': '', 'changing_t': '', 'changing_1': '', 'brand': '', 'contact_ti': '', 'contact_in': '', 'contact_em': '', 'karaoke': '', 'alt_name': '', 'diet_veget': '', 'diet_vegan': '', 'sport': '', 'url': '', 'min_age': '', 'diet_koshe': '', 'diet_halal': '', 'wikipedia': '', 'wikidata': '', 'source_nam': '', 'addr_unit': '', 'microbrewe': '', 'fax': '', 'email': '', 'contact_we': '', 'contact_ph': '', 'descript_1': '', 'restaurant': '', 'loc_name': '', 'food': '', 'contact_fa': '', 'brewery': '', 'toilets': '', 'level': '', 'website': '', 'check_date': '', 'operator': '', 'phone': '', 'wheelchair': '', 'smoking': '', 'outdoor_se': '', 'opening_ho': '', 'name': '', 'indoor_sea': '', 'addr_stree': '', 'addr_postc': '', 'addr_house': '', 'addr_count': '', 'addr_city': '', 'website_me': '', 'reservatio': '', 'image': '', 'door': '', 'diet_lacto': '', 'diet_dairy': '', 'diet_glute': '', 'vending': '', 'branch': '', 'pets_allow': '', 'addr_place': '', 'opening_da': '', 'noname': '', 'payment_ed': '', 'entrance': '', 'lunch': '', 'brand_wiki': '', 'addr_floor': '', 'name_en': '', 'brand_wi_1': '', 'delivery': '', 'lunch_buff': '', 'cabins': '', 'bar': '', 'air_condit': '', 'shop': '', 'ref': '', 'piste_amen': '', 'name_fi': '', 'old_name': '', 'start_date': '', 'payment_vi': '', 'payment_ma': '', 'takeaway': '', 'opening__1': '', 'delivery_c': '', 'key': '', 'provides': '', 'name_sv': '', 'interactio': '', 'identity': '', 'takeaway_c': '', 'cuisine': '', 'postal_cod': '', 'opening__2': '', 'fast_food': '', 'level_ref': '', 'drive_thro': '', 'delivery_p': '', 'access': '', 'contact_yo': '', 'contact_tw': '', 'contact_li': '', 'diet_kaikk': '', 'diet_meat': '', 'date': '', 'access_cov': '', 'payment_mo': '', 'internet_2': '', 'internet_3': '', 'internet_4': '', 'capacity': '', 'check_da_1': '', 'opening__3': '', 'drive_th_1': '', 'contact_un': '', 'oluthana': '', 'phone_mobi': '', 'long_name': '', 'wheelcha_1': '', 'mobile': '', 'lunch_menu': '', 'layer': '', 'building_l': '', 'building': '', 'official_n': '', 'short_name': '', 'service_el': '', 'dog': '', 'seats': '', 'cafe': '', 'diet_healt': '', 'leisure': '', 'tourism': '', 'diet_pesce': '', 'self_servi': '', 'operator2': '', 'survey_dat': '', 'payment_on': '', 'payment_li': '', 'currency_X': '', 'website_en': '', 'diet_non-v': '', 'discount_s': '', 'ref_vatin': '', 'craft': '', 'name_zh': '', 'payment_qr': '', 'organic': '', 'diet_sugar': '', 'diet_lac_1': '', 'payment__2': '', 'addr_hou_1': '', 'board_titl': '', 'operator_w': '', 'operator_t': '', 'foot': '', 'hiking': '', 'material': '', 'traffic_si': '', 'departures': '', 'guidepost': '', 'lit': '', 'destinatio': '', 'name_ru': '', 'bicycle': '', 'direction': '', 'map_type': '', 'map_size': '', 'board_type': '', 'informatio': '', 'type': '', 'path': '', });
lyr_Accommodationpoints_23.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'tourism': '', 'contact_ph': '', 'contact_in': '', 'contact_fa': '', 'contact_em': '', 'name_en': '', 'descriptio': '', 'descript_1': '', 'shop': '', 'access': '', 'camp_site': '', 'name_sv': '', 'name_ru': '', 'name_fi': '', 'backcountr': '', 'email': '', 'capacity_p': '', 'addr_city': '', 'website': '', 'toilets': '', 'shower': '', 'phone': '', 'internet_a': '', 'drinking_w': '', 'addr_postc': '', 'tents': '', 'power_supp': '', 'operator': '', 'name': '', 'fee': '', 'caravans': '', 'addr_stree': '', 'addr_house': '', 'reservatio': '', 'sanitary_d': '', 'wilderness': '', 'smoking': '', 'descript_2': '', 'addr_place': '', 'addr_unit': '', 'entrance': '', 'wheelchair': '', 'rooms': '', 'payment_de': '', 'guest_hous': '', 'opening_ho': '', 'diet_veget': '', 'diet_vegan': '', 'amenity': '', 'ref': '', 'payment_cr': '', 'internet_1': '', 'check_date': '', 'air_condit': '', 'addr_count': '', 'key': '', 'operator_t': '', 'contact_li': '', 'branch': '', 'barrier': '', 'image': '', 'wikidata': '', 'short_name': '', 'old_operat': '', 'old_name_f': '', 'old_brand': '', 'level': '', 'brand_wiki': '', 'source_nam': '', 'outdoor_se': '', 'indoor_sea': '', 'url': '', 'brand_wi_1': '', 'brand': '', 'layer': '', 'path': '', });
lyr_Traditionallandscapes_24.set('fieldImages', {'ATRIBUUT_1': 'DateTime', 'GEOMETRIA1': 'DateTime', 'ARVOLUOKKA': 'Range', 'MUOD_ORGAN': 'TextEdit', 'KOHDETUNNU': 'TextEdit', 'PEM_KOODI': 'TextEdit', 'PB_INV_NIM': 'TextEdit', 'ATRIBUUT_2': 'TextEdit', 'GEOMETRI_1': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'TRAIL': 'TextEdit', 'ACCESS': 'TextEdit', 'HOTSPOT': 'TextEdit', 'ACCOMO': 'TextEdit', 'FOOD': 'TextEdit', 'TOURISM': 'TextEdit', 'RING_ROAD': 'TextEdit', 'VALUE_SUM': 'TextEdit', 'VALUE_TOUR': 'TextEdit', 'DEV_PREF': 'Range', 'NoLargeTou': '', 'YesSmallTo': '', 'NoSmallTou': '', 'YesLargTou': '', 'NoIndustri': '', 'YesIndustr': '', 'YesWind': '', 'NoWind': '', 'YesSettlem': '', 'NoSettleme': '', 'SERV_AREA': '', 'PROTECTED': '', });
lyr_Pargasmunicipalityborders_1.set('fieldLabels', {'GML_ID': 'no label', 'NATCODE': 'no label', 'NAMEFIN': 'no label', 'NAMESWE': 'no label', 'LANDAREA': 'no label', 'FRESHWAREA': 'no label', 'SEAWAREA': 'no label', 'TOTALAREA': 'no label', });
lyr_200mOverlappingtourismdevelopmentbuffersYeslargetourismNolargetourism_4.set('fieldLabels', {'fid': 'no label', 'Type': 'no label', 'Platform': 'no label', 'Respondent': 'no label', 'Publicatio': 'no label', 'Submitted': 'no label', 'first_acti': 'no label', 'Publicat_1': 'no label', 'Language': 'no label', 'Index': 'no label', 'Zoom': 'no label', 'geojson': 'no label', 'geo_point': 'no label', });
lyr_200mOverlappingtourismdevelopmentbuffersNolargetourismYeslargetourism_5.set('fieldLabels', {'fid': 'no label', 'Type': 'no label', 'Platform': 'no label', 'Respondent': 'no label', 'Publicatio': 'no label', 'Submitted': 'no label', 'first_acti': 'no label', 'Publicat_1': 'no label', 'Language': 'no label', 'Index': 'no label', 'Zoom': 'no label', 'geojson': 'no label', 'geo_point': 'no label', });
lyr_Pargaslandscapevaluesbuffered100m_6.set('fieldLabels', {'fid': 'no label', 'Type': 'no label', 'Platform': 'no label', 'Respondent': 'no label', 'Publicatio': 'no label', 'Submitted': 'no label', 'first_acti': 'no label', 'Publicat_1': 'no label', 'Language': 'no label', 'Index': 'no label', 'Zoom': 'no label', 'geojson': 'no label', 'geo_point': 'no label', });
lyr_Pargasdevelopmentpreferencesbuffered100m_7.set('fieldLabels', {'fid': 'no label', 'Type': 'no label', 'Platform': 'no label', 'Respondent': 'no label', 'Publicatio': 'no label', 'Submitted': 'no label', 'first_acti': 'no label', 'Publicat_1': 'no label', 'Language': 'no label', 'Index': 'no label', 'Zoom': 'no label', 'geojson': 'no label', 'geo_point': 'no label', });
lyr_Islandaccessibility_8.set('fieldLabels', {'KULKEMINEN': 'no label', 'SAARI': 'no label', 'POIKKEAMIN': 'no label', 'YHTEYSALUS': 'no label', 'LUOKKA': 'no label', 'LAUTAT': 'no label', });
lyr_Ferryharbors_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'name_uk': 'no label', 'name_sl': 'no label', 'name_pl': 'no label', 'name_lt': 'no label', 'name_io': 'no label', 'name_eo': 'no label', 'name_de': 'no label', 'name_ca': 'no label', 'name_ru': 'no label', 'name_fr': 'no label', 'phone': 'no label', 'lit': 'no label', 'bin': 'no label', 'descriptio': 'no label', 'start_date': 'no label', 'cargo': 'no label', 'toilets_wh': 'no label', 'wikidata': 'no label', 'railway': 'no label', 'ft_link': 'no label', 'addr_house': 'no label', 'wikimedia_': 'no label', 'mapillary': 'no label', 'website': 'no label', 'man_made': 'no label', 'addr_stree': 'no label', 'network_wi': 'no label', 'network__1': 'no label', 'surface': 'no label', 'shelter': 'no label', 'bench': 'no label', 'ref': 'no label', 'network': 'no label', 'addr_str_1': 'no label', 'addr_postc': 'no label', 'addr_city': 'no label', 'wheelchair': 'no label', 'public_tra': 'no label', 'operator': 'no label', 'name_sv': 'no label', 'name_fi': 'no label', 'name_en': 'no label', 'name': 'no label', 'ferry': 'no label', 'amenity': 'no label', });
lyr_Ferryroutes_10.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'route': 'no label', 'vehicle': 'no label', 'trailer': 'no label', 'seamark_ty': 'no label', 'seamark_fe': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'name_ja': 'no label', 'intermitte': 'no label', 'waterway': 'no label', 'cargo': 'no label', 'was_websit': 'no label', 'motorcycle': 'no label', 'hgv': 'no label', 'ncn': 'no label', 'horse': 'no label', 'int_ref': 'no label', 'vessel': 'no label', 'access': 'no label', 'type': 'no label', 'tourism': 'no label', 'source_top': 'no label', 'class_bicy': 'no label', 'name_ru': 'no label', 'name_en': 'no label', 'interval': 'no label', 'maxweight': 'no label', 'alt_name': 'no label', 'descriptio': 'no label', 'name_sv': 'no label', 'name_fi': 'no label', 'area': 'no label', 'motorcar': 'no label', 'seasonal': 'no label', 'roundtrip': 'no label', 'reservatio': 'no label', 'ferry_cabl': 'no label', 'from': 'no label', 'phone': 'no label', 'opening_ho': 'no label', 'fee': 'no label', 'network_wi': 'no label', 'network__1': 'no label', 'network': 'no label', 'website': 'no label', 'toll': 'no label', 'to': 'no label', 'ref': 'no label', 'operator': 'no label', 'name': 'no label', 'motor_vehi': 'no label', 'foot': 'no label', 'ferry': 'no label', 'duration': 'no label', 'bicycle': 'no label', });
lyr_Landscapevaluehotspots_11.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'AREA': 'no label', 'trad_land': 'no label', 'serv_area': 'no label', 'services': 'no label', });
lyr_Protectedareas_12.set('fieldLabels', {'id': 'no label', });
lyr_Naturetrails_13.set('fieldLabels', {'fid': 'no label', 'class1_fi': 'no label', 'class1_se': 'no label', 'class1_en': 'no label', 'class2_fi': 'no label', 'class2_se': 'no label', 'class2_en': 'no label', 'name_fi': 'no label', 'name_se': 'no label', 'name_en': 'no label', 'municipali': 'no label', 'subregion': 'no label', 'region': 'no label', 'info_fi': 'no label', 'info_se': 'no label', 'info_en': 'no label', 'chall_clas': 'no label', 'length_m': 'no label', 'accessibil': 'no label', 'www_fi': 'no label', 'www_se': 'no label', 'www_en': 'no label', 'email': 'no label', 'datasource': 'no label', 'picture': 'no label', 'www_pictur': 'no label', 'telephone': 'no label', 'upkeepclas': 'no label', 'shapeestim': 'no label', 'sh_es_date': 'no label', 'sh_es_pers': 'no label', 'timestamp': 'no label', 'updater_id': 'no label', 'special': 'no label', 'munici_nro': 'no label', 'subreg_nro': 'no label', 'region_nro': 'no label', 'publicinfo': 'no label', 'hidden': 'no label', 'length_km': 'no label', 'upkeeper': 'no label', 'upkeepinfo': 'no label', });
lyr_Pargasroads_14.set('fieldLabels', {'id': 'no label', });
lyr_Ringroadbuffered50m_15.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'website': 'no label', 'roundtrip': 'no label', 'distance': 'no label', 'type': 'no label', 'route': 'no label', 'ref': 'no label', 'network': 'no label', 'name_sv': 'no label', 'name_fi': 'no label', 'name': 'no label', 'descriptio': 'no label', 'descript_1': 'no label', 'descript_2': 'no label', 'start': 'no label', });
lyr_Ringroadintersections_16.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'website': 'no label', 'roundtrip': 'no label', 'distance': 'no label', 'type': 'no label', 'route': 'no label', 'ref': 'no label', 'network': 'no label', 'name_sv': 'no label', 'name_fi': 'no label', 'name': 'no label', 'descriptio': 'no label', 'descript_1': 'no label', 'descript_2': 'no label', });
lyr_Ringroadnetwork1km_17.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'website': 'no label', 'roundtrip': 'no label', 'distance': 'no label', 'type': 'no label', 'route': 'no label', 'ref': 'no label', 'network': 'no label', 'name_sv': 'no label', 'name_fi': 'no label', 'name': 'no label', 'descriptio': 'no label', 'descript_1': 'no label', 'descript_2': 'no label', 'start': 'no label', });
lyr_Archipelagoringroad_18.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'website': 'no label', 'roundtrip': 'no label', 'distance': 'no label', 'type': 'no label', 'route': 'no label', 'ref': 'no label', 'network': 'no label', 'name_sv': 'no label', 'name_fi': 'no label', 'name': 'no label', 'descriptio': 'no label', 'descript_1': 'no label', 'descript_2': 'no label', });
lyr_Servicenetworkarea_19.set('fieldLabels', {'id': 'no label', 'area': 'no label', 'perimeter': 'no label', });
lyr_Servicenetwork_20.set('fieldLabels', {'id': 'no label', });
lyr_Tourismservicepoints_21.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'image': 'no label', 'locked': 'no label', 'addr_unit': 'no label', 'subject_wi': 'no label', 'subject': 'no label', 'man_made': 'no label', 'layer': 'no label', 'flag_wikid': 'no label', 'flag_type': 'no label', 'flag_name': 'no label', 'memorial': 'no label', 'material': 'no label', 'inscriptio': 'no label', 'roof_direc': 'no label', 'was_entran': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'alt_name_f': 'no label', 'alt_name': 'no label', 'ele': 'no label', 'level': 'no label', 'addr_place': 'no label', 'bollard': 'no label', 'descriptio': 'no label', 'visibility': 'no label', 'support': 'no label', 'indoor': 'no label', 'faces': 'no label', 'display': 'no label', 'direction': 'no label', 'date': 'no label', 'amenity': 'no label', 'door': 'no label', 'motor_vehi': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'wheelchair': 'no label', 'natural': 'no label', 'historic': 'no label', 'addr_count': 'no label', 'name_sv': 'no label', 'name_fi': 'no label', 'name_en': 'no label', 'addr_postc': 'no label', 'addr_city': 'no label', 'url': 'no label', 'descript_1': 'no label', 'opening_ho': 'no label', 'barrier': 'no label', 'access': 'no label', 'website': 'no label', 'phone': 'no label', 'craft': 'no label', 'addr_stree': 'no label', 'addr_house': 'no label', 'entrance': 'no label', 'ref': 'no label', 'public_tra': 'no label', 'operator': 'no label', 'network': 'no label', 'name': 'no label', 'ferry': 'no label', 'traffic_si': 'no label', 'traffic__1': 'no label', 'highway': 'no label', 'crossing_m': 'no label', 'crossing_i': 'no label', 'crossing': 'no label', 'button_ope': 'no label', 'board_titl': 'no label', 'start_date': 'no label', 'operator_w': 'no label', 'operator_t': 'no label', 'hiking': 'no label', 'departures': 'no label', 'guidepost': 'no label', 'lit': 'no label', 'destinatio': 'no label', 'name_ru': 'no label', 'brand': 'no label', 'noname': 'no label', 'source_nam': 'no label', 'shop': 'no label', 'map_type': 'no label', 'map_size': 'no label', 'check_date': 'no label', 'board_type': 'no label', 'internet_a': 'no label', 'internet_1': 'no label', 'informatio': 'no label', 'email': 'no label', 'backrest': 'no label', 'leisure': 'no label', 'bench': 'no label', 'fireplace': 'no label', 'covered': 'no label', 'tower_cons': 'no label', 'tower_type': 'no label', 'fee': 'no label', 'elevator': 'no label', 'was_tower_': 'no label', 'was_name': 'no label', 'removed_ma': 'no label', 'path': 'no label', });
lyr_Foodpoints_22.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'drink': 'no label', 'seasonal': 'no label', 'facebook': 'no label', 'descriptio': 'no label', 'toilets_wh': 'no label', 'toilets_ac': 'no label', 'payment_el': 'no label', 'payment_de': 'no label', 'payment_cr': 'no label', 'payment__1': 'no label', 'payment_co': 'no label', 'payment_ca': 'no label', 'kids_area': 'no label', 'internet_a': 'no label', 'internet_1': 'no label', 'highchair': 'no label', 'changing_t': 'no label', 'changing_1': 'no label', 'brand': 'no label', 'contact_ti': 'no label', 'contact_in': 'no label', 'contact_em': 'no label', 'karaoke': 'no label', 'alt_name': 'no label', 'diet_veget': 'no label', 'diet_vegan': 'no label', 'sport': 'no label', 'url': 'no label', 'min_age': 'no label', 'diet_koshe': 'no label', 'diet_halal': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'source_nam': 'no label', 'addr_unit': 'no label', 'microbrewe': 'no label', 'fax': 'no label', 'email': 'no label', 'contact_we': 'no label', 'contact_ph': 'no label', 'descript_1': 'no label', 'restaurant': 'no label', 'loc_name': 'no label', 'food': 'no label', 'contact_fa': 'no label', 'brewery': 'no label', 'toilets': 'no label', 'level': 'no label', 'website': 'no label', 'check_date': 'no label', 'operator': 'no label', 'phone': 'no label', 'wheelchair': 'no label', 'smoking': 'no label', 'outdoor_se': 'no label', 'opening_ho': 'no label', 'name': 'no label', 'indoor_sea': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'addr_count': 'no label', 'addr_city': 'no label', 'website_me': 'no label', 'reservatio': 'no label', 'image': 'no label', 'door': 'no label', 'diet_lacto': 'no label', 'diet_dairy': 'no label', 'diet_glute': 'no label', 'vending': 'no label', 'branch': 'no label', 'pets_allow': 'no label', 'addr_place': 'no label', 'opening_da': 'no label', 'noname': 'no label', 'payment_ed': 'no label', 'entrance': 'no label', 'lunch': 'no label', 'brand_wiki': 'no label', 'addr_floor': 'no label', 'name_en': 'no label', 'brand_wi_1': 'no label', 'delivery': 'no label', 'lunch_buff': 'no label', 'cabins': 'no label', 'bar': 'no label', 'air_condit': 'no label', 'shop': 'no label', 'ref': 'no label', 'piste_amen': 'no label', 'name_fi': 'no label', 'old_name': 'no label', 'start_date': 'no label', 'payment_vi': 'no label', 'payment_ma': 'no label', 'takeaway': 'no label', 'opening__1': 'no label', 'delivery_c': 'no label', 'key': 'no label', 'provides': 'no label', 'name_sv': 'no label', 'interactio': 'no label', 'identity': 'no label', 'takeaway_c': 'no label', 'cuisine': 'no label', 'postal_cod': 'no label', 'opening__2': 'no label', 'fast_food': 'no label', 'level_ref': 'no label', 'drive_thro': 'no label', 'delivery_p': 'no label', 'access': 'no label', 'contact_yo': 'no label', 'contact_tw': 'no label', 'contact_li': 'no label', 'diet_kaikk': 'no label', 'diet_meat': 'no label', 'date': 'no label', 'access_cov': 'no label', 'payment_mo': 'no label', 'internet_2': 'no label', 'internet_3': 'no label', 'internet_4': 'no label', 'capacity': 'no label', 'check_da_1': 'no label', 'opening__3': 'no label', 'drive_th_1': 'no label', 'contact_un': 'no label', 'oluthana': 'no label', 'phone_mobi': 'no label', 'long_name': 'no label', 'wheelcha_1': 'no label', 'mobile': 'no label', 'lunch_menu': 'no label', 'layer': 'no label', 'building_l': 'no label', 'building': 'no label', 'official_n': 'no label', 'short_name': 'no label', 'service_el': 'no label', 'dog': 'no label', 'seats': 'no label', 'cafe': 'no label', 'diet_healt': 'no label', 'leisure': 'no label', 'tourism': 'no label', 'diet_pesce': 'no label', 'self_servi': 'no label', 'operator2': 'no label', 'survey_dat': 'no label', 'payment_on': 'no label', 'payment_li': 'no label', 'currency_X': 'no label', 'website_en': 'no label', 'diet_non-v': 'no label', 'discount_s': 'no label', 'ref_vatin': 'no label', 'craft': 'no label', 'name_zh': 'no label', 'payment_qr': 'no label', 'organic': 'no label', 'diet_sugar': 'no label', 'diet_lac_1': 'no label', 'payment__2': 'no label', 'addr_hou_1': 'no label', 'board_titl': 'no label', 'operator_w': 'no label', 'operator_t': 'no label', 'foot': 'no label', 'hiking': 'no label', 'material': 'no label', 'traffic_si': 'no label', 'departures': 'no label', 'guidepost': 'no label', 'lit': 'no label', 'destinatio': 'no label', 'name_ru': 'no label', 'bicycle': 'no label', 'direction': 'no label', 'map_type': 'no label', 'map_size': 'no label', 'board_type': 'no label', 'informatio': 'no label', 'type': 'no label', 'path': 'no label', });
lyr_Accommodationpoints_23.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'contact_ph': 'no label', 'contact_in': 'no label', 'contact_fa': 'no label', 'contact_em': 'no label', 'name_en': 'no label', 'descriptio': 'no label', 'descript_1': 'no label', 'shop': 'no label', 'access': 'no label', 'camp_site': 'no label', 'name_sv': 'no label', 'name_ru': 'no label', 'name_fi': 'no label', 'backcountr': 'no label', 'email': 'no label', 'capacity_p': 'no label', 'addr_city': 'no label', 'website': 'no label', 'toilets': 'no label', 'shower': 'no label', 'phone': 'no label', 'internet_a': 'no label', 'drinking_w': 'no label', 'addr_postc': 'no label', 'tents': 'no label', 'power_supp': 'no label', 'operator': 'no label', 'name': 'no label', 'fee': 'no label', 'caravans': 'no label', 'addr_stree': 'no label', 'addr_house': 'no label', 'reservatio': 'no label', 'sanitary_d': 'no label', 'wilderness': 'no label', 'smoking': 'no label', 'descript_2': 'no label', 'addr_place': 'no label', 'addr_unit': 'no label', 'entrance': 'no label', 'wheelchair': 'no label', 'rooms': 'no label', 'payment_de': 'no label', 'guest_hous': 'no label', 'opening_ho': 'no label', 'diet_veget': 'no label', 'diet_vegan': 'no label', 'amenity': 'no label', 'ref': 'no label', 'payment_cr': 'no label', 'internet_1': 'no label', 'check_date': 'no label', 'air_condit': 'no label', 'addr_count': 'no label', 'key': 'no label', 'operator_t': 'no label', 'contact_li': 'no label', 'branch': 'no label', 'barrier': 'no label', 'image': 'no label', 'wikidata': 'no label', 'short_name': 'no label', 'old_operat': 'no label', 'old_name_f': 'no label', 'old_brand': 'no label', 'level': 'no label', 'brand_wiki': 'no label', 'source_nam': 'no label', 'outdoor_se': 'no label', 'indoor_sea': 'no label', 'url': 'no label', 'brand_wi_1': 'no label', 'brand': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Traditionallandscapes_24.set('fieldLabels', {'ATRIBUUT_1': 'hidden field', 'GEOMETRIA1': 'hidden field', 'ARVOLUOKKA': 'hidden field', 'MUOD_ORGAN': 'hidden field', 'KOHDETUNNU': 'hidden field', 'PEM_KOODI': 'hidden field', 'PB_INV_NIM': 'inline label - visible with data', 'ATRIBUUT_2': 'hidden field', 'GEOMETRI_1': 'hidden field', 'SHAPE_AREA': 'hidden field', 'SHAPE_LEN': 'hidden field', 'TRAIL': 'hidden field', 'ACCESS': 'hidden field', 'HOTSPOT': 'hidden field', 'ACCOMO': 'hidden field', 'FOOD': 'hidden field', 'TOURISM': 'hidden field', 'RING_ROAD': 'hidden field', 'VALUE_SUM': 'hidden field', 'VALUE_TOUR': 'hidden field', 'DEV_PREF': 'hidden field', 'NoLargeTou': 'hidden field', 'YesSmallTo': 'hidden field', 'NoSmallTou': 'hidden field', 'YesLargTou': 'hidden field', 'NoIndustri': 'hidden field', 'YesIndustr': 'hidden field', 'YesWind': 'hidden field', 'NoWind': 'hidden field', 'YesSettlem': 'hidden field', 'NoSettleme': 'hidden field', 'SERV_AREA': 'hidden field', 'PROTECTED': 'hidden field', });
lyr_Traditionallandscapes_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});