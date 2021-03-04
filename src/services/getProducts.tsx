export function getProducts(query: string) {
  return fetch(`http://localhost:8000/?search=${query}`)
    .then(data => data.json());
}
