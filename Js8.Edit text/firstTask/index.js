function keyChecker(e) {
    if (e.ctrlKey && e.key === 'e') {
        e.preventDefault();
        textView.style.display = "none";
        textEditor.style.display = "block";
        textEditor.value = textView.innerText;
        textEditor.style.height = textEditor.scrollHeight + "px"
        textEditor.focus();
    } 

    else if (e.ctrlKey && e.key === 's') {
        if(textEditor.style.display !== "none"){
        e.preventDefault();
        textView.style.display = "block";
        textEditor.style.display = "none";
        textView.innerText = textEditor.value;
    }
    }
}   
