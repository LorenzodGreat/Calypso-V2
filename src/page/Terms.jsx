import { useState, useEffect } from 'react'
import Load from './../components/loading';
import Navbar from '../components/Navbar';
import Foot from '../components/Footer';
import Banner from './../img/Banner.jpg';
import { NewspaperIcon, PhoneIcon, MailIcon, SupportIcon } from '@heroicons/react/outline'
import { MantineProvider, Text } from '@mantine/core';

export default function Terms() {
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
                                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    Terms and Conditions
                                </span>
                            </h1>
                            <p className="mt-8 text-xl w-[88%] mx-auto text-gray-500 leading-8">
                                These terms and conditions shall govern the relationship between Calypso Shipping. a company duly incorporated under the laws of Jamaica. The Customer (which shall include the Addressee and/ or Recipient of the package); collectively referred to as the Parties. This agreement provides the basis on which Calypso Shipping is prepared to provide freight shipping services. Legal and binding obligations shall be formed between the Parties when packages are tendered to and accepted by Calypso Shipping for delivery. By having your Shipment delivered to Calypso Shipping at its International Warehouse situated at 3750 W Oakland Park Blvd, Lauderdale Lakes, Florida 33311 United States of America and receipt thereof with your delivery instructions, you agree to these Terms and Conditions here.
                            </p>
                        </div>
                    </div>
                    <Foot />
                </MantineProvider>

        }
    </>
    )
}
