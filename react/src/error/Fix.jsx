import React from 'react';

function Fix() {
    return (<>
        <div class="maintenance">
            <div class="maintenance_contain">
                <img src="https://demo.wpbeaveraddons.com/wp-content/uploads/2018/02/main-vector.png" alt="maintenance"/>
                    <span class="pp-infobox-title-prefix">WE ARE COMING SOON</span>
                    <div class="pp-infobox-title-wrapper">
                        <h3 class="pp-infobox-title">The website under maintenance!</h3>
                    </div>
                    <div class="pp-infobox-description">
                        <p>Oh no how did you get here...? We're still working on the things you need.</p>	<br />
                        <a href="/home"> <button className=" bg-red-600 text-white px-6 py-3 ring-1 ring-white rounded-md">Return Home</button></a>
                        		</div>
            </div>
        </div>
    </>);
}

export default Fix;