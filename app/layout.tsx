import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        <nav className="bg-blue-600 text-white py-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center px-6">
            <ul className="flex gap-6">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/tasks" className="hover:underline">Tasks</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
            </ul>
          </div>
        </nav>
        <main className="container mx-auto p-6 flex-1 flex justify-center items-center">
          <div className="w-full max-w-4xl p-8 shadow-lg rounded-lg">
            {children}
          </div>
        </main>
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>&copy; 2024 My App</p>
        </footer>
      </body>
    </html>
  );
}
