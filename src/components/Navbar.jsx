import React , {useEffect} from 'react'


const Navbar = () => {
    useEffect(() => {
        const header = document.getElementById('header');
    
        const handleScroll = () => {
          if (window.scrollY > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); // Empty dependency array ensures this effect runs once on mount and cleans up on unmount
    

    
  return (
    <>
        <header className=''>
            <nav className='container nav1 d-flex justify-content-between pt-2 align-items-center '>
                <ul className='d-flex list-unstyled align-items-center not-displaySm  gap-lg-5'>
                    <li className=''><a href="#?" className='nav-link'>Cost Calculator</a></li>
                    <li className=''><a href="#?" className='nav-link'>Discover Stores</a></li>
                    <li className=''><a href="#?" className='nav-link'>Track Orders</a></li>
                </ul>
                <ul className='nav1-ul1 d-flex list-unstyled align-items-center gap-lg-5'>
                    <li className=''>
                        <div className='not-displaySm'>Need help? Call:</div>
                        <div className='numbers'><a href="#?">+2347069000083</a> <span className='not-displaySm'>or</span> <a href="#?">+2349035000505</a></div>
                    </li>
                    <li className='mx-lg-5'>
                        <a href="#?" className='nav-link nav-display'><img src="/images/download (18).svg" alt="" /></a>
                    </li>
                    <li className=''>
                        <a href="#?" className='btn rounded-pill shadow-none border border-black-50 text-capitalize '><img src="/images/download (1).svg" alt="" className='me-2' /> Nigeria</a>
                    </li>
                </ul>
            </nav>
            <section className='cover-nav2' id='header'>
                <nav className='nav2 container d-flex justify-content-between align-items-center py-2'>
                    <div>
                        <a href="#?">
                            <img src="/images/download (2).svg" alt="" />
                        </a>
                    </div>
                    <ul className='d-flex list-unstyled align-items-center gap-2 gap-lg-4 pt-2'>
                        <li className=''><a href="#?" className='nav-link'>All Products</a></li>
                        <li className=''><a href="#?" className='nav-link'>Become a Reseller</a></li>
                        <li className=''><a href="#?" className='nav-link'>Merch Store</a></li>
                        <li className=''><a href="#?" className='nav-link'>Marketplace</a></li>
                        <li className=''><a href="#?" className='nav-link nav-display text-danger text-opacity-75 ms-lg-4'>Sign in</a></li>
                        <li className=''><a href="#?" className='nav-link'>Create Account</a></li>
                        <li className=''><a href="#?" className='nav-link nav-display'><img src="/images/download (3).svg" alt="" /></a></li>
                    </ul>
                </nav>
            </section>
        </header>

    </>
)
}

export default Navbar;