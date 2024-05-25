import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations('About');
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 m-4 w-full max-w-3xl">
                <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">{t('title')}</h1>
                <p className="text-lg text-center mb-4 text-gray-600">{t('description')}</p>
                <div className="text-center space-y-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-gray-700">{t('missionTitle')}</h2>
                        <p className="text-gray-600">{t('mission')}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-gray-700">{t('visionTitle')}</h2>
                        <p className="text-gray-600">{t('vision')}</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-gray-700">{t('teamTitle')}</h2>
                        <p className="text-gray-600">{t('team')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
