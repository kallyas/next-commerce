const API_BASE_URL = "https://fakestoreapi.com";

async function fetchStore(path) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Fake Store API request failed for ${path}`);
  }

  return response.json();
}

export function fetchProducts() {
  return fetchStore("/products");
}

export function fetchProduct(id) {
  return fetchStore(`/products/${id}`);
}
