'use client';

import { useState } from 'react';
import { Calculator, Info } from 'lucide-react';
import { Button, ButtonLink } from '@/components/ui/Button';
import { formatCop } from '@/lib/utils';

type ContractType = 'indefinido' | 'fijo' | 'obra';
type Cause = 'sin-justa-causa' | 'justa-causa' | 'renuncia' | 'vencimiento';

export type LiquidacionInput = {
  startDate: string;
  endDate: string;
  monthlySalary: number;
  contractType: ContractType;
  cause: Cause;
  /** Días que faltaban para terminar el contrato a término fijo o la obra. */
  remainingDays?: number;
  includeTransportAllowance?: boolean;
};

export type LiquidacionResult = {
  days: number;
  base: number;
  cesantias: number;
  interesesCesantias: number;
  prima: number;
  vacaciones: number;
  indemnizacion: number;
  total: number;
};

/** Auxilio de transporte 2026 (referencia). */
export const AUXILIO_TRANSPORTE = 200000;

export const daysBetween = (start: string, end: string) => {
  const startMs = Date.parse(`${start}T00:00:00Z`);
  const endMs = Date.parse(`${end}T00:00:00Z`);
  if (Number.isNaN(startMs) || Number.isNaN(endMs)) return 0;
  return Math.max(0, Math.round((endMs - startMs) / 86_400_000));
};

export function calcularLiquidacion(input: LiquidacionInput): LiquidacionResult {
  const days = daysBetween(input.startDate, input.endDate);
  const salary = Math.max(0, input.monthlySalary);
  const base = input.includeTransportAllowance ? salary + AUXILIO_TRANSPORTE : salary;

  const cesantias = (base * days) / 360;
  const interesesCesantias = cesantias * 0.12 * (days / 360);
  const prima = (base * days) / 360;
  const vacaciones = (salary * days) / 720;

  let indemnizacion = 0;
  if (input.cause === 'sin-justa-causa') {
    if (input.contractType === 'indefinido') {
      const dailySalary = salary / 30;
      if (days <= 360) {
        indemnizacion = dailySalary * 30 * (days / 360);
      } else {
        const extraYears = (days - 360) / 360;
        indemnizacion = dailySalary * (30 + 20 * extraYears);
      }
    } else {
      const remaining = Math.max(input.contractType === 'obra' ? 15 : 0, input.remainingDays ?? 0);
      indemnizacion = (salary / 30) * remaining;
    }
  }

  const total = cesantias + interesesCesantias + prima + vacaciones + indemnizacion;
  return { days, base, cesantias, interesesCesantias, prima, vacaciones, indemnizacion, total };
}

const contractLabels: Record<ContractType, string> = {
  indefinido: 'Término indefinido',
  fijo: 'Término fijo',
  obra: 'Obra o labor',
};

const causeLabels: Record<Cause, string> = {
  'sin-justa-causa': 'Despido sin justa causa',
  'justa-causa': 'Despido con justa causa',
  renuncia: 'Renuncia voluntaria',
  vencimiento: 'Vencimiento del plazo o de la obra',
};

