function jumpingJimmy(tower, jumpHeight) {
    let height = 0;
    if(!!tower && !!jumpHeight)
    for(let i=0;i<tower.length;i++){
        if(tower[i]<=jumpHeight)
            height+=tower[i];
        else     
            return height;
    }
    return height;
}

