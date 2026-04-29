export interface PreprAsset {
  url: string
}

export interface PreprTag {
  body: string
}

export interface CompetencyCardItem {
  __typename: 'CompetencyCard'
  category: string
  title: string
  description: string
  image: PreprAsset | null
  tags: PreprTag[]
  background_style: 'white' | 'secondary' | 'primary'
  is_featured: boolean
}

export interface ValueCardItem {
  __typename: 'ValueCard'
  icon: string
  title: string
  description: string
}

export interface SocialLinkItem {
  __typename: 'SocialLink'
  label: string
  url: string
}

export interface HomePage {
  hero_badge: string
  hero_headline: string
  hero_subheading: string
  hero_portrait: PreprAsset | null
  hero_stats_number: string
  hero_stats_label: string
  hero_stats_subtitle: string
  hero_primary_cta: string
  hero_secondary_cta: string
  competencies_headline: string
  competencies_subtitle: string
  competency_cards: CompetencyCardItem[]
  philosophy_headline: string
  philosophy_body: string
  philosophy_value_cards: ValueCardItem[]
  philosophy_quote: string
  philosophy_quote_attribution: string
  contact_headline: string
  contact_subheading: string
  contact_email: string
  contact_location: string
  brand_name: string
  footer_copyright: string
  footer_social_links: SocialLinkItem[]
  scripts: string
}

export const GET_HOMEPAGE = `
  query GetHomePage {
    HomePage {
      hero_badge
      hero_headline
      hero_subheading
      hero_portrait { url(width: 800) }
      hero_stats_number
      hero_stats_label
      hero_stats_subtitle
      hero_primary_cta
      hero_secondary_cta
      competencies_headline
      competencies_subtitle
      competency_cards {
        __typename
        ... on CompetencyCard {
          category
          title
          description
          image { url(width: 800) }
          tags { body }
          background_style
          is_featured
        }
      }
      philosophy_headline
      philosophy_body
      philosophy_value_cards {
        __typename
        ... on ValueCard {
          icon
          title
          description
        }
      }
      philosophy_quote
      philosophy_quote_attribution
      contact_headline
      contact_subheading
      contact_email
      contact_location
      brand_name
      footer_copyright
      scripts
      footer_social_links {
        __typename
        ... on SocialLink {
          label
          url
        }
      }
    }
  }
`
