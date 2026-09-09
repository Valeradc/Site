import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { 
  Compass, 
  MapPin, 
  Sparkles, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { NOVOSIBIRSK_CENTER, NOVOSIBIRSK_LOCATIONS } from '../data/novosibirskLocations';
import { NovosibirskLocation, Language } from '../types';

interface NovosibirskMapCardProps {
  currentLang: Language;
  isDark?: boolean;
}

export const NovosibirskMapCard: React.FC<NovosibirskMapCardProps> = ({
  currentLang
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [id: string]: L.Marker }>({});

  const [activeLocation, setActiveLocation] = useState<NovosibirskLocation>(NOVOSIBIRSK_LOCATIONS[0]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const filteredLocations = activeCategory === 'all'
    ? NOVOSIBIRSK_LOCATIONS
    : NOVOSIBIRSK_LOCATIONS.filter(loc => loc.category === activeCategory);

  // Initialize and update Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // CartoDB Voyager pastel tiles
    const tileUrl = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

    const map = L.map(mapContainerRef.current, {
      center: [NOVOSIBIRSK_CENTER.lat, NOVOSIBIRSK_CENTER.lng],
      zoom: NOVOSIBIRSK_CENTER.zoom,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: true
    });

    L.tileLayer(tileUrl, {
      maxZoom: 18,
      subdomains: 'abcd'
    }).addTo(map);

    mapInstanceRef.current = map;
    markersRef.current = {};

    // Add squircle floating pins
    NOVOSIBIRSK_LOCATIONS.forEach((loc) => {
      const isSelected = loc.id === activeLocation.id;
      
      const customIcon = L.divIcon({
        className: 'custom-squircle-pin-container',
        html: `
          <div class="group relative cursor-pointer select-none transition-transform duration-200 hover:scale-110 ${
            isSelected ? 'scale-110 -translate-y-1' : ''
          }">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-md transition-all duration-200 bg-white text-neutral-900 border-2 ${
              isSelected ? 'border-neutral-900 ring-4 ring-neutral-900/10' : 'border-white hover:border-neutral-300'
            }">
              <span>${loc.iconEmoji}</span>
            </div>
            
            ${isSelected ? `
              <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-900"></div>
            ` : ''}

            <div class="absolute left-1/2 -translate-x-1/2 -top-7 px-2 py-0.5 rounded-md text-[11px] font-medium whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 text-white shadow">
              ${currentLang === 'ru' ? loc.titleRu : loc.titleEn}
            </div>
          </div>
        `,
        iconSize: [48, 48],
        iconAnchor: [24, 24]
      });

      const marker = L.marker([loc.lat, loc.lng], { icon: customIcon }).addTo(map);

      marker.on('click', () => {
        setActiveLocation(loc);
        map.flyTo([loc.lat, loc.lng], 14, {
          duration: 1.0
        });
      });

      markersRef.current[loc.id] = marker;
    });

    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 200);

    return () => {
      clearTimeout(timer);
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  const handleSelectLocation = (loc: NovosibirskLocation) => {
    setActiveLocation(loc);

    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([loc.lat, loc.lng], 14, {
        duration: 1.0
      });
    }

    // Refresh markers to update selected indicator
    Object.keys(markersRef.current).forEach(id => {
      const locItem = NOVOSIBIRSK_LOCATIONS.find(l => l.id === id);
      if (!locItem) return;
      const isSelected = id === loc.id;
      
      const updatedIcon = L.divIcon({
        className: 'custom-squircle-pin-container',
        html: `
          <div class="group relative cursor-pointer select-none transition-transform duration-200 hover:scale-110 ${
            isSelected ? 'scale-110 -translate-y-1' : ''
          }">
            <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-md transition-all duration-200 bg-white text-neutral-900 border-2 ${
              isSelected ? 'border-neutral-900 ring-4 ring-neutral-900/10' : 'border-white hover:border-neutral-300'
            }">
              <span>${locItem.iconEmoji}</span>
            </div>
            
            ${isSelected ? `
              <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-900"></div>
            ` : ''}

            <div class="absolute left-1/2 -translate-x-1/2 -top-7 px-2 py-0.5 rounded-md text-[11px] font-medium whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-900 text-white shadow">
              ${currentLang === 'ru' ? locItem.titleRu : locItem.titleEn}
            </div>
          </div>
        `,
        iconSize: [48, 48],
        iconAnchor: [24, 24]
      });

      markersRef.current[id].setIcon(updatedIcon);
    });
  };

  const handleResetZoom = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([NOVOSIBIRSK_CENTER.lat, NOVOSIBIRSK_CENTER.lng], NOVOSIBIRSK_CENTER.zoom, {
        duration: 1.0
      });
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
      
      {/* Top Header of the Card */}
      <div className="p-5 sm:p-6 border-b border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
              {currentLang === 'ru' ? 'Новосибирск' : 'Novosibirsk'}
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 font-medium">
              55.00° N • 82.93° E
            </span>
          </div>
          <p className="text-sm text-neutral-500 mt-0.5">
            {currentLang === 'ru' ? 'Инженерные цеха, колледж и знаковые места Сибири' : 'Workshops, machining college, and iconic Siberian spots'}
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {[
            { id: 'all', labelRu: 'Все', labelEn: 'All' },
            { id: 'work', labelRu: 'Завод', labelEn: 'Plant' },
            { id: 'education', labelRu: 'Колледж', labelEn: 'College' },
            { id: 'nature', labelRu: 'Природа', labelEn: 'Nature' },
            { id: 'landmark', labelRu: 'Город', labelEn: 'City' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                activeCategory === tab.id
                  ? 'bg-neutral-900 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/70'
              }`}
            >
              {currentLang === 'ru' ? tab.labelRu : tab.labelEn}
            </button>
          ))}
        </div>
      </div>

      {/* Map & Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Map View */}
        <div className="lg:col-span-7 relative h-[320px] sm:h-[400px] border-b lg:border-b-0 lg:border-r border-neutral-100">
          <div 
            ref={mapContainerRef} 
            className="w-full h-full z-0 bg-[#e8f1f5]"
          />

          {/* Recenter Button */}
          <button
            onClick={handleResetZoom}
            className="absolute right-4 bottom-4 z-10 p-2.5 rounded-full bg-white text-neutral-700 hover:text-neutral-900 shadow-md border border-neutral-200 transition-transform active:scale-95"
            title={currentLang === 'ru' ? 'Общий вид города' : 'City overview'}
          >
            <Compass className="w-4 h-4" />
          </button>
        </div>

        {/* Location List & Info */}
        <div className="lg:col-span-5 p-5 sm:p-6 flex flex-col justify-between space-y-4">
          
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-neutral-500 font-medium">
              <span>{currentLang === 'ru' ? 'Точки на карте:' : 'Locations:'}</span>
              <span>{filteredLocations.length}</span>
            </div>

            {/* List */}
            <div className={`space-y-2 overflow-y-auto pr-1 transition-all ${
              isExpanded ? 'max-h-[320px]' : 'max-h-[190px]'
            }`}>
              {filteredLocations.map((loc) => {
                const isCurrent = loc.id === activeLocation.id;
                return (
                  <div
                    key={loc.id}
                    onClick={() => handleSelectLocation(loc)}
                    className={`flex items-start gap-3 p-2.5 rounded-xl cursor-pointer transition-colors border ${
                      isCurrent
                        ? 'bg-neutral-50 border-neutral-900 ring-1 ring-neutral-900/10'
                        : 'bg-white border-neutral-200/70 hover:border-neutral-300 hover:bg-neutral-50/50'
                    }`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-lg flex-shrink-0">
                      {loc.iconEmoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h5 className={`text-sm font-semibold truncate ${
                          isCurrent ? 'text-neutral-900' : 'text-neutral-700'
                        }`}>
                          {currentLang === 'ru' ? loc.titleRu : loc.titleEn}
                        </h5>
                        {isCurrent && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                        )}
                      </div>
                      <p className="text-xs text-neutral-500 truncate">
                        {currentLang === 'ru' ? loc.subtitleRu : loc.subtitleEn}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Expand / Collapse Button */}
            {filteredLocations.length > 3 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs text-neutral-600 hover:text-neutral-900 font-medium flex items-center gap-1 transition-colors pt-1"
              >
                <span>{isExpanded ? (currentLang === 'ru' ? 'Свернуть список' : 'Show less') : (currentLang === 'ru' ? 'Показать все точки' : 'Show all')}</span>
                {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>

          {/* Active Location Detail Card */}
          {activeLocation && (
            <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 space-y-1.5">
              <div className="flex items-center gap-1.5 font-semibold text-neutral-900">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>{currentLang === 'ru' ? 'Опыт Валерия Доценко:' : 'Valeriy’s Experience:'}</span>
              </div>
              <p className="leading-relaxed">
                {currentLang === 'ru' ? activeLocation.descriptionRu : activeLocation.descriptionEn}
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {(currentLang === 'ru' ? activeLocation.tagsRu : activeLocation.tagsEn).map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-0.5 rounded-md text-[10px] bg-white text-neutral-600 border border-neutral-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
