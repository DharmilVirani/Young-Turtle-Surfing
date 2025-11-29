'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/people', label: 'People' },
    { href: '/articles', label: 'Articles' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileOpen, setIsMobileOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                'bg-primary/80 backdrop-blur-sm'
            )}
        >
            <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 items-center justify-between'>
                    {/* Logo */}
                    <Link href='/' className={cn('transition-all duration-300')}>
                        <Image src='/logo.png' alt='Young Turtle Logo' width={120} height={120} priority />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center gap-8'>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    'relative text-sm font-medium transition-colors duration-200 pb-2',
                                    pathname === link.href
                                        ? 'text-white after:w-full'
                                        : 'text-muted hover:text-white after:w-0 hover:after:w-full',
                                    'after:absolute after:bottom-0 after:left-0 after:h-px after:bg-white after:transition-all after:duration-200'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className='hidden md:block'>
                        <Button
                            asChild
                            className={cn(
                                'bg-white text-primary hover:bg-white/90 rounded-md px-5 py-2 text-sm font-medium transition-all duration-200',
                                isScrolled && 'shadow-md'
                            )}
                        >
                            <Link href='/careers'>Join Us</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className='md:hidden p-2 text-foreground'
                        aria-label='Toggle menu'
                    >
                        {isMobileOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={cn(
                        'md:hidden overflow-hidden transition-all duration-300',
                        isMobileOpen ? 'max-h-96 pb-4' : 'max-h-0'
                    )}
                >
                    <div className='flex flex-col gap-2 pt-4'>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileOpen(false)}
                                className={cn(
                                    'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                                    pathname === link.href
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className='px-4 pt-2'>
                            <Button asChild className='w-full bg-primary text-primary-foreground hover:bg-primary/90'>
                                <Link href='/careers' onClick={() => setIsMobileOpen(false)}>
                                    Join Us
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
