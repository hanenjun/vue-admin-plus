import request from './request'
export interface USER_INFO {
    msg: string;
    userData: object
}

export type Response<T = any> = {
    code: number
    result: T
}

export type RequestUserInfo = { token: string }

export function getUserinfo(data: RequestUserInfo): Promise<Response<USER_INFO>> {
    return request({
        url: '/api/userinfo',
        method: 'post',
        data
    })
}