import React from "react";
import PageviewIcon from "@material-ui/icons/Pageview";
import './../App.css'
//import "./style.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui_segment">
        <form onSubmit={this.onFormSubmit} className="ui_form">
            <label> </label>
            <input
              type="text"
              placeholder="Search for photos"
              className="SearchBar"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value })
              }}/>
              <button className="search_button"><PageviewIcon type='submit' className="header__searchIcon" /></button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
