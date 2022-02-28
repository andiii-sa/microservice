import Link from "next/link";
import propTypes from "prop-types";
import { useRouter } from "next/router";
import Logo from "public/images/logo.svg";
import { useEffect, useState } from "react";

import DefaultAvatar from "public/images/default-avatar.svg";

export default function Header({ onLight }) {
  const [user, setUser] = useState(() => null);
  useEffect(() => {
    const userCookies =
      decodeURIComponent(window.document.cookie)
        ?.split(";")
        ?.find?.((item) => item.indexOf("MICRO:user") > -1)
        ?.split("=")[1] ?? null;
    setUser(userCookies ? JSON.parse(userCookies) : null);
  }, []);

  const linkColor = onLight ? "text-gray-900" : "text-white";
  const router = useRouter();
  const linkCTA =
    router.pathname.indexOf("/login") > -1
      ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register`
      : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;
  const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";

  return (
    <>
      <header className="flex justify-between items-center">
        <div style={{ height: 54 }}>
          <Logo className="on-dark"></Logo>
        </div>
        <ul className="flex items-center">
          <li>
            <Link href="/">
              <a
                className={[
                  linkColor,
                  "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
                ].join(" ")}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className={[
                  linkColor,
                  "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
                ].join(" ")}
              >
                Pricing
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className={[
                  linkColor,
                  "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
                ].join(" ")}
              >
                Features
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a
                className={[
                  linkColor,
                  "text-white hover:text-teal-500 text-lg px-6 py-3 font-medium",
                ].join(" ")}
              >
                Story
              </a>
            </Link>
          </li>
          <li>
            {user ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={linkCTA}
                className="hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6 inline-flex items-center"
              >
                <span className="rounded-full overflow-hidden mr-3 border-2 border-orange-500">
                  {user?.thumbnail ? (
                    <img
                      src={user?.thumbnail}
                      alt={user?.name ?? "Username"}
                      className="object-ConvolverNode w-8 h-8 inline-block"
                    />
                  ) : (
                    <DefaultAvatar className="fill-indigo-500 w-8 h-8 inline-block"></DefaultAvatar>
                  )}
                </span>
                Hi, {user.name}
              </a>
            ) : (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={linkCTA}
                className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6"
              >
                {textCTA}
              </a>
            )}
          </li>
        </ul>
      </header>
    </>
  );
}

Header.propTypes = {
  onLight: propTypes.bool,
};
