import React, { useEffect } from 'react'
import MainFoot from '../../Components/MainFoot'
import MainNav from '../../Components/MainNav'
import Load from '../../components/loading'
import { useState } from 'react'
const people = [
    {
        id: 1,
        name: 'Discreet Purchases: ',
        role: '“Some things are better done in privacy. Online shopping enables me to purchase undergarments and lingerie or adult toys without the embarrassment or scrutiny from onlookers.” (Melissa M.)',
    },
    {
        id: 2,
        name: 'Better Prices:',
        role: 'You get cheap deals and better prices from online stores because products come to you directly from the manufacturer or seller without middlemen involved. Many online shops offer discount coupons and rebates.',
    },
    {
        id: 3,
        name: 'Convenience:',
        role: 'You don’t have to wait in a line or wait until the store clerk helps you with your purchases. You can do your shopping in minutes even if you are busy. Apart from saving time and avoiding crowds, online shops give us the opportunity to shop 24/7 and also reward us with ‘no-pollution’ shopping.',
    },
    {
        id: 4,
        name: 'Variety:',
        role: 'You can get several brands and products from different sellers, all in one place. You can get in on the latest international trends without spending money on travel; you can shop from retailers in other parts of the world without being limited by geographic area. Online stores offer a far greater selection of colours and sizes than you will find locally. If you find that the product you need is out of stock online, you can take your business to another online store where the product is available.',
    },
    {
        id: 5,
        name: 'Fewer Expenses:',
        role: 'When we shop online in the comfort of our own homes, we alleviate many expenses associated with a shopping trip, such as, gas costs, toll fees, etc.',
    },
    {
        id: 6,
        name: 'Comparison of Prices:',
        role: 'Online shopping makes it possible to compare and research products and prices from different sellers. Online stores also give you the ability to share information and reviews with other shoppers who have first-hand experience with a product or retailer.',
    },
    {
        id: 7,
        name: 'Crowds:',
        role: 'Most persons like to avoid the crowds when shopping. Crowds force us to be hasty and also create a problem when it comes to finding a parking spot near your desired store and also when going back to your vehicle later encumbered with shopping bags.',
    },
    {
        id: 8,
        name: 'Compulsive Shopping:',
        role: 'Many times, when we go out shopping, we end up buying things we do not require because of a store clerk’s upselling skills or those ‘conveniently’ placed products at checkout. Other times we’re forced to compromise on our choices due to a lack of products to choose from.',
    },
    // {
    //     id: 9,
    //     name: 'Discreet Purchases:',
    //     role: 'Some things are better done in privacy. Online shopping enables me to purchase undergarments and lingerie or adult toys without the embarrassment or scrutiny from onlookers.” (Melissa M.)',
    // },
    // More people...
]

