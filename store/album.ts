import { Album, Character, Film, Starship } from '@/types/album';
import { create } from 'zustand';

type State = Album;

type Action =
  | {
      type: 'SET_CHARACTERS';
      payload: Character[];
    }
  | {
      type: 'SET_STARSHIPS';
      payload: Starship[];
    }
  | {
      type: 'SET_FILMS';
      payload: Film[];
    };

export const useAlbum = create<State>((set) => ({
  characters: [],
  starships: [],
  films: [],
  dispatch: (action: Action) => {
    switch (action.type) {
      case 'SET_CHARACTERS':
        set({ characters: action.payload });
        break;
      case 'SET_STARSHIPS':
        set({ starships: action.payload });
        break;
      case 'SET_FILMS':
        set({ films: action.payload });
        break;
    }
  },
}));
