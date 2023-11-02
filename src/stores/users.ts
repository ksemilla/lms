import { create } from "zustand"
import { User, UserRole } from "../types"
import { v4 as uuidv4 } from "uuid"

interface UserStoreState {
  users: User[]
  getUserByEmail: (email: string) => User | undefined
  create: (user: User) => void
}

export const useUserStore = create<UserStoreState>()((set, get) => ({
  users: [
    {
      id: uuidv4(),
      email: "student@student.com",
      role: UserRole.STUDENT,
    },
    {
      id: uuidv4(),
      email: "trainer@trainer.com",
      role: UserRole.TRAINER,
    },
    {
      id: uuidv4(),
      email: "admin@admin.com",
      role: UserRole.ADMIN,
    },
  ],

  getUserByEmail: (email) => get().users.find((u) => u.email === email),
  create: (user) =>
    set((state) => ({ ...state, users: [...state.users, user] })),
}))
