import format from 'date-fns/format'
import enIN from 'date-fns/locale/en-IN'

export function toStandardDate(date: string) {
  return format(new Date(date), 'PPP', { locale: enIN })
}
