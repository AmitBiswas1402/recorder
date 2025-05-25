import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  const user = {};

  return (
    <header className="navbar">
        <nav>
            <Link href="/">
                <Image src="/assets/icons/logo.svg" alt="Logo" height={32} width={32} />
            </Link>
        </nav>

        {user && (
          <figure>
            
          </figure>
        )}
    </header>
  )
}
export default Navbar