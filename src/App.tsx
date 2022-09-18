import { useEffect, useState } from "react";

const App = (): JSX.Element => {
  const [balance, setBalance] = useState<number>(0);
  const [button, setButton] = useState<"visible" | "hidden">("hidden");

  useEffect(() => {
    // Handle everything on the client to make sure the consensus is useless
    if (button === "visible") {
      setTimeout(() => {
        setButton("hidden");
      }, 1000);
    } else {
      setTimeout(() => {
        setButton("visible");
      }, Math.random() * 50000);
    }
  }, [button]);

  return (
    <div className="flex items-center justify-center min-h-screen px-5 py-12">
      <div className="mx-auto max-w-lg">
        <div className="space-y-6">
          <h1 className="font-semibold text-lg text-center">proof of staring at spinner</h1>
          <p>
            you need to stare at the spinner and wait for a button to show, then quickly click the button before it
            disappears.
          </p>
          <p>you mine 1 SPN every time you click the button.</p>
          <p>
            SPN is absolutely useless, but worry not — we can pump and dump it together (there's always a greater fool).
          </p>
          <p>happy staring.</p>
        </div>
        <hr />
        <div className="text-center space-y-6">
          <div className="h-16 flex items-center justify-center">
            {button === "visible" ? (
              <button
                onClick={() => {
                  setBalance(balance + 1);
                  setButton("hidden");
                }}
                className="w-32 h-full bg-black text-white"
              >
                mine
              </button>
            ) : (
              <svg viewBox="0 0 50 50" className="mx-auto h-6 animate-spinSlow">
                <circle className="animate-dash stroke-black" cx="25" cy="25" r="20" fill="none" strokeWidth="5.5" />
              </svg>
            )}
          </div>
          <p>balance: {balance} SPN</p>
        </div>
        <hr />
        <div className="space-y-6">
          <p>
            * look up SPN on{" "}
            <a href="https://coinmarketcrap.co/" target="_blank" rel="noopener noreferrer">
              CoinMarketCrap
            </a>
            .
          </p>
          <p>
            * this is a decentralized project —{" "}
            <a href="https://github.com/omerst/posas" target="_blank" rel="noopener noreferrer">
              attempt to contribute
            </a>{" "}
            or get in touch if you want to be an insider and help fraud the public.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
