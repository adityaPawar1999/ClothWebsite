import { Link } from "react-router-dom";
import CategoriesList from "../../Components/CategoriesList/CategoriesList";
import ShopPageStyle from "./ShopPageStyle";
import { useState, useEffect } from "react";
import axios from 'axios';

const ShopPage = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://localhost:5004/getData");
                const token = response.data;
                console.log(token);

                // Assuming the data is an array within the token response
                if (token && token.data) {
                    setData(token.data);
                }
            } catch (error) {
                console.log(error);
                setError(error.message || 'An error occurred while fetching data.');
            }
        };

        fetchData();
    }, []);

    return (
        <ShopPageStyle>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <CategoriesList />
                    </div>
                    <div className="col-lg-9">
                        {error ? (
                            <p>Error: {error}</p>
                        ) : (
                            <div className="row g-2">
                                {data.map((value) => (
                                    <div className="market col-4" key={value.id}>
                                        <Link to={`/singlePage/${value.id}`}>
                                            <img
                                                className="image"
                                                src={value.src}
                                                alt='image'
                                            />
                                            <div className="info">
                                                <p className="title">
                                                    {value.title}<br />
                                                    <span className="prize">{value.prize}</span>
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ShopPageStyle>
    );
};

export default ShopPage;
