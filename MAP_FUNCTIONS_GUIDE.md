# 🗺️ Configurazione Completa Mappa con Funzioni

## 🎯 Panoramica

Ora la mappa è **COMPLETAMENTE configurabile** con:
- 🎨 **Componente visivo** - Mapbox, Google Maps, o la tua mappa personalizzata
- ⚙️ **Funzioni logiche** - Click, geocoding, calcolo distanze, punteggi
- 🎮 **Gestione eventi** - Ready, errori, interazioni utente
- 📍 **Utilità geografiche** - Coordinate, bounds, zoom dinamico

## 🔧 Funzioni Configurabili

### Gestione Click Mappa
```javascript
mapConfig: {
  onMapClick: (coordinates, locationName) => {
    console.log(`Click: ${locationName} (${coordinates.lat}, ${coordinates.lng})`);
    
    // 1. Calcola distanza dal target
    const distance = calculateDistanceToTarget(coordinates);
    
    // 2. Calcola punteggio
    const score = calculateScoreFromDistance(distance);
    
    // 3. Mostra risultato
    showResultOnMap(coordinates, distance, score);
    
    // 4. Salva tentativo
    saveGuessToDatabase(coordinates, distance, score);
  }
}
```

### Geocoding (Coordinate ↔ Nomi)
```javascript
mapConfig: {
  // Coordinate → Nome località
  reverseGeocode: async (lat, lng) => {
    // OPZIONE 1: Mapbox
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${token}`);
    const data = await response.json();
    return data.features[0]?.place_name || "Sconosciuto";
    
    // OPZIONE 2: Google Maps
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${key}`);
    const data = await response.json();
    return data.results[0]?.formatted_address || "Sconosciuto";
    
    // OPZIONE 3: Il tuo servizio
    const response = await fetch(`/api/reverse-geocode?lat=${lat}&lng=${lng}`);
    return await response.text();
  },
  
  // Nome località → Coordinate
  forwardGeocode: async (locationName) => {
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(locationName)}.json?access_token=${token}`);
    const data = await response.json();
    const [lng, lat] = data.features[0]?.center || [0, 0];
    return { lat, lng };
  }
}
```

### Calcolo Distanze
```javascript
mapConfig: {
  // Formula di Haversine per distanza accurata
  calculateDistance: (guess, correct) => {
    const R = 6371; // Raggio Terra in km
    const dLat = (correct.lat - guess.lat) * Math.PI / 180;
    const dLng = (correct.lng - guess.lng) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(guess.lat * Math.PI / 180) * Math.cos(correct.lat * Math.PI / 180) *
      Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c; // Distanza in km
  }
}
```

### Calcolo Punteggio da Distanza
```javascript
mapConfig: {
  calculateScoreFromDistance: (distance, maxDistance = 20000) => {
    if (distance <= 25) return 1000;      // Perfetto (< 25km)
    if (distance <= 100) return 900;      // Eccellente
    if (distance <= 500) return 750;      // Buono
    if (distance <= 1000) return 500;     // Discreto
    if (distance <= 5000) return 250;     // Sufficiente
    if (distance >= maxDistance) return 0; // Troppo lontano
    
    // Calcolo proporzionale
    const scorePercentage = (maxDistance - distance) / maxDistance;
    return Math.round(scorePercentage * 250);
  }
}
```

### Gestione Eventi Mappa
```javascript
mapConfig: {
  // Quando la mappa è pronta
  onMapReady: (mapInstance) => {
    console.log("Mappa pronta:", mapInstance);
    
    // Configura stili
    mapInstance.setStyle('mapbox://styles/mapbox/streets-v12');
    
    // Aggiungi controlli
    mapInstance.addControl(new mapboxgl.NavigationControl());
    
    // Disabilita funzioni non necessarie
    mapInstance.dragRotate.disable();
    mapInstance.touchZoomRotate.disableRotation();
    
    // Imposta tema scuro/chiaro
    if (isDarkMode) {
      mapInstance.setStyle('mapbox://styles/mapbox/dark-v11');
    }
  },
  
  // Gestione errori
  onMapError: (error) => {
    console.error("Errore mappa:", error);
    showErrorMessage("Errore nel caricamento della mappa");
    
    // Fallback a mappa semplice
    switchToSimpleMap();
  }
}
```

### Configurazione Dinamica per Round
```javascript
mapConfig: {
  // Centro mappa basato sul round/cibo
  getMapCenter: (round) => {
    const foodRegions = {
      "Pizza": { lat: 41.9028, lng: 12.4964 }, // Italia
      "Sushi": { lat: 35.6762, lng: 139.6503 }, // Giappone
      "Tacos": { lat: 19.4326, lng: -99.1332 }, // Messico
    };
    
    const currentFood = getCurrentFood(round);
    return foodRegions[currentFood] || { lat: 20, lng: 0 };
  },
  
  // Zoom basato sulla difficoltà
  getMapZoom: (round) => {
    if (round <= 3) return 2;  // Facile - vista globale
    if (round <= 6) return 3;  // Medio - vista continentale
    if (round <= 9) return 4;  // Difficile - vista regionale
    return 5; // Molto difficile - vista locale
  },
  
  // Limiti geografici
  restrictMapBounds: true,
  mapBounds: {
    north: 85,   // Polo Nord
    south: -85,  // Polo Sud
    east: 180,   // Data Line
    west: -180   // Data Line
  }
}
```

## 🎮 Esempi di Implementazione

### 1. Mapbox Completo
```javascript
export const mapboxGameConfig = {
  mapConfig: {
    // Tutte le funzioni Mapbox
    onMapClick: (coords, location) => { /* logica click */ },
    onMapReady: (map) => { /* setup Mapbox */ },
    reverseGeocode: async (lat, lng) => { /* Mapbox geocoding */ },
    calculateDistance: (guess, correct) => { /* Haversine */ },
    calculateScoreFromDistance: (distance) => { /* punteggio */ },
    formatDistance: (distance) => { /* formato UI */ },
    getMapCenter: (round) => { /* centro dinamico */ },
    getMapZoom: (round) => { /* zoom dinamico */ }
  },
  
  components: {
    renderMap: (gameState, actions, mapConfig) => {
      // Il tuo componente Mapbox
      return <MapboxGameComponent 
        gameState={gameState}
        actions={actions}
        mapConfig={mapConfig}
      />;
    }
  }
};
```

### 2. Google Maps Completo
```javascript
export const googleMapsGameConfig = {
  mapConfig: {
    // Funzioni Google Maps
    onMapClick: (coords, location) => { /* logica Google Maps */ },
    onMapReady: (map) => { /* setup Google Maps */ },
    reverseGeocode: async (lat, lng) => { /* Google geocoding */ },
    // ... altre funzioni
  },
  
  components: {
    renderMap: (gameState, actions, mapConfig) => {
      return <GoogleMapsGameComponent 
        gameState={gameState}
        actions={actions}
        mapConfig={mapConfig}
      />;
    }
  }
};
```

### 3. Mappa Semplice con Funzioni Basic
```javascript
export const simpleMapGameConfig = {
  mapConfig: {
    onMapClick: (coords, location) => {
      // Logica semplificata
      const distance = Math.random() * 1000;
      const score = distance < 500 ? 800 : 400;
      alert(`Distanza: ${Math.round(distance)}km - Score: ${score}`);
    },
    
    calculateDistance: (guess, correct) => {
      // Calcolo approssimativo
      const latDiff = Math.abs(guess.lat - correct.lat);
      const lngDiff = Math.abs(guess.lng - correct.lng);
      return Math.sqrt(latDiff * latDiff + lngDiff * lngDiff) * 111;
    }
  },
  
  components: {
    renderMap: (gameState, actions, mapConfig) => {
      return <SimpleDivMap 
        onClick={(coords) => mapConfig.onMapClick(coords)}
      />;
    }
  }
};
```

## 🚀 Come Usare

### 1. Configurazione Completa
```javascript
import { mapboxGameConfig } from './configs/mapConfig.js';