export function LiquidacionCalculator() {
  const [form, setForm] = useState({
    startDate: '',
    endDate: '',
    monthlySalary: '',
    contractType: 'indefinido' as ContractType,
    cause: 'sin-justa-causa' as Cause,
    remainingDays: '',
    includeTransportAllowance: true,
  });
  const [result, setResult] = useState<LiquidacionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const needsRemainingDays = form.contractType !== 'indefinido' && form.cause === 'sin-justa-causa';

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const salary = Number(form.monthlySalary);
    const days = daysBetween(form.startDate, form.endDate);

    if (!form.startDate || !form.endDate || days <= 0) {
      setResult(null);
      setError('Revisa las fechas: la terminación debe ser posterior al inicio del contrato.');
      return;
    }
    if (!Number.isFinite(salary) || salary <= 0) {
      setResult(null);
      setError('Ingresa un salario mensual válido.');
      return;
    }

    setError(null);
    setResult(
      calcularLiquidacion({
        startDate: form.startDate,
        endDate: form.endDate,
        monthlySalary: salary,
        contractType: form.contractType,
        cause: form.cause,
        remainingDays: Number(form.remainingDays) || 0,
        includeTransportAllowance: form.includeTransportAllowance,
      }),
    );
  }

  return (
    <div className="rounded-sm border border-gold-600/50 bg-gradient-to-br from-black-800 to-gold-600/10 p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <Calculator className="h-7 w-7 text-gold-500" aria-hidden />
        <h3 className="font-serif text-2xl font-semibold text-gold-400">
          Calculadora de liquidación
        </h3>
      </div>

      <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="startDate">
            Fecha de inicio del contrato
          </label>
          <input
            id="startDate"
            type="date"
            className="field"
            value={form.startDate}
            onChange={(event) => setForm({ ...form, startDate: event.target.value })}
            required
          />
        </div>
        <div>
          <label className="field-label" htmlFor="endDate">
            Fecha de terminación
          </label>
          <input
            id="endDate"
            type="date"
            className="field"
            value={form.endDate}
            onChange={(event) => setForm({ ...form, endDate: event.target.value })}
            required
          />
        </div>
        <div>
          <label className="field-label" htmlFor="monthlySalary">
            Salario mensual (COP)
          </label>
          <input
            id="monthlySalary"
            type="number"
            min={0}
            step={1000}
            inputMode="numeric"
            className="field"
            value={form.monthlySalary}
            onChange={(event) => setForm({ ...form, monthlySalary: event.target.value })}
            required
          />
        </div>
        <div>
          <label className="field-label" htmlFor="contractType">
            Tipo de contrato
          </label>
          <select
            id="contractType"
            className="field"
            value={form.contractType}
            onChange={(event) =>
              setForm({ ...form, contractType: event.target.value as ContractType })
            }
          >
            {Object.entries(contractLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className={needsRemainingDays ? undefined : 'sm:col-span-2'}>
          <label className="field-label" htmlFor="cause">
            Causa de terminación
          </label>
          <select
            id="cause"
            className="field"
            value={form.cause}
            onChange={(event) => setForm({ ...form, cause: event.target.value as Cause })}
          >
            {Object.entries(causeLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        {needsRemainingDays ? (
          <div>
            <label className="field-label" htmlFor="remainingDays">
              Días que faltaban para terminar el contrato
            </label>
            <input
              id="remainingDays"
              type="number"
              min={0}
              className="field"
              value={form.remainingDays}
              onChange={(event) => setForm({ ...form, remainingDays: event.target.value })}
            />
          </div>
        ) : null}

        <label className="flex items-center gap-3 text-xs text-gray-300 sm:col-span-2">
          <input
            type="checkbox"
            className="h-4 w-4 accent-gold-500"
            checked={form.includeTransportAllowance}
            onChange={(event) =>
              setForm({ ...form, includeTransportAllowance: event.target.checked })
            }
          />
          Incluir auxilio de transporte en la base de cesantías y prima (salarios de hasta 2 SMLMV).
        </label>

        <Button type="submit" size="lg" className="sm:col-span-2">
          Calcular liquidación
        </Button>
      </form>

      {error ? (
        <p role="alert" className="mt-4 text-sm text-gold-400">
          {error}
        </p>
      ) : null}

      {result ? (
        <div className="mt-8" aria-live="polite">
          <h4 className="mb-3 font-serif text-lg text-gold-400">
            Estimado para {result.days} días de servicio
          </h4>
          <dl className="divide-y divide-black-600 overflow-hidden rounded-sm border border-black-600 bg-black-900">
            <Row label="Auxilio de cesantías" value={result.cesantias} />
            <Row label="Intereses a las cesantías" value={result.interesesCesantias} />
            <Row label="Prima de servicios" value={result.prima} />
            <Row label="Vacaciones compensadas" value={result.vacaciones} />
            <Row label="Indemnización" value={result.indemnizacion} />
            <div className="flex items-center justify-between gap-4 bg-black-800 px-5 py-4">
              <dt className="font-serif text-lg text-white">Total estimado</dt>
              <dd className="font-display text-xl font-bold text-gold-500">
                {formatCop(result.total)}
              </dd>
            </div>
          </dl>
        </div>
      ) : null}

      <p className="mt-6 flex gap-2 text-xs leading-relaxed text-gray-300">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden />
        Este es un estimado informativo y no constituye asesoría jurídica. El cálculo real depende
        de tu contrato, los pagos variables y la causa de terminación. Consulta con nuestros
        abogados para una liquidación precisa.
      </p>

      <ButtonLink href="/contacto" variant="outline" className="mt-5 w-full sm:w-auto">
        Verifica tu liquidación con un abogado
      </ButtonLink>
    </div>
  );
}

function Row({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between gap-4 px-5 py-3">
      <dt className="text-sm text-gray-300">{label}</dt>
      <dd className="text-sm font-semibold text-white">{formatCop(value)}</dd>
    </div>
  );
}
