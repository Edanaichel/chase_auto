import Layout from "./Layout.jsx";

import Home from "./Home";

import InsuranceClaimAssistance from "./InsuranceClaimAssistance";

import CollisionRepairDetail from "./CollisionRepairDetail";

import AutoPaintRepair from "./AutoPaintRepair";

import AutoFrameStraightening from "./AutoFrameStraightening";

import Contact from "./Contact";

import BookAppointment from "./BookAppointment";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    InsuranceClaimAssistance: InsuranceClaimAssistance,
    
    CollisionRepairDetail: CollisionRepairDetail,
    
    AutoPaintRepair: AutoPaintRepair,
    
    AutoFrameStraightening: AutoFrameStraightening,
    
    Contact: Contact,
    
    BookAppointment: BookAppointment,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/InsuranceClaimAssistance" element={<InsuranceClaimAssistance />} />
                
                <Route path="/CollisionRepairDetail" element={<CollisionRepairDetail />} />
                
                <Route path="/AutoPaintRepair" element={<AutoPaintRepair />} />
                
                <Route path="/AutoFrameStraightening" element={<AutoFrameStraightening />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/BookAppointment" element={<BookAppointment />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}