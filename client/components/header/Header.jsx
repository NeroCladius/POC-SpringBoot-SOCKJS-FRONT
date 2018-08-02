import React, {Component} from 'react';
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


export default class Header extends Component {

    render() {
        return (
            <div style={styles.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton style={styles.menuButton} color="inherit" aria-label="Menu" onClick={this.props.toggleSidebarCallback}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit" style={styles.flex}>
                            Photos
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}