import React from "react";

function Contact() {
  return (
    <div className="mx-8">
      <div className="card space-y-4 w-96 bg-base-100 shadow-xl">
        <div class="px-2 py-12">
          <h2 class="text-2xl font-bold">Please Enter your Info!</h2>
          <div class="mt-8 max-w-md">
            <div class="grid grid-cols-1 gap-6">
              <label class="block">
                <span class="text-gray-700">Name</span>
                <input
                  type="text"
                  class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-pink-200
                    shadow-sm
                    focus:border-pink-200 focus:ring focus:ring-green-100 focus:ring-opacity-50
                  "
                  placeholder=""
                />
              </label>
              <label class="block">
                <span class="text-gray-700">Email address</span>
                <input
                  type="email"
                  class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-pink-200
                    shadow-sm
                    focus:border-pink-200 focus:ring focus:ring-green-100 focus:ring-opacity-50
                  "
                  placeholder="john@example.com"
                />
              </label>

              <label class="block">
                <span class="text-gray-700">Please enter a message</span>
                <textarea
                  class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-pink-200
                    shadow-sm
                    focus:border-pink-200 focus:ring focus:ring-green-50 focus:ring-opacity-100
                  "
                  rows="3"
                ></textarea>
              </label>
              <button className="rounded-full  bg-red-300 text-white">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
