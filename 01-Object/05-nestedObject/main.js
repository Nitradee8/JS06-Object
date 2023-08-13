// - ให้เขียนโค้ดเพื่อ log province ของ product1
// - หากมี product2 เป็น object 
// ว่าง ให้ log province ของ 
// product2 โดยใช้คำสั่งเดียวกับ 
// product1 
// - (หาก Error ให้หาวิธีแก้)

const product1 = {
  name: 'Water',
  distributor: {
    name: 'Giraffe Water Company',
    address: {
      street: 'Phetchaburi',
      subdistrict: 'Thanonphetchaburi',
      district: 'Ratchathewi',
      province: 'Bangkok'
    }
  }
};

console.log('Province of product1:', product1.distributor.address.province);
const product2 = {};
  if (product2.distributor && product2.distributor.address && product2.distributor.address.province) {
      console.log('Province of product2:', product2.distributor.address.province);
      } else {
        console.log('Province of product2: Not available');
      }
