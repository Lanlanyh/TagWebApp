import axios from 'axios'
export default function ajax(url, data, type ='GET'){
    if(type==='GET'){
        return axios.get(url)
    }else if(type==='POST'){
        return axios.post(url,data,{contentType :'application/x-www-form-urlencoded'})
    }else if(type==='PUT'){
        return axios.put(url,data,{contentType :'application/x-www-form-urlencoded'})
    }else{
        return axios.post(url+'/delete',data,{contentType :'application/x-www-form-urlencoded'})
    }
}