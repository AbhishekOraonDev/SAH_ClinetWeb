import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
    { name: 'Talent Acquisition', description: 'Get a better understanding of your traffic', path: '/services/talent-acquisition', icon: ChartPieIcon },
    { name: 'Executive Search', description: 'Speak directly to your customers', path: '/services/executive-search', icon: CursorArrowRaysIcon },
    { name: 'Staff Augmentation', description: 'Your customers data will be safe and secure', path: '/services/staff-augmentation', icon: FingerPrintIcon },
    { name: 'Permanent Staffing', description: 'Connect with third-party tools', path: '/services/permanent-staffing', icon: SquaresPlusIcon },
    { name: 'Career Consulting', description: 'Build strategic funnels that will convert', path: '/services/career-consulting', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', path: '/demo', icon: PlayCircleIcon },
    { name: 'Contact sales', path: '/contact-sales', icon: PhoneIcon },
]

export default function NavbarComponent() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    return (
        <header className="bg-white shadow-2xl shadow-blue-500/20">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <h1 className='font-bold font-head1 text-2xl'>SAH</h1>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">

                    <Link to="/" className="text-lg font-semibold text-gray-900 hover:text-indigo-600">
                        Home
                    </Link>

                    <a href="/#about" className="text-lg font-semibold text-gray-900 hover:text-indigo-600">
                        About
                    </a>

                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold text-gray-900 hover:text-indigo-600">
                            Services
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <Link
                                                to={item.path}
                                                className="block font-semibold text-gray-900"
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Link to="/industries" className="text-lg font-semibold text-gray-900 hover:text-indigo-600">
                        Industries
                    </Link>

                    <Link to="/contact" className="text-lg font-semibold text-gray-900 hover:text-indigo-600">
                        Contact us
                    </Link>

                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="#" className="text-sm/6 font-semibold text-gray-900">
                        {/* Log in <span aria-hidden="true">&rarr;</span> */}
                    </Link>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
                            <span className="sr-only">Your Company</span>
                            <img
                                alt=""
                                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">

                                <Link
                                    to="/"
                                    onClick={closeMobileMenu}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </Link>
                                <a href="/#about" className="text-lg font-semibold text-gray-900 hover:text-indigo-600">
                                    About
                                </a>

                                <Disclosure as="div" className="-mx-3">
                                    {({ close }) => (
                                        <>
                                            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                                Services
                                                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                            </DisclosureButton>
                                            <DisclosurePanel className="mt-2 space-y-2">
                                                {[...products].map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.path}
                                                        onClick={() => {
                                                            close();
                                                            closeMobileMenu();
                                                        }}
                                                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </DisclosurePanel>
                                        </>
                                    )}
                                </Disclosure>
                                <Link
                                    to="/industries"
                                    onClick={closeMobileMenu}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Industries
                                </Link>
                                <Link
                                    to="/contact"
                                    onClick={closeMobileMenu}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Contact us
                                </Link>

                            </div>

                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}