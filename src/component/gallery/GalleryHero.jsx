// eslint-disable-next-line no-unused-vars
import React from 'react';
import gallerybg from '../../assets/gallery/gallerybg.png';
import gallerymobile from '../../assets/gallery/gallerymobile.png';

const GalleryHero = () => {
    return (
        <section className="w-full lg:h-[685px] h-[669px] relative overflow-hidden">
            {/* Mobile Image */}
            <img
                src={gallerymobile}
                alt="Gallery Background Mobile"
                className="w-full h-full object-cover md:hidden"
            />

            {/* Desktop Image */}
            <img
                src={gallerybg}
                alt="Gallery Background Desktop"
                className="hidden md:block w-full h-full object-cover md:object-left xl:object-center"
            />
        </section>
    );
};

export default GalleryHero;
