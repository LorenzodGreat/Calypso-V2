import React from 'react'

function Grid() {
  return (<>
    <section className='w-full'>
      <div class="relative w-full px-5 py-8 mx-auto md:px-12 lg:px-24 container">
        <div class="grid w-full grid-cols-1 gap-x-1 lg:gap-x-1 md:gap-6 mx-auto lg:grid-cols-4 ">
          <div class="md:p-6 lg:p-6 p-4">
            <div class="flex items-center mb-3">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-14 lg:w-[150px] md:w-[100px] h-12 mr-3 ">
                <lord-icon
                  src="https://cdn.lordicon.com/ilpmnyul.json"
                  trigger="loop"
                  class=" w-[200px] h-[200px]"
                  delay="2000">
                </lord-icon>
              </div>
              <h1 class="text-xl font-semibold leading-none tracking-tighter text-neutral-600">Air Frieght</h1>
            </div>
            <div class="mt-4">
            </div>
          </div>
          <div class="md:p-6 lg:p-6 p-4">
            <div class="flex items-center mb-3">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-14 lg:w-[150px] md:w-[100px] h-12 h-22 mr-3 ">
                <lord-icon
                  src="https://cdn.lordicon.com/gzmgulpl.json"
                  trigger="loop"
                  class=" w-[200px] h-[200px]"
                >
                </lord-icon>
              </div>
              <h1 class="text-xl font-semibold leading-none tracking-tighter text-neutral-600">Free Cooperate
                delivery</h1>
            </div>
            <div class="mt-4">
            </div>
          </div>
          <div class="md:p-6 lg:p-6 p-4">
            <div class="flex items-center mb-3">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-14 lg:w-[150px] md:w-[100px] h-12 mr-3 ">
                <lord-icon
                  src="https://cdn.lordicon.com/pyhvgrxu.json"
                  trigger="loop"
                  delay="2000"
                  class=" w-[200px] h-[200px]"
                >
                </lord-icon>
              </div>
              <h1 class="text-xl font-semibold leading-none tracking-tighter text-neutral-600">Sea Freight</h1>
            </div>
            <div class="mt-4">
            </div>
          </div>
          <div class="md:p-6 lg:p-6 p-4">
            <div class="flex items-center mb-3">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-14 lg:w-[150px] md:w-[100px] h-12 mr-3 ">
                <lord-icon
                  src="https://cdn.lordicon.com/iejknaed.json"
                  trigger="loop"
                  class=" w-[200px] h-[200px]"
                >
                </lord-icon>
              </div>
              <h1 class="text-xl font-semibold leading-none tracking-tighter text-neutral-600">Island wide
                Delivery offered</h1>
            </div>
            <div class="mt-4">
            </div>
          </div>
        </div>
      </div>
    </section>
  </>);
}

export default Grid;