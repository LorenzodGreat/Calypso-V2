import React from 'react'
import { MantineProvider, Text } from '@mantine/core';
import Navbar from '../../components/Navbar';
import { useState, useEffect } from 'react'
import Load from '../../components/loading';
import Foot from '../../components/Footer';
import Banner from '../../img/Banner.jpg'

export default function Inspection() {
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

                        <div className=' py-32 md:py-32 lg:py-32'>

                            <div className="text-lg py-6 mx-auto">
                                <h1>
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                        Inspection
                                    </span>
                                </h1>
                                <p className="mt-8 text-xl text-center w-[88%] mx-auto text-gray-500 leading-8">
                                    For reasons of security, Calypso Shipping may inspect or scan any package at random prior to shipping and delivery.
                                    <br /><br /> Calypso Shipping undertakes to deliver packages to Calypso Shipping’s Head Office or to the Delivery Point depending on the request of the Customer. Subject to any special instructions agreed between Calypso Shipping and the Customer, Calypso Shipping shall deliver the package at the Delivery Point to the person named as recipient or to some other responsible person at that address who is representing the interest of the Customer. Calypso Shipping shall not be liable if any person at the delivery address misrepresents his or her position to receive a package on the Customer’s behalf.
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
