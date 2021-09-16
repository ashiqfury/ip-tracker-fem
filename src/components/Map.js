import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from '../images/icon-location.svg';

const Map = ({ data }) => {
	const style = {
		height: '450px',
		// position: 'relative',
		// top: '-180px',
		// zIndex: '-1',
	};

	let [lat, lng] = [8.741222, 77.694626];

	if (data && data !== 'Error') {
		lat = Number(data?.location?.lat);
		lng = Number(data?.location?.lng);
	}

	!lat && ([lat, lng] = [8.741222, 77.694626]);

	const leafletMarker = L.icon({
		iconUrl: markerIcon,
		shadowUrl: markerIcon,

		iconSize: [20, 25], // size of the icon
		shadowSize: [20, 25], // size of the shadow
		iconAnchor: [23.5, 55], // point of the icon which will correspond to marker's location
		shadowAnchor: [23.5, 55], // the same for the shadow
		popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
	});

	useEffect(() => {
		let leafletMap = L.map('mapid').setView([lat, lng], 13);
		const accessToken = process.env.REACT_APP_TOKEN;

		L.tileLayer(
			`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
			{
				attribution:
					'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				maxZoom: 18,
				id: 'mapbox/streets-v11',
				tileSize: 512,
				zoomOffset: -1,
				accessToken: accessToken,
			}
		).addTo(leafletMap);

		L.marker([lat, lng], { icon: leafletMarker }).addTo(leafletMap);
		return () => {
			leafletMap.remove();
		};
	}, [lat, lng]);

	return (
		<div id="mapid" style={style} className="mapclass">
			map placeholder
		</div>
	);
};

export default Map;
