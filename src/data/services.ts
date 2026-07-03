import { Service } from '@/types/service'

export const services: Service[] = [
  {
    id: 'web-dev',
    icon: 'code',
    title: 'Desarrollo Web Moderno',
    description:
      'Sitios web y aplicaciones web de alto rendimiento utilizando Next.js y React, optimizados para velocidad y SEO.',
  },
  {
    id: 'mobile-apps',
    icon: 'smartphone',
    title: 'Apps Móviles',
    description:
      'Aplicaciones Móviles Nativas y Cross-Platform. Apps para iOS y Android con React Native y Expo, ofreciendo experiencias de usuario fluidas y consistentes.',
  },
  {
    id: 'ui-ux',
    icon: 'layout',
    title: 'UI/UX Design',
    description:
      'Creación de interfaces intuitivas y atractivas, enfocadas en la usabilidad y la satisfacción del usuario, siguiendo principios modernos de diseño.',
  },
  {
    id: 'cloud',
    icon: 'cloud',
    title: 'Soluciones en la Nube Escalables',
    description:
      'Implementación de arquitecturas serverless, despliegue automatizado y gestión de infraestructura en AWS, Vercel y Google Cloud.',
  },
]
