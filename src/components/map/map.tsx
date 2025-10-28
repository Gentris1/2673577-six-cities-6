import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';
import {Coordinate, Offer, Offers} from '../../types/offer.ts';

type MapProps = {
  cityCoordinate: Coordinate;
  offers: Offers;
  selectedOffer: Offer | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function CityMap(props: MapProps): JSX.Element {
  const {cityCoordinate, offers, selectedOffer} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, cityCoordinate);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.coordinate.latitude,
          lng: offer.location.coordinate.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.name === selectedOffer?.name
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);

  return <div style={{height: '500px'}} ref={mapRef}></div>;
}

export default CityMap;
