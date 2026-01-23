import { create } from "zustand";
import { axiosInstance } from "../utils/axios";
import { useAuthStore } from "./useAuthStore";

export const useUserStore = create((set) => ({
  isUpdating: false,

  updateProfile: async (data) => {
    set({isUpdating: true})
    try {
      const res = await axiosInstance.put("/users/update", data)
      useAuthStore.getState().setAuthUser(res.data.data)
      console.log("updateProfileStore",res.data.data)
      return true
    } catch (error) {
      console.log("error in updateProfile", error);
      return false
    } finally {
      set({ isUpdating: false });
    }
  },

}));