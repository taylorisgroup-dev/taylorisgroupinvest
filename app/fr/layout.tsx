import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function LocaleLayout({ children }: { children: React.ReactNode }) {
  // Récupère les messages pour la locale actuelle (géré par le dossier fr/)
  const messages = await getMessages();

  return (
    <html lang="fr">
      <body className="font-sans antialiased text-navy-dark bg-slate-light flex flex-col min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}