import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'ecommerce-fashion',
    title: 'Plataforma E-commerce',
    description: 'Tienda de ropa en línea con pasarela de pagos y gestión de inventario.',
    image: '/images/projects/ecommerce.jpg',
    tags: ['Next.js 14', 'React', 'Tailwind CSS', 'Shadcn/ui', 'Stripe', 'PostgreSQL'],
    category: 'web',
    featured: true,
    // Detail Page specific fields
    subtitle: 'Next-generation e-commerce platform with real-time inventory',
    client: 'TechRetail Inc.',
    industry: 'E-commerce',
    duration: '4 meses',
    team: '4 developers, 1 designer',
    platform: 'Web + Mobile',
    liveUrl: 'https://nexcommerce.demo',
    overview: 'NexCommerce is a new-group evaluation that focuses on seamless user experience and optimized transaction streams with protections on advanced backend for real-time experience for real-time inventory management for a inventory management.',
    challenge: 'Handling overview of handling high-traffic sales events and complex complex integrations for real-time management and complex inventory synchronization.',
    solution: 'Vexel Labs solution uses a NexCommerce product with server-side rendering with Next.js, and connects automatically to matching scalable database with PostgreSQL, and on preventing server process with PostgreSQL and Stripe integration, set to ensure the state of secure integration using Stripe secure integration, and its service in those secure payments ensures us to appreciate for secure payments.',
    features: [
      {
        icon: 'package',
        title: 'Real-time Inventory Sync',
        description: 'Real-time inventory sync to excel seamens user experience.'
      },
      {
        icon: 'search',
        title: 'Advanced Search & Filter',
        description: 'Enabled swervieving of advanced search & 4 filters.'
      },
      {
        icon: 'credit-card',
        title: 'Secure Checkout Process',
        description: 'Secure checkout process and secure payments simularizations.'
      },
      {
        icon: 'laptop',
        title: 'Responsive Design',
        description: 'Responsive design and define reorponsive design.'
      },
      {
        icon: 'grid',
        title: 'Admin Dashboard',
        description: 'Admin dashboard in your exewience to enimiar teatmdes.'
      },
      {
        icon: 'bar-chart',
        title: 'Analytics & Reporting',
        description: 'Analytics & reporting erreported analytics and analyss.'
      }
    ]
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    description: 'Dashboard interactivo para visualización de datos empresariales.',
    image: '/images/projects/saas-dashboard.jpg',
    tags: ['React', 'Shadcn/ui', 'Chart.js', 'TypeScript', 'Tailwind CSS'],
    category: 'saas',
    featured: true,
    subtitle: 'Analytics & telemetry workspace for enterprise statistics',
    client: 'Fintech Corp.',
    industry: 'SaaS / Finance',
    duration: '3 meses',
    team: '2 developers, 1 designer',
    platform: 'Web',
    liveUrl: 'https://saas-dashboard.demo',
    overview: 'High performance data visualization dashboard designed to gather, clean, and map business telemetry across departments with instantaneous processing times.',
    challenge: 'Pipelining large volume streaming events to live dashboard states without causing main thread blockages or interface latency.',
    solution: 'Engineered a concurrent state-management architecture using lightweight React hooks and canvas-level rendering optimizations.'
  },
  {
    id: 'banking-app',
    title: 'App Bancaria Móvil',
    description: 'Aplicación móvil segura para gestión financiera personal.',
    image: '/images/projects/banking-app.jpg',
    tags: ['React Native', 'Firebase', 'Tailwind', 'Redux'],
    category: 'mobile',
    featured: true,
    subtitle: 'Ultra-secure client banking suite for modern mobile devices',
    client: 'Apex Capital',
    industry: 'Fintech',
    duration: '6 meses',
    team: '5 developers, 2 designers',
    platform: 'Mobile (iOS & Android)',
    liveUrl: 'https://apex-banking.demo',
    overview: 'A personal banking application created to enable end users to easily track savings, invest in index funds, and initialize micro-loans securely.',
    challenge: 'Conforming to rigorous financial safety parameters while keeping interaction speed and layout responsive under heavy usage spikes.',
    solution: 'Architected local encryption protocols and custom offline sync strategies using React Native and lightweight device caches.'
  },
  {
    id: 'fitness-tracker',
    title: 'App de Seguimiento Fitness',
    description: 'App para seguimiento de actividad física y planes de entrenamiento.',
    image: '/images/projects/fitness-app.jpg',
    tags: ['Flutter', 'Dart', 'Google Fit', 'TypeScript'],
    category: 'mobile',
    subtitle: 'Personal coaching and health telemetry app',
    client: 'Vitality Brand',
    industry: 'Health & Fitness',
    duration: '4 meses',
    team: '3 developers, 1 designer',
    platform: 'Mobile (iOS & Android)',
    liveUrl: 'https://vitality-fitness.demo',
    overview: 'An interface mapping health trackers, dynamic calorie counting systems, and custom workout regimens designed dynamically by trainer algorithms.',
    challenge: 'Aggregating raw device sensor streams from wear devices reliably across both iOS and Android platforms without excessive battery drain.',
    solution: 'Designed background sync services that batch and throttle sensor transmission using Flutter native channel integrations.'
  },
  {
    id: 'food-delivery',
    title: 'App de Delivery de Comida',
    description: 'Plataforma de pedidos de comida con seguimiento en tiempo real.',
    image: '/images/projects/food-delivery.jpg',
    tags: ['React Native', 'Node.js', 'MongoDB', 'Supabase'],
    category: 'mobile',
    subtitle: 'Courier logistics and client dining network app',
    client: 'GourmetGo Ltd.',
    industry: 'Food Delivery',
    duration: '5 meses',
    team: '4 developers, 1 designer',
    platform: 'Mobile + Web Admin',
    liveUrl: 'https://gourmetgo.demo',
    overview: 'A food delivery system linking local dining houses with a fleet of contract couriers via complex real-time geolocation engines.',
    challenge: 'Coordinating location updates, route estimations, and delivery status events across thousands of concurrent clients and drivers.',
    solution: 'Built geolocation pipelines using WebSockets and background routing APIs connected to Supabase real-time databases.'
  },
  {
    id: 'corporate-website',
    title: 'Sitio Web Corporativo',
    description: 'Sitio web corporativo moderno con CMS integrado.',
    image: '/images/projects/corporate-site.jpg',
    tags: ['Next.js', 'Tailwind CSS', 'Contentful', 'Vercel'],
    category: 'web',
    subtitle: 'Scalable corporate footprint with high-fidelity web experiences',
    client: 'Global Partners Group',
    industry: 'Real Estate / Investments',
    duration: '2 meses',
    team: '2 developers, 1 designer',
    platform: 'Web',
    liveUrl: 'https://globalpartners.demo',
    overview: 'A premium web platform built to catalog commercial real estate holdings, post quarterly updates, and generate organic inbound inquiries.',
    challenge: 'Assuring high core-web-vital performance metrics across hundreds of media-rich portfolio pages without dynamic server rendering costs.',
    solution: 'Created static page regeneration structures using Next.js Incremental Static Regeneration hooked directly into a headless Contentful CMS.'
  },
]
