const test = () =>{
    const h2 = document.createElement('h2')
    h2.textContent = 'работа с DOM'
    return document.body.prepend(h2)

}
test()