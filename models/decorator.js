const Decorator = function() {
    this.paintStock = [];
    this.paintLitres = 0;
}

Decorator.prototype.addPaint = function(paint) {
    this.paintStock.push(paint);
    this.paintLitres += paint.litres;
};
Decorator.prototype.canPaintRoom = function(room) {
    if (this.paintLitres >= room.area) {
        return true;
    }
    return false;
};

module.exports = Decorator;