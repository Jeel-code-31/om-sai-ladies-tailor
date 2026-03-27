'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import GalleryModal from './gallery-modal'

const gallerySections = [
  {
    id: 'blouses',
    title: 'Designer Blouses',
    category: 'Blouses',
    items: [
      {
        id: 1,
        title: 'Designer Blouse',
        image: '/gallery/Blouse1.jpg',
        description: 'Elegant designer blouse perfect complement to sarees and lehengas.',
        material: 'Cotton-silk blend with embroidery',
        customization: 'Custom designs, necklines, and sleeve options',
        deliveryTime: '7-10 days',
        images: ['/gallery/Blouse1.jpg', '/gallery/Blouse2.jpg', '/gallery/Blouse3.jpg'],
      },
      {
        id: 2,
        title: 'Collar Blouse',
        image: '/gallery/Blouse4.jpg',
        description: 'Modern collar blouse with contemporary design.',
        material: 'Cotton with modern patterns',
        customization: 'Various collar styles and color options',
        deliveryTime: '6-9 days',
        images: ['/gallery/Blouse5.jpg','/gallery/Blouse6.jpg','/gallery/Blouse7.jpg'],
      },
      {
        id: 3,
        title: 'Short Sleeve Blouse',
        image: '/gallery/Blouse11.jpg',
        description: 'Stylish short sleeve blouse for casual occasions.',
        material: 'Light cotton fabric',
        customization: 'Sleeve length and color variations',
        deliveryTime: '5-8 days',
        images: ['/gallery/Blouse8.jpg','/gallery/Blouse9.jpg','/gallery/Blouse10.jpg'],
      },
      {
        id: 4,
        title: 'Short Sleeve Blouse',
        image: '/gallery/Blouse12.jpg',
        description: 'Stylish short sleeve blouse for casual occasions.',
        material: 'Light cotton fabric',
        customization: 'Sleeve length and color variations',
        deliveryTime: '5-8 days',
        images: ['/gallery/Blouse12.jpg','/gallery/Blouse13.jpg','/gallery/Blouse14.jpg'],
      },
      {
        id: 5,
        title: 'Short Sleeve Blouse',
        image: '/gallery/Blouse14.jpg',
        description: 'Stylish short sleeve blouse for casual occasions.',
        material: 'Light cotton fabric',
        customization: 'Sleeve length and color variations',
        deliveryTime: '5-8 days',
        images: ['/gallery/Blouse14.jpg','/gallery/Blouse15.jpg','/gallery/Blouse16.jpg'],
      },
      {
        id: 6,
        title: 'Short Sleeve Blouse',
        image: '/gallery/Blouse17.jpg',
        description: 'Stylish short sleeve blouse for casual occasions.',
        material: 'Light cotton fabric',
        customization: 'Sleeve length and color variations',
        deliveryTime: '5-8 days',
        images: ['/gallery/Blouse18.jpg','/gallery/Blouse19.jpg','/gallery/Blouse17.jpg'],
      },

    ],
  },
  {
    id: 'sarees',
    title: 'Sarees',
    category: 'Sarees',
    items: [
      {
        id: 1,
        title: 'Silk Saree Collection',
        image: '/gallery/saree-1.jpg',
        description: 'A stunning silk saree crafted with premium quality fabric and intricate detailing.',
        material: 'Pure Silk with traditional zari work',
        customization: 'Available in multiple colors, custom embroidery, and personalized designs',
        deliveryTime: '15-20 days',
        images: ['/gallery/saree-1.jpg', '/gallery/detail-saree-1-mockup.jpg', '/gallery/detail-saree-1-closeup.jpg'],
      },
      {
        id: 2,
        title: 'Traditional Saree',
        image: '/gallery/saree-2.jpg',
        description: 'Classic traditional saree with timeless appeal and elegant design.',
        material: 'Pure silk with traditional handloom patterns',
        customization: 'Available in classic and modern color combinations',
        deliveryTime: '12-18 days',
        images: ['/gallery/saree-2.jpg', '/gallery/detail-saree-1-mockup.jpg', '/gallery/detail-saree-1-closeup.jpg'],
      },
    ],
  },
  {
    id: 'lehengas',
    title: 'Tradition Wedding',
    category: 'Lehengas',
    items: [
      {
        id: 1,
        title: 'Bridal Lehenga',
        image: '/gallery/Wedding11.jpg',
        description: 'Exquisite bridal lehenga with intricate embroidery work.',
        material: 'Silk with zari, sequins, and bead embroidery',
        customization: 'Custom blouse design, color selection, and personalized embroidery',
        deliveryTime: '20-25 days',
        images: ['/gallery/Wedding4.jpg', '/gallery/Wedding5.jpg', '/gallery/Wedding6.jpg'],
      },
      {
        id: 2,
        title: 'Festive Lehenga',
        image: '/gallery/Wedding2.jpg',
        description: 'Vibrant festive lehenga perfect for celebrations.',
        material: 'Silk with colorful embroidery and embellishments',
        customization: 'Multiple color themes, custom embroidery work',
        deliveryTime: '15-20 days',
        images: ['/gallery/Wedding.jpg', '/gallery/Wedding2.jpg', '/gallery/Wedding3.jpg'],
      },
      {
        id: 3,
        title: 'Red Bridal Lehenga',
        image: '/gallery/Wedding11.jpg',
        description: 'Stunning red bridal lehenga for traditional weddings.',
        material: 'Heavy silk with gold embroidery',
        customization: 'Custom embroidery and color variations',
        deliveryTime: '18-24 days',
        images: ['/gallery/Wedding11.jpg','/gallery/Wedding12.jpg','/gallery/Wedding13.jpg'],
      },
    ],
  },
  {
    id: 'kurtis',
    title: 'Kurtis With or without Embroideres',
    category: 'Kurtis',
    items: [
      {
        id: 1,
        title: 'Embroidered Kurti',
        image: '/gallery/kurti-1.jpg',
        description: 'Beautifully embroidered kurti for daily wear and casual occasions.',
        material: 'Cotton with hand embroidery and thread work',
        customization: 'Multiple color options, custom embroidery designs',
        deliveryTime: '8-12 days',
        images: ['/gallery/kurti-1.jpg', '/gallery/detail-kurti-1-mockup.jpg', '/gallery/detail-kurti-1-closeup.jpg'],
      },
       {
        id: 2,
        title: 'Embroidered Kurti',
        image: '/gallery/kurti2.jpg',
        description: 'Beautifully embroidered kurti for daily wear and casual occasions.',
        material: 'Cotton with hand embroidery and thread work',
        customization: 'Multiple color options, custom embroidery designs',
        deliveryTime: '8-12 days',
        images: ['/gallery/kurti3.jpg', 'gallery/kurti5.jpg','/gallery/kurti4.jpg', '/gallery/kurti7.jpg'],
      },
    ],
  },
  {
    id: 'anarkali',
    title: 'Anarkali Collection',
    category: 'Anarkali',
    items: [
      {
        id: 1,
        title: 'Anarkali Suit',
        image: '/gallery/AnarKali3.jpg',
        description: 'Graceful Anarkali suit with flowing silhouette and intricate embroidery.',
        material: 'Silk with embroidered patterns',
        customization: 'Custom embroidery, color selection, and length adjustments',
        deliveryTime: '18-22 days',
        images: ['/gallery/AnarKali.jpg', '/gallery/Anarkali2.jpg', '/gallery/Anarkali3.jpg'],
      },
      {
        id: 2,
        title: 'Anarkali',
        image: '/gallery/AnarKali6.jpg',
        description: 'Graceful Anarkali suit with flowing silhouette and intricate embroidery.',
        material: 'Silk with embroidered patterns',
        customization: 'Custom embroidery, color selection, and length adjustments',
        deliveryTime: '18-22 days',
        images: ['/gallery/AnarKali4.jpg', '/gallery/Anarkali5.jpg', '/gallery/Anarkali6.jpg'],
      },
      {
        id: 3,
        title: 'Anarkali',
        image: '/gallery/AnarKali7.jpg',
        description: 'Graceful Anarkali suit with flowing silhouette and intricate embroidery.',
        material: 'Silk with embroidered patterns',
        customization: 'Custom embroidery, color selection, and length adjustments',
        deliveryTime: '18-22 days',
        images: ['/gallery/AnarKali7.jpg', '/gallery/Anarkali8.jpg', '/gallery/Anarkali9.jpg'],
      },
    ],
  },
  
  {
    id: 'gowns',
    title: 'Evening Gowns',
    category: 'Gowns',
    items: [
      {
        id: 9,
        title: 'Evening Gown',
        image: '/gallery/Gown.jpg',
        description: 'Stunning evening gown for parties and special occasions.',
        material: 'Premium fabric with elegant detailing',
        customization: 'Custom fit, color options, and design modifications',
        deliveryTime: '14-18 days',
        images: ['/gallery/Gown.jpg', '/gallery/Gown2.jpg', '/gallery/Gown3.jpg'],
      },
      {
        id: 10,
        title: 'Gown',
        image: '/gallery/Gown6.jpg',
        description: 'Stunning evening gown for parties and special occasions.',
        material: 'Premium fabric with elegant detailing',
        customization: 'Custom fit, color options, and design modifications',
        deliveryTime: '14-18 days',
        images: ['/gallery/Gown4.jpg', '/gallery/Gown5.jpg', '/gallery/Gown6.jpg'],
      },
    ],
  },
]

