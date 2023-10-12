import { prisma } from "@/src/libs/prisma"
import TaskCard from "../components/TaskCard"

async function loadTasks() {
  // esta forma se usa cuando tenes el back en un proyecto separado del front
  // const res = await fetch("http://localhost:3000/api/tasks")
  // const data = await res.json()
  
  return await prisma.task.findMany()
}

export const dynamic = "force-dinamyc";

async function HomePage(){
  const tasks = await loadTasks()

  return (
    <section className="container mx-auto text-white">
      <div className="grid grid-cols-3 gap-3 mt-3">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}/>
        ))}
      </div>
    </section>
  ) 
}

export default HomePage;