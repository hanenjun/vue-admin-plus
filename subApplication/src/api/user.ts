import request from './request'
export interface USER_LOGIN {
    msg: string;
    token: string;
}

export type Response<T = any> = {
    code: number
    result: T
}

export type RequestUserlogin = { username: string; password: string }

export function login(data:RequestUserlogin ): Promise<Response<USER_LOGIN>> {
    return request({
        url: '/api/login',
        method: 'post',
        data
    })
}