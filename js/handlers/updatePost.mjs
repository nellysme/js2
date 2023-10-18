import { updatePost } from "../api/posts/index.mjs";
import { getPost } from "../api/posts/read.mjs";

export async function setUpdatePostListener() {
  const form = document.querySelector("#updatePost");
  if (!form) return; // Exit early if the form is not found

  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  const post = await getPost(id);

  const titleElement = form.querySelector("[name='title']");
  const bodyElement = form.querySelector("[name='body']");
  const tagsElement = form.querySelector("[name='tags']");
  const mediaElement = form.querySelector("[name='media']");

  if (titleElement && post.title) {
    titleElement.value = post.title;
  }

  if (bodyElement && post.body) {
    bodyElement.value = post.body;
  }

  if (tagsElement && post.tags) {
    tagsElement.value = post.tags;
  }

  if (mediaElement && post.media) {
    mediaElement.value = post.media;
  }

  form.addEventListener("submit", (event) => {
    
    event.preventDefault();
    const formData = new FormData(form);
    const updatedPost = Object.fromEntries(formData.entries());
    updatedPost.id = id;
    updatePost(updatedPost);
  });
}
