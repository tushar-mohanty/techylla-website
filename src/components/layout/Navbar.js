'use client'

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Manrope } from "next/font/google";
import { Urbanist } from 'next/font/google';
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
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

    ArrowRightIcon,
    ClipboardDocumentCheckIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    CpuChipIcon,
    DocumentChartBarIcon,

    FolderIcon,
    GlobeAltIcon,
    PresentationChartLineIcon,

    SparklesIcon,

    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, } from '@heroicons/react/20/solid'
import { Menu } from "lucide-react";

const knowledgeCenter = [
    { name: 'Case Studies', description: 'Success stories that matter', href: '/case-studies', icon: DocumentChartBarIcon },
    { name: 'Blogs', description: 'Stories, ideas, and insights', href: '#', icon: FolderIcon },
]

const serviceSolution = [
    {
        name: 'Data & Cloud',
        description: 'Data-driven cloud solutions',
        href: '/services/data-cloud',
        icon: CpuChipIcon,
        children: [
            { name: 'Data Engineering', href: '#' },
            { name: 'Data Management', href: '#' }
        ]
    },
    {
        name: 'Business Transformation',
        description: 'Smarter, faster business processes',
        href: '#',
        icon: PresentationChartLineIcon,
        children: [] // no submenu
    },
    {
        name: 'Artificial Intelligence',
        description: 'Advanced AI solutions',
        href: '/services/artificial-intelligence',
        icon: SparklesIcon,
        children: [
            // { name: 'Generative AI', href: '#' },
            // { name: 'AI Managed Services', href: '#' }
        ]
    }
];

