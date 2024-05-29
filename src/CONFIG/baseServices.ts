import { ObjectLiteral, Repository } from "typeorm";
import { mySqlConn } from "../DATABASE/mysql.conn";

export class BaseServices<T extends ObjectLiteral> {
  public repository: Promise<Repository<T>>;

  constructor(entity: new () => T) {
    this.repository = this.initializeRepository(entity);
  }

  private async initializeRepository(entity: new () => T): Promise<Repository<T>> {
    const dataSource = await mySqlConn();
    return dataSource.getRepository(entity);
  }
}
