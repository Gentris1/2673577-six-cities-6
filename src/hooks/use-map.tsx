import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import {Location} from '../types/offer-list-item.ts';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  coordinate: Location | undefined
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current && coordinate !== undefined) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: coordinate.latitude,
          lng: coordinate.longitude
        },
        zoom: coordinate.zoom
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, coordinate]);

  useEffect(() => {
    if (map && coordinate) {
      map.setView(
        {
          lat: coordinate.latitude,
          lng: coordinate.longitude
        },
        coordinate.zoom
      );
    }
  }, [map, coordinate]);

  return map;
}

export default useMap;
