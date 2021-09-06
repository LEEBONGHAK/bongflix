import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  font-size: 32px;
`;

export default () => (
  <Container>
    {/* 시각 장애인의 screen reader을 위해 설정 */}
    <span role="img" aria-label="Loading">
      ⏰
    </span>
  </Container>  
);