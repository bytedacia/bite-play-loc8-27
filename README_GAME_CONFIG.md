# Configurazione del Gioco Food Guess

Questo documento spiega come personalizzare facilmente tutte le funzioni del gioco.

## 🎮 Come Personalizzare il Gioco

### 1. Configurazione Base

```typescript
import Game from "@/pages/Game";
import { GameConfig } from "@/types/game";

const customConfig: Partial<GameConfig> = {
  gameTitle: "IL MIO GIOCO",
  maxRounds: 10,
  roundTimeLimit: 180, // secondi
  maxPointsPerRound: 1000,
  showCompass: true,
  showHints: true,
};

<Game customConfig={customConfig} />
```

### 2. Callback Personalizzabili

```typescript
const customConfig: Partial<GameConfig> = {
  // Quando inizia un round
  onRoundStart: (round) => {
    console.log(`Round ${round} iniziato`);
    // Carica dati dal tuo backend
  },
  
  // Quando l'utente fa un tentativo
  onGuess: (guess, isCorrect) => {
    console.log(`Tentativo: ${guess}, Corretto: ${isCorrect}`);
    // Salva statistiche
  },
  
  // Quando il gioco finisce
  onGameComplete: (results) => {
    console.log("Gioco completato!", results);
    // Salva punteggio finale
  },
  
  // Quando scade il tempo
  onTimeUp: () => {
    console.log("Tempo scaduto!");
    // Gestisci timeout
  }
};
```

### 3. Provider di Dati Personalizzato

```typescript
const customConfig: Partial<GameConfig> = {
  // Fornisci i tuoi dati
  getFoodData: async (round) => {
    const response = await fetch(`/api/food/${round}`);
    const data = await response.json();
    
    return {
      name: data.name,
      image: data.image,
      correctLocation: data.origin,
      correctCountry: data.country,
      hints: data.hints || []
    };
  }
};
```

### 4. Calcolo Punteggio Personalizzato

```typescript
const customConfig: Partial<GameConfig> = {
  calculateScore: (timeUsed, attempts, isCorrect) => {
    if (!isCorrect) return 0;
    
    const baseScore = 1000;
    const timeBonus = Math.max(0, 180 - timeUsed) * 3;
    const attemptPenalty = (attempts - 1) * 100;
    
    return Math.max(baseScore + timeBonus - attemptPenalty, 50);
  }
};
```

## 🔧 Componenti Configurabili

### Mappa
Il riquadro mappa può essere sostituito con il tuo componente:
```typescript
// Nel componente Game.tsx, sostituisci il contenuto del Card "Map container"
```

### Foto del Cibo
Le foto vengono caricate automaticamente da `getFoodData()`:
```typescript
const foodData = await getFoodData(currentRound);
// foodData.image viene mostrato automaticamente
```

### Bussola 3D
Puoi abilitare/disabilitare e sostituire:
```typescript
const config = {
  showCompass: true, // mostra/nascondi
  // Sostituisci il contenuto nel Card "Compass container"
};
```

### Messaggi e Suggerimenti
Personalizza tutti i messaggi:
```typescript
const config = {
  messages: {
    roundComplete: "Round finito! 🎉",
    gameComplete: "Hai vinto! 🏆",
    timeUp: "Tempo finito! ⏰",
    correctGuess: "Bravo! 🎯",
    incorrectGuess: "Riprova! 🤔",
    hintMessage: (hint) => `💡 Aiuto: ${hint}`,
  }
};
```

## 🚀 Esempi di Integrazione

### Integrazione con Supabase
```typescript
const supabaseConfig: Partial<GameConfig> = {
  getFoodData: async (round) => {
    const { data } = await supabase
      .from('foods')
      .select('*')
      .eq('round', round)
      .single();
    
    return {
      name: data.name,
      image: data.image_url,
      correctLocation: data.origin_city,
      correctCountry: data.origin_country,
      hints: data.hints
    };
  },
  
  onGameComplete: async (results) => {
    await supabase
      .from('game_results')
      .insert({
        user_id: user.id,
        total_score: results.reduce((sum, r) => sum + r.points, 0),
        rounds: results
      });
  }
};
```

### Integrazione con API Esterna
```typescript
const apiConfig: Partial<GameConfig> = {
  getFoodData: async (round) => {
    const response = await fetch(`https://myapi.com/foods/${round}`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    
    return {
      name: data.food_name,
      image: data.photo_url,
      correctLocation: data.origin.city,
      correctCountry: data.origin.country,
      hints: data.clues
    };
  }
};
```

## 🎨 Personalizzazione UI

### Stili Personalizzati
Il gioco usa il design system di Tailwind. Puoi:
1. Modificare i colori in `index.css`
2. Creare nuove varianti nei componenti UI
3. Sostituire i componenti con i tuoi

### Layout Responsivo
Il layout è già responsive e si adatta automaticamente a:
- Desktop: Griglia 4 colonne (mappa 3 + sidebar 1)
- Mobile: Layout verticale singola colonna

## 🔍 Debug e Testing

### Modalità Debug
I bottoni di debug sono inclusi per testare:
```typescript
// Rimuovi in produzione
{gameState.gameStarted && !gameState.gameCompleted && (
  <Button onClick={actions.nextRound}>
    [DEBUG] Simula Round Successivo
  </Button>
)}
```

### Logging
Aggiungi console.log nei callback per tracciare il comportamento:
```typescript
const config = {
  onRoundStart: (round) => console.log('Round started:', round),
  onGuess: (guess, correct) => console.log('Guess:', guess, correct),
};
```

## 📱 Deployment

1. **Rimuovi i bottoni di debug**
2. **Configura i tuoi provider di dati**
3. **Testa tutte le funzionalità**
4. **Deploy** 🚀

Il gioco è ora completamente configurabile e pronto per la tua integrazione!