
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import { InstalledProvider } from '../Pages/InstalledContext'; // ✅ Context import

const RootLayouts = () => {
  return (
    // ✅ পুরো layout-কে context provider দিয়ে wrap করো
    <InstalledProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 max-w-screen-2xl w-full bg-[#fafafa]">
          <Outlet />
        </main>

        <Footer />

        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </InstalledProvider>
  );
};

export default RootLayouts;

