// ESEMPI COMPLETI: Configurazione mappa con tutte le funzioni

import React from 'react';

// 1. CONFIGURAZIONE MAPBOX COMPLETA
export const mapboxFullConfig = {
  mapConfig: {
    showMap: true,
    
    // FUNZIONI MAPBOX
    onMapClick: async (coordinates, locationName) => {
      console.log(`Click Mapbox: ${locationName} (${coordinates.lat}, ${coordinates.lng})`);
      
      // Salva il tentativo
      const distance = calculateDistanceToTarget(coordinates);
      const score = calculateScoreFromDistance(distance);
      
      // Mostra risultato sulla mappa
      showResultOnMap(coordinates, distance, score);
    },
    
    onMapReady: (mapInstance) => {
      console.log("Mapbox pronta");
      
      // Configura stili Mapbox
      mapInstance.setStyle('mapbox://styles/mapbox/streets-v12');
      
      // Aggiungi controlli
      mapInstance.addControl(new mapboxgl.NavigationControl());
      
      // Disabilita rotazione per semplificare
      mapInstance.dragRotate.disable();
      mapInstance.touchZoomRotate.disableRotation();
    },
    
    // Geocoding con Mapbox API
    reverseGeocode: async (lat, lng) => {
      const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
      
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${MAPBOX_TOKEN}&types=place,locality,region,country`
        );
        const data = await response.json();
        
        if (data.features?.length > 0) {
          return data.features[0].place_name;
        }
        return "Località sconosciuta";
      } catch (error) {
        console.error("Errore Mapbox geocoding:", error);
        return "Errore geocoding";
      }
    },
    
    forwardGeocode: async (locationName) => {
      const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
      
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(locationName)}.json?access_token=${MAPBOX_TOKEN}&limit=1`
        );
        const data = await response.json();
        
        if (data.features?.length > 0) {
          const [lng, lat] = data.features[0].center;
          return { lat, lng };
        }
        return { lat: 0, lng: 0 };
      } catch (error) {
        console.error("Errore Mapbox geocoding:", error);
        return { lat: 0, lng: 0 };
      }
    },
    
    // Calcolo distanza Haversine
    calculateDistance: (guess, correct) => {
      const R = 6371; // Raggio Terra in km
      const dLat = (correct.lat - guess.lat) * Math.PI / 180;
      const dLng = (correct.lng - guess.lng) * Math.PI / 180;
      const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(guess.lat * Math.PI / 180) * Math.cos(correct.lat * Math.PI / 180) *
        Math.sin(dLng/2) * Math.sin(dLng/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      return R * c;
    },
    
    // Punteggio basato su distanza
    calculateScoreFromDistance: (distance, maxDistance = 20000) => {
      if (distance <= 25) return 1000;      // Perfetto (< 25km)
      if (distance <= 100) return 900;      // Eccellente (< 100km)
      if (distance <= 500) return 750;      // Buono (< 500km)
      if (distance <= 1000) return 500;     // Discreto (< 1000km)
      if (distance <= 5000) return 250;     // Sufficiente (< 5000km)
      if (distance >= maxDistance) return 0; // Troppo lontano
      
      // Calcolo proporzionale per distanze intermedie
      const scorePercentage = Math.max(0, (maxDistance - distance) / maxDistance);
      return Math.round(scorePercentage * 250);
    },
    
    // Formattazione distanza
    formatDistance: (distance) => {
      if (distance < 1) {
        return `${Math.round(distance * 1000)} metri`;
      } else if (distance < 1000) {
        return `${distance.toFixed(1)} km`;
      } else {
        return `${Math.round(distance).toLocaleString()} km`;
      }
    },
    
    // Centro dinamico per round
    getMapCenter: (round) => {
      // Centra la mappa in base al tipo di cibo
      const foodCenters = {
        1: { lat: 41.9028, lng: 12.4964 }, // Italia
        2: { lat: 35.6762, lng: 139.6503 }, // Giappone
        3: { lat: 48.8566, lng: 2.3522 },   // Francia
        4: { lat: 19.4326, lng: -99.1332 }, // Messico
        5: { lat: 39.4699, lng: -0.3763 },  // Spagna
        6: { lat: 13.7563, lng: 100.5018 }, // Tailandia
        7: { lat: 40.7128, lng: -74.0060 }, // USA
        8: { lat: 35.6762, lng: 139.6503 }, // Giappone
        9: { lat: 51.5074, lng: -0.1278 },  // UK
        10: { lat: 41.9028, lng: 12.4964 }  // Italia
      };
      return foodCenters[round] || { lat: 20, lng: 0 };
    },
    
    // Zoom dinamico
    getMapZoom: (round) => {
      // Zoom più stretto per round avanzati
      if (round <= 2) return 2;  // Vista globale
      if (round <= 5) return 3;  // Vista continentale
      if (round <= 8) return 4;  // Vista regionale
      return 5; // Vista locale
    }
  },
  
  // Componente mappa Mapbox
  components: {
    renderMap: (gameState, actions, mapConfig) => {
      return React.createElement('div', {
        className: "w-full h-full relative"
      }, [
        // Container mappa
        React.createElement('div', {
          key: 'map',
          id: 'mapbox-game-container',
          className: "w-full h-full rounded-lg",
          ref: (el) => {
            if (el && !el.hasChildNodes()) {
              initializeMapboxGame(el, gameState, actions, mapConfig);
            }
          }
        }),
        
        // UI overlay
        React.createElement('div', {
          key: 'ui',
          className: "absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none"
        }, [
          // Info round
          React.createElement('div', {
            key: 'info',
            className: "bg-black/70 text-white p-3 rounded-lg pointer-events-auto"
          }, [
            React.createElement('p', { key: 'round', className: "text-sm font-bold" }, `Round ${gameState.currentRound}`),
            React.createElement('p', { key: 'instruction', className: "text-xs" }, "Clicca sulla mappa per indovinare!")
          ]),
          
          // Zoom controls personalizzati
          React.createElement('div', {
            key: 'controls',
            className: "flex flex-col gap-2 pointer-events-auto"
          }, [
            React.createElement('button', {
              key: 'zoom-in',
              className: "w-8 h-8 bg-white/90 rounded shadow-lg flex items-center justify-center text-lg font-bold hover:bg-white transition-colors",
              onClick: () => zoomMapIn()
            }, "+"),
            React.createElement('button', {
              key: 'zoom-out',
              className: "w-8 h-8 bg-white/90 rounded shadow-lg flex items-center justify-center text-lg font-bold hover:bg-white transition-colors",
              onClick: () => zoomMapOut()
            }, "−")
          ])
        ])
      ]);
    }
  }
};

