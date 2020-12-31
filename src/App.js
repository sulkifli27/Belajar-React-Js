import React from "react";
import "./App.css";
import Reviews from "./Reviews";
import propTypes from "prop-types";

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" name="Sepatu Baru" category="LEBARAN" />
      <Reviews />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="bwasneaker.jpg" />
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount, discount } = props;
  if (isDiscount == "yes") {
    return <p>Diskon {discount} % </p>;
  } else if (isDiscount == "coming") {
    return <p>Akan ada diskon...</p>;
  } else {
    return <p>belum ada diskon</p>;
  }
}

function ProdukInfo(props) {
  const { category, isDiscount, name } = props;
  const benefits = [
    "Tidak kusut kena air",
    "Bahan lebih halus",
    "Tidak gerah",
    "Terbaik",
    "Sangat bagus",
    "Tahan lama",
  ];
  const listBenefits = benefits.map((itemBenefit) => (
    <li key={itemBenefit}>{itemBenefit}</li>
  ));
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 74.000.000</p>
        <CheckDiscount isDiscount={isDiscount} discount={50} />
        <p className="Info">
          Ini adalah seoatu yang banyak digunakan oleh kalangan anak muda,
          Dewasa maupun anak-anak, dikarenakan bahan yang digunakan berkualitas
          dan enak di gunakan di kaki walupun dalam keadaan lama sehingga sangat
          cocok.
        </p>
        <ul>{listBenefits}</ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">
          Add To Cart
        </a>
      </div>
    </div>
  );
}

function TambahCart(e) {
  return console.log("Membeli " + e);
}

CheckDiscount.propTypes = {
  discount: propTypes.number,
};
export default App;
