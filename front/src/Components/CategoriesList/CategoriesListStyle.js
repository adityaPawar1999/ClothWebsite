import styled from 'styled-components'

const CategoriesListStyle = styled.div`

.box{
    margin-top:3rem;
}
p{
    padding:.6rem;
    cursor:pointer;
    font-size:.8rem;
    font-weight:700;
    text-transform:uppercase;
}
p:hover{
    color:#fff;
    background:${props => props.theme.color.bgText};
}
p:active{
    color:${props => props.theme.color.bgText};
    background:${props => props.theme.color.white};
    border:1px solid ${props => props.theme.color.bgText};
}`
export default CategoriesListStyle;