pragma solidity ^0.8.0;

contract Token {
    // Define the token name and symbol
    string public name = "My Token";
    string public symbol = "MYT";

    // Define the total supply of the token
    uint256 public totalSupply;

    // Mapping of addresses to their token balance
    mapping (address => uint256) public balanceOf;

    // Event for token transfers
    event Transfer(address indexed from, address indexed to, uint256 value);

    // Constructor to initialize the total supply and balance of the token owner
    constructor(uint256 initialSupply) public {
        totalSupply = initialSupply;
        balanceOf[msg.sender] = totalSupply;
    }

    // Function to transfer token from one address to another
    function transfer(address to, uint256 value) public {
        require(balanceOf[msg.sender] >= value, "Insufficient balance");
        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;
        emit Transfer(msg.sender, to, value);
    }
}
