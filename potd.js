var imlocation = "potd/";
function ImageArray(n) {
    this.length = n;
    for (var i = 1; i <= n; i++) {
        this[i] = ' '
    }
}
image = new ImageArray(7);
image[0] = 'sun.jpg';
image[1] = 'mon.jpg';
image[2] = 'tue.jpg';
image[3] = 'wed.jpg';
image[4] = 'thu.jpg';
image[5] = 'fri.jpg';
image[6] = 'sat.jpg';
var currentdate = new Date();
var imagenumber = currentdate.getDay();
document.write('<img src="' + imlocation + image[imagenumber] + '" width="480PX">');
//--></script>