import React from "react";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-600">
                    Contact Us
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    We'd love to hear from you! Reach out to us via email or social media.
                </p>
            </div>

            {/* Contact Information */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">

                {/* Left Section - Contact Details */}
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>

                    {/* Email */}
                    <div className="flex items-center mb-6">
                        <EnvelopeIcon className="h-8 w-8 text-indigo-600 mr-4" />
                        <div>
                            <p className="text-gray-700 font-semibold">Email</p>
                            <a
                                href="mailto:contact@example.com"
                                className="text-indigo-600 hover:text-indigo-800"
                            >
                                contact@example.com
                            </a>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center mb-6">
                        <MapPinIcon className="h-8 w-8 text-indigo-600 mr-4" />
                        <div>
                            <p className="text-gray-700 font-semibold">Location</p>
                            <p className="text-gray-600">123 Business Street, City, Country</p>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h3>
                        <div className="flex space-x-6">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-800"
                            >
                                <GlobeAltIcon className="h-8 w-8" />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-800"
                            >
                                <FaTwitter className="h-8 w-8" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-800"
                            >
                                <FaLinkedin className="h-8 w-8" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-800"
                            >
                                <FaInstagram className="h-8 w-8" />
                            </a>
                        </div>
                    </div>
                </div>

                                {/* Right Section - Map */}
                                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Location</h2>
                    <div className="overflow-hidden rounded-lg">
                        <iframe
                            title="Business Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.95373531531615!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8a32a9e4f1!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633039292613!5m2!1sen!2sus"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;