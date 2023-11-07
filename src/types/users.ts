export enum UserRole {
  STUDENT = "student",
  TRAINER = "trainer",
  ADMIN = "admin",
}

export type User = {
  id?: string
  email: string
  password: string
  role: UserRole
  imageUrl?: string
}
