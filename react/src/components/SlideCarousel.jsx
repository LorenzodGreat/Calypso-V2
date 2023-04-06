import React from 'react';
import amazon from '../img/siteimage/amazon.jpg'
import shein from '../img/siteimage/shein.png'
import ebay from '../img/siteimage/ebay.png'
import f21 from '../img/siteimage/f21.png'
import fn from '../img/siteimage/fn.png'
import HM from '../img/siteimage/HM.png'
import oldnavy from '../img/siteimage/oldnavy.png'
import vs from '../img/siteimage/vs.png'
import zara from '../img/siteimage/zara.png'
import ali from '../img/siteimage/ali.png'

function SlideCarousel() {
    return (<>
        <div class="slider">
            <div class="slide-track">
                <div class="slide">
                    <img src={amazon} height="10" width="75"
                        alt="amazon" />
                </div>
                <div class="slide">
                    <img src={HM} height="10" width="75"
                        alt="HM" />
                </div>
                <div class="slide">
                    <img src={ebay} height="10" width="75"
                        alt="ebay" />
                </div>
                <div class="slide">
                    <img src={f21} height="10" width="75"
                        alt="f21" />
                </div>
                <div class="slide">
                    <img src={fn} height="10" width="75"
                        alt="fn" />
                </div>
                <div class="slide">
                    <img src={HM} height="10" width="75"
                        alt="HM" />
                </div>
                <div class="slide">
                    <img src={oldnavy} height="10" width="75"
                        alt="oldnavy" />
                </div>
                <div class="slide">
                    <img src={vs} height="10" width="75"
                        alt="vs" />
                </div>
                <div class="slide">
                    <img src={zara} height="10" width="75"
                        alt="zara" />
                </div>
                <div class="slide">
                    <img src={ali} height="10" width="75"
                        alt="ali" />
                </div>
                <div class="slide">
                    <img src={amazon} height="10" width="75"
                        alt="amazon" />
                </div>
                <div class="slide">
                    <img src={shein} height="10" width="75"
                        alt="shein" />
                </div>
                <div class="slide">
                    <img src={ebay} height="10" width="75"
                        alt="ebay" />
                </div>
                <div class="slide">
                    <img src={f21} height="10" width="75"
                        alt="f21" />
                </div>
                
            </div>
        </div>
    </>);
}

export default SlideCarousel;