import { ReactComponent as KitchenIcon } from './icons/kitchen.svg';
import { ReactComponent as BedIcon } from './icons/bed.svg';
import { ReactComponent as BathroomIcon } from './icons/bathroom.svg';
import { ReactComponent as TVIcon } from './icons/tv.svg';
import { ReactComponent as CDIcon } from './icons/cd.svg';
import { ReactComponent as AirConditionerIcon } from './icons/ac.svg';
import { ReactComponent as FreezerIcon } from './icons/freezer.svg';
import { ReactComponent as RadioIcon } from './icons/radio.svg';
import { ReactComponent as HobIcon } from './icons/hob.svg';
import { ReactComponent as GasIcon } from './icons/gas.svg';
import { ReactComponent as MicrowaveIcon } from './icons/microwave.svg';
import { ReactComponent as WaterIcon } from './icons/water.svg';
import { ReactComponent as ToiletIcon } from './icons/toilet.svg';


export const detailsNamesMap = {
  CD: 'CD',
  TV: 'TV',
  airConditioner: 'Air conditioner',
  bathroom: 'Bathroom',
  beds: 'beds',
  freezer: 'Freezer',
  gas: 'Gas',
  hob: 'hob',
  kitchen: 'kitchen',
  microwave: 'Microwave',
  radio: 'Radio',
  shower: 'Shower',
  toilet: 'Toilet',
  water: 'Water',
};

export const detailsIconsMap = {
  CD: <CDIcon />,
  TV: <TVIcon width={20} height={20} />,
  airConditioner: <AirConditionerIcon />,
  bathroom: <BathroomIcon width={20} height={20} viewBox="0 0 25 25" />,
  beds: <BedIcon />,
  freezer: <FreezerIcon />,
  gas: <GasIcon />,
  hob: <HobIcon />,
  kitchen: <KitchenIcon />,
  microwave: <MicrowaveIcon />,
  radio: <RadioIcon />,
  shower: <BathroomIcon width={20} height={20} viewBox="0 0 25 25" />,
  toilet: <ToiletIcon />,
  water: <WaterIcon />,
};
