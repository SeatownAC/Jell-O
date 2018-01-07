var today = new Date ();
var hourNow = today.getHours ();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
}
    else if (hourNow > 12) {
    greeting = 'Good afternoon!';
}
    else if (hourNow > 0) {

}
    else {
        greeting = 'Welcome!';
}

document.write ('<h3>' + greeting + '</h3>');






var flavorList = ['cherry', 'lime', 'orange', 'strawberry', 'blackberry']

for (i = 0; i < flavorList.length; i++) {
    document.write ("<li>"+flavorList[i]+"</li>")

}

var pbjprepList = ['Peanut Butter', 'Jelly', 'Two Slices of Bread', 'Butter Knife']



for (var i = 0; i < pbjprepList.length; i++)  {



document.write (pbjprepList[i])

}



