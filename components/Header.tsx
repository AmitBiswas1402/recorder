import Image from "next/image"

const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {
  return (
    <header className="header">
        <section className="header-container">
            <div className="details">
                {userImg && (
                    <Image src={userImg || '/assets/images/dummy.jpg'} alt="user" className="rounded-full" height={66} width={66} />
                )}
            </div>
        </section>
    </header>
  )
}
export default Header