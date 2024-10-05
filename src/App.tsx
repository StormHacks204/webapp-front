import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import NavigationBar from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost";

export default function App() {
  

  // if (!isLoaded || !isSignedIn) {
  //   return <div>Please log in</div>;
  // }
  return (
    <>
      <BrowserRouter>
      <NavigationBar/>
        <Routes>
          <Route path="/createpost" element={<CreatePost />} />
          
          </Routes>
      </BrowserRouter>

      <header>
      {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <NavigationBar/>
  </SignedIn> */}
    </header> 
    </>
  );
}