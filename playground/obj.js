var user = {
    userId: -1,
    userName: 'test',
    book:{
        bookId:1,
        bookName:'Gone with wind'
    }
}
var user2 = {

    password: 'password',
    book:{
        publish: '1900-01-02'
    }
}
var book3 = Object.assign({}, user.book,user2.book)
var user3 = Object.assign({},user, user2);
user3.book = book3;

console.log('user3:', user3);