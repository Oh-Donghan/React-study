import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

export interface ITodo {
  id: number;
  text: string;
}

interface IToDoState {
  // string으로써의 property (key)와, string array (value)로 이루어져 있다.
  [key: string]: ITodo[];
}

const { persistAtom } = recoilPersist();

export const toDoState = atom<IToDoState>({
  key: 'toDo',
  default: {
    'To Do': [],
    Doing: [],
    Done: [],
  },
  effects_UNSTABLE: [persistAtom],
});
