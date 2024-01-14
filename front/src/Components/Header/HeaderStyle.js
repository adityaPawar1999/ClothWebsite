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
    color:#212121;
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
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
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