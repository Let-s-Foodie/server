'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'sellers',
      [
        {
          userId: '1',
          name: 'Gordon Ramsay Burger',
          lat: 36.112236803839,
          lng: -115.17215823629,
          instagram:
            'https://www.instagram.com/explore/locations/1339884086073474/united-states/las-vegas-nevada/gordon-ramsay-burger/?hl=en',
          facebook: 'https://m.facebook.com/profile.php?id=1649742758665944',
          yelp: 'https://www.yelp.com/biz/gordon-ramsay-burger-las-vegas-4',
          youtube: 'https://www.youtube.com/watch?v=iM_KMYulI_s',
          homepage: 'https://www.gordonramsayrestaurants.com/burger/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: '2',
          name: 'Blu Jam Cafe',
          lat: 34.0837391,
          lng: -118.3505421,
          instagram: 'https://www.instagram.com/blujamcafe/?hl=en',
          facebook: 'https://www.facebook.com/BluJamCafe/',
          yelp: 'https://www.yelp.com/biz/blu-jam-cafe-los-angeles-4',
          youtube: 'https://www.youtube.com/watch?v=AqBSrq_M6o4',
          homepage: 'https://www.blujamcafe.com/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: '1',
          name: "Phil's BBQ",
          lat: 32.7338732,
          lng: -117.2041676,
          instagram: 'https://www.instagram.com/philsbbq/',
          facebook: 'https://www.facebook.com/PhilsBBQsd/',
          yelp: 'https://www.yelp.com/biz/phils-bbq-san-diego-2',
          youtube: 'https://www.youtube.com/watch?v=R37vwgTer7o',
          homepage: 'https://philsbbq.net/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: '2',
          name: "Porto's Bakery & Cafe",
          lat: 34.1504741,
          lng: -118.255275,
          instagram: 'https://www.instagram.com/portosbakery/',
          facebook: 'https://www.facebook.com/portosbakery/',
          yelp:
            'https://www.yelp.com/biz/portos-bakery-and-cafe-glendale?osq=Porto%27s+Bakery+%26+Cafe',
          youtube: 'https://www.youtube.com/channel/UCxw43eh3X6Kizf7xlJWKekg',
          homepage: 'https://www.portosbakery.com/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: '1',
          name: 'Salt & Straw',
          lat: 34.0243689,
          lng: -118.3937899,
          instagram: 'https://www.instagram.com/saltandstraw/',
          facebook: 'https://www.facebook.com/SaltandStraw',
          yelp: 'https://www.yelp.com/biz/salt-and-straw-los-angeles',
          youtube: 'https://www.youtube.com/watch?v=lSSLQwgWCAk',
          homepage: 'https://saltandstraw.com/',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sellers', null, {})
  },
}
