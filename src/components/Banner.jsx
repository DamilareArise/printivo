import React from 'react'

const Banner = () => {
  return (
    <>
    <section className='banner py-3 pb-lg-0 pt-lg-4 '>
        <div className='row m-0'>
            <div className='col-md-7 ps-md-4 ps-lg-5 '>
                <div className='ps-md-2 ps-lg-5'>
                    <h1 className='banner-text'>Quality Prints</h1> 
                    <h4 className='opacity-75 mt-4 mt-lg-0'>Shipped to your doorstep</h4>
                    <p className='fw-bold mt-4'>What would you like to print today?</p>
                    <div className='bg-white rounded search-box'>
                        <input type="text" placeholder='Search for Business cards, T-shirt, Mugs, etc' className='col-11 search search1 bg-white rounded-start'/>
                        <button className='col-1 search bg-white rounded-end'><img src="/images/download (5).svg" alt="" /></button>
                    </div>
                </div>
            </div>
            <div className='col-md-5 p-0 d-flex justify-content-end pt-5 not-displaySm'>
                <img src="/images/Card3_n9kqin.png" alt="" width='80%'/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner;