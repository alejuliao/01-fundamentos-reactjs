import {Header} from './components/Header.jsx'
import { Post } from './components/Post.jsx'
import { Sidebar } from './components/Sidebar.jsx'
import './global.css'
import styles from './App.module.scss'

export function App() {
  return (
   <div>
     <Header/>
     <div className={styles.wrapper}>
       <Sidebar/>
       <main>
         <Post author="ale" content="amsidjdaoiaos js doidoajs dld jalsad jd "/>
         <Post author="ale" content="amsidjdaoiaos js doidoajs dld jalsad jd "/>
       </main>
     </div>
   </div>
  )
}
