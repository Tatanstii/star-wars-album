import { create } from 'zustand';

type State = {
  appLoaded: boolean;
};

type Action = {
  setAppLoaded: (appLoaded: boolean) => void;
};

export const useAppLoaded = create<State & Action>((set) => ({
  appLoaded: true,
  setAppLoaded: (appLoaded) => set({ appLoaded }),
}));
