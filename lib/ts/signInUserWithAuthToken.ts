import TokenStore from "./TokenStore";
import { server } from "../config";


const signInUserWithAuthToken = async () => {
  const token = TokenStore.getToken();
  if (!token) return
  const res = await fetch(`${server}/api/users/login/auth`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      token: token
    }
  })
  const data = await res.json();

  if (data.data){
    return {
      email: data.data.email,
      ref: data.ref
    }
  }
  
  return false;

}

export default signInUserWithAuthToken;