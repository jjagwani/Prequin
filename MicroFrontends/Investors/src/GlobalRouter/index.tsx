import React from "react";
import CommitmentsContent from "Commitments/CommitmentsContent";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import InvestorsContent from "../Components/InvestorsContent";

const GlobalRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route index path="/" element={<InvestorsContent />} />
                <Route path="/investor/:id" element={<CommitmentsContent />} />
                <Route path="*" element={<Navigate to='/' />} />
            </Routes>
        </Router>);
};

export default GlobalRouter;