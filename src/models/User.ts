export class User {
  private mail: string;
  private userName: string;
  private password: string;

  constructor(
    mail: string = "",
    password: string = "",
    userName: string = ""
  ) {
    this.mail = mail;
    this.userName = userName;
    this.password = password;
  }

  public getMail() {
    return this.mail;
  }

  public setMail(mail: string) {
    return new User(mail, this.userName, this.password);
  }

  public getUserName() {
    return this.userName;
  }

  public setUserName(userName: string) {
    return new User(this.mail, userName, this.password)
  }

  public getPassword() {
    return this.password;
  }

  public setPassword(password: string) {
    return new User(this.mail, this.userName, password);
  }
}

