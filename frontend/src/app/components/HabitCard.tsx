// frontend/src/app/components/HabitCard.tsx
type HabitCardProps = {
  title: string;
  description: string;
};

export function HabitCard({ title, description }: HabitCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4 border hover:shadow-md transition-all">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}