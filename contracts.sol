pragma solidity ^0.5.11;

contract src1{
    
    mapping(address=>uint) balance;
    
    function invest() external payable{
        if(msg.value<1){
            revert();
        }
        
        balance[msg.sender]+=1;
    }
    
    function balanceof() external view returns(uint){
        return address(this).balance;
    }
    /*
    uint public balance =0;
    event Balance(
        string message
        );
        
    function invest() external payable{
        balance+=msg.value;
        emit Balance( "Balance updated");
    }
    */
    function payout(address payable recipient,uint weight, uint category) external{
        
        uint cat_val;
        if(category==1){
            cat_val=100;
        }
        
        else if(category==2){
            cat_val=150;
        }
        else if(category==3){
            cat_val==200;
        }
        
        else{
            cat_val=50;
        }
        
        
        if(weight<=1){
            recipient.transfer(weight*cat_val);
        }
        else if(weight>1 && weight<=5){
            recipient.transfer(weight*cat_val);
        }
        else if(weight>5){
            recipient.transfer(weight*cat_val);
            
        }
    }
    
    
    
}