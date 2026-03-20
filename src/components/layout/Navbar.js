'use client'

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Manrope } from "next/font/google";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
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
    AdjustmentsHorizontalIcon,
    ArrowPathIcon,
    ArrowRightIcon,
    Bars3Icon,
    ChartPieIcon,
    CircleStackIcon,
    ClipboardDocumentCheckIcon,
    CloudArrowUpIcon,
    CloudIcon,
    Cog6ToothIcon,
    CpuChipIcon,
    CursorArrowRaysIcon,
    EyeIcon,
    FingerPrintIcon,
    GlobeAltIcon,
    PresentationChartBarIcon,
    PresentationChartLineIcon,
    RocketLaunchIcon,
    ServerIcon,
    SparklesIcon,
    SquaresPlusIcon,
    TableCellsIcon,
    UserGroupIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ArrowRightCircleIcon, ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const aiStrategy = [
    { name: 'Agentic AI', description: 'Reshape Business with scalable agentic systems', href: '#', icon: SparklesIcon },
    { name: 'Generative AI', description: 'Drive innovation with Generative AI', href: '#', icon: RocketLaunchIcon },
    { name: 'AI Managed Services', description: 'Ensure reliable AI performance', href: '#', icon: UserGroupIcon },
]
const dataStrategy = [
    { name: 'Data Engineering', description: 'Deliver insights faster with scalable pipelines', href: '#', icon: CpuChipIcon },
    { name: 'Data Management', description: 'Leverage data as a strategic asset', href: '#', icon: CircleStackIcon },
    { name: 'Data Ops', description: 'Automate data for speed and quality', href: '#', icon: PresentationChartBarIcon },
    { name: 'Data Visualization', description: 'Transform data into actionable stories', href: '#', icon: PresentationChartLineIcon },
]
const businessTransformation = [
    { name: 'Process Streamlining', description: 'Transform data into actionable stories', href: '#', icon: PresentationChartLineIcon },
    { name: 'Process Orchestration', description: 'Structure data for better decisions', href: '#', icon: TableCellsIcon },
    { name: 'Lean Enterprise Workflows', description: 'Build trust with healthy, accurate data', href: '#', icon: EyeIcon },
]
const industry = [
    { name: 'Healthcare & LifeSciences', description: 'Transforming care through technology', href: '#', icon: ClipboardDocumentCheckIcon },
    { name: 'Supply Chain & Logistics', description: 'Seamless global supply chain solutions', href: '#', icon: GlobeAltIcon },
    { name: 'Manufacturing', description: 'Smart and efficient manufacturing', href: '#', icon: Cog6ToothIcon },
    { name: 'HiTech', description: 'Advanced software and technology systems', href: '#', icon: CloudArrowUpIcon },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
            className={`fixed top-0 w-full bg-black/10 backdrop-blur-md z-50 transition-transform duration-500 ease-in-out will-change-transform ${showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <nav aria-label="Global" className={`mx-auto flex w-full items-center justify-between p-4 lg:px-1 ${isHome ? "bg-transparent text-white" : "bg-black text-white"
                }`}>
                <div className="flex ">
                    <a href="/" className="text-3xl font-semibold text-white ml-40">
                        

                        <img 
              alt=""
              src="/Techylla Logo.png"
              className="h-12 w-auto"
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
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex ml-auto items-center gap-6 text-gray-600 font-medium text-xl">
                    <Popover
                        className="relative group"
                        onMouseEnter={() => setOpenMenu("data")}
                        onMouseLeave={() => setOpenMenu(null)}
                    >
                        <div className="absolute top-full left-0 right-0 h-6 bg-transparent"></div>
                        <PopoverButton className={`${manrope.className} relative flex items-center gap-x-1 text-[18px] font-normal text-white transition w-full cursor-pointer focus:outline-none`}>
                            Data & Cloud
                            <ChevronDownIcon
                                className={`size-5 text-white transition-transform duration-200 group-hover:text-blue-600 ${openMenu === "data" ? "rotate-180" : ""
                                    }`}
                            />
                            <span
                                className="absolute -bottom-2 left-0 right-0 h-[3] bg-indigo-300 rounded-full origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                            />
                        </PopoverButton>
                        <AnimatePresence>
                            {openMenu === "data" && (
                                <PopoverPanel
                                    static
                                    as={motion.div}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 15 }}

                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    className="absolute left-1/2 z-10 mt-5 w-screen max-w-xl -translate-x-1/2 rounded-3xl bg-white shadow-lg"
                                >
                                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                                    <div className="p-4">
                                        {dataStrategy.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/5 hover:bg-blue-50"
                                            >
                                                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                                </div>
                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-normal text-gray-900 text-lg">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                                </div>
                                                <ArrowRightIcon className="size-6 text-blue-400" />
                                            </div>
                                        ))}
                                    </div>

                                </PopoverPanel>
                            )}
                        </AnimatePresence>
                    </Popover>

                    <Popover
                        className="relative group"
                        onMouseEnter={() => setOpenMenu("business")}
                        onMouseLeave={() => setOpenMenu(null)}
                    >
                        <div className="absolute top-full left-0 right-0 h-6 bg-transparent"></div>
                        <PopoverButton className={`${manrope.className} relative flex items-center gap-x-1 text-[18px] font-normal text-white transition w-full cursor-pointer focus:outline-none`}>
                            Business Transformation
                            <ChevronDownIcon
                                className={`size-5 text-white transition-transform duration-200 group-hover:text-blue-600 ${openMenu === "business" ? "rotate-180" : ""
                                    }`}
                            />
                            <span
                                className="absolute -bottom-2 left-0 right-0 h-[3] bg-indigo-300 rounded-full origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                            />
                        </PopoverButton>
                        <AnimatePresence>
                            {openMenu === "business" && (
                                <PopoverPanel
                                    static
                                    as={motion.div}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 15 }}

                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    className="absolute left-1/2 z-10 mt-5 w-screen max-w-xl -translate-x-1/2 rounded-3xl bg-white shadow-lg"
                                >
                                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                                    <div className="p-4">
                                        {businessTransformation.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/5 hover:bg-blue-50"
                                            >
                                                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                                </div>
                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-normal text-gray-900 text-lg">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-600">{item.description}</p>


                                                </div>
                                                <ArrowRightIcon className="size-6 text-blue-400" />
                                            </div>
                                        ))}
                                    </div>

                                </PopoverPanel>
                            )}
                        </AnimatePresence>
                    </Popover>

                    <Popover
                        className="relative group"
                        onMouseEnter={() => setOpenMenu("ai")}
                        onMouseLeave={() => setOpenMenu(null)}
                    >
                        <div className="absolute top-full left-0 right-0 h-6 bg-transparent"></div>
                        <PopoverButton className={`${manrope.className} relative flex items-center gap-x-1 text-[18px] font-normal text-white transition w-full cursor-pointer focus:outline-none`}>
                            Artificial Intelligence
                            <ChevronDownIcon
                                className={`size-5 text-white transition-transform duration-200 group-hover:text-blue-600 ${openMenu === "ai" ? "rotate-180" : ""
                                    }`}
                            />
                            <span
                                className="absolute -bottom-2 left-0 right-0 h-[3] bg-indigo-300 rounded-full origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                            />
                        </PopoverButton>
                        <AnimatePresence>
                            {openMenu === "ai" && (
                                <PopoverPanel

                                    static
                                    as={motion.div}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 15 }}

                                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                    className="absolute left-1/2 z-10 mt-5 w-screen max-w-xl -translate-x-1/2 rounded-3xl bg-white shadow-lg"
                                >
                                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                                    <div className="p-4">
                                        {aiStrategy.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/5 hover:bg-blue-50"
                                            >
                                                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                                </div>
                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-normal text-gray-900 text-lg">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                                </div>
                                                <ArrowRightIcon className="size-6 text-blue-400" />
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
                        <PopoverButton className={`${manrope.className} relative flex items-center gap-x-1 text-[18px] font-normal text-white transition w-full cursor-pointer focus:outline-none`}>
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
                                    className="absolute left-1/2 z-10 mt-5 w-screen max-w-xl -translate-x-1/2 rounded-3xl bg-white shadow-lg"
                                >
                                    <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                                    <div className="p-4">
                                        {industry.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/5 hover:bg-blue-50"
                                            >
                                                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                                </div>
                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-normal text-gray-900 text-lg">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                                </div>
                                                <ArrowRightIcon className="size-6 text-blue-400" />
                                            </div>
                                        ))}
                                    </div>

                                </PopoverPanel>
                            )}
                        </AnimatePresence>
                    </Popover>
                </PopoverGroup>

                <Link href="/aboutus" className="relative group inline-block">
                    <button className={`${manrope.className} ml-6 hover:text-blue-200 font-normal text-white transition-all duration-300 cursor-pointer relative flex items-center gap-x-1 text-[18px]`}>
                        About Us

                        <span
                            className="absolute -bottom-2 left-0 right-0 h-[3] bg-indigo-300 rounded-full origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                        />

                    </button>


                </Link>

                <Link href="/careers" className="relative group inline-block">
                    <button className={`${manrope.className} ml-7 hover:text-blue-200 font-normal text-white transition-all duration-300 cursor-pointer relative flex items-center gap-x-1 text-[18px]`}>
                        Careers

                        <span
                            className="absolute -bottom-2 left-0 right-0 h-[3] bg-indigo-300 rounded-full origin-center scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                        />

                    </button>


                </Link>
                <Link href="/contact">
                    <button className={`${manrope.className} ml-3 rounded-2xl hover:text-white text-[18px] hover:bg-blue-800 px-4 py-2 font-normal text-white transition-all duration-300 cursor-pointer`}>
                        Contact Us
                    </button>
                </Link>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="/" className="text-3xl font-bold text-gray-900">
                            Techylla
                            {/* <img 
                                alt=""
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                className="h-8 w-auto"
                            /> */}
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
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Data & Cloud
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...dataStrategy,].map((item) => (
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
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Business Transformation
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...businessTransformation,].map((item) => (
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
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Artificial Intelligence
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...aiStrategy,].map((item) => (
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
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                                        Industry
                                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
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
                            <div className="py-6">
                                <Link
                                    href="/aboutus"
                                    className="bg-blue-600 text-white px-8 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                                >
                                    About Us
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    href="/careers"
                                    className="bg-blue-600 text-white px-8 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                                >
                                    Careers
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    href="/contact"
                                    className="bg-blue-600 text-white px-8 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
