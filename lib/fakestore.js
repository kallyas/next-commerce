const API_BASE_URL = "https://fakestoreapi.com";

async function fetchStore(path, fallback = null) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    if (fallback !== null) {
      return fallback;
    }

    throw new Error(`Fake Store API request failed for ${path}`);
  }

  const text = await response.text();

  if (!text.trim()) {
    if (fallback !== null) {
      return fallback;
    }

    throw new Error(`Fake Store API returned an empty response for ${path}`);
  }

  try {
    return JSON.parse(text);
  } catch (error) {
    if (fallback !== null) {
      return fallback;
    }

    throw new Error(`Fake Store API returned invalid JSON for ${path}: ${error.message}`);
  }
}

export function fetchProducts() {
  return fetchStore("/products", []);
}

export function fetchProduct(id) {
  return fetchStore(`/products/${id}`, null);
}
