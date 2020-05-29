(function () {
	"use strict";

	var mymap = L.map('mapid').setView([6.245418, -75.5878022], 12);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19
	}).addTo(mymap);

	axios.get('/api/bikes').then(data => {
		var bikes = data.data.bikes
		console.log(bikes)

		bikes.forEach(bike => {
			L.marker(
				bike.location, { title: bike.color + ' ' + bike.model }
			).addTo(mymap)
		});
	})
})()
