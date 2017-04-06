/**
 * Created by michealin on 3/16/2017.
 */

import _ from 'lodash';


var reviews = [
    {
        "id": 1,
        "name": "Mario Bros",
        "review": "Classic",
        "price": "20.99",
        "age": 3,
        "platform": "WII"
    },

    {
        "id": 2,
        "name": "Metal Gear Solid",
        "review": "Good Story Great Graphics",
        "price": "35.99",
        "age": 16,
        "platform": "PS4"
    },

    {
        "id": 3,
        "name": "Assisains Creed 3",
        "review": "Boring but good Story",
        "price": "45.99",
        "age": 16,
        "platform": "PC"
    },

    {
        "id": 4,
        "name": "GTA V",
        "review": "Brilliant Game",
        "price": "55.99",
        "age": 18,
        "platform": "XBOX ONE"
    },
    {   'id': 5,
        'name': 'Battlefield 1',
        'review': 'Good Game Multiplayer is amazing, great Graphics',
        'price': '57.90',
        'age': 16,
        'platform': 'PLAYSTATION 4'
    },
    {
        'id': 6,
        'name': 'Forza 4',
        'review': 'Slow game not customizable',
        'price': '39.90',
        'age': 3,
        'platform': 'XBOX ONE'
    },
    {
        'id': 7,
        'name': 'Call of Duty 2',
        'review': 'GREAT STORY and multiplayer',
        'price': '27.90',
        'age': 18,
        'platform': 'PC'
    },
    {
        'id': 8,
        'name': 'Super Mario',
        'review': 'Great Game No Multiplayer but good Story',
        'price': '27.90',
        'age': 7,
        'platform': 'WII'
    }
] ;

var stubAPI = {
    delete : function(k) {
        var elements = _.remove(reviews,
            function(contact) {
                return contact.id === k;
            });
        return elements;
    },


    getAll : function() {
        return reviews ;
    },

    add : function(k, n,r,p,Addage, plat) {
        var len = reviews.length ;
        var newL_len = reviews.push({
            id: k, name: n, review : r, price: p, age: Addage, platform: plat}) ;
        return newL_len > len ;
    },

    update : function(key,id,  n,r,p,Addage, plat) {
        var index = _.findIndex(reviews, function(review) {
            return review.id === key;
        } );
        if (index !== -1) {
            reviews.splice(index, 1, {id: id,name: n, review : r, price: p, age: Addage, platform: plat});
            return true ;
        }
        return false ;
    }
}

export default stubAPI ;