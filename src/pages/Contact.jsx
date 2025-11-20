
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', website: '', message: '', studios: '', location: ''
  });
  const [errors, setErrors] = useState({});
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSelectChange = (id, value) => {
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Le nom est requis.';
    if (!formData.email) {
      newErrors.email = 'L\'email est requis.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'adresse email est invalide.';
    }
    if (!formData.message) newErrors.message = 'Le message est requis.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form data:', formData);
      toast({
        title: "🚧 Fonctionnalité non implémentée",
        description: "L'envoi de formulaire sera bientôt disponible. Merci de nous contacter directement en attendant.",
        variant: "default",
      });
      // Here you would typically send the data to a backend or service like Supabase
    } else {
      toast({
        title: "Erreur de validation",
        description: "Veuillez corriger les erreurs dans le formulaire.",
        variant: "destructive",
      });
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contactez ONORA",
    "description": "Contactez ONORA pour discuter de votre projet de croissance. Remplissez notre formulaire ou contactez-nous par email ou téléphone.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://onora.studio/contact"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+352-123-456-789",
      "contactType": "customer service",
      "email": "contact@onora.studio",
      "areaServed": ["LU", "FR", "BE"]
    }
  };

  return (
    <>
      <SEO
        title="Contactez ONORA - Démarrons votre projet"
        description="Contactez notre studio Growth & IA. Discutons de votre projet de création de site, SEO, automatisation ou stratégie digitale. Devis gratuit."
        canonical="/contact"
        schema={schema}
      />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Breadcrumbs items={[{ label: 'Contact' }]} />

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contactez-nous</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une idée ? Un projet ? Une question ? Nous sommes là pour vous écouter et transformer vos ambitions en réalité.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold mb-8">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input id="name" type="text" value={formData.name} onChange={handleInputChange} placeholder="Jean Dupont" className="mt-2" />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="company">Société</Label>
                    <Input id="company" type="text" value={formData.company} onChange={handleInputChange} placeholder="Votre Société" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="email@exemple.com" className="mt-2" />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="+33 6 12 34 56 78" className="mt-2" />
                  </div>
                </div>
                <div>
                    <Label htmlFor="website">Site web actuel</Label>
                    <Input id="website" type="url" value={formData.website} onChange={handleInputChange} placeholder="https://votre-site.com" className="mt-2" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="studios">Studios concernés</Label>
                    <Select onValueChange={(value) => handleSelectChange('studios', value)}>
                        <SelectTrigger className="w-full mt-2"><SelectValue placeholder="Sélectionnez un studio" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="global">Approche globale</SelectItem>
                            <SelectItem value="skriib">Skriib (Site & Automation)</SelectItem>
                            <SelectItem value="hacking">Hacking (Growth)</SelectItem>
                            <SelectItem value="siion">Siion (Stratégie)</SelectItem>
                            <SelectItem value="cliip">Cliip (Vidéo)</SelectItem>
                            <SelectItem value="ne-sais-pas">Je ne sais pas</SelectItem>
                        </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="location">Localisation</Label>
                    <Select onValueChange={(value) => handleSelectChange('location', value)}>
                        <SelectTrigger className="w-full mt-2"><SelectValue placeholder="Sélectionnez une ville" /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="luxembourg">Luxembourg</SelectItem>
                            <SelectItem value="esch">Esch-sur-Alzette</SelectItem>
                            <SelectItem value="metz">Metz</SelectItem>
                            <SelectItem value="nancy">Nancy</SelectItem>
                            <SelectItem value="lille">Lille</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Votre message *</Label>
                  <Textarea id="message" value={formData.message} onChange={handleInputChange} placeholder="Parlez-nous de votre projet, vos objectifs, vos défis..." className="mt-2 min-h-[120px]" />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <div>
                  <Button type="submit" size="lg" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Envoyer le message <Send className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold">Infos Directes</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-400">contact@onora.studio</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Téléphone</h3>
                    <p className="text-gray-400">+352 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Localisation</h3>
                    <p className="text-gray-400">Luxembourg & Grand-Est</p>
                    <p className="text-sm text-gray-500">Rendez-vous sur demande.</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-64 bg-slate-900/50 rounded-lg flex items-center justify-center">
                 <p className="text-gray-500">Emplacement de la carte</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
