import axios from "../utils/axios"

export const login = async(email,password) => {
    try{
        const response = await axios.post('/auth/login',{email,password});
        localStorage.setItem('token',response.data.token)
        return response.data
    }catch(error){
        throw error.response.data
    }
}

export const logout = () => {
    localStorage.removeItem('token');
};

export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};