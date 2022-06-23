import { useState } from "react"

export default function MemoWallList() {
  const [showMemo, setShowMemo] = useState(false)

  let memoList = [
    { "id": 1, "name": "Ken", "message": "HK", "image": "memo_yellow.png"},
    { "id": 2, "name": "Neo", "message": "HI HK", "image": "memo_green.png"},
    { "id": 3, "name": "Fung", "message": "HI HI HK", "image": "memo_pink.png"}
  ]

  const [btnMemo, setBtnMemo] = useState('empty btn')
  const changeValue = () => {
    setBtnMemo('No Empty btn')
    console.log("change text.content")
  }
  return (
    <div>
      <h1>MemoWallList</h1>
      {btnMemo}<button onClick={changeValue}>Change button value</button>

      {!showMemo && <button onClick={() => { setShowMemo(true) }}>Show Memos</button>}
      {showMemo && <button onClick={() => { setShowMemo(false) }}>Hide Memoes</button>}
      {memoList.map((memo)=> {
        return(
          <div key={memo.id}>
            {memo.name}
            {memo.message}
            <img src={process.env.PUBLIC_URL + '/memo/' + memo.image}/>
          </div>
        )
      })}
    </div>
  )
}
