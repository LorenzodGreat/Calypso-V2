import React from 'react';
import amazon from '../img/about/amazon.jpg'
import shein from '../img/about/shein.png'
import ebay from '../img/about/ebay.png'
import f21 from '../img/about/f21.png'
import fn from '../img/about/fn.png'
import HM from '../img/about/HM.png'
import oldnavy from '../img/about/oldnavy.png'
import vs from '../img/about/vs.png'
import zara from '../img/about/zara.png'
import ali from '../img/about/ali.png'

function Slide() {
    return (<>
        <div class="slider">
            <div class="slide-track">
                <div class="slide">
                    <img src={amazon} height="50" width="125"
                        alt="amazon" />
                </div>
                <div class="slide">
                    <img src={shein} height="50" width="125"
                        alt="shein" />
                </div>
                <div class="slide">
                    <img src={ebay} height="50" width="125"
                        alt="ebay" />
                </div>
                <div class="slide">
                    <img src={f21} height="50" width="125"
                        alt="f21" />
                </div>
                <div class="slide">
                    <img src={fn} height="50" width="125"
                        alt="fn" />
                </div>
                <div class="slide">
                    <img src={HM} height="50" width="125"
                        alt="HM" />
                </div>
                <div class="slide">
                    <img src={oldnavy} height="50" width="125"
                        alt="oldnavy" />
                </div>
                <div class="slide">
                    <img src={vs} height="50" width="125"
                        alt="vs" />
                </div>
                <div class="slide">
                    <img src={zara} height="50" width="125"
                        alt="zara" />
                </div>
                <div class="slide">
                    <img src={ali} height="50" width="125"
                        alt="ali" />
                </div>
                <div class="slide">
                    <img src={amazon} height="50" width="125"
                        alt="amazon" />
                </div>
                <div class="slide">
                    <img src={shein} height="50" width="125"
                        alt="shein" />
                </div>
                <div class="slide">
                    <img src={ebay} height="50" width="125"
                        alt="ebay" />
                </div>
                <div class="slide">
                    <img src={f21} height="50" width="125"
                        alt="f21" />
                </div>
                
            </div>
        </div>
    </>);
}

export default Slide;