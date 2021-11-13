import styled from "styled-components";

export const SearchBarContainer = styled.section`
  position: absolute;
  left: -10vw;
  top: 15px;
  width: 100%;
  height: 4vh;
  display: flex;
  justify-content: center;
  z-index: 15;
  @media (max-width: 768px) {
    z-index: 1;
    top: 10vh;
  }
  @media (max-width: 1080px) {
    left: 0;
  }
`;

export const SearchInput = styled.input`
  border: 2px solid #ddd;
  border-radius: 20px;
  height: 30px;
  width: 400px;
  padding: 2px 40px 2px 40px;
  outline: 0;
  font-size: 1.5rem;
  color: #fff;
  background-color: #ef4737;
  transition: 0.2s;
  @media (max-width: 500px) {
    width: 70%;
  }
  ::placeholder {
    color: #f5f5f5;
  }
  :focus {
    background-color: #f5f5f5;
    color: #333;
    transition: 0.2s;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  height: 30px;
  width: 30px;
  margin-right: 445px;
  border-radius: 100%;
  border: ${({ clicked }) => (clicked ? `1px solid #555` : `none`)};
  color: ${({ clicked }) => (clicked ? `#555` : `#fff`)};
  margin-top: 3px;
  z-index: 15;
  display: flex;
  transition: 0.4s;
  @media (max-width: 500px) {
    left: 6%;
  }
  i {
    margin: auto;
  }
`;
