import './App.css';
import { InfoItem } from './components/InfoItem';
import { Button } from './components/Button';

import logoImage from './assets/devmemory_logo.png';
import logoRestart from './svgs/restart.svg';

const App = () => {

  const resetGrid = () => {

  };

  return (
    <div className='container'>

      <div className='info'>
        <a href="#" className='logo-link'>
          <img src={logoImage} width={200} alt="" />
        </a>

        <div className='info-area'>
          <InfoItem label='Tempo' value='00:00' />
          <InfoItem label='Movimentos' value='0' />
        </div>

        <Button label='Reiniciar' icon={logoRestart} onClick={resetGrid} />
      </div>

      <div className='grid-area'>
        Área do Grid.
      </div>

    </div>
  )
};

export default App;