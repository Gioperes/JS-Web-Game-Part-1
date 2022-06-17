function newImage(p1, p2, p3){
    let newImage = document.createElement('img')
newImage.src = p1
newImage.style.position = 'fixed'
newImage.style.left = p2
newImage.style.bottom = p3
document.body.append(newImage)
}

newImage("assets/green-character.gif", "100px", "100px");
newImage("assets/pine-tree.png", "450px","200px")
newImage("assets/tree.png", "200px", "300px");
newImage("assets/pillar.png", "350px", "100px");
newImage("assets/crate.png", "150px", "200px");
newImage("assets/well.png", "500px", "425px");

function newItem(p1,p2,p3){
let newItem = document.createElement('img')
newItem.src = p1
newItem.style.position = 'fixed'
newItem.style.left = p2
newItem.style.bottom = p3
document.body.append(newItem)

newItem.addEventListener('dblclick', function(){
    newItem.remove()
})
}
newItem("assets/sword.png", "500px", "405px");
newItem("assets/sheild.png", "165px", "185px");
newItem("assets/staff.png", "600px", "100px");