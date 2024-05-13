
import { useEffect, useState } from 'react'
import './App.css'
import LeftSelectLanguage from './components/LeftSelectLanguage'
import RightSelectLanguage from './components/RightSelectLanguage'
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import { ApiCall } from './services/Api';
function App() {
  const [language1, setLanguage1] = useState('en');
  const [language2, setLanguage2] = useState('hi');
  const [text, setText] = useState('')
  const [ans, setAns] = useState('')
  // console.log('l1->', language1)
  // console.log('l2->', language2)
  console.log(text)
  const handleOnclick = async () => {
    const data = await ApiCall({ q: text, source: language1, target: language2 })
    setAns(data?.data.translations[0].translatedText);
  }
  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '2%' }}>Translate</h1>
      <div style={{ display: 'flex', gap: '50px', alignItems: 'center', justifyContent: 'space-between', width: '50%', marginLeft: '20%', marginBottom: '2%' }}>
        <LeftSelectLanguage language1={language1} onChange={(e) => setLanguage1(e.target.value)} />
        <RightSelectLanguage language2={language2} onChange={(e) => setLanguage2(e.target.value)} />
      </div>
      <div className="translate" style={{ display: 'flex', gap: '50px', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <div style={{ width: '30%' }}>
          <Textarea
            color="neutral"
            disabled={false}
            minRows={4}
            size="sm"
            variant="outlined"
            placeholder='Type Something here...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div style={{ width: '30%' }}>
          <Textarea
            color="neutral"
            disabled={false}
            minRows={4}
            size="sm"
            value={ans}
            variant="outlined"
            placeholder='Type Something here...'
            onChange={(e) => setAns(e.target.value)}

          />
        </div>

      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2%' }} >
        <Button size="md" variant='solid' color="primary" style={{ width: '200px' }} onClick={handleOnclick}>
          Translate
        </Button>
      </div >
    </>
  )
}

export default App
