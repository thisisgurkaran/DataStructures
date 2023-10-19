// class HashTable {
//   constructor() {
//     this.data = new Map();
//   }

//   // Simple hash function (though not used directly for storage in this example)
//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % 1000; // Arbitrary modulus for limiting hash size
//     }
//     return hash;
//   }

//   put(key, value) {
//     const hashedKey = this._hash(key).toString();
//     this.data.set(hashedKey, value);
//   }

//   get(key) {
//     const hashedKey = this._hash(key).toString();
//     return this.data.get(hashedKey);
//   }

//   remove(key) {
//     const hashedKey = this._hash(key).toString();
//     this.data.delete(hashedKey);
//   }

//   containsKey(key) {
//     const hashedKey = this._hash(key).toString();
//     return this.data.has(hashedKey);
//   }
// }

// // Usage:
// const table = new HashTable();
// table.put("name", "John");
// console.log(table.get("name")); // John
// console.log(table.containsKey("name")); // true
// table.remove("name");
// console.log(table.containsKey("name")); // false
