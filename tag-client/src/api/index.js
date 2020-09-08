
import ajax from "./ajax";

//请求后台数据接口

export const tagList = (tag) => {
       return ajax('/index',{},'GET')

}

export const addTag = (tag) => {
       return ajax('/index',{tag},'POST')

}

export const updateTag = (tag) => {
       return ajax('/index',{tag},'PUT')
}

export const deleteTag = (index) => {
       return ajax('/index',{index},'DELETE')
}



