import React from 'react';
import mail from '../../img/mail.gif'
import write from '../../img/write.gif'
import box from '../../img/box.gif'
import eye from '../../img/eye.gif'
import truck from '../../img/truck.gif'
function HowWork() {
    return (<>
        <div>
            <h2 class="text-3xl my-6 text-gray-900 font-extrabold tracking-tight sm:text-4xl text-center">With Just Four(4) Easy Steps Start Shopping Today</h2>

                <div class="lg:mx-auto lg:max-w-3xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 gap-2 lg:items-start">
                    <div class="relative sm:py-16 lg:py-0">
                        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                            <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                                <img class="absolute inset-0 h-full w-full object-cover" src={write} alt="Service Image" />
                            </div>
                        </div>
                    </div>

                    <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                        <div class="pt-12 sm:pt-16 lg:pt-20">
                            <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl text-center">1.SIGN UP</h2>
                            <div class="mt-6 text-gray-500 space-y-6">
                                <p class="text-lg text-center">This free and easy process can be done by just clicking Register.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="lg:mx-auto lg:max-w-3xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 gap-2 lg:items-start">
                    <div class="relative sm:py-16 lg:py-0">
                        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                            <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                                <img class="absolute inset-0 h-full w-full object-cover" src={mail} alt="Service Image" />
                                <div class="absolute inset-0 "></div>
                                <div class="absolute inset-0 "></div>
                                <div class="relative px-8">
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                        <div class="pt-12 sm:pt-16 lg:pt-20">
                            <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl text-center">2.NOTE MAILBOX NUMBER</h2>
                            <div class="mt-6 text-gray-500 space-y-6">
                                <p class="text-lg text-center">This is unique to every account and should be used along with the address.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="lg:mx-auto lg:max-w-3xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 gap-2 lg:items-start">
                    <div class="relative sm:py-16 lg:py-0">
                        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                            <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                                <img class="absolute inset-0 h-full w-full object-cover" src={eye} alt="Service Image" />
                                <div class="absolute inset-0 "></div>
                                <div class="absolute inset-0 "></div>
                                <div class="relative px-8">
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                        <div class="pt-12 sm:pt-16 lg:pt-20">
                            <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl text-center">CHECK EMAIL AND DASHBOARD</h2>
                            <div class="mt-6 text-gray-500 space-y-6">
                                <p class="text-lg text-center">Your items will be delivered to our front desk, you will receive notifications that your packages have been safely
                            delivered and will be shipped immediately to Jamaica.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="lg:mx-auto lg:max-w-3xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 gap-2 lg:items-start">
                    <div class="relative sm:py-16 lg:py-0">
                        <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                            <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                                <img class="absolute inset-0 h-full w-full object-cover" src={truck} alt="Service Image" />
                                <div class="absolute inset-0 "></div>
                                <div class="absolute inset-0 "></div>
                                <div class="relative px-8">
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
                        <div class="pt-12 sm:pt-16 lg:pt-20">
                            <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl text-center">DELIVER/PICKUP PACKAGE</h2>
                            <div class="mt-6 text-gray-500 space-y-6">
                                <p class="text-lg text-center"> Once the item is ready for pickup you will be notified by email and dashboard or We will deliver you package to you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>);
}

export default HowWork;