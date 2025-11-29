import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
    company: [
        { href: '/', label: 'Home' },
        { href: '/research', label: 'Research' },
        { href: '/people', label: 'People' },
        { href: '/careers', label: 'Careers' },
    ],
    resources: [
        { href: '/articles', label: 'Articles' },
        { href: '/contact', label: 'Contact' },
    ],
    legal: [
        { href: '/terms', label: 'Terms & Conditions' },
        { href: '/privacy', label: 'Privacy Policy' },
    ],
}

export function Footer() {
    return (
        <footer className='bg-navy text-navy-foreground'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                {/* Main Footer */}
                <div className='py-12 grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {/* Brand */}
                    <div className='md:col-span-1'>
                        <Link href='/' className='font-serif font-bold text-xl text-white'>
                            <Image src='/logo.png' alt='Young Turtle Logo' width={120} height={120} priority />
                        </Link>
                        <p className='mt-4 text-sm text-white/70 leading-relaxed'>
                            Research-driven investing engineered for modern markets.
                        </p>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className='font-serif font-semibold text-sm text-white mb-4'>Company</h4>
                        <ul className='space-y-2'>
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className='text-sm text-white/70 hover:text-white transition-colors'
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className='font-serif font-semibold text-sm text-white mb-4'>Resources</h4>
                        <ul className='space-y-2'>
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className='text-sm text-white/70 hover:text-white transition-colors'
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className='font-serif font-semibold text-sm text-white mb-4'>Legal</h4>
                        <ul className='space-y-2'>
                            {footerLinks.legal.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className='text-sm text-white/70 hover:text-white transition-colors'
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Disclaimers */}
                <div className='border-t border-white/10 py-8'>
                    <div className='space-y-4 text-xs text-white/50 leading-relaxed'>
                        <p>
                            <strong className='text-white/70'>Risk Disclosure:</strong> Past performance does not
                            guarantee future results. All investments involve risk, including possible loss of
                            principal. The information provided is for informational purposes only and should not be
                            considered as investment advice.
                        </p>
                        <p>
                            <strong className='text-white/70'>Disclaimer:</strong> Young Turtle is a quantitative
                            research firm. This website does not constitute an offer to sell or a solicitation of an
                            offer to buy any securities or investment products. Any investment decisions should be made
                            in consultation with a qualified financial advisor.
                        </p>
                        <p>
                            Young Turtle Capital Management, LLC. Registered with the SEC as an Investment Adviser.
                            Registration does not imply a certain level of skill or training.
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className='border-t border-white/10 py-6 flex flex-col sm:flex-row justify-between items-center gap-4'>
                    <p className='text-xs text-white/50'>
                        &copy; {new Date().getFullYear()} Young Turtle. All rights reserved.
                    </p>
                    <p className='text-xs text-white/50'>123 Financial District, New York, NY 10004</p>
                </div>
            </div>
        </footer>
    )
}
