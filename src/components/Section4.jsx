import React from 'react'

const Section4 = () => {
  return (
    <>
        <section className='section4 bg-white align-content-center'>
            <div className='container'>
                <h3 className='my-3'>You can count on us for:</h3>
                <div className='sect3-grid d-grid gap-5'>
                    <div className="sect4-grid-item d-flex gap-3">
                        <div><img src="/images/download (7).svg" alt="" /></div>
                        <div>
                            <p className='fw-bold lh-sm my-2'>Fast Turnaround Within Days</p>
                            <p className=''>Your order gets to you within 3-7 working days via DHL or our very own Printivo Direct.</p>
                        </div>
                    </div>
                    <div className="sect4-grid-item d-flex gap-3">
                        <div><img src="/images/download (8).svg" alt="" /></div>
                        <div>
                            <p className='fw-bold lh-sm my-2'>100% Top Quality</p>
                            <p className=''>Only the finest materials, machines and people will be involved in fulfilling your order.</p>
                        </div>
                    </div>
                    <div className="sect4-grid-item d-flex gap-3">
                        <div><img src="/images/download (9).svg" alt="" /></div>
                        <div>
                            <p className='fw-bold lh-sm my-2'>Affordable Services</p>
                            <p className=''>All products are adequately priced to ensure you get value for your money at all times.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Section4