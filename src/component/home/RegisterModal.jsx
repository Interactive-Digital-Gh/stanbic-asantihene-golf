// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import formshield from '../../assets/hero/formshield.png'
import SuccessModal from "./SuccessModal";
import { CMS_URL } from "../../lib/cms";

const EMPTY_FORM = {
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
};

const RegisterModal = ({ open, onClose }) => {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [formData, setFormData] = useState(EMPTY_FORM);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [fieldErrors, setFieldErrors] = useState({});

    if (!open) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (fieldErrors[name]) {
            setFieldErrors((prev) => {
                const next = { ...prev };
                delete next[name];
                return next;
            });
        }
    };

    // Send the registration to the CMS first; the "thank you" screen is only
    // shown once the CMS has confirmed it stored the record.
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (submitting) return;

        setSubmitting(true);
        setError("");
        setFieldErrors({});

        try {
            const response = await fetch(`${CMS_URL}/api/tournament-registrations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 422) {
                const body = await response.json().catch(() => ({}));
                setFieldErrors(body.errors || {});
                setError("Please check the highlighted fields and try again.");
                return;
            }

            if (response.status === 429) {
                setError("Too many attempts. Please wait a minute and try again.");
                return;
            }

            if (!response.ok) {
                console.error("Registration failed:", response.status, await response.text());
                setError("Something went wrong on our side. Please try again in a moment.");
                return;
            }

            setShowSuccessModal(true);
        } catch (err) {
            console.error("Registration network error:", err);
            setError("We could not reach the server. Please check your connection and try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleDone = () => {
        setShowSuccessModal(false);
        setFormData(EMPTY_FORM);
        setError("");
        setFieldErrors({});
        onClose();
    };

    const fieldError = (name) => fieldErrors[name]?.[0];
    const inputClass = (name) =>
        `border rounded-lg px-4 py-3 text-sm text-black ${fieldError(name) ? "border-red-500" : "border-gray-300"}`;

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

                    <div className="hidden md:flex justify-center items-center flex-1">
                        <img src={formshield} alt="Golf players" className="h-[350px] object-contain" />
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 flex-1 text-[#2A2A2A]"
                    >
                        {error && (
                            <div
                                role="alert"
                                className="col-span-1 md:col-span-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm"
                            >
                                {error}
                            </div>
                        )}

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
                                className={inputClass("full_name")}
                            />
                            {fieldError("full_name") && <span className="text-red-600 text-xs mt-1">{fieldError("full_name")}</span>}
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
                                className={inputClass("phone_number")}
                            />
                            {fieldError("phone_number") && <span className="text-red-600 text-xs mt-1">{fieldError("phone_number")}</span>}
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
                                className={inputClass("email")}
                            />
                            {fieldError("email") && <span className="text-red-600 text-xs mt-1">{fieldError("email")}</span>}
                        </div>

                        {/* T-Shirt */}
                        <div className="flex flex-col">
                            <label className="text-sm font-medium mb-2 text-custom-blue">T-Shirt Size</label>
                            <select
                                name="tshirt_size"
                                value={formData.tshirt_size}
                                onChange={handleChange}
                                required
                                className={`${inputClass("tshirt_size")} bg-white`}
                            >
                                <option value="">Select size</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                            {fieldError("tshirt_size") && <span className="text-red-600 text-xs mt-1">{fieldError("tshirt_size")}</span>}
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
                                    className={inputClass(name)}
                                />
                                {fieldError(name) && <span className="text-red-600 text-xs mt-1">{fieldError(name)}</span>}
                            </div>
                        ))}

                        <div className="col-span-1 md:col-span-2 flex justify-end gap-3 pt-4">
                            <button
                                type="button"
                                onClick={onClose}
                                disabled={submitting}
                                className="px-6 py-2 border border-gray-400 rounded-lg bg-white disabled:opacity-60"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                disabled={submitting}
                                className="px-6 py-2 rounded-lg bg-[#0637A2] text-white disabled:opacity-60"
                            >
                                {submitting ? "Submitting..." : "Confirm"}
                            </button>
                        </div>
                    </form>
                </div>

                {showSuccessModal && (
                    <SuccessModal onDone={handleDone} />
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
