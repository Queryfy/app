export function getProducts(query: string) {
  return fetch(`https://us-central1-queryfy-c9513.cloudfunctions.net/query/?search=${query}`)
    .then(data => data.json());
}
