//Declaring variables to our html elements.
let form = document.getElementById("form");
let input = document.getElementById("inputs");
let message = document.getElementById("message");
let posts = document.getElementById("posts");

//Prevents the default behavior when the form is submitted.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");

  //The formValidation function is invoked everytime the button is  clicked.
  formValidation();
});

//A simple function to ensure that no blank posts are submitted.

let formValidation = () => {
  if (input.value === "") {
    message.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("success");
    message.innerHTML = "";
    acceptData();
  }
};

//If the text area has a  message, this function stores the message as an object.
let data = {};
let acceptData = () => {
  data["text"] = input.value;
  console.log(data);

  createPost();
};

//function is used to create posts using the below HTMl format.
let createPost = () => {
  posts.innerHTML += `
     <div>
            <p>${data.text}</p>
            <span class="options">
              <i onclick="editPost(this)" class="fas fa-edit"></i>
              <i onclick = "deletePost(this)" class="fas fa-trash-alt"></i>
            </span>
          </div>
  `;
  input.value = "";
};

//function for deleting a post.
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

//function for editing a post.
let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
