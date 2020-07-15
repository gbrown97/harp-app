import { MapView } from "@here/harp-mapview";
import { GeoCoordinates } from "@here/harp-geoutils";
import { APIFormat,  OmvDataSource, AuthenticationMethod } from "@here/harp-omv-datasource";
import { MapControls } from "@here/harp-map-controls";

const mapCanvas = document.getElementById("mapCanvas");
const mapView = new MapView({
	canvas: mapCanvas,
	theme: "node_modules/@here/harp-map-theme/resources/berlin_tilezen_base.json",
	// note, this URL may vary depending on configuration of webpack
	// for this example, it is assumed that app is server from project root
       decoderUrl: "decoder.bundle.js"
	// note, this URL may vary depending on configuration of webpack
	// for this example, it is assumed that webpack emits bundles to project root
});

//mapView.camera.position.set(0, 0, 800);
// center the camera to Dayton
mapView.lookAt(new GeoCoordinates(39.7589, -84.1916), 1500, 40, 0);
mapView.resize(mapCanvas.clientWidth, mapCanvas.clientHeight);

const dataSource = new OmvDataSource({
	   baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
	   apiFormat: APIFormat.XYZOMV,
	   styleSetName: "tilezen",
	   authenticationCode: "YOUR_KEY",
	   authenticationMethod: {
		            method: AuthenticationMethod.QueryString,
		            name: "apikey"
		      }
});
mapView.addDataSource(dataSource);

// make sure the map is rendered
mapView.update();
MapControls.create(mapView);


