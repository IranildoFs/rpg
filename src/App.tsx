import React from 'react';
import {useEffect} from 'react';
import * as C from './App.styles';
import { Character } from './components/Character';
import {useCharacter} from './hooks/useCharacter'
const App = () =>  {

  const char = useCharacter();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  }, []);

  const handleKeyDown = (e:KeyboardEvent)=>{
    switch(e.code){
      case 'keyA':
      case 'ArrowLeft':
        char.moveLeft();
      break;
      case 'keyW':
      case 'ArrowUp':
        char.moveUp();
      break;
      case 'keyD':
      case 'ArrowRight':
        char.moveRight();
      break;
      case 'keyS':
      case 'ArrowDown':
      char.moveDown();
    }
  };

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side}></Character>
      </C.Map>
      <button onClick={()=>char.moveLeft()}>Esquerda</button>
      <button onClick={()=>char.moveRight()}>Direita</button>
      <button onClick={()=>char.moveUp()}>Cima</button>
      <button onClick={()=>char.moveDown()}>Baixo</button>
    </C.Container>
  );
}

export default App;
