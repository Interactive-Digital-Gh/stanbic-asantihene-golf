// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import formshield from '../../assets/hero/formshield.png'
import SuccessModal from "./SuccessModal";

const RegisterModal = ({ open, onClose }) => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [formData, setFormData] = useState({
        full_name: "",
        phone_number: "",
        email: "",
        tshirt_size: "",
        dietary_needs: "",
        handicap_id: "",
        handdicap_index: "",
        golf_club: "",
        emergency_contact_name: "",
        emergency_contact_phone: "",
    });

    if (!open) return null;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessModal(true);
    };

    const handleFinalSubmit = async () => {
        try {
            const response = await fetch(
                "https://asantehenegolf-cms.interactivedigital.com.gh/api/tournament-registrations",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                console.log(await response.text());
                alert("Something went wrong. Please try again.");
                return;
            }

            // ✅ RESET FORM AFTER SUCCESSFUL SUBMISSION
            setFormData({
                full_name: "",
                phone_number: "",
                email: "",
                tshirt_size: "",
                dietary_needs: "",
                handicap_id: "",
                handdicap_index: "",
                golf_club: "",
                emergency_contact_name: "",
                emergency_contact_phone: "",
            });

            setShowSuccessModal(false);
            onClose();

        } catch (error) {
            console.error("API Error:", error);
            alert("Network error—Try again later.");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 md:p-0">
            <div className="bg-white mt-10 w-full md:w-[80%] max-w-[1100px] rounded-lg p-6 md:p-8 relative animate-fadeIn overflow-auto max-h-[85vh]">

                <button
                    onClick={onClose}
                    className="absolute top-4 md:top-6 right-4 md:right-6 text-gray-500 hover:text-gray-800 text-xl"
                >
                    ✕
                </button>

                <h2 className="text-[#0637A2] lg:text-2xl font-bold mb-6 text-center md:text-left">
                    CONFIRM YOUR DETAILS
                </h2>

                <div className="flex flex-col md:flex-row gap-6 md:gap-10">

                    <div className="hidden lg:flex justify-center items-center flex-1">
                        <img src={formshield} alt="Golf players" className="h-[350px] object-contain" />
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1 text-[#2A2A2A]"
                    >
                        {/* Full Name */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2 text-custom-blue">Full Name (As shown on your ID)</label>
                            <input
                                type="text"
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleChange}
                                placeholder="e.g. John Doe"
                                required
                                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-black"
                            />
                        </div>

                        {/* Telephone */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2 text-custom-blue">Telephone Number</label>
                            <input
                                type="tel"
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                placeholder="e.g. +233501234567"
                                required
                                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-black"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2 text-custom-blue">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="e.g. johndoe@example.com"
                                required
                                className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-black"
                            />
                        </div>

                        {/* T-Shirt */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2 text-custom-blue">T-Shirt Size</label>
                            <select
                                name="tshirt_size"
                                value={formData.tshirt_size}
                                onChange={handleChange}
                                required
                                className="border border-gray-300 bg-white rounded-lg px-4 py-3 text-sm text-black"
                            >
                                <option value="">Select size</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </div>

                        {/* Other Fields */}
                        {[
                            ["Dietary Needs", "dietary_needs", "e.g. Vegetarian"],
                            ["National GGA Handicap ID", "handicap_id", "e.g. GGA12345"],
                            ["Handicap Index", "handdicap_index", "e.g. 12.5"],
                            ["Golf Club", "golf_club", "e.g. Achimota Golf Club"],
                            ["Emergency Contact Name", "emergency_contact_name", "e.g. Jane Doe"],
                            ["Emergency Contact Number", "emergency_contact_phone", "e.g. +233501234567"]
                        ].map(([label, name, placeholder]) => (
                            <div className="flex flex-col" key={name}>
                                <label className="text-sm font-medium mb-2 text-custom-blue">{label}</label>
                                <input
                                    type="text"
                                    name={name}
                                    placeholder={placeholder}
                                    value={formData[name] || ""}
                                    onChange={handleChange}
                                    className="border border-gray-300 rounded-lg px-4 py-3 text-sm text-black"
                                />
                            </div>
                        ))}

                        <div className="col-span-1 md:col-span-2 flex justify-end gap-3 pt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-6 py-2 border border-gray-400 rounded-lg bg-white"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                className="px-6 py-2 rounded-lg bg-[#0637A2] text-white"
                            >
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>

                {showSuccessModal && (
                    <SuccessModal onDone={handleFinalSubmit} />
                )}
            </div>
        </div>
    );
};

RegisterModal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
};

export default RegisterModal;
