import { create } from "zustand"
import { User } from "../types"

interface AuthState {
  user?: User | null

  setUser: (user: User) => void
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  user: null,
  setUser: (user) => set((state) => ({ ...state, user })),
}))
