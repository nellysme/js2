import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

const path = location.pathname;

console.log(path)

if (path === "/index.html") {
  listeners.setLoginFormListner();
} else if (path === "/register/") {
  listeners.setRegisterFormListner();
} else if (path === '/post/create/'){
  listeners.setCreatePostFormListener();
} else if (path === '/post/edit/') {

  listeners.setUpdatePostListener();
}

//async function testTemplate() {
//  const posts = await postMethods.getPosts();
//  const container = document.querySelector("#post");
//  templates.renderPostTemplates(posts, container);
//}
//
//testTemplate();
