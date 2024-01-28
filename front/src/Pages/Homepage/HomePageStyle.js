import styled from 'styled-components'

const HomePageStyle = styled.div`
padding-top:3.2rem;
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

.description{
    position:absolute;
    color:#fff;
    font-size:.8rem;
    bottom:-5%;
    padding:1rem;
    background:#212121;
}
.imgStyle{
    height:350px;
    width:100%;
    object-fit:cover;
}
.description{
    width:99%;
    opacity: 0;
}
.categoriesBox:hover .description{
    opacity: 1;
}
.categoriesBox:hover .title{
    opacity: 0;
}
`
export default HomePageStyle;