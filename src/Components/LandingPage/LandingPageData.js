import P1 from "../../assets/LandingPage/p1.png";
import P2 from "../../assets/LandingPage/p2.png";
import P3 from "../../assets/LandingPage/p3.png";
import P4 from "../../assets/LandingPage/p4.png";
import S1 from "../../assets/LandingPage/S1.png";
import S2 from "../../assets/LandingPage/S2.png";
import S3 from "../../assets/LandingPage/S3.png";
import W1 from "../../assets/LandingPage/W1.png";
import W2 from "../../assets/LandingPage/W2.png";
import W3 from "../../assets/LandingPage/W3.png";
import R1 from "../../assets/LandingPage/R1.png";
import R2 from "../../assets/LandingPage/R2.png";
import R3 from "../../assets/LandingPage/R3.png";

export const dropdownData = {
    Products: [
        {
            icon: P3,
            title: 'AI Chatbot',
            description: 'Conversational AI',
            onClick: () => alert('Go to AI Chatbot')
        },
        {
            icon: P4,
            title: 'Automation',
            description: 'Workflow Automation',
            onClick: () => alert('Go to Automation')
        },
        {
            icon: P1,
            title: 'CRM',
            description: 'Customer Management',
            onClick: () => alert('Go to CRM')
        },
        {
            icon: P2,
            title: 'Campaign',
            description: 'Multi-channel Messaging',
            onClick: () => alert('Go to Campaign')
        }
    ],
    Solutions: [
        {
            icon: S1,
            title: 'Freelancers',
            description: 'Grow Your Solo Business',
            onClick: () => alert('Go to Freelancers')
        },
        {
            icon: S2,
            title: 'Agencies',
            description: 'Scale Your Client Work',
            onClick: () => alert('Go to Agencies')
        },
        {
            icon: S3,
            title: 'Local Businesses',
            description: 'Boost Your Local Presence',
            onClick: () => alert('Go to Businesses')
        },

    ],
    'Why Marvo?': [
        {
            icon: W1,
            title: 'Our Story',
            description: 'Our Journey & Mission',
            onClick: () => alert('Go to Story')
        },
        {
            icon: W2,
            title: 'How It Works',
            description: 'Your Simple Steps',
            onClick: () => alert('Go to Works')
        },
        {
            icon: W3,
            title: 'Success Stories',
            description: 'Real Results & Testimonials ',
            onClick: () => alert('Go to Stories')
        },

    ],
    Resources: [
        {
            icon: R1,
            title: 'Blog',
            description: 'Insights & Updates',
            onClick: () => alert('Go to Freelancers')
        },
        {
            icon: R2,
            title: 'Tutorials',
            description: 'Guides & How-Tos',
            onClick: () => alert('Go to Agencies')
        },
        {
            icon: R3,
            title: 'Support',
            description: 'Get Help & FAQs',
            onClick: () => alert('Go to Businesses')
        },

    ],

}