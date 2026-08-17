(function () {
  const AUXILIO_TRANSPORTE_2026 = 249095;
  const TASA_INTERES_CESANTIAS = 0.12;

  const el = {
    salario: document.getElementById('calc-salario'),
    aux: document.getElementById('calc-aux'),
    inicio: document.getElementById('calc-inicio'),
    fin: document.getElementById('calc-fin'),
    vacaciones: document.getElementById('calc-vacaciones'),
    salarioPendiente: document.getElementById('calc-salario-pendiente'),
    boton: document.getElementById('calc-boton'),
    limpiar: document.getElementById('calc-limpiar'),
    resumen: document.getElementById('calc-resumen'),
    res: {
      cesantias: document.getElementById('res-cesantias'),
      intereses: document.getElementById('res-intereses'),
      prima: document.getElementById('res-prima'),
      vacaciones: document.getElementById('res-vacaciones'),
      salario: document.getElementById('res-salario'),
      total: document.getElementById('res-total')
    }
  };

  if (!el.boton) return;

  const formatoCOP = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  });

  function num(valueId) {
    const v = parseFloat(valueId.value);
    return isNaN(v) || v < 0 ? 0 : v;
  }

  function diasEntre(fechaA, fechaB) {
    const a = new Date(fechaA + 'T00:00:00');
    const b = new Date(fechaB + 'T00:00:00');
    const diff = (b - a) / 86400000;
    return diff >= 0 ? diff : -1;
  }

  function calcular() {
    const salario = num(el.salario);
    const inclAux = el.aux.checked;
    const aux = inclAux ? AUXILIO_TRANSPORTE_2026 : 0;
    const baseSalarial = salario + aux;

    const dias = el.inicio.value && el.fin.value ? diasEntre(el.inicio.value, el.fin.value) : -1;
    if (dias <= 0) {
      el.resumen.innerHTML = '<p class="calc-empty is-warning"><strong>Faltan datos.</strong> Ingresa el salario y fechas válidas de ingreso y retiro (la fecha de retiro debe ser posterior a la de ingreso).</p>';
      Object.values(el.res).forEach(r => { r.textContent = '—'; });
      return;
    }

    const cesantias = (salario * dias) / 360;
    const intereses = cesantias * TASA_INTERES_CESANTIAS;
    const prima = (baseSalarial * dias) / 360;
    const diasVacacionesDisfrutadas = num(el.vacaciones);
    const diasVacaciones = Math.max(0, (dias / 360) * 15 - diasVacacionesDisfrutadas);
    const vacaciones = (salario / 30) * diasVacaciones;
    const salarioPendiente = (salario / 30) * num(el.salarioPendiente);
    const total = cesantias + intereses + prima + vacaciones + salarioPendiente;

    const anos = Math.floor(dias / 360);
    const meses = Math.floor((dias % 360) / 30);
    const diasResto = Math.round(dias % 30);
    let periodo = `${anos} año${anos !== 1 ? 's' : ''}`;
    if (meses) periodo += `, ${meses} mes${meses !== 1 ? 'es' : ''}`;
    if (diasResto) periodo += ` y ${diasResto} día${diasResto !== 1 ? 's' : ''}`;

    el.resumen.innerHTML = `
      <div class="calc-resumen-row">
        <span>Días trabajados</span>
        <strong>${dias}</strong>
      </div>
      <div class="calc-resumen-row">
        <span>Periodo equivalente</span>
        <strong>${periodo}</strong>
      </div>
      <div class="calc-resumen-row">
        <span>Salario mensual base</span>
        <strong>${formatoCOP.format(salario)}</strong>
      </div>`;

    el.res.cesantias.textContent = formatoCOP.format(cesantias);
    el.res.intereses.textContent = formatoCOP.format(intereses);
    el.res.prima.textContent = formatoCOP.format(prima);
    el.res.vacaciones.textContent = formatoCOP.format(vacaciones);
    el.res.salario.textContent = formatoCOP.format(salarioPendiente);
    el.res.total.textContent = formatoCOP.format(total);
  }

  function limpiar() {
    el.salario.value = '';
    el.aux.checked = true;
    el.inicio.value = '';
    el.fin.value = '';
    el.vacaciones.value = 0;
    el.salarioPendiente.value = 0;
    el.resumen.innerHTML = '<p class="calc-empty">Completa el formulario y presiona <strong>Calcular</strong> para ver tu liquidación estimada.</p>';
    Object.values(el.res).forEach(r => { r.textContent = '—'; });
  }

  el.boton.addEventListener('click', calcular);
  el.limpiar.addEventListener('click', limpiar);
  el.inicio.addEventListener('change', () => {
    if (el.inicio.value && !el.fin.value) {
      el.fin.value = el.inicio.value;
    }
  });
})();