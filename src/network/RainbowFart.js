import { request } from "./HttpRequest";
export function getHomeBanner(){
    return request({
        url:"/getBannerImg"
    })
}