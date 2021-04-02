const app = new Vue({
  el: '#app',
  data: {
    book: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      },
    ]
  },
  methods: {
    increment(index) {
      // console.log('increment');
      this.book[index].count++;
    },
    decrement(index) {
      // if (this.book[index].count <= 1) {
      //   alert("不能再减啦")
      // }
      // else {
      //   this.book[index].count--;
      // }
      if (this.book[index].count <= 1) {
        isDisable = true;
      }
      else {
        isDisable = false;
        this.book[index].count--;
      }

    },
    removeHandle(index) {
      // 第二个参数是数量
      this.book.splice(index, 1);

    }
    // getFinalPrice(price) {
    //   return '￥' + price.toFixed(2);
    // }
  },
  // 过滤器对值进行加工，格式化文本
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  },
  computed: {
    totalPrice() {
      // let price = 0;
      // for (let i = 0; i < this.book.length; i++) {

      //   price += this.book[i].price * this.book[i].count;
      // }
      // return price;
      return book.reduce(function (pre, book1) {
        return pre + book1.price * book1.count;
      })
    },

  }
})