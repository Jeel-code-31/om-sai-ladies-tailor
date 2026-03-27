'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react'
import { Button } from './ui/button'

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate a network delay
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

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
                    <span className="text-sm">Mon - Sat: 10 AM - 7 PM</span><br/>
                    <span className="text-xs italic opacity-70 text-red-200">Holiday: Festivals & Sundays</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form / Success Container */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 min-h-[500px] flex flex-col justify-center border border-white/10 relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="contact-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="font-playfair text-2xl text-primary-foreground mb-6">
                    Inquiry Form
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block font-lato text-sm text-primary-foreground mb-2">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 font-lato transition-all"
                        placeholder="Enter Your name"
                      />
                    </div>

                    <div>
                      <label className="block font-lato text-sm text-primary-foreground mb-2">Email Address</label>
                      <input
                        required
                        type="email"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 font-lato transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block font-lato text-sm text-primary-foreground mb-2">Service Type</label>
                      <select required className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30 font-lato appearance-none">
                        <option value="" className="text-primary">Select a service</option>
                        <option value="saree" className="text-primary">Saree Tailoring</option>
                        <option value="lehenga" className="text-primary">Lehenga Stitching</option>
                        <option value="suit" className="text-primary">Suit Tailoring</option>
                        <option value="kurti" className="text-primary">Kurti Design</option>
                        <option value="custom" className="text-primary">Custom Design</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-lato text-sm text-primary-foreground mb-2">Message</label>
                      <textarea
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 font-lato resize-none transition-all"
                        placeholder="Tell us about your tailoring needs..."
                      ></textarea>
                    </div>

                    <Button 
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-primary-foreground text-primary hover:bg-secondary font-bold font-lato py-6 text-lg transition-transform active:scale-95"
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-container"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                    className="flex justify-center"
                  >
                    <CheckCircle2 className="w-20 h-20 text-white" />
                  </motion.div>
                  <h3 className="font-playfair text-3xl font-bold text-white">Submitted Successfully!</h3>
                  <p className="font-lato text-primary-foreground/90 max-w-xs mx-auto">
                    Thank you, your inquiry has been received.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm text-primary-foreground/60 hover:text-white underline font-lato mt-4"
                  >
                    Send another inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}