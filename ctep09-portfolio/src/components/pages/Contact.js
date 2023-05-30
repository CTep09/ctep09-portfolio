import { init, sendForm } from "emailjs-com";
import { useForm } from "react-hook-form";

init("NfhMzZ2lN-3zlT3lu");

function Contact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    sendForm("default_service", "template_vuepovm", "#form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("form").reset();
        alert("Message Sent");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div className="mx-8">
      <div className="card space-y-4 w-96 bg-base-100 shadow-xl">
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="px-2 py-12">
            <h2 className="text-2xl font-bold">Please Enter your Info!</h2>
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
                    border-pink-200
                    shadow-sm
                    focus:border-pink-200 focus:ring focus:ring-green-100 focus:ring-opacity-50
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
                    border-pink-200
                    shadow-sm
                    focus:border-pink-200 focus:ring focus:ring-green-100 focus:ring-opacity-50
                  "
                    placeholder="john@example.com"
                    {...register("email", { required: true })}
                  />
                </label>

                <label className="block">
                  <span className="text-gray-700">Please enter a message</span>
                  <textarea
                    className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-pink-200
                    shadow-sm
                    focus:border-pink-200 focus:ring focus:ring-green-50 focus:ring-opacity-100
                  "
                    rows="3"
                    {...register("message", { required: true })}
                  ></textarea>
                </label>
                <button
                  type="submit"
                  className="rounded-full  bg-red-300 text-white"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
