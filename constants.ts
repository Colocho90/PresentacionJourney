
import { Slide, SlideLayout } from './types';
import {
  LightbulbIcon, GraduationCapIcon, HandshakeIcon, MegaphoneIcon, BooksIcon, HeartIcon,
  EmailIcon, FormIcon, PersonIcon, CalendarIcon, ConfettiIcon, GlobeIcon, PlusIcon,
  BellIcon, GraphIcon, ChatIcon, GroupIcon, CheckIcon, MoneyBagIcon, GearIcon,
  RocketIcon, WavingHandIcon
} from './components/Icons';

export const SLIDES_DATA: Slide[] = [
  {
    layout: SlideLayout.Title,
    title: 'El Journey de Sophia con Salesforce Education Cloud',
    subtitle: 'Una visión integral de la experiencia del estudiante',
    backgroundImage: 'https://picsum.photos/seed/campus/1600/900',
  },
  {
    layout: SlideLayout.Intro,
    title: 'Conoce a Sophia: Tu Futura Líder',
    mainText: 'Sophia: Aspirante Visionaria',
    impactPhrase: 'Una historia de éxito construida contigo.',
    items: [
      { icon: LightbulbIcon, description: 'Sueña con Ingeniería Innovadora.' },
      { icon: GraduationCapIcon, description: 'Busca una universidad que la impulse.' },
      { icon: HandshakeIcon, description: 'Conectada y lista para el éxito.' },
    ],
  },
  {
    layout: SlideLayout.Timeline,
    title: 'El Ciclo de Vida del Estudiante: Una Visión 360°',
    impactPhrase: 'Cada etapa, una experiencia excepcional.',
    items: [
      { icon: MegaphoneIcon, title: 'Reclutamiento y Admisión' , description: ''},
      { icon: BooksIcon, title: 'Operación Académica', description: '' },
      { icon: HeartIcon, title: 'Servicios al Estudiante y Bienestar', description: '' },
      { icon: GraduationCapIcon, title: 'Egresados y Vinculación', description: '' },
    ],
  },
  {
    layout: SlideLayout.Process,
    title: '1. Descubriendo Oportunidades: Reclutamiento y Admisión',
    impactPhrase: 'De interés a inscripción: Un camino fluido.',
    items: [
      { icon: EmailIcon, title: 'Marketing Cloud', description: 'Sophia descubre una campaña digital.' },
      { icon: FormIcon, title: 'Leads', description: 'Completa un formulario, se convierte en Lead.' },
      { icon: PersonIcon, title: 'Asesor', description: 'Se le asigna un asesor personalizado.' },
      { icon: CalendarIcon, title: 'Scheduler', description: 'Agenda su cita informativa fácilmente.' },
      { icon: ConfettiIcon, title: 'Admisión', description: '¡Es admitida oficialmente!' },
    ],
  },
  {
    layout: SlideLayout.Grid,
    title: '2. Trayectoria de Éxito: Operación Académica',
    impactPhrase: 'Optimización y apoyo constante en su aprendizaje.',
    items: [
      { icon: GlobeIcon, title: 'Student Success Hub', description: 'Mi Perfil: Una visión 360° de su avance.' },
      { icon: PlusIcon, title: 'Learning Program Wizard', description: 'Inscripción Simple: Cursos y horarios en minutos.' },
      { icon: BellIcon, title: 'Alertas', description: 'Alertas Proactivas: Siempre informada sobre su progreso.' },
      { icon: GraphIcon, title: 'Dashboards Académicos', description: 'Visión Estratégica: Data clave para equipos académicos.' },
    ],
  },
  {
    layout: SlideLayout.Process,
    title: '3. Bienestar Integral: Soporte y Acompañamiento',
    impactPhrase: 'La universidad: Un pilar en su bienestar.',
    items: [
      { icon: ChatIcon, title: 'Portal Estudiante', description: 'Sophia solicita ayuda fácilmente.' },
      { icon: HandshakeIcon, title: 'Consejero', description: 'Un consejero la contacta y crea un plan.' },
      { icon: GroupIcon, title: 'Equipo de Éxito', description: 'Se le asigna un equipo de apoyo dedicado.' },
      { icon: CheckIcon, title: 'Salesforce Service Cloud', description: 'Recibe seguimiento continuo y personalizado.' },
    ],
  },
  {
    layout: SlideLayout.Grid,
    title: '4. Legado y Conexión: Egresados y Vinculación',
    impactPhrase: 'Una relación que perdura más allá del aula.',
    items: [
      { icon: GraduationCapIcon, title: 'Módulo Egresados', description: 'Se gradúa y pasa a la comunidad Alumni.' },
      { icon: MegaphoneIcon, title: 'Engagement', description: 'Recibe mensajes y participa en eventos exclusivos.' },
      { icon: MoneyBagIcon, title: 'Donaciones', description: 'Apoya causas institucionales con un clic.' },
      { icon: LightbulbIcon, title: 'Mentoría', description: 'De ex-alumna a mentora, inspira nuevas generaciones.' },
    ],
  },
  {
    layout: SlideLayout.Benefits,
    title: 'Su Éxito, Nuestro Impacto: Beneficios para la Universidad',
    impactPhrase: 'Transformando la gestión educativa con Salesforce.',
    items: [
      { icon: GlobeIcon, title: 'Visibilidad Completa', description: 'Unifica el ciclo de vida del estudiante.' },
      { icon: GearIcon, title: 'Automatización Inteligente', description: 'Optimiza procesos administrativos y académicos.' },
      { icon: RocketIcon, title: 'Impulso en Resultados', description: 'Mejora la conversión, retención y éxito estudiantil.' },
      { icon: WavingHandIcon, title: 'Engagement Sólido', description: 'Fortalece la conexión post-egreso.' },
    ],
  },
  {
    layout: SlideLayout.Conclusion,
    title: 'El Journey Completo de Sophia: Una Inversión en el Futuro',
    mainText: 'De prospecto a egresado: Sophia, una historia de éxito.',
    subtitle: 'Salesforce Education Cloud permite acompañar al estudiante desde el primer contacto hasta después de egresado.',
    impactPhrase: 'Empoderando a cada estudiante, fortaleciendo la institución.',
  },
  {
    layout: SlideLayout.Contact,
    title: '¿Listos para Transformar la Experiencia Estudiantil?',
    subtitle: '¡Conversemos!',
    backgroundImage: 'https://picsum.photos/seed/library/1600/900',
    contactInfo: {
      name: 'Tu Nombre Completo',
      title: 'Tu Cargo / Título',
      email: 'tu.email@ejemplo.com',
      phone: '+1 (555) 123-4567',
    },
  },
];
