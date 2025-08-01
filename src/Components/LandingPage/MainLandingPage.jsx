
import LandingPageFooter from './LandingPageFooter/LandingPageFooter'
import LandingPageNavbar from './LandingPageNavbar/LandingPageNavbar'
import Marvo from "../../Components/LandingPageComponents/Marvo/Marvo.jsx"
import Trynow from "../../Components/LandingPageComponents/Trynow/Trynow.jsx"
import LandingPageSection3 from "../../Components/LandingPageComponents/LandingPage/Section3/LandingPageSection3.jsx"
import LandingPageSection5 from "../../Components/LandingPageComponents/LandingPage/Section5/LandingPageSection5.jsx"
import Channels from "../../Components/LandingPageComponents/Channels/Channels.jsx"
import Features from "../../Components/LandingPageComponents/Features/Features.jsx"
import Oneyearmervo from '../../Components/LandingPageComponents/Oneyearmervo/Oneyearmervo.jsx'
import Freelancers from "../../Components/LandingPageComponents/Freelancers/Freelancers.jsx"
import Chatcards from "../../Components/LandingPageComponents/Chatcards/Chatcards.jsx"
import Marketingcard from "../../Components/LandingPageComponents/Marketingcard/Marketingcard.jsx"
import HeroSocialCircle from "../../Components/LandingPageComponents/HeroSocialCircle/HeroSocialCircle.jsx"
import ChatBot from './LandingPageChatBot/ChatBot.jsx'

function MainLandingPage() {
    return (
        <>
            <div className=' min-h-screen flex flex-col  '>
                <div className='z-50'>
                    <LandingPageNavbar />
                </div>

                <div className='flex-1 min-h-screen  text-center '>
                    <HeroSocialCircle />
                    <Marvo />
                    <LandingPageSection3 />
                    <Trynow />
                    <Channels />
                    <Features />
                    <LandingPageSection5 />
                    <Oneyearmervo />
                    <Freelancers />
                    <Chatcards />
                    <Marketingcard />
                </div>
<ChatBot/>

                <LandingPageFooter />
            </div>



        </>
    )
}

export default MainLandingPage
