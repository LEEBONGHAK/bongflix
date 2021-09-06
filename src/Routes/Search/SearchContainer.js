import React from 'react';

import { movieApi, TVApi } from '../../api';
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm(searchTerm);
    }
  };

  updateTerm = event => {
    const { target: { value } } = event;
    this.setState({
      searchTerm: value
    });
  };

  searchByTerm = async (term) => {
    this.setState({ loading: true });
    try {
      const { data: { results: movieResults } } = await movieApi.search(term);
      const { data: { results: tvResults } } = await TVApi.search(term);
      
      this.setState({
        movieResults,
        tvResults
      })
    } catch {
      this.setState({ error: "Can't find results." })
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter 
        movieResults={movieResults} 
        tvResults={tvResults} 
        searchTerm={searchTerm} 
        error={error} 
        loading={loading} 
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}