import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/social/auth/register";
const method = "post";

export async function register(profile) {
  const registerURL = API_SOCIAL_URL + action;
  const body = JSON.stringify(profile);

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json"
    },
    method,
    body
  });

  const results = await response.json();
  alert("You are now registered")
  
  return result
}
