import React from 'react'
import { logo } from '../assets'

export default function Footer() {
  return (
        <footer className="w-full  text-white">
            <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-6">
                    <img alt="" className="h-11"
                        src={logo} />
                </div>
                <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
                    Transform your ideas by trusting us.
                </p>
            </div>
            <div >
                <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
                    <a href="https://ulrichleblack.vercel.app/">ulrichleblack</a> ©2026. All rights reserved.
                </div>
            </div>

            <br />
        <br />
        </footer>
        
 
  )
}
