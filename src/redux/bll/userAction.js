import * as axios from "axios";
/* const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API_KEY": "82b1b798-07fa-4600-8780-1b2011b6dfef"
    }
}); */
const instance  = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
   
})
export const usersAPI = {
    getUserInfo(currentPage = 1, pageNumber = 10) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageNumber}`)
            .then(response => {
                return response.data;
            });

    }
}
