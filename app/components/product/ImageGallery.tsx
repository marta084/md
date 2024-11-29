import { useState, useCallback, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLocation } from "react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { useHydrated } from "remix-utils/use-hydrated";
import { createPortal } from "react-dom";

interface Image {
  id: string;
  url: string;
  alt: string;
}

interface ImageGalleryProps {
  images: Image[];
}

interface Point {
  x: number;
  y: number;
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const isHydrated = useHydrated();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showZoom, setShowZoom] = useState(false);
  const [zoomPosition, setZoomPosition] = useState<Point>({ x: 0, y: 0 });
  const mainImageRef = useRef<HTMLDivElement>(null);
  const zoomFactor = 2.5;

  const handleMainImageClick = useCallback(() => {
    if (isHydrated) {
      setIsDialogOpen(true);
    }
  }, [isHydrated]);

  const handleNextImage = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setActiveIndex((current) => (current + 1) % images.length);
  }, [images.length]);

  const handlePreviousImage = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  }, [images.length]);

  const handleThumbnailClick = useCallback((e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveIndex(index);
  }, []);

  const handleDialogOpenChange = useCallback((open: boolean) => {
    setIsDialogOpen(open);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!mainImageRef.current) return;

    const rect = mainImageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setShowZoom(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setShowZoom(false);
  }, []);

  // Ensure we have images before rendering
  if (!images || images.length === 0) {
    return null;
  }

  const currentImage = images[activeIndex];

  const renderZoomLens = () => {
    if (!showZoom || !mainImageRef.current) return null;

    const rect = mainImageRef.current.getBoundingClientRect();
    return createPortal(
      <div 
        className="fixed bg-white rounded-lg overflow-hidden shadow-lg"
        style={{
          left: `${rect.right + 20}px`,
          top: `${rect.top}px`,
          width: '400px',
          height: '400px',
          zIndex: 9999999
        }}
        aria-label="Zoom view"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${currentImage.url})`,
            backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
            backgroundSize: `${zoomFactor * 100}%`,
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>,
      document.body
    );
  };

  return (
    <div className="space-y-4 w-full">
      {/* Main Image Container */}
      <div className="relative mx-auto" style={{ width: 'fit-content' }}>
        {/* Main Image */}
        <div 
          ref={mainImageRef}
          className="relative h-[300px] sm:h-[400px] md:h-[500px] w-[300px] sm:w-[400px] md:w-[500px] bg-gray-100 rounded-lg overflow-hidden cursor-zoom-in"
          onClick={handleMainImageClick}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={currentImage.url}
            alt={currentImage.alt}
            className="h-full w-full object-cover rounded-lg"
          />
          
          {/* Zoom Indicator */}
          {showZoom && (
            <div
              className="absolute border-2 border-white/50 shadow-sm pointer-events-none"
              style={{
                width: '100px',
                height: '100px',
                left: `${Math.max(0, Math.min(zoomPosition.x - 10, 80))}%`,
                top: `${Math.max(0, Math.min(zoomPosition.y - 10, 80))}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          )}
          
          {isHydrated && (
            <>
              {/* Navigation Buttons */}
              <button
                type="button"
                onClick={handlePreviousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        {/* Render zoom lens using portal */}
        {isHydrated && renderZoomLens()}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={(e) => handleThumbnailClick(e, index)}
            className={`relative aspect-square rounded-md overflow-hidden transition-all ${
              index === activeIndex
                ? "ring-2 ring-indigo-500 shadow-sm"
                : "ring-1 ring-gray-200 hover:ring-indigo-300"
            }`}
            aria-label={`View ${image.alt}`}
            aria-pressed={index === activeIndex}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Fullscreen Dialog */}
      {isHydrated && (
        <Dialog.Root open={isDialogOpen} onOpenChange={handleDialogOpenChange}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
            <Dialog.Content className="fixed left-0 top-0 right-0 bottom-0 z-50 flex items-center justify-center p-4">
              <div className="relative w-full max-w-6xl bg-white rounded-lg overflow-hidden flex flex-col">
                {/* Main image container */}
                <div className="relative flex-1 min-h-0 flex items-center justify-center p-4">
                  <img
                    src={currentImage.url}
                    alt={currentImage.alt}
                    className="max-w-full max-h-[70vh] object-contain"
                  />
                  
                  {/* Close button */}
                  <button
                    onClick={() => setIsDialogOpen(false)}
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                    aria-label="Close dialog"
                  >
                    <X className="h-6 w-6" />
                  </button>

                  {/* Navigation Buttons */}
                  <button
                    type="button"
                    onClick={handlePreviousImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                {/* Thumbnails in dialog */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex gap-2 justify-center overflow-x-auto pb-2">
                    {images.map((image, index) => (
                      <button
                        key={image.id}
                        type="button"
                        onClick={(e) => handleThumbnailClick(e, index)}
                        className={`relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden transition-all ${
                          index === activeIndex
                            ? "ring-2 ring-indigo-500 shadow-sm"
                            : "ring-1 ring-gray-200 hover:ring-indigo-300"
                        }`}
                        aria-label={`View ${image.alt}`}
                        aria-pressed={index === activeIndex}
                      >
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </div>
  );
}
