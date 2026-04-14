import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IHistoryItem {
  vin: string;
  modelyear?: number;
}

interface VinHistoryStore {
  history: IHistoryItem[];
  addToHistory: (item: IHistoryItem) => void;
}

export const useVinHistoryStore = create<VinHistoryStore>()(
  persist(
    (set) => ({
      history: [],
      addToHistory: (item) =>
        set((state) => ({
          history: [item, ...state.history.filter((h) => h.vin !== item.vin)].slice(0, 3),
        })),
    }),
    { name: "vin-history" },
  ),
);