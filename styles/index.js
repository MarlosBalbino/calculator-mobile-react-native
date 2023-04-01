import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexGrow: 1,
    backgroundColor: '#44475a',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingTop: 40,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },

  matrixSafeArea: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    // backgroundColor: '#c3ccdf',
    flexWrap: 'wrap',
    // width: '100%',
    maxHeight: '100%',
    gap: 5,
  },

  spacer: {
    flex: 1,
    backgroundColor: 'white',
    maxWidth: 50,
    height: 20,
  },

  keyboardSafeArea: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    // backgroundColor: '#c3ccdf',
    flexWrap: 'wrap',
    width: '100%',
    maxHeight: '100%',
    gap: 5,
  },

  matrixRow: {
    // backgroundColor: 'cyan',
    flexDirection: 'row',
    // alignItems: "space-between",
    justifyContent: 'space-evenly',
    minWidth: 50,
    minHeight: 30,
    width: '100%',
    // paddingRight: 10,
    gap: 3,
  },

  keyboardRow: {
    // backgroundColor: 'cyan',
    flexDirection: 'row',
    // alignItems: "space-between",
    justifyContent: 'space-evenly',
    minWidth: 50,
    minHeight: 30,
    width: '100%',
    gap: 5,
  },
  
  verticalArrayRow: {
    flexDirection: 'column',
    minWidth: 50,
    minHeight: 50,
    paddin: 5,
    gap: 5,
  },

  textInput: {
    backgroundColor: '#6272a4',
    color: 'white',
    borderRadius: 5,
    minWidth: 50,
    minHeight: 50
  },

  textInput2: {
    backgroundColor: '#8c9dd4',
    color: 'white',
    borderRadius: 5,
    minWidth: 50,
    minHeight: 50,
  },

  keyboardButton: {
    flex: 1,
    backgroundColor: '#6272a4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    minWidth: 50,
    minHeight: 40,
  },

  topTextInput: {
    backgroundColor: '#c3ccdf',
    borderRadius: 5,
    minWidth: 50,
    minHeight: 25,
  },

  dimFrame: {
    // backgroundColor: 'blue', 
    flexDirection: 'row', 
    width: '100%', 
    justifyContent: 'space-evenly',
    gap: 5
  },

  dimButton: {
    flex: 1,
    backgroundColor: '#6272a4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    minWidth: 50,
    minHeight: 25,
  },

  button: {
    flex: 1,
    backgroundColor: '#6272a4',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    minWidth: 50,
    minHeight: 50,
  },

  inputValuesFrame: {
    // backgroundColor: 'yellow',
    flexDirection: 'row', 
    alignItems: 'center',
    gap: 5,
  },

  solutionsLabel: {
    color: 'white', 
    alignSelf: 'flex-start', 
    fontSize: 20,
  },

  solutionsDisplay: {
    flex: 1,
    // backgroundColor: 'red', 
    fontSize: 18,
    color: 'white', 
    alignSelf: 'flex-start', 
    height: '17%', 
    width: '100%'
  },

  separator: {
    backgroundColor: "white",
    width: '100%',
    height: 1,
    margin: 5,
  },

  text: {
    color: 'white',
    fontSize: 20,
  }
    
});
