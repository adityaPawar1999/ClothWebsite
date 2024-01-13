import styled from 'styled-components'

const HeaderStyle = styled.div`
    font-size:.8rem;
    font-weight:600;
    background:black;
    padding:.5rem;
    color:#fff;
a{
    color:#fff;
    text-decoration:none;
    border:none;
}
.active{
    color:lightgreen;
}
.navbarList{
    display:flex;
    gap:2rem;
    bisplay:block;
}
navLink{
    display:flex;
    gap:3rem;
}
.menuIcon  .cancelIcon{
    display:none;
    padding-left:9rem;
}
@media only screen and (max-width: 767px) {
.navbarList{
    display:none;
}
.mobileNavbar{
    display:block;
}
.menuIcon , .cancelIcon{
    display:block;
    color:#fff;
}
}
`
export default HeaderStyle;