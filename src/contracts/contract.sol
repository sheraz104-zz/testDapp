pragma solidity ^0.4.18;

contract TestContract {
    string public firstName;
    string public lastName;
    address public walletId;
    
    
    function setData(string _firstName, string _lastName, address _walletId) public returns(bool){
        
        firstName = _firstName;
        lastName = _lastName;
        walletId = _walletId;
        return true;
    }
}