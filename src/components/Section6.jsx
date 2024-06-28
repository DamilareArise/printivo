import React from 'react'

const Section6 = () => {
  return (
    <>
        <section className='section6'>
            <div className='container sect6-grid d-grid py-sm-3 py-lg-5'>
                <div className="sect6-grid-item">
                    <h5 className='mb-3'>Printivo</h5>
                    <ul className='list-group'>
                        <li className='list-group-item border-0 p-1'><a href="">About Us</a></li>
                        <li className='list-group-item border-0 p-1'><a href="">Contact</a></li>
                        <li className='list-group-item border-0 p-1'><a href="">Track Order</a></li>
                        <li className='list-group-item border-0 p-1'><a href="">Printivo Promise</a></li>
                        <li className='list-group-item border-0 p-1'><a href="">Printivo Blog</a></li>
                        <li className='list-group-item border-0 p-1'><a href="">Career</a></li>
                    </ul>
                </div>
                <div className="sect6-grid-item">
                    <h5 className='mb-3'>Help and Information</h5>
                    <ul className='list-group'>
                        <li className='list-group-item border-0 p-1'><a href="">Paper Quality</a></li>
                        <li className='list-group-item border-0 p-1'><a href="">Privacy Policy</a></li>
                        <li className='list-group-item border-0 p-1'><a href="">Terms and Conditions</a></li>
                        <li className='list-group-item border-0 p-1'><a href="">Font Licenses</a></li>
                        <li className='list-group-item border-0 p-1'><a href="">Shipping and Delivery
                        </a></li>
                    </ul>
                </div>
                <div className="sect6-grid-item">
                    <h5 className='mb-3'>Make Money</h5>
                    <ul className='list-group'>
                        <li className='list-group-item border-0 p-1'><a href="">Refer a friend & earn N1,000</a></li>
                        <li className='list-group-item border-0 p-1'><a href="">Become a Reseller</a></li>
                        <li className='list-group-item border-0 p-1'><a href="">Sell your Designs</a></li>
                        <li className='list-group-item border-0 p-1'><a href="">Merch Store
                        </a></li>
                    </ul>
                </div>
                <div className="sect6-grid-item">
                    <h5 className='mb-3'>Follow Us</h5>
                    <ul className='list-group'>
                        <li className='list-group-item border-0 d-flex gap-3 p-1'>
                            <a href=""><img src="/images/download (14).svg" alt="" /></a>
                            <a href=""><img src="/images/download (15).svg" alt="" /></a>
                            <a href=""><img src="/images/download (16).svg" alt="" /></a>
                            <a href=""><img src="/images/download (17).svg" alt="" /></a>
                        </li>
                        <li className='list-group-item border-0 p-1 h5 mt-4'>Accepted Payments</li>
                        <li className='list-group-item border-0 p-1'><a href=""><img src="/images/payment.png" alt="" width={150}/></a></li>
                        <li className='list-group-item border-0 p-1 h5 mt-4'>Delivery</li>
                        <li className='list-group-item border-0 p-1'><a href=""><img src="/images/shipping.png" alt="" width={150}/></a></li>
                    </ul>
                </div>
            </div>
        </section>
        <div className='text-center footer py-4 '>
            <p className='p-0 m-0'>Copyright © 2023 Printivo. All rights reserved.</p>
        </div>
    </>
  )
}

export default Section6