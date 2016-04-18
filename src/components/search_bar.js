import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { keyword: ''};
    }

    render () {
        return(
            <form role="search">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={this.state.keyword}
                        onChange={event => this._search(event.target.value)}
                    />
                </div>
            </form>
        );
    }

    _search(keyword) {
        this.setState({keyword});
        this.props.searchKeyworkd(keyword);
    }
}

export default SearchBar;

