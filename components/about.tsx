'use client'

import { CheckCircle2 } from 'lucide-react'

const features = [
  {
    icon: '✨',
    title: 'Expert Craftsmanship',
    description: 'Decades of tailoring expertise ensuring perfect fit and finish on every garment.',
  },
  {
    icon: '🎨',
    title: 'Custom Designs',
    description: 'Personalized designs tailored to your unique style and preferences.',
  },
  {
    icon: '📏',
    title: 'Precise Measurements',
    description: 'Meticulous attention to detail for a flawless fit every single time.',
  },
  {
    icon: '⏱️',
    title: 'Timely Delivery',
    description: 'Punctual completion without compromising on quality or craftsmanship.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"> {/* Changed to items-stretch for equal height */}
          
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-playfair text-4xl md:text-4xl font-bold text-foreground">
                Why Choose ૐ સાઈ Ladies tailor?
              </h2>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 text-2xl pt-1" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-playfair text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="font-lato text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="space-y-1">
                <p className="font-playfair text-3xl text-primary font-bold">500+</p>
                <p className="font-lato text-xs uppercase tracking-wider text-muted-foreground">Happy Customers</p>
              </div>
              <div className="space-y-1">
                <p className="font-playfair text-3xl text-primary font-bold">45+</p>
                <p className="font-lato text-xs uppercase tracking-wider text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                   <p className="font-playfair text-3xl text-primary font-bold">100%</p>
                   <CheckCircle2 className="w-5 h-5 text-primary" /> {/* Integrated the Lucide icon here */}
                </div>
                <p className="font-lato text-xs uppercase tracking-wider text-muted-foreground">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right: Image/Visual Placeholder */}
          <div className="relative min-h-[400px] lg:min-h-full ">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center space-y-4">
                <div className="text-9xl">👗</div>
                <h3 className="font-playfair text-2xl text-primary font-semibold">
                  Tailoring
                </h3>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}