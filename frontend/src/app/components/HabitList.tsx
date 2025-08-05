// frontend/src/app/components/HabitList.tsx
import { HabitCard } from "./HabitCard";

export function HabitList({ habits }: { habits: any[] }) {
  if (habits.length === 0) {
    return <p className="text-gray-600">У вас пока нет созданных привычек.</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {habits.map((habit, i) => (
        <HabitCard key={i} {...habit} />
      ))}
    </div>
  );
}
