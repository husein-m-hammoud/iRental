import React, { Component } from "react";
import MessageList from "./MessageList";
import MessageBox from "./MessageBox";
import Header from "./Header";
//import  "./styles.css";
import firebase from "firebase";
import ReactDOM from "react-dom";
// import "./chatstyles.css";


class Inbox extends Component {
    constructor(props) {
        super(props);
        var config = {
            apiKey: "AIzaSyDIqE7HTfnI5vNRw0dSh9keD99goqEHQYM",
            authDomain: "huseinhammoud-3e678.firebaseapp.com",
            databaseURL: "https://huseinhammoud-3e678.firebaseio.com",
            projectId: "huseinhammoud-3e678",
            storageBucket: "huseinhammoud-3e678.appspot.com",
            messagingSenderId: "136087058485",
            appId: "1:136087058485:web:c0a2b4669c8dcda436597c",
            measurementId: "G-7SMZP7RT0Z"
        };
        this.state = {
            chat_id: 0,
            conversations: [],
            convo_user: ""
        };
        // this.handlechat = this.handlechat.bind(this);
       
            firebase.initializeApp(config);
        
        //firebase.initializeApp(config);
    }

    // componentDidMount() {
    //     axios({
    //         method: "get",
    //         url: "/getConvoList",
    //         config: {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    //             }
    //         }
    //     })
    //         .then(response => {
    //             //console.log(response.data);
    //             this.setState({
    //                 conversations: response.data
    //             });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    //     this.getUserIdFromUrl();
    //     //console.log(this.state.conversations);
    // }

    getUserIdFromUrl() {
        let str = window.location.href;
        var user_id = str.substring(str.lastIndexOf("/") + 1, str.length);
        if (user_id && Number(user_id)) {
            this.addToChatList(user_id);
        }
    }

    // addToChatList(user_id) {
    //     axios({
    //         method: "get",
    //         url: `/addChatId/${user_id}`,
    //         config: {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    //             }
    //         }
    //     })
    //         .then(response => {
    //             //console.log(response.data.chatObject);
    //             if (!response.data.flag) {
    //                 this.setState({
    //                     conversations: [
    //                         response.data.chatObject,
    //                         ...this.state.conversations
    //                     ],
    //                     chat_id: response.data.chatObject.chat_id,
    //                     convo_user: response.data.chatObject
    //                 });
    //             } else {
    //                 //console.log(response.data.chatObject);
    //                 this.setState({
    //                     chat_id: response.data.chatObject.chat_id,
    //                     convo_user: response.data.chatObject
    //                 });
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }

    handlechat(contact) {
        this.setState({
            chat_id: contact.chat_id,
            convo_user: contact
        });
    }

    render() {
        //console.log(this.state.conversations);
        console.log("ooo");
        return (
            <div className="container">
                <div className="row">
                   
                    <div className="col-md-8">
                        <div className="column is-3"></div>
                        <div className="column is-6">
                            
                                <div>
                                 
                                    <MessageList
                                        db={firebase}
                                       
                                       
                                    />
                                </div>
                            
                        </div>

                        <div className="column is-3"></div>
                        <div className="column is-6">
                           
                                <MessageBox
                                    db={firebase}
                                    
                                />
                           
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

 export default Inbox;

// if (document.getElementById("inbox")) {
//     ReactDOM.render(<Inbox />, document.getElementById("inbox"));
// }
