# 🎮 Come Configurare il Gioco con JavaScript

## 🚀 Setup Veloce

### 1. Crea il tuo file di configurazione

```javascript
// config/myGame.js
export const myGameConfig = {
  gameTitle: "IL MIO GIOCO",
  maxRounds: 10,
  
  // I tuoi dati
  getFoodData: async (round) => {
    const foods = [
      { name: "Pizza", image: "/pizza.jpg", correctLocation: "Napoli", correctCountry: "🇮🇹 Italia" },
      // ... altri cibi
    ];
    return foods[round - 1];
  },
  
  // I tuoi callback
  onGuess: (guess, isCorrect) => {
    console.log(`Tentativo: ${guess}, Corretto: ${isCorrect}`);
  }
};
```

### 2. Usa la configurazione

```javascript
// Nel tuo componente
import { myGameConfig } from './config/myGame.js';

<Game customConfig={myGameConfig} />
```

## 📋 Opzioni Configurabili

### Impostazioni Base
```javascript
{
  gameTitle: "IL TUO TITOLO",           // Titolo del gioco
  maxRounds: 10,                       // Numero di round
  roundTimeLimit: 180,                 // Secondi per round
  maxPointsPerRound: 1000,            // Punteggio massimo
  attemptPenalty: 100,                // Penalità per tentativo
  showCompass: true,                  // Mostra bussola
  showHints: true,                    // Mostra suggerimenti
}
```

### Callback Principali
```javascript
{
  // Quando inizia un round
  onRoundStart: (round) => {
    console.log(`Round ${round} iniziato`);
    // Carica dati, prepara round, etc.
  },
  
  // Quando l'utente fa un tentativo
  onGuess: (guess, isCorrect) => {
    console.log(`Tentativo: ${guess}, Corretto: ${isCorrect}`);
    // Salva statistiche, aggiorna UI, etc.
  },
  
  // Quando il gioco finisce
  onGameComplete: (results) => {
    console.log("Gioco completato!", results);
    // Salva punteggio, mostra popup, etc.
  },
  
  // Quando scade il tempo
  onTimeUp: () => {
    console.log("Tempo scaduto!");
    // Gestisci timeout
  }
}
```

### Provider Dati
```javascript
{
  // Fornisci i dati del cibo per ogni round
  getFoodData: async (round) => {
    // OPZIONE 1: Da API
    const response = await fetch(`/api/foods/${round}`);
    const data = await response.json();
    
    return {
      name: data.name,
      image: data.image,
      correctLocation: data.origin,
      correctCountry: data.country,
      hints: data.hints || []
    };
    
    // OPZIONE 2: Dati statici
    const foods = [
      { name: "Pizza", image: "/pizza.jpg", correctLocation: "Napoli", correctCountry: "🇮🇹 Italia" }
    ];
    return foods[round - 1];
  }
}
```

### Calcolo Punteggio
```javascript
{
  calculateScore: (timeUsed, attempts, isCorrect) => {
    if (!isCorrect) return 0;
    
    const baseScore = 1000;
    const timeBonus = Math.max(0, 180 - timeUsed) * 3;
    const attemptPenalty = (attempts - 1) * 100;
    
    return Math.max(baseScore + timeBonus - attemptPenalty, 50);
  }
}
```

## 💾 Esempi di Integrazione

### Con API Esterna
```javascript
export const apiConfig = {
  getFoodData: async (round) => {
    try {
      const response = await fetch(`https://mia-api.com/foods/${round}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      return await response.json();
    } catch (error) {
      console.error("Errore API:", error);
      return fallbackFood;
    }
  }
};
```

### Con Database (Supabase)
```javascript
import { supabase } from './supabaseClient.js';

export const dbConfig = {
  getFoodData: async (round) => {
    const { data, error } = await supabase
      .from('foods')
      .select('*')
      .eq('round', round)
      .single();
    
    return data;
  },
  
  onGameComplete: async (results) => {
    await supabase
      .from('scores')
      .insert({ 
        score: results.reduce((sum, r) => sum + r.points, 0),
        rounds: results 
      });
  }
};
```

### Con localStorage
```javascript
export const localConfig = {
  onGuess: (guess, isCorrect) => {
    const stats = JSON.parse(localStorage.getItem('gameStats') || '[]');
    stats.push({ guess, isCorrect, timestamp: Date.now() });
    localStorage.setItem('gameStats', JSON.stringify(stats));
  },
  
  onGameComplete: (results) => {
    localStorage.setItem('lastGameScore', JSON.stringify(results));
  }
};
```

## 🔧 Personalizzazione Avanzata

### Messaggi Personalizzati
```javascript
{
  messages: {
    roundComplete: "Ottimo lavoro! 🎉",
    gameComplete: "Sei un campione! 🏆",
    timeUp: "Tempo scaduto! ⏰",
    correctGuess: "Perfetto! 🎯",
    incorrectGuess: "Riprova! 💪",
    hintMessage: (hint) => `💡 Suggerimento: ${hint}`,
  }
}
```

### Logica Personalizzata
```javascript
{
  onRoundStart: (round) => {
    // La tua logica personalizzata
    if (round === 1) {
      showWelcomeMessage();
    }
    
    // Carica dati specifici per round
    loadRoundSpecificData(round);
    
    // Aggiorna UI personalizzata
    updateCustomUI(round);
  }
}
```

## 🚀 Deploy e Produzione

### 1. Rimuovi i bottoni di debug
```javascript
// Nel file Game.tsx, rimuovi la sezione:
// {/* Bottone temporaneo per testare (rimuovi in produzione) */}
```

### 2. Configura i tuoi dati di produzione
```javascript
export const prodConfig = {
  getFoodData: async (round) => {
    // I tuoi dati di produzione
    return await fetchProductionData(round);
  },
  
  onGameComplete: async (results) => {
    // Salva in produzione
    await saveToProductionDB(results);
  }
};
```

### 3. Testa tutto
```javascript
// Test config
export const testConfig = {
  maxRounds: 3, // Round ridotti per test
  getFoodData: async (round) => {
    // Dati di test
    return testFoods[round - 1];
  }
};
```

Il sistema è ora completamente configurabile con JavaScript! 🎉