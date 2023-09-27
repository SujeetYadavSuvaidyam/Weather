// function Click(){
//     let deg = document.getElementById('txt').value;
//     if (deg>=33 && deg <34) {
//         document.write("Chainpur of 33deg")
//     }else if(deg>=34 && deg <35){
//         document.write("Madarpur Of 34deg")
//     }else if(deg>=35 && deg <36){
//         document.write("Admapur Of 35deg")
//      }else if(deg>=36 && deg <37){
//         document.write("Katsa Of 36deg")
//     // }else if(deg>=33 && deg <34){
//     //     document.write("Madarpur Of 40deg")
//     // }else if(deg>=33 && deg <34){
//     //     document.write("Madarpur Of 40deg")
//     // }else if(deg>=33 && deg <34){
//     //     document.write("Madarpur Of 40deg")
//     // }else if(deg>=33 && deg <34){
//     //     document.write("Madarpur Of 40deg")
//     // }else if(deg>=33 && deg <34){
//     //     document.write("Madarpur Of 40deg")
//     }else{
//         document.write("Enter vaild deg")
//     }
// };

let data = [
    {
        id: 1,
        Name: "chainpur",
        deg: 33,
    },
    {
        id: 3,
        Name: "bedwaliya",
        deg: 35,
    },

    {
        id: 4,
        Name: "bansdih",
        deg: 32,
    },
    {
        id: 4,
        Name: "garkha",
        deg: 34,
    },
    {
        id: 5,
        Name: "katsa",
        deg: 33.5,
    },
    {
        id: 6,
        Name: "madarpur",
        deg: 33,
    },
    {
        id: 7,
        Name: "raipura",
        deg: 30,
    }
];

function Click(a) {
    var a = a.value;
    //  console.log(a);

    data.map((b) => {
        if (b.Name === a) {
            document.getElementById('result').innerHTML = "<br>" + b.Name + "<br>" + "<br>" + "<br>" + b.deg + "degree"
        } else {
            console.log("none")
        }
    })
}