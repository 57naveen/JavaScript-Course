
     //get the score from the loacl storage and stored in the value before storing converting the JSON string into object using JSON.parse()
     let score= JSON.parse(localStorage.getItem('score'));

     //checking if score is null. if it is null set the default value to the score.
     if(score === null){
      score ={
         wins:0,
         losses:0,
         ties:0
      }

     };

      //calling updateScoreElement function
      updateScoreElement();



      function playgame(playerMove)
      {
            //calling function and storing the return value from the funtcion in this variable
            const computerMove= pickComputerMove();
            let result = '';
                   
               if(playerMove === 'Scissors')
                  {
                     if(computerMove === 'Rock')
                     {
                        result='You lose.'
                     }else if(computerMove === 'Paper')
                     {
                        result ='You win.'
                     }else if(computerMove === 'Scissors')
                     {
                        result='Tie.'
                     }
                  }
                     else if(playerMove==='Paper')
                        {
                           if(computerMove === 'Rock')
                              {
                                 result='You win.'
                              }else if(computerMove === 'Paper')
                              {
                                 result ='Tie.'
                              }else if(computerMove === 'Scissors')
                              {
                                 result='You lose.'
                              }
                        }
                        else if(playerMove === 'Rock')
                           {
                              if(computerMove === 'Rock')
                              {
                                 result='Tie.'
                              }else if(computerMove === 'Paper')
                              {
                                 result ='You lose.'
                              }else if(computerMove === 'Scissors')
                              {
                                 result='You win.'
                              }

                           }

                //updating the score
                 if(result === 'You win.')
                 {
                     score.wins +=1;
                 }  else if(result === 'You lose.')
                 {
                  score.losses +=1;
                 } else if(result === 'Tie.')
                 {
                  score.ties +=1;
                 }  
                 
              
             //save the score to the localstorage before storing converting the score object to JSON string using JSON.stringfy because the localstorage only support the string    
             localStorage.setItem('score',JSON.stringify(score));    
                 
            //calling updateScoreElement function
             updateScoreElement();

             document.querySelector('.js-result').innerHTML=result;

             document.querySelector('.js-moves').innerHTML=`You
     <img src="/images/${playerMove}-emoji.png" class="move-icon">
     <img src="/images/${computerMove}-emoji.png" class="move-icon">
     Computer`;
      
            
      }
       

      function updateScoreElement()
      {
         document.querySelector('.js-score')
      .innerHTML=`wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        
      }

         function pickComputerMove()
               {
                  const randomNumber=Math.random();
               
                  let computerMove = '';

                  if( randomNumber>=0 && randomNumber< 1/3 )
                     {
                           computerMove='Rock';
                     } else if( randomNumber>=1/3 && randomNumber <2/3 )
                     {
                        computerMove='Paper'
                     }else if( randomNumber>=2/3 && randomNumber<1 )
                     {
                        computerMove='Scissors'
                     }

                  return computerMove;
               }
