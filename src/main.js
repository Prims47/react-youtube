import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'xxx';

/*const App = () => {
    return (
        <div className="row center-block">
            <div className="col-sm-12"><SearchBar /></div>
        </div>
    );
};*/

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {videos: []};

        this._videoSearch('cat');
    }

    _videoSearch(keyword) {
        YTSearch({key: API_KEY, term: keyword}, (videos) => {
            this.setState({videos})
            console.log(videos);
        });
    }

    render () {
        const videoSearch = _.debounce((keyword) => {this._videoSearch(keyword)}, 300);

        return (
            <div className="row center-block">
                <div className="col-sm-12"><SearchBar searchKeyworkd={videoSearch}/></div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));