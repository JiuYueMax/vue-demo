import axios from "../utils/request.js"
import path from "./path.js"

const api = {
    //诚品详情地址
    getChengPin(){
        return axios.get(path.baseUrl + path.chengpin)
    },
    getChengPin2(userId,password){
        return axios.post(path.baseUrl + path.chengpin2, {
            user_id: userId,
            password: password,
            verification_code: "crfvw"
          })
    }
}

export default api;