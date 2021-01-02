import type {App} from "vue";

/**
 * Cookies config
 */
export interface CookiesConfig {
  expireTimes: string | number | Date,
  path?: string,
  domain?: string,
  secure?: boolean,
  sameSite?: string
}

export interface VueCookies {
  /**
   * Set global config
   */
  config(config: CookiesConfig): void;

  /**
   * Set a cookie
   */
  set(keyName: string,
    value: any,
    expireTimes?: string | number | Date,
    path?: string,
    domain?: string,
    secure?: boolean,
    sameSite?: string): this;

  /**
   * Get a cookie
   */
  get(keyName: string): any;

  /**
   * Remove a cookie
   */
  remove(keyName: string, path?: string, domain?: string): boolean;

  /**
   * Exist a cookie name
   */
  isKey(keyName: string): boolean;

  /**
   * Get All cookie name
   */
  keys(): string[];
}

declare const _default : {
  CookieConfig: CookiesConfig;
  VueCookies: VueCookies;
};

export default _default;
