
import * as React from "react";
import { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  autoPlay = true, 
  interval = 3000 
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<CarouselImage | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!api || !autoPlay) return;

    const timer = setInterval(() => {
      api.scrollNext();
    }, interval);

    return () => clearInterval(timer);
  }, [api, autoPlay, interval]);

  // Track current slide
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleImageClick = (image: CarouselImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  if (images.length === 0) return null;

  return (
    <>
      <div className="w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
          setApi={setApi}
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="border-0 shadow-none">
                    <CardContent className="p-0">
                      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 group">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                          onClick={() => handleImageClick(image)}
                        />
                        
                        {/* Zoom indicator */}
                        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ZoomIn className="w-4 h-4 text-white" />
                        </div>

                        {/* Image title overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                          <h3 className="text-white text-sm font-semibold truncate">
                            {image.title}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current 
                  ? 'bg-nobre-orange scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal for expanded view */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors duration-300"
              aria-label="Fechar imagem expandida"
            >
              <X className="w-6 h-6" />
            </button>
            
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl font-semibold">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;
