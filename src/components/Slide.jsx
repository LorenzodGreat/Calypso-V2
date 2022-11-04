import React from 'react';
import amazon from '../img/amazon.jpg'
import shein from '../img/shein.png'

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
                    <img src={shein} height="50" width="125"
                        alt="Ebay" />
                </div>

                <div class="slide">
                    <img src='https://logos-world.net/wp-content/uploads/2020/05/Zara-Emblem.jpg' height="50" width="125"
                        alt="Zara" />
                </div>

                <div class="slide">
                    <img src={amazon} height="50" width="125"
                        alt="Victorisaca" />
                </div>

                <div class="slide">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png' height="50" width="125"
                        alt="H&M" />
                </div>

                <div class="slide">
                    <img src='https://logodownload.org/wp-content/uploads/2021/04/forever-21-logo.png' height="50" width="125"
                        alt="Forever21" />
                </div>

                <div class="slide">
                    <img src='https://download.logo.wine/logo/Old_Navy/Old_Navy-Logo.wine.png' height="50" width="125"
                        alt="OldNavy" />
                </div>

                <div class="slide">
                    <img src='https://assets.stickpng.com/images/621e35f8f1231b47bf27034c.png' height="50" width="125"
                        alt="FashionNova" />
                </div>

                <div class="slide">
                    <img src='https://500logos.net/wp-content/uploads/2021/04/AliExpress-logo.png' height="50" width="125"
                        alt="AliExpress" />
                </div>

            </div>
        </div>
    </>);
}

export default Slide;