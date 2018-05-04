function img(x,y) {
    this.x = x;
    this.y = y;
    
    this.display = function() {
        image(img, this.x, this.y);
        
        
    }
}