


export const request = async (
  method,
  endpoint,
  body
) => {
  const apiBaseUrl = process.env.REACT_APP_BACKEND_API_URL;

  if (!apiBaseUrl) {
    throw new Error('BACKEND_API is not defined in environment variables');
  }

  const url = `${apiBaseUrl}${endpoint}`;

  const options= {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body && (method === 'POST' || method === 'PATCH')) {
    options.body = JSON.stringify(body);
  }

  try {
    return await fetch(url, options);
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
};