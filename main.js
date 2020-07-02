let coin = {
    state: 0,
    flip: function() {
        this.state = Math.round (Math.random())
        
        
        /* 1. Randomly set your coin object's "state" property to be either 
        0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        coin.flip()
        if (this.state === 1) {
            document.body.append  ("heads")
        } else {
            document.body.append ("tails")
        }
        

        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        coin.flip()
        let image = document.createElement('img');
        if (this.state === 1) {
            
            image.src = './image/face-up.jpg'
            
        }else {
            image.src = './image/face-down.jpg'
            
            
        }
    
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        document.body.append (image);
    }
    
    
    
}

function display20Flips() {
    for (index = 0; index <= 20; index += 1) {

        coin.toString()
        
    }
} 
display20Flips ()
function display20Images() {
    for (index = 0; index <= 20; index += 1){

        coin.toHTML()
    }
}
display20Images ()