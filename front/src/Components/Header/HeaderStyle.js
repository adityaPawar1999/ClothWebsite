import styled from 'styled-components'

const HeaderStyle = styled.div`
    font-size:.8rem;
    font-weight:600;
    background:black;
    padding:.5rem;
    color:#fff;
    z-index:1000;
    width:100%;
    opacity:.8;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    position:fixed;
a{
    color:#fff;
    text-decoration:none;
    border:none;
}
.active{
    color:${props => props.theme.color.bgText};
}
.desktopNavbar{
    display:flex;
    gap:2rem;
    bisplay:block;
}
.mobileNavbar{
    display:none;
}
.menuIcon  .cancelIcon{
    display:none;
    padding-left:9rem;
}
@media only screen and (max-width: 767px) {
.desktopNavbar{
    display:none;
}
a{
    color:#fff;
}
.navbar{
    position:relative;
}
.mobileNavbar{
    display:block;
}
.mobileNavLinks{
    margin-top:1rem;
    position:absolute;
    height:100vh;
    width:100%;
    left:-0%;
    color:#212121;
      background: rgba(0, 0, 0,.9);
      backdrop-filter: blur(80px);
}
.navLink{
    font-size:1.5rem;
    font-weight:700;
    display:flex;
    align-item:center;
    justify-content:center;
    margin-top:2rem;
}

}
`
export default HeaderStyle;