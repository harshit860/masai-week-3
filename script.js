var main_array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19
    ,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39
    ,40,41,42,43,44]
var player_array=[]
/* player1    player1   player1*/

// function random(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }


  var min=0;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }


function blue() {
    
    min=rnum;
     var counter=0;
     
    var newval=document.querySelectorAll('.pos')

    for(var a=0;a<=newval.length;a++)
    {
      
        var newv=newval[a];
        
        var rnum=getRandomInt(0,6)
        console.log(rnum)
        if(rnum==1||rnum==6)
        {
        var newv = document.getElementById(rnum)
        newv.setAttribute('class','blue')
        var div_select2 = document.getElementById('blue3')
        div_select2.setAttribute('class','white')
        rnum++;    
        }
       
    }
    
    
}


function red() {
    var rnum=random(44)
console.log(rnum)
    var div_select = document.getElementById(rnum)
   
    div_select.setAttribute('class','red')
    var div_select2 = document.getElementById('red1')
    div_select2.setAttribute('class','white')
}



function green() {
    var div_select = document.getElementById('1')
    div_select.setAttribute('class','green')
    var div_select2 = document.getElementById('green1')
    div_select2.setAttribute('class','white')
}




function yellow() {
    var div_select = document.getElementById('1')
    div_select.setAttribute('class','yellow')
    var div_select2= document.getElementById('yellow1')
    div_select2.setAttribute('class','white')
}



//     var display = document.getElementById("start")

//     for(a=0 ; a <= main_array.length ; a++)
//     {
//         var ele = document.createElement('div');
//         ele.textContent = main_array[a];
//         ele.setAttribute('class','class1')
//         display.appendChild(ele);
//     }
// }

// function delete_start()
// {
//     var display1=document.querySelector('body');
//     var cont=document.getElementById("start");
//     display1.removeChild(cont);
// }

// function random1(number) {
//     return Math.floor(Math.random() * number); 
// }

// function player_1()
// {
//     var count_p1=0;
    
    
//     for(var a = 0 ; a <= 40 ; a++)
//     {
//            player_array[a] = a+1;
//     }
//     console.log(main_array[2])
//     if(main_array[40]=='player1'||main_array[40]=='player2'||
//     main_array[40]=='player3'||main_array[40]=='player4')
//     {
//         alert('fail')
//     }
//     else
//     {
//         if(player_array[40])
//         {
//             main_array[40] = 'player1';
//         }
//     }
//     console.log(main_array)
//     start()
//     random1(6)
    
// }

// /* player2    player2   player2*/

// function player_2()
// {
//     var count_p2=0;

//     for (var b = 2; b < 2 ; b++) {
//           player_array[b] = b+1;
//     }
//     console.log(main_array[3])
//     if(main_array[40]=='player1'||main_array[40]=='player2'||
//     main_array[40]=='player3'||main_array[40]=='player4')
//     {
//         alert('fail')
//     }
//     else
//     {
//         if(player_array[40])
//         {
//             main_array[40] = 'player2';
//         }
//     }
//     start()
    
//     console.log(main_array)
// }

// /* player3    player3   player3*/

// function player_3()
// {
//     var count_p3=0;

//     for (let c = 0; c < 3 ; c++) {
//           player_array[c] = c+1; 
//     }
//     if(main_array[38]=='player1'||main_array[38]=='player2'||
//     main_array[38]=='player3'||main_array[38]=='player4')
//     {
//         alert('fail')
//     }
//     else
//     {
//         if(player_array[38])
//         {
//             main_array[38] = 'player3';
//         }
//     }
//     start()
    
//     console.log(main_array)
// }

// /* player4    player4   player4*/

// function player_4()
// {
//     var count_p4=0;

//     for (var d = 0; d < 3; d++) {
//         player_array[d] = d+1;
//     }
//     if(main_array[40]=='player1'||main_array[40]=='player2'||
//     main_array[40]=='player3'||main_array[40]=='player4')
//     {
//         alert('fail')
//     }
//     else
//     {
//         if(player_array[40])
//         {
//             main_array[40] = 'player4';
//         }
//     }
//     start()
    
//     console.log(main_array)
// }