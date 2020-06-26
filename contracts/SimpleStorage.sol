contract SimpleStorage{
    string _message;

    constructor(string src) public{
        _message = src;
    }

    function setMessage(string message) public{
        _message = message;
    }


    function getMessage() public view returns(string){
        return _message;
    }


}


