const product=[
    {
        id: 0,
        image: 'images/villa0.jpg',
        title: 'Villa - For Rent/Lease - Runda',
        description:'A well-designed and spacious Villa of 8 bedroom all En suite built on half acre piece of land with a guest house and detached staff quarters with 2 bedrooms situated in Runda. It has a spacious well lit living room and spacious sunken lounge for entertainment. The kitchen is spacious open plan facing the dining area, which is neatly separated from the lounge. The spacious guest bedroom and study room / prayer room are located on ground floor.',
        price:650000,
        
    },
    {
        id: 1,
        image: 'images/runda.jpg',
        title: 'House - For Sale - Runda',
        description:'Welcome to this exquisite property nestled in the prestigious neighborhood of Runda. This stunning house sits gracefully on a sprawling one-acre parcel of land, offering an unparalleled blend of luxury, comfort, and serenity. Boasting a perfect fusion of modern design and natural beauty, this home presents a rare opportunity for discerning',
        price:130000000,
    },
    {
        id: 2,
        image: 'images/villa2.jpg',
        title: 'villa3',
        price:700000,
    },
    {
        id: 3,
        image: 'images/villa1.jpg',
        title: 'villa4',
        price:800000,
    },
    {
        id: 4,
        image: 'images/villa.webp',
        title: 'villa5',
        price:50000000,
    },
]
const categories=[...new Set(product.map((item)=> {return item}))]
document.getElementById('searchBar').addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toLowercase();
    const filterData = categories.filter((item)=> {
        return(
            item.title.toLocaleLowerCase().includes(seachData)
        )
    })
    displayItem(filterData)
});
const displayItem = (items)=> {
    document.getElementById('root').innerHTML=items.map((item)=>{
        var {image, title,description, price} = item;
        return(
            `<div class='box'>
                <div class='image-box'>
                    <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <p>${description}</p>
                    <h2>$ ${price}.00</h2>
                    <button>Select</button>
                </div>
            </div>`
            

        )
    }).join('')
};
displayItem(categories);
