export enum UserRole {
  STUDENT = "student",
  TRAINER = "trainer",
  ADMIN = "admin",
}

export type User = {
  id?: string
  email: string
  role: UserRole
}
