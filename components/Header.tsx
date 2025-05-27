import Image from "next/image"
import Link from "next/link"

const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {
  return (
    <header className="header">
        <section className="header-container">
            <div className="details">
                {userImg && (
                    <Image src={userImg || '/assets/images/dummy.jpg'} alt="user" className="rounded-full" height={66} width={66} />
                )}

                <article>
                  <p>{subHeader}</p>
                  <h1>{title}</h1>
                </article>
            </div>

            <aside>
              <Link href="/upload">
                <Image src="/assets/icons/upload.svg" alt="upload" width={16} height={16} />
                <span>Upload a Video</span>
              </Link>
              <button>
                
              </button>
            </aside>
        </section>
    </header>
  )
}
export default Header