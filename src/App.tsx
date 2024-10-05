import NavigationBar from "./components/Navigation";


export default function App() {
  

  // if (!isLoaded || !isSignedIn) {
  //   return <div>Please log in</div>;
  // }
  return (
    <header>
      {/* <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <NavigationBar isSignedIn={isSignedIn}/>
      </SignedIn> */}
      <NavigationBar/>
    </header>
  );
}