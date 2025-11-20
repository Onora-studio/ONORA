
import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/layout/Layout';
import LoadingSpinner from '@/components/LoadingSpinner';

const CaseStudiesPage = React.lazy(() => import('@/pages/CaseStudiesPage'));
const AboutPage = React.lazy(() => import('@/pages/AboutPage'));
const ContactPage = React.lazy(() => import('@/pages/ContactPage'));

const HomePage = () => (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] text-center">
        <h1 className="text-4xl font-bold">Bienvenue chez ONORA</h1>
        <p className="mt-4 text-lg text-gray-300">Veuillez naviguer vers les pages créées.</p>
    </div>
);

function App() {
    return (
        <Layout>
            <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Suspense>
            <Toaster />
        </Layout>
    );
}

export default App;
