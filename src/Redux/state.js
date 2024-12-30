import { useState } from "react";

let store = {
  _state: {
    // Данная ветка относится к компоненте Profile

    ProfilePage: {
      // ДАнные постов, айдишник, Текст, количество лайков

      postData: [
        { id: 1, message: "Hello", likesCount: 15 },
        { id: 2, message: "Aslonov 5-6ta chiqib qolar dedi", likesCount: 20 },
        { id: 3, message: "Shoh u're awesome", likesCount: 30 },
        { id: 4, message: "I,m your fan!!", likesCount: 990 },
        {
          id: 5,
          message:
            "lorem ipsum dolor sit amet vinca visca barcs visca cataloniya",
          likesCount: 0,
        },
      ],

      // А тут мы ловим значение нового поста в том же месте

      newPostText: "",
    },

    // Данная ветка служит для компоненты Диалогов

    DialogsPage: {
      // А тут мы храним имена контактов и их айдишки

      DialogsData: [
        { id: 1, name: "Shohjaxon" },
        { id: 2, name: "Aleksandr" },
        { id: 3, name: "Mamlakat" },
        { id: 4, name: "Otabek" },
        { id: 5, name: "Shayxislomjon" },
      ],

      // И тут мы храним  Сообщения и их айдишки

      MessagesData: [
        { id: 1, message: "-Шох почему пропал" },
        { id: 2, message: "-Привет" },
        { id: 3, message: "-Го сегодня в компы?" },
        { id: 4, message: "-Братан го в зал?" },
        { id: 5, message: "Конечно" },
      ],

      newMessageData: "",
    },
  },
  getState() {
    return this._state;
  },
  Render() {
    // Пустая функция для отлова внешней функции
    console.log("---");
  },
  subscribe(observe) {
    // debugger;
    this.Render = observe;
  },
  updatePostText(newText) {
    console.log(this._state, "");
    this._state.ProfilePage.newPostText = newText;
    this.Render(this._state);
  },
  updateMessageText(newText) {
    this._state.DialogsPage.newMessageData = newText;
    this.Render(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 0,
      message: this._state.DialogsPage.newMessageData,
    };

    if (newMessage.message === "" || newMessage.message === " ") {
      alert("Нельзя отправить пустое сообщение!");
    } else {
      this._state.ProfilePage.postData.unshift(newMessage);
    }
    this._state.DialogsPage.MessagesData.push(newMessage);
    this.Render(this._state);
  },
  addPost: () => {
    console.log(this, "This")
    let newPost = {
      id: 0,
      message: this._state.ProfilePage.newPostText,
      likesCount: 0,
    };

    if (newPost.message === "" || newPost.message === " ") {
      alert("Нельзя создать пустой пост!");
    } else {
      this._state.ProfilePage.postData.unshift(newPost);
    }

    this._state.ProfilePage.newPostText = "";
    this.Render(this._state);
  },
};

export default store;
window.store = store;



// --------------------------




let shohObj = {
  name: 'Shoh',
  age: 19,
  height: 187,
}
  let { name, age, height } =  {shohObj};
  name = "Andrey";


  let arr = [1,2,3,4,5,6,7,8,9]

  let [0,1,2,3,4,5,6,7,8] = arr


;let useState = (value) =>{
  let useState = [
    value,
    function(){

    }
  ]

  return useState
}
const functions = [ () => {}, () => {}, function x() {} ]

let [func1,func2,func3]= functions

  let [state, setState] = useState(0)


  console.log(state);
  

  console.log(shohObj.name);
  // console.log(age);
  // console.log(height);
  