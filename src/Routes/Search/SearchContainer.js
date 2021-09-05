import React from 'react';
import { movieApi, TVApi } from '../../api';
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResult: null,
    tvResult: null,
    searchTerm: "",
    error: null,
    loading: false
  };

  handelSubmit = () => {
    const { searchTerm } = this.searchTerm;
    if (searchTerm !== "") {
      this.searchByTerm(searchTerm);
    }
  }

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
  }

  render() {
    const { movieResult, tvResult, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter 
        movieResult={movieResult} 
        tvResult={tvResult} 
        searchTerm={searchTerm} 
        error={error} 
        loading={loading} 
        handelSubmit={this.handelSubmit}
      />
    );
  }
}