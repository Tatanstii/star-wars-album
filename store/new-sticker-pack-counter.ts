import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
  timer: number;
  interval: NodeJS.Timeout | null;
  finished: boolean;
};

type Action = {
  startTimer: () => void;
  setFinished: (finished: boolean) => void;
};

const INITIAL_TIMER = 60 * 1000;
const INTERVAL = 1000;

export const useNewStickerPackCounter = create<State & Action>()(
  persist(
    (set, get) => ({
      timer: INITIAL_TIMER,
      interval: null,
      finished: true,
      startTimer: () =>
        set({
          interval: setInterval(() => {
            if (get().timer <= 0) {
              clearInterval(get().interval as NodeJS.Timeout);
              set(() => ({
                timer: INITIAL_TIMER,
                interval: null,
                finished: true,
              }));
              return;
            }
            set((state) => ({
              timer: state.timer - INTERVAL,
            }));
          }, INTERVAL),
          finished: false,
        }),
      setFinished: (finished) => set({ finished }),
    }),
    {
      name: 'new-sticker-pack-counter',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
