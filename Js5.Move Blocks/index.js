let blockPositions = {
    "block1": { top: 100, left: 350 }, 
    "block2": { top: 100, left: 650 }, 
    "block3": { top: 100, left: 950 }
};

const coordinateBlocks = (name, targetX, targetY) => {

    let top = parseInt(document.getElementById(name).style.top) || blockPositions[name].top;
    let left = parseInt(document.getElementById(name).style.left) || blockPositions[name].left;

    if (top < targetY) 
        top++;
    else if (top > targetY) 
        top--;    

    if (left < targetX) 
        left++;
    else if (left > targetX) 
        left--;    

    document.getElementById(name).style.top = top + "px";
    document.getElementById(name).style.left = left + "px";

    if (top !== targetY || left !== targetX) 
        setTimeout(() => coordinateBlocks(name, targetX, targetY), 2);
    
}

document.addEventListener("mousedown", function(event) {
    var x = event.clientX;
    var y = event.clientY;

    switch (event.button) {
        // Left
        case 0: 
            coordinateBlocks("block1", x, y);
            break;
        // Middle 
        case 1: 
            event.preventDefault();
            coordinateBlocks("block2", x, y); 
            break;
        // Right             
        case 2: 
            event.preventDefault();
            coordinateBlocks("block3", x, y);
            break;
    }       
});