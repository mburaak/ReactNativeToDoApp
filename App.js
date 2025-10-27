import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText,setenteredGoalText] = useState(''); 
  const [courseGoals,setCourseGoals] = useState([]); 
  function goalInputHandler(enteredText){
    setenteredGoalText(enteredText)
  };

  function addGoalHandler(){
    setCourseGoals((currentCourseGoals)=>[...currentCourseGoals,{text : enteredGoalText, id : Math.random().toString()}]);
  };


  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='Your Course goal!' onChangeText={goalInputHandler} />
          <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
        <View style = {styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return(
          <View style = {styles.goalItem}>
            <Text style = {styles.goalText}>{itemData.item.text}</Text>
          </View>
          )
        }}
        keyExtractor={(item,index) => {
          return item.id;
        }}/>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop : 50,
    paddingHorizontal : 16
  },
  inputContainer : {
    flex : 1,
    flexDirection : "row",
    justifyContent : "space-between",
    alignItems : "center",
    marginBottom : 24,
    borderBottomWidth : 1,
    borderColor : "#cccccc"
  },
  textInput: {
    borderWidth : 1,
    borderColor : "#cccccc",
    width : "70%",
    marginRight : 8,
    padding : 8
  },
  goalsContainer : {
    flex : 5
  },
  goalItem:{
    margin : 8,
    borderRadius : 6,
    borderWidth : 1,
    padding : 8 ,
    backgroundColor :'#5e0acc'
  },
  goalText : {
    color : 'white'
  }
});
