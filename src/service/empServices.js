import axios from "axios"
import axiosInstance from "../components/AxiosInstance/Instance";

let empServices={
     regiUser:async (payload) => {
          try {
               // let data=await axios.post("http://localhost:5000/api/user/register",payload)
               let data=await axiosInstance.post('/register',payload)
               console.log(data);
               return data
          } catch (error) {
               console.log(error);
               return error
          }   
     }
}

export default empServices