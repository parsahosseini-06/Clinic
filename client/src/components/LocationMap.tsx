/** Style reminder — نقشه باید واقعی، آرام و کاربردی باشد و کاربر را به تماس یا مسیریابی برساند. */
import { useRef } from "react";
import { MapPin } from "lucide-react";
import { MapView } from "@/components/Map";
import { SITE } from "@/lib/site-data";

const PLACE_ID = "ChIJW_uqjC0Fjj8R2sI63nAWpSw";
const FALLBACK_CENTER = { lat: 35.8248, lng: 51.4648 };

export function LocationMap() {
  const mapReady = useRef(false);
  return <div className="location-map">
    <MapView initialCenter={FALLBACK_CENTER} initialZoom={15} className="roma-map" onMapReady={async (map) => {
      if (mapReady.current) return; mapReady.current = true;
      try {
        const place = new google.maps.places.Place({ id: PLACE_ID });
        await place.fetchFields({ fields: ["displayName", "location"] });
        if (place.location) {
          map.setCenter(place.location); map.setZoom(16);
          new google.maps.Marker({ map, position: place.location, title: SITE.name });
        }
      } catch { new google.maps.Marker({ map, position: FALLBACK_CENTER, title: SITE.name }); }
    }} />
    <a className="map-route-link" href={SITE.waze} target="_blank" rel="noreferrer"><MapPin size={16} aria-hidden="true" />مسیریابی تا کلینیک</a>
  </div>;
}

