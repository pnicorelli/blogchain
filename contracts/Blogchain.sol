pragma solidity ^0.4.17;

contract Blogchain {
  address public owner;

  struct User{
    string name;
    uint posts;
    uint tokens;
  }

  struct Post{
    string author;
    string text;
    uint timestamp;
  }

  Post[] posts;
  mapping(address => User) public users;
  address[] public usersAddr;

  function Blogchain() public {
    owner = msg.sender;
  }

  function getMe() public view returns (string o_name, uint o_posts, uint o_tokens){
    o_name  = users[msg.sender].name;
    o_posts = users[msg.sender].posts;
    o_tokens= users[msg.sender].tokens;
  }

  function isUser() public view returns (bool) {
    if( keccak256(users[msg.sender].name) == keccak256("") ){
      return false;
    } else {
      return true;
    }
  }

  function subscribe(string name) public {
    users[msg.sender] = User(name, 0, 0);
    usersAddr.push(msg.sender);
  }

  function buyToken() public payable returns (bool){
    if( keccak256(users[msg.sender].name) == keccak256("") ){
      return false;
    } else {
      owner.transfer(msg.value);
      users[msg.sender].tokens = users[msg.sender].tokens + (msg.value / 1 ether);
      return true;
    }
  }

  function writePost(string text) public returns (bool){
    if( users[msg.sender].tokens > 0 ){
      posts.push ( Post(users[msg.sender].name, text, now) );
       users[msg.sender].tokens--;
       users[msg.sender].posts++;
      return true;
    } else {
      return false;
    }
  }

  function howManyUsers() public view returns (uint){
    return usersAddr.length;
  }

  function getUsername(uint id) public view returns (string){
    return users[usersAddr[id]].name;
  }

  function howManyPosts() public view returns (uint){
    return posts.length;
  }

  function getPost(uint id) public view returns (string o_author, string o_text, uint o_date){
    o_author = posts[id].author;
    o_text = posts[id].text;
    o_date = posts[id].timestamp;
  }
}
