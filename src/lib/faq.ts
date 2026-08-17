import type { IconName } from '@/components/ui/Icon';

export type FaqCategory = {
  id: string;
  title: string;
  icon: IconName;
  relatedService?: string;
  items: { q: string; a: string }[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: 'contratos',
    title: 'Contratos de trabajo',
    icon: 'contract',
    relatedService: 'contratos-de-trabajo',
    items: [
      {
        q: '¿Cuál es la diferencia entre contrato a término fijo e indefinido?',
        a: 'El contrato a término fijo tiene una fecha de terminación pactada por escrito y se prorroga automáticamente si no hay preaviso de 30 días. El indefinido no tiene fecha de vencimiento y solo puede terminarse por justa causa o pagando indemnización.',
      },
      {
        q: '¿Puede mi empleador cambiar unilateralmente mi contrato?',
        a: 'El empleador puede ejercer el ius variandi sobre aspectos accesorios (funciones o lugar), pero no puede desmejorar condiciones esenciales como el salario, la jornada o la categoría sin tu consentimiento. Un cambio que te perjudique puede constituir justa causa para renunciar con derecho a indemnización.',
      },
      {
        q: '¿El período de prueba tiene límite de duración?',
        a: 'Sí: máximo dos meses y debe constar por escrito. En contratos a término fijo inferiores a un año no puede exceder la quinta parte del plazo pactado.',
      },
      {
        q: '¿Un contrato verbal tiene validez legal en Colombia?',
        a: 'Sí. El contrato de trabajo puede ser verbal y genera todas las obligaciones legales. Sin embargo, el período de prueba, el salario integral y el contrato a término fijo requieren constancia escrita.',
      },
      {
        q: '¿Qué pasa si trabajo sin contrato escrito?',
        a: 'Si existió prestación personal del servicio, subordinación y remuneración, hay contrato de trabajo aunque no haya documento. Puedes reclamar prestaciones sociales y aportes a seguridad social probando la relación con testigos, correos, chats o transferencias.',
      },
    ],
  },
  {
    id: 'despidos',
    title: 'Despidos y liquidaciones',
    icon: 'briefcase',
    relatedService: 'despidos-y-liquidaciones',
    items: [
      {
        q: '¿Qué es el despido sin justa causa y cuánto me deben pagar?',
        a: 'Es la terminación unilateral del contrato sin que exista una causal legal probada. En contratos indefinidos con salario inferior a 10 SMLMV la indemnización es de 30 días de salario por el primer año y 20 días por cada año adicional, además de la liquidación completa.',
      },
      {
        q: '¿Cuáles son las justas causas de despido según el Código Laboral?',
        a: 'El artículo 62 del CST enumera causales como el engaño en la contratación, la violencia o el grave incumplimiento de obligaciones. El empleador debe informarlas por escrito al momento del despido y probarlas; no puede alegar causas nuevas después.',
      },
      {
        q: '¿Qué incluye una liquidación laboral en Colombia?',
        a: 'Cesantías, intereses a las cesantías (12% anual), prima de servicios, vacaciones compensadas y los salarios pendientes. Si el despido fue sin justa causa, se suma la indemnización.',
      },
      {
        q: '¿Cuánto tiempo tiene el empleador para pagarme la liquidación?',
        a: 'Debe pagarla a la terminación del contrato. El retardo puede generar la indemnización moratoria del artículo 65 del CST: un día de salario por cada día de mora durante los primeros 24 meses.',
      },
      {
        q: '¿Qué pasa si me despiden estando en incapacidad médica?',
        a: 'Existe estabilidad laboral reforzada. El despido de un trabajador en situación de debilidad manifiesta requiere autorización del inspector de trabajo; sin ella el despido es ineficaz y procede el reintegro más una indemnización de 180 días de salario.',
      },
      {
        q: '¿Puedo renunciar y aun así cobrar indemnización?',
        a: 'Sí, mediante la renuncia motivada o despido indirecto: cuando el empleador incurre en una causal del artículo 62 (mora salarial, acoso, desmejora de condiciones) el trabajador puede terminar el contrato y reclamar la indemnización. Es indispensable dejar constancia escrita de las razones.',
      },
    ],
  },
  {
    id: 'pensiones',
    title: 'Seguridad social y pensiones',
    icon: 'pension',
    relatedService: 'seguridad-social-y-pensiones',
    items: [
      {
        q: '¿Cuántas semanas de cotización necesito para pensionarme?',
        a: 'En el Régimen de Prima Media (Colpensiones) se exigen 1.300 semanas y 62 años en hombres o 57 en mujeres. En el régimen de ahorro individual depende del capital acumulado o del Fondo de Garantía de Pensión Mínima.',
      },
      {
        q: '¿Qué hago si Colpensiones niega mi pensión?',
        a: 'La resolución de negativa admite recursos de reposición y apelación en los términos indicados en el acto administrativo. Agotada la vía administrativa se demanda ante el juez laboral. Es frecuente que la negativa se deba a semanas no reportadas por empleadores, lo que se puede corregir.',
      },
      {
        q: '¿Puedo pensionarme con semanas cotizadas en el sector informal?',
        a: 'Si existió una relación laboral con subordinación, puedes demandar al empleador para que pague los aportes omitidos (cálculo actuarial). Los aportes como independiente también cuentan si fueron efectivamente pagados.',
      },
      {
        q: '¿Qué es la pensión de invalidez y cómo se calcula?',
        a: 'Se reconoce con una pérdida de capacidad laboral igual o superior al 50% y 50 semanas cotizadas en los tres años anteriores a la estructuración. El monto oscila entre el 45% y el 75% del ingreso base de liquidación según las semanas y el porcentaje de pérdida.',
      },
      {
        q: '¿Puedo trasladarme de AFP privada a Colpensiones?',
        a: 'Sí, cada cinco años y hasta diez años antes de la edad de pensión. Conviene analizar el traslado con proyecciones: es una decisión de alto impacto y, en general, irreversible después de ese límite.',
      },
      {
        q: '¿Qué es la indemnización sustitutiva de la pensión?',
        a: 'Un pago único para quien alcanza la edad de pensión sin completar las semanas requeridas y decide no seguir cotizando. Se calcula sobre las semanas efectivamente aportadas y su salario base.',
      },
    ],
  },
  {
    id: 'acoso',
    title: 'Acoso laboral',
    icon: 'shield',
    relatedService: 'acoso-laboral',
    items: [
      {
        q: '¿Qué conductas constituyen acoso laboral según la Ley 1010?',
        a: 'Maltrato, persecución, discriminación, entorpecimiento, inequidad y desprotección laboral, siempre que sean conductas persistentes y demostrables dirigidas a infundir miedo, causar perjuicio o inducir la renuncia.',
      },
      {
        q: '¿Cómo denuncio el acoso laboral en mi empresa?',
        a: 'Primero por escrito ante el Comité de Convivencia Laboral, solicitando copia radicada. Si la empresa no actúa o la conducta persiste, se radica queja ante la Inspección de Trabajo del Ministerio de Trabajo.',
      },
      {
        q: '¿Qué es el Comité de Convivencia Laboral?',
        a: 'Un órgano obligatorio en toda empresa, con igual número de representantes del empleador y de los trabajadores, encargado de recibir y tramitar las quejas de acoso laboral y promover medidas preventivas.',
      },
      {
        q: '¿El acoso laboral puede ser entre compañeros (horizontal)?',
        a: 'Sí. La Ley 1010 cobija el acoso ejercido por jefes, compañeros del mismo nivel e incluso subalternos. La responsabilidad del empleador surge cuando conoce la situación y no adopta medidas.',
      },
      {
        q: '¿Qué pruebas necesito para demostrar acoso laboral?',
        a: 'Correos, mensajes, memorandos, evaluaciones de desempeño, testimonios de compañeros, historia clínica o soportes psicológicos y una bitácora de hechos con fecha, hora y personas presentes.',
      },
    ],
  },
  {
    id: 'salarios',
    title: 'Horas extras y salarios',
    icon: 'money',
    relatedService: 'derecho-laboral-individual',
    items: [
      {
        q: '¿Cómo se calculan las horas extras diurnas y nocturnas?',
        a: 'La hora extra diurna se paga con un recargo del 25% sobre la hora ordinaria y la nocturna con el 75%. El trabajo nocturno ordinario tiene recargo del 35% y el dominical o festivo del 75%.',
      },
      {
        q: '¿Mi empleador puede obligarme a trabajar horas extra?',
        a: 'El trabajo suplementario requiere autorización y no puede exceder dos horas diarias ni doce semanales. Toda hora extra debe pagarse; los acuerdos de renuncia a su pago son ineficaces.',
      },
      {
        q: '¿Qué es el salario integral y cuándo aplica?',
        a: 'Aplica para salarios iguales o superiores a diez salarios mínimos más un factor prestacional mínimo del 30%. Debe pactarse por escrito y remunera de antemano prestaciones y recargos, salvo vacaciones.',
      },
      {
        q: '¿Cuándo se pierde el auxilio de transporte?',
        a: 'Cuando el salario supera dos salarios mínimos, cuando la empresa suministra el transporte, o durante los períodos en que no se presta el servicio (vacaciones o incapacidad, por ejemplo).',
      },
      {
        q: '¿El salario emocional tiene valor legal en Colombia?',
        a: 'Los beneficios no monetarios no reemplazan las obligaciones laborales. Si un pago es habitual y retribuye directamente el servicio, puede ser considerado salario para efectos de prestaciones y aportes.',
      },
    ],
  },
  {
    id: 'fueros',
    title: 'Fueros de protección especial',
    icon: 'baby',
    relatedService: 'derecho-laboral-individual',
    items: [
      {
        q: '¿Qué es el fuero de maternidad y hasta cuándo aplica?',
        a: 'Prohíbe el despido de la trabajadora embarazada y durante los tres meses posteriores al parto sin autorización del inspector de trabajo. El despido sin autorización es ineficaz y genera reintegro más 60 días de salario.',
      },
      {
        q: '¿El fuero de paternidad existe en Colombia?',
        a: 'La jurisprudencia constitucional lo reconoce cuando el padre es el único proveedor del hogar y la madre depende económicamente de él, extendiendo la protección frente al despido.',
      },
      {
        q: '¿Qué es la estabilidad laboral reforzada?',
        a: 'Protección para trabajadores en situación de debilidad manifiesta (discapacidad, enfermedad o incapacidades prolongadas). Su despido requiere autorización del inspector de trabajo.',
      },
      {
        q: '¿Los trabajadores en incapacidad tienen protección contra el despido?',
        a: 'Sí. Un despido durante la incapacidad se presume discriminatorio; sin autorización del inspector procede el reintegro, el pago de salarios dejados de percibir y una indemnización de 180 días de salario.',
      },
      {
        q: '¿Qué es el fuero sindical?',
        a: 'Garantía que impide despedir, desmejorar o trasladar a determinados directivos y fundadores sindicales sin previa autorización judicial mediante el proceso de levantamiento de fuero.',
      },
    ],
  },
  {
    id: 'empresas',
    title: 'Para empresas',
    icon: 'building',
    relatedService: 'consultoria-empresarial-hr',
    items: [
      {
        q: '¿Cuándo es obligatorio tener un Reglamento Interno de Trabajo?',
        a: 'Para empresas comerciales con más de cinco trabajadores, industriales con más de diez y agrícolas o ganaderas con más de veinte. Debe publicarse y socializarse con los trabajadores.',
      },
      {
        q: '¿Qué es el Comité de Convivencia Laboral y cuándo es obligatorio?',
        a: 'Es obligatorio para todas las empresas públicas y privadas. Se conforma con representantes del empleador y de los trabajadores, se reúne periódicamente y lleva actas de cada caso.',
      },
      {
        q: '¿Cómo hacer una reestructuración de planta de forma legal?',
        a: 'Requiere análisis de causales, cumplimiento de fueros, cálculo correcto de indemnizaciones y, en despidos colectivos que superen los porcentajes legales, autorización previa del Ministerio de Trabajo.',
      },
      {
        q: '¿Cuáles son las obligaciones en seguridad social del empleador?',
        a: 'Afiliar y pagar aportes a salud, pensión, riesgos laborales y parafiscales, implementar el Sistema de Gestión de Seguridad y Salud en el Trabajo y reportar novedades oportunamente.',
      },
      {
        q: '¿Qué riesgos tiene contratar por prestación de servicios?',
        a: 'Si en la práctica hay subordinación, un juez puede declarar el contrato realidad y condenar al pago de prestaciones, aportes, sanción moratoria e indemnizaciones retroactivas.',
      },
    ],
  },
];

export const allFaqItems = faqCategories.flatMap((category) => category.items);
