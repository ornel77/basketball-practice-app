import { create } from "zustand";
import { axiosInstance } from "../utils/axios";

export const useStatsStore = create((set) => ({
  stats: [],
  isCreating: false,
  isLoading: false,

  registerStat: async (data) => {
    set({isCreating: true})
    try {
      const res = await axiosInstance.post(`/stats/user`, data);
      console.log("registerStat store", res.data);
      set((state) =>({
        stats: [...state.stats, res.data.data]
      }))
    } catch (error) {
      console.log("error in register stat store", error)
    } finally {
      set({isCreating: false})
    }
  },

  fetchStats: async () => {
    set({isLoading: true})
    try {
      const res = await axiosInstance.get('/stats')
      set({stats: res.data.data})
    } catch (error) {
      console.log("error in fetching stats", error)
    } finally {
      set({isLoading: false})
    }
  }
}));
