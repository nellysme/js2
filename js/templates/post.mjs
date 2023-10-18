export function postTemplateA(postData) {
  return `<div class="post">${postData.title}</div>`;
}

export function postTemplateB(postData) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerText = postData.title;
  return post;
}

export function renderPostTemplate(postData, parent) {
  // To use with postTemplateA
  // parent.innerHTML += postTemplateA(postData);

  // To use with postTemplateB
  parent.append(postTemplateB(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateB));
}
