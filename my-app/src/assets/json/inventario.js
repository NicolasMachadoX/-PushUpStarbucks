const inventario = [
    {
      "name": "almond protein blended cold brew",
      "price": 5.47,
      "size": "Grande",
      "description": "Delicious blend perfect for any time of the day."
    },
    {
      "name": "almond protein blended cold brew frappuccino",
      "price": 6.34,
      "size": "Tall",
      "description": "Rich and satisfying, a go-to option for coffee lovers."
    },
    {
      "name": "black and white hot cocoa frappuccino",
      "price": 5.75,
      "size": "Tall",
      "description": "An exquisite fusion of taste and quality."
    },
    {
      "name": "black and white mocha",
      "price": 5.14,
      "size": "Venti",
      "description": "Bold flavors that awaken your taste buds."
    },
    {
      "name": "black and white mocha frappuccino",
      "price": 5.54,
      "size": "Venti",
      "description": "Elevate your day with this delightful blend."
    },
    {
      "name": "black and white mocha refresher",
      "price": 4.5,
      "size": "Grande",
      "description": "Smooth and aromatic, a delightful coffee experience."
    },
    {
      "name": "blonde black and white mocha",
      "price": 6.97,
      "size": "Grande",
      "description": "Bold flavors that awaken your taste buds."
    },
    {
      "name": "blonde black and white mocha frappuccino",
      "price": 4.85,
      "size": "Tall",
      "description": "Satisfy your cravings with this delightful creation."
    },
    {
      "name": "blonde black and white mocha refresher",
      "price": 6.79,
      "size": "Venti",
      "description": "Aromatic and enticing, a must-try for coffee enthusiasts."
    },
    {
      "name": "blonde caffe americano",
      "price": 4.31,
      "size": "Venti",
      "description": "Robust and full-bodied, a true coffee delight."
    },
    {
      "name": "blonde caffe americano frappuccino",
      "price": 6.18,
      "size": "Tall",
      "description": "Satisfy your cravings with this delightful creation."
    },
    {
      "name": "blonde caffe americano refresher",
      "price": 5.71,
      "size": "Venti",
      "description": "A balanced, invigorating mix of flavors."
    },
    {
      "name": "blonde caffe latte",
      "price": 6.77,
      "size": "Grande",
      "description": "A creamy, flavorful treat to energize your day."
    },
    {
      "name": "blonde caffe latte frappuccino",
      "price": 6.14,
      "size": "Tall",
      "description": "Elevate your day with this delightful blend."
    },
    {
      "name": "blonde caffe latte refresher",
      "price": 5.38,
      "size": "Tall",
      "description": "Robust and full-bodied, a true coffee delight."
    },
    {
      "name": "blonde cappuccino",
      "price": 5.27,
      "size": "Grande",
      "description": "Indulge in a luxurious coffee experience."
    },
    {
      "name": "blonde cappuccino frappuccino",
      "price": 5.01,
      "size": "Venti",
      "description": "Delicious blend perfect for any time of the day."
    },
    {
      "name": "blonde cappuccino refresher",
      "price": 6.73,
      "size": "Tall",
      "description": "Elevate your day with this delightful blend."
    },
    {
      "name": "blonde caramel brule latte",
      "price": 6.01,
      "size": "Venti",
      "description": "An exquisite fusion of taste and quality."
    },
    {
      "name": "blonde caramel brule latte frappuccino",
      "price": 5.44,
      "size": "Venti",
      "description": "Bold flavors that awaken your taste buds."
    },
    {
      "name": "blonde caramel brule latte refresher",
      "price": 5.41,
      "size": "Venti",
      "description": "Rich and satisfying, a go-to option for coffee lovers."
    },
    {
      "name": "blonde chestnut praline latte",
      "price": 5.24,
      "size": "Grande",
      "description": "Smooth and aromatic, a delightful coffee experience."
    },
    {
      "name": "blonde chestnut praline latte frappuccino",
      "price": 4.02,
      "size": "Venti",
      "description": "An exquisite fusion of taste and quality."
    },
    {
      "name": "blonde chestnut praline latte refresher",
      "price": 4.94,
      "size": "Tall",
      "description": "Bold flavors that awaken your taste buds."
    },
    {
      "name": "blonde doubleshot on ice",
      "price": 5.43,
      "size": "Grande",
      "description": "A creamy, flavorful treat to energize your day."
    },
    {
      "name": "blonde doubleshot on ice frappuccino",
      "price": 5.22,
      "size": "Tall",
      "description": "Indulge in a luxurious coffee experience."
    },
    {
      "name": "blonde doubleshot on ice refresher",
      "price": 4.92,
      "size": "Grande",
      "description": "An exquisite fusion of taste and quality."
    },
    {
      "name": "blonde eggnog latte",
      "price": 5.97,
      "size": "Venti",
      "description": "Bold flavors that awaken your taste buds."
    },
    {
      "name": "blonde eggnog latte frappuccino",
      "price": 4.18,
      "size": "Tall",
      "description": "Elevate your day with this delightful blend."
    },
    {
      "name": "blonde eggnog latte refresher",
      "price": 4.26,
      "size": "Venti",
      "description": "A balanced, invigorating mix of flavors."
    },
    {
      "name": "blonde flat white",
      "price": 4.19,
      "size": "Grande",
      "description": "An exquisite fusion of taste and quality."
    },
    {
      "name": "blonde flat white frappuccino",
      "price": 6.72,
      "size": "Venti",
      "description": "Delicious blend perfect for any time of the day."
    },
    {
      "name": "blonde flat white refresher",
      "price": 5.07,
      "size": "Grande",
      "description": "An exquisite fusion of taste and quality."
    },
    {
      "name": "blonde gingerbread latte",
      "price": 4.91,
      "size": "Tall",
      "description": "Exotic flavors that bring joy with every sip."
    },
    {
      "name": "blonde gingerbread latte frappuccino",
      "price": 4.55,
      "size": "Grande",
      "description": "Indulge in a luxurious coffee experience."
    },
    {
      "name": "blonde gingerbread latte refresher",
      "price": 4.3,
      "size": "Venti",
      "description": "A creamy, flavorful treat to energize your day."
    },
    {
      "name": "blonde juniper latte",
      "price": 4.96,
      "size": "Tall",
      "description": "Robust and full-bodied, a true coffee delight."
    },
    {
      "name": "blonde juniper latte frappuccino",
      "price": 6.35,
      "size": "Venti",
      "description": "Bold flavors that awaken your taste buds."
    },
    {
      "name": "blonde juniper latte refresher",
      "price": 5.45,
      "size": "Tall",
      "description": "Delicious blend perfect for any time of the day."
    },
    {
      "name": "blonde peppermint mocha",
      "price": 5.51,
      "size": "Venti",
      "description": "A refreshing pick-me-up for any occasion."
    },
    {
      "name": "blonde peppermint mocha frappuccino",
      "price": 6.97,
      "size": "Venti",
      "description": "A refreshing pick-me-up for any occasion."
    },
    {
      "name": "blonde peppermint mocha refresher",
      "price": 5.84,
      "size": "Venti",
      "description": "Exotic flavors that bring joy with every sip."
    },
    {
      "name": "blonde peppermint white chocolate mocha",
      "price": 6.53,
      "size": "Grande",
      "description": "Satisfy your cravings with this delightful creation."
    },
    {
      "name": "blonde peppermint white chocolate mocha frappuccino",
      "price": 6.11,
      "size": "Tall",
      "description": "Satisfy your cravings with this delightful creation."
    },
    {
      "name": "blonde peppermint white chocolate mocha refresher",
      "price": 4.46,
      "size": "Tall",
      "description": "Delicious blend perfect for any time of the day."
    },
    {
      "name": "blonde roast",
      "price": 5.66,
      "size": "Tall",
      "description": "A creamy, flavorful treat to energize your day."
    },
    {
      "name": "blonde roast frappuccino",
      "price": 6.98,
      "size": "Tall",
      "description": "Aromatic and enticing, a must-try for coffee enthusiasts."
    },
    {
      "name": "blonde toasted white chocolate mocha",
      "price": 5.12,
      "size": "Tall",
      "description": "Smooth and aromatic, a delightful coffee experience."
    },
    {
      "name": "blonde toasted white chocolate mocha frappuccino",
      "price": 6.04,
      "size": "Venti",
      "description": "Robust and full-bodied, a true coffee delight."
    },
    {
      "name": "blonde toasted white chocolate mocha refresher",
      "price": 4.41,
      "size": "Tall",
      "description": "Robust and full-bodied, a true coffee delight."
    },
    {
      "name": "blonde vanilla bean coconutmilk latte",
      "price": 5.83,
      "size": "Tall",
      "description": "Exotic flavors that bring joy with every sip."
    },
    {
      "name": "blonde vanilla bean coconutmilk latte frappuccino",
      "price": 6.77,
      "size": "Grande",
      "description": "A creamy, flavorful treat to energize your day."
    },
    {
      "name": "blonde vanilla bean coconutmilk latte refresher",
      "price": 5.12,
      "size": "Venti",
      "description": "Bold flavors that awaken your taste buds."
    },
    {
      "name": "blonde vanilla latte",
      "price": 4.05,
      "size": "Grande",
      "description": "A balanced, invigorating mix of flavors."
    },
    {
      "name": "blonde vanilla latte frappuccino",
      "price": 4.91,
      "size": "Venti",
      "description": "Satisfy your cravings with this delightful creation."
    },
    {
      "name": "blonde vanilla latte refresher",
      "price": 5.13,
      "size": "Grande",
      "description": "Exotic flavors that bring joy with every sip."
    },
    {
      "name": "bottled black and white mocha",
      "price": 4.7,
      "size": "Venti",
      "description": "Satisfy your cravings with this delightful creation."
    },
    {
      "name": "bottled blonde black and white mocha",
      "price": 6.12,
      "size": "Grande",
      "description": "Bold flavors that awaken your taste buds."
    },
    {
      "name": "bottled blonde caffe americano",
      "price": 4.8,
      "size": "Grande",
      "description": "Elevate your day with this delightful blend."
    },
    {
      "name": "bottled blonde caffe latte",
      "price": 5.97,
      "size": "Grande",
      "description": "Rich and satisfying, a go-to option for coffee lovers."
    },
    {
      "name": "bottled blonde cappuccino",
      "price": 6.86,
      "size": "Tall",
      "description": "An exquisite fusion of taste and quality."
    },
    {
      "name": "bottled blonde caramel brule latte",
      "price": 5.98,
      "size": "Tall",
      "description": "Elevate your day with this delightful blend."
    },
    {
      "name": "bottled blonde chestnut praline latte",
      "price": 6.44,
      "size": "Tall",
      "description": "Savor the richness of this flavorful combination."
    },
    {
      "name": "bottled blonde doubleshot on ice",
      "price": 6.51,
      "size": "Venti",
      "description": "An exquisite fusion of taste and quality."
    },
    {
      "name": "bottled blonde eggnog latte",
      "price": 4.77,
      "size": "Venti",
      "description": "Aromatic and enticing, a must-try for coffee enthusiasts."
    },
    {
      "name": "bottled blonde flat white",
      "price": 5.56,
      "size": "Grande",
      "description": "A creamy, flavorful treat to energize your day."
    },
    {
      "name": "bottled blonde gingerbread latte",
      "price": 6.16,
      "size": "Grande",
      "description": "Exotic flavors that bring joy with every sip."
    },
    {
      "name": "bottled blonde juniper latte",
      "price": 4.94,
      "size": "Venti",
      "description": "Satisfy your cravings with this delightful creation."
    },
    {
      "name": "bottled blonde peppermint mocha",
      "price": 4.33,
      "size": "Grande",
      "description": "Smooth and aromatic, a delightful coffee experience."
    },
    {
      "name": "bottled blonde peppermint white chocolate mocha",
      "price": 4.08,
      "size": "Grande",
      "description": "Elevate your day with this delightful blend."
    },
    {
      "name": "bottled blonde toasted white chocolate mocha",
      "price": 5.3,
      "size": "Venti",
      "description": "A balanced, invigorating mix of flavors."
    },
    {
      "name": "bottled blonde vanilla bean coconutmilk latte",
      "price": 4.92,
      "size": "Venti",
      "description": "Robust and full-bodied, a true coffee delight."
    },
    {
      "name": "bottled blonde vanilla latte",
      "price": 6.66,
      "size": "Grande",
      "description": "Elevate your day with this delightful blend."
    },
    {
      "name": "bottled caffe americano",
      "price": 5.46,
      "size": "Venti",
      "description": "Elevate your day with this delightful blend."
    },
    {
      "name": "bottled caffe latte",
      "price": 5.7,
      "size": "Tall",
      "description": "Rich and satisfying, a go-to option for coffee lovers."
    },
    {
      "name": "bottled caffe mocha",
      "price": 5.47,
      "size": "Tall",
      "description": "A creamy, flavorful treat to energize your day."
    },
    {
      "name": "bottled cappuccino",
      "price": 6.14,
      "size": "Tall",
      "description": "Delicious blend perfect for any time of the day."
    },
    {
      "name": "bottled caramel brule latte",
      "price": 4.28,
      "size": "Tall",
      "description": "Elevate your day with this delightful blend."
    },
    {
      "name": "bottled caramel frappuccino coffee drink",
      "price": 6.31,
      "size": "Grande",
      "description": "Delicious blend perfect for any time of the day."
    },
    {
      "name": "bottled caramel macchiato",
      "price": 5.1,
      "size": "Venti",
      "description": "Elevate your day with this delightful blend."
    },
    {
      "name": "bottled chestnut praline latte",
      "price": 6.33,
      "size": "Venti",
      "description": "Delicious blend perfect for any time of the day."
    },
    {
      "name": "bottled cinnamon dolce latte",
      "price": 6.85,
      "size": "Grande",
      "description": "A balanced, invigorating mix of flavors."
    },
    {
      "name": "bottled cold brew black sweetened",
      "price": 4.49,
      "size": "Tall",
      "description": "Satisfy your cravings with this delightful creation."
    },
    {
      "name": "bottled cold brew black sweetened frappuccino",
      "price": 4.47,
      "size": "Grande",
      "description": "Bold flavors that awaken your taste buds."
    },
    {
      "name": "bottled cold brew black unsweetened",
      "price": 6.93,
      "size": "Grande",
      "description": "Bold flavors that awaken your taste buds."
    },
    {
      "name": "bottled cold brew black unsweetened frappuccino",
      "price": 4.96,
      "size": "Grande",
      "description": "Aromatic and enticing, a must-try for coffee enthusiasts."
    },
    {
      "name": "bottled cold brew cocoa and honey with cream",
      "price": 5.42,
      "size": "Venti",
      "description": "Aromatic and enticing, a must-try for coffee enthusiasts."
    },
    {
      "name": "bottled cold brew cocoa and honey with cream frappuccino",
      "price": 5.28,
      "size": "Venti",
      "description": "Robust and full-bodied, a true coffee delight."
    },
    {
      "name": "bottled cold brew coffee",
      "price": 5.29,
      "size": "Tall",
      "description": "Robust and full-bodied, a true coffee delight."
    },
    {
      "name": "bottled cold brew coffee with milk",
      "price": 5.56,
      "size": "Grande",
      "description": "A refreshing pick-me-up for any occasion."
    },
    {
      "name": "bottled cold brew vanilla and fig with cream",
      "price": 4.67,
      "size": "Grande",
      "description": "Smooth and aromatic, a delightful coffee experience."
    },
    {
      "name": "bottled cold brew vanilla and fig with cream frappuccino",
      "price": 5.55,
      "size": "Venti",
      "description": "Aromatic and enticing, a must-try for coffee enthusiasts."
    },
    {
      "name": "bottled cold foam cascara nitro",
      "price": 5.38,
      "size": "Venti",
      "description": "Aromatic and enticing, a must-try for coffee enthusiasts."
    },
    {
      "name": "bottled cordusio",
      "price": 6,
      "size": "Venti",
      "description": "Delicious blend perfect for any time of the day."
    },
    {
      "name": "bottled doubleshot coffee smoothie dark chocolate",
      "price": 4.1,
      "size": "Grande",
      "description": "Savor the richness of this flavorful combination."
    },
    {
      "name": "bottled doubleshot coffee smoothie vanilla honey",
      "price": 4.03,
      "size": "Tall",
      "description": "An exquisite fusion of taste and quality."
    },
    {
      "name": "bottled doubleshot energy coffee drink",
      "price": 6.97,
      "size": "Tall",
      "description": "Exotic flavors that bring joy with every sip."
    },
    {
      "name": "bottled doubleshot energy hazelnut drink",
      "price": 6.41,
      "size": "Tall",
      "description": "Bold flavors that awaken your taste buds."
    },
    {
      "name": "bottled doubleshot energy mexican mocha",
      "price": 4.48,
      "size": "Grande",
      "description": "Indulge in a luxurious coffee experience."
    },
    {
      "name": "bottled doubleshot energy mocha drink",
      "price": 4.17,
      "size": "Grande",
      "description": "Exotic flavors that bring joy with every sip."
    }
  ];

  export default inventario;