# 🗺️ Configurazione Riquadri del Gioco

## 🎯 Panoramica

Ora **OGNI RIQUADRO** del gioco è completamente configurabile! Puoi sostituire:
- 🗺️ **Mappa** - Con Mapbox, Google Maps, o la tua mappa personalizzata
- 📸 **Foto** - Con rendering personalizzato e effetti
- 🍕 **Nome cibo** - Con animazioni e stili custom
- 🧭 **Bussola** - Con bussola 3D o indicatori personalizzati
- 💬 **Messaggi** - Con UI personalizzata per suggerimenti

## 🗺️ Configurazione Mappa

### Opzione 1: Mappa Semplice con Click
```javascript
export const simpleMapConfig = {
  components: {
    renderMap: (gameState, actions) => {
      return React.createElement('div', {
        className: "w-full h-full bg-blue-500 rounded-lg cursor-pointer flex items-center justify-center",
        onClick: () => {
          // La tua logica di guess
          const guess = "Roma, Italia";
          actions.makeGuess(guess);
        }
      }, [
        React.createElement('p', { key: 'text', className: "text-white font-bold" }, "🌍 Clicca per indovinare!")
      ]);
    }
  }
};
```

### Opzione 2: Mapbox Completa
```javascript
export const mapboxConfig = {
  components: {
    renderMap: (gameState, actions) => {
      return React.createElement('div', {
        className: "w-full h-full",
        ref: (el) => {
          if (el && !el.hasChildNodes()) {
            // Inizializza la tua mappa Mapbox
            initializeMapbox(el, (coordinates, locationName) => {
              actions.makeGuess(locationName, coordinates);
            });
          }
        }
      });
    }
  }
};

function initializeMapbox(container, onMapClick) {
  // La tua implementazione Mapbox
  mapboxgl.accessToken = 'il-tuo-token';
  
  const map = new mapboxgl.Map({
    container: container,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 0],
    zoom: 2
  });
  
  map.on('click', (e) => {
    const { lng, lat } = e.lngLat;
    
    // Converti coordinate in nome località
    reverseGeocode(lng, lat).then(locationName => {
      onMapClick({ lng, lat }, locationName);
    });
  });
}
```

### Opzione 3: Google Maps
```javascript
export const googleMapsConfig = {
  components: {
    renderMap: (gameState, actions) => {
      return React.createElement('div', {
        id: 'google-map',
        className: "w-full h-full rounded-lg",
        ref: (el) => {
          if (el && window.google) {
            const map = new google.maps.Map(el, {
              center: { lat: 0, lng: 0 },
              zoom: 2
            });
            
            map.addListener('click', (e) => {
              const lat = e.latLng.lat();
              const lng = e.latLng.lng();
              
              // Geocoding inverso
              reverseGeocode(lat, lng).then(location => {
                actions.makeGuess(location);
              });
            });
          }
        }
      });
    }
  }
};
```

## 📸 Configurazione Foto

### Foto con Effetti
```javascript
export const customPhotoConfig = {
  components: {
    renderPhoto: (gameState) => {
      const food = gameState.currentFood;
      
      if (!food?.image) return null;
      
      return React.createElement('div', {
        className: "w-full h-full relative overflow-hidden rounded-lg"
      }, [
        React.createElement('img', {
          key: 'img',
          src: food.image,
          alt: food.name,
          className: "w-full h-full object-cover transition-transform hover:scale-110",
          style: { filter: 'brightness(0.95) contrast(1.1)' }
        }),
        
        // Overlay informativo
        React.createElement('div', {
          key: 'overlay',
          className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4"
        }, [
          React.createElement('p', {
            key: 'info',
            className: "text-white text-sm font-medium"
          }, `📸 Piatto tradizionale`)
        ])
      ]);
    }
  }
};
```

## 🍕 Configurazione Nome Cibo

### Nome con Animazioni
```javascript
export const animatedNameConfig = {
  components: {
    renderFoodName: (gameState) => {
      const name = gameState.currentFood?.name || "???";
      
      return React.createElement('div', {
        className: "text-center"
      }, [
        React.createElement('h3', {
          key: 'name',
          className: "text-xl font-bold text-brand-primary animate-bounce"
        }, name),
        
        React.createElement('div', {
          key: 'difficulty',
          className: "flex justify-center mt-1"
        }, "⭐⭐⭐")
      ]);
    }
  }
};
```

## 🧭 Configurazione Bussola

### Bussola 3D Personalizzata
```javascript
export const customCompassConfig = {
  components: {
    renderCompass: (gameState) => {
      // Calcola direzione verso il cibo
      const direction = calculateDirection(gameState.currentFood);
      
      return React.createElement('div', {
        className: "w-full h-full flex flex-col items-center justify-center"
      }, [
        React.createElement('div', {
          key: 'compass',
          className: "w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg",
          style: { transform: `rotate(${direction}deg)` }
        }, [
          React.createElement('div', {
            key: 'needle',
            className: "text-2xl"
          }, "🧭")
        ]),
        
        React.createElement('p', {
          key: 'label',
          className: "text-sm font-bold mt-2"
        }, "Nord-Est")
      ]);
    }
  }
};
```

## 💬 Configurazione Messaggi

### Area Messaggi Interattiva
```javascript
export const customMessagesConfig = {
  components: {
    renderMessages: (gameState, actions) => {
      return React.createElement('div', {
        className: "w-full h-full flex items-center justify-between px-4"
      }, [
        // Messaggio
        React.createElement('div', {
          key: 'message',
          className: "flex-1"
        }, [
          React.createElement('p', {
            key: 'text',
            className: "text-sm"
          }, gameState.showHint ? `💡 ${gameState.hintMessage}` : "Dove pensi che sia originario questo cibo?")
        ]),
        
        // Bottoni
        React.createElement('div', {
          key: 'buttons',
          className: "flex gap-2"
        }, [
          React.createElement('button', {
            key: 'hint',
            className: "px-3 py-1 bg-yellow-500 text-white rounded text-xs",
            onClick: actions.showHint
          }, "💡 Aiuto"),
          
          React.createElement('button', {
            key: 'skip',
            className: "px-3 py-1 bg-gray-500 text-white rounded text-xs",
            onClick: actions.nextRound
          }, "⏭️ Salta")
        ])
      ]);
    }
  }
};
```

## 🚀 Come Usare

### 1. Configurazione Singola
```javascript
import { simpleMapConfig } from './configs/mapConfig.js';

<Game customConfig={simpleMapConfig} />
```

### 2. Configurazione Combinata
```javascript
export const myFullConfig = {
  gameTitle: "IL MIO GIOCO",
  components: {
    ...mapboxConfig.components,
    ...customPhotoConfig.components,
    ...animatedNameConfig.components,
    ...customCompassConfig.components,
    ...customMessagesConfig.components
  }
};

<Game customConfig={myFullConfig} />
```

### 3. Configurazione Inline
```javascript
<Game customConfig={{
  components: {
    renderMap: (gameState, actions) => {
      return React.createElement('div', {
        className: "w-full h-full bg-red-500 rounded-lg flex items-center justify-center cursor-pointer",
        onClick: () => actions.makeGuess("Test Location")
      }, "La mia mappa personalizzata!");
    }
  }
}} />
```

## 🎮 Esempi Completi

Vedi il file `example-configs/componentConfigs.js` per esempi completi di ogni configurazione!

**Ora puoi personalizzare completamente ogni singolo riquadro del gioco!** 🎨