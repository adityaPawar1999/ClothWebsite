import ShopPageStyle from "./ShopPageStyle";
import data from "./shopData";

const ShopPage = () =>{
    return(<>
    <ShopPageStyle>
    <div className="container">          
        <div className="row g-2">            
            {
                data.map((value)=>{
                return(
                    <div className="market col-4" key={value.id}>
                        <img
                        className="image"
                        src={value.src}
                        />
                        <div className="info">
                            <p className="title">{value.title}<br/>
                                <span className="prize">{value.prize}</span>
                            </p>
                        </div>
                    </div>
                    );
                })
            }
        </div>
    </div>
    </ShopPageStyle>
    </>)
}
export default ShopPage;