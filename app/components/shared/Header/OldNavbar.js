'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [activeSubmenu, setActiveSubmenu] = useState(null);
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
            submenu: ['Your Space', 'Your Pace', 'You Choose', 'You Play']
        },
        {
            name: 'Distinct for You',
            submenu: [
                {
                    name: 'Overview',
                    submenu: []
                },
                {
                    name: 'Campus',
                    submenu: []
                },
                {
                    name: 'Life at AYRA',
                    submenu: []
                },
                {
                    name: 'International Centre',
                    submenu: []
                },
                {
                    name: 'Placements & Internship',
                    submenu: []
                },
                {
                    name: 'Focus Centre',
                    submenu: [
                        'Sports & Wellness',
                        'Community Engagement',
                        'Sustainability',
                        'Spirituality'
                    ]
                },
            ]
        },

        {
            name: 'Admissions',
            submenu: ['Apply', 'Scholarships', "Bachelor's Program", "Master's Program", 'Academics']
        },
        {
            name: 'Schools',
            submenu: ['Engg & Tech', 'Sports Sciences', 'Business', 'Hospitiality', 'Liberal Arts']
        },
        {
            name: 'Research',
            submenu: ['Research at AYRA']
        },
        {
            name: 'About Us',
            submenu: ['Overview', 'Leadership', 'Faculty']
        }
    ];

    const topMenuItems = [
        'Resources',
        'News & Events',
        'Search',
        'Apply Now',
        'Contact us'
    ];

    const renderSubmenu = (items, level = 0, parentIndex = null, parentName = null) => {
        return items.map((item, index) => {
            let href = '';
            if (typeof item === 'string') {
                if (parentName === 'Open Canvas') {
                    href = `/opencanvas/${item.toLowerCase().replace(/\s+/g, '-')}`;
                } else if (parentName === 'Admissions') {
                    if (item === "Bachelor's Program") {
                        href = '/admissions/bachelors-programs';
                    } else if (item === "Master's Program") {
                        href = '/admissions/masters-programs';
                    } else {
                        href = `/admissions/${item.toLowerCase().replace(/\s+/g, '-')}`;
                    }
                } else if (parentName === 'Focus Centre') {
                    href = `/focus-centre/${item.toLowerCase().replace(/\s+/g, '-')}`;
                } else {
                    href = `/${item.toLowerCase().replace(/\s+/g, '-')}`;
                }
            }
            const submenuKey = parentIndex !== null ? `${parentIndex}-${index}` : index;
            return (
                <div key={index} className={`${level > 0 ? 'pl-4' : ''}`}>
                    {typeof item === 'string' ? (
                        <Link
                            href={href}
                            className="block px-4 py-2 hover:bg-white/10 transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal"
                            onClick={() => {
                                if (isMobile) {
                                    setIsMobileMenuOpen(false);
                                    setActiveSubmenu(null);
                                }
                            }}
                        >
                            {item}
                        </Link>
                    ) : (
                        <>
                            <button
                                onClick={() => {
                                    setActiveSubmenu(activeSubmenu === submenuKey ? null : submenuKey);
                                }}
                                className="w-full text-left px-4 py-2 hover:bg-white/10 transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal flex items-center justify-between"
                            >
                                {item.name}
                                {parentName === 'Distinct for You' && item.name === 'Focus Centre' && item.submenu && item.submenu.length > 0 && (
                                    <span className={`transform transition-transform ${activeSubmenu === submenuKey ? 'rotate-180' : ''}`}>
                                        ▼
                                    </span>
                                )}
                            </button>
                            {parentName === 'Distinct for You' && item.name === 'Focus Centre' && activeSubmenu === submenuKey && (
                                <div className="bg-[#002561] rounded-md shadow-[0_3px_8px_#0000005C]">
                                    {renderSubmenu(item.submenu, level + 1, submenuKey, item.name)}
                                </div>
                            )}
                        </>
                    )}
                </div>
            );
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
            style={{ minHeight: 'unset' }}
        >
            {/* Top Navigation Bar */}
            <div className="grid lg:grid-cols-[15%,85%] grid-cols-[40%,60%] lg:h-full items-center">
                <div className="flex items-center justify-center border-r border-dashed border-white/20 lg:p-0 p-2 h-full">
                    <Link href="/">
                        <Image
                            src="/ayra-logo.svg"
                            alt="AYRA Logo"
                            width={120}
                            height={40}
                            className='h-full w-full lg:px-7'
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex flex-col border-l border-dashed border-white/20 h-full justify-center">
                    <div className="grid grid-cols-7 gap-4 border-b border-dashed border-white/20 lg:px-16 py-2 h-1/2 items-center">
                        <div className="flex items-center space-x-6 gap-5 col-span-4 h-full">
                            <Link
                                href="/resources"
                                className="hover:text-gray-300 transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal flex items-center h-full"
                            >
                                Resources
                            </Link>
                            <Link
                                href="/news-&-events"
                                className="hover:text-gray-300 transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal flex items-center h-full"
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
                            <div className='flex items-center justify-around space-x-6 h-full'>
                                <Link
                                    href="/admissions/apply-now"
                                    className="hover:text-gray-300 transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal flex items-center h-full"
                                >
                                    Apply Now
                                </Link>
                                <Link
                                    href="/contact-us"
                                    className="hover:text-gray-300 transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal flex items-center h-full"
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='lg:px-16 py-2 h-1/2 flex items-center'>
                        <ul className=" space-x-8 flex flex-row justify-between items-center h-full">
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="relative group h-full flex items-center"
                                    onMouseEnter={() => setActiveSubmenu(index)}
                                    onMouseLeave={() => setActiveSubmenu(null)}
                                >
                                    {item.name === 'Open Canvas' ? (
                                        <span className="hover:text-gray-300 transition-colors text-[16px] 2xl:text-[18px] leading-[27px] font-normal flex items-center h-full cursor-default">
                                            {item.name}
                                        </span>
                                    ) : item.name === 'Admissions' ? (
                                        <span className="hover:text-gray-300 transition-colors text-[16px] 2xl:text-[18px] leading-[27px] font-normal flex items-center h-full cursor-default">
                                            {item.name}
                                        </span>
                                    ) : (
                                        <button className="hover:text-gray-300 transition-colors text-[16px] 2xl:text-[18px] leading-[27px] font-normal flex items-center h-full">
                                            {item.name}
                                        </button>
                                    )}
                                    {activeSubmenu === index && (
                                        <div className="absolute top-full left-0 w-48 bg-[#002561] rounded-md shadow-[0_3px_8px_#0000005C] py-2 z-50">
                                            {renderSubmenu(item.submenu, 0, index, item.name)}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center justify-end px-4">
                    <button
                        onClick={() => {
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                            if (!isMobileMenuOpen) {
                                setActiveSubmenu(null);
                            }
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
                        <div className="space-y-4 mb-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full bg-white/10 px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white/20"
                                />
                                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Link
                                    href="/resources"
                                    className="block hover:text-gray-300 transition-colors text-[14px] leading-[27px] font-normal"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Resources
                                </Link>
                                <Link
                                    href="/news-&-events"
                                    className="block hover:text-gray-300 transition-colors text-[14px] leading-[27px] font-normal"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    News & Events
                                </Link>
                                <Link
                                    href="/admissions/apply-now"
                                    className="block hover:text-gray-300 transition-colors text-[14px] leading-[27px] font-normal"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Apply Now
                                </Link>
                                <Link
                                    href="/contact-us"
                                    className="block hover:text-gray-300 transition-colors text-[14px] leading-[27px] font-normal"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>

                        {/* Main Menu Items */}
                        <div className="border-t border-dashed border-white/20 pt-4">
                            {menuItems.map((item, index) => (
                                <div key={index} className="py-2">
                                    <button
                                        onClick={() => setActiveSubmenu(activeSubmenu === index ? null : index)}
                                        className="w-full text-left hover:text-gray-300 transition-colors text-[14px] leading-[27px] font-normal flex items-center justify-between"
                                    >
                                        {item.name}
                                        {item.submenu && item.submenu.length > 0 && (
                                            <span className={`transform transition-transform ${activeSubmenu === index ? 'rotate-180' : ''}`}>
                                                ▼
                                            </span>
                                        )}
                                    </button>
                                    {item.submenu && item.submenu.length > 0 && activeSubmenu === index && (
                                        <div className="pl-4 mt-2 space-y-2">
                                            {renderSubmenu(item.submenu, 1, index, item.name)}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
