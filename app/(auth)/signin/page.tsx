"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  const handleSignIn = async() => {
    return await authClient.signIn.social({
      provider: "github",
    })
  }
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={32}
            height={32}
          />
          <h1>SnapCast</h1>
        </Link>
        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              accusamus eligendi magni ducimus ipsa aspernatur. Aspernatur
              voluptates repudiandae nesciunt pariatur.
            </p>
            <article>
              <Image
                src="/assets/images/jason.png"
                alt="jason"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h2>Lorem, ipsum.</h2>
                <p>Lorem, ipsum dolor.</p>
              </div>
            </article>
          </section>
        </div>
        <p>© Snapcast 2025</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={32}
              height={32}
            />
            <h1>SnapCast</h1>
          </Link>
          <p>
            Create and share your very first <span>SnapCast video</span> in no
            time!
          </p>

          <button
          // onClick={async () => {
          //   return await authClient.signIn.social({
          //     provider: "google",
          //   });
          // }}
          >
            <Image
              src="/assets/icons/github.svg"
              alt="Google Icon"
              width={36}
              height={36}
            />
            <span>Sign in with GitHub</span>
          </button>
        </section>
      </aside>
    </main>
  );
};
export default SignIn;
