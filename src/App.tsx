import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import NavigationBar from "./components/Navigation";

export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <NavigationBar/>
      </SignedIn>
    </header>
  );
}