import React from 'react'
import { useState, useEffect } from 'react'
import Load from './../components/loading';
import Navbar from '../components/Navbar';
import Foot from '../components/Footer';
import Banner from './../img/Banner.jpg';
import { NewspaperIcon, PhoneIcon, MailIcon, SupportIcon } from '@heroicons/react/outline'
import { MantineProvider, Text } from '@mantine/core';

export default function Private() {
    const [loading, setLoading] = useState(false)
    const supportLinks = [
        {
            name: 'Socials',
            description:
                'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
            icon: PhoneIcon,
        },
        {
            name: 'Calypso WhatsApp Chat',
            icon: SupportIcon,
        },
        {
            name: 'Location Info',
            description:
                'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
            icon: NewspaperIcon,
        },
    ]
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    return (<>
        {
            loading
                ?
                <Load />
                :
                <MantineProvider withGlobalStyles withNormalizeCSS>
                    <div className='relative'>
                        <img className=' sm:absolute md:absolute hidden mb:block sm:block w-screen ' src={Banner} alt="opps error loading image" />
                        <Navbar />
                    </div>

                    <div className=' py-32 md:py-32 lg:py-32'>

                        <div className="text-lg py-6 mx-auto">
                            <h1>
                                <span className="mt-20 block text-lg text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    Privacy Policy
                                </span>
                            </h1>
                            <p className="mt-8 text-xl w-[88%] mx-auto text-gray-500 leading-8">
                                This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use our Service. We use Your Personal data to provide and improve our Service. By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy.
                            </p>
                            <h1>
                                <span className="mt-20 block text-lg text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    Interpretation
                                </span>
                            </h1>
                            <p className="mt-8 text-xl w-[88%] mx-auto text-gray-500 leading-8">
                                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in the plural.
                            </p>
                            <h1>
                                <span className="mt-20 block text-lg text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    MY ACCOUNT
                                </span>
                            </h1>
                            <p className="mt-8 text-xl w-[88%] mx-auto text-gray-500 leading-8">
                                If you use any of the Calypso Shipping Services, you will be responsible for keeping the confidentiality of your account number and password and for restricting access to your computer, and you accept all responsibility for all activities that occur under your account or password. Calypso Shipping does not sell or provide services to minors, in the event that accounts are opened by minors, Calypso Shipping reserves the right to cancel or close them permanently. Calypso Shipping does not discriminate based on race, ethnicity, nationality, religion, gender identity or  sexual orientation .
                                <br /><br /> ACCESSING, BROWSING OR USING THE CALYPSO Shipping SITE OR USING CALYPSO SHIPPING SERVICES IMPLIES YOUR ACCEPTANCE OF ALL THE TERMS AND CONDITIONS IN THIS AGREEMENT; PLEASE READ THEM CAREFULLY.

                            </p>
                            <h1>
                                <span className="mt-20 block text-lg text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    Definitions
                                </span>
                            </h1>
                            <p className="mt-8 text-xl w-[88%] mx-auto text-gray-500 leading-8">
                                <br /><br /> ● For the purposes of this Privacy Policy: Account means a unique account created for You to access our Service.
                                <br /><br /> ● Company (referred to as either “the Company”, “We”, “Us” or “Our” in this Agreement) refers to Calypso Shipping, Kingston.
                                <br /><br /> ● Country refers to: Jamaica
                                <br /><br /> ● Device means any device that can access our electronic services such as a computer, a cellphone or a digital tablet.
                                <br /><br /> ● Personal Data is any information that relates to an identified or identifiable individual.
                                <br /><br /> ● Service refers to all processes, physical and virtual, we employ to facilitate the receipt, processing, shipping and final   delivery of packages.
                                <br /><br /> ● Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
                                <br /><br /> ● Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service   infrastructure itself (for example, the duration of a page visit).
                                <br /><br /> ● Website refers to Calypso Shipping, accessible from https://www.calypso Shipping
                                <br /><br /> ● You mean the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable
                            </p>
                            <h1>
                                <span className="mt-20 block text-lg text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    PERSONAL DATA
                                </span>
                            </h1>
                            <p className="mt-8 text-xl w-[88%] mx-auto text-gray-500 leading-8">
                                While using Our Service, we may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally, identifiable information may include, but is not limited to:
                                <br /><br />  ● Email address
                                <br /><br />  ● First name and last name
                                <br /><br />  ● Telephone number
                                <br /><br />  ● Address
                                <br /><br />  ● Government-issued TRN
                                <br /><br />  ● Usage Data
                            </p>
                            <h1>
                                <span className="mt-20 block text-lg text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    USAGE DATA
                                </span>
                            </h1>
                            <p className="mt-8 text-xl w-[88%] mx-auto text-gray-500 leading-8">
                                Usage Data is collected automatically when using our Service. Usage Data may include information such as Your Device’s Internet Protocol address, browser details, the pages of our website that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When you access the Website by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device You use, your mobile device unique ID, the IP address of Your mobile device, your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data. We may also collect information that your browser sends whenever you visit our Service or when you access the website by or through a mobile device.
                            </p>
                            <h1>
                                <span className="mt-20 block text-lg text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    USE OF YOUR PERSONAL DATA
                                </span>
                            </h1>
                            <p className="mt-8 text-xl w-[88%] mx-auto text-gray-500 leading-8">
                                The Company may use Personal Data for the following purposes:
                                <br /><br /> ● To provide and maintain our Service, including to monitor the usage of our Service.
                                <br /><br /> ● To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
                                <br /><br /> ● For the performance of a contract: the development, compliance, and undertaking of the purchase contract for the products, items, or services You have purchased or of any other contract with Us through the Service
                                <br /><br /> ● To contact You: via email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application’s push notifications regarding updates or informative communications related to the
                                functionalities, products or contracted services, including security updates, when necessary or reasonable for their implementation.
                                <br /><br /> ● To provide You with news, special offers and general information about changes to our Service unless You have opted not to receive such information.
                                <br /><br /> ● To manage Your requests: To attend and manage Your requests to Us.
                                <br /><br /> ● For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, to evaluate and improve our Service, products, services, marketing and your experience.
                                <br /><br />Retention of Your Personal Data
                                The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.
                                <br /><br /> We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for
                                example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                                Disclosure of Your Personal Data
                                Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                                The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                                <br /><br /> ● Comply with a legal obligation
                                <br /><br /> ● Protect and defend the rights or property of the Company
                                <br /><br /> ● Prevent or investigate possible wrongdoing in connection with the Service
                                <br /><br /> ● Protect the personal safety of Users of the Service or the public
                                <br /><br /> ● Protect against legal liability
                                <br /><br /> Changes to this Privacy Policy
                                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page
                            </p>
                        </div>

                    </div>
                    <Foot />
                </MantineProvider>

        }
    </>
    )
}
