export type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  license: string;
  bio: string;
  areas: string[];
  image: string;
  linkedin: string;
};

/**
 * Perfiles de referencia. BUBO Legal debe reemplazar nombres, matrículas,
 * fotografías y enlaces de LinkedIn por la información real del equipo.
 */
export const team: TeamMember[] = [
  {
    name: 'Camilo Bustos Ordóñez',
    role: 'Socio fundador',
    specialty: 'Litigio laboral y derecho colectivo',
    license: 'T.P. 142.503 — Consejo Superior de la Judicatura',
    bio: 'Fundó BUBO Legal en 2011 tras litigar más de 400 procesos laborales. Ha representado sindicatos y trabajadores en negociaciones colectivas de alcance nacional.',
    areas: ['Derecho laboral colectivo', 'Despidos', 'Negociación sindical'],
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=70',
    linkedin: 'https://www.linkedin.com/company/bubolegal',
  },
  {
    name: 'Adriana Rueda Salcedo',
    role: 'Abogada senior',
    specialty: 'Especialista en pensiones y seguridad social',
    license: 'T.P. 178.940 — Consejo Superior de la Judicatura',
    bio: 'Especialista en seguridad social con experiencia en procesos contra Colpensiones y fondos privados. Ha logrado el reconocimiento de más de 300 pensiones negadas.',
    areas: ['Pensiones', 'Invalidez', 'Sustitución pensional'],
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=70',
    linkedin: 'https://www.linkedin.com/company/bubolegal',
  },
  {
    name: 'Julián Ospina Vélez',
    role: 'Abogado senior',
    specialty: 'Despidos, liquidaciones y estabilidad reforzada',
    license: 'T.P. 205.116 — Consejo Superior de la Judicatura',
    bio: 'Lidera el área de terminaciones de contrato y reintegros. Litiga acciones de tutela por estabilidad laboral reforzada en todo el país.',
    areas: ['Despidos', 'Reintegros', 'Tutela laboral'],
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=600&q=70',
    linkedin: 'https://www.linkedin.com/company/bubolegal',
  },
  {
    name: 'María Fernanda Lozano',
    role: 'Abogada asociada',
    specialty: 'Acoso laboral y protección de derechos fundamentales',
    license: 'T.P. 268.771 — Consejo Superior de la Judicatura',
    bio: 'Acompaña a víctimas de acoso laboral bajo la Ley 1010 de 2006, desde la queja ante el Comité de Convivencia hasta el proceso judicial.',
    areas: ['Acoso laboral', 'Discriminación', 'Fueros de protección'],
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=70',
    linkedin: 'https://www.linkedin.com/company/bubolegal',
  },
  {
    name: 'Santiago Beltrán Cárdenas',
    role: 'Abogado asociado',
    specialty: 'Consultoría laboral empresarial',
    license: 'T.P. 301.284 — Consejo Superior de la Judicatura',
    bio: 'Asesora áreas de gestión humana en auditorías laborales, reglamentos internos y prevención de litigios.',
    areas: ['Consultoría HR', 'Auditorías', 'Reglamentos internos'],
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=70',
    linkedin: 'https://www.linkedin.com/company/bubolegal',
  },
  {
    name: 'Laura Camila Prieto',
    role: 'Coordinadora administrativa',
    specialty: 'Atención al cliente y seguimiento de casos',
    license: 'Gestión de procesos y atención al cliente',
    bio: 'Primer punto de contacto de la firma: agenda las consultas gratuitas y mantiene informados a los clientes sobre el avance de cada proceso.',
    areas: ['Agenda de consultas', 'Seguimiento de procesos'],
    image:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=70',
    linkedin: 'https://www.linkedin.com/company/bubolegal',
  },
];

export const milestones = [
  {
    year: '2011',
    title: 'Fundación en Bogotá',
    body: 'BUBO Legal abre sus puertas con foco exclusivo en derecho laboral.',
  },
  {
    year: '2015',
    title: 'Primer caso de alto perfil',
    body: 'Reintegro colectivo de 60 trabajadores despedidos durante una negociación sindical.',
  },
  {
    year: '2019',
    title: 'Cobertura nacional',
    body: 'Atención virtual y alianzas en Medellín, Cali y Barranquilla.',
  },
  {
    year: '2026',
    title: '+2.000 casos resueltos',
    body: 'Más de dos mil trabajadores y empresas asesorados con 98% de éxito.',
  },
];

export const recognitions = [
  'Consejo Superior de la Judicatura',
  'Colegio Nacional de Abogados — CONALBOS',
  'Cámara de Comercio de Bogotá',
  'Red de Litigio Laboral Latinoamericano',
];
