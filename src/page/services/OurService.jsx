import React from 'react';
import Service1 from '../../img/phone.PNG'
import Service2 from '../../img/phone2.png'
function OurService() {
    return (<>
        <div class="relative bg-white">
            <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
                <div class="relative sm:py-16 lg:py-0">
                    <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                        <div class="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"></div>
                        <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                            <defs>
                                <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                        </svg>
                    </div>
                    <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                        <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                            <img class="absolute inset-0 h-full w-full object-cover" src={Service1} alt="Service Image" />
                            <div class="absolute inset-0 "></div>
                            <div class="absolute inset-0 "></div>
                            <div class="relative px-8">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                    <div class="pt-12 sm:pt-16 lg:pt-20">
                        <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl text-center">Making Request ?</h2>
                        <div class="mt-6 text-gray-500 space-y-6">
                            <p class="text-lg text-center">The Customer making a request for the carriage of the package from the Collection Point to the
                                Delivery Point using one of Calypso Shipping Motor Vehicles and shall pay the requisite Fees for the
                                Services required.
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        <main className="lg:relative">
            <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
                <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
                    <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl text-center">The Process..</h2>

                    <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                        Calypso Shipping shall carry a package from the Collection Point, the Norman Manley International
                        Airport, Kingston Jamaica or the Kingston Wharves to the Delivery
                        Point which is Calypso Shipping’s Head Office.
                    </p>
                </div>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={Service2}
                    alt="Service Image"
                />
            </div>
        </main>
        <div>
            <h2 class="text-3xl my-6 text-gray-900 font-extrabold tracking-tight sm:text-4xl text-center">HERE’S A LIST OF OUR SERVICES</h2>

            <div role="list" class="mt-3 grid grid-cols-1 p-6 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2">
                <div className="sm:flex">
                    <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                        <img className="h-32 w-full sm:w-32 border rounded-md shadow-md hover:scale-150 transition-all duration-500 border-gray-300 bg-white text-gray-300" src="https://media.istockphoto.com/id/499277049/photo/cargo-airplane.jpg?b=1&s=170667a&w=0&k=20&c=aPOOc4b--G753iXtPFBppIl0Xz8DsX1iIJfI39wwsT4=" alt="Air Freight" srcset="" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold">Air Freight</h4>
                        <p className="mt-1">
                            Parcels of any weight or size - Get fast delivery
                            to Jamaica with 5-7 days. If you choose to use the Air Freight
                            then you can expect your item(s) to arrive in Jamaica within
                            5-7 business days without unforeseen delays)
                        </p>
                    </div>
                </div>
                <div className="sm:flex">
                    <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                        <img className="h-32 w-full sm:w-32 border rounded-md shadow-md hover:scale-150 transition-all duration-500 border-gray-300 bg-white text-gray-300" src="https://images.unsplash.com/photo-1617952739760-1dcae19a1d93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Sea Freight" srcset="" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold">Sea Freight </h4>
                        <p className="mt-1">
                            E &D Container, Barrells, Pallets - Get fast delivery to Jamaica within 5-10 days (If you choose to use the Sea Freight then you can expect your item(s) to arrive within Jamaica in 5-10 business days without unforeseen delays.)
                        </p>
                    </div>
                </div>
                <div className="sm:flex">
                    <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                        <img className="h-32 w-full sm:w-32 border rounded-md shadow-md hover:scale-150 transition-all duration-500 border-gray-300 bg-white text-gray-300" src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="E-commerce" srcset="" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold">E-commerce</h4>
                        <p className="mt-1">
                            Pre-order electronics and Appliances.
                        </p>
                    </div>
                </div>
                <div className="sm:flex">
                    <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                        <img className="h-32 w-full sm:w-32 border rounded-md shadow-md hover:scale-150 transition-all duration-500 border-gray-300 bg-white text-gray-300" src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Email" srcset="" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold">Email and Text notification </h4>
                        <p className="mt-1">
                            We keep you updated via email and Whatsapp with the progress of your package every step of the way.
                        </p>
                    </div>
                </div>
                <div className="sm:flex">
                    <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                        <img className="h-32 w-full sm:w-32 border rounded-md shadow-md hover:scale-150 transition-all duration-500 border-gray-300 bg-white text-gray-300" src="https://images.unsplash.com/photo-1614267119077-51bdcbf9f77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="Credit Card" srcset="" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold">Credit Card Service </h4>
                        <p className="mt-1">
                            Don’t ever miss out on an online deal again! If you don’t have a credit card, we’ll shop for you! Contact us for more details.
                        </p>
                    </div>
                </div>
                <div className="sm:flex">
                    <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                        <img className="h-32 w-full sm:w-32 border rounded-md shadow-md hover:scale-150 transition-all duration-500 border-gray-300 bg-white text-gray-300" src="https://img.freepik.com/free-photo/business-success-teamwork-concept-with-wooden-figures-people-side-view_176474-9270.jpg?w=900&t=st=1667575596~exp=1667576196~hmac=bb0663ec3eabd365f9b81099f53368597071a2a885ac16ef4762965ee6f7717b" alt="Credit Card" srcset="" />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold">Membership </h4>
                        <p className="mt-1">
                            Shipping membership program – referral rewards.
                            We handle the customs clearance for all your packages. If any duties or fees are charged it is added to your invoice.
                        </p>
                    </div>
                </div>
            </div>
        </div>


    </>);
}

export default OurService;