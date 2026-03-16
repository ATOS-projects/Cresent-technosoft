import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=+919944992460&text=HI%27%20%20%20"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-50 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 hover:shadow-xl transition-all duration-300 group flex items-center justify-center animate-bounce-slow"
            aria-label="Contact us on WhatsApp"
        >
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>
            <FaWhatsapp className="w-8 h-8 relative z-10" />
            
            {/* Tooltip on hover */}
            <div className="absolute left-full ml-4 px-3 py-2 bg-white text-gray-800 text-sm font-semibold rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap hidden md:block">
                Chat with us
                {/* Tooltip Arrow */}
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 border-y-8 border-y-transparent border-r-8 border-r-white drop-shadow-sm"></div>
            </div>
        </a>
    );
}