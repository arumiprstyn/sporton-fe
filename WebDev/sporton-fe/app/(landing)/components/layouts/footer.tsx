import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    // Gunakan bg-black atau warna gelapmu. mt-40 udah bener buat kasih jarak dari konten atas.
    <footer className="bg-dark-alternate text-white mt-40">
      
      {/* BAGIAN ATAS FOOTER */}
      {/* Ganti pt-30 pb-30 jadi py-20 (atau py-24 kalau mau lebih tinggi lagi) */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between py-32 px-8">
        
        {/* Kolom Kiri: Logo & Deskripsi */}
        <div className="max-w-sm">
          <Image className="mt-10"
            src="/images/logo-footer.svg"
            alt="logo sporton footer"
            width={187}
            height={44}
          />
          <p className="mt-10 text-gray-400 leading-relaxed">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>

        {/* Kolom Kanan: Links */}
        <div className="flex gap-20 mt-11 mt:md-18">
          <div className="flex gap-6 flex-col">
            <h4 className="font-bold mb-2">Menu</h4> {/* Tambahin label biar rapi */}
            <Link href="#" className="text-gray-400 hover:text-white transition">Home</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">Categories</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">Products</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">About Us</Link>
          </div>
          <div className="flex gap-6 flex-col">
            <h4 className="font-bold mb-2">Social</h4>
            <Link href="#" className="text-gray-400 hover:text-white transition">Instagram</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">Facebook</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">TikTok</Link>
            <Link href="#" className="text-gray-400 hover:text-white transition">YouTube</Link>
          </div>
        </div>
      </div>

      {/* BAGIAN BAWAH FOOTER (Copyright) */}
      <div className="border-t border-white/10 flex gap-2 lex-col">
        {/* py-8 biar ada jarak yang enak di bagian bawah */}
        <div className="container mx-auto py-10 px-5 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <div>SportsOn © 2025 All Rights Reserved.</div>

          <div className="flex gap-10 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;