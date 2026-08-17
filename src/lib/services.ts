import type { IconName } from '@/components/ui/Icon';

export type ServiceSection =
  | { kind: 'prose'; title: string; paragraphs: string[] }
  | {
      kind: 'cards';
      title: string;
      intro?: string;
      columns?: 2 | 3 | 4;
      items: { icon: IconName; title: string; body: string }[];
    }
  | {
      kind: 'list';
      title: string;
      intro?: string;
      variant?: 'check' | 'alert';
      items: string[];
    }
  | { kind: 'timeline'; title: string; intro?: string; steps: { title: string; body: string }[] }
  | { kind: 'accordion'; title: string; intro?: string; items: { q: string; a: string }[] }
  | { kind: 'split'; title: string; panels: { icon: IconName; title: string; body: string }[] }
  | { kind: 'table'; title: string; intro?: string; head: string[]; rows: string[][] }
  | {
      kind: 'pricing';
      title: string;
      intro?: string;
      plans: { name: string; price: string; body: string; features: string[] }[];
    }
  | { kind: 'quotes'; title: string; items: { quote: string; author: string; role: string }[] }
  | { kind: 'calculator' }
  | { kind: 'checklist'; title: string; intro?: string; items: string[]; outcome: string };

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  icon: IconName;
  excerpt: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  overlay: string;
  badge?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  featured: boolean;
  sections: ServiceSection[];
  cta: {
    title: string;
    body: string;
    extraFields?: ('organizacion' | 'cargo' | 'empresa' | 'nit' | 'tamano' | 'fechaDespido')[];
    submitLabel?: string;
  };
  related: string[];
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1920&q=70`;

export const services: Service[] = [
  {
    slug: 'derecho-laboral-individual',
    title: 'Derecho Laboral Individual',
    shortTitle: 'Laboral Individual',
    icon: 'userCheck',
    excerpt:
      'Defensa integral del trabajador colombiano: contratos, salarios, prestaciones, despidos y reintegros.',
    heroSubtitle: 'Defendemos al trabajador colombiano en cada etapa de su vida laboral',
    heroImage: unsplash('1521737604893-d14cc237f11d'),
    heroImageAlt: 'Trabajador en reunión con su abogada en una oficina moderna',
    overlay: 'bg-black-900/60',
    metaTitle: 'Derecho Laboral Individual Colombia — BUBO Legal',
    metaDescription:
      'Defensa de trabajadores en Colombia. Contratos, despidos, liquidaciones y más. Consulta gratis con abogado especialista.',
    keywords: [
      'derecho laboral individual Colombia',
      'abogado laboral Bogotá',
      'demanda laboral Colombia',
    ],
    featured: true,
    sections: [
      {
        kind: 'prose',
        title: 'El servicio',
        paragraphs: [
          'El derecho laboral individual regula la relación entre un trabajador y su empleador: desde la firma del contrato hasta la liquidación final. En Colombia esa relación está protegida por normas de orden público que ninguna cláusula contractual puede desconocer.',
          'En BUBO Legal acompañamos al trabajador con una estrategia clara: primero entendemos el caso, luego reunimos la prueba y solo después decidimos entre conciliación, acción de tutela o demanda ordinaria laboral. Esa disciplina explica nuestra tasa de éxito.',
          'Marco legal aplicable: Código Sustantivo del Trabajo, Ley 789 de 2002 y la jurisprudencia de la Sala Laboral de la Corte Suprema de Justicia y de la Corte Constitucional.',
        ],
      },
      {
        kind: 'cards',
        title: 'Casos que manejamos',
        columns: 2,
        items: [
          {
            icon: 'document',
            title: 'Contratos de trabajo y modalidades',
            body: 'Término fijo, indefinido, obra o labor y contratos que encubren relaciones laborales.',
          },
          {
            icon: 'money',
            title: 'Salarios, prestaciones y horas extras',
            body: 'Reclamación de acreencias no pagadas, recargos nocturnos, dominicales y festivos.',
          },
          {
            icon: 'alert',
            title: 'Despidos injustificados',
            body: 'Terminación sin justa causa, despidos verbales y sanciones sin procedimiento.',
          },
          {
            icon: 'shield',
            title: 'Reintegro laboral',
            body: 'Fuero sindical, fuero de maternidad y estabilidad laboral reforzada.',
          },
          {
            icon: 'calculator',
            title: 'Liquidación y acreencias',
            body: 'Revisión del cálculo de cesantías, intereses, prima y vacaciones.',
          },
          {
            icon: 'hospital',
            title: 'Incapacidades y licencias',
            body: 'Pago de incapacidades, licencias y protección durante tratamientos médicos.',
          },
          {
            icon: 'megaphone',
            title: 'Acoso laboral',
            body: 'Denuncia y reparación en casos de mobbing bajo la Ley 1010 de 2006.',
          },
          {
            icon: 'gavel',
            title: 'Conciliación ante el Ministerio',
            body: 'Representación en audiencias de conciliación ante el Ministerio de Trabajo.',
          },
        ],
      },
      {
        kind: 'timeline',
        title: 'Nuestro proceso',
        steps: [
          {
            title: 'Consulta inicial gratuita',
            body: 'Evaluamos tu caso sin compromiso en una sesión de 30 minutos.',
          },
          {
            title: 'Diagnóstico jurídico',
            body: 'Analizamos contrato, desprendibles de nómina, comunicaciones y pruebas disponibles.',
          },
          {
            title: 'Estrategia legal',
            body: 'Definimos el mejor camino: conciliación, acción de tutela o demanda laboral.',
          },
          {
            title: 'Representación',
            body: 'Te acompañamos en cada audiencia y actuación judicial o extrajudicial.',
          },
          {
            title: 'Resolución',
            body: 'Trabajamos hasta obtener el pago, el reintegro o la indemnización que corresponde.',
          },
        ],
      },
      {
        kind: 'accordion',
        title: 'Marco legal',
        items: [
          {
            q: 'Código Sustantivo del Trabajo — Arts. 22 a 77',
            a: 'Define el contrato de trabajo, sus elementos esenciales, modalidades, período de prueba y obligaciones de las partes.',
          },
          {
            q: 'Decreto 2663 de 1950',
            a: 'Norma que adopta el Código Sustantivo del Trabajo y fija el régimen general de las relaciones laborales individuales.',
          },
          {
            q: 'Ley 1010 de 2006 — Acoso laboral',
            a: 'Define y sanciona el acoso laboral, crea el Comité de Convivencia y habilita la terminación con justa causa por parte de la víctima.',
          },
          {
            q: 'Ley 1468 de 2011 — Licencia de maternidad',
            a: 'Amplía la licencia de maternidad y refuerza la protección de la trabajadora en estado de embarazo y lactancia.',
          },
          {
            q: 'Ley 361 de 1997 — Estabilidad laboral reforzada',
            a: 'Protege a las personas en condición de discapacidad o con afectación de salud frente al despido sin autorización del inspector de trabajo.',
          },
        ],
      },
    ],
    cta: {
      title: '¿Tu empleador vulneró tus derechos? Actúa ahora.',
      body: 'Cuéntanos qué ocurrió. La primera consulta es gratuita, confidencial y sin compromiso.',
    },
    related: ['despidos-y-liquidaciones', 'acoso-laboral', 'seguridad-social-y-pensiones'],
  },
  {
    slug: 'derecho-laboral-colectivo',
    title: 'Derecho Laboral Colectivo',
    shortTitle: 'Laboral Colectivo',
    icon: 'users',
    excerpt:
      'Negociación colectiva, sindicatos, huelga y tribunales de arbitramento para trabajadores y empresas.',
    heroSubtitle:
      'Asesoría experta en negociaciones colectivas, sindicatos y conflictos laborales de gran escala',
    heroImage: unsplash('1517048676732-d65bc937f952'),
    heroImageAlt: 'Mesa de negociación con profesionales y documentos',
    overlay: 'bg-black-900/65',
    metaTitle: 'Derecho Laboral Colectivo y Sindicatos — BUBO Legal',
    metaDescription:
      'Asesoría en negociaciones colectivas, sindicatos y huelgas en Colombia. Expertos en CST y Ley 584 de 2000.',
    keywords: [
      'derecho laboral colectivo Colombia',
      'negociación colectiva',
      'fuero sindical Colombia',
    ],
    featured: true,
    sections: [
      {
        kind: 'prose',
        title: 'El servicio',
        paragraphs: [
          'Mientras el derecho laboral individual protege a un trabajador frente a su empleador, el derecho colectivo regula la relación entre organizaciones de trabajadores y empresas: sindicatos, pliegos de peticiones, convenciones colectivas y huelga.',
          'Un error de procedimiento en una negociación colectiva puede costar años de litigio o la nulidad de una convención. Por eso acompañamos cada etapa con soporte técnico, actas y estrategia de negociación.',
          'Marco normativo: Código Sustantivo del Trabajo — Parte Segunda, Ley 584 de 2000 y convenios 87 y 98 de la OIT ratificados por Colombia.',
        ],
      },
      {
        kind: 'cards',
        title: 'Áreas de práctica',
        columns: 3,
        items: [
          {
            icon: 'briefcase',
            title: 'Negociación colectiva',
            body: 'Acompañamiento en pliegos de peticiones y convenciones colectivas de trabajo.',
          },
          {
            icon: 'gavel',
            title: 'Conflictos colectivos',
            body: 'Representación ante tribunales de arbitramento y el Ministerio de Trabajo.',
          },
          {
            icon: 'megaphone',
            title: 'Derecho de huelga',
            body: 'Requisitos legales, votación, duración y protección del derecho a la huelga.',
          },
          {
            icon: 'users',
            title: 'Sindicatos',
            body: 'Constitución, reforma estatutaria y defensa del fuero sindical.',
          },
          {
            icon: 'document',
            title: 'Pactos colectivos',
            body: 'Negociación con trabajadores no sindicalizados dentro del marco legal.',
          },
          {
            icon: 'scale',
            title: 'Arbitramento laboral',
            body: 'Representación ante tribunales de arbitramento obligatorio y voluntario.',
          },
        ],
      },
      {
        kind: 'split',
        title: '¿Para quién es este servicio?',
        panels: [
          {
            icon: 'users',
            title: 'Para trabajadores y sindicatos',
            body: 'Construimos el pliego, sustentamos cada punto con cifras de la empresa y defendemos el fuero de los directivos sindicales frente a traslados, sanciones o despidos. Si la negociación se rompe, asumimos la defensa en el tribunal de arbitramento.',
          },
          {
            icon: 'building',
            title: 'Para empleadores',
            body: 'Diseñamos la estrategia de negociación, cuantificamos el impacto financiero de cada petición y garantizamos que cada actuación respete el derecho de asociación, evitando demandas por prácticas antisindicales.',
          },
        ],
      },
      {
        kind: 'timeline',
        title: 'Proceso de negociación colectiva',
        intro: 'Etapas previstas en el Código Sustantivo del Trabajo.',
        steps: [
          {
            title: 'Presentación del pliego de peticiones',
            body: 'El sindicato radica el pliego y la empresa debe recibirlo e iniciar conversaciones.',
          },
          {
            title: 'Arreglo directo',
            body: 'Etapa de 20 días hábiles, prorrogable por acuerdo de las partes.',
          },
          {
            title: 'Mediación del Ministerio de Trabajo',
            body: 'Intervención de funcionarios para acercar posiciones y levantar actas.',
          },
          {
            title: 'Tribunal de arbitramento o huelga',
            body: 'Los trabajadores deciden entre someter el conflicto a arbitramento o declarar la huelga.',
          },
          {
            title: 'Convención colectiva o laudo arbitral',
            body: 'El acuerdo se formaliza en convención o el tribunal profiere laudo obligatorio.',
          },
        ],
      },
    ],
    cta: {
      title: '¿Enfrentas un conflicto colectivo? Actúa con respaldo jurídico especializado.',
      body: 'Atendemos sindicatos, comités de trabajadores y empresas en todo el país.',
      extraFields: ['organizacion', 'cargo'],
    },
    related: [
      'derecho-laboral-individual',
      'consultoria-empresarial-hr',
      'despidos-y-liquidaciones',
    ],
  },
  {
    slug: 'despidos-y-liquidaciones',
    title: 'Despidos y Liquidaciones Laborales',
    shortTitle: 'Despidos y Liquidaciones',
    icon: 'briefcase',
    excerpt:
      '¿Te despidieron? Calculamos tu liquidación, revisamos la causa y reclamamos la indemnización.',
    heroSubtitle: '¿Te despidieron? Conoce tus derechos y reclama lo que te corresponde.',
    heroImage: unsplash('1554224155-6726b3ff858f'),
    heroImageAlt: 'Persona revisando documentos de contrato sobre un escritorio oscuro',
    overlay: 'bg-black-900/65',
    metaTitle: 'Despido Injusto y Liquidación Laboral — BUBO Legal',
    metaDescription:
      '¿Te despidieron injustamente? Reclama tu liquidación. Calculadora de indemnización laboral Colombia.',
    keywords: [
      'liquidación laboral Colombia',
      'despido sin justa causa',
      'calculadora liquidación laboral',
    ],
    featured: true,
    sections: [
      {
        kind: 'prose',
        title: 'El servicio',
        paragraphs: [
          'El Código Sustantivo del Trabajo permite terminar un contrato por mutuo acuerdo, por vencimiento del plazo, por justa causa o de forma unilateral sin justa causa. Cada modalidad tiene consecuencias económicas distintas.',
          'Cuando el empleador despide sin justa causa debe pagar una indemnización adicional a la liquidación. Y cuando invoca una justa causa sin probarla o sin procedimiento previo, el despido puede declararse ineficaz.',
          'Revisamos tu carta de terminación, tu liquidación y tus desprendibles de nómina para determinar exactamente cuánto te deben y qué acción conviene interponer.',
        ],
      },
      { kind: 'calculator' },
      {
        kind: 'table',
        title: '¿Cuándo hay lugar a indemnización?',
        intro:
          'Referencia general para salarios inferiores a 10 SMLMV. El cálculo exacto depende de tu contrato.',
        head: ['Tipo de contrato', 'Tiempo de servicio', 'Indemnización'],
        rows: [
          ['Término indefinido', 'Menos de 1 año', '30 días de salario'],
          ['Término indefinido', 'Más de 1 año', '30 días + 20 días por cada año adicional'],
          ['Término fijo', '—', 'Salarios del tiempo que faltaba para terminar el plazo'],
          ['Obra o labor', '—', 'Salarios del tiempo restante, mínimo 15 días'],
        ],
      },
      {
        kind: 'list',
        title: 'Señales de alerta',
        intro:
          'Si te identificas con alguna de estas situaciones, tu liquidación puede ser ilegal.',
        variant: 'alert',
        items: [
          'Tu liquidación fue menor a lo que esperabas o llegó sin desglose.',
          'No recibiste carta de despido escrita con la causa invocada.',
          'El despido ocurrió durante una incapacidad médica.',
          'Estabas en licencia de maternidad o paternidad.',
          'Tenías fuero sindical o estabilidad laboral reforzada.',
          'El empleador nunca consignó tus cesantías en un fondo.',
        ],
      },
    ],
    cta: {
      title: 'Los términos para reclamar prescriben en 3 años. No esperes.',
      body: 'Indícanos la fecha de tu despido y revisamos tu caso sin costo.',
      extraFields: ['fechaDespido'],
    },
    related: ['derecho-laboral-individual', 'contratos-de-trabajo', 'acoso-laboral'],
  },
  {
    slug: 'acoso-laboral',
    title: 'Acoso Laboral (Mobbing)',
    shortTitle: 'Acoso Laboral',
    icon: 'shield',
    excerpt:
      'Maltrato, persecución o discriminación en el trabajo: la Ley 1010 de 2006 te protege y nosotros te respaldamos.',
    heroSubtitle: 'No estás solo. La Ley 1010 de 2006 te protege — y nosotros te respaldamos.',
    heroImage: unsplash('1499750310107-5fef28a66643'),
    heroImageAlt: 'Persona sola en una oficina con iluminación tenue',
    overlay: 'bg-black-900/70',
    metaTitle: 'Acoso Laboral en Colombia — Ley 1010 — BUBO Legal',
    metaDescription:
      'Víctima de mobbing o acoso laboral en Colombia. Asesoría legal especializada. Conoce tus derechos según la Ley 1010 de 2006.',
    keywords: ['acoso laboral Colombia', 'Ley 1010 de 2006', 'mobbing Colombia'],
    featured: true,
    sections: [
      {
        kind: 'prose',
        title: '¿Qué es el acoso laboral?',
        paragraphs: [
          'La Ley 1010 de 2006 define el acoso laboral como toda conducta persistente y demostrable, ejercida sobre un trabajador por su jefe, un compañero o un subalterno, dirigida a infundir miedo, causar perjuicio o inducir la renuncia.',
          'La ley tipifica seis modalidades: maltrato laboral, persecución laboral, discriminación laboral, entorpecimiento laboral, inequidad laboral y desprotección laboral.',
          'No todo conflicto es acoso. Una exigencia razonable de resultados o un llamado de atención puntual no constituyen mobbing; la clave está en la persistencia, la intención y la prueba.',
        ],
      },
      {
        kind: 'checklist',
        title: '¿Cómo identificarlo?',
        intro: 'Marca las situaciones que estás viviendo.',
        items: [
          '¿Tu jefe te humilla frente a tus compañeros?',
          '¿Te asignan tareas imposibles o degradantes?',
          '¿Recibes amenazas o presiones constantes para que renuncies?',
          '¿Te excluyen de reuniones o de información relevante para tu cargo?',
          '¿Has sido víctima de comentarios discriminatorios?',
          '¿Tu rendimiento es evaluado de forma injusta y repetida?',
        ],
        outcome:
          'Si marcaste 2 o más, podrías estar enfrentando acoso laboral. Habla con nosotros: la consulta es confidencial.',
      },
      {
        kind: 'timeline',
        title: 'Ruta de acción legal',
        steps: [
          {
            title: 'Documentación',
            body: 'Recopilamos correos, mensajes, testigos, registros médicos y evaluaciones de desempeño.',
          },
          {
            title: 'Comité de Convivencia Laboral',
            body: 'Presentamos la queja interna y verificamos que el comité cumpla su procedimiento.',
          },
          {
            title: 'Ministerio de Trabajo',
            body: 'Radicamos queja formal cuando la empresa no actúa o la conducta persiste.',
          },
          {
            title: 'Inspección laboral',
            body: 'Acompañamos la investigación administrativa y la práctica de pruebas.',
          },
          {
            title: 'Proceso sancionatorio o penal',
            body: 'Impulsamos las sanciones al empleador y al acosador según la gravedad.',
          },
          {
            title: 'Demanda laboral',
            body: 'Reclamamos perjuicios, indemnizaciones y la terminación con justa causa a tu favor.',
          },
        ],
      },
      {
        kind: 'cards',
        title: 'Sanciones para el empleador',
        columns: 2,
        items: [
          {
            icon: 'money',
            title: 'Multas de 2 a 10 SMLMV',
            body: 'Impuestas por el Ministerio de Trabajo a la empresa que tolera el acoso.',
          },
          {
            icon: 'building',
            title: 'Cierre del establecimiento',
            body: 'En casos de reincidencia comprobada de las conductas de acoso.',
          },
          {
            icon: 'scale',
            title: 'Terminación con justa causa',
            body: 'La víctima puede renunciar con justa causa e igualmente recibir indemnización.',
          },
          {
            icon: 'gavel',
            title: 'Responsabilidad del acosador',
            body: 'Sanciones disciplinarias y, según la conducta, responsabilidad penal.',
          },
        ],
      },
    ],
    cta: {
      title: 'Cuéntanos lo que estás viviendo.',
      body: 'Todo lo que compartas está protegido por el secreto profesional del abogado. Nadie de tu empresa será contactado sin tu autorización.',
    },
    related: ['derecho-laboral-individual', 'despidos-y-liquidaciones', 'contratos-de-trabajo'],
  },
  {
    slug: 'seguridad-social-y-pensiones',
    title: 'Seguridad Social y Pensiones',
    shortTitle: 'Seguridad Social y Pensiones',
    icon: 'pension',
    excerpt:
      'Pensión de vejez, invalidez y sobrevivientes. Reclamamos ante Colpensiones, AFP, EPS y ARL.',
    heroSubtitle: 'Tu pensión es un derecho, no un favor. Te ayudamos a hacerla valer.',
    heroImage: unsplash('1556742049-0cfed4f6a45d'),
    heroImageAlt: 'Persona mayor revisando documentos de pensión',
    overlay: 'bg-black-900/65',
    metaTitle: 'Pensión Colpensiones y AFP — Abogados — BUBO Legal',
    metaDescription:
      '¿Colpensiones negó tu pensión? Reclamamos pensión de vejez, invalidez y sobrevivientes en Colombia.',
    keywords: [
      'pensión Colpensiones Colombia',
      'reclamar pensión de vejez',
      'abogado pensiones Bogotá',
    ],
    featured: true,
    sections: [
      {
        kind: 'prose',
        title: 'El servicio',
        paragraphs: [
          'En Colombia coexisten dos regímenes: el de Prima Media con prestación definida, administrado por Colpensiones, y el de Ahorro Individual con Solidaridad, administrado por las AFP privadas. Elegir mal o trasladarse a destiempo puede costar millones.',
          'Los problemas más frecuentes son historias laborales incompletas, semanas no reportadas por empleadores, negativas por pérdida de capacidad laboral y liquidaciones del monto pensional por debajo de lo que corresponde.',
          'Reconstruimos tu historia laboral, calculamos el IBL y el monto correcto y llevamos la reclamación hasta la vía judicial cuando es necesario.',
        ],
      },
      {
        kind: 'accordion',
        title: 'Tipos de pensión que reclamamos',
        items: [
          {
            q: 'Pensión de vejez',
            a: '1.300 semanas cotizadas y 62 años (hombres) o 57 años (mujeres) en el Régimen de Prima Media. En el régimen privado depende del capital acumulado o del Fondo de Garantía de Pensión Mínima.',
          },
          {
            q: 'Pensión de invalidez',
            a: 'Requiere una pérdida de capacidad laboral igual o superior al 50% y 50 semanas cotizadas en los 3 años anteriores a la estructuración. Acompañamos la calificación ante la EPS, la ARL y las juntas de calificación.',
          },
          {
            q: 'Pensión de sobrevivientes',
            a: 'Para cónyuge o compañero permanente, hijos menores o estudiantes y, en su defecto, padres que dependían económicamente del afiliado fallecido.',
          },
          {
            q: 'Indemnización sustitutiva',
            a: 'Alternativa cuando se llega a la edad sin completar las semanas exigidas: la entidad devuelve un valor único calculado sobre las cotizaciones efectuadas.',
          },
          {
            q: 'Pensión compartida',
            a: 'Cuando el empleador cofinanciaba la pensión y el ISS/Colpensiones asume la prestación a partir del cumplimiento de requisitos.',
          },
        ],
      },
      {
        kind: 'cards',
        title: 'Entidades involucradas',
        columns: 3,
        items: [
          {
            icon: 'landmark',
            title: 'Colpensiones',
            body: 'Régimen de Prima Media: reconocimiento, reliquidación y recursos.',
          },
          {
            icon: 'pension',
            title: 'AFP privadas',
            body: 'Porvenir, Protección, Colfondos y Skandia: traslados y devolución de saldos.',
          },
          {
            icon: 'stethoscope',
            title: 'EPS',
            body: 'Pago de incapacidades superiores a 180 días y remisión a calificación.',
          },
          {
            icon: 'shield',
            title: 'ARL',
            body: 'Accidentes de trabajo y enfermedades laborales, prestaciones económicas.',
          },
          {
            icon: 'gavel',
            title: 'Juntas de calificación',
            body: 'Regional y nacional: impugnación del dictamen de pérdida de capacidad.',
          },
          {
            icon: 'scale',
            title: 'Juzgados laborales',
            body: 'Demanda ordinaria cuando la entidad mantiene la negativa.',
          },
        ],
      },
      {
        kind: 'timeline',
        title: 'Proceso de reclamación',
        steps: [
          {
            title: 'Revisión del historial',
            body: 'Verificamos semanas cotizadas, IBC y periodos no reportados por empleadores.',
          },
          {
            title: 'Solicitud formal',
            body: 'Radicamos la petición ante Colpensiones o la AFP con la prueba completa.',
          },
          {
            title: 'Respuesta de la entidad',
            body: 'La entidad debe resolver mediante resolución motivada dentro de los plazos legales.',
          },
          {
            title: 'Impugnación',
            body: 'Interponemos recursos de reposición y apelación frente a una negativa.',
          },
          {
            title: 'Demanda laboral',
            body: 'Acudimos al juez laboral del circuito con la prueba.',
          },
          {
            title: 'Reconocimiento',
            body: 'Sentencia, reconocimiento pensional y pago de retroactivos e intereses.',
          },
        ],
      },
      {
        kind: 'accordion',
        title: 'Preguntas frecuentes',
        items: [
          {
            q: '¿Cuántas semanas necesito para pensionarme?',
            a: 'En el Régimen de Prima Media se exigen 1.300 semanas. Revisa siempre tu historia laboral: es común que falten semanas por reportes incompletos del empleador.',
          },
          {
            q: '¿Qué pasa si trabajé de manera informal?',
            a: 'Si existió una relación laboral con subordinación, puedes demandar al empleador para que pague los aportes omitidos, incluso años después.',
          },
          {
            q: '¿Puedo trasladarme entre régimen público y privado?',
            a: 'Sí, cada 5 años y hasta 10 años antes de la edad de pensión. Analizamos la conveniencia antes de que el traslado sea irreversible.',
          },
          {
            q: '¿Puedo pensionarme si me declararon inválido?',
            a: 'Con una pérdida de capacidad laboral del 50% o más y las semanas exigidas, tienes derecho a pensión de invalidez.',
          },
          {
            q: '¿Qué es el Fondo de Garantía de Pensión Mínima?',
            a: 'Un fondo del régimen de ahorro individual que completa el capital para garantizar una pensión de un salario mínimo cuando se cumplen edad y semanas.',
          },
        ],
      },
    ],
    cta: {
      title: '¿Colpensiones negó tu pensión? Tienes derecho a apelar. Háblanos.',
      body: 'Revisamos tu resolución y tu historia laboral sin costo.',
    },
    related: ['derecho-laboral-individual', 'despidos-y-liquidaciones', 'contratos-de-trabajo'],
  },
  {
    slug: 'contratos-de-trabajo',
    title: 'Contratos de Trabajo',
    shortTitle: 'Contratos de Trabajo',
    icon: 'contract',
    excerpt:
      'Revisión y redacción de contratos laborales. Detectamos cláusulas abusivas antes de que firmes.',
    heroSubtitle:
      'Un contrato bien redactado protege a ambas partes. Un contrato mal hecho crea conflictos.',
    heroImage: unsplash('1450101499163-c8848c66ca85'),
    heroImageAlt: 'Contrato laboral sobre un escritorio con un bolígrafo',
    overlay: 'bg-black-900/65',
    metaTitle: 'Contratos de Trabajo Colombia — BUBO Legal',
    metaDescription:
      'Revisión y redacción de contratos laborales en Colombia. Detectamos cláusulas abusivas antes de que firmes.',
    keywords: [
      'contrato laboral Colombia',
      'tipos de contrato Colombia',
      'revisión de contrato de trabajo',
    ],
    featured: false,
    sections: [
      {
        kind: 'cards',
        title: 'Tipos de contrato en Colombia',
        columns: 3,
        items: [
          {
            icon: 'calendar',
            title: 'Término fijo',
            body: 'Duración definida, prórroga automática y preaviso de 30 días para no renovar.',
          },
          {
            icon: 'clock',
            title: 'Término indefinido',
            body: 'Sin fecha de vencimiento y con mayores protecciones para el trabajador.',
          },
          {
            icon: 'wrench',
            title: 'Obra o labor',
            body: 'Atado a un proyecto específico; termina al completarse la obra contratada.',
          },
          {
            icon: 'moon',
            title: 'Ocasional o transitorio',
            body: 'Máximo 30 días, para labores accidentales ajenas a la actividad de la empresa.',
          },
          {
            icon: 'laptop',
            title: 'Teletrabajo y trabajo remoto',
            body: 'Ley 1221 de 2008 y Ley 2121 de 2021: auxilios, jornada y desconexión laboral.',
          },
          {
            icon: 'document',
            title: 'Prestación de servicios',
            body: 'Revisamos si encubre una relación laboral real y procede el contrato realidad.',
          },
        ],
      },
      {
        kind: 'list',
        title: 'Elementos esenciales del contrato',
        variant: 'check',
        items: [
          'Identificación completa de las partes.',
          'Lugar de trabajo y modalidad (presencial, remota o híbrida).',
          'Cargo y funciones específicas.',
          'Remuneración: salario, beneficios y forma de pago.',
          'Jornada laboral y distribución de turnos.',
          'Duración y modalidad del contrato.',
          'Período de prueba (máximo 2 meses).',
          'Cláusulas de confidencialidad y no competencia, si aplican.',
        ],
      },
      {
        kind: 'list',
        title: 'Cláusulas peligrosas: qué revisar antes de firmar',
        variant: 'alert',
        items: [
          'Cláusulas que pretenden renunciar a prestaciones sociales.',
          'Contratos por prestación de servicios que encubren una relación laboral.',
          'Cláusulas de no competencia abusivas o sin contraprestación.',
          'Descuentos salariales no autorizados por la ley.',
          'Renuncia anticipada a vacaciones, cesantías o horas extras.',
        ],
      },
      {
        kind: 'cards',
        title: 'Servicio de revisión contractual',
        intro: 'Envíanos tu contrato y recibe un análisis claro antes de firmar.',
        columns: 3,
        items: [
          {
            icon: 'clock',
            title: 'Revisión en 48 horas',
            body: 'Análisis completo del documento por un abogado laboralista.',
          },
          {
            icon: 'alert',
            title: 'Informe de riesgos',
            body: 'Identificamos cláusulas nulas, abusivas o contrarias al CST.',
          },
          {
            icon: 'check',
            title: 'Recomendaciones',
            body: 'Redacción alternativa lista para negociar con tu empleador.',
          },
        ],
      },
      {
        kind: 'cards',
        title: 'Para empresas: redacción de contratos',
        columns: 2,
        items: [
          {
            icon: 'contract',
            title: 'Contratos a medida',
            body: 'Modelos por tipo de vinculación, cargo y nivel de responsabilidad.',
          },
          {
            icon: 'lock',
            title: 'Confidencialidad y datos',
            body: 'Cláusulas de protección de información y propiedad intelectual.',
          },
          {
            icon: 'laptop',
            title: 'Trabajo remoto',
            body: 'Contratos y políticas de teletrabajo conformes con la normativa vigente.',
          },
          {
            icon: 'scroll',
            title: 'Reglamento interno',
            body: 'Redacción y actualización del reglamento interno de trabajo.',
          },
        ],
      },
    ],
    cta: {
      title: '¿Vas a firmar un contrato? Déjanos revisarlo primero.',
      body: 'La primera consulta es gratuita. Cuéntanos qué tipo de contrato te ofrecieron y qué te preocupa.',
    },
    related: [
      'derecho-laboral-individual',
      'despidos-y-liquidaciones',
      'consultoria-empresarial-hr',
    ],
  },
  {
    slug: 'consultoria-empresarial-hr',
    title: 'Consultoría Empresarial en Derecho Laboral',
    shortTitle: 'Consultoría Empresarial HR',
    icon: 'building',
    excerpt:
      'Auditorías laborales, políticas de RR.HH. y defensa jurídica para empresas en Colombia.',
    heroSubtitle: 'Ayudamos a las empresas colombianas a crecer sin riesgos laborales.',
    heroImage: unsplash('1497366216548-37526070297c'),
    heroImageAlt: 'Equipo empresarial reunido en una sala de juntas moderna',
    overlay: 'bg-black-900/65',
    badge: 'Servicio Empresarial B2B',
    metaTitle: 'Consultoría Laboral Empresas Colombia — BUBO Legal',
    metaDescription:
      'Asesoría jurídica laboral para empresas en Colombia. Auditorías, políticas RR.HH. y defensa ante demandas.',
    keywords: [
      'consultoría laboral empresas Colombia',
      'asesoría laboral empresas Bogotá',
      'auditoría laboral',
    ],
    featured: true,
    sections: [
      {
        kind: 'prose',
        title: '¿Por qué asesoría laboral preventiva?',
        paragraphs: [
          'La mayoría de las demandas laborales que llegan a los juzgados colombianos se originan en documentos mal redactados, procedimientos disciplinarios sin garantías o liquidaciones calculadas a mano. Casi todas eran evitables.',
          'Los costos ocultos de una mala gestión laboral no se limitan a la condena: incluyen tiempo de la dirección, rotación, sanciones del Ministerio de Trabajo y daño reputacional.',
          'Un acompañamiento jurídico permanente convierte el área laboral en una ventaja competitiva: contratos sólidos, procesos claros y decisiones tomadas con respaldo legal.',
        ],
      },
      {
        kind: 'cards',
        title: 'Servicios para empresas',
        columns: 2,
        items: [
          {
            icon: 'clipboard',
            title: 'Auditoría laboral',
            body: 'Revisión integral de contratos, nómina, seguridad social y cumplimiento legal.',
          },
          {
            icon: 'scroll',
            title: 'Reglamento interno de trabajo',
            body: 'Redacción y actualización conforme al Código Sustantivo del Trabajo.',
          },
          {
            icon: 'document',
            title: 'Due diligence laboral',
            body: 'Para fusiones, adquisiciones y reestructuraciones societarias.',
          },
          {
            icon: 'users',
            title: 'Políticas de RR.HH.',
            body: 'Manual del empleado, teletrabajo, diversidad e inclusión y desconexión laboral.',
          },
          {
            icon: 'gavel',
            title: 'Defensa jurídica empresarial',
            body: 'Representación ante demandas laborales y el Ministerio de Trabajo.',
          },
          {
            icon: 'target',
            title: 'Reestructuración de planta',
            body: 'Procesos de reducción de personal jurídicamente seguros.',
          },
          {
            icon: 'briefcase',
            title: 'Outsourcing jurídico laboral',
            body: 'Un abogado laboral dedicado a tu empresa, sin costo de planta.',
          },
          {
            icon: 'graduation',
            title: 'Capacitación al personal',
            body: 'Talleres sobre derechos laborales, acoso, diversidad e inclusión.',
          },
        ],
      },
      {
        kind: 'pricing',
        title: 'Modelo de servicio',
        intro: 'Los valores se definen según el tamaño de la empresa y el alcance del servicio.',
        plans: [
          {
            name: 'Consulta puntual',
            price: 'Por evento',
            body: 'Para empresas con una necesidad específica o un caso en curso.',
            features: [
              'Concepto jurídico escrito',
              'Revisión de documentos del caso',
              'Reunión de cierre con el área de RR.HH.',
            ],
          },
          {
            name: 'Retención mensual',
            price: 'Desde cotización',
            body: 'Horas mensuales de asesoría continua y atención prioritaria.',
            features: [
              'Bolsa de horas mensual',
              'Atención prioritaria por WhatsApp y correo',
              'Revisión de contratos y liquidaciones',
              'Informe mensual de riesgos',
            ],
          },
          {
            name: 'Retención anual',
            price: 'Desde cotización',
            body: 'Cobertura completa anual con tarifa preferencial.',
            features: [
              'Todo lo de la retención mensual',
              'Auditoría laboral anual incluida',
              'Capacitaciones semestrales',
              'Defensa judicial con tarifa preferencial',
            ],
          },
        ],
      },
      {
        kind: 'cards',
        title: 'Sectores que atendemos',
        columns: 4,
        items: [
          {
            icon: 'wrench',
            title: 'Manufactura e industria',
            body: 'Turnos, horas extras y seguridad y salud en el trabajo.',
          },
          {
            icon: 'building',
            title: 'Construcción',
            body: 'Contratos por obra o labor y subcontratación.',
          },
          {
            icon: 'shop',
            title: 'Retail y comercio',
            body: 'Jornadas flexibles, dominicales y comisiones.',
          },
          {
            icon: 'stethoscope',
            title: 'Salud y farmacéutico',
            body: 'Turnos, disponibilidad y riesgo biológico.',
          },
          {
            icon: 'cpu',
            title: 'Tecnología y startups',
            body: 'Trabajo remoto, stock options y contratación internacional.',
          },
          {
            icon: 'truck',
            title: 'Transporte y logística',
            body: 'Jornadas especiales y conductores.',
          },
          {
            icon: 'banknote',
            title: 'Servicios financieros',
            body: 'Confidencialidad, compliance y cargos de confianza.',
          },
          {
            icon: 'graduation',
            title: 'Educación',
            body: 'Docentes, contratos por período académico y convivencia.',
          },
        ],
      },
      {
        kind: 'quotes',
        title: 'Casos de éxito',
        items: [
          {
            quote:
              'La auditoría laboral nos permitió corregir 40 contratos y cerrar el año sin una sola demanda nueva.',
            author: 'Directora de Gestión Humana',
            role: 'Compañía de manufactura, Bogotá',
          },
          {
            quote:
              'Reestructuramos tres plantas con acompañamiento jurídico en cada paso. Ninguna terminación fue demandada.',
            author: 'Gerente General',
            role: 'Grupo logístico, Medellín',
          },
          {
            quote:
              'Tener un abogado laboral disponible cada semana cambió la forma en que tomamos decisiones de personal.',
            author: 'COO',
            role: 'Empresa de tecnología, Cali',
          },
        ],
      },
    ],
    cta: {
      title: 'Solicita una propuesta para tu empresa.',
      body: 'Cuéntanos el tamaño de tu compañía y tu necesidad principal. Te enviamos una propuesta a la medida.',
      extraFields: ['empresa', 'cargo', 'nit', 'tamano'],
      submitLabel: 'Solicitar una propuesta',
    },
    related: ['contratos-de-trabajo', 'derecho-laboral-colectivo', 'derecho-laboral-individual'],
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);

export function requireService(slug: string): Service {
  const service = getService(slug);
  if (!service) throw new Error(`Servicio no encontrado: ${slug}`);
  return service;
}

export const serviceHref = (slug: string) => `/servicios/${slug}`;

export const consultaTypes = services.map((service) => service.shortTitle).concat('Otro');
