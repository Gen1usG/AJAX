// 请求style.css
getCSS.onclick = () => {
    const xhr = new XMLHttpRequest
    xhr.open('GET', '/style.css')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status < 400) {
            let style = document.createElement('style')
            style.textContent = xhr.response
            document.head.appendChild(style)
            test.classList.add('red')
        }
    }
    xhr.send()
}

// 请求2.js
getJS.onclick = () => {
    const xhr = new XMLHttpRequest
    xhr.open('GET', '/2.js')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let script = document.createElement('script')
            script.textContent = xhr.response
            document.body.appendChild(script)
        }
    }
    xhr.send()
}

// 请求html
window.onload = () => {
    const xhr = new XMLHttpRequest
    xhr.open('GET', '/3.html')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let temp = document.createElement('template')
            temp.innerHTML = xhr.response
            test.appendChild(temp.content.firstChild)
        }
    }
    xhr.send()
}

// 请求XML
// .responseXML属性可以直接将XML请求的到的内容直接转换成Dom对象
getXML.onclick = () => {
    const xhr = new XMLHttpRequest
    xhr.open('GET', '/4.xml')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let xmlDom = xhr.responseXML
            let text = xmlDom.children[0].textContent
            console.log(text.trim());
        }
    }
    xhr.send()
}

// 请求JSON
let indexOfJSON = 1
getJSON.onclick = () => {
    const xhr = new XMLHttpRequest
    xhr.open('GET', `/page${indexOfJSON + 1}`)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let arr = JSON.parse(xhr.response)
            arr.forEach(item => {
                let el = document.createElement('li')
                el.textContent = item.id
                xxx.appendChild(el)
            })
            indexOfJSON += 1
            if (indexOfJSON >= 3) {
                getJSON.setAttribute('disabled', 'disabled')
            }
        }
    }
    xhr.send()
}

