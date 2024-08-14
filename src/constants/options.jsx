export const TravlersList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveles in explorat",
    icon: "✈️",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two traveles in tandem",
    icon: "🥂",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "👪",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "🏄‍♂️",
    people: "5 to 10 People",
  },

  {
    id: 5,
    title: "Custom",
    desc: "A custom group of traveles",
    icon: "🖉",
    people: "Any Number",
  },
];

export const BudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "💸",
  },
];

export const AI_PROMPT =
  "Generate trip plan for Location :{place}, for {days} Days for {travlers} travlers , with a {budget} budget,Give me a Hotels options list with Hotel Name, Hotel address, Price(Please use Currency Converter According to User's Country or City Currency(see the above country or city provided by user and give currency ) ), hotel image url, geo coordinates, rating, descriptions , Hotel booking url link(Please give Geniune Hotel Booking Url link ) and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totaldays} days with each day plan with best time to visit . Please give above all data in JSON format and do not include trip name directly start from location please. and give integer and double datatype as string in jSON Format";
