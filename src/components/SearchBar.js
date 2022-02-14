import React, { useState } from "react";

const SearchBar = props => {
    // Set the term's state to an empty string
    // and declared the setTerm function
    const [term, setTerm] = useState('');

    const onInputChange = event => {
        // Set the term's state to the value from the form input
        setTerm(event.target.value);
    };

    const onSubmit = event => {
        // Prevent the page from refreshing.
        event.preventDefault();
        // Lets the parent component know the value of the term's state
        props.onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                    type="text"
                    value={term}
                    onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    );
};

// This is the class based component I refactored.
// I'm eaving in for future reference

// class SearchBar extends React.Component {
//     // Set the term's state and set its default value
//     state = { term: '' };

//     onInputChange = event => {
//         // Set the term's state to the value from the form input
//         this.setState({ term: event.target.value });
//     };

//     onFormSubmit = event => {
//         // Prevent the page from refreshing.
//         event.preventDefault();
//         // Lets the parent component know the value of the term's state
//         this.props.onFormSubmit(this.state.term);
//     };
    
//     render() {
//         return (
//             <div className="search-bar ui segment">
//                 <form onSubmit={this.onFormSubmit} className="ui form">
//                     <div className="field">
//                         <label>Video Search</label>
//                         <input
//                         type="text"
//                         onChange={this.onInputChange}
//                         value={this.state.term}
//                         />
//                     </div>
//                 </form>
//             </div>
//         );
//     }
// }

export default SearchBar;