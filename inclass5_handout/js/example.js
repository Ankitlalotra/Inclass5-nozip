var list = document.getElementsByTagName('ul')[0];
// ADD NEW ITEM TO END OF LIST
var item = document.createElement('li');
var itemText = document.createTextNode('cream');
item.appendChild(itemText);
list.appendChild(item);
// ADD NEW ITEM START OF LIST
item = document.createElement('li');
itemText = document.createTextNode('kale');
item.appendChild(itemText);
list.insertBefore(item, list.firstChild);
var listItems = document.getElementsByTagName('li');
var listItemCount = listItems.length;
// ADD A CLASS OF COOL TO ALL LIST ITEMS
for (var i = 0; i < listItemCount; ++i) {
    listItems[i].className = 'cool';
}
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var headingTwo = document.querySelector('h2');
item = document.createElement('span');
itemText = document.createTextNode(listItemCount);
item.appendChild(itemText);
headingTwo.appendChild(item);