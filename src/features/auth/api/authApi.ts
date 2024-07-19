import axios from 'axios'

const instance = axios.create({
    // baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    baseURL: '/auth-api/',
    withCredentials: true,
    headers: {
        'api-key': 'e254debc-6d96-40e9-9b2c-f64e713ccafa',
    },
})

export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: boolean
}

export type FieldErrorType = {
    field: string
    error: string
}

export type ResponseDataType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: FieldErrorType[]
    data: D
}

export const authApi = {
    login(data: LoginParamsType) {
        return instance.post<ResponseDataType<{ userId: number }>>('auth/login', data)
    },
    logout() {
        return instance.delete<ResponseDataType>('auth/login')
    },
    me() {
        return instance.get<ResponseDataType<{ id: number; email: string; login: string }>>('auth/me')
    },
}
