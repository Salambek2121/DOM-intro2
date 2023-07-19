const test2 = () => {
    const  a =  document.createElement('a')
    a.textContent = 'сылка на статью о DOM'
    a.href = 'https://ru.wikipedia.org/wiki/Document_Object_Model'


    
return document.getElementById('main').append(a)

}
test2()