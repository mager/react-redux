import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const YOUTUBE_API_KEY = 'AIzaSyAystcfyntHOXOf2qJRv1EljE59734-DIg';

YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
