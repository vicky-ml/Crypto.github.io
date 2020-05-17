const newslist = document.querySelector('.news-list');

newslist.innerHTML = ''
const apikey = '1cdb1bbfe220494d93ab99e36273ad45'
let topic = "cryptocurrency";
let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apikey}`

console.log(topic)
fetch(url).then((res) => {
    return (res.json())
}).then((data) => {
    console.log(data)
    data.articles.forEach(article => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', article.url);
        a.setAttribute('target', '_blank');
        a.textContent = article.title;
        li.appendChild(a);
        newslist.appendChild(li);
    });
})
