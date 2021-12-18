import axios from "axios"


const inst = axios.create({
    baseURL: "https://swipeart.herokuapp.com/",
    //https://swipeart.herokuapp.com/
})

export default inst;