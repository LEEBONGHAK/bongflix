import React from 'react';
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    const { match: { params: { id } }, history: { push } } = this.props;   // Detail의 id 가져오기
    const parsedId = parseInt(id);
    
    if (isNaN(parsedId)) {   // id가 숫자인지 아닌지 판별
      return push("/");   // id가 숫자가 아니면 Home으로 이동
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