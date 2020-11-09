import React, { Component } from 'react';
import { ADD_BOOK } from './../modules/query'
import { graphql } from 'react-apollo'
import * as compose from 'lodash.flowright'

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            language: '',
            country: '',
            pages: 0,
            year: 0
        };
    }

    submitForm(e) {
        if (this.state.title !== "" || this.state.author !== "" || this.state.language !== "" || this.state.country !== "" || this.state.pages !== 0 || this.state.year !== 0) {
            this.props.ADD_BOOK({
                variables: {
                    title: this.state.title,
                    author: this.state.author,
                    language: this.state.language,
                    country: this.state.country,
                    pages: parseInt(this.state.pages, 10),
                    year: parseInt(this.state.year, 10)
                }
            })
        }

        e.preventDefault()
    }

    render() {
        return (
            <form id="add-book" onSubmit={this.submitForm.bind(this)} >
                <div className="field">
                    <label>Title:</label>
                    <input type="text" onChange={(e) => this.setState({ title: e.target.value })} />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <input type="text" onChange={(e) => this.setState({ author: e.target.value })} />
                </div>
                <div className="field">
                    <label>Language:</label>
                    <input type="text" onChange={(e) => this.setState({ language: e.target.value })} />
                </div>
                <div className="field">
                    <label>Country:</label>
                    <input type="text" onChange={(e) => this.setState({ country: e.target.value })} />
                </div>
                <div className="field">
                    <label>Pages:</label>
                    <input type="number" onChange={(e) => this.setState({ pages: e.target.value })} />
                </div>
                <div className="field">
                    <label>Year:</label>
                    <input type="number" onChange={(e) => this.setState({ year: e.target.value })} />
                </div>
                <button>+</button>
            </form>
        );
    }
}

export default compose(
    graphql(ADD_BOOK, { name: "ADD_BOOK" })
)(AddBook)