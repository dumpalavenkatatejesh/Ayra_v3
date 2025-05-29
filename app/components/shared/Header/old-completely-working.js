'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [hoveredMenu, setHoveredMenu] = useState(null); // top-level hovered menu index (desktop)
    const [hoveredSubmenu, setHoveredSubmenu] = useState(null); // second-level hovered submenu key (desktop)
    const [activeSubmenu, setActiveSubmenu] = useState(null); // mobile submenu open key
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        {
            name: 'Open Canvas',
            submenu: ['Your Space', 'Your Pace', 'You Choose', 'You Play'],
        },
        {
            name: 'Distinct for You',
            submenu: [
                { name: 'Overview', submenu: [] },
                { name: 'Campus', submenu: [] },
                { name: 'Life at AYRA', submenu: [] },
                { name: 'International Centre', submenu: [] },
                { name: 'Placements & Internship', submenu: [] },
                {
                    name: 'Focus Centre',
                    submenu: ['Sports & Wellness', 'Community Engagement', 'Sustainability', 'Spirituality'],
                },
            ],
        },
        {
            name: 'Admissions',
            submenu: ['Apply', 'Scholarships', "Bachelor's Program", "Master's Program", 'Academics'],
        },
        {
            name: 'Schools',
            submenu: ['Engg & Tech', 'Sports Sciences', 'Business', 'Hospitiality', 'Liberal Arts'],
        },
        {
            name: 'Research',
            submenu: ['Research at AYRA'],
        },
        {
            name: 'About Us',
            submenu: ['Overview', 'Leadership', 'Faculty'],
        },
    ];

    const generateHref = (item, parentName) => {
        if (parentName === 'Open Canvas') {
            return `/opencanvas/${item.toLowerCase().replace(/\s+/g, '-')}`;
        } else if (parentName === 'Admissions') {
            if (item === "Bachelor's Program") return '/admissions/bachelors-programs';
            if (item === "Master's Program") return '/admissions/masters-programs';
            return `/admissions/${item.toLowerCase().replace(/\s+/g, '-')}`;
        } else if (parentName === 'Focus Centre') {
            return `/focus-centre/${item.toLowerCase().replace(/\s+/g, '-')}`;
        } else {
            return `/${item.toLowerCase().replace(/\s+/g, '-')}`;
        }
    };

    // Recursive render for submenu (used for mobile and nested desktop submenu)
    const renderSubmenu = (items, level = 0, parentKey = null, parentName = null) => {
        return items.map((item, index) => {
            const submenuKey = parentKey !== null ? `${parentKey}-${index}` : `${index}`;

            if (typeof item === 'string') {
                const href = generateHref(item, parentName);
                return (
                    <Link
                        key={submenuKey}
                        href={href}
                        className="block px-4 py-2 border-b border-white/20 hover:bg-white/10 transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal"
                        onClick={() => {
                            if (isMobile) {
                                setIsMobileMenuOpen(false);
                                setActiveSubmenu(null);
                            }
                        }}
                    >
                        {item}
                    </Link>
                );
            } else {
                // item is object with submenu
                return (
                    <div key={submenuKey} className="border-b border-white/20">
                        <button
                            onClick={() =>
                                isMobile
                                    ? setActiveSubmenu(activeSubmenu === submenuKey ? null : submenuKey)
                                    : null
                            }
                            className="w-full text-left px-4 py-2 hover:bg-white/10 transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal flex items-center justify-between cursor-pointer"
                        >
                            {item.name}
                            {item.submenu?.length > 0 && (
                                <span
                                    className={`transform transition-transform ${activeSubmenu === submenuKey ? 'rotate-180' : ''
                                        }`}
                                >
                                    ▼
                                </span>
                            )}
                        </button>
                        {/* Mobile submenu open toggle */}
                        {item.submenu?.length > 0 && isMobile && activeSubmenu === submenuKey && (
                            <div className="bg-[#002561] pl-4">{renderSubmenu(item.submenu, level + 1, submenuKey, item.name)}</div>
                        )}
                    </div>
                );
            }
        });
    };

    return (
        <nav
            className={`
            ${isScrolled ? 'fixed top-0 left-0 w-full z-50' : ''}
            bg-[#002561] text-white font-['TT_Hoves_Pro'] shadow-[0_3px_8px_#0000005C]
            transition-all duration-500 ease-in-out
            lg:h-[12vh]
        `}
        >
            <div className="grid lg:grid-cols-[15%,85%] grid-cols-[40%,60%] lg:h-full items-center">
                <div className="flex items-center justify-center border-r border-dashed border-white/20 lg:p-0 p-2 h-full">
                    <Link href="/">
                        <Image
                            src="/ayra-logo.svg"
                            alt="AYRA Logo"
                            width={120}
                            height={40}
                            className="h-full w-full lg:px-7"
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex flex-col border-l border-dashed border-white/20 h-full justify-center">
                    {/* Top bar */}
                    <div className="grid grid-cols-7 gap-4 border-b border-dashed border-white/20 lg:px-16 py-2 h-1/2 items-center">
                        <div className="flex items-center space-x-6 gap-5 col-span-4 h-full">
                            <Link
                                href="/resources"
                                className="hover:text-gray-300 transition-colors text-[14px] 2xl:text-[18px] font-normal"
                            >
                                Resources
                            </Link>
                            <Link
                                href="/news-&-events"
                                className="hover:text-gray-300 transition-colors text-[14px] 2xl:text-[18px] font-normal"
                            >
                                News & Events
                            </Link>
                        </div>
                        <div className="flex items-center justify-between space-x-6 col-span-3 h-full">
                            <div className="relative h-full flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="bg-white/10 px-4 py-1 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                                />
                                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70" />
                            </div>
                            <Link
                                href="/admissions/apply-now"
                                className="hover:text-gray-300 transition-colors text-[14px] 2xl:text-[18px] font-normal"
                            >
                                Apply Now
                            </Link>
                            <Link
                                href="/contact-us"
                                className="hover:text-gray-300 transition-colors text-[14px] 2xl:text-[18px] font-normal"
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="lg:px-16 py-2 h-1/2 flex items-center">
                        <ul className="space-x-8 flex items-center h-full">
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="relative group h-full flex items-center"
                                    onMouseEnter={() => {
                                        setHoveredMenu(index);
                                        setHoveredSubmenu(null); // reset nested submenu hover on new main menu hover
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredMenu(null);
                                        setHoveredSubmenu(null);
                                    }}
                                >
                                    <span className="hover:text-gray-300 text-[16px] 2xl:text-[18px] font-normal cursor-default">
                                        {item.name}
                                    </span>

                                    {hoveredMenu === index && (
                                        <div className="absolute top-full left-0 bg-[#002561] rounded-md shadow-[0_3px_8px_#0000005C] py-2 z-50 min-w-[220px]">
                                            {item.submenu.map((subitem, subIndex) => {
                                                const hasNested = typeof subitem !== 'string' && subitem.submenu?.length > 0;
                                                const submenuKey = `${index}-${subIndex}`;

                                                return (
                                                    <div
                                                        key={submenuKey}
                                                        className="group relative"
                                                        onMouseEnter={() => setHoveredSubmenu(submenuKey)}
                                                        onMouseLeave={() => setHoveredSubmenu(null)}
                                                    >
                                                        {typeof subitem === 'string' ? (
                                                            <Link
                                                                href={generateHref(subitem, item.name)}
                                                                className="block px-4 py-2 border-b border-white/20 hover:bg-white/10 text-[14px] 2xl:text-[18px] font-normal"
                                                            >
                                                                {subitem}
                                                            </Link>
                                                        ) : (
                                                            <span className="block px-4 py-2 border-b border-white/20 hover:bg-white/10 text-[14px] 2xl:text-[18px] font-normal cursor-default flex justify-between items-center">
                                                                {subitem.name}
                                                                {hasNested && <span>▼</span>}
                                                            </span>
                                                        )}

                                                        {/* Nested submenu (Focus Centre etc) */}
                                                        {hasNested && hoveredSubmenu === submenuKey && (
                                                            <div className="absolute left-full top-0 min-w-[200px] bg-[#002561] shadow-[0_3px_8px_#0000005C] z-50">
                                                                {renderSubmenu(subitem.submenu, 1, submenuKey, subitem.name)}
                                                            </div>
                                                        )}
                                                    </div>
                                                );
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
                    <button
                        onClick={() => {
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                            if (!isMobileMenuOpen) setActiveSubmenu(null);
                        }}
                        className="text-white p-2"
                    >
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-[#002561] fixed inset-0 z-50 overflow-y-auto">
                    <div className="container mx-auto px-4 py-4">
                        {/* Top Menu Items */}
                        <div className="flex flex-col space-y-2 mb-6">
                            <Link
                                href="/resources"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-lg font-semibold"
                            >
                                Resources
                            </Link>
                            <Link
                                href="/news-&-events"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-lg font-semibold"
                            >
                                News & Events
                            </Link>
                            <Link
                                href="/admissions/apply-now"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-lg font-semibold"
                            >
                                Apply Now
                            </Link>
                            <Link
                                href="/contact-us"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-lg font-semibold"
                            >
                                Contact us
                            </Link>
                        </div>

                        {/* Main Mobile Menu Items */}
                        <ul className="flex flex-col gap-2 border-t border-white/20 pt-4">
                            {menuItems.map((item, index) => (
                                <li key={index} className="border-b border-white/20">
                                    <button
                                        onClick={() =>
                                            setActiveSubmenu(activeSubmenu === `${index}` ? null : `${index}`)
                                        }
                                        className="w-full flex justify-between items-center text-white px-4 py-3 text-lg font-semibold focus:outline-none"
                                    >
                                        {item.name}
                                        {item.submenu?.length > 0 && (
                                            <span
                                                className={`transition-transform duration-300 ${activeSubmenu === `${index}` ? 'rotate-180' : ''
                                                    }`}
                                            >
                                                ▼
                                            </span>
                                        )}
                                    </button>

                                    {activeSubmenu === `${index}` && (
                                        <div className="pl-4 bg-[#003070]">
                                            {renderSubmenu(item.submenu, 1, `${index}`, item.name)}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
