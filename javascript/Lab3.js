// A prompt box is used to prompt users to input a value before entering a page
//user_name = window.prompt("Please enter your name", "Type your name here");
//document.write(user_name);

function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";

//A prompt box is used to prompt users to input a value before entering a page
user_name = window.prompt(a,b);
message = "<h1>Hello, welcome to my webpage," + user_name + "!</h1>"

return message
}


function webmap_table()
{
  document.write("<table width=90%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    if (row<2) {
      document.write("<td>"+ webmaps[row][column] + "</td>")
      webmaps.fontColor = 'gray';
    }
      {
        document.write("<td>"+ webmaps[row][column] + "</td>");
      }
   document.write("</tr>");
  }
  document.write("</table>");
}


var webmaps =
 [
   ["Urban Planning",
   "https://www.nationalgeographic.org/article/urban-planning/",
    "Explanation of what Urban Plannig is and its effect in society"
    ],
   ["Urban Heat Island Effect",
   "https://www.epa.gov/heatislands",
    "Definition and issues regarding Urban Heat Island"
    ],
    ["Transportation and Affordable Housing",
    "https://www.maulfoster.com/news/using-gis-to-identify-affordable-housing-near-transit-stations/",
    "Relation between affordable housing and Transportation"
   ]
 ];

function calculate()
   {
     var length =  document.getElementById("length").value;
     var width =  document.getElementById("width").value;
     var area = length * width;
    document.getElementById("area").value = area;
   }
