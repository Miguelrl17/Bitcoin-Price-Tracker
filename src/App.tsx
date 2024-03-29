import { useState } from "react"
import Input from "./input";
function App() {
  const [amount, setAmount] = useState('');
  return (
    /* The main classname allows me to change the overall size of the header
    and also creates a nice border or pading using px or border after auto
    */
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="uppercase text-6xl text-center font-bold bg-gradient-to-br from-purple-600 to-sky-400 bg-clip-text text-transparent from 10%">Find cheapest BTC</h1>
      <div className="flex justify-center mt-8">
        $
        <Input
          value={amount}
          onChange={e => setAmount(e.target.value)} />
        USD
      </div>
    </main>
  )
}

export default App
