const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

// Тут мы задаем дефолтный стэйт и используем его по умолчанию.
// Так же тут хранятся такие функции для отлова экшенов такие как
// addPostActionCreator и updatePostTextActionCreator которые возвращают нам экшены
// Экшены это объекты с свойством TYPE по умолчанию


let inition = {
  // ДАнные постов, айдишник, Текст, количество лайков

  postData: [
    { id: 1, message: "Hello", likesCount: 15 },
    { id: 2, message: "Aslonov 5-6ta chiqib qolar dedi", likesCount: 20 },
    { id: 3, message: "Shoh u're awesome", likesCount: 30 },
    { id: 4, message: "I,m your fan!!", likesCount: 990 },
    { id: 5, message: "lorem ipsum dolor sit amet vinca visca barcs visca cataloniya", likesCount: 0,}
  ],

  // А тут мы ловим значение нового поста в том же месте

  newPostText: "",
};

// Тут мы рассматриваем какие изменения происходят 
// с нашим стейтом после действий со стороны пользователя

export const profileReducer = (state = inition, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 0,
        message: state.newPostText,
        likesCount: 0,
      };

      if (newPost.message === "" || newPost.message === " ") {
        alert("Нельзя создать пустой пост!");
      } else {
        state.postData.unshift(newPost);
      }

      state.newPostText = "";
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export let addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export let updatePostTextActionCreator = (message) => {
  return {
    type: UPDATE_POST_TEXT,
    newText: message,
  };
};
