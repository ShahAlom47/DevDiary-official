import Link from "next/link";


export const NavLink = (pathname: string) => {
    const getLinkClasses = (path: string) => {
      const isActive = pathname === path;
      return `px-4 py-2  ${isActive ? "text-primary" : "hover:text-primary"}`;
    };
  
    return (
      <>
        <Link href="/" className={getLinkClasses("/")}>
          Home
        </Link>
      
        <Link href="/services" className={getLinkClasses("/services")}>
          Videos
        </Link>
        <Link href="/portfolio" className={getLinkClasses("/portfolio")}>
         Blogs
        </Link>
        <Link href="/contact" className={getLinkClasses("/contact")}>
          {" "}
          Contact{" "}
        </Link>
        <Link href="/about" className={getLinkClasses("/about")}>
          About
        </Link>
      </>
    );
  };