'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

interface GalleryModalProps {
  isOpen: boolean
  onClose: () => void
  item: {
    id: number
    title: string
    description: string
    material: string
    customization: string
    deliveryTime: string
    images: string[]
  } | null
}

export default function GalleryModal({ isOpen, onClose, item }: GalleryModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!isOpen || !item) return null

  const images = item.images.map((src, index) => ({
    src,
    label: index === 0 ? 'Main View' : index === 1 ? 'Detail View' : 'Close-up View'
  }))

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-card rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-playfair text-2xl md:text-3xl text-foreground">
            {item.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative w-full aspect-[4/5] bg-secondary rounded-lg overflow-hidden">
                <Image
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Image Navigation */}
              <div className="flex items-center justify-between gap-2">
                <Button
                  onClick={prevImage}
                  variant="outline"
                  size="sm"
                  className="bg-white"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <div className="flex gap-2 flex-1 justify-center">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? 'border-primary ring-2 ring-primary/20'
                          : 'border-border hover:border-accent'
                      }`}
                    >
                      <Image
                        src={images[index].src}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </button>
                  ))}
                </div>

                <Button
                  onClick={nextImage}
                  variant="outline"
                  size="sm"
                  className="bg-white"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Current Image Label */}
              <p className="text-center text-sm text-muted-foreground font-lato">
                {images[currentImageIndex].label}
              </p>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <p className="font-lato text-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Key Details */}
              <div className="space-y-4 border-t border-b border-border py-6">
                <div>
                  <h4 className="font-playfair text-sm text-primary mb-2">
                    Material
                  </h4>
                  <p className="font-lato text-sm text-foreground">
                    {item.material}
                  </p>
                </div>

                <div>
                  <h4 className="font-playfair text-sm text-primary mb-2">
                    Customization
                  </h4>
                  <p className="font-lato text-sm text-foreground">
                    {item.customization}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
