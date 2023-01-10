import PayPal from "../payPal/PayPal"
import PaypalCheckoutButton from "../PaypalCheckoutButton/PaypalCheckoutButton"



export default function Payment() {
    const product = {
        description: "Lawyer hire",
        price: 10
      };
    return (
        <div className="payment">
            <div className="card col-lg-4 col-sm-12" >
                <div className="card-body col-12 " >
                    <div className='col-12 d-flex'>
                        <div className="card-title fw-bolder fs-6 col-10 " style={{ justifyContent: "flex-start" }}>Agreement is funded between the two parties</div>
                        <div className='text-Primary fw-bolder col-2' style={{ color: "blue" }}>$100</div>
                    </div>
                    <p className="card-text mb-3 d-flex text-align-start justify-content-start">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div className='d-flex col-12 '>
                        <ul>
                            <li className='col-12 m-2'>Severance pay</li>
                            <li className='col-12 m-2'>convalescence pay</li>
                            <li className='col-12 m-2 justify-content-start'>lease</li>
                            <li className='col-12 m-2'>overtime</li>
                        </ul>
                    </div>
                    <div>
                        <PaypalCheckoutButton product={product} />
                    </div>

                    <button type="button" className="btn btn-primary col-7 fw-bolder fs-6 mb-2" style={{ fontFamily: "inherit" }}>Payment</button>
                    <div>
                        <a href="" className='col-8'>Package comparison</a>
                    </div>
                </div>
            </div>
        </div >
    )
}