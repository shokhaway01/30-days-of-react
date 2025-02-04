
import {
  addPostActionCreator,
  updatePostTextActionCreator,
} from "../../../Redux/profilePageReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";



let mapStateToProps = (state) =>{ return{
  newPostText:state.ProfilePage.newPostText,
  postData: state.ProfilePage.postData
} }

let mapDispatchToProps = (dispatch) =>{ return{
  updateNewPostText: (text) =>{
    dispatch(updatePostTextActionCreator(text));
  },
  addPost: () =>{
    dispatch(addPostActionCreator());
  }
} }

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);



export default MyPostsContainer;
