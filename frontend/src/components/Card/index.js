import styled from 'styled-components';


const CardContainer = styled.div`
  display: flex;
  flex: 1 0 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;  
`;

const Item = styled.div`
  text-transform: uppercase;
  color: #97EFE9;
  > * {
  text-transform: uppercase;
  color: #97EFE9;
  }
`;

const Card = styled.div`
  flex: 0 0 45%;
  background: #2E0219;
  min-height: 300px;
  margin: 1em;
  padding: 1em;
  transition: all 0.3s ease-in;
  :hover{
    box-shadow: 0 8px 6px -6px #F5CB83;
  }
`;

export { Card, CardContainer, Item };
