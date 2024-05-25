import { useTranslations } from 'next-intl';

export default function Index() {
    const t = useTranslations('Home');

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-4xl font-bold text-center mb-4">{t('title')}</h1>
        </div>
    );
}
