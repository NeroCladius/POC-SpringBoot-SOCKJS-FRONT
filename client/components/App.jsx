import React, {Component, Fragment} from 'react';
import SockJS from 'sockjs-client';
import Stomp from '@stomp/stompjs';

import Header from './header/Header.jsx';
import Container from "./container/Container.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";


let stompClient = null;

export default class App extends Component {

    constructor(props) {
        super(props);

        const socket = new SockJS('http://localhost:8080/chat');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, (frame) => {
            stompClient.subscribe('/topic/messages', (message) => {
                showMessage(JSON.parse(message.body));
                stompClient.send('/chat',{},null);
            })
        });



    };

    state = {
        isSidebarToggled: false
    };

    toggleSidebar = () => {
        this.setState({
            isSidebarToggled: !this.state.isSidebarToggled
        });
    };

    render() {
        return (
            <Fragment>
                <div>
                    <Header toggleSidebarCallback={this.toggleSidebar}/>
                    <Sidebar toggled={this.state.isSidebarToggled} toggleSidebarCallback={this.toggleSidebar}/>
                    <Container/>
                </div>
            </Fragment>
        );
    }
}