import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout({children}) {
  return (
    <div className='bg-black h-full'>
        <Header />
        
        <div>
            {children}
        </div>
        
        
    </div>
  )
}
