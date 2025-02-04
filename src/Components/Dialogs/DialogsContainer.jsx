import React from 'react'

import { addMessageActionCreator, updateMessageTextActionCreator } from '../../Redux/dialogsPageReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = (props) => {


    
    
    
//     return (
//         <StoreContext.Consumer>
//             {(store) => {                    
                    
//                     let onChangeMessage = (text) =>{
//                         // props.updateMessageText(sms.current.value)
//                         store.dispatch(updateMessageTextActionCreator(text))
                        
//                     }
                    
//                     let addSms = (sms) => {
//                         store.dispatch(addMessageActionCreator());
//                         sms.current.value = "";
//                     }
                    
//                     return(
//                         <Dialogs updateMessageText={onChangeMessage} addSms={addSms} MessagesData={store.getState().DialogsPage.MessagesData} DialogsData={store.getState().DialogsPage.DialogsData}/>
//                     )
//             }}
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        MessagesData: state.DialogsPage.MessagesData,
        DialogsData: state.DialogsPage.DialogsData
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        updateMessageText: (text) =>{
            dispatch(updateMessageTextActionCreator(text))
        },
        addSms: (sms) => {
            dispatch(addMessageActionCreator());
            sms.current.value = "";
        }
    }
}

let DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer