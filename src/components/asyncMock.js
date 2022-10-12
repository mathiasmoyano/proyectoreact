const products = [
    {
        id: '1',
        name: 'Asus TUF f15',
        price: 'USD$1250',
        category: 'Gaming Laptop',
        img: '/images/AsusTuff15.png',
        stock: 3,
        description: 'ASUS TUF Gaming F15 Gaming Laptop, 15.6â€ 144Hz FHD IPS-Type Display, Intel Core i5-10300H Processor, GeForce GTX 1650, 8GB DDR4 RAM, 512GB PCIe SSD, Wi-Fi 6, Windows 11 Home, FX506LH-AS51'
    },
    {
        id: '2', name: 'Lenovo Legion 5', price: 'USD$1659', category: 'Gaming Laptop', img: '/images/Legion 5.png', stock: 4, description: 'Lenovo Legion 5 Gaming Laptop, 15.6" FHD Display, AMD Ryzen 7 5800H, 16GB RAM, 512GB Storage, NVIDIA GeForce RTX 3050Ti, Windows 10H, Phantom Blue'
    },
    {
        id: '3', name: 'GIGABYTE AERO 15', price: 'USD$3999', category: 'Gaming Laptop', img: '/images/Aero15.png', stock: 2, description: 'GIGABYTE AERO 15 OLED YD - 15.6" UHD 4k AMOLED IPS, Intel Core i9, NVIDIA GeForce RTX 3080 Laptop GPU 8GB GDDR6, 32GB RAM, 512GB SSD + 1TB SSD, Win10 Pro, Creator Laptop (AERO 15 OLED YD-93US648SP)'
    },
    {
        id: '4', name: 'Pavilion HP 2022', price: 'USD$1129', category: 'Gaming Laptop', img: '/images/2022 HP Pavilion Gaming.png', stock: 5, description: '15.6" FHD IPS Laptop, AMD Ryzen 5-5600H (Beats i7-9750H), 8GB RAM, 256GB PCIe SSD, Backlit Keyboard, GeForce GTX 1650, Win 11, Acid Green, 32GB SnowBell USB Card'
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}