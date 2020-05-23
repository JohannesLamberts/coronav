export const DIGITALES_WARTEZIMMER = {
  id: '10',
  name: 'Digitales Wartezimmer',
  logo: require('@/assets/images/logo_digitales_wartezimmer.svg'),
  resultCallbackUrl: 'https://digitales-wartezimmer.org/callbacks/coronav',
  resultComponent: () =>
    import('@/components/partners/result-digitales-wartezimmer')
}

export const PARTNER_LIST = [DIGITALES_WARTEZIMMER]

export const PARTNER_QUERY_PARAM = 'partner_id'
