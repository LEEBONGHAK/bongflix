import React from 'react';
import { movieApi, TVApi } from '../../api';
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const { location: { pathname } } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")  // includes(searchContent) : searchContent를 찾아 boolean으로 반환하는 Method
    };
  }

  async componentDidMount() {
    const { match: { params: { id } }, history: { push } } = this.props;   // Detail의 id 가져오기
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    
    if (isNaN(parsedId)) {   // id가 숫자인지 아닌지 판별
      return push("/");   // id가 숫자가 아니면 Home으로 이동
    }
    let result = null;
    try {
      if (isMovie) {
        const request = await movieApi.movieDetail(parsedId);
        result = request.data;
      } else {
        const request = await TVApi.tvDetail(parsedId);
        result = request.data;
      }
    } catch {
      this.setState({ error: "Can't find anything" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return (
      <DetailPresenter 
        result={result} 
        error={error} 
        loading={loading} />
    );
  }
}