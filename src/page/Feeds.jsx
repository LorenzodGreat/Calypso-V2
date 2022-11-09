import { useState, useEffect } from 'react'
import Load from './../components/loading';
import Navbar from '../components/Navbar';
import Foot from '../components/Footer';
import Banner from './../img/Banner.jpg';
import { MantineProvider, Text } from '@mantine/core';

export default function Feeds() {
    const people = [
        {
            name: 'Lindsay Walton',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
        },
        // More people...
    ]
    const activityItems = [
        { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
        // More items...
    ]



    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [])

    return (<>
        {
            loading
                ?
                <Load />
                :
                <MantineProvider withGlobalStyles withNormalizeCSS>
                    <div className='relative'>
                        <img className=' sm:absolute md:absolute hidden mb:block sm:block w-screen ' src={Banner} alt="opps error loading image" />
                        <Navbar />
                    </div>

                    <div className='py-32 md:py-32 lg:py-32'>
                        <ul role="list" className="divide-y divide-gray-200">
                            {activityItems.map((activityItem) => (
                                <li key={activityItem.id} className="py-4">
                                    <div className="flex space-x-3">
                                        <img className="h-6 w-6 rounded-full" src={activityItem.person.imageUrl} alt="" />
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-sm font-medium">{activityItem.person.name}</h3>
                                                <p className="text-sm text-gray-500">{activityItem.time}</p>
                                            </div>
                                            <p className="text-sm text-gray-500">
                                                Deployed {activityItem.project} ({activityItem.commit} in master) to {activityItem.environment}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Foot />
                </MantineProvider>

        }
    </>
    )
}