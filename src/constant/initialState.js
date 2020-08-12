import { v1 as uuidv1 } from 'uuid';

const INITIAL_STATE = [
  {
    id: uuidv1(),
    title: 'Pirate of carribbean',
    category: 'Adventure',
  },
  {
    id: uuidv1(),
    title: 'Babies day out',
    category: 'kids',
  },
  {
    id: uuidv1(),
    title: 'Game of thrones',
    category: 'Action',
  },
  {
    id: uuidv1(),
    title: 'Blade runner',
    category: 'Sci-fi',
  },
  {
    id: uuidv1(),
    title: 'Ghost Buster',
    category: 'Horror',
  },
];

export default INITIAL_STATE;
