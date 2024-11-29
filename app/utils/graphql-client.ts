export async function fetchGraphQL<T = any>(query: string, variables?: Record<string, any>) {
  console.log('GraphQL Request:', {
    url: 'https://directus.meineapp.uk/graphql',
    query,
    variables,
  });

  const response = await fetch('https://directus.meineapp.uk/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('GraphQL Error Response:', errorText);
    throw new Error(`GraphQL request failed: ${response.statusText}\n${errorText}`);
  }

  const json = await response.json();
  
  console.log('GraphQL Response:', json);

  if (json.errors) {
    console.error('GraphQL Errors:', json.errors);
    throw new Error(json.errors.map((e: any) => e.message).join('\n'));
  }

  return json.data as T;
}
