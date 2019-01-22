import axios from "axios";


export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 681186249b7562b325aad6169153c30339b3a750dab27729c7b93df0b7f317ef"
  } 
});

