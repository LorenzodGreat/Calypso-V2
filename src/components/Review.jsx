import React from 'react'
function Reviews() {
    return ( <>
     <div data-aos="fade-up" class="max-w-4xl mx-auto text-center p-4">
      <h2 class="text-3xl font-extrabold text-black sm:text-4xl">Our Reviews</h2>
      <p class="mt-3 text-xl text-[#593196] font-semibold sm:mt-4">So This is What Our Clients Are Saying About Us</p>
    </div>
    <section>
    <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="blog"/>
                <div class="inline-flex justify-between w-full">
                    <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Chris</h1>
                </div>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Great service and fast shipping should I even mention the price...... I love Calypso</p>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="blog"/>
                <div class="inline-flex justify-between w-full">
                    <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Sarah</h1>
                </div>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">I got my outfit on time thanks to you Calypso.</p>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="blog"/>
                <div class="inline-flex justify-between w-full">
                    <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Luke</h1>
                </div>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Well I never really liked the idea of shopping online but thanks to Calypso shipping and I dont mind.</p>
            </div>
        </div>
    </div>
</section>
    </> );
}

export default Reviews;