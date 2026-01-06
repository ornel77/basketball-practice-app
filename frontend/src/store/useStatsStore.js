import { create } from "zustand";
import { axiosInstance } from "../utils/axios";
import toast from "react-hot-toast";

export const useStatsStore = create((set) => ({
  stats: [],
  lastCreatedStat: null,
  isCreating: false,
  isLoading: false,

  registerStat: async (data) => {
    set({ isCreating: true });
    try {
      const res = await axiosInstance.post(`/stats/user`, data);
      console.log("registerStat store", res.data);
      set((state) => ({
        stats: [...state.stats, res.data.data],
        lastCreatedStat: res.data.data,
      }));
      return true
    } catch (error) {
      console.log("error in register stat store", error);
      toast.error(error.response.data.message);
      return false
    } finally {
      set({ isCreating: false });
    }
  },

  fetchStats: async () => {
    set({ isLoading: true });
    try {
      const res = await axiosInstance.get("/stats");
      set({ stats: res.data.data });
    } catch (error) {
      console.log("error in fetching stats", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
