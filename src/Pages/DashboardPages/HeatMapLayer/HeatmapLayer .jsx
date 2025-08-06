import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';

const HeatmapLayer = ({ points = [] }) => {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const heatLayer = L.heatLayer(points, {
            radius: 30,
            blur: 37,
            maxZoom: 10,
            gradient: {
                0.7: '#D8F2FF',
                0.4: '#6EC2FF',
                0.8: '#045A5C',
            },
        }).addTo(map);

        return () => {
            map.removeLayer(heatLayer);
        };
    }, [map, points]);

    return null;
};

export default HeatmapLayer;