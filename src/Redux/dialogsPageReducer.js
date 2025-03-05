const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";


let inition = {
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
}

export const dialogsReducer = (state = inition, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      state.newMessageData = action.newText;
      return state
    case ADD_MESSAGE:
      let newMessage = {
        id: 0,
        message: state.newMessageData,
      };


      let stateCopy = {...state}
      stateCopy.MessagesData = [...state.MessagesData]

      if (newMessage.message === "" || newMessage.message === " ") {
        alert("Нельзя отправить пустое сообщение!");
      } else {
        stateCopy.MessagesData.push(newMessage);
        stateCopy.newMessageData = ""
      }
      return stateCopy
    default:
        return state;
  }

//   if (action.type === UPDATE_MESSAGE_TEXT) {
//     state.newMessageData = action.newText;

//     console.log(action.newText);
//   } else if (action.type === ADD_MESSAGE) {
//     let newMessage = {
//       id: 0,
//       message: state.newMessageData,
//     };

//     if (newMessage.message === "" || newMessage.message === " ") {
//       alert("Нельзя отправить пустое сообщение!");
//     } else {
//       state.MessagesData.push(newMessage);
//     }
//   }

//   return state;
};


export let updateMessageTextActionCreator = (message) => {
  return {
    type: UPDATE_MESSAGE_TEXT,
    newText: message,
  };
};

export let addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE
  };
};