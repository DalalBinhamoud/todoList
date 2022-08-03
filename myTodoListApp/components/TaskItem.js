import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function TaskItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <Text style={styles.contentColor}>{props.index}</Text>
      </View>

      <View style={styles.taskContainer}>
        <Text style={styles.contentColor}>{props.task}</Text>

        <TouchableOpacity onPress={() => props.deleteTask()}>
          <MaterialIcons name="delete" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  indexContainer: {
    marginHorizontal: 10,
    backgroundColor: '#3E3364',
    borderRadius: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskContainer: {
    backgroundColor: '#3E3364',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    minHeight: 50,
  },
  contentColor: {
    color: '#fff',
    fontSize: 16,
  },
})
