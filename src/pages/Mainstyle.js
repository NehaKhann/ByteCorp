import styled from "styled-components";

export const DescContainer = styled.div`

  margin-left: 150px;
  margin-top: 90px;
  h1 {
    width: 84px;
    height: 66px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 66px;
    display: flex;
    align-items: flex-end;
    text-transform: capitalize;
    color: ${(props) => props.color};
  }
  h2 {
    width: 367px;
    height: 100px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 50px;
    display: flex;
    align-items: flex-end;
    text-transform: capitalize;
    color: #333333;
  }
  p {
    width: 347px;
    height: 60px;
    margin-bottom: 30px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    text-transform: capitalize;
    color: #333333;
  }
`;
