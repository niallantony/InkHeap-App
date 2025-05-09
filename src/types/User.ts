export interface FieldErrors {
    username?: string
    email?: string
    password?: string
    confirmPassword?: string
    user?: string
    [key: string]: string | undefined
}