import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'xxx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this._videoSearch('cat');
    }

    _videoSearch(keyword) {
        YTSearch({key: API_KEY, term: keyword}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo:videos[0]
            })
        });
    }

    render () {
        const videoSearch = _.debounce((keyword) => {this._videoSearch(keyword)}, 300);

        return (
            <div className="row center-block">
                <div className="col-sm-12"><SearchBar searchKeyword={videoSearch}/></div>
                <div className="col-sm-12">
                    <div className="col-sm-8"><VideoDetail video={this.state.selectedVideo}/></div>
                    <div className="col-sm-4">
                        <VideoList
                            videoSelected={selectedVideo => this.setState({selectedVideo})}
                            videos={this.state.videos} />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('container'));