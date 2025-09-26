'use client'
import { roleBasedNav } from './RoleBasedLink'
import { Roles } from '../features/auth/slice/loginType'
import Link from 'next/link'
import { FC } from 'react'

interface NavbarProps {
  role: Roles
}

const Navbar: FC<NavbarProps> = ({ role }) => {
  const navItems = roleBasedNav[role] || []

  return (
    <nav className="bg-white shadow p-4 flex space-x-4">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className="flex items-center space-x-1">
          <item.icon size={20} />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}

export default Navbar