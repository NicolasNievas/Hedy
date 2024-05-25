import { useTranslations } from 'next-intl';

export default function Index() {
    const t = useTranslations('Home');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 m-4 w-full max-w-3xl">
                <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">{t('title')}</h1>
                <p className="text-lg text-center mb-4 text-gray-600">{t('intro')}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>{t('feature1')}</li>
                    <li>{t('feature2')}</li>
                    <li>{t('feature3')}</li>
                </ul>
            </div>
        </div>
    );
}
