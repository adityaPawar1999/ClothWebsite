import styled from 'styled-components'

const HomePageStyle = styled.div`

.headerImage{
    width:100%;
    height:70vh;
    object-fit:cover;
}

.categoriesBox{
    position:relative;
}
.title{
    position:absolute;
    font-weight:500;
    font-size:1.5rem;
    text-transform:uppercase; 
    color:#fff;
    left:10%;
    bottom:27%;
}
.title:hover{
    display:none;
}
.description{
    position:absolute;
    color:#fff;
    font-size:.8rem;
    left:8%;
    bottom:1%;
    padding:1rem;
    background:#212121;
}
.imgStyle{
    height:350px;
    width:100%;
    object-fit:cover;
}
`
export default HomePageStyle;