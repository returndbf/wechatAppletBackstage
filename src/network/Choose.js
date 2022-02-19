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
        data:{
               choose
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