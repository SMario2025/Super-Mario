import React from 'react';

export default function Hero() {
  return (
    <section className="text-center py-20 px-4">
      <img src="/mario-icon.svg" alt="Mario Icon" className="mx-auto w-24 h-24 mb-4" />
      <h1 className="text-5xl font-extrabold mb-4">Super Mario Coin</h1>
      <p className="text-xl mb-6">A community-powered meme coin on Solana</p>
      <div className="flex justify-center gap-4">
        <a href="https://jup.ag/swap/SOL-FsjZmQcuiTDNVoLwN9jwok4i8ep4KJWLK5r781HzpuMP" target="_blank" className="bg-black text-white px-6 py-3 rounded-full text-lg">Buy Now</a>
        <a href="/staking" className="border border-black px-6 py-3 rounded-full text-lg">Stake</a>
      </div>
    </section>
  );
}