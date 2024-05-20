import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export default async function PrivatePage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect('/login');
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to your Private Page</h1>
        <p className="text-gray-700">Hello, <span className="font-semibold">{data.user.email}</span></p>
        <p className="mt-4 text-gray-600">This is your private space where you can manage your account and view exclusive content.</p>
      </div>
    </main>
  );
}
