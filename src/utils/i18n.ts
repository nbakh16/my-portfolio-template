export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.career': 'Trayectoria',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    'home.hello': 'Hola, soy',
    'home.view_resume': 'Ver CV',
    'home.open_docs': 'Abrir en línea',
    'career.title': 'Trayectoria',
    'career.description': 'Un resumen de mi experiencia profesional, educación y logros.',
    'career.filter.all': 'Todos',
    'career.filter.work': 'Trabajo',
    'career.filter.education': 'Educación',
    'career.see_more': 'Ver Más',
    'projects.title': 'Proyectos Destacados',
    'projects.description': 'Una selección de proyectos académicos, desarrollo móvil y prototipos.',
    'projects.view_project': 'Ver Proyecto',
    'tech.title': 'Habilidades y Herramientas',
    'tech.description': 'Resumen de mis habilidades técnicas, categorizadas por área y nivel de experiencia.',
    'tech.level.expert': 'Experto',
    'tech.level.proficient': 'Intermedio',
    'tech.level.beginner': 'Básico',
    'contact.title': 'Contacto',
    'contact.description': 'No dudes en escribirme. Siempre estoy abierto a discutir nuevas oportunidades.',
    'contact.connect': 'Conectar',
    'contact.preferred': 'Preferiblemente: <span class="text-accent/80">Correo</span> o <span class="text-accent/80">LinkedIn</span> — suelo responder en menos de 24 horas.',
    'footer.built_with': 'Construido usando ',
  },
  en: {
    'nav.home': 'Home',
    'nav.career': 'Career',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'home.hello': 'Hello, I\'m',
    'home.view_resume': 'View Resume',
    'home.open_docs': 'Open online',
    'career.title': 'Career',
    'career.description': 'A timeline of my professional journey, roles, education, and milestones.',
    'career.filter.all': 'All',
    'career.filter.work': 'Work',
    'career.filter.education': 'Education',
    'career.see_more': 'See More',
    'projects.title': 'Featured Projects',
    'projects.description': 'A selection of professional work, published apps, and experimental prototypes.',
    'projects.view_project': 'View Project',
    'tech.title': 'Skills & Tools',
    'tech.description': 'Breakdown of my skills and tools, categorized by domain and proficiency.',
    'tech.level.expert': 'Expert',
    'tech.level.proficient': 'Proficient',
    'tech.level.beginner': 'Beginner',
    'contact.title': 'Contact Me',
    'contact.description': 'Feel free to reach out. I\'m always open to discussing new projects and opportunities.',
    'contact.connect': 'Connect',
    'contact.preferred': 'Preferred: <span class="text-accent/80">Email</span> or <span class="text-accent/80">LinkedIn</span> — I typically respond within 24 hours.',
    'footer.built_with': 'Built using ',
  }
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
