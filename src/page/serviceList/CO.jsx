import React from 'react'
import { MantineProvider, Text } from '@mantine/core';
import Navbar from '../../components/Navbar';
import { useState, useEffect } from 'react'
import Load from '../../components/loading';
import Foot from '../../components/Footer';
import Banner from '../../img/Banner.jpg'
export default function CO() {
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

                        <div className='max-w-prose px-4 py-32 md:py-32 lg:py-32'>

                            <div className="text-lg py-6 mx-auto">
                                <h1>
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                        Customer’s Obligations:
                                    </span>
                                </h1>
                                <p className="mt-8 text-xl w-[88%] mx-auto text-gray-500 leading-8">
                                    When making a request for the carriage of a package, the Customer shall inform Calypso Shipping of:
                                    <br /><br />  ● The quantity of packages;
                                    <br /><br />  ● The size, weight and dimensions of each package;
                                    <br /><br />  ● The nature of the contents of each package;
                                    <br /><br />  ● The destination(s) the package(s) are to be delivered, where necessary;
                                    <br /><br />  ● Any special requirements regarding the handling or transportation of the package(s)
                                    <br /><br />  ● The Customer shall certify that shipment details are complete and accurate and shall agree, whether acting on his/her own behalf or as an agent for and on behalf of any other person having interest in this delivery, to all the terms and conditions hereof and to any applicable tariff, laws and/ or regulations.
                                    <br /><br />  ● The Customer shall ensure that packages transported to Calypso Shipping for delivery are securely packed and properly marked with the address.
                                    <br /><br />  ● The Customer shall make correct declaration of the size of the package in terms weight, length and width.
                                    <br /><br />  ● The Customer shall be liable to undertake any additional charges to handle the importation of packages that are larger than was originally stated.
                                    <br /><br />  ● The Customer shall pay all shipment charges and destination duties and taxes for this shipment if the receiver or third party does not pay.
                                    <br /><br />  ● The Customer shall pay all shipment charges including but not limited to incorrect declaration of cargo, improper or insufficient packing securing marking or addressing of the Shipment, or for the acts or omissions of the recipient or anyone else with an interest in the Shipment.

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
