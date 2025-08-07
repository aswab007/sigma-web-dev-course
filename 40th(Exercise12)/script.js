let colorss = {
  color: [
    "red", "yellow", "green", "pink", "aqua", "brown", "blue", "black",
    "orange", "purple", "gold", "silver", "gray", "magenta", "lime",
    "indigo", "cyan", "navy", "maroon", "teal", "olive", "coral", "salmon",
    "violet", "plum", "turquoise", "lavender", "beige", "chocolate", "crimson",
    "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen",
    "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred",
    "darksalmon", "darkseagreen", "darkslateblue", "darkslategray",
    "deeppink", "deepskyblue", "dodgerblue", "firebrick", "forestgreen",
    "gainsboro", "ghostwhite", "hotpink", "khaki", "lightblue", "lightcoral",
    "lightcyan", "lightgoldenrodyellow", "lightgreen", "lightpink",
    "lightsalmon", "lightskyblue", "lightslategray", "lightsteelblue",
    "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple",
    "mediumseagreen", "mediumslateblue", "mediumspringgreen",
    "mediumturquoise", "mediumvioletred", "mistyrose", "moccasin",
    "navajowhite", "oldlace", "orangered", "orchid", "palegoldenrod",
    "palegreen", "paleturquoise", "palevioletred", "papayawhip",
    "peachpuff", "peru", "powderblue", "rosybrown", "royalblue",
    "saddlebrown", "sandybrown", "seagreen", "seashell", "sienna",
    "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue",
    "tan", "thistle", "tomato", "wheat", "whitesmoke", "yellowgreen"
  ]
};


let boxes=document.querySelectorAll(".boxx")

boxes.forEach(e => {
    let index=Math.floor(Math.random()*colorss.color.length)
    e.style.backgroundColor=colorss.color[index]
});