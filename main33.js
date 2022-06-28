var img = 'https://avatars.githubusercontent.com/u/86226130?v=4';


var image = document.querySelector('.image');

//thay doi thuoc tinh co san; Get laasy du liieu , laasy thong tin ; Set la thiet lap du lieu, thong tin moi


//SET

image.setAttribute("src", img);
image.setAttribute("alt","this is a image");
image.setAttribute("width",100);
image.setAttribute("title", "this is a hinh anh");

//GET
var eldatatitle = Array.from(document.querySelectorAll("[data-title]"));

for( var index=0; index < eldatatitle.length;index++){
    //console.log(eldatatitle[index],index);
    console.log(eldatatitle[index].getAttribute("data-title"));
}

console.log(eldatatitle);