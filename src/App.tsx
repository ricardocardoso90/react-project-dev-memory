import './App.css';
import { useState, useEffect } from 'react';

import { Button } from './components/Button';
import { InfoItem } from './components/InfoItem';
import { GridItem } from './components/GridItem';

import { GridItemType } from './Types';
import { items } from './data/items';

import logoImage from './assets/devmemory_logo.png';
import logoRestart from './svgs/restart.svg';
import { formatTimeElapsed } from './helpers';

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => {
    resetAndCreateGrid();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) {
        setTimeElapsed(timeElapsed + 1);
      };
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  useEffect(() => {
    if (shownCount === 2) {
      const opened = gridItems.filter((item) => {
        return (item.shown === true);
      });
      if (opened.length === 2) {

        if (opened[0].item === opened[1].item) {
          const tmpGrid = [...gridItems];
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            };
          };
          setGridItems(tmpGrid);
          setShownCount(0);
        } else {
          setTimeout(() => {
            const tmpGrid = [...gridItems];
            for (let i in tmpGrid) {
              tmpGrid[i].shown = false;
            };
            setGridItems(tmpGrid);
            setShownCount(0);
          }, 1000);
        };


        setMoveCount((moveCount) => {
          return (moveCount + 1);
        })
      };
    };
  }, [shownCount, gridItems]);

  useEffect(() => {
    if (moveCount > 0 && gridItems.every((item) => item.permanentShown === true)) {
      setPlaying(false);
    };
  }, [moveCount, gridItems]);

  const resetAndCreateGrid = () => {
    // Passo 1: Resetar o Jogo.
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    // Passo 2: Criar o Grid.
    // 2.1: Criar um Grid vazio.
    const tempGrid: GridItemType[] = [];
    for (let i = 0; i < (items.length * 2); i++) {
      tempGrid.push({
        item: null,
        shown: false,
        permanentShown: false
      });
    };

    // 2.2: Preencher o Grid.
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
        while (pos < 0 || tempGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        };
        tempGrid[pos].item = i;
      };
    };

    // 2.3: Jogar no State.
    setGridItems(tempGrid);

    // Passo 3: Começar o Jogo.
    setPlaying(true);
  };

  const handleItemClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      const tmpGrid = [...gridItems]
      if (tmpGrid[index].permanentShown === false && tmpGrid[index].shown === false) {
        tmpGrid[index].shown = true;
        setShownCount(shownCount + 1);
      };

      setGridItems(tmpGrid);
    };
  };

  return (
    <div className='container'>

      <div className='info'>
        <a href="#" className='logo-link'>
          <img src={logoImage} width={200} alt="" />
        </a>

        <div className='info-area'>
          <InfoItem label='Tempo' value={formatTimeElapsed(timeElapsed)} />
          <InfoItem label='Movimentos' value={moveCount.toString()} />
        </div>

        <Button
          label='Reiniciar'
          icon={logoRestart}
          onClickProp={resetAndCreateGrid} />
      </div>

      <div className='grid-area'>
        <div className='grid'>
          {gridItems.map((item, index) => {
            return (
              <GridItem
                key={index}
                itemProp={item}
                onClickProp={() => handleItemClick(index)}
              />
            )
          })}
        </div>
      </div>

    </div>
  )
};

export default App;