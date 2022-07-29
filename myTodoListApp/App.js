import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import TaskItem from './components/TaskItem'
import TaskInputField from './components/TaskInputField'

export default function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const deleteTask = (taskIndex) => {
    //tasks.splice(index, 1)
    setTasks(tasks.filter((task, index) => index !== taskIndex))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView>
        {tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem
                index={index + 1}
                task={task}
                deleteTask={() => deleteTask(index)}
              />
            </View>
          )
        })}
      </ScrollView>

      <TaskInputField addTask={addTask} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  taskContainer: {
    marginTop: 20,
  },
})
