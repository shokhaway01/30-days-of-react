import { Render } from "../render";

let state = {
    ProfilePage:{
        postData:[
            {id:1, message:"Hello",likesCount:15},
            {id:2, message:"Aslonov 5-6ta chiqib qolar dedi",likesCount:20},
            {id:3, message:"Shoh u're awesome",likesCount:30},
            {id:4, message:"I,m your fan!!",likesCount:990},
            {id:5, message:"lorem ipsum dolor sit amet vinca visca barcs visca cataloniya",likesCount:0},
          ]
    },
    DialogsPage: {

        DialogsData: [
            { id: 1, name: "Shohjaxon" },
            { id: 2, name: "Aleksandr" },
            { id: 3, name: "Mamlakat" },
            { id: 4, name: "Otabek" },
            { id: 5, name: "Shayxislomjon" }
          ],
          MessagesData: [
            { id: 1, message: "-Шох почему пропал" },
            { id: 2, message: "-Пошли тусить, будут телки" },
            { id: 3, message: "-Го сегодня в компы?" },
            { id: 4, message: "-Ты изменился, раньше ты не был такой" },
            { id: 5, message: "Я устал", }
          ]
    }
    
}


export let addMessage = (messageValue) => {

  let newMessage = {
    id: 0,
    message: messageValue
  }

  state.DialogsPage.MessagesData.push(newMessage);
  Render(state);
}

export let addPost = (PostMessage) => {

  let newPost = {
    id:0,
    message: PostMessage,
    likesCount: 0
  };

  state.ProfilePage.postData.unshift(newPost)
  Render(state);
}

  
export default state;
