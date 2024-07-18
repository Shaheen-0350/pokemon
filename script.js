const inputBox = document.getElementById('inputBox');
const search = document.getElementById('search');
const image= document.getElementById('place');
const Name=document.getElementById('name');

function finder() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputBox.value}`).then(response => response.json())
                                                                .then(data => {
                                                                    image.setAttribute('src',(data.sprites.front_default));
                                                                    Name.innerHTML=data.name.toUpperCase();
                                                                })
}