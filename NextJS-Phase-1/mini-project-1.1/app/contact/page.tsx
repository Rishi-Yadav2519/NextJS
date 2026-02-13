import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-between p-24 relative z-10">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="mt-4 text-lg text-gray-300">
        Fill out this form to get in touch with me.
      </p>
      <form className="bg-white/10 p-4 rounded-lg">
        <div className="wrapper flex gap-5">
          <div className="name">
            <label htmlFor="name" className="block text-gray-300">
              Name
            </label>
            <input
              type="text"
              className="bg-white text-neutral-800 p-2 rounded-md outline-none"
              required
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="email">
            <label htmlFor="email" className="block text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="bg-white text-neutral-800 p-2 rounded-md outline-none"
              required
              id="email"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="ageGender flex justify-between mt-4">
          <div className="age">
            <label htmlFor="age" className="block text-gray-300">
              Age
            </label>
            <input
              type="number"
              className="bg-white w-20 text-neutral-800 p-2 rounded-md outline-none"
              name="age"
              id="age"
            />
          </div>
          <div className="gender flex flex-col">
            <label htmlFor="gender" className="block text-gray-300">
              Gender
            </label>
            <div className="flex gap-5">
              <div className="male gap-5">
                <input type="radio" name="gender" id="male" value="male" />
                <label htmlFor="male">Male</label>
              </div>
              <div className="female gap-5">
                <input type="radio" name="gender" id="female" value="female" />
                <label htmlFor="female">Female</label>
              </div>
              <div className="other gap-5">
                <input type="radio" name="gender" id="other" value="other" />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
        </div>
        <div className="msgContainer mt-4">
          <label htmlFor="message" className="block text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            className="bg-white text-neutral-800 p-2 rounded-md outline-none w-full"
            rows={7}
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="buttonContainer mt-4 w-full flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
