import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { connectedDB } from '@utils/database'
import User from '@models/user'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        // Ensure the database connection
        await connectedDB();

        // Fetch the user from the database
        const sessionUser = await User.findOne({ email: session.user.email });
        if (sessionUser) {
          // Assign the user's ID to the session
          session.user.id = sessionUser._id.toString();
        }
        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return session; // Return the session even if there's an error
      }
    },
    async signIn({ profile }) {
      try {
        // Ensure the database connection
        await connectedDB();

        // Check if the user already exists
        const userExists = await User.findOne({ email: profile.email });

        // If the user doesn't exist, create a new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(/\s+/g, '').toLowerCase(),
            image: profile.picture,
          });
        }

        return true; // Return true to allow sign-in
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false; // Return false to deny sign-in
      }
    },
  },
});

export { handler as GET, handler as POST };
