import { create } from "zustand";
import {FilterState} from "../types/interface.ts";



export const useFilter = create<FilterState>((set) => ({
    filter: 'all',
    setFilter: (value: string) => set({ filter: value }),
}));
