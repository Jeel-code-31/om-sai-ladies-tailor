'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react'
import { Button } from './ui/button'

export default function Contact() {
    
  return (
    <section id="contact" className="py-20 md:py-32 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: CTA Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground">
                Ready to Transform Your Wardrobe?
              </h2>
              <p className="font-lato text-lg text-primary-foreground/90">
                Get in touch with us today to schedule your consultation and discuss your tailoring needs.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 pt-1">
                  <MapPin className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg text-primary-foreground">Address</h3>
                  <p className="font-lato text-primary-foreground/80">
                    Sarva Square, opp. Motnath Mahadev Mandir Road<br />
                    Harni, Vadodara, Gujarat 390024
                  </p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 pt-1">
                  <Phone className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="font-playfair text-lg text-primary-foreground">Phone</h3>
                  <p className="font-lato text-primary-foreground/80">
                    +91 73593 51040<br />
                    <span className="text-sm">Mon - Sat: 10 AM - 10 PM</span><br/>
                    <span className="text-xs italic opacity-70 text-red-200">Holiday: Festivals & Sundays</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}