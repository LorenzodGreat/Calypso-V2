import React from 'react'
import { MantineProvider, Text } from '@mantine/core';
import Navbar from './../components/Navbar';
import CardsCarousel from './../components/Carousel';
import Grid from '../components/Grid';
import { SiteImage } from '../components/Sites';
import { HeroImageRight } from './../components/News';
import Reviews from '../components/Review';
import Foot from '../components/Footer';


export default function Home() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Navbar/>
      <CardsCarousel/>
      <Grid/>
      <SiteImage/>
      <HeroImageRight/>
      <Reviews/>
      <Foot/>
    </MantineProvider>
  );
}