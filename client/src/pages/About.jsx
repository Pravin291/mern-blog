import React from "react";
export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center"> 
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">About Pravin's Blog</h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              My name is Pravin Bhosale. Pravin's Blog is a blog that I created
              to share my thoughts and ideas with the world. I am a Computer
              Engineering Student and I love to write about my experiences and
              things that I have learned. I hope you enjoy and learn thing when
              you visit my website.
            </p>
            <p>
              I am channeling my expertise into the creation of a
              dynamic blog website using the powerful stack of React, Node.js,
              Express, and MongoDB. As a computer engineer, I thrive on the
              challenge of building robust and scalable solutions, and my blog
              is a testament to my commitment to sharing knowledge and insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