const categories = ['All', 'Sarees', 'Lehengas', 'Kurtis', 'Anarkali', 'Blouses', 'Gowns']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<typeof gallerySections[0]['items'][0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (item: typeof gallerySections[0]['items'][0]) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const filteredSections = selectedCategory === 'All'
    ? gallerySections
    : gallerySections.filter(section => section.category === selectedCategory)

  return (
    <>
      <GalleryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        item={selectedItem}
      />
      <section id="gallery" className="py-20 md:py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
            Our Exquisite Collection
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`font-lato transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-white text-foreground border border-border hover:border-primary'
              }`}
              variant={selectedCategory === category ? 'default' : 'outline'}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Sections */}
        <div className="space-y-16">
          {filteredSections.map((section) => (
            <div key={section.id} className="space-y-8">
              {/* Section Header */}
              <div className="text-center space-y-4">
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
                  {section.title}
                </h3>
              </div>

              {/* Section Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="group relative overflow-hidden bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    {/* Image Container */}
                    <div className="relative w-full aspect-[3/4] overflow-hidden bg-secondary/20">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Hover Overlay with Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          onClick={() => handleViewDetails(item)}
                          variant="secondary"
                          size="sm"
                          className="bg-white/90 text-foreground hover:bg-white backdrop-blur-sm"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>

                    {/* Item Info */}
                    <div className="p-4 space-y-2">
                      <p className="font-lato text-xs text-accent uppercase tracking-wider font-medium">
                        {section.category}
                      </p>
                      {/* <h4 className="font-playfair text-lg text-foreground leading-tight">
                        {item.title}
                      </h4> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
