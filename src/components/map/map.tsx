import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import {OfferListItem, OfferListItems} from '../../types/offer-list-item.ts';
import 'leaflet/dist/leaflet.css';
import {Offer} from '../../types/offer.ts';

type ScreenMapSize = 'main' | 'offer';
type MapProps = {
  screen: ScreenMapSize;
  offers: OfferListItems;
  selectedOffer: Offer | OfferListItem | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: 'public/img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: 'public/img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});


const sizeMap: Record<ScreenMapSize, { width: string; height: string }> = {
  main: {width: '512px', height: '555px'},
  offer: {width: '1144px', height: '579px'},
};

function CityMap(props: MapProps) {
  const {offers, selectedOffer, screen} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, selectedOffer?.city.location);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer?.id
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
