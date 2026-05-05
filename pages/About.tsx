import React from 'react';
import { Leaf, Heart, Users, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';


const About: React.FC = () => {
    const { t } = useLanguage();
    return (
        <div className="bg-sand min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2457&auto=format&fit=crop"
                    alt="About Avenly"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center text-white px-6">
                        <h1 className="text-5xl md:text-7xl font-serif mb-4">{t('about.heroTitle')}</h1>
                        <p className="text-xl md:text-2xl tracking-wide">{t('about.heroSubtitle')}</p>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">
                        {t('about.missionTitle')}
                    </h2>
                    <p className="text-lg text-primary/70 leading-relaxed">
                        {t('about.missionDesc')}
                    </p>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-16 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-serif text-primary text-center mb-12">
                        {t('about.valuesTitle')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Leaf className="w-10 h-10 text-sage" />
                            </div>
                            <h3 className="text-xl font-serif text-primary mb-3">{t('about.sustainability')}</h3>
                            <p className="text-primary/60 text-sm leading-relaxed">
                                {t('about.sustainabilityDesc')}
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-10 h-10 text-sage" />
                            </div>
                            <h3 className="text-xl font-serif text-primary mb-3">{t('about.quality')}</h3>
                            <p className="text-primary/60 text-sm leading-relaxed">
                                {t('about.qualityDesc')}
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-10 h-10 text-sage" />
                            </div>
                            <h3 className="text-xl font-serif text-primary mb-3">{t('about.ethics')}</h3>
                            <p className="text-primary/60 text-sm leading-relaxed">
                                {t('about.ethicsDesc')}
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-10 h-10 text-sage" />
                            </div>
                            <h3 className="text-xl font-serif text-primary mb-3">{t('about.transparency')}</h3>
                            <p className="text-primary/60 text-sm leading-relaxed">
                                {t('about.transparencyDesc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-serif text-primary mb-6">{t('about.startedTitle')}</h2>
                            <p className="text-primary/70 leading-relaxed mb-4">
                                {t('about.startedDesc1')}
                            </p>
                            <p className="text-primary/70 leading-relaxed">
                                {t('about.startedDesc2')}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-serif text-primary mb-6">{t('about.commitmentTitle')}</h2>
                            <p className="text-primary/70 leading-relaxed mb-4">
                                {t('about.commitmentDesc1')}
                            </p>
                            <p className="text-primary/70 leading-relaxed">
                                {t('about.commitmentDesc2')}
                            </p>
                        </div>

                        {/* Impact Stats */}
                        <div className="bg-sage/10 p-8 md:p-12 rounded-lg">
                            <h3 className="text-2xl font-serif text-primary mb-8 text-center">{t('about.impactTitle')}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                <div>
                                    <div className="text-4xl font-serif text-sage mb-2">50,000+</div>
                                    <p className="text-primary/60 text-sm uppercase tracking-wider">{t('about.happyCustomers')}</p>
                                </div>
                                <div>
                                    <div className="text-4xl font-serif text-sage mb-2">100%</div>
                                    <p className="text-primary/60 text-sm uppercase tracking-wider">{t('about.organicMaterials')}</p>
                                </div>
                                <div>
                                    <div className="text-4xl font-serif text-sage mb-2">{t('about.carbonNeutral')}</div>
                                    <p className="text-primary/60 text-sm uppercase tracking-wider">{t('about.carbonNeutralSince')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-primary text-white">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6">
                        {t('about.ctaTitle')}
                    </h2>
                    <p className="text-white/80 mb-8 leading-relaxed">
                        {t('about.ctaDesc')}
                    </p>
                    <a
                        href="/#/products"
                        className="inline-block bg-white text-primary px-8 py-3 text-sm uppercase tracking-widest font-bold hover:bg-sand transition-colors"
                    >
                        {t('about.shopCollection')}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
