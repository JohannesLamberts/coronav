import { PARTNER_IDS } from '@/config/partners'

export function getPartner(id) {
  const partner = PARTNER_IDS[id]
  if (!partner) {
    throw new Error(`No partner found for id '${id}'`)
  }
  return partner
}

export function getPartnerByRoute(route) {
  const { partner_id: partnerId } = route.query
  if (!partnerId) {
    return null
  }
  return getPartner(partnerId)
}
