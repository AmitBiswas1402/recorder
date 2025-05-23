import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  // const user = {};

  return (
    <header className="navbar">
      <nav>
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="SnapChat Logo"
            width={32}
            height={32}
            unoptimized
          />
          <h1>SnapCast</h1>
        </Link>

        {/* {user && (
          <figure>
            <button>
              <Image
                src="/assets/images/dummy.jpg"
                alt="User"
                height={36}
                width={36}
                className="rounded-full aspect-square"
              />
            </button>
            <button className="cursor-pointer">
              <Image
                src="/assets/icons/logout.svg"
                alt="logout"
                width={24}
                height={24}
                className="rotate-180"
                unoptimized
              />
            </button>
          </figure>
        )} */}
      </nav>
    </header>
  );
};
export default Navbar;
