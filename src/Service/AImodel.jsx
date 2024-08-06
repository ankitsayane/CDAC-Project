import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location : Mumbai Maharashtra, for 3 Days for Couple with a Cheap budget,Give me a Hotels options list with Hotel Name, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotel_options": [\n    {\n      "hotel_name": "The Gordon House",\n      "hotel_address": "32, Gordon College Rd, Fort, Mumbai, Maharashtra 400001",\n      "price": "$30-50",\n      "hotel_image_url": "https://www.booking.com/hotel/in/the-gordon-house.en-gb.html",\n      "geo_coordinates": "18.9370° N, 72.8348° E",\n      "rating": 4.5,\n      "description": "A charming boutique hotel in Fort, known for its Victorian architecture and central location."\n    },\n    {\n      "hotel_name": "Hotel Marine Plaza",\n      "hotel_address": "Marine Drive, Churchgate, Mumbai, Maharashtra 400020",\n      "price": "$40-60",\n      "hotel_image_url": "https://www.booking.com/hotel/in/marine-plaza.en-gb.html",\n      "geo_coordinates": "18.9386° N, 72.8286° E",\n      "rating": 4,\n      "description": "A well-established hotel with stunning views of the Arabian Sea and Marine Drive."\n    },\n    {\n      "hotel_name": "The Orchid Mumbai",\n      "hotel_address": "91, Nehru Rd, Vile Parle East, Mumbai, Maharashtra 400099",\n      "price": "$50-70",\n      "hotel_image_url": "https://www.booking.com/hotel/in/the-orchid-mumbai.en-gb.html",\n      "geo_coordinates": "19.0704° N, 72.8445° E",\n      "rating": 4.2,\n      "description": "A modern hotel with spacious rooms and a rooftop pool, offering great value for money."\n    },\n    {\n      "hotel_name": "Treebo Trend The Bay",\n      "hotel_address": "C/25, Off, Linking Rd, Khar West, Mumbai, Maharashtra 400052",\n      "price": "$25-40",\n      "hotel_image_url": "https://www.booking.com/hotel/in/treebo-trend-the-bay.en-gb.html",\n      "geo_coordinates": "19.0524° N, 72.8329° E",\n      "rating": 3.8,\n      "description": "A budget-friendly option with clean and comfortable rooms, well-suited for couples."\n    }\n  ],\n  "itinerary": {\n    "day1": {\n      "plan": [\n        {\n          "placeName": "Gateway of India",\n          "placeDetails": "A historic arch monument marking the entrance to Mumbai Harbour.",\n          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Gateway_of_India_night.jpg/1280px-Gateway_of_India_night.jpg",\n          "geoCoordinates": "18.9220° N, 72.8347° E",\n          "ticketPricing": "Free",\n          "rating": 4.8,\n          "time": "Morning (8:00 AM - 11:00 AM)"\n        },\n        {\n          "placeName": "Marine Drive",\n          "placeDetails": "A scenic boulevard along the Arabian Sea, known as the \'Queen\'s Necklace\'.",\n          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Marine_Drive_night_view.jpg/1280px-Marine_Drive_night_view.jpg",\n          "geoCoordinates": "18.9373° N, 72.8295° E",\n          "ticketPricing": "Free",\n          "rating": 4.6,\n          "time": "Evening (5:00 PM - 7:00 PM)"\n        }\n      ]\n    },\n    "day2": {\n      "plan": [\n        {\n          "placeName": "Dhobi Ghat",\n          "placeDetails": "A massive open-air laundry, a unique and fascinating sight.",\n          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Dhobi_Ghat_Mumbai.jpg/1280px-Dhobi_Ghat_Mumbai.jpg",\n          "geoCoordinates": "18.9432° N, 72.8291° E",\n          "ticketPricing": "Free",\n          "rating": 4.2,\n          "time": "Morning (9:00 AM - 12:00 PM)"\n        },\n        {\n          "placeName": "Chhatrapati Shivaji Maharaj Terminus (CST)",\n          "placeDetails": "A UNESCO World Heritage Site, a stunning example of Victorian Gothic architecture.",\n          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/CST_Mumbai_India.jpg/1280px-CST_Mumbai_India.jpg",\n          "geoCoordinates": "18.9417° N, 72.8359° E",\n          "ticketPricing": "Free (entry to the station, tickets for train travel vary)",\n          "rating": 4.7,\n          "time": "Afternoon (1:00 PM - 4:00 PM)"\n        }\n      ]\n    },\n    "day3": {\n      "plan": [\n        {\n          "placeName": "Kanheri Caves",\n          "placeDetails": "Ancient Buddhist cave temples carved into the hills, offering stunning views.",\n          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kanheri_Caves%2C_Mumbai.jpg/1280px-Kanheri_Caves%2C_Mumbai.jpg",\n          "geoCoordinates": "19.1601° N, 72.9215° E",\n          "ticketPricing": "₹10 per person",\n          "rating": 4.4,\n          "time": "Morning (9:00 AM - 12:00 PM)"\n        },\n        {\n          "placeName": "Juhu Beach",\n          "placeDetails": "A popular beach known for its street food, sunsets, and lively atmosphere.",\n          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Juhu_Beach_Mumbai.jpg/1280px-Juhu_Beach_Mumbai.jpg",\n          "geoCoordinates": "19.0654° N, 72.8373° E",\n          "ticketPricing": "Free",\n          "rating": 4.3,\n          "time": "Evening (4:00 PM - 7:00 PM)"\n        }\n      ]\n    }\n  }\n}\n```\n\n**Explanation:**\n\n* **Hotel Options:** This section provides a list of budget-friendly hotels in Mumbai with their basic information like name, address, price range, image URL, geo-coordinates, rating, and a brief description.\n* **Itinerary:** The itinerary is structured for 3 days, each day containing a list of places to visit.\n* **Place Details:** For each place, the JSON object includes the name, a brief description, an image URL, geo-coordinates, ticket pricing (if applicable), rating, and a suggested time for visiting.\n* **Time:** The time field suggests the best time to visit each place, considering factors like crowds, weather, and optimal lighting. \n\n**Note:**\n* Prices for hotels and tickets may vary depending on the season and availability.\n* This itinerary is a suggestion, you can customize it based on your interests and travel style.\n* Make sure to check opening hours and availability before visiting any place.\n\nThis JSON format will help you organize your trip and plan your travel efficiently. You can use this data to build your own interactive travel planner or simply use it as a guide for your Mumbai adventure! \n',
        },
      ],
    },
  ],
});
