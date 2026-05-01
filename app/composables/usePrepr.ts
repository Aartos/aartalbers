export function usePrepr() {
  const config = useRuntimeConfig()

  async function query<T>(graphqlQuery: string, variables?: Record<string, unknown>): Promise<T | null> {
    const token = config.public.preprToken
    if (!token) return null

    const response = await $fetch<{ data: T; errors?: Array<{ message: string }> }>(
      `https://graphql.prepr.io/${token}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: graphqlQuery, variables }),
      }
    )

    if (response.errors?.length) {
      console.warn('[Prepr]', response.errors[0]?.message)
    }

    return response.data ?? null
  }

  return { query }
}
