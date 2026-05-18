export interface PreprAsset {
    url: string
}

export interface Page {
    _id: string
    title: string
    content: any[]
}

export interface ValueCard {
    icon: string
    title: string
    description: string
}

export interface CompetencyCard {
    category: string
    title: string
    description: string
    image: { url: string }
    tags: { body: string }[]
    background_style?: 'white' | 'secondary' | 'primary'
    is_featured: boolean
}

export interface Link {
    label: string;
    url: string;
    open_in_new_tab?: boolean
}

export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: String) {
    Page(slug: $slug) {
      _id
      title
      content {
        __typename
        ... on HeroSection {
          badge
          headline
          subheading
          portrait { url(width: 800) }
          stats_number
          stats_label
          stats_subtitle
          primary_cta
          secondary_cta
          links {
            __typename
            ... on Link {
              label
              url
              open_in_new_tab
            }
          }
        }
        ... on LeadershipPhilosophy {
          headline
          body
          value_cards {
            __typename
            ... on ValueCard {
              icon
              title
              description
            }
          }
          quote
          quote_attribution
        }
        ... on CoreCompetencies {
          headline
          subtitle
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
        }
        ... on ContactSection {
          headline
          subheading
          email
          location
        }
      }
    }
  }
`
