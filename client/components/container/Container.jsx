import React, {Component} from 'react';
import {Paper, Grid} from '@material-ui/core';
import {AppBar, Tabs, Tab, } from '@material-ui/core';

const styles = {
    root: {
        flexGrow: 1
    }
};

import TableWrapper from '../tableWrapper/TableWrapper.jsx'

export default class Container extends Component {

    render() {
        return (
            <div style={styles.root}>
                <Grid container spacing={24}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs={10}>
                        <TableWrapper/>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
            </div>
        );
    }


};