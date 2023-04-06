import React, { Component } from 'react'
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { rem } from '@mantine/core';

function SlideShow() {
    const autoplay = useRef(Autoplay({ delay: 10000 }));
    return (
        <div className='bg-black text-white'>
            <Carousel
                maw={320}
                mx="auto"
                withIndicators
                height={200}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                styles={{
                    indicator: {
                        width: rem(12),
                        height: rem(4),
                        transition: 'width 250ms ease',

                        '&[data-active]': {
                            width: rem(40),
                        },
                    },
                }}
            >
                <Carousel.Slide>1</Carousel.Slide>
                <Carousel.Slide>2</Carousel.Slide>
                <Carousel.Slide>3</Carousel.Slide>
                {/* ...other slides */}
            </Carousel>
        </div>
    );
}

export default SlideShow;
