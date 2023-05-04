import axios from "axios";
import qs from "querystring";

//参考文档：https://www.kancloud.cn/yunye/axios/234845/

const instance = axios.create({
    //网络请求的公共配置
    timeout:5000
})

const errorHandle = (status,info) =>{
    switch(status){
        case 400:
            console.log("语义有误");
            break;
        case 401:
            console.log("服务器认证失败");
            break;    
        case 403:
            console.log("服务器拒绝访问");
            break;
        case 404:
            console.log("地址错误");
            break;      
        case 500:
            console.log("服务器遇到意外");
            break;     
        case 502:
            console.log("服务器无相应");
            break;
        default:
            console.log(info);
    }
}


//发送数据之前
instance.interceptors.request.use(
    config =>{
        if(config.method === "post"){
            config.data = qs.stringify(config.data);
        }
        return config;
    },
    error => Promise.reject(error),
)

//获取数据之前
instance.interceptors.response.use(
	response => response.status === 200 ? Promise.resolve(response) :Promise.reject(response),
	error =>{
		const { response } = error;
        //错误的处理才是我们需要最关注的
		errorHandle(response.status,response.info)
	}
)

export default instance;