let coin = {
    state: 0,
    flip: function() {
        var d = Math.random();
if (d < 0.5){
    this.state = 0
}else {
    this.state = 1
}
        

        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        if (this.state === 1) {
            return "heads"
        } else {
            return "tails"
        }
        

        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        if (this.state === 1) {
            
            image.src = 'images/face-up.jpg'
            
        }else {
            image.src = 'images/face-down.jpg'
            
            
        }
    
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
    
    
       
}

