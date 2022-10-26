import React from 'react'
function Reviews() {
    return ( <>
     <div class="max-w-4xl mx-auto text-center p-4">
      <h2 class="text-3xl font-extrabold text-black sm:text-4xl">Our Reviews</h2>
      <p class="mt-3 text-xl text-[#593196] font-semibold sm:mt-4">So This is What Our Clients Are Saying About Us</p>
    </div>
    <section>
    <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/assets/images/placeholders/squareCard.png" alt="blog"/>
                <div class="inline-flex justify-between w-full">
                    <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Short headline.</h1>
                </div>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/assets/images/placeholders/squareCard.png" alt="blog"/>
                <div class="inline-flex justify-between w-full">
                    <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Short headline.</h1>
                </div>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
            </div>
            <div class="p-6">
                <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/assets/images/placeholders/squareCard.png" alt="blog"/>
                <div class="inline-flex justify-between w-full">
                    <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">Short headline.</h1>
                </div>
                <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">Free and Premium themes, UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
            </div>
        </div>
    </div>
</section>
    </> );
}

export default Reviews;