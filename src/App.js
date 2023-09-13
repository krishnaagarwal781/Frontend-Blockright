import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import ConnectWallet from "./pages/ConnectWallet";
import { ErrorPage } from "./pages/ErrorPage";
import { Dashboard } from "./pages/Dashboard";
import { NftPage } from "./pages/NftPage";
import { Rightspage } from "./pages/Rightspage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Shopping } from "./pages/Shopping";
import { Market } from "./pages/Market";
import { AgreementPage } from "./pages/AgreementPage";
import { User } from "./component/User";
import { NFT } from "./component/NFT";
import Products from "./component/Products";
import { Shop } from "./component/Shop";
import { License } from "./component/License";
// import { Header } from "./component/Header";
import ConfirmorderPage from "./pages/ConfirmorderPage";

import Loader from "./pages/Loader";
import WalletIDMainState from "./context/walletID/WalletIDMainState";
import AdminLogin from "./components/Login";
import AdminDashboardLayout from "./util/AdminDashboardLayout";
import Orders from "./component/Orders";
import Payment from "./component/Payment";
import RightsAdmin from "./component/RightsAdmin";


function App() {
  return (
    <WalletIDMainState>
      <Router>
        <>
          <div>
            <Routes>
              <Route path="https://blockright.netlify.app/AdminLogin" element={<AdminLogin />} />

              {/*Admin Dashboard */}
              <Route
                path="https://blockright.netlify.app/AdminDashboard"
                element={
                  <AdminDashboardLayout>
                    <User />
                  </AdminDashboardLayout>
                }
              />
              <Route
                path="https://blockright.netlify.app/AdminDashboard/nft"
                element={
                  <AdminDashboardLayout>
                    <NFT />
                  </AdminDashboardLayout>
                }
              />
              
              <Route
                path="https://blockright.netlify.app/AdminDashboard/products"
                element={
                  <AdminDashboardLayout>
                    <Products />
                  </AdminDashboardLayout>
                }
              />
              <Route
                path="https://blockright.netlify.app/AdminDashboard/rights"
                element={
                  <AdminDashboardLayout>
                    <RightsAdmin />
                  </AdminDashboardLayout>
                }
              />
              <Route
                path="https://blockright.netlify.app/AdminDashboard/orders"
                element={
                  <AdminDashboardLayout>
                    <Orders />
                  </AdminDashboardLayout>
                }
              />

              <Route
                path="https://blockright.netlify.app/AdminDashboard/shop"
                element={
                  <AdminDashboardLayout>
                    <Shop />
                  </AdminDashboardLayout>
                }
              />
              <Route
                path="https://blockright.netlify.app/AdminDashboard/license"
                element={
                  <AdminDashboardLayout>
                    <License />
                  </AdminDashboardLayout>
                }
              />
              <Route
                path="https://blockright.netlify.app/AdminDashboard/payment"
                element={
                  <AdminDashboardLayout>
                    <Payment />
                  </AdminDashboardLayout>
                }
              />

              <Route exact path="/" element={<LandingPage />} />
              <Route path="https://blockright.netlify.app/Connectwallet" element={<ConnectWallet />} />
              <Route path="https://blockright.netlify.app/Dashboard" element={<Dashboard />} />
              <Route path="https://blockright.netlify.app/NftPage" element={<NftPage />} />
              <Route path="https://blockright.netlify.app/Rightspage" element={<Rightspage />} />
              <Route path="https://blockright.netlify.app/Shopping" element={<Shopping />} />
              <Route path="https://blockright.netlify.app/Market" element={<Market />} />
              <Route path="https://blockright.netlify.app/AgreementPage" element={<AgreementPage />} />
              <Route path="https://blockright.netlify.app/ConfirmorderPage" element={<ConfirmorderPage />} />
              <Route path="https://blockright.netlify.app/Loader" element={<Loader />} />
              <Route exact path="*" element={<ErrorPage />} />
            </Routes>
          </div>
        </>
      </Router>
    </WalletIDMainState>
  );
}

export default App;
