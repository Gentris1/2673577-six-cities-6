import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';
import {Coordinate, Offer, Offers} from '../../types/offer.ts';

type ScreenMapSize = 'main' | 'offer';
type MapProps = {
  screen: ScreenMapSize;
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


const sizeMap: Record<ScreenMapSize, { width: string; height: string }> = {
  main: {width: '512px', height: '555px'},
  offer: {width: '1144px', height: '579px'},
};

function CityMap(props: MapProps) {
  const {cityCoordinate, offers, selectedOffer, screen} = props;

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

  return (
    <div
      ref={mapRef}
      style={{...sizeMap[screen], margin: '0 auto',}}
    />
  );

}

export default CityMap;
