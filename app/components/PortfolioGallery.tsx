"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type PortfolioImage = {
  src: string;
  alt: string;
};

export function PortfolioGallery({ images }: { images: PortfolioImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (activeIndex === null) return;

      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % images.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? current : (current - 1 + images.length) % images.length,
        );
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, images.length]);

  useEffect(() => {
    document.body.style.overflow = activeImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  function showPrevious() {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + images.length) % images.length,
    );
  }

  function showNext() {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % images.length,
    );
  }

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-sand text-left"
            aria-label={`Otwórz zdjęcie realizacji ${index + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-navy/70 px-4 py-3 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">
              Realizacja {index + 1}
            </span>
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-[100] bg-navy/92 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd zdjęcia realizacji"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Zamknij podgląd"
            onClick={() => setActiveIndex(null)}
          />

          <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col gap-4">
            <div className="flex items-center justify-between gap-4 text-white">
              <p className="text-sm font-medium text-white/75">
                {activeIndex! + 1} / {images.length}
              </p>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="btn border border-white/30 text-white hover:bg-white/10"
              >
                Zamknij
              </button>
            </div>

            <div className="relative min-h-0 flex-1 overflow-hidden rounded-sm bg-black/20">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={showPrevious}
                className="btn border border-white/30 text-white hover:bg-white/10"
              >
                Poprzednie
              </button>
              <p className="line-clamp-2 text-center text-sm text-white/75">
                {activeImage.alt}
              </p>
              <button
                type="button"
                onClick={showNext}
                className="btn border border-white/30 text-white hover:bg-white/10"
              >
                Następne
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
