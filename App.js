import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TextInput, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import styles from './styles'
import LinearSolver from './backend/algorithms/cramer_rule'
import { Parser } from 'expr-eval';

export default function App() {
  const [length, setLength] = useState(3)
  const [solutions, setSolutions] = useState('0')

  const solver = new LinearSolver()

  // const solutions = Array(6).fill('')
  // solutions[0] = '0'

  const range = [...Array(length).keys()]

  const matrixValues = range.map(() => Array(length).fill(0))
  const arrayValues = Array(length).fill(null)

  function handleMatrixValuesChange(i, j, text) {
    try {
      console.log(JSON.stringify(Parser.evaluate(text)))
      matrixValues[i][j] = Parser.evaluate(text)
    } catch {}
    
    console.log(JSON.stringify(matrixValues))
  }

  function handleArrayValuesChange(i, text) {
    try {
      console.log(JSON.stringify(Parser.evaluate(text)))
      arrayValues[i] = Parser.evaluate(text)
    } catch {}
    
    console.log(JSON.stringify(arrayValues))
  }

  function handleDimChange(dim) {    
    setLength(dim)
  }

  function handleEnter() {
    solver.cramer(matrixValues, arrayValues)
    aux = solver.getSolutions()
    str = ''
    for (let i = 0; i < aux.length; i++) {
      str += aux[i] + '\n'
    }
    setSolutions(str)
  }

  return (
      <ScrollView style={{backgroundColor: '#44475a'}}>
        <View style={styles.container}>
          <StatusBar style="auto"/>

          <Text style={styles.solutionsDisplay}>{solutions}</Text>
          
          <View style={styles.separator}/>

          <View style={styles.dimFrame}>
            <TouchableOpacity style={styles.dimButton} onPress={() => handleDimChange(2)}><Text style={styles.text}>2x2</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dimButton} onPress={() => handleDimChange(3)}><Text style={styles.text}>3x3</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dimButton} onPress={() => handleDimChange(4)}><Text style={styles.text}>4x4</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dimButton} onPress={() => handleDimChange(5)}><Text style={styles.text}>5x5</Text></TouchableOpacity>
            <TouchableOpacity style={styles.dimButton} onPress={() => handleDimChange(6)}><Text style={styles.text}>6x6</Text></TouchableOpacity>
          </View>

          <View style={styles.separator}/>

          <View style={styles.inputValuesFrame}>
            <InputTextMatrix length={length} onValuesChange={handleMatrixValuesChange}/>
            <InputTextArray length={length} onValuesChange={handleArrayValuesChange}/>
          </View>

          <View style={styles.separator}/>
          
          <View style={styles.dimFrame}>
            <TouchableOpacity style={styles.button} onPress={() => handleEnter()}><Text style={styles.text}>Enter</Text></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
  );
};


export function InputTextMatrix({ length, onValuesChange, onFocusChange }) {
  const range = [...Array(length).keys()]

  function Row({ i, range }) {
    return (
      <View style={styles.matrixRow}>
        {range.map(j => <TextInput key={j} style={styles.textInput} onChangeText={text => onValuesChange(i, j, text)} keyboardType={'phone-pad'} /*onFocus={() => onFocusChange(i, j)}*/ />)}
      </View>
    )
  }

  function Matrix({ range }) {
    return (      
      <SafeAreaView style={styles.matrixSafeArea}>        
          {range.map(i => <Row key={i} i={i} range={range}/>)}
      </SafeAreaView>
    )
  }
  return <Matrix range={range}/>
};

export function InputTextArray({ length, onValuesChange }) {
  const range = [...Array(length).keys()]

  function Row({ range }) {
    return (
      <View style={styles.verticalArrayRow}>
        {range.map(j => <TextInput key={j} style={styles.textInput2} onChangeText={text => onValuesChange(j, text)} keyboardType={'phone-pad'}/>)}
      </View>
    )
  }
  return <Row range={range} />
};

export function Keyboard({ keyboardKeys, onKeyboardPressed }) {
  // console.log(JSON.stringify(keyboardKeys))

  function Row({ keyboardRow }) {
    return (
      <View style={styles.keyboardRow}>
        {keyboardRow.map(key => <TouchableOpacity key={key} style={styles.keyboardButton} onPress={ () => onKeyboardPressed(key)} ><Text style={styles.text}>{key}</Text></TouchableOpacity>)}
      </View>
    )
  }

  function ButtonsBox() {
    return (
      <SafeAreaView style={styles.keyboardSafeArea}>
        {keyboardKeys.map((row,i) => <Row key={i} keyboardRow={row} />)}
      </SafeAreaView>
    )
  }
  return <ButtonsBox/>
}