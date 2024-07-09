import React from "react";

const HowToOrder = () => {
  return (
    <div className="flex flex-col items-center my-6 md:my-10 lg:my-14 text-offwhite px-4 md:px-8 lg:px-16">
      <div className="w-11/12 md:w-4/5 lg:w-5/6 bg-acadia p-6 lg:p-8 rounded-lg shadow-lg">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-center">
          How to Order
        </h1>

        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Langkah 1: Login atau Daftar
          </h2>
          <p className="text-sm md:text-base">
            Untuk memulai memesan, silakan login ke akun Anda atau daftar jika
            belum memiliki akun. Proses ini cepat dan mudah!
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Langkah 2: Jelajahi Menu Kami
          </h2>
          <p className="text-sm md:text-base">
            Setelah berhasil login, Anda dapat menjelajahi berbagai pilihan menu
            lezat kami. Pilih makanan favorit Anda dan tambahkan ke keranjang.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Langkah 3: Periksa Keranjang Anda
          </h2>
          <p className="text-sm md:text-base">
            Klik ikon keranjang di navbar untuk melihat isi keranjang Anda.
            Pastikan semua pesanan Anda sudah benar sebelum melanjutkan.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Langkah 4: Lanjutkan ke Checkout
          </h2>
          <p className="text-sm md:text-base">
            Jika Anda puas dengan pilihan Anda, klik tombol "Lanjutkan ke
            Checkout" untuk melanjutkan ke halaman pemesanan.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Langkah 5: Isi Detail Pengiriman
          </h2>
          <p className="text-sm md:text-base">
            Masukkan nama, nomor telepon, dan alamat pengiriman Anda dengan
            benar. Informasi ini penting untuk memastikan pesanan Anda sampai
            dengan tepat.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Langkah 6: Klik Checkout
          </h2>
          <p className="text-sm md:text-base">
            Setelah semua detail terisi, klik tombol "Checkout". Sistem kami
            akan segera memberi tahu penjual mengenai pesanan Anda. Anda juga
            akan menerima informasi lebih lanjut melalui WhatsApp mengenai
            konfirmasi pesanan dan metode pembayaran.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToOrder;
