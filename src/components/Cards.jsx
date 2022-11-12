import Star from '../assets/icons/star-filled.svg';
function Cards() {
    const cards = [
        {
            id: 1,
            image: 'src/assets/images/card-img-1.svg',
            name: 'Treasure 1'
        },
        {
            id: 2,
            image: 'src/assets/images/card-img-2.svg',
            name: 'Treasure 2'
        },
        {
            id: 3,
            image: 'src/assets/images/card-img-3.svg',
            name: 'Treasure 3'
        },
        {
            id: 4,
            image: 'src/assets/images/card-img-4.svg',
            name: 'Treasure 4'
        },
        {
            id: 5,
            image: 'src/assets/images/card-img-5.svg',
            name: 'Treasure 5'
        },
        {
            id: 6,
            image: 'src/assets/images/card-img-6.svg',
            name: 'Treasure 6'
        },
        {
            id: 7,
            image: 'src/assets/images/card-img-7.svg',
            name: 'Treasure 7'
        },
        {
            id: 8,
            image: 'src/assets/images/card-img-8.svg',
            name: 'Treasure 8'
        },
    ]
    return ( 
        <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                cards.map(card => (
                    <div>
                        <div 
                            key={card.id}
                            className="border rounded-2xl border-gray-300 p-3"
                        >
                            <img src={card.image} className="w-full" alt="" />
                            <div className="flex justify-between mt-4">
                                <span>Desert king</span>
                                <span className="font-medium">1MBT per night</span>
                            </div>
                            <div className="flex justify-between my-2">
                                <span>2345km away</span>
                                <span className="">available 2weeks stay</span>
                            </div>
                            <div className="flex space-x-1 mb-2">
                                <img src={Star} className="w-3" alt="" />
                                <img src={Star} className="w-3" alt="" />
                                <img src={Star} className="w-3" alt="" />
                                <img src={Star} className="w-3" alt="" />
                                <img src={Star} className="w-3" alt="" />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div> 
    );
}

export default Cards;