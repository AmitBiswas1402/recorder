import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const user = {};

  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            height={32}
            width={32}
          />
          <h1>SnapCast</h1>
        </Link>

        {user && (
          <figure>
            <Image
              src="/assets/images/dummy.jpg"
              alt="Logo"
              height={36}
              width={36}
              className="rounded-full aspect-square"
            />
            <button>
              <Image
                src="/assets/icons/logout.svg"
                alt="Logo"
                height={32}
                width={32}
                className="rotate-180"
              />
            </button>
          </figure>
        )}
      </nav>
    </header>
  );
};
export default Navbar;
