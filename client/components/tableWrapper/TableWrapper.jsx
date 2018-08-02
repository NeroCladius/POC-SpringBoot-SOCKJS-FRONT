import React, {Component} from 'react';
import {Paper, AppBar, Tabs, Tab, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';
import {red, blue, green} from '@material-ui/core/colors/'

const styles = {
    root: {
        flexGrow: 1
    },
    paper: {
        textAlign: 'center',
        marginTop: 20
    }
};

const CustomTableCell = {
    head: {
        backgroundColor: green,
        color: blue
    },
    body: {
        fontSize: 14,
    },
};

export default class TableWrapper extends Component {

    state = {
        value: 'one',
    };

    handleChange = (event, value) => {
        this.setState({
            value: value
        });
    };

    render() {

        return (
            <Paper style={styles.paper}>
                <div>
                    <AppBar position="static">
                        <Tabs value={this.state.value} onChange={this.handleChange} centered>
                            <Tab value="one" label="New Arrivals in the Longest Text of Nonfiction"/>
                            <Tab value="two" label="Item Two"/>
                            <Tab value="three" label="Item Three"/>
                        </Tabs>
                    </AppBar>
                    <div>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell classes={{head: CustomTableCell.head, body: CustomTableCell.body}}>Dessert (100g serving)</TableCell>
                                    <TableCell numeric>Calories</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key={1}>
                                    <TableCell component="th" scope="row">
                                        First Cell
                                    </TableCell>
                                    <TableCell numeric>
                                        Second Cell
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </Paper>
        )
    }
}
