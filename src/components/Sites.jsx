import React from 'react'
import { createStyles, Image, Container, Title, Text, Button, SimpleGrid } from '@mantine/core';
import amazon from '../img/amazon.png'
import shein from '../img/shein.png'
import ebay from '../img/ebay.png'
import ali from '../img/ali.png'
import f21 from '../img/f21.png'
import vs from '../img/vs.png'
import oldnavy from '../img/oldnavy.png'
import fn from '../img/fn.png'
import HM from '../img/HM.png'
import zara from '../img/zara.png'
const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: 80,
    paddingRight: 80,

  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  mobileImage: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  desktopImage: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

export function SiteImage() {
  const { classes } = useStyles();

  return (
    <div className={classes.root} data-aos="fade-down">
      <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
        {/* <Image src={image} className={classes.mobileImage} /> */}
        <div>
          <Title className={classes.title}>SHOP ONLINE! ITS CHEAPER! </Title>
          <Text color="dimmed" size="lg">
            Take a look at some of our recommended
            online stores where you can get everything your looking for.
          </Text>
          {/* <Button variant="outline" size="md" mt="xl" className={classes.control}>
            Get back to home page
          </Button> */}
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-2 align-baseline gap-x-2'>
          <a target={'blank'} href="https://www.amazon.com/">
            <div className='hover:scale-125 grid bg-[#232f3e] place-content-center border p-2 duration-300 rounded-lg shadow-md'>
              <img src={amazon} height="50" width="125"
                alt="amazon" />
            </div>
          </a>
          <a target={'blank'} href="https://us.shein.com/?ici=us_tab01">
            <div className='hover:scale-125 bg-black grid place-content-center border p-2 duration-300 rounded-lg shadow-md'>
              <img src={shein} className='p-3' height="50" width="130"
                alt="shein" />
            </div>
          </a>
          <a target={'blank'} href="https://www.ebay.com/">
            <div className='hover:scale-125 bg-white grid place-content-center border p-2 duration-300 rounded-lg shadow-md'>
              <img src={ebay} className='p-3' height="50" width="130"
                alt="ebay" />
            </div>
          </a>
          <a target={'blank'} href="https://www.aliexpress.us/home.htm?gatewayAdapt=glo2usa&_randl_shipto=US">
            <div className='hover:scale-125 bg-[#e62e04] grid place-content-center border p-2 duration-300 rounded-lg shadow-md'>
              <img src={ali} className='p-3' height="50" width="130"
                alt="aliexpress" />
            </div>
          </a>
          <a target={'blank'} href="https://www.forever21.com/">
            <div className='hover:scale-125 bg-[#ffe617] grid place-content-center border p-2 duration-300 rounded-lg shadow-md'>
              <img src={f21} className='p-3 ' height="50" width="130"
                alt="forever 21" />
            </div>
          </a>
          <a target={'blank'} href="https://www.victoriassecret.com/us/">
            <div className='hover:scale-125 grid place-content-center border p-2 duration-300 rounded-lg shadow-md'>
              <img src={vs} className='p-3' height="50" width="130"
                alt="victoria secret" />
            </div>
          </a>
          <a target={'blank'} href="https://oldnavy.gap.com/">
            <div className='hover:scale-125 grid place-content-center border p-2 duration-300 rounded-lg shadow-md'>
              <img src={oldnavy} className='p-3' height="50" width="130"
                alt="Old Navy " />
            </div>
          </a>
          <a target={'blank'} href="https://www.fashionnova.com/">
            <div className='hover:scale-125 bg-black grid place-content-center border p-2 duration-300 rounded-lg shadow-md'>
              <img src={fn} className='p-3' height="50" width="130"
                alt="FashionNova " />
            </div>
          </a>
          <a target={'blank'} href="https://www2.hm.com/en_us/index.html">
            <div className='hover:scale-125 grid place-content-center border p-2 duration-300 rounded-lg shadow-md'>
              <img src={HM} className='p-3' height="50" width="130"
                alt="H&M " />
            </div>
          </a>
          <a target={'blank'} href="https://www.zara.com/us/">
            <div className='hover:scale-125 bg-black grid place-content-center border p-2 duration-300 rounded-lg shadow-md'>
              <img src={zara} className='p-3' height="50" width="130"
                alt="Zara" />
            </div>
          </a>

        </div>
        {/* <Image src={image.src} className={classes.desktopImage} /> */}
      </SimpleGrid>
    </div >
  );
}