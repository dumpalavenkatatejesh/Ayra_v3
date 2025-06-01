'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'
import { MdKeyboardArrowRight, MdKeyboardArrowUp } from 'react-icons/md'
import { usePathname } from 'next/navigation'

// --- Menu Data and Utility ---
const menuItems = [
    {
        name: 'Open Canvas',
        submenu: [
            { name: 'Your Space', slug: 'your-space' },
            { name: 'Your Pace', slug: 'your-pace' },
            { name: 'You Choose', slug: 'you-choose' },
            { name: 'You Play', slug: 'you-play' },
        ],
    },
    {
        name: 'Distinct for You',
        submenu: [
            { name: 'Overview', slug: 'overview' },
            { name: 'Campus', slug: 'campus' },
            { name: 'Life at AYRA', slug: 'life-at-ayra' },
            { name: 'International Centre', slug: 'international-centre' },
            { name: 'Placements & Internship', slug: 'placements-internship' },
            {
                name: 'Focus Centres',
                slug: 'focus-centre',
                submenu: [
                    { name: 'Sports & Wellness', slug: 'sports-and-wellness-centre' },
                    { name: 'Community Engagement', slug: 'community-engagement' },
                    { name: 'Sustainability', slug: 'sustainability' },
                    { name: 'Spirituality', slug: 'spirituality' },
                ],
            },
        ],
    },
    {
        name: 'Admissions',
        submenu: [
            { name: 'Apply', slug: 'apply-now' },
            { name: 'Scholarships', slug: 'scholarships' },
            { name: "Bachelor's Programs", slug: 'bachelors-programs' },
            { name: "Master's Programs", slug: 'masters-programs' },
            // { name: 'Academics', slug: 'academics' },
        ],
    },
    {
        name: 'Schools',
        submenu: [
            { name: 'Engg & Tech', slug: 'engg-and-tech' },
            { name: 'Sports Sciences', slug: 'sports-sciences' },
            { name: 'Business', slug: 'business' },
            { name: 'Hospitality', slug: 'hospitality' },
            { name: 'Liberal Arts', slug: 'liberal-arts' },
        ],
    },
    {
        name: 'Centres for Excellence',
        submenu: [
            { name: 'Centre for Teaching & Learning', slug: 'centre-for-teaching-and-learning' },
            { name: 'Centre for Entrepreneurship', slug: 'centre-for-entrepreneurship' },
            { name: 'Centre for Research', slug: 'centre-for-research' },
        ],
    },
    {
        name: 'Research',
        submenu: [
            { name: 'Research at AYRA', slug: 'research-at-ayra' },
        ],
    },
    {
        name: 'About Us',
        submenu: [
            { name: 'Overview', slug: 'overview' },
            { name: 'Leadership', slug: 'leadership' },
            { name: 'Faculty', slug: 'faculty' },
        ],
    },
]

const generateHref = (item, parent) => {
    if (!item.slug) return '#'
    if (parent === 'Open Canvas') return `/open-canvas/${item.slug}`
    if (parent === 'Open Canvas') return `/open-canvas/${item.slug}`
    if (parent === 'Distinct for You') return `/distinct-for-you/${item.slug}`
    if (parent === 'Admissions') return `/admissions/${item.slug}`
    if (parent === 'Distinct for You') return `/distinct-for-you/${item.slug}`
    if (parent === 'Schools') return `/schools/${item.slug}`
    if (parent === 'Centres for Excellence') return `/centres-for-excellence/${item.slug}`
    if (parent === 'About Us') return `/about-us/${item.slug}`
    // if (parent === 'Admissions') {
    //     if (item.slug === 'bachelors-programs') return '/admissions/bachelors-programs'
    //     if (item.slug === 'masters-programs') return '/admissions/masters-programs'
    //     return `/admissions/${item.slug}`
    // }
    if (parent === 'Focus Centres') return `/focus-centre/${item.slug}`
    return `/${item.slug}`
}

// --- Submenu Renderer ---
const RenderSubmenu = ({ items, level = 0, parentKey = '', parentName, isMobile, activeSubmenu, setActiveSubmenu, setIsMobileMenuOpen }) => (
    items.map((item, idx) => {
        const key = `${parentKey}-${idx}`
        if (!item.submenu) {
            return (
                <Link key={key} href={generateHref(item, parentName)}
                    className="block px-4 py-2 border-b border-white/20 hover:bg-white/10 text-[14px] 2xl:text-[18px]"
                    onClick={() => { if (isMobile) { setIsMobileMenuOpen(false); setActiveSubmenu(null) } }}>
                    {item.name}
                </Link>
            )
        }
        return (
            <div key={key} className="border-b border-white/20">
                <button onClick={() => isMobile && setActiveSubmenu(activeSubmenu === key ? null : key)}
                    className="w-full text-left px-4 py-2 hover:bg-white/10 flex items-center justify-between">
                    {item.name}
                    {item.submenu?.length > 0 && <span className={`transform ${activeSubmenu === key ? 'rotate-180' : ''}`}>▼</span>}
                </button>
                {item.submenu?.length > 0 && isMobile && activeSubmenu === key &&
                    <div className="bg-[#002561] pl-4">
                        <RenderSubmenu {...{ items: item.submenu, level: level + 1, parentKey: key, parentName: item.name, isMobile, activeSubmenu, setActiveSubmenu, setIsMobileMenuOpen }} />
                    </div>
                }
            </div>
        )
    })
)

