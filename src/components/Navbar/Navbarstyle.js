import styled from "styled-components";

export const Navbarstyle = styled.div`

  display: flex;
  padding: 50px 150px;
  justify-content: space-between;
  align-items: center;
  .sub-titles {
    position:absolute;
    left:500px;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        cursor:pointer;
        list-style-type: none;
        padding:30px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
`;
