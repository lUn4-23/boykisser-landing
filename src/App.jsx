import images from './assets/boykisser_dance.gif'
import './App.css'


console.log(images);

function App() {

  return (
    <>
    <div className='grid h-screen place-items-center'>
    <img src={images} alt="silly image"  />
    </div>
    </>
  )
}

export default App
