import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function FooterComponent() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Corporate Section */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Corporate</h2>
            <p className="text-sm leading-6">
              Delivering excellence through innovation and dedication. Our commitment to quality and service remains unwavering as we continue to grow and evolve.
            </p>
          </div>

          {/* Useful Links Section */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              {['Home', 'About us', 'Services', 'Terms of service', 'Privacy policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 mt-1 mr-2 flex-shrink-0" />
                <p className="text-sm">A108 Adam Street New York, NY 535022 United States</p>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <p className="text-sm">+1 5589 55488 55</p>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <p className="text-sm">info@example.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Our Newsletter</h2>
            <p className="text-sm mb-4">
              Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-sm bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© {new Date().getFullYear()} Corporate. All Rights Reserved</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:text-white transition-colors duration-200">
                Terms
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}