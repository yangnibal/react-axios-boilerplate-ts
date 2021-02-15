import axios from 'axios'
import { ResponseData, ErrorData } from '../types'

export const defaultUrl = "http://localhost:3000"

export const getToken = () => {
    const token = localStorage.getItem("token")
    return token
}

export const Get = (endpoint: string, onSuccess: (res: ResponseData) => void, onError: (res: ErrorData) => void) => {
    axios.get(defaultUrl+endpoint, {
        headers: {
            Authorization: `Token ${getToken()}`
        }
    })
    .then((res: ResponseData) => {
        onSuccess(res)
    })
    .catch((err: ErrorData) => {
        onError(err)
    })
}

export const Post = (endpoint: string, data: FormData, onSuccess: (res: ResponseData) => void, onError: (err: ErrorData) => void) => {
    axios.post(defaultUrl+endpoint, data, {
        headers: {
            Authorization: `Token ${getToken()}`
        }
    })
    .then((res: ResponseData) => {
        onSuccess(res)
    })
    .catch((err: ErrorData) => {
        onError(err)
    })
}

export const Put = (endpoint: string, data: FormData, onSuccess: (res: ResponseData) => void, onError: (err: ErrorData) => void) => {
    axios.put(defaultUrl+endpoint, data, {
        headers: {
            Authorization: `Token ${getToken()}`
        }
    })
    .then((res: ResponseData) => {
        onSuccess(res)
    })
    .catch((err: ErrorData) => {
        onError(err)
    })
}

export const Patch = (endpoint: string, data: FormData, onSuccess: (res: ResponseData) => void, onError: (err: ErrorData) => void) => {
    axios.patch(defaultUrl+endpoint, data, {
        headers: {
            Authorization: `Token ${getToken()}`
        }
    })
    .then((res: ResponseData) => {
        onSuccess(res)
    })
    .catch((err: ErrorData) => {
        onError(err)
    })
}

export const Delete = (endpoint: string, onSuccess: (res: ResponseData) => void, onError: (err: ErrorData) => void) => {
    axios.delete(defaultUrl+endpoint, {
        headers: {
            Authorization: `Token ${getToken()}`
        }
    })
    .then((res: ResponseData) => {
        onSuccess(res)
    })
    .catch((err: ErrorData) => {
        onError(err)
    })
}