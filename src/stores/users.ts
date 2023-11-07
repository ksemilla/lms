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
      password: "student",
      imageUrl:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: uuidv4(),
      email: "trainer@trainer.com",
      role: UserRole.TRAINER,
      password: "trainer",
    },
    {
      id: uuidv4(),
      email: "admin@admin.com",
      role: UserRole.ADMIN,
      password: "admin",
    },
  ],

  getUserByEmail: (email) => get().users.find((u) => u.email === email),
  create: (user) =>
    set((state) => ({ ...state, users: [...state.users, user] })),
}))
