import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
  timer: number;
  interval: NodeJS.Timeout | null;
};

type Action = {
  startTimer: () => void;
};

const INITIAL_TIMER = 60 * 1000;
const INTERVAL = 1000;

export const useNewStickerPackCounter = create<State & Action>()(
  persist(
    (set, get) => ({
      timer: INITIAL_TIMER,
      interval: null,
      startTimer: () =>
        set({
          interval: setInterval(() => {
            if (get().timer <= 0) {
              clearInterval(get().interval as NodeJS.Timeout);
              set((state) => ({
                timer: INITIAL_TIMER,
                interval: null,
              }));
              return;
            }
            set((state) => ({
              timer: state.timer - INTERVAL,
            }));
          }, INTERVAL),
        }),
    }),
    {
      name: 'new-sticker-pack-counter',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
