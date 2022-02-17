import { request } from "./HttpRequest";
import { RainbowFart } from "../components/rainbowFart/RainbowFart";
export function getSentence(page,pageSize=8){
    return request({
        url:"/rainbowFart/RainbowFart",
        params:{
            page,
            pageSize,
        }
    })
}
export function addSentence(rainbowFart){
        return request({
            url:"/rainbowFart/rainbowFartSentence/rainbowFart",
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            method:"post",
            params:{
                adder:rainbowFart.adder,
                author:rainbowFart.author,
                sentence:rainbowFart.sentence
            }
        })
}

export function deleteSentence(id){
        return request({
            url:`http://101.42.103.236:8080/rainbowFart/rainbowFartSentence/${id}`,
            method:"put"
        })
}