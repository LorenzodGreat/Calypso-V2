import React from 'react';
import MainFoot from '../../Components/MainFoot';
import MainNav from '../../Components/MainNav';

const Claims = () => {
    return (
        <div>
            <MainNav />
            <div className='py-32 md:py-32 w-full lg:py-32'>

                <div className="text-lg w-full py-6 mx-auto">
                    <h1>
                        <span className="mt-2 block md:text-3xl lg:text-6xl text-lg text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Procedure for Claims in case of loss or damage to packages
                        </span>
                    </h1>
                    <p className="mt-8 md:text-xl lg:text-xl text-sm w-[88%] mx-auto text-gray-500 leading-8">
                        <br /><br /> ● The Customer shall check all shipments upon receipt and before leaving the office of Calypso Shipping to report any damage, missing or otherwise useless items. Failure to do so shall result in waiver of the right of the Customer to submit a claim and/ or Calypso Shipping accepting responsibility for the said claim.
                        <br /><br /> ● The Customer shall substantiate and submit any claim on a completed claim form providing to Calypso Shipping all relevant information about the package, including proof of receipt by Calypso Shipping, proof of value, estimates for cost of repair, invoices, within three (3) business days of delivery.
                        <br /><br /> ● Calypso Shipping may make such investigations as it considers necessary to satisfy itself of the validity of any claim and the contents, original shipping cartons and packing must be available to us for inspection.
                        <br /><br /> ● Calypso Shipping’s maximum liability for loss of or damage in connection with the Customer’s delivery shall in no circumstances exceed the value of the Shipment or where the Customer is not the owner of the Shipment then your liability to the Owner (whichever is the less).
                    </p>
                    <h1>
                        <span className="mt-6 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Laws
                        </span>
                    </h1>
                    <p className="mt-8 md:text-xl lg:text-xl text-sm w-[88%] text-center mx-auto text-gray-500 leading-8">
                        This Agreement shall be governed by the Laws of Jamaica.
                    </p>
                    <h1>
                        <span className="mt-6 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Headings/ Titles
                        </span>
                    </h1>
                    <p className="mt-8 md:text-xl lg:text-xl text-sm w-[88%] text-center mx-auto text-gray-500 leading-8">
                        Headings are inserted for the convenience of the parties only and not to be considered when interpreting this Agreement.
                    </p>
                    <h1>
                        <span className="mt-6 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Mandatory Law
                        </span>
                    </h1>
                    <p className="mt-8 md:text-xl lg:text-xl text-sm w-[88%] text-center mx-auto text-gray-500 leading-8">
                        Insofar as any provision contained or referred to in this Agreement may be contrary to any applicable law, government regulations order or requirements, such provision shall remain in effect as part of our Agreement to the extent that it is not overridden. The invalidity or of any provision shall not affect any other part of this Agreement.
                    </p>
                </div>
            </div>
            <MainFoot />
        </div >
    )
}

export default Claims