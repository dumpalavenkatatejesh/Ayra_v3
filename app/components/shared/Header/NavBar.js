'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'
import { MdKeyboardArrowRight, MdKeyboardArrowUp } from 'react-icons/md'

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
                name: 'Focus Centre',
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
            { name: 'Apply', slug: 'apply' },
            { name: 'Scholarships', slug: 'scholarships' },
            { name: "Bachelor's Program", slug: 'bachelors-programs' },
            { name: "Master's Program", slug: 'masters-programs' },
            { name: 'Academics', slug: 'academics' },
        ],
    },
    {
        name: 'Schools',
        submenu: [
            { name: 'Engg & Tech', slug: 'engg-tech' },
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
    // if (parent === 'Admissions') {
    //     if (item.slug === 'bachelors-programs') return '/admissions/bachelors-programs'
    //     if (item.slug === 'masters-programs') return '/admissions/masters-programs'
    //     return `/admissions/${item.slug}`
    // }
    if (parent === 'Focus Centre') return `/focus-centre/${item.slug}`
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

const NavBar = () => {
    const [hoveredMenu, setHoveredMenu] = useState(null)
    const [hoveredSubmenu, setHoveredSubmenu] = useState(null)
    const [activeSubmenu, setActiveSubmenu] = useState(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`${isScrolled ? 'fixed top-0 left-0 w-full z-50' : ''} bg-[#002561] text-white shadow-[0_3px_8px_#0000005C] transition-all duration-500`}>
            <div className="grid lg:grid-cols-[15%,85%] grid-cols-[40%,60%] items-center">
                <div className="flex items-center justify-center border-r border-dashed border-white/20 lg:p-0 p-2 h-full">
                    <Link href="/"><Image src="/ayra-logo.svg" alt="AYRA Logo" width={120} height={40} className="h-full w-full lg:px-7" /></Link>
                </div>
                {/* Desktop Nav */}
                <div className="hidden lg:flex flex-col border-l border-dashed border-white/20 h-full justify-center">
                    <div className="grid grid-cols-7 gap-4 border-b border-dashed border-white/20 lg:px-16 py-2 h-1/2 items-center">
                        <div className="flex items-center space-x-6 gap-5 col-span-4 h-full">
                            <Link href="/resources" className="hover:text-gray-300 text-[14px] 2xl:text-[18px]">Resources</Link>
                            <Link href="/news-&-events" className="hover:text-gray-300 text-[14px] 2xl:text-[18px]">News & Events</Link>
                        </div>
                        <div className="flex items-center justify-between space-x-6 col-span-3 h-full">
                            <div className="relative h-full flex items-center">
                                <input type="text" placeholder="Search..." className="bg-white/10 px-4 py-1 text-sm" />
                                <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70" />
                            </div>
                            <Link href="/admissions/apply-now" className="hover:text-gray-300 text-[14px] 2xl:text-[18px]">Apply Now</Link>
                            <Link href="/contact-us" className="hover:text-gray-300 text-[14px] 2xl:text-[18px]">Contact us</Link>
                        </div>
                    </div>
                    <div className="lg:px-16 py-2 h-1/2 flex items-center">
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
                                                            <span className="block px-4 py-2 border-b border-white/20 hover:bg-white/10 text-[14px] flex justify-between items-center">
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
                        className="text-white p-2" aria-label="Toggle mobile menu">
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div className="w-[75%] bg-[#002561] p-4 relative overflow-y-auto">
                        <button aria-label="Close menu" onClick={() => { setIsMobileMenuOpen(false); setActiveSubmenu(null) }}
                            className="absolute top-4 right-4 text-white text-2xl p-1 hover:text-gray-300"><FaTimes /></button>
                        <div className="flex flex-col space-y-2 mb-6">
                            <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-semibold">Resources</Link>
                            <Link href="/news-&-events" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-semibold">News & Events</Link>
                            <Link href="/admissions/apply-now" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-semibold">Apply Now</Link>
                            <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-semibold">Contact us</Link>
                        </div>
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
        </nav>
    )
}

export default NavBar