export const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/portfolio' },
    {
        label: 'Pages',
        href: '#',
        children: [
            { label: 'Our Team', href: '/team' },
            { label: 'Career', href: '/career' },
            { label: 'FAQ', href: '/faq' },
            { label: 'Feedback', href: '/feedback' },
        ],
    },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

export const footerQuickLinks = [
    { label: 'Contact us', href: '/contact' },
    { label: 'About Us', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Careers', href: '/career' },
    { label: 'News', href: '/blog' },
];

export const footerServices = [
    { label: 'Vending Machine Supply', href: '/service-details' },
    { label: 'Syrup & Flavour Supply', href: '/service-details' },
    { label: 'Installation & Setup', href: '/service-details' },
    { label: 'Maintenance & Repair', href: '/service-details' },
    { label: 'Island-wide Delivery', href: '/service-details' },
];

export const heroSlides = [
    {
        image: '/assets/images/oreks/gallery/slider1.png',
        title: 'Your Own OREKS Crush Machine, Ready To Sell',
        buttonLabel: 'View Machines',
        buttonHref: '/portfolio',
    },
    {
        image: '/assets/images/oreks/gallery/slider2.png',
        title: 'Complete Shop Setup, Delivered & Installed',
        buttonLabel: 'Get A Quote',
        buttonHref: '/contact',
    },
];

export const marqueeItems = [
    'Island-Wide Delivery',
    '15 Bold Flavours',
    'Trusted Machines',
    'Fresh Every Cup',
    'Built To Last',
    'Made In Sri Lanka',
];

export const chooseCards = [
    {
        title: '3 Vending Machine Models',
        description:
            'Lorry/Van, Shop and Table Top models built to fit any location, from mobile street carts to fixed retail counters.',
        href: '/portfolio',
        icon: 'tji-feature-5',
    },
    {
        title: 'Island-Wide Syrup Supply',
        description:
            'Consistent, ready-to-use flavour concentrate delivered wherever you operate in Sri Lanka.',
        href: '/services',
        icon: 'tji-feature-5',
        featured: true,
    },
    {
        title: '15 Signature Flavours',
        description:
            'From Ginger and Pudina Masala to Blueberry and Kala Khatta, ready to pour on day one.',
        href: '/contact',
        icon: 'tji-feature-5',
        counter: '15',
        counterLabel: 'Signature Flavours',
    },
];

export const services = [
    {
        title: 'Vending Machine Supply',
        description:
            'Lorry/Van, Shop and Table Top vending machines built for daily use, delivered and set up island-wide.',
        href: '/service-details',
        icon: 'tji-service-1',
    },
    {
        title: 'Syrup & Flavour Supply',
        description:
            '15 signature flavour concentrates, from Ginger to Kala Khatta, supplied on a regular island-wide schedule.',
        href: '/service-details',
        icon: 'tji-service-2',
    },
    {
        title: 'Installation & Setup',
        description:
            'Our team delivers, installs and configures your vending machine on-site so you are ready to trade from day one.',
        href: '/service-details',
        icon: 'tji-service-3',
    },
    {
        title: 'Maintenance & Repair',
        description:
            'Scheduled servicing and fast repairs keep your vending machine running with minimal downtime.',
        href: '/service-details',
        icon: 'tji-service-4',
    },
    {
        title: 'Island-Wide Delivery',
        description:
            'Wherever you are located in Sri Lanka, we deliver machines and syrup right to your door.',
        href: '/service-details',
        icon: 'tji-service-5',
    },
];

export const aboutFeatures = [
    {
        title: 'Vending Machine Supply',
        description:
            'Lorry/Van, Shop and Table Top vending machines built for daily use, delivered and set up wherever you operate.',
        icon: 'tji-feature-1',
        href: '/service-details',
    },
    {
        title: 'Syrup & Flavour Supply',
        description:
            '15 signature flavour concentrates supplied on a steady island-wide schedule, so you never run dry.',
        icon: 'tji-feature-2',
        href: '/service-details',
    },
    {
        title: 'Installation & Setup',
        description:
            'Our team delivers, installs and configures your vending machine on-site so you are ready to trade from day one.',
        icon: 'tji-feature-3',
        href: '/service-details',
    },
    {
        title: 'Island-Wide Delivery',
        description:
            'Wherever you are located in Sri Lanka, we deliver machines and syrup right to your door.',
        icon: 'tji-feature-4',
        href: '/service-details',
    },
];

export const portfolioGrid = [
    {
        title: 'Lorry / Van Model',
        description:
            'A mobile vending cart mounted on your own lorry or van — bring OREKS Crush to events, festivals and busy roadside spots island-wide.',
        image: '/assets/images/oreks/gallery/lorry-van-cart-1.jpg',
        category: 'machines',
        href: '/portfolio-details',
        label: 'Vending Machines',
    },
    {
        title: 'Shop Model',
        description:
            'A fixed counter machine built for retail shops and stores, serving all 15 OREKS Crush flavours straight from the counter.',
        image: '/assets/images/oreks/gallery/flavor-taps.jpg',
        category: 'machines',
        href: '/contact',
        label: 'Vending Machines',
    },
    {
        title: 'Table Top Model',
        description:
            'A compact countertop unit with a small footprint — easy to install at any counter, kiosk or canteen.',
        image: '/assets/images/portfolio/portfolio-img-9.webp',
        category: 'machines',
        href: '/contact',
        label: 'Vending Machines',
    },
    { title: 'Ginger Fizz', image: '/assets/images/oreks/flavors/ginger-fizz.png', category: 'flavours', label: 'Flavours' },
    { title: 'Orange Fizz', image: '/assets/images/oreks/flavors/orange-fizz.png', category: 'flavours', label: 'Flavours' },
    { title: 'Green Apple Fizz', image: '/assets/images/oreks/flavors/green-apple-fizz.png', category: 'flavours', label: 'Flavours' },
    { title: 'Blueberry Fizz', image: '/assets/images/oreks/flavors/blueberry-fizz.png', category: 'flavours', label: 'Flavours' },
    { title: 'Grape Fizz', image: '/assets/images/oreks/flavors/grape-fizz.png', category: 'flavours', label: 'Flavours' },
    { title: 'Pineapple Fizz', image: '/assets/images/oreks/flavors/pineapple-fizz.png', category: 'flavours', label: 'Flavours' },
    { title: 'Lemon Fizz', image: '/assets/images/oreks/flavors/lemon-fizz.png', category: 'flavours', label: 'Flavours' },
    { title: 'Pudina Masala Fizz', image: '/assets/images/oreks/flavors/pudina-masala-fizz.png', category: 'flavours', label: 'Flavours' },
    { title: 'Strawberry Fizz', image: '/assets/images/oreks/flavors/strawberry-fizz.png', category: 'flavours', label: 'Flavours' },
    { title: 'Guava Fizz', image: '/assets/images/oreks/flavors/guava-fizz.png', category: 'flavours', label: 'Flavours' },
    { title: 'Kala Khatta Fizz', image: '/assets/images/oreks/flavors/kala-khatta-fizz.png', category: 'flavours', label: 'Flavours' },
    { title: 'Citrus Fizz', image: '/assets/images/oreks/flavors/citrus-fizz.png', category: 'flavours', label: 'Flavours' },
    { title: 'Litchi Fizz', image: '/assets/images/oreks/flavors/litchi-fizz.png', category: 'flavours', label: 'Flavours' },
    { title: 'Berry Fizz', image: '/assets/images/oreks/flavors/berry-fizz.png', category: 'flavours', label: 'Flavours' },
    { title: 'Mango Fizz', image: '/assets/images/oreks/flavors/mango-fizz.png', category: 'flavours', label: 'Flavours' },
];

export const contactFaq = [
    {
        question: 'What products does OREKS Crush offer?',
        answer:
            'We supply carbonated soft drink vending machines in three models — Lorry/Van, Shop, and Table Top — along with a full range of flavour syrups delivered island-wide.',
    },
    {
        question: 'How many flavours are available?',
        answer:
            'We currently offer 15 flavours of carbonated drink syrup, so you can keep your vending machine menu varied and popular with customers.',
    },
    {
        question: 'Do you provide installation and maintenance?',
        answer:
            'Yes. Our team handles setup and installation of your vending machine, plus ongoing service and maintenance to keep it running smoothly.',
    },
    {
        question: 'Do you deliver island-wide?',
        answer:
            'Yes, we deliver flavour syrup and support vending machine customers across Sri Lanka.',
    },
    {
        question: 'How do I get a quote or place an order?',
        answer:
            'Simply fill out the contact form on this page, call us on +94 76 707 5978, or email info@oreksglobal.com and our team will get back to you with pricing and availability.',
    },
];

export const contactLocations = [
    {
        title: 'Visit Our Outlet',
        description: ['No 138, Mosque Lane, Nawala Road, Rajagiriya', 'Business hours: Mon – Sat, 9:00 AM – 6:00 PM'],
        href: 'https://www.google.com/maps/search/?api=1&query=No+138%2C+Mosque+Lane%2C+Nawala+Road%2C+Rajagiriya%2C+Sri+Lanka',
        image: '/assets/images/contact/location-1.webp',
        button: 'Get directions',
    },
    {
        title: 'Call Us',
        description: ['Speak to our team about vending machines & flavour orders.', '+94 76 707 5978'],
        href: 'tel:+94767075978',
        image: '/assets/images/contact/location-2.webp',
        button: 'Call now',
    },
    {
        title: 'Email Us',
        description: ['Send your enquiry and we will respond within 1 business day.', 'info@oreksglobal.com'],
        href: 'mailto:info@oreksglobal.com',
        image: '/assets/images/contact/location-3.webp',
        button: 'Send email',
    },
];

export const teamMembers = [
    { name: 'Chaminda Rajapaksha', role: 'Managing Director', image: '/assets/images/team/team-1.webp' },
    { name: 'Nadeeka Wickramasinghe', role: 'Operations Manager', image: '/assets/images/team/team-2.webp' },
    { name: 'Priyantha Kumara', role: 'Production & Quality Lead', image: '/assets/images/team/team-3.webp' },
    { name: 'Ishara Gunawardena', role: 'Sales & Distribution Manager', image: '/assets/images/team/team-4.webp' },
    { name: 'Dilani Senanayake', role: 'Finance & Administration Manager', image: '/assets/images/team/team-5.webp' },
    { name: 'Malith Fernando', role: 'Logistics & Fleet Coordinator', image: '/assets/images/team/team-6.webp' },
];

export const careerItems = [
    { title: 'Route Sales Representative', category: 'sales', location: 'Island-wide', type: 'Full time', image: '/assets/images/career/career-1.webp', description: 'Build and grow retail relationships along your route, keeping our vending carts and shop partners stocked, priced and running smoothly.' },
    { title: 'Vending Machine Technician', category: 'technical', location: 'Rajagiriya', type: 'Full time', image: '/assets/images/career/career-2.webp', description: 'Install, service and repair our Lorry/Van, Shop and Table Top vending machines, keeping every cart pouring smoothly.' },
    { title: 'Production Assistant – Syrup Manufacturing', category: 'production', location: 'Rajagiriya', type: 'Full time', image: '/assets/images/career/career-3.webp', description: 'Support day-to-day batching and bottling of our 15 flavour syrups, following hygiene and quality procedures at our Rajagiriya facility.' },
    { title: 'Delivery Driver', category: 'logistics', location: 'Island-wide', type: 'Full time', image: '/assets/images/career/career-4.webp', description: 'Deliver flavour syrup and vending supplies to partners across Sri Lanka, keeping our island-wide network stocked and on schedule.' },
];

export const blogCards = [
    { title: '5 Things to Check Before Buying a Vending Cart.', category: 'Guide', date: '15.07.2026', image: '/assets/images/oreks/gallery/lorry-van-cart-1.jpg', href: '/blog-details' },
    { title: 'How to Pick the Right Flavours for Your Location.', category: 'Flavours', date: '22.06.2026', image: '/assets/images/oreks/gallery/flavor-taps.jpg', href: '/blog-details' },
    { title: 'Starting a Soft Drink Cart Business in Sri Lanka.', category: 'Business', date: '05.05.2026', image: '/assets/images/blog/blog-img-3.webp', href: '/blog-details' },
    { title: 'Keeping Your Vending Machine Running All Summer.', category: 'Maintenance', date: '20.04.2026', image: '/assets/images/blog/blog-img-4.webp', href: '/blog-details' },
    { title: 'Why Island-Wide Delivery Matters for Small Shop Owners.', category: 'Delivery', date: '12.03.2026', image: '/assets/images/blog/blog-img-5.webp', href: '/blog-details' },
    { title: 'OREKS Crush: The Story Behind Our 15 Flavours.', category: 'Flavours', date: '28.02.2026', image: '/assets/images/oreks/flavors/mango-fizz.png', href: '/blog-details' },
];

export const portfolioItems = [
    {
        title: 'Lorry / Van Model',
        category: 'Vending Machines',
        image: '/assets/images/oreks/gallery/lorry-van-cart-1.jpg',
        href: '/portfolio-details',
    },
    {
        title: 'Shop & Table Top Models',
        category: 'Vending Machines',
        image: '/assets/images/oreks/gallery/flavor-taps.jpg',
        href: '/portfolio-details',
    },
    {
        title: 'Orange Fizz',
        category: 'Flavours',
        image: '/assets/images/oreks/flavors/orange-fizz.png',
        href: '/portfolio-details',
    },
    {
        title: 'Grape Fizz',
        category: 'Flavours',
        image: '/assets/images/oreks/flavors/grape-fizz.png',
        href: '/portfolio-details',
    },
];

export const testimonials = [
    {
        quote:
            'Switching to OREKS Crush doubled my daily footfall. The flavours keep customers coming back to my cart every single evening.',
        name: 'Nuwan Perera',
        role: 'Cart Operator, Colombo',
        image: '/assets/images/testimonial/h3-testimonial-1.png',
    },
    {
        quote:
            'Their syrup deliveries are always on time, even to our outlet outside Kandy. That kind of reliability is everything for a small shop like ours.',
        name: 'Kavindi Silva',
        role: 'Shop Owner, Kandy',
        image: '/assets/images/testimonial/h3-testimonial-2.png',
    },
    {
        quote:
            'The Table Top machine paid for itself within two months. It is simple to run and the OREKS team helped us set it up start to finish.',
        name: 'Ruwan Fernando',
        role: 'Retail Partner, Galle',
        image: '/assets/images/testimonial/h3-testimonial-3.png',
    },
];

export const blogPosts = [
    {
        title: '5 Things to Check Before Buying a Vending Cart.',
        category: 'Guide',
        date: '15.07.2026',
        excerpt:
            "From build quality to after-sales support, here's what to look for before you invest in a soft drink vending cart.",
        image: '/assets/images/blog/h3-blog-img-1.png',
    },
    {
        title: 'How to Choose Flavours That Sell Faster.',
        category: 'Guide',
        date: '12.07.2026',
        excerpt:
            'A simple guide to matching syrup flavours with your location, customer base and margin goals.',
        image: '/assets/images/blog/h3-blog-img-2.png',
    },
    {
        title: 'Setting Up a Shop Counter for Peak Hours.',
        category: 'Operations',
        date: '10.07.2026',
        excerpt:
            'Small layout choices can make your service faster, cleaner and easier to manage during busy periods.',
        image: '/assets/images/blog/h3-blog-img-3.png',
    },
];
