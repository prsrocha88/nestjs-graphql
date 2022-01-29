import { DefaultNamingStrategy } from "typeorm";

export class NamingStrategy extends DefaultNamingStrategy {
  columnName(
    propertyName: string,
    customName: string,
    embeddedPrefixes: string[],
  ): string {
    if (customName) {
      return customName;
    }
    const columnName = propertyName
      .replace(/(?:([a-z])([A-Z]))|(?:((?!^)[A-Z])([a-z]))/g, '$1_$3$2$4')
      .toLowerCase();
    return columnName;
  }
}