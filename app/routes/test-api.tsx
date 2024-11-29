import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  try {
    // Make a direct fetch to the API without using our client
    const response = await fetch('https://directus.meineapp.uk/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query TestQuery {
            Produkte {
              Produkttitel
              Slug
              Preis
            }
          }
        `
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed: ${response.status} ${response.statusText}\n${errorText}`);
    }

    const data = await response.json();
    return json({
      success: true,
      responseStatus: response.status,
      responseHeaders: Object.fromEntries(response.headers.entries()),
      data
    });
  } catch (error) {
    console.error('API Test Error:', error);
    return json({
      success: false,
      error: error.message,
      errorStack: error.stack
    }, { status: 500 });
  }
}

export default function TestApi() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">API Test Results</h1>
      
      {data.success ? (
        <>
          <h2 className="text-xl font-semibold mb-2">Response Status: {data.responseStatus}</h2>
          <h3 className="text-lg font-semibold mb-2">Response Headers:</h3>
          <pre className="bg-gray-100 p-4 rounded mb-4">
            {JSON.stringify(data.responseHeaders, null, 2)}
          </pre>
          <h3 className="text-lg font-semibold mb-2">Data:</h3>
          <pre className="bg-gray-100 p-4 rounded">
            {JSON.stringify(data.data, null, 2)}
          </pre>
        </>
      ) : (
        <div className="text-red-600">
          <h2 className="text-xl font-semibold mb-2">Error:</h2>
          <pre className="bg-red-50 p-4 rounded mb-4">
            {data.error}
          </pre>
          <h3 className="text-lg font-semibold mb-2">Stack Trace:</h3>
          <pre className="bg-red-50 p-4 rounded text-sm">
            {data.errorStack}
          </pre>
        </div>
      )}
    </div>
  );
}