const industry = [
    { name: 'Healthcare & LifeSciences', description: 'Transforming care through technology', href: '/industry/healthcare-and-lifesciences', icon: ClipboardDocumentCheckIcon },
    { name: 'Supply Chain & Logistics', description: 'Seamless global supply chain solutions', href: '#', icon: GlobeAltIcon },
    { name: 'Manufacturing', description: 'Smart and efficient manufacturing', href: '/industry/manufacturing', icon: Cog6ToothIcon },
    { name: 'HiTech', description: 'Advanced software and technology systems', href: '#', icon: CloudArrowUpIcon },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [openMenu, setOpenMenu] = useState(null)
    const pathname = usePathname();
    const isHome = pathname === "/";

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 100) {
                setShowNavbar(true);
                return;
            }

            if (window.scrollY > lastScrollY + 5) {
                setShowNavbar(false); // scrolling down
            } else if (window.scrollY < lastScrollY - 5) {
                setShowNavbar(true); // scrolling up
            }

            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 w-full bg-black/50 backdrop-blur-md z-50 transition-transform duration-500 ease-in-out will-change-transform ${showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <nav aria-label="Global" className={`mx-auto flex w-full items-center justify-between p-5 lg:px-1 ${isHome ? "bg-transparent text-white" : "bg-black text-white"
                }`}>
                <div className="flex ">
                    <a href="/" className="text-3xl font-semibold text-white md:ml-20">


                        <img
                            alt="Techylla company logo"
                            src="/Techylla-Logo.png"
                            className="h-11 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu aria-hidden="true" className="size-7 md:size-6 text-white" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex ml-auto items-center gap-6 text-gray-600 font-medium text-xl">
                    <Popover
                        className="relative group"
                        onMouseEnter={() => setOpenMenu("service")}
                        onMouseLeave={() => setOpenMenu(null)}
                    >
                        <div className="absolute top-full left-0 right-0 h-6 bg-transparent"></div>
                        <PopoverButton className={`${urbanist.className} relative flex items-center gap-x-1 text-[18px] font-normal text-white transition w-full cursor-pointer focus:outline-none`}>
                            Services & Solutions
                            <ChevronDownIcon
                                className={`size-5 text-white transition-transform duration-200 group-hover:text-blue-600 ${openMenu === "service" ? "rotate-180" : ""
                                    }`}
                            />
                            <span
                                className="absolute -bottom-2 left-0 right-0 h-[3] bg-indigo-300 rounded-full origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                            />
                        </PopoverButton>
                        <AnimatePresence>
                            {openMenu === "service" && (
                                <PopoverPanel
                                    static
                                    as={motion.div}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 15 }}

                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    className={`${urbanist.className} absolute left-1/2 z-10 mt-5 w-screen max-w-xs -translate-x-1/2 rounded-sm bg-white shadow-lg`}
                                >
                                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                                    <div className="p-2">
                                        {serviceSolution.map((item) => (
                                            <div
                                                key={item.name}
                                                onMouseEnter={() => setActiveSubMenu(item.name)}
                                                onMouseLeave={() => setActiveSubMenu(null)}
                                                className="group relative flex items-center gap-x-2 rounded-sm p-2 text-sm/5 hover:bg-blue-50"
                                            >
                                                {/* <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                     <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" /> 
                                                </div> */}
                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-normal text-gray-900 text-lg">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                                                </div>
                                                

                                                {/* invisible hover bridge */}
                                                <div className="absolute top-0 left-full w-4 h-full"></div>

                                                {/* 🔥 ADD THIS HERE (INSIDE SAME DIV, AT END) */}
                                                {item.children.length > 0 && activeSubMenu === item.name && (
                                                    <div className={`${urbanist.className} text-lg text-black absolute top-0 left-full ml-4 w-88 bg-white rounded-sm shadow-lg border z-50`}>
                                                        <div className="p-2">
                                                            {item.children.map((subItem) => (
                                                                <a
                                                                    key={subItem.name}
                                                                    href={subItem.href}
                                                                    className="block px-3 py-2 hover:bg-blue-50 rounded-sm cursor-pointer"
                                                                >
                                                                    {subItem.name}
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                </PopoverPanel>
                            )}
                        </AnimatePresence>
                    </Popover>



                    <Popover
                        className="relative group"
                        onMouseEnter={() => setOpenMenu("knowledge")}
                        onMouseLeave={() => setOpenMenu(null)}
                    >
                        <div className="absolute top-full left-0 right-0 h-6 bg-transparent"></div>
                        <PopoverButton className={`${urbanist.className} relative flex items-center gap-x-1 text-[18px] font-normal text-white transition w-full cursor-pointer focus:outline-none`}>
                            Knowledge Center
                            <ChevronDownIcon
                                className={`size-5 text-white transition-transform duration-200 group-hover:text-blue-600 ${openMenu === "knowledge" ? "rotate-180" : ""
                                    }`}
                            />
                            <span
                                className="absolute -bottom-2 left-0 right-0 h-[3] bg-indigo-300 rounded-full origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                            />
                        </PopoverButton>
                        <AnimatePresence>
                            {openMenu === "knowledge" && (
                                <PopoverPanel

                                    static
                                    as={motion.div}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 15 }}

                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    className={`${urbanist.className} absolute left-1/2 z-10 mt-5 w-screen max-w-xs -translate-x-1/2 rounded-sm bg-white shadow-lg`}
                                >
                                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                                    <div className="p-2">
                                        {knowledgeCenter.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-2 rounded-sm p-2 text-sm/5 hover:bg-blue-50"
                                            >
                                                {/* <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                                </div> */}
                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-normal text-gray-900 text-lg">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                                                </div>
                                                {/* <ArrowRightIcon className="size-6 text-blue-400" /> */}
                                            </div>
                                        ))}
                                    </div>

                                </PopoverPanel>
                            )}
                        </AnimatePresence>
                    </Popover>

                    <Popover
                        className="relative group"
                        onMouseEnter={() => setOpenMenu("industry")}
                        onMouseLeave={() => setOpenMenu(null)}
                    >
                        <div className="absolute top-full left-0 right-0 h-6 bg-transparent"></div>
                        <PopoverButton className={`${urbanist.className} relative flex items-center gap-x-1 text-[18px] font-normal text-white transition w-full cursor-pointer focus:outline-none`}>
                            Industry
                            <ChevronDownIcon
                                className={`size-5 text-white transition-transform duration-200 group-hover:text-blue-600 ${openMenu === "industry" ? "rotate-180" : ""
                                    }`}
                            />
                            <span
                                className="absolute -bottom-2 left-0 right-0 h-[3] bg-indigo-300 rounded-full origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                            />
                        </PopoverButton>
                        <AnimatePresence>
                            {openMenu === "industry" && (
                                <PopoverPanel
                                    static
                                    as={motion.div}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 15 }}

                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    className={`${urbanist.className} absolute left-1/2 z-10 mt-5 w-screen max-w-xs -translate-x-1/2 rounded-sm bg-white shadow-lg`}
                                >
                                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                                    <div className="p-2">
                                        {industry.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-2 rounded-sm p-2 text-sm/5 hover:bg-blue-50"
                                            >
                                                {/* <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                                </div> */}
                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-normal text-gray-900 text-lg">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                                                </div>
                                                {/* <ArrowRightIcon className="size-6 text-blue-400" /> */}
                                            </div>
                                        ))}
                                    </div>

                                </PopoverPanel>
                            )}
                        </AnimatePresence>
                    </Popover>
                </PopoverGroup>

                <Link href="/about" className="hidden lg:inline-block relative group">
                    <button className={`${urbanist.className} ml-6 hover:text-blue-200 font-normal text-white transition-all duration-300 cursor-pointer relative flex items-center gap-x-1 text-[18px]`}>
                        About Us

                        <span
                            className="absolute -bottom-2 left-0 right-0 h-[3] bg-indigo-300 rounded-full origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                        />

                    </button>


                </Link>

                <Link href="/careers" className="hidden lg:inline-block relative group">
                    <button className={`${urbanist.className} ml-7 hover:text-blue-200 font-normal text-white transition-all duration-300 cursor-pointer relative flex items-center gap-x-1 text-[18px]`}>
                        Careers

                        <span
                            className="absolute -bottom-2 left-0 right-0 h-[3] bg-indigo-300 rounded-full origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                        />

                    </button>


                </Link>
                <Link href="/contact" className="hidden lg:inline-block">
                    <button className={`${urbanist.className} ml-3 rounded-2xl hover:text-white text-[18px] hover:bg-blue-800 px-4 py-2 font-normal text-white transition-all duration-300 cursor-pointer`}>
                        Contact Us
                    </button>
                </Link>
            </nav>
            <Transition show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/30 z-40" />
                    </Transition.Child>

                    {/* 🔥 THIS IS WHERE YOUR CODE GOES */}
                    <Transition.Child
                        as={Fragment}
                        enter="transform transition duration-500 ease-out"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition duration-500 ease-in"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-[80%] overflow-y-auto bg-gradient-to-br from-white via-blue-50 to-blue-200 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="/" className="text-3xl font-bold text-gray-900">

                                    <img
                                        alt="Techylla company logo"
                                        src="/Techylla-Logo.png"
                                        className="h-10 w-auto -ml-3"
                                    />
                                </a>
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
                                <div className="-my-6 ">
                                    <div className="space-y-2 py-6">
                                        <Disclosure as="div" className="-mx-3">
                                            <DisclosureButton className={`${urbanist.className} group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50`}>
                                                Services & Solutions
                                                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                            </DisclosureButton>
                                            <DisclosurePanel className={`${urbanist.className} mt-2 space-y-2`}>
                                                {[...serviceSolution,].map((item) => (
                                                    <div key={item.name}>

                                                        {item.children.length > 0 ? (
                                                            <Disclosure as="div" className="w-full">

                                                                {/* MAIN ITEM */}
                                                                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                                                                    {item.name}
                                                                    <ChevronDownIcon className="size-5 group-data-open:rotate-180" />
                                                                </DisclosureButton>

                                                                {/* SUBMENU */}
                                                                <DisclosurePanel className="ml-4 space-y-1">
                                                                    {item.children.map((subItem) => (
                                                                        <DisclosureButton
                                                                            key={subItem.name}
                                                                            as="a"
                                                                            href={subItem.href}
                                                                            className="block rounded-lg py-2 pr-3 pl-6 text-sm text-gray-700 hover:bg-gray-50"
                                                                        >
                                                                            {subItem.name}
                                                                        </DisclosureButton>
                                                                    ))}
                                                                </DisclosurePanel>

                                                            </Disclosure>
                                                        ) : (
                                                            <DisclosureButton
                                                                as="a"
                                                                href={item.href}
                                                                className="block w-full text-left rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                                                            >
                                                                {item.name}
                                                            </DisclosureButton>
                                                        )}

                                                    </div>
                                                ))}
                                            </DisclosurePanel>
                                        </Disclosure>


                                        <Disclosure as="div" className="-mx-3">
                                            <DisclosureButton className={`${urbanist.className} group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50`}>
                                                Knowledge Center
                                                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                            </DisclosureButton>
                                            <DisclosurePanel className={`${urbanist.className} mt-2 space-y-2`}>
                                                {[...knowledgeCenter,].map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </Disclosure>
                                        <Disclosure as="div" className="-mx-3">
                                            <DisclosureButton className={`${urbanist.className} group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50`}>
                                                Industry
                                                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                            </DisclosureButton>
                                            <DisclosurePanel className={`${urbanist.className} mt-2 space-y-2`}>
                                                {[...industry,].map((item) => (
                                                    <DisclosureButton
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </DisclosureButton>
                                                ))}
                                            </DisclosurePanel>
                                        </Disclosure>



                                    </div>
                                    <div className="py-4 -mt-5">
                                        <Link
                                            href="/about"
                                            className={`${urbanist.className}  text-black font-semibold transition`}
                                        >
                                            About Us
                                        </Link>
                                    </div>
                                    <div className="py-4">
                                        <Link
                                            href="/careers"
                                            className={`${urbanist.className}  text-black font-semibold transition`}
                                        >
                                            Careers
                                        </Link>
                                    </div>
                                    <div className="py-6">
                                        <Link
                                            href="/contact"
                                            className={`${urbanist.className} bg-blue-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-blue-700 transition`}
                                        >
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </header>
    )
}
