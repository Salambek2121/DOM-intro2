const test3 = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    document.body.prepend(li)
    return document.getElementById('list').append(li)
}
test3('привет')