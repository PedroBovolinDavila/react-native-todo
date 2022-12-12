import { useState } from "react";
import { Alert, FlatList, View } from "react-native";
import { Header } from "../../components/Header";
import { ListEmpty } from "../../components/ListEmpty";
import { NewTask } from "../../components/NewTask";
import { TaskCard } from "../../components/TaskCard";
import { TasksInfo } from "../../components/TasksInfo";
import { styles } from "./styles";

export interface Task {
  title: string
  isFinished: boolean
}

export function Home() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])

  function handleCreateTask() {
    if (!task) {
      return Alert.alert('Erro', 'Informe uma tarefa')
    }

    setTasks(prev => [{
      title: task,
      isFinished: false
    }, ...prev])
  }

  function handleRemoveTask(taskName: string) {
    setTasks(prev => prev.filter(task => task.title !== taskName))
  }

  function handleFinishTask(taskName: string) {
    setTasks(prev => prev.map(task => {
      if (task.title === taskName) {
        task.isFinished = !task.isFinished
      }

      return task
    }))
  }

  return (
    <View style={styles.container}>
      <Header />
      <NewTask 
        onChangeText={setTask}
        createTaskFuntion={handleCreateTask}
      />
      <TasksInfo tasks={tasks} />
      <FlatList 
        data={tasks}
        keyExtractor={item => item.title} 
        renderItem={({ item }) => (
          <TaskCard item={item} removeTaskFunction={handleRemoveTask} finishTaskFunction={handleFinishTask} />
        )}   

        ListEmptyComponent={ListEmpty}

        contentContainerStyle={{
          paddingHorizontal: 24
        }}
      />
    </View>
  )
}