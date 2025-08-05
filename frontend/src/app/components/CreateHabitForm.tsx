"use client";
import { useState } from "react";

export function CreateHabitForm({ onCreate }: { onCreate: (habit: any) => void }) {
  const [habit, setHabit] = useState({
    name: "",
    description: "",
    duration: 30,
    level: "обычный",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setHabit({
      ...habit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const habitData = {
    name: habit.name,
    description: habit.description,
    duration: habit.duration,
    level: habit.level,
  };

  try {
    const response = await fetch('/api/habits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(habitData),
    });

    if (!response.ok) throw new Error('Ошибка при создании привычки');

    // Очистить форму
    setHabit({
      name: "",
      description: "",
      duration: 30,
      level: "обычный",
    });

    alert('Привычка успешно создана!');
    if (onCreate) onCreate(habitData); // если нужен колбек
  } catch (error: any) {
    alert(error.message);
  }
};


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={habit.name}
        onChange={handleChange}
        placeholder="Название привычки"
        className="w-full border p-2 rounded text-black"
      />
      <textarea
        name="description"
        value={habit.description}
        onChange={handleChange}
        placeholder="Описание"
        className="w-full border p-2 rounded text-black"
      />
      <input
        type="number"
        name="duration"
        value={habit.duration}
        onChange={handleChange}
        placeholder="Длительность (в днях)"
        className="w-full border p-2 rounded text-black"
      />
      <select
        name="level"
        value={habit.level}
        onChange={handleChange}
        className="w-full border p-2 rounded text-black"
      >
        <option value="обычный">Обычный</option>
        <option value="продвинутый">Продвинутый</option>
        <option value="легендарный">Легендарный</option>
      </select>
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Создать привычку
      </button>
    </form>
  );
}