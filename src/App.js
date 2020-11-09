import React, { Component } from 'react'
import AddBook from './components/AddBook'
import BookList from './components/BookList'

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>Book List</h1>
        <BookList />
        <AddBook />
      </div>
    )
  }
}

export default App