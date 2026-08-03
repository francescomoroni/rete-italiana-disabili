export const MIN_DONATION_EUR = 1
export const MAX_DONATION_EUR = 5000
export const QUICK_AMOUNTS = [10, 25, 50, 100] as const

export type DonationAmountError =
  | 'required'
  | 'invalid'
  | 'min'
  | 'max'
  | 'decimals'

export function donationAmountErrorMessage(error: DonationAmountError): string {
  switch (error) {
    case 'required':
      return 'Inserisci un importo per continuare.'
    case 'invalid':
      return 'Inserisci un importo valido.'
    case 'min':
      return `L'importo minimo è €${MIN_DONATION_EUR}.`
    case 'max':
      return `L'importo massimo è €${MAX_DONATION_EUR}.`
    case 'decimals':
      return 'Usa al massimo due decimali.'
  }
}

/**
 * Validates a donation amount in euro.
 * Accepts integers or values with at most two decimal places.
 */
export function validateDonationAmount(
  value: unknown,
): { ok: true; amount: number; unitAmount: number } | { ok: false; error: DonationAmountError } {
  if (value === null || value === undefined || value === '') {
    return { ok: false, error: 'required' }
  }

  const amount =
    typeof value === 'number'
      ? value
      : typeof value === 'string'
        ? Number(value.trim().replace(',', '.'))
        : Number.NaN

  if (!Number.isFinite(amount)) {
    return { ok: false, error: 'invalid' }
  }

  if (amount < MIN_DONATION_EUR) {
    return { ok: false, error: 'min' }
  }

  if (amount > MAX_DONATION_EUR) {
    return { ok: false, error: 'max' }
  }

  const centsExact = amount * 100
  const unitAmount = Math.round(centsExact)

  if (Math.abs(centsExact - unitAmount) > 1e-6) {
    return { ok: false, error: 'decimals' }
  }

  return { ok: true, amount: unitAmount / 100, unitAmount }
}
