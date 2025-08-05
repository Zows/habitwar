// frontend/src/app/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="w-full px-4 py-3 bg-white shadow-sm flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">HabitWar</h1>
      <div className="space-x-4">
        <button className="text-gray-700 hover:text-indigo-600">Войти</button>
        <button className="bg-indigo-600 text-white px-4 py-1 rounded-full hover:bg-indigo-700">
          Начать
        </button>
      </div>
    </nav>
  );
}