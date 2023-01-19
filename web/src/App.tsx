import './styles/global.css';
import { Habit } from './components/Habit';

function App() {
  return (
    <div>
      <Habit completed={2} />
      <Habit completed={10}/>
      <Habit completed={12}/>
      <Habit completed={13}/>
    </div>
  )
}
export default App
