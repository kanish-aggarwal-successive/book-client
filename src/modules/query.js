import { gql } from "apollo-boost"

const GET_BOOK = gql`
    query ($_id: ID!){ 
        getBookById (_id: $_id) {
            _id
            author
            country
            language
            pages
            title
            year
    }       
}`


const GET_BOOKS = gql`
    query { 
        getBooks {
            _id
            author
            country
            language
            pages
            title
            year
    }       
}`


const ADD_BOOK = gql`
    mutation($author:String!, $country:String!, $language:String!, $pages: Int, $title:String!, $year: Int) {
        postBook(payload: {author:$author, country:$country, language:$language, pages:$pages, title:$title, year:$year}) {
            author
            country
            language
            pages
            title
            year
        }
    }
`


const DELETE_BOOK = gql`
    mutation ($_id: ID!){ 
        deleteBook (payload: {bookId: $_id}) {
            _id
            author
            country
            language
            pages
            title
            year
    }       
}`

export {
    GET_BOOK,
    GET_BOOKS,
    ADD_BOOK,
    DELETE_BOOK
}