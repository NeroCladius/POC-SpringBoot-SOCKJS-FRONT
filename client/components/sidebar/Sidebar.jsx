import React, {Component} from 'react';
import {SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

export default class Sidebar extends Component {

    state = {
        toggled: this.props.toggled,
        firstList: [
            <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
            </ListItem>
        ]
    };

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.toggled !== this.state.toggled) {
            this.setState({ toggled: nextProps.toggled });
        }
    }

    render() {

        const sideList = (
            <div style={styles.list}>
                <List>{this.state.firstList}</List>
                <Divider/>
                <List>{this.state.firstList}</List>
            </div>
        );

        return (
            <div>
                <SwipeableDrawer
                    open={this.state.toggled}
                    onClose={this.props.toggleSidebarCallback}
                    onOpen={this.props.toggleSidebarCallback}
                >
                    <div
                        tabIndex={0}
                        role="button"
                    >
                        {sideList}
                    </div>
                </SwipeableDrawer>
            </div>
        );
    }

};