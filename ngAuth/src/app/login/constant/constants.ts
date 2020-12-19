export class CONSTANTS {
  public static isProdMode = false;
  public static hostURL: string = CONSTANTS.getHostURL();
  public static ROLES: string = 'roles';


  private static getHostURL(): string {
    var returnString: string = "http://localhost:3000";

    if(CONSTANTS.isProdMode) {
      returnString = "https://jsonplaceholder.typicode.com/posts";
    }

    return returnString;
  }
}
