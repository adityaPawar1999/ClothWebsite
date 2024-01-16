import HomePageStyle from "./HomePageStyle";
import data from './homePageData'

const Homepage = () =>{
    return(<>
    <HomePageStyle>
            <div className="mainImage">
                {/* https://images.unsplash.com/photo-1506620195489-7839a134b1f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D */}
                <img src="https://images.unsplash.com/photo-1521429737669-ae70d53a4c95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="headerImage"
                alt="headerImage"
                />
            </div>
            <div className="container">
                <h3>CATEGORIES</h3>
                <div className="row">
                    {
                    data.map((value)=>{
                    return(
                        <div className="col-lg-6 g-1 categoriesBox" key={value.id}>
                            
                        <p className="title">{value.title}</p>
                        <p className="description">{value.description}</p>
                            <img
                            className="imgStyle"
                            src={value.src}
                            alt='image'
                            />
                        </div>
                    );
                    })
                }
                </div>
            </div>
    </HomePageStyle>
    </>)
}
export default Homepage;