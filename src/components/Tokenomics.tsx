import React from 'react';

export default function Tokenomics() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Tokenomics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><h3 className="text-xl font-semibold">1,000,000,000</h3><p>Total Supply</p></div>
          <div><h3 className="text-xl font-semibold">50%</h3><p>Community</p></div>
          <div><h3 className="text-xl font-semibold">20%</h3><p>Liquidity</p></div>
          <div><h3 className="text-xl font-semibold">20%</h3><p>Staking Rewards</p></div>
        </div>
      </div>
    </section>
  );
}