const players = [
    {
        name: 'Manuel Neuer',
        position: 'GK',
        img: 'https://a.espncdn.com/photo/2016/0525/r86230_1600x1000cc.jpg',
        club: 'FC Bayern Munich',
        country: 'Germany',
        age: 36,
        salary: 18,
        buyingPrice: 6
    },
    {
        name: 'Alisson Becker',
        position: 'GK',
        img: 'https://www.thestatesman.com/wp-content/uploads/2018/07/Alisson-Becker-Twitter-1.jpg',
        club: 'Liverpool FC',
        country: 'Brazil',
        age: 29,
        salary: 8,
        buyingPrice: 5.5
    },
    {
        name: 'Ederson',
        position: 'GK',
        img: 'https://e3.365dm.com/22/04/768x432/skysports-ederson-goalline_5735744.jpg?20220410170137',
        club: 'Manchester City',
        country: 'Brazil',
        age: 28,
        salary: 3.5,
        buyingPrice: 5.5
    },
    {
        name: 'Thibaut Courtois',
        position: 'GK',
        img: 'https://www.dreamteamfc.com/c/wp-content/uploads/sites/4/2018/08/NINTCHDBPICT000392250933.jpg?strip=all&w=960&quality=100',
        club: 'Real Madrid',
        country: 'Belgium',
        age: 29,
        salary: 7.2,
        buyingPrice: 5.5
    },
    {
        name: 'Ter Stegan',
        position: 'GK',
        img: 'https://images.beinsports.com/-0h7XiHJ-DWCmurStVdks0VQUIE=/full-fit-in/1000x0/marc-andre-ter-stegen_ejogpfq3gtfx19isvnrjlbijg.jpg',
        club: 'FC Barcelona',
        country: 'Germany',
        age: 29,
        salary: 5,
        buyingPrice: 5
    },
    {
        name: 'Edouard Mendy',
        position: 'GK',
        img: 'http://c.files.bbci.co.uk/29C3/production/_122219601_mendy_getty_1234921177.jpg',
        club: 'Chelsea',
        country: 'Senegal',
        age: 30,
        salary: 3,
        buyingPrice: 5
    },
    {
        name: 'Virgil van dijk',
        position: 'CB',
        img: 'https://cdn-wp.thesportsrush.com/2020/05/Untitled-design-2020-05-11T225815.385.jpg',
        club: 'Liverpool FC',
        country: 'Nederland',
        age: 30,
        salary: 11.3,
        buyingPrice: 6
    },
    {
        name: 'Sergio Ramos',
        position: 'CB',
        img: 'https://as01.epimg.net/futbol/imagenes/2021/07/04/primera/1625420090_261961_1625422839_noticia_normal_recorte1.jpg',
        club: 'PSG',
        country: 'Spain',
        age: 36,
        salary: 15,
        buyingPrice: 5
    },
    {
        name: 'Antonio R??diger',
        position: 'CB',
        img: 'https://phantom-marca.unidadeditorial.es/0bac4a27844045777f4f5b6ffab664c4/crop/0x117/1255x818/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/08/16467615612835.jpg',
        club: 'Chelsea',
        country: 'Germany',
        age: 29,
        salary: 5.5,
        buyingPrice: 5.5
    },
    {
        name: 'Joao Cancelo',
        position: 'LB',
        img: 'https://sm.imgix.net/21/21/joao-cancelo.jpg',
        club: 'Manchester City',
        country: 'Portugal',
        age: 27,
        salary: 4,
        buyingPrice: 6
    },
    {
        name: 'Trent Alexander-Arnold',
        position: 'RB',
        img: 'https://www.thesun.co.uk/wp-content/uploads/2019/05/NINTCHDBPICT000488218700-e1557265419417.jpg',
        club: 'Liverpool FC',
        country: 'England',
        age: 23,
        salary: 9.3,
        buyingPrice: 6
    },
    {
        name: 'Alphonso Davies',
        position: 'LB',
        img: 'https://img.resized.co/offtheball/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL21lZGlhLnJhZGlvY21zLm5ldFxcXC91cGxvYWRzXFxcLzIwMjJcXFwvMDFcXFwvMTQxNjE5NDZcXFwvMkhFRDVHOC1lMTY0MjE3NzI1ODExNS5qcGVnXCIsXCJ3aWR0aFwiOjk3MCxcImhlaWdodFwiOjQ4NSxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvd3d3Lm9mZnRoZWJhbGwuY29tXFxcL2ltYWdlc1xcXC9uby1pbWFnZS5wbmc_dj0zXCJ9IiwiaGFzaCI6ImE0Zjc2YmRmZjVkNjFkZDlkMGIzNjk5NzdhZjBkZjIxOTQwMjBmMTgifQ==/bayern-s-alphonso-davies-sidelined-with-heart-inflammation.jpeg',
        club: 'FC Bayern Munich',
        country: 'Canada',
        age: 21,
        salary: 5,
        buyingPrice: 5.5
    },
    {
        name: 'Ronald Ara??jo',
        position: 'CB',
        img: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg1NTU1ODk1OTQ4NjgyMzIy/ronald-araujo.jpg',
        club: 'FC Barcelona',
        country: 'Uruguay',
        age: 23,
        salary: 5,
        buyingPrice: 5.5
    },
    {
        name: 'Kevin De Bruyne',
        position: 'Mid',
        img: 'https://i.guim.co.uk/img/media/9f49f182ad0e9b588006ecdbdfed9e49d00afcd2/1396_301_1830_1098/master/1830.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=f8239a81e1f610072c2abdef14bb16d0 ',
        club: 'Manchester City',
        country: 'Belgium',
        age: 30,
        salary: 20.8,
        buyingPrice: 11
    },
    {
        name: 'Toni Kroos ',
        position: 'Mid',
        img: 'https://cdn.vox-cdn.com/thumbor/DLy5VDxHXjwz5YlsaAI8ffW9OKs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23062236/1356770844.jpg',
        club: 'Real Madrid',
        country: 'Germany',
        age: 32,
        salary: 10.8,
        buyingPrice: 10
    },
    {
        name: 'Luka Modri??',
        position: 'Mid',
        img: 'https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2018/07/lukamodric.jpg?fit=1600%2C1200&ssl=1',
        club: 'Real Madrid',
        country: 'Croatia',
        age: 36,
        salary: 10.5,
        buyingPrice: 10
    },
    {
        name: 'Pedri Gonzalez',
        position: 'Mid',
        img: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta8382b6e3d8cbbb0/624da6d03ab54104be3f1c8d/Pedri_Barcelona_2021-22.jpg?auto=webp&format=jpg&quality=100',
        club: 'FC Barcelona',
        country: 'Spain',
        age: 19,
        salary: 1.6,
        buyingPrice: 8
    },
    {
        name: 'Joshua Kimmich',
        position: 'Mid',
        img: 'https://static.dw.com/image/56542046_6.jpg',
        club: 'FC Bayern Munich',
        country: 'Germany',
        age: 27,
        salary: 20,
        buyingPrice: 10
    },
    {
        name: 'Marco Veratti',
        position: 'Mid',
        img: 'https://icdn.psgtalk.com/wp-content/uploads/2021/09/marco-verratti-psg-v-man-city-ucl-2021.jpg',
        club: 'PSG',
        country: 'Italy',
        age: 29,
        salary: 6,
        buyingPrice: 10
    },
    {
        name: 'Mo Salah',
        position: 'Forward',
        img: 'https://i.guim.co.uk/img/media/13ec23718f0908726b65148e9d855fa9ae07e0e7/215_149_4041_2426/master/4041.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=9fd15e291d0d6b341c63a95f3812aead',
        club: 'Liverpool FC',
        country: 'Egypt',
        age: 29,
        salary: 10,
        buyingPrice: 12
    },
    {
        name: 'Neymar Jr.',
        position: 'Forward',
        img: 'https://images.ctfassets.net/3mv54pzvptwz/3HKVm4qSucM2rah7zYMie2/652400732d711a1429b3786a71d78ec6/14neymar_jr_psg_x_lorient_ligue1_20220403.JPG',
        club: 'PSG',
        country: 'Brazil',
        age: 30,
        salary: 40.8,
        buyingPrice: 12
    },
    {
        name: 'Cristiano Ronaldo',
        position: 'Forward',
        img: 'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg3MzY3NTU0NDkzMTk2MDQ3/imago1008876946h.jpg',
        club: 'Manchester United',
        country: 'Portugal',
        age: 37,
        salary: 26.52,
        buyingPrice: 12
    },
    {
        name: 'Robert Lewanwosky',
        position: 'Forward',
        img: 'https://www.fcbarcelonanoticias.com/uploads/s1/12/92/93/6/lewandowski-celebrando-un-gol.jpeg',
        club: 'FC Bayern Munich',
        country: 'Poland',
        age: 33,
        salary: 19.5,
        buyingPrice: 13
    },
    {
        name: 'Karim Benzema',
        position: 'Forward',
        img: 'https://www.nationalworld.com/jpim-static/image/2021/11/24/12/GettyImages-1236322952.jpg?width=640&enable=upscale',
        club: 'Real Madrid',
        country: 'France',
        age: 34,
        salary: 8,
        buyingPrice: 13
    },
    {
        name: 'Kylian Mbappe',
        position: 'Forward',
        img: 'https://icdn.football-espana.net/wp-content/uploads/2022/04/Kylian-Mbappe-4.jpeg',
        club: 'PSG',
        country: 'France',
        age: 23,
        salary: 22,
        buyingPrice: 13
    },
    {
        name: 'Leonel Messi',
        position: 'Forward',
        img: 'https://phantom-marca.unidadeditorial.es/02acff324f99fa75942ddb8299e56d6c/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/05/16281998621196.jpg',
        club: 'PSG',
        country: 'Argentina',
        age: 34,
        salary: 41,
        buyingPrice: 13
    }
]