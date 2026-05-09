import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCTA from '../shared/FloatingCTA';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}