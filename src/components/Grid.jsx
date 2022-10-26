import React from 'react'

function Grid() {
  return (<>
    <section>
      <div class="relative items-center w-full px-5 py-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-4">
          <div class="p-6">
            <div class="flex items-center mb-3">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mr-3 ">
                <lord-icon
                  src="https://cdn.lordicon.com/ilpmnyul.json"
                  trigger="loop"
                  delay="2000"
                  width={550}
                  height={550}>
                </lord-icon>
              </div>
              <h1 class="text-xl font-semibold leading-none tracking-tighter text-neutral-600">Air Frieght</h1>
            </div>
            <div class="mt-4">
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-22 h-22 mr-3 ">
                <lord-icon
                  src="https://cdn.lordicon.com/gzmgulpl.json"
                  trigger="loop"
                >
                </lord-icon>
              </div>
              <h1 class="text-xl font-semibold leading-none tracking-tighter text-neutral-600">Free Cooperate
                delivery</h1>
            </div>
            <div class="mt-4">
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mr-3 ">
                <lord-icon
                  src="https://cdn.lordicon.com/pyhvgrxu.json"
                  trigger="loop"
                  delay="2000"
                  width={750}
                  height={950}
                >
                </lord-icon>
              </div>
              <h1 class="text-xl font-semibold leading-none tracking-tighter text-neutral-600">Sea Freight</h1>
            </div>
            <div class="mt-4">
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mr-3 ">
                <lord-icon
                  src="https://cdn.lordicon.com/iejknaed.json"
                  trigger="loop"
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