import React from 'react'
import { MantineProvider, Text } from '@mantine/core';
import Navbar from '../../components/Navbar';
import { useState, useEffect } from 'react'
import Load from '../../components/loading';
import Foot from '../../components/Footer';
import Banner from '../../img/Banner.jpg'
export default function INAFC() {
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

                        <div className=' w-full px-4 py-32 md:py-32 lg:py-32'>

                            <div className="text-lg py-6 mx-auto">
                                <h1>
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    Items Not Acceptable For Carriage
                                    </span>
                                </h1>
                                <p className="mt-8 text-xl md:w-[88%] lg:w-[88%] mx-auto text-gray-500 leading-8">
                                    The Customer shall not submit for carriage and Calypso Shipping shall not except for carriage the following items in accordance with industry best practices and Customs Rules and Regulations:
                                    <br /><br /> ● Money or cash or items readily convertible to money (including but not limited to coins or negotiable instruments equivalent to cash such as cheques, endorsed stocks, bills of exchange, bonds or other securities)
                                    <br /><br /> ● Gold or silver, precious stones, valuables, antiques, pictures (apart from commercial artwork), stamps or unique items and jewelry;
                                    <br /><br /> ● Perishable goods, food, liquids, livestock, plants, drugs, medicines or alcoholic beverages (unless previously agreed to in writing) and we shall have no liability (whether caused by negligence or otherwise) for loss, damage, non-delivery, mis-delivery or late delivery of the same;
                                    <br /><br /> ● Goods which might endanger human or animal life, which might damage other goods being transported by the Company, or the carriage, import or export of which is prohibited by applicable law;
                                    <br /><br /> ● Noxious, dangerous, hazardous, explosive or inflammable items, firearms including parts of firearms, ammunition or detonators, or any goods likely to cause damage;
                                    <br /><br /> ● Shipments constituting items which in our discretion we cannot transport legally or safely.
                                    <br /><br /> ● If the Customer submits any such goods to Calypso Shipping for carriage otherwise than by special arrangement previously made in writing, Calypso Shipping shall be under no liability whatsoever in connection with the goods however arising.
                                    <br /><br /> ● All packages shall be delivered in accordance with the terms and conditions of Calypso Shipping. Calypso Shipping reserve the right to reject packages based on the above limitations or for reasons of safety or security
                                    <br /><br /><span className=' text-red-600'>RESTRICTED ITEMS:</span>
                                    <a className='' href="https://www.jacustoms.gov.jm/sites/default/files/docs/Restriction%20Items.pdf" target={'blank'}> CLICK HERE</a>

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
