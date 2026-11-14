export class LoginService {
  resetMode = false;

  async logIn(email: string, password: string): Promise<boolean> {
    return email.length > 0 && password.length > 0;
  }
}
