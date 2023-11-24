import styles from './AppName.module.css';   //it use to import styles(means css to appname.module.css),we can keep any name in the 
                                              //styles place(it is just js identifier or variable)
function AppName(){
  return <h1 className={styles.todoHeading}>TODO APP</h1> //heading will display,className is used to apply css on heading by, seperate component can be made appname module css//

}

export default AppName;