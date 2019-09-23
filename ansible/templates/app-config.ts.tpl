export class AppConfig {
  public static API_ENDPOINT = 'http://{{ ansible_eth0.ipv4.address }}';
  public static START_SESSON  = '/sessions/';
  public static API_VERSION = '/api';

  public static JANUS_DEV = 'https://{{ ansible_eth0.ipv4.address }}/janus';

  public static JANUS_PROD = 'https://{{ ansible_eth0.ipv4.address }}/janus';

}
