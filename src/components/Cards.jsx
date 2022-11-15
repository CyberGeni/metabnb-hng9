import Star from '../assets/icons/star-filled.svg';
import Card1 from '../assets/images/card-img-1.svg';
import Card2 from '../assets/images/card-img-2.svg';
import Card3 from '../assets/images/card-img-3.svg';
import Card4 from '../assets/images/card-img-4.svg';
import Card5 from '../assets/images/card-img-5.svg';
import Card6 from '../assets/images/card-img-6.svg';
import Card7 from '../assets/images/card-img-7.svg';
import Card8 from '../assets/images/card-img-8.svg';

function Cards() {
    const cards = [
        {
            id: 1,
            image: Card1,
            name: 'Treasure 1'
        },
        {
            id: 2,
            image: Card2,
            name: 'Treasure 2'
        },
        {
            id: 3,
            image: Card3,
            name: 'Treasure 3'
        },
        {
            id: 4,
            image: Card4,
            name: 'Treasure 4'
        },
        {
            id: 5,
            image: Card5,
            name: 'Treasure 5'
        },
        {
            id: 6,
            image: Card6,
            name: 'Treasure 6'
        },
        {
            id: 7,
            image: Card7,
            name: 'Treasure 7'
        },
        {
            id: 8,
            image: Card8,
            name: 'Treasure 8'
        },
    ]
    return ( 
        <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-content-evenly place-items-center gap-4 mb-4">
            {
                cards.map(card => (
                    <div>
                        <div 
                            key={card.id}
                            className="border rounded-2xl border-gray-300 p-3 w-fit"
                        >
                            <img src={card.image} className="w-full max-w-sm sm:max-w-xs" alt="" />
                            <div className="flex justify-between mt-4">
                                <span className="text-xs">Desert king</span>
                                <span className="font-semibold text-xs">1MBT per night</span>
                            </div>
                            <div className="flex justify-between my-2">
                                <span className="text-xs">2345km away</span>
                                <span className="text-xs">available 2weeks stay</span>
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