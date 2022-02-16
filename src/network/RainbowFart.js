import { request } from "./HttpRequest";
export function getSentence(page,pageSize=5){
    return request({
        url:"/rainbowFart/RainbowFart",
        params:{
            page,
            pageSize,
        }
    })
}