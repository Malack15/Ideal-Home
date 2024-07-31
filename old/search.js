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
        image: 'images/nai.jpg',
        title: '4 Bed House in Lavington',
        description: 'This exquisite 4-bedroom ensuite property offers the perfect blend of luxury, comfort, and convenience. Nestled in a secure and serene neighbourhood, this home provides an unparalleled living experience. With only 10 units in the compound and a lush garden space, you will enjoy both exclusivity and natural beauty.',
        price:80000000,
    },
    {
        id: 3,
        image: 'images/kis.jpeg',
        title: '10 Bed House with En Suite at Milimani',
        description: '1st block -1 unit of four bedrooms , 3 units of two bedrooms and 2 units of one bedroom.2nd block -1 unit of three bedrooms, 2 units of two bedrooms and 1 unit of one bedroom.3rd block - 1 unit of two bedrooms.All in one acre stone walled.Over 100 tree speciesAirbnb type of hospitality Monthly income 2M',
        price:300000000,
    },
    {
        id: 4,
        image: 'images/momb.jpg',
        title: '4 Bed Villa with En Suite at Nyali Mombasa',
        description: '4 bedroom massionate for sale located Nyali Mombasa kenyaSize of the plot 1/4 acre Gated community each with private compound, backyard area with gardenParking areaVery quite area With sea view from the terraceAll rooms ensuitGround floorLiving room with separate dinning areaKitchen with Dsq and laundry areaAll with slinding doors1st floor3 bedroom All ensuit with Balconies2nd floorKing size master bedroom3rd floor terrace with sea viewSale at ksh 65M Swimming poolGarden sanctuary',
        price:65000000,
    },
]
const categories=[...new Set(product.map((item)=> {return item}))]
document.getElementById('searchBar').addEventListener('keyup', (e)=>{
    const searchData = e.target.value.toString();
    const filterData = categories.filter((item)=> {
        return(
            item.title.toLocaleLowerCase().includes(searchData)
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
