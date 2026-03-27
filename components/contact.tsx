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
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.443184646035!2d73.2215!3d22.3361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc92400000001%3A0x867041776510619a!2sSarva%20Square!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Om Sai Ladies Tailor Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}