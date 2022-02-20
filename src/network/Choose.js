import { request } from "./HttpRequest";

export function getAllPrefix(){
    return request({
        url:"/getAllPrefix"
    })
}
export function getChooseByPrefix(prefix){
    return request({
        url:"/getAllChooseByPrefix",
        params:{
            prefix
        }
    })
}

export function insertChoose(choose) {
    return request({
        url:"/insertChoose",
        method:"post",
        params:{
              prefix: choose.prefix,
           content: choose.content
        }
    })
}

export function delChoose(id){
    return request({
        url:"delChoose",
        params:{
            id
        }
    })
}