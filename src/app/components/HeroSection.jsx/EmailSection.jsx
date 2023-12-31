"use client";
import React, { useState } from "react";
import GithubIcon from "../../../../public/github-icon.svg";
import LinkedinIcon from "../../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
    >
      <div className="md:order-1">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          If you would like to get in touch or connect, whether it's to bring
          your dream webpage to life or create an e-commerce platform, I'm here
          to help. Feel free to send me an email at connect@carlossalame.com 
          You can also use the message input on the right, and I'll get back to
          you as soon as possible. Let's turn your ideas into reality!
        </p>
        <div className="socials flex flex-row gap-2">
          <a
            href="https://github.com/salame1996"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/carlossalame/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </a>
        </div>
      </div>
      <div className="md:order-2">
        {" "}
        {/* This div will be on the right side on medium screens */}
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium "
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="youremail@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium "
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's Connect"
            />
          </div>
          <div className="mb-6">
            <label
              name="message"
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              className="bg-[#18191E] border border-[#33353F]
            placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full
            p-2.5"
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent succesfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
