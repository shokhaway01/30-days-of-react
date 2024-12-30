// Main State - тут хранятся данные всего проекта "Пока что"
let state = {

  // Данная ветка относится к компоненте Profile

    ProfilePage:{

      // ДАнные постов, айдишник, Текст, количество лайков

        postData:[
            {id:1, message:"Hello",likesCount:15},
            {id:2, message:"Aslonov 5-6ta chiqib qolar dedi",likesCount:20},
            {id:3, message:"Shoh u're awesome",likesCount:30},
            {id:4, message:"I,m your fan!!",likesCount:990},
            {id:5, message:"lorem ipsum dolor sit amet vinca visca barcs visca cataloniya",likesCount:0},
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
            { id: 5, name: "Shayxislomjon" }
          ],

      // И тут мы храним  Сообщения и их айдишки
      
          MessagesData: [
            { id: 1, message: "-Шох почему пропал" },
            { id: 2, message: "-Пошли тусить, будут телки" },
            { id: 3, message: "-Го сегодня в компы?" },
            { id: 4, message: "-Ты изменился, раньше ты не был такой" },
            { id: 5, message: "Я устал", }
          ]
    }
    
}
// Коллбэк функция для своего рода импорта функции из файла индек жс без циклической зависимости
export const subscribe = (observe) => {
  Render = observe;
}
// Эта функция 
export let Render = () =>{
  // Пустая функция для отлова внешней функции
}
// Функция для обновления значений в инпуте чтобы оно работало с помошь. бизнесс логики
export let updatePostText = (newText) =>{
  state.ProfilePage.newPostText = newText;
  Render(state)
}
// Тут и по называнию понятно мы можем добавить сообщения
export let addMessage = (messageValue) => {

  let newMessage = {
    id: 0,
    message: messageValue
  }

  state.DialogsPage.MessagesData.push(newMessage);
  Render(state);
}
// Точно такой же случай и с постами
export let addPost = () => {

  let newPost = {
    id:0,
    message: state.ProfilePage.newPostText,
    likesCount: 0
  };

  if(newPost.message === ""|| newPost.message === " "){
    alert("Нельзя создать пустой пост!")
  }else{
    state.ProfilePage.postData.unshift(newPost)
  }

  state.ProfilePage.newPostText = "";
  Render(state);
}

  
export default state;
