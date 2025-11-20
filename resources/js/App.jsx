import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardBase from "./dashboard/DashboardBase";
import Base from "./pages/Base"


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Website */}
                <Route path="/*" element={<Base />} />
                {/* Dashboard */}
                <Route path="/dashboard/*" element={<DashboardBase />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
