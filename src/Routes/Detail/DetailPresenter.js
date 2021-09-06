import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from '../../Components/Loader';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center center;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display:flex;

`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  z-index: 1;
  border-radius: 5px;
`;

const DetailPresenter = ({
  result,
  error,
  loading,
}) => (loading ? (<Loader />) : (
  <Container>
    <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`} />
    <Content>
      <Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/w300${result.poster_path}` : require("../../assets/noPosterSmall.png").default} />
    </Content>
  </Container>
));

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
}

export default DetailPresenter;