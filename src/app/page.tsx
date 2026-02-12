import { TodoList } from "@/components/TodoList"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-zinc-900 dark:text-zinc-100">
          Todo App
        </h1>
        <p className="text-center text-zinc-500 mb-12">
          Keep track of your tasks
        </p>
        <TodoList />
      </div>
    </div>
  )
}
