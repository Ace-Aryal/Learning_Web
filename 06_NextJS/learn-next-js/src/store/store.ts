import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
type Habit = {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
};

type Habits = {
  habits: Habit[];
  addHabit: (data: Habit) => void;
  deleteHabit: (habitId: string) => void;
  markAsCompleted: (habitId: string) => void;
};

export const useHabitStore = create<Habits>()(
  devtools(
    persist(
      (set) => {
        return {
          habits: [],
          addHabit: (data) => {
            set((state) => ({
              habits: [...state.habits, data],
            }));
          },

          deleteHabit: (habitId) => {
            set((state) => {
              const updatedHabits = state.habits.filter(
                (habit) => habit.id !== habitId
              );
              return {
                habits: updatedHabits,
              };
            });
          },
          markAsCompleted: (habitId) => {
            set((state) => {
              const changedHabits = state.habits.map((habit) => {
                if (habit.id === habitId) {
                  const today = new Date().toDateString();
                  if (habit.completedDates.includes(today)) {
                    return {
                      ...habit,
                      completedDates: habit.completedDates.filter(
                        (date) => date !== today
                      ),
                    };
                  }
                  return {
                    ...habit,
                    completedDates: [...habit.completedDates, today],
                  };
                }
                return habit;
              });
              return { habits: changedHabits };
            });
          },
        };
      },
      {
        name: "habits-local",
      }
    )
  )
);
