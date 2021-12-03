import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card({ offers }) {
    return (
        <>
            <section>
                <div className="container">
                    <h2 className="text-center">OFFERS</h2>
                    <div className="row">
                        {
                            offers.map((offer, index) => {
                                return <>
                                    <div className="col-lg-4 col-sm-1 col-md-4 col-sm-12 col-xs-12">
                                        <div className="card">
                                            <div className="img-wrapper">
                                                <img className="card-img-top" src={offer.image} alt="Slider 1" />
                                            </div>
                                            <div className="card-body">
                                                <h4 className="card-title">{offer.heading}</h4>
                                                <p className="card-text">{offer.description}</p>
                                                <p className="card-text">{offer.percent_off}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}
