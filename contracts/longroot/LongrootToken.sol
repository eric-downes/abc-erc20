/**
 * Copyright (C) Longroot Inc. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * @summary: Longroot ERC20 contract for ICO portal demonstration
 * @author: Atato Co., Ltd.
 */

pragma solidity >=0.5.6;

import "./../openzeppelin/token/ERC20/ERC20Detailed.sol";
import "./../openzeppelin/token/ERC20/ERC20Burnable.sol";
import "./../openzeppelin/token/ERC20/ERC20Pausable.sol";
import "./../openzeppelin/token/ERC20/ERC20Mintable.sol";

/**
 * @title LongrootToken is a detailed, burnable, mintable, pausable ERC20 token
 * Based on OpenZeppelin ERC20Token
 * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md 
 * @dev see https://openzeppelin.org/api/docs/token_ERC20_ERC20.html 
 */
contract LongrootToken is ERC20Mintable, ERC20Pausable, ERC20Burnable, ERC20Detailed {
    constructor(string memory name, string memory symbol, uint8 decimals) ERC20Detailed(name, symbol, decimals) public {
    }
} 
 