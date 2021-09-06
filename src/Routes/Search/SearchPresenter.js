import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchPresenter = ({
  movieResult,
  tvResult,
  error,
  loading,
  searchTerm,
  handelSubmit,
}) => null;

SearchPresenter.propTypes = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
  handelSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;