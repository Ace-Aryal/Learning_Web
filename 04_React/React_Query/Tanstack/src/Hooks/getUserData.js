import axios from "axios"

export default async function getUserData({ pageParam = 1 }) {
    console.log("page param", pageParam);


    const response = await axios.get(`https://api.github.com/users?since=${pageParam}&per_page=${10}
`)



    return response.data;



}