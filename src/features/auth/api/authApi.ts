import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'api-key': 'e978cee6-9052-4e00-8ce2-2c6237679e1a',
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
        return instance.post<ResponseDataType<{ userId: number }>>(`auth/login`, data)
    },
    logout() {
        return instance.delete<ResponseDataType>(`auth/login`)
    },
    me() {
        return instance.get<ResponseDataType<{ id: number, email: string, login: string }>>(`auth/me`)
    },
}
