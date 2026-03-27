'use client'

import { Button } from './ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video Container */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover"
        >
          <source src="/tailor.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay - Adjusted opacity for better text punch */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-playfair text-5xl md:text-7xl font-bold text-white text-balance tracking-tight">
              Exquisite Tailoring Craftsmanship
            </h2>
            <p className="font-lato text-lg md:text-xl text-gray-200 max-w-2xl mx-auto text-balance">
              Transform your wardrobe with precision tailoring and attention to every detail. Experience the art of bespoke fashion.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}