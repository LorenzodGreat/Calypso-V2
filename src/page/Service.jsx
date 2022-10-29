import React from 'react'
import { MantineProvider, Text } from '@mantine/core';
import Navbar from './../components/Navbar';
import Foot from '../components/Footer';
import OurService from './OurService';
import PKInvoice from './PKInvoice';
import HowWork from './HowWork';
import Banner from './../img/Banner.jpg';

export default function Service() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <div className='relative'>
            <img className=' sm:absolute md:absolute hidden mb:block sm:block w-screen ' src={Banner} alt="opps error loading image" />
                <Navbar />
            </div>
            <div className='pt-16'>
                <div className="tabs">
                    {/* <h1>React Tabs</h1> */}
                    <Tabs>
                        <Tab label="1. How It Works">
                            <div>
                                <HowWork />
                            </div>
                        </Tab>
                        <Tab label="2. Our Services">
                            <div>
                                <OurService />
                            </div>
                        </Tab>
                        <Tab label="3. Package Invoices">
                            <div>
                                <PKInvoice />
                            </div>
                        </Tab>
                        <Tab label="4. Why Shop Online">
                            <div>

                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
            <Foot />
        </MantineProvider>
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
