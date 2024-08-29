
const methods = ['GET', 'POST', 'PATCH', 'DELETE'];
const apiBaseUrl = process.env.REACT_APP_BACKEND_API_URL;

export const request = async (
  method,
  endpoint,
  body
) => {

  if (!methods.includes(method)) {
    throw new Error(`Method ${method} is not allowed`);
  }

  if (!apiBaseUrl) {
    throw new Error('REACT_APP_BACKEND_API_URL is not defined in environment variables');
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
  console.log(method)

  try {
    return await fetch(url, options);
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
};