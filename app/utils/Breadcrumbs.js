import Link from "next/link"

/**
 * Breadcrumbs component
 * @param {Object} props
 * @param {{label: string, href: string}[]} props.items - Array of breadcrumb items
 */
const Breadcrumbs = ({ items = [] }) => {
    if (!items.length) return null
    return (
        <>
            <div className="w-full bg-[#002560] flex flex-col justify-center items-center pt-24">
                <div className="container">
                    <nav aria-label="Breadcrumb" className="py-4">
                        <ol className="flex items-center space-x-1 px-4 lg:px-0 text-gray-500">
                            {items.map((item, idx) => (
                                <li key={idx} className="flex items-center">
                                    {idx > 0 && (
                                        <svg className="w-4 h-4 mx-1 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    )}
                                    {idx < items.length - 1 ? (
                                        <Link href={item.href} className="hover:underline text-white text-xs font-tthoves-regular transition-colors duration-200">
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <span className="text-white text-xs font-tthoves-regular">{item.label}</span>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Breadcrumbs