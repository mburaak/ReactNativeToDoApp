import { useState } from "react";
import { StyleSheet, View, TextInput,Button, Modal,Image } from "react-native";



function GoalInput(props){
    const [enteredGoalText,setenteredGoalText] = useState(''); 

    function goalInputHandler(enteredText){
        setenteredGoalText(enteredText)
    };

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setenteredGoalText('');
    }

    return(
      <Modal visible={props.visible} animationType="slide">
          <View style={styles.inputContainer}>
            <Image style = {styles.image} source={require('../assets/images/goal.jpg')}/>
            <TextInput style={styles.textInput} placeholder='Your Course goal!' onChangeText={goalInputHandler} value={enteredGoalText} />
            <View  style={styles.buttonContainer}>
              <View style = {styles.button}>
                <Button title='Cancel' onPress={props.onCancel} color="red"/>
              </View>
              <View style = {styles.button}>
                <Button title='Add Goal' onPress={addGoalHandler}/>
              </View>
            </View>
          </View>
        </Modal>
    )
};


export default GoalInput;

const styles = StyleSheet.create({
  inputContainer : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
    marginBottom : 24,
    borderBottomWidth : 1,
    borderColor : "#cccccc",
    padding : 16
  },
  textInput: {
    borderWidth : 1,
    borderColor : "#cccccc",
    width : "100%",
    padding : 12,
    borderRadius : 6,
  },
  buttonContainer : {
    flexDirection : "row",
    marginTop : 10,
  },
  button : {
    width : '30%',
    marginHorizontal : 8
  },
  image :{
    width : 100,
    height : 100,
    margin : 20
    
  }
})