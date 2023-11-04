class MyButton{
    constructor(text, btnClass){
        this.text = text;
        this.btnClass = btnClass;
    }

    show(){
        document.write(`<button class="${this.btnClass}">${this.text}</button>`);
    }

    set buttonText(value){
        this.text = value;
    }

    get buttonText(){
        return this.text;
    }

}

class ColorButton extends MyButton{
    constructor(text, btnClass, colorClass){
        super(text, btnClass);
        this.colorClass = colorClass;
    }

    show() {
    document.write(`<button class="${this.btnClass} ${this.colorClass}">${this.text}</button>`);
    }
}

const saveButton = new ColorButton("Save Progress", "btn" ,"btn btn-success");
const clickMeButton = new ColorButton("Click Me", "btn" ,"btn btn-light");
const downloadButton = new ColorButton("Download", "btn" ,"btn btn-light");
const seeMoreButton = new ColorButton("See More", "btn", "btn btn-danger");

saveButton.show();
clickMeButton.show();
downloadButton.show();
seeMoreButton.show();

