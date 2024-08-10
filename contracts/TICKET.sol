// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.9;

// Framework for ERC721 Token
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyTicketToken is ERC721 {
    constructor() ERC721("MyTicketToken", "MTK") {}
}