// 2. CONFIGURAZIONE GOOGLE MAPS COMPLETA
export const googleMapsFullConfig = {
  mapConfig: {
    showMap: true,
    
    onMapClick: async (coordinates, locationName) => {
      console.log(`Click Google Maps: ${locationName}`);
      
      // Logica specifica per Google Maps
      const distance = calculateDistanceToTarget(coordinates);
      const score = calculateScoreFromDistance(distance);
      
      // Aggiungi marker sulla mappa
      addGoogleMapsMarker(coordinates, score);
    },
    
    onMapReady: (mapInstance) => {
      console.log("Google Maps pronta");
      
      // Configura Google Maps
      mapInstance.setOptions({
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true,
        gestureHandling: 'cooperative'
      });
    },
    
    // Geocoding con Google Maps API
    reverseGeocode: async (lat, lng) => {
      const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
      
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
        );
        const data = await response.json();
        
        if (data.results?.length > 0) {
          return data.results[0].formatted_address;
        }
        return "Località sconosciuta";
      } catch (error) {
        console.error("Errore Google geocoding:", error);
        return "Errore geocoding";
      }
    },
    
    // Resto delle funzioni come Mapbox...
    calculateDistance: mapboxFullConfig.mapConfig.calculateDistance,
    calculateScoreFromDistance: mapboxFullConfig.mapConfig.calculateScoreFromDistance,
    formatDistance: mapboxFullConfig.mapConfig.formatDistance,
    getMapCenter: mapboxFullConfig.mapConfig.getMapCenter,
    getMapZoom: mapboxFullConfig.mapConfig.getMapZoom
  }
};

