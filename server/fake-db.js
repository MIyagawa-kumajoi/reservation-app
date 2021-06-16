const Product = require("./model/product");

class fakeDb {
  constructor() {
    this.products = [
      {
        coverImg: '../assets/img/phone-cover.jpg',
        name: 'Phone XL',
        price: 700,
        description: 'A large phone with one of the best screens',
        heading1: 'test XL 1',
        heading2: 'test XL 2',
        heading3: 'test XL 3',
        headingText1: 'サンプルテキスト1 サンプルテキスト1  サンプルテキスト1 サンプルテキスト1 サンプルテキスト1 サンプルテキスト1 サンプルテキスト1 サンプルテキスト1 サンプルテキスト1 サンプルテキスト1 サンプルテキスト1 サンプルテキスト1 サンプルテキスト1 ',
        headingText2: 'サンプルテキスト2',
        headingText3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      },
      {
        coverImg: '../assets/img/phone-cover.jpg',
        name: 'Phone mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        heading1: 'test mini 1',
        heading2: 'test mini 2',
        heading3: 'test mini 3',
        headingText1: 'サンプルテキスト1',
        headingText2: 'サンプルテキスト2',
        headingText3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      },
      {
        coverImg: '../assets/img/phone-cover.jpg',
        name: 'Phone Standard',
        price: 299,
        description: '',
        heading1: 'test standard 1',
        heading2: 'test standard 2',
        heading3: 'test standard 3',
        headingText1: 'サンプルテキスト1',
        headingText2: 'サンプルテキスト2',
        headingText3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      },
      {
        coverImg: '../assets/img/phone-cover.jpg',
        name: 'Phone special',
        price: 999,
        description: '',
        heading1: 'test special 1',
        heading2: 'test special 2',
        heading3: 'test special 3',
        headingText1: 'サンプルテキスト1',
        headingText2: 'サンプルテキスト2',
        headingText3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
      }
    ];
  }

  async initDb() {
    await this.cleanDb();
    this.pushProductsToDb();
  }

  async cleanDb() {
    await Product.deleteMany({});
  }

  pushProductsToDb() {
    this.products.forEach((product) => {
      const newProduct = new Product(product);
      newProduct.save();
    });
  }

  seaDb() {
    this.pushProductsToDb();
  }
}

module.exports = fakeDb;