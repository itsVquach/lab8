function initMap() {
	// add your code here
	L.mapquest.key = 'LZ9ZPswAwSg1YkkN0xCeASJPibsaedV2';

// 'map' refers to a <div> element with the ID map
	L.mapquest.map('map', {
	  center: [32.8785, -117.2359],
	  layers: L.mapquest.tileLayer('map'),
	  zoom: 12
	});
}