import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center py-8 bg-red-100 text-sm">
      <p>&copy; {new Date().getFullYear()} Super Mario Coin • Built on Solana</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://x.com" target="_blank" className="underline">Twitter</a>
        <a href="https://t.me" target="_blank" className="underline">Telegram</a>
        <a href="https://discord.gg" target="_blank" className="underline">Discord</a>
      </div>
    </footer>
  );
}