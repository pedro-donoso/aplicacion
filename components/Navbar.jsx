import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <ul className="bg-slate-300 mb-4 flex justify-around items-center px-20 p-3 font-bold text-black">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/about">Nosotros</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
        <li>
          <Link href="/posts">Publicaciones</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
