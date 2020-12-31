import React from "react";
import "./App.css";
function Reviews() {
  // mempersiapkan data dummy JSON
  const users = [
    {
      id: 1,
      name: "Sulkifli",
      review: "Sangat berkualitas cocok di gunakan untuk ada muda",
      gambar: "sul.PNG",
    },
    {
      id: 2,
      name: "Sul",
      review: "Harga barang seuai dengan produk",
      gambar: "sulkifli.JPG",
    },
    {
      id: 3,
      name: "kifli",
      review: "pesan sekarang harga bekualitas susuai dengan harga",
      gambar: "kifli.jpeg",
    },
  ];

  const listReview = users.map((itemReview) => (
    <div key={itemReview.id} className="Item">
      <img src={itemReview.gambar} />
      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  ));

  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}
    </div>
  );
}

export default Reviews;
