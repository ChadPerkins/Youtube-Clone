import React from "react";

class SearchBar extends React.Component {
    // Set the states property and its default value
        state = { term: '' };

    onInputChange = event => {
        // Set the term property to the value from the form input
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        // Prevent the page from refreshing.
        event.preventDefault();
        // Lets the parent component know the value of the term property
        this.props.onFormSubmit(this.state.term);
    };
    
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                        type="text"
                        onChange={this.onInputChange}
                        value={this.state.term}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;