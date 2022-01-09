import styled from "styled-components";

export const Circlestyle = styled.div`
  top: 0;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .box {
    position: absolute;
    width: 1300px;
    height: 1100px;
    .main-image {
      position: absolute;
      z-index: 1;
      left: 980px;
      top: 420px;

      img {
        width: 260px;
        height: 260px;
      }
    }
    .bigCir {
      position: absolute;
      top: -630px;
      left: 500px;
      text-align: center;
      border-radius: 50%;
      width: 1300px;
      height: 1150px;

      .circle {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        background-color: ${(props) =>
          props.color === "#FF922C" ? "#F4E2D1" : "#DBF4D1"};
        position: relative;
        overflow: hidden;
        .inner-circle {
          position: absolute;
          border-radius: 50%;
          height: 600px;
          width: 600px;
          top: 70%;
          left: 320px;
          border: 2px dashed ${(props) => props.color};
          img{
          
          }
        }
      }
    }
  }
`;
