import { createPost } from "../api/posts/create.mjs";

export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const currentForm = event.target;
      const formData = new FormData(currentForm);
      const post = Object.fromEntries(formData.entries());

      let tagArray = [];
      const tagInputs = document.querySelectorAll("#tagInput");
      tagInputs.forEach((input) => {
        tagArray.push(input.value);
      });

      // send it to the API
      createPost(post);
    });
  }
}
