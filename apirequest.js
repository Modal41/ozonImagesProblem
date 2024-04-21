let client = "1830***"
let apiKey = "fdf68ae7-4416-****-****-*******"

/*
I am uploading a total of 4 images as an image array, but it only uploads 1 of them and gives the error that the others could not be downloaded. What is the problem?
Error is : We could not find any photos of the product. Upload an image to the product card
*/


let items = [
  {
    attributes: [
      { id: 85, values: [ { dictionary_value_id: '5055881' } ] }
      { id: 8229, values: [ { dictionary_value_id: '970890702' } ] }
      { id: 9048, values: [ { value: 'cimbicme' } ] }
      { id: 4385, values: [ { value: '24' } ] }
      { id: 4389, values: [ { dictionary_value_id: '90305' } ] }
      { id: 4480, values: [ { dictionary_value_id: '970601662' } ] }
      { id: 6088, values: [ { value: '2' } ] }
      { id: 6132, values: [ { value: '20' } ] }
      { id: 10060, values: [ { dictionary_value_id: '970676928' } ] }
      { id: 10096, values: [ { dictionary_value_id: '61602' } ] }
      { id: 10400, values: [ { dictionary_value_id: '970716398' } ] }
      { id: 10463, values: [ { dictionary_value_id: '970724830' } ] }
      { id: 10528, values: [ { dictionary_value_id: '970701880' } ] }
      { id: 21126, values: [ { dictionary_value_id: '971278150' } ] }
    ],
    barcode: '1002264587',
    category_id: 17032688,
    color_image: 'https://cdn.dsmcdn.com//ty372/product/media/images/20220329/9/77994318/13584796/1/1_org_zoom.jpg',
    complex_attributes: [],
    currency_code: 'USD',
    depth: '110',
    dimension_unit: 'mm',
    height: '120',
    images: [
      'https://cdn.dsmcdn.com//ty372/product/media/images/20220329/9/77994318/13584796/1/1_org_zoom.jpg',
      'https://cdn.dsmcdn.com//ty372/product/media/images/20220329/9/77994318/13584796/2/2_org_zoom.jpg',
      'https://cdn.dsmcdn.com//ty372/product/media/images/20220329/9/77994318/13584796/3/3_org_zoom.jpg',
      'https://cdn.dsmcdn.com//ty376/product/media/images/20220329/9/77994318/13584796/4/4_org_zoom.jpg'
    ],
    name: 'Электрическая газонокосилка Arm 32',
    offer_id: '1002264587',
    old_price: '240.1245',
    premium_price: '177.87',
    price: '177.87',
    vat: '0',
    weight: '2000',
    weight_unit: 'g',
    width: '160'
  }
]



url = 'https://api-seller.ozon.ru/v2/product/import'
const headers = {
  'Client-Id': client,
  'Api-Key': apiKey
}
const data = {
  "items": items
}
const sendPost = await axios.post(url, data, { headers })
