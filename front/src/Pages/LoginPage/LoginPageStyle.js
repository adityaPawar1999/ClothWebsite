import styled from 'styled-components';

const LoginPageStyle = styled.div`
  .signUpForm {
    padding-top:10%;
    display:flex;
    align-iitem;center;
    justify-content:center;
  }
  .inputField{
    margin-top:.5rem;
    width:18rem;
    height:40px;
    border-radius:5px;
    padding-left:1rem;
    border: 1px solid ${props => props.theme.color.bgText};
  }
  ::placeholder{
    color:#212121;
  }
  .btn {
    color:#fff;
    background:${props => props.theme.color.bgText};
    width: 100%;
  }
`;

export default LoginPageStyle;
