import React from 'react'

function Grid() {
  return (<>
    <section>
      <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-4">
          <div class="p-6">
            <div class="flex items-center mb-3">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mr-3 text-blue-600 rounded-full bg-blue-50">
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
              <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mr-3 text-blue-600 rounded-full bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="12" r="9"></circle>
                  <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                </svg>
              </div>
              <h1 class="text-xl font-semibold leading-none tracking-tighter text-neutral-600">Free Cooperate
                delivery</h1>
            </div>
            <div class="mt-4">
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mr-3 text-blue-600 rounded-full bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="12" r="9"></circle>
                  <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                </svg>
              </div>
              <h1 class="text-xl font-semibold leading-none tracking-tighter text-neutral-600">Sea Freight</h1>
            </div>
            <div class="mt-4">
            </div>
          </div>
          <div class="p-6">
            <div class="flex items-center mb-3">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mr-3 text-blue-600 rounded-full bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 icon icon-tabler icon-tabler-aperture" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="12" r="9"></circle>
                  <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(72 12 12)"></line>
                  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(144 12 12)"></line>
                  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(216 12 12)"></line>
                  <line x1="3.6" y1="15" x2="14.15" y2="15" transform="rotate(288 12 12)"></line>
                </svg>
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