const list = document.getElementById('list');
document.getElementById('player_1').addEventListener('click',function(){
 
    datapass('player_1_name');
    this.disabled = true;
    this.innerText = 'Selected';

  
});
document.getElementById('player_2').addEventListener('click',function(){
    datapass('player_2_name');
    this.disabled = true;
    this.innerText = 'Selected';
});
document.getElementById('player_3').addEventListener('click',function(){
    datapass('player_3_name');
    this.disabled = true;
    this.innerText = 'Selected';
  
});
document.getElementById('player_4').addEventListener('click',function(){
    datapass('player_4_name');
    this.disabled = true;
    this.innerText = 'Selected';
});
document.getElementById('player_5').addEventListener('click',function(){
    datapass('player_5_name');
    this.disabled = true;
    this.innerText = 'Selected';
  
});
document.getElementById('player_6').addEventListener('click',function(){
    datapass('player_6_name');
    this.disabled = true;
    this.innerText = 'Selected';
});

document.getElementById('calculate').addEventListener('click',function(){

    const selectedPlayerNumber = list.children.length;
    const playerAmount = document.getElementById('player_amount').value;
     document.getElementById('playerExpn').innerText =selectedPlayerNumber*playerAmount;


});
document.getElementById('calcTotal').addEventListener('click',function(){

    const managerAmount = document.getElementById('manager').value;
    const coachAmount = document.getElementById('coach').value;
    const playerAmount = document.getElementById('playerExpn').innerText;

    document.getElementById('total').innerText=parseFloat(managerAmount)+parseFloat(coachAmount)+parseFloat(playerAmount);
    

});

function datapass(data){
    
    const playerName = document.getElementById(data).innerText;
    const li = document.createElement('li');
    li.innerText =playerName;
    list.appendChild(li);
}