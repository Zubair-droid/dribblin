"use client";

import Link from 'next/link'
import AgentPulse from './AgentPulse'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './ToggleButton';

function Header() {
  return (
    <header className='sticky top-0 dark:bg-gray-900 left-0 right-0 px-4 md:px-0 bg-white backdrop-blur-sm border-b z-50'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between h-16'>

        {/* Left */}
          <div className='flex items-center justify-between h-16'>
            <Link href='/' className='flex items-center gap-4'>
              <AgentPulse size="small" color="blue"/>
              <h1 className='text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent'> AgentTube </h1>
            </Link>
          </div>


          {/* Right */}
          <div className='flex items-center gap-4'>
            <SignedIn>
              <Link href="/manage-plan">
                <Button variant='outline' className='bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text'>Manage Plan </Button>
              </Link>
              <div className='p-3 w-5 h-5 flex items-center justify-center rounded-full border bg-blue-100 border-blue-200'>
                <UserButton />
                
              </div>
             < ModeToggle />
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost" className='bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text'>Sign In</Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
        </div>
      
    </header>
  )
}

export default Header