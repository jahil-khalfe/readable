import styled from 'styled-components';

const SortButton = styled.button`
  outline: none;
  background: #2E0219;
  border: #97EFE9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  padding: 1em;
  margin: 1em 1em 1em 0;
  transition: all 0.3s linear;
  text-transform: uppercase;
  :hover {
    background:  #97EFE9;
    color: #2E0219;
  }
`;

export default SortButton;