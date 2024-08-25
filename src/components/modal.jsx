import { useState } from "react";

const Modal = ({ isModalOpen, handleCloseModal, data }) => {

    const [formData, setFormData] = useState({
        showName: data.show.name || "",
        onDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        sessionStorage.setItem("showName", formData.showName);
        sessionStorage.setItem("onDate", formData.onDate);
        handleCloseModal();
    };

    return (
        <div
            className={`fixed z-[10000] inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 transition-opacity ${isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <div
                className="bg-gray-950 relative p-8 rounded-lg shadow-lg w-3/4 md:max-w-xl transform transition-transform ease-in-out duration-300"
                style={{
                    opacity: isModalOpen ? 1 : 0,
                    transform: isModalOpen ? "translateY(0)" : "translateY(-50px)",
                }}
            >
                <span
                    className="absolute top-0 right-3 p-2 cursor-pointer text-3xl"
                    onClick={handleCloseModal}
                >
                    &times;
                </span>
                <h2 className="text-2xl mb-4">Book show</h2>

                <label htmlFor="showName" className="mt-4 mb-2">Show Name</label>
                <input type="text" name="showName" value={formData.showName} onChange={handleChange} className="px-4 text-black py-2 w-[100%] border border-gray-300 rounded-[8px]" />

                <label htmlFor="onDate" className="mt-4 mb-2">On Date</label>
                <input type="date" name="onDate" value={formData.onDate} onChange={handleChange} className="px-4 text-black py-2 w-[100%] border border-gray-300 rounded-[8px]" />

                <button type="button" onClick={handleSubmit} className="bg-gradient-to-t from-red-400 to-orange-400 mt-4 px-3 py-1 rounded-md">
                    Book show
                </button>
            </div>
        </div>
    );
};

export default Modal;
