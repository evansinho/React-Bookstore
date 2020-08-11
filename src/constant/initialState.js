import { v1 as uuidv1 } from 'uuid';

const INITIAL_STATE = [
  {
    id: Math.round(100 * Math.random()),
    title: 'Pirate of carribbean',
    category: 'Adventure',
  },
  {
    id: Math.round(200 * Math.random()),
    title: 'Babies day out',
    category: 'kids',
  },
  {
    id: Math.round(300 * Math.random()),
    title: 'Game of thrones',
    category: 'Action',
  },
  {
    id: Math.round(400 * Math.random()),
    title: 'Blade runner',
    category: 'Sci-fi',
  },
  {
    id: Math.round(500 * Math.random()),
    title: 'Ghost Buster',
    category: 'Horror',
  },
];

export default INITIAL_STATE;