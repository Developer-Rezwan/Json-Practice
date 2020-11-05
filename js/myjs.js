$(document).ready(function () {
     show();
     json_data_show();
});

function show() {
     var data = {
          "name": "Rezwan", //evabe o lekha jay
          age: 19,
          isdeveloper: true,
          planguage: ["php", "js"],
          framework: {
               php: "laravel",
               php: "wordpress",
               main: "MVC"
          },

          showdata: function () {
               document.write(this.name);
          }
     }
     // document.write(data.name);
     // document.write("</br>");
     // document.write(data.age);
     // document.write("</br>");
     // document.write(data.isdeveloper);
     // document.write("</br>");
     // document.write(data.planguage);
     // document.write("</br>");
     // document.write(data.framework.php);

     // Nicer niyome o lekha jay 
     //document.write(data["framework"]);


     // function call korar niyom
     // data.showdata()

     //array call korar niyom
     //document.write(data.planguage[1]);

}

function json_data_show() {
     $.getJSON('index.php', function (data) {
          document.write(data.Username);
     });
}