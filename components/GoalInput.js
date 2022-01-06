import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View ,Modal} from 'react-native';

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler= (e) => {
        setEnteredGoal(e);
      }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
      }
    
     
    
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goal"      
          style={styles.input} 
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        {/* <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)}/> */}
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.oncancel} /> 
          </View> 

        </View>  
    </View>
    </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
     inputContainer :{
       flex: 1,
       justifyContent:'center',
       alignItems:'center'
    },
    input: {
       padding: 10,
       width:'80%',
       borderColor:'black',
       borderWidth: 1,
       marginBottom:10
     },
     buttons:{
      flexDirection:'row',
      justifyContent: 'space-around',
      width: '60%'
     },
     button:{
       width: '40%'
     }
   
   });