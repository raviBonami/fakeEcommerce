import fridge from '../../shared/images/productImg/fridge.jpg'
import television from '../../shared/images/productImg/television4.webp'
import microwave from '../../shared/images/productImg/microwave.jpg'
import geyser from '../../shared/images/productImg/geyser.jpg'
import ac from '../../shared/images/productImg/airConditioner.webp'
import phone from '../../shared/images/productImg/phone.jpg'
import laptop from '../../shared/images/productImg/laptop3.webp'
import pendrive from '../../shared/images/productImg/pendrive.jpg'
import fan from '../../shared/images/productImg/fan.webp'
import ledBulb from '../../shared/images/productImg/ledBulb.webp'

import fridgeSeller from '../../shared/images/sellerImg/fridgeSeller.jpg'
import tvseller from '../../shared/images/sellerImg/tvseller2.jpg'
import microwaveSeller from '../../shared/images/sellerImg/microwaveSeller.jpg'
import geyserSeller from '../../shared/images/sellerImg/geyserSeller.jpeg'
import acSeller from '../../shared/images/sellerImg/acSeller.jpeg'
import phoneSeller from '../../shared/images/sellerImg/smartPhoneSeller.jpeg' 

export const PRODUCTS = [
    {
        id: 1,
        name: 'Fridge',
        img:fridge,
        rating: 3.5,
        price: 12000,
        seller: 'Steve Rogers',
        sellerImg: fridgeSeller,
        quantity: 0
    },
    {
        id: 2,
        name: 'Television',
        img:television,
        rating: 4.5,
        price: 31000,
        seller: 'Mark Hunt',
        sellerImg: tvseller,
        quantity: 0
    },
    {
        id: 3,
        name: 'Microwave',
        img:microwave,
        rating: 5,
        price: 15000,
        seller: "Tim Howard",
        sellerImg:microwaveSeller,
        quantity: 0
    },
    {
        id: 4,
        name: 'Geyser',
        img:geyser,
        rating:2.5,
        price: 7000,
        seller: 'Billy Scott',
        sellerImg: geyserSeller,
        quantity: 0
    },
    {
        id: 5,
        name: 'Air Conditioner',
        img:ac,
        rating: 4,
        price: 42000,
        seller: 'Nathan Reid',
        sellerImg: acSeller,
        quantity: 0
    },
    {
        id: 6,
        name: 'Smartphone',
        img:phone,
        rating: 3.5,
        price: 30000,
        seller: 'David Smith',
        sellerImg:  phoneSeller,
        quantity: 0
    },
    {
        id: 7,
        name: 'Laptop',
        img:laptop,
        rating: 2.5,
        price: 62000,
        seller: 'Will Logan' ,
        sellerImg: fridgeSeller,
        quantity: 8
    },
    {
        id: 8,
        name: 'Pen Drive',
        img:pendrive,
        rating: 3,
        price: 500,
        seller: 'Paul Fletcher',
        sellerImg: microwaveSeller,
        quantity: 0
    },
    {
        id: 9,
        name: 'Fan',
        img:fan,
        rating:4.5,
        price: 1200,
        seller: 'Ryan Bell',
        sellerImg: geyserSeller,
        quantity: 0
    },
    {
        id: 10,
        name: 'LED Bulb',
        img:ledBulb,
        rating: 4.5,
        price: 300,
        seller: 'Martin Locke',
        sellerImg: tvseller,
        quantity: 0
    }
]

export const getProducts = () => {
    // return products;
}