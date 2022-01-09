import styled from "styled-components";

export const Buttonstyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
  width: 163px;
  height: 48px;
  border-radius: 69px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  display: flex;
  text-transform: uppercase;
  outline: none;
  border: none;

  color: #ffffff;

  box-shadow: 0px 20px 40px
    ${(props) => (props.color === "#FF922C" ? "#F4E2D1" : "#DBF4D1")};
    
`;
