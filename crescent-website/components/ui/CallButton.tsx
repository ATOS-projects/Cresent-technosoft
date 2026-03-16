import { FaPhoneAlt } from "react-icons/fa";

export default function CallButton() {
    return (
        <a
            href="tel:+919944992460"
            className="fixed bottom-6 right-6 z-50 p-3.5 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:scale-110 hover:shadow-xl transition-all duration-300 group flex items-center justify-center animate-bounce-slow"
            aria-label="Call us"
        >
            <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
            <FaPhoneAlt className="w-6 h-6 relative z-10" />
            
            {/* Tooltip on hover */}
            <div className="absolute right-full mr-4 px-3 py-2 bg-white text-gray-800 text-sm font-semibold rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap hidden md:block">
                Call Us
                {/* Tooltip Arrow */}
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-y-8 border-y-transparent border-l-8 border-l-white drop-shadow-sm"></div>
            </div>
        </a>
    );
}