const product=[
    {
        id: 0,
        image: 'images/cover.jpg',
        title: 'villa',
        price:500000
    },
    {
        id: 1,
        image: 'images/images(2).jpg',
        title: 'villa',
        price:400000,
    },
    {
        id: 2,
        image: 'images/images(3).jpg',
        title: 'villa',
        price:700000,
    },
    {
        id: 3,
        image: 'images/images(4).jpg',
        title: 'villa',
        price:800000,
    },
    {
        id: 4,
        image: 'images/images(5).jpg',
        title: 'villa',
        price:1000000,
    },
]
const categories=[...new Set(product.map((item)=> {return item}))]
document.getElementById('searchBar').addEventListener('keyup', (e)=>{
    const seachData = e.target.value.toLowercase();
    const filterData = categories.filter((item)=> {
        return(
            item.title.toLocaleLowerCase().includes(seachData)
        )
    })
    displayItem(filterData)
});
const displayItem = (items)=> {
    document.getElementById('root').innerHTML=items.map((item)=>{
        var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='image-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$ ${price}.00</h2>
                    <button>Add to cart</button>
                </div>`
            

        )
    }).join('')
};
displayItem(categories);
