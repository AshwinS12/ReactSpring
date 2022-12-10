import axios from 'axios';
const React_API_BASE_URL='http://localhost:8086/api/react';

class ReactService{

    getReact(){
        return axios.get(React_API_BASE_URL);
    }
    addreact(react){
        return axios.post(React_API_BASE_URL,react);
    }
    getreactbyid(id){
        return axios.get(React_API_BASE_URL+'/'+id);
    }
    updatereact(react,id){
        return axios.put(React_API_BASE_URL+'/'+id,react);
    }
    deleteReact(id){
        return axios.delete(React_API_BASE_URL+'/'+id);
    }

}

export default new ReactService()