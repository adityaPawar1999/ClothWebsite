import { Link } from "react-router-dom";
import CategoriesList from "../../Components/CategoriesList/CategoriesList";
import ShopPageStyle from "./ShopPageStyle";
import data from "./shopData";

const ShopPage = () => {
    return (<>
        <ShopPageStyle>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <CategoriesList />
                    </div>
                    <div className="col-lg-9">
                        <div className="row g-2">
                            {
                                data.map((value) => {
                                    return (
                                        <div className="market col-4" key={value.id}>

                                            <Link to={`/singlePage/${value.id}`}>
                                                <img
                                                    className="image"
                                                    src={value.src}
                                                    alt='image'
                                                />
                                                <div className="info">
                                                    <p className="title">{value.title}<br />
                                                        <span className="prize">{value.prize}</span>
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </ShopPageStyle>
    </>)
}
export default ShopPage;