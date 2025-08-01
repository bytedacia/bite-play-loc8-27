# 🚀 SETUP GIOCO BACKEND + FRONTEND

## 🏗️ ARCHITETTURA COMPLETA

Il tuo gioco ora supporta:
- ✅ **Frontend**: React + UI configurabile  
- ✅ **Backend**: API + Database + Autenticazione
- ✅ **Supabase**: Integrazione nativa per backend

## 📁 STRUTTURA PROGETTO

```
src/
├── config/
│   └── myGameSetup.js       ← 🎯 Configurazione completa
├── services/
│   └── MyGameBackend.js     ← 🔗 Servizi backend
├── hooks/
│   └── useMyGame.js         ← 🎮 Logic frontend + backend
├── components/
│   └── MyGameTemplate.jsx   ← 🎨 UI del gioco
└── pages/
    └── MyGame.jsx           ← 🚀 Pagina principale
```

## 🔧 CONFIGURAZIONE BACKEND

### 1. API Endpoints
Nel tuo backend, crea questi endpoint:

```javascript
// 🔐 AUTENTICAZIONE
POST /api/my-game/auth/login
POST /api/my-game/auth/logout

// 🎮 GIOCO
GET  /api/my-game/rounds/:round     ← Dati round
POST /api/my-game/round-start       ← Inizio round
POST /api/my-game/guess             ← Tentativo giocatore
POST /api/my-game/validate          ← Validazione risposta
POST /api/my-game/complete          ← Fine gioco

// 📊 STATISTICHE
GET  /api/my-game/stats/player      ← Statistiche giocatore
GET  /api/my-game/leaderboard       ← Classifica

// 💾 PROGRESSI
GET  /api/my-game/progress          ← Carica progressi
POST /api/my-game/progress          ← Salva progressi

// 🗺️ SERVIZI
GET  /api/my-game/geocode/reverse   ← Coordinate → Nome
GET  /api/my-game/geocode/forward   ← Nome → Coordinate
```

### 2. Database Schema
Crea queste tabelle nel tuo database:

```sql
-- Giocatori
CREATE TABLE players (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE,
  email VARCHAR UNIQUE,
  password_hash VARCHAR,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Sessioni di gioco
CREATE TABLE game_sessions (
  id SERIAL PRIMARY KEY,
  player_id INTEGER REFERENCES players(id),
  total_score INTEGER,
  rounds_completed INTEGER,
  started_at TIMESTAMP,
  completed_at TIMESTAMP
);

-- Round di gioco
CREATE TABLE game_rounds (
  id SERIAL PRIMARY KEY,
  session_id INTEGER REFERENCES game_sessions(id),
  round_number INTEGER,
  food_name VARCHAR,
  correct_location VARCHAR,
  player_guess VARCHAR,
  is_correct BOOLEAN,
  score INTEGER,
  time_used INTEGER,
  attempts INTEGER
);

-- Progressi salvati
CREATE TABLE saved_progress (
  id SERIAL PRIMARY KEY,
  player_id INTEGER REFERENCES players(id),
  game_state JSONB,
  saved_at TIMESTAMP DEFAULT NOW()
);
```

## 🔗 CONFIGURAZIONE FRONTEND

### 1. Modifica `src/config/myGameSetup.js`:

```javascript
export const MY_GAME_CONFIG = {
  // 🔐 Autenticazione richiesta?
  requireAuth: true,
  
  // 🎮 I tuoi dati dal backend
  getFoodData: async (round) => {
    const response = await fetch(`/api/my-game/rounds/${round}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    });
    return await response.json();
  },
  
  // 🗺️ Mappa con backend
  mapConfig: {
    renderMap: (gameState, actions) => <TuaMappa 
      onMapClick={async (lat, lng) => {
        // Geocoding con il tuo backend
        const location = await MyGameBackend.reverseGeocode(lat, lng);
        actions.makeGuess(location, { lat, lng });
      }}
    />,
    
    calculateDistance: async (guess, correct) => {
      // Usa il tuo servizio backend per calcoli precisi
      const response = await fetch('/api/my-game/calculate-distance', {
        method: 'POST',
        body: JSON.stringify({ guess, correct })
      });
      const data = await response.json();
      return data.distance;
    }
  }
};
```

### 2. Usa i servizi backend:

```javascript
import { MyGameBackend } from '@/services/MyGameBackend';

// Login giocatore
const handleLogin = async () => {
  const result = await MyGameBackend.login(username, password);
  if (result.success) {
    console.log("Login riuscito!");
  }
};

// Carica statistiche
const stats = await MyGameBackend.getPlayerStats();
const leaderboard = await MyGameBackend.getLeaderboard();
```

## 🌐 UTILIZZO CON SUPABASE

Dato che hai Supabase attivo, puoi usarlo per:

### 1. **Edge Functions** (Backend Logic)
```javascript
// supabase/functions/game-logic/index.ts
export default async function(req: Request) {
  const { round } = await req.json();
  
  // La tua logica backend
  const foodData = await getFoodForRound(round);
  
  return new Response(JSON.stringify(foodData));
}
```

### 2. **Database** (Supabase Tables)
```sql
-- Nelle tue tabelle Supabase
CREATE TABLE game_data (
  id SERIAL PRIMARY KEY,
  round INTEGER,
  food_name TEXT,
  image_url TEXT,
  correct_location TEXT
);
```

### 3. **Authentication** (Supabase Auth)
```javascript
import { supabase } from '@/lib/supabase';

// Autenticazione Supabase
const { user } = await supabase.auth.signIn({
  email: email,
  password: password
});
```

## 🚀 DEPLOYMENT

### Backend:
- Deploy il tuo backend su Heroku, Railway, o Vercel
- Configura le variabili d'ambiente per database e API keys

### Frontend:
- Il frontend è già pronto in Lovable
- Cambia gli URL delle API da `/api/...` ai tuoi endpoint reali

### Database:
- Usa PostgreSQL (Supabase, Railway, Heroku)
- Importa lo schema delle tabelle
- Popola con i tuoi dati

## 🎯 QUICK START

1. **Crea il tuo backend** con gli endpoint sopra
2. **Configura il database** con le tabelle
3. **Modifica** `myGameSetup.js` con i tuoi URL
4. **Testa** il login e il caricamento dati
5. **Deploy** e gioca!

**Il tuo gioco fullstack è pronto! 🎮🚀**