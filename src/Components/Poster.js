import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`

`;

const ImageContainer = styled.div`

`;

const Image = styled.div`

`;

const Rating = styled.span`

`;

const Title = styled.span`

`;

const Year = styled.span`

`;

const Poster = ({ id, imageurl, title, rating, year, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imageurl} />
        <Rating><span role="img" aria-label="review rating">⭐</span>{" "}{rating}/10</Rating>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </ImageContainer>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageurl: PropTypes.string, 
  title: PropTypes.string.isRequired, 
  rating: PropTypes.number, 
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;