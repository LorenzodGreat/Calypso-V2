import React from 'react'
import { MantineProvider, Text } from '@mantine/core';
import Navbar from './../components/Navbar';
import CardsCarousel from './../components/Carousel';
import Grid from '../components/Grid';
import { SiteImage } from '../components/Sites';
import { HeroImageRight } from './../components/News';
import Reviews from '../components/Review';
import Foot from '../components/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import Load from '../components/loading';


export default function Home() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000);
  }, [])

  return (
    <>
      {
        loading ?
          <Load/>
          :
          <MantineProvider withGlobalStyles withNormalizeCSS>
            <Navbar />
            <CardsCarousel />
            <Grid />
            <SiteImage />
            <HeroImageRight />
            <Reviews />
            <Foot />
          </MantineProvider>
      }
    </>

  );
}