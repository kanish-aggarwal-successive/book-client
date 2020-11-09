import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { GET_BOOK } from '../modules/query'
import DeleteBook from './DeleteBook'
import UpdateBook from './UpdateBook'

class BookDetails extends Component {

    displayBookDetails() {
        const { getBookById } = this.props.data

        if (getBookById) {
            return (
                <div>
                    <h2>{getBookById.title}</h2>
                    <p>Author: {getBookById.author}</p>
                    <p>Language: {getBookById.language}</p>
                    <p>Country: {getBookById.country}</p>
                    <p>Pages: {getBookById.pages}</p>
                    <p>Year: {getBookById.year}</p>
                    <UpdateBook bookDetails={getBookById} />
                    <DeleteBook id={getBookById._id} />
                </div>
            )
        } else {
            return (
                <div>No book selected...</div>
            )
        }
    }

    render() {
        return (
            <div id="book-details">
                {this.displayBookDetails()}
            </div>
        )
    }
}

export default graphql(GET_BOOK, {
    options: (props) => {
        return {
            variables: {
                _id: props.bookId
            }
        }
    }
})(BookDetails)