import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DELETE_BOOK } from '../modules/query';
import * as compose from 'lodash.flowright';
import { graphql } from 'react-apollo';


function DeleteBook(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const refreshPage = () => {
        window.location.reload(false);
    }

    const deleteBook = () => {
        props.DELETE_BOOK({
            variables: {
                _id: props.id
            }
        })
        refreshPage();
    }


    return (
        <div>
            <i className="far fa-trash-alt" onClick={handleClickOpen} variant="outlined" color="primary"></i>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Delete Book"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this book?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                    </Button>
                    <Button color="primary" onClick={deleteBook} >
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


export default compose(
    graphql(DELETE_BOOK, { name: "DELETE_BOOK" })
)(DeleteBook)