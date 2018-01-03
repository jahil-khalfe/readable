import styled from 'styled-components';

const AddButton = styled.button`
  outline: none;
  background: #2E0219;
  width: 80px;
  border: #97EFE9;
  height: 80px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  color: #fff;
  font-size: 2em;
  right: 20px;
  cursor: pointer;
  transition: all 0.3s linear;
  text-decoration: none;
  :hover {
    border: 1px inset #97EFE9;
    font-size: 3em;
  }
`;

export default AddButton;
