import axios from "axios";
import { jwtAuthStore } from "@/store/jwtAuthStore.js";

export default {

    
    jwtLogin (username, password) {
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("refresh_token");
        
        const formData = {
            username:username,
        password:password,
    };
    
    axios.defaults.headers.common["Authorization"] = "";
    axios.defaults.baseURL = "http://127.0.0.1:8000/";

      axios

        .post("api/token/", formData)
        .then((response) => {
            console.log(response);
          if (response.status !== 200) {
            throw new TypeError("Invalid response from server");
          }

          //jwtAuthStore.userAccessToken = response.data.access;
          //jwtAuthStore.$store.commit("userAccessToken", response.data.access_token);
          //jwtAuthStore.userAccessToken = response.data.access;
          //jwtAuthStore.setRefreshToken(response.data.refresh);

            sessionStorage.setItem("access_token", response.data.access);
            sessionStorage.setItem("refresh_token", response.data.refresh);




        })
    

}


}