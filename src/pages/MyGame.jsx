// 🎮 LA TUA PAGINA GIOCO - PUNTO DI INGRESSO
import React from 'react';
import MyGameTemplate from '@/components/MyGameTemplate';
import MY_GAME_CONFIG from '@/config/myGameSetup';

const MyGame = () => {
  return <MyGameTemplate config={MY_GAME_CONFIG} />;
};

export default MyGame;