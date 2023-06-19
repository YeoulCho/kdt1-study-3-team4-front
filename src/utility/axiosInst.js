import axios from "axios";

const axiosInst = axios.create({
    baseURL: "http://localhost:7777" ,
    //process.env.VUE_APP_BASE_URL,
    timeout: 2500,
});

const fastApiAxiosInst = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 4000
})
export default {axiosInst, fastApiAxiosInst};