import styled from "styled-components";

const AddProductStyle = styled.div`
  padding-top: 11rem;
  .title{
    padding-left:.4rem;
    font-weight:800;
  }
  .box{
    padding:1rem;
    margin-bottom:1rem;
    }
.inputField{
    width:95%;
    border-top:0px;
    border-left:0px;
    border-right:0px;
    border-bottom:1px solid #212121;
    margin:1rem;
}
.image{
    width:100%;
}
 input::placeholder {
    color: #212121; 
  }
.btn{
    font-weight:700;
    margin:1rem;
    background-color:yellowgreen;
    width:95%;
    text-transform:uppercase;
    font-size:.9rem;
}
.cancel{
  background:none;
  border:2px solid yellowgreen;
}
  `;

export default AddProductStyle;
