import React, { Component } from "react";
import trim from "trim";

class MessageBox extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
        this.state = {
            message: "",
            user: '',
        };
    }

    componentDidMount() {
        fetch('/getauth')
        .then(response=>response.json())
            .then(response => {
                this.setState({
                    user: response.name
                },console.log('ok',this.state.user));
            })
            .catch(error => {
                console.log(error);
            });
    }
    onChange(e) {
        this.setState({
            message: e.target.value
        });
    }
    // onKeyup(e) {
    //     const timestamp = Date.now();
    //     const sentAt = new Intl.DateTimeFormat("en-US", {
    //         year: "numeric",
    //         month: "2-digit",
    //         day: "2-digit",
    //         hour: "2-digit",
    //         minute: "2-digit",
    //         second: "2-digit"
    //     }).format(timestamp);
    //     if (e.keyCode === 13) {
    //         //&& trim(e.target.value) !== ''){
    //         e.preventDefault();
    //         let dbCon = this.props.db
    //             .database()
    //             .ref(`/chats/${this.props.chat_id}`);
    //         dbCon.push({
    //             //message: trim(e.target.value)
    //             message: e.target.value,
    //             sender_id: this.state.sender_id,
    //             date: sentAt
    //         });
    //         this.setState({
    //             message: ""
    //         });
    //     }
    // }
    onKeyup(e) {
        const chat_id=this.state.user;
        console.log(chat_id,'wqw')
        if (e.keyCode === 13 && trim(e.target.value) !== '') {
          e.preventDefault();
          let dbCon = this.props.db.database().ref(`/messages/Hussein Hammoud`);
          dbCon.push({
            message: trim(e.target.value),
            Key: this.state.user
          });
          this.setState({
            message: ''
          });
        }
      }
    render() {
        console.log(this.props.user);
        return (
            <form className="m-3">
                <textarea
                style={{height:50,width:500}}
                    className="form-control"
                    rows="3"
                    placeholder="Type a message"
                    cols="100"
                    onChange={this.onChange}
                    onKeyUp={this.onKeyup}
                    value={this.state.message}
                ></textarea>
            </form>
        );
    }
}

export default MessageBox;
