import React from 'react'
import './Details.css';

export default function Details() {
    return (
        <div>
            <div className="container-fluid mainfield m-0 p-0">
                <div className="col-lg-12 m-0 p-0" >
                    {/* <div className="mainfield" > */}
                    <h1 className='text-center'>What level of service would you like?</h1>
                    <div className="col-lg-4 col-lg-offset-2 box_one">
                        <div className="containtext">
                            <div className="container_text text-center">
                                <h1>IN - HOME</h1>
                                <h4>
                                    MLS Listing with your own Personal Award Winning Homevana Realtor. No first timers, No part timers, No franchise agents – only the industry’s best, brightest, and most experienced.
                                </h4>
                                <h2>4% TOTAL FEES*</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-lg-offset-1 box_two">
                        <div className="containtext">
                            <div className="container_text text-center">
                                <h1>ONLINE</h1>
                                <h4>
                                    MLS Listing with the same Award Winning Realtors and includes EVERYTHING in our In-Home listing except you'll work with your personal Realtor remotely.
                                </h4>
                                <h2>FREE*</h2>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-lg-offset-2 box_three">
                        <div className="containtext">
                            <div className="container_text text-center">
                                <h2>*ALL LISTINGS INCLUDE:</h2>
                                <h4>
                                    An award winning personal Realtor, in-home professional photography, smart electronic lockbox, for sale yard sign with toll free 888 number, 24/7/365 live showing service with full ShowingTime integration (including smartphone app to track, schedule, approve, and decline showings and view showing feedback), offers, negotiations, contracts, disclosures, and more. Fully licensed, experienced, and qualified on all real estate, lending, escrow, and insurance matters that may affect the sale of your home. 4% Total Fees includes listing commission AND commission to buyer's brokers offered in the MLS. FREE listings do not include commission to buyer's brokers in the MLS but you may offer any amount you wish, even $0.
                                </h4>
                                {/* <h2>FREE*</h2> */}

                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}
