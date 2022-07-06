export interface ZscyAccount {
  readonly qq: number; // QQ 号
  readonly stuNum: string; // 账号
  readonly idNum: string; // 密码
}

export interface Config {
  zscyAccounts: ZscyAccount[];
}
