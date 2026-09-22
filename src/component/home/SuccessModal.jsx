// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import icon from "../../assets/hero/doneshield.png"

const SuccessModal = ({ onDone }) => {
    const [closing, setClosing] = useState(false);

    // The registration has already been saved by the time this modal is
    // shown; Done just plays the exit animation and closes the form.
    const handleDoneClick = () => {
        setClosing(true);
        setTimeout(onDone, 250);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className={`bg-white rounded-lg p-5 w-[589px] text-center shadow-lg 
                ${closing ? "animate-fade-out" : "animate-fade-in"}`}>

                <div className="flex justify-center mb-4">
                    <img src={icon} alt="Success Icon" />
                </div>

                <h2 className="lg:text-[40px] text-[24px] font-bold text-[#0637A2] mb-2">
                    Thank you for registering!
                </h2>

                <p className="text-[#0637A2] lg:text-[36px] text-[20px] mb-6">
                    Your registration has been received.
                </p>

                <button
                    onClick={handleDoneClick}
                    className="bg-[#0637A2] text-white px-8 py-2 rounded"
                >
                    Done
                </button>
            </div>
        </div>
    );
};

SuccessModal.propTypes = {
    onDone: PropTypes.func.isRequired,
};

export default SuccessModal;
