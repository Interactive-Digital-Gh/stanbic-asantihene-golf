// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./PhotoGrid.css";

import Img1 from "../../assets/gallery/product1.png";
import Img2 from "../../assets/gallery/product2.png";
import Img3 from "../../assets/gallery/product3.png";
import Img4 from "../../assets/gallery/product4.png";
import Img5 from "../../assets/gallery/product5.png";
import Img6 from "../../assets/gallery/product6.png";
import Img7 from "../../assets/gallery/product7.png";
import Img8 from "../../assets/gallery/product8.png";
import Img9 from "../../assets/gallery/product9.png";
import Img10 from "../../assets/gallery/product10.png";
import Img11 from "../../assets/gallery/product11.png";
import Img12 from "../../assets/gallery/product12.png";

import { FaTimes } from "react-icons/fa";

const PhotoGrid = () => {
    const data = [
        { id: 1, imgSrc: Img1 },
        { id: 2, imgSrc: Img2 },
        { id: 3, imgSrc: Img3 },
        { id: 4, imgSrc: Img4 },
        { id: 5, imgSrc: Img5 },
        { id: 6, imgSrc: Img6 },
        { id: 7, imgSrc: Img7 },
        { id: 8, imgSrc: Img8 },
        { id: 9, imgSrc: Img9 },
        { id: 10, imgSrc: Img10 },
        { id: 11, imgSrc: Img11 },
        { id: 12, imgSrc: Img12 },
        { id: 13, imgSrc: Img12 },
        { id: 14, imgSrc: Img12 },
        { id: 15, imgSrc: Img12 },
    ];

    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 6;

    // PAGE CALCULATIONS
    const indexOfLast = currentPage * imagesPerPage;
    const indexOfFirst = indexOfLast - imagesPerPage;
    const currentImages = data.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(data.length / imagesPerPage);

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModal(true);
    };

    return (
        <div className="overflow-hidden">
            {/* Modal */}
            <div className={modal ? "modal open" : "modal"}>
                <img src={tempImgSrc} alt="foto" />
                <FaTimes onClick={() => setModal(false)} />
            </div>

            <div className="lg:px-[170px] md:px-12 px-4 flex flex-col items-center mb-8">
                {/* GALLERY GRID */}
                <div className="gallery">
                    {currentImages.map((item, index) => (
                        <div
                            className="pics"
                            key={index}
                            onClick={() => getImg(item.imgSrc)}
                        >
                            <img
                                src={item.imgSrc}
                                alt="foto"
                                className="w-[100%] rounded-lg"
                            />
                        </div>
                    ))}
                </div>

                {/* PAGINATION */}
                <div className="flex items-center gap-4 mt-8">
                    {/* PAGE 1 */}
                    <button
                        onClick={() => setCurrentPage(1)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center border 
                            ${currentPage === 1 ? "bg-blue-900 text-white" : "border-blue-200 text-blue-700"}`}
                    >
                        1
                    </button>

                    {/* PAGE 2 */}
                    <button
                        onClick={() => setCurrentPage(2)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center border 
                            ${currentPage === 2 ? "bg-blue-900 text-white" : "border-blue-200 text-blue-700"}`}
                    >
                        2
                    </button>

                    {/* NEXT ARROW */}
                    {currentPage < totalPages && (
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className="w-10 h-10 rounded-full flex items-center justify-center border border-blue-200 text-blue-700"
                        >
                            →
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PhotoGrid;