<Game customConfig={mapboxGameConfig} />
```

### 2. Configurazione Personalizzata
```javascript
const myMapConfig = {
  mapConfig: {
    onMapClick: async (coordinates, locationName) => {
      // La tua logica personalizzata
      const result = await processGuess(coordinates);
      showResult(result);
    },
    
    calculateScoreFromDistance: (distance) => {
      // Il tuo algoritmo di punteggio
      return myCustomScoring(distance);
    }
  },
  
  components: {
    renderMap: (gameState, actions, mapConfig) => {
      return <MyCustomMap 
        onLocationSelect={mapConfig.onMapClick}
        gameRound={gameState.currentRound}
      />;
    }
  }
};

<Game customConfig={myMapConfig} />
```

### 3. Solo Funzioni (Senza Componente Custom)
```javascript
const functionsOnlyConfig = {
  mapConfig: {
    // Solo le funzioni che ti interessano
    onMapClick: (coords, location) => { /* tua logica */ },
    calculateDistance: (guess, correct) => { /* tuo calcolo */ }
  }
  // Usa il placeholder di default per la mappa
};
```

**Ora hai il controllo completo di ogni aspetto della mappa!** 🗺️⚙️

Vedi `example-configs/mapFunctionConfigs.js` per esempi completi di implementazione!