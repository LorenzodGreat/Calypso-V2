import '../load.css'
// import Calypso from '../img/Calypso.png'
function Load() {
    return (
        <div className='bg-[#593196] w-full m-0 p-0 h-screen'>
            <div class="cube-wrapper">
                <div class="cube-folding">
                    <span class="leaf1"></span>
                    <span class="leaf2"></span>
                    <span class="leaf3"></span>
                    <span class="leaf4"></span>
                </div>
                <span class="loading" data-name="Loading">Loading</span>
            </div>

        </div>);
}

export default Load;