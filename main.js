let coin = {
    state: 0,
    flip: function() {
        for (let index = 0; index <= this.state; index += 1) {}

        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        coin.flip ()
        if (this.state === 1)
        if (this.state <= 1) {
            this.state = ["heads"]
        }

        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        coin.flip ()
        if (this.state === 1) {
            
            image.src = 'https://magoosh.com/statistics/files/2018/01/quarter-dollar.jpg'
            mainInput.append(img)
        }else {
            image.src = 'https://coinweek.com/wp-content/uploads/2019/02/pezhead.jpg'
            mainInput.append(img)
            
        }
    
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        // return image;
    }
    console.log(img);
    
}