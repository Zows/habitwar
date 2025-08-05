import { CreateHabitForm } from "../components/CreateHabitForm";

export default function CreatePage() {
  return (
    <main className="max-w-xl mx-auto p-4 mt-10">
      <h1 className="text-2xl font-bold mb-4">Создать привычку</h1>
      <CreateHabitForm />
    </main>
  );
}