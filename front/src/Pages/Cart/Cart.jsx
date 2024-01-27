import CartStyle from "./CartStyle";

const Cart = () => {
    return (<>
        <CartStyle>
            <div className="container">
                <p className="userName">Welcome MR Aditya Pawar</p>
                <div className="row header">
                    <div className="col-lg-8">
                        <p className="LeftTitle"> Shopping Cart</p>
                    </div>
                    <div className="col-lg-4">
                        <p className="RightTitle">Items No</p>
                    </div>
                </div>
            </div>
        </CartStyle>
    </>)
}
export default Cart;