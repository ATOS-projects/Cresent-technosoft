import { IconType } from 'react-icons';
import { FaHospital, FaFlask, FaClinicMedical, FaPills, FaCode, FaWarehouse, FaBook, FaMoneyCheckAlt, FaSchool, FaHome, FaFileInvoiceDollar } from 'react-icons/fa';

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: IconType;
    href: string;
    features?: string[];
}

export const SERVICES: Service[] = [
    {
        id: 'hospital',
        title: 'Hospital Management Software',
        description: 'Comprehensive HMS solution for managing all hospital operations, from patient registration to billing and reporting.',
        icon: FaHospital,
        href: '/services/hospital',
        features: ['Patient Management', 'OPD/IPD Management', 'Billing & Insurance', 'Pharmacy Integration', 'Lab Integration', 'Inventory Management']
    },
    {
        id: 'lab',
        title: 'Lab Management Software',
        description: 'Complete LMS for diagnostic centers and clinical laboratories with advanced reporting and sample tracking.',
        icon: FaFlask,
        href: '/services/lab',
        features: ['Sample Collection', 'Test Management', 'Report Generation', 'Quality Control', 'Billing', 'Mobile App']
    },
    {
        id: 'clinic',
        title: 'Clinic Management Software',
        description: 'Streamlined CMS for small to medium clinics with appointment scheduling and patient records management.',
        icon: FaClinicMedical,
        href: '/services/clinic',
        features: ['Appointment Scheduling', 'EMR/EHR', 'Prescription Management', 'Billing', 'Patient Portal', 'SMS Notifications']
    },
    {
        id: 'pharmacy',
        title: 'Pharmacy Management Software',
        description: 'Complete pharmacy solution with inventory management, billing, and expiry tracking.',
        icon: FaPills,
        href: '/services/pharmacy',
        features: ['Inventory Management', 'Billing & GST', 'Expiry Tracking', 'Purchase Management', 'Sales Reports', 'Barcode Support']
    },
    {
        id: 'website',
        title: 'Website Development',
        description: 'Professional website development services with modern design and responsive layouts.',
        icon: FaCode,
        href: '/services/website-development',
        features: ['Custom Design', 'Responsive Layout', 'SEO Optimization', 'E-commerce', 'CMS Integration', 'Maintenance']
    },
    {
        id: 'inventory',
        title: 'Inventory Management Software',
        description: 'Advanced inventory management system for tracking stock, orders, and suppliers.',
        icon: FaWarehouse,
        href: '/services/inventory',
        features: ['Stock Management', 'Purchase Orders', 'Supplier Management', 'Barcode Scanning', 'Reports', 'Multi-location']
    },
    {
        id: 'library',
        title: 'Library Management Software',
        description: 'Complete library management system for schools, colleges, and public libraries.',
        icon: FaBook,
        href: '/services/library',
        features: ['Book Cataloging', 'Member Management', 'Issue/Return', 'Fine Management', 'Reports', 'RFID Support']
    },
    {
        id: 'payroll',
        title: 'Payroll Management Software',
        description: 'Comprehensive payroll solution with attendance tracking and salary processing.',
        icon: FaMoneyCheckAlt,
        href: '/services/payroll',
        features: ['Salary Processing', 'Attendance Tracking', 'Leave Management', 'Tax Calculation', 'Reports', 'Employee Portal']
    },
    {
        id: 'school',
        title: 'School Management Software',
        description: 'Complete school ERP system for managing students, staff, and academic operations.',
        icon: FaSchool,
        href: '/services/school',
        features: ['Student Management', 'Fee Management', 'Attendance', 'Exam Management', 'Parent Portal', 'Transport Management']
    },
    {
        id: 'property',
        title: 'Property Evaluation Software',
        description: 'Advanced property valuation and management system for real estate professionals.',
        icon: FaHome,
        href: '/services/property',
        features: ['Property Valuation', 'Document Management', 'Client Management', 'Reports', 'Market Analysis', 'Mobile App']
    },
    {
        id: 'billing',
        title: 'Billing Software',
        description: 'Simple and efficient billing software with GST compliance and invoice management.',
        icon: FaFileInvoiceDollar,
        href: '/services/billing',
        features: ['Invoice Generation', 'GST Compliance', 'Payment Tracking', 'Customer Management', 'Reports', 'Multi-currency']
    }
];

export interface ContactInfo {
    phones: string[];
    emails: string[];
    address?: string;
    locations?: {
        name: string;
        phones: string[];
        address: string;
        email?: string;
        type?: string;
    }[];
}

export const CONTACT_INFO: ContactInfo = {
    phones: ['044-43556696', '9944992460', '8870532269'],
    emails: ['crescentonline@gmail.com', 'info@crescenttechnosofts.com'],
    address: 'Global Presence: India, UAE, Sri Lanka',
    locations: [
        {
            name: 'Bangalore',
            phones: ['9944992460', '9945702795'],
            address: 'Crescent Workspace, 5AC, 961, HRBR Layout, 1st Block, Bangalore-560 043',
            email: 'info@crescenttechnosofts.com',
            type: 'Headquarters'
        },
        {
            name: 'UAE',
            phones: ['+971-555277305'],
            address: 'Dubai, United Arab Emirates',
            email: 'info@crescenttechnosofts.com'
        },
        {
            name: 'Sri Lanka',
            phones: ['+94778032737'],
            address: 'Colombo, Sri Lanka',
            email: 'info@crescenttechnosofts.com'
        },
        {
            name: 'Madurai',
            phones: ['9994288209'],
            address: '23/5, Jahangeer Khan Street, Goripalyam, Madurai-2',
            email: 'crescentmaduraibranch@crescenttechnosofts.com'
        },
        {
            name: 'Trichy',
            phones: ['9443713869'],
            address: 'No.35 Anbil Nagar, Wireless Station Road, Trichy - 620021',
            email: 'info@crescenttechnosofts.com'
        },
        {
            name: 'Gulbarga',
            phones: ['8147391361'],
            address: 'Shop no G6, Bharat Complex, M.G Road Adarsh Nagar Colony, Kalaburagi-585101',
            email: 'brmedisys@gmail.com'
        }
    ]
};

export interface NavLink {
    label: string;
    href: string;
    children?: NavLink[];
}

export const NAV_LINKS: NavLink[] = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    {
        label: 'Services',
        href: '/services',
        children: SERVICES.map(s => ({ label: s.title, href: s.href }))
    },
    { label: 'Clients', href: '/clients' },
    { label: 'Careers', href: '/careers' },
    { label: 'Partner Program', href: '/partner-program' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Blog', href: '/blog' }
];

export interface Testimonial {
    id: string;
    name: string;
    company: string;
    role: string;
    content: string;
    rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
    {
        id: '1',
        name: 'Sharoof Hussain',
        company: 'Medflebi Healthcare',
        role: 'Director',
        content: 'With lots of positive feedback from your team members, we the directors of Medflebi Healthcare would like to thank you for your outstanding job leading the web redesign and for the laboratory management software. I am so happy with the contribution that you have made went well above and beyond our expectations. We could not have done it without your help.',
        rating: 5
    },
    {
        id: '2',
        name: 'Remedy Family',
        company: 'Remedy Healthcare',
        role: 'Management',
        content: 'Great Software with easy to use interfaces and wonderful features. Above all wonderful service with immediate solution to all support requests. Definitely recommend. Thank you Mr Syed and entire team.',
        rating: 5
    }
];
