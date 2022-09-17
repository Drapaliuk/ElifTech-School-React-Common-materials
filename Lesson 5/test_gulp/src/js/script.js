const name = 'Jack';
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showName() {
      console.log(this.name)
  }
}

const users = [new User('Jack', 32), new User('Aragorn', 72), new User('Arthur', 55)]


const pureFunc = (users) => {
    const usersCopy = [...users]
    return usersCopy.map(user => user.isViewed = true)
}
