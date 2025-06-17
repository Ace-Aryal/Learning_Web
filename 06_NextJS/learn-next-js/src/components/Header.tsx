import {
  getKindeServerSession,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Header() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isLoggedin = await isAuthenticated();
  const user = await getUser();

  return (
    <header className="w-full border-b border-border shadow-sm bg-background">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {!!isLoggedin && user && (
          <img
            className="rounded-full"
            height="30px"
            width="30px"
            src={user.picture!}
            alt="avatar"
          />
        )}
        <Link href="/" className="text-xl font-semibold tracking-wide">
          MyApp
        </Link>
        <nav className="space-x-4">
          {!isLoggedin && (
            <>
              <RegisterLink className="px-4 py-2 rounded-md bg-primary  hover:bg-primary/90">
                Sign Up
              </RegisterLink>
              <Link
                href="/api/auth/login"
                className="px-4 py-2 rounded-md border border-input hover:bg-accent hover:text-accent-foreground"
              >
                Sign In
              </Link>
            </>
          )}
          {isLoggedin && (
            <LogoutLink
              className="px-4 py-2 rounded-md border border-input hover:bg-accent
          hover:text-accent-foreground"
            >
              Logout
            </LogoutLink>
          )}
        </nav>
      </div>
    </header>
  );
}
