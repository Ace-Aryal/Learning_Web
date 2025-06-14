"use client";
import { useHabitStore } from "@/store/store";
import { useEffect, useState } from "react";

export default function HabitForm() {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState<"daily" | "weekly" | "">("");
  const { habits, addHabit, deleteHabit, markAsCompleted } = useHabitStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !frequency) return;

    const newHabit = {
      id: crypto.randomUUID(),
      name,
      frequency,
      completedDates: [],
      createdAt: new Date().toISOString(),
    };

    addHabit(newHabit);

    setName("");
    setFrequency("");
  };
  useEffect(() => {
    console.log(habits);
  }, [habits]);
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 space-y-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      >
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Habit Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Workout"
            className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="frequency"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Frequency
          </label>
          <select
            id="frequency"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
            className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
          >
            <option value="" disabled>
              Select frequency
            </option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
        >
          Add Habit
        </button>
      </form>
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onComplete={markAsCompleted}
          onDelete={deleteHabit}
        />
      ))}
    </div>
  );
}

type Habit = {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
};

type Props = {
  habit: Habit;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
};

export function HabitCard({ habit, onDelete, onComplete }: Props) {
  const streak = habit.completedDates.length;
  const todayDate = new Date().toDateString();
  const completed = habit.completedDates.includes(todayDate);

  return (
    <div className={` w-full grid place-items-center mt-5 `}>
      <div
        className={`${
          completed ? "border-2 border-green-500" : ""
        } w-[80vw] rounded-xl   p-6 shadow-sm  dark:bg-zinc-950`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              {habit.name}
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 capitalize">
              Frequency: {habit.frequency}
            </p>
            <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
              Streak: {streak} {streak === 1 ? "day" : "days"}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onComplete(habit.id)}
              className="rounded-md bg-emerald-600 px-4 py-2 text-sm text-white shadow hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-emerald-500 dark:hover:bg-emerald-400"
            >
              {completed ? "Unmark Completed" : "Mark Completed"}
            </button>
            <button
              onClick={() => onDelete(habit.id)}
              className="rounded-md bg-red-600 px-4 py-2 text-sm text-white shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 dark:bg-red-500 dark:hover:bg-red-400"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
