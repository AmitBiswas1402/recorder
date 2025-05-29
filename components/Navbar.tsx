"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const user = {};
  const router = useRouter();

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
            <button onClick={() => router.push("/profile/id")}>
              <Image
                src="/assets/images/dummy.jpg"
                alt="Logo"
                height={36}
                width={36}
                className="rounded-full aspect-square"
              />
            </button>
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
