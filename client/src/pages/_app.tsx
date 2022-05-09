import "tailwindcss/tailwind.css";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
  <div className="h-screen font-serif bg-gray-900 text-white grid place-items-center">
    <div className="">
      <Component {...pageProps} />
    </div>
  </div>)
}

export default MyApp;
