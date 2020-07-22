const body = document.querySelector('body');


fetch('https://pokeapi.co/api/v2/pokemon/mewtwo')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    let sprites = data.sprites;
    console.log(sprites);
    let profilePic = sprites.front_default;
    console.log(profilePic);
    let pokeName = data.name;
    console.log(pokeName);
    let height = data.height;
    let weight = data.weight;
    console.log(height);
    let moves = data.moves;
    console.log(moves);
    let laserFocus = moves[134].move.name;
    console.log(laserFocus);
    let type = data.types[0].type.name;
    console.log(type);
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '18rem';

    const image = document.createElement('img');
    image.src = profilePic;
    image.classList.add('card-img-top');
    image.alt = pokeName;
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = pokeName;
    console.log(cardTitle);
    const p1 = document.createElement('p');
    p1.classList.add('card-text');
    p1.textContent = 'Weight: '+weight;
    const p2 = document.createElement('p');
    p2.classList.add('card-text');
    p2.textContent = 'Height: '+height;
    const p3 = document.createElement('p');
    p3.classList.add('card-text');
    p3.textContent = 'Move: '+laserFocus;
    const p4 = document.createElement('p');
    p4.classList.add('card-text');
    p4.textContent = 'Type: '+type;


    cardBody.appendChild(cardTitle);

    // cardBody,appendChild(image);
    cardBody.appendChild(p1);
    cardBody.appendChild(p2);
    cardBody.appendChild(p3);
    cardBody.appendChild(p4);

    card.appendChild(image);
    body.appendChild(card);

    body.appendChild(cardBody);
});


{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
