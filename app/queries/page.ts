export interface PreprAsset {
  url: string
}

export interface Page {
  _id: string
  title: string
  content: any[]
}

export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: String) {
    Page(slug: $slug) {
      _id
      title
      brand_name
      footer_copyright
      footer_links {
        __typename
        ... on Link {
          label
          url
          open_in_new_tab
        }
      }
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
