// frontend/src/app/page.tsx
"use client";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { HabitCard } from "./components/HabitCard";
import { CreateHabitForm } from "./components/CreateHabitForm";
import { HabitList } from "./components/HabitList";

export default function Home() {
  const [habits, setHabits] = useState<any[]>([]);

  const addHabit = (newHabit: any) => {
    setHabits((prev) => [...prev, newHabit]);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      <section className="py-10 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Создать привычку</h2>
        <CreateHabitForm onCreate={addHabit} />

        <h2 className="text-2xl font-bold mt-10 mb-4">Мои привычки</h2>
        <HabitList habits={habits} />
      </section>
    </main>
  );
}