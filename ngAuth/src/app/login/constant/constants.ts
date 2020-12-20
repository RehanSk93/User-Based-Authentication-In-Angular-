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


  public static URL_MAPPING = {
      'admin': {
          'dashboard': 'admin-dashboard',
          'profile': 'admin-profile'
      },
      'candidate': {
          'dashboard': 'candidate-dashboard',
          'profile': 'candidate-profile'
      },
      'hr': {
          'dashboard': 'hr-dashboard',
          'profile': 'hr-profile'
      }
  };


}
