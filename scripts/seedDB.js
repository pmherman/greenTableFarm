const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/farmfresh",
  {
  }
);

const thumbnailSeed = [
  {
    photo: "https://cdn1.medicalnewstoday.com/content/images/articles/270/270191/carrots-contain-vitamin-a.jpg",
    title: "Organic Carrots",
    description: "Yummy Fresh Carrots",
    price: "$0.99",
    date: new Date(Date.now())
  },
  {
  photo: "https://www.adaptiveseeds.com/wp-content/uploads/2014/12/p-7126-lettuce_galisse1.jpg",
  title: "Lettuce",
  description: "Very Green Lettuce",
  price: "$1.99",
  date: new Date(Date.now())
  },
  {
    photo: "https://www.gardenbetty.com/wp-content/uploads/2011/09/2011-09-05-01.jpg",
    title: "Dragon Beans",
    description: "Unique beans to test your pallet",
    price: "$2.99",
    date: new Date(Date.now())
  },
  {
    photo: "https://cdn3.gbot.me/photos/TB/AB/1488890620/-_Raju_s_Hill_Strawberry_F-20000000009678386-500x375.jpg",
    title: "Strawberries",
    description: "Beautiful Strawberries",
    price: "$2.99 per pound",
    date: new Date(Date.now())
  }
];

const cafeSeed = [
  {
    photo : "https://cdn.cnn.com/cnnnext/dam/assets/150929101049-black-coffee-stock-exlarge-169.jpg",
    title : "Black Coffee",
    description : "A custom made coffee blend",
    price : "$1.49",
    date: new Date(Date.now())
  },
  {
    photo: "/assets/cookies.jpg",
    title: "Assorted Cookies",
    description: "homemade cookies",
    price: "$6.99 per pound",
    date: new Date(Date.now())
  },
  {
    photo: "/assets/pie.jpg",
    title: "Cherry Pie",
    description: "Home made pie",
    price: "$19.99",
    date: new Date(Date.now())
  },
  {
    photo: "/assets/candy.jpg",
    title: "Chocolate Candy",
    description: "assorted candy",
    price: "$6.99 per pound",
    date: new Date(Date.now())
  }
];

db.Thumbnail
  .remove({})
  .then(() => db.Thumbnail.collection.insertMany(thumbnailSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Cafe
    .remove({})
    .then(() => db.Cafe.collection.insertMany(cafeSeed))
    .then(data => {
      console.log(data.insertedIds.length + " records inserted!");
      process.exit(0)
    })
    .catch(err => {
      console.long(err);
      process.exit(1);
    });
