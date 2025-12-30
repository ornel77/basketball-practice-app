import {create} from 'zustand'
import { axiosInstance } from '../utils/axios'

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigninUp: false,
  isLogginIn: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get('/auth/check')
      set({authUser: res.data})
    } catch (error) {
      console.log("error in checkAuth", error)
      set({authUser: null})
    } finally {
      set({isCheckingAuth: false})
    }
  },

  signup: async (data) => {
    set({isSigninUp: true})
    try {
      const res = await axiosInstance.post('/auth/signup', data)
      set({authUser: res.data})
    } catch (error) {
      console.log("error in signup", error)
      set({authUser: null})
    } finally {
      set({isSigninUp: false})
    }
  },

  login: async (data) => {
    set({isLogginIn: true})
    try {
      const res = await axiosInstance.post("/auth/login", data)
      set({authUser: res.data})
    } catch (error) {
      console.log("error in login", error)
    } finally {
      set({isLogginIn: false})
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout")
      set({authUser: null})
    } catch (error) {
      console.log("error in logout", error)
    }
  }
}))