// 3. CONFIGURAZIONE MAPPA SEMPLICE CON FUNZIONI BASIC
export const simpleMapWithFunctionsConfig = {
  mapConfig: {
    showMap: true,
    
    onMapClick: (coordinates, locationName) => {
      // Logica semplice
      console.log(`Click: ${locationName || 'Posizione sconosciuta'}`);
      
      // Simula calcolo distanza
      const distance = Math.random() * 5000; // Distanza casuale per demo
      const score = distance < 1000 ? 800 : distance < 3000 ? 500 : 200;
      
      alert(`Distanza: ${Math.round(distance)}km - Punteggio: ${score}`);
    },
    
    calculateDistance: (guess, correct) => {
      // Calcolo semplificato
      const latDiff = Math.abs(guess.lat - correct.lat);
      const lngDiff = Math.abs(guess.lng - correct.lng);
      return Math.sqrt(latDiff * latDiff + lngDiff * lngDiff) * 111; // Approssimazione
    },
    
    formatDistance: (distance) => {
      return distance < 1000 ? `${Math.round(distance)}km` : `${(distance/1000).toFixed(1)}k km`;
    }
  },
  
  components: {
    renderMap: (gameState, actions, mapConfig) => {
      return React.createElement('div', {
        className: "w-full h-full bg-gradient-to-br from-blue-500 via-green-500 to-blue-700 rounded-lg cursor-pointer flex items-center justify-center relative overflow-hidden",
        onClick: (e) => {
          // Simula click con coordinate casuali
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          // Converti posizione click in coordinate
          const lat = 90 - (y / rect.height) * 180;
          const lng = (x / rect.width) * 360 - 180;
          
          const locationName = `Lat: ${lat.toFixed(2)}, Lng: ${lng.toFixed(2)}`;
          
          if (mapConfig.onMapClick) {
            mapConfig.onMapClick({ lat, lng }, locationName);
          }
        }
      }, [
        React.createElement('div', {
          key: 'content',
          className: "text-center text-white z-10"
        }, [
          React.createElement('div', { key: 'icon', className: "text-6xl mb-4 animate-pulse" }, "🌍"),
          React.createElement('h3', { key: 'title', className: "text-xl font-bold mb-2" }, "Mappa Interattiva"),
          React.createElement('p', { key: 'instruction', className: "text-sm opacity-90" }, "Clicca ovunque per indovinare!"),
          React.createElement('p', { key: 'round', className: "text-xs opacity-75 mt-2" }, `Round ${gameState.currentRound}`)
        ]),
        
        // Effetto stelle animate
        React.createElement('div', {
          key: 'stars',
          className: "absolute inset-0 opacity-30"
        }, Array.from({ length: 20 }, (_, i) => 
          React.createElement('div', {
            key: i,
            className: "absolute w-1 h-1 bg-white rounded-full animate-pulse",
            style: {
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }
          })
        ))
      ]);
    }
  }
};

// HELPER FUNCTIONS (da implementare)
function initializeMapboxGame(container, gameState, actions, mapConfig) {
  // Implementa inizializzazione Mapbox
  console.log("Inizializzazione Mapbox Game:", container);
}

function zoomMapIn() {
  // Implementa zoom in
  console.log("Zoom in");
}

function zoomMapOut() {
  // Implementa zoom out
  console.log("Zoom out");
}

function calculateDistanceToTarget(coordinates) {
  // Calcola distanza dal target corrente
  return Math.random() * 1000; // Placeholder
}

function showResultOnMap(coordinates, distance, score) {
  // Mostra risultato sulla mappa
  console.log("Risultato:", { coordinates, distance, score });
}

function addGoogleMapsMarker(coordinates, score) {
  // Aggiungi marker Google Maps
  console.log("Marker Google Maps:", { coordinates, score });
}