const Service = () => {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    return (
        <>
            {
                loading ?
                    <Load />
                    :
                    <>
                        <MainNav />
                        <section class=" pt-20 dark:bg-[#270657]">
                            <div class="container px-6 py-10 mx-auto">
                                <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">explore our <br /> awesome <span class="underline decoration-blue-500">Services</span></h1>

                                <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                                </p>

                                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                                    <div class="space-y-3">

                                        <img className='object-cover object-center w-14 h-14 rounded-full' src="https://media.istockphoto.com/id/499277049/photo/cargo-airplane.jpg?b=1&s=170667a&w=0&k=20&c=aPOOc4b--G753iXtPFBppIl0Xz8DsX1iIJfI39wwsT4=" alt="Air Freight" srcset="" />

                                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Air Freight</h1>

                                        <p class="text-gray-500 dark:text-gray-300">
                                            Parcels of any weight or size - Get fast delivery to Jamaica with 5-7 days. If you choose to use the Air Freight then you can expect your item(s) to arrive in Jamaica within 5-7 business days without unforeseen delays.
                                        </p>


                                    </div>

                                    <div class="space-y-3">

                                        <img className='object-cover object-center w-14 h-14 rounded-full' src="https://images.unsplash.com/photo-1617952739760-1dcae19a1d93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Sea Freight" srcset="" />

                                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Sea Freight</h1>

                                        <p class="text-gray-500 dark:text-gray-300">
                                            E &D Container, Barrells, Pallets - Get fast delivery to Jamaica within 5-10 days (If you choose to use the Sea Freight then you can expect your item(s) to arrive within Jamaica in 5-10 business days without unforeseen delays.)
                                        </p>


                                    </div>

                                    <div class="space-y-3">

                                        <img className='object-cover object-center w-14 h-14 rounded-full' src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="E-commerce" srcset="" />

                                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Email and Text notification</h1>

                                        <p class="text-gray-500 dark:text-gray-300">
                                            We keep you updated via email and Whatsapp with the progress of your package every step of the way.
                                        </p>


                                    </div>

                                    <div class="space-y-3">

                                        <img className='object-cover object-center w-14 h-14 rounded-full' src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Email" srcset="" />


                                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Credit Card Service</h1>

                                        <p class="text-gray-500 dark:text-gray-300">
                                            Don’t ever miss out on an online deal again! If you don’t have a credit card, we’ll shop for you! Contact us for more details.
                                        </p>


                                    </div>

                                    <div class="space-y-3">

                                        <img className='object-cover object-center w-14 h-14 rounded-full' src="https://images.unsplash.com/photo-1614267119077-51bdcbf9f77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="Credit Card" srcset="" />

                                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Membership</h1>

                                        <p class="text-gray-500 dark:text-gray-300">
                                            Shipping membership program – referral rewards. We handle the customs clearance for all your packages. If any duties or fees are charged it is added to your invoice.
                                        </p>


                                    </div>

                                    <div class="space-y-3">

                                        <img className='object-cover object-center w-14 h-14 rounded-full' src="https://img.freepik.com/free-photo/business-success-teamwork-concept-with-wooden-figures-people-side-view_176474-9270.jpg?w=900&t=st=1667575596~exp=1667576196~hmac=bb0663ec3eabd365f9b81099f53368597071a2a885ac16ef4762965ee6f7717b" alt="Credit Card" srcset="" />

                                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">E-commerce</h1>

                                        <p class="text-gray-500 dark:text-gray-300">
                                            Pre-order electronics and Appliances.
                                        </p>


                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class=" dark:bg-[#270657]">
                            <div class="container px-6 py-10 mx-auto">
                                {/* <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">explore our <br /> awesome <span class="underline decoration-blue-500">Components</span></h1>

                    <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                    </p> */}

                                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
                                    <div class="p-8 space-y-3  bg-gradient-to-br from-[#52cbe4] via-[#9f55f2] to-[#8d44de] rounded-xl">
                                        <span class="inline-block text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                            </svg>
                                        </span>

                                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">Making Request ?</h1>

                                        <p class="text-gray-900 font-semibold">
                                            The Customer making a request for the carriage of the package from the Collection Point to the Delivery Point using one of Calypso Shipping Motor Vehicles and shall pay the requisite Fees for the Services required.
                                        </p>
                                    </div>

                                    <div class="p-8 space-y-3  bg-gradient-to-br from-[#52cbe4] via-[#9f55f2] to-[#8d44de] rounded-xl">
                                        <span class="inline-block text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                            </svg>
                                        </span>

                                        <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">The Process..</h1>

                                        <p class="text-gray-900 font-semibold">
                                            Calypso Shipping shall carry a package from the Collection Point, the Norman Manley International Airport, Kingston Jamaica or the Kingston Wharves to the Delivery Point which is Calypso Shipping’s Head Office.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class=" dark:bg-[#270657]">
                            <div class="container px-6 py-10 mx-auto">
                                <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Package Invoices</h1>

                                <div class="mt-2">
                                    <span class="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                                    <span class="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
                                    <span class="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
                                </div>

                                <div class="mt-8 xl:mt-12 lg:flex lg:items-center">
                                    <div class="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                                        <div class="space-y-3">
                                            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">INVOICES! HOW DOES THIS WORK?</h1>

                                            <p class="text-gray-500 dark:text-gray-300">
                                                Assuming that you're new here, welcome! In case you're not yet a part, run come! On the off chance that you're not new here yet and need a boost, you're on the right page. Let’s walk you through the whole interaction.
                                            </p>
                                        </div>

                                        <div class="space-y-3">
                                            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">WHAT'S AN INVOICE?</h1>

                                            <p class="text-gray-500 dark:text-gray-300">
                                                It's a record showing verification of your buy that you get after you've made a purchase on the internet. You can think that it is in your email inbox named "Purchase Confirmed" or "Purchase Confirmation". You can likewise track down the receipt on the site inside the "My Account" or "My Orders" area.
                                            </p>
                                        </div>

                                        <div class="space-y-3">
                                            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">WHY YOU NEED TO UPLOAD THE INVOICE?</h1>

                                            <p class="text-gray-500 dark:text-gray-300">
                                                Gifts and Purchases outside of Jamaica that are entering the island are classified 'imports'. All imports are likely to be opened and inspect by Jamaica Customs Agency (government authority), and you (the shipper) are requiring to present a proof of purchase or any documentation laying out what's inside the package to guarantee convenience in clearance and appropriate handling.
                                            </p>
                                        </div>

                                        <div class="space-y-3">
                                            <h1 class="text-xl font-semibold text-gray-700 capitalize dark:text-white">WHERE TO UPLOAD THE INVOICE?</h1>

                                            <p class="text-gray-500 dark:text-gray-300">
                                                ALL INVOICES ARE REQUIRED TO BE UPLOADED TO YOUR ACCOUNT – www.Calypso shipping.com. Emailing or Whatsapp interaction will be postponed, so we urge you to inform us on the off chance that you want extra direction with the upload.
                                            </p>
                                        </div>
                                    </div>

                                    <div class="hidden lg:flex lg:w-1/2 lg:justify-center">
                                        <img class="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class=" dark:bg-[#270657]">
                            <div class="container px-6 py-10 mx-auto">
                                <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">Here Are A few Reasons To Shop Online</h2>
                                <h2 class="text-base text-indigo-400 text-center font-semibold tracking-wide uppercase">There are many reasons for online retailers to be optimistic about the future of online retail. Here are some consumers’ reasons for buying online, in their own words:</h2>
                                <br />
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {people.map((person) => (
                                        <div
                                            key={person.id}
                                            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                        >
                                            {/* <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" />
                            </div> */}
                                            <div className="flex-1 min-w-0">
                                                <a href="#" className="focus:outline-none">
                                                    <span className="absolute inset-0" aria-hidden="true" />
                                                    <p className="text-sm font-medium mb-1 text-gray-900">{person.name}</p>
                                                    <p className="text-sm text-gray-500">{person.role}</p>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        <MainFoot />
                    </>
            }
        </>
    )
}

export default Service