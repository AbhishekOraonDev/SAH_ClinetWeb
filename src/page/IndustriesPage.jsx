import React from "react";
import { TextGenerateEffect } from "../components/textGenerated.jsx";
import { CardContainer, CardBody, CardItem } from "../components/3dCard.jsx";
import itImage from "../assets/landingImg1.png";
import healthcareImage from "../assets/landingImg1.png";
import bankingImage from "../assets/landingImg1.png";
import manufacturingImage from "../assets/landingImg1.png";
import retailImage from "../assets/landingImg1.png";
import educationImage from "../assets/landingImg1.png";
import mediaImage from "../assets/landingImg1.png";

const industries = [
  {
    title: "Information Technology",
    description:
      "Revolutionize your business with cutting-edge IT solutions, from softwares to cloud computing.",
    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Health Care",
    description:
      "Transform healthcare delivery with innovative technologies, telemedicine, and AI-driven diagnostics.",
    image: "https://plus.unsplash.com/premium_photo-1666299677059-54f840ab8fa0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Banking and Financial Services",
    description:
      "Enhance financial operations with secure, scalable, and efficient banking and fintech solutions.",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Manufacturing and Engineering",
    description:
      "Optimize production processes with automation, IoT, and advanced engineering solutions.",
    image: "https://images.unsplash.com/photo-1647427060118-4911c9821b82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Retail and E-commerce",
    description:
      "Boost customer engagement and streamline operations with personalized retail and e-commerce platforms.",
    image: "https://plus.unsplash.com/premium_photo-1661497420714-191412501446?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Education and EdTech",
    description:
      "Empower learners with interactive and accessible education technologies for a brighter future.",
    image: "https://plus.unsplash.com/premium_photo-1716396586363-4b942672c2ca?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Media and Advertising",
    description:
      "Create impactful campaigns and content with data-driven media and advertising strategies.",
    image: "https://images.unsplash.com/photo-1622107906469-632c870f19e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const words = `We are a company dedicated to providing scalable business solutions. Our mission is to help businesses grow and succeed by offering innovative tools and strategies tailored to their needs.`;

const IndustriesPage = () => {
  return (
    <div className="min-h-screen text-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-head1">
      {/* Centered Heading */}
      <div className="flex justify-center text-center py-5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-head1 font-bold border-b-4 border-indigo-400">
          Industries We Serve
        </h1>
      </div>

      {/* TextGenerateEffect */}
      <div className="flex text-center justify-center pb-10">
        <TextGenerateEffect
          duration={1}
          filter={false}
          words={words}
          className="text-black"
        />
      </div>

      {/* Industry Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {industries.map((industry, index) => (
          <CardContainer key={index} className="inter-var shadow-2xl shadow-blue-500/20">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-300 dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
              {/* Card Image */}
              <CardItem translateZ="100" className="w-full">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>

              {/* Card Title */}
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-slate-900 mt-4"
              >
                {industry.title}
              </CardItem>

              {/* Card Description */}
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-left text-sm max-w-sm mt-2 dark:text-slate-700"
              >
                {industry.description}
              </CardItem>

              {/* Card Button */}
              <div className="flex justify-between items-center mt-4">

              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default IndustriesPage;