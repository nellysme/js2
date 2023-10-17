import { setRegisterFormListner } from "./handlers/register.mjs";
import { setLoginFormListner } from "./handlers/login.mjs";

const path = location.pathname;

if (path === "/index.html") {
  setLoginFormListner();
} else if (path === "/register/index.html") {
  setRegisterFormListner();
}
