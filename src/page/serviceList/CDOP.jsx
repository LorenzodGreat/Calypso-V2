import React from 'react'
import { MantineProvider, Text } from '@mantine/core';
import Navbar from '../../components/Navbar';
import { useState, useEffect } from 'react'
import Load from '../../components/loading';
import Foot from '../../components/Footer';
import Banner from '../../img/Banner.jpg'

export default function CDOP() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])

    return (
        <>
            {
                loading ?
                    <Load />
                    :
                    <MantineProvider withGlobalStyles withNormalizeCSS>
                        <div className='relative'>
                            <img className=' sm:absolute md:absolute hidden mb:block sm:block w-screen ' src={Banner} alt="opps error loading image" />
                            <Navbar />
                        </div>

                        <div className='w-full px-4 py-32 md:py-32 lg:py-32'>

                            <div className="text-lg py-6 mx-auto">
                                <h1>
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                        Collection/Delivery Of Packages
                                    </span>
                                </h1>
                                <p className="mt-8 text-xl w-[88%] mx-auto text-gray-500 leading-8">
                                    <br /><br /> ● Calypso Shipping shall ask the person receiving the package to sign a receipt, which may be in electronic form and which shall constitute proof of delivery. The Customer may be provided with a copy of the receipt within Forty-Eight (48) hours from the date of delivery. Such a receipt shall be conclusive evidence as to the fact and time of delivery of the package and, apart from any observation to the contrary noted on the receipt, evidence that the package was delivered in good condition.
                                    <br /><br /> ● Calypso Shipping shall call or send email advisory to Customer regarding any unclaimed packages. If Calypso Shipping is unable to reach the Customer by phone or otherwise after numerous attempts the package shall be kept at Calypso Shipping’s facility and sold after a period of sixty (60) days.
                                    <br /><br /> ● Calypso Shipping shall make every effort to deliver the Customer’s Shipment according to our regular delivery schedules. Calypso Shipping shall not be responsible for any delays in collecting a shipment, transporting a shipment (including delays caused by any diversion) and delivering a shipment
                                    occasioned by the following circumstances: -
                                   <br /><br /><span className='text-red-400'> Act of God including but not limited to storm, tempest or flood;</span>
                                   <br /><br /><span className='text-red-400'>Act of war hostilities riot or civil commotion or the threat or fear of such conditions prevailing;</span>
                                   <br /><br /><span className='text-red-400'>Criminal malicious or negligent actions or acts or omissions of third parties.</span>
                                   <br /><br /><span className='text-red-400'>Industrial action or unforeseeable traffic conditions.</span>
                                   <br /><br /><span className='text-red-400'>Suspension or cancellation of transport services by reason of or of the threat or fear of inclement weather.</span>
                                   <br /><br /><span className='text-red-400'>Fire, lightning or explosion.</span>
                                   <br /><br /><span className='text-red-400'>Seizure under legal process.</span>
                                   <br /><br /><span className='text-red-400'>Your act, default or omission of whatever nature, or act, default or omission of your employees
                                    or agents or any person having any interest in the goods.</span>
                                    <br /><br /><span className='text-red-400'>Insufficient or improper packing labeling or addressing; or
                                    The unavailability at the delivery address of the consignee or other authorized recipient.</span>

                                </p>
                            </div>
                        </div>
                        <Foot />
                    </MantineProvider>
            }
        </>
    );
}

class Tabs extends React.Component {
    state = {
        activeTab: this.props.children[0].props.label
    }
    changeTab = (tab) => {

        this.setState({ activeTab: tab });
    };
    render() {

        let content;
        let buttons = [];
        return (
            <div>
                {React.Children.map(this.props.children, child => {
                    buttons.push(child.props.label)
                    if (child.props.label === this.state.activeTab) content = child.props.children
                })}

                <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab} />
                <div className="tab-content">{content}</div>

            </div>
        );
    }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {

    return (
        <div className="tab-buttons">
            {buttons.map(button => {
                return <button className={button === activeTab ? 'active' : ''} onClick={() => changeTab(button)}>{button}</button>
            })}
        </div>
    )
}

const Tab = props => {
    return (
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}
