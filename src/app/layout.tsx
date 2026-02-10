import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Tools Learning Hub - Learn AI Tools, Master the Future",
  description: "Your go-to resource for learning cutting-edge AI tools like ChatGPT, Claude, MidJourney, and more. Tutorials, guides, and prompt generators.",
  keywords: ["AI tools", "ChatGPT", "Claude", "MidJourney", "Seedance", "AI tutorials", "prompt engineering"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-md sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
              <a href="/" className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <span className="font-bold text-xl gradient-text">AI Tools Hub</span>
              </a>
              <div className="flex items-center gap-6">
                <a href="/seedance" className="text-gray-300 hover:text-white transition-colors">
                  Seedance Generator
                </a>
                <a href="#tools" className="text-gray-300 hover:text-white transition-colors">
                  Tools
                </a>
                <a href="#newsletter" className="btn-primary text-sm py-2 px-4">
                  Subscribe
                </a>
              </div>
            </nav>
          </header>
          
          <main className="flex-1">
            {children}
          </main>
          
          <footer className="border-t border-gray-800 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🚀</span>
                  <span className="font-semibold gradient-text">AI Tools Learning Hub</span>
                </div>
                <p className="text-gray-500 text-sm">
                  © 2025 AI Tools Learning Hub. Built with ❤️ for AI enthusiasts.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
