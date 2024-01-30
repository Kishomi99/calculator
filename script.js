
let outputScreen = document.getElementById('output-screen');
            function display(num){
                console.log("type numbers or arithmetic operator",num);
                outputScreen.value += num;    
            }
            function Clear(){
                console.log("clear numbers");
                outputScreen.value="";
            }
            function del(){
                console.log("delete numbers");
                outputScreen.value=outputScreen.value.slice(0,-1);
            }
            function Calculator(){
                try{
                    outputScreen.value= eval(outputScreen.value); 
                    console.log("correct final result",outputScreen.value);
                }
                catch(err)
                {
                    alert("Invalid!!!!!!!!!!!!!!")
                    console.log("incorrectly put numbers");
                    Clear();
                }       
            }

            