export default function getProductData(productBarcodes, eventId) {
  if (productBarcodes) {
    return fetch(
      `${process.env.API_URL}/products?barcodes=${productBarcodes.join(
        ','
      )}&eventId=${eventId}`
    )
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }
}
