'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Facebook, Instagram, MapPin, Mail, Phone, ArrowRight } from 'lucide-react'

export default function Footer() {

  const footerLinks = {
    quick: ['Home', 'Gallery', 'About', 'Contact'],
    services: ['Saree Tailoring', 'Lehenga Stitching', 'Suit Tailoring', 'Custom Design']
  }

  return (
    <footer className="bg-neutral-950 text-neutral-200 pt-20 pb-10 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <h3 className="font-playfair text-3xl font-bold text-white tracking-tight">
                Om Sai
              </h3>
              <p className="font-lato text-[10px] text-primary tracking-[0.4em] uppercase font-bold">
                Ladies Tailor
              </p>
            </div>
            <p className="font-lato text-sm text-neutral-400 leading-relaxed max-w-xs">
              Transforming fabric into timeless art. We specialize in bespoke ladies' wear with precision and traditional craftsmanship.
            </p>
            <div className="flex gap-4">
              {[Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="https://www.instagram.com/llom_sai_ledish_tailorll/?utm_source=ig_web_button_share_sheet"
                  whileHover={{ y: -3, color: '#fff' }}
                  className="bg-neutral-900 p-3 rounded-full border border-neutral-800 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-playfair text-lg text-white font-semibold relative inline-block">
              Explore
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.quick.map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase()}`}
                    className="group flex items-center text-sm text-neutral-400 hover:text-white transition-all"
                  >
                    <ArrowRight className="w-0 h-3 mr-0 group-hover:w-3 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100 text-primary" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-playfair text-lg text-white font-semibold relative inline-block">
              Our Services
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service} className="text-sm text-neutral-400 hover:text-white transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-playfair text-lg text-white font-semibold relative inline-block">
              Visit Our Atelier
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3 text-sm group">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="font-lato text-neutral-400 group-hover:text-neutral-200 transition-colors">
                  Shop No. 12, Fashion Plaza,<br />Main Market, New Delhi 110001
                </p>
              </div>
              <div className="flex gap-3 text-sm group">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="font-lato text-neutral-400 group-hover:text-neutral-200 transition-colors">
                  +91 73593 51040
                </p>
              </div>
              <div className="flex gap-3 text-sm group">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="font-lato text-neutral-400 group-hover:text-neutral-200 transition-colors">
                 kartiksapariya1234@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[12px] uppercase tracking-widest font-medium text-neutral-500">
            <p>2024 Om Sai Ladies Tailor. Crafted with</p>
          </div>
        </div>
      </div>
    </footer>
  )
}