
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const ContactPage = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '', company: '', email: '', phone: '', website: '', message: '',
        studios: { skriib: false, hacking: false, siion: false, cliip: false }
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const studiosOptions = [
        { id: 'skriib', label: 'Skriib (Site & Automation)' },
        { id: 'hacking', label: 'Hacking (Growth)' },
        { id: 'siion', label: 'Siion (Stratégie)' },
        { id: 'cliip', label: 'Cliip (Vidéo)' },
    ];

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = 'Le nom est requis.';
        if (!formData.email) {
            tempErrors.email = 'L\'email est requis.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'L\'adresse email est invalide.';
        }
        if (!formData.message) tempErrors.message = 'Le message est requis.';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (studioId) => {
        setFormData(prev => ({
            ...prev,
            studios: { ...prev.studios, [studioId]: !prev.studios[studioId] }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitted(true);
            toast({
                title: "✅ Message envoyé !",
                description: "Merci ! Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.",
            });
            console.log("Form Data:", formData);
            // Here would be the logic to send data to a backend (e.g., Supabase)
        } else {
             toast({
                title: "❌ Erreur de validation",
                description: "Veuillez corriger les erreurs dans le formulaire.",
                variant: "destructive",
            });
        }
    };
    
    const schema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+352 123 456 789",
            "contactType": "customer service",
            "email": "contact@onora.studio",
        }
    };

    return (
        <>
            <SEO
                title="Contactez-nous"
                description="Contactez notre studio Growth & IA. Discutons de votre projet de création de site, SEO, automatisation ou stratégie digitale."
                canonical="/contact"
                schema={schema}
            />
            <div className="pt-8 pb-16">
                <Breadcrumbs items={[{ label: 'Contact' }]} />
                
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Une idée ? Un projet ? Une question ? Nous sommes là pour vous écouter et transformer vos ambitions en réalité.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 bg-slate-900 border border-orange-500/10 rounded-xl p-8"
                    >
                       {isSubmitted ? (
                            <div className="text-center flex flex-col items-center justify-center h-full">
                                <Check size={64} className="text-green-500 mb-4" />
                                <h2 className="text-2xl font-bold mb-2">Message envoyé avec succès !</h2>
                                <p className="text-gray-400">Merci de nous avoir contactés. Nous reviendrons vers vous très prochainement.</p>
                            </div>
                        ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nom complet *</Label>
                                    <Input id="name" name="name" placeholder="Jean Dupont" onChange={handleChange} />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="company">Société</Label>
                                    <Input id="company" name="company" placeholder="Votre Société" onChange={handleChange} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email *</Label>
                                    <Input id="email" name="email" type="email" placeholder="email@exemple.com" onChange={handleChange} />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Téléphone</Label>
                                    <Input id="phone" name="phone" type="tel" onChange={handleChange} />
                                </div>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="website">Site web actuel</Label>
                                <Input id="website" name="website" type="url" placeholder="https://votre-site.com" onChange={handleChange} />
                            </div>
                            <div className="space-y-4">
                                <Label>Studios qui vous intéressent</Label>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {studiosOptions.map(studio => (
                                        <div key={studio.id} className="flex items-center space-x-2">
                                            <Checkbox id={studio.id} onCheckedChange={() => handleCheckboxChange(studio.id)} />
                                            <Label htmlFor={studio.id} className="font-normal text-gray-300">{studio.label}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Votre message *</Label>
                                <Textarea id="message" name="message" placeholder="Parlez-nous de votre projet..." className="min-h-[120px]" onChange={handleChange} />
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>
                            <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                                Envoyer le message <Send className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                        )}
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold">Infos Directes</h3>
                        <div className="space-y-6">
                            <a href="mailto:contact@onora.studio" className="flex items-start gap-4 group">
                                <Mail className="w-6 h-6 text-orange-500 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg group-hover:text-orange-400 transition-colors">Email</h4>
                                    <p className="text-gray-400">contact@onora.studio</p>
                                </div>
                            </a>
                            <a href="tel:+352123456789" className="flex items-start gap-4 group">
                                <Phone className="w-6 h-6 text-orange-500 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg group-hover:text-orange-400 transition-colors">Téléphone</h4>
                                    <p className="text-gray-400">+352 123 456 789</p>
                                </div>
                            </a>
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-lg">Localisation</h4>
                                    <p className="text-gray-400">Luxembourg & Grand-Est</p>
                                    <p className="text-sm text-gray-500">Rendez-vous sur demande.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
