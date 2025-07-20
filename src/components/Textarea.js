import React, {useState} from 'react'

export default function Textarea(props){
    const [textPeview,settextPreview] =useState("")
    const [text,setText]=useState("")
    const [search, setSearch] = useState("");
    function change(event){
           setText(event.target.value)
           settextPreview(event.target.value)
           
    }
    function handleUpperCase(){
        let newText = text.toUpperCase()
        setText(newText)
        settextPreview(newText)
        props.showAlert("Converted to upper case","success")
    }
    function handleLowCase(){
        let newText = text.toLowerCase()
        setText(newText)
        settextPreview(newText)
        props.showAlert("Converted to lower case","success")
    }
    function handleFirstLetterUpperCase(){
        let newText =text.split(" ").map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        setText(newText)
        settextPreview(newText)
        props.showAlert("first letter is converted to upper case","success")
    }
    function handlecopy(){
        navigator.clipboard.writeText(text)
        props.showAlert("text is copy to clipboard","success")
    }
    function handleSearch(event) {
        setSearch(event.target.value);
    }
    function handleClear(){
        setText("");
        settextPreview("");
    }
    function handleSearchbtn() {
      if (!search.trim()) {
        props.showAlert("Please enter a word", "warning");
        return;
      }
    
      const regex = new RegExp(`(${search})`, "gi"); // Match word case-insensitively
      if (!regex.test(text)) {
        props.showAlert("Word not found", "warning");
        return;
      }
    
      const highlightedText = text.replace(regex, `<b>$1</b>`);
      settextPreview(highlightedText);
    }
    return(
        <>
        <div className="container-fluid my-5">
            <h2>Type Here</h2>
            <div className="mb-3 ">
            <textarea className={`form-control bg-${props.mode} text-${props.mode === "dark" ? "light":"dark"} note`}  value={text} onChange={change} rows={8} id="floatingTextarea" placeholder='Enter your text'></textarea>
            </div>
            <div className="container-fluid my-1 d-flex flex-wrap align-items-center justify-content-start">
  <button className="btn btn-primary  mx-2 mb-2" onClick={handleUpperCase}>
    Convert to Upper Case
  </button>
  <button className="btn btn-primary  mx-2 mb-2" onClick={handleLowCase}>
    Convert to Lower Case
  </button>
  <button className="btn btn-primary  mx-2 mb-2" onClick={handleClear}>
    Clear Text
  </button>
  <button className="btn btn-primary  mx-2 mb-2" onClick={handleFirstLetterUpperCase}>
    First Letter Capital
  </button>
  <button className="btn btn-primary  mx-2 mb-2" onClick={handlecopy}>
    Copy
  </button>

  {/* Search Input + Button together */}
  <div className="conatiner d-flex  align-items-center mx-2 mb-2">
    <input
      className="form-control me-2 mb-2 mb-md-0"
      type="search"
      value={search}
      onChange={handleSearch}
      placeholder="Search"
      aria-label="Search"
      style={{ minWidth: '200px' }}
    />
    <button className="btn btn-primary w-100" onClick={handleSearchbtn}>
      Find Word
    </button>
  </div>
</div>

        </div>
        <div className="container my-3">
            <p><b>{text.split(" ").filter(element=>element!=="").length} words, {text.length} characters</b></p>
            <p><b>{0.008*text.split(" ").length} Minutes to read</b></p>
            <h2>Your text summary</h2>
            <p dangerouslySetInnerHTML={{ __html: textPeview !== ""? textPeview:"see here" }}></p>
        </div>
        </>
    )
}
