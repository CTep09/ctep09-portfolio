import React, { useState } from "react";
import { init, sendForm } from "emailjs-com";
import { useForm } from "react-hook-form";

init("NfhMzZ2lN-3zlT3lu");

function Contact({ handlePageChange }) {
  const { register, handleSubmit } = useForm();
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const onSubmit = (data) => {
    sendForm("default_service", "template_vuepovm", "#form").then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("form").reset();
        setSubmissionStatus("success");
      },
      (error) => {
        console.log("FAILED...", error);
        setSubmissionStatus("error");
      }
    );
  };

  const handleOverlayClick = () => {
    setSubmissionStatus(null);
    handlePageChange("About");
  };

  return (
    <div className="relative mx-8 flex justify-start">
      <div className="card glass">
        <div className="card-body">
          <form id="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="px-2">
              <h2 className="text-2xl font-bold">
                Please enter your information
              </h2>
              <div className="mt-8 max-w-md">
                <div className="grid grid-cols-1 gap-6">
                  <label className="block">
                    <span className="text-gray-700">Name</span>
                    <input
                      type="text"
                      className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        border-cyan-600
                        shadow-sm
                        focus:border-cyan-600 focus:ring focus:ring-green-100 focus:ring-opacity-50

                      "
                      placeholder=""
                      {...register("name", { required: true })}
                    />
                  </label>
                  <label className="block">
                    <span className="text-gray-700">Email address</span>
                    <input
                      type="email"
                      className="
                        mt-1
                        block
                        w-full
                        rounded-md
                        border-cyan-600
                        shadow-sm
                        focus:border-cyan-600 focus:ring focus:ring-green-100 focus:ring-opacity-50
                      "
                      placeholder="john@example.com"
                      {...register("email", { required: true })}
                    />
                  </label>

                  <label className="block">
                    <span className="text-gray-700">
                      Please enter a message
                    </span>
                    <textarea
                      className="
                        mt-1
                        mb-4
                        block
                        w-full
                        rounded-md
                        border-cyan-600
                        shadow-sm
                        focus:border-cyan-600 focus:ring focus:ring-green-50 focus:ring-opacity-100
                      "
                      rows="3"
                      {...register("message", { required: true })}
                    ></textarea>
                  </label>
                  <button
                    type="submit"
                    className="btn btn-outline border-cyan-600 text-cyan-600 hover:bg-cyan-600"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {submissionStatus === "success" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-8">Message Sent</h2>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleOverlayClick}
            >
              Thank you!
            </button>
          </div>
        </div>
      )}
      {submissionStatus === "error" && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">
              Failed to send message. Please try again later.
            </h2>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setSubmissionStatus(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
