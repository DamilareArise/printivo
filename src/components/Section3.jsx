import React from 'react'

const Section3 = () => {
  return (
    <>
        <section className='section3 py-5'>
            <div className='container'>
                <h3>What Customers Say About Us 🙌🏾</h3>
            </div>
            <div className='sect3-grid d-grid gap-4 mt-3 container'>
                <div className="sect3-grid-item bg-white shadow-sm">
                    <div className='d-flex  p-3 gap-3'>
                        <div className=''><i className="fab d-inline-block p-2 border rounded-circle fa-twitter"></i></div>
                        <div className='mt-1'>
                            <p>Amina Ebele <a href=""> @DeliciousAmina</a></p>
                            <p>I am now the unofficial <a href="">@Printivo</a> ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!</p></div>
                    </div>
                </div>
                <div className="sect3-grid-item bg-white shadow-sm">
                    <div className='d-flex  p-3 gap-3'>
                        <div className=''><i className="fab d-inline-block p-2 border rounded-circle fa-twitter"></i></div>
                        <div className='mt-1'>
                            <p>Oluwatosin <a href=""> @tosingirlfx</a></p>
                            <p><a href="">@Printivo</a> delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come.</p></div>
                    </div>
                </div>
                <div className="sect3-grid-item bg-white shadow-sm">
                    <div className='d-flex  p-3 gap-3'>
                        <div className=''><i className="fab d-inline-block p-2 border rounded-circle fa-twitter"></i></div>
                        <div className='mt-1'>
                            <p>Oluwatosin <a href="">  @olgablark</a></p>
                            <p>These guys  <a href="">@Printivo</a> are really awesome and affordable. Excellent customer service and delivery too. Thank you.</p></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Section3