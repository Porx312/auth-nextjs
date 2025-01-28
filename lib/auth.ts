import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const options = {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.AUTH_SECRET,
};

const { handlers, auth, signIn, signOut } = NextAuth(options);

export { handlers, auth, signIn, signOut };