// Extract NavBar content to avoid duplication
const NavBarContent = ({
    menuItems,
    hoveredMenu,
    setHoveredMenu,
    hoveredSubmenu,
    setHoveredSubmenu,
    activeSubmenu,
    setActiveSubmenu,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isMobile,
}) => (
    <>
        <div className="grid lg:grid-cols-[15%,85%] grid-cols-[40%,60%] items-center">
            <div className="flex items-center justify-center border-r border-dashed border-white/20 lg:p-2 p-2 h-full">
                <Link href="/"><Image src="/ayra-logo.svg" alt="AYRA Logo" width={120} height={40} className="h-full w-full lg:px-7" /></Link>
            </div>
            {/* Desktop Nav */}
            <div className="hidden lg:flex flex-col border-l border-dashed border-white/20 h-full justify-center">
                <div className="grid grid-cols-8 gap-4 border-b border-dashed border-white/20 lg:px-16 py-2 h-1/2 items-center">
                    <div className="flex items-center space-x-6 gap-5 col-span-3 h-full">
                        <Link href="/resources" className="hover:text-gray-300 text-[14px] 2xl:text-[18px]">Resources</Link>
                        <Link href="/news-&-events" className="hover:text-gray-300 text-[14px] 2xl:text-[18px]">News & Events</Link>
                    </div>
                    <div className="flex items-center justify-end gap-2 space-x-6 col-span-5 h-full">
                        <div className="relative h-full flex items-center">
                            <input type="text" placeholder="Search..." className="bg-white/10 px-4 py-1 text-sm" />
                            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70" />
                        </div>
                        <div className="group inline-block">
                            <button className="relative px-5 text-[14px] 2xl:text-[18px] py-0.5 bg-[#0072C5] group-hover:bg-[#0072C5] text-white overflow-hidden cursor-pointer transition-colors duration-300">
                                Know More
                                <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#002561] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                                <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-[#4b89e8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                            </button>
                        </div>
                        <Link href="/contact-us">
                            <div className="group inline-block">
                                <button className="relative px-5 py-0.5 text-[14px] 2xl:text-[18px] bg-[#8772F7] group-hover:bg-[#8772F7] text-white overflow-hidden cursor-pointer transition-colors duration-300">
                                    Contact us
                                    <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#002561] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                                    <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-[#4b89e8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="lg:px-16 py-2 h-1/2 flex items-center justify-between">
                    <ul className="space-x-8 flex items-center h-full">
                        {menuItems.map((item, idx) => (
                            <li key={idx} className="relative group h-full flex items-center"
                                onMouseEnter={() => { setHoveredMenu(idx); setHoveredSubmenu(null) }}
                                onMouseLeave={() => { setHoveredMenu(null); setHoveredSubmenu(null) }}>
                                <span className="hover:text-gray-300 text-[16px] 2xl:text-[18px] cursor-default">{item.name}</span>
                                {hoveredMenu === idx && (
                                    <div className="absolute top-full left-0 bg-[#002561] shadow-[0_3px_8px_#0000005C] pt-2 z-50 min-w-[220px]">
                                        {item.submenu.map((subitem, subIdx) => {
                                            const hasNested = subitem.submenu && subitem.submenu.length > 0
                                            const key = `${idx}-${subIdx}`
                                            return (
                                                <div key={key} className="group relative"
                                                    onMouseEnter={() => setHoveredSubmenu(key)}
                                                    onMouseLeave={() => setHoveredSubmenu(null)}>
                                                    {!subitem.submenu ? (
                                                        <Link href={generateHref(subitem, item.name)}
                                                            className="block px-4 py-2 border-b border-white/20 hover:bg-white/10 text-[14px] ">
                                                            {subitem.name}
                                                        </Link>
                                                    ) : (
                                                        <span className="px-4 py-2 border-b border-white/20 hover:bg-white/10 text-[14px] flex justify-between items-center">
                                                            {subitem.name} {hasNested && <span>▼</span>}
                                                        </span>
                                                    )}
                                                    {hasNested && hoveredSubmenu === key && (
                                                        <div className="absolute left-full top-0 min-w-[200px] bg-[#002561] shadow-[0_3px_8px_#0000005C] z-50">
                                                            <RenderSubmenu items={subitem.submenu} parentKey={key} parentName={subitem.name} />
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Mobile menu icon */}
            <div className="lg:hidden flex items-center justify-end px-4">
                <button onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); if (!isMobileMenuOpen) setActiveSubmenu(null) }}
                    className="text-white p-2 z-50" aria-label="Toggle mobile menu">
                    {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="fixed inset-0 z-40 flex">
                <div className="w-[75%] bg-[#002561] p-4 relative overflow-y-auto">
                    <ul>
                        {menuItems.map((item, idx) => (
                            <li key={idx} className="border-b border-white/20">
                                <button onClick={() => setActiveSubmenu(activeSubmenu === `${idx}` ? null : `${idx}`)}
                                    className="w-full flex justify-between items-center text-white px-4 py-3 text-lg font-semibold">
                                    {item.name}
                                    {item.submenu?.length > 0 && (
                                        <span>{activeSubmenu === `${idx}` ? <MdKeyboardArrowUp size={24} /> : <MdKeyboardArrowRight size={24} />}</span>
                                    )}
                                </button>
                                {activeSubmenu === `${idx}` && (
                                    <div className="pl-4 bg-[#003070]">
                                        <RenderSubmenu items={item.submenu} parentKey={`${idx}`} parentName={item.name}
                                            isMobile={true} activeSubmenu={activeSubmenu} setActiveSubmenu={setActiveSubmenu} setIsMobileMenuOpen={setIsMobileMenuOpen} />
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-[25%] bg-black bg-opacity-50 cursor-pointer"
                    onClick={() => { setIsMobileMenuOpen(false); setActiveSubmenu(null) }} />
            </div>
        )}
    </>
);

const NavBar = () => {
    const [hoveredMenu, setHoveredMenu] = useState(null)
    const [hoveredSubmenu, setHoveredSubmenu] = useState(null)
    const [activeSubmenu, setActiveSubmenu] = useState(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname();
    const prevIsScrolled = useRef(false);
    const [transitionStyle, setTransitionStyle] = useState('opacity 1s cubic-bezier(0.4,0,0.2,1), transform 1s cubic-bezier(0.4,0,0.2,1)');
    const prevScrollY = useRef(0);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [pathname]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 10; // 10px
            const currentScrollY = window.scrollY;
            if (currentScrollY > threshold && currentScrollY > prevScrollY.current) {
                setIsScrolled(true);
            } else if (currentScrollY <= threshold) {
                setIsScrolled(false);
            }
            prevScrollY.current = currentScrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isScrolled && !prevIsScrolled.current) {
            // Scrolling down: smooth
            setTransitionStyle('opacity 1s cubic-bezier(0.4,0,0.2,1), transform 1s cubic-bezier(0.4,0,0.2,1)');
        } else if (!isScrolled && prevIsScrolled.current) {
            // Scrolling up: instant
            setTransitionStyle('opacity 0s, transform 0s');
        }
        prevIsScrolled.current = isScrolled;
    }, [isScrolled]);

    return (
        <>
            {/* Static NavBar (always visible) */}
            <nav
                className="bg-[#002561] text-white shadow-[0_3px_8px_#0000005C] w-full border-b border-white/20"
                style={{
                    position: 'static',
                    opacity: 1,
                    transform: 'none',
                    zIndex: 10,
                }}
            >
                <NavBarContent
                    menuItems={menuItems}
                    hoveredMenu={hoveredMenu}
                    setHoveredMenu={setHoveredMenu}
                    hoveredSubmenu={hoveredSubmenu}
                    setHoveredSubmenu={setHoveredSubmenu}
                    activeSubmenu={activeSubmenu}
                    setActiveSubmenu={setActiveSubmenu}
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    isMobile={isMobile}
                />
            </nav>

            {/* Fixed NavBar (appears after scroll, overlays static) */}
            <nav
                className="bg-[#002561] text-white shadow-[0_3px_8px_#0000005C] w-full fixed top-0 left-0 z-50"
                style={{
                    transition: transitionStyle,
                    opacity: isScrolled ? 1 : 0,
                    transform: isScrolled ? 'translateY(0)' : 'translateY(-60px)',
                    pointerEvents: isScrolled ? 'auto' : 'none',
                }}
            >
                <NavBarContent
                    menuItems={menuItems}
                    hoveredMenu={hoveredMenu}
                    setHoveredMenu={setHoveredMenu}
                    hoveredSubmenu={hoveredSubmenu}
                    setHoveredSubmenu={setHoveredSubmenu}
                    activeSubmenu={activeSubmenu}
                    setActiveSubmenu={setActiveSubmenu}
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    isMobile={isMobile}
                />
            </nav>
        </>
    );
}

export default NavBar