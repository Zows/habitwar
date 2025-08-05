// frontend/src/app/components/Hero.tsx
export default function Hero() {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-indigo-50 to-white">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Преврати привычки в NFT-челленджи
      </h2>
      <p className="text-gray-600 mb-6 max-w-xl mx-auto">
        Создай привычку. Заработай опыт. Развивай свой Soulbound NFT. Побеждай в турнирах.
      </p>
      <button className="bg-indigo-600 text-white px-6 py-2 rounded-full text-lg hover:bg-indigo-700">
        Начать привычку
      </button>
    </section>
  );
}