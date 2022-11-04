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

            <div role="list" class="mt-3 grid grid-cols-1 p-4 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2">
                <div className="sm:flex">
                    <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                        <img src={write} alt="" srcset="" className='h-28' />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold">SIGN UP </h4>
                        <p className="mt-1">This free and easy process can be done by just clicking Register.
                        </p>
                    </div>
                </div>
                <div className="sm:flex">
                    <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                        <img src={mail} alt="" srcset="" className='h-28' />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold">NOTE MAILBOX NUMBER  </h4>
                        <p className="mt-1">
                            This is unique to every account and should be used along with the address. </p>
                    </div>
                </div>
                <div className="sm:flex">
                    <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                        <img src={eye} alt="" srcset="" className='h-28' />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold">CHECK EMAIL AND DASHBOARD </h4>
                        <p className="mt-1">
                            Your items will be delivered to our front desk, you will receive notifications that your packages have been safely
                            delivered and will be shipped immediately to Jamaica.
                        </p>
                    </div>
                </div>
                <div className="sm:flex">
                    <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                        <img src={truck} alt="" srcset="" className='h-28' />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold">DELIVER/PICKUP PACKAGE</h4>
                        <p className="mt-1">
                            Once the item is ready for pickup you will be notified by email and dashboard or We will deliver you package to you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default HowWork;