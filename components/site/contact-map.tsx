// Browser-only Leaflet map — load via React.lazy behind <ClientOnly>; never import statically from an SSR route.
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Draft location — replace with the company's verified office coordinates.
export const OFFICE = { lat: 19.076, lng: 72.8777, label: 'Quadsupreme Research & Technologies' };

export default function ContactMap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const map = L.map(ref.current, { scrollWheelZoom: false }).setView([OFFICE.lat, OFFICE.lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);
    const icon = L.divIcon({
      className: '',
      html: '<span style="display:block;width:22px;height:22px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:hsl(217 91% 50%);border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.35)"></span>',
      iconSize: [22, 22],
      iconAnchor: [11, 22],
    });
    L.marker([OFFICE.lat, OFFICE.lng], { icon }).addTo(map).bindPopup(OFFICE.label);
    return () => { map.remove(); };
  }, []);

  return <div ref={ref} className="h-full w-full" aria-label="Map showing the Quadsupreme office location" />;
}
