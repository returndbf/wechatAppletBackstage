import { request } from "./HttpRequest";

export function getAllBlogs(){
    return request({
        url:"/selectAllBlogs"
    })
}