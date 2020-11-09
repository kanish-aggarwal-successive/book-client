// import React, { Component } from 'react'
// import Button from '@material-ui/core/Button';
// import AddBook from './AddBook';

// class UpdateBook extends Component {
//     render() {
//         console.log(this.props.bookDetails)
//         return (
//             <div>
//                 <Button variant="contained" style={{marginTop: "20px"}}>Update</Button>
//                 <AddBook />
//             </div>
//         )
//     }
// }

// export default UpdateBook

import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function UpdateBook(props) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState(props.bookDetails.title);
  const [author, setAuthor] = React.useState(props.bookDetails.author);
  const [language, setLanguage] = React.useState(props.bookDetails.language);
  const [country, setCountry] = React.useState(props.bookDetails.country);
  const [pages, setPages] = React.useState(props.bookDetails.pages);
  const [year, setYear] = React.useState(props.bookDetails.year);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="contained" style={{marginTop: "20px"}} onClick={handleClickOpen}>
        Update
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To make changes, please update the information.
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Title"
            fullWidth
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Author"
            fullWidth
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Language"
            fullWidth
            value={language}
            onChange={e => setLanguage(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Country"
            fullWidth
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Pages"
            fullWidth
            value={pages}
            onChange={e => setPages(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Year"
            fullWidth
            value={year}
            onChange={e => setYear(e.target.value)}
          />
          
        </DialogContent>
        <DialogActions style={{marginTop: "20px"}}>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UpdateBook