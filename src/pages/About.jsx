import React from "react";

function About() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 min-h-screen px-6 py-10">
      <img
        src="https://thumbs.dreamstime.com/b/diverse-group-people-interacting-various-social-media-platforms-connected-network-icons-representing-different-channels-379251897.jpg"
        alt=""
        className="w-72 md:w-[350px] rounded-lg shadow-md object-cover"
      />
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-2xl font-bold uppercase mb-4 tracking-wider text-gray-800">about us</h1>
        <p className="text-gray-700 leading-relaxed">
          This website provides a clean and simple way to view user profiles.
          You can browse a list of users and view detailed information for each
          user. Our aim is to offer a smooth and organized user-viewing
          experience.
        </p>
      </div>
    </div>
  );
}

export default About;
