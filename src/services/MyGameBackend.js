// 🔗 SERVIZI BACKEND PER IL TUO GIOCO
// Qui gestisci tutte le chiamate al tuo backend

export class MyGameBackend {
  
  static baseUrl = '/api/my-game'; // Il tuo endpoint base
  
  // 🔐 AUTENTICAZIONE
  static async login(username, password) {
    try {
      const response = await fetch(`${this.baseUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      
      const data = await response.json();
      
      if (data.token) {
        localStorage.setItem('auth_token', data.token);
        localStorage.setItem('player_id', data.playerId);
        return { success: true, data };
      }
      
      return { success: false, error: data.message };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  
  static logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('player_id');
  }
  
  static isAuthenticated() {
    return !!localStorage.getItem('auth_token');
  }
  
  // 🎮 DATI DEL GIOCO
  static async getRoundData(round) {
    try {
      const response = await fetch(`${this.baseUrl}/rounds/${round}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        }
      });
      
      return await response.json();
    } catch (error) {
      console.error('Errore caricamento round:', error);
      throw error;
    }
  }
  
  static async saveGameSession(gameData) {
    try {
      const response = await fetch(`${this.baseUrl}/sessions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(gameData)
      });
      
      return await response.json();
    } catch (error) {
      console.error('Errore salvataggio sessione:', error);
      throw error;
    }
  }
  
  // 📊 STATISTICHE
  static async getPlayerStats() {
    try {
      const response = await fetch(`${this.baseUrl}/stats/player`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        }
      });
      
      return await response.json();
    } catch (error) {
      console.error('Errore caricamento statistiche:', error);
      return null;
    }
  }
  
  static async getLeaderboard(limit = 10) {
    try {
      const response = await fetch(`${this.baseUrl}/leaderboard?limit=${limit}`);
      return await response.json();
    } catch (error) {
      console.error('Errore caricamento classifica:', error);
      return [];
    }
  }
  
  // 🗺️ SERVIZI MAPPA
  static async reverseGeocode(lat, lng) {
    try {
      const response = await fetch(`${this.baseUrl}/geocode/reverse?lat=${lat}&lng=${lng}`);
      const data = await response.json();
      return data.locationName;
    } catch (error) {
      console.error('Errore geocoding:', error);
      return "Località sconosciuta";
    }
  }
  
  static async forwardGeocode(locationName) {
    try {
      const response = await fetch(`${this.baseUrl}/geocode/forward?location=${encodeURIComponent(locationName)}`);
      const data = await response.json();
      return { lat: data.lat, lng: data.lng };
    } catch (error) {
      console.error('Errore geocoding:', error);
      return { lat: 0, lng: 0 };
    }
  }
  
  // 🎯 VALIDAZIONE RISPOSTA
  static async validateGuess(guess, round, coordinates = null) {
    try {
      const response = await fetch(`${this.baseUrl}/validate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify({ guess, round, coordinates })
      });
      
      const data = await response.json();
      return {
        isCorrect: data.correct,
        distance: data.distance,
        score: data.score,
        feedback: data.feedback
      };
    } catch (error) {
      console.error('Errore validazione:', error);
      return { isCorrect: false, distance: 0, score: 0 };
    }
  }
  
  // 💾 SALVATAGGIO PROGRESSI
  static async saveProgress(gameState) {
    try {
      const response = await fetch(`${this.baseUrl}/progress`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify({
          playerId: localStorage.getItem('player_id'),
          gameState,
          timestamp: new Date().toISOString()
        })
      });
      
      return await response.json();
    } catch (error) {
      console.error('Errore salvataggio progressi:', error);
    }
  }
  
  static async loadProgress() {
    try {
      const response = await fetch(`${this.baseUrl}/progress`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        }
      });
      
      return await response.json();
    } catch (error) {
      console.error('Errore caricamento progressi:', error);
      return null;
    }
  }
}