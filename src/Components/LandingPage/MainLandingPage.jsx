
import LandingPageFooter from './LandingPageFooter/LandingPageFooter'
import LandingPageNavbar from './LandingPageNavbar/LandingPageNavbar'

function MainLandingPage() {
    return (
        <>
            <div className=' min-h-screen flex flex-col  '>
                <LandingPageNavbar />

                <div style={{ padding: '30px', marginTop: '8rem' }} className='flex-1 min-h-screen  text-center '>
                    all  pages shows here !
                </div>
                <LandingPageFooter />
            </div>

        </>
    )
}

export default MainLandingPage
