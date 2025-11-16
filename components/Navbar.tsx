import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'
import { BookOpen, CreditCardIcon, GraduationCap, LogOutIcon, ZapIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-4 px-6 bg-background border-b'>

            <Link href={'/'} className='text-2xl font-extrabold text-primary flex items-center gap-2'>
                MasterClass <GraduationCap className='h-6 w-6' />
            </Link>

            <div className='flex items-center space-x-1  sm:space-x-4'>
                <Link href={'/courses'}
                    className='flex items-center gap-1 px-3 py-2 rounded-md text-muted-foreground
            hover:text-primary hover:bg-secondary transition-colors'
                >
                    <BookOpen className='size-4' />
                    <span className='hidden sm:inline'>Courses</span>

                </Link>

                <Link href={'/pro'}
                    className='flex items-center gap-1 px-3 py-2 rounded-md text-muted-foreground
            hover:text-primary hover:bg-secondary transition-colors'
                >
                    <ZapIcon className='size-4' />
                    <span className='hidden sm:inline'>pro</span>

                </Link>

                <SignedIn>
                    <Link href={'/billing'}>
                        <Button variant={'outline'} size={'sm'} className='flex items-center gap-2'>
                            <CreditCardIcon className='size-4' />
                            <span className='hidden sm:inline'>billing</span>

                        </Button>
                    </Link>

                </SignedIn>
                <UserButton />

                <SignedIn>
                    <SignOutButton>
                        <Button variant='outline' size='sm' className='hidden sm:flex items-center gap-2'>
                            <LogOutIcon className='h-4 w-4' />
                            <span className='hidden sm:inline'>تسجيل الخروج</span>
                        </Button>
                    </SignOutButton>
                </SignedIn>

                <SignedOut>
                    <SignInButton>
                        <Button variant='outline' size='sm'>
                            تسجيل الدخول
                        </Button>
                    </SignInButton>
                </SignedOut>

            </div>


        </nav>
    )
}

export default Navbar