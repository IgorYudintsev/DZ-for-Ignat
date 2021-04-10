import axios from "axios";

export type ApiType={
    errorText: string,
    info:string
}

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com',
   })


export const Api = {
    getApi() {
        return instance.post<ApiType>('/auth/test',{success: true});
    }
}