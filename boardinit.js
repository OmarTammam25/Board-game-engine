function initializeHTML(dimx, dimy){
    const chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let counter = 0;
    console.log(dimx)
    console.log(dimy)
    let container = document.getElementById('board');
    for (let i = 0; i < dimx*dimy; i++){
        if(i%dimy==0&&(dimx*dimy)%2==0)counter++
        let element = document.createElement('div');
        if(counter%2==0) element.className = "white"
        else element.className = "black"
        element.id = chars[i%dimy]+(Math.trunc(i/dimy)+1);
        console.log(element.id)
        container.appendChild(element);
        counter++;
    };
}