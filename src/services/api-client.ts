import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
   
    params: {
        key: '98f679f279894506a37746fd07b84760'
       
    }
})

