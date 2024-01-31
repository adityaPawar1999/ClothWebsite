import styled from "styled-components";

const LoadingStyle = styled.div`
 .loader {
      border: 8px solid ${props => props.theme.color.bgText};
      border-top: 8px solid ${props => props.theme.color.white};
      border-radius: 50%;
      width: 50px;
      height: 50px;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
`
export default LoadingStyle;