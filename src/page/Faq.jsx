import React from 'react';
import { useState, useEffect } from 'react'
import Load from './../components/loading';
import Navbar from '../components/Navbar';
import Foot from '../components/Footer';
import Banner from './../img/Banner.jpg';
import Question from './../img/question.jpg';
import { NewspaperIcon, PhoneIcon, MailIcon, SupportIcon } from '@heroicons/react/outline'
import { MantineProvider, Text } from '@mantine/core';

export default function Faq() {
    const [loading, setLoading] = useState(false)
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
                    <div className=' space-y-1 py-20 md:py-20 lg:py-20'>
                        <div className="relative bg-indigo-800">
                            <div className="absolute inset-0">
                                <img
                                    className="w-full h-full object-cover"
                                    src={Question}
                                    alt="Question"
                                />
                                <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
                            </div>
                            <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Frequently asked questions
                                </h1>
                                <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                                    Questions. Frequently asked ones. Plus our answers. That's how FAQs work. If you can't find what you're looking for, you can always <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">send us an email</a> with your enquiry.
                                </p>
                            </div>
                        </div>
                        <div class="max-2xl mx-auto py-6 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
                            <dl class="mt-12 grid grid-cols-1 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
                                <div>
                                    <dt class="text-base font-medium text-gray-900">Q. Can I choose which items I want to collect?</dt>
                                    <dd class="mt-3 text-sm text-red-400">A.  Packages must be collected starting with the oldest invoiced item first.</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-medium text-gray-900">Q. What is needed when picking up/clearing a package</dt>
                                    <dd class="mt-3 text-sm text-red-400">A.  A valid government issued ID must be presented for the collection of a package. All packages must have the name (consignee) that matches the name on the government issued ID. Consignee should always take a copy of their invoice(s)</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-medium text-gray-900">Q. Can I have someone pick up my package(s)?</dt>
                                    <dd class="mt-3 text-sm text-red-400">A.  Yes, third party pickup is supported but the consignee must notify the company through customer portal “Authorized Personnel” or through email or Whatsapp. Notification information consist of the name of the party that will be picking up on their behalf and the party must take along a valid government issued ID and a copy of the invoice for the item(s) he/she will be picking up.</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-medium text-gray-900">Q. Does Calypso Shipping reserve the right to search the contents of all packages sent?</dt>
                                    <dd class="mt-3 text-sm text-red-400">A.  Yes, we do not facilitate the sending of any item that is deemed illegal such as guns, ammunition, etc. Kindly contact our office for clarification, should you like to inquire about sending items you are unclear about entering the country and if a permit may be required to import same.</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-medium text-gray-900">Q. Does Calypso Shipping reserve the right to cancel my account or decline my packages?</dt>
                                    <dd class="mt-3 text-sm text-red-400">A.  Yes, Calypso Shipping reserves the right to cancel a customer account at any given time, report and decline packages, that does not comply with the *Terms and Condition that governs the usage of our service(s). Calypso Shipping has not and will not engage in any form of unlawful activities when dealing with our service(s) and as such will report to the police any form of illegal activities.</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-medium text-gray-900">Q. Do I need to have a Calypso Shipping account to get a shipping address?</dt>
                                    <dd class="mt-3 text-sm text-red-400">A. Yes. It is a requirement for all Calypso Shipping customers to create an account before you can ship with the company. Once you complete registration and sign in you will be presented with your assigned shipping addresses.</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-medium text-gray-900">Q. How long does it take for my package(s) / Item(s) to be delivered in Jamaica?</dt>
                                    <dd class="mt-3 text-sm text-red-400">A. The delivery speed of your item depends on the seller and the Air Freight or Sea Freight. All Calypso Shipping customers are provided with a Sea Freight address and an Air Freight address. If you choose to use the ocean shipping address you can expect your item(s) to arrive in Jamaica in 7-10 business days without unforeseen delays. If you choose to use the Air Freight address then you can expect your item(s) to arrive in Jamaica in 5-7 business days without unforeseen delays.</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-medium text-gray-900">Q. What are the accepted payment methods?</dt>
                                    <dd class="mt-3 text-sm text-red-400">A.  Calypso Shipping currently accepts Cash, Bank Transfer. (All Debit Card and Credit Card – To be announced)</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-medium text-gray-900">Q. What are personal items?</dt>
                                    <dd class="mt-3 text-sm text-red-400">A.  Personal items are categorized as any packages shipped from a residential address to our address. Please note we do not support personal items. All packages must be shipped directly from an online store. Any Item found within our possession that is believed to be shipped from a residential address will be disregarded and put aside. It will then be the user’s responsibility to contact the warehouse in Miami, FL, and either pay for a return shipment to the residential address or make arrangements to pick up the package. <br />*You may contact us for further details or exceptions.</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-medium text-gray-900">Q. Are all imported packages opened? And why?</dt>
                                    <dd class="mt-3 text-sm text-red-400">A.  There are cases where Calypso Shipping is required by the authorities to verify the contents of the packages we transport. The opening process consists of three actions: <br />1. Verify that the invoice matches the contents of the package. <br />2. Ensure that the package was not damaged during transport. <br />3. Report the serial number or IMEI of electronic equipment when required by the Attorney General’s Office.</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-medium text-gray-900">Q. What am I NOT allowed to ship?</dt>
                                    <dd class="mt-3 text-sm text-red-400">A.  Please see restricted items here ->
                                        <a className=' font-semibold text-indigo-600' href="https://www.jacustoms.gov.jm/sites/default/files/docs/Restriction%20Items.pdf"> Click To See</a>
                                    </dd>
                                </div>
                                <div>
                                    <dt class="text-base font-medium text-gray-900">Q. Do you make purchase on my behalf?</dt>
                                    <dd class="mt-3 text-sm text-red-400">A.  Yes, we do. We make the purchase on your behalf using our credit card. How to:<br />1. Sign up – Creating your account for updates of item purchased<br />2. Provide URL or product name<br />3. Confirm Product<br />4. Make Payment using – Cash, Bank Transfer, (Major debit and Credit card *Conditions apply)<br />5. Order Placed – Tracking provided.</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-medium text-gray-900">Q. Why does my order show delivered to my US Calypso Shipping address but i don’t see it in my Calypso Shipping account?</dt>
                                    <dd class="mt-3 text-sm text-red-400">A.  When your package shows “delivered” from your retailer, please allow up to 48-72 business hours for Calypso Shipping to post it to your account. We process packages in the order that they are received and because we receive hundreds of packages per day, we aren’t always able to post all packages to their respective accounts on the same day. However, if you have the tracking # for your package we can certainly confirm where it is in the system at the moment. Once updated to your account you will receive an email verification. In the meantime, please feel free to contact us if you have any questions regarding the status of your package(s).</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-medium text-gray-900">Q. How often do you receive shipment?</dt>
                                    <dd class="mt-3 text-sm text-red-400">A.  We ship up to 2 times per week<br />Air Freight: Once midweek<br />Sea Freight: Once Per week</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-medium text-gray-900">Q. What happens to unclaimed packages in your storeroom?</dt>
                                    <dd class="mt-3 text-sm text-red-400">A.  Once a package is received a customer has a maximum for 60 days to claim their package. Customers have 30 days after being alerted that the package is ready for pickup to claim their package, after the first 30 days a storage fee of $2.00 USD will be applied for each day leading up to the 30 days maximum limit before the package becomes owned by Calypso Shipping.</dd>
                                </div>
                                <div>
                                    <dt class="text-base font-medium text-gray-900">Q. What causes flight delays?</dt>
                                    <dd class="mt-3 text-sm text-red-400">A.	Freight companies like us as well as a multitude of other companies rely heavily on the airlines for access to their limited space. Although we require a consistent, predictable service, there are times when the airlines reschedule our shipments in favor of perishable-item shipments and resume our service afterwards. The combination of fewer flights and increased shipping demand results in delays that we cannot control. Flight delays are an inescapable occurrence. The only precaution to minimize the inconvenience is to shop early wherever possible.</dd>
                                </div>

                            </dl>
                        </div>
                    </div>
                    <Foot />
                </MantineProvider>

        }
    </>
    )
}
