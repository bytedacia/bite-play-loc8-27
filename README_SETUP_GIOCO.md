# 🎮 SETUP DEL TUO GIOCO PERSONALIZZATO

## 🚀 COME IMPLEMENTARE IL TUO GIOCO

Quando esporti questo progetto nel tuo IDE, segui questi semplici passi per implementare il tuo gioco:

### 1. 📝 CONFIGURA IL TUO GIOCO
Apri il file `src/config/myGameSetup.js` e sostituisci:

```javascript
// ========== CONFIGURAZIONE BASE ==========
gameTitle: "IL MIO GIOCO FANTASTICO", // Il tuo titolo
maxRounds: 15, // I tuoi round

// ========== I TUOI DATI ==========
getFoodData: async (round) => {
  // Sostituisci con la tua API o dati
  const response = await fetch(`https://mia-api.com/data/${round}`);
  return await response.json();
},
```

### 2. 🗺️ AGGIUNGI LA TUA MAPPA
Nel file `src/config/myGameSetup.js`, sezione `mapConfig.renderMap`:

```javascript
renderMap: (gameState, actions) => {
  // Sostituisci con il tuo componente mappa
  return <TuaMappa 
    onClick={(coordinates) => {
      // La tua logica
      actions.makeGuess(coordinates);
    }}
  />;
},
```

### 3. 🖼️ AGGIUNGI I TUOI COMPONENTI
Sostituisci i componenti in `components`:

```javascript
components: {
  renderPhoto: (gameState) => <TuaFoto src={gameState.currentFood?.image} />,
  renderFoodName: (gameState) => <TuoTitolo text={gameState.currentFood?.name} />,
  renderCompass: (gameState) => <TuoStrumento />,
}
```

### 4. 📊 PERSONALIZZA LA LOGICA
Implementa le tue funzioni:

```javascript
// Il tuo calcolo punteggio
calculateScore: (timeUsed, attempts, isCorrect) => {
  return tuaFormulaPunteggio(timeUsed, attempts, isCorrect);
},

// Le tue callback
onGuess: (guess, isCorrect) => {
  salvaSuDatabase(guess, isCorrect);
},
```

## 📁 STRUTTURA DEI FILE

```
src/
├── config/
│   └── myGameSetup.js       ← 🎯 CONFIGURA QUI IL TUO GIOCO
├── hooks/
│   └── useMyGame.js         ← 🔄 Logica del gioco
├── components/
│   └── MyGameTemplate.jsx   ← 🎮 Template UI del gioco
└── pages/
    └── MyGame.jsx           ← 🚀 Pagina principale
```

## 🛠️ ESEMPI PRATICI

### Esempio Mappa Mapbox:
```javascript
mapConfig: {
  renderMap: (gameState, actions) => {
    return <MapboxMap 
      onMapClick={(lat, lng) => {
        const locationName = reverseGeocode(lat, lng);
        actions.makeGuess(locationName);
      }}
    />;
  }
}
```

### Esempio Dati da API:
```javascript
getFoodData: async (round) => {
  const response = await fetch(`/api/foods/${round}`);
  const data = await response.json();
  return {
    name: data.nome,
    image: data.immagine,
    correctLocation: data.origine,
    correctCountry: data.paese
  };
}
```

### Esempio Calcolo Punteggio:
```javascript
calculateScore: (timeUsed, attempts, isCorrect) => {
  if (!isCorrect) return 0;
  
  const baseScore = 1000;
  const timeBonus = Math.max(0, 180 - timeUsed) * 5;
  const attemptPenalty = (attempts - 1) * 100;
  
  return Math.max(baseScore + timeBonus - attemptPenalty, 100);
}
```

## 🎯 QUICK START

1. **Esporta il progetto** nel tuo IDE
2. **Apri** `src/config/myGameSetup.js`
3. **Sostituisci** `getFoodData` con i tuoi dati
4. **Aggiungi** la tua mappa in `renderMap`
5. **Personalizza** i componenti
6. **Testa** visitando `/my-game`

## 🔗 ROUTING

Per usare il tuo gioco, aggiungi questa route in `src/App.tsx`:

```javascript
import MyGame from '@/pages/MyGame';

// Nel routing:
<Route path="/my-game" element={<MyGame />} />
```

## 💡 SUGGERIMENTI

- **Inizia semplice**: Prima configura i dati, poi aggiungi mappa e componenti
- **Testa spesso**: Ogni modifica, testa subito nel browser
- **Usa console.log**: Per debuggare la tua logica
- **Salva progressivamente**: Non cercare di fare tutto insieme

## 🆘 HELP

Se qualcosa non funziona:
1. Controlla la console del browser (F12)
2. Verifica che tutte le funzioni ritornino i dati corretti
3. Testa una configurazione alla volta

**Buona fortuna con il tuo gioco! 🎮🚀**