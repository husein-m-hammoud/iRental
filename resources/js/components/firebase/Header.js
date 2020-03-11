import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-brand">
                    <a
                        className="navbar-item chat-title"
                        href={`/showUser/${this.props.title.user_id}`}
                    >
                        {this.props.title.name}
                    </a>
                </div>
            </nav>
        );
    }
}
export default Header;
