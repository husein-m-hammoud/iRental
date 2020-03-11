import React, { Component } from "react";

class Message extends Component {
    render() {
        console.log(this.props.user);
        return (
            <div>
                {this.props.user == this.props.message.user ? (
                    <div>
                        <div className="chat-card-sender">
                            <div className="chat-msg">
                                {this.props.message.message}
                            </div>
                            <div className="chat-date">
                                {this.props.message.date}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div class="chat-content-right">
                        <div className="chat-card-receiver">
                            <div className="chat-msg">
                                {this.props.message.message}
                            </div>
                            <div className="chat-date">
                                {this.props.message.date}
                            </div>
                        </div>
                    </div>
                )}
                {/* <img src={`/images/msg.png`} className="chat-icon" /> */}
            </div>
        );
    }
}
export default Message;
