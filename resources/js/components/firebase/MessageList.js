import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import _ from 'lodash';

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      error: null,
      isLoaded: false,
      message: '',
      user: ''
    };
    this.getData=this.getData.bind(this);
    let app = this.props.db.database().ref('messages');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }
  componentDidMount(e) {
    this._isMounted = true;
    fetch("/getauth")
      .then(result => result.json())
      .then((results) => {
        if (this._isMounted) {
          this.setState({
            isLoaded: true,
            user: results.name
          })
        }
      },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        })
  }
  getData(values) {
    const chat_id = 'Hussein Hammoud';
    let messagesVal = values[chat_id];
    let messages = _(messagesVal)
      .keys()
      .map(messageKey => {
        let cloned = _.clone(messagesVal[messageKey]);
        cloned.key = messageKey;
        return cloned;
      })
      .value();
    this.setState({
      messages: messages
    });
  }
  printMessages() {
    return this.state.messages.map((msg, index) =>
      this.props.user === msg.user ? (
        <div className="mine group-messages" key={index}>
          <div className="group-message last">
            <p>{msg.message}</p>
          </div>
        </div>
      ) : (
          <div className="yours group-messages" key={index}>
            <small className="text-dark" style={{ marginLeft: "10px" }}>
              {msg.key}
            </small>
            <div className="group-message last">
              <p>{msg.message}</p>
            </div>
          </div>
        )
    );
  }
  render() {
    console.log(this.state.messages)
    let messageNodes = this.state.messages.map((msg, index) =>{
        return(
      this.state.user === msg.Key ? (
        <div className="mine group-messages" key={index}>
          <div className="group-message last">
            <p>{msg.message}</p>
          </div>
        </div>
      ) : (
          <div className="yours group-messages" key={index}>
            <div className="group-message last">
            <small className="text-dark" style={{ marginLeft: "10px" }}>
              {msg.Key}:
            </small>
            
              <p>{msg.message}</p>
            </div>
          </div>
        )
    
      );}
    );
    // this.state.messages.map((message) => {
    //   return (
    //     <div >
    //       <div >
    //         {message.Key}: <Message message={message.message} />
    //       </div>
    //     </div>
    //   )
    // });
    return (
      <div className="chatlist">
        {messageNodes}
      
      </div>
    );
  }
}export default MessageList;





// import React, { Component } from "react";
// import Message from "./Message";
// //import { GiftedChat } from "react-web-gifted-chat";
// import _ from "lodash";

// class MessageList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             messages: []
//         };
//         this.getmessagesFromFireBase();
//     }

//     componentDidUpdate(prevProps) {
//         if (prevProps.chat_id !== this.props.chat_id) {
//             this.getmessagesFromFireBase();
//         }
//     }

//     getmessagesFromFireBase() {
//         let chatDisplayed = `/chats/${this.props.chat_id}`;
//         let app = this.props.db.database().ref(chatDisplayed);
//         app.on("value", snapshot => {
//             this.getData(snapshot.val());
//         });
//     }

//     getData(values) {
//         let messagesVal = values;
//         let messages = _(messagesVal)
//             .keys()
//             .map(messageKey => {
//                 let cloned = _.clone(messagesVal[messageKey]);
//                 cloned.key = messageKey;
//                 return cloned;
//             })
//             .value();
//         this.setState({
//             messages: messages
//         });
//     }

//     render() {
//         console.log(this.props.user);
//         let messageNodes = this.state.messages.map(message => {
//             return (
//                 <div className="m-3">
//                     <div className="chat-card">
//                         <div className="card-content">
//                             <Message message={message} user={this.props.user} />
//                         </div>
//                     </div>
//                 </div>
//             );
//         });
//         return <div>{messageNodes}</div>;
//     }
// }

// export default MessageList;
