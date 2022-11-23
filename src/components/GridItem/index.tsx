import './styles.css';
import { GridItemType } from '../../Types';
import { items } from '../../data/items';

import b7Svg from '../../svgs/b7.svg';

type Props = {
  itemProp: GridItemType;
  onClickProp: () => void;
};

export const GridItem = ({ itemProp, onClickProp }: Props) => {
  return (
    <div
      className='box-icon'
      onClick={onClickProp}>

      {!itemProp.permanentShown && !itemProp.shown &&
        <img className='icon-b7' src={b7Svg} alt="" width={40} style={{ opacity: .5 }} />
      }

      {(itemProp.permanentShown || itemProp.shown) && itemProp.item !== null &&
        <img className='icon-b7' src={items[itemProp.item].icon} alt="" width={40} />
      }
    </div>
  